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
  export interface GetDriftMarketDepthsStreamRequest {
    contracts: string[];
    limit: number;
  }
}
export type Type = $.api.GetDriftMarketDepthsStreamRequest;

export function getDefaultValue(): $.api.GetDriftMarketDepthsStreamRequest {
  return {
    contracts: [],
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarketDepthsStreamRequest>): $.api.GetDriftMarketDepthsStreamRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarketDepthsStreamRequest): unknown {
  const result: any = {};
  result.contracts = value.contracts.map(value => tsValueToJsonValueFns.string(value));
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarketDepthsStreamRequest {
  const result = getDefaultValue();
  result.contracts = value.contracts?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarketDepthsStreamRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.contracts) {
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

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarketDepthsStreamRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.contracts = value as any;
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
