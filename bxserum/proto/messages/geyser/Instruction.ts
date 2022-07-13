import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
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
  export interface Instruction {
    programIdIndex: number;
    accounts: number[];
    data: string;
  }
}
export type Type = $.geyser.Instruction;

export function getDefaultValue(): $.geyser.Instruction {
  return {
    programIdIndex: 0,
    accounts: [],
    data: "",
  };
}

export function createValue(partialValue: Partial<$.geyser.Instruction>): $.geyser.Instruction {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.Instruction): unknown {
  const result: any = {};
  if (value.programIdIndex !== undefined) result.programIdIndex = tsValueToJsonValueFns.uint32(value.programIdIndex);
  result.accounts = value.accounts.map(value => tsValueToJsonValueFns.uint32(value));
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.string(value.data);
  return result;
}

export function decodeJson(value: any): $.geyser.Instruction {
  const result = getDefaultValue();
  if (value.programIdIndex !== undefined) result.programIdIndex = jsonValueToTsValueFns.uint32(value.programIdIndex);
  result.accounts = value.accounts?.map((value: any) => jsonValueToTsValueFns.uint32(value)) ?? [];
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.string(value.data);
  return result;
}

export function encodeBinary(value: $.geyser.Instruction): Uint8Array {
  const result: WireMessage = [];
  if (value.programIdIndex !== undefined) {
    const tsValue = value.programIdIndex;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  for (const tsValue of value.accounts) {
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.data !== undefined) {
    const tsValue = value.data;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.Instruction {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.programIdIndex = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = Array.from(unpackFns.uint32(wireValues));
    if (!value.length) break collection;
    result.accounts = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.data = value;
  }
  return result;
}
