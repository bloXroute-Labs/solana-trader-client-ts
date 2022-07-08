import { GetFilteredOrderbooksRequest, GetAccountBalanceRequest, GetAccountBalanceResponse, GetKlineRequest, GetKlineResponse, GetMarketDepthStreamResponse, GetMarketsRequest, GetMarketsResponse, GetOpenOrdersRequest, GetOpenOrdersResponse, GetOrderBookRequest, GetOrderbookResponse, GetOrderbooksStreamResponse, GetOrderByIDRequest, GetOrderByIDResponse, GetOrdersRequest, GetOrdersResponse, GetServerTimeRequest, GetServerTimeResponse, GetTickersRequest, GetTickersResponse, GetTickersStreamResponse, GetTradesRequest, GetTradesResponse, GetTradesStreamResponse, GetUnsettledRequest, GetUnsettledResponse, PostCancelAllRequest, PostCancelAllResponse, PostCancelByClientOrderIDRequest, PostCancelOrderRequest, PostCancelOrderResponse, PostOrderRequest, PostOrderResponse, PostSettleRequest, PostSettleResponse, PostSubmitRequest, PostSubmitResponse, GetOrderStatusStreamRequest, GetOrderStatusStreamResponse } from "../proto/messages/api/index.js";
import { Api } from "../proto/services/api/index.js";


export abstract class BaseProvider implements Api {
    abstract close():void;

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse>{
        throw new Error("Not implemented")
    };

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse>{
        throw new Error("Not implemented")
    };

    getKline(request: GetKlineRequest): Promise<GetKlineResponse>{
        throw new Error("Not implemented")
    };
    getOrderbook(request: GetOrderBookRequest): Promise<GetOrderbookResponse>{
        throw new Error("Not implemented")
    };

    getTrades(request: GetTradesRequest): Promise<GetTradesResponse>{
        throw new Error("Not implemented")
    };

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse>{
        throw new Error("Not implemented")
    };

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse>{
        throw new Error("Not implemented")
    };

    postOrder(request: PostOrderRequest): Promise<PostOrderResponse>{
        throw new Error("Not implemented")
    };

    postSubmit(request: PostSubmitRequest): Promise<PostSubmitResponse>{
        throw new Error("Not implemented")
    };

    postCancelOrder(request: PostCancelOrderRequest): Promise<PostCancelOrderResponse>{
        throw new Error("Not implemented")
    };

    postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest): Promise<PostCancelOrderResponse>{
        throw new Error("Not implemented")
    };

    postCancelAll(request: PostCancelAllRequest): Promise<PostCancelAllResponse>{
        throw new Error("Not implemented")
    };

    postSettle(request: PostSettleRequest): Promise<PostSettleResponse>{
        throw new Error("Not implemented")
    };

    getOrders(request: GetOrdersRequest): Promise<GetOrdersResponse>{
        throw new Error("Not implemented")
    };
    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse>{
        throw new Error("Not implemented")
    };
    getOrderByID(request: GetOrderByIDRequest): Promise<GetOrderByIDResponse>{
        throw new Error("Not implemented")
    };

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse>{
        throw new Error("Not implemented")
    };

    getOrderbooksStream(request: GetOrderBookRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>>{
        throw new Error("Not implemented")
    };

    getFilteredOrderbooksStream(request: GetFilteredOrderbooksRequest): Promise<AsyncGenerator<GetOrderbooksStreamResponse>>{
        throw new Error("Not implemented")
    }

    getTickersStream(request: GetTickersRequest): Promise<AsyncGenerator<GetTickersStreamResponse>>{
        throw new Error("Not implemented")
    };

    getMarketDepthStream(request: GetMarketsRequest): Promise<AsyncGenerator<GetMarketDepthStreamResponse>>{
        throw new Error("Not implemented")
    };

    getTradesStream(request: GetTradesRequest): Promise<AsyncGenerator<GetTradesStreamResponse>>{
        throw new Error("Not implemented")
    };

    getOrderStatusStream(request: GetOrderStatusStreamRequest): Promise<AsyncGenerator<GetOrderStatusStreamResponse>>{
        throw new Error("Not implemented")
    }
    
    // async submitOrder(request: PostOrderRequest, skipPreFlight: boolean = false): Promise<PostSubmitResponse>{
    //     let tx = await this.postOrder(request)

    //     return this.postSubmit({ transaction:tx.transaction, skipPreFlight})
    // }
}