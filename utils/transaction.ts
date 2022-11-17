import { Keypair, Transaction } from "@solana/web3.js"
import config from "./config.js"
import {$} from "../bxsolana/proto/messages/api/TransactionMessage";
import TransactionMessage = $.api.TransactionMessage;

function txFromBase64(base64EncodedTx: string): Transaction {
    const buff = Buffer.from(base64EncodedTx, "base64")
    return Transaction.from(buff)
}

function txToBase64(tx: Transaction): string {
    const buff = tx.serializeMessage()
    return buff.toString("base64")
}

export function signTx(base64EncodedTx: string): Transaction {
    const tx = txFromBase64(base64EncodedTx)
    const pair: Keypair = Keypair.fromSecretKey(config.WalletSecretKey)
    tx.partialSign(pair)
    return tx
}

export function signTxMessage(txMessage: TransactionMessage): TransactionMessage {
    const tx = txFromBase64(txMessage.content)
    const pair: Keypair = Keypair.fromSecretKey(config.WalletSecretKey)
    tx.partialSign(pair)

    return {
        content: txToBase64(tx),
        isCleanup: txMessage.isCleanup
    }
}
export type SubmitTransactionResponse = {
    signature: string
    openOrdersAccount: string
}
