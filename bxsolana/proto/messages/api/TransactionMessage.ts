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
  export interface TransactionMessage {
    content: string;
    isCleanup: boolean;
  }
}
export type Type = $.api.TransactionMessage;

export function getDefaultValue(): $.api.TransactionMessage {
  return {
    content: "",
    isCleanup: false,
  };
}

export function createValue(partialValue: Partial<$.api.TransactionMessage>): $.api.TransactionMessage {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TransactionMessage): unknown {
  const result: any = {};
  if (value.content !== undefined) result.content = tsValueToJsonValueFns.string(value.content);
  if (value.isCleanup !== undefined) result.isCleanup = tsValueToJsonValueFns.bool(value.isCleanup);
  return result;
}

export function decodeJson(value: any): $.api.TransactionMessage {
  const result = getDefaultValue();
  if (value.content !== undefined) result.content = jsonValueToTsValueFns.string(value.content);
  if (value.isCleanup !== undefined) result.isCleanup = jsonValueToTsValueFns.bool(value.isCleanup);
  return result;
}

export function encodeBinary(value: $.api.TransactionMessage): Uint8Array {
  const result: WireMessage = [];
  if (value.content !== undefined) {
    const tsValue = value.content;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isCleanup !== undefined) {
    const tsValue = value.isCleanup;
    result.push(
      [2, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TransactionMessage {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.content = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isCleanup = value;
  }
  return result;
}
