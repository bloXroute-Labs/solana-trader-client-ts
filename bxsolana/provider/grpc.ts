import {
    MAINNET_API_GRPC_PORT, MAINNET_API_NY_GRPC,
} from "../utils/constants"
import * as grpc from "@grpc/grpc-js"
import { Client } from "@grpc/grpc-js"
import {
    createGrpcClientImpl,
    CreateGrpcClientImplConfig,
} from "@pbkit/grpc-client"
import {
    GetAccountBalanceRequest,
    GetAccountBalanceResponse,
    GetBlockStreamRequest,
    GetBlockStreamResponse,
    GetMarketDepthRequest,
    GetMarketDepthResponse,
    GetMarketDepthsRequest,
    GetMarketDepthsStreamResponse,
    GetMarketsRequest,
    GetMarketsResponse,
    GetOpenOrdersRequest,
    GetOpenOrdersResponse,
    GetOpenPerpOrdersRequest,
    GetOpenPerpOrdersResponse,
    GetOrderbookRequest,
    GetOrderbookResponse,
    GetOrderbooksRequest,
    GetOrderbooksStreamResponse,
    GetOrdersRequest,
    GetOrdersResponse,
    GetOrderStatusStreamRequest,
    GetOrderStatusStreamResponse,
    GetPerpOrderbookRequest,
    GetPerpOrderbookResponse,
    GetPerpOrderbooksRequest,
    GetPerpOrderbooksStreamResponse,
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
    GetUserRequest,
    GetUserResponse,
    PostCancelAllRequest,
    PostCancelAllResponse,
    PostCancelByClientOrderIDRequest,
    PostCancelOrderRequest,
    PostCancelOrderResponse,
    PostClosePerpPositionsRequest,
    PostClosePerpPositionsResponse,
    PostManageCollateralRequest,
    PostManageCollateralResponse,
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
    PostCancelPerpOrderRequest,
    PostCancelPerpOrderResponse,
    PostCreateUserRequest,
    PostCreateUserResponse,
    PostCancelPerpOrdersRequest,
    PostCancelPerpOrdersResponse,
    PostPerpOrderRequest,
    PostPerpOrderResponse,
    GetOpenPerpOrderRequest,
    GetOpenPerpOrderResponse,
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
    GetPerpPositionsRequest,
    GetPerpPositionsResponse,
    GetPerpTradesStreamResponse,
    GetPerpTradesStreamRequest,
    GetDriftMarketDepthRequest,
    GetDriftMarketDepthResponse,
    GetDriftMarketDepthsStreamRequest,
    GetDriftMarketDepthStreamResponse,
    GetDriftMarketsRequest,
    GetDriftMarketsResponse,
    PostDriftMarginOrderRequest,
    PostDriftMarginOrderResponse,
    PostDriftEnableMarginTradingRequest,
    PostDriftEnableMarginTradingResponse,
    GetDriftMarginOrderbookRequest,
    GetDriftMarginOrderbookResponse,
    GetDriftMarginOrderbooksRequest,
    GetDriftMarginOrderbooksStreamResponse,
    GetDriftOpenMarginOrdersRequest,
    GetDriftOpenMarginOrdersResponse,
    PostModifyDriftOrderRequest,
    PostModifyDriftOrderResponse,
    PostCancelDriftMarginOrderRequest,
    PostCancelDriftMarginOrderResponse,
    GetDriftOpenPerpOrdersResponse,
    GetDriftPerpPositionsResponse,
    PostDriftCancelPerpOrderResponse,
    GetDriftOpenPerpOrdersRequest,
    GetDriftPerpPositionsRequest,
    PostDriftCancelPerpOrderRequest,
    PostCloseDriftPerpPositionsRequest,
    PostCloseDriftPerpPositionsResponse,
    PostCreateDriftUserRequest,
    PostCreateDriftUserResponse,
    PostDriftManageCollateralRequest,
    PostDriftManageCollateralResponse,
    PostDriftSettlePNLRequest,
    PostDriftSettlePNLResponse,
    PostDriftSettlePNLsRequest,
    PostDriftSettlePNLsResponse,
    PostLiquidateDriftPerpRequest,
    PostLiquidateDriftPerpResponse,
    GetDriftPerpOrderbookRequest,
    GetDriftPerpOrderbookResponse,
    GetDriftUserRequest,
    GetDriftUserResponse,
    GetDriftAssetsRequest,
    GetDriftAssetsResponse,
    GetDriftPerpContractsResponse,
    GetDriftPerpContractsRequest,
    GetDriftOpenPerpOrderRequest,
    GetDriftOpenPerpOrderResponse,
    GetDriftOpenMarginOrderRequest,
    GetDriftOpenMarginOrderResponse,
    GetOrderbookRequestV2,
    GetOrderbookResponseV2,
    GetMarketDepthRequestV2,
    GetMarketDepthResponseV2,
    GetMarketsRequestV2,
    GetMarketsResponseV2,
    GetTickersRequestV2,
    GetTickersResponseV2,
    GetOpenOrdersRequestV2,
    GetUnsettledRequestV2,
    PostCancelOrderRequestV2,
    PostCancelOrderResponseV2,
    PostSettleRequestV2,
    PostReplaceOrderRequestV2,
    GetJupiterPricesRequest,
    GetJupiterPricesResponse,
    GetJupiterQuotesRequest,
    GetJupiterQuotesResponse,
    GetRaydiumPoolsRequest,
    GetRaydiumPoolsResponse,
    GetRaydiumPricesRequest,
    GetRaydiumPricesResponse,
    GetRaydiumQuotesRequest,
    GetRaydiumQuotesResponse,
    PostJupiterRouteSwapRequest,
    PostJupiterRouteSwapResponse,
    PostJupiterSwapRequest,
    PostJupiterSwapResponse,
    PostOrderRequestV2,
    PostRaydiumRouteSwapRequest,
    PostRaydiumRouteSwapResponse,
    PostRaydiumSwapRequest,
    PostRaydiumSwapResponse,
    PostDriftPerpOrderRequest,
    PostDriftPerpOrderResponse, GetOpenOrdersResponseV2
} from "../proto/messages/api"

import { createServiceClient, Service } from "../proto/services/api/Api"
import { BaseProvider } from "./base"
import { CallMetadataOptions } from "@grpc/grpc-js/build/src/call-credentials"
import { ConnectionOptions } from "tls"
import { RpcReturnType } from "../proto/runtime/rpc"

// built-in grpc.credentials.createInsecure() doesn't allow composition
class insecureChannel extends grpc.ChannelCredentials {
    constructor(callCredentials?: grpc.CallCredentials) {
        super(callCredentials)
    }

    compose(callCredentials: grpc.CallCredentials) {
        const combinedCallCredentials =
            this.callCredentials.compose(callCredentials)
        return new insecureChannel(combinedCallCredentials)
    }

    _getConnectionOptions(): ConnectionOptions | null {
        return null
    }
    _isSecure(): boolean {
        return false
    }
    _equals(other: grpc.ChannelCredentials): boolean {
        return other instanceof insecureChannel
    }
}

export class GrpcProvider extends BaseProvider {
    private client: Service
    private grpcClient: Client

    constructor(
        authHeader: string,
        privateKey = "",
        address = `${MAINNET_API_NY_GRPC}:${MAINNET_API_GRPC_PORT}`,
        useTls: boolean,
        options: grpc.ClientOptions = {
            "grpc.keepalive_time_ms": 10000,
            // 10s keep alive so connection isn't closed from lack of activity
            "grpc.keepalive_timeout_ms": 5000, // 5s allowance for keepalive to respond
        }
    ) {
        super(authHeader, privateKey)

        const metaCallback = (
            options: CallMetadataOptions,
            cb: (err: Error | null, metadata?: grpc.Metadata) => void
        ) => {
            const meta = new grpc.Metadata()
            meta.add("Authorization", authHeader)

            cb(null, meta)
        }

        let credentials: grpc.ChannelCredentials

        if (!useTls) {
            // testnet or local
            credentials = grpc.credentials.combineChannelCredentials(
                new insecureChannel(),
                grpc.credentials.createFromMetadataGenerator(metaCallback)
            )
        } else {
            // mainnet
            credentials = grpc.credentials.combineChannelCredentials(
                grpc.credentials.createSsl(),
                grpc.credentials.createFromMetadataGenerator(metaCallback)
            )
        }

        this.grpcClient = new Client(address, credentials, options)

        const configGrpc: CreateGrpcClientImplConfig = {
            grpcJsClient: this.grpcClient,
        }
        const impl = createGrpcClientImpl(configGrpc)
        this.client = createServiceClient(impl)
    }

    close = () => {
        this.grpcClient.close()
    }

    getJupiterPrices(
        request: GetJupiterPricesRequest
    ): RpcReturnType<Promise<GetJupiterPricesResponse>, []> {
        return this.client.getJupiterPrices(request)
    }

    getJupiterQuotes(
        request: GetJupiterQuotesRequest
    ): RpcReturnType<Promise<GetJupiterQuotesResponse>, []> {
        return this.client.getJupiterQuotes(request)
    }

    postJupiterRouteSwap(
        request: PostJupiterRouteSwapRequest
    ): RpcReturnType<Promise<PostJupiterRouteSwapResponse>, []> {
        return this.client.postJupiterRouteSwap(request)
    }

    postJupiterSwap(
        request: PostJupiterSwapRequest
    ): RpcReturnType<Promise<PostJupiterSwapResponse>, []> {
        return this.client.postJupiterSwap(request)
    }

    postRaydiumRouteSwap(
        request: PostRaydiumRouteSwapRequest
    ): RpcReturnType<Promise<PostRaydiumRouteSwapResponse>, []> {
        return this.client.postRaydiumRouteSwap(request)
    }

    postRaydiumSwap(
        request: PostRaydiumSwapRequest
    ): RpcReturnType<Promise<PostRaydiumSwapResponse>, []> {
        return this.client.postRaydiumSwap(request)
    }

    getRaydiumPools(
        request: GetRaydiumPoolsRequest
    ): RpcReturnType<Promise<GetRaydiumPoolsResponse>, []> {
        return this.client.getRaydiumPools(request)
    }

    getRaydiumPrices(
        request: GetRaydiumPricesRequest
    ): RpcReturnType<Promise<GetRaydiumPricesResponse>, []> {
        return this.client.getRaydiumPrices(request)
    }

    getRaydiumQuotes(
        request: GetRaydiumQuotesRequest
    ): RpcReturnType<Promise<GetRaydiumQuotesResponse>, []> {
        return this.client.getRaydiumQuotes(request)
    }

    // Drift V2
    postCloseDriftPerpPositions(
        request: PostCloseDriftPerpPositionsRequest
    ): RpcReturnType<Promise<PostCloseDriftPerpPositionsResponse>, []> {
        return this.client.postCloseDriftPerpPositions(request)
    }
    postCreateDriftUser(
        request: PostCreateDriftUserRequest
    ): RpcReturnType<Promise<PostCreateDriftUserResponse>, []> {
        return this.client.postCreateDriftUser(request)
    }
    postDriftManageCollateral(
        request: PostDriftManageCollateralRequest
    ): RpcReturnType<Promise<PostDriftManageCollateralResponse>, []> {
        return this.client.postDriftManageCollateral(request)
    }
    postDriftSettlePNL(
        request: PostDriftSettlePNLRequest
    ): RpcReturnType<Promise<PostDriftSettlePNLResponse>, []> {
        return this.client.postDriftSettlePNL(request)
    }
    postDriftSettlePNLs(
        request: PostDriftSettlePNLsRequest
    ): RpcReturnType<Promise<PostDriftSettlePNLsResponse>, []> {
        return this.client.postDriftSettlePNLs(request)
    }
    postLiquidateDriftPerp(
        request: PostLiquidateDriftPerpRequest
    ): RpcReturnType<Promise<PostLiquidateDriftPerpResponse>, []> {
        return this.client.postLiquidateDriftPerp(request)
    }
    getDriftPerpOrderbook(
        request: GetDriftPerpOrderbookRequest
    ): RpcReturnType<Promise<GetDriftPerpOrderbookResponse>, []> {
        return this.client.getDriftPerpOrderbook(request)
    }
    getDriftUser(
        request: GetDriftUserRequest
    ): RpcReturnType<Promise<GetDriftUserResponse>, []> {
        return this.client.getDriftUser(request)
    }
    getDriftAssets(
        request: GetDriftAssetsRequest
    ): RpcReturnType<Promise<GetDriftAssetsResponse>, []> {
        return this.client.getDriftAssets(request)
    }
    getDriftPerpContracts(
        request: GetDriftPerpContractsRequest
    ): RpcReturnType<Promise<GetDriftPerpContractsResponse>, []> {
        return this.client.getDriftPerpContracts(request)
    }
    getDriftOpenPerpOrder(
        request: GetDriftOpenPerpOrderRequest
    ): RpcReturnType<Promise<GetDriftOpenPerpOrderResponse>, []> {
        return this.client.getDriftOpenPerpOrder(request)
    }
    getDriftOpenMarginOrder(
        request: GetDriftOpenMarginOrderRequest
    ): RpcReturnType<Promise<GetDriftOpenMarginOrderResponse>, []> {
        return this.client.getDriftOpenMarginOrder(request)
    }
    getDriftOpenPerpOrders(
        request: GetDriftOpenPerpOrdersRequest
    ): RpcReturnType<Promise<GetDriftOpenPerpOrdersResponse>, []> {
        return this.client.getDriftOpenPerpOrders(request)
    }
    getDriftPerpPositions(
        request: GetDriftPerpPositionsRequest
    ): RpcReturnType<Promise<GetDriftPerpPositionsResponse>, []> {
        return this.client.getDriftPerpPositions(request)
    }
    postDriftCancelPerpOrder(
        request: PostDriftCancelPerpOrderRequest
    ): RpcReturnType<Promise<PostDriftCancelPerpOrderResponse>, []> {
        return this.client.postDriftCancelPerpOrder(request)
    }
    getDriftOpenMarginOrders(
        request: GetDriftOpenMarginOrdersRequest
    ): RpcReturnType<Promise<GetDriftOpenMarginOrdersResponse>, []> {
        return this.client.getDriftOpenMarginOrders(request)
    }

    postModifyDriftOrder(
        request: PostModifyDriftOrderRequest
    ): RpcReturnType<Promise<PostModifyDriftOrderResponse>, []> {
        return this.client.postModifyDriftOrder(request)
    }

    postCancelDriftMarginOrder(
        request: PostCancelDriftMarginOrderRequest
    ): RpcReturnType<Promise<PostCancelDriftMarginOrderResponse>, []> {
        return this.client.postCancelDriftMarginOrder(request)
    }

    getDriftMarkets(
        request: GetDriftMarketsRequest
    ): RpcReturnType<Promise<GetDriftMarketsResponse>, []> {
        return this.client.getDriftMarkets(request)
    }

    postDriftMarginOrder(
        request: PostDriftMarginOrderRequest
    ): RpcReturnType<Promise<PostDriftMarginOrderResponse>, []> {
        return this.client.postDriftMarginOrder(request)
    }

    postDriftPerpOrder(
        request: PostDriftPerpOrderRequest
    ): RpcReturnType<Promise<PostDriftPerpOrderResponse>, []> {
        return this.client.postDriftPerpOrder(request)
    }

    postDriftEnableMarginTrading(
        request: PostDriftEnableMarginTradingRequest
    ): RpcReturnType<Promise<PostDriftEnableMarginTradingResponse>, []> {
        return this.client.postDriftEnableMarginTrading(request)
    }

    getDriftMarginOrderbook(
        request: GetDriftMarginOrderbookRequest
    ): RpcReturnType<Promise<GetDriftMarginOrderbookResponse>, []> {
        return this.client.getDriftMarginOrderbook(request)
    }

    getDriftMarketDepth(
        request: GetDriftMarketDepthRequest
    ): RpcReturnType<Promise<GetDriftMarketDepthResponse>, []> {
        return this.client.getDriftMarketDepth(request)
    }

    getDriftMarginOrderbooksStream(
        request: GetDriftMarginOrderbooksRequest
    ): RpcReturnType<
        AsyncGenerator<GetDriftMarginOrderbooksStreamResponse>,
        []
    > {
        return this.client.getDriftMarginOrderbooksStream(request)
    }

    getDriftMarketDepthsStream(
        request: GetDriftMarketDepthsStreamRequest
    ): RpcReturnType<AsyncGenerator<GetDriftMarketDepthStreamResponse>, []> {
        return this.client.getDriftMarketDepthsStream(request)
    }
    // End of Drift V2

    // Openbook V2
    getOrderbookV2 = (
        request: GetOrderbookRequestV2
    ): Promise<GetOrderbookResponseV2> => {
        return this.client.getOrderbookV2(request)
    }

    getMarketDepthV2(
        request: GetMarketDepthRequestV2
    ): Promise<GetMarketDepthResponseV2> {
        return this.client.getMarketDepthV2(request)
    }

    getMarketsV2 = (
        request: GetMarketsRequestV2
    ): Promise<GetMarketsResponseV2> => {
        return this.client.getMarketsV2(request)
    }

    getTickersV2(request: GetTickersRequestV2): Promise<GetTickersResponseV2> {
        return this.client.getTickersV2(request)
    }

    getOpenOrdersV2(
        request: GetOpenOrdersRequestV2
    ): Promise<GetOpenOrdersResponseV2> {
        return this.client.getOpenOrdersV2(request)
    }

    getUnsettledV2(
        request: GetUnsettledRequestV2
    ): Promise<GetUnsettledResponse> {
        return this.client.getUnsettledV2(request)
    }

    postOrderV2(request: PostOrderRequestV2): Promise<PostOrderResponse> {
        return this.client.postOrderV2(request)
    }

    postCancelOrderV2(
        request: PostCancelOrderRequestV2
    ): Promise<PostCancelOrderResponseV2> {
        return this.client.postCancelOrderV2(request)
    }

    postSettleV2(request: PostSettleRequestV2): Promise<PostSettleResponse> {
        return this.client.postSettleV2(request)
    }

    postReplaceOrderV2(
        request: PostReplaceOrderRequestV2
    ): Promise<PostOrderResponse> {
        return this.client.postReplaceOrderV2(request)
    }
    // End of Openbook V2

    getOrderbook = (
        request: GetOrderbookRequest
    ): Promise<GetOrderbookResponse> => {
        return this.client.getOrderbook(request)
    }

    getMarketDepth(
        request: GetMarketDepthRequest
    ): Promise<GetMarketDepthResponse> {
        return this.client.getMarketDepth(request)
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

    getQuotes(request: GetQuotesRequest): Promise<GetQuotesResponse> {
        return this.client.getQuotes(request)
    }

    postTradeSwap(request: TradeSwapRequest): Promise<TradeSwapResponse> {
        return this.client.postTradeSwap(request)
    }

    postRouteTradeSwap(
        request: RouteTradeSwapRequest
    ): Promise<TradeSwapResponse> {
        return this.client.postRouteTradeSwap(request)
    }
    getOpenPerpOrder(
        request: GetOpenPerpOrderRequest
    ): RpcReturnType<Promise<GetOpenPerpOrderResponse>, []> {
        return this.client.getOpenPerpOrder(request)
    }
    getAssets(
        request: GetAssetsRequest
    ): RpcReturnType<Promise<GetAssetsResponse>, []> {
        return this.client.getAssets(request)
    }
    getPerpContracts(
        request: GetPerpContractsRequest
    ): RpcReturnType<Promise<GetPerpContractsResponse>, []> {
        return this.client.getPerpContracts(request)
    }
    postSettlePNL(
        request: PostSettlePNLRequest
    ): RpcReturnType<Promise<PostSettlePNLResponse>, []> {
        return this.client.postSettlePNL(request)
    }
    postSettlePNLs(
        request: PostSettlePNLsRequest
    ): RpcReturnType<Promise<PostSettlePNLsResponse>, []> {
        return this.client.postSettlePNLs(request)
    }
    postLiquidatePerp(
        request: PostLiquidatePerpRequest
    ): RpcReturnType<Promise<PostLiquidatePerpResponse>, []> {
        return this.client.postLiquidatePerp(request)
    }
    postPerpOrder(
        request: PostPerpOrderRequest
    ): Promise<PostPerpOrderResponse> {
        return this.client.postPerpOrder(request)
    }
    getPerpPositions(
        request: GetPerpPositionsRequest
    ): Promise<GetPerpPositionsResponse> {
        return this.client.getPerpPositions(request)
    }
    getOpenPerpOrders(
        request: GetOpenPerpOrdersRequest
    ): Promise<GetOpenPerpOrdersResponse> {
        return this.client.getOpenPerpOrders(request)
    }

    postCancelPerpOrder(
        request: PostCancelPerpOrderRequest
    ): Promise<PostCancelPerpOrderResponse> {
        return this.client.postCancelPerpOrder(request)
    }

    postCancelPerpOrders(
        request: PostCancelPerpOrdersRequest
    ): Promise<PostCancelPerpOrdersResponse> {
        return this.client.postCancelPerpOrders(request)
    }

    postClosePerpPositions(
        request: PostClosePerpPositionsRequest
    ): Promise<PostClosePerpPositionsResponse> {
        return this.client.postClosePerpPositions(request)
    }

    postCreateUser(
        request: PostCreateUserRequest
    ): Promise<PostCreateUserResponse> {
        return this.client.postCreateUser(request)
    }

    getUser(request: GetUserRequest): Promise<GetUserResponse> {
        return this.client.getUser(request)
    }

    postManageCollateral(
        request: PostManageCollateralRequest
    ): Promise<PostManageCollateralResponse> {
        return this.client.postManageCollateral(request)
    }

    getOrders(request: GetOrdersRequest): Promise<GetOrdersResponse> {
        return this.client.getOrders(request)
    }

    getPerpOrderbook(
        request: GetPerpOrderbookRequest
    ): RpcReturnType<Promise<GetPerpOrderbookResponse>, []> {
        return this.client.getPerpOrderbook(request)
    }

    // streams
    getOrderbooksStream = (
        request: GetOrderbooksRequest
    ): Promise<AsyncGenerator<GetOrderbooksStreamResponse>> => {
        return this.client.getOrderbooksStream(request)
    }

    getPerpTradesStream = (
        request: GetPerpTradesStreamRequest
    ): Promise<AsyncGenerator<GetPerpTradesStreamResponse>> => {
        return this.client.getPerpTradesStream(request)
    }

    getMarketDepthsStream = (
        request: GetMarketDepthsRequest
    ): Promise<AsyncGenerator<GetMarketDepthsStreamResponse>> => {
        return this.client.getMarketDepthsStream(request)
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
    getPoolReservesStream(
        request: GetPoolReservesStreamRequest
    ): Promise<AsyncGenerator<GetPoolReservesStreamResponse>> {
        return this.client.getPoolReservesStream(request)
    }

    getQuotesStream(
        request: GetQuotesStreamRequest
    ): Promise<AsyncGenerator<GetQuotesStreamResponse>> {
        return this.client.getQuotesStream(request)
    }

    getRecentBlockHashStream(
        request: GetRecentBlockHashRequest
    ): Promise<AsyncGenerator<GetRecentBlockHashResponse>> {
        return this.client.getRecentBlockHashStream(request)
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

    getPerpOrderbooksStream(
        request: GetPerpOrderbooksRequest
    ): Promise<AsyncGenerator<GetPerpOrderbooksStreamResponse>> {
        return this.client.getPerpOrderbooksStream(request)
    }
}
