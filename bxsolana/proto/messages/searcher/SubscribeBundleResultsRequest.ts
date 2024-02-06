import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.searcher {
  export interface SubscribeBundleResultsRequest {}
}
export type Type = $.searcher.SubscribeBundleResultsRequest;

export function getDefaultValue(): $.searcher.SubscribeBundleResultsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.searcher.SubscribeBundleResultsRequest>): $.searcher.SubscribeBundleResultsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.SubscribeBundleResultsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.searcher.SubscribeBundleResultsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.searcher.SubscribeBundleResultsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.SubscribeBundleResultsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
