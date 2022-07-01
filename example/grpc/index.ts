#!/usr/bin/env node

import { GrpcProvider } from "../../bxserum/provider/grpc.js"
import { Constants } from "../../utils/constants.js";

var host = `${Constants.LOCAL_API_GRPC_HOST}:${Constants.LOCAL_API_GRPC_PORT}`


await callOrderbookGRPC()
await callOrderbookStreamGRPC()

async function callOrderbookGRPC() {
    var g = new GrpcProvider(host)
    // Unary response
    try {
        var req = await g.getOrderbook({ "market": "SOLUSDC", "limit": 5 })
        console.info(JSON.stringify(req))
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    }

}

async function callOrderbookStreamGRPC() {
    var g = new GrpcProvider(host)
    // stream response
    try {
        var req = await g.getOrderbookStream({ "market": "SOLUSDC", "limit": 5 });
        (async function () {
            let count = 0
            for await (const ob of req) {
                console.info(JSON.stringify(ob))
                count++
                if (count == 5) {
                    break
                }
            }
        })();

    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    } finally {
        g.close
    }

}


