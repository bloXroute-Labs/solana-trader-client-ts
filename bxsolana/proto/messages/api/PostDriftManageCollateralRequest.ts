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
  export interface PostDriftManageCollateralRequest {
    accountAddress: string;
    amount: number;
    type: string;
    token: string;
    toAccountAddress: string;
  }
}
export type Type = $.api.PostDriftManageCollateralRequest;

export function getDefaultValue(): $.api.PostDriftManageCollateralRequest {
  return {
    accountAddress: "",
    amount: 0,
    type: "",
    token: "",
    toAccountAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftManageCollateralRequest>): $.api.PostDriftManageCollateralRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftManageCollateralRequest): unknown {
  const result: any = {};
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.amount !== undefined) result.amount = tsValueToJsonValueFns.double(value.amount);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.string(value.type);
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.string(value.token);
  if (value.toAccountAddress !== undefined) result.toAccountAddress = tsValueToJsonValueFns.string(value.toAccountAddress);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftManageCollateralRequest {
  const result = getDefaultValue();
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.amount !== undefined) result.amount = jsonValueToTsValueFns.double(value.amount);
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.string(value.type);
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.string(value.token);
  if (value.toAccountAddress !== undefined) result.toAccountAddress = jsonValueToTsValueFns.string(value.toAccountAddress);
  return result;
}

export function encodeBinary(value: $.api.PostDriftManageCollateralRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.amount !== undefined) {
    const tsValue = value.amount;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.token !== undefined) {
    const tsValue = value.token;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.toAccountAddress !== undefined) {
    const tsValue = value.toAccountAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostDriftManageCollateralRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.amount = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.toAccountAddress = value;
  }
  return result;
}
