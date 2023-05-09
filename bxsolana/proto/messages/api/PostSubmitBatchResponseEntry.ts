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
  export interface PostSubmitBatchResponseEntry {
    signature: string;
    error: string;
    submitted: boolean;
  }
}
export type Type = $.api.PostSubmitBatchResponseEntry;

export function getDefaultValue(): $.api.PostSubmitBatchResponseEntry {
  return {
    signature: "",
    error: "",
    submitted: false,
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitBatchResponseEntry>): $.api.PostSubmitBatchResponseEntry {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitBatchResponseEntry): unknown {
  const result: any = {};
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  if (value.error !== undefined) result.error = tsValueToJsonValueFns.string(value.error);
  if (value.submitted !== undefined) result.submitted = tsValueToJsonValueFns.bool(value.submitted);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitBatchResponseEntry {
  const result = getDefaultValue();
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.string(value.signature);
  if (value.error !== undefined) result.error = jsonValueToTsValueFns.string(value.error);
  if (value.submitted !== undefined) result.submitted = jsonValueToTsValueFns.bool(value.submitted);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitBatchResponseEntry): Uint8Array {
  const result: WireMessage = [];
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.error !== undefined) {
    const tsValue = value.error;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.submitted !== undefined) {
    const tsValue = value.submitted;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitBatchResponseEntry {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.signature = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.error = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.submitted = value;
  }
  return result;
}
