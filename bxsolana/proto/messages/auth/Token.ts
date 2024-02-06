import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.auth {
  export interface Token {
    value: string;
    expiresAtUtc?: Timestamp;
  }
}
export type Type = $.auth.Token;

export function getDefaultValue(): $.auth.Token {
  return {
    value: "",
    expiresAtUtc: undefined,
  };
}

export function createValue(partialValue: Partial<$.auth.Token>): $.auth.Token {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.auth.Token): unknown {
  const result: any = {};
  if (value.value !== undefined) result.value = tsValueToJsonValueFns.string(value.value);
  if (value.expiresAtUtc !== undefined) result.expiresAtUtc = encodeJson_1(value.expiresAtUtc);
  return result;
}

export function decodeJson(value: any): $.auth.Token {
  const result = getDefaultValue();
  if (value.value !== undefined) result.value = jsonValueToTsValueFns.string(value.value);
  if (value.expiresAtUtc !== undefined) result.expiresAtUtc = decodeJson_1(value.expiresAtUtc);
  return result;
}

export function encodeBinary(value: $.auth.Token): Uint8Array {
  const result: WireMessage = [];
  if (value.value !== undefined) {
    const tsValue = value.value;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.expiresAtUtc !== undefined) {
    const tsValue = value.expiresAtUtc;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.auth.Token {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.value = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.expiresAtUtc = value;
  }
  return result;
}
