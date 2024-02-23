import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.block_engine {
  export interface SubscribeBundlesRequest {}
}
export type Type = $.block_engine.SubscribeBundlesRequest;

export function getDefaultValue(): $.block_engine.SubscribeBundlesRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.block_engine.SubscribeBundlesRequest>): $.block_engine.SubscribeBundlesRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.SubscribeBundlesRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.block_engine.SubscribeBundlesRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.block_engine.SubscribeBundlesRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.SubscribeBundlesRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
