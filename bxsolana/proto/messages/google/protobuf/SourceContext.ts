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

export declare namespace $.google.protobuf {
  export interface SourceContext {
    fileName: string;
  }
}
export type Type = $.google.protobuf.SourceContext;

export function getDefaultValue(): $.google.protobuf.SourceContext {
  return {
    fileName: "",
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.SourceContext>): $.google.protobuf.SourceContext {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.SourceContext): unknown {
  const result: any = {};
  if (value.fileName !== undefined) result.fileName = tsValueToJsonValueFns.string(value.fileName);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.SourceContext {
  const result = getDefaultValue();
  if (value.fileName !== undefined) result.fileName = jsonValueToTsValueFns.string(value.fileName);
  return result;
}

export function encodeBinary(value: $.google.protobuf.SourceContext): Uint8Array {
  const result: WireMessage = [];
  if (value.fileName !== undefined) {
    const tsValue = value.fileName;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.SourceContext {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.fileName = value;
  }
  return result;
}
