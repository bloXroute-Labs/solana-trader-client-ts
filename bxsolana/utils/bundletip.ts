import {
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
    MessageCompiledInstruction,
    VersionedTransaction,
    SystemProgram,
} from "@solana/web3.js"
// check documentation for latest tip wallet, and how to send tip transactions
// https://docs.bloxroute.com/solana/trader-api-v2/front-running-protection-and-transaction-bundle
const TRADER_API_TIP_WALLET = "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function CreateTraderAPITipInstruction(
    senderAddress: PublicKey,
    tipAmount: number
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
    tipAmount: number
): Transaction {
    const tipAddress = new PublicKey(TRADER_API_TIP_WALLET)

    return new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: senderAddress,
            toPubkey: tipAddress,
            lamports: tipAmount,
        })
    )
}
