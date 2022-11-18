import { MAINNET_API_WS } from "../../utils/constants.js"
import { websocketData } from "../../utils/websocket-iterator.js"
import WebSocket from "ws"
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
    RouteTradeSwapRequest,
    TradeSwapResponse,
    GetSwapsStreamRequest,
    GetSwapsStreamResponse,
    GetPricesStreamRequest,
    GetPricesStreamResponse,
} from "../proto/messages/api/index.js"
import { BaseProvider } from "./base.js"
import config from "../../utils/config.js"

let requestId = 0
export class WsProvider extends BaseProvider {
    private socket!: WebSocket
    private address = ""
    private isClosed = false
    constructor(address: string = MAINNET_API_WS) {
        super()
        this.address = address
    }

    close = () => {
        this.isClosed = true
        this.socket.close()
    }

    getOrderbook = (request: GetOrderbookRequest): Promise<GetOrderbookResponse> => {
        return this.wsSocketCall("GetOrderbook", request)
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
    getOrderbooksStream = (request: GetOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        return this.wsSocketStreamCall("GetOrderbooksStream", request)
    }

    getTickersStream(request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>> {
        return this.wsSocketStreamCall("GetTickersStream", request)
    }

    getTradesStream(request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>> {
        return this.wsSocketStreamCall("GetTradesStream", request)
    }

    getOrderStatusStream(request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> {
        return this.wsSocketStreamCall("GetOrderStatusStream", request)
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

    getRecentBlockHashStream(request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        return this.wsSocketStreamCall("GetRecentBlockHashStream", request)
    }

    // Amm
    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsSocketCall("GetPrice", request)
    }

    getPricesStream(request: GetPricesStreamRequest): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        return this.wsSocketStreamCall("GetPricesStream", request);
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.wsSocketCall("GetPools", request)
    }

    getPoolReservesStream(request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        return this.wsSocketStreamCall("GetPoolReservesStream", request)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.wsSocketCall("GetQuotes", request)
    }

    getQuotesStream(request: GetQuotesStreamRequest): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        return this.wsSocketStreamCall("GetQuotesStream", request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.wsSocketCall("PostTradeSwap", request)
    }

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        return this.wsSocketCall("PostRouteTradeSwap", request);
    }

    getSwapsStream(request: GetSwapsStreamRequest): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        return this.wsSocketStreamCall("GetSwapsStream", request)
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

    private wsRequest = (method: string, params: unknown): { req: string; id: number } => {
        const id = ++requestId
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
            const ws = this.Socket

            if (ws === null) {
                reject(new Error("WS provider is closed"))
                return
            }
            const wsRequest = this.wsRequest(method, request)
            if (ws.readyState == WebSocket.OPEN) {
                ws.send(wsRequest.req)
            } else {
                ws.onopen = () => {
                    ws.send(wsRequest.req)
                }
            }
            ws.onmessage = (msg: unknown) => {
                const { id, result } = JSON.parse((msg as MessageEvent).data)
                if (id == wsRequest.id) {
                    resolve(result)
                }
            }

            ws.onerror = (err: unknown) => {
                reject(err)
            }
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
                const req = this.wsRequest("subscribe", [method, request])
                ws.send(req.req)
                resolve(websocketData(ws, req.id))
            } else {
                ws.onopen = () => {
                    const req = this.wsRequest("subscribe", [method, request])
                    ws.send(req.req)
                    resolve(websocketData(ws, req.id))
                }
            }

            ws.onerror = (err: unknown) => {
                reject(err)
            }
        })
    }
}
