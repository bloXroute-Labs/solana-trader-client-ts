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
} from "../proto/messages/api/index.js"
import { Api } from "../proto/services/api/index.js"
import { signTx, SubmitTransactionResponse } from "../../utils/transaction.js"

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

    cancelGetTradesStream = async (): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelGetTickersStream = async (): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    cancelGetOrderbooksStream = async (): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    async submitOrder(request: PostOrderRequest, skipPreFlight = false): Promise<SubmitTransactionResponse> {
        const res = await this.postOrder(request)

        const signedTx = signTx(res.transaction)

        const postSubmitRez = await this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
        return { signature: postSubmitRez.signature, openOrdersAccount: res.openOrdersAddress }
    }

    async submitCancelOrder(request: PostCancelOrderRequest, skipPreFlight = false): Promise<PostSubmitResponse> {
        const res = await this.postCancelOrder(request)

        const signedTx = signTx(res.transaction)

        return this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
    }

    async submitCancelOrderByClientOrderID(request: PostCancelByClientOrderIDRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postCancelByClientOrderID(request)

        const signedTx = signTx(res.transaction)

        return this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
    }

    async submitCancelAll(request: PostCancelAllRequest, skipPreFlight = true): Promise<Awaited<PostSubmitResponse>[]> {
        const res = await this.postCancelAll(request)
        const postSubmitResponses: Promise<PostSubmitResponse>[] = []

        for (const tx of res.transactions) {
            const signedTx = signTx(tx)
            const postSubmitRez = this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
            postSubmitResponses.push(postSubmitRez)
        }

        return Promise.all(postSubmitResponses)
    }

    async submitSettle(request: PostSettleRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postSettle(request)

        const signedTx = signTx(res.transaction)

        return this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
    }

    async submitReplaceByClientOrderID(request: PostOrderRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postReplaceByClientOrderID(request)

        const signedTx = signTx(res.transaction)

        return this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
    }

    async submitReplaceOrder(request: PostReplaceOrderRequest, skipPreFlight = true): Promise<PostSubmitResponse> {
        const res = await this.postReplaceOrder(request)

        const signedTx = signTx(res.transaction)

        return this.postSubmit({ transaction: signedTx.serialize().toString("base64"), skipPreFlight })
    }

    getPoolReservesStream(request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        throw new Error("Not implemented")
    }

    cancelGetPoolReservesStream = async (): Promise<boolean> => {
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

    cancelGetQuotesStream = async (): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    getRecentBlockHash(request: GetRecentBlockHashRequest): Promise<GetRecentBlockHashResponse> {
        throw new Error("Not implemented")
    }

    getRecentBlockHashStream(request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        throw new Error("Not implemented")
    }

    cancelGetRecentBlockHashStream = async (): Promise<boolean> => {
        throw new Error("Not implemented")
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        throw new Error("Not implemented")
    }
}
