import { MAINNET_API_HTTP } from "../../utils/constants.js"
import fetch from "node-fetch"
import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetPoolsRequest,
    GetPoolsResponse,
    GetPriceRequest,
    GetPriceResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    GetTickersRequest,
    GetTickersResponse,
    GetTradesRequest,
    GetTradesResponse,
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    TradeSwapRequest,
    RouteTradeSwapRequest,
    TradeSwapResponse,
    GetQuotesRequest,
    GetQuotesResponse,
} from "../proto/messages/api/index.js"
import { BaseProvider } from "./base.js"
import config from "../../utils/config.js"
import { isRpcError, RpcError } from "../../utils/error.js"

export class HttpProvider extends BaseProvider {
    private baseUrl: string

    constructor(address: string = MAINNET_API_HTTP) {
        super()
        this.baseUrl = address + "/api/v1"
    }

    close = () => {
        //no need
    }

    getOrderbook = (request: GetOrderbookRequest): Promise<GetOrderbookResponse> => {
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetOrderbookResponse>(resp.json())
        })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetMarketsResponse>(resp.json())
        })
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetTickersResponse>(resp.json())
        })
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetTradesResponse>(resp.json())
        })
    }

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetServerTimeResponse>(resp.json())
        })
    }

    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetOpenOrdersResponse>(resp.json())
        })
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?owner=${request.ownerAddress}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetUnsettledResponse>(resp.json())
        })
    }

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetAccountBalanceResponse>(resp.json())
        })
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetPoolsResponse>(resp.json())
        })
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetPriceResponse>(resp.json())
        })
    }

    getRecentBlockHash(request: GetRecentBlockHashRequest): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetRecentBlockHashResponse>(resp.json())
        })
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${this.baseUrl}/market/quote?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        for (const project of request.projects) {
            path += `&projects=${project}`
        }

        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetQuotesResponse>(resp.json())
        })
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/place`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp.json())
        })
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/swap`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp.json())
        })
    }

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/route-swap`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp.json())
        })
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSubmitResponse>(resp.json())
        })
    }

    postSubmitBatch(request: PostSubmitBatchRequest): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrl}/trade/submit-batch`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSubmitBatchResponse>(resp.json())
        })
    }

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancel`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp.json())
        })
    }

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancelbyid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp.json())
        })
    }

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        const path = `${this.baseUrl}/trade/cancelall`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelAllResponse>(resp.json())
        })
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        const path = `${this.baseUrl}/trade/settle`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSettleResponse>(resp.json())
        })
    }

    postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replacebyclientid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp.json())
        })
    }

    postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replace`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp.json())
        })
    }

    async handleResponse<T>(response: Promise<unknown>): Promise<T> {
        return response.then((json) => {
            if (isRpcError(json)) {
                return Promise.reject((json as RpcError).message)
            } else {
                return Promise.resolve(json as unknown as T)
            }
        })
    }
}
