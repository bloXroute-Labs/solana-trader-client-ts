import {
  Type as UITokenAmount,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./UITokenAmount.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface TransactionMetaTokenBalance {
    accountIndex: number;
    mint: string;
    uiTokenAmount?: UITokenAmount;
    owner: string;
  }
}
export type Type = $.geyser.TransactionMetaTokenBalance;

export function getDefaultValue(): $.geyser.TransactionMetaTokenBalance {
  return {
    accountIndex: 0,
    mint: "",
    uiTokenAmount: undefined,
    owner: "",
  };
}

export function createValue(partialValue: Partial<$.geyser.TransactionMetaTokenBalance>): $.geyser.TransactionMetaTokenBalance {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.TransactionMetaTokenBalance): unknown {
  const result: any = {};
  if (value.accountIndex !== undefined) result.accountIndex = tsValueToJsonValueFns.uint32(value.accountIndex);
  if (value.mint !== undefined) result.mint = tsValueToJsonValueFns.string(value.mint);
  if (value.uiTokenAmount !== undefined) result.uiTokenAmount = encodeJson_1(value.uiTokenAmount);
  if (value.owner !== undefined) result.owner = tsValueToJsonValueFns.string(value.owner);
  return result;
}

export function decodeJson(value: any): $.geyser.TransactionMetaTokenBalance {
  const result = getDefaultValue();
  if (value.accountIndex !== undefined) result.accountIndex = jsonValueToTsValueFns.uint32(value.accountIndex);
  if (value.mint !== undefined) result.mint = jsonValueToTsValueFns.string(value.mint);
  if (value.uiTokenAmount !== undefined) result.uiTokenAmount = decodeJson_1(value.uiTokenAmount);
  if (value.owner !== undefined) result.owner = jsonValueToTsValueFns.string(value.owner);
  return result;
}

export function encodeBinary(value: $.geyser.TransactionMetaTokenBalance): Uint8Array {
  const result: WireMessage = [];
  if (value.accountIndex !== undefined) {
    const tsValue = value.accountIndex;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.mint !== undefined) {
    const tsValue = value.mint;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.uiTokenAmount !== undefined) {
    const tsValue = value.uiTokenAmount;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.owner !== undefined) {
    const tsValue = value.owner;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.TransactionMetaTokenBalance {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.accountIndex = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mint = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.uiTokenAmount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.owner = value;
  }
  return result;
}
