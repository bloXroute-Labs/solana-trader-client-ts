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
  export interface Block {
    slot: string;
    hash: string;
    time: string;
    height: string;
  }
}
export type Type = $.api.Block;

export function getDefaultValue(): $.api.Block {
  return {
    slot: "0",
    hash: "",
    time: "0",
    height: "0",
  };
}

export function createValue(partialValue: Partial<$.api.Block>): $.api.Block {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Block): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.hash !== undefined) result.hash = tsValueToJsonValueFns.string(value.hash);
  if (value.time !== undefined) result.time = tsValueToJsonValueFns.int64(value.time);
  if (value.height !== undefined) result.height = tsValueToJsonValueFns.uint64(value.height);
  return result;
}

export function decodeJson(value: any): $.api.Block {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.hash !== undefined) result.hash = jsonValueToTsValueFns.string(value.hash);
  if (value.time !== undefined) result.time = jsonValueToTsValueFns.int64(value.time);
  if (value.height !== undefined) result.height = jsonValueToTsValueFns.uint64(value.height);
  return result;
}

export function encodeBinary(value: $.api.Block): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.hash !== undefined) {
    const tsValue = value.hash;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.time !== undefined) {
    const tsValue = value.time;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.height !== undefined) {
    const tsValue = value.height;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Block {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.hash = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.time = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.height = value;
  }
  return result;
}
