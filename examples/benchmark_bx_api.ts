import {DLOBApiClient, DLOBSubscriber} from "@drift-labs/sdk";
import { Connection, ConnectionConfig, Keypair } from "@solana/web3.js"
import {SlotSubscriber} from "@drift-labs/sdk";
import base58 from "bs58";
// const bs58 = require('bs58');

// Polling from api
// const dlobApiClient = new DLOBApiClient({
//     url: 'https://dlob.drift.trade/orders/idlWithSlot',
// });
import {Wallet, loadKeypair, DriftClient} from "@drift-labs/sdk";
import { readFileSync } from "fs"
import { GetPerpOrderbooksStreamResponse, MAINNET_API_VIRGINIA_WS, WsProvider } from "../bxsolana"
import * as fs from "fs"
// const connection = new Connection('https://44.192.126.28:8545');
// const connection = new Connection('https://api.mainnet-beta.solana.com');
// const connection = new Connection('https://boldest-damp-needle.solana-mainnet.discover.quiknode.pro/747abd1674e918c0611f6e284a0f9f41f7845967');
const authHeader = "ZDIxYzE0NmItZWYxNi00ZmFmLTg5YWUtMzYwMTk4YzUyZmM4OjEwOWE5MzEzZDc2Yjg3MzczYjdjZDdhNmZkZGE3ZDg5"
const httpHeaders = { Authorization: authHeader }
const connection = new Connection('https://virginia.solana.dex.blxrbdn.com',
    {httpHeaders});

const slotSubscriber = new SlotSubscriber(connection);
const wallet = new Wallet(Keypair.fromSecretKey(
    base58.decode(readFileSync("./.env_private_key").toString())
))

const provider = new WsProvider(
    authHeader,
    readFileSync("./.env_private_key").toString(),
    MAINNET_API_VIRGINIA_WS
)
await provider.connect()
console.info("Retrieving Drift orderbook for SOL-PERP market")

const req = await provider.getPerpOrderbooksStream({
    contracts: ["SOL_PERP"],
    project: "P_DRIFT",
    limit: 0,
})

interface WrappedObject {
    timestamp: number;
    data: GetPerpOrderbooksStreamResponse;
}

const data: WrappedObject[] = [];
let count = 0
for await (const ob of req) {
    console.info(ob)
    count++
    const wrappedObject: WrappedObject = {
        timestamp: Date.now(),
        data: ob,
    };

    data.push(wrappedObject);
    if (count == 20) {
        break
    }
}

const filePath = 'bx_api_data.json';
const updatedDataJSON = JSON.stringify(data, null, 2); // The third argument (2) adds indentation for readability (optional)
fs.writeFileSync(filePath, updatedDataJSON, 'utf8');

console.log("finished writing to file")

provider.close()

// }

// const driftClient = new DriftClient({
//     connection,
//     wallet,
//     env: 'mainnet-beta',
// });
//
// console.log("before driftClient.subscribe()")
// await driftClient.subscribe();
//
// console.log("before slotSubscriber.subscribe()")
// await slotSubscriber.subscribe();
//
// console.log("after slotSubscriber.subscribe()")
//
// const dlobSubscriber = new DLOBSubscriber({
//     driftClient,
//     dlobSource: dlobApiClient,
//     slotSource: slotSubscriber,
//     updateFrequency: 1000,
// });
//
// await dlobSubscriber.subscribe();
// console.log("before getting l2")
// const l2 = dlobSubscriber.getL2({
//     // marketName: 'SOL-PERP',
//     marketIndex: 1,
//     marketType: 'PERP',
//     depth: 1,
// });
// console.log(JSON.stringify(l2))


// const l3 = dlobSubscriber.getL3({
//     marketName: 'SOL-PERP',
// });
//
// console.log(JSON.stringify(l3))