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
  export interface GetRegionsResponse {
    currentRegion: string;
    availableRegions: string[];
  }
}
export type Type = $.searcher.GetRegionsResponse;

export function getDefaultValue(): $.searcher.GetRegionsResponse {
  return {
    currentRegion: "",
    availableRegions: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.GetRegionsResponse>): $.searcher.GetRegionsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.GetRegionsResponse): unknown {
  const result: any = {};
  if (value.currentRegion !== undefined) result.currentRegion = tsValueToJsonValueFns.string(value.currentRegion);
  result.availableRegions = value.availableRegions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.searcher.GetRegionsResponse {
  const result = getDefaultValue();
  if (value.currentRegion !== undefined) result.currentRegion = jsonValueToTsValueFns.string(value.currentRegion);
  result.availableRegions = value.availableRegions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.GetRegionsResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.currentRegion !== undefined) {
    const tsValue = value.currentRegion;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.availableRegions) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.GetRegionsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.currentRegion = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.availableRegions = value as any;
  }
  return result;
}
