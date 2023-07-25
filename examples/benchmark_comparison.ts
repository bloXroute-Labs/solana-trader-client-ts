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



interface WrappedObject {
    timestamp: number;
    data: GetPerpOrderbooksStreamResponse;
}

const filePath = 'bx_api_data.json';
const data = readFile(filePath)

function readFile(filePath: string): WrappedObject[] {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent) as WrappedObject[];
}

function createObjectMap(obj: WrappedObject): Map<number, WrappedObject> {
    const map = new Map<number, WrappedObject>();
    const slotInteger = parseInt(obj.data.slot, 10);
    map.set(slotInteger, obj);
    return map;
}


function compareResponseMaps(bxTraderApiMap: Map<number, WrappedObject>, driftMap: Map<number, WrappedObject>): boolean {
    let faster = 0;
    let slower = 0;
    let sameTime = 0;
    let notFound = 0;
    for (const [key, value] of bxTraderApiMap) {
        const otherValue = driftMap.get(key);
        if (otherValue != undefined) {
            if (value.timestamp < otherValue.timestamp ) {
                faster++;
            } else if (value.timestamp > otherValue.timestamp ) {
                slower++
            } else {
                sameTime++
            }
        } else {
            notFound++
        }
    }

    return true;
}
