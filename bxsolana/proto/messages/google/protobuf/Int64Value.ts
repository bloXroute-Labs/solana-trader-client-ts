import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface Int64Value {
    value: string;
  }
}
export type Type = $.google.protobuf.Int64Value;

export function getDefaultValue(): $.google.protobuf.Int64Value {
  return {
    value: "0",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Int64Value>): $.google.protobuf.Int64Value {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Int64Value): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.int64(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Int64Value {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.int64(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.Int64Value): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Int64Value {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
