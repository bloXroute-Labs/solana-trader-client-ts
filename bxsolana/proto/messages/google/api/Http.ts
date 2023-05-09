import {
  Type as HttpRule,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./HttpRule";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
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
  export interface Http {
    rules: HttpRule[];
    fullyDecodeReservedExpansion: boolean;
  }
}
export type Type = $.google.api.Http;

export function getDefaultValue(): $.google.api.Http {
  return {
    rules: [],
    fullyDecodeReservedExpansion: false,
  };
}

export function createValue(partialValue: Partial<$.google.api.Http>): $.google.api.Http {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.Http): unknown {
  const result: any = {};
  result.rules = value.rules.map(value => encodeJson_1(value));
  if (value.fullyDecodeReservedExpansion !== undefined) result.fullyDecodeReservedExpansion = tsValueToJsonValueFns.bool(value.fullyDecodeReservedExpansion);
  return result;
}

export function decodeJson(value: any): $.google.api.Http {
  const result = getDefaultValue();
  result.rules = value.rules?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.fullyDecodeReservedExpansion !== undefined) result.fullyDecodeReservedExpansion = jsonValueToTsValueFns.bool(value.fullyDecodeReservedExpansion);
  return result;
}

export function encodeBinary(value: $.google.api.Http): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.rules) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.fullyDecodeReservedExpansion !== undefined) {
    const tsValue = value.fullyDecodeReservedExpansion;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.api.Http {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.rules = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.fullyDecodeReservedExpansion = value;
  }
  return result;
}
