import {
    MAINNET_API_NY_HTTP,
    HttpProvider,
    GetRecentBlockHashRequest,
    loadFromEnv,
    PostSubmitRequest,
    TransactionMessage,
    TransactionMessageV2,
    PostSubmitPaladinRequest,
    PostSubmitRequestEntry,
    PostSubmitSnipeRequest,
    GetPumpFunNewTokensStreamRequest,
    GetPriorityFeeRequest,
    GetTokenAccountsRequest,
    GetPumpFunNewTokensStreamResponse,
} from "../../bxsolana";
import bs58 from 'bs58'
import {
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
  } from '@solana/web3.js';
import { MAINNET_API_PUMP_NY_HTTP } from "../../bxsolana/utils/constants";

jest.setTimeout(60500);

function expectNoNulls(response: any) {
    const { timestamp, ...responseWithoutTimestamp } = response;
    
    expect(
      Object.values(responseWithoutTimestamp).every(v =>
        v !== null &&
        v !== undefined &&
        v !== '' &&
        !(Array.isArray(v) && v.length === 0) &&
        !(typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0)
      )
    ).toBe(true);
  }

async function getNewPumpFunToken(p: HttpProvider): Promise<GetPumpFunNewTokensStreamResponse> {
    const request = {} as GetPumpFunNewTokensStreamRequest;
    try {
        const stream = await p.getPumpFunNewTokensStream(request);
        for await (const response of stream) {
            return response;
        }
        throw new Error("No response received from token stream");
    } catch (error) {
        console.error("Error getting new pump fun token:", error);
        throw error;
    }
}

