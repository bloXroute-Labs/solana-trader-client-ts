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
  export interface StreamInfo {
    streamName: string;
    subscriptionID: string;
    startTime: string;
    creditUsed: string;
  }
}
export type Type = $.api.StreamInfo;

export function getDefaultValue(): $.api.StreamInfo {
  return {
    streamName: "",
    subscriptionID: "",
    startTime: "0",
    creditUsed: "0",
  };
}

export function createValue(partialValue: Partial<$.api.StreamInfo>): $.api.StreamInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.StreamInfo): unknown {
  const result: any = {};
  if (value.streamName !== undefined) result.streamName = tsValueToJsonValueFns.string(value.streamName);
  if (value.subscriptionID !== undefined) result.subscriptionID = tsValueToJsonValueFns.string(value.subscriptionID);
  if (value.startTime !== undefined) result.startTime = tsValueToJsonValueFns.int64(value.startTime);
  if (value.creditUsed !== undefined) result.creditUsed = tsValueToJsonValueFns.int64(value.creditUsed);
  return result;
}

export function decodeJson(value: any): $.api.StreamInfo {
  const result = getDefaultValue();
  if (value.streamName !== undefined) result.streamName = jsonValueToTsValueFns.string(value.streamName);
  if (value.subscriptionID !== undefined) result.subscriptionID = jsonValueToTsValueFns.string(value.subscriptionID);
  if (value.startTime !== undefined) result.startTime = jsonValueToTsValueFns.int64(value.startTime);
  if (value.creditUsed !== undefined) result.creditUsed = jsonValueToTsValueFns.int64(value.creditUsed);
  return result;
}

export function encodeBinary(value: $.api.StreamInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.streamName !== undefined) {
    const tsValue = value.streamName;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.subscriptionID !== undefined) {
    const tsValue = value.subscriptionID;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.startTime !== undefined) {
    const tsValue = value.startTime;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.creditUsed !== undefined) {
    const tsValue = value.creditUsed;
    result.push(
      [4, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.StreamInfo {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.streamName = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.subscriptionID = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.startTime = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.creditUsed = value;
  }
  return result;
}
