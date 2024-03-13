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
  export interface GetRaydiumPoolsRequest {}
}
export type Type = $.api.GetRaydiumPoolsRequest;

export function getDefaultValue(): $.api.GetRaydiumPoolsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumPoolsRequest>): $.api.GetRaydiumPoolsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumPoolsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumPoolsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumPoolsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumPoolsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
