import {
  Type as LeaderSchedule,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./LeaderSchedule";
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
  export interface GetLeaderScheduleResponse {
    currentSlot: string;
    leaderSchedule: LeaderSchedule[];
  }
}
export type Type = $.api.GetLeaderScheduleResponse;

export function getDefaultValue(): $.api.GetLeaderScheduleResponse {
  return {
    currentSlot: "0",
    leaderSchedule: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetLeaderScheduleResponse>): $.api.GetLeaderScheduleResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetLeaderScheduleResponse): unknown {
  const result: any = {};
  if (value.currentSlot !== undefined) result.currentSlot = tsValueToJsonValueFns.uint64(value.currentSlot);
  result.leaderSchedule = value.leaderSchedule.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetLeaderScheduleResponse {
  const result = getDefaultValue();
  if (value.currentSlot !== undefined) result.currentSlot = jsonValueToTsValueFns.uint64(value.currentSlot);
  result.leaderSchedule = value.leaderSchedule?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetLeaderScheduleResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.currentSlot !== undefined) {
    const tsValue = value.currentSlot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.leaderSchedule) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetLeaderScheduleResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.currentSlot = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.leaderSchedule = value as any;
  }
  return result;
}
