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
  export interface GetMarketsRequest {}
}
export type Type = $.api.GetMarketsRequest;

export function getDefaultValue(): $.api.GetMarketsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketsRequest>): $.api.GetMarketsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetMarketsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetMarketsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetMarketsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
