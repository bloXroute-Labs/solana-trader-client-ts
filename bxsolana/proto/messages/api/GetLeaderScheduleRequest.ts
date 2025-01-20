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
  export interface GetLeaderScheduleRequest {
    maxSlots: string;
  }
}
export type Type = $.api.GetLeaderScheduleRequest;

export function getDefaultValue(): $.api.GetLeaderScheduleRequest {
  return {
    maxSlots: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetLeaderScheduleRequest>): $.api.GetLeaderScheduleRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetLeaderScheduleRequest): unknown {
  const result: any = {};
  if (value.maxSlots !== undefined) result.maxSlots = tsValueToJsonValueFns.uint64(value.maxSlots);
  return result;
}

export function decodeJson(value: any): $.api.GetLeaderScheduleRequest {
  const result = getDefaultValue();
  if (value.maxSlots !== undefined) result.maxSlots = jsonValueToTsValueFns.uint64(value.maxSlots);
  return result;
}

export function encodeBinary(value: $.api.GetLeaderScheduleRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.maxSlots !== undefined) {
    const tsValue = value.maxSlots;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetLeaderScheduleRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.maxSlots = value;
  }
  return result;
}
