import { MAINNET_API_HTTP } from "../utils/constants.js"
import fetch, { Response } from "node-fetch"
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
import config from "../utils/config.js"
import { isRpcError, RpcError } from "../utils/error.js"

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
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}&project=${request.project}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetOrderbookResponse>(resp)
        })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetMarketsResponse>(resp)
        })
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}?project=${request.project}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetTickersResponse>(resp)
        })
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}&project=${request.project}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetTradesResponse>(resp)
        })
    }

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetServerTimeResponse>(resp)
        })
    }

    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}&project=${request.project}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetOpenOrdersResponse>(resp)
        })
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?owner=${request.ownerAddress}&project=${request.project}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetUnsettledResponse>(resp)
        })
    }

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetAccountBalanceResponse>(resp)
        })
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetPoolsResponse>(resp)
        })
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetPriceResponse>(resp)
        })
    }

    getRecentBlockHash(request: GetRecentBlockHashRequest): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetRecentBlockHashResponse>(resp)
        })
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${this.baseUrl}/market/quote?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        for (const project of request.projects) {
            path += `&projects=${project}`
        }

        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return this.handleResponse<GetQuotesResponse>(resp)
        })
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/place`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/swap`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp)
        })
    }

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/route-swap`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp)
        })
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSubmitResponse>(resp)
        })
    }

    postSubmitBatch(request: PostSubmitBatchRequest): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrl}/trade/submit-batch`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSubmitBatchResponse>(resp)
        })
    }

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancel`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp)
        })
    }

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancelbyid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp)
        })
    }

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        const path = `${this.baseUrl}/trade/cancelall`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostCancelAllResponse>(resp)
        })
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        const path = `${this.baseUrl}/trade/settle`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostSettleResponse>(resp)
        })
    }

    postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replacebyclientid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replace`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    async handleResponse<T>(response: Response): Promise<T> {
        try {
            const json = await response.json()
            if (isRpcError(json)) {
                return Promise.reject((json as RpcError).message)
            } else {
                return Promise.resolve(json as unknown as T)
            }
        } catch {
            return Promise.reject(await response.text())
        }
    }
}
