import { MAINNET_API_HTTP } from "../utils/constants"
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
    GetQuotesRequest,
    GetQuotesResponse,
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    RouteTradeSwapRequest,
    TradeSwapRequest,
    TradeSwapResponse,
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { isRpcError, RpcError } from "../utils/error"
import axios, { AxiosResponse } from "axios"

export class HttpProvider extends BaseProvider {
    private baseUrl: string

    constructor(
        authHeader: string,
        privateKey = "",
        address: string = MAINNET_API_HTTP
    ) {
        super(authHeader, privateKey)
        this.baseUrl = address + "/api/v1"
    }

    close = () => {
        //no need
    }

    getOrderbook = (
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}&project=${request.project}`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetOrderbookResponse>(resp)
            })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetMarketsResponse>(resp)
            })
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}?project=${request.project}`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetTickersResponse>(resp)
            })
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}&project=${request.project}`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetTradesResponse>(resp)
            })
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetServerTimeResponse>(resp)
            })
    }

    getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}&project=${request.project}`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetOpenOrdersResponse>(resp)
            })
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?ownerAddress=${request.ownerAddress}&project=${request.project}`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetUnsettledResponse>(resp)
            })
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetAccountBalanceResponse>(resp)
            })
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetPoolsResponse>(resp)
            })
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetPriceResponse>(resp)
            })
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetRecentBlockHashResponse>(resp)
            })
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${this.baseUrl}/market/quote?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        for (const project of request.projects) {
            path += `&projects=${project}`
        }

        return axios
            .get(path, {
                headers: { Authorization: this.authHeader },
            })
            .then((resp) => {
                return this.handleResponse<GetQuotesResponse>(resp)
            })
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/place`
        return axios({
            url: path,
            method: "POST",
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/swap`
        return axios({
            url: path,
            method: "POST",
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp)
        })
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/route-swap`
        return axios({
            url: path,
            method: "POST",
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<TradeSwapResponse>(resp)
        })
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return axios({
            url: path,
            method: "POST",
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostSubmitResponse>(resp)
        })
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrl}/trade/submit-batch`
        return axios(path, {
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostSubmitBatchResponse>(resp)
        })
    }

    postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancel`
        return axios({
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp)
        })
    }

    postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancelbyid`
        return axios({
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostCancelOrderResponse>(resp)
        })
    }

    postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        const path = `${this.baseUrl}/trade/cancelall`
        return axios(path, {
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostCancelAllResponse>(resp)
        })
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        const path = `${this.baseUrl}/trade/settle`
        return axios({
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostSettleResponse>(resp)
        })
    }

    postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replacebyclientid`
        return axios({
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replace`
        return axios({
            method: "POST",
            url: path,
            data: request,
            headers: {
                "Content-Type": "application/json",
                Authorization: this.authHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    async handleResponse<T>(response: AxiosResponse): Promise<T> {
        if (response.status !== 200) {
            return Promise.reject(`error during request: ${response.data}`)
        }

        if (isRpcError(response)) {
            return Promise.reject((response.data as RpcError).message)
        } else {
            return Promise.resolve(response.data as unknown as T)
        }
    }
}
