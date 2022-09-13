import {
  Type as Transaction,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Transaction.js";
import {
  Type as TransactionMeta,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./TransactionMeta.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.geyser {
  export interface TransactionSubscribeResponse {
    slot: string;
    transaction?: Transaction;
    meta?: TransactionMeta;
  }
}
export type Type = $.geyser.TransactionSubscribeResponse;

export function getDefaultValue(): $.geyser.TransactionSubscribeResponse {
  return {
    slot: "0",
    transaction: undefined,
    meta: undefined,
  };
}

export function createValue(partialValue: Partial<$.geyser.TransactionSubscribeResponse>): $.geyser.TransactionSubscribeResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.TransactionSubscribeResponse): unknown {
  const result: any = {};
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.uint64(value.slot);
  if (value.transaction !== undefined) result.transaction = encodeJson_1(value.transaction);
  if (value.meta !== undefined) result.meta = encodeJson_2(value.meta);
  return result;
}

export function decodeJson(value: any): $.geyser.TransactionSubscribeResponse {
  const result = getDefaultValue();
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.uint64(value.slot);
  if (value.transaction !== undefined) result.transaction = decodeJson_1(value.transaction);
  if (value.meta !== undefined) result.meta = decodeJson_2(value.meta);
  return result;
}

export function encodeBinary(value: $.geyser.TransactionSubscribeResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.meta !== undefined) {
    const tsValue = value.meta;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.TransactionSubscribeResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.transaction = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.meta = value;
  }
  return result;
}
