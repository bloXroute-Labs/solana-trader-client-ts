import {
  Type as JSONSchema,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./JSONSchema";
import {
  Type as ExternalDocumentation,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
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
  export interface Schema {
    jsonSchema?: JSONSchema;
    discriminator: string;
    readOnly: boolean;
    externalDocs?: ExternalDocumentation;
    example: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Schema;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Schema {
  return {
    jsonSchema: undefined,
    discriminator: "",
    readOnly: false,
    externalDocs: undefined,
    example: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Schema>): $.grpc.gateway.protoc_gen_openapiv2.options.Schema {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Schema): unknown {
  const result: any = {};
  if (value.jsonSchema !== undefined) result.jsonSchema = encodeJson_1(value.jsonSchema);
  if (value.discriminator !== undefined) result.discriminator = tsValueToJsonValueFns.string(value.discriminator);
  if (value.readOnly !== undefined) result.readOnly = tsValueToJsonValueFns.bool(value.readOnly);
  if (value.externalDocs !== undefined) result.externalDocs = encodeJson_2(value.externalDocs);
  if (value.example !== undefined) result.example = tsValueToJsonValueFns.string(value.example);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Schema {
  const result = getDefaultValue();
  if (value.jsonSchema !== undefined) result.jsonSchema = decodeJson_1(value.jsonSchema);
  if (value.discriminator !== undefined) result.discriminator = jsonValueToTsValueFns.string(value.discriminator);
  if (value.readOnly !== undefined) result.readOnly = jsonValueToTsValueFns.bool(value.readOnly);
  if (value.externalDocs !== undefined) result.externalDocs = decodeJson_2(value.externalDocs);
  if (value.example !== undefined) result.example = jsonValueToTsValueFns.string(value.example);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Schema): Uint8Array {
  const result: WireMessage = [];
  if (value.jsonSchema !== undefined) {
    const tsValue = value.jsonSchema;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.discriminator !== undefined) {
    const tsValue = value.discriminator;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.readOnly !== undefined) {
    const tsValue = value.readOnly;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.externalDocs !== undefined) {
    const tsValue = value.externalDocs;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.example !== undefined) {
    const tsValue = value.example;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Schema {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.jsonSchema = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.discriminator = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.readOnly = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.externalDocs = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.example = value;
  }
  return result;
}
