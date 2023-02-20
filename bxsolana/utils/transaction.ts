import { Keypair, Transaction, VersionedTransaction } from "@solana/web3.js"
import { TransactionMessage } from "../proto/messages/api"

export function signTx(
    base64EncodedTx: string,
    privateKey: Keypair
): VersionedTransaction {
    const tx = txFromBase64(base64EncodedTx)
    tx.sign([privateKey])
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

function txFromBase64(base64EncodedTx: string): VersionedTransaction {
    const buff = Buffer.from(base64EncodedTx, "base64")
    const transaction = VersionedTransaction.deserialize(buff)
    return transaction
}

export function txToBase64(transaction: VersionedTransaction): string {
    const serializedTransaztionBytes = transaction.serialize()
    const buff = Buffer.from(serializedTransaztionBytes)
    return buff.toString("base64")
}
