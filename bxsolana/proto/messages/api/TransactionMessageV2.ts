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
  export interface TransactionMessageV2 {
    content: string;
  }
}
export type Type = $.api.TransactionMessageV2;

export function getDefaultValue(): $.api.TransactionMessageV2 {
  return {
    content: "",
  };
}

export function createValue(partialValue: Partial<$.api.TransactionMessageV2>): $.api.TransactionMessageV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TransactionMessageV2): unknown {
  const result: any = {};
  if (value.content !== undefined) result.content = tsValueToJsonValueFns.string(value.content);
  return result;
}

export function decodeJson(value: any): $.api.TransactionMessageV2 {
  const result = getDefaultValue();
  if (value.content !== undefined) result.content = jsonValueToTsValueFns.string(value.content);
  return result;
}

export function encodeBinary(value: $.api.TransactionMessageV2): Uint8Array {
  const result: WireMessage = [];
  if (value.content !== undefined) {
    const tsValue = value.content;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TransactionMessageV2 {
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
  return result;
}
