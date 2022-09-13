import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage.js";
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
  export interface Transaction {
    signatures: string[];
    message?: TransactionMessage;
  }
}
export type Type = $.geyser.Transaction;

export function getDefaultValue(): $.geyser.Transaction {
  return {
    signatures: [],
    message: undefined,
  };
}

export function createValue(partialValue: Partial<$.geyser.Transaction>): $.geyser.Transaction {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.geyser.Transaction): unknown {
  const result: any = {};
  result.signatures = value.signatures.map(value => tsValueToJsonValueFns.string(value));
  if (value.message !== undefined) result.message = encodeJson_1(value.message);
  return result;
}

export function decodeJson(value: any): $.geyser.Transaction {
  const result = getDefaultValue();
  result.signatures = value.signatures?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.message !== undefined) result.message = decodeJson_1(value.message);
  return result;
}

export function encodeBinary(value: $.geyser.Transaction): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.signatures) {
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.message !== undefined) {
    const tsValue = value.message;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.geyser.Transaction {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.signatures = value as any;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.message = value;
  }
  return result;
}
