import {
  Type as ExtensionRangeOptions,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../ExtensionRangeOptions.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize.js";

export declare namespace $.google.protobuf.DescriptorProto {
  export type ExtensionRange = {
    start?: number;
    end?: number;
    options?: ExtensionRangeOptions;
  }
}
export type Type = $.google.protobuf.DescriptorProto.ExtensionRange;

export function getDefaultValue(): $.google.protobuf.DescriptorProto.ExtensionRange {
  return {
    start: 0,
    end: 0,
    options: undefined,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.DescriptorProto.ExtensionRange>): $.google.protobuf.DescriptorProto.ExtensionRange {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.DescriptorProto.ExtensionRange): unknown {
  const result: any = {};
  if (value.start !== undefined) result.start = tsValueToJsonValueFns.int32(value.start);
  if (value.end !== undefined) result.end = tsValueToJsonValueFns.int32(value.end);
  if (value.options !== undefined) result.options = encodeJson_1(value.options);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.DescriptorProto.ExtensionRange {
  const result = getDefaultValue();
  if (value.start !== undefined) result.start = jsonValueToTsValueFns.int32(value.start);
  if (value.end !== undefined) result.end = jsonValueToTsValueFns.int32(value.end);
  if (value.options !== undefined) result.options = decodeJson_1(value.options);
  return result;
}

export function encodeBinary(value: $.google.protobuf.DescriptorProto.ExtensionRange): Uint8Array {
  const result: WireMessage = [];
  if (value.start !== undefined) {
    const tsValue = value.start;
    result.push(
      [1, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.end !== undefined) {
    const tsValue = value.end;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.options !== undefined) {
    const tsValue = value.options;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.DescriptorProto.ExtensionRange {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.start = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.end = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.options = value;
  }
  return result;
}
