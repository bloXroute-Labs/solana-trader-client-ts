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
  export interface GetRegionsRequest {}
}
export type Type = $.searcher.GetRegionsRequest;

export function getDefaultValue(): $.searcher.GetRegionsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.searcher.GetRegionsRequest>): $.searcher.GetRegionsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.GetRegionsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.searcher.GetRegionsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.searcher.GetRegionsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.GetRegionsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
