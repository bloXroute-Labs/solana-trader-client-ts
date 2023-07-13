import {
  Type as StepProject,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./StepProject";
import {
  Type as PriceImpactPercentV2,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../common/PriceImpactPercentV2";
import {
  Type as Fee,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
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
  export interface JupiterQuoteStep {
    project?: StepProject;
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
  }
}
export type Type = $.api.JupiterQuoteStep;

export function getDefaultValue(): $.api.JupiterQuoteStep {
  return {
    project: undefined,
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
  };
}

export function createValue(partialValue: Partial<$.api.JupiterQuoteStep>): $.api.JupiterQuoteStep {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.JupiterQuoteStep): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = encodeJson_1(value.project);
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = tsValueToJsonValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = tsValueToJsonValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.priceImpactPercent !== undefined) result.priceImpactPercent = encodeJson_2(value.priceImpactPercent);
  if (value.fee !== undefined) result.fee = encodeJson_3(value.fee);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.double(value.outAmountMin);
  return result;
}

export function decodeJson(value: any): $.api.JupiterQuoteStep {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = decodeJson_1(value.project);
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inTokenAddress !== undefined) result.inTokenAddress = jsonValueToTsValueFns.string(value.inTokenAddress);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outTokenAddress !== undefined) result.outTokenAddress = jsonValueToTsValueFns.string(value.outTokenAddress);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.priceImpactPercent !== undefined) result.priceImpactPercent = decodeJson_2(value.priceImpactPercent);
  if (value.fee !== undefined) result.fee = decodeJson_3(value.fee);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.double(value.outAmountMin);
  return result;
}

export function encodeBinary(value: $.api.JupiterQuoteStep): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inTokenAddress !== undefined) {
    const tsValue = value.inTokenAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outTokenAddress !== undefined) {
    const tsValue = value.outTokenAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.priceImpactPercent !== undefined) {
    const tsValue = value.priceImpactPercent;
    result.push(
      [9, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  if (value.fee !== undefined) {
    const tsValue = value.fee;
    result.push(
      [10, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  if (value.outAmountMin !== undefined) {
    const tsValue = value.outAmountMin;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.JupiterQuoteStep {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outTokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.priceImpactPercent = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.fee = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmountMin = value;
  }
  return result;
}
