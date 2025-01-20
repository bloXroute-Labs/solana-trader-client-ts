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
  export interface LeaderSchedule {
    slot: string;
    leader: string;
    isJito: boolean;
    isLowRisk: boolean;
  }
}
export type Type = $.api.LeaderSchedule;

export function getDefaultValue(): $.api.LeaderSchedule {
  return {
    slot: "0",
    leader: "",
    isJito: false,
    isLowRisk: false,
  };
}

export function createValue(partialValue: Partial<$.api.LeaderSchedule>): $.api.LeaderSchedule {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.LeaderSchedule): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.leader !== undefined) result.leader = tsValueToJsonValueFns.string(value.leader);
  if (value.isJito !== undefined) result.isJito = tsValueToJsonValueFns.bool(value.isJito);
  if (value.isLowRisk !== undefined) result.isLowRisk = tsValueToJsonValueFns.bool(value.isLowRisk);
  return result;
}

export function decodeJson(value: any): $.api.LeaderSchedule {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.leader !== undefined) result.leader = jsonValueToTsValueFns.string(value.leader);
  if (value.isJito !== undefined) result.isJito = jsonValueToTsValueFns.bool(value.isJito);
  if (value.isLowRisk !== undefined) result.isLowRisk = jsonValueToTsValueFns.bool(value.isLowRisk);
  return result;
}

export function encodeBinary(value: $.api.LeaderSchedule): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.leader !== undefined) {
    const tsValue = value.leader;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isJito !== undefined) {
    const tsValue = value.isJito;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.isLowRisk !== undefined) {
    const tsValue = value.isLowRisk;
    result.push(
      [4, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.LeaderSchedule {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.leader = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isJito = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isLowRisk = value;
  }
  return result;
}
