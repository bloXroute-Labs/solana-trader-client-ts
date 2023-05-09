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
  export interface Any {
    typeUrl: string;
    value: Uint8Array;
  }
}
export type Type = $.google.protobuf.Any;

export function getDefaultValue(): $.google.protobuf.Any {
  return {
    typeUrl: "",
    value: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Any>): $.google.protobuf.Any {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Any): unknown {
  const result: any = {};
  if (value.typeUrl !== undefined) result.typeUrl = tsValueToJsonValueFns.string(value.typeUrl);
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.bytes(value.value);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Any {
  const result = getDefaultValue();
  if (value.typeUrl !== undefined) result.typeUrl = jsonValueToTsValueFns.string(value.typeUrl);
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.bytes(value.value);
  return result;
}

export function encodeBinary(value: $.google.protobuf.Any): Uint8Array {
  const result: WireMessage = [];
  if (value.typeUrl !== undefined) {
    const tsValue = value.typeUrl;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [2, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.Any {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.typeUrl = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  return result;
}
