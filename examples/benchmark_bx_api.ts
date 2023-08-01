import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_VIRGINIA_WS,
    WsProvider
} from "../bxsolana"
import * as fs from "fs"
import { Type as GetPerpTradesResponse } from "../bxsolana/proto/messages/api/GetPerpTradesResponse"

const config = loadFromEnv()

const provider = new WsProvider(
    config.authHeader,
    readFileSync("./.env_private_key").toString(),
    MAINNET_API_VIRGINIA_WS
)
await provider.connect()
const numberOfSlots = parseInt(process.argv[2], 10);
console.log("numberOfSlots to check : " + numberOfSlots);

const req = await provider.getPerpTradesStream({
    contracts: ["ALL"],
    project: "P_DRIFT",
})

interface WrappedPerpTradesResponse {
    ts: number;
    data: GetPerpTradesResponse | undefined;
}

const mapOfData:  Map<number, WrappedPerpTradesResponse[]> = new Map();
let count = 0
const time = Date.now().valueOf();
let firstSlot = 0;
for await (const ob of req) {
    console.log(JSON.stringify(ob));

    if (ob.trade  == undefined || ob.context == undefined) {
        continue
    }

    const wrappedItem: WrappedPerpTradesResponse = {
        ts: time,
        data: ob.trade,
    };
    const slot = parseInt(ob.context.slot, 10);
    if (firstSlot == 0) {
        firstSlot = slot;
    }
    if (slot >= firstSlot + numberOfSlots) {
        break
    }
    const val = mapOfData.get(slot);
    if (val) {
        val.push(wrappedItem);
    } else {
        mapOfData.set(slot, [wrappedItem]);
    }
    count++
}

const filePath = 'bx_api_data.json';
type SerializedData = {
    [key: number]: WrappedPerpTradesResponse[];
};

const serializedData :SerializedData = {};

for (const [key , value] of mapOfData) {
    serializedData[key] = value;
}
const updatedDataJSON = JSON.stringify(serializedData, null, 2);
await fs.truncate(filePath, (err) => {
    if (err) {
        console.error('Error deleting old content:', err);
    } else {
        console.log('Old content deleted.');
        fs.writeFileSync(filePath, updatedDataJSON, 'utf8');
        console.log("finished writing to file " + filePath + ", updatedDataJSON: " + updatedDataJSON)
    }
});

provider.close()