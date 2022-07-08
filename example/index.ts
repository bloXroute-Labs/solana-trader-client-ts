#!/usr/bin/env node

import { GrpcProvider } from "../bxserum/provider/grpc.js"
import { BaseProvider } from "../bxserum/provider/base.js"
import { HttpProvider } from "../bxserum/provider/http.js"
import { WsProvider } from "../bxserum/provider/ws.js"

await http()
await grpc()
await ws()


async function http() {
    const provider = new HttpProvider()
    console.info(" ----  HTTP Requests  ----")
    await doRequests(provider)
}

async function grpc() {
    const provider = new GrpcProvider()
    console.info(" ----  GRPC Requests  ----")
    await doRequests(provider)
    console.info(" ----  GRPC Streams  ----")
    await doStreams(provider)
}

async function ws() {
    const provider = new WsProvider()
    console.info(" ----  WS Requests  ----")
    await doRequests(provider)
    console.info(" ----  WS Streams  ----")
    await doStreams(provider)
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
}

async function doStreams(provider: BaseProvider) {
    try {
        await callGetOrderbookStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetTickersStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetTradesStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetFilteredOrderbookStream(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

//unary requests
async function callGetOrderbook(g: BaseProvider) {
    try {
        console.info("Retrieving orderbook for SOLUSDC market")
        let req = await g.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
        console.info(req)

        console.info("Retrieving orderbook for SOL-USDC market")
        req = await g.getOrderbook({ "market": "SOL-USDC", "limit": 5 })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    }
}

async function callGetMarkets(g: BaseProvider) {
    try {
        console.info("Retrieving orderbook all supported markets")
        const req = await g.getMarkets({})
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve the markets", error)
    }
}

async function callGetOpenOrders(g: BaseProvider) {
    try {
        console.info("Retrieving all open orders in SOLUSDC market")
        const req = await g.getOpenOrders({ "market": "SOLUSDC", "address": "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7", "limit": 0 })
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve open orders", error)
    }
}

async function callGetUnsettled(g: BaseProvider) {
    try {
        console.info("Retrieving unsettled funds in SOLUSDC market")
        const req = await g.getUnsettled({ "market": "SOLUSDC", "owner": "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7" })
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetAccountBalance(g: BaseProvider) {
    try {
        console.info("Retrieving token balances")
        const req = await g.getAccountBalance({ "ownerAddress": "F75gCEckFAyeeCWA9FQMkmLCmke7ehvBnZeVZ3QgvJR7" })
        console.info(req)

    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetTrades(g: BaseProvider) {
    try {
        console.info("Retrieving trades for SOL/USDC market ")
        const req = await g.getTrades({ "market": "SOLUSDC", "limit": 5 })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve trades", error)
    }
}

async function callGetTickers(g: BaseProvider) {
    try {
        console.info("Retrieving tickers for SOL/USDC market ")
        const req = await g.getTickers({ "market": "SOLUSDC" })
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve tickers", error)
    }
}

async function callGetServerTime(g: BaseProvider) {
    try {
        console.info("Retrieving server time")
        const req = await g.getServerTime({})
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve server time", error)
    }
}


//streaming requests
async function callGetOrderbookStream(g: BaseProvider) {
    try {
        console.info("Subscribing for orderbook updates of SOLUSDC market")
        let req = await g.getOrderbooksStream({ "market": "SOLUSDC", "limit": 5 });

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
        req = await g.getOrderbooksStream({ "market": "SOL-USDC", "limit": 5 });

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

async function callGetTickersStream(g: BaseProvider) {
    try {
        console.info("Subscribing for ticker updates of SOLUSDC market")
        let req = await g.getTickersStream({ "market": "SOLUSDC" });

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

async function callGetTradesStream(g: BaseProvider) {
    try {
        console.info("Subscribing for trade updates of SOLUSDC market")
        let req = await g.getTradesStream({ "market": "SOLUSDC", "limit": 5 });

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

async function callGetFilteredOrderbookStream(g: BaseProvider) {
    try {
        console.info("Subscribing for orderbook updates of SOLUSDC market")
        let req = await g.getFilteredOrderbooksStream({ "markets": ["SOLUSDC, SOLUSDT"], "limit": 5 });

        let count = 0
        for await (const ob of req) {
            console.info(ob)
            count++
            if (count == 5) {
                break
            }
        }     

    } catch (error) {
        console.error("Failed to retrieve orderbook updates for markets SOL/USDC and SOL/USDT", error)
    }
}