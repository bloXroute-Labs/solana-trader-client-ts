import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.api {
  export interface CustomHttpPattern {
    kind: string;
    path: string;
  }
}
export type Type = $.google.api.CustomHttpPattern;

export function getDefaultValue(): $.google.api.CustomHttpPattern {
  return {
    kind: "",
    path: "",
  };
}

export function createValue(partialValue: Partial<$.google.api.CustomHttpPattern>): $.google.api.CustomHttpPattern {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.CustomHttpPattern): unknown {
  const result: any = {};
  if (value.kind !== undefined) result.kind = tsValueToJsonValueFns.string(value.kind);
  if (value.path !== undefined) result.path = tsValueToJsonValueFns.string(value.path);
  return result;
}

export function decodeJson(value: any): $.google.api.CustomHttpPattern {
  const result = getDefaultValue();
  if (value.kind !== undefined) result.kind = jsonValueToTsValueFns.string(value.kind);
  if (value.path !== undefined) result.path = jsonValueToTsValueFns.string(value.path);
  return result;
}

export function encodeBinary(value: $.google.api.CustomHttpPattern): Uint8Array {
  const result: WireMessage = [];
  if (value.kind !== undefined) {
    const tsValue = value.kind;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.path !== undefined) {
    const tsValue = value.path;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.api.CustomHttpPattern {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.kind = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.path = value;
  }
  return result;
}
