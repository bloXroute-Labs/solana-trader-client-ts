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
  export type Asset = {
    valuationAsset: string;
    balance: string;
    valuation: string;
  }
}
export type Type = $.api.Asset;

export function getDefaultValue(): $.api.Asset {
  return {
    valuationAsset: "",
    balance: "",
    valuation: "",
  };
}

export function createValue(partialValue: Partial<$.api.Asset>): $.api.Asset {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Asset): unknown {
  const result: any = {};
  if (value.valuationAsset !== undefined) result.valuationAsset = tsValueToJsonValueFns.string(value.valuationAsset);
  if (value.balance !== undefined) result.balance = tsValueToJsonValueFns.string(value.balance);
  if (value.valuation !== undefined) result.valuation = tsValueToJsonValueFns.string(value.valuation);
  return result;
}

export function decodeJson(value: any): $.api.Asset {
  const result = getDefaultValue();
  if (value.valuationAsset !== undefined) result.valuationAsset = jsonValueToTsValueFns.string(value.valuationAsset);
  if (value.balance !== undefined) result.balance = jsonValueToTsValueFns.string(value.balance);
  if (value.valuation !== undefined) result.valuation = jsonValueToTsValueFns.string(value.valuation);
  return result;
}

export function encodeBinary(value: $.api.Asset): Uint8Array {
  const result: WireMessage = [];
  if (value.valuationAsset !== undefined) {
    const tsValue = value.valuationAsset;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.balance !== undefined) {
    const tsValue = value.balance;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.valuation !== undefined) {
    const tsValue = value.valuation;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Asset {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.valuationAsset = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.balance = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.valuation = value;
  }
  return result;
}
