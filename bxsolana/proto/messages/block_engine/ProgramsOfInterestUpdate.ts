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
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.block_engine {
  export interface ProgramsOfInterestUpdate {
    programs: string[];
  }
}
export type Type = $.block_engine.ProgramsOfInterestUpdate;

export function getDefaultValue(): $.block_engine.ProgramsOfInterestUpdate {
  return {
    programs: [],
  };
}

export function createValue(partialValue: Partial<$.block_engine.ProgramsOfInterestUpdate>): $.block_engine.ProgramsOfInterestUpdate {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.ProgramsOfInterestUpdate): unknown {
  const result: any = {};
  result.programs = value.programs.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.block_engine.ProgramsOfInterestUpdate {
  const result = getDefaultValue();
  result.programs = value.programs?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.block_engine.ProgramsOfInterestUpdate): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.programs) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.ProgramsOfInterestUpdate {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.programs = value as any;
  }
  return result;
}
