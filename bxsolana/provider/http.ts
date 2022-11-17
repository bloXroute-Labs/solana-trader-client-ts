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
    TradeSwapRequest,
    RouteTradeSwapRequest,
    TradeSwapResponse,
    GetQuotesRequest,
    GetQuotesResponse,
} from "../proto/messages/api/index.js"
import { BaseProvider } from "./base.js"
import config from "../../utils/config.js"

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
            return resp.json() as unknown as GetOrderbookResponse
        })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetMarketsResponse
        })
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetTickersResponse
        })
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetTradesResponse
        })
    }

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetServerTimeResponse
        })
    }

    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetOpenOrdersResponse
        })
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?owner=${request.ownerAddress}`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetUnsettledResponse
        })
    }

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetAccountBalanceResponse
        })
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetPoolsResponse
        })
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetPriceResponse
        })
    }

    getRecentBlockHash(request: GetRecentBlockHashRequest): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return fetch(path, { headers: { Authorization: config.AuthHeader } }).then((resp) => {
            return resp.json() as unknown as GetRecentBlockHashResponse
        })
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/place`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostOrderResponse
        })
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/swap`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as TradeSwapResponse
        })
    }

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/route-swap`
        console.log(JSON.stringify(request))
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as TradeSwapResponse
        })
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostSubmitResponse
        })
    }

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancel`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostCancelOrderResponse
        })
    }

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancelbyid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostCancelOrderResponse
        })
    }

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        const path = `${this.baseUrl}/trade/cancelall`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as any as PostCancelAllResponse
        })
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        const path = `${this.baseUrl}/trade/settle`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostSettleResponse
        })
    }

    postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replacebyclientid`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostOrderResponse
        })
    }

    postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replace`
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as PostOrderResponse
        })
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        const path = `${this.baseUrl}/market/quote` // TODO quotes?
        return fetch(path, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json", Authorization: config.AuthHeader },
        }).then((resp) => {
            return resp.json() as unknown as GetQuotesResponse
        })
    }
}
