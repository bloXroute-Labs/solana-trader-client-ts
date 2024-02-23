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
  export interface TokenBalance {
    symbol: string;
    tokenMint: string;
    settledAmount: number;
    unsettledAmount: number;
    openOrdersAmount: number;
  }
}
export type Type = $.api.TokenBalance;

export function getDefaultValue(): $.api.TokenBalance {
  return {
    symbol: "",
    tokenMint: "",
    settledAmount: 0,
    unsettledAmount: 0,
    openOrdersAmount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TokenBalance>): $.api.TokenBalance {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TokenBalance): unknown {
  const result: any = {};
  if (value.symbol !== undefined) result.symbol = tsValueToJsonValueFns.string(value.symbol);
  if (value.tokenMint !== undefined) result.tokenMint = tsValueToJsonValueFns.string(value.tokenMint);
  if (value.settledAmount !== undefined) result.settledAmount = tsValueToJsonValueFns.double(value.settledAmount);
  if (value.unsettledAmount !== undefined) result.unsettledAmount = tsValueToJsonValueFns.double(value.unsettledAmount);
  if (value.openOrdersAmount !== undefined) result.openOrdersAmount = tsValueToJsonValueFns.double(value.openOrdersAmount);
  return result;
}

export function decodeJson(value: any): $.api.TokenBalance {
  const result = getDefaultValue();
  if (value.symbol !== undefined) result.symbol = jsonValueToTsValueFns.string(value.symbol);
  if (value.tokenMint !== undefined) result.tokenMint = jsonValueToTsValueFns.string(value.tokenMint);
  if (value.settledAmount !== undefined) result.settledAmount = jsonValueToTsValueFns.double(value.settledAmount);
  if (value.unsettledAmount !== undefined) result.unsettledAmount = jsonValueToTsValueFns.double(value.unsettledAmount);
  if (value.openOrdersAmount !== undefined) result.openOrdersAmount = jsonValueToTsValueFns.double(value.openOrdersAmount);
  return result;
}

export function encodeBinary(value: $.api.TokenBalance): Uint8Array {
  const result: WireMessage = [];
  if (value.symbol !== undefined) {
    const tsValue = value.symbol;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenMint !== undefined) {
    const tsValue = value.tokenMint;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.settledAmount !== undefined) {
    const tsValue = value.settledAmount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.unsettledAmount !== undefined) {
    const tsValue = value.unsettledAmount;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.openOrdersAmount !== undefined) {
    const tsValue = value.openOrdersAmount;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TokenBalance {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.symbol = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenMint = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.settledAmount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.unsettledAmount = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.openOrdersAmount = value;
  }
  return result;
}
