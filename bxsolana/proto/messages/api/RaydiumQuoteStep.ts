import {
  Type as PriceImpactPercentV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../common/PriceImpactPercentV2";
import {
  Type as Fee,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../common/Fee";
import {
  Type as StepProject,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./StepProject";
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
  export interface RaydiumQuoteStep {
    inToken: string;
    inTokenAddress: string;
    outToken: string;
    outTokenAddress: string;
    inAmount: number;
    outAmount: number;
    slippage: number;
    priceImpactPercent?: PriceImpactPercentV2;
    fee?: Fee;
    outAmountMin: number;
    project?: StepProject;
  }
}
export type Type = $.api.RaydiumQuoteStep;

export function getDefaultValue(): $.api.RaydiumQuoteStep {
  return {
    inToken: "",
    inTokenAddress: "",
    outToken: "",
    outTokenAddress: "",
    inAmount: 0,
    outAmount: 0,
    slippage: 0,
    priceImpactPercent: undefined,
    fee: undefined,
    outAmountMin: 0,
    project: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.RaydiumQuoteStep>): $.api.RaydiumQuoteStep {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.RaydiumQuoteStep): unknown {
  const result: any = {};
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = tsValueToJsonValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = tsValueToJsonValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.priceImpactPercent !== undefined) result.priceImpactPercent = encodeJson_1(value.priceImpactPercent);
  if (value.fee !== undefined) result.fee = encodeJson_2(value.fee);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.double(value.outAmountMin);
  if (value.project !== undefined) result.project = encodeJson_3(value.project);
  return result;
}

export function decodeJson(value: any): $.api.RaydiumQuoteStep {
  const result = getDefaultValue();
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = jsonValueToTsValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = jsonValueToTsValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.priceImpactPercent !== undefined) result.priceImpactPercent = decodeJson_1(value.priceImpactPercent);
  if (value.fee !== undefined) result.fee = decodeJson_2(value.fee);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.double(value.outAmountMin);
  if (value.project !== undefined) result.project = decodeJson_3(value.project);
  return result;
}

export function encodeBinary(value: $.api.RaydiumQuoteStep): Uint8Array {
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
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.priceImpactPercent !== undefined) {
    const tsValue = value.priceImpactPercent;
    result.push(
      [8, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.fee !== undefined) {
    const tsValue = value.fee;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.outAmountMin !== undefined) {
    const tsValue = value.outAmountMin;
    result.push(
      [10, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.RaydiumQuoteStep {
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
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.priceImpactPercent = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.fee = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmountMin = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
