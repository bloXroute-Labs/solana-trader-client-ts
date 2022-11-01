import { LOCAL_API_WS } from "../../utils/constants.js"
import { websocketData } from "../../utils/websocket-iterator.js"
import WebSocket, { Event } from "ws"

import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetOrderbooksRequest,
    GetOrderbooksStreamResponse,
    GetOrderStatusStreamRequest,
    GetOrderStatusStreamResponse,
    GetPoolReservesStreamRequest,
    GetPoolReservesStreamResponse,
    GetPoolsRequest,
    GetPoolsResponse,
    GetPriceRequest,
    GetPriceResponse,
    GetQuotesRequest,
    GetQuotesResponse,
    GetQuotesStreamRequest,
    GetQuotesStreamResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
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
    PostReplaceOrderRequest,
    PostSettleRequest,
    PostSettleResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    TradeSwapRequest,
    TradeSwapResponse,
} from "../proto/messages/api/index.js"
import { BaseProvider } from "./base.js"
import config from "../../utils/config.js"
import { RpcWsConnection } from "./rpcclient.js"

export class WsProvider extends BaseProvider {
    private wsConnection: RpcWsConnection

    private socket!: WebSocket
    private address = ""
    private isClosed = false

    constructor(address: string = LOCAL_API_WS) {
        super()
        this.wsConnection = new RpcWsConnection(address)
        this.address = address
    }

    async connect() {
        await this.wsConnection.connect()
    }

    close = () => {
        this.isClosed = true
        this.socket.close()
    }

    async getOrderbook(request: GetOrderbookRequest): Promise<GetOrderbookResponse> {
        return await this.wsConnection.call("GetOrderbook", request)
    }

    async getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        return await this.wsConnection.call("GetMarkets", request)
    }

    async getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        return await this.wsConnection.call("GetTickers", request)
    }

    async getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        return await this.wsConnection.call("GetTrades", request)
    }

    async getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        return await this.wsConnection.call("GetServerTime", request)
    }

    async getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        return await this.wsConnection.call("GetOpenOrders", request)
    }

    async getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        return await this.wsConnection.call("GetUnsettled", request)
    }

    async getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        return await this.wsConnection.call("GetAccountBalance", request)
    }

    //stream requests
    getOrderbooksStream = async (request: GetOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderbooksStream", request)

        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(10000)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTickersStream = async (request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTickersStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(10000)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTradesStream = async (request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTradesStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(10000)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getOrderStatusStream = async (request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(2000)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    //POST requests
    async postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("PostOrder", request)
    }

    async postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.wsConnection.call("PostSubmit", request)
    }

    async postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelOrder", request)
    }

    async postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelByClientOrderID", request)
    }

    async postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        return this.wsConnection.call("PostCancelAll", request)
    }

    async postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.wsConnection.call("PostSettle", request)
    }

    async postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("postReplaceByClientOrderID", request)
    }

    async postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("postReplaceOrder", request)
    }

    async postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.wsConnection.call("PostTradeSwap", request)
    }

    async getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.wsConnection.call("GetPools", request)
    }

    async getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.wsConnection.call("GetQuotes", request)
    }

    async getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsConnection.call("GetPrice", request)
    }

    getRecentBlockHashStream = async (request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(2000)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getQuotesStream = async (request: GetQuotesStreamRequest): Promise<AsyncGenerator<GetQuotesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(2000)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getPoolReservesStream = async (request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusStream", request)
        function delay(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        await delay(2000)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    private wsSocketRequest<TData>(method: string, request: unknown): Promise<TData> {
        return new Promise((resolve, reject) => {
            const ws = this.wsConnection

            if (ws === null) {
                reject(new Error("WS provider is closed"))
                return
            }

            ws.call(method, request)
        })
    }
}
