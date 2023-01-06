import {
    Keypair,
    PublicKey,
    Transaction,
    TransactionInstruction,
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

export function addMemo(
    instructions: TransactionInstruction[],
    memoContent: string,
    blockhash: string | undefined,
    owner: PublicKey,
    signer: Keypair
): string {
    const memo = createTraderAPIMemoInstruction(memoContent)

    instructions.push(memo)

    const txnBytes = buildFullySignedTxn(blockhash, owner, instructions, signer)
    if (txnBytes.length == 0) {
        return ""
    }
    return Buffer.from(txnBytes).toString("base64")
}

// addMemoToSerializedTxn adds memo instruction to a serialized transaction, it's primarily used if the user
// doesn't want to interact with Trader-API directly
export function addMemoToSerializedTxn(
    txBase64: string,
    memoContent: string,
    owner: PublicKey,
    signer: Keypair
): string {
    const solanaTx = Transaction.from(Buffer.from(txBase64, "base64"))

    const instructions = []

    for (const inst of solanaTx.instructions) {
        instructions.push(
            new TransactionInstruction({
                keys: inst.keys,
                programId: inst.programId,
                data: inst.data,
            })
        )
    }

    return addMemo(
        instructions,
        memoContent,
        solanaTx.recentBlockhash,
        owner,
        signer
    )
}

export function buildFullySignedTxn(
    recentBlockHash: string | undefined,
    owner: PublicKey,
    instructions: TransactionInstruction[],
    signer: Keypair
): Uint8Array {
    const tx = new Transaction({
        recentBlockhash: recentBlockHash,
        feePayer: owner,
    })

    tx.add(...instructions)

    tx.sign(signer)

    return tx.serialize()
}
