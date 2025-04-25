import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetBlockStreamRequest,
    GetBlockStreamResponse,
    GetKlineRequest,
    GetKlineResponse,
    GetMarketDepthRequest,
    GetMarketDepthResponse,
    GetMarketDepthsStreamResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetOrderbooksRequest,
    GetOrderbooksStreamResponse,
    GetOrderByIDRequest,
    GetOrderByIDResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    GetOrderStatusStreamRequest,
    GetOrderStatusStreamResponse,
    GetPoolReservesStreamRequest,
    GetPoolReservesStreamResponse,
    GetPoolsRequest,
    GetPoolsResponse,
    GetPriceRequest,
    GetPriceResponse,
    GetPricesStreamRequest,
    GetPricesStreamResponse,
    GetQuotesRequest,
    GetQuotesResponse,
    GetQuotesStreamRequest,
    GetQuotesStreamResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    GetSwapsStreamRequest,
    GetSwapsStreamResponse,
    GetTickersRequest,
    GetTickersResponse,
    GetTickersStreamResponse,
    GetTradesRequest,
    GetTradesResponse,
    GetTradesStreamResponse,
    GetUnsettledRequest,
    GetUnsettledResponse,
    PostCancelAllRequest,
    PostCancelAllResponse,
    PostCancelByClientOrderIDRequest,
    PostCancelOrderRequest,
    PostCancelOrderResponse,
    PostOrderRequest,
    PostOrderResponse,
    PostReplaceOrderRequest,
    PostSettleRequest,
    PostSettleResponse,
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitRequestEntry,
    PostSubmitResponse,
    RouteTradeSwapRequest,
    SubmitStrategy,
    TradeSwapRequest,
    TradeSwapResponse,
    TransactionMessage,
    GetTokenAccountsResponse,
    GetTokenAccountsRequest,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetMarketDepthRequestV2,
    GetMarketDepthResponseV2,
    GetMarketsRequestV2,
    GetMarketsResponseV2,
    GetOpenOrdersRequestV2,
    GetOrderbookRequestV2,
    GetOrderbookResponseV2,
    PostReplaceOrderRequestV2,
    PostSettleRequestV2,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetTickersRequestV2,
    GetTickersResponseV2,
    GetUnsettledRequestV2,
    PostCancelOrderRequestV2,
    PostCancelOrderResponseV2,
    PostOrderRequestV2,
    GetOpenOrdersResponseV2,
    GetNewRaydiumPoolsRequest,
    GetNewRaydiumPoolsResponse,
    GetTransactionRequest,
    GetTransactionResponse,
    GetRateLimitRequest,
    GetRateLimitResponse,
    GetPriorityFeeRequest,
    GetPriorityFeeResponse,
    PostJupiterSwapInstructionsRequest,
    PostJupiterSwapInstructionsResponse,
    GetTickersStreamRequest,
    GetRaydiumPoolReserveRequest,
    GetRaydiumPoolReserveResponse,
    GetBundleTipRequest,
    GetBundleTipResponse,
    PostRaydiumSwapInstructionsRequest,
    PostRaydiumSwapInstructionsResponse,
    GetPumpFunNewTokensStreamRequest,
    GetPumpFunNewTokensStreamResponse,
    GetPumpFunSwapsStreamRequest,
    GetPumpFunSwapsStreamResponse,
    PostZetaCrossMarginAccountRequest,
    PostZetaCrossMarginAccountResponse,
    GetZetaTransactionStreamResponse,
    PostPumpFunSwapRequest,
    PostPumpFunSwapResponse,
    GetPumpFunQuotesRequest,
    GetPumpFunQuotesResponse,
    GetRecentBlockHashRequestV2,
    GetRecentBlockHashResponseV2,
    GetRaydiumCPMMQuotesRequest,
    GetPumpFunAMMSwapStreamRequest,
    GetPumpFunAMMSwapStreamResponse,
    GetRaydiumCPMMQuotesResponse,
    GetRaydiumCLMMQuotesResponse,
    GetRaydiumCLMMQuotesRequest,
    PostRaydiumCPMMSwapResponse,
    PostRaydiumCPMMSwapRequest,
    PostPumpFunSwapRequestSol,
    GetNewRaydiumPoolsByTransactionRequest,
    GetPriorityFeeByProgramRequest,
    GetPriorityFeeByProgramResponse,
    GetNewRaydiumPoolsByTransactionResponse,
    GetRaydiumCLMMPoolsResponse,
    PostSubmitSnipeRequest,
    PostSubmitSnipeResponse,
    PostSubmitPaladinRequest,
    GetLeaderScheduleResponse,
    GetLeaderScheduleRequest,
    TransactionMessageV2,
    GetPumpFunNewAmmPoolStreamRequest,
    GetPumpFunNewAmmPoolStreamResponse
} from "../proto/messages/api/index"
import { Api } from "../proto/services/api/index"
import {
    signTx,
    signTxMessage,
    SubmitTransactionResponse,
    txToBase64,
} from "../utils/transaction"
import { Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { RpcReturnType } from "../proto/runtime/rpc"
import { Type as GetZetaTransactionStreamRequest } from "../proto/messages/api/GetZetaTransactionStreamRequest"

/* eslint-disable */

export abstract class BaseProvider implements Api {
    protected privateKey?: Keypair
    protected authHeader: string

    protected constructor(authHeader: string, privateKey?: string) {
        this.authHeader = authHeader
        if (privateKey) {
            this.privateKey = Keypair.fromSecretKey(base58.decode(privateKey))
        }
    }

    // Openbook V2
    getMarketsV2(
        request: GetMarketsRequestV2
    ): RpcReturnType<Promise<GetMarketsResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    getRateLimit(
        request: GetRateLimitRequest
    ): RpcReturnType<Promise<GetRateLimitResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getMarketDepthV2(
        request: GetMarketDepthRequestV2
    ): RpcReturnType<Promise<GetMarketDepthResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    getOpenOrdersV2(
        request: GetOpenOrdersRequestV2
    ): RpcReturnType<Promise<GetOpenOrdersResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    getOrderbookV2(
        request: GetOrderbookRequestV2
    ): RpcReturnType<Promise<GetOrderbookResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPoolReserve(
        request: GetRaydiumPoolReserveRequest
    ): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCLMMPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMPoolsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCPMMQuotes(
        request: GetRaydiumCPMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getRaydiumCLMMQuotes(
        request: GetRaydiumCLMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getPumpFunQuotes(
        request: GetPumpFunQuotesRequest
    ): RpcReturnType<Promise<GetPumpFunQuotesResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getTickersV2(
        request: GetTickersRequestV2
    ): RpcReturnType<Promise<GetTickersResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    getUnsettledV2(
        request: GetUnsettledRequestV2
    ): RpcReturnType<Promise<GetUnsettledResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postCancelOrderV2(
        request: PostCancelOrderRequestV2
    ): RpcReturnType<Promise<PostCancelOrderResponseV2>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postJupiterSwapInstructions(
        request: PostJupiterSwapInstructionsRequest
    ): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postOrderV2(
        request: PostOrderRequestV2
    ): RpcReturnType<Promise<PostOrderResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCLMMRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCPMMSwap(
        request: PostRaydiumCPMMSwapRequest
    ): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumCLMMSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postPumpFunSwap(
        request: PostPumpFunSwapRequest
    ): RpcReturnType<Promise<PostPumpFunSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postPumpFunSwapSol(
        request: PostPumpFunSwapRequestSol
    ): RpcReturnType<Promise<PostPumpFunSwapResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postRaydiumSwapInstructions(
        request: PostRaydiumSwapInstructionsRequest
    ): RpcReturnType<Promise<PostRaydiumSwapInstructionsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postReplaceOrderV2(
        request: PostReplaceOrderRequestV2
    ): RpcReturnType<Promise<PostOrderResponse>, []> {
        throw new Error("Method not implemented.")
    }

    postSettleV2(
        request: PostSettleRequestV2
    ): RpcReturnType<Promise<PostSettleResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getTokenAccounts(
        request: GetTokenAccountsRequest
    ): RpcReturnType<Promise<GetTokenAccountsResponse>, []> {
        throw new Error("Method not implemented.")
    }

    abstract close(): void

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        throw new Error("Not implemented")
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        throw new Error("Not implemented")
    }

    getKline(request: GetKlineRequest): Promise<GetKlineResponse> {
        throw new Error("Not implemented")
    }

    getOrderbook(request: GetOrderbookRequest): Promise<GetOrderbookResponse> {
        throw new Error("Not implemented")
    }

    getMarketDepth(
        request: GetMarketDepthRequest
    ): Promise<GetMarketDepthResponse> {
        throw new Error("Not implemented")
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        throw new Error("Not implemented")
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        throw new Error("Not implemented")
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        throw new Error("Not implemented")
    }

    getOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
        throw new Error("Not implemented")
    }

    getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        throw new Error("Not implemented")
    }

    getOrderByID(request: GetOrderByIDRequest): Promise<GetOrderByIDResponse> {
        throw new Error("Not implemented")
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        throw new Error("Not implemented")
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        throw new Error("Not implemented")
    }

    postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        throw new Error("Not implemented")
    }

    postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        throw new Error("Not implemented")
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        throw new Error("Not implemented")
    }

    postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }


    postSubmitSnipeV2(request: PostSubmitSnipeRequest): Promise<PostSubmitSnipeResponse> {
        throw new Error("Not implemented")
    }

    postSubmitPaladinV2(request: PostSubmitPaladinRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        throw new Error("Not implemented")
    }

    postSubmitV2(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        throw new Error("Not implemented")
    }

    getAccountBalanceV2(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        throw new Error("Not implemented")
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        throw new Error("Not implemented")
    }

    getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        throw new Error("Not implemented")
    }

    getPriorityFeeByProgram(
        request: GetPriorityFeeByProgramRequest
    ): RpcReturnType<Promise<GetPriorityFeeByProgramResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashV2(
        request: GetRecentBlockHashRequestV2
    ): Promise<GetRecentBlockHashResponseV2> {
        throw new Error("Not implemented")
    }

    getLeaderSchedule(request: GetLeaderScheduleRequest): Promise<GetLeaderScheduleResponse> {
        throw new Error("Not implemented")
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        throw new Error("Not implemented")
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        throw new Error("Not implemented")
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        throw new Error("Not implemented")
    }

    // Openbook V2 util functions
    async submitOrderV2(
        request: PostOrderRequestV2,
        skipPreFlight = true
    ): Promise<SubmitTransactionResponse> {
        const res = await this.postOrderV2(request)

        const submitResponse = await this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )

        return {
            signature: submitResponse.signature,
            openOrdersAccount: res.openOrdersAddress,
        }
    }

    async submitCancelOrderV2(
        request: PostCancelOrderRequestV2,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        const res = await this.postCancelOrderV2(request)

        return this.signAndSubmitTxs(
            res.transactions,
            "P_SUBMIT_ALL",
            skipPreFlight
        )
    }

    async submitSettleV2(
        request: PostSettleRequestV2,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postSettleV2(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitReplaceOrderV2(
        request: PostReplaceOrderRequestV2,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postReplaceOrderV2(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    // End of Openbook V2 util functions

    async submitOrder(
        request: PostOrderRequest,
        skipPreFlight = true
    ): Promise<SubmitTransactionResponse> {
        const res = await this.postOrder(request)

        const submitResponse = await this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )

        return {
            signature: submitResponse.signature,
            openOrdersAccount: res.openOrdersAddress,
        }
    }

    async submitCancelOrder(
        request: PostCancelOrderRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postCancelOrder(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitCancelOrderByClientOrderID(
        request: PostCancelByClientOrderIDRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postCancelByClientOrderID(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitCancelAll(
        request: PostCancelAllRequest,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        const res = await this.postCancelAll(request)

        return this.signAndSubmitTxs(
            res.transactions,
            "P_SUBMIT_ALL",
            skipPreFlight
        )
    }

    async submitSettle(
        request: PostSettleRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postSettle(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitReplaceByClientOrderID(
        request: PostOrderRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postReplaceByClientOrderID(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitReplaceOrder(
        request: PostReplaceOrderRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postReplaceOrder(request)

        return this.signAndSubmitTx(
            res.transaction,
            skipPreFlight,
            false,
            false
        )
    }

    async submitTradeSwap(
        request: TradeSwapRequest,
        submitStrategy: SubmitStrategy,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        const res = await this.postTradeSwap(request)

        return this.signAndSubmitTxs(
            res.transactions,
            submitStrategy,
            skipPreFlight
        )
    }

    async submitRouteTradeSwap(
        request: RouteTradeSwapRequest,
        submitStrategy: SubmitStrategy,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        const res = await this.postRouteTradeSwap(request)

        return this.signAndSubmitTxs(
            res.transactions,
            submitStrategy,
            skipPreFlight
        )
    }

    private requirePrivateKey() {
        if (!this.privateKey) {
            throw new Error("private key not provided")
        }
    }

    public signAndSubmitTx(
        transactionMessage: TransactionMessage | undefined,
        skipPreFlight: boolean,
        isCleanup = false,
        frontRunningProtection: boolean
    ): Promise<PostSubmitResponse> {
        this.requirePrivateKey()

        if (transactionMessage == undefined) {
            throw Error("transaction message was undefined")
        }

        const signedTx = signTx(transactionMessage.content, this.privateKey!)

        return this.postSubmit({
            transaction: {
                content: txToBase64(signedTx),
                isCleanup: isCleanup,
            },
            skipPreFlight,
            frontRunningProtection: frontRunningProtection,
        })
    }

    public async signAndSubmitSnipeTx(
        entries: TransactionMessage[],
        useStakedRPCs: boolean = false
    ): Promise<PostSubmitSnipeResponse> {
        this.requirePrivateKey()
    
        if (!entries || entries.length === 0) {
            throw Error("entries array was empty or undefined")
        }
    
        const signedEntries = entries.map(entry => {
            if (!entry) {
                throw Error("entry was undefined")
            }
            return {
                transaction: {
                    content: txToBase64(signTx(entry.content, this.privateKey!)),
                    isCleanup: false,
                },
                skipPreFlight: true,
            }
        })
    
        const request: PostSubmitSnipeRequest = {
            entries: signedEntries,
            useStakedRPCs: useStakedRPCs
        }
    
        return this.postSubmitSnipeV2(request)
    }

    public async signAndSubmitPaladinTx(
        transactionMessage: TransactionMessageV2 | undefined,
        skipPreFlight: boolean = false,
        isCleanup: boolean = false,
        frontRunningProtection: boolean = false
    ): Promise<PostSubmitResponse> {
        this.requirePrivateKey()
    
        if (transactionMessage === undefined) {
            throw Error("transaction message was undefined")
        }
    
        const signedTx = signTx(transactionMessage.content, this.privateKey!)
        
        const request: PostSubmitPaladinRequest = {
            transaction: {
                content: txToBase64(signedTx),
            }
        }
    
        return this.postSubmitPaladinV2(request)
    }

    private signAndSubmitTxs(
        transactionMessages: TransactionMessage[],
        submitStrategy: SubmitStrategy,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        this.requirePrivateKey()

        if (transactionMessages == undefined) {
            throw Error("transaction was undefined")
        }

        const entries = new Array<PostSubmitRequestEntry>()
        for (const transactionMessage of transactionMessages) {
            entries.push({
                transaction: signTxMessage(
                    transactionMessage,
                    this.privateKey!
                ),
                skipPreFlight: skipPreFlight,
            })
        }

        return this.postSubmitBatch({
            entries: entries,
            submitStrategy: submitStrategy,
        })
    }

    // streams
    getOrderbooksStream(
        request: GetOrderbooksRequest
    ): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPumpFunNewTokensStream = (
        request: GetPumpFunNewTokensStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewTokensStreamResponse>> => {
        throw new Error("Not implemented")
    }

    getPumpFunNewAmmPoolStream = (
        request: GetPumpFunNewAmmPoolStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewAmmPoolStreamResponse>> => {
        throw new Error("Not implemented")
    }

    getPumpFunSwapsStream = (
        request: GetPumpFunSwapsStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunSwapsStreamResponse>> => {
        throw new Error("Not implemented")
    }
    getPumpFunAMMSwapStream = (
        request: GetPumpFunAMMSwapStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunAMMSwapStreamResponse>> => {
        throw new Error("Not implemented")
    }

    getTickersStream(
        request: GetTickersStreamRequest
    ): Promise<AsyncGenerator<GetTickersStreamResponse>> {
        throw new Error("Not implemented")
    }

    getMarketDepthsStream(
        request: GetMarketsRequest
    ): Promise<AsyncGenerator<GetMarketDepthsStreamResponse>> {
        throw new Error("Not implemented")
    }

    getTradesStream(
        request: GetTradesRequest
    ): Promise<AsyncGenerator<GetTradesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getOrderStatusStream(
        request: GetOrderStatusStreamRequest
    ): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> {
        throw new Error("Not implemented")
    }

    getSwapsStream(
        request: GetSwapsStreamRequest
    ): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPricesStream(
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPriorityFeeStream(
        request: GetPriorityFeeRequest
    ): Promise<AsyncGenerator<GetPriorityFeeResponse>> {
        throw new Error("Not implemented")
    }

    getQuotesStream(
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashStream(
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        throw new Error("Not implemented")
    }

    getBlockStream(
        request: GetBlockStreamRequest
    ): Promise<AsyncGenerator<GetBlockStreamResponse>> {
        throw new Error("Method not implemented.")
    }

    getNewRaydiumPoolsStream(
        request: GetNewRaydiumPoolsRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsResponse>> {
        throw new Error("Not implemented")
    }

    getNewRaydiumPoolsByTransactionStream(
        request: GetNewRaydiumPoolsByTransactionRequest
    ): RpcReturnType<
        AsyncGenerator<GetNewRaydiumPoolsByTransactionResponse, any, unknown>,
        []
    > {
        throw new Error("Method not implemented.")
    }

    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getBundleTipStream(
        request: GetBundleTipRequest
    ): Promise<AsyncGenerator<GetBundleTipResponse>> {
        throw new Error("Not implemented")
    }

    getPriorityFeeByProgramStream(
        request: GetPriorityFeeByProgramRequest
    ): Promise<AsyncGenerator<GetPriorityFeeByProgramResponse>> {
        throw new Error("Not implemented")
    }

    // these following cancel functions are only used by the websocket provider. Streams are supported by websockets or
    // by GRPC calls, but the cancellation for GRPC streams is handled on the server side.

    cancelAllGetOrderbooksStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelAllGetSwapsStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetOrderbooksStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelGetSwapsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetTradesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetTradesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetTickersStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetTickersStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetOrderStatusStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetOrderStatusStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetRecentBlockhashStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        throw new Error("Not implemented")
    }

    cancelGetRecentBlockhashStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetPriorityFeeStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetPriorityFeeStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetQuotesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetQuotesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetPoolReservesStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelAllGetPumpFunNewAmmPoolStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetPoolReservesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetNewRaydiumPoolsStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        throw new Error("Not implemented")
    }

    cancelGetNewRaydiumPoolsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelAllGetBundleTipStream = async (): Promise<Awaited<boolean>[]> => {
        throw new Error("Not implemented")
    }

    cancelGetBundleTipStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    getZetaTransactionStream(
        request: GetZetaTransactionStreamRequest
    ): Promise<AsyncGenerator<GetZetaTransactionStreamResponse>> {
        throw new Error("Not implemented")
    }

    postSubmitMineOre(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    postZetaCrossMarginAccount(
        request: PostZetaCrossMarginAccountRequest
    ): Promise<PostZetaCrossMarginAccountResponse> {
        throw new Error("Not implemented")
    }
}
