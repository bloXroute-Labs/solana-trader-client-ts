import { MAINNET_API_WS } from "../utils/constants"

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
} from "../proto/messages/api"
import { BaseProvider } from "./base"
import { RpcWsConnection } from "../ws/rpcclient"

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
        address: string = MAINNET_API_WS
    ) {
        super(authHeader, privateKey)
        this.wsConnection = new RpcWsConnection(authHeader, address)
        this.address = address
    }

    async connect() {
        await this.wsConnection.connect()
    }

    close = () => {
        this.isClosed = true
        this.wsConnection.close()
    }

    async getOrderbook(
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> {
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
        request: GetTickersRequest
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
