import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export interface GetAccountBalanceRequest {}
}
export type Type = $.api.GetAccountBalanceRequest;

export function getDefaultValue(): $.api.GetAccountBalanceRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetAccountBalanceRequest>): $.api.GetAccountBalanceRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetAccountBalanceRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetAccountBalanceRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetAccountBalanceRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetAccountBalanceRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
