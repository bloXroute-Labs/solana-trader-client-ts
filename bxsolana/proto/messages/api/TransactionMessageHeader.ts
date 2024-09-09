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
  export interface TransactionMessageHeader {
    numRequiredSignatures: number;
    numReadonlySignedAccounts: number;
    numReadonlyUnsignedAccounts: number;
  }
}
export type Type = $.api.TransactionMessageHeader;

export function getDefaultValue(): $.api.TransactionMessageHeader {
  return {
    numRequiredSignatures: 0,
    numReadonlySignedAccounts: 0,
    numReadonlyUnsignedAccounts: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TransactionMessageHeader>): $.api.TransactionMessageHeader {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TransactionMessageHeader): unknown {
  const result: any = {};
  if (value.numRequiredSignatures !== undefined) result.numRequiredSignatures = tsValueToJsonValueFns.uint32(value.numRequiredSignatures);
  if (value.numReadonlySignedAccounts !== undefined) result.numReadonlySignedAccounts = tsValueToJsonValueFns.uint32(value.numReadonlySignedAccounts);
  if (value.numReadonlyUnsignedAccounts !== undefined) result.numReadonlyUnsignedAccounts = tsValueToJsonValueFns.uint32(value.numReadonlyUnsignedAccounts);
  return result;
}

export function decodeJson(value: any): $.api.TransactionMessageHeader {
  const result = getDefaultValue();
  if (value.numRequiredSignatures !== undefined) result.numRequiredSignatures = jsonValueToTsValueFns.uint32(value.numRequiredSignatures);
  if (value.numReadonlySignedAccounts !== undefined) result.numReadonlySignedAccounts = jsonValueToTsValueFns.uint32(value.numReadonlySignedAccounts);
  if (value.numReadonlyUnsignedAccounts !== undefined) result.numReadonlyUnsignedAccounts = jsonValueToTsValueFns.uint32(value.numReadonlyUnsignedAccounts);
  return result;
}

export function encodeBinary(value: $.api.TransactionMessageHeader): Uint8Array {
  const result: WireMessage = [];
  if (value.numRequiredSignatures !== undefined) {
    const tsValue = value.numRequiredSignatures;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.numReadonlySignedAccounts !== undefined) {
    const tsValue = value.numReadonlySignedAccounts;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.numReadonlyUnsignedAccounts !== undefined) {
    const tsValue = value.numReadonlyUnsignedAccounts;
    result.push(
      [3, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TransactionMessageHeader {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.numRequiredSignatures = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.numReadonlySignedAccounts = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.numReadonlyUnsignedAccounts = value;
  }
  return result;
}
