import {
  Type as TransactionMeta,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMeta";
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
  export interface GetTransactionResponse {
    status: string;
    metadata?: TransactionMeta;
    slot: string;
    blockTime: string;
    version: number;
  }
}
export type Type = $.api.GetTransactionResponse;

export function getDefaultValue(): $.api.GetTransactionResponse {
  return {
    status: "",
    metadata: undefined,
    slot: "0",
    blockTime: "0",
    version: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetTransactionResponse>): $.api.GetTransactionResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTransactionResponse): unknown {
  const result: any = {};
  if (value.status !== undefined) result.status = tsValueToJsonValueFns.string(value.status);
  if (value.metadata !== undefined) result.metadata = encodeJson_1(value.metadata);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.blockTime !== undefined) result.blockTime = tsValueToJsonValueFns.uint64(value.blockTime);
  if (value.version !== undefined) result.version = tsValueToJsonValueFns.int32(value.version);
  return result;
}

export function decodeJson(value: any): $.api.GetTransactionResponse {
  const result = getDefaultValue();
  if (value.status !== undefined) result.status = jsonValueToTsValueFns.string(value.status);
  if (value.metadata !== undefined) result.metadata = decodeJson_1(value.metadata);
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.blockTime !== undefined) result.blockTime = jsonValueToTsValueFns.uint64(value.blockTime);
  if (value.version !== undefined) result.version = jsonValueToTsValueFns.int32(value.version);
  return result;
}

export function encodeBinary(value: $.api.GetTransactionResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.status !== undefined) {
    const tsValue = value.status;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.metadata !== undefined) {
    const tsValue = value.metadata;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [3, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.blockTime !== undefined) {
    const tsValue = value.blockTime;
    result.push(
      [4, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.version !== undefined) {
    const tsValue = value.version;
    result.push(
      [5, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTransactionResponse {
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
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.metadata = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.blockTime = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.version = value;
  }
  return result;
}
