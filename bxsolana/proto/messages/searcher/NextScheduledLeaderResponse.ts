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

export declare namespace $.searcher {
  export interface NextScheduledLeaderResponse {
    currentSlot: string;
    nextLeaderSlot: string;
    nextLeaderIdentity: string;
  }
}
export type Type = $.searcher.NextScheduledLeaderResponse;

export function getDefaultValue(): $.searcher.NextScheduledLeaderResponse {
  return {
    currentSlot: "0",
    nextLeaderSlot: "0",
    nextLeaderIdentity: "",
  };
}

export function createValue(partialValue: Partial<$.searcher.NextScheduledLeaderResponse>): $.searcher.NextScheduledLeaderResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.NextScheduledLeaderResponse): unknown {
  const result: any = {};
  if (value.currentSlot !== undefined) result.currentSlot = tsValueToJsonValueFns.uint64(value.currentSlot);
  if (value.nextLeaderSlot !== undefined) result.nextLeaderSlot = tsValueToJsonValueFns.uint64(value.nextLeaderSlot);
  if (value.nextLeaderIdentity !== undefined) result.nextLeaderIdentity = tsValueToJsonValueFns.string(value.nextLeaderIdentity);
  return result;
}

export function decodeJson(value: any): $.searcher.NextScheduledLeaderResponse {
  const result = getDefaultValue();
  if (value.currentSlot !== undefined) result.currentSlot = jsonValueToTsValueFns.uint64(value.currentSlot);
  if (value.nextLeaderSlot !== undefined) result.nextLeaderSlot = jsonValueToTsValueFns.uint64(value.nextLeaderSlot);
  if (value.nextLeaderIdentity !== undefined) result.nextLeaderIdentity = jsonValueToTsValueFns.string(value.nextLeaderIdentity);
  return result;
}

export function encodeBinary(value: $.searcher.NextScheduledLeaderResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.currentSlot !== undefined) {
    const tsValue = value.currentSlot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.nextLeaderSlot !== undefined) {
    const tsValue = value.nextLeaderSlot;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.nextLeaderIdentity !== undefined) {
    const tsValue = value.nextLeaderIdentity;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.NextScheduledLeaderResponse {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.nextLeaderSlot = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.nextLeaderIdentity = value;
  }
  return result;
}
