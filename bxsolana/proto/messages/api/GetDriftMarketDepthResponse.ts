import {
  Type as DriftMarketDepthItem,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./DriftMarketDepthItem";
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
  export interface GetDriftMarketDepthResponse {
    contract: string;
    bids: DriftMarketDepthItem[];
    asks: DriftMarketDepthItem[];
  }
}
export type Type = $.api.GetDriftMarketDepthResponse;

export function getDefaultValue(): $.api.GetDriftMarketDepthResponse {
  return {
    contract: "",
    bids: [],
    asks: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarketDepthResponse>): $.api.GetDriftMarketDepthResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarketDepthResponse): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  result.bids = value.bids.map(value => encodeJson_1(value));
  result.asks = value.asks.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarketDepthResponse {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  result.bids = value.bids?.map((value: any) => decodeJson_1(value)) ?? [];
  result.asks = value.asks?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarketDepthResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.bids) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.asks) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarketDepthResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bids = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.asks = value as any;
  }
  return result;
}
