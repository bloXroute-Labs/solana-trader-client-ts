import {
  Type as RaydiumQuoteRoute,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./RaydiumQuoteRoute";
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
  export interface GetRaydiumCPMMQuotesResponse {
    inToken: string;
    inTokenAddress: string;
    outToken: string;
    outTokenAddress: string;
    inAmount: number;
    tradeFeeRate: string;
    routes: RaydiumQuoteRoute[];
  }
}
export type Type = $.api.GetRaydiumCPMMQuotesResponse;

export function getDefaultValue(): $.api.GetRaydiumCPMMQuotesResponse {
  return {
    inToken: "",
    inTokenAddress: "",
    outToken: "",
    outTokenAddress: "",
    inAmount: 0,
    tradeFeeRate: "0",
    routes: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumCPMMQuotesResponse>): $.api.GetRaydiumCPMMQuotesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumCPMMQuotesResponse): unknown {
  const result: any = {};
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = tsValueToJsonValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = tsValueToJsonValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.tradeFeeRate !== undefined) result.tradeFeeRate = tsValueToJsonValueFns.uint64(value.tradeFeeRate);
  result.routes = value.routes.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumCPMMQuotesResponse {
  const result = getDefaultValue();
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = jsonValueToTsValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = jsonValueToTsValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.tradeFeeRate !== undefined) result.tradeFeeRate = jsonValueToTsValueFns.uint64(value.tradeFeeRate);
  result.routes = value.routes?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumCPMMQuotesResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inTokenAddress !== undefined) {
    const tsValue = value.inTokenAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outTokenAddress !== undefined) {
    const tsValue = value.outTokenAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.tradeFeeRate !== undefined) {
    const tsValue = value.tradeFeeRate;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  for (const tsValue of value.routes) {
    result.push(
      [7, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumCPMMQuotesResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tradeFeeRate = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 7).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.routes = value as any;
  }
  return result;
}
