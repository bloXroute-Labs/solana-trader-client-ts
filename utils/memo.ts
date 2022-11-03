import { Keypair, PublicKey, Transaction, TransactionInstruction } from "@solana/web3.js"

const BxMemoMarkerMsg = "Powered by bloXroute Trader Api"
const TraderAPIMemoProgram = "HQ2UUt18uJqKaQFJhgV9zaTdQxUZjNrsKFgoEDquBkcx"

// CreateTraderAPIMemoInstruction generates a transaction instruction that places a memo in the transaction log
// Having a memo instruction with signals Trader-API usage is required
export function CreateTraderAPIMemoInstruction(msg: string): TransactionInstruction {
    if (msg == "") {
        msg = BxMemoMarkerMsg
    }
    return new TransactionInstruction({
        keys: [],
        programId: new PublicKey(TraderAPIMemoProgram),
        data: Buffer.from(msg),
    })
}

export function AddMemo(instructions: TransactionInstruction[], memoContent: string,
    blockhash: string | undefined, owner: PublicKey, signer: Keypair): string {
    const memo = CreateTraderAPIMemoInstruction(memoContent)

    instructions.push(memo)

    const txnBytes = buildFullySignedTxn(blockhash, owner, instructions, signer)
    if (txnBytes.length == 0) {
        return ""
    }
    return Buffer.from(txnBytes).toString('base64')
}

// AddMemoToSerializedTxn adds memo instruction to a serialized transaction, it's primarily used if the user
// doesn't want to interact with Trader-API directly
export function AddMemoToSerializedTxn(txBase64: string, memoContent: string, owner: PublicKey, signer: Keypair): string {
    const solanaTx = Transaction.from(Buffer.from(txBase64, 'base64'))

    const instructions = []

    for (const inst of solanaTx.instructions) {
        instructions.push(new TransactionInstruction({
            keys: inst.keys,
            programId: inst.programId,
            data:inst.data
        }))
    }

    return AddMemo(instructions, memoContent, solanaTx.recentBlockhash, owner, signer)
}

export function buildFullySignedTxn(recentBlockHash: string | undefined, owner: PublicKey, instructions: TransactionInstruction[],  signer: Keypair): Uint8Array {

    const tx = new Transaction({
        recentBlockhash: recentBlockHash,
        feePayer: owner,
    });

    tx.add(...instructions);

    tx.sign(signer)

    return tx.serialize()
}
