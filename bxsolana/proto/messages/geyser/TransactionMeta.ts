import {
  Type as TransactionMetaInnerInstruction,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMetaInnerInstruction.js";
import {
  Type as TransactionMetaTokenBalance,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./TransactionMetaTokenBalance.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface TransactionMeta {
    err: string;
    errored: boolean;
    fee: string;
    preBalances: string[];
    postBalances: string[];
    innerInstructions: TransactionMetaInnerInstruction[];
    logMessages: string[];
    preTokenBalances: TransactionMetaTokenBalance[];
    postTokenBalances: TransactionMetaTokenBalance[];
  }
}
export type Type = $.geyser.TransactionMeta;

export function getDefaultValue(): $.geyser.TransactionMeta {
  return {
    err: "",
    errored: false,
    fee: "0",
    preBalances: [],
    postBalances: [],
    innerInstructions: [],
    logMessages: [],
    preTokenBalances: [],
    postTokenBalances: [],
  };
}

export function createValue(partialValue: Partial<$.geyser.TransactionMeta>): $.geyser.TransactionMeta {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.TransactionMeta): unknown {
  const result: any = {};
  if (value.err !== undefined) result.err = tsValueToJsonValueFns.string(value.err);
  if (value.errored !== undefined) result.errored = tsValueToJsonValueFns.bool(value.errored);
  if (value.fee !== undefined) result.fee = tsValueToJsonValueFns.uint64(value.fee);
  result.preBalances = value.preBalances.map(value => tsValueToJsonValueFns.uint64(value));
  result.postBalances = value.postBalances.map(value => tsValueToJsonValueFns.uint64(value));
  result.innerInstructions = value.innerInstructions.map(value => encodeJson_1(value));
  result.logMessages = value.logMessages.map(value => tsValueToJsonValueFns.string(value));
  result.preTokenBalances = value.preTokenBalances.map(value => encodeJson_2(value));
  result.postTokenBalances = value.postTokenBalances.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.geyser.TransactionMeta {
  const result = getDefaultValue();
  if (value.err !== undefined) result.err = jsonValueToTsValueFns.string(value.err);
  if (value.errored !== undefined) result.errored = jsonValueToTsValueFns.bool(value.errored);
  if (value.fee !== undefined) result.fee = jsonValueToTsValueFns.uint64(value.fee);
  result.preBalances = value.preBalances?.map((value: any) => jsonValueToTsValueFns.uint64(value)) ?? [];
  result.postBalances = value.postBalances?.map((value: any) => jsonValueToTsValueFns.uint64(value)) ?? [];
  result.innerInstructions = value.innerInstructions?.map((value: any) => decodeJson_1(value)) ?? [];
  result.logMessages = value.logMessages?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  result.preTokenBalances = value.preTokenBalances?.map((value: any) => decodeJson_2(value)) ?? [];
  result.postTokenBalances = value.postTokenBalances?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.geyser.TransactionMeta): Uint8Array {
  const result: WireMessage = [];
  if (value.err !== undefined) {
    const tsValue = value.err;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.errored !== undefined) {
    const tsValue = value.errored;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.fee !== undefined) {
    const tsValue = value.fee;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.preBalances) {
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.postBalances) {
    result.push(
      [5, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.innerInstructions) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.logMessages) {
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.preTokenBalances) {
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.postTokenBalances) {
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.TransactionMeta {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.err = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.errored = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.fee = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint64(wireValues));
    if (!value.length) break collection;
    result.preBalances = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint64(wireValues));
    if (!value.length) break collection;
    result.postBalances = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.innerInstructions = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.logMessages = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 8).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.preTokenBalances = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 9).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.postTokenBalances = value as any;
  }
  return result;
}
