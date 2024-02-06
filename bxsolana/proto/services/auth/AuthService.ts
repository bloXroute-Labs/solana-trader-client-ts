import {
  RpcReturnType,
  RpcClientImpl,
  MethodDescriptor,
} from "../../runtime/rpc";
import {
  Type as GenerateAuthChallengeRequest,
  encodeBinary,
  decodeBinary,
  encodeJson,
} from "../../messages/auth/GenerateAuthChallengeRequest";
import {
  Type as GenerateAuthChallengeResponse,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
  encodeJson as encodeJson_1,
} from "../../messages/auth/GenerateAuthChallengeResponse";
import {
  Type as GenerateAuthTokensRequest,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
  encodeJson as encodeJson_2,
} from "../../messages/auth/GenerateAuthTokensRequest";
import {
  Type as GenerateAuthTokensResponse,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
  encodeJson as encodeJson_3,
} from "../../messages/auth/GenerateAuthTokensResponse";
import {
  Type as RefreshAccessTokenRequest,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
  encodeJson as encodeJson_4,
} from "../../messages/auth/RefreshAccessTokenRequest";
import {
  Type as RefreshAccessTokenResponse,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
  encodeJson as encodeJson_5,
} from "../../messages/auth/RefreshAccessTokenResponse";
import {
  fromSingle,
  first,
} from "../../runtime/async/async-generator";
import {
  wrapRpcClientImpl,
  getDevtoolsConfig,
} from "../../runtime/client-devtools";

export interface Service<TReqArgs extends any[] = [], TResArgs extends any[] = []> {
  generateAuthChallenge(request: GenerateAuthChallengeRequest, ...args: TReqArgs): RpcReturnType<Promise<GenerateAuthChallengeResponse>, TResArgs>;
  generateAuthTokens(request: GenerateAuthTokensRequest, ...args: TReqArgs): RpcReturnType<Promise<GenerateAuthTokensResponse>, TResArgs>;
  refreshAccessToken(request: RefreshAccessTokenRequest, ...args: TReqArgs): RpcReturnType<Promise<RefreshAccessTokenResponse>, TResArgs>;
}

export type MethodDescriptors = typeof methodDescriptors;
export const methodDescriptors = {
  generateAuthChallenge: {
    methodName: "GenerateAuthChallenge",
    service: { serviceName: "auth.AuthService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary,
      deserializeBinary: decodeBinary,
      serializeJson: (value: GenerateAuthChallengeRequest) => JSON.stringify(encodeJson(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_1,
      deserializeBinary: decodeBinary_1,
      serializeJson: (value: GenerateAuthChallengeResponse) => JSON.stringify(encodeJson_1(value)),
    },
  },
  generateAuthTokens: {
    methodName: "GenerateAuthTokens",
    service: { serviceName: "auth.AuthService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_2,
      deserializeBinary: decodeBinary_2,
      serializeJson: (value: GenerateAuthTokensRequest) => JSON.stringify(encodeJson_2(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_3,
      deserializeBinary: decodeBinary_3,
      serializeJson: (value: GenerateAuthTokensResponse) => JSON.stringify(encodeJson_3(value)),
    },
  },
  refreshAccessToken: {
    methodName: "RefreshAccessToken",
    service: { serviceName: "auth.AuthService" },
    requestStream: false,
    responseStream: false,
    requestType: {
      serializeBinary: encodeBinary_4,
      deserializeBinary: decodeBinary_4,
      serializeJson: (value: RefreshAccessTokenRequest) => JSON.stringify(encodeJson_4(value)),
    },
    responseType: {
      serializeBinary: encodeBinary_5,
      deserializeBinary: decodeBinary_5,
      serializeJson: (value: RefreshAccessTokenResponse) => JSON.stringify(encodeJson_5(value)),
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
