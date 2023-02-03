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
  export interface Contact {
    name: string;
    url: string;
    email: string;
  }
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Contact;

export function getDefaultValue(): $.grpc.gateway.protoc_gen_openapiv2.options.Contact {
  return {
    name: "",
    url: "",
    email: "",
  };
}

export function createValue(partialValue: Partial<$.grpc.gateway.protoc_gen_openapiv2.options.Contact>): $.grpc.gateway.protoc_gen_openapiv2.options.Contact {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.grpc.gateway.protoc_gen_openapiv2.options.Contact): unknown {
  const result: any = {};
  if (value.name !== undefined) result.name = tsValueToJsonValueFns.string(value.name);
  if (value.url !== undefined) result.url = tsValueToJsonValueFns.string(value.url);
  if (value.email !== undefined) result.email = tsValueToJsonValueFns.string(value.email);
  return result;
}

export function decodeJson(value: any): $.grpc.gateway.protoc_gen_openapiv2.options.Contact {
  const result = getDefaultValue();
  if (value.name !== undefined) result.name = jsonValueToTsValueFns.string(value.name);
  if (value.url !== undefined) result.url = jsonValueToTsValueFns.string(value.url);
  if (value.email !== undefined) result.email = jsonValueToTsValueFns.string(value.email);
  return result;
}

export function encodeBinary(value: $.grpc.gateway.protoc_gen_openapiv2.options.Contact): Uint8Array {
  const result: WireMessage = [];
  if (value.name !== undefined) {
    const tsValue = value.name;
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
  if (value.email !== undefined) {
    const tsValue = value.email;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.grpc.gateway.protoc_gen_openapiv2.options.Contact {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.name = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.url = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.email = value;
  }
  return result;
}
