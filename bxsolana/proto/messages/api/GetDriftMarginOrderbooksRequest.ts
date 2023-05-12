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
  export interface GetDriftMarginOrderbooksRequest {
    markets: string[];
    limit: number;
    metadata: boolean;
  }
}
export type Type = $.api.GetDriftMarginOrderbooksRequest;

export function getDefaultValue(): $.api.GetDriftMarginOrderbooksRequest {
  return {
    markets: [],
    limit: 0,
    metadata: false,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarginOrderbooksRequest>): $.api.GetDriftMarginOrderbooksRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarginOrderbooksRequest): unknown {
  const result: any = {};
  result.markets = value.markets.map(value => tsValueToJsonValueFns.string(value));
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  if (value.metadata !== undefined) result.metadata = tsValueToJsonValueFns.bool(value.metadata);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarginOrderbooksRequest {
  const result = getDefaultValue();
  result.markets = value.markets?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  if (value.metadata !== undefined) result.metadata = jsonValueToTsValueFns.bool(value.metadata);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarginOrderbooksRequest): Uint8Array {
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
  if (value.metadata !== undefined) {
    const tsValue = value.metadata;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarginOrderbooksRequest {
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
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.metadata = value;
  }
  return result;
}
