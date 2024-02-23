import {
  Type as AccountMeta,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./AccountMeta";
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
  export interface InstructionJupiter {
    programID: string;
    accounts: AccountMeta[];
    data: Uint8Array;
  }
}
export type Type = $.api.InstructionJupiter;

export function getDefaultValue(): $.api.InstructionJupiter {
  return {
    programID: "",
    accounts: [],
    data: new Uint8Array(),
  };
}

export function createValue(partialValue: Partial<$.api.InstructionJupiter>): $.api.InstructionJupiter {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.InstructionJupiter): unknown {
  const result: any = {};
  if (value.programID !== undefined) result.programID = tsValueToJsonValueFns.string(value.programID);
  result.accounts = value.accounts.map(value => encodeJson_1(value));
  if (value.data !== undefined) result.data = tsValueToJsonValueFns.bytes(value.data);
  return result;
}

export function decodeJson(value: any): $.api.InstructionJupiter {
  const result = getDefaultValue();
  if (value.programID !== undefined) result.programID = jsonValueToTsValueFns.string(value.programID);
  result.accounts = value.accounts?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.data !== undefined) result.data = jsonValueToTsValueFns.bytes(value.data);
  return result;
}

export function encodeBinary(value: $.api.InstructionJupiter): Uint8Array {
  const result: WireMessage = [];
  if (value.programID !== undefined) {
    const tsValue = value.programID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.accounts) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
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

export function decodeBinary(binary: Uint8Array): $.api.InstructionJupiter {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.programID = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
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
