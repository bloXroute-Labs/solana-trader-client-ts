import {
    GrpcProvider,
    GetRecentBlockHashRequest,
    loadFromEnv,
    PostSubmitRequest,
    TransactionMessage,
    TransactionMessageV2,
    PostSubmitPaladinRequest,
    PostSubmitRequestEntry,
    PostSubmitSnipeRequest,
    GetPumpFunAMMSwapStreamRequest,
    GetPumpFunNewAmmPoolStreamRequest,
    GetPumpFunNewTokensStreamRequest,
    GetSwapsStreamRequest,
    Project
} from "../../bxsolana";
import {
    MAINNET_API_GRPC_PORT,
    MAINNET_API_NY_GRPC,
    MAINNET_API_PUMP_NY_GRPC,
    LOCAL_API_GRPC_HOST,
    LOCAL_API_GRPC_PORT
} from "../../bxsolana/utils/constants"
import bs58 from 'bs58'
import {
    PublicKey,
    Keypair,
    SystemProgram,
    Transaction,
    ComputeBudgetProgram,
  } from '@solana/web3.js';

describe('Transaction Submissions', () => {
    let config: ReturnType<typeof loadFromEnv>;
    let provider: InstanceType<typeof GrpcProvider>; 
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
            false
        )
    });

    test('Stream New PumpSwap AMM Transactions', async () => {
        const request = { 
          pools: ["4w2cysotX6czaUGmmWg13hDpY4QEMG2CzeKYEQyK9Ama", "BQ1AtdH3LAHbdf2NBr4u7n6uwYQrdyAinxS65JgYEXqy"] // Explicitly set empty array to ensure proper handling
        } as GetPumpFunAMMSwapStreamRequest;
        
        console.time('stream_connection');
        const startTime = Date.now();
        const stream = await pump_provider.getPumpFunAMMSwapStream(request);
        const connectionTime = Date.now() - startTime;
        console.log(`Connection established in ${connectionTime}ms`);
        
        let count = 0;
        console.time('receive_100_messages');
        
        for await (const ob of stream) {
          //console.info(JSON.stringify(ob, null, 2));
          count += 1;
          
          if (count % 10 === 0) {
            console.log(`Received ${count} messages in ${Date.now() - startTime}ms`);
          }
          
          if (count == 100) {
            const totalTime = Date.now() - startTime;
            console.log(`Received all 100 messages in ${totalTime}ms`);
            console.log(`Average time per message: ${totalTime / 100}ms`);
            break;
          }
        }
        
        console.timeEnd('receive_100_messages');
        console.timeEnd('stream_connection');
      }, 60000);

    test('Stream New PumpSwap AMM Pools', async () => {
        const request = {} as {} as GetPumpFunNewAmmPoolStreamRequest
        const stream = await pump_provider.getPumpFunNewAmmPoolStream(request)

        for await (const ob of stream) {
            console.info(JSON.stringify(ob, null, 2))
            break
        }
    }, 60000); // Set timeout to 60 seconds (60000ms)

    test('Stream New PumpFun Tokens', async () => {
        const request = {} as {} as GetPumpFunNewTokensStreamRequest
        const stream = await pump_provider.getPumpFunNewTokensStream(request)

        for await (const ob of stream) {
            console.info(JSON.stringify(ob, null, 2))
            break
        }
    }, 60000); // Set timeout to 30 seconds (30000ms)

});