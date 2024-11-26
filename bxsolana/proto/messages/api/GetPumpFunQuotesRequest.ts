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
  export interface GetPumpFunQuotesRequest {
    quoteType: string;
    mintAddress: string;
    bondingCurveAddress: string;
    amount: number;
  }
}
export type Type = $.api.GetPumpFunQuotesRequest;

export function getDefaultValue(): $.api.GetPumpFunQuotesRequest {
  return {
    quoteType: "",
    mintAddress: "",
    bondingCurveAddress: "",
    amount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunQuotesRequest>): $.api.GetPumpFunQuotesRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunQuotesRequest): unknown {
  const result: any = {};
  if (value.quoteType !== undefined) result.quoteType = tsValueToJsonValueFns.string(value.quoteType);
  if (value.mintAddress !== undefined) result.mintAddress = tsValueToJsonValueFns.string(value.mintAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = tsValueToJsonValueFns.string(value.bondingCurveAddress);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunQuotesRequest {
  const result = getDefaultValue();
  if (value.quoteType !== undefined) result.quoteType = jsonValueToTsValueFns.string(value.quoteType);
  if (value.mintAddress !== undefined) result.mintAddress = jsonValueToTsValueFns.string(value.mintAddress);
  if (value.bondingCurveAddress !== undefined) result.bondingCurveAddress = jsonValueToTsValueFns.string(value.bondingCurveAddress);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunQuotesRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.quoteType !== undefined) {
    const tsValue = value.quoteType;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.mintAddress !== undefined) {
    const tsValue = value.mintAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bondingCurveAddress !== undefined) {
    const tsValue = value.bondingCurveAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunQuotesRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteType = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.mintAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bondingCurveAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  return result;
}
