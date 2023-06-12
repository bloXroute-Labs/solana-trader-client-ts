import { MAINNET_API_VIRGINIA_HTTP } from "../utils/constants"
import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetPerpOrderbookRequest,
    GetPerpOrderbookResponse,
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
    GetMarketDepthRequest,
    GetMarketDepthResponse,
    GetOpenPerpOrdersRequest,
    GetOpenPerpOrdersResponse,
    PostClosePerpPositionsRequest,
    PostClosePerpPositionsResponse,
    GetUserResponse,
    GetUserRequest,
    PostManageCollateralRequest,
    PostManageCollateralResponse,
    PostCancelPerpOrdersResponse,
    PostCancelPerpOrdersRequest,
    PostCancelPerpOrderRequest,
    PostCancelPerpOrderResponse,
    PostCreateUserRequest,
    PostCreateUserResponse,
    GetAssetsRequest,
    GetAssetsResponse,
    GetPerpContractsRequest,
    GetPerpContractsResponse,
    PostSettlePNLRequest,
    PostSettlePNLResponse,
    PostSettlePNLsRequest,
    PostSettlePNLsResponse,
    PostLiquidatePerpRequest,
    PostLiquidatePerpResponse,
    PostPerpOrderRequest,
    PostPerpOrderResponse,
    GetPerpPositionsRequest,
    GetPerpPositionsResponse,
    GetOpenPerpOrderRequest,
    GetOpenPerpOrderResponse,
    GetDriftMarketDepthRequest,
    GetDriftMarketDepthResponse,
    GetDriftMarketsRequest,
    GetDriftMarketsResponse,
    PostDriftMarginOrderRequest,
    PostDriftMarginOrderResponse,
    PostDriftEnableMarginTradingRequest,
    PostDriftEnableMarginTradingResponse,
    GetDriftMarginOrderbookRequest,
    GetDriftMarginOrderbookResponse,
    GetDriftOpenMarginOrdersRequest,
    GetDriftOpenMarginOrdersResponse,
    PostModifyDriftOrderRequest,
    PostModifyDriftOrderResponse,
    PostCancelDriftMarginOrderRequest,
    PostCancelDriftMarginOrderResponse,
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { isRpcError, RpcError } from "../utils/error"
import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    RawAxiosRequestHeaders,
} from "axios"
import { RpcReturnType } from "../proto/runtime/rpc"

export class HttpProvider extends BaseProvider {
    private readonly baseUrl: string
    private readonly baseUrlV2: string
    requestConfig: AxiosRequestConfig

    constructor(
        authHeader: string,
        privateKey = "",
        address: string = MAINNET_API_VIRGINIA_HTTP,
        requestConfig: AxiosRequestConfig = {}
    ) {
        super(authHeader, privateKey)
        this.baseUrl = address + "/api/v1"
        this.baseUrlV2 = address + "/api/v2"
        this.requestConfig = {
            ...requestConfig,
            headers: { Authorization: this.authHeader },
        }
    }

    close = () => {
        // no need
    }

    // Drift V2
    async getDriftOpenMarginOrders(
        request: GetDriftOpenMarginOrdersRequest
    ): RpcReturnType<Promise<GetDriftOpenMarginOrdersResponse>, []> {
        let path = `${this.baseUrlV2}/drift/margin-open-orders?ownerAddress=${request.ownerAddress}&accountAddress=${request.accountAddress}`
        const args = request.markets.map((v) => `markets=${v}`).join("&")
        if (args != "") {
            path += `&${args}`
        }
        return this.get<GetDriftOpenMarginOrdersResponse>(path)
    }

    async postModifyDriftOrder(
        request: PostModifyDriftOrderRequest
    ): RpcReturnType<Promise<PostModifyDriftOrderResponse>, []> {
        const path = `${this.baseUrlV2}/drift/modify-order`
        return this.post<
            PostModifyDriftOrderRequest,
            PostModifyDriftOrderResponse
        >(path, request)
    }

    async postCancelDriftMarginOrder(
        request: PostCancelDriftMarginOrderRequest
    ): RpcReturnType<Promise<PostCancelDriftMarginOrderResponse>, []> {
        const path = `${this.baseUrlV2}/drift/margin-cancel`
        return this.post<
            PostCancelDriftMarginOrderRequest,
            PostCancelDriftMarginOrderResponse
        >(path, request)
    }

