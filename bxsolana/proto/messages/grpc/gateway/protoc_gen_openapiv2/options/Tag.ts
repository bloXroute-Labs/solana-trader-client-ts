import {
  Type as ExternalDocumentation,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ExternalDocumentation";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
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
  export interface Tag {
    description: string;
    externalDocs?: ExternalDocumentation;
    name: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Tag;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Tag {
  return {
    description: "",
    externalDocs: undefined,
    name: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Tag>): $.grpc.gateway.protoc_gen_openapiv2.options.Tag {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Tag): unknown {
  const result: any = {};
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.externalDocs !== undefined) result.externalDocs = encodeJson_1(value.externalDocs);
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Tag {
  const result = getDefaultValue();
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.externalDocs !== undefined) result.externalDocs = decodeJson_1(value.externalDocs);
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Tag): Uint8Array {
  const result: WireMessage = [];
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.externalDocs !== undefined) {
    const tsValue = value.externalDocs;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.name !== undefined) {
    const tsValue = value.name;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Tag {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.description = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.externalDocs = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  return result;
}
