import { DLOBApiClient, DLOBSubscriber, OrderActionRecord } from "@drift-labs/sdk"
import { Connection, ConnectionConfig, Keypair } from "@solana/web3.js"
import {SlotSubscriber} from "@drift-labs/sdk";
import base58 from "bs58";

import {Wallet, loadKeypair, DriftClient} from "@drift-labs/sdk";
import { readFileSync } from "fs"
import * as fs from "fs"
import { Type as GetPerpTradesResponse } from "../bxsolana/proto/messages/api/GetPerpTradesResponse"
const authHeader = "ZDIxYzE0NmItZWYxNi00ZmFmLTg5YWUtMzYwMTk4YzUyZmM4OjEwOWE5MzEzZDc2Yjg3MzczYjdjZDdhNmZkZGE3ZDg5"
const httpHeaders = { Authorization: authHeader }
const connection = new Connection('https://virginia.solana.dex.blxrbdn.com',
    {httpHeaders});

interface WrappedDriftEvent {
    ts: number;
    data: OrderActionRecord | undefined;
}

interface WrappedPerpTradesResponse {
    ts: number;
    data: GetPerpTradesResponse | undefined;
}

const bxTraderApifilePath = 'bx_api_data.json';
const driftApiFilePath = 'drift_api_data.json';


function readTraderApiFile(filePath: string): Map<number, WrappedPerpTradesResponse[]> {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const dataObject = JSON.parse(fileContent);

    const map:  Map<number, WrappedPerpTradesResponse[]> = new Map();
    const keys = Object.keys(dataObject)
    for (const key of keys) {
        map.set(parseInt(key, 10), dataObject[key])
    }
    return map
}

function readDriftFile(filePath: string): Map<number, WrappedDriftEvent[]> {
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const dataObject = JSON.parse(fileContent);

    const map:  Map<number, WrappedDriftEvent[]> = new Map();
    const keys = Object.keys(dataObject)
    for (const key of keys) {
        map.set(parseInt(key, 10), dataObject[key])
    }
    return map
}

let faster = 0;
let slower = 0;
let sameTime = 0;
let notOfComparisons = 0;
let notFound = 0;

function compareResponseMaps(bxTraderApiMap: Map<number, WrappedPerpTradesResponse[]>,
                             driftMap: Map<number, WrappedDriftEvent[]>): boolean {

    for (const [key, traderApiEvents] of bxTraderApiMap) {
        console.log("trader api key " + key);
        const driftEvents = driftMap.get(key);
        if (driftEvents != undefined) {
            for (const traderApiEvent of traderApiEvents) {
                for (const driftEvent of driftEvents) {
                    if (traderApiEvent.data == undefined || driftEvent.data == undefined) {
                        continue
                    }
                    if (parseInt(traderApiEvent.data.marketIndex, 10) == driftEvent.data.marketIndex &&
                        traderApiEvent.data.filler.toString() == driftEvent.data.filler?.toString()
                        && traderApiEvent.data.baseAssetAmountFilled == (parseInt(driftEvent.data.baseAssetAmountFilled.toString(), 16) / (10 ** 9))
                    ) {
                        console.log("comparing matching records diff, faster time : " + (driftEvent.ts - traderApiEvent.ts) / 1000);
                        notOfComparisons++

                        if (traderApiEvent.ts < driftEvent.ts) {
                            faster++;
                        } else if (traderApiEvent.ts > driftEvent.ts ) {
                            slower++
                        } else {
                            sameTime++
                        }
                    }
                }
            }

        } else {
            notFound++
        }
    }

    return true;
}

const traderApiMap = readTraderApiFile(bxTraderApifilePath)
const driftMap = readDriftFile(driftApiFilePath)
compareResponseMaps(traderApiMap, driftMap)

console.log("faster : " + faster)
console.log("slower : " + slower)
console.log("sameTime : " + sameTime)
console.log("notOfComparisons : " + notOfComparisons)
console.log("notFound : " + notFound)