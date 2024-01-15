import { Connection, Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_NY_WS,
    PostSubmitRequestEntry, PostSubmitResponse,
    signTx,
    signTxMessage,
    WsProvider
} from "../bxsolana"
import { txToBase64 } from "../bxsolana/utils/transaction"

const httpHeaders = { }
const connection = new Connection('https://mainnet.helius-rpc.com/?api-key=88e7c870-b0e3-4a59-b80f-8d78f01e5e4a',
    {httpHeaders});

const config = loadFromEnv()

const provider = new WsProvider(
    config.authHeader,
    config.privateKey.toString(),
    MAINNET_API_NY_WS
    // LOCAL_API_WS
)

type RequestPair = {
    tPromise: Promise<PostSubmitResponse>;
    hPromise: Promise<string>;
    tBlockNumber: number;
    hBlockNumber: number;
};
let blx_win = 0;
let helius_win = 0;
let equal = 0;
let total_diff = 0;
const noOfComparisons = 10;
const dataArray: { diff: number; trader_api_slot: number; helius_slot: number; }[] = [];
await provider.connect()

function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function submitTx() {
    const config = loadFromEnv()
    const privateKey = Keypair.fromSecretKey(
        base58.decode(config.privateKey.toString())
    )
    const requestPairs: RequestPair[] = []
    const BONK = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
    for (let i = 1; i <= noOfComparisons; i++) {
        const resHelius = await provider.postTradeSwap({
            ownerAddress: config.publicKey,
            inToken: "USDC",
            outToken: BONK,
            inAmount: 0.00012,
            slippage: 30,
            project: "P_RAYDIUM",
        })

        const resTraderAPI = await provider.postTradeSwap({
            ownerAddress: config.publicKey,
            inToken: "USDC",
            outToken: BONK,
            inAmount: 0.00011,
            slippage: 30,
            project: "P_RAYDIUM",
        })

        const serializedTransactionsTraderAPI = resTraderAPI.transactions.map((tx) => signTxMessage(
            tx,
            privateKey,
        ));


        const serializedTransactions = resHelius.transactions.map((tx) => signTxMessage(
            tx,
            privateKey,
        ));

        const tx = serializedTransactionsTraderAPI.pop()
        let txContent = "";
        if (tx) {
            txContent = tx.content;
        }

        const txH = serializedTransactions.pop()
        let txHContent = "";
        if (txH) {
            txHContent = txH.content;
        }
        const hPromise = connection.sendEncodedTransaction(txHContent, {
            preflightCommitment: 'confirmed',
        });
        const tPromise = provider.postSubmit({
            transaction: {
                content: txContent,
                isCleanup: false,
            },
            skipPreFlight: true,
        })
        const newPair: RequestPair = {
            tPromise,
            hPromise,
            hBlockNumber : 0,
            tBlockNumber : 0,
        };
        requestPairs.push(newPair);
    } // for loop
    const allResults = []
    console.log("sleeping for ", noOfComparisons * 500 , " millis ")
    await sleep(noOfComparisons * 500);
    for (const requestPair of requestPairs) {
        console.log("waiting for tx from helius")
        const hSignature = await requestPair.hPromise
        console.log("waiting for tx from trader api")
        const tSignature = await requestPair.tPromise
        await connection.confirmTransaction(hSignature);
        await connection.confirmTransaction(tSignature.signature);
        allResults.push({
            tResult: tSignature,
            hResult: hSignature,
            tBlockNumber: requestPair.tBlockNumber,
            hBlockNumber: requestPair.hBlockNumber,
        })
    }


    for (const res of allResults) {
        const tBlockNumber = await getBlockNumber(res.tResult.signature)
        if (tBlockNumber) {
            res.tBlockNumber = tBlockNumber
        }
        const hBlockNumber = await getBlockNumber(res.hResult)
        if (hBlockNumber) {
            res.hBlockNumber = hBlockNumber
        }

        if (res.tBlockNumber < res.hBlockNumber) {
            blx_win++
        } else if (res.tBlockNumber > res.hBlockNumber) {
            helius_win++
        } else {
            equal++
        }

        total_diff += res.tBlockNumber - res.hBlockNumber

        dataArray.push({
            diff : res.tBlockNumber - res.hBlockNumber,
            trader_api_slot: res.tBlockNumber,
            helius_slot: res.hBlockNumber
        })

    }

}

async function getBlockNumber(signature: string) {
    const transactionInfo = await connection.getTransaction(signature, {
        commitment: 'confirmed',
    });

    const blockNumber = transactionInfo?.slot;

    if (blockNumber !== undefined) {
        // console.log(`Transaction with signature ${signature} confirmed in block number ${blockNumber}`);
    } else {
        // console.log(`Transaction with signature ${signature} not found or not confirmed yet.`);
    }

    return blockNumber;
}

await submitTx()
console.table(dataArray);
console.log("blx_win : " + blx_win)
console.log("blx_win % : " + blx_win * 100 / noOfComparisons)
console.log("helius_win : " + helius_win)
console.log("helius_win % : " + helius_win * 100 / noOfComparisons)
console.log("equal : " + equal)
console.log("equal % : " + equal * 100 / noOfComparisons)
console.log("total_diff on avg(block distance): " + total_diff / noOfComparisons)
console.log("numOfComparisons : " + noOfComparisons)
process.exit(0);