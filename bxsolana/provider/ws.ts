import { MAINNET_API_NY_WS } from "../utils/constants"

import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetBlockStreamRequest,
    GetBlockStreamResponse,
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
    GetPricesStreamRequest,
    GetPricesStreamResponse,
    GetQuotesRequest,
    GetQuotesResponse,
    GetQuotesStreamRequest,
    GetQuotesStreamResponse,
    GetRecentBlockHashRequest,
    GetRecentBlockHashResponse,
    GetServerTimeRequest,
    GetServerTimeResponse,
    GetSwapsStreamRequest,
    GetSwapsStreamResponse,
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    RouteTradeSwapRequest,
    TradeSwapRequest,
    TradeSwapResponse,
    GetMarketDepthRequest,
    GetMarketDepthResponse,
    GetMarketDepthsRequest,
    GetMarketDepthsStreamResponse,
    GetMarketDepthRequestV2,
    GetMarketDepthResponseV2,
    GetMarketsRequestV2,
    GetMarketsResponseV2,
    GetOpenOrdersRequestV2,
    GetOrderbookRequestV2,
    GetOrderbookResponseV2,
    GetTickersRequestV2,
    GetTickersResponseV2,
    GetUnsettledRequestV2,
    PostCancelOrderRequestV2,
    PostCancelOrderResponseV2,
    PostOrderRequestV2,
    PostReplaceOrderRequestV2,
    PostSettleRequestV2,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    GetOpenOrdersResponseV2,
    GetNewRaydiumPoolsRequest,
    GetNewRaydiumPoolsResponse,
    GetTransactionResponse,
    GetTransactionRequest,
    GetRateLimitRequest,
    GetRateLimitResponse,
    GetPriorityFeeRequest,
    GetPriorityFeeResponse,
    GetBundleResultRequest,
    GetBundleResultResponse,
    PostJupiterSwapInstructionsRequest,
    PostJupiterSwapInstructionsResponse,
    GetTickersStreamRequest,
    GetRaydiumPoolReserveRequest,
    GetRaydiumPoolReserveResponse,
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { RpcWsConnection } from "../ws/rpcclient"
import { RpcReturnType } from "../proto/runtime/rpc"

export class WsProvider extends BaseProvider {
    private wsConnection: RpcWsConnection

    private address = ""
    private isClosed = false

    // stream to count is going to be a map to a stream and how many instances of that stream are open
    // ex: if someone calls GetOrderbooksStream 3 times, the map will look like:
    // <GetOrderbooksStream, 1>
    // <GetOrderbooksStream, 2>
    // <GetOrderbooksStream, 3>
    private streamToCountMap: Map<string, Map<number, string>> = new Map()

    constructor(
        authHeader: string,
        privateKey = "",
        address: string = MAINNET_API_NY_WS
    ) {
        super(authHeader, privateKey)
        this.wsConnection = new RpcWsConnection(address, authHeader)

        this.address = address
    }

    async connect() {
        await this.wsConnection.connect()
    }

    close = () => {
        this.isClosed = true
        this.wsConnection.close()
    }

    async getRateLimit(
        request: GetRateLimitRequest
    ): RpcReturnType<Promise<GetRateLimitResponse>, []> {
        return await this.wsConnection.call("GetRateLimit", request)
    }

    async getTransaction(
        request: GetTransactionRequest
    ): RpcReturnType<Promise<GetTransactionResponse>, []> {
        return await this.wsConnection.call("GetTransaction", request)
    }

    async getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        return await this.wsConnection.call("GetJupiterPrices", request)
    }

    async getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        return await this.wsConnection.call("GetJupiterQuotes", request)
    }

    async postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        return await this.wsConnection.call("PostJupiterRouteSwap", request)
    }

    async postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        return await this.wsConnection.call("PostJupiterSwap", request)
    }

    async postJupiterSwapInstructions(
        request: PostJupiterSwapInstructionsRequest
    ): RpcReturnType<Promise<PostJupiterSwapInstructionsResponse>, []> {
        return await this.wsConnection.call(
            "PostJupiterSwapInstructions",
            request
        )
    }

    async postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumRouteSwap", request)
    }

    async postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumSwap", request)
    }

    async getRaydiumPoolReserve(
        request: GetRaydiumPoolReserveRequest
    ): RpcReturnType<Promise<GetRaydiumPoolReserveResponse>, []> {
        return await this.wsConnection.call("GetRaydiumPoolReserve", request)
    }

    async getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        return await this.wsConnection.call("GetRaydiumPools", request)
    }

    async getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        return await this.wsConnection.call("GetRaydiumPrices", request)
    }

    async getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        return await this.wsConnection.call("GetRaydiumQuotes", request)
    }

    // Oenbook V2
    async getOrderbookV2(
        request: GetOrderbookRequestV2
    ): Promise<GetOrderbookResponseV2> {
        return await this.wsConnection.call("GetOrderbookV2", request)
    }

    async getMarketDepthV2(
        request: GetMarketDepthRequestV2
    ): Promise<GetMarketDepthResponseV2> {
        return await this.wsConnection.call("GetMarketDepthV2", request)
    }

    async getMarketsV2(
        request: GetMarketsRequestV2
    ): Promise<GetMarketsResponseV2> {
        return await this.wsConnection.call("GetMarketsV2", request)
    }

    async getTickersV2(
        request: GetTickersRequestV2
    ): Promise<GetTickersResponseV2> {
        return await this.wsConnection.call("GetTickersV2", request)
    }

    async getOpenOrdersV2(
        request: GetOpenOrdersRequestV2
    ): Promise<GetOpenOrdersResponseV2> {
        return await this.wsConnection.call("GetOpenOrdersV2", request)
    }

    async getBundleResultV2(
        request: GetBundleResultRequest
    ): Promise<GetBundleResultResponse> {
        return await this.wsConnection.call("GetOpenOrdersV2", request)
    }

    async getUnsettledV2(
        request: GetUnsettledRequestV2
    ): Promise<GetUnsettledResponse> {
        return await this.wsConnection.call("GetUnsettledV2", request)
    }

    async postOrderV2(request: PostOrderRequestV2): Promise<PostOrderResponse> {
        return this.wsConnection.call("PostOrderV2", request)
    }

    async postCancelOrderV2(
        request: PostCancelOrderRequestV2
    ): Promise<PostCancelOrderResponseV2> {
        return this.wsConnection.call("PostCancelOrderV2", request)
    }

    async postSettleV2(
        request: PostSettleRequestV2
    ): Promise<PostSettleResponse> {
        return this.wsConnection.call("PostSettleV2", request)
    }

    async postReplaceOrderV2(
        request: PostReplaceOrderRequestV2
    ): Promise<PostOrderResponse> {
        return this.wsConnection.call("PostReplaceOrderV2", request)
    }

    //End  of Openbook V2

    async getOrderbook(
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> {
        return await this.wsConnection.call("GetOrderbook", request)
    }

    async getMarketDepth(
        request: GetMarketDepthRequest
    ): Promise<GetMarketDepthResponse> {
        return await this.wsConnection.call("GetMarketDepth", request)
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

    async getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        return await this.wsConnection.call("GetServerTime", request)
    }

    async getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        return await this.wsConnection.call("GetOpenOrders", request)
    }

    async getUnsettled(
        request: GetUnsettledRequest
    ): Promise<GetUnsettledResponse> {
        return await this.wsConnection.call("GetUnsettled", request)
    }

    async getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        return await this.wsConnection.call("GetAccountBalance", request)
    }

    //stream requests
    getOrderbooksStream = async (
        request: GetOrderbooksRequest
    ): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetOrderbooksStream",
            request
        )

        this.manageGetStreamMaps("GetOrderbooksStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getMarketDepthsStream = async (
        request: GetMarketDepthsRequest
    ): Promise<AsyncGenerator<GetMarketDepthsStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetMarketDepthsStream",
            request
        )

        this.manageGetStreamMaps("GetMarketDepthsStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getSwapsStream = async (
        request: GetSwapsStreamRequest
    ): Promise<AsyncGenerator<GetSwapsStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetSwapsStream",
            request
        )

        this.manageGetStreamMaps("GetSwapsStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTickersStream = async (
        request: GetTickersStreamRequest
    ): Promise<AsyncGenerator<GetTickersStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetTickersStream",
            request
        )

        this.manageGetStreamMaps("GetTickersStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getTradesStream = async (
        request: GetTradesRequest
    ): Promise<AsyncGenerator<GetTradesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetTradesStream",
            request
        )

        this.manageGetStreamMaps("GetTradesStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getOrderStatusStream = async (
        request: GetOrderStatusStreamRequest
    ): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetOrderStatusStream",
            request
        )

        this.manageGetStreamMaps("GetOrderStatusStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getRecentBlockHashStream = async (
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetRecentBlockHashStream",
            request
        )

        this.manageGetStreamMaps("GetRecentBlockHashStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getPricesStream = async (
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPricesStream",
            request
        )

        this.manageGetStreamMaps("getPricesStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getQuotesStream = async (
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetQuotesStream",
            request
        )

        this.manageGetStreamMaps("GetQuotesStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getPoolReservesStream = async (
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPoolReservesStream",
            request
        )

        this.manageGetStreamMaps("GetPoolReservesStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getBlockStream = async (
        request: GetBlockStreamRequest
    ): Promise<AsyncGenerator<GetBlockStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetBlockStream",
            request
        )

        this.manageGetStreamMaps("GetBlockStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getNewRaydiumPoolsStream = async (
        request: GetNewRaydiumPoolsRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetNewRaydiumPoolsStream",
            request
        )

        this.manageGetStreamMaps("GetNewRaydiumPoolsStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getPriorityFeeStream = async (
        request: GetPriorityFeeRequest
    ): Promise<AsyncGenerator<GetPriorityFeeResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPriorityFeeStream",
            request
        )

        this.manageGetStreamMaps("GetPriorityFeeStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    //POST requests
    async postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("PostOrder", request)
    }

    async postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.wsConnection.call("PostSubmit", request)
    }

    async postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.wsConnection.call("PostSubmitBatch", request)
    }

    async postSubmitV2(
        request: PostSubmitRequest
    ): Promise<PostSubmitResponse> {
        return this.wsConnection.call("PostSubmitV2", request)
    }

    async postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.wsConnection.call("PostSubmitBatchV2", request)
    }

    async postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelOrder", request)
    }

    async postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelByClientOrderID", request)
    }

    async postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        return this.wsConnection.call("PostCancelAll", request)
    }

    async postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.wsConnection.call("PostSettle", request)
    }

    async postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        return this.wsConnection.call("postReplaceByClientOrderID", request)
    }

    async postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
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

    async postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        return this.wsConnection.call("PostRouteTradeSwap", request)
    }

    async getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsConnection.call("GetPrice", request)
    }

    async getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        return this.wsConnection.call("GetPriorityFee", request)
    }

    cancelGetOrderbooksStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetOrderbooksStream", streamNumber)
    }

    cancelGetSwapsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetSwapsStream", streamNumber)
    }

    cancelGetTickersStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetTickersStream", streamNumber)
    }

    cancelGetTradesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetTradesStream", streamNumber)
    }

    cancelGetOrderStatusStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetOrderStatusStream", streamNumber)
    }

    cancelGetRecentBlockhashStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount(
            "GetRecentBlockHashStream",
            streamNumber
        )
    }

    cancelGetNewRaydiumPoolsStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount(
            "GetNewRaydiumPoolsStream",
            streamNumber
        )
    }

    cancelGetQuotesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount(
            "GetRecentBlockHashStream",
            streamNumber
        )
    }

    cancelGetPoolReservesStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetPoolReservesStream", streamNumber)
    }

    cancelGetPriorityFeeStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetPriorityFeeStream", streamNumber)
    }

    cancelAllGetOrderbooksStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetOrderbooksStream")
    }

    cancelAllGetSwapsStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetSwapsStream")
    }

    cancelAllGetTickersStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetTickersStream")
    }

    cancelAllGetTradesStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetTradesStream")
    }

    cancelAllGetOrderStatusStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetOrderStatusStream")
    }

    cancelAllGetNewRaydiumPoolsStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        return this.cancelAllStreams("GetNewRaydiumPoolsStream")
    }

    cancelAllGetRecentBlockhashStream = async (): Promise<
        Awaited<boolean>[]
    > => {
        return this.cancelAllStreams("GetRecentBlockHashStream")
    }

    cancelAllGetQuotesStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetQuotesStream")
    }

    cancelAllGetPoolReservesStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetPoolReservesStream")
    }

    cancelAllGetPriorityFeeStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetPriorityFeeStream")
    }

    private manageGetStreamMaps = (
        streamName: string,
        subscriptionID: string
    ) => {
        let count: number
        if (!(streamName in this.streamToCountMap)) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionID)
            this.streamToCountMap.set(streamName, countToSubscriptionID)
        } else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const countToID = this.streamToCountMap.get(streamName)!

            count = countToID.size + 1
            const countToSubscriptionID = this.streamToCountMap.get(streamName)

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionID)
                this.streamToCountMap.set(streamName, countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionID)
    }

    // Since the implementation of the subscription functions rely on the count incrementing on every subsequent call
    // to the same stream, the cancel functionality operates on the assumption that the "streamNumber" corresponds to
    // the specific call of the stream by the user

    // example
    // getOrderbooksStream (count === 1)
    // getOrderbooksStream (count === 2)

    // can cancel 1, or 2. If a nonvalid cancellation number is sent as an input, the promise will be rejected with a
    // false boolean

    private cancelStreamByCount = async (
        streamName: string,
        streamNumber: number
    ): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get(streamName)

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) {
                    countToSubscriptionID.delete(key)
                    return this.wsConnection.unsubscribe(value)
                }
            })
        }

        return false
    }

    private cancelAllStreams = async (
        streamName: string
    ): Promise<boolean[]> => {
        const retValues: Promise<boolean>[] = []

        const countToSubscriptionID = this.streamToCountMap.get(streamName)

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                countToSubscriptionID.delete(key)
                retValues.push(this.wsConnection.unsubscribe(value))
            })
        } else {
            retValues.push(Promise.reject())
            return Promise.reject(new Error("no streams open"))
        }

        return Promise.all(retValues)
    }
}
