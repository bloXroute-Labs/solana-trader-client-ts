import { Keypair, Transaction } from "@solana/web3.js"
import { TransactionMessage } from "../proto/messages/api"

export function signTx(
    base64EncodedTx: string,
    privateKey: Keypair
): Transaction {
    const tx = txFromBase64(base64EncodedTx)
    tx.partialSign(privateKey)
    return tx
}

export function signTxMessage(
    txMessage: TransactionMessage,
    privateKey: Keypair
): TransactionMessage {
    const signedTx = signTx(txMessage.content, privateKey)
    txMessage.content = txToBase64(signedTx)
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
