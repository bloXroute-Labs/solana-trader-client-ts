import { Connection, Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_NY_WS,
    // MAINNET_API_UK_WS,
    PostSubmitRequestEntry, PostSubmitResponse,
    signTx,
    signTxMessage,
    WsProvider
} from "../bxsolana"
import { randomInt } from "crypto"

const httpHeaders = { }
const endpoint = 'https://proud-fabled-crater.solana-mainnet.quiknode.pro/e3bfb432b5b982fb3e296b8fd1ec3a2d91124d76/'
// const endpoint = 'https://mainnet.competitor-rpc.com/?api-key=88e7c870-b0e3-4a59-b80f-8d78f01e5e4a'
const connection = new Connection(
    endpoint,
    {httpHeaders});

const config = loadFromEnv()

const provider = new WsProvider(
    config.authHeader,
    config.privateKey.toString(),
    MAINNET_API_NY_WS
    // MAINNET_API_UK_WS,
    // LOCAL_API_WS
)

type RequestPair = {
    tPromise: Promise<PostSubmitResponse>;
    hPromise: Promise<string>;
    tBlockNumber: number;
    hBlockNumber: number;
    tSignature: string;
    hSignature: string;
};
let blx_win = 0;
let competitor_win = 0;
let equal = 0;
let total_diff = 0;
const noOfComparisons = 100;
const dataArray: { diff: number; trader_api_slot: number; competitor_slot: number; tSignature: string, hSignature: string}[] = [];
console.log("connecting to trader api")
await provider.connect()
console.log("connected to trader api")
function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomNumber(): number {

    const randomValue = Math.random();
    const minValue = 1.00;
    const maxValue = 2.00;
    const randomInRange = minValue + (randomValue * (maxValue - minValue));
    // console.log("randomInRange : ", randomInRange)
    return randomInRange;
}

async function submitTx() {
    const config = loadFromEnv()
    const privateKey = Keypair.fromSecretKey(
        base58.decode(config.privateKey.toString())
    )
    const requestPairs: RequestPair[] = []
    const BONK = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
    for (let i = 1; i <= noOfComparisons; i++) {
        const rescompetitor = await provider.postTradeSwap({
            ownerAddress: config.publicKey,
            inToken: BONK,
            outToken: "USDC",
            inAmount: getRandomNumber(),
            slippage: 30,
            project: "P_RAYDIUM",
        })

        const resTraderAPI = await provider.postTradeSwap({
            ownerAddress: config.publicKey,
            inToken: BONK,
            outToken: "USDC",
            inAmount: getRandomNumber(),
            slippage: 30,
            project: "P_RAYDIUM",
        })

        const serializedTransactionsTraderAPI = resTraderAPI.transactions.map((tx) => signTxMessage(
            tx,
            privateKey,
        ));


        const serializedTransactions = rescompetitor.transactions.map((tx) => signTxMessage(
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
            preflightCommitment: 'processed',

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
            tSignature: "",
            hSignature: "",
        };
        requestPairs.push(newPair);
        console.log("submitted tx to trader api and competitor : " + i)
    } // for loop
    const allResults = []
    const wait = 60000
    console.log("sleeping for ", wait , " millis ")
    await sleep(wait);
    let tSignature
    for (const requestPair of requestPairs) {
        console.log("waiting for tx from competitor")
        let hSignature = ""
        for (let i = 0; i < 10; i++) {
            try {
                hSignature = await requestPair.hPromise
                break
            } catch (e) {
                await sleep(10000)
                console.log(e)
            }
        }
        let tSignature : PostSubmitResponse = {signature: ""}
        for (let i = 0; i < 10; i++) {
            try {
                tSignature = await requestPair.tPromise
                break
            } catch (e) {
                await sleep(10000)
                console.log(e)
            }
        }
        console.log("waiting for tx from trader api")
        for (let i = 0; i < 10; i++) {
            try {
                await connection.confirmTransaction(hSignature)
                break
            } catch (e) {
            await sleep(10000)
            console.log(e)
            }
        }
        for (let i = 0; i < 10; i++) {
            try {
                await connection.confirmTransaction(tSignature.signature)
                break
            } catch (e) {
                await sleep(10000)
                console.log(e)
            }
        }

        allResults.push({
            tResult: tSignature,
            hResult: hSignature,
            tSignature: tSignature.signature,
            hSignature: hSignature,
            tBlockNumber: requestPair.tBlockNumber,
            hBlockNumber: requestPair.hBlockNumber
        })
    }


    for (const res of allResults) {
        const tBlockNumber = await getBlockNumber(res.tResult.signature)
        if (tBlockNumber) {
            if (tBlockNumber == -1) {
                continue
            }
            res.tBlockNumber = tBlockNumber
        }

        const hBlockNumber = await getBlockNumber(res.hResult)
        if (hBlockNumber) {
            if (hBlockNumber == -1) {
                continue
            }

            res.hBlockNumber = hBlockNumber
        }

        if (res.tBlockNumber < res.hBlockNumber) {
            blx_win++
        } else if (res.tBlockNumber > res.hBlockNumber) {
            competitor_win++
        } else {
            equal++
        }

        total_diff += res.tBlockNumber - res.hBlockNumber

        dataArray.push({
            diff : res.tBlockNumber - res.hBlockNumber,
            trader_api_slot: res.tBlockNumber,
            competitor_slot: res.hBlockNumber,
            tSignature: res.tSignature,
            hSignature: res.hSignature,
        })

    }

}

async function getBlockNumber(signature: string) {
    for (let i = 0; i < 2; i++) {
        try {
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
        } catch (e) {
            await sleep(10000)
            console.log(e)
        }
    }

    return -1
}

await submitTx()
console.table(dataArray);
console.log("endpoint : " + endpoint)
console.log("blx_win : " + blx_win)
console.log("blx_win % : " + blx_win * 100 / noOfComparisons)
console.log("competitor_win : " + competitor_win)
console.log("competitor_win % : " + competitor_win * 100 / noOfComparisons)
console.log("equal : " + equal)
console.log("equal % : " + equal * 100 / noOfComparisons)
console.log("total_diff on avg(block distance): " + total_diff / noOfComparisons)
console.log("numOfComparisons : " + noOfComparisons)
process.exit(0);