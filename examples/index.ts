#!/usr/bin/env node

import {
    addMemo,
    addMemoToSerializedTxn,
    BaseProvider,
    loadFromEnv,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GrpcProvider,
    HttpProvider,
    LOCAL_API_GRPC_HOST,
    LOCAL_API_GRPC_PORT,
    LOCAL_API_HTTP,
    LOCAL_API_WS,
    MAINNET_API_GRPC_HOST,
    MAINNET_API_GRPC_PORT,
    MAINNET_API_HTTP,
    MAINNET_API_WS,
    PostCancelAllRequest,
    PostOrderRequest,
    Project,
    TESTNET_API_GRPC_HOST,
    TESTNET_API_GRPC_PORT,
    TESTNET_API_HTTP,
    TESTNET_API_WS,
    TokenPair,
    WsProvider,
} from "../bxsolana"
import { Keypair } from "@solana/web3.js"
import base58 from "bs58"
import {
    DEVNET_API_GRPC_HOST,
    DEVNET_API_GRPC_PORT,
} from "../bxsolana/utils/constants"
import { AxiosRequestConfig } from "axios"

// if longer examples (placing and canceling transactions, etc. should be run)
const runLongExamples = process.env.RUN_LIFECYCLE === "true"
const runStreams = process.env.RUN_STREAMS === "true"

const config = loadFromEnv()

const marketAddress = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"
const ownerAddress = config.publicKey
const payerAddress = config.publicKey
const openOrdersAddress = "4zeos6Mg48sXGVE3XhdSeff72aLrSXayyzAM81QRegGz"
const baseTokenWallet = config.publicKey
const quoteTokenWallet = "4raJjCwLLqw8TciQXYruDEF4YhDkGwoEnwnAdwJSjcgv"

const testOrder: PostOrderRequest = {
    ownerAddress: ownerAddress,
    payerAddress: payerAddress,
    market: "SOLUSDC",
    side: "S_ASK",
    type: ["OT_LIMIT"],
    amount: 0.1,
    price: 200,
    openOrdersAddress: "",
    project: "P_UNKNOWN",
    clientOrderID: "",
}

const transactionWaitTimeS = 60
const httpTimeout = 4000
const httpLongTimeout = 10_000

function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function getRandom() {
    const min = 0
    const max = Math.floor(1000000000000)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function run() {
    console.info("---- STARTING HTTP TESTS ----")
    await http()
    console.info("---- STARTING GRPC TESTS ----")
    await grpc()
    console.info("---- STARTING WS TESTS ----")
    await ws()
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
            MAINNET_API_HTTP,
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

    console.info(" ----  HTTP Requests  ----")
    await doOrderbookRequests(provider)
    console.info(" ----  HTTP Amm Requests  ----")
    await doAmmRequests(provider)

    /* if (runLongExamples) {
        console.info(" ----  HTTP Lifecycle  ----")
        await doHttpLifecycle(provider)
        console.info(" ----  HTTP Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ")
    }*/

    return
}

async function grpc() {
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
            `${MAINNET_API_GRPC_HOST}:${MAINNET_API_GRPC_PORT}`,
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

    console.info(" ----  GRPC Requests  ----")
    await doOrderbookRequests(provider)

    console.info(" ----  GRPC Amm Requests  ----")
    await doAmmRequests(provider)

    if (runStreams) {
        console.info(" ----  GRPC Streams  ----")
        await doStreams(provider)
        console.info(" ----  GRPC Amm Streams  ----")
        await doAmmStreams(provider)
    }

    /*if (runLongExamples) {
        console.info(" ----  GRPC Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  GRPC Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }*/

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
            MAINNET_API_WS
        )
    } else {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            LOCAL_API_WS
        )
    }

    await provider.connect()
    console.info(" ----  WS Requests  ----")
    await doOrderbookRequests(provider)
    console.info(" ----  WS Amm Requests  ----")
    await doAmmRequests(provider)

    if (runStreams) {
        console.info(" ----  WS Streams  ----")
        await doStreams(provider)
        console.info(" ----  WS Amm Streams  ----")
        await doAmmStreams(provider)
    }

    /*if (runLongExamples) {
        console.info(" ----  WS Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  WS Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }*/

    return
}

