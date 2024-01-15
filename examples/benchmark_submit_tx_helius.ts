import { Connection, Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_NY_WS,
    PostSubmitRequestEntry,
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

await provider.connect()
async function submitTx() {
    const config = loadFromEnv()
    const privateKey = Keypair.fromSecretKey(
        base58.decode(config.privateKey.toString())
    )

    const BONK = "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"
    const resHelius = await provider.postTradeSwap({
        ownerAddress: config.publicKey,
        inToken: "USDC",
        outToken: BONK,
        inAmount: 0.00012,
        slippage: 0.1,
        project: "P_RAYDIUM",
    })

    const resTraderAPI = await provider.postTradeSwap({
        ownerAddress: config.publicKey,
        inToken: "USDC",
        outToken: BONK,
        inAmount: 0.00011,
        slippage: 0.1,
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
    const traderAPISignaturePromise = provider.postSubmit({
        transaction: {
            content: txContent,
            isCleanup: false,
        },
        skipPreFlight: true,
    })
    const txH = serializedTransactions.pop()
    let txHContent = "";
    if (txH) {
        txHContent = txH.content;
    }
    const heliusSignaturePromise = connection.sendEncodedTransaction(txHContent, {
        preflightCommitment: 'confirmed',
    });

    const traderAPIResponse = await traderAPISignaturePromise;

    const heliusResponse = await heliusSignaturePromise;
    const signatures = [traderAPIResponse.signature, heliusResponse]
    // const signatures = await Promise.all(
    //     serializedTransactions.map(async (serializedTransaction) => {
    //         const signature = await connection.sendRawTransaction(Buffer.from(serializedTransaction.content), {
    //             preflightCommitment: 'singleGossip',
    //         });
    //         return signature;
    //     })
    // );

    // const promises = [heliusSignaturePromise, traderAPISignaturePromise];
    // const signatures = await Promise.all(promises);
    // for (const signature of signatures) {
    //     signature.
    // }

    console.log('Transactions sent with signatures:', signatures);

    // Wait for confirmation of all transactions
    const confirmations = await Promise.all(
        signatures.map(async (signature) =>
            await connection.confirmTransaction(signature)));
    console.log('All transactions confirmed:', confirmations);


   const blockNumbers = await Promise.all(
        signatures.map(async (signature) => await getBlockNumber(signature))
    );

   const tBlockNumber = await getBlockNumber(traderAPIResponse.signature)
   const hBlockNumber = await getBlockNumber(heliusResponse)

    console.log('tBlockNumber:', tBlockNumber);
    console.log('hBlockNumber:', hBlockNumber);
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
