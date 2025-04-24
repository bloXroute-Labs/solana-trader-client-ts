import {
    MAINNET_API_GRPC_PORT,
    MAINNET_API_NY_GRPC,
    GrpcProvider,
    GetRecentBlockHashRequest,
    loadFromEnv,
    PostSubmitRequest,
    TransactionMessage,
} from "../../bxsolana";
import bs58 from 'bs58';
import {
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
} from '@solana/web3.js';
const asciichart = require('asciichart');

// Ten minute timeout for long-running tests
jest.setTimeout(1000 * 60 * 10);

/**
 * Performance test suite for API submissions
 * Tests the response time of various API endpoints and logs performance metrics
 */
describe('API Performance Tests', () => {
    /** Configuration loaded from environment variables */
    let config: ReturnType<typeof loadFromEnv>;
    
    /** GRPC provider for API communication */
    let provider: InstanceType<typeof GrpcProvider>;
    
    /** Keypair used for signing transactions */
    let signer: InstanceType<typeof Keypair>;
    
    /** Collection of timing data for each API call type */
    const timings: Record<string, {
        durations: number[],
        min: number,
        max: number,
        median: number,
        p95: number,
        p99: number
    }> = {};

    /**
     * Setup the test environment before each test
     * Initializes the GRPC provider and signer
     */
    beforeEach(() => {
        config = loadFromEnv();

        // Get environment variables with defaults
        const dns = process.env.DNS || "ny.solana.dex.blxrbdn.com";
        const port = process.env.PORT || "443";
        const useTls = process.env.TLS !== 'false';
                
        const endpoint = `${dns}:${port}`;

        console.info("Using endpoint: ", endpoint);
        console.info("TLS: ", useTls);

        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            endpoint,
            useTls
        );

        signer = Keypair.fromSecretKey(
            bs58.decode(config.privateKey)
        );
    });

    /**
     * Process and display timing results after all tests complete
     * Generates charts and saves results to a JSON file
     */
    afterAll(() => {
        console.info('\n---- API Timing Results ----');
        
        // Calculate statistics for all test types
        Object.keys(timings).forEach(name => {
            const durations = timings[name].durations;
            
            // Sort durations for percentile calculations
            const sortedDurations = [...durations].sort((a, b) => a - b);
            
            // Calculate statistics
            const sum = durations.reduce((total, num) => total + num, 0);
            const average = sum / durations.length;
            const min = sortedDurations[0];
            const max = sortedDurations[sortedDurations.length - 1];
            const median = sortedDurations[Math.floor(sortedDurations.length / 2)];
            const p95 = sortedDurations[Math.floor(sortedDurations.length * 0.95)];
            const p99 = sortedDurations[Math.floor(sortedDurations.length * 0.99)];
            
            // Store calculated statistics
            timings[name].min = min;
            timings[name].max = max;
            timings[name].median = median;
            timings[name].p95 = p95;
            timings[name].p99 = p99;
            
            // Display results
            console.info(`\n${name} Statistics:`);
            console.info(`  Samples: ${durations.length}`);
            console.info(`  Average: ${Math.round(average * 100) / 100}ms`);
            console.info(`  Min: ${Math.round(min * 100) / 100}ms`);
            console.info(`  Max: ${Math.round(max * 100) / 100}ms`);
            console.info(`  Median: ${Math.round(median * 100) / 100}ms`);
            console.info(`  P95: ${Math.round(p95 * 100) / 100}ms`);
            console.info(`  P99: ${Math.round(p99 * 100) / 100}ms`);
            
            // Display chart
            console.info(asciichart.plot(durations, { 
                height: 15,
                format: (x: number) => `${Math.round(x)}ms`.padStart(8)
            }));
        });
        
        // Write results to file for further analysis
        try {
            const timestamp = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
            const filename = `api-performance-results-${timestamp}.json`;
        } catch (error) {
            console.error('Failed to write results to file:', error);
        }
    });

    /**
     * Creates a signed transaction for testing
     * @returns A signed transaction ready for submission
     */
    async function createSignedTransaction(): Promise<Transaction> {
        const blockhashRequest: GetRecentBlockHashRequest = {};
        const blockhashResponse = await provider.getRecentBlockHash(blockhashRequest);

        const tx = [
            ComputeBudgetProgram.setComputeUnitLimit({ units: 0 }),
            ComputeBudgetProgram.setComputeUnitPrice({ microLamports: 0 }),
            SystemProgram.transfer({
                fromPubkey: signer.publicKey,
                toPubkey: signer.publicKey,
                lamports: 0
            })
        ];

        const transaction = new Transaction({
            recentBlockhash: blockhashResponse.blockHash,
            feePayer: signer.publicKey
        });

        transaction.add(...tx);
        transaction.sign(signer);

        return transaction;
    }

    /**
     * Creates a post submit request from a transaction
     * @param transaction The transaction to submit
     * @returns A formatted PostSubmitRequest
     */
    function createPostSubmitRequest(transaction: Transaction): PostSubmitRequest {
        return {
            transaction: {
                content: transaction.serialize().toString(`base64`),
                isCleanup: false
            } as TransactionMessage,
            skipPreFlight: true,
            frontRunningProtection: false
        } as PostSubmitRequest;
    }

    /**
     * Test the performance of the PostSubmit API endpoint
     * Performs 100 requests and records timing data
     */
    test('PostSubmit API Performance', async () => {
        // Initialize timing data structure
        timings["PostSubmit"] = {
            durations: [],
            min: 0,
            max: 0,
            median: 0,
            p95: 0,
            p99: 0
        };

        // Warm up the connection with one request without logging it
        try {
            const warmupTransaction = await createSignedTransaction();
            const warmupRequest = createPostSubmitRequest(warmupTransaction);
            await provider.postSubmit(warmupRequest);
        } catch (error) {
            console.info("Connection established with warm-up request");
        }

        // Run the timed tests
        const totalSamples = 100;
        console.info(`\nRunning ${totalSamples} PostSubmit API calls...`);
        
        for (let i = 0; i < totalSamples; i++) {
            if (i > 0 && i % 10 === 0) {
                console.info(`  Completed ${i}/${totalSamples} requests`);
            }
            
            const transaction = await createSignedTransaction();
            const request = createPostSubmitRequest(transaction);

            const start = performance.now();
            try {
                await provider.postSubmit(request);
            } catch (error) {
                // Expected to fail, but we still want to record the timing
            }
            const end = performance.now();

            timings["PostSubmit"].durations.push(end - start);
        }
        
        console.info(`  Completed all ${totalSamples} requests`);
    });
});