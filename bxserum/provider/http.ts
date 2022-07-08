import { MAINNET_API_HTTP } from "../../utils/constants.js";
import fetch from "node-fetch"
import { GetAccountBalanceRequest, GetAccountBalanceResponse, GetMarketsRequest, GetMarketsResponse, GetOpenOrdersRequest, GetOpenOrdersResponse, GetOrderBookRequest, GetOrderbookResponse, GetOrderbooksStreamResponse, GetOrderByIDRequest, GetOrderByIDResponse, GetOrdersRequest, GetOrdersResponse, GetServerTimeRequest, GetServerTimeResponse, GetTickersRequest, GetTickersResponse, GetTickersStreamResponse, GetTradesRequest, GetTradesResponse, GetTradesStreamResponse, GetUnsettledRequest, GetUnsettledResponse, PostCancelAllRequest, PostCancelAllResponse, PostCancelByClientOrderIDRequest, PostCancelOrderRequest, PostCancelOrderResponse, PostOrderRequest, PostOrderResponse, PostSettleRequest, PostSettleResponse, PostSubmitRequest, PostSubmitResponse } from "../proto/messages/api/index.js";
import { BaseProvider } from "./base.js";

export class HttpProvider extends BaseProvider {
    private baseUrl:string
    constructor(address: string = MAINNET_API_HTTP) {
        super();        
        this.baseUrl = address + "/api/v1"        
    };

    close = () => {
        //no need
    }

    getOrderbook = (request: GetOrderBookRequest): Promise<GetOrderbookResponse> => {
        const path = `${this.baseUrl}/market/orderbooks/${request.market}?limit=${request.limit}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetOrderbookResponse
        })
    }

    getMarkets(request: GetMarketsRequest): Promise<GetMarketsResponse>{
        const path = `${this.baseUrl}/market/markets`
        return fetch(path).then(resp => {
            return resp.json() as any as GetMarketsResponse
        })
    };

    getTickers(request: GetTickersRequest): Promise<GetTickersResponse>{
        const path = `${this.baseUrl}/market/tickers/${request.market}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetTickersResponse
        })
    };    
    
    getTrades(request: GetTradesRequest): Promise<GetTradesResponse>{
        const path = `${this.baseUrl}/market/trades/${request.market}?limit=${request.limit}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetTradesResponse
        })
    };

    getServerTime(request: GetServerTimeRequest): Promise<GetServerTimeResponse>{
        const path = `${this.baseUrl}/system/time`
        return fetch(path).then(resp => {
            return resp.json() as any as GetServerTimeResponse
        })
    };
    
    getOpenOrders(request: GetOpenOrdersRequest): Promise<GetOpenOrdersResponse>{
        const path = `${this.baseUrl}/trade/openorders/${request.market}?address=${request.address}&limit=${request.limit}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetOpenOrdersResponse
        })
    };    

    getUnsettled(request: GetUnsettledRequest): Promise<GetUnsettledResponse>{
        const path = `${this.baseUrl}/trade/unsettled/${request.market}?owner=${request.owner}`
        return fetch(path).then(resp => {
            return resp.json() as any as GetUnsettledResponse
        })
    };

    getAccountBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse>{
        const path = `${this.baseUrl}/account/balance`
        return fetch(path).then(resp => {
            return resp.json() as any as GetAccountBalanceResponse
        })
    };

    postBalance(request: GetAccountBalanceRequest): Promise<GetAccountBalanceResponse>{
        const path = `${this.baseUrl}/trade/postOrder`
        return fetch(path).then(resp => {
            return resp.json() as any as GetAccountBalanceResponse
        })
    };
}