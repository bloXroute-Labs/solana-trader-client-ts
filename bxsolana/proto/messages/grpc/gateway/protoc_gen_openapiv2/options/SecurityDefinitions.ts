import {
  Type as SecurityScheme,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./SecurityScheme";
import {
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
  export interface SecurityDefinitions {
    security: Map<string, SecurityScheme>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions {
  return {
    security: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions>): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions): unknown {
  const result: any = {};
  if (value.security !== undefined) result.security = Object.fromEntries([...value.security.entries()].map(([key, value]) => [key, encodeJson_1(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions {
  const result = getDefaultValue();
  if (value.security !== undefined) result.security = Object.fromEntries([...value.security.entries()].map(([key, value]) => [key, decodeJson_1(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions): Uint8Array {
  const result: WireMessage = [];
  {
    const fields = value.security.entries();
    for (const [key, value] of fields) {
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_1(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.security = new Map(value as any);
  }
  return result;
}
