import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.relayer {
  export interface SubscribePacketsRequest {}
}
export type Type = $.relayer.SubscribePacketsRequest;

export function getDefaultValue(): $.relayer.SubscribePacketsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.relayer.SubscribePacketsRequest>): $.relayer.SubscribePacketsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.relayer.SubscribePacketsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.relayer.SubscribePacketsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.relayer.SubscribePacketsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.relayer.SubscribePacketsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
