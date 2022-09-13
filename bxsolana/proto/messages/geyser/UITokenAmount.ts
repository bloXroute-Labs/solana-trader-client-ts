import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
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
  export interface UITokenAmount {
    uiAmount: number;
    decimals: number;
    amount: string;
    uiAmountString: string;
  }
}
export type Type = $.geyser.UITokenAmount;

export function getDefaultValue(): $.geyser.UITokenAmount {
  return {
    uiAmount: 0,
    decimals: 0,
    amount: "",
    uiAmountString: "",
  };
}

export function createValue(partialValue: Partial<$.geyser.UITokenAmount>): $.geyser.UITokenAmount {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.UITokenAmount): unknown {
  const result: any = {};
  if (value.uiAmount !== undefined) result.uiAmount = tsValueToJsonValueFns.float(value.uiAmount);
  if (value.decimals !== undefined) result.decimals = tsValueToJsonValueFns.uint32(value.decimals);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.string(value.amount);
  if (value.uiAmountString !== undefined) result.uiAmountString = tsValueToJsonValueFns.string(value.uiAmountString);
  return result;
}

export function decodeJson(value: any): $.geyser.UITokenAmount {
  const result = getDefaultValue();
  if (value.uiAmount !== undefined) result.uiAmount = jsonValueToTsValueFns.float(value.uiAmount);
  if (value.decimals !== undefined) result.decimals = jsonValueToTsValueFns.uint32(value.decimals);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.string(value.amount);
  if (value.uiAmountString !== undefined) result.uiAmountString = jsonValueToTsValueFns.string(value.uiAmountString);
  return result;
}

export function encodeBinary(value: $.geyser.UITokenAmount): Uint8Array {
  const result: WireMessage = [];
  if (value.uiAmount !== undefined) {
    const tsValue = value.uiAmount;
    result.push(
      [1, tsValueToWireValueFns.float(tsValue)],
    );
  }
  if (value.decimals !== undefined) {
    const tsValue = value.decimals;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.uiAmountString !== undefined) {
    const tsValue = value.uiAmountString;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.UITokenAmount {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.float(wireValue);
    if (value === undefined) break field;
    result.uiAmount = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.decimals = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uiAmountString = value;
  }
  return result;
}
