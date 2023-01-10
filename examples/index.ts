#!/usr/bin/env node

import {
    addMemo,
    addMemoToSerializedTxn,
    BaseProvider,
    config,
    GetAccountBalanceRequest,
    GetBlockStreamRequest,
    GetMarketsRequest,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbooksRequest,
    GetOrderStatusStreamRequest,
    GetPoolReservesStreamRequest,
    GetPoolsRequest,
    GetPriceRequest,
    GetPricesStreamRequest,
    GetQuotesRequest,
    GetQuotesStreamRequest,
    GetRecentBlockHashRequest,
    GetServerTimeRequest,
    GetSwapsStreamRequest,
    GetTickersRequest,
    GetTradesRequest,
    GetUnsettledRequest,
    GrpcProvider,
    HttpProvider,
    LOCAL_API_GRPC_HOST,
    LOCAL_API_GRPC_PORT,
    LOCAL_API_HTTP,
    LOCAL_API_WS,
    MAINNET_API_GRPC_HOST,
    MAINNET_API_GRPC_PORT,
    MAINNET_API_HTTP,
    MAINNET_API_WS,
    Order,
    OrderStatus,
    OrderType,
    PostCancelAllRequest,
    PostCancelByClientOrderIDRequest,
    PostOrderRequest,
    PostReplaceOrderRequest,
    PostSettleRequest,
    PostSubmitRequest,
    Project,
    RouteStep,
    RouteTradeSwapRequest,
    Side,
    SubmitStrategy,
    TESTNET_API_GRPC_HOST,
    TESTNET_API_GRPC_PORT,
    TESTNET_API_HTTP,
    TESTNET_API_WS,
    TokenPair,
    TradeSwapRequest,
    TransactionMessage,
    WsProvider,
} from "../bxsolana"
import { Keypair } from "@solana/web3.js"

const marketAddress = "9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT"
const ownerAddress = config.WalletPublicKey
const payerAddress = config.WalletPublicKey
const openOrdersAddress = "4zeos6Mg48sXGVE3XhdSeff72aLrSXayyzAM81QRegGz"
const baseTokenWallet = config.WalletPublicKey
const quoteTokenWallet = "4raJjCwLLqw8TciQXYruDEF4YhDkGwoEnwnAdwJSjcgv"

const testOrder = new PostOrderRequest()
    .setOwneraddress(ownerAddress)
    .setPayeraddress(payerAddress)
    .setMarket("SOLUSDC")
    .setSide(Side.S_ASK)
    .setTypeList([OrderType.OT_LIMIT])
    .setAmount(0.1)
    .setPrice(200)
    .setProject(Project.P_UNKNOWN)

const crank_timeout_s = 60

