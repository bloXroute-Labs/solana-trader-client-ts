import { MAINNET_API_NY_WS } from "../utils/constants"

import {
    GetBlockStreamRequest,
    GetBlockStreamResponse,
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
    PostSubmitBatchRequest,
    PostSubmitBatchResponse,
    PostSubmitRequest,
    PostSubmitResponse,
    TradeSwapResponse,
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
    GetNewRaydiumPoolsRequest,
    GetNewRaydiumPoolsResponse,
    GetTransactionResponse,
    GetTransactionRequest,
    GetRateLimitRequest,
    GetRateLimitResponse,
    GetPriorityFeeRequest,
    GetPriorityFeeResponse,
    PostJupiterSwapInstructionsRequest,
    PostJupiterSwapInstructionsResponse,
    GetRaydiumPoolReserveRequest,
    GetRaydiumPoolReserveResponse,
    GetBundleTipResponse,
    GetBundleTipRequest,
    GetPumpFunNewTokensStreamResponse,
    GetPumpFunNewTokensStreamRequest,
    GetPumpFunSwapsStreamRequest,
    GetPumpFunSwapsStreamResponse,
    PostPumpFunSwapRequest,
    PostPumpFunSwapResponse,
    GetPumpFunQuotesRequest,
    GetPumpFunQuotesResponse,
    GetRecentBlockHashRequestV2,
    GetRecentBlockHashResponseV2,
    PostRaydiumCPMMSwapRequest,
    PostRaydiumCPMMSwapResponse,
    GetRaydiumCPMMQuotesRequest,
    GetRaydiumCPMMQuotesResponse,
    GetRaydiumCLMMPoolsRequest,
    GetRaydiumCLMMPoolsResponse,
    GetRaydiumCLMMQuotesRequest,
    GetRaydiumCLMMQuotesResponse,
    GetNewRaydiumPoolsByTransactionResponse,
    GetNewRaydiumPoolsByTransactionRequest,
    GetPriorityFeeByProgramRequest,
    GetPriorityFeeByProgramResponse,
    PostPumpFunSwapRequestSol,
    PostSubmitSnipeRequest,
    PostSubmitSnipeResponse,
    PostSubmitPaladinRequest,
    GetLeaderScheduleRequest,
    GetLeaderScheduleResponse,
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

    async postRaydiumCLMMRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumCLMMRouteSwap", request)
    }

    async postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumSwap", request)
    }

    async postRaydiumCPMMSwap(
        request: PostRaydiumCPMMSwapRequest
    ): RpcReturnType<Promise<PostRaydiumCPMMSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumCPMMSwap", request)
    }

    async postRaydiumCLMMSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return await this.wsConnection.call("PostRaydiumCLMMSwap", request)
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

    async getRaydiumCLMMPools(
        request: GetRaydiumCLMMPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMPoolsResponse>, []> {
        return await this.wsConnection.call("GetRaydiumCLMMPools", request)
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

    async getRaydiumCLMMQuotes(
        request: GetRaydiumCLMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCLMMQuotesResponse>, []> {
        return await this.wsConnection.call("GetRaydiumCLMMQuotes", request)
    }

    async getRaydiumCPMMQuotes(
        request: GetRaydiumCPMMQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumCPMMQuotesResponse>, []> {
        return await this.wsConnection.call("GetRaydiumQuotesCPMM", request)
    }

    async getPumpFunQuotes(
        request: GetPumpFunQuotesRequest
    ): RpcReturnType<Promise<GetPumpFunQuotesResponse>, []> {
        return await this.wsConnection.call("GetPumpFunQuotes", request)
    }

    async getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        return await this.wsConnection.call("GetServerTime", request)
    }

    getPumpFunNewTokensStream = async (
        request: GetPumpFunNewTokensStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunNewTokensStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPumpFunNewTokensStream",
            request
        )

        this.manageGetStreamMaps("GetPumpFunNewTokensStream", subscriptionId)

        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getPumpFunSwapsStream = async (
        request: GetPumpFunSwapsStreamRequest
    ): Promise<AsyncGenerator<GetPumpFunSwapsStreamResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPumpFunSwapsStream",
            request
        )

        this.manageGetStreamMaps("GetPumpFunSwapsStream", subscriptionId)

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

    getNewRaydiumPoolsByTransactionStream = async (
        request: GetNewRaydiumPoolsByTransactionRequest
    ): Promise<AsyncGenerator<GetNewRaydiumPoolsByTransactionResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetNewRaydiumPoolsByTransactionStream",
            request
        )

        this.manageGetStreamMaps(
            "getNewRaydiumPoolsByTransactionStream",
            subscriptionId
        )
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

    getPriorityFeeByProgramStream = async (
        request: GetPriorityFeeByProgramRequest
    ): Promise<AsyncGenerator<GetPriorityFeeByProgramResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetPriorityFeeByProgramStream",
            request
        )

        this.manageGetStreamMaps(
            "GetPriorityFeeByProgramStream",
            subscriptionId
        )
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    getBundleTipStream = async (
        request: GetBundleTipRequest
    ): Promise<AsyncGenerator<GetBundleTipResponse>> => {
        const subscriptionId = await this.wsConnection.subscribe(
            "GetBundleTipStream",
            request
        )

        this.manageGetStreamMaps("GetBundleTipStream", subscriptionId)
        return this.wsConnection.subscribeToNotifications(subscriptionId)
    }

    //POST requests
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

    async postSubmitSnipeV2(
        request: PostSubmitSnipeRequest
    ): Promise<PostSubmitSnipeResponse> {
        return this.wsConnection.call("PostSubmitSnipeV2", request)
    }

    async postSubmitPaladinV2(
        request: PostSubmitPaladinRequest
    ): Promise<PostSubmitResponse> {
        return this.wsConnection.call("PostSubmitPaladinV2", request)
    }

    async postSubmitBatchV2(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.wsConnection.call("PostSubmitBatchV2", request)
    }

    async postPumpFunSwap(
        request: PostPumpFunSwapRequest
    ): Promise<PostPumpFunSwapResponse> {
        return this.wsConnection.call("PostPumpFunSwap", request)
    }

    async postPumpFunSwapSol(
        request: PostPumpFunSwapRequestSol
    ): Promise<PostPumpFunSwapResponse> {
        return this.wsConnection.call("PostPumpFunSwapSol", request)
    }

    async getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.wsConnection.call("GetPools", request)
    }

    async getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.wsConnection.call("GetQuotes", request)
    }

    async getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.wsConnection.call("GetPrice", request)
    }

    async getRecentBlockHash(
        request: GetRecentBlockHashRequest
    ): Promise<GetRecentBlockHashResponse> {
        return this.wsConnection.call("GetRecentBlockHash", request)
    }

    async getRecentBlockHashV2(
        request: GetRecentBlockHashRequestV2
    ): Promise<GetRecentBlockHashResponseV2> {
        return this.wsConnection.call("GetRecentBlockHashV2", request)
    }

    async getPriorityFee(
        request: GetPriorityFeeRequest
    ): Promise<GetPriorityFeeResponse> {
        return this.wsConnection.call("GetPriorityFee", request)
    }

    async getPriorityFeeByProgram(
        request: GetPriorityFeeByProgramRequest
    ): Promise<GetPriorityFeeByProgramResponse> {
        return this.wsConnection.call("GetPriorityFeeByProgram", request)
    }

    async getLeaderSchedule(
        request: GetLeaderScheduleRequest
    ): Promise<GetLeaderScheduleResponse> {
        return this.wsConnection.call("GetLeaderSchedule", request)
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

    cancelGetBundleTipStreamByCount = async (
        streamNumber: number
    ): Promise<boolean> => {
        return this.cancelStreamByCount("GetBundleTipStream", streamNumber)
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

    cancelAllGetBundleTipStream = async (): Promise<Awaited<boolean>[]> => {
        return this.cancelAllStreams("GetBundleTipStream")
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
