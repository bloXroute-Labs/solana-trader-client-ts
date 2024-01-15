import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_VIRGINIA_WS,
    MAINNET_API_NY_WS,
    TESTNET_API_WS,
    WsProvider, LOCAL_API_WS, GetPricesStreamResponse
} from "../../bxsolana"
import * as fs from "fs"
import { Type as GetPerpTradesResponse } from "../../bxsolana/proto/messages/api/GetPerpTradesResponse"
import { Type as Project } from "../../bxsolana/proto/messages/api/Project"

const config = loadFromEnv()

const provider = new WsProvider(
    config.authHeader,
    readFileSync("./.env_private_key").toString(),
    MAINNET_API_NY_WS
    // LOCAL_API_WS
)

await provider.connect()
const filePath = 'raydium_get_price_stream.json';
await fs.truncate(filePath, (err) => {
    if (err) {
        console.error('Error deleting old content:', err);
    } else {
        console.log('Old content deleted.');
    }
});

const numberOfSeconds = parseInt(process.argv[2], 10);
console.log("numberOfSeconds to check : " + numberOfSeconds);

const req = await provider.getPricesStream({
    projects: ['P_RAYDIUM'],
    tokens: ['RAY', 'SOL', 'USDT', 'USDC']
})

interface WrappedPerpTradesResponse {
    ts: number;
    data: GetPricesStreamResponse | undefined;
}

const mapOfData:  Map<number, WrappedPerpTradesResponse[]> = new Map();
let count = 0

const startTime = Date.now();

function writeToFile() {

    type SerializedData = {
        [key: number]: WrappedPerpTradesResponse[];
    };

    const serializedData :SerializedData = {};

    for (const [key , value] of mapOfData) {
        serializedData[key] = value;
    }
    const updatedDataJSON = JSON.stringify(serializedData, null, 2);
    fs.writeFileSync(filePath, updatedDataJSON, 'utf8');
    console.log("finished writing to file " + filePath)
}

for await (const ob of req) {
    console.log(JSON.stringify(ob));

    const wrappedItem: WrappedPerpTradesResponse = {
        ts: Date.now(),
        data: ob,
    };
    const slot = parseInt(ob.slot, 10);
    console.log("checking time : " + (Date.now() - startTime) / 1000);
    if ((Date.now() - startTime) / 1000 >= numberOfSeconds) {
        break
    }
    const val = mapOfData.get(slot);
    if (val) {
        val.push(wrappedItem);
    } else {
        mapOfData.set(slot, [wrappedItem]);
    }
    // we write to file every time we get some value, to have the latest data in file
    writeToFile()
    count++
}



provider.close()