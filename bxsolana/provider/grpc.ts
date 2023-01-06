import {
    MAINNET_API_GRPC_HOST,
    MAINNET_API_GRPC_PORT,
} from "../utils/constants.js"
import * as grpc from "@grpc/grpc-js"
import { Client } from "@grpc/grpc-js"
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
} from "../proto/api_pb"
import { BaseProvider } from "./base.js"
import { CallMetadataOptions } from "@grpc/grpc-js/src/call-credentials"
import config from "../utils/config.js"

export class GrpcProvider extends BaseProvider {
    private client: any
    private grpcClient: Client

    constructor(
        address = `${MAINNET_API_GRPC_HOST}:${MAINNET_API_GRPC_PORT}`,
        useTls: boolean
    ) {
        super()
        const metaCallback = (
            options: CallMetadataOptions,
            cb: (err: Error | null, metadata?: grpc.Metadata) => void
        ) => {
            const meta = new grpc.Metadata()
            meta.add("Authorization", config.AuthHeader)
            cb(null, meta)
        }

        let grpcClient: Client

        if (!useTls) {
            // testnet or local
            grpcClient = new Client(address, grpc.credentials.createInsecure())
        } else {
            // mainnet
            grpcClient = new Client(
                address,
                grpc.credentials.combineChannelCredentials(
                    grpc.credentials.createSsl(),
                    grpc.credentials.createFromMetadataGenerator(metaCallback)
                )
            )
        }

        this.grpcClient = grpcClient

        // const configGrpc: CreateGrpcClientImplConfig = {
        //     grpcJsClient: this.grpcClient,
        // }
        // const impl = createGrpcClientImpl(configGrpc)
    }

    close = () => {
        this.grpcClient.close()
    }

    //Unary requests
    getOrderbook = (
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        return this.client.getOrderbook(request)
    }

    getMarkets = (request: GetMarketsRequest): Promise<GetMarketsResponse> => {
        return this.client.getMarkets(request)
    }

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse> {
        return this.client.getTickers(request)
    }

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse> {
        return this.client.getTrades(request)
    }

    getServerTime(
        request: GetServerTimeRequest
    ): Promise<GetServerTimeResponse> {
        return this.client.getServerTime(request)
    }

    getOpenOrders(
        request: GetOpenOrdersRequest
    ): Promise<GetOpenOrdersResponse> {
        return this.client.getOpenOrders(request)
    }

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse> {
        return this.client.getUnsettled(request)
    }

    getAccountBalance(
        request: GetAccountBalanceRequest
    ): Promise<GetAccountBalanceResponse> {
        return this.client.getAccountBalance(request)
    }

    //stream requests
    getOrderbooksStream = (
        request: GetOrderbooksRequest
    ): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        return this.client.getOrderbooksStream(request)
    }

    getTickersStream(
        request: GetTickersRequest
    ): Promise<AsyncGenerator<GetTickersStreamResponse>> {
        return this.client.getTickersStream(request)
    }

    getTradesStream(
        request: GetTradesRequest
    ): Promise<AsyncGenerator<GetTradesStreamResponse>> {
        return this.client.getTradesStream(request)
    }

    getOrderStatusStream(
        request: GetOrderStatusStreamRequest
    ): Promise<AsyncGenerator<GetOrderStatusStreamResponse>> {
        return this.client.getOrderStatusStream(request)
    }

    //POST requests
    postOrder(request: PostOrderRequest): Promise<PostOrderResponse> {
        return this.client.postOrder(request)
    }

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse> {
        return this.client.postSubmit(request)
    }

    postSubmitBatch(
        request: PostSubmitBatchRequest
    ): Promise<PostSubmitBatchResponse> {
        return this.client.postSubmitBatch(request)
    }

    postCancelOrder(
        request: PostCancelOrderRequest
    ): Promise<PostCancelOrderResponse> {
        return this.client.postCancelOrder(request)
    }

    postCancelByClientOrderID(
        request: PostCancelByClientOrderIDRequest
    ): Promise<PostCancelOrderResponse> {
        return this.client.postCancelByClientOrderID(request)
    }

    postCancelAll(
        request: PostCancelAllRequest
    ): Promise<PostCancelAllResponse> {
        return this.client.postCancelAll(request)
    }

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse> {
        return this.client.postSettle(request)
    }

    postReplaceByClientOrderID(
        request: PostOrderRequest
    ): Promise<PostOrderResponse> {
        return this.client.postReplaceByClientOrderID(request)
    }

    postReplaceOrder(
        request: PostReplaceOrderRequest
    ): Promise<PostOrderResponse> {
        return this.client.postReplaceOrder(request)
    }

    getRecentBlockHashStream(
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        return this.client.getRecentBlockHashStream(request)
    }

    // Amm
    getPrice(request: GetPriceRequest): Promise<GetPriceResponse> {
        return this.client.getPrice(request)
    }

    getPricesStream(
        request: GetPricesStreamRequest
    ): Promise<AsyncGenerator<GetPricesStreamResponse>> {
        return this.client.getPricesStream(request)
    }

    getPools(request: GetPoolsRequest): Promise<GetPoolsResponse> {
        return this.client.getPools(request)
    }

    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        return this.client.getPoolReservesStream(request)
    }

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.client.getQuotes(request)
    }

    getQuotesStream(
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        return this.client.getQuotesStream(request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.client.postTradeSwap(request)
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        return this.client.postRouteTradeSwap(request)
    }

    getSwapsStream(
        request: GetSwapsStreamRequest
    ): Promise<AsyncGenerator<GetSwapsStreamResponse>> {
        return this.client.getSwapsStream(request)
    }

    getBlockStream(
        request: GetBlockStreamRequest
    ): Promise<AsyncGenerator<GetBlockStreamResponse>> {
        return this.client.getBlockStream(request)
    }
}
