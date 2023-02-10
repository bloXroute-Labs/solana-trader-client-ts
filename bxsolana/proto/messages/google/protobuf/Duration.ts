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
  export interface Duration {
    seconds: string;
    nanos: number;
  }
}
export type Type = $.google.protobuf.Duration;

export function getDefaultValue(): $.google.protobuf.Duration {
  return {
    seconds: "0",
    nanos: 0,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Duration>): $.google.protobuf.Duration {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Duration): unknown {
  const result: any = {};
  if (value.seconds !== undefined) result.seconds = tsValueToJsonValueFns.int64(value.seconds);
  if (value.nanos !== undefined) result.nanos = tsValueToJsonValueFns.int32(value.nanos);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Duration {
  const result = getDefaultValue();
  if (value.seconds !== undefined) result.seconds = jsonValueToTsValueFns.int64(value.seconds);
  if (value.nanos !== undefined) result.nanos = jsonValueToTsValueFns.int32(value.nanos);
  return result;
}

export function encodeBinary(value: $.google.protobuf.Duration): Uint8Array {
  const result: WireMessage = [];
  if (value.seconds !== undefined) {
    const tsValue = value.seconds;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.nanos !== undefined) {
    const tsValue = value.nanos;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Duration {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.seconds = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.nanos = value;
  }
  return result;
}
