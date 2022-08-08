import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export interface GetKlineRequest {
    market: string;
    from?: unknown;
    to?: unknown;
    resolution: string;
    limit: number;
  }
}
export type Type = $.api.GetKlineRequest;

export function getDefaultValue(): $.api.GetKlineRequest {
  return {
    market: "",
    from: undefined,
    to: undefined,
    resolution: "",
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetKlineRequest>): $.api.GetKlineRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetKlineRequest): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.from !== undefined) result.from = undefined;
  if (value.to !== undefined) result.to = undefined;
  if (value.resolution !== undefined) result.resolution = tsValueToJsonValueFns.string(value.resolution);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetKlineRequest {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.from !== undefined) result.from = undefined;
  if (value.to !== undefined) result.to = undefined;
  if (value.resolution !== undefined) result.resolution = jsonValueToTsValueFns.string(value.resolution);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetKlineRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.from !== undefined) {
    const tsValue = value.from;
    result.push(
      [2, undefined],
    );
  }
  if (value.to !== undefined) {
    const tsValue = value.to;
    result.push(
      [3, undefined],
    );
  }
  if (value.resolution !== undefined) {
    const tsValue = value.resolution;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [5, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetKlineRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.resolution = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  return result;
}
