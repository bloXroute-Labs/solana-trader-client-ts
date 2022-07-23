#!/usr/bin/env node

import { GrpcProvider } from "../bxserum/provider/grpc.js"
import { BaseProvider } from "../bxserum/provider/base.js"
import { HttpProvider } from "../bxserum/provider/http.js"
import { WsProvider } from "../bxserum/provider/ws.js"
import {GetOpenOrdersRequest, GetOpenOrdersResponse, PostOrderRequest, PostCancelAllRequest} from "../bxserum/proto/messages/api/index.js";
import config from "../utils/config.js";



const marketAddress = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT";
const ownerAddress = config.WalletPublicKey
const payerAddress = config.WalletPublicKey
const openOrdersAddress = "4zeos6Mg48sXGVE3XhdSeff72aLrSXayyzAM81QRegGz"
const baseTokenWallet = config.WalletPublicKey
const quoteTokenWallet = "4raJjCwLLqw8TciQXYruDEF4YhDkGwoEnwnAdwJSjcgv"

const testOrder: PostOrderRequest = {
    ownerAddress: ownerAddress,
    payerAddress: payerAddress,
    market: "SOLUSDC",
    side: "S_ASK",
    type: ["OT_LIMIT"],
    amount: 0.1,
    price: 200,
    openOrdersAddress: openOrdersAddress,
    clientOrderID: "",
}

const crank_timeout_s = 60

