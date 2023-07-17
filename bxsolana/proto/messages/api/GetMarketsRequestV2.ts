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
  export interface GetMarketsRequestV2 {}
}
export type Type = $.api.GetMarketsRequestV2;

export function getDefaultValue(): $.api.GetMarketsRequestV2 {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketsRequestV2>): $.api.GetMarketsRequestV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketsRequestV2): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetMarketsRequestV2 {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetMarketsRequestV2): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetMarketsRequestV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
