import {
  Type as VisibilityRule,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./VisibilityRule";
import {
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
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.api {
  export interface Visibility {
    rules: VisibilityRule[];
  }
}
export type Type = $.google.api.Visibility;

export function getDefaultValue(): $.google.api.Visibility {
  return {
    rules: [],
  };
}

export function createValue(partialValue: Partial<$.google.api.Visibility>): $.google.api.Visibility {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.Visibility): unknown {
  const result: any = {};
  result.rules = value.rules.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.google.api.Visibility {
  const result = getDefaultValue();
  result.rules = value.rules?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.google.api.Visibility): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.rules) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.google.api.Visibility {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.rules = value as any;
  }
  return result;
}
