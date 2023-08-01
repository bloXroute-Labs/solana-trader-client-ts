import { DLOBApiClient, DLOBSubscriber, EventSubscriber, isVariant } from "@drift-labs/sdk"
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
import {
    CurveRecord,
    DepositRecord,
    FundingPaymentRecord,
    FundingRateRecord, InsuranceFundRecord, InsuranceFundStakeRecord,
    LiquidationRecord, LPRecord, NewUserRecord, OrderActionRecord,
    OrderRecord, SettlePnlRecord, SpotInterestRecord, SwapRecord
} from "@drift-labs/sdk/src/index"
import { Event, EventSubscriptionOptions } from "@drift-labs/sdk/src/events/types"
// const connection = new Connection('https://44.192.126.28:8545');
// const connection = new Connection('https://api.mainnet-beta.solana.com');
// const connection = new Connection('https://boldest-damp-needle.solana-mainnet.discover.quiknode.pro/747abd1674e918c0611f6e284a0f9f41f7845967');
const authHeader = "ZDIxYzE0NmItZWYxNi00ZmFmLTg5YWUtMzYwMTk4YzUyZmM4OjEwOWE5MzEzZDc2Yjg3MzczYjdjZDdhNmZkZGE3ZDg5"
const httpHeaders = { Authorization: authHeader }
const connection = new Connection('https://proud-fabled-crater.solana-mainnet.quiknode.pro/e3bfb432b5b982fb3e296b8fd1ec3a2d91124d76/',
    {httpHeaders});
const wallet = new Wallet(Keypair.fromSecretKey(
    base58.decode(readFileSync("./.env_private_key").toString())
))
// Polling from api
const dlobApiClient = new DLOBApiClient({
    url: 'https://dlob.drift.trade/orders/idlWithSlot',
});

const driftClient = new DriftClient({
    connection,
    wallet,
    env: 'mainnet-beta',
});

const slotSubscriber = new SlotSubscriber(connection);

console.log("before driftClient.subscribe()")
await driftClient.subscribe();

console.log("before slotSubscriber.subscribe()")
await slotSubscriber.subscribe();

console.log("after slotSubscriber.subscribe()")

const dlobSubscriber = new DLOBSubscriber({
    driftClient,
    dlobSource: dlobApiClient,
    slotSource: slotSubscriber,
    updateFrequency: 1000,
});

await dlobSubscriber.subscribe();
// console.log("before getting l2")
// const l2 = dlobSubscriber.getL2({
//     marketName: 'SOL-PERP',
//     // marketIndex: 1,
//     marketType: 'PERP',
//     depth: 1,
// });
// console.log(JSON.stringify(l2))
// console.log("after getting l2")

// const l3 = dlobSubscriber.getL3({
//     marketName: 'SOL-PERP',
// });
// console.log("after getting l3")
//
// console.log(JSON.stringify(l3))

export const options: EventSubscriptionOptions = {
    eventTypes: [
        // 'DepositRecord',
        // 'FundingPaymentRecord',
        // 'LiquidationRecord',
        'OrderRecord',
        // 'OrderActionRecord',
        // 'FundingRateRecord',
        // 'NewUserRecord',
        // 'SettlePnlRecord',
        // 'LPRecord',
        // 'InsuranceFundRecord',
        // 'SpotInterestRecord',
        // 'InsuranceFundStakeRecord',
        // 'CurveRecord',
        // 'SwapRecord',
    ],
    maxEventsPerType: 4096,
    orderBy: 'blockchain',
    orderDir: 'asc',
    commitment: 'confirmed',
    maxTx: 4096,
    logProviderConfig: {
        type: 'websocket',
    },
};

//
// const options = {
//     eventTypes: [DriftEvent],
//     maxTx: 4096,
//     maxEventsPerType: 4096,
//     // orderBy: 'blockchain',
//     orderDir: 'asc',
//     commitment: 'confirmed',
//     logProviderConfig: {
//         type: 'websocket',
//     },
// }


// Define the type of the numberToObjectListMap

const eventSubscriber = new EventSubscriber(connection, driftClient.program, options);
await eventSubscriber.subscribe();
let firstSlot = 0;
const mapOfData:  Map<number, OrderRecord[]> = new Map();
eventSubscriber.eventEmitter.on('newEvent', (event) => {

    const e = event as OrderRecord
    if (e.order.marketIndex != 0 || !isVariant(e.order.marketType, 'perp')) {
        return
    }

    const slot: number = e.order.slot.toNumber();
    if (firstSlot == 0) {
        firstSlot = slot;
    }

    console.log("slot - firstSlot : " + (slot - firstSlot));
    if (slot - firstSlot >= 10) {
        console.log("removeListener");

        eventSubscriber.eventEmitter.removeAllListeners('newEvent');
        console.log("removeListener1");
        eventSubscriber.eventEmitter.removeListener('newEvent', (event) => {
            console.log("newEvent Listener removed");
        });
        console.log("removeListener2");


        const filePath = 'drift_api_data.json';
        console.log("truncating file " + filePath);
        fs.truncate(filePath, (err) => {
            if (err) {
                console.error('Error deleting old content:', err);
            } else {
                console.log('Old content deleted.');
                type SerializedData = {
                    [key: number]: OrderRecord[];
                };

                const serializedData :SerializedData = {};

                for (const [key , value] of mapOfData) {
                    serializedData[key] = value;
                }
                const updatedDataJSON = JSON.stringify(serializedData, null, 2); // The third argument (2) adds indentation for readability (optional)
                fs.writeFileSync(filePath, updatedDataJSON, 'utf8');
                console.log("finished writing to file " + filePath + ", updatedDataJSON: " + updatedDataJSON)
            }
        });
    }
    const val = mapOfData.get(slot);
    if (val) {
        val.push(e);
        console.log("val1 : " + JSON.stringify(val));
        mapOfData.set(slot, val);
    } else {
        const val = [e]
        mapOfData.set(slot, val);
        if (mapOfData.has(slot)) {
            // console.log("mapOfData has : " + JSON.stringify(mapOfData.get(slot)));
        }
        //console.log("val : " + JSON.stringify(val));
    }

    // console.log("mapOfData set : " + JSON.stringify(mapOfData.get(slot)));
    // console.log("mapOfData : " + JSON.stringify(mapOfData));
});

