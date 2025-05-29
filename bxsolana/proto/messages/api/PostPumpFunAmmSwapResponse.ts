import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
import {
  Type as Fee,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../common/Fee";
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
  export interface PostPumpFunAmmSwapResponse {
    transactions: TransactionMessage[];
    buyQuoteAmountIn: number;
    buyUserQuoteAmountIn: number;
    buyMaxQuoteAmountIn: number;
    buyBaseAmountOut: number;
    sellBaseAmountIn: number;
    sellMinQuoteAmountOut: number;
    sellQuoteAmountOut: number;
    sellUserQuoteAmountOut: number;
    fees: Fee[];
  }
}
export type Type = $.api.PostPumpFunAmmSwapResponse;

export function getDefaultValue(): $.api.PostPumpFunAmmSwapResponse {
  return {
    transactions: [],
    buyQuoteAmountIn: 0,
    buyUserQuoteAmountIn: 0,
    buyMaxQuoteAmountIn: 0,
    buyBaseAmountOut: 0,
    sellBaseAmountIn: 0,
    sellMinQuoteAmountOut: 0,
    sellQuoteAmountOut: 0,
    sellUserQuoteAmountOut: 0,
    fees: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostPumpFunAmmSwapResponse>): $.api.PostPumpFunAmmSwapResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostPumpFunAmmSwapResponse): unknown {
  const result: any = {};
  result.transactions = value.transactions.map(value => encodeJson_1(value));
  if (value.buyQuoteAmountIn !== undefined) result.buyQuoteAmountIn = tsValueToJsonValueFns.double(value.buyQuoteAmountIn);
  if (value.buyUserQuoteAmountIn !== undefined) result.buyUserQuoteAmountIn = tsValueToJsonValueFns.double(value.buyUserQuoteAmountIn);
  if (value.buyMaxQuoteAmountIn !== undefined) result.buyMaxQuoteAmountIn = tsValueToJsonValueFns.double(value.buyMaxQuoteAmountIn);
  if (value.buyBaseAmountOut !== undefined) result.buyBaseAmountOut = tsValueToJsonValueFns.double(value.buyBaseAmountOut);
  if (value.sellBaseAmountIn !== undefined) result.sellBaseAmountIn = tsValueToJsonValueFns.double(value.sellBaseAmountIn);
  if (value.sellMinQuoteAmountOut !== undefined) result.sellMinQuoteAmountOut = tsValueToJsonValueFns.double(value.sellMinQuoteAmountOut);
  if (value.sellQuoteAmountOut !== undefined) result.sellQuoteAmountOut = tsValueToJsonValueFns.double(value.sellQuoteAmountOut);
  if (value.sellUserQuoteAmountOut !== undefined) result.sellUserQuoteAmountOut = tsValueToJsonValueFns.double(value.sellUserQuoteAmountOut);
  result.fees = value.fees.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.api.PostPumpFunAmmSwapResponse {
  const result = getDefaultValue();
  result.transactions = value.transactions?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.buyQuoteAmountIn !== undefined) result.buyQuoteAmountIn = jsonValueToTsValueFns.double(value.buyQuoteAmountIn);
  if (value.buyUserQuoteAmountIn !== undefined) result.buyUserQuoteAmountIn = jsonValueToTsValueFns.double(value.buyUserQuoteAmountIn);
  if (value.buyMaxQuoteAmountIn !== undefined) result.buyMaxQuoteAmountIn = jsonValueToTsValueFns.double(value.buyMaxQuoteAmountIn);
  if (value.buyBaseAmountOut !== undefined) result.buyBaseAmountOut = jsonValueToTsValueFns.double(value.buyBaseAmountOut);
  if (value.sellBaseAmountIn !== undefined) result.sellBaseAmountIn = jsonValueToTsValueFns.double(value.sellBaseAmountIn);
  if (value.sellMinQuoteAmountOut !== undefined) result.sellMinQuoteAmountOut = jsonValueToTsValueFns.double(value.sellMinQuoteAmountOut);
  if (value.sellQuoteAmountOut !== undefined) result.sellQuoteAmountOut = jsonValueToTsValueFns.double(value.sellQuoteAmountOut);
  if (value.sellUserQuoteAmountOut !== undefined) result.sellUserQuoteAmountOut = jsonValueToTsValueFns.double(value.sellUserQuoteAmountOut);
  result.fees = value.fees?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostPumpFunAmmSwapResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.transactions) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.buyQuoteAmountIn !== undefined) {
    const tsValue = value.buyQuoteAmountIn;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.buyUserQuoteAmountIn !== undefined) {
    const tsValue = value.buyUserQuoteAmountIn;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.buyMaxQuoteAmountIn !== undefined) {
    const tsValue = value.buyMaxQuoteAmountIn;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.buyBaseAmountOut !== undefined) {
    const tsValue = value.buyBaseAmountOut;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellBaseAmountIn !== undefined) {
    const tsValue = value.sellBaseAmountIn;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellMinQuoteAmountOut !== undefined) {
    const tsValue = value.sellMinQuoteAmountOut;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellQuoteAmountOut !== undefined) {
    const tsValue = value.sellQuoteAmountOut;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellUserQuoteAmountOut !== undefined) {
    const tsValue = value.sellUserQuoteAmountOut;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  for (const tsValue of value.fees) {
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostPumpFunAmmSwapResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buyQuoteAmountIn = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buyUserQuoteAmountIn = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buyMaxQuoteAmountIn = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buyBaseAmountOut = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellBaseAmountIn = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellMinQuoteAmountOut = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellQuoteAmountOut = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellUserQuoteAmountOut = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.fees = value as any;
  }
  return result;
}
