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
  export interface GetOrderbooksRequest {
    markets: string[];
    limit: number;
  }
}
export type Type = $.api.GetOrderbooksRequest;

export function getDefaultValue(): $.api.GetOrderbooksRequest {
  return {
    markets: [],
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderbooksRequest>): $.api.GetOrderbooksRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderbooksRequest): unknown {
  const result: any = {};
  result.markets = value.markets.map(value => tsValueToJsonValueFns.string(value));
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderbooksRequest {
  const result = getDefaultValue();
  result.markets = value.markets?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetOrderbooksRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.markets) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderbooksRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.markets = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  return result;
}
