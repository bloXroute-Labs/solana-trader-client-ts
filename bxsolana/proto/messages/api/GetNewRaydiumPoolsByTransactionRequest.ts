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
  export interface GetNewRaydiumPoolsByTransactionRequest {}
}
export type Type = $.api.GetNewRaydiumPoolsByTransactionRequest;

export function getDefaultValue(): $.api.GetNewRaydiumPoolsByTransactionRequest {
  return {
  };
}

export function createValue(partialValue: Partial<$.api.GetNewRaydiumPoolsByTransactionRequest>): $.api.GetNewRaydiumPoolsByTransactionRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewRaydiumPoolsByTransactionRequest): unknown {
  const result: any = {};
  return result;
}

export function decodeJson(value: any): $.api.GetNewRaydiumPoolsByTransactionRequest {
  const result = getDefaultValue();
  return result;
}

export function encodeBinary(value: $.api.GetNewRaydiumPoolsByTransactionRequest): Uint8Array {
  const result: WireMessage = [];
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewRaydiumPoolsByTransactionRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  return result;
}
