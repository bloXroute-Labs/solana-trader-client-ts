import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../../../runtime/wire/deserialize";

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options {
  export interface Header {
    description: string;
    type: string;
    format: string;
    default: string;
    pattern: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Header;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Header {
  return {
    description: "",
    type: "",
    format: "",
    default: "",
    pattern: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Header>): $.grpc.gateway.protoc_gen_openapiv2.options.Header {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Header): unknown {
  const result: any = {};
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.format !== undefined) result.format = tsValueToJsonValueFns.string(value.format);
  if (value.default !== undefined) result.default = tsValueToJsonValueFns.string(value.default);
  if (value.pattern !== undefined) result.pattern = tsValueToJsonValueFns.string(value.pattern);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Header {
  const result = getDefaultValue();
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.format !== undefined) result.format = jsonValueToTsValueFns.string(value.format);
  if (value.default !== undefined) result.default = jsonValueToTsValueFns.string(value.default);
  if (value.pattern !== undefined) result.pattern = jsonValueToTsValueFns.string(value.pattern);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Header): Uint8Array {
  const result: WireMessage = [];
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.format !== undefined) {
    const tsValue = value.format;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.default !== undefined) {
    const tsValue = value.default;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pattern !== undefined) {
    const tsValue = value.pattern;
    result.push(
      [13, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Header {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.format = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.default = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pattern = value;
  }
  return result;
}
