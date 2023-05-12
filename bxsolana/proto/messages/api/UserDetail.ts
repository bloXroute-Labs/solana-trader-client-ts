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
  export interface UserDetail {
    status: string;
    subAccountId: string;
    accountAddress: string;
    accountName: string;
  }
}
export type Type = $.api.UserDetail;

export function getDefaultValue(): $.api.UserDetail {
  return {
    status: "",
    subAccountId: "0",
    accountAddress: "",
    accountName: "",
  };
}

export function createValue(partialValue: Partial<$.api.UserDetail>): $.api.UserDetail {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.UserDetail): unknown {
  const result: any = {};
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.string(value.status);
  if (value.subAccountId !== undefined) result.subAccountId = tsValueToJsonValueFns.uint64(value.subAccountId);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.accountName !== undefined) result.accountName = tsValueToJsonValueFns.string(value.accountName);
  return result;
}

export function decodeJson(value: any): $.api.UserDetail {
  const result = getDefaultValue();
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.string(value.status);
  if (value.subAccountId !== undefined) result.subAccountId = jsonValueToTsValueFns.uint64(value.subAccountId);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.accountName !== undefined) result.accountName = jsonValueToTsValueFns.string(value.accountName);
  return result;
}

export function encodeBinary(value: $.api.UserDetail): Uint8Array {
  const result: WireMessage = [];
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.subAccountId !== undefined) {
    const tsValue = value.subAccountId;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
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

export function decodeBinary(binary: Uint8Array): $.api.UserDetail {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.status = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.subAccountId = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
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