function delay(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function getRandom() {
    const min = 0
    const max = Math.floor(1000000000000)

    return Math.floor(Math.random() * (max - min + 1)) + min
}

async function run() {
    console.info("---- STARTING HTTP TESTS ----")
    await http()
    console.info("---- STARTING GRPC TESTS ----")
    await grpc()
    console.info("---- STARTING WS TESTS ----")
    await ws()
    process.exit(0)
}

async function http() {
    let provider: HttpProvider

    if (process.env.API_ENV === "testnet") {
        provider = new HttpProvider(TESTNET_API_HTTP)
    } else if (process.env.API_ENV === "mainnet") {
        provider = new HttpProvider(MAINNET_API_HTTP)
    } else {
        provider = new HttpProvider(LOCAL_API_HTTP)
    }

    console.info(" ----  HTTP Requests  ----")
    await doRequests(provider)
    console.info(" ----  HTTP Amm Requests  ----")
    await doAmmRequests(provider)

    if (process.env.RUN_LIFECYCLE === "true") {
        console.info(" ----  HTTP Lifecycle  ----")
        await doHttpLifecycle(provider)
        console.info(" ----  HTTP Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ")
    }

    return
}

async function grpc() {
    let provider: GrpcProvider

    if (process.env.API_ENV === "testnet") {
        provider = new GrpcProvider(
            `${TESTNET_API_GRPC_HOST}:${TESTNET_API_GRPC_PORT}`,
            true
        )
    } else if (process.env.API_ENV === "mainnet") {
        provider = new GrpcProvider(
            `${MAINNET_API_GRPC_HOST}:${MAINNET_API_GRPC_PORT}`,
            true
        )
    } else {
        provider = new GrpcProvider(
            `${LOCAL_API_GRPC_HOST}:${LOCAL_API_GRPC_PORT}`,
            false
        )
    }

    console.info(" ----  GRPC Requests  ----")
    await doRequests(provider)

    console.info(" ----  GRPC Amm Requests  ----")
    await doAmmRequests(provider)

    if (process.env.RUN_LIFECYCLE === "true") {
        console.info(" ----  GRPC Streams  ----")
        await doStreams(provider)
        console.info(" ----  GRPC Amm Streams  ----")
        await doAmmStreams(provider)
        console.info(" ----  GRPC Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  GRPC Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

    return
}

async function ws() {
    let provider: WsProvider

    if (process.env.API_ENV === "testnet") {
        provider = new WsProvider(TESTNET_API_WS)
    } else if (process.env.API_ENV === "mainnet") {
        provider = new WsProvider(MAINNET_API_WS)
    } else {
        provider = new WsProvider(LOCAL_API_WS)
    }

    await provider.connect()
    console.info(" ----  WS Requests  ----")
    await doRequests(provider)
    console.info(" ----  WS Amm Requests  ----")
    await doAmmRequests(provider)
    if (process.env.RUN_LIFECYCLE === "true") {
        console.info(" ----  WS Streams  ----")
        await doStreams(provider)
        console.info(" ----  WS Amm Streams  ----")
        await doAmmStreams(provider)
        console.info(" ----  WS Cancel All  ----")
        await callCancelAll(provider)
        console.info(" ----  WS Lifecycle  ----")
        await doLifecycle(provider)
        console.info(" ")
    }

    return
}

async function doRequests(provider: BaseProvider) {
    await callGetOrderbook(provider)
    console.info(" ")
    console.info(" ")

    await callGetMarkets(provider)

    console.info(" ")
    console.info(" ")

    await callGetOpenOrders(provider)
    console.info(" ")
    console.info(" ")

    await callGetUnsettled(provider)
    console.info(" ")
    console.info(" ")

    await callGetAccountBalance(provider)
    console.info(" ")
    console.info(" ")

    await callGetTrades(provider)
    console.info(" ")
    console.info(" ")

    await callGetTickers(provider)
    console.info(" ")
    console.info(" ")

    await callGetServerTime(provider)
    console.info(" ")
    console.info(" ")

    await callPostOrder(provider)
    console.info(" ")
    console.info(" ")

    await delay(60000)

    await callPostCancelByClientOrderID(provider)
    console.info(" ")
    console.info(" ")

    await delay(60000)

    await callPostSettleFunds(provider)
    console.info(" ")
    console.info(" ")

    await submitTxWithMemo(provider)
    console.info(" ")
    console.info(" ")
}

async function doAmmRequests(provider: BaseProvider) {
    await callGetPrices(provider)
    console.info(" ")
    console.info(" ")

    await callGetPools(provider)
    console.info(" ")
    console.info(" ")

    await callGetQuotes(provider)
    console.info(" ")
    console.info(" ")

    await callTradeSwap(provider)
    console.info(" ")
    console.info(" ")

    await callRouteTradeSwap(provider)
    console.info(" ")
    console.info(" ")
}

async function doStreams(provider: BaseProvider) {
    await callGetSwapsStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetOrderbookStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetTickersStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetTradesStream(provider)
    console.info(" ")
    console.info(" ")

    console.info("cancelling streams")
}

async function cancelWsStreams(provider: BaseProvider) {
    console.info("Cancelling swaps stream")
    await provider.cancelAllGetSwapsStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling orderbooks stream")
    await provider.cancelAllGetOrderbooksStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling get tickers stream")
    await provider.cancelAllGetOrderbooksStream()
    console.info(" ")
    console.info(" ")

    console.info("Cancelling trades stream")
    await provider.cancelAllGetTradesStream()
    console.info(" ")
    console.info(" ")
}

async function doAmmStreams(provider: BaseProvider) {
    await callGetPricesStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetPoolsStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetQuotesStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetRecentBlockHashStream(provider)
    console.info(" ")
    console.info(" ")

    await callGetBlockStream(provider)
    console.info(" ")
    console.info(" ")
}

async function doLifecycle(provider: BaseProvider) {
    try {
        const mktAddress = marketAddress

        await Promise.all([
            new Promise(async (resolve, reject) => {
                const req = await provider.getOrderStatusStream(
                    new GetOrderStatusStreamRequest()
                        .setMarket(mktAddress)
                        .setProject(Project.P_OPENBOOK)
                        .setOwneraddress(testOrder.getOwneraddress())
                )
                for await (const ob of req) {
                    const orderInfo = ob.getOrderinfo()
                    if (
                        orderInfo &&
                        orderInfo.getClientorderid() ==
                            testOrder.getClientorderid() &&
                        orderInfo.getOrderstatus() == OrderStatus.OS_OPEN
                    ) {
                        console.info(
                            `order went to orderbook ('${orderInfo.getOrderstatus()}') successfully`
                        )
                        return resolve(null)
                    } else {
                        console.error(`order failed to get into orderbook`)
                        return reject(
                            new Error("order failed to get into orderbook")
                        )
                    }
                }
            }),
            new Promise(async (resolve, reject) => {
                try {
                    await delay(10000)
                    await callSubmitOrder(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await Promise.all([
            new Promise(async (resolve, reject) => {
                const req = await provider.getOrderStatusStream(
                    new GetOrderStatusStreamRequest()
                        .setMarket(mktAddress)
                        .setProject(Project.P_OPENBOOK)
                        .setOwneraddress(testOrder.getOwneraddress())
                )
                let oldCanceled = false
                let newOpened = false
                for await (const ob of req) {
                    const orderInfo = ob.getOrderinfo()
                    if (
                        orderInfo &&
                        orderInfo.getClientorderid() ==
                            testOrder.getClientorderid() &&
                        orderInfo.getOrderstatus() == OrderStatus.OS_CANCELLED
                    ) {
                        oldCanceled = true
                        console.info(
                            `order canceled ('${orderInfo.getOrderstatus()}') successfully`
                        )
                        if (oldCanceled && newOpened) {
                            return resolve(null)
                        }
                    } else if (
                        orderInfo &&
                        orderInfo.getClientorderid() ==
                            testOrder.getClientorderid() &&
                        orderInfo.getOrderstatus() == OrderStatus.OS_OPEN
                    ) {
                        newOpened = true
                        console.info(
                            `order went to orderbook ('${orderInfo.getOrderstatus()}') successfully`
                        )
                        if (oldCanceled && newOpened) {
                            return resolve(null)
                        }
                    } else {
                        console.error(`order failed to cancel`)
                        return reject(new Error("order failed to cancel"))
                    }
                }
            }),
            new Promise(async (resolve, reject) => {
                try {
                    await delay(5000)
                    await callReplaceByClientOrderID(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await Promise.all([
            new Promise(async (resolve, reject) => {
                const req = await provider.getOrderStatusStream(
                    new GetOrderStatusStreamRequest()
                        .setMarket(mktAddress)
                        .setProject(Project.P_OPENBOOK)
                        .setOwneraddress(testOrder.getOwneraddress())
                )
                for await (const ob of req) {
                    const orderInfo = ob.getOrderinfo()
                    if (
                        orderInfo &&
                        orderInfo.getClientorderid() ==
                            testOrder.getClientorderid() &&
                        orderInfo.getOrderstatus() == OrderStatus.OS_CANCELLED
                    ) {
                        console.info(
                            `order canceled ('${orderInfo.getOrderstatus()}') successfully`
                        )
                        return resolve(null)
                    } else {
                        console.error(`order failed to cancel`)
                        return reject(new Error("order failed to cancel"))
                    }
                }
            }),
            new Promise(async (resolve, reject) => {
                try {
                    await delay(10000)
                    await callSubmitCancelByClientOrderID(provider)
                    console.info(" ")
                    console.info(" ")
                    return resolve(null)
                } catch (err) {
                    return reject(err)
                }
            }),
        ])

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

async function doHttpLifecycle(provider: BaseProvider) {
    try {
        await callSubmitOrder(provider)
        console.info(" ")
        console.info(" ")

        await delay(60000)

        let orders = await callGetOpenOrders(provider)
        if (!orders || orders.length == 0) {
            console.error(`order failed to get into orderbook`)
            return
        }

        await callSubmitCancelByClientOrderID(provider)
        console.info(" ")
        console.info(" ")

        await delay(60000)

        orders = await callGetOpenOrders(provider)
        if (!orders || orders.length > 0) {
            console.error(`order failed to cancel`)
            return
        }

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } finally {
        provider.close()
    }
}

//unary requests
async function callGetOrderbook(provider: BaseProvider) {
    try {
        console.info("Retrieving orderbook for SOLUSDC market")
        let req = await provider.getOrderbook(
            new GetOrderbookRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
                .setLimit(5)
        )
        console.info(req)

        console.info("Retrieving orderbook for SOL-USDC market")
        req = await provider.getOrderbook(
            new GetOrderbookRequest()
                .setMarket("SOL-USDC")
                .setProject(Project.P_OPENBOOK)
                .setLimit(5)
        )
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to retrieve the orderbook for market SOL/USDC",
            error
        )
    }
}

async function submitTxWithMemo(provider: BaseProvider) {
    try {
        console.info("Retrieving recent blockHash")
        const recentBlockhash = await provider.getRecentBlockHash(
            new GetRecentBlockHashRequest()
        )
        console.info(recentBlockhash.getBlockhash())
        const keypair = Keypair.fromSecretKey(config.WalletSecretKey)
        const encodedTxn = addMemo(
            [],
            "new memo by dev",
            recentBlockhash.getBlockhash(),
            keypair.publicKey,
            keypair
        )
        console.info("Submitting tx with one memo")
        let response = await provider.postSubmit(
            new PostSubmitRequest()
                .setTransaction(
                    new TransactionMessage()
                        .setContent(encodedTxn)
                        .setIscleanup(false)
                )
                .setSkippreflight(true)
        )
        console.info(response.getSignature())

        const encodedTxn2 = addMemoToSerializedTxn(
            encodedTxn,
            "new memo by dev2",
            keypair.publicKey,
            keypair
        )
        console.info("Submitting tx with two memos")
        response = await provider.postSubmit(
            new PostSubmitRequest()
                .setTransaction(
                    new TransactionMessage()
                        .setContent(encodedTxn2)
                        .setIscleanup(false)
                )
                .setSkippreflight(true)
        )
        console.info(response.getSignature())
    } catch (error) {
        console.error(
            "Failed to retrieve the orderbook for market SOL/USDC",
            error
        )
    }
}

async function callGetMarkets(provider: BaseProvider) {
    try {
        console.info("Retrieving all supported markets")
        const req = await provider.getMarkets(new GetMarketsRequest())
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the markets", error)
    }
}

async function callGetOpenOrders(
    provider: BaseProvider
): Promise<Array<Order>> {
    try {
        console.info("Retrieving all open orders in SOLUSDC market")
        const req = await provider.getOpenOrders(
            new GetOpenOrdersRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
                .setAddress(ownerAddress)
                .setLimit(0)
        )
        console.info(req)
        return req.getOrdersList()
    } catch (error) {
        console.error("Failed to retrieve open orders", error)
        throw error
    }
}

async function callGetUnsettled(provider: BaseProvider) {
    try {
        console.info("Retrieving unsettled funds in SOLUSDC market")
        const req = await provider.getUnsettled(
            new GetUnsettledRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
                .setOwneraddress(ownerAddress)
        )
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetAccountBalance(provider: BaseProvider) {
    try {
        console.info("Retrieving token balances")
        const [req] = await Promise.all([
            provider.getAccountBalance(
                new GetAccountBalanceRequest().setOwneraddress(ownerAddress)
            ),
        ])
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve the unsettled funds", error)
    }
}

async function callGetTrades(provider: BaseProvider) {
    try {
        console.info("Retrieving trades for SOL/USDC market ")
        const req = await provider.getTrades(
            new GetTradesRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
                .setLimit(5)
        )
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve trades", error)
    }
}

async function callGetTickers(provider: BaseProvider) {
    try {
        console.info("Retrieving tickers for SOL/USDC market ")
        const req = await provider.getTickers(
            new GetTickersRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
        )
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve tickers", error)
    }
}

async function callGetServerTime(provider: BaseProvider) {
    try {
        console.info("Retrieving server time")
        const req = await provider.getServerTime(new GetServerTimeRequest())
        console.info(req)
    } catch (error) {
        console.error("Failed to retrieve server time", error)
    }
}

async function callGetPrices(provider: BaseProvider) {
    try {
        console.info("Retrieving price")
        const resp = await provider.getPrice(
            new GetPriceRequest().setTokensList(["SOL", "USDC"])
        )
        console.info(resp)
    } catch (error) {
        console.error("Failed to retrieve server time", error)
    }
}

async function callGetPools(provider: BaseProvider) {
    try {
        console.info("Retrieving pools")
        const resp = await provider.getPools(
            new GetPoolsRequest().setProjectsList([Project.P_RAYDIUM])
        )
        console.info(resp)
    } catch (error) {
        console.error("Failed to retrieve server time", error)
    }
}

async function callGetQuotes(provider: BaseProvider) {
    try {
        console.info("Retrieving quotes")
        const resp = await provider.getQuotes(
            new GetQuotesRequest()
                .setIntoken("SOL")
                .setOuttoken("USDC")
                .setInamount(1)
                .setSlippage(5)
                .setLimit(5)
                .setProjectsList([Project.P_RAYDIUM, Project.P_JUPITER])
        )
        console.info(resp)
    } catch (error) {
        console.error("Failed to retrieve quotes", error)
    }
}

//streaming requests
async function callGetOrderbookStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for orderbook updates of SOLUSDC market")
        let req = await provider.getOrderbooksStream(
            new GetOrderbooksRequest()
                .setMarketsList(["SOLUSDC"])
                .setProject(Project.P_OPENBOOK)
                .setLimit(5)
        )

        let count = 0
        for await (const ob of req) {
            console.info(ob)
            count++
            if (count == 5) {
                break
            }
        }
        console.info(" ")
        console.info(" ")

        console.info("Subscribing for orderbook updates of SOLUSDC market")
        req = await provider.getOrderbooksStream(
            new GetOrderbooksRequest()
                .setMarketsList(["SOL-USDC"])
                .setProject(Project.P_OPENBOOK)
                .setLimit(5)
        )

        count = 0
        for await (const ob of req) {
            console.info(ob)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error(
            "Failed to retrieve orderbook updates for market SOL/USDC",
            error
        )
    }
}

async function callGetTickersStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for ticker updates of SOLUSDC market")
        const req = await provider.getTickersStream(
            new GetTickersRequest()
                .setMarket("SOLUSDC")
                .setProject(Project.P_OPENBOOK)
        )

        let count = 0
        for await (const tick of req) {
            console.info(tick)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error(
            "Failed to retrieve ticker updates for market SOL/USDC",
            error
        )
    }
}

async function callGetTradesStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for trade updates of SOLUSDC market")
        const req = await provider.getTradesStream(
            new GetTradesRequest()
                .setMarket("SOLUSDC")
                .setLimit(5)
                .setProject(Project.P_OPENBOOK)
        )

        let count = 0
        for await (const tr of req) {
            console.info(tr)
            count++
            if (count == 1) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve trade for market SOL/USDC", error)
    }
}

async function callGetSwapsStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for swap updates of RAY/SOL market")
        const req = await provider.getSwapsStream(
            new GetSwapsStreamRequest()
                .setProjectsList([Project.P_RAYDIUM])
                .setPoolsList(["AVs9TA4nWDzfPJE9gGVNJMVhcQy3V9PGazuz33BfG2RA"])
                .setIncludefailed(true)
        )

        let count = 0
        for await (const tr of req) {
            console.info(tr)
            count++
            if (count == 1) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve swap for market RAY/SOL", error)
    }
}

async function callGetPricesStream(provider: BaseProvider) {
    try {
        console.info(
            "Subscribing for prices updates of SOL and USDC on Raydium"
        )

        const projects: Project[] = [Project.P_RAYDIUM, Project.P_JUPITER]
        const tokens: string[] = ["SOL", "USDC"]
        const stream = await provider.getPricesStream(
            new GetPricesStreamRequest()
                .setProjectsList(projects)
                .setTokensList(tokens)
        )

        let count = 0
        for await (const update of stream) {
            console.info(update)
            count++
            if (count == 3) {
                break
            }
        }
    } catch (error) {
        console.error(
            "Failed to retrieve prices updates for SOL and USDC on Raydium",
            error
        )
    }
}

async function callGetPoolsStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for pool updates of Raydium")

        const projects: Project[] = [Project.P_RAYDIUM]
        const stream = await provider.getPoolReservesStream(
            new GetPoolReservesStreamRequest().setProjectsList(projects)
        )

        let count = 0
        for await (const update of stream) {
            console.info(update)
            count++
            if (count == 3) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve pool updates for Raydium", error)
    }
}

async function callGetQuotesStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for quote updates of SOLUSDC market")

        const projects: Project[] = [Project.P_RAYDIUM]
        const tokenPairs: TokenPair[] = [
            new TokenPair()
                .setIntoken("SOL")
                .setOuttoken("USDC")
                .setInamount(1),
        ]
        const stream = await provider.getQuotesStream(
            new GetQuotesStreamRequest()
                .setProjectsList(projects)
                .setTokenpairsList(tokenPairs)
        )

        let count = 0
        for await (const update of stream) {
            console.info(update)
            count++
            if (count == 2) {
                break
            }
        }
    } catch (error) {
        console.error(
            "Failed to retrieve USDC quote for 1 SOL on Raydium",
            error
        )
    }
}

async function callGetBlockStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for block updates")
        const resp = await provider.getBlockStream(new GetBlockStreamRequest())

        let count = 0
        for await (const update of resp) {
            console.info(update)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve block updates", error)
    }
}

async function callGetRecentBlockHashStream(provider: BaseProvider) {
    try {
        console.info("Subscribing for block hash updates")
        const resp = await provider.getRecentBlockHashStream(
            new GetRecentBlockHashRequest()
        )

        let count = 0
        for await (const update of resp) {
            console.info(update)
            count++
            if (count == 5) {
                break
            }
        }
    } catch (error) {
        console.error("Failed to retrieve block hash updates", error)
    }
}

//POST requests
async function callPostOrder(provider: BaseProvider) {
    try {
        console.info("generating New Order transaction")
        const clientOrderID = getRandom()
        testOrder.setClientorderid(clientOrderID)
        const req = await provider.postOrder(testOrder)
        console.info(req)
    } catch (error) {
        console.error("Failed to generate  a New Order transaction", error)
    }
}

async function callSubmitOrder(provider: BaseProvider) {
    try {
        console.info("Generating and submitting a New Order transaction")
        const clientOrderID = getRandom()
        testOrder.setClientorderid(clientOrderID)
        const req = await provider.submitOrder(testOrder)
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a New Order transaction",
            error
        )
    }
}

async function callPostCancelByClientOrderID(provider: BaseProvider) {
    try {
        console.info("Generating and Cancel by Client Order ID transaction")
        const req = await provider.postCancelByClientOrderID(
            new PostCancelByClientOrderIDRequest()
                .setMarketaddress(marketAddress)
                .setOwneraddress(ownerAddress)
                .setOpenordersaddress(openOrdersAddress)
                .setClientorderid(testOrder.getClientorderid())
                .setProject(Project.P_OPENBOOK)
        )
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate a Cancel by Client Order ID transaction",
            error
        )
    }
}

async function callSubmitCancelByClientOrderID(provider: BaseProvider) {
    try {
        console.info(
            "Generating and submitting a Cancel by Client Order ID transaction"
        )
        const req = await provider.submitCancelOrderByClientOrderID(
            new PostCancelByClientOrderIDRequest()
                .setMarketaddress(marketAddress)
                .setOwneraddress(ownerAddress)
                .setOpenordersaddress(openOrdersAddress)
                .setClientorderid(testOrder.getClientorderid())
                .setProject(Project.P_OPENBOOK)
        )
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a Cancel by Client Order ID transaction",
            error
        )
    }
}

async function callPostSettleFunds(provider: BaseProvider) {
    try {
        console.info("Generating a Settle transaction")
        const req = await provider.postSettle(
            new PostSettleRequest()
                .setMarket(marketAddress)
                .setOpenordersaddress(openOrdersAddress)
                .setBasetokenwallet(baseTokenWallet)
                .setQuotetokenwallet(quoteTokenWallet)
                .setOwneraddress(ownerAddress)
                .setProject(Project.P_OPENBOOK)
        )
        console.info(req)
    } catch (error) {
        console.error("Failed to generate a Settle transaction", error)
    }
}

async function callSettleFunds(provider: BaseProvider) {
    try {
        console.info("Generating and submitting a Settle transaction")
        const req = await provider.submitSettle(
            new PostSettleRequest()
                .setMarket(marketAddress)
                .setOpenordersaddress(openOrdersAddress)
                .setBasetokenwallet(baseTokenWallet)
                .setQuotetokenwallet(quoteTokenWallet)
                .setOwneraddress(ownerAddress)
                .setProject(Project.P_OPENBOOK)
        )
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a Settle transaction",
            error
        )
    }
}

async function callReplaceByClientOrderID(provider: BaseProvider) {
    try {
        console.info(
            "Generating and submitting a Cancel and Replace by Client Order ID transaction"
        )
        const clientOrderID = getRandom()
        testOrder.setClientorderid(clientOrderID)
        testOrder.setPrice(testOrder.getPrice() - 1)

        const req = await provider.submitReplaceByClientOrderID(testOrder)
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a Cancel by Client Order ID transaction",
            error
        )
    }
}

async function callReplaceOrder(provider: BaseProvider) {
    try {
        console.info(
            "Generating and submitting a Cancel and Replace by Client Order ID transaction"
        )
        const order = new PostReplaceOrderRequest()
            .setOrderid("")
            .setOwneraddress(ownerAddress)
            .setPayeraddress(payerAddress)
            .setMarket("SOLUSDC")
            .setSide(Side.S_ASK)
            .setTypeList([OrderType.OT_LIMIT])
            .setAmount(0.1)
            .setPrice(199)
            .setProject(Project.P_UNKNOWN)

        const req = await provider.submitReplaceOrder(order)
        console.info(req)
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a Cancel by Client Order ID transaction",
            error
        )
    }
}

async function callCancelAll(provider: BaseProvider) {
    try {
        console.info("Generating and placing two orders")
        const clientOrderID1 = getRandom()
        const clientOrderID2 = getRandom()

        // placing orders
        testOrder.setClientorderid(clientOrderID1)
        const resp1 = await provider.submitOrder(testOrder)
        console.info(`Order 1 placed ${resp1.signature}`)

        testOrder.setClientorderid(clientOrderID2)
        const resp2 = await provider.submitOrder(testOrder)
        console.info(`Order 2 placed ${resp2.signature}`)

        console.info(
            `\nWaiting ${crank_timeout_s}s for place orders to be cranked`
        )

        // checking orders placed
        const openOrdersRequest = new GetOpenOrdersRequest()
            .setMarket(marketAddress)
            .setAddress(ownerAddress)
            .setProject(Project.P_OPENBOOK)

        await delay(crank_timeout_s * 1000)
        const openOrdersResponse1: GetOpenOrdersResponse =
            await provider.getOpenOrders(openOrdersRequest)

        let found1 = false
        let found2 = false
        for (const order of openOrdersResponse1.getOrdersList()) {
            if (order.getClientorderid() === clientOrderID1.toString()) {
                found1 = true
            } else if (order.getClientorderid() === clientOrderID2.toString()) {
                found2 = true
            }
        }

        if (!found1 || !found2) {
            console.error("One/both orders not found in orderbook")
            return ""
        }
        console.info("Both orders placed successfully\n")

        // cancelling orders
        const cancelAllRequest = new PostCancelAllRequest()
            .setMarket(marketAddress)
            .setOwneraddress(ownerAddress)
            .setOpenordersaddressesList([openOrdersAddress])
            .setProject(Project.P_OPENBOOK)
        const response = await provider.submitCancelAll(cancelAllRequest)

        const signatures: string[] = []
        for (const transaction of response.getTransactionsList()) {
            signatures.push(transaction.getSignature())
        }

        console.info(
            `Cancelling all orders, response signatures(s): ${signatures.join(
                ", "
            )}`
        )
        console.info(
            `\nWaiting ${crank_timeout_s}s for cancel order(s) to be cranked`
        )

        // checking all orders cancelled
        await delay(crank_timeout_s * 1000)
        const openOrdersResponse2 = await provider.getOpenOrders(
            openOrdersRequest
        )

        if (openOrdersResponse2.getOrdersList().length !== 0) {
            console.error(
                `${
                    openOrdersResponse2.getOrdersList().length
                } orders not cancelled`
            )
            return ""
        }
        console.info("Orders in orderbook cancelled")
        console.info(" ")

        await callSettleFunds(provider)
        console.info(" ")
        console.info(" ")
    } catch (error) {
        console.error(error)
    }
}

async function callTradeSwap(provider: BaseProvider) {
    try {
        console.info("Submitting a trade swap")
        const responses = await provider.submitTradeSwap(
            new TradeSwapRequest()
                .setOwneraddress(ownerAddress)
                .setIntoken("USDC")
                .setOuttoken("SOL")
                .setInamount(0.01)
                .setSlippage(0.1)
                .setProject(Project.P_RAYDIUM),
            SubmitStrategy.P_SUBMIT_ALL,
            true
        )

        for (const transaction of responses.getTransactionsList()) {
            console.info(transaction.getSignature())
        }
    } catch (error) {
        console.error("Failed to generate and/or submit a trade swap", error)
    }
}

async function callRouteTradeSwap(provider: BaseProvider) {
    try {
        console.info("Submitting a route trade swap")
        const responses = await provider.submitRouteTradeSwap(
            new RouteTradeSwapRequest()
                .setOwneraddress(ownerAddress)
                .setStepsList([
                    new RouteStep()
                        .setIntoken("FIDA")
                        .setOuttoken("RAY")
                        .setInamount(0.01)
                        .setOutamount(0.007505)
                        .setOutamountmin(0.074),
                    new RouteStep()
                        .setIntoken("RAY")
                        .setOuttoken("USDC")
                        .setInamount(0.007505)
                        .setOutamount(0.004043)
                        .setOutamountmin(0.004),
                ])
                .setProject(Project.P_RAYDIUM),
            SubmitStrategy.P_SUBMIT_ALL,
            true
        )

        for (const transaction of responses.getTransactionsList()) {
            console.info(transaction.getSignature())
        }
    } catch (error) {
        console.error(
            "Failed to generate and/or submit a route trade swap",
            error
        )
    }
}

// Run examples
run()
