import {
  Type as Context,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Context";
import {
  Type as PerpOrderbookItem,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./PerpOrderbookItem";
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
  export interface GetDriftPerpOrderbookResponse {
    context?: Context;
    contract: string;
    bids: PerpOrderbookItem[];
    asks: PerpOrderbookItem[];
  }
}
export type Type = $.api.GetDriftPerpOrderbookResponse;

export function getDefaultValue(): $.api.GetDriftPerpOrderbookResponse {
  return {
    context: undefined,
    contract: "",
    bids: [],
    asks: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftPerpOrderbookResponse>): $.api.GetDriftPerpOrderbookResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftPerpOrderbookResponse): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  result.bids = value.bids.map(value => encodeJson_2(value));
  result.asks = value.asks.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.api.GetDriftPerpOrderbookResponse {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  result.bids = value.bids?.map((value: any) => decodeJson_2(value)) ?? [];
  result.asks = value.asks?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetDriftPerpOrderbookResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.bids) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.asks) {
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftPerpOrderbookResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.bids = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 4).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.asks = value as any;
  }
  return result;
}
