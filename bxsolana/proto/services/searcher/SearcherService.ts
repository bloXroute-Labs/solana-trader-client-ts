import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc";
import {
  Type as SubscribeBundleResultsRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/searcher/SubscribeBundleResultsRequest";
import {
  Type as BundleResult,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/bundle/BundleResult";
import {
  Type as MempoolSubscription,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/searcher/MempoolSubscription";
import {
  Type as PendingTxNotification,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/searcher/PendingTxNotification";
import {
  Type as SendBundleRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/searcher/SendBundleRequest";
import {
  Type as SendBundleResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/searcher/SendBundleResponse";
import {
  Type as NextScheduledLeaderRequest,
  encodeBinary as encodeBinary_6,
  decodeBinary as decodeBinary_6,
  encodeJson as encodeJson_6,
} from "../../messages/searcher/NextScheduledLeaderRequest";
import {
  Type as NextScheduledLeaderResponse,
  encodeBinary as encodeBinary_7,
  decodeBinary as decodeBinary_7,
  encodeJson as encodeJson_7,
} from "../../messages/searcher/NextScheduledLeaderResponse";
import {
  Type as ConnectedLeadersRequest,
  encodeBinary as encodeBinary_8,
  decodeBinary as decodeBinary_8,
  encodeJson as encodeJson_8,
} from "../../messages/searcher/ConnectedLeadersRequest";
import {
  Type as ConnectedLeadersResponse,
  encodeBinary as encodeBinary_9,
  decodeBinary as decodeBinary_9,
  encodeJson as encodeJson_9,
} from "../../messages/searcher/ConnectedLeadersResponse";
import {
  Type as ConnectedLeadersRegionedRequest,
  encodeBinary as encodeBinary_10,
  decodeBinary as decodeBinary_10,
  encodeJson as encodeJson_10,
} from "../../messages/searcher/ConnectedLeadersRegionedRequest";
import {
  Type as ConnectedLeadersRegionedResponse,
  encodeBinary as encodeBinary_11,
  decodeBinary as decodeBinary_11,
  encodeJson as encodeJson_11,
} from "../../messages/searcher/ConnectedLeadersRegionedResponse";
import {
  Type as GetTipAccountsRequest,
  encodeBinary as encodeBinary_12,
  decodeBinary as decodeBinary_12,
  encodeJson as encodeJson_12,
} from "../../messages/searcher/GetTipAccountsRequest";
import {
  Type as GetTipAccountsResponse,
  encodeBinary as encodeBinary_13,
  decodeBinary as decodeBinary_13,
  encodeJson as encodeJson_13,
} from "../../messages/searcher/GetTipAccountsResponse";
import {
  Type as GetRegionsRequest,
  encodeBinary as encodeBinary_14,
  decodeBinary as decodeBinary_14,
  encodeJson as encodeJson_14,
} from "../../messages/searcher/GetRegionsRequest";
import {
  Type as GetRegionsResponse,
  encodeBinary as encodeBinary_15,
  decodeBinary as decodeBinary_15,
  encodeJson as encodeJson_15,
} from "../../messages/searcher/GetRegionsResponse";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  subscribeBundleResults(request: SubscribeBundleResultsRequest, ...args: TReqArgs): RpcReturnType<AsyncGenerator<BundleResult>, TResArgs>;
  subscribeMempool(request: MempoolSubscription, ...args: TReqArgs): RpcReturnType<AsyncGenerator<PendingTxNotification>, TResArgs>;
  sendBundle(request: SendBundleRequest, ...args: TReqArgs): RpcReturnType<Promise<SendBundleResponse>, TResArgs>;
  getNextScheduledLeader(request: NextScheduledLeaderRequest, ...args: TReqArgs): RpcReturnType<Promise<NextScheduledLeaderResponse>, TResArgs>;
  getConnectedLeaders(request: ConnectedLeadersRequest, ...args: TReqArgs): RpcReturnType<Promise<ConnectedLeadersResponse>, TResArgs>;
  getConnectedLeadersRegioned(request: ConnectedLeadersRegionedRequest, ...args: TReqArgs): RpcReturnType<Promise<ConnectedLeadersRegionedResponse>, TResArgs>;
  getTipAccounts(request: GetTipAccountsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetTipAccountsResponse>, TResArgs>;
  getRegions(request: GetRegionsRequest, ...args: TReqArgs): RpcReturnType<Promise<GetRegionsResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  subscribeBundleResults: {
    methodName: "SubscribeBundleResults",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: SubscribeBundleResultsRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: BundleResult) => JSON.stringify(encodeJson_1(value)),
    },
  },
  subscribeMempool: {
    methodName: "SubscribeMempool",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: true,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: MempoolSubscription) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: PendingTxNotification) => JSON.stringify(encodeJson_3(value)),
    },
  },
  sendBundle: {
    methodName: "SendBundle",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: SendBundleRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: SendBundleResponse) => JSON.stringify(encodeJson_5(value)),
    },
  },
  getNextScheduledLeader: {
    methodName: "GetNextScheduledLeader",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_6,
      deserializeBinary: decodeBinary_6,
      serializeJson: (value: NextScheduledLeaderRequest) => JSON.stringify(encodeJson_6(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_7,
      deserializeBinary: decodeBinary_7,
      serializeJson: (value: NextScheduledLeaderResponse) => JSON.stringify(encodeJson_7(value)),
    },
  },
  getConnectedLeaders: {
    methodName: "GetConnectedLeaders",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_8,
      deserializeBinary: decodeBinary_8,
      serializeJson: (value: ConnectedLeadersRequest) => JSON.stringify(encodeJson_8(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_9,
      deserializeBinary: decodeBinary_9,
      serializeJson: (value: ConnectedLeadersResponse) => JSON.stringify(encodeJson_9(value)),
    },
  },
  getConnectedLeadersRegioned: {
    methodName: "GetConnectedLeadersRegioned",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_10,
      deserializeBinary: decodeBinary_10,
      serializeJson: (value: ConnectedLeadersRegionedRequest) => JSON.stringify(encodeJson_10(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_11,
      deserializeBinary: decodeBinary_11,
      serializeJson: (value: ConnectedLeadersRegionedResponse) => JSON.stringify(encodeJson_11(value)),
    },
  },
  getTipAccounts: {
    methodName: "GetTipAccounts",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_12,
      deserializeBinary: decodeBinary_12,
      serializeJson: (value: GetTipAccountsRequest) => JSON.stringify(encodeJson_12(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_13,
      deserializeBinary: decodeBinary_13,
      serializeJson: (value: GetTipAccountsResponse) => JSON.stringify(encodeJson_13(value)),
    },
  },
  getRegions: {
    methodName: "GetRegions",
    service: { serviceName: "searcher.SearcherService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_14,
      deserializeBinary: decodeBinary_14,
      serializeJson: (value: GetRegionsRequest) => JSON.stringify(encodeJson_14(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_15,
      deserializeBinary: decodeBinary_15,
      serializeJson: (value: GetRegionsResponse) => JSON.stringify(encodeJson_15(value)),
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
