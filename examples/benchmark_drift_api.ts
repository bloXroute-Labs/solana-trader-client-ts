import { BN, DLOBApiClient, DLOBSubscriber, EventSubscriber, isVariant } from "@drift-labs/sdk"
import { Connection, Keypair } from "@solana/web3.js"
import {SlotSubscriber} from "@drift-labs/sdk";
import base58 from "bs58";

import {Wallet, DriftClient} from "@drift-labs/sdk";
import { readFileSync } from "fs"
import * as fs from "fs"
import {
   OrderActionRecord,
} from "@drift-labs/sdk/lib"
import { EventSubscriptionOptions } from "@drift-labs/sdk/src/events/types"
const httpHeaders = { }
const connection = new Connection('https://proud-fabled-crater.solana-mainnet.quiknode.pro/e3bfb432b5b982fb3e296b8fd1ec3a2d91124d76/',
    {httpHeaders});
const wallet = new Wallet(Keypair.fromSecretKey(
    base58.decode(readFileSync("./.env_private_key").toString())
))
process
    .on("unhandledRejection", (reason, p) => {
        console.log("Unhandled Rejection at Promise", reason, p)
    })
    .on("uncaughtException", (err) => {
        console.log("Uncaught Exception thrown", err)
    })

const filePath = 'drift_api_data.json';
console.log("truncating file " + filePath);
await fs.truncate(filePath, (err) => {
    if (err) {
        console.error('Error deleting old content:', err);
    } else {
        console.log('Old content deleted.');


    }
});

const dlobApiClient = new DLOBApiClient({
    url: 'https://dlob.drift.trade/orders/idlWithSlot',
});

const driftClient = new DriftClient({
    connection,
    wallet,
    env: 'mainnet-beta',
});

const slotSubscriber = new SlotSubscriber(connection);
await driftClient.subscribe();
await slotSubscriber.subscribe();
const numberOfSeconds = parseInt(process.argv[2], 10);
console.log("numberOfSeconds to check : " + numberOfSeconds);
const dlobSubscriber = new DLOBSubscriber({
    driftClient,
    dlobSource: dlobApiClient,
    slotSource: slotSubscriber,
    updateFrequency: 1000,
});

await dlobSubscriber.subscribe();

export const options: EventSubscriptionOptions = {
    eventTypes: [
        // 'OrderRecord',
        'OrderActionRecord',
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

const eventSubscriber = new EventSubscriber(connection, driftClient.program, options);
await eventSubscriber.subscribe();
const startTime = Date.now();

interface WrappedDriftEvent {
    ts: number;
    data: OrderActionRecord | undefined;
}
const mapOfData:  Map<number, WrappedDriftEvent[]> = new Map();

function writeToFile() {
    type SerializedData = {
        [key: number]: WrappedDriftEvent[];
    };

    const serializedData :SerializedData = {};

    for (const [key , value] of mapOfData) {
        serializedData[key] = value;
    }
    const updatedDataJSON = JSON.stringify(serializedData,null, 2);
    fs.writeFileSync(filePath, updatedDataJSON, 'utf8');
    console.log("finished writing to file " + filePath)
}

eventSubscriber.eventEmitter.on('newEvent', (event) => {

    const e = event as OrderActionRecord
    const wrappedItem: WrappedDriftEvent = {
        ts: Date.now().valueOf(),
        data: e,
    };
    if (!isVariant(e.marketType, 'perp') ||
        !isVariant(e.action, 'fill')) {
        return
    }
    const slot =  event['slot']
    event.ts = new BN(Date.now().valueOf());
    console.log("OrderActionRecord: " + JSON.stringify(e));

    console.log("checking time : " + (Date.now() - startTime) / 1000);
    if ((Date.now() - startTime) / 1000 >= numberOfSeconds) {
        eventSubscriber.eventEmitter.removeAllListeners('newEvent');
        eventSubscriber.eventEmitter.removeListener('newEvent', (event) => {
            console.log("newEvent Listener removed");
        });


        process.exit(0);
    }



    const val: WrappedDriftEvent[] | undefined = mapOfData.get(slot);
    if (val !== undefined) {
        val.push(wrappedItem);
        mapOfData.set(slot, val);
    } else {
        const val = [wrappedItem]
        mapOfData.set(slot, val);
    }

    writeToFile()
});

