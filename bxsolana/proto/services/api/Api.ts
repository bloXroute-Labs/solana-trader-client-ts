import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc.js";
import {
  Type as GetPriceRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/api/GetPriceRequest.js";
import {
  Type as GetPriceResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/api/GetPriceResponse.js";
import {
  Type as GetMarketsRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/api/GetMarketsRequest.js";
import {
  Type as GetMarketsResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/api/GetMarketsResponse.js";
import {
  Type as GetPoolsRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/api/GetPoolsRequest.js";
import {
  Type as GetPoolsResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/api/GetPoolsResponse.js";
import {
  Type as GetTickersRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/api/GetTickersRequest.js";
import {
  Type as GetTickersResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/api/GetTickersResponse.js";
import {
  Type as GetKlineRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/api/GetKlineRequest.js";
import {
  Type as GetKlineResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/api/GetKlineResponse.js";
import {
  Type as GetOrderbookRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/api/GetOrderbookRequest.js";
import {
  Type as GetOrderbookResponse,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/api/GetOrderbookResponse.js";
import {
  Type as GetTradesRequest,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/api/GetTradesRequest.js";
import {
  Type as GetTradesResponse,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/api/GetTradesResponse.js";
import {
  Type as GetQuotesRequest,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/api/GetQuotesRequest.js";
import {
  Type as GetQuotesResponse,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/api/GetQuotesResponse.js";
import {
  Type as GetServerTimeRequest,
  encodeBinary as encodeBinary_16,
  decodeBinary as decodeBinary_16,
  encodeJson as encodeJson_16,
} from "../../messages/api/GetServerTimeRequest.js";
import {
  Type as GetServerTimeResponse,
  encodeBinary as encodeBinary_17,
  decodeBinary as decodeBinary_17,
  encodeJson as encodeJson_17,
} from "../../messages/api/GetServerTimeResponse.js";
import {
  Type as GetRecentBlockHashRequest,
  encodeBinary as encodeBinary_18,
  decodeBinary as decodeBinary_18,
  encodeJson as encodeJson_18,
} from "../../messages/api/GetRecentBlockHashRequest.js";
import {
  Type as GetRecentBlockHashResponse,
  encodeBinary as encodeBinary_19,
  decodeBinary as decodeBinary_19,
  encodeJson as encodeJson_19,
} from "../../messages/api/GetRecentBlockHashResponse.js";
import {
  Type as GetAccountBalanceRequest,
  encodeBinary as encodeBinary_20,
  decodeBinary as decodeBinary_20,
  encodeJson as encodeJson_20,
} from "../../messages/api/GetAccountBalanceRequest.js";
import {
  Type as GetAccountBalanceResponse,
  encodeBinary as encodeBinary_21,
  decodeBinary as decodeBinary_21,
  encodeJson as encodeJson_21,
} from "../../messages/api/GetAccountBalanceResponse.js";
import {
  Type as PostOrderRequest,
  encodeBinary as encodeBinary_22,
  decodeBinary as decodeBinary_22,
  encodeJson as encodeJson_22,
} from "../../messages/api/PostOrderRequest.js";
import {
  Type as PostOrderResponse,
  encodeBinary as encodeBinary_23,
  decodeBinary as decodeBinary_23,
  encodeJson as encodeJson_23,
} from "../../messages/api/PostOrderResponse.js";
import {
  Type as PostSubmitRequest,
  encodeBinary as encodeBinary_24,
  decodeBinary as decodeBinary_24,
  encodeJson as encodeJson_24,
} from "../../messages/api/PostSubmitRequest.js";
import {
  Type as PostSubmitResponse,
  encodeBinary as encodeBinary_25,
  decodeBinary as decodeBinary_25,
  encodeJson as encodeJson_25,
} from "../../messages/api/PostSubmitResponse.js";
import {
  Type as PostSubmitBatchRequest,
  encodeBinary as encodeBinary_26,
  decodeBinary as decodeBinary_26,
  encodeJson as encodeJson_26,
} from "../../messages/api/PostSubmitBatchRequest.js";
import {
  Type as PostSubmitBatchResponse,
  encodeBinary as encodeBinary_27,
  decodeBinary as decodeBinary_27,
  encodeJson as encodeJson_27,
} from "../../messages/api/PostSubmitBatchResponse.js";
import {
  Type as PostCancelOrderRequest,
  encodeBinary as encodeBinary_28,
  decodeBinary as decodeBinary_28,
  encodeJson as encodeJson_28,
} from "../../messages/api/PostCancelOrderRequest.js";
import {
  Type as PostCancelOrderResponse,
  encodeBinary as encodeBinary_29,
  decodeBinary as decodeBinary_29,
  encodeJson as encodeJson_29,
} from "../../messages/api/PostCancelOrderResponse.js";
import {
  Type as PostCancelByClientOrderIDRequest,
  encodeBinary as encodeBinary_30,
  decodeBinary as decodeBinary_30,
  encodeJson as encodeJson_30,
} from "../../messages/api/PostCancelByClientOrderIDRequest.js";
import {
  Type as PostCancelAllRequest,
  encodeBinary as encodeBinary_31,
  decodeBinary as decodeBinary_31,
  encodeJson as encodeJson_31,
} from "../../messages/api/PostCancelAllRequest.js";
import {
  Type as PostCancelAllResponse,
  encodeBinary as encodeBinary_32,
  decodeBinary as decodeBinary_32,
  encodeJson as encodeJson_32,
} from "../../messages/api/PostCancelAllResponse.js";
import {
  Type as PostReplaceOrderRequest,
  encodeBinary as encodeBinary_33,
  decodeBinary as decodeBinary_33,
  encodeJson as encodeJson_33,
} from "../../messages/api/PostReplaceOrderRequest.js";
import {
  Type as PostSettleRequest,
  encodeBinary as encodeBinary_34,
  decodeBinary as decodeBinary_34,
  encodeJson as encodeJson_34,
} from "../../messages/api/PostSettleRequest.js";
import {
  Type as PostSettleResponse,
  encodeBinary as encodeBinary_35,
  decodeBinary as decodeBinary_35,
  encodeJson as encodeJson_35,
} from "../../messages/api/PostSettleResponse.js";
import {
  Type as TradeSwapRequest,
  encodeBinary as encodeBinary_36,
  decodeBinary as decodeBinary_36,
  encodeJson as encodeJson_36,
} from "../../messages/api/TradeSwapRequest.js";
import {
  Type as TradeSwapResponse,
  encodeBinary as encodeBinary_37,
  decodeBinary as decodeBinary_37,
  encodeJson as encodeJson_37,
} from "../../messages/api/TradeSwapResponse.js";
import {
  Type as GetOrdersRequest,
  encodeBinary as encodeBinary_38,
  decodeBinary as decodeBinary_38,
  encodeJson as encodeJson_38,
} from "../../messages/api/GetOrdersRequest.js";
import {
  Type as GetOrdersResponse,
  encodeBinary as encodeBinary_39,
  decodeBinary as decodeBinary_39,
  encodeJson as encodeJson_39,
} from "../../messages/api/GetOrdersResponse.js";
import {
  Type as GetOpenOrdersRequest,
  encodeBinary as encodeBinary_40,
  decodeBinary as decodeBinary_40,
  encodeJson as encodeJson_40,
} from "../../messages/api/GetOpenOrdersRequest.js";
import {
  Type as GetOpenOrdersResponse,
  encodeBinary as encodeBinary_41,
  decodeBinary as decodeBinary_41,
  encodeJson as encodeJson_41,
} from "../../messages/api/GetOpenOrdersResponse.js";
import {
  Type as GetOrderByIDRequest,
  encodeBinary as encodeBinary_42,
  decodeBinary as decodeBinary_42,
  encodeJson as encodeJson_42,
} from "../../messages/api/GetOrderByIDRequest.js";
import {
  Type as GetOrderByIDResponse,
  encodeBinary as encodeBinary_43,
  decodeBinary as decodeBinary_43,
  encodeJson as encodeJson_43,
} from "../../messages/api/GetOrderByIDResponse.js";
import {
  Type as GetUnsettledRequest,
  encodeBinary as encodeBinary_44,
  decodeBinary as decodeBinary_44,
  encodeJson as encodeJson_44,
} from "../../messages/api/GetUnsettledRequest.js";
import {
  Type as GetUnsettledResponse,
  encodeBinary as encodeBinary_45,
  decodeBinary as decodeBinary_45,
  encodeJson as encodeJson_45,
} from "../../messages/api/GetUnsettledResponse.js";
import {
  Type as RouteTradeSwapRequest,
  encodeBinary as encodeBinary_46,
  decodeBinary as decodeBinary_46,
  encodeJson as encodeJson_46,
} from "../../messages/api/RouteTradeSwapRequest.js";
import {
  Type as GetOrderbooksRequest,
  encodeBinary as encodeBinary_47,
  decodeBinary as decodeBinary_47,
  encodeJson as encodeJson_47,
} from "../../messages/api/GetOrderbooksRequest.js";
import {
  Type as GetOrderbooksStreamResponse,
  encodeBinary as encodeBinary_48,
  decodeBinary as decodeBinary_48,
  encodeJson as encodeJson_48,
} from "../../messages/api/GetOrderbooksStreamResponse.js";
import {
  Type as GetTickersStreamResponse,
  encodeBinary as encodeBinary_49,
  decodeBinary as decodeBinary_49,
  encodeJson as encodeJson_49,
} from "../../messages/api/GetTickersStreamResponse.js";
import {
  Type as GetMarketDepthStreamResponse,
  encodeBinary as encodeBinary_50,
  decodeBinary as decodeBinary_50,
  encodeJson as encodeJson_50,
} from "../../messages/api/GetMarketDepthStreamResponse.js";
import {
  Type as GetTradesStreamResponse,
  encodeBinary as encodeBinary_51,
  decodeBinary as decodeBinary_51,
  encodeJson as encodeJson_51,
} from "../../messages/api/GetTradesStreamResponse.js";
import {
  Type as GetOrderStatusStreamRequest,
  encodeBinary as encodeBinary_52,
  decodeBinary as decodeBinary_52,
  encodeJson as encodeJson_52,
} from "../../messages/api/GetOrderStatusStreamRequest.js";
import {
  Type as GetOrderStatusStreamResponse,
  encodeBinary as encodeBinary_53,
  decodeBinary as decodeBinary_53,
  encodeJson as encodeJson_53,
} from "../../messages/api/GetOrderStatusStreamResponse.js";
import {
  Type as GetBlockStreamRequest,
  encodeBinary as encodeBinary_54,
  decodeBinary as decodeBinary_54,
  encodeJson as encodeJson_54,
} from "../../messages/api/GetBlockStreamRequest.js";
import {
  Type as GetBlockStreamResponse,
  encodeBinary as encodeBinary_55,
  decodeBinary as decodeBinary_55,
  encodeJson as encodeJson_55,
} from "../../messages/api/GetBlockStreamResponse.js";
import {
  Type as GetQuotesStreamRequest,
  encodeBinary as encodeBinary_56,
  decodeBinary as decodeBinary_56,
  encodeJson as encodeJson_56,
} from "../../messages/api/GetQuotesStreamRequest.js";
import {
  Type as GetQuotesStreamResponse,
  encodeBinary as encodeBinary_57,
  decodeBinary as decodeBinary_57,
  encodeJson as encodeJson_57,
} from "../../messages/api/GetQuotesStreamResponse.js";
import {
  Type as GetPoolReservesStreamRequest,
  encodeBinary as encodeBinary_58,
  decodeBinary as decodeBinary_58,
  encodeJson as encodeJson_58,
} from "../../messages/api/GetPoolReservesStreamRequest.js";
import {
  Type as GetPoolReservesStreamResponse,
  encodeBinary as encodeBinary_59,
  decodeBinary as decodeBinary_59,
  encodeJson as encodeJson_59,
} from "../../messages/api/GetPoolReservesStreamResponse.js";
import {
  Type as GetPricesStreamRequest,
  encodeBinary as encodeBinary_60,
  decodeBinary as decodeBinary_60,
  encodeJson as encodeJson_60,
} from "../../messages/api/GetPricesStreamRequest.js";
import {
  Type as GetPricesStreamResponse,
  encodeBinary as encodeBinary_61,
  decodeBinary as decodeBinary_61,
  encodeJson as encodeJson_61,
} from "../../messages/api/GetPricesStreamResponse.js";
import {
  Type as GetSwapsStreamRequest,
  encodeBinary as encodeBinary_62,
  decodeBinary as decodeBinary_62,
  encodeJson as encodeJson_62,
} from "../../messages/api/GetSwapsStreamRequest.js";
import {
  Type as GetSwapsStreamResponse,
  encodeBinary as encodeBinary_63,
  decodeBinary as decodeBinary_63,
  encodeJson as encodeJson_63,
} from "../../messages/api/GetSwapsStreamResponse.js";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator.js";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools.js";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  getPrice(request: GetPriceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPriceResponse>, TResArgs>;
  getMarkets(request: GetMarketsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetMarketsResponse>, TResArgs>;
  getPools(request: GetPoolsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetPoolsResponse>, TResArgs>;
  getTickers(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTickersResponse>, TResArgs>;
  getKline(request: GetKlineRequest, ...args: TReqArgs): RpcReturnType<Promise<GetKlineResponse>, TResArgs>;
  getOrderbook(request: GetOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderbookResponse>, TResArgs>;
  getTrades(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTradesResponse>, TResArgs>;
  getQuotes(request: GetQuotesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetQuotesResponse>, TResArgs>;
  getServerTime(request: GetServerTimeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetServerTimeResponse>, TResArgs>;
  getRecentBlockHash(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRecentBlockHashResponse>, TResArgs>;
  getAccountBalance(request: GetAccountBalanceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetAccountBalanceResponse>, TResArgs>;
  postOrder(request: PostOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSubmit(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postSubmitBatch(request: PostSubmitBatchRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitBatchResponse>, TResArgs>;
  postCancelOrder(request: PostCancelOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelAll(request: PostCancelAllRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelAllResponse>, TResArgs>;
  postReplaceByClientOrderID(request: PostOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postReplaceOrder(request: PostReplaceOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSettle(request: PostSettleRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSettleResponse>, TResArgs>;
  postTradeSwap(request: TradeSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<TradeSwapResponse>, TResArgs>;
  getOrders(request: GetOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrdersResponse>, TResArgs>;
  getOpenOrders(request: GetOpenOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOpenOrdersResponse>, TResArgs>;
  getOrderByID(request: GetOrderByIDRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderByIDResponse>, TResArgs>;
  getUnsettled(request: GetUnsettledRequest, ...args: TReqArgs): RpcReturnType<Promise<GetUnsettledResponse>, TResArgs>;
  postRouteTradeSwap(request: RouteTradeSwapRequest, ...args: TReqArgs): RpcReturnType<Promise<TradeSwapResponse>, TResArgs>;
  getOrderbooksStream(request: GetOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderbooksStreamResponse>, TResArgs>;
  getTickersStream(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTickersStreamResponse>, TResArgs>;
  getMarketDepthStream(request: GetMarketsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetMarketDepthStreamResponse>, TResArgs>;
  getTradesStream(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTradesStreamResponse>, TResArgs>;
  getOrderStatusStream(request: GetOrderStatusStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderStatusStreamResponse>, TResArgs>;
  getRecentBlockHashStream(request: GetRecentBlockHashRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetRecentBlockHashResponse>, TResArgs>;
  getBlockStream(request: GetBlockStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetBlockStreamResponse>, TResArgs>;
  getQuotesStream(request: GetQuotesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetQuotesStreamResponse>, TResArgs>;
  getPoolReservesStream(request: GetPoolReservesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPoolReservesStreamResponse>, TResArgs>;
  getPricesStream(request: GetPricesStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetPricesStreamResponse>, TResArgs>;
  getSwapsStream(request: GetSwapsStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetSwapsStreamResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  getPrice: {
    methodName: "GetPrice",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GetPriceRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: GetPriceResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  getMarkets: {
    methodName: "GetMarkets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetMarketsRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: GetMarketsResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  getPools: {
    methodName: "GetPools",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: GetPoolsRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: GetPoolsResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getTickers: {
    methodName: "GetTickers",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: GetTickersResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  getKline: {
    methodName: "GetKline",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: GetKlineRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: GetKlineResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  getOrderbook: {
    methodName: "GetOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: GetOrderbookRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: GetOrderbookResponse) => JSON.stringify(encodeJson_11(value)),
    },
  },
  getTrades: {
    methodName: "GetTrades",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: GetTradesResponse) => JSON.stringify(encodeJson_13(value)),
    },
  },
  getQuotes: {
    methodName: "GetQuotes",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: GetQuotesRequest) => JSON.stringify(encodeJson_14(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: GetQuotesResponse) => JSON.stringify(encodeJson_15(value)),
    },
  },
  getServerTime: {
    methodName: "GetServerTime",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_16,
      deserializeBinary: decodeBinary_16,
      serializeJson: (value: GetServerTimeRequest) => JSON.stringify(encodeJson_16(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_17,
      deserializeBinary: decodeBinary_17,
      serializeJson: (value: GetServerTimeResponse) => JSON.stringify(encodeJson_17(value)),
    },
  },
  getRecentBlockHash: {
    methodName: "GetRecentBlockHash",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_18(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  getAccountBalance: {
    methodName: "GetAccountBalance",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_20,
      deserializeBinary: decodeBinary_20,
      serializeJson: (value: GetAccountBalanceRequest) => JSON.stringify(encodeJson_20(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_21,
      deserializeBinary: decodeBinary_21,
      serializeJson: (value: GetAccountBalanceResponse) => JSON.stringify(encodeJson_21(value)),
    },
  },
  postOrder: {
    methodName: "PostOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: PostOrderRequest) => JSON.stringify(encodeJson_22(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_23(value)),
    },
  },
  postSubmit: {
    methodName: "PostSubmit",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_24,
      deserializeBinary: decodeBinary_24,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_24(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_25(value)),
    },
  },
  postSubmitBatch: {
    methodName: "PostSubmitBatch",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: PostSubmitBatchRequest) => JSON.stringify(encodeJson_26(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: PostSubmitBatchResponse) => JSON.stringify(encodeJson_27(value)),
    },
  },
  postCancelOrder: {
    methodName: "PostCancelOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: PostCancelOrderRequest) => JSON.stringify(encodeJson_28(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_29(value)),
    },
  },
  postCancelByClientOrderID: {
    methodName: "PostCancelByClientOrderID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_30,
      deserializeBinary: decodeBinary_30,
      serializeJson: (value: PostCancelByClientOrderIDRequest) => JSON.stringify(encodeJson_30(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_29(value)),
    },
  },
  postCancelAll: {
    methodName: "PostCancelAll",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_31,
      deserializeBinary: decodeBinary_31,
      serializeJson: (value: PostCancelAllRequest) => JSON.stringify(encodeJson_31(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_32,
      deserializeBinary: decodeBinary_32,
      serializeJson: (value: PostCancelAllResponse) => JSON.stringify(encodeJson_32(value)),
    },
  },
  postReplaceByClientOrderID: {
    methodName: "PostReplaceByClientOrderID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: PostOrderRequest) => JSON.stringify(encodeJson_22(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_23(value)),
    },
  },
  postReplaceOrder: {
    methodName: "PostReplaceOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: PostReplaceOrderRequest) => JSON.stringify(encodeJson_33(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_23(value)),
    },
  },
  postSettle: {
    methodName: "PostSettle",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_34,
      deserializeBinary: decodeBinary_34,
      serializeJson: (value: PostSettleRequest) => JSON.stringify(encodeJson_34(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_35,
      deserializeBinary: decodeBinary_35,
      serializeJson: (value: PostSettleResponse) => JSON.stringify(encodeJson_35(value)),
    },
  },
  postTradeSwap: {
    methodName: "PostTradeSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_36,
      deserializeBinary: decodeBinary_36,
      serializeJson: (value: TradeSwapRequest) => JSON.stringify(encodeJson_36(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: TradeSwapResponse) => JSON.stringify(encodeJson_37(value)),
    },
  },
  getOrders: {
    methodName: "GetOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_38,
      deserializeBinary: decodeBinary_38,
      serializeJson: (value: GetOrdersRequest) => JSON.stringify(encodeJson_38(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_39,
      deserializeBinary: decodeBinary_39,
      serializeJson: (value: GetOrdersResponse) => JSON.stringify(encodeJson_39(value)),
    },
  },
  getOpenOrders: {
    methodName: "GetOpenOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_40,
      deserializeBinary: decodeBinary_40,
      serializeJson: (value: GetOpenOrdersRequest) => JSON.stringify(encodeJson_40(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_41,
      deserializeBinary: decodeBinary_41,
      serializeJson: (value: GetOpenOrdersResponse) => JSON.stringify(encodeJson_41(value)),
    },
  },
  getOrderByID: {
    methodName: "GetOrderByID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_42,
      deserializeBinary: decodeBinary_42,
      serializeJson: (value: GetOrderByIDRequest) => JSON.stringify(encodeJson_42(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_43,
      deserializeBinary: decodeBinary_43,
      serializeJson: (value: GetOrderByIDResponse) => JSON.stringify(encodeJson_43(value)),
    },
  },
  getUnsettled: {
    methodName: "GetUnsettled",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_44,
      deserializeBinary: decodeBinary_44,
      serializeJson: (value: GetUnsettledRequest) => JSON.stringify(encodeJson_44(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_45,
      deserializeBinary: decodeBinary_45,
      serializeJson: (value: GetUnsettledResponse) => JSON.stringify(encodeJson_45(value)),
    },
  },
  postRouteTradeSwap: {
    methodName: "PostRouteTradeSwap",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_46,
      deserializeBinary: decodeBinary_46,
      serializeJson: (value: RouteTradeSwapRequest) => JSON.stringify(encodeJson_46(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: TradeSwapResponse) => JSON.stringify(encodeJson_37(value)),
    },
  },
  getOrderbooksStream: {
    methodName: "GetOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_47,
      deserializeBinary: decodeBinary_47,
      serializeJson: (value: GetOrderbooksRequest) => JSON.stringify(encodeJson_47(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_48,
      deserializeBinary: decodeBinary_48,
      serializeJson: (value: GetOrderbooksStreamResponse) => JSON.stringify(encodeJson_48(value)),
    },
  },
  getTickersStream: {
    methodName: "GetTickersStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_49,
      deserializeBinary: decodeBinary_49,
      serializeJson: (value: GetTickersStreamResponse) => JSON.stringify(encodeJson_49(value)),
    },
  },
  getMarketDepthStream: {
    methodName: "GetMarketDepthStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetMarketsRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_50,
      deserializeBinary: decodeBinary_50,
      serializeJson: (value: GetMarketDepthStreamResponse) => JSON.stringify(encodeJson_50(value)),
    },
  },
  getTradesStream: {
    methodName: "GetTradesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_51,
      deserializeBinary: decodeBinary_51,
      serializeJson: (value: GetTradesStreamResponse) => JSON.stringify(encodeJson_51(value)),
    },
  },
  getOrderStatusStream: {
    methodName: "GetOrderStatusStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_52,
      deserializeBinary: decodeBinary_52,
      serializeJson: (value: GetOrderStatusStreamRequest) => JSON.stringify(encodeJson_52(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_53,
      deserializeBinary: decodeBinary_53,
      serializeJson: (value: GetOrderStatusStreamResponse) => JSON.stringify(encodeJson_53(value)),
    },
  },
  getRecentBlockHashStream: {
    methodName: "GetRecentBlockHashStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: GetRecentBlockHashRequest) => JSON.stringify(encodeJson_18(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: GetRecentBlockHashResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  getBlockStream: {
    methodName: "GetBlockStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_54,
      deserializeBinary: decodeBinary_54,
      serializeJson: (value: GetBlockStreamRequest) => JSON.stringify(encodeJson_54(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_55,
      deserializeBinary: decodeBinary_55,
      serializeJson: (value: GetBlockStreamResponse) => JSON.stringify(encodeJson_55(value)),
    },
  },
  getQuotesStream: {
    methodName: "GetQuotesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_56,
      deserializeBinary: decodeBinary_56,
      serializeJson: (value: GetQuotesStreamRequest) => JSON.stringify(encodeJson_56(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_57,
      deserializeBinary: decodeBinary_57,
      serializeJson: (value: GetQuotesStreamResponse) => JSON.stringify(encodeJson_57(value)),
    },
  },
  getPoolReservesStream: {
    methodName: "GetPoolReservesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_58,
      deserializeBinary: decodeBinary_58,
      serializeJson: (value: GetPoolReservesStreamRequest) => JSON.stringify(encodeJson_58(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_59,
      deserializeBinary: decodeBinary_59,
      serializeJson: (value: GetPoolReservesStreamResponse) => JSON.stringify(encodeJson_59(value)),
    },
  },
  getPricesStream: {
    methodName: "GetPricesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_60,
      deserializeBinary: decodeBinary_60,
      serializeJson: (value: GetPricesStreamRequest) => JSON.stringify(encodeJson_60(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_61,
      deserializeBinary: decodeBinary_61,
      serializeJson: (value: GetPricesStreamResponse) => JSON.stringify(encodeJson_61(value)),
    },
  },
  getSwapsStream: {
    methodName: "GetSwapsStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_62,
      deserializeBinary: decodeBinary_62,
      serializeJson: (value: GetSwapsStreamRequest) => JSON.stringify(encodeJson_62(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_63,
      deserializeBinary: decodeBinary_63,
      serializeJson: (value: GetSwapsStreamResponse) => JSON.stringify(encodeJson_63(value)),
    },
  },
} as const;

export class RpcError<TTrailer = any> extends Error {
  constructor(public trailer: TTrailer) { super(); }
}
export interface CreateServiceClientConfig {
  responseOnly?: boolean;
  devtools?: true | { tags: string[] };
}
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: undefined
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly: false }
): Service<[] | [TMetadata], [THeader, Promise<TTrailer>]>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config: CreateServiceClientConfig & { responseOnly?: true }
): Service<[] | [TMetadata], []>;
export function createServiceClient<TMetadata, THeader, TTrailer>(
  rpcClientImpl: RpcClientImpl<TMetadata, THeader, TTrailer>,
  config?: CreateServiceClientConfig
): Service<[] | [TMetadata], [] | [THeader, Promise<TTrailer>]> {
  let _rpcClientImpl = rpcClientImpl;
  const responseOnly = config?.responseOnly ?? true;
  const devtools = config?.devtools ?? false;
  if (devtools) {
    const tags = devtools === true ? [] : devtools.tags;
    const devtoolsConfig = getDevtoolsConfig();
    _rpcClientImpl = wrapRpcClientImpl({ rpcClientImpl, devtoolsConfig, tags });
  }
  return Object.fromEntries(Object.entries(methodDescriptors).map(
    ([camelRpcName, methodDescriptor]) => {
      const { requestStream, responseStream } = methodDescriptor;
      const rpcMethodImpl = _rpcClientImpl(methodDescriptor as MethodDescriptor<any, any>);
      const rpcMethodHandler = async (request: any, metadata?: any) => {
        const reqAsyncGenerator = requestStream ? request : fromSingle(request);
        const rpcMethodResult = rpcMethodImpl(reqAsyncGenerator, metadata);
        const resAsyncGenerator = rpcMethodResult[0];
        const headerPromise = rpcMethodResult[1];
        const trailerPromise = rpcMethodResult[2];
        const [header, response] = await Promise.all([
          getHeaderBeforeTrailer(headerPromise, trailerPromise),
          responseStream ? resAsyncGenerator : first(resAsyncGenerator),
        ]);
        return responseOnly ? response : [response, header, trailerPromise];
      };
      return [camelRpcName, rpcMethodHandler];
    }
  )) as unknown as Service;
}
function getHeaderBeforeTrailer<THeader, TTrailer>(
  headerPromise: Promise<THeader>,
  trailerPromise: Promise<TTrailer>
): Promise<THeader> {
  return Promise.race([
    headerPromise,
    trailerPromise.then(trailer => { throw new RpcError(trailer); }),
  ]);
}
