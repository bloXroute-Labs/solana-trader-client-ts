import {
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
    MessageCompiledInstruction,
    VersionedTransaction,
    SystemProgram
} from "@solana/web3.js"

const TRADER_API_TIP_WALLET = "AFT8VayE7qr8MoQsW3wHsDS83HhEvhGWdbNSHRKeUDfQ"

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function CreateTraderAPITipInstruction(
    senderAddress: PublicKey,
    tipAmount: number,
): TransactionInstruction {
    const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

    return SystemProgram.transfer({
        fromPubkey: senderAddress,
        toPubkey: tipAddress,
        lamports: tipAmount,
    })
}

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function CreateTraderAPITipTransaction(
    senderAddress: PublicKey,
    tipAmount: number,
): Transaction {
    const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

    return new Transaction().add((SystemProgram.transfer({
        fromPubkey: senderAddress,
        toPubkey: tipAddress,
        lamports: tipAmount,
    })))
}


