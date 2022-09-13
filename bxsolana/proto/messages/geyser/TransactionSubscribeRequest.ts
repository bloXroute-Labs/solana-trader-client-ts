import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface TransactionSubscribeRequest {}
}
export type Type = $.geyser.TransactionSubscribeRequest;

export function getDefaultValue(): $.geyser.TransactionSubscribeRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.geyser.TransactionSubscribeRequest>): $.geyser.TransactionSubscribeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.TransactionSubscribeRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.geyser.TransactionSubscribeRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.geyser.TransactionSubscribeRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.TransactionSubscribeRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
