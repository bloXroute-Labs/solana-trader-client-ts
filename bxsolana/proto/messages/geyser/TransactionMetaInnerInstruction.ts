import {
  Type as Instruction,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Instruction.js";
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
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface TransactionMetaInnerInstruction {
    index: number;
    instructions: Instruction[];
  }
}
export type Type = $.geyser.TransactionMetaInnerInstruction;

export function getDefaultValue(): $.geyser.TransactionMetaInnerInstruction {
  return {
    index: 0,
    instructions: [],
  };
}

export function createValue(partialValue: Partial<$.geyser.TransactionMetaInnerInstruction>): $.geyser.TransactionMetaInnerInstruction {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.TransactionMetaInnerInstruction): unknown {
  const result: any = {};
  if (value.index !== undefined) result.index = tsValueToJsonValueFns.uint32(value.index);
  result.instructions = value.instructions.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.geyser.TransactionMetaInnerInstruction {
  const result = getDefaultValue();
  if (value.index !== undefined) result.index = jsonValueToTsValueFns.uint32(value.index);
  result.instructions = value.instructions?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.geyser.TransactionMetaInnerInstruction): Uint8Array {
  const result: WireMessage = [];
  if (value.index !== undefined) {
    const tsValue = value.index;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  for (const tsValue of value.instructions) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.TransactionMetaInnerInstruction {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.index = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.instructions = value as any;
  }
  return result;
}
