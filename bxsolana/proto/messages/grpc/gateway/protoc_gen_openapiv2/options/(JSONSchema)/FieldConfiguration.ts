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

export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema {
  export interface FieldConfiguration {
    pathParamName: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration {
  return {
    pathParamName: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration>): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration): unknown {
  const result: any = {};
  if (value.pathParamName !== undefined) result.pathParamName = tsValueToJsonValueFns.string(value.pathParamName);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration {
  const result = getDefaultValue();
  if (value.pathParamName !== undefined) result.pathParamName = jsonValueToTsValueFns.string(value.pathParamName);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration): Uint8Array {
  const result: WireMessage = [];
  if (value.pathParamName !== undefined) {
    const tsValue = value.pathParamName;
    result.push(
      [47, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(47);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pathParamName = value;
  }
  return result;
}
