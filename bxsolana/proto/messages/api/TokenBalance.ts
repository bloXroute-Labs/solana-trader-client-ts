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
  export type TokenBalance = {
    symbol: string;
    address: string;
    walletAmount: number;
    unsettledAmount: number;
    openOrdersAmount: number;
  }
}
export type Type = $.api.TokenBalance;

export function getDefaultValue(): $.api.TokenBalance {
  return {
    symbol: "",
    address: "",
    walletAmount: 0,
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
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.walletAmount !== undefined) result.walletAmount = tsValueToJsonValueFns.double(value.walletAmount);
  if (value.unsettledAmount !== undefined) result.unsettledAmount = tsValueToJsonValueFns.double(value.unsettledAmount);
  if (value.openOrdersAmount !== undefined) result.openOrdersAmount = tsValueToJsonValueFns.double(value.openOrdersAmount);
  return result;
}

export function decodeJson(value: any): $.api.TokenBalance {
  const result = getDefaultValue();
  if (value.symbol !== undefined) result.symbol = jsonValueToTsValueFns.string(value.symbol);
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.walletAmount !== undefined) result.walletAmount = jsonValueToTsValueFns.double(value.walletAmount);
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
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.walletAmount !== undefined) {
    const tsValue = value.walletAmount;
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
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.walletAmount = value;
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
