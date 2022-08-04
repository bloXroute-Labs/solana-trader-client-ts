#!/usr/bin/env node

import { GrpcProvider } from "../bxserum/provider/grpc.js"
import { BaseProvider } from "../bxserum/provider/base.js"
import { HttpProvider } from "../bxserum/provider/http.js"
import { WsProvider } from "../bxserum/provider/ws.js"
import { PostOrderRequest } from "../bxserum/proto/messages/api/index.js"
import config from "../utils/config.js"
import { TESTNET_API_GRPC_HOST, TESTNET_API_GRPC_PORT } from "../utils/constants.js"

const testOrder: PostOrderRequest = {
    ownerAddress: config.WalletPublicKey,
    payerAddress: config.WalletPublicKey,
    market: "SOLUSDC",
    side: "S_ASK",
    type: ["OT_LIMIT"],
    amount: 0.1,
    price: 200,
    openOrdersAddress: "58P7qwKiWZAR5HAeDjDjBGSnYBGbcR1t7SSBntnGJah5",
    clientOrderID: "",
}

function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function getRandom() {
    const min = 0
    const max = Math.floor(1000000000000)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function run() {
    await http()
    await grpc()
    await ws()
}

async function http() {
    const provider = new HttpProvider()
    console.info(" ----  HTTP Requests  ----")
    await doRequests(provider)
    console.info(" ----  HTTP Lifecycle  ----")
    await doHttpLifecycle(provider)
}

async function grpc() {
    const provider = new GrpcProvider()
    console.info(" ----  GRPC Requests  ----")
    await doRequests(provider)
    console.info(" ----  GRPC Streams  ----")
    await doStreams(provider)
    console.info(" ----  GRPC Lifecycle  ----")
    await doLifecycle(provider)
}

async function ws() {
    const provider = new WsProvider()
    console.info(" ----  WS Requests  ----")
    await doRequests(provider)
    console.info(" ----  WS Streams  ----")
    await doStreams(provider)
    console.info(" ----  WS Lifecycle  ----")
    await doLifecycle(provider)
}

async function doRequests(provider: BaseProvider) {
    await callGetOrderbook(provider)
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

    await callSubmitOrder(provider)
    console.info(" ")
    console.info(" ")

    await delay(60000)

    await callSubmitCancelByClientOrderID(provider)
    console.info(" ")
    console.info(" ")

    await delay(60000)

    await callSettleFunds(provider)
    console.info(" ")
    console.info(" ")
}

async function doStreams(provider: BaseProvider) {
    await callGetOrderbookStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetTickersStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetTradesStream(provider)
    console.info(" ")
    console.info(" ")
}

async function doLifecycle(provider: BaseProvider) {
    try {
        const mktAddress = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"

        await Promise.all([
            new Promise(async (resolve, reject) => {
                const req = await provider.getOrderStatusStream({ market: mktAddress, ownerAddress: testOrder.ownerAddress })
                for await (const ob of req) {
                    if (ob.orderInfo && ob.orderInfo.clientOrderID == testOrder.clientOrderID && ob.orderInfo.orderStatus == "OS_OPEN") {
                        console.info(`order went to orderbook ('${ob.orderInfo.orderStatus}') successfully`)
                        return resolve(null)
                    } else {
                        console.error(`order failed to get into orderbook`)
                        return reject(new Error("order failed to get into orderbook"))
                    }
                }
            }),
            new Promise(async (resolve, reject) => {
                try {
                    await delay(5000)
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
                const req = await provider.getOrderStatusStream({ market: mktAddress, ownerAddress: testOrder.ownerAddress })
                const clientOrderID = testOrder.clientOrderID
                let oldCanceled = false
                let newOpened = false
                for await (const ob of req) {
                    if (ob.orderInfo && ob.orderInfo.clientOrderID == clientOrderID && ob.orderInfo.orderStatus == "OS_CANCELLED") {
                        oldCanceled = true
                        console.info(`order canceled ('${ob.orderInfo.orderStatus}') successfully`)
                        if (oldCanceled && newOpened) {
                            return resolve(null)
                        }
                    } else if (ob.orderInfo && ob.orderInfo.clientOrderID == testOrder.clientOrderID && ob.orderInfo.orderStatus == "OS_OPEN") {
                        newOpened = true
                        console.info(`order went to orderbook ('${ob.orderInfo.orderStatus}') successfully`)
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
                const req = await provider.getOrderStatusStream({ market: mktAddress, ownerAddress: testOrder.ownerAddress })
                for await (const ob of req) {
                    if (ob.orderInfo && ob.orderInfo.clientOrderID == testOrder.clientOrderID && ob.orderInfo.orderStatus == "OS_CANCELLED") {
                        console.info(`order canceled ('${ob.orderInfo.orderStatus}') successfully`)
                        return resolve(null)
                    } else {
                        console.error(`order failed to cancel`)
                        return reject(new Error("order failed to cancel"))
                    }
                }
            }),
            new Promise(async (resolve, reject) => {
                try {
                    await delay(5000)
                    await callSubmitCancelByClientOrderID(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

async function doHttpLifecycle(provider: BaseProvider) {
    try {
        const mktAddress = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"

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

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

//unary requests
async function callGetOrderbook(provider: BaseProvider) {
    try {
        console.info("Retrieving orderbook for SOLUSDC market")
        let req = await provider.getOrderbook({ market: "SOLUSDC", limit: 5 })
        console.info(req)

        console.info("Retrieving orderbook for SOL-USDC market")
        req = await provider.getOrderbook({ market: "SOL-USDC", limit: 5 })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    }
}

async function callGetMarkets(provider: BaseProvider) {
    try {
        console.info("Retrieving all supported markets")
        const req = await provider.getMarkets({})
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the markets", error)
    }
}

async function callGetOpenOrders(provider: BaseProvider) {
    try {
        console.info("Retrieving all open orders in SOLUSDC market")
        const req = await provider.getOpenOrders({ market: "SOLUSDC", address: "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7", limit: 0 })
        console.info(req)
        return req.orders
    } catch (error) {
        console.error("Failed to retrieve open orders", error)
    }
}

async function callGetUnsettled(provider: BaseProvider) {
    try {
        console.info("Retrieving unsettled funds in SOLUSDC market")
        const req = await provider.getUnsettled({ market: "SOLUSDC", owner: "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7" })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetAccountBalance(provider: BaseProvider) {
    try {
        console.info("Retrieving token balances")
        const req = await provider.getAccountBalance({ ownerAddress: "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7" })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetTrades(provider: BaseProvider) {
    try {
        console.info("Retrieving trades for SOL/USDC market ")
        const req = await provider.getTrades({ market: "SOLUSDC", limit: 5 })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve trades", error)
    }
}

async function callGetTickers(provider: BaseProvider) {
    try {
        console.info("Retrieving tickers for SOL/USDC market ")
        const req = await provider.getTickers({ market: "SOLUSDC" })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve tickers", error)
    }
}

async function callGetServerTime(provider: BaseProvider) {
    try {
        console.info("Retrieving server time")
        const req = await provider.getServerTime({})
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve server time", error)
    }
}

//streaming requests
async function callGetOrderbookStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for orderbook updates of SOLUSDC market")
        let req = await provider.getOrderbooksStream({ markets: ["SOLUSDC"], limit: 5 })

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
        req = await provider.getOrderbooksStream({ markets: ["SOL-USDC"], limit: 5 })

        count = 0
        for await (const ob of req) {
            console.info(ob)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve orderbook updates for market SOL/USDC", error)
    }
}

async function callGetTickersStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for ticker updates of SOLUSDC market")
        const req = await provider.getTickersStream({ market: "SOLUSDC" })

        let count = 0
        for await (const tick of req) {
            console.info(tick)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve ticker updates for market SOL/USDC", error)
    }
}

async function callGetTradesStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for trade updates of SOLUSDC market")
        const req = await provider.getTradesStream({ market: "SOLUSDC", limit: 5 })

        let count = 0
        for await (const tr of req) {
            console.info(tr)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve trade for market SOL/USDC", error)
    }
}

//POST requests
async function callSubmitOrder(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a New Order transaction")
        const clientOrderID = getRandom()
        testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", { useGrouping: false })
        const req = await provider.submitOrder(testOrder)
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a New Order transaction", error)
    }
}

async function callSubmitCancelByClientOrderID(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a Cancel by Cient Order ID transaction")
        const req = await provider.submitCancelOrderByClientOrderID({
            marketAddress: "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT",
            ownerAddress: testOrder.ownerAddress,
            openOrdersAddress: testOrder.openOrdersAddress,
            clientOrderID: testOrder.clientOrderID,
        })
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Cancel by Cient Order ID transaction", error)
    }
}

async function callSettleFunds(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a Settle transaction")
        const req = await provider.submitSettle({
            market: testOrder.market,
            openOrdersAddress: testOrder.openOrdersAddress,
            baseTokenWallet: testOrder.ownerAddress,
            quoteTokenWallet: "4raJjCwLLqw8TciQXYruDEF4YhDkGwoEnwnAdwJSjcgv",
            ownerAddress: testOrder.ownerAddress,
        })
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Settle transaction", error)
    }
}

async function callReplaceByClientOrderID(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a Cancel and Replace by Cient Order ID transaction")
        const clientOrderID = getRandom()
        testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", { useGrouping: false })
        testOrder.price -= 1

        const req = await provider.submitReplaceByClientOrderID(testOrder)
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Cancel by Cient Order ID transaction", error)
    }
}

async function callReplaceOrder(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a Cancel and Replace by Cient Order ID transaction")
        const clientOrderID = getRandom()
        testOrder.clientOrderID = clientOrderID.toLocaleString("fullwide", { useGrouping: false })
        testOrder.price -= 1

        const req = await provider.submitReplaceOrder({ orderID: "", ...testOrder })
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Cancel by Cient Order ID transaction", error)
    }
}

// Run examples
run()
