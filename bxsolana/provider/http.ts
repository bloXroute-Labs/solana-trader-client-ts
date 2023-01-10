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
} from "../proto/api_pb"
import { BaseProvider } from "./base"
import config from "../utils/config"
import { isRpcError, RpcError } from "../utils/error"
import axios, {AxiosResponse} from "axios";

export class HttpProvider extends BaseProvider {
    private baseUrl: string

    constructor(address: string = MAINNET_API_HTTP) {
        super()
        this.baseUrl = address + "/api/v1"
    }

    close = () => {
        //no need
    }

    getOrderbook = (
      request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        const path = `${
          this.baseUrl
        }/market/orderbooks/${request.getMarket()}?limit=${request.getLimit()}&project=${request.getProject()}`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetOrderbookResponse>(resp)
        })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetMarketsResponse>(resp)
        })
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${
          this.baseUrl
        }/market/tickers/${request.getMarket()}?project=${request.getProject()}`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetTickersResponse>(resp)
        })
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${
          this.baseUrl
        }/market/trades/${request.getMarket()}?limit=${request.getLimit()}&project=${request.getProject()}`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetTradesResponse>(resp)
        })
    }

    getServerTime(
      request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetServerTimeResponse>(resp)
        })
    }

    getOpenOrders(
      request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        const path = `${
          this.baseUrl
        }/trade/openorders/${request.getMarket()}?address=${request.getAddress()}&limit=${request.getLimit()}&openOrdersAddress=${request.getOpenordersaddress()}&project=${request.getProject()}`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetOpenOrdersResponse>(resp)
        })
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${
          this.baseUrl
        }/trade/unsettled/${request.getMarket()}?owner=${request.getOwneraddress()}&project=${request.getProject()}`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetUnsettledResponse>(resp)
        })
    }

    getAccountBalance(
      request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetAccountBalanceResponse>(resp)
        })
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request
          .getProjectsList()
          .map((v) => `projects=${v}`)
          .join("&")
        if (args != "") {
            path += `?${args}`
        }
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetPoolsResponse>(resp)
        })
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request
          .getTokensList()
          .map((v) => `tokens=${v}`)
          .join("&")
        if (args != "") {
            path += `?${args}`
        }
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetPriceResponse>(resp)
        })
    }

    getRecentBlockHash(
      request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
            return this.handleResponse<GetRecentBlockHashResponse>(resp)
        })
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${
          this.baseUrl
        }/market/quote?inToken=${request.getIntoken()}&outToken=${request.getOuttoken()}&inAmount=${request.getInamount()}&slippage=${request.getSlippage()}&limit=${request.getLimit()}`
        for (const project of request.getProjectsList()) {
            path += `&projects=${project}`
        }

        return axios.get(path, {
            headers: { Authorization: config.AuthHeader },
        }).then((resp) => {
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
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
                Authorization: config.AuthHeader,
            },
        }).then((resp) => {
            return this.handleResponse<PostOrderResponse>(resp)
        })
    }

    async handleResponse<T>(response: AxiosResponse): Promise<T> {
        if (response.status !== axios.HttpStatusCode.Ok) {
            return Promise.reject(`error during request: ${response.data}`)
        }

        if (isRpcError(response)) {
            return Promise.reject((response.data as RpcError).message)
        } else {
            return Promise.resolve(response as unknown as T)
        }
    }
}
