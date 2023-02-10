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
  export interface ExternalDocumentation {
    description: string;
    url: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation {
  return {
    description: "",
    url: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation>): $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation): unknown {
  const result: any = {};
  if (value.description !== undefined) result.description = tsValueToJsonValueFns.string(value.description);
  if (value.url !== undefined) result.url = tsValueToJsonValueFns.string(value.url);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation {
  const result = getDefaultValue();
  if (value.description !== undefined) result.description = jsonValueToTsValueFns.string(value.description);
  if (value.url !== undefined) result.url = jsonValueToTsValueFns.string(value.url);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation): Uint8Array {
  const result: WireMessage = [];
  if (value.description !== undefined) {
    const tsValue = value.description;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.url !== undefined) {
    const tsValue = value.url;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation {
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
    result.url = value;
  }
  return result;
}
