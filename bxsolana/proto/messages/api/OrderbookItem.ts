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

export declare namespace $.api {
  export type OrderbookItem = {
    price: number;
    size: number;
  }
}
export type Type = $.api.OrderbookItem;

export function getDefaultValue(): $.api.OrderbookItem {
  return {
    price: 0,
    size: 0,
  };
}

export function createValue(partialValue: Partial<$.api.OrderbookItem>): $.api.OrderbookItem {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.OrderbookItem): unknown {
  const result: any = {};
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  return result;
}

export function decodeJson(value: any): $.api.OrderbookItem {
  const result = getDefaultValue();
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  return result;
}

export function encodeBinary(value: $.api.OrderbookItem): Uint8Array {
  const result: WireMessage = [];
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.OrderbookItem {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  return result;
}
