import { Keypair, Transaction } from "@solana/web3.js"
import config from "./config.js"

function txFromBase64(base64EncodedTx: string): Transaction {
    const buff = Buffer.from(base64EncodedTx, "base64")
    return Transaction.from(buff)
}

export function signTx(base64EncodedTx: string): Transaction {
    const tx = txFromBase64(base64EncodedTx)
    const pair: Keypair = Keypair.fromSecretKey(config.WalletSecretKey)
    tx.partialSign(pair)
    return tx
}

export type SubmitTransactionResponse = {
    signature: string
    openOrdersAccount: string
}
