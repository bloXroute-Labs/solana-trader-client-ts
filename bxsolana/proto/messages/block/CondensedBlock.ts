import {
  Type as Header,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Header";
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

export declare namespace $.block {
  export interface CondensedBlock {
    header?: Header;
    previousBlockhash: string;
    blockhash: string;
    parentSlot: string;
    versionedTransactions: Uint8Array[];
    slot: string;
    commitment: string;
  }
}
export type Type = $.block.CondensedBlock;

export function getDefaultValue(): $.block.CondensedBlock {
  return {
    header: undefined,
    previousBlockhash: "",
    blockhash: "",
    parentSlot: "0",
    versionedTransactions: [],
    slot: "0",
    commitment: "",
  };
}

export function createValue(partialValue: Partial<$.block.CondensedBlock>): $.block.CondensedBlock {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block.CondensedBlock): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  if (value.previousBlockhash !== undefined) result.previousBlockhash = tsValueToJsonValueFns.string(value.previousBlockhash);
  if (value.blockhash !== undefined) result.blockhash = tsValueToJsonValueFns.string(value.blockhash);
  if (value.parentSlot !== undefined) result.parentSlot = tsValueToJsonValueFns.uint64(value.parentSlot);
  result.versionedTransactions = value.versionedTransactions.map(value => tsValueToJsonValueFns.bytes(value));
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.commitment !== undefined) result.commitment = tsValueToJsonValueFns.string(value.commitment);
  return result;
}

export function decodeJson(value: any): $.block.CondensedBlock {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  if (value.previousBlockhash !== undefined) result.previousBlockhash = jsonValueToTsValueFns.string(value.previousBlockhash);
  if (value.blockhash !== undefined) result.blockhash = jsonValueToTsValueFns.string(value.blockhash);
  if (value.parentSlot !== undefined) result.parentSlot = jsonValueToTsValueFns.uint64(value.parentSlot);
  result.versionedTransactions = value.versionedTransactions?.map((value: any) => jsonValueToTsValueFns.bytes(value)) ?? [];
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.commitment !== undefined) result.commitment = jsonValueToTsValueFns.string(value.commitment);
  return result;
}

export function encodeBinary(value: $.block.CondensedBlock): Uint8Array {
  const result: WireMessage = [];
  if (value.header !== undefined) {
    const tsValue = value.header;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.previousBlockhash !== undefined) {
    const tsValue = value.previousBlockhash;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.blockhash !== undefined) {
    const tsValue = value.blockhash;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.parentSlot !== undefined) {
    const tsValue = value.parentSlot;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.versionedTransactions) {
    result.push(
      [5, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.commitment !== undefined) {
    const tsValue = value.commitment;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block.CondensedBlock {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.header = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.previousBlockhash = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.blockhash = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.parentSlot = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 5).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.bytes(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.versionedTransactions = value as any;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.commitment = value;
  }
  return result;
}
