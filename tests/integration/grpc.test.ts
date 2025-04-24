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
    PostPumpFunSwapRequestSol,
    GetRateLimitRequest,
    GetTransactionRequest,
    GetJupiterPricesRequest,
    GetJupiterQuotesRequest,
    PostJupiterRouteSwapRequest,
    PostJupiterSwapRequest,
    PostRaydiumSwapRequest,
    PostSubmitBatchRequest,
    PostPumpFunSwapRequest,
} from "../../bxsolana";
import bs58 from 'bs58'
import {
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
} from '@solana/web3.js';
import { MAINNET_API_PUMP_NY_GRPC } from "../../bxsolana/utils/constants";

jest.setTimeout(1000 * 60 * 10); // Ten minute timeout

// eslint-disable-next-line
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

describe('TransactionSubmission', () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof GrpcProvider>;
    let signer: InstanceType<typeof Keypair>;
    let bloxrouteTipWallet: InstanceType<typeof PublicKey>;
    let jitoTipWallet: InstanceType<typeof PublicKey>;
    const timings: Record<string, number> = {};

    // Run before each test
    beforeEach(() => {
        config = loadFromEnv();
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        );
        signer = Keypair.fromSecretKey(
            bs58.decode(config.privateKey)
        )
        bloxrouteTipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
        jitoTipWallet = new PublicKey("96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5");
    });

    afterAll(() => {
        console.info('\n---- API Timing Results ----');
        Object.entries(timings).forEach(([name, duration]) => {
            console.info(`${name}: ${duration}ms`);
        });
    });

    // Helper function to create a signed transaction
    async function createSignedTransactionWithBloXrouteTip({
        computeLimit,
        priorityFee,
        bloxrouteTip
    }: { computeLimit: number; priorityFee: number, bloxrouteTip: number }): Promise<Transaction> {
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
    }: { computeLimit: number; priorityFee: number, bloxrouteTip: number, jitoTip: number }): Promise<Transaction[]> {
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

        const transaction2 = await createSignedTransactionWithBloXrouteTip({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000 });


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

    function createPostSubmitBatchRequest(transaction1: Transaction, transaction2: Transaction): PostSubmitBatchRequest {
        return {
            entries: [
                {
                    transaction: {
                        content: transaction1.serialize().toString(`base64`),
                        isCleanup: false
                    } as TransactionMessage,
                    skipPreFlight: false
                } as PostSubmitRequestEntry,
                {
                    transaction: {
                        content: transaction2.serialize().toString(`base64`),
                        isCleanup: false
                    } as TransactionMessage,
                    skipPreFlight: false
                } as PostSubmitRequestEntry
            ],
            submitStrategy: "P_UKNOWN",
            useBundle: false,
            frontRunningProtection: false,
        } as PostSubmitBatchRequest;
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
        const transaction = await createSignedTransactionWithBloXrouteTip({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000 });
        const request = createPostSubmitRequest(transaction);

        // Submit transaction
        const start = performance.now();
        const response = await provider.postSubmit(request);
        timings["PostSubmit"] = performance.now() - start;
        // console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000 });
        const request = createPostSubmitRequest(transaction);

        // Submit transaction using V2
        const start = performance.now();
        const response = await provider.postSubmitV2(request);
        timings["PostSubmitV2"] = performance.now() - start;
        // console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitBatch', async () => {
        // Create transaction and request using helper functions
        const transaction1 = await createSignedTransactionWithBloXrouteTip({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000 });
        const transaction2 = await createSignedTransactionWithBloXrouteTip({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000 });
        const request = createPostSubmitBatchRequest(transaction1, transaction2);

        // Submit transaction
        const start = performance.now();
        const response = await provider.postSubmitBatch(request);
        timings["PostSubmitBatch"] = performance.now() - start;
        // console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitPaladinV2', async () => {
        // Create transaction and request using helper functions
        const transaction = await createSignedTransactionWithBloXrouteTip({ computeLimit: 1_000_000, priorityFee: 40_000_000, bloxrouteTip: 10_000_000 });
        const request = createPostSubmitPaladinRequest(transaction);

        // Submit transaction using V2
        const start = performance.now();
        const response = await provider.postSubmitPaladinV2(request);
        timings["PostSubmitPaladinV2"] = performance.now() - start;
        // console.info(JSON.stringify(response, null, 2));

        expectNoNulls(response)
    });

    test('PostSubmitSnipeV2', async () => {
        // Create multiple transactions for snipe testing
        const transactions = await createSnipeTransactions({ computeLimit: 500_000, priorityFee: 1_000, bloxrouteTip: 1_000_000, jitoTip: 100_000 });

        // Create snipe request
        const request = createPostSubmitSnipeRequest(transactions);

        // Submit snipe request
        const start = performance.now();
        const response = await provider.postSubmitSnipeV2(request);
        timings["PostSubmitSnipeV2"] = performance.now() - start;
        // console.info(JSON.stringify(response, null, 2));

        // Expect at least one signature in the response
        expectNoNulls(response)
    });

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
            `${MAINNET_API_PUMP_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
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
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

    test('Stream Priority Fee', async () => {
        const request = {} as GetPriorityFeeRequest
        const stream = await provider.getPriorityFeeStream(request)

        for await (const response of stream) {
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

    test('Stream Bundle Tip', async () => {
        const request = {} as GetBundleTipRequest
        const stream = await provider.getBundleTipStream(request)

        for await (const response of stream) {
            // console.info(JSON.stringify(response, null, 2));
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
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

    test('Stream New PumpFun Tokens', async () => {
        const request = {} as GetPumpFunNewTokensStreamRequest
        const stream = await pump_provider.getPumpFunNewTokensStream(request)

        for await (const response of stream) {
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

    test('Stream New Pump Fun Swaps', async () => {
        const newToken = await getNewPumpFunToken(pump_provider)
        const request = {
            tokens: [newToken.mint]
        } as GetPumpFunSwapsStreamRequest
        const stream = await pump_provider.getPumpFunSwapsStream(request)

        for await (const response of stream) {
            // console.info(JSON.stringify(response, null, 2));
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
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

    test('Stream New Raydium Pools By Transaction', async () => {
        const request = {} as GetNewRaydiumPoolsByTransactionRequest
        const stream = await provider.getNewRaydiumPoolsByTransactionStream(request)

        for await (const response of stream) {
            // console.info(JSON.stringify(response, null, 2));
            expectNoNulls(response)
            break
        }
    });

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
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        );
        pump_provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_PUMP_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        )
    });

    test("Get Account", async () => {
        const response = await provider.getTokenAccounts(
            {
                ownerAddress: "AfU4AhJhqSsMji1oij1ZGfskQGGmmUW1vsdS3j7eeEwj"
            } as GetTokenAccountsRequest
        )
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Priority Fee", async () => {
        const response = await provider.getPriorityFee(
            {
                project: "P_RAYDIUM",
                percentile: 50
            } as GetPriorityFeeRequest
        )
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Rate Limit", async () => {
        const response = await provider.getRateLimit({} as GetRateLimitRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response.limit)
    });

    test("Get Transaction", async () => {
        const response = await provider.getTransaction({
            signature: "63ZJvWVLvwhSkyrwoSwcgvzgK6mwCudtZaSGfnXdUQJEQ7Qh7f2zd7rLXQHuHort9sLwC4bEwC7bw67xsq2NPLcN"
        } as GetTransactionRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Jupiter Prices", async () => {
        const response = await provider.getJupiterPrices({
            tokens: ["SOL"]
        } as GetJupiterPricesRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Jupiter Quotes", async () => {
        const response = await provider.getJupiterQuotes({
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        } as GetJupiterQuotesRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Post Jupiter Route Swap", async () => {
        const response = await provider.postJupiterRouteSwap({
            ownerAddress: config.publicKey,
            steps: [
                {
                    project: {
                        label: "Raydium",
                        id: "6U4TBh3aJgiJ5EqCDEua4rP75HsqcfHapMKhhyuTqGuo"
                    },
                    inToken: "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
                    outToken: "So11111111111111111111111111111111111111112",
                    inAmount: 0.01,
                    outAmountMin: 0.000123117,
                    outAmount: 0.000123425,
                    fee: {
                        amount: 0.000025,
                        mint: "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump",
                        percent: 0.0025062656
                    }
                }
            ],
            slippage: 25,
            computeLimit: 200_000,
            computePrice: "100000",
            tip: "1000000"
        } as PostJupiterRouteSwapRequest);
        // console.info(JSON.stringify(response, null, 2));
        expect(response.transactions.length).toBeGreaterThan(0)
    });

    test("Post Jupiter Swap", async () => {
        const response = await provider.postJupiterSwap({
            ownerAddress: config.publicKey,
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        } as PostJupiterSwapRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Post Jupiter Swap Instructions", async () => {
        const response = await provider.postJupiterSwapInstructions({
            ownerAddress: config.publicKey,
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 0.01,
            slippage: 0.1,
            computePrice: "10000",
        })
        // console.info(JSON.stringify(response, null, 2));
        expect(response.instructions.length).toBeGreaterThan(0)
    });

    test("Post Raydium Route Swap", async () => {
        const response = await provider.postRaydiumRouteSwap({
            ownerAddress: config.publicKey,
            slippage: 10,
            steps: [
                {
                    poolAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    project: {
                        id: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                        label: "Raydium",
                    },
                    inToken: "So11111111111111111111111111111111111111112",
                    outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    inAmount: 0.01,
                    outAmount: 0.007505,
                    outAmountMin: 0.074,
                },
            ],
            computeLimit: 200000,
            computePrice: "10000",
        })
        // console.info(JSON.stringify(response, null, 2));
        expect(response.transactions.length).toBeGreaterThan(0)
    });

    test("Post Raydium CLMM Route Swap", async () => {
        const response = await provider.postRaydiumCLMMRouteSwap({
            ownerAddress: config.publicKey,
            slippage: 10,
            steps: [
                {
                    poolAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    project: {
                        id: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                        label: "Raydium",
                    },
                    inToken: "So11111111111111111111111111111111111111112",
                    outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                    inAmount: 0.01,
                    outAmount: 0.007505,
                    outAmountMin: 0.074,
                },
            ],
            computeLimit: 200000,
            computePrice: "10000",
        })
        // console.info(JSON.stringify(response, null, 2));
        expect(response.transactions.length).toBeGreaterThan(0)
    });

    test("Post Raydium Swap", async () => {
        const response = await provider.postRaydiumSwap({
            ownerAddress: config.publicKey,
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        } as PostRaydiumSwapRequest)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Post Raydium Swap Instructions", async () => {
        const response = await provider.postRaydiumSwapInstructions({
            ownerAddress: config.publicKey,
            inToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            outToken: "SOL",
            inAmount: 0.01,
            slippage: 0.1,
            computeLimit: 200000,
            computePrice: "10000",
        })
        // console.info(JSON.stringify(response, null, 2));
        expect(response.instructions.length).toBeGreaterThan(0)
    });

    test("Post Raydium CLMM Swap Instructions", async () => {
        const response = await provider.postRaydiumCLMMSwap({
            ownerAddress: config.publicKey,
            inToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            outToken: "SOL",
            inAmount: 0.01,
            slippage: 0.1,
            computeLimit: 200000,
            computePrice: "10000",
        })
        // console.info(JSON.stringify(response, null, 2));
        expect(response.transactions.length).toBeGreaterThan(0)
    });

    test("Post Raydium CPMM Swap Instructions", async () => {
        const response = await provider.postRaydiumCPMMSwap({
            ownerAddress: config.publicKey,
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 25,
            poolAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
            computeLimit: 10000,
            computePrice: "1000",
            tip: "100000"
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium Pool Reserve", async () => {
        const response = await provider.getRaydiumPoolReserve({
            pairsOrAddresses: [
                "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
            ],
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium Pools", async () => {
        const response = await provider.getRaydiumPools({})
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium CLMM Pools", async () => {
        const response = await provider.getRaydiumCLMMPools({
            pairOrAddress: "3ucNos4NbumPLZNWztqGHNFFgkHeRMBQAVemeeomsUxv"
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium Prices", async () => {
        const response = await provider.getRaydiumPrices({ tokens: ["SOL"] })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium Quotes", async () => {
        const response = await provider.getRaydiumQuotes({
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium CPMM Quotes", async () => {
        const response = await provider.getRaydiumCPMMQuotes({
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Raydium CLMM Quotes", async () => {
        const response = await provider.getRaydiumCLMMQuotes({
            inToken: "SOL",
            outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            inAmount: 1,
            slippage: 5,
        })
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("Get Recent BlockHash", async () => {
        const response = await provider.getRecentBlockHash({})
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    });

    test("PostPumpFunSwapSol", async () => {
        const token: GetPumpFunNewTokensStreamResponse = await getNewPumpFunToken(pump_provider)
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
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    })

    test("PostPumpFunSwap", async () => {
        const token: GetPumpFunNewTokensStreamResponse = await getNewPumpFunToken(pump_provider)
        const request: PostPumpFunSwapRequest = {
            userAddress: token.creator,
            bondingCurveAddress: token.bondingCurve,
            tokenAddress: token.mint,
            tokenAmount: 1,
            isBuy: true,
            solThreshold: 1,
            slippage: 20,
            computeLimit: 250_000,
            computePrice: "100000",
            tip: "1000000"
        }
        const response = await pump_provider.postPumpFunSwap(request)
        // console.info(JSON.stringify(response, null, 2));
        expectNoNulls(response)
    })

})