import {
  Type as ConnectedLeadersResponse,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ConnectedLeadersResponse";
import {
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

export declare namespace $.searcher {
  export interface ConnectedLeadersRegionedResponse {
    connectedValidators: Map<string, ConnectedLeadersResponse>;
  }
}
export type Type = $.searcher.ConnectedLeadersRegionedResponse;

export function getDefaultValue(): $.searcher.ConnectedLeadersRegionedResponse {
  return {
    connectedValidators: new Map(),
  };
}

export function createValue(partialValue: Partial<$.searcher.ConnectedLeadersRegionedResponse>): $.searcher.ConnectedLeadersRegionedResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.ConnectedLeadersRegionedResponse): unknown {
  const result: any = {};
  if (value.connectedValidators !== undefined) result.connectedValidators = Object.fromEntries([...value.connectedValidators.entries()].map(([key, value]) => [key, encodeJson_1(value)]));
  return result;
}

export function decodeJson(value: any): $.searcher.ConnectedLeadersRegionedResponse {
  const result = getDefaultValue();
  if (value.connectedValidators !== undefined) result.connectedValidators = Object.fromEntries([...value.connectedValidators.entries()].map(([key, value]) => [key, decodeJson_1(value)]));
  return result;
}

export function encodeBinary(value: $.searcher.ConnectedLeadersRegionedResponse): Uint8Array {
  const result: WireMessage = [];
  {
    const fields = value.connectedValidators.entries();
    for (const [key, value] of fields) {
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(value) }]]) }],
      );
    }
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.searcher.ConnectedLeadersRegionedResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_1(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.connectedValidators = new Map(value as any);
  }
  return result;
}
