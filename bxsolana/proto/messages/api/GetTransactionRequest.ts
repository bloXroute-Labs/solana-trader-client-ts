import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetTransactionRequest {
    signature: string;
  }
}
export type Type = $.api.GetTransactionRequest;

export function getDefaultValue(): $.api.GetTransactionRequest {
  return {
    signature: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetTransactionRequest>): $.api.GetTransactionRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTransactionRequest): unknown {
  const result: any = {};
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  return result;
}

export function decodeJson(value: any): $.api.GetTransactionRequest {
  const result = getDefaultValue();
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.string(value.signature);
  return result;
}

export function encodeBinary(value: $.api.GetTransactionRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTransactionRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  return result;
}