async function doOrderbookRequests(provider: BaseProvider) {
    await callGetOrderbook(provider)
    console.info(" ")
    console.info(" ")

    await callGetMarketDepth(provider)
    console.info(" ")
    console.info(" ")

    await callGetMarkets(provider)
    console.info(" ")
    console.info(" ")

    await callGetOpenOrders(provider)
    console.info(" ")
    console.info(" ")

    await callGetUnsettled(provider)
    console.info(" ")
    console.info(" ")

    await callGetAccountBalance(provider)
    console.info(" ")
    console.info(" ")

    await callGetTrades(provider)
    console.info(" ")
    console.info(" ")

    await callGetTickers(provider)
    console.info(" ")
    console.info(" ")

    await callGetServerTime(provider)
    console.info(" ")
    console.info(" ")

    await callPostOrder(provider)
    console.info(" ")
    console.info(" ")

    await callPostCancelByClientOrderID(provider)
    console.info(" ")
    console.info(" ")

    await callPostSettleFunds(provider)
    console.info(" ")
    console.info(" ")

    // Drift
    await callGetPerpOrderbook(provider)
    console.info(" ")
    console.info(" ")
}

async function doAmmRequests(provider: BaseProvider) {
    await callGetPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetPools(provider)
    console.info(" ")
    console.info(" ")

    await callGetQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callPostTradeSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostRouteTradeSwap(provider)
    console.info(" ")
    console.info(" ")
}

async function doStreams(provider: BaseProvider) {
    await callGetOrderbookStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetMarketDepthStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetTickersStream(provider)
    console.info(" ")
    console.info(" ")

    if (runLongExamples) {
        await callGetTradesStream(provider)
        console.info(" ")
        console.info(" ")
    }

    await callGetRecentBlockHashStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBlockStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetPerpOrderbookStream(provider)
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
    await provider.cancelAllGetOrderbooksStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling trades stream")
    await provider.cancelAllGetTradesStream()
    console.info(" ")
    console.info(" ")
}

async function doAmmStreams(provider: BaseProvider) {
    await callGetPricesStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetPoolsStream(provider)
    console.info(" ")
    console.info(" ")

    if (runLongExamples) {
        await callGetSwapsStream(provider)
        console.info(" ")
        console.info(" ")
    }
}

