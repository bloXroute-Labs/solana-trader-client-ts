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
    GetNewPerpOrdersStreamRequest,
    GetNewPerpOrdersStreamResponse,
    GetOpenPerpOrdersRequest,
    GetOpenPerpOrdersResponse,
    GetPerpOrderbookRequest,
    GetPerpOrderbookResponse,
    GetPerpOrderbooksRequest,
    GetPerpOrderbooksStreamResponse,
    GetPerpPositionsRequest,
    GetPerpPositionsResponse,
    GetPerpTradesStreamRequest,
    GetPerpTradesStreamResponse,
    GetUserRequest,
    GetUserResponse,
    PostClosePerpPositionsRequest,
    PostClosePerpPositionsResponse,
    PostManageCollateralRequest,
    PostManageCollateralResponse,
    PostPerpOrderRequest,
    PostPerpOrderResponse,
    PostCancelPerpOrderRequest,
    PostCancelPerpOrderResponse,
    PostCancelPerpOrdersRequest,
    PostCancelPerpOrdersResponse,
    PostCreateUserRequest,
    PostCreateUserResponse,
    GetTokenAccountsResponse,
    GetTokenAccountsRequest,
} from "../proto/messages/api/index"
import { Api } from "../proto/services/api/index"
import {
    signTx,
    signTxMessage,
    SubmitTransactionResponse,
} from "../utils/transaction"
import { Keypair } from "@solana/web3.js"
import base58 from "bs58"
import { RpcReturnType } from "../proto/runtime/rpc"

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

    postPerpOrder(
        request: PostPerpOrderRequest
    ): RpcReturnType<Promise<PostPerpOrderResponse>, []> {
        throw new Error("Method not implemented.")
    }
    getPerpPositions(
        request: GetPerpPositionsRequest
    ): RpcReturnType<Promise<GetPerpPositionsResponse>, []> {
        throw new Error("Method not implemented.")
    }
    getTokenAccounts(
        request: GetTokenAccountsRequest
    ): RpcReturnType<Promise<GetTokenAccountsResponse>, []> {
        throw new Error("Method not implemented.")
    }
    getOpenPerpOrders(
        request: GetOpenPerpOrdersRequest
    ): RpcReturnType<Promise<GetOpenPerpOrdersResponse>, []> {
        throw new Error("Method not implemented.")
    }
    postCancelPerpOrder(
        request: PostCancelPerpOrderRequest
    ): RpcReturnType<Promise<PostCancelPerpOrderResponse>, []> {
        throw new Error("Method not implemented.")
    }
    postCancelPerpOrders(
        request: PostCancelPerpOrdersRequest
    ): RpcReturnType<Promise<PostCancelPerpOrdersResponse>, []> {
        throw new Error("Method not implemented.")
    }
    postClosePerpPositions(
        request: PostClosePerpPositionsRequest
    ): RpcReturnType<Promise<PostClosePerpPositionsResponse>, []> {
        throw new Error("Method not implemented.")
    }
    getPerpOrderbook(
        request: GetPerpOrderbookRequest
    ): RpcReturnType<Promise<GetPerpOrderbookResponse>, []> {
        throw new Error("Method not implemented.")
    }
    postCreateUser(
        request: PostCreateUserRequest
    ): RpcReturnType<Promise<PostCreateUserResponse>, []> {
        throw new Error("Method not implemented.")
    }
    getUser(
        request: GetUserRequest
    ): RpcReturnType<Promise<GetUserResponse>, []> {
        throw new Error("Method not implemented.")
    }
    postManageCollateral(
        request: PostManageCollateralRequest
    ): RpcReturnType<Promise<PostManageCollateralResponse>, []> {
        throw new Error("Method not implemented.")
    }

    getPerpOrderbooksStream(
        request: GetPerpOrderbooksRequest
    ): RpcReturnType<
        AsyncGenerator<GetPerpOrderbooksStreamResponse, any, unknown>,
        []
    > {
        throw new Error("Method not implemented.")
    }
    getNewPerpOrdersStream(
        request: GetNewPerpOrdersStreamRequest
    ): RpcReturnType<
        AsyncGenerator<GetNewPerpOrdersStreamResponse, any, unknown>,
        []
    > {
        throw new Error("Method not implemented.")
    }
    getPerpTradesStream(
        request: GetPerpTradesStreamRequest
    ): RpcReturnType<
        AsyncGenerator<GetPerpTradesStreamResponse, any, unknown>,
        []
    > {
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

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        throw new Error("Not implemented")
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        throw new Error("Not implemented")
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
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

    async submitOrder(
        request: PostOrderRequest,
        skipPreFlight = false
    ): Promise<SubmitTransactionResponse> {
        const res = await this.postOrder(request)

        const submitResponse = await this.signAndSubmitTx(
            res.transaction,
            skipPreFlight
        )

        return {
            signature: submitResponse.signature,
            openOrdersAccount: res.openOrdersAddress,
        }
    }

    async submitCancelOrder(
        request: PostCancelOrderRequest,
        skipPreFlight = false
    ): Promise<PostSubmitResponse> {
        const res = await this.postCancelOrder(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitCancelOrderByClientOrderID(
        request: PostCancelByClientOrderIDRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postCancelByClientOrderID(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
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

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitReplaceByClientOrderID(
        request: PostOrderRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postReplaceByClientOrderID(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitReplaceOrder(
        request: PostReplaceOrderRequest,
        skipPreFlight = true
    ): Promise<PostSubmitResponse> {
        const res = await this.postReplaceOrder(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
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

    private signAndSubmitTx(
        transactionMessage: TransactionMessage | undefined,
        skipPreFlight: boolean,
        isCleanup = false
    ): Promise<PostSubmitResponse> {
        this.requirePrivateKey()

        if (transactionMessage == undefined) {
            throw Error("transaction message was undefined")
        }

        const signedTx = signTx(transactionMessage.content, this.privateKey!)

        return this.postSubmit({
            transaction: {
                content: signedTx.serialize().toString("base64"),
                isCleanup: isCleanup,
            },
            skipPreFlight,
        })
    }

    private signAndSubmitTxs(
        transactionMessages: TransactionMessage[],
        submitStrategy: SubmitStrategy,
        skipPreFlight: boolean
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

    getTickersStream(
        request: GetTickersRequest
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

    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
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

    cancelGetPoolReservesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        throw new Error("Not implemented")
    }
}
