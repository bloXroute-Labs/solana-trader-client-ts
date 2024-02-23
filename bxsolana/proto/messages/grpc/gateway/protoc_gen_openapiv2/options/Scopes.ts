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
  export interface Scopes {
    scope: Map<string, string>;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Scopes;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Scopes {
  return {
    scope: new Map(),
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Scopes>): $.grpc.gateway.protoc_gen_openapiv2.options.Scopes {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Scopes): unknown {
  const result: any = {};
  if (value.scope !== undefined) result.scope = Object.fromEntries([...value.scope.entries()].map(([key, value]) => [key, tsValueToJsonValueFns.string(value)]));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Scopes {
  const result = getDefaultValue();
  if (value.scope !== undefined) result.scope = Object.fromEntries([...value.scope.entries()].map(([key, value]) => [key, jsonValueToTsValueFns.string(value)]));
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Scopes): Uint8Array {
  const result: WireMessage = [];
  {
    const fields = value.scope.entries();
    for (const [key, value] of fields) {
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, tsValueToWireValueFns.string(value)]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Scopes {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), wireValueToTsValueFns.string(value)] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.scope = new Map(value as any);
  }
  return result;
}
