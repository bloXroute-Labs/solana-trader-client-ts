import {
    loadFromEnv,
    LOCAL_API_WS,
    MAINNET_API_NY_WS,
    TESTNET_API_WS,
    WsProvider,
} from "../bxsolana"

// require('dotenv').config();

const config = loadFromEnv()

async function main() {
    console.info("starting bloxroute trading bot...")

    let provider: WsProvider

    if (process.env.API_ENV === "testnet") {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            TESTNET_API_WS
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            MAINNET_API_NY_WS
        )
    } else {
        provider = new WsProvider(
            config.authHeader,
            config.privateKey,
            LOCAL_API_WS
        )
    }

    await provider.connect()

    const priorityFeeResponse = await provider.getPriorityFee({
        project: "P_RAYDIUM",
    })
    console.info(priorityFeeResponse)

    const req = await provider.getNewRaydiumPoolsStream({})

    for await (const tr of req) {
        console.info(tr)

        // make a trade based on a new pool update
        console.info("submitting a raydium trade swap based on new pool update")
        const poolAddress: string = tr?.pool?.poolAddress ?? ""
        const inToken: string = tr?.pool?.token1MintAddress ?? ""
        const outToken: string = tr?.pool?.token2MintAddress ?? ""

        if (poolAddress === "") {
            console.warn("No pool address found for this trade. Skipping.")
            continue // Skip to the next iteration of the loop
        }

        const responses = await provider.submitTradeSwap(
            {
                ownerAddress: poolAddress,
                inToken: inToken,
                outToken: outToken,
                inAmount: 0.01,
                slippage: 0.3,
                project: "P_RAYDIUM",
                computeLimit: 10000,
                computePrice: priorityFeeResponse.feeAtPercentile,
            },
            "P_SUBMIT_ALL",
            true
        )

        for (const transaction of responses.transactions) {
            console.info(transaction.signature)
        }
    }

    console.info(req)
}

async function run() {
    await main()
}

run().then(() => {
    console.log("done!")
    process.exit(0)
})
