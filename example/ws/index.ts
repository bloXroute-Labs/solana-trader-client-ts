#!/usr/bin/env node

import { WsProvider } from "../../bxserum/provider/ws.js"
import { Constants } from "../../utils/constants.js";



await callOrderbookWs()
await callMarketsWs()
await callOrderbookStreamWs()


async function callOrderbookWs() {
    var ws = new WsProvider(Constants.LOCAL_API_WS)
    // Unary response
    try {
        var req = await ws.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
        console.info(JSON.stringify(req))
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    } finally {
        ws.close
    }

}

async function callMarketsWs() {
    var ws = new WsProvider(Constants.LOCAL_API_WS)
    // Unary response
    try {
        var req = await ws.getMarkets({ })
        console.info(JSON.stringify(req))
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    } finally {
        ws.close
    }

}

async function callOrderbookStreamWs() {
    var ws = new WsProvider(Constants.LOCAL_API_WS)
    // stream response
    try {
        var req = await ws.getOrderbookStream({ "market": "SOLUSDC", "limit": 5 });

        let count = 0
        for await (const ob of req) {
            console.info(JSON.stringify(ob))
            count++
            if (count == 5) {
                break
            }
        }

    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    } finally {
        ws.close
    }

}



