#!/usr/bin/env node

import { HttpProvider } from "../../bxserum/provider/http.js"
import { Constants } from "../../utils/constants.js";

await callOrderbookHTTP()

async function callOrderbookHTTP() {
    var h = new HttpProvider(Constants.LOCAL_API_HTTP)
    // Unary response
    try {
        var req = await h.getOrderbook({"market": "SOLUSDC", "limit": 5})
        console.info(JSON.stringify(req))	
    } catch (error) {
        console.error("Failed to retrieve the orderbook for market SOL/USDC", error)
    }   
	
}



