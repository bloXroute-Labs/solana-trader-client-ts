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
  export interface PostLiquidateDriftPerpRequest {
    ownerAddress: string;
    settleeAccountAddress: string;
    contract: string;
    amount: number;
  }
}
export type Type = $.api.PostLiquidateDriftPerpRequest;

export function getDefaultValue(): $.api.PostLiquidateDriftPerpRequest {
  return {
    ownerAddress: "",
    settleeAccountAddress: "",
    contract: "",
    amount: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PostLiquidateDriftPerpRequest>): $.api.PostLiquidateDriftPerpRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostLiquidateDriftPerpRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.settleeAccountAddress !== undefined) result.settleeAccountAddress = tsValueToJsonValueFns.string(value.settleeAccountAddress);
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  return result;
}

export function decodeJson(value: any): $.api.PostLiquidateDriftPerpRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.settleeAccountAddress !== undefined) result.settleeAccountAddress = jsonValueToTsValueFns.string(value.settleeAccountAddress);
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  return result;
}

export function encodeBinary(value: $.api.PostLiquidateDriftPerpRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.settleeAccountAddress !== undefined) {
    const tsValue = value.settleeAccountAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.contract !== undefined) {
    const tsValue = value.contract;
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

export function decodeBinary(binary: Uint8Array): $.api.PostLiquidateDriftPerpRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.settleeAccountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
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