    async getDriftMarkets(
        request: GetDriftMarketsRequest
    ): RpcReturnType<Promise<GetDriftMarketsResponse>, []> {
        const path = `${this.baseUrlV2}/drift/markets/?metadata=${request.metadata}`
        return this.get<GetDriftMarketsResponse>(path)
    }

    async postDriftMarginOrder(
        request: PostDriftMarginOrderRequest
    ): RpcReturnType<Promise<PostDriftMarginOrderResponse>, []> {
        const path = `${this.baseUrlV2}/drift/margin-place`
        return this.post<
            PostDriftMarginOrderRequest,
            PostDriftMarginOrderResponse
        >(path, request)
    }

    async postDriftEnableMarginTrading(
        request: PostDriftEnableMarginTradingRequest
    ): RpcReturnType<Promise<PostDriftEnableMarginTradingResponse>, []> {
        const path = `${this.baseUrlV2}/drift/enable-margin`
        return this.post<
            PostDriftEnableMarginTradingRequest,
            PostDriftEnableMarginTradingResponse
        >(path, request)
    }

    async getDriftMarginOrderbook(
        request: GetDriftMarginOrderbookRequest
    ): RpcReturnType<Promise<GetDriftMarginOrderbookResponse>, []> {
        const path = `${this.baseUrlV2}/drift/margin-orderbooks/${request.market}?limit=${request.limit}`
        return this.get<GetDriftMarginOrderbookResponse>(path)
    }

    async getDriftMarketDepth(
        request: GetDriftMarketDepthRequest
    ): RpcReturnType<Promise<GetDriftMarketDepthResponse>, []> {
        const path = `${this.baseUrlV2}/drift/market-depth/${request.contract}?limit=${request.limit}`
        return this.get<GetDriftMarketDepthResponse>(path)
    }
    // End of Drift V2

    getOrderbook = (
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}&project=${request.project}`
        return this.get<GetOrderbookResponse>(path)
    }

    getMarketDepth(
        request: GetMarketDepthRequest
    ): Promise<GetMarketDepthResponse> {
        const path = `${this.baseUrl}/market/depth/${request.market}?limit=${request.limit}&project=${request.project}`
        return this.get<GetMarketDepthResponse>(path)
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse> {
        const path = `${this.baseUrl}/market/markets`
        return this.get<GetMarketsResponse>(path)
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        const path = `${this.baseUrl}/market/tickers/${request.market}?project=${request.project}`
        return this.get<GetTickersResponse>(path)
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}&project=${request.project}`
        return this.get<GetTradesResponse>(path)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        const path = `${this.baseUrl}/system/time`
        return this.get<GetServerTimeResponse>(path)
    }

    getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}&openOrdersAddress=${request.openOrdersAddress}&project=${request.project}`
        return this.get<GetOpenOrdersResponse>(path)
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?ownerAddress=${request.ownerAddress}&project=${request.project}`
        return this.get<GetUnsettledResponse>(path)
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        const path = `${this.baseUrl}/account/balance?ownerAddress=${request.ownerAddress}`
        return this.get<GetAccountBalanceResponse>(path)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        let path = `${this.baseUrl}/market/pools`
        const args = request.projects.map((v) => `projects=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetPoolsResponse>(path)
    }

    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        let path = `${this.baseUrl}/market/price`
        const args = request.tokens.map((v) => `tokens=${v}`).join("&")
        if (args != "") {
            path += `?${args}`
        }
        return this.get<GetPriceResponse>(path)
    }

    getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        const path = `${this.baseUrl}/system/blockhash`
        return this.get<GetRecentBlockHashResponse>(path)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        let path = `${this.baseUrl}/market/quote?inToken=${request.inToken}&outToken=${request.outToken}&inAmount=${request.inAmount}&slippage=${request.slippage}&limit=${request.limit}`
        for (const project of request.projects) {
            path += `&projects=${project}`
        }
        return this.get<GetQuotesResponse>(path)
    }

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/place`
        return this.post<PostOrderRequest, PostOrderResponse>(path, request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/swap`
        return this.post<TradeSwapRequest, TradeSwapResponse>(path, request)
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        const path = `${this.baseUrl}/trade/route-swap`
        return this.post<RouteTradeSwapRequest, TradeSwapResponse>(
            path,
            request
        )
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        const path = `${this.baseUrl}/trade/submit`
        return this.post<PostSubmitRequest, PostSubmitResponse>(path, request)
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        const path = `${this.baseUrl}/trade/submit-batch`
        return this.post<PostSubmitBatchRequest, PostSubmitBatchResponse>(
            path,
            request
        )
    }

    postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancel`
        return this.post<PostCancelOrderRequest, PostCancelOrderResponse>(
            path,
            request
        )
    }

    postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        const path = `${this.baseUrl}/trade/cancelbyid`
        return this.post<
            PostCancelByClientOrderIDRequest,
            PostCancelOrderResponse
        >(path, request)
    }

    postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        const path = `${this.baseUrl}/trade/cancelall`
        return this.post<PostCancelAllRequest, PostCancelAllResponse>(
            path,
            request
        )
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        const path = `${this.baseUrl}/trade/settle`
        return this.post<PostSettleRequest, PostSettleResponse>(path, request)
    }

    postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replacebyclientid`
        return this.post<PostOrderRequest, PostOrderResponse>(path, request)
    }

    postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
        const path = `${this.baseUrl}/trade/replace`
        return this.post<PostReplaceOrderRequest, PostOrderResponse>(
            path,
            request
        )
    }

    getAssets(
        request: GetAssetsRequest
    ): RpcReturnType<Promise<GetAssetsResponse>, []> {
        const path = `${this.baseUrl}/trade/perp/assets?ownerAddress=${request.ownerAddress}&accountAddress=${request.accountAddress}&project=${request.project}`
        return this.get<GetAssetsResponse>(path)
    }

    getContracts(
        request: GetPerpContractsRequest
    ): RpcReturnType<Promise<GetPerpContractsResponse>, []> {
        const path = `${this.baseUrl}/market/perp/contracts?project=${request.project}`
        return this.get<GetPerpContractsResponse>(path)
    }

    postSettlePNL(
        request: PostSettlePNLRequest
    ): RpcReturnType<Promise<PostSettlePNLResponse>, []> {
        const path = `${this.baseUrl}/trade/perp/settle-pnl`
        return this.post<PostSettlePNLRequest, PostSettlePNLResponse>(
            path,
            request
        )
    }

    postSettlePNLs(
        request: PostSettlePNLsRequest
    ): RpcReturnType<Promise<PostSettlePNLsResponse>, []> {
        const path = `${this.baseUrl}/trade/perp/settle-pnls`
        return this.post<PostSettlePNLsRequest, PostSettlePNLsResponse>(
            path,
            request
        )
    }

    postLiquidatePerp(
        request: PostLiquidatePerpRequest
    ): RpcReturnType<Promise<PostLiquidatePerpResponse>, []> {
        const path = `${this.baseUrl}/trade/perp/liquidate`
        return this.post<PostLiquidatePerpRequest, PostLiquidatePerpResponse>(
            path,
            request
        )
    }

    postPerpOrder(
        request: PostPerpOrderRequest
    ): RpcReturnType<Promise<PostPerpOrderResponse>, []> {
        const path = `${this.baseUrl}/trade/perp/order`
        return this.post<PostPerpOrderRequest, PostPerpOrderResponse>(
            path,
            request
        )
    }

    getPerpPositions(
        request: GetPerpPositionsRequest
    ): RpcReturnType<Promise<GetPerpPositionsResponse>, []> {
        let path = `${this.baseUrl}/trade/perp/positions?ownerAddress=${request.ownerAddress}&accountAddress=${request.accountAddress}&project=${request.project}`
        const args = request.contracts.map((v) => `contracts=${v}`).join("&")
        if (args != "") {
            path += `&${args}`
        }
        return this.get<GetPerpPositionsResponse>(path)
    }

    getPerpContracts(
        request: GetPerpContractsRequest
    ): RpcReturnType<Promise<GetPerpContractsResponse>, []> {
        const path = `${this.baseUrl}/market/perp/contracts?project=${request.project}`
        return this.get<GetPerpContractsResponse>(path)
    }

    getOpenPerpOrders(
        request: GetOpenPerpOrdersRequest
    ): Promise<GetOpenPerpOrdersResponse> {
        let path = `${this.baseUrl}/trade/perp/open-orders?ownerAddress=${request.ownerAddress}&accountAddress=${request.accountAddress}&project=${request.project}`
        const args = request.contracts.map((v) => `contracts=${v}`).join("&")
        if (args != "") {
            path += `&${args}`
        }
        return this.get<GetOpenPerpOrdersResponse>(path)
    }

    getOpenPerpOrder(
        request: GetOpenPerpOrderRequest
    ): Promise<GetOpenPerpOrderResponse> {
        const path = `${this.baseUrl}/trade/perp/open-order-by-id?ownerAddress=${request.ownerAddress}&accountAddress=${request.accountAddress}&project=${request.project}
        &contract=${request.contract}&clientOrderID=${request.clientOrderID}&orderID=${request.orderID}`
        return this.get<GetOpenPerpOrderResponse>(path)
    }

    postCancelPerpOrder(
        request: PostCancelPerpOrderRequest
    ): Promise<PostCancelPerpOrderResponse> {
        const path = `${this.baseUrl}/trade/perp/cancelbyid`
        return this.post<
            PostCancelPerpOrderRequest,
            PostCancelPerpOrderResponse
        >(path, request)
    }

    postCancelPerpOrders(
        request: PostCancelPerpOrdersRequest
    ): Promise<PostCancelPerpOrdersResponse> {
        const path = `${this.baseUrl}/trade/perp/cancel`
        return this.post<
            PostCancelPerpOrdersRequest,
            PostCancelPerpOrdersResponse
        >(path, request)
    }

    postClosePerpPositions(
        request: PostClosePerpPositionsRequest
    ): Promise<PostClosePerpPositionsResponse> {
        const path = `${this.baseUrl}/trade/perp/close`
        return this.post<
            PostClosePerpPositionsRequest,
            PostClosePerpPositionsResponse
        >(path, request)
    }

    postCreateUser(
        request: PostCreateUserRequest
    ): Promise<PostCreateUserResponse> {
        const path = `${this.baseUrl}/trade/user`
        return this.post<PostCreateUserRequest, PostCreateUserResponse>(
            path,
            request
        )
    }

    getUser(request: GetUserRequest): Promise<GetUserResponse> {
        const path = `${this.baseUrl}/trade/user?ownerAddress=${request.ownerAddress}&project=${request.project}`
        return this.get<GetUserResponse>(path)
    }

    postManageCollateral(
        request: PostManageCollateralRequest
    ): Promise<PostManageCollateralResponse> {
        const path = `${this.baseUrl}/trade/perp/managecollateral`
        return this.post<
            PostManageCollateralRequest,
            PostManageCollateralResponse
        >(path, request)
    }

    getPerpOrderbook = (
        request: GetPerpOrderbookRequest
    ): Promise<GetPerpOrderbookResponse> => {
        const path = `${this.baseUrl}/market/perp/orderbook/${request.contract}?limit=${request.limit}&project=${request.project}`
        return this.get<GetPerpOrderbookResponse>(path)
    }

    private async get<T>(path: string): Promise<T> {
        try {
            const response = await axios.get(path, this.requestConfig)
            return this.handleResponse<T>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    private async post<T, R>(path: string, data: T): Promise<R> {
        try {
            const headers: RawAxiosRequestHeaders = {
                ...this.requestConfig.headers,
            }
            headers["Content-Type"] = "application/json"

            const response = await axios({
                ...this.requestConfig,
                url: path,
                method: "POST",
                data,
                headers,
            })
            return this.handleResponse<R>(response)
        } catch (e) {
            this.handleError(e)
        }
    }

    handleError(e: unknown): never {
        if (e instanceof axios.AxiosError) {
            if (e.response) {
                let data = e.response.data
                if (data instanceof Object) {
                    data = JSON.stringify(data)
                }
                throw new Error(
                    `error code [${e.response.status}] received: ${data}`
                )
            } else if (e.request) {
                throw new Error(
                    `could not complete request: [${e.name}/${e.code}]: ${e.message}`
                )
            }
            throw new Error(
                `unknown axios error: [${e.name}/${e.code}]: ${e.message}`
            )
        }
        throw e
    }

    handleResponse<T>(response: AxiosResponse): T {
        if (response.status !== 200) {
            throw new Error(
                `error code [${response.status}] received: ${JSON.stringify(
                    response.data
                )}`
            )
        }

        if (isRpcError(response)) {
            throw new Error((response.data as RpcError).message)
        }

        return response.data as unknown as T
    }
}
