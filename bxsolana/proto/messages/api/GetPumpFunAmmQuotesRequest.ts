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
    quoteType: string;
    mintAddress: string;
    poolAddress: string;
    amount: number;
  }
}
export type Type = $.api.GetPumpFunAmmQuotesRequest;

export function getDefaultValue(): $.api.GetPumpFunAmmQuotesRequest {
  return {
    quoteType: "",
    mintAddress: "",
    poolAddress: "",
    amount: 0,
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
  if (value.quoteType !== undefined) result.quoteType = tsValueToJsonValueFns.string(value.quoteType);
  if (value.mintAddress !== undefined) result.mintAddress = tsValueToJsonValueFns.string(value.mintAddress);
  if (value.poolAddress !== undefined) result.poolAddress = tsValueToJsonValueFns.string(value.poolAddress);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.GetPumpFunAmmQuotesRequest {
  const result = getDefaultValue();
  if (value.quoteType !== undefined) result.quoteType = jsonValueToTsValueFns.string(value.quoteType);
  if (value.mintAddress !== undefined) result.mintAddress = jsonValueToTsValueFns.string(value.mintAddress);
  if (value.poolAddress !== undefined) result.poolAddress = jsonValueToTsValueFns.string(value.poolAddress);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.GetPumpFunAmmQuotesRequest): Uint8Array {
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
  if (value.poolAddress !== undefined) {
    const tsValue = value.poolAddress;
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

export function decodeBinary(binary: Uint8Array): $.api.GetPumpFunAmmQuotesRequest {
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
    result.poolAddress = value;
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
