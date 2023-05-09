import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../../../../runtime/wire/deserialize";

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement {
  export interface SecurityRequirementValue {
    scope: string[];
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue {
  return {
    scope: [],
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue>): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue): unknown {
  const result: any = {};
  result.scope = value.scope.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue {
  const result = getDefaultValue();
  result.scope = value.scope?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.scope) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.scope = value as any;
  }
  return result;
}
