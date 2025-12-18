#!/usr/bin/env node

import {
    addMemoToSerializedTxn,
    BaseProvider,
    loadFromEnv,
    GrpcProvider,
    HttpProvider,
    LOCAL_API_GRPC_HOST,
    LOCAL_API_GRPC_PORT,
    LOCAL_API_HTTP,
    LOCAL_API_WS,
    MAINNET_API_GRPC_PORT,
    TESTNET_API_GRPC_HOST,
    TESTNET_API_GRPC_PORT,
    TESTNET_API_HTTP,
    TESTNET_API_WS,
    WsProvider,
    signTx,
    GetPumpFunNewTokensStreamResponse,
    GetPumpFunNewTokensStreamRequest,
    PostOrderRequestV2,
    MAINNET_API_NY_HTTP,
    MAINNET_API_NY_GRPC,
    MAINNET_API_NY_WS,
    createTraderAPIMemoInstruction,
    TransactionMessage,
    TransactionMessageV2,
    GetPumpFunAmmQuotesRequest,
    PostPumpFunAmmSwapRequest,
} from "../bxsolana"
import {
    ComputeBudgetProgram,
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js"
import base58 from "bs58"
import {
    DEVNET_API_GRPC_HOST,
    DEVNET_API_GRPC_PORT,
    MAINNET_API_PUMP_NY_GRPC,
    MAINNET_API_PUMP_NY_HTTP,
    MAINNET_API_PUMP_NY_WS,
} from "../bxsolana/utils/constants"
import { AxiosRequestConfig } from "axios"
import { txToBase64 } from "../bxsolana/utils/transaction"

const config = loadFromEnv()

// if longer examples (placing and canceling transactions, etc. should be run)
const runLongExamples = process.env.RUN_LIFECYCLE === "true"
const runStreams = process.env.RUN_STREAMS === "true"

const marketAddress = "8BnEgHoWFysVcuFFX7QztDmzuH8r5ZFvyP3sYwn1XTh6"
const ownerAddress = config.publicKey
const payerAddress = config.publicKey
const openOrdersAddress = "DwoXdF8kjt9RS6yPfpzp1yHBKtFMDpHQPCRgy1JhKgFt"
const baseTokenWallet = config.publicKey
const quoteTokenWallet = "4raJjCwLLqw8TciQXYruDEF4YhDkGwoEnwnAdwJSjcgv"
const tokenAddress = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // USDC
const side = "ask"
const typeLimit = "limit"

const testOrder: PostOrderRequestV2 = {
    ownerAddress: ownerAddress,
    payerAddress: payerAddress,
    market: "SOLUSDC",
    side: side,
    type: typeLimit,
    amount: 0.1,
    price: 200,
    openOrdersAddress: openOrdersAddress,
    clientOrderID: "0",
    computeLimit: 0,
    computePrice: "0",
}

const transactionWaitTimeS = 60
const httpTimeout = 30_000
const httpLongTimeout = 60_000

const smallTip = 100_000

function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function getRandom() {
    const min = 0
    const max = Math.floor(1000000000000)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function getNewPumpFunToken(p: BaseProvider): Promise<GetPumpFunNewTokensStreamResponse> {
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

async function run() {
    // console.info("---- STARTING HTTP TESTS ----")
    // await http()
    console.info("---- STARTING GRPC TESTS ----")
    await grpc()
    // console.info("---- STARTING WS TESTS ----")
    // await ws()
}

async function http() {
    let provider: HttpProvider

    // http provider uses Axios under the hood, so any Axios config can be included here
    const requestConfig: AxiosRequestConfig = {
        timeout: httpTimeout,
    }

    if (process.env.API_ENV === "testnet") {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            TESTNET_API_HTTP,
            requestConfig
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            MAINNET_API_NY_HTTP,
            requestConfig
        )
    } else {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            LOCAL_API_HTTP,
            requestConfig
        )
    }
    const pump_provider = new HttpProvider(
        config.authHeader,
        config.privateKey,
        MAINNET_API_PUMP_NY_HTTP,
        requestConfig
    )
    console.info(" ----  HTTP Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  HTTP Requests  ----")
    await doOrderbookRequests(provider)

    console.info(" ----  HTTP Snipe  ----")
    await callSubmitSnipe(provider)

    if (runLongExamples) {
        console.info(" ----  HTTP Lifecycle  ----")
        await doHttpLifecycle(provider)
    }

    return
}

export function getGrpcProviders() {
    let provider: GrpcProvider

    if (process.env.API_ENV === "testnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${TESTNET_API_GRPC_HOST}:${TESTNET_API_GRPC_PORT}`,
            false
        )
    } else if (process.env.API_ENV === "devnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${DEVNET_API_GRPC_HOST}:${DEVNET_API_GRPC_PORT}`,
            false
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        )
    } else {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            false
        )
    }
    const pumpProvider = new GrpcProvider(
        config.authHeader,
        config.privateKey,
        `${MAINNET_API_PUMP_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
        true
    )

    return { provider, pumpProvider }
}

export async function grpc() {
    const { provider, pumpProvider: pump_provider } = getGrpcProviders()

    console.info(" ----  GRPC Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  GRPC Requests  ----")
    await doOrderbookRequests(provider)

    console.info(" ----  GRPC Snipe  ----")
    await callSubmitSnipe(provider)

    if (runStreams) {
        console.info(" ----  GRPC Streams  ----")
        await doStreams(provider, pump_provider)
    }

    if (runLongExamples) {
        console.info(" ----  GRPC Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

    await callPlaceOrderBundle(provider)

    return
}

async function ws() {
    let provider: WsProvider

    if (process.env.API_ENV === "testnet") {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            TESTNET_API_WS
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            MAINNET_API_NY_WS
        )
    } else {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            LOCAL_API_WS
        )
    }

    await provider.connect()

    const pump_provider = new WsProvider(
        config.authHeader,
        config.privateKey,
        MAINNET_API_PUMP_NY_WS
    )
    await pump_provider.connect()
    console.info(" ----  WS Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  WS Requests  ----")
    await doOrderbookRequests(provider)

    console.info(" ----  WS Snipe  ----")
    await callSubmitSnipe(provider)

    if (runStreams) {
        console.info(" ----  WS Streams  ----")
        await doStreams(provider, pump_provider)
    }

    if (runLongExamples) {
        console.info(" ----  WS Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

    return
}

async function doOrderbookRequests(provider: BaseProvider) {
    await callGetAccountBalance(provider)
    console.info(" ")
    console.info(" ")

    await callGetServerTime(provider)
    console.info(" ")
    console.info(" ")
}

export async function doAmmRequests(
    provider: BaseProvider,
    pump_provider: BaseProvider
) {
    await callGetTransaction(provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHash(provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashV2(provider, "0")
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashV2(provider, "1")
    console.info(" ")
    console.info(" ")

    await callGetRateLimit(provider)
    console.info(" ")
    console.info(" ")

    await callPostPumpFunSwap(pump_provider)
    console.info(" ")
    console.info(" ")

    await callPostPumpFunSwapSol(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetPumpFunAmmQuotes(pump_provider)
    console.info(" ")
    console.info(" ")

    await callPostPumpFunAmmSwap(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetPumpFunQuotes(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetJupiterQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwapInstructions(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFeeByProgram(provider)
    console.info(" ")
    console.info(" ")
}

async function doStreams(provider: BaseProvider, pump_provider: BaseProvider) {
    await callGetPumpFunNewAmmPoolStream(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetPumpFunNewTokensStream(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBlockStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBundleTipStream(provider)
    console.info(" ")
    console.info(" ")
}

async function cancelWsStreams(provider: BaseProvider) {
    console.info("Cancelling swaps stream")
    await provider.cancelAllGetSwapsStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling orderbooks stream")
    await provider.cancelAllGetOrderbooksStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling get tickers stream")
    await provider.cancelAllGetTickersStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling trades stream")
    await provider.cancelAllGetTradesStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling raydium new pools stream")
    await provider.cancelAllGetNewRaydiumPoolsStream()
}

async function doLifecycle(provider: BaseProvider) {
    try {
        const mktAddress = marketAddress

        await Promise.all([
            new Promise(async (resolve, reject) => {
                try {
                    await delay(10000)
                    await callSubmitOrder(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await Promise.all([
            new Promise(async (resolve, reject) => {
                try {
                    await delay(5000)
                    await callReplaceByClientOrderID(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await Promise.all([
            new Promise(async (resolve, reject) => {
                try {
                    await delay(10000)
                    await callSubmitCancelByClientOrderID(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await callSubmitSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

async function doHttpLifecycle(provider: BaseProvider) {
    try {
        await callSubmitOrder(provider)
        console.info(" ")
        console.info(" ")

        await delay(60000)

        await callSubmitCancelByClientOrderID(provider)
        console.info(" ")
        console.info(" ")

        await delay(60000)

        await callSubmitSettleFunds(provider)
        console.info(" ")
        console.info(" ")

        await submitTransferWithMemoAndTip(provider)
        console.info(" ")
        console.info(" ")

        await submitTxWithMemo(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

async function callGetAccountBalance(provider: BaseProvider) {
    console.info("Retrieving token balances")

    if (provider instanceof HttpProvider) {
        // endpoint is slower, so allow some more timeout
        provider.requestConfig.timeout = httpLongTimeout
    }

    const req = await provider.getAccountBalanceV2({
        ownerAddress: ownerAddress,
    })
    console.info(req)

    if (provider instanceof HttpProvider) {
        // reset timeout
        provider.requestConfig.timeout = httpTimeout
    }
}

async function callGetServerTime(provider: BaseProvider) {
    console.info("Retrieving server time")
    const req = await provider.getServerTime({})
    console.info(req)
}

async function callGetTransaction(provider: BaseProvider) {
    console.info("Retrieving transaction")
    const resp = await provider.getTransaction({
        signature:
            "2s48MnhH54GfJbRwwiEK7iWKoEh3uNbS2zDEVBPNu7DaCjPXe3bfqo6RuCg9NgHRFDn3L28sMVfEh65xevf4o5W3",
    })
    console.info(resp)
}

async function callGetRateLimit(provider: BaseProvider) {
    console.info("Retrieving RateLimit")
    const resp = await provider.getRateLimit({})
    console.info(resp)
}

async function callGetRecentBlockHash(provider: BaseProvider) {
    console.info("Retrieving recent block hash")
    const resp = await provider.getRecentBlockHash({})
    console.info(`response: ${resp.blockHash}`)
}

async function callGetRecentBlockHashV2(
    provider: BaseProvider,
    offset: string
) {
    console.info("Retrieving recent block hash V2")
    const resp = await provider.getRecentBlockHashV2({ offset })
    console.info(`response V2: ${resp.blockHash}`)
}

async function callGetJupiterQuotes(provider: BaseProvider) {
    console.info("Retrieving Jupiter quotes")
    const resp = await provider.getJupiterQuotes({
        inToken: "SOL",
        outToken: tokenAddress,
        inAmount: 1,
        slippage: 5,
    })
    console.info(resp)
}

async function callGetPumpFunQuotes(provider: BaseProvider) {
    console.info("Retrieving PumpFun quotes")
    const resp = await provider.getPumpFunQuotes({
        bondingCurveAddress: "Dga6eouREJ4kLHMqWWtccGGPsGebexuBYrcepBVd494q",
        mintAddress: "9QG5NHnfqQCyZ9SKhz7BzfjPseTFWaApmAtBTziXLanY",
        amount: 0.01,
        quoteType: "buy",
    })
    console.info(resp)
}

async function callGetPriorityFeeByProgram(provider: BaseProvider) {
    console.info("Retrieving priority fee by programs")
    const raydiumCLMM = "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
    const raydiumCPMM = "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
    const resp = await provider.getPriorityFeeByProgram({
        programs: [raydiumCLMM, raydiumCPMM],
    })
    console.info(resp)
}

async function callGetPumpFunNewTokensStream(provider: BaseProvider) {
    console.info("Subscribing for pump fun new tokens")
    const req = await provider.getPumpFunNewTokensStream({})

    let count = 0
    let mint = ""
    for await (const ob of req) {
        console.info(ob)
        count++
        mint = ob.mint
        if (count == 1) {
            break
        }
    }

    console.info(" ")
    console.info(" ")

    console.info("Subscribing for pump fun swap events")
    const reqq = await provider.getPumpFunSwapsStream({ tokens: [mint] })

    count = 0
    for await (const ob of reqq) {
        console.info(ob)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPumpFunNewAmmPoolStream(provider: BaseProvider) {
    console.info("Subscribing for pump swap new amm pools")
    const req = await provider.getPumpFunNewAmmPoolStream({})

    let count = 0
    for await (const ob of req) {
        console.info("New pool recieved...")
        console.info(ob)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetBlockStream(provider: BaseProvider) {
    console.info("Subscribing for block updates")
    const resp = await provider.getBlockStream({})

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetRecentBlockHashStream(provider: BaseProvider) {
    console.info("Subscribing for block hash updates")
    const resp = await provider.getRecentBlockHashStream({})

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetBundleTipStream(provider: BaseProvider) {
    console.info("Subscribing for bundle tip updates")
    const resp = await provider.getBundleTipStream({})
    let count = 0

    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 2) {
            break
        }
    }
}

// POST requests

async function callSubmitOrder(provider: BaseProvider) {
    console.info("Generating and submitting a New Order transaction")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    const req = await provider.submitOrderV2(testOrder)
    console.info(req)
}

async function callSubmitCancelByClientOrderID(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel by Client Order ID transaction"
    )
    const req = await provider.submitCancelOrderV2(
        {
            marketAddress: marketAddress,
            ownerAddress: ownerAddress,
            openOrdersAddress: openOrdersAddress,
            clientOrderID: testOrder.clientOrderID,
            orderID: "",
            side: "S_ASK",
            computeLimit: testOrder.computeLimit,
            computePrice: testOrder.computePrice,
        },
        true
    )
    console.info(req)
}

async function callSubmitSettleFunds(provider: BaseProvider) {
    console.info("Generating and submitting a Settle transaction")
    const req = await provider.submitSettleV2({
        market: marketAddress,
        openOrdersAddress: openOrdersAddress,
        baseTokenWallet: baseTokenWallet,
        quoteTokenWallet: quoteTokenWallet,
        ownerAddress: ownerAddress,
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(req)
}

async function callReplaceByClientOrderID(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel and Replace by Client Order ID transaction"
    )

    testOrder.price -= 1

    const req = await provider.submitReplaceOrderV2({
        ...testOrder,
        orderID: "",
    })
    console.info(req)
}

async function callPostPumpFunSwap(provider: BaseProvider) {
    console.info("Generating a PumpFun swap")
    const token = await getNewPumpFunToken(provider)
    const response = await provider.postPumpFunSwap({
        userAddress: ownerAddress,
        bondingCurveAddress: token.bondingCurve,
        tokenAddress: token.mint,
        tokenAmount: 10,
        creator: token.creator,
        solThreshold: 0.0001,
        isBuy: false,
        tip: "0",
        slippage: 10,
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callPostPumpFunSwapSol(provider: BaseProvider) {
    const token = await getNewPumpFunToken(provider)
    console.info("Generating a PumpFun swap sol")
    const response = await provider.postPumpFunSwapSol({
        userAddress: ownerAddress,
        bondingCurveAddress: token.bondingCurve,
        tokenAddress: token.mint,
        creator: token.creator,
        solAmount: 0.0001,
        tip: "2000001",
        slippage: 1,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

export async function callGetPumpFunAmmQuotes(provider: BaseProvider) {
    const request: GetPumpFunAmmQuotesRequest = {
        inToken: "So11111111111111111111111111111111111111112",
        inAmount: 10,
        outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
        pool: "Gf7sXMoP8iRw4iiXmJ1nq4vxcRycbGXy5RL8a8LnTd3v",
        slippage: 0.9,
    }
    console.info("getPumpFunAmmQuotes request", request)
    const response = await provider.getPumpFunAmmQuotes(request)
    console.info("getPumpFunAmmQuotes response", response)
}

export async function callPostPumpFunAmmSwap(provider: BaseProvider) {
    const request: PostPumpFunAmmSwapRequest = {
        ownerAddress: ownerAddress,
        inToken: "So11111111111111111111111111111111111111112",
        inAmount: 10,
        outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", // USDC
        pool: "Gf7sXMoP8iRw4iiXmJ1nq4vxcRycbGXy5RL8a8LnTd3v",
        slippage: 0.9,
        computeLimit: 130000,
        computePrice: "100000",
        tip: `${smallTip}`,
    }
    console.info("postPumpFunAmmSwap request", request)
    const response = await provider.postPumpFunAmmSwap(request)
    console.info("postPumpFunAmmSwap response", response)
}

async function callPostJupiterSwap(provider: BaseProvider) {
    console.info("Generating a Jupiter swap")
    const response = await provider.postJupiterSwap({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callPostJupiterSwapInstructions(provider: BaseProvider) {
    console.info("Generating a Jupiter swap instructions")
    const response = await provider.postJupiterSwapInstructions({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callSubmitTradeSwap(provider: BaseProvider) {
    console.info("Submitting a trade swap")
    const responses = await provider.submitTradeSwap(
        {
            ownerAddress: ownerAddress,
            inToken: tokenAddress,
            outToken: "SOL",
            inAmount: 0.01,
            slippage: 0.1,
            project: "P_RAYDIUM",
            computeLimit: testOrder.computeLimit,
            computePrice: testOrder.computePrice,
        },
        "P_SUBMIT_ALL",
        true
    )

    for (const transaction of responses.transactions) {
        console.info(transaction.signature)
    }
}

async function submitTransferWithMemoAndTip(provider: BaseProvider) {
    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))
    const memo = createTraderAPIMemoInstruction("")

    const receiverPublicKey = new PublicKey(
        "7PMvo9sfhbwHpo2P4Y4XGySpzkodsMr2oa3v6UY1kag1"
    )
    const latestBlockhash = await provider.getRecentBlockHash({})

    let transaction = new Transaction({
        recentBlockhash: latestBlockhash.blockHash,
        feePayer: keypair.publicKey,
    })
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: receiverPublicKey,
                lamports: 0.000001 * LAMPORTS_PER_SOL,
            })
        )
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: new PublicKey(
                    "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"
                ),
                lamports: 0.0001 * LAMPORTS_PER_SOL,
            })
        )
    transaction = transaction.add(memo)

    transaction.sign(keypair)
    const buff = transaction.serialize()
    const encodedTxn = buff.toString("base64")
    const response = await provider.postSubmit({
        transaction: { content: encodedTxn, isCleanup: false },
        skipPreFlight: false,
    })
    console.info(response.signature)
}

async function submitTxWithMemo(provider: BaseProvider) {
    console.info("Retrieving recent blockHash")
    const recentBlockhash = await provider.getRecentBlockHash({})
    console.info(recentBlockhash.blockHash)
    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))
    const encodedTxn = buildUnsignedTxn(
        recentBlockhash.blockHash,
        keypair.publicKey
    )

    let encodedTxn2 = addMemoToSerializedTxn(encodedTxn)
    console.info("Submitting tx with memo")

    const tx = signTx(encodedTxn2, keypair)
    encodedTxn2 = txToBase64(tx)
    const response = await provider.postSubmit({
        transaction: { content: encodedTxn2, isCleanup: false },
        skipPreFlight: true,
    })
    console.info(response.signature)
}

function buildUnsignedTxn(
    recentBlockHash: string | undefined,
    owner: PublicKey
): string {
    const tx = new Transaction({
        recentBlockhash: recentBlockHash,
        feePayer: owner,
    })

    return tx.serialize({ verifySignatures: false }).toString(
        "base64"
    )
}

async function callSubmitSnipe(provider: BaseProvider) {
    console.info("Starting submit snipe test");

    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey));

    const response = await provider.getRecentBlockHash({});
    const recentBlockhash = response.blockHash;

    const smallTip = 100_000;
    const stakedTipThreshold = 1_000_000;
    const tipWallet = new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY");
    const jitoTipWallet = new PublicKey("96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5");

    // Create first transaction with two transfers
    const tx1 = new Transaction({
        recentBlockhash: recentBlockhash,
        feePayer: keypair.publicKey,
    }).add(
        SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey: jitoTipWallet,
            lamports: stakedTipThreshold,
        })
    ).add(
        SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey: tipWallet,
            lamports: smallTip,
        })
    );

    const tx2 = new Transaction({
        recentBlockhash: recentBlockhash,
        feePayer: keypair.publicKey,
    }).add(
        SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey: tipWallet,
            lamports: stakedTipThreshold,
        })
    );

    const serializedTx1 = tx1.serialize({ verifySignatures: false });
    const serializedTx2 = tx2.serialize({ verifySignatures: false });

    const transactions: TransactionMessage[] = [
        {
            content: serializedTx1.toString('base64'),
            isCleanup: false,
        },
        {
            content: serializedTx2.toString('base64'),
            isCleanup: false,
        }
    ];

    try {
        const signatures = await provider.signAndSubmitSnipeTx(
            transactions,
            false
        );

        console.info("Snipe signatures:", signatures);
        return false;
    } catch (error) {
        console.error("Failed to submit snipe request:", error);
        return true;
    }
}

async function callPlaceOrderBundle(
    provider: BaseProvider,
): Promise<boolean> {
    console.info("Starting place order with bundle");

    try {
        const response = await provider.getRecentBlockHash({});
        const blockHash = response.blockHash;

        const config = loadFromEnv();
        const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey));

        const computeBudgetIx = ComputeBudgetProgram.setComputeUnitPrice({
            microLamports: 200000000
        });

        const transferIx = SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey: new PublicKey("HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"),
            lamports: 10000000
        });

        const transaction = new Transaction({
            recentBlockhash: blockHash,
            feePayer: keypair.publicKey
        }).add(computeBudgetIx).add(transferIx);

        const serializedTransaction = transaction.serialize({ verifySignatures: false });
        const encodedTransaction = serializedTransaction.toString('base64');

        const transactionMessage: TransactionMessageV2 = {
            content: encodedTransaction,
        };

        const resp = await provider.signAndSubmitPaladinTx(
            transactionMessage,
            true
        );

        console.info("Submitted bundle order to trader api", resp);
        return false;
    } catch (error) {
        console.error("Failed to sign and submit order", error);
        return true;
    }
}

if (process.env.IS_UNIT_TEST !== "true")
    run()
        .then(() => {
            console.log("done!")
        })
        .catch(console.error)
