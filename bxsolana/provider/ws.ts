import { LOCAL_API_WS, MAINNET_API_WS } from "../../utils/constants.js"
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
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
import { RpcWsConnection } from "../ws/rpcclient.js"

type Resolver = (result: any) => void
export class WsProvider extends BaseProvider {
    private wsConnection: RpcWsConnection

    private socket!: WebSocket
    private address = ""
    private isClosed = false
    private streamMap: Map<string, string> = new Map()

    // stream to count is going to be a map to a stream and how many instances of that stream are open
    // ex: if someone calls GetOrderbooksStream 3 times, the map will look like:
    // <GetOrderbooksStream, 1>
    // <GetOrderbooksStream, 2>
    // <GetOrderbooksStream, 3>
    private streamToCountMap: Map<string, Map<number, string>> = new Map()

    // countToSubscriptionID is going to be a map from the number in the above map (i.e 3 if GetOrderbooksStream is
    // called 3 times) to the subscription id. This will be used to manage cancellations
    private countToSubscriptionID: Map<number, string> = new Map()

    constructor(address: string = MAINNET_API_WS) {
        super()
        this.wsConnection = new RpcWsConnection(address)
        this.address = address
    }

    async connect() {
        await this.wsConnection.connect()
    }

    close = () => {
        this.isClosed = true
        this.wsConnection.close()
    }

    async getOrderbook(request: GetOrderbookRequest): Promise<GetOrderbookResponse> {
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

    async getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse> {
        return await this.wsConnection.call("GetServerTime", request)
    }

    async getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse> {
        return await this.wsConnection.call("GetOpenOrders", request)
    }

    async getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        return await this.wsConnection.call("GetUnsettled", request)
    }

    async getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse> {
        return await this.wsConnection.call("GetAccountBalance", request)
    }

    //stream requests
    getOrderbooksStream = async (request: GetOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderbooksStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetOrderbooksStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetOrderbooksStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetOrderbooksStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    // Since the implementation of the subscription functions rely on the count incrementing on every subsequent call
    // to the same stream, the cancel functionality operates on the assumption that the "streamNumber" corresponds to
    // the specific call of the stream by the user

    // example
    // getOrderbooksStream (count === 1)
    // getOrderbooksStream (count === 2)

    // can cancel 1, or 2. If a nonvalid cancellation number is sent as an input, the promise will be rejected with a
    // false boolean

    cancelGetOrderbooksStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetOrderbooksStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetOrderbooksStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetOrderbooksStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    getTickersStream = async (request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTickersStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetTickersStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetTickersStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetTickersStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetTickersStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetTickersStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetTickersStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetTickersStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    getTradesStream = async (request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetTradesStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetTradesStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetTradesStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetTradesStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetTradesStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetTradesStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetTradesStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetTradesStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    getOrderStatusStream = async (request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetOrderStatusSTream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetOrderStatusStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetOrderStatusStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetOrderStatusStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetOrderStatusStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetOrderStatusStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetOrderStatusStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetOrderStatusStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    //POST requests
    async postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("PostOrder", request)
    }

    async postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.wsConnection.call("PostSubmit", request)
    }

    async postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelOrder", request)
    }

    async postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse> {
        return this.wsConnection.call("PostCancelByClientOrderID", request)
    }

    async postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse> {
        return this.wsConnection.call("PostCancelAll", request)
    }

    async postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.wsConnection.call("PostSettle", request)
    }

    async postReplaceByClientOrderID(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.wsConnection.call("postReplaceByClientOrderID", request)
    }

    async postReplaceOrder(request: PostReplaceOrderRequest): Promise<PostOrderResponse> {
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

    postRouteTradeSwap(request: RouteTradeSwapRequest): Promise<TradeSwapResponse> {
        return this.wsConnection.call("PostRouteTradeSwap", request)
    }

    async getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsConnection.call("GetPrice", request)
    }

    getRecentBlockHashStream = async (request: GetRecentBlockHashRequest): Promise<AsyncGenerator<GetRecentBlockHashResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetRecentBlockHashStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetRecentBlockHashStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetRecentBlockHashStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetRecentBlockHashStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetRecentBlockhashStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetRecentBlockHashStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetRecentBlockhashStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetRecentBlockHashStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    getQuotesStream = async (request: GetQuotesStreamRequest): Promise<AsyncGenerator<GetQuotesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetQuotesStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetQuotesStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetQuotesStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetQuotesStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetQuotesStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetQuotesStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetQuotesStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetQuotesStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }

    getPoolReservesStream = async (request: GetPoolReservesStreamRequest): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe("GetPoolReservesStream", request)

        let count: number
        if (this.streamToCountMap.size === 0) {
            count = 1
            const countToSubscriptionID = new Map()
            countToSubscriptionID.set(count, subscriptionId)
            this.streamToCountMap.set("GetPoolReservesStream", countToSubscriptionID)
        } else {
            count = this.streamToCountMap.size + 1
            const countToSubscriptionID = this.streamToCountMap.get("GetPoolReservesStream")

            if (countToSubscriptionID) {
                countToSubscriptionID.set(count, subscriptionId)
                this.streamToCountMap.set("GetPoolReservesStream", countToSubscriptionID)
            }
        }

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    cancelGetPoolReservesStreamByCount = async (streamNumber: number): Promise<boolean> => {
        const countToSubscriptionID = this.streamToCountMap.get("GetPoolReservesStream")

        if (countToSubscriptionID) {
            this.countToSubscriptionID.forEach((value: string, key: number) => {
                if (key === streamNumber) return this.wsConnection.unsubscribe(value)
            })
        }

        return false
    }

    cancelAllGetPoolReservesStream = async (): Promise<boolean> => {
        let retValues: Promise<boolean>
        let p = Promise.resolve(false)

        const countToSubscriptionID = this.streamToCountMap.get("GetPoolReservesStream")

        if (countToSubscriptionID) {
            countToSubscriptionID.forEach((value: string, key: number) => {
                retValues = this.wsConnection.unsubscribe(value)
                retValues.catch(function () {
                    return retValues
                })
            })

            return p
        }

        p = Promise.reject(true)
        return p
    }
}
