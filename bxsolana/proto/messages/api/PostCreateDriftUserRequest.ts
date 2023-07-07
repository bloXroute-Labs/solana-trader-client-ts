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
  export interface PostCreateDriftUserRequest {
    ownerAddress: string;
    action: string;
    subAccountID: string;
    accountName: string;
  }
}
export type Type = $.api.PostCreateDriftUserRequest;

export function getDefaultValue(): $.api.PostCreateDriftUserRequest {
  return {
    ownerAddress: "",
    action: "",
    subAccountID: "0",
    accountName: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostCreateDriftUserRequest>): $.api.PostCreateDriftUserRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCreateDriftUserRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.action !== undefined) result.action = tsValueToJsonValueFns.string(value.action);
  if (value.subAccountID !== undefined) result.subAccountID = tsValueToJsonValueFns.uint64(value.subAccountID);
  if (value.accountName !== undefined) result.accountName = tsValueToJsonValueFns.string(value.accountName);
  return result;
}

export function decodeJson(value: any): $.api.PostCreateDriftUserRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.action !== undefined) result.action = jsonValueToTsValueFns.string(value.action);
  if (value.subAccountID !== undefined) result.subAccountID = jsonValueToTsValueFns.uint64(value.subAccountID);
  if (value.accountName !== undefined) result.accountName = jsonValueToTsValueFns.string(value.accountName);
  return result;
}

export function encodeBinary(value: $.api.PostCreateDriftUserRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.action !== undefined) {
    const tsValue = value.action;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.subAccountID !== undefined) {
    const tsValue = value.subAccountID;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.accountName !== undefined) {
    const tsValue = value.accountName;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostCreateDriftUserRequest {
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
    result.action = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.subAccountID = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountName = value;
  }
  return result;
}
