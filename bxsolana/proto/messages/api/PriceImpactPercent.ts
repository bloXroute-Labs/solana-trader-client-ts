import {
  Type as Infinity,
  name2num,
  num2name,
} from "./Infinity.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type PriceImpactPercent = {
    percent: number;
    infinity: Infinity;
  }
}
export type Type = $.api.PriceImpactPercent;

export function getDefaultValue(): $.api.PriceImpactPercent {
  return {
    percent: 0,
    infinity: "INF_NOT",
  };
}

export function createValue(partialValue: Partial<$.api.PriceImpactPercent>): $.api.PriceImpactPercent {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PriceImpactPercent): unknown {
  const result: any = {};
  if (value.percent !== undefined) result.percent = tsValueToJsonValueFns.double(value.percent);
  if (value.infinity !== undefined) result.infinity = tsValueToJsonValueFns.enum(value.infinity);
  return result;
}

export function decodeJson(value: any): $.api.PriceImpactPercent {
  const result = getDefaultValue();
  if (value.percent !== undefined) result.percent = jsonValueToTsValueFns.double(value.percent);
  if (value.infinity !== undefined) result.infinity = jsonValueToTsValueFns.enum(value.infinity) as Infinity;
  return result;
}

export function encodeBinary(value: $.api.PriceImpactPercent): Uint8Array {
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
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PriceImpactPercent {
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
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.infinity = value;
  }
  return result;
}
