import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../../runtime/json/scalar";
import {
  WireMessage,
} from "../../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf.UninterpretedOption {
  export interface NamePart {
    namePart: string;
    isExtension: boolean;
  }
}
export type Type = $.google.protobuf.UninterpretedOption.NamePart;

export function getDefaultValue(): $.google.protobuf.UninterpretedOption.NamePart {
  return {
    namePart: "",
    isExtension: false,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.UninterpretedOption.NamePart>): $.google.protobuf.UninterpretedOption.NamePart {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.UninterpretedOption.NamePart): unknown {
  const result: any = {};
  if (value.namePart !== undefined) result.namePart = tsValueToJsonValueFns.string(value.namePart);
  if (value.isExtension !== undefined) result.isExtension = tsValueToJsonValueFns.bool(value.isExtension);
  return result;
}

export function decodeJson(value: any): $.google.protobuf.UninterpretedOption.NamePart {
  const result = getDefaultValue();
  if (value.namePart !== undefined) result.namePart = jsonValueToTsValueFns.string(value.namePart);
  if (value.isExtension !== undefined) result.isExtension = jsonValueToTsValueFns.bool(value.isExtension);
  return result;
}

export function encodeBinary(value: $.google.protobuf.UninterpretedOption.NamePart): Uint8Array {
  const result: WireMessage = [];
  if (value.namePart !== undefined) {
    const tsValue = value.namePart;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isExtension !== undefined) {
    const tsValue = value.isExtension;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.protobuf.UninterpretedOption.NamePart {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.namePart = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isExtension = value;
  }
  return result;
}
