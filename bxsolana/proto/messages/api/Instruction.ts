import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
  unpackFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface Instruction {
    programIdIndex: number;
    accounts: number[];
    data: Uint8Array;
  }
}
export type Type = $.api.Instruction;

export function getDefaultValue(): $.api.Instruction {
  return {
    programIdIndex: 0,
    accounts: [],
    data: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.api.Instruction>): $.api.Instruction {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Instruction): unknown {
  const result: any = {};
  if (value.programIdIndex !== undefined) result.programIdIndex = tsValueToJsonValueFns.uint32(value.programIdIndex);
  result.accounts = value.accounts.map(value => tsValueToJsonValueFns.uint32(value));
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.bytes(value.data);
  return result;
}

export function decodeJson(value: any): $.api.Instruction {
  const result = getDefaultValue();
  if (value.programIdIndex !== undefined) result.programIdIndex = jsonValueToTsValueFns.uint32(value.programIdIndex);
  result.accounts = value.accounts?.map((value: any) => jsonValueToTsValueFns.uint32(value)) ?? [];
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.bytes(value.data);
  return result;
}

export function encodeBinary(value: $.api.Instruction): Uint8Array {
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
      [3, tsValueToWireValueFns.bytes(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Instruction {
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
    const value = wireValueToTsValueFns.bytes(wireValue);
    if (value === undefined) break field;
    result.data = value;
  }
  return result;
}
