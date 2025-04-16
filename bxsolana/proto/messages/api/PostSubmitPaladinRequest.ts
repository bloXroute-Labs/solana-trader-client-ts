import {
  Type as TransactionMessageV2,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessageV2";
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
  export interface PostSubmitPaladinRequest {
    transaction?: TransactionMessageV2;
    revertProtection?: boolean;
    timestamp?: Timestamp;
  }
}
export type Type = $.api.PostSubmitPaladinRequest;

export function getDefaultValue(): $.api.PostSubmitPaladinRequest {
  return {
    transaction: undefined,
    revertProtection: false,
    timestamp: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitPaladinRequest>): $.api.PostSubmitPaladinRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitPaladinRequest): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = encodeJson_1(value.transaction);
  if (value.revertProtection !== undefined) result.revertProtection = tsValueToJsonValueFns.bool(value.revertProtection);
  if (value.timestamp !== undefined) result.timestamp = encodeJson_2(value.timestamp);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitPaladinRequest {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = decodeJson_1(value.transaction);
  if (value.revertProtection !== undefined) result.revertProtection = jsonValueToTsValueFns.bool(value.revertProtection);
  if (value.timestamp !== undefined) result.timestamp = decodeJson_2(value.timestamp);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitPaladinRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.revertProtection !== undefined) {
    const tsValue = value.revertProtection;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.timestamp !== undefined) {
    const tsValue = value.timestamp;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitPaladinRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.revertProtection = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.timestamp = value;
  }
  return result;
}
