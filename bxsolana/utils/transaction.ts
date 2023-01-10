import { Keypair, Transaction } from "@solana/web3.js"
import config from "./config.js"
import { TransactionMessage } from "../proto/api_pb"

export function signTx(base64EncodedTx: string): Transaction {
    const tx = txFromBase64(base64EncodedTx)
    const pair: Keypair = Keypair.fromSecretKey(config.WalletSecretKey)
    tx.partialSign(pair)
    return tx
}

export function signTxMessage(
    txMessage: TransactionMessage
): TransactionMessage {
    const signedTx = signTx(txMessage.getContent())
    txMessage.setContent(txToBase64(signedTx))
    return txMessage
}

export type SubmitTransactionResponse = {
    signature: string
    openOrdersAccount: string
}

function txFromBase64(base64EncodedTx: string): Transaction {
    const buff = Buffer.from(base64EncodedTx, "base64")
    return Transaction.from(buff)
}

function txToBase64(transaction: Transaction): string {
    const buff = transaction.serialize()
    return buff.toString("base64")
}
