import { readFileSync } from "fs"
import {
    loadFromEnv,
    MAINNET_API_VIRGINIA_WS,
    MAINNET_API_NY_WS,
    TESTNET_API_WS,
    WsProvider, LOCAL_API_WS
} from "../../bxsolana"
import * as fs from "fs"
import { Type as GetPerpTradesResponse } from "../../bxsolana/proto/messages/api/GetPerpTradesResponse"

const config = loadFromEnv()

const provider = new WsProvider(
    config.authHeader,
    config.privateKey.toString(),
    MAINNET_API_NY_WS
    // LOCAL_API_WS
)

await provider.connect()
const filePath = 'bx_api_data.json';
await fs.truncate(filePath, (err) => {
    if (err) {
        console.error('Error deleting old content:', err);
    } else {
        console.log('Old content deleted.');
    }
});

const numberOfSeconds = parseInt(process.argv[2], 10);
console.log("numberOfSeconds to check : " + numberOfSeconds);

const req = await provider.submitTradeSwap({
        ownerAddress: ownerAddress,
        inToken: "USDT",
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        project: "P_RAYDIUM",
    },
    "P_SUBMIT_ALL",
    true)



