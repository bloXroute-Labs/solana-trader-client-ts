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
  export interface GetPumpFunAmmQuotesRequest {
    inToken: string;
    inAmount: number;
    outToken: string;
    pool: string;
    slippage: number;
  }
}
export type Type = $.api.GetPumpFunAmmQuotesRequest;

export function getDefaultValue(): $.api.GetPumpFunAmmQuotesRequest {
  return {
    inToken: "",
    inAmount: 0,
    outToken: "",
    pool: "",
    slippage: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPumpFunAmmQuotesRequest>): $.api.GetPumpFunAmmQuotesRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPumpFunAmmQuotesRequest): unknown {
  const result: any = {};
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.pool !== undefined) result.pool = tsValueToJsonValueFns.string(value.pool);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunAmmQuotesRequest {
  const result = getDefaultValue();
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.pool !== undefined) result.pool = jsonValueToTsValueFns.string(value.pool);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunAmmQuotesRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pool !== undefined) {
    const tsValue = value.pool;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunAmmQuotesRequest {
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
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
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
    result.pool = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  return result;
}
