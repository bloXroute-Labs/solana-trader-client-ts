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
  export interface GetNewRaydiumPoolsRequest {}
}
export type Type = $.api.GetNewRaydiumPoolsRequest;

export function getDefaultValue(): $.api.GetNewRaydiumPoolsRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetNewRaydiumPoolsRequest>): $.api.GetNewRaydiumPoolsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewRaydiumPoolsRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetNewRaydiumPoolsRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetNewRaydiumPoolsRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewRaydiumPoolsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
