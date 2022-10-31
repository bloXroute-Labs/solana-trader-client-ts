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

let requestId = 0

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

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.wsSocketCall("GetMarkets", request)
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        return this.wsSocketCall("GetTickers", request)
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        return this.wsSocketCall("GetTrades", request)
    }

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        return this.wsSocketCall("GetServerTime", request)
    }

    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        return this.wsSocketCall("GetOpenOrders", request)
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        return this.wsSocketCall("GetUnsettled", request)
    }

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        return this.wsSocketCall("GetAccountBalance", request)
    }

    //stream requests
    getOrderbooksStream = async (request: GetOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderbooksStream", request)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTickersStream = async (request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTickersStream", request)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTradesStream = async (request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTradesStream", request)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getOrderStatusStream = async (request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusStream", request)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    //POST requests
    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsSocketCall("PostOrder", request)
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.wsSocketCall("PostSubmit", request)
    }

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        return this.wsSocketCall("PostCancelOrder", request)
    }

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        return this.wsSocketCall("PostCancelByClientOrderID", request)
    }

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        return this.wsSocketCall("PostCancelAll", request)
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.wsSocketCall("PostSettle", request)
    }

    postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsSocketCall("postReplaceByClientOrderID", request)
    }

    postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        return this.wsSocketCall("postReplaceOrder", request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.wsSocketCall("PostTradeSwap", request)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.wsSocketCall("GetPools", request)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.wsSocketCall("GetQuotes", request)
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsSocketCall("GetPrice", request)
    }

    getRecentBlockHashStream(request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        return this.wsSocketStreamCall("GetRecentBlockHashStream", request)
    }

    getQuotesStream(request: GetQuotesStreamRequest): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        return this.wsSocketStreamCall("GetQuotesStream", request)
    }

    getPoolReservesStream(request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        return this.wsSocketStreamCall("GetPoolReservesStream", request)
    }

    // Private
    private get Socket(): WebSocket | null {
        if (this.isClosed) return null

        if (this.socket && (this.socket.readyState == WebSocket.OPEN || this.socket.CONNECTING)) {
            return this.socket
        }
        const headers = { Authorization: config.AuthHeader }
        this.socket = new WebSocket(this.address, {
            headers: headers,
        })
        return this.socket
    }

    private formWSRequest = (method: string, params: unknown): { req: string; id: number } => {
        const id = ++requestId // iterating the request id by 1 makes it so that we have a unique request ID for each request
        return {
            req: JSON.stringify({
                jsonrpc: "2.0",
                id: id,
                method: method,
                params: params,
            }),
            id,
        }
    }

    private wsSocketCall<TData>(method: string, request: unknown): Promise<TData> {
        return new Promise((resolve, reject) => {
            const ws = this.wsConnection

            if (ws === null) {
                reject(new Error("WS provider is closed"))
                return
            }

            ws.call(method, request)

        })
    }

    private wsSocketStreamCall<TData>(method: string, request: unknown): Promise<AsyncGenerator<TData, unknown, unknown>> {
        return new Promise((resolve, reject) => {
            const ws = this.Socket

            if (ws === null) {
                reject(new Error("WS provider is closed"))
                return
            }

            if (ws.readyState == WebSocket.OPEN) {
                const req = this.formWSRequest("subscribe", [method, request])
                console.info("stream request")
                ws.send(req.req)
                resolve(websocketData(ws, req.id))
            } else {
                ws.onopen = () => {
                    console.info("stream request")
                    const req = this.formWSRequest("subscribe", [method, request])
                    ws.send(req.req)
                    // we need to implement a streaming subscription HERE
                    resolve(websocketData(ws, req.id))
                }
            }

            ws.onmessage = (msg: unknown) => {
                const { id, result } = JSON.parse((msg as MessageEvent).data)

                console.info("received ws response")
                console.info()
            }

            ws.onerror = (err: unknown) => {
                reject(err)
            }
        })
    }
}