function delay(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function getRandom() {
    const min = 0;
    const max = Math.floor(1000000000000);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

await http()
await grpc()
await ws()


async function http() {
    const provider = new HttpProvider()
    console.info(" ----  HTTP Requests  ----")
    await doRequests(provider)
    console.info(" ----  HTTP Lifecycle  ----")
    await doHttpLifecycle(provider)
    console.info(" ----  HTTP Cancel All  ----")
    await callCancelAll(provider)
    console.info(" ")
}

async function grpc() {
    const provider = new GrpcProvider()
    console.info(" ----  GRPC Requests  ----")
    await doRequests(provider)
    console.info(" ----  GRPC Streams  ----")
    await doStreams(provider)
    console.info(" ----  GRPC Cancel All  ----")
    await callCancelAll(provider)
    console.info(" ----  GRPC Lifecycle  ----")
    await doLifecycle(provider)
    console.info(" ")
}

async function ws() {
    const provider = new WsProvider()
    console.info(" ----  WS Requests  ----")
    await doRequests(provider)
    console.info(" ----  WS Streams  ----")
    await doStreams(provider)
    console.info(" ----  WS Cancel All  ----")
    await callCancelAll(provider)
    console.info(" ----  WS Lifecycle  ----")
    await doLifecycle(provider)
    console.info(" ")
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
        const mktAddress = marketAddress

        await Promise.all([new Promise(async (resolve, reject) => {
            let req = await provider.getOrderStatusStream({ market: mktAddress, ownerAddress: testOrder.ownerAddress })
            for await (const ob of req) {
                if (ob.orderInfo && ob.orderInfo.clientOrderID == testOrder.clientOrderID && ob.orderInfo.orderStatus == "OS_OPEN") {
                    console.info(`order went to orderbook ('${ob.orderInfo.orderStatus}') successfully`)
                    return resolve(null)
                } else {
                    console.error(`order failed to get into orderbook`)
                    return reject(new Error("order failed to get into orderbook"))
                }
            }
        }), new Promise(async (resolve, reject) => {
            try {
                await delay(10000)
                await callSubmitOrder(provider)
                console.info(" ")
                console.info(" ")
                return resolve(null)
            } catch (err) {
                return reject(err)
            }
        })])


        await Promise.all([new Promise(async (resolve, reject) => {
            let req = await provider.getOrderStatusStream({ market: mktAddress, ownerAddress: ownerAddress })
            for await (const ob of req) {
                if (ob.orderInfo && ob.orderInfo.clientOrderID == testOrder.clientOrderID && ob.orderInfo.orderStatus == "OS_CANCELLED") {
                    console.info(`order canceled ('${ob.orderInfo.orderStatus}') successfully`)
                    return resolve(null)
                } else {
                    console.error(`order failed to cancel`)
                    return reject(new Error("order failed to cancel"))
                }
            }
        }), new Promise(async (resolve, reject) => {
            try {
                await delay(10000)
                await callSubmitCancelByClientOrderID(provider)
                console.info(" ")
                console.info(" ")
                return resolve(null)
            } catch (err) {
                return reject(err)
            }
        })])

        await callSettleFunds(provider)
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
        let req = await provider.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
        console.info(req)

        console.info("Retrieving orderbook for SOL-USDC market")
        req = await provider.getOrderbook({ "market": "SOL-USDC", "limit": 5 })
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
        const req = await provider.getOpenOrders({ "market": "SOLUSDC", "address": ownerAddress, "limit": 0 })
        console.info(req)
        return req.orders
    } catch (error) {
        console.error("Failed to retrieve open orders", error)
    }
}

async function callGetUnsettled(provider: BaseProvider) {
    try {
        console.info("Retrieving unsettled funds in SOLUSDC market")
        const req = await provider.getUnsettled({ "market": "SOLUSDC", "owner": ownerAddress })
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetAccountBalance(provider: BaseProvider) {
    try {
        console.info("Retrieving token balances")
        const req = await provider.getAccountBalance({ "ownerAddress": ownerAddress })
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetTrades(provider: BaseProvider) {
    try {
        console.info("Retrieving trades for SOL/USDC market ")
        const req = await provider.getTrades({ "market": "SOLUSDC", "limit": 5 })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve trades", error)
    }
}

async function callGetTickers(provider: BaseProvider) {
    try {
        console.info("Retrieving tickers for SOL/USDC market ")
        const req = await provider.getTickers({ "market": "SOLUSDC" })
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
        let req = await provider.getOrderbooksStream({ "markets": ["SOLUSDC"], "limit": 5 });

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
        req = await provider.getOrderbooksStream({ "markets": ["SOL-USDC"], "limit": 5 });

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
        let req = await provider.getTickersStream({ "market": "SOLUSDC" });

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
        let req = await provider.getTradesStream({ "market": "SOLUSDC", "limit": 5 });

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
        console.info("Generating and submitting a New Order transaction")
        const clientOrderID = getRandom()
        testOrder.clientOrderID = clientOrderID.toLocaleString('fullwide', { useGrouping: false })
        const req = await provider.submitOrder(testOrder)
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a New Order transaction", error)
        return ""
    }
}

async function callSubmitCancelByClientOrderID(provider: BaseProvider) {
    try {
        console.info("Generating and submitting a Cancel by Client Order ID transaction")
        const req = await provider.submitCancelOrderByClientOrderID({
            marketAddress: marketAddress,
            ownerAddress: ownerAddress,
            openOrdersAddress: openOrdersAddress,
            clientOrderID: testOrder.clientOrderID
        })
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Cancel by Client Order ID transaction", error)
        return ""
    }
}

async function callSettleFunds(provider: BaseProvider) {
    try {
        console.info("Generating and submiting a Settle transaction")
        const req = await provider.submitSettle({
            market: marketAddress,
            openOrdersAddress: openOrdersAddress,
            baseTokenWallet: baseTokenWallet,
            quoteTokenWallet: quoteTokenWallet,
            ownerAddress: ownerAddress
        })
        console.info(req)
    } catch (error) {
        console.error("Failed to generating and/or submit a Settle transaction", error)
        return ""
    }
}

async function callCancelAll(provider: BaseProvider) {
    try {
        console.info("Generating and placing two orders")
        let clientOrderID1 = getRandom().toLocaleString(`fullwide`, {useGrouping: false})
        let clientOrderID2 = getRandom().toLocaleString(`fullwide`, {useGrouping: false})

        // placing orders
        testOrder.clientOrderID = clientOrderID1
        let resp = await provider.submitOrder(testOrder)
        console.info(`Order 1 placed ${resp.signature}`)

        testOrder.clientOrderID = clientOrderID2
        resp = await provider.submitOrder(testOrder)
        console.info(`Order 2 placed ${resp.signature}`)

        console.info(`\nWaiting ${crank_timeout_s}s for place orders to be cranked`)

        // checking orders placed
         let openOrdersRequest: GetOpenOrdersRequest = {
             market: marketAddress,
             limit: 0,
             address: ownerAddress,
         }

        await delay(crank_timeout_s * 1000)
        let openOrdersResponse: GetOpenOrdersResponse = await provider.getOpenOrders(openOrdersRequest)

        let found1 = false
        let found2 = false
        for (let order of openOrdersResponse.orders) {
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
        let cancelAllRequest: PostCancelAllRequest = {
            market: marketAddress,
            ownerAddress: ownerAddress,
            openOrdersAddresses: [openOrdersAddress],
        }
        let submitCancelAllResponses = await provider.submitCancelAll(cancelAllRequest)

        let signatures: string[] = []
        for (let cancelAllResponse of submitCancelAllResponses) {
            signatures.push(cancelAllResponse.signature)
        }

        console.info(`Cancelling all orders, response signatures(s): ${signatures.join(", ")}`)
        console.info(`\nWaiting ${crank_timeout_s}s for cancel order(s) to be cranked`)

        // checking all orders cancelled
        await delay(crank_timeout_s * 1000)
        openOrdersResponse = await provider.getOpenOrders(openOrdersRequest)

        if (openOrdersResponse.orders.length !== 0) {
            console.error(`${openOrdersResponse.orders.length} orders not cancelled`)
            return ""
        }
        console.info("Orders in orderbook cancelled")
        console.info(" ")

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } catch (error) {
        console.error(error)
    }
}
