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
  export interface TokenAccount {
    symbol: string;
    tokenMint: string;
    tokenAccount: string;
    amount: number;
  }
}
export type Type = $.api.TokenAccount;

export function getDefaultValue(): $.api.TokenAccount {
  return {
    symbol: "",
    tokenMint: "",
    tokenAccount: "",
    amount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TokenAccount>): $.api.TokenAccount {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TokenAccount): unknown {
  const result: any = {};
  if (value.symbol !== undefined) result.symbol = tsValueToJsonValueFns.string(value.symbol);
  if (value.tokenMint !== undefined) result.tokenMint = tsValueToJsonValueFns.string(value.tokenMint);
  if (value.tokenAccount !== undefined) result.tokenAccount = tsValueToJsonValueFns.string(value.tokenAccount);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.TokenAccount {
  const result = getDefaultValue();
  if (value.symbol !== undefined) result.symbol = jsonValueToTsValueFns.string(value.symbol);
  if (value.tokenMint !== undefined) result.tokenMint = jsonValueToTsValueFns.string(value.tokenMint);
  if (value.tokenAccount !== undefined) result.tokenAccount = jsonValueToTsValueFns.string(value.tokenAccount);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.TokenAccount): Uint8Array {
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
  if (value.tokenAccount !== undefined) {
    const tsValue = value.tokenAccount;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TokenAccount {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenAccount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  return result;
}
