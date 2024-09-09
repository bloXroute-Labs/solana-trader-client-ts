import {
  Type as TransactionMessageHeader,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessageHeader";
import {
  Type as Instruction,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Instruction";
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

export declare namespace $.api {
  export interface TransactionMessageZeta {
    header?: TransactionMessageHeader;
    accountKeys: string[];
    recentBlockhash: string;
    instructions: Instruction[];
  }
}
export type Type = $.api.TransactionMessageZeta;

export function getDefaultValue(): $.api.TransactionMessageZeta {
  return {
    header: undefined,
    accountKeys: [],
    recentBlockhash: "",
    instructions: [],
  };
}

export function createValue(partialValue: Partial<$.api.TransactionMessageZeta>): $.api.TransactionMessageZeta {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TransactionMessageZeta): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  result.accountKeys = value.accountKeys.map(value => tsValueToJsonValueFns.string(value));
  if (value.recentBlockhash !== undefined) result.recentBlockhash = tsValueToJsonValueFns.string(value.recentBlockhash);
  result.instructions = value.instructions.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.api.TransactionMessageZeta {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  result.accountKeys = value.accountKeys?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.recentBlockhash !== undefined) result.recentBlockhash = jsonValueToTsValueFns.string(value.recentBlockhash);
  result.instructions = value.instructions?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.TransactionMessageZeta): Uint8Array {
  const result: WireMessage = [];
  if (value.header !== undefined) {
    const tsValue = value.header;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.accountKeys) {
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.recentBlockhash !== undefined) {
    const tsValue = value.recentBlockhash;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.instructions) {
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TransactionMessageZeta {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.header = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.accountKeys = value as any;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.recentBlockhash = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.instructions = value as any;
  }
  return result;
}
