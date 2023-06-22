import {
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
    MessageCompiledInstruction,
    VersionedTransaction,
} from "@solana/web3.js"

const BX_MEMO_MARKER_MSG = "Powered by bloXroute Trader Api"
const TRADER_API_MEMO_PROGRAM = "HQ2UUt18uJqKaQFJhgV9zaTdQxUZjNrsKFgoEDquBkcx"

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function createTraderAPIMemoInstruction(
    msg: string
): TransactionInstruction {
    if (msg == "") {
        msg = BX_MEMO_MARKER_MSG
    }
    return new TransactionInstruction({
        keys: [],
        programId: new PublicKey(TRADER_API_MEMO_PROGRAM),
        data: Buffer.from(msg),
    })
}

// createTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function createCompiledMemoInstruction(
    programIdIndex: number
): MessageCompiledInstruction {
    return {
        accountKeyIndexes: [],
        programIdIndex: programIdIndex,
        data: Buffer.from(BX_MEMO_MARKER_MSG),
    }
}

function addMemo(tx: VersionedTransaction) {
    const cutoff = tx.message.staticAccountKeys.length
    for (let i = 0; i < tx.message.compiledInstructions.length; i++) {
        const instr = tx.message.compiledInstructions[i]
        for (let j = 0; j < instr.accountKeyIndexes.length; j++) {
            if (instr.accountKeyIndexes[j] >= cutoff) {
                instr.accountKeyIndexes[j] = instr.accountKeyIndexes[j] + 1
            }
        }
    }

    const memo = createCompiledMemoInstruction(cutoff)
    tx.message.staticAccountKeys.push(new PublicKey(TRADER_API_MEMO_PROGRAM))
    tx.message.compiledInstructions.push(memo)
}

// addMemoToSerializedTxn adds memo instruction to a serialized transaction, it's primarily used if the user
// doesn't want to interact with Trader-API directly
export function addMemoToSerializedTxn(txBase64: string): string {
    const buff = Buffer.from(txBase64, "base64")
    const solanaTx = VersionedTransaction.deserialize(buff)

    addMemo(solanaTx)

    const txnBytes = solanaTx.serialize()
    return Buffer.from(txnBytes).toString("base64")
}
