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
  export interface GetPriorityFeeResponse {
    percentile: number;
    feeAtPercentile: string;
  }
}
export type Type = $.api.GetPriorityFeeResponse;

export function getDefaultValue(): $.api.GetPriorityFeeResponse {
  return {
    percentile: 0,
    feeAtPercentile: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetPriorityFeeResponse>): $.api.GetPriorityFeeResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPriorityFeeResponse): unknown {
  const result: any = {};
  if (value.percentile !== undefined) result.percentile = tsValueToJsonValueFns.double(value.percentile);
  if (value.feeAtPercentile !== undefined) result.feeAtPercentile = tsValueToJsonValueFns.uint64(value.feeAtPercentile);
  return result;
}

export function decodeJson(value: any): $.api.GetPriorityFeeResponse {
  const result = getDefaultValue();
  if (value.percentile !== undefined) result.percentile = jsonValueToTsValueFns.double(value.percentile);
  if (value.feeAtPercentile !== undefined) result.feeAtPercentile = jsonValueToTsValueFns.uint64(value.feeAtPercentile);
  return result;
}

export function encodeBinary(value: $.api.GetPriorityFeeResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.percentile !== undefined) {
    const tsValue = value.percentile;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.feeAtPercentile !== undefined) {
    const tsValue = value.feeAtPercentile;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPriorityFeeResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.feeAtPercentile = value;
  }
  return result;
}
