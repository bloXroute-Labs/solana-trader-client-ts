import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
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
  export interface PostRaydiumCPMMSwapResponse {
    transaction?: TransactionMessage;
    outAmount: number;
    outAmountMin: number;
  }
}
export type Type = $.api.PostRaydiumCPMMSwapResponse;

export function getDefaultValue(): $.api.PostRaydiumCPMMSwapResponse {
  return {
    transaction: undefined,
    outAmount: 0,
    outAmountMin: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PostRaydiumCPMMSwapResponse>): $.api.PostRaydiumCPMMSwapResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostRaydiumCPMMSwapResponse): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = encodeJson_1(value.transaction);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.double(value.outAmountMin);
  return result;
}

export function decodeJson(value: any): $.api.PostRaydiumCPMMSwapResponse {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = decodeJson_1(value.transaction);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.double(value.outAmountMin);
  return result;
}

export function encodeBinary(value: $.api.PostRaydiumCPMMSwapResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outAmountMin !== undefined) {
    const tsValue = value.outAmountMin;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostRaydiumCPMMSwapResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmountMin = value;
  }
  return result;
}
