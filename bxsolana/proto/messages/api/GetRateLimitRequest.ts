import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetRateLimitRequest {}
}
export type Type = $.api.GetRateLimitRequest;

export function getDefaultValue(): $.api.GetRateLimitRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetRateLimitRequest>): $.api.GetRateLimitRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRateLimitRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetRateLimitRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetRateLimitRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRateLimitRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
