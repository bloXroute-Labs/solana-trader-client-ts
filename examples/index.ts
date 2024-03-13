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
    Project,
    TESTNET_API_GRPC_HOST,
    TESTNET_API_GRPC_PORT,
    TESTNET_API_HTTP,
    TESTNET_API_WS,
    WsProvider,
    signTx,
    GetOpenOrdersRequestV2,
    PostCancelOrderRequestV2,
    PostOrderRequestV2,
    MAINNET_API_NY_HTTP,
    MAINNET_API_NY_GRPC,
    MAINNET_API_NY_WS,
    GetPriorityFeeRequest,
} from "../bxsolana"
import { Keypair, PublicKey, Transaction } from "@solana/web3.js"
import base58 from "bs58"
import {
    DEVNET_API_GRPC_HOST,
    DEVNET_API_GRPC_PORT,
} from "../bxsolana/utils/constants"
import { AxiosRequestConfig } from "axios"
import { txToBase64 } from "../bxsolana/utils/transaction"
import { $ } from "../bxsolana/proto/messages/api/GetOpenOrdersResponseV2"
import GetOpenOrdersResponseV2 = $.api.GetOpenOrdersResponseV2

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

    console.info(" ----  HTTP Amm Requests  ----")
    await doAmmRequests(provider)

    console.info(" ----  HTTP Requests  ----")
    await doOrderbookRequests(provider)

    if (runLongExamples) {
        console.info(" ----  HTTP Lifecycle  ----")
        await doHttpLifecycle(provider)

        console.info(" ----  HTTP Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ")
    }

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

    console.info(" ----  GRPC Amm Requests  ----")
    await doAmmRequests(provider)

    console.info(" ----  GRPC Requests  ----")
    await doOrderbookRequests(provider)

    if (runStreams) {
        console.info(" ----  GRPC Streams  ----")
        await doStreams(provider)
        console.info(" ----  GRPC Amm Streams  ----")
        await doAmmStreams(provider)
    }

    if (runLongExamples) {
        console.info(" ----  GRPC Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  GRPC Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

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

    console.info(" ----  WS Amm Requests  ----")
    await doAmmRequests(provider)

    console.info(" ----  WS Requests  ----")
    await doOrderbookRequests(provider)

    if (runStreams) {
        console.info(" ----  WS Streams  ----")
        await doStreams(provider)
        console.info(" ----  WS Amm Streams  ----")
        await doAmmStreams(provider)
    }

    if (runLongExamples) {
        console.info(" ----  WS Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  WS Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

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

    await callPostOrderWithPriorityFee(provider)
    console.info(" ")
    console.info(" ")

    await callPostCancelByClientOrderID(provider)
    console.info(" ")
    console.info(" ")

    await callPostSettleFunds(provider)
    console.info(" ")
    console.info(" ")
}

async function doAmmRequests(provider: BaseProvider) {
    await callGetRaydiumPoolReserve(provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumPools(provider)
    console.info(" ")
    console.info(" ")

    await callGetTransaction(provider)
    console.info(" ")
    console.info(" ")

    await callGetRateLimit(provider)
    console.info(" ")
    console.info(" ")

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

    await callPostTradeSwapWithPriorityFee(provider)
    console.info(" ")
    console.info(" ")

    await callPostRouteTradeSwap(provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetJupiterPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callGetJupiterQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callPostRaydiumSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwapInstructions(provider)
    console.info(" ")
    console.info(" ")

    await callPostRaydiumRouteSwap(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFee(provider)
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

        await callGetNewRaydiumPoolsStream(provider)
        console.info(" ")
        console.info(" ")
    }

    await callGetRecentBlockHashStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBlockStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFeeStream(provider)
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

async function doAmmStreams(provider: BaseProvider) {
    if (runLongExamples) {
        await callGetPricesStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetPoolsStream(provider)
        console.info(" ")
        console.info(" ")

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
    let req = await provider.getOrderbookV2({
        market: "SOLUSDC",
        limit: 5,
    })
    console.info(req)

    console.info("Retrieving orderbook for SOL-USDC market")
    req = await provider.getOrderbookV2({
        market: "SOL-USDC",
        limit: 5,
    })
    console.info(req)
}

async function callGetMarketDepth(provider: BaseProvider) {
    console.info("Retrieving market depth data for SOLUSDC market")
    let req = await provider.getMarketDepthV2({
        market: "SOLUSDC",
        limit: 5,
    })
    console.info(req)

    console.info("Retrieving market depth data for SOL-USDC market")
    req = await provider.getMarketDepthV2({
        market: "SOL-USDC",
        limit: 5,
    })
    console.info(req)
}

async function callGetMarkets(provider: BaseProvider) {
    console.info("Retrieving all supported markets")
    const req = await provider.getMarketsV2({})
    console.info(req)
}

async function callGetOpenOrders(provider: BaseProvider) {
    console.info("Retrieving all open orders in SOLUSDC market")
    const req = await provider.getOpenOrdersV2({
        market: "SOLUSDC",
        limit: 0,
        address: ownerAddress,
        openOrdersAddress: "",
        orderID: "",
        clientOrderID: "0",
    })
    console.info(req)
    return req.orders
}

async function callGetUnsettled(provider: BaseProvider) {
    console.info("Retrieving unsettled funds in SOLUSDC market")
    const req = await provider.getUnsettledV2({
        market: "SOLUSDC",
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
    const req = await provider.getTickersV2({
        market: "SOLUSDC",
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
    const resp = await provider.getPrice({ tokens: ["SOL"] })
    console.info(resp)
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

async function callGetRaydiumPrices(provider: BaseProvider) {
    console.info("Retrieving Raydium price")
    const resp = await provider.getRaydiumPrices({ tokens: ["SOL"] })
    console.info(resp)
}

async function callGetJupiterPrices(provider: BaseProvider) {
    console.info("Retrieving Jupiter price")
    const resp = await provider.getJupiterPrices({ tokens: ["SOL"] })
    console.info(resp)
}

async function callGetPools(provider: BaseProvider) {
    console.info("Retrieving pools")
    const resp = await provider.getPools({
        projects: ["P_RAYDIUM"],
        pairOrAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", // sol/usdc
    })
    console.info(resp)
}

async function callGetRaydiumPoolReserve(provider: BaseProvider) {
    console.info("Retrieving Raydium pool reserve")
    const resp = await provider.getRaydiumPoolReserve({
        pairsOrAddresses: [
            "HZ1znC9XBasm9AMDhGocd9EHSyH8Pyj1EUdiPb4WnZjo",
            "D8wAxwpH2aKaEGBKfeGdnQbCc2s54NrRvTDXCK98VAeT",
            "DdpuaJgjB2RptGMnfnCZVmC4vkKsMV6ytRa2gggQtCWt",
        ],
    })
    console.info(resp)
}

async function callGetRaydiumPools(provider: BaseProvider) {
    console.info("Retrieving Raydium pools")
    const resp = await provider.getRaydiumPools({})
    // prints too much info
    console.info(resp)
}

async function callGetQuotes(provider: BaseProvider) {
    console.info("Retrieving quotes")
    const resp = await provider.getQuotes({
        inToken: "SOL",
        outToken: tokenAddress,
        inAmount: 1,
        slippage: 5,
        limit: 5,
        projects: ["P_RAYDIUM", "P_JUPITER"],
    })
    console.info(resp)
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

async function callGetRaydiumQuotes(provider: BaseProvider) {
    console.info("Retrieving Raydium quotes")
    const resp = await provider.getRaydiumQuotes({
        inToken: "SOL",
        outToken: tokenAddress,
        inAmount: 1,
        slippage: 5,
    })
    console.info(resp)
}

async function callGetPriorityFee(provider: BaseProvider) {
    console.info("Retrieving priority fee")
    const resp = await provider.getPriorityFee({
        project: "P_RAYDIUM",
    })
    console.info(resp)
}

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
        markets: [
            "BONK/SOL",
            "wSOL/RAY",
            "BONK/RAY",
            "RAY/USDC",
            "SOL/USDC",
            "SOL/USDC",
            "RAY/USDC",
            "USDT/USDC",
        ],
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

async function callGetNewRaydiumPoolsStream(provider: BaseProvider) {
    console.info("Subscribing for new raydium pool updates")
    const req = await provider.getNewRaydiumPoolsStream({})

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
    console.info("Subscribing for prices updates of SOL and USDT on Raydium")

    const projects: Project[] = ["P_RAYDIUM", "P_JUPITER"]
    const tokens: string[] = ["SOL", tokenAddress]
    const stream = await provider.getPricesStream({
        projects: projects,
        tokens,
    })

    let count = 0
    for await (const update of stream) {
        console.info(update)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPoolsStream(provider: BaseProvider) {
    console.info("Subscribing for pool updates of Raydium")

    const projects: Project[] = ["P_RAYDIUM"]
    const pools: string[] = ["4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"]
    const stream = await provider.getPoolReservesStream({
        projects: projects,
        pools: pools,
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

async function callGetPriorityFeeStream(provider: BaseProvider) {
    console.info("Subscribing for priority fee updates")
    const resp = await provider.getPriorityFeeStream({
        project: "P_RAYDIUM",
    })

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

// POST requests
async function callPostOrder(provider: BaseProvider) {
    console.info("generating New Order transaction")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.openOrdersAddress = openOrdersAddress
    const req = await provider.postOrderV2(testOrder)
    console.info(req)
}

async function callPostOrderWithPriorityFee(provider: BaseProvider) {
    console.info("generating New Order transaction with priority fee")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.openOrdersAddress = openOrdersAddress
    const req = await provider.postOrderV2({
        ...testOrder,
        computeLimit: 10000,
        computePrice: "2000",
    })
    console.info(req)
}

async function callSubmitOrder(provider: BaseProvider) {
    console.info("Generating and submitting a New Order transaction")
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    const req = await provider.submitOrderV2(testOrder)
    console.info(req)
}

async function callPostCancelByClientOrderID(provider: BaseProvider) {
    console.info("Generating and Cancel by Client Order ID transaction")
    const req = await provider.postCancelOrderV2({
        marketAddress: marketAddress,
        ownerAddress: ownerAddress,
        openOrdersAddress: openOrdersAddress,
        clientOrderID: testOrder.clientOrderID,
        orderID: "",
        side: "S_ASK",
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
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

async function callPostSettleFunds(provider: BaseProvider) {
    console.info("Generating a Settle transaction")
    const req = await provider.postSettleV2({
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

async function callPostTradeSwap(provider: BaseProvider) {
    console.info("Generating a trade swap")
    const response = await provider.postTradeSwap({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        project: "P_RAYDIUM",
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callPostTradeSwapWithPriorityFee(provider: BaseProvider) {
    console.info("Generating a trade swap")
    const response = await provider.postTradeSwap({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        project: "P_RAYDIUM",
        computeLimit: 10000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostRaydiumSwap(provider: BaseProvider) {
    console.info("Generating a Raydium swap")
    const response = await provider.postRaydiumSwap({
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

async function callPostRouteTradeSwap(provider: BaseProvider) {
    console.info("Generating a route trade swap")
    const response = await provider.postRouteTradeSwap({
        ownerAddress: ownerAddress,
        slippage: 10,
        steps: [
            {
                project: {
                    // pool ID can be empty if outToken is specified
                    id: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    label: "Raydium",
                },
                inToken: "So11111111111111111111111111111111111111112",
                // RAY token address
                // can be omitted if project.id is specified
                outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                inAmount: 0.01,
                outAmount: 0.007505,
                outAmountMin: 0.074,
            },
        ],
        project: "P_RAYDIUM",
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callPostRaydiumRouteSwap(provider: BaseProvider) {
    console.info("Generating a Raydium route swap")
    const response = await provider.postRaydiumRouteSwap({
        ownerAddress: ownerAddress,
        slippage: 10,
        steps: [
            {
                poolAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                project: {
                    // pool ID can be empty if outToken is specified
                    id: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    label: "Raydium",
                },
                inToken: "So11111111111111111111111111111111111111112",
                // RAY token address
                // can be omitted if project.id is specified
                outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                inAmount: 0.01,
                outAmount: 0.007505,
                outAmountMin: 0.074,
            },
        ],
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    })
    console.info(response)
}

async function callSubmitRouteTradeSwap(provider: BaseProvider) {
    console.info("Submitting a route trade swap")
    const responses = await provider.submitRouteTradeSwap(
        {
            ownerAddress: ownerAddress,
            slippage: 0.25,
            steps: [
                {
                    project: {
                        label: "Raydium",
                        id: "61acRgpURKTU8LKPJKs6WQa18KzD9ogavXzjxfD84KLu",
                    },
                    inToken: tokenAddress,
                    outToken: "SOL",
                    inAmount: 0.01,
                    outAmount: 0.000123425,
                    outAmountMin: 0.000123117,

                    // fee must be specified for each step if project is Jupiter
                    fee: {
                        amount: 0.000025,
                        mint: tokenAddress,
                        percent: 0.0025062656,
                    },
                },
            ],
            project: "P_JUPITER",
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

async function callReplaceOrder(provider: BaseProvider) {
    console.info(
        "Generating and submitting a Cancel and Replace by Client Order ID transaction"
    )
    const clientOrderID = getRandom()
    testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", {
        useGrouping: false,
    })
    testOrder.price -= 1

    const req = await provider.submitReplaceOrderV2({
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
    const resp1 = await provider.submitOrderV2(testOrder)
    console.info(`Order 1 placed ${resp1.signature}`)

    testOrder.clientOrderID = clientOrderID2
    const resp2 = await provider.submitOrderV2(testOrder)
    console.info(`Order 2 placed ${resp2.signature}`)

    console.info(
        `\nWaiting ${transactionWaitTimeS}s for place orders to be cranked`
    )

    // checking orders placed
    const openOrdersRequest: GetOpenOrdersRequestV2 = {
        market: marketAddress,
        limit: 0,
        address: ownerAddress,
        openOrdersAddress: "",
        orderID: "",
        clientOrderID: "0",
    }

    await delay(transactionWaitTimeS * 1000)
    const openOrdersResponse1: GetOpenOrdersResponseV2 =
        await provider.getOpenOrdersV2(openOrdersRequest)

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
    const cancelAllRequest: PostCancelOrderRequestV2 = {
        ownerAddress: ownerAddress,
        openOrdersAddress: openOrdersAddress,
        orderID: "",
        side: "S_UNKNOWN",
        marketAddress: marketAddress,
        clientOrderID: "0",
        computeLimit: testOrder.computeLimit,
        computePrice: testOrder.computePrice,
    }
    const response = await provider.submitCancelOrderV2(cancelAllRequest)

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
    const openOrdersResponse2 = await provider.getOpenOrdersV2(
        openOrdersRequest
    )

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

run().then(() => {
    console.log("done!")
    process.exit(0)
})

function buildUnsignedTxn(
    recentBlockHash: string | undefined,
    owner: PublicKey
): string {
    const tx = new Transaction({
        recentBlockhash: recentBlockHash,
        feePayer: owner,
    })

    return Buffer.from(tx.serialize({ verifySignatures: false })).toString(
        "base64"
    )
}
