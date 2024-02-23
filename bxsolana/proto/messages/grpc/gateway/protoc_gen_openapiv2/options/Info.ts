import {
  Type as Contact,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Contact";
import {
  Type as License,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./License";
import {
  Type as Value,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../../../../google/protobuf/Value";
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
  export interface Info {
    title: string;
    description: string;
    termsOfService: string;
    contact?: Contact;
    license?: License;
    version: string;
    extensions: Map<string, Value>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Info;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Info {
  return {
    title: "",
    description: "",
    termsOfService: "",
    contact: undefined,
    license: undefined,
    version: "",
    extensions: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Info>): $.grpc.gateway.protoc_gen_openapiv2.options.Info {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Info): unknown {
  const result: any = {};
  if (value.title !== undefined) result.title = tsValueToJsonValueFns.string(value.title);
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.termsOfService !== undefined) result.termsOfService = tsValueToJsonValueFns.string(value.termsOfService);
  if (value.contact !== undefined) result.contact = encodeJson_1(value.contact);
  if (value.license !== undefined) result.license = encodeJson_2(value.license);
  if (value.version !== undefined) result.version = tsValueToJsonValueFns.string(value.version);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, encodeJson_3(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Info {
  const result = getDefaultValue();
  if (value.title !== undefined) result.title = jsonValueToTsValueFns.string(value.title);
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.termsOfService !== undefined) result.termsOfService = jsonValueToTsValueFns.string(value.termsOfService);
  if (value.contact !== undefined) result.contact = decodeJson_1(value.contact);
  if (value.license !== undefined) result.license = decodeJson_2(value.license);
  if (value.version !== undefined) result.version = jsonValueToTsValueFns.string(value.version);
  if (value.extensions !== undefined) result.extensions = Object.fromEntries([...value.extensions.entries()].map(([key, value]) => [key, decodeJson_3(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Info): Uint8Array {
  const result: WireMessage = [];
  if (value.title !== undefined) {
    const tsValue = value.title;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.termsOfService !== undefined) {
    const tsValue = value.termsOfService;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contact !== undefined) {
    const tsValue = value.contact;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.license !== undefined) {
    const tsValue = value.license;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.version !== undefined) {
    const tsValue = value.version;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  {
    const fields = value.extensions.entries();
    for (const [key, value] of fields) {
      result.push(
        [7, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_3(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Info {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.title = value;
  }
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.termsOfService = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.contact = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.license = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.version = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_3(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.extensions = new Map(value as any);
  }
  return result;
}
