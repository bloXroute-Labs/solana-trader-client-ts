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
  export interface GetBlockStreamRequest {}
}
export type Type = $.api.GetBlockStreamRequest;

export function getDefaultValue(): $.api.GetBlockStreamRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetBlockStreamRequest>): $.api.GetBlockStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBlockStreamRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetBlockStreamRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetBlockStreamRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBlockStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
