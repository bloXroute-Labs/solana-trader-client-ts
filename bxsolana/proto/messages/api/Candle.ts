import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
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
  export interface Candle {
    startTime?: Timestamp;
    updateTime?: Timestamp;
    open: number;
    close: number;
    low: number;
    high: number;
    amount: number;
    volume: number;
    count: number;
  }
}
export type Type = $.api.Candle;

export function getDefaultValue(): $.api.Candle {
  return {
    startTime: undefined,
    updateTime: undefined,
    open: 0,
    close: 0,
    low: 0,
    high: 0,
    amount: 0,
    volume: 0,
    count: 0,
  };
}

export function createValue(partialValue: Partial<$.api.Candle>): $.api.Candle {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Candle): unknown {
  const result: any = {};
  if (value.startTime !== undefined) result.startTime = encodeJson_1(value.startTime);
  if (value.updateTime !== undefined) result.updateTime = encodeJson_1(value.updateTime);
  if (value.open !== undefined) result.open = tsValueToJsonValueFns.double(value.open);
  if (value.close !== undefined) result.close = tsValueToJsonValueFns.double(value.close);
  if (value.low !== undefined) result.low = tsValueToJsonValueFns.double(value.low);
  if (value.high !== undefined) result.high = tsValueToJsonValueFns.double(value.high);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  if (value.volume !== undefined) result.volume = tsValueToJsonValueFns.double(value.volume);
  if (value.count !== undefined) result.count = tsValueToJsonValueFns.double(value.count);
  return result;
}

export function decodeJson(value: any): $.api.Candle {
  const result = getDefaultValue();
  if (value.startTime !== undefined) result.startTime = decodeJson_1(value.startTime);
  if (value.updateTime !== undefined) result.updateTime = decodeJson_1(value.updateTime);
  if (value.open !== undefined) result.open = jsonValueToTsValueFns.double(value.open);
  if (value.close !== undefined) result.close = jsonValueToTsValueFns.double(value.close);
  if (value.low !== undefined) result.low = jsonValueToTsValueFns.double(value.low);
  if (value.high !== undefined) result.high = jsonValueToTsValueFns.double(value.high);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  if (value.volume !== undefined) result.volume = jsonValueToTsValueFns.double(value.volume);
  if (value.count !== undefined) result.count = jsonValueToTsValueFns.double(value.count);
  return result;
}

export function encodeBinary(value: $.api.Candle): Uint8Array {
  const result: WireMessage = [];
  if (value.startTime !== undefined) {
    const tsValue = value.startTime;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.updateTime !== undefined) {
    const tsValue = value.updateTime;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.open !== undefined) {
    const tsValue = value.open;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.close !== undefined) {
    const tsValue = value.close;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.low !== undefined) {
    const tsValue = value.low;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.high !== undefined) {
    const tsValue = value.high;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.volume !== undefined) {
    const tsValue = value.volume;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.count !== undefined) {
    const tsValue = value.count;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Candle {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.startTime = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.updateTime = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.open = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.close = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.low = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.high = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.volume = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.count = value;
  }
  return result;
}
