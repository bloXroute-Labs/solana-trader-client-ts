import {
  Type as ProjectPool,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ProjectPool";
import {
  Type as Timestamp,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../google/protobuf/Timestamp";
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
  export interface GetNewRaydiumPoolsByTransactionResponse {
    slot: string;
    signature: string;
    poolCreatorWallet: string;
    pool?: ProjectPool;
    timestamp?: Timestamp;
  }
}
export type Type = $.api.GetNewRaydiumPoolsByTransactionResponse;

export function getDefaultValue(): $.api.GetNewRaydiumPoolsByTransactionResponse {
  return {
    slot: "0",
    signature: "",
    poolCreatorWallet: "",
    pool: undefined,
    timestamp: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetNewRaydiumPoolsByTransactionResponse>): $.api.GetNewRaydiumPoolsByTransactionResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewRaydiumPoolsByTransactionResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.int64(value.slot);
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  if (value.poolCreatorWallet !== undefined) result.poolCreatorWallet = tsValueToJsonValueFns.string(value.poolCreatorWallet);
  if (value.pool !== undefined) result.pool = encodeJson_1(value.pool);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_2(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.GetNewRaydiumPoolsByTransactionResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.int64(value.slot);
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.string(value.signature);
  if (value.poolCreatorWallet !== undefined) result.poolCreatorWallet = jsonValueToTsValueFns.string(value.poolCreatorWallet);
  if (value.pool !== undefined) result.pool = decodeJson_1(value.pool);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_2(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.GetNewRaydiumPoolsByTransactionResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.poolCreatorWallet !== undefined) {
    const tsValue = value.poolCreatorWallet;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.pool !== undefined) {
    const tsValue = value.pool;
    result.push(
      [4, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewRaydiumPoolsByTransactionResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.poolCreatorWallet = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.pool = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