async function doLifecycle(provider: BaseProvider) {
    try {
        const mktAddress = marketAddress

        await Promise.all([
            new Promise(async (resolve, reject) => {
                const req = await provider.getOrderStatusStream({
                    market: mktAddress,
                    project: "P_OPENBOOK",
                    ownerAddress: testOrder.ownerAddress,
                })
                for await (const ob of req) {
                    if (
                        ob.orderInfo &&
                        ob.orderInfo.clientOrderID == testOrder.clientOrderID &&
                        ob.orderInfo.orderStatus == "OS_OPEN"
                    ) {
                        console.info(
                            `order went to orderbook ('${ob.orderInfo.orderStatus}') successfully`
                        )
                        return resolve(null)
                    } else {
                        console.error(`order failed to get into orderbook`)
                        return reject(
                            new Error("order failed to get into orderbook")
                        )
                    }
                }
            }),
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
                const req = await provider.getOrderStatusStream({
                    market: mktAddress,
                    project: "P_OPENBOOK",
                    ownerAddress: testOrder.ownerAddress,
                })
                const clientOrderID = testOrder.clientOrderID
                let oldCanceled = false
                let newOpened = false
                for await (const ob of req) {
                    if (
                        ob.orderInfo &&
                        ob.orderInfo.clientOrderID == clientOrderID &&
                        ob.orderInfo.orderStatus == "OS_CANCELLED"
                    ) {
                        oldCanceled = true
                        console.info(
                            `order canceled ('${ob.orderInfo.orderStatus}') successfully`
                        )
                        if (oldCanceled && newOpened) {
                            return resolve(null)
                        }
                    } else if (
                        ob.orderInfo &&
                        ob.orderInfo.clientOrderID == testOrder.clientOrderID &&
                        ob.orderInfo.orderStatus == "OS_OPEN"
                    ) {
                        newOpened = true
                        console.info(
                            `order went to orderbook ('${ob.orderInfo.orderStatus}') successfully`
                        )
                        if (oldCanceled && newOpened) {
                            return resolve(null)
                        }
                    } else {
                        console.error(`order failed to cancel`)
                        return reject(new Error("order failed to cancel"))
                    }
                }
            }),
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
                const req = await provider.getOrderStatusStream({
                    market: mktAddress,
                    project: "P_OPENBOOK",
                    ownerAddress: testOrder.ownerAddress,
                })
                for await (const ob of req) {
                    if (
                        ob.orderInfo &&
                        ob.orderInfo.clientOrderID == testOrder.clientOrderID &&
                        ob.orderInfo.orderStatus == "OS_CANCELLED"
                    ) {
                        console.info(
                            `order canceled ('${ob.orderInfo.orderStatus}') successfully`
                        )
                        return resolve(null)
                    } else {
                        console.error(`order failed to cancel`)
                        return reject(new Error("order failed to cancel"))
                    }
                }
            }),
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

        let orders = await callGetOpenOrders(provider)
        if (!orders || orders.length == 0) {
            console.error(`order failed to get into orderbook`)
            return
        }

        await callSubmitCancelByClientOrderID(provider)
        console.info(" ")
        console.info(" ")

        await delay(60000)

        orders = await callGetOpenOrders(provider)
        if (!orders || orders.length > 0) {
            console.error(`order failed to cancel`)
            return
        }

        await callSubmitSettleFunds(provider)
        console.info(" ")
        console.info(" ")

        await submitTxWithMemo(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

async function callGetOrderbook(provider: BaseProvider) {
    console.info("Retrieving orderbook for SOLUSDC market")
    let req = await provider.getOrderbook({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
        limit: 5,
    })
    console.info(req)

    console.info("Retrieving orderbook for SOL-USDC market")
    req = await provider.getOrderbook({
        market: "SOL-USDC",
        project: "P_OPENBOOK",
        limit: 5,
    })
    console.info(req)
}

async function callGetMarketDepth(provider: BaseProvider) {
    console.info("Retrieving market depth data for SOLUSDC market")
    let req = await provider.getMarketDepth({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
        limit: 5,
    })
    console.info(req)

    console.info("Retrieving market depth data for SOL-USDC market")
    req = await provider.getMarketDepth({
        market: "SOL-USDC",
        project: "P_OPENBOOK",
        limit: 5,
    })
    console.info(req)
}

async function callGetMarkets(provider: BaseProvider) {
    console.info("Retrieving all supported markets")
    const req = await provider.getMarkets({})
    console.info(req)
}

async function callGetOpenOrders(provider: BaseProvider) {
    console.info("Retrieving all open orders in SOLUSDC market")
    const req = await provider.getOpenOrders({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
        address: ownerAddress,
        limit: 0,
        openOrdersAddress: "",
    })
    console.info(req)
    return req.orders
}

async function callGetUnsettled(provider: BaseProvider) {
    console.info("Retrieving unsettled funds in SOLUSDC market")
    const req = await provider.getUnsettled({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
        ownerAddress: ownerAddress,
    })
    console.info(req)
}

async function callGetAccountBalance(provider: BaseProvider) {
    console.info("Retrieving token balances")

    if (provider instanceof HttpProvider) {
        // endpoint is slower, so allow some more timeout
        provider.requestConfig.timeout = httpLongTimeout
    }

    const req = await provider.getAccountBalance({
        ownerAddress: ownerAddress,
    })
    console.info(req)

    if (provider instanceof HttpProvider) {
        // reset timeout
        provider.requestConfig.timeout = httpTimeout
    }
}

async function callGetTrades(provider: BaseProvider) {
    console.info("Retrieving trades for SOL/USDC market ")
    const req = await provider.getTrades({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
        limit: 5,
    })
    console.info(req)
}

async function callGetTickers(provider: BaseProvider) {
    console.info("Retrieving tickers for SOL/USDC market ")
    const req = await provider.getTickers({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
    })
    console.info(req)
}

async function callGetServerTime(provider: BaseProvider) {
    console.info("Retrieving server time")
    const req = await provider.getServerTime({})
    console.info(req)
}

async function callGetPrices(provider: BaseProvider) {
    console.info("Retrieving price")
    const resp = await provider.getPrice({ tokens: ["SOL", "USDC"] })
    console.info(resp)
}

async function callGetPools(provider: BaseProvider) {
    console.info("Retrieving pools")
    const resp = await provider.getPools({ projects: ["P_RAYDIUM"] })
    console.info(resp)
}

async function callGetQuotes(provider: BaseProvider) {
    console.info("Retrieving quotes")
    const resp = await provider.getQuotes({
        inToken: "SOL",
        outToken: "USDC",
        inAmount: 1,
        slippage: 5,
        limit: 5,
        projects: ["P_RAYDIUM", "P_JUPITER"],
    })
    console.info(resp)
}

async function callGetPerpOrderbook(provider: BaseProvider) {
    console.info("Retrieving orderbook for SOL-PERP market")
    const req = await provider.getPerpOrderbook({
        market: "SOL-PERP",
        project: "P_DRIFT",
        limit: 5,
    })
    console.info(req)
}

// streaming requests
async function callGetOrderbookStream(provider: BaseProvider) {
    console.info("Subscribing for orderbook updates of SOLUSDC market")
    let req = await provider.getOrderbooksStream({
        markets: ["SOLUSDC"],
        project: "P_OPENBOOK",
        limit: 5,
    })

    let count = 0
    for await (const ob of req) {
        console.info(ob)
        count++
        if (count == 5) {
            break
        }
    }
    console.info(" ")
    console.info(" ")

    console.info("Subscribing for orderbook updates of SOLUSDC market")
    req = await provider.getOrderbooksStream({
        markets: ["SOL-USDC"],
        project: "P_OPENBOOK",
        limit: 5,
    })

    count = 0
    for await (const ob of req) {
        console.info(ob)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetMarketDepthStream(provider: BaseProvider) {
    console.info("Subscribing for market depth data updates of SOLUSDC market")
    let req = await provider.getMarketDepthsStream({
        markets: ["SOLUSDC"],
        project: "P_OPENBOOK",
        limit: 5,
    })

    let count = 0
    for await (const ob of req) {
        console.info(ob)
        count++
        if (count == 5) {
            break
        }
    }
    console.info(" ")
    console.info(" ")

    console.info("Subscribing for market depth data updates of SOLUSDC market")
    req = await provider.getMarketDepthsStream({
        markets: ["SOL-USDC"],
        project: "P_OPENBOOK",
        limit: 5,
    })

    count = 0
    for await (const ob of req) {
        console.info(ob)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetTickersStream(provider: BaseProvider) {
    console.info("Subscribing for ticker updates of SOLUSDC market")
    const req = await provider.getTickersStream({
        market: "SOLUSDC",
        project: "P_OPENBOOK",
    })

    let count = 0
    for await (const tick of req) {
        console.info(tick)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetTradesStream(provider: BaseProvider) {
    console.info("Subscribing for trade updates of SOLUSDC market")
    const req = await provider.getTradesStream({
        market: "SOLUSDC",
        limit: 5,
        project: "P_OPENBOOK",
    })

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetSwapsStream(provider: BaseProvider) {
    console.info("Subscribing for swap updates of RAY/SOL market")
    const req = await provider.getSwapsStream({
        projects: ["P_RAYDIUM"],
        pools: ["AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA"],
        includeFailed: true,
    })

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPricesStream(provider: BaseProvider) {
    console.info("Subscribing for prices updates of SOL and USDC on Raydium")

    const projects: Project[] = ["P_RAYDIUM", "P_JUPITER"]
    const tokens: string[] = ["SOL", "USDC"]
    const stream = await provider.getPricesStream({
        projects: projects,
        tokens,
    })

    let count = 0
    for await (const update of stream) {
        console.info(update)
        count++
        if (count == 3) {
            break
        }
    }
}

async function callGetPoolsStream(provider: BaseProvider) {
    console.info("Subscribing for pool updates of Raydium")

    const projects: Project[] = ["P_RAYDIUM"]
    const stream = await provider.getPoolReservesStream({
        projects: projects,
    })

    let count = 0
    for await (const update of stream) {
        console.info(update)
        count++
        if (count == 3) {
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

// Drift
async function callGetPerpOrderbookStream(provider: BaseProvider) {
    console.info("Subscribing for orderbook updates of SOL-PERP market")
    const req = await provider.getPerpOrderbooksStream({
        markets: ["SOL-PERP"],
        project: "P_DRIFT",
        limit: 0,
    })

    let count = 0
    for await (const ob of req) {
        console.info(ob)
        count++
        if (count == 5) {
            break
        }
    }
    console.info(" ")
    console.info(" ")
}

// POST requests
async function callPostOrder(provider: BaseProvider) {
    console.info("generating New Order transaction")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.openOrdersAddress = openOrdersAddress
    const req = await provider.postOrder(testOrder)
    console.info(req)
}

async function callSubmitOrder(provider: BaseProvider) {
    console.info("Generating and submitting a New Order transaction")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    const req = await provider.submitOrder(testOrder)
    console.info(req)
}

async function callPostCancelByClientOrderID(provider: BaseProvider) {
    console.info("Generating and Cancel by Client Order ID transaction")
    const req = await provider.postCancelByClientOrderID({
        marketAddress: marketAddress,
        ownerAddress: ownerAddress,
        openOrdersAddress: openOrdersAddress,
        clientOrderID: testOrder.clientOrderID,
        project: "P_OPENBOOK",
    })
    console.info(req)
}

async function callSubmitCancelByClientOrderID(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel by Client Order ID transaction"
    )
    const req = await provider.submitCancelOrderByClientOrderID({
        marketAddress: marketAddress,
        ownerAddress: ownerAddress,
        openOrdersAddress: openOrdersAddress,
        clientOrderID: testOrder.clientOrderID,
        project: "P_OPENBOOK",
    })
    console.info(req)
}

async function callPostSettleFunds(provider: BaseProvider) {
    console.info("Generating a Settle transaction")
    const req = await provider.postSettle({
        market: marketAddress,
        openOrdersAddress: openOrdersAddress,
        baseTokenWallet: baseTokenWallet,
        quoteTokenWallet: quoteTokenWallet,
        ownerAddress: ownerAddress,
        project: "P_OPENBOOK",
    })
    console.info(req)
}

async function callSubmitSettleFunds(provider: BaseProvider) {
    console.info("Generating and submitting a Settle transaction")
    const req = await provider.submitSettle({
        market: marketAddress,
        openOrdersAddress: openOrdersAddress,
        baseTokenWallet: baseTokenWallet,
        quoteTokenWallet: quoteTokenWallet,
        ownerAddress: ownerAddress,
        project: "P_OPENBOOK",
    })
    console.info(req)
}

async function callReplaceByClientOrderID(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel and Replace by Client Order ID transaction"
    )
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.price -= 1

    const req = await provider.submitReplaceByClientOrderID(testOrder)
    console.info(req)
}

async function callPostTradeSwap(provider: BaseProvider) {
    console.info("Generating a trade swap")
    const response = await provider.postTradeSwap({
        ownerAddress: ownerAddress,
        inToken: "USDC",
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        project: "P_RAYDIUM",
    })
    console.info(response)
}

async function callSubmitTradeSwap(provider: BaseProvider) {
    console.info("Submitting a trade swap")
    const responses = await provider.submitTradeSwap(
        {
            ownerAddress: ownerAddress,
            inToken: "USDC",
            outToken: "SOL",
            inAmount: 0.01,
            slippage: 0.1,
            project: "P_RAYDIUM",
        },
        "P_SUBMIT_ALL",
        true
    )

    for (const transaction of responses.transactions) {
        console.info(transaction.signature)
    }
}

async function callPostRouteTradeSwap(provider: BaseProvider) {
    console.info("Generating a route trade swap")
    const response = await provider.postRouteTradeSwap({
        ownerAddress: ownerAddress,
        steps: [
            {
                project: {
                    // pool ID can be empty if outToken is specified
                    id: "",
                    label: "Raydium",
                },
                inToken: "FIDA",
                // RAY token address
                // can be omitted if project.id is specified
                outToken: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
                inAmount: 0.01,
                outAmount: 0.007505,
                outAmountMin: 0.074,
            },
            {
                project: {
                    id: "",
                    label: "Raydium",
                },
                inToken: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
                outToken: "USDC",
                inAmount: 0.007505,
                outAmount: 0.004043,
                outAmountMin: 0.004,
            },
        ],
        project: "P_RAYDIUM",
    })
    console.info(response)
}
async function callSubmitRouteTradeSwap(provider: BaseProvider) {
    console.info("Submitting a route trade swap")
    const responses = await provider.submitRouteTradeSwap(
        {
            ownerAddress: ownerAddress,
            steps: [
                {
                    inToken: "FIDA",
                    outToken: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
                    inAmount: 0.01,
                    outAmount: 0.007505,
                    outAmountMin: 0.074,
                },
                {
                    inToken: "4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
                    outToken: "USDC",
                    inAmount: 0.007505,
                    outAmount: 0.004043,
                    outAmountMin: 0.004,
                },
            ],
            project: "P_RAYDIUM",
        },
        "P_SUBMIT_ALL",
        true
    )

    for (const transaction of responses.transactions) {
        console.info(transaction.signature)
    }
}

async function callReplaceOrder(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel and Replace by Client Order ID transaction"
    )
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.price -= 1

    const req = await provider.submitReplaceOrder({
        orderID: "",
        ...testOrder,
    })
    console.info(req)
}

async function callCancelAll(provider: BaseProvider) {
    console.info("Generating and placing two orders")
    const clientOrderID1 = getRandom().toLocaleString(`fullwide`, {
        useGrouping: false,
    })
    const clientOrderID2 = getRandom().toLocaleString(`fullwide`, {
        useGrouping: false,
    })

    // placing orders
    testOrder.clientOrderID = clientOrderID1
    const resp1 = await provider.submitOrder(testOrder)
    console.info(`Order 1 placed ${resp1.signature}`)

    testOrder.clientOrderID = clientOrderID2
    const resp2 = await provider.submitOrder(testOrder)
    console.info(`Order 2 placed ${resp2.signature}`)

    console.info(
        `\nWaiting ${transactionWaitTimeS}s for place orders to be cranked`
    )

    // checking orders placed
    const openOrdersRequest: GetOpenOrdersRequest = {
        market: marketAddress,
        limit: 0,
        address: ownerAddress,
        openOrdersAddress: "",
        project: "P_OPENBOOK",
    }

    await delay(transactionWaitTimeS * 1000)
    const openOrdersResponse1: GetOpenOrdersResponse =
        await provider.getOpenOrders(openOrdersRequest)

    let found1 = false
    let found2 = false
    for (const order of openOrdersResponse1.orders) {
        if (order.clientOrderID === clientOrderID1) {
            found1 = true
        } else if (order.clientOrderID === clientOrderID2) {
            found2 = true
        }
    }

    if (!found1 || !found2) {
        console.error("One/both orders not found in orderbook")
        return ""
    }
    console.info("Both orders placed successfully\n")

    // cancelling orders
    const cancelAllRequest: PostCancelAllRequest = {
        market: marketAddress,
        ownerAddress: ownerAddress,
        openOrdersAddresses: [openOrdersAddress],
        project: "P_OPENBOOK",
    }
    const response = await provider.submitCancelAll(cancelAllRequest)

    const signatures: string[] = []
    for (const transaction of response.transactions) {
        signatures.push(transaction.signature)
    }

    console.info(
        `Cancelling all orders, response signatures(s): ${signatures.join(
            ", "
        )}`
    )
    console.info(
        `\nWaiting ${transactionWaitTimeS}s for cancel order(s) to be cranked`
    )

    // checking all orders cancelled
    await delay(transactionWaitTimeS * 1000)
    const openOrdersResponse2 = await provider.getOpenOrders(openOrdersRequest)

    if (openOrdersResponse2.orders.length !== 0) {
        console.error(
            `${openOrdersResponse2.orders.length} orders not cancelled`
        )
        return ""
    }
    console.info("Orders in orderbook cancelled")
    console.info(" ")

    await callSubmitSettleFunds(provider)
    console.info(" ")
    console.info(" ")
}

async function submitTxWithMemo(provider: BaseProvider) {
    console.info("Retrieving recent blockHash")
    const recentBlockhash = await provider.getRecentBlockHash({})
    console.info(recentBlockhash.blockHash)
    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))
    const encodedTxn = addMemo(
        [],
        "new memo by dev",
        recentBlockhash.blockHash,
        keypair.publicKey,
        keypair
    )
    console.info("Submitting tx with one memo")
    let response = await provider.postSubmit({
        transaction: { content: encodedTxn, isCleanup: false },
        skipPreFlight: true,
    })
    console.info(response.signature)

    const encodedTxn2 = addMemoToSerializedTxn(
        encodedTxn,
        "new memo by dev2",
        keypair.publicKey,
        keypair
    )
    console.info("Submitting tx with two memos")
    response = await provider.postSubmit({
        transaction: { content: encodedTxn2, isCleanup: false },
        skipPreFlight: true,
    })
    console.info(response.signature)
}

run().then(() => {
    console.log("done!")
    process.exit(0)
})
