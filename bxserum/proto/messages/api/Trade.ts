import {
  Type as Side,
  name2num,
  num2name,
} from "./Side.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export interface Trade {
    side: Side;
    size: number;
    price: number;
  }
}
export type Type = $.api.Trade;

export function getDefaultValue(): $.api.Trade {
  return {
    side: "S_UNKNOWN",
    size: 0,
    price: 0,
  };
}

export function createValue(partialValue: Partial<$.api.Trade>): $.api.Trade {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Trade): unknown {
  const result: any = {};
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  return result;
}

export function decodeJson(value: any): $.api.Trade {
  const result = getDefaultValue();
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  return result;
}

export function encodeBinary(value: $.api.Trade): Uint8Array {
  const result: WireMessage = [];
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Trade {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  return result;
}
