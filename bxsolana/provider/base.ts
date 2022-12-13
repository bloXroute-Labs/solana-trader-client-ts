import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetKlineRequest,
    GetKlineResponse,
    GetMarketDepthStreamResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookResponse,
    GetOrderbooksStreamResponse,
    GetOrderByIDRequest,
    GetOrderByIDResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
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
    PostSettleRequest,
    PostSettleResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    GetOrderStatusStreamRequest,
    GetOrderStatusStreamResponse,
    GetOrderbooksRequest,
    GetOrderbookRequest,
    PostReplaceOrderRequest,
    GetPoolsRequest,
    GetPoolsResponse,
    GetPoolReservesStreamResponse,
    GetPriceResponse,
    GetPriceRequest,
    GetQuotesRequest,
    GetQuotesResponse,
    GetQuotesStreamRequest,
    GetQuotesStreamResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    TradeSwapRequest,
    TradeSwapResponse,
    GetPoolReservesStreamRequest,
    GetSwapsStreamRequest,
    GetSwapsStreamResponse,
    GetPricesStreamRequest,
    RouteTradeSwapRequest,
    GetPricesStreamResponse,
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    GetBlockStreamRequest,
    GetBlockStreamResponse,
    PostSubmitRequestEntry,
    SubmitStrategy,
    TransactionMessage,
} from "../proto/messages/api/index.js"
import { Api } from "../proto/services/api/index.js"
import { signTx, signTxMessage, SubmitTransactionResponse } from "../../utils/transaction.js"

/* eslint-disable */

export abstract class BaseProvider implements Api {
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

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        throw new Error("Not implemented")
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        throw new Error("Not implemented")
    }

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        throw new Error("Not implemented")
    }

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        throw new Error("Not implemented")
    }

    // eslint-disable-next-line
    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        throw new Error("Not implemented")
    }

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        throw new Error("Not implemented")
    }

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        throw new Error("Not implemented")
    }

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        throw new Error("Not implemented")
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        throw new Error("Not implemented")
    }

    postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        throw new Error("Not implemented")
    }

    getOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
        throw new Error("Not implemented")
    }
    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        throw new Error("Not implemented")
    }
    getOrderByID(request: GetOrderByIDRequest): Promise<GetOrderByIDResponse> {
        throw new Error("Not implemented")
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        throw new Error("Not implemented")
    }

    getOrderbooksStream(request: GetOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> {
        throw new Error("Not implemented")
    }

    getTickersStream(request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>> {
        throw new Error("Not implemented")
    }

    getMarketDepthStream(request: GetMarketsRequest): Promise<AsyncGenerator<GetMarketDepthStreamResponse>> {
        throw new Error("Not implemented")
    }

    getTradesStream(request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getOrderStatusStream(request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> {
        throw new Error("Not implemented")
    }

    async submitOrder(request: PostOrderRequest, skipPreFlight = false): Promise<SubmitTransactionResponse> {
        const res = await this.postOrder(request)

        const submitResponse = await this.signAndSubmitTx(res.transaction, skipPreFlight)

        return { signature: submitResponse.signature, openOrdersAccount: res.openOrdersAddress }
    }

    async submitCancelOrder(request: PostCancelOrderRequest, skipPreFlight = false): Promise<PostSubmitResponse> {
        const res = await this.postCancelOrder(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitCancelOrderByClientOrderID(request: PostCancelByClientOrderIDRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postCancelByClientOrderID(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitCancelAll(request: PostCancelAllRequest, skipPreFlight = true): Promise<PostSubmitBatchResponse> {
        const res = await this.postCancelAll(request)

        return this.signAndSubmitTxs(res.transactions, "P_SUBMIT_ALL", skipPreFlight)
    }

    async submitSettle(request: PostSettleRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postSettle(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitReplaceByClientOrderID(request: PostOrderRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postReplaceByClientOrderID(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitReplaceOrder(request: PostReplaceOrderRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postReplaceOrder(request)

        return this.signAndSubmitTx(res.transaction, skipPreFlight)
    }

    async submitTradeSwap(request: TradeSwapRequest, submitStrategy: SubmitStrategy, skipPreFlight = true): Promise<PostSubmitBatchResponse> {
        const res = await this.postTradeSwap(request)

        return this.signAndSubmitTxs(res.transactions, submitStrategy, skipPreFlight)
    }

    async submitRouteTradeSwap(
        request: RouteTradeSwapRequest,
        submitStrategy: SubmitStrategy,
        skipPreFlight = true
    ): Promise<PostSubmitBatchResponse> {
        const res = await this.postRouteTradeSwap(request)

        return this.signAndSubmitTxs(res.transactions, submitStrategy, skipPreFlight)
    }

    // eslint-disable-next-line
    private signAndSubmitTx(
        transactionMessage: TransactionMessage | undefined,
        skipPreFlight: boolean,
        isCleanup = false
    ): Promise<PostSubmitResponse> {
        if (transactionMessage == undefined) {
            throw Error("transaction message was undefined")
        }

        const signedTx = signTx(transactionMessage.content)

        return this.postSubmit({ transaction: { content: signedTx.serialize().toString("base64"), isCleanup: isCleanup }, skipPreFlight })
    }

    private signAndSubmitTxs(
        transactionMessages: TransactionMessage[],
        submitStrategy: SubmitStrategy,
        skipPreFlight: boolean
    ): Promise<PostSubmitBatchResponse> {
        if (transactionMessages == undefined) {
            throw Error("transaction was undefined")
        }

        const entries = new Array<PostSubmitRequestEntry>()
        for (const transactionMessage of transactionMessages) {
            entries.push({
                transaction: signTxMessage(transactionMessage),
                skipPreFlight: skipPreFlight,
            })
        }

        return this.postSubmitBatch({
            entries: entries,
            SubmitStrategy: submitStrategy,
        })
    }

    getPoolReservesStream(request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        throw new Error("Not implemented")
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        throw new Error("Not implemented")
    }

    getQuotesStream(request: GetQuotesStreamRequest): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        throw new Error("Not implemented")
    }

    getRecentBlockHash(request: GetRecentBlockHashRequest): Promise<GetRecentBlockHashResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashStream(request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        throw new Error("Not implemented")
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        throw new Error("Not implemented")
    }

    getSwapsStream(request: GetSwapsStreamRequest): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        throw new Error("Not implemented")
    }

    getPricesStream(request: GetPricesStreamRequest): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        throw new Error("Not implemented")
    }

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        throw new Error("Not implemented")
    }

    postSubmitBatch(request: PostSubmitBatchRequest): Promise<PostSubmitBatchResponse> {
        throw new Error("Not implemented")
    }

    getBlockStream(request: GetBlockStreamRequest): Promise<AsyncGenerator<GetBlockStreamResponse>> {
        throw new Error("Method not implemented.")
    }
}
