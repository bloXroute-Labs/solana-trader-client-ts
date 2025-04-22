import {
    MAINNET_API_GRPC_PORT,
    MAINNET_API_NY_GRPC,
    GrpcProvider,
    GetRecentBlockHashRequest,
    loadFromEnv,
    PostSubmitRequest,
    TransactionMessage,
    TransactionMessageV2,
    PostSubmitPaladinRequest,
    PostSubmitRequestEntry,
    PostSubmitSnipeRequest,
    GetPumpFunNewAmmPoolStreamRequest,
    GetPumpFunNewTokensStreamRequest,
    GetPumpFunSwapsStreamRequest,
    GetNewRaydiumPoolsByTransactionRequest,
    GetPriorityFeeRequest,
    GetBundleTipRequest,
    GetTokenAccountsRequest,
    GetPumpFunNewTokensStreamResponse,
    GetPoolReservesStreamRequest,
    Project,
    GetLeaderScheduleRequest,
    PostPumpFunSwapRequestSol
} from "../../bxsolana";
import bs58 from 'bs58'
import {
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
  } from '@solana/web3.js';
import { LOCAL_API_GRPC_HOST, LOCAL_API_GRPC_PORT, MAINNET_API_PUMP_NY_GRPC } from "../../bxsolana/utils/constants";

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

async function getNewPumpFunToken(p: GrpcProvider): Promise<GetPumpFunNewTokensStreamResponse> {
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
    let provider: InstanceType<typeof GrpcProvider>; 
    let pump_provider: InstanceType<typeof GrpcProvider>; 
    let signer: InstanceType<typeof Keypair>; 
    let bloxrouteTipWallet: InstanceType<typeof PublicKey>;
    let jitoTipWallet: InstanceType<typeof PublicKey>;

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        );
        pump_provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        )
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
        const request = createPostSubmitRequest(transaction);

        // Submit transaction
        const response = await provider.postSubmit(request);
        console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000});
        const request = createPostSubmitRequest(transaction);

        // Submit transaction using V2
        const response = await provider.postSubmitV2(request);
        console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitPaladinV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({computeLimit: 1_000_000, priorityFee: 40_000_000, bloxrouteTip: 10_000_000});
        const request = createPostSubmitPaladinRequest(transaction);

        // Submit transaction using V2
        const response = await provider.postSubmitPaladinV2(request);
        console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitSnipeV2', async () => {
        // Create multiple transactions for snipe testing
        const transactions = await createSnipeTransactions({computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000, jitoTip: 100_000});
        
        // Create snipe request
        const request = createPostSubmitSnipeRequest(transactions);
        
        // Submit snipe request
        const response = await provider.postSubmitSnipeV2(request);
        console.info(JSON.stringify(response, null, 2));
        
        // Expect at least one signature in the response
        expectNoNulls(response)
    });

    test("PostPumpFunSwapSol", async () => {
        const token: GetPumpFunNewTokensStreamResponse = await getNewPumpFunToken(pump_provider)
        console.info(JSON.stringify(token, null, 2))
        const request: PostPumpFunSwapRequestSol = {
            userAddress: token.creator,
            bondingCurveAddress: token.bondingCurve,
            tokenAddress: token.mint,
            solAmount: 0.0001,
            slippage: 20,
            computeLimit: 250_000,
            computePrice: "100000",
            tip: "1000000"
        }
        const response = await pump_provider.postPumpFunSwapSol(request)
        console.info(JSON.stringify(response, null, 2))
        expectNoNulls(response)
    })
    
});

describe('Streaming', () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof GrpcProvider>; 
    let pump_provider: InstanceType<typeof GrpcProvider>; 

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        );
        pump_provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            true
        )
    });

    /*
    General Streams
    */
    test('Stream Recent Blockhash', async () => {
        const request = {} as GetRecentBlockHashRequest
        const stream = await provider.getRecentBlockHashStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    });

    test('Stream Priority Fee', async () => {
        const request = {} as GetPriorityFeeRequest
        const stream = await provider.getPriorityFeeStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    });

    test('Stream Bundle Tip', async () => {
        const request = {} as GetBundleTipRequest
        const stream = await provider.getBundleTipStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    });

    /*
    PumpFun Streams
    */

    test('Stream New PumpSwap AMM Pools', async () => {
        const request = {} as GetPumpFunNewAmmPoolStreamRequest
        const stream = await pump_provider.getPumpFunNewAmmPoolStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    }, 60000);

    test('Stream New PumpFun Tokens', async () => {
        const request = {} as GetPumpFunNewTokensStreamRequest
        const stream = await pump_provider.getPumpFunNewTokensStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    }, 30000);

    test('Stream New Pump Fun Swaps', async () => {
        const newToken = await getNewPumpFunToken(pump_provider)
        const request = {
            tokens: [newToken.mint]
        } as GetPumpFunSwapsStreamRequest
        const stream = await pump_provider.getPumpFunSwapsStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    }, 30000);

    /*
    Raydium Streams
    */

    test('Stream New Raydium Pools', async () => {
        const request = {} as GetPumpFunNewAmmPoolStreamRequest
        const stream = await provider.getNewRaydiumPoolsStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    }, 86_400_000);

    test('Stream New Raydium Pools By Transaction', async () => {
        const request = {} as GetNewRaydiumPoolsByTransactionRequest
        const stream = await provider.getNewRaydiumPoolsByTransactionStream(request)

        for await (const response of stream) {
            console.info(JSON.stringify(response, null, 2))
            expectNoNulls(response)
            break
        }
    }, 86_400_000);

});

describe("Requests", () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof GrpcProvider>; 
    let pump_provider: InstanceType<typeof GrpcProvider>; 

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            false
        );
        pump_provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            false
        )
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