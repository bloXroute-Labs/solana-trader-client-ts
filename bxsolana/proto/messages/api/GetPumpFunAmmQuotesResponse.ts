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
  export interface GetPumpFunAmmQuotesResponse {
    quoteType: string;
    inToken: string;
    inAmount: number;
    outToken: string;
    outAmount: number;
  }
}
export type Type = $.api.GetPumpFunAmmQuotesResponse;

export function getDefaultValue(): $.api.GetPumpFunAmmQuotesResponse {
  return {
    quoteType: "",
    inToken: "",
    inAmount: 0,
    outToken: "",
    outAmount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunAmmQuotesResponse>): $.api.GetPumpFunAmmQuotesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunAmmQuotesResponse): unknown {
  const result: any = {};
  if (value.quoteType !== undefined) result.quoteType = tsValueToJsonValueFns.string(value.quoteType);
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunAmmQuotesResponse {
  const result = getDefaultValue();
  if (value.quoteType !== undefined) result.quoteType = jsonValueToTsValueFns.string(value.quoteType);
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunAmmQuotesResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.quoteType !== undefined) {
    const tsValue = value.quoteType;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunAmmQuotesResponse {
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
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
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
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  return result;
}