describe('Transaction Submissions', () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof HttpProvider>; 
    let signer: InstanceType<typeof Keypair>; 
    let bloxrouteTipWallet: InstanceType<typeof PublicKey>;
    let jitoTipWallet: InstanceType<typeof PublicKey>;

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_HTTP}`
        );
        signer = Keypair.fromSecretKey(
            bs58.decode(config.privateKey)
        )
        bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
        jitoTipWallet = new PublicKey("96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5");
    });

    // Helper function to create a signed transaction
    async function createSignedTransactionWithBloXrouteTip({
        computeLimit,
        priorityFee,
        bloxrouteTip
    }: { computeLimit: number; priorityFee: number, bloxrouteTip: number}): Promise<Transaction> {
        const blockhashRequest: GetRecentBlockHashRequest = {};
        const blockhashResponse = await provider.getRecentBlockHash(blockhashRequest);
        
        const tx1 = [
            SystemProgram.transfer({
                fromPubkey: signer.publicKey,
                toPubkey: bloxrouteTipWallet,
                lamports: bloxrouteTip
            })
        ];
        
        const tx2 = [
            ComputeBudgetProgram.setComputeUnitLimit({ units: computeLimit }),
            ComputeBudgetProgram.setComputeUnitPrice({ microLamports: priorityFee }),
            SystemProgram.transfer({
                fromPubkey: signer.publicKey,
                toPubkey: signer.publicKey,
                lamports: 1
            })
        ];
        
        const transaction = new Transaction({
            recentBlockhash: blockhashResponse.blockHash,
            feePayer: signer.publicKey
        });
        
        transaction.add(...tx1);
        transaction.add(...tx2);
        transaction.sign(signer);
        
        return transaction;
    }

    // Helper function to create snipe transactions
    async function createSnipeTransactions({
        computeLimit,
        priorityFee,
        bloxrouteTip,
        jitoTip
    }: { computeLimit: number; priorityFee: number, bloxrouteTip: number, jitoTip: number}): Promise<Transaction[]> {
        const blockhashRequest: GetRecentBlockHashRequest = {};
        const blockhashResponse = await provider.getRecentBlockHash(blockhashRequest);
        const blockHash = blockhashResponse.blockHash;
        
        // First transaction: transfer to both jito and bloxroute
        const transaction1 = new Transaction({
            recentBlockhash: blockHash,
            feePayer: signer.publicKey
        });
        
        transaction1.add(
            ComputeBudgetProgram.setComputeUnitLimit({ units: computeLimit }),
            ComputeBudgetProgram.setComputeUnitPrice({ microLamports: priorityFee }),
            SystemProgram.transfer({
                fromPubkey: signer.publicKey,
                toPubkey: jitoTipWallet,
                lamports: jitoTip
            }),
            SystemProgram.transfer({
                fromPubkey: signer.publicKey,
                toPubkey: bloxrouteTipWallet,
                lamports: bloxrouteTip
            })
        );
        
        transaction1.sign(signer);
        
        const transaction2 = await createSignedTransactionWithBloXrouteTip({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000});

        
        return [transaction1, transaction2];
    }

    // Helper function to create a post submit request
    function createPostSubmitRequest(transaction: Transaction): PostSubmitRequest {
        return {
            transaction: {
                content: transaction.serialize().toString(`base64`),
                isCleanup: false
            } as TransactionMessage,
            skipPreFlight: true
        } as PostSubmitRequest;
    }

    // Helper function to create a post submit request
    function createPostSubmitPaladinRequest(transaction: Transaction): PostSubmitPaladinRequest {
        return {
            transaction: {
                content: transaction.serialize().toString(`base64`),
            } as TransactionMessageV2,
            revertProtection: true
        } as PostSubmitPaladinRequest;
    }

    // Helper function to create a snipe request with multiple transactions
    function createPostSubmitSnipeRequest(transactions: Transaction[]): PostSubmitSnipeRequest {
        return {
            entries: transactions.map(tx => ({
                transaction: {
                    content: tx.serialize().toString('base64'),
                    isCleanup: false
                } as TransactionMessage
            }) as PostSubmitRequestEntry),
            useStakedRPCs: true
        } as PostSubmitSnipeRequest;
    }

    test('PostSubmit', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000});
        const postSubmitRequest = createPostSubmitRequest(transaction);

        // Submit transaction
        const postSubmitResponse = await provider.postSubmit(postSubmitRequest);
        console.info(JSON.stringify(postSubmitResponse, null, 2));

        expect(postSubmitResponse.signature);
    });

    test('PostSubmitV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000});
        const postSubmitRequest = createPostSubmitRequest(transaction);

        // Submit transaction using V2
        const postSubmitResponse = await provider.postSubmitV2(postSubmitRequest);
        console.info(JSON.stringify(postSubmitResponse, null, 2));

        expect(postSubmitResponse.signature);
    });

    test('PostSubmitPaladinV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({computeLimit: 1_000_000, priorityFee: 40_000_000, bloxrouteTip: 10_000_000});
        const postSubmitRequest = createPostSubmitPaladinRequest(transaction);

        // Submit transaction using V2
        const postSubmitResponse = await provider.postSubmitPaladinV2(postSubmitRequest);
        console.info(JSON.stringify(postSubmitResponse, null, 2));

        expect(postSubmitResponse.signature);
    });

    test('PostSubmitSnipeV2', async () => {
        // Create multiple transactions for snipe testing
        const transactions = await createSnipeTransactions({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000, jitoTip: 100_000});
        
        // Create snipe request
        const snipeRequest = createPostSubmitSnipeRequest(transactions);
        
        // Submit snipe request
        const snipeResponse = await provider.postSubmitSnipeV2(snipeRequest);
        console.info(JSON.stringify(snipeResponse, null, 2));
        
        // Expect at least one signature in the response
        expect(snipeResponse.transactions.length).toBeGreaterThan(0);
        for (const tx of snipeResponse.transactions) {
            expect(tx.error).toBe("");
        }
    });
    
});


describe("Requests", () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof HttpProvider>; 

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_HTTP}`
        );
    });

    test("Get Account", async () => {
        const response = await provider.getTokenAccounts(
            {
                ownerAddress: "AfU4AhJhqSsMji1oij1ZGfskQGGmmUW1vsdS3j7eeEwj"
            } as GetTokenAccountsRequest
        )
        console.info(JSON.stringify(response, null, 2))
        expectNoNulls(response)
    });

    test("Get Priority Fee", async () => {
        const response = await provider.getPriorityFee(
            {
                project: "P_RAYDIUM",
                percentile: 50
            } as GetPriorityFeeRequest
        )
        console.info(JSON.stringify(response, null, 2))
        expectNoNulls(response)
    });
})