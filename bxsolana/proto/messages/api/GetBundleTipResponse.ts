import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
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
  export interface GetBundleTipResponse {
    timestamp?: Timestamp;
    percentile25: number;
    percentile50: number;
    percentile75: number;
    percentile95: number;
    percentile99: number;
    emaPercentile50: number;
  }
}
export type Type = $.api.GetBundleTipResponse;

export function getDefaultValue(): $.api.GetBundleTipResponse {
  return {
    timestamp: undefined,
    percentile25: 0,
    percentile50: 0,
    percentile75: 0,
    percentile95: 0,
    percentile99: 0,
    emaPercentile50: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetBundleTipResponse>): $.api.GetBundleTipResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBundleTipResponse): unknown {
  const result: any = {};
  if (value.timestamp !== undefined) result.timestamp = encodeJson_1(value.timestamp);
  if (value.percentile25 !== undefined) result.percentile25 = tsValueToJsonValueFns.double(value.percentile25);
  if (value.percentile50 !== undefined) result.percentile50 = tsValueToJsonValueFns.double(value.percentile50);
  if (value.percentile75 !== undefined) result.percentile75 = tsValueToJsonValueFns.double(value.percentile75);
  if (value.percentile95 !== undefined) result.percentile95 = tsValueToJsonValueFns.double(value.percentile95);
  if (value.percentile99 !== undefined) result.percentile99 = tsValueToJsonValueFns.double(value.percentile99);
  if (value.emaPercentile50 !== undefined) result.emaPercentile50 = tsValueToJsonValueFns.double(value.emaPercentile50);
  return result;
}

export function decodeJson(value: any): $.api.GetBundleTipResponse {
  const result = getDefaultValue();
  if (value.timestamp !== undefined) result.timestamp = decodeJson_1(value.timestamp);
  if (value.percentile25 !== undefined) result.percentile25 = jsonValueToTsValueFns.double(value.percentile25);
  if (value.percentile50 !== undefined) result.percentile50 = jsonValueToTsValueFns.double(value.percentile50);
  if (value.percentile75 !== undefined) result.percentile75 = jsonValueToTsValueFns.double(value.percentile75);
  if (value.percentile95 !== undefined) result.percentile95 = jsonValueToTsValueFns.double(value.percentile95);
  if (value.percentile99 !== undefined) result.percentile99 = jsonValueToTsValueFns.double(value.percentile99);
  if (value.emaPercentile50 !== undefined) result.emaPercentile50 = jsonValueToTsValueFns.double(value.emaPercentile50);
  return result;
}

export function encodeBinary(value: $.api.GetBundleTipResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.percentile25 !== undefined) {
    const tsValue = value.percentile25;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.percentile50 !== undefined) {
    const tsValue = value.percentile50;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.percentile75 !== undefined) {
    const tsValue = value.percentile75;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.percentile95 !== undefined) {
    const tsValue = value.percentile95;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.percentile99 !== undefined) {
    const tsValue = value.percentile99;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.emaPercentile50 !== undefined) {
    const tsValue = value.emaPercentile50;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBundleTipResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile25 = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile50 = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile75 = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile95 = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile99 = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.emaPercentile50 = value;
  }
  return result;
}
