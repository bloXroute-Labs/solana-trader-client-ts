#!/usr/bin/env node

import {
    addMemoToSerializedTxn,
    BaseProvider,
    loadFromEnv,
    GrpcProvider,
    HttpProvider,
    LOCAL_API_GRPC_HOST,
    LOCAL_API_GRPC_PORT,
    LOCAL_API_HTTP,
    LOCAL_API_WS,
    MAINNET_API_GRPC_PORT,
    Project,
    TESTNET_API_GRPC_HOST,
    TESTNET_API_GRPC_PORT,
    TESTNET_API_HTTP,
    TESTNET_API_WS,
    WsProvider,
    signTx,
    MAINNET_API_NY_HTTP,
    MAINNET_API_NY_GRPC,
    MAINNET_API_NY_WS,
    createTraderAPIMemoInstruction,
    TransactionMessage,
} from "../bxsolana"
import {
    Keypair,
    LAMPORTS_PER_SOL,
    PublicKey,
    SystemProgram,
    Transaction,
} from "@solana/web3.js"
import base58 from "bs58"
import {
    DEVNET_API_GRPC_HOST,
    DEVNET_API_GRPC_PORT,
    MAINNET_API_PUMP_NY_GRPC,
    MAINNET_API_PUMP_NY_HTTP,
    MAINNET_API_PUMP_NY_WS,
} from "../bxsolana/utils/constants"
import { AxiosRequestConfig } from "axios"
import { txToBase64 } from "../bxsolana/utils/transaction"

const config = loadFromEnv()

// if longer examples (placing and canceling transactions, etc. should be run)
const runLongExamples = process.env.RUN_LIFECYCLE === "true"
const runStreams = process.env.RUN_STREAMS === "true"

const ownerAddress = config.publicKey
const tokenAddress = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // USDC

const httpTimeout = 30_000

async function run() {
    // console.info("---- STARTING HTTP TESTS ----")
    // await http()
    console.info("---- STARTING GRPC TESTS ----")
    await grpc()
    // console.info("---- STARTING WS TESTS ----")
    // await ws()
}

async function http() {
    let provider: HttpProvider

    // http provider uses Axios under the hood, so any Axios config can be included here
    const requestConfig: AxiosRequestConfig = {
        timeout: httpTimeout,
    }

    if (process.env.API_ENV === "testnet") {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            TESTNET_API_HTTP,
            requestConfig
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            MAINNET_API_NY_HTTP,
            requestConfig
        )
    } else {
        provider = new HttpProvider(
            config.authHeader,
            config.privateKey,
            LOCAL_API_HTTP,
            requestConfig
        )
    }
    const pump_provider = new HttpProvider(
        config.authHeader,
        config.privateKey,
        MAINNET_API_PUMP_NY_HTTP,
        requestConfig
    )
    console.info(" ----  HTTP Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  HTTP Snipe  ----")
    await callSubmitSnipe(provider)

    return
}

