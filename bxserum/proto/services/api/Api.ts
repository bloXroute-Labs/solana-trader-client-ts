import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc.js";
import {
  Type as GetMarketsRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/api/GetMarketsRequest.js";
import {
  Type as GetMarketsResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/api/GetMarketsResponse.js";
import {
  Type as GetTickersRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/api/GetTickersRequest.js";
import {
  Type as GetTickersResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/api/GetTickersResponse.js";
import {
  Type as GetKlineRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/api/GetKlineRequest.js";
import {
  Type as GetKlineResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/api/GetKlineResponse.js";
import {
  Type as GetOrderbookRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/api/GetOrderbookRequest.js";
import {
  Type as GetOrderbookResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/api/GetOrderbookResponse.js";
import {
  Type as GetTradesRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/api/GetTradesRequest.js";
import {
  Type as GetTradesResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/api/GetTradesResponse.js";
import {
  Type as GetServerTimeRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/api/GetServerTimeRequest.js";
import {
  Type as GetServerTimeResponse,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/api/GetServerTimeResponse.js";
import {
  Type as GetAccountBalanceRequest,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/api/GetAccountBalanceRequest.js";
import {
  Type as GetAccountBalanceResponse,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/api/GetAccountBalanceResponse.js";
import {
  Type as PostOrderRequest,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/api/PostOrderRequest.js";
import {
  Type as PostOrderResponse,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/api/PostOrderResponse.js";
import {
  Type as PostSubmitRequest,
  encodeBinary as encodeBinary_16,
  decodeBinary as decodeBinary_16,
  encodeJson as encodeJson_16,
} from "../../messages/api/PostSubmitRequest.js";
import {
  Type as PostSubmitResponse,
  encodeBinary as encodeBinary_17,
  decodeBinary as decodeBinary_17,
  encodeJson as encodeJson_17,
} from "../../messages/api/PostSubmitResponse.js";
import {
  Type as PostCancelOrderRequest,
  encodeBinary as encodeBinary_18,
  decodeBinary as decodeBinary_18,
  encodeJson as encodeJson_18,
} from "../../messages/api/PostCancelOrderRequest.js";
import {
  Type as PostCancelOrderResponse,
  encodeBinary as encodeBinary_19,
  decodeBinary as decodeBinary_19,
  encodeJson as encodeJson_19,
} from "../../messages/api/PostCancelOrderResponse.js";
import {
  Type as PostCancelByClientOrderIDRequest,
  encodeBinary as encodeBinary_20,
  decodeBinary as decodeBinary_20,
  encodeJson as encodeJson_20,
} from "../../messages/api/PostCancelByClientOrderIDRequest.js";
import {
  Type as PostCancelAllRequest,
  encodeBinary as encodeBinary_21,
  decodeBinary as decodeBinary_21,
  encodeJson as encodeJson_21,
} from "../../messages/api/PostCancelAllRequest.js";
import {
  Type as PostCancelAllResponse,
  encodeBinary as encodeBinary_22,
  decodeBinary as decodeBinary_22,
  encodeJson as encodeJson_22,
} from "../../messages/api/PostCancelAllResponse.js";
import {
  Type as PostSettleRequest,
  encodeBinary as encodeBinary_23,
  decodeBinary as decodeBinary_23,
  encodeJson as encodeJson_23,
} from "../../messages/api/PostSettleRequest.js";
import {
  Type as PostSettleResponse,
  encodeBinary as encodeBinary_24,
  decodeBinary as decodeBinary_24,
  encodeJson as encodeJson_24,
} from "../../messages/api/PostSettleResponse.js";
import {
  Type as GetOrdersRequest,
  encodeBinary as encodeBinary_25,
  decodeBinary as decodeBinary_25,
  encodeJson as encodeJson_25,
} from "../../messages/api/GetOrdersRequest.js";
import {
  Type as GetOrdersResponse,
  encodeBinary as encodeBinary_26,
  decodeBinary as decodeBinary_26,
  encodeJson as encodeJson_26,
} from "../../messages/api/GetOrdersResponse.js";
import {
  Type as GetOpenOrdersRequest,
  encodeBinary as encodeBinary_27,
  decodeBinary as decodeBinary_27,
  encodeJson as encodeJson_27,
} from "../../messages/api/GetOpenOrdersRequest.js";
import {
  Type as GetOpenOrdersResponse,
  encodeBinary as encodeBinary_28,
  decodeBinary as decodeBinary_28,
  encodeJson as encodeJson_28,
} from "../../messages/api/GetOpenOrdersResponse.js";
import {
  Type as GetOrderByIDRequest,
  encodeBinary as encodeBinary_29,
  decodeBinary as decodeBinary_29,
  encodeJson as encodeJson_29,
} from "../../messages/api/GetOrderByIDRequest.js";
import {
  Type as GetOrderByIDResponse,
  encodeBinary as encodeBinary_30,
  decodeBinary as decodeBinary_30,
  encodeJson as encodeJson_30,
} from "../../messages/api/GetOrderByIDResponse.js";
import {
  Type as GetUnsettledRequest,
  encodeBinary as encodeBinary_31,
  decodeBinary as decodeBinary_31,
  encodeJson as encodeJson_31,
} from "../../messages/api/GetUnsettledRequest.js";
import {
  Type as GetUnsettledResponse,
  encodeBinary as encodeBinary_32,
  decodeBinary as decodeBinary_32,
  encodeJson as encodeJson_32,
} from "../../messages/api/GetUnsettledResponse.js";
import {
  Type as GetOrderbooksRequest,
  encodeBinary as encodeBinary_33,
  decodeBinary as decodeBinary_33,
  encodeJson as encodeJson_33,
} from "../../messages/api/GetOrderbooksRequest.js";
import {
  Type as GetOrderbooksStreamResponse,
  encodeBinary as encodeBinary_34,
  decodeBinary as decodeBinary_34,
  encodeJson as encodeJson_34,
} from "../../messages/api/GetOrderbooksStreamResponse.js";
import {
  Type as GetTickersStreamResponse,
  encodeBinary as encodeBinary_35,
  decodeBinary as decodeBinary_35,
  encodeJson as encodeJson_35,
} from "../../messages/api/GetTickersStreamResponse.js";
import {
  Type as GetMarketDepthStreamResponse,
  encodeBinary as encodeBinary_36,
  decodeBinary as decodeBinary_36,
  encodeJson as encodeJson_36,
} from "../../messages/api/GetMarketDepthStreamResponse.js";
import {
  Type as GetTradesStreamResponse,
  encodeBinary as encodeBinary_37,
  decodeBinary as decodeBinary_37,
  encodeJson as encodeJson_37,
} from "../../messages/api/GetTradesStreamResponse.js";
import {
  Type as GetOrderStatusStreamRequest,
  encodeBinary as encodeBinary_38,
  decodeBinary as decodeBinary_38,
  encodeJson as encodeJson_38,
} from "../../messages/api/GetOrderStatusStreamRequest.js";
import {
  Type as GetOrderStatusStreamResponse,
  encodeBinary as encodeBinary_39,
  decodeBinary as decodeBinary_39,
  encodeJson as encodeJson_39,
} from "../../messages/api/GetOrderStatusStreamResponse.js";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator.js";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools.js";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  getMarkets(request: GetMarketsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetMarketsResponse>, TResArgs>;
  getTickers(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTickersResponse>, TResArgs>;
  getKline(request: GetKlineRequest, ...args: TReqArgs): RpcReturnType<Promise<GetKlineResponse>, TResArgs>;
  getOrderbook(request: GetOrderbookRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderbookResponse>, TResArgs>;
  getTrades(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTradesResponse>, TResArgs>;
  getServerTime(request: GetServerTimeRequest, ...args: TReqArgs): RpcReturnType<Promise<GetServerTimeResponse>, TResArgs>;
  getAccountBalance(request: GetAccountBalanceRequest, ...args: TReqArgs): RpcReturnType<Promise<GetAccountBalanceResponse>, TResArgs>;
  postOrder(request: PostOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostOrderResponse>, TResArgs>;
  postSubmit(request: PostSubmitRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSubmitResponse>, TResArgs>;
  postCancelOrder(request: PostCancelOrderRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelByClientOrderID(request: PostCancelByClientOrderIDRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelOrderResponse>, TResArgs>;
  postCancelAll(request: PostCancelAllRequest, ...args: TReqArgs): RpcReturnType<Promise<PostCancelAllResponse>, TResArgs>;
  postSettle(request: PostSettleRequest, ...args: TReqArgs): RpcReturnType<Promise<PostSettleResponse>, TResArgs>;
  getOrders(request: GetOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrdersResponse>, TResArgs>;
  getOpenOrders(request: GetOpenOrdersRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOpenOrdersResponse>, TResArgs>;
  getOrderByID(request: GetOrderByIDRequest, ...args: TReqArgs): RpcReturnType<Promise<GetOrderByIDResponse>, TResArgs>;
  getUnsettled(request: GetUnsettledRequest, ...args: TReqArgs): RpcReturnType<Promise<GetUnsettledResponse>, TResArgs>;
  getOrderbooksStream(request: GetOrderbooksRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderbooksStreamResponse>, TResArgs>;
  getTickersStream(request: GetTickersRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTickersStreamResponse>, TResArgs>;
  getMarketDepthStream(request: GetMarketsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetMarketDepthStreamResponse>, TResArgs>;
  getTradesStream(request: GetTradesRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetTradesStreamResponse>, TResArgs>;
  getOrderStatusStream(request: GetOrderStatusStreamRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<GetOrderStatusStreamResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  getMarkets: {
    methodName: "GetMarkets",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GetMarketsRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: GetMarketsResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  getTickers: {
    methodName: "GetTickers",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: GetTickersResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  getKline: {
    methodName: "GetKline",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: GetKlineRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: GetKlineResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getOrderbook: {
    methodName: "GetOrderbook",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: GetOrderbookRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: GetOrderbookResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  getTrades: {
    methodName: "GetTrades",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: GetTradesResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  getServerTime: {
    methodName: "GetServerTime",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: GetServerTimeRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: GetServerTimeResponse) => JSON.stringify(encodeJson_11(value)),
    },
  },
  getAccountBalance: {
    methodName: "GetAccountBalance",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: GetAccountBalanceRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: GetAccountBalanceResponse) => JSON.stringify(encodeJson_13(value)),
    },
  },
  postOrder: {
    methodName: "PostOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: PostOrderRequest) => JSON.stringify(encodeJson_14(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: PostOrderResponse) => JSON.stringify(encodeJson_15(value)),
    },
  },
  postSubmit: {
    methodName: "PostSubmit",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_16,
      deserializeBinary: decodeBinary_16,
      serializeJson: (value: PostSubmitRequest) => JSON.stringify(encodeJson_16(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_17,
      deserializeBinary: decodeBinary_17,
      serializeJson: (value: PostSubmitResponse) => JSON.stringify(encodeJson_17(value)),
    },
  },
  postCancelOrder: {
    methodName: "PostCancelOrder",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_18,
      deserializeBinary: decodeBinary_18,
      serializeJson: (value: PostCancelOrderRequest) => JSON.stringify(encodeJson_18(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  postCancelByClientOrderID: {
    methodName: "PostCancelByClientOrderID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_20,
      deserializeBinary: decodeBinary_20,
      serializeJson: (value: PostCancelByClientOrderIDRequest) => JSON.stringify(encodeJson_20(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_19,
      deserializeBinary: decodeBinary_19,
      serializeJson: (value: PostCancelOrderResponse) => JSON.stringify(encodeJson_19(value)),
    },
  },
  postCancelAll: {
    methodName: "PostCancelAll",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_21,
      deserializeBinary: decodeBinary_21,
      serializeJson: (value: PostCancelAllRequest) => JSON.stringify(encodeJson_21(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_22,
      deserializeBinary: decodeBinary_22,
      serializeJson: (value: PostCancelAllResponse) => JSON.stringify(encodeJson_22(value)),
    },
  },
  postSettle: {
    methodName: "PostSettle",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_23,
      deserializeBinary: decodeBinary_23,
      serializeJson: (value: PostSettleRequest) => JSON.stringify(encodeJson_23(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_24,
      deserializeBinary: decodeBinary_24,
      serializeJson: (value: PostSettleResponse) => JSON.stringify(encodeJson_24(value)),
    },
  },
  getOrders: {
    methodName: "GetOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_25,
      deserializeBinary: decodeBinary_25,
      serializeJson: (value: GetOrdersRequest) => JSON.stringify(encodeJson_25(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_26,
      deserializeBinary: decodeBinary_26,
      serializeJson: (value: GetOrdersResponse) => JSON.stringify(encodeJson_26(value)),
    },
  },
  getOpenOrders: {
    methodName: "GetOpenOrders",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_27,
      deserializeBinary: decodeBinary_27,
      serializeJson: (value: GetOpenOrdersRequest) => JSON.stringify(encodeJson_27(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_28,
      deserializeBinary: decodeBinary_28,
      serializeJson: (value: GetOpenOrdersResponse) => JSON.stringify(encodeJson_28(value)),
    },
  },
  getOrderByID: {
    methodName: "GetOrderByID",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_29,
      deserializeBinary: decodeBinary_29,
      serializeJson: (value: GetOrderByIDRequest) => JSON.stringify(encodeJson_29(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_30,
      deserializeBinary: decodeBinary_30,
      serializeJson: (value: GetOrderByIDResponse) => JSON.stringify(encodeJson_30(value)),
    },
  },
  getUnsettled: {
    methodName: "GetUnsettled",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_31,
      deserializeBinary: decodeBinary_31,
      serializeJson: (value: GetUnsettledRequest) => JSON.stringify(encodeJson_31(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_32,
      deserializeBinary: decodeBinary_32,
      serializeJson: (value: GetUnsettledResponse) => JSON.stringify(encodeJson_32(value)),
    },
  },
  getOrderbooksStream: {
    methodName: "GetOrderbooksStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_33,
      deserializeBinary: decodeBinary_33,
      serializeJson: (value: GetOrderbooksRequest) => JSON.stringify(encodeJson_33(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_34,
      deserializeBinary: decodeBinary_34,
      serializeJson: (value: GetOrderbooksStreamResponse) => JSON.stringify(encodeJson_34(value)),
    },
  },
  getTickersStream: {
    methodName: "GetTickersStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GetTickersRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_35,
      deserializeBinary: decodeBinary_35,
      serializeJson: (value: GetTickersStreamResponse) => JSON.stringify(encodeJson_35(value)),
    },
  },
  getMarketDepthStream: {
    methodName: "GetMarketDepthStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GetMarketsRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_36,
      deserializeBinary: decodeBinary_36,
      serializeJson: (value: GetMarketDepthStreamResponse) => JSON.stringify(encodeJson_36(value)),
    },
  },
  getTradesStream: {
    methodName: "GetTradesStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: GetTradesRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_37,
      deserializeBinary: decodeBinary_37,
      serializeJson: (value: GetTradesStreamResponse) => JSON.stringify(encodeJson_37(value)),
    },
  },
  getOrderStatusStream: {
    methodName: "GetOrderStatusStream",
    service: { serviceName: "api.Api" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_38,
      deserializeBinary: decodeBinary_38,
      serializeJson: (value: GetOrderStatusStreamRequest) => JSON.stringify(encodeJson_38(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_39,
      deserializeBinary: decodeBinary_39,
      serializeJson: (value: GetOrderStatusStreamResponse) => JSON.stringify(encodeJson_39(value)),
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
