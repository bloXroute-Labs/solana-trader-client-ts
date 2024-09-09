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

export declare namespace $.api {
  export interface InstructionRequest {
    programIdIndex: number;
  }
}
export type Type = $.api.InstructionRequest;

export function getDefaultValue(): $.api.InstructionRequest {
  return {
    programIdIndex: 0,
  };
}

export function createValue(partialValue: Partial<$.api.InstructionRequest>): $.api.InstructionRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.InstructionRequest): unknown {
  const result: any = {};
  if (value.programIdIndex !== undefined) result.programIdIndex = tsValueToJsonValueFns.uint32(value.programIdIndex);
  return result;
}

export function decodeJson(value: any): $.api.InstructionRequest {
  const result = getDefaultValue();
  if (value.programIdIndex !== undefined) result.programIdIndex = jsonValueToTsValueFns.uint32(value.programIdIndex);
  return result;
}

export function encodeBinary(value: $.api.InstructionRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.programIdIndex !== undefined) {
    const tsValue = value.programIdIndex;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.InstructionRequest {
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
  return result;
}
