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

export declare namespace $.common {
  export interface PriceImpactPercentV2 {
    percent: number;
    infinity: string;
  }
}
export type Type = $.common.PriceImpactPercentV2;

export function getDefaultValue(): $.common.PriceImpactPercentV2 {
  return {
    percent: 0,
    infinity: "",
  };
}

export function createValue(partialValue: Partial<$.common.PriceImpactPercentV2>): $.common.PriceImpactPercentV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.common.PriceImpactPercentV2): unknown {
  const result: any = {};
  if (value.percent !== undefined) result.percent = tsValueToJsonValueFns.double(value.percent);
  if (value.infinity !== undefined) result.infinity = tsValueToJsonValueFns.string(value.infinity);
  return result;
}

export function decodeJson(value: any): $.common.PriceImpactPercentV2 {
  const result = getDefaultValue();
  if (value.percent !== undefined) result.percent = jsonValueToTsValueFns.double(value.percent);
  if (value.infinity !== undefined) result.infinity = jsonValueToTsValueFns.string(value.infinity);
  return result;
}

export function encodeBinary(value: $.common.PriceImpactPercentV2): Uint8Array {
  const result: WireMessage = [];
  if (value.percent !== undefined) {
    const tsValue = value.percent;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.infinity !== undefined) {
    const tsValue = value.infinity;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.common.PriceImpactPercentV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percent = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.infinity = value;
  }
  return result;
}
