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
  export interface ConnectedLeadersRegionedRequest {
    regions: string[];
  }
}
export type Type = $.searcher.ConnectedLeadersRegionedRequest;

export function getDefaultValue(): $.searcher.ConnectedLeadersRegionedRequest {
  return {
    regions: [],
  };
}

export function createValue(partialValue: Partial<$.searcher.ConnectedLeadersRegionedRequest>): $.searcher.ConnectedLeadersRegionedRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.ConnectedLeadersRegionedRequest): unknown {
  const result: any = {};
  result.regions = value.regions.map(value => tsValueToJsonValueFns.string(value));
  return result;
}

export function decodeJson(value: any): $.searcher.ConnectedLeadersRegionedRequest {
  const result = getDefaultValue();
  result.regions = value.regions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.searcher.ConnectedLeadersRegionedRequest): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.regions) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.ConnectedLeadersRegionedRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.regions = value as any;
  }
  return result;
}