async function grpc() {
    let provider: GrpcProvider

    if (process.env.API_ENV === "testnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${TESTNET_API_GRPC_HOST}:${TESTNET_API_GRPC_PORT}`,
            false
        )
    } else if (process.env.API_ENV === "devnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${DEVNET_API_GRPC_HOST}:${DEVNET_API_GRPC_PORT}`,
            false
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
            true
        )
    } else {
        provider = new GrpcProvider(
            config.authHeader,
            config.privateKey,
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            false
        )
    }
    const pump_provider = new GrpcProvider(
        config.authHeader,
        config.privateKey,
        `${MAINNET_API_PUMP_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
        true
    )
    console.info(" ----  GRPC Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  GRPC Snipe  ----")
    await callSubmitSnipe(provider)

    if (runStreams) {
        console.info(" ----  GRPC Streams  ----")
        await doStreams(provider, pump_provider)
        console.info(" ----  GRPC Amm Streams  ----")
        await doAmmStreams(provider)
    }

    return
}

async function ws() {
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

    const pump_provider = new WsProvider(
        config.authHeader,
        config.privateKey,
        MAINNET_API_PUMP_NY_WS
    )
    await pump_provider.connect()
    console.info(" ----  WS Amm Requests  ----")
    await doAmmRequests(provider, pump_provider)

    console.info(" ----  WS Snipe  ----")
    await callSubmitSnipe(provider)

    if (runStreams) {
        console.info(" ----  WS Streams  ----")
        await doStreams(provider, pump_provider)
        console.info(" ----  WS Amm Streams  ----")
        await doAmmStreams(provider)
    }

    return
}

async function doAmmRequests(
    provider: BaseProvider,
    pump_provider: BaseProvider
) {
    await callGetRaydiumPoolReserve(provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumPools(provider)
    console.info(" ")
    console.info(" ")

    await callGetTransaction(provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHash(provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashV2(provider, "0")
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashV2(provider, "1")
    console.info(" ")
    console.info(" ")

    await callGetRateLimit(provider)
    console.info(" ")
    console.info(" ")

    await callGetPools(provider)
    console.info(" ")
    console.info(" ")

    await callPostPumpFunSwap(pump_provider)
    console.info(" ")
    console.info(" ")

    await callPostPumpFunSwapSol(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetJupiterPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetRaydiumQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callGetPumpFunQuotes(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetJupiterQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callPostRaydiumSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwap(provider)
    console.info(" ")
    console.info(" ")

    await callPostRaydiumSwapInstructions(provider)
    console.info(" ")
    console.info(" ")

    await callPostJupiterSwapInstructions(provider)
    console.info(" ")
    console.info(" ")

    await callPostRaydiumRouteSwap(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFee(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFeeByProgram(provider)
    console.info(" ")
    console.info(" ")
}

async function doStreams(provider: BaseProvider, pump_provider: BaseProvider) {

    await callGetPumpFunNewTokensStream(pump_provider)
    console.info(" ")
    console.info(" ")

    await callGetPumpFunNewAmmPoolStream(pump_provider)
    console.info(" ")
    console.info(" ")

    if (runLongExamples) {
        await callGetNewRaydiumPoolsStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetNewRaydiumPoolsStreamWithCpmm(provider)
        console.info(" ")
        console.info(" ")

        await callGetNewRaydiumPoolsByTransactionStream(provider)
        console.info(" ")
        console.info(" ")
    }

    await callGetRecentBlockHashStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBlockStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetPriorityFeeStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBundleTipStream(provider)
    console.info(" ")
    console.info(" ")
}

async function doAmmStreams(provider: BaseProvider) {
    if (runLongExamples) {
        await callGetPricesStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetPoolsStream(provider)
        console.info(" ")
        console.info(" ")

        await callGetSwapsStream(provider)
        console.info(" ")
        console.info(" ")
    }
}

async function callGetServerTime(provider: BaseProvider) {
    console.info("Retrieving server time")
    const req = await provider.getServerTime({})
    console.info(req)
}

async function callGetTransaction(provider: BaseProvider) {
    console.info("Retrieving transaction")
    const resp = await provider.getTransaction({
        signature:
            "2s48MnhH54GfJbRwwiEK7iWKoEh3uNbS2zDEVBPNu7DaCjPXe3bfqo6RuCg9NgHRFDn3L28sMVfEh65xevf4o5W3",
    })
    console.info(resp)
}

async function callGetRateLimit(provider: BaseProvider) {
    console.info("Retrieving RateLimit")
    const resp = await provider.getRateLimit({})
    console.info(resp)
}

async function callGetRaydiumPrices(provider: BaseProvider) {
    console.info("Retrieving Raydium price")
    const resp = await provider.getRaydiumPrices({ tokens: ["SOL"] })
    console.info(resp)
}

async function callGetJupiterPrices(provider: BaseProvider) {
    console.info("Retrieving Jupiter price")
    const resp = await provider.getJupiterPrices({ tokens: ["SOL"] })
    console.info(resp)
}

async function callGetPools(provider: BaseProvider) {
    console.info("Retrieving pools")
    const resp = await provider.getPools({
        projects: ["P_RAYDIUM"],
        pairOrAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", // sol/usdc
    })
    console.info(resp)
}

async function callGetRaydiumPoolReserve(provider: BaseProvider) {
    console.info("Retrieving Raydium pool reserve")
    const resp = await provider.getRaydiumPoolReserve({
        pairsOrAddresses: [
            "HZ1znC9XBasm9AMDhGocd9EHSyH8Pyj1EUdiPb4WnZjo",
            "D8wAxwpH2aKaEGBKfeGdnQbCc2s54NrRvTDXCK98VAeT",
            "DdpuaJgjB2RptGMnfnCZVmC4vkKsMV6ytRa2gggQtCWt",
        ],
    })
    console.info(resp)
}

async function callGetRaydiumPools(provider: BaseProvider) {
    console.info("Retrieving Raydium pools")
    const resp = await provider.getRaydiumPools({})
    // prints too much info
    console.info(resp)
}

async function callGetRecentBlockHash(provider: BaseProvider) {
    console.info("Retrieving recent block hash")
    const resp = await provider.getRecentBlockHash({})
    console.info(`response: ${resp.blockHash}`)
}

async function callGetRecentBlockHashV2(
    provider: BaseProvider,
    offset: string
) {
    console.info("Retrieving recent block hash V2")
    const resp = await provider.getRecentBlockHashV2({ offset })
    console.info(`response V2: ${resp.blockHash}`)
}

async function callGetJupiterQuotes(provider: BaseProvider) {
    console.info("Retrieving Jupiter quotes")
    const resp = await provider.getJupiterQuotes({
        inToken: "SOL",
        outToken: tokenAddress,
        inAmount: 1,
        slippage: 5,
    })
    console.info(resp)
}

async function callGetRaydiumQuotes(provider: BaseProvider) {
    console.info("Retrieving Raydium quotes")
    const resp = await provider.getRaydiumQuotes({
        inToken: "SOL",
        outToken: tokenAddress,
        inAmount: 1,
        slippage: 5,
    })
    console.info(resp)
}

async function callGetPumpFunQuotes(provider: BaseProvider) {
    console.info("Retrieving PumpFun quotes")
    const resp = await provider.getPumpFunQuotes({
        bondingCurveAddress: "Dga6eouREJ4kLHMqWWtccGGPsGebexuBYrcepBVd494q",
        mintAddress: "9QG5NHnfqQCyZ9SKhz7BzfjPseTFWaApmAtBTziXLanY",
        amount: 0.01,
        quoteType: "buy",
    })
    console.info(resp)
}

async function callGetPriorityFee(provider: BaseProvider) {
    console.info("Retrieving priority fee")
    const resp = await provider.getPriorityFee({
        project: "P_RAYDIUM",
    })
    console.info(resp)
}

async function callGetPriorityFeeByProgram(provider: BaseProvider) {
    console.info("Retrieving priority fee by programs")
    const raydiumCLMM = "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"
    const raydiumCPMM = "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"
    const resp = await provider.getPriorityFeeByProgram({
        programs: [raydiumCLMM, raydiumCPMM],
    })
    console.info(resp)
}

async function callGetPumpFunNewTokensStream(provider: BaseProvider) {
    console.info("Subscribing for pump fun new tokens")
    const req = await provider.getPumpFunNewTokensStream({})

    let count = 0
    let mint = ""
    for await (const ob of req) {
        console.info(ob)
        count++
        mint = ob.mint
        if (count == 1) {
            break
        }
    }

    console.info(" ")
    console.info(" ")

    console.info("Subscribing for pump fun swap events")
    const reqq = await provider.getPumpFunSwapsStream({ tokens: [mint] })

    count = 0
    for await (const ob of reqq) {
        console.info(ob)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPumpFunNewAmmPoolStream(provider: BaseProvider) {
    console.info("Subscribing for pump swap new amm pools")
    const req = await provider.getPumpFunNewAmmPoolStream({})

    let count = 0
    for await (const ob of req) {
        console.info("New pool recieved...")
        console.info(ob)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetNewRaydiumPoolsStream(provider: BaseProvider) {
    console.info("Subscribing for new raydium pool updates")
    const req = await provider.getNewRaydiumPoolsStream({})

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetNewRaydiumPoolsStreamWithCpmm(provider: BaseProvider) {
    console.info("Subscribing for new raydium pool updates with cpmm")
    const req = await provider.getNewRaydiumPoolsStream({
        includeCPMM: true,
    })

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetNewRaydiumPoolsByTransactionStream(
    provider: BaseProvider
) {
    console.info(
        "Subscribing for new raydium pool by transaction stream updates"
    )
    const req = await provider.getNewRaydiumPoolsByTransactionStream({})

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetSwapsStream(provider: BaseProvider) {
    console.info("Subscribing for swap updates of RAY/SOL market")
    const req = await provider.getSwapsStream({
        projects: ["P_RAYDIUM"],
        pools: ["AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA"],
        includeFailed: true,
    })

    let count = 0
    for await (const tr of req) {
        console.info(tr)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPricesStream(provider: BaseProvider) {
    console.info("Subscribing for prices updates of SOL and USDT on Raydium")

    const projects: Project[] = ["P_RAYDIUM", "P_JUPITER"]
    const tokens: string[] = ["SOL", tokenAddress]
    const stream = await provider.getPricesStream({
        projects: projects,
        tokens,
    })

    let count = 0
    for await (const update of stream) {
        console.info(update)
        count++
        if (count == 1) {
            break
        }
    }
}

async function callGetPoolsStream(provider: BaseProvider) {
    console.info("Subscribing for pool updates of Raydium")

    const projects: Project[] = ["P_RAYDIUM"]
    const pools: string[] = ["4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"]
    const stream = await provider.getPoolReservesStream({
        projects: projects,
        pools: pools,
    })

    let count = 0
    for await (const update of stream) {
        console.info(update)
        count++
        if (count == 3) {
            break
        }
    }
}

async function callGetBlockStream(provider: BaseProvider) {
    console.info("Subscribing for block updates")
    const resp = await provider.getBlockStream({})

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetRecentBlockHashStream(provider: BaseProvider) {
    console.info("Subscribing for block hash updates")
    const resp = await provider.getRecentBlockHashStream({})

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetPriorityFeeStream(provider: BaseProvider) {
    console.info("Subscribing for priority fee updates")
    const resp = await provider.getPriorityFeeStream({
        project: "P_RAYDIUM",
    })

    let count = 0
    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 5) {
            break
        }
    }
}

async function callGetBundleTipStream(provider: BaseProvider) {
    console.info("Subscribing for bundle tip updates")
    const resp = await provider.getBundleTipStream({})
    let count = 0

    for await (const update of resp) {
        console.info(update)
        count++
        if (count == 2) {
            break
        }
    }
}

// POST requests
async function callPostPumpFunSwap(provider: BaseProvider) {
    console.info("Generating a PumpFun swap")
    const response = await provider.postPumpFunSwap({
        userAddress: ownerAddress,
        bondingCurveAddress: "Fh8fnZUVEpPStJ2hKFNNjMAyuyvoJLMouENawg4DYCBc",
        tokenAddress: "2DEsbYgW94AtZxgUfYXoL8DqJAorsLrEWZdSfriipump",
        tokenAmount: 10,
        solThreshold: 0.0001,
        isBuy: false,
        tip: "0",
        slippage: 10,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostPumpFunSwapSol(provider: BaseProvider) {
    console.info("Generating a PumpFun swap sol")
    const response = await provider.postPumpFunSwapSol({
        userAddress: ownerAddress,
        bondingCurveAddress: "Fh8fnZUVEpPStJ2hKFNNjMAyuyvoJLMouENawg4DYCBc",
        tokenAddress: "2DEsbYgW94AtZxgUfYXoL8DqJAorsLrEWZdSfriipump",
        solAmount: 0.0001,
        tip: "2000001",
        slippage: 1,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostRaydiumSwap(provider: BaseProvider) {
    console.info("Generating a Raydium swap")
    const response = await provider.postRaydiumSwap({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostJupiterSwap(provider: BaseProvider) {
    console.info("Generating a Jupiter swap")
    const response = await provider.postJupiterSwap({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostJupiterSwapInstructions(provider: BaseProvider) {
    console.info("Generating a Jupiter swap instructions")
    const response = await provider.postJupiterSwapInstructions({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostRaydiumSwapInstructions(provider: BaseProvider) {
    console.info("Generating a Raydium swap instructions")
    const response = await provider.postRaydiumSwapInstructions({
        ownerAddress: ownerAddress,
        inToken: tokenAddress,
        outToken: "SOL",
        inAmount: 0.01,
        slippage: 0.1,
        computeLimit: 300000,
        computePrice: "2000",
    })
    console.info(response)
}

async function callPostRaydiumRouteSwap(provider: BaseProvider) {
    console.info("Generating a Raydium route swap")
    const response = await provider.postRaydiumRouteSwap({
        ownerAddress: ownerAddress,
        slippage: 10,
        steps: [
            {
                poolAddress: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                project: {
                    // pool ID can be empty if outToken is specified
                    id: "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2",
                    label: "Raydium",
                },
                inToken: "So11111111111111111111111111111111111111112",
                // RAY token address
                // can be omitted if project.id is specified
                outToken: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
                inAmount: 0.01,
                outAmount: 0.007505,
                outAmountMin: 0.074,
            },
        ],
        computeLimit: 0,
        computePrice: "0",
    })
    console.info(response)
}

async function submitTransferWithMemoAndTip(provider: BaseProvider) {
    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))
    const memo = createTraderAPIMemoInstruction("")

    const receiverPublicKey = new PublicKey(
        "7PMvo9sfhbwHpo2P4Y4XGySpzkodsMr2oa3v6UY1kag1"
    )
    const latestBlockhash = await provider.getRecentBlockHash({})

    let transaction = new Transaction({
        recentBlockhash: latestBlockhash.blockHash,
        feePayer: keypair.publicKey,
    })
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: receiverPublicKey,
                lamports: 0.000001 * LAMPORTS_PER_SOL,
            })
        )
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: new PublicKey(
                    "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"
                ),
                lamports: 0.0001 * LAMPORTS_PER_SOL,
            })
        )
    transaction = transaction.add(memo)

    transaction.sign(keypair)
    const serializedTransaztionBytes = transaction.serialize()
    const buff = Buffer.from(serializedTransaztionBytes)
    const encodedTxn = buff.toString("base64")
    const response = await provider.postSubmit({
        transaction: { content: encodedTxn, isCleanup: false },
        skipPreFlight: false,
    })
    console.info(response.signature)
}

async function submitTxWithMemo(provider: BaseProvider) {
    console.info("Retrieving recent blockHash")
    const recentBlockhash = await provider.getRecentBlockHash({})
    console.info(recentBlockhash.blockHash)
    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))
    const encodedTxn = buildUnsignedTxn(
        recentBlockhash.blockHash,
        keypair.publicKey
    )

    let encodedTxn2 = addMemoToSerializedTxn(encodedTxn)
    console.info("Submitting tx with memo")

    const tx = signTx(encodedTxn2, keypair)
    encodedTxn2 = txToBase64(tx)
    const response = await provider.postSubmit({
        transaction: { content: encodedTxn2, isCleanup: false },
        skipPreFlight: true,
    })
    console.info(response.signature)
}

run().then(() => {
    console.log("done!")
    process.exit(0)
})

function buildUnsignedTxn(
    recentBlockHash: string | undefined,
    owner: PublicKey
): string {
    const tx = new Transaction({
        recentBlockhash: recentBlockHash,
        feePayer: owner,
    })

    return Buffer.from(tx.serialize({ verifySignatures: false })).toString(
        "base64"
    )
}

async function callSubmitSnipe(provider: BaseProvider) {
    console.info("Starting submit snipe test")

    const keypair = Keypair.fromSecretKey(base58.decode(config.privateKey))

    const response = await provider.getRecentBlockHash({})
    const recentBlockhash = response.blockHash

    const smallTip = 100_000
    const stakedTipThreshold = 1_000_000
    const tipWallet = new PublicKey(
        "HWEoBxYs7ssKuudEjzjmpfJVX7Dvi7wescFsVx2L5yoY"
    )
    const jitoTipWallet = new PublicKey(
        "96gYZGLnJYVFmbjzopPSU6QiEV5fGqZNyN9nmNhvrZU5"
    )

    // Create first transaction with two transfers
    const tx1 = new Transaction({
        recentBlockhash: recentBlockhash,
        feePayer: keypair.publicKey,
    })
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: jitoTipWallet,
                lamports: stakedTipThreshold,
            })
        )
        .add(
            SystemProgram.transfer({
                fromPubkey: keypair.publicKey,
                toPubkey: tipWallet,
                lamports: smallTip,
            })
        )

    const tx2 = new Transaction({
        recentBlockhash: recentBlockhash,
        feePayer: keypair.publicKey,
    }).add(
        SystemProgram.transfer({
            fromPubkey: keypair.publicKey,
            toPubkey: tipWallet,
            lamports: stakedTipThreshold,
        })
    )

    const serializedTx1 = tx1.serialize({ verifySignatures: false })
    const serializedTx2 = tx2.serialize({ verifySignatures: false })

    const transactions: TransactionMessage[] = [
        {
            content: Buffer.from(serializedTx1).toString("base64"),
            isCleanup: false,
        },
        {
            content: Buffer.from(serializedTx2).toString("base64"),
            isCleanup: false,
        },
    ]

    try {
        const signatures = await provider.signAndSubmitSnipeTx(
            transactions,
            false
        )

        console.info("Snipe signatures:", signatures)
        return false
    } catch (error) {
        console.error("Failed to submit snipe request:", error)
        return true
    }
}