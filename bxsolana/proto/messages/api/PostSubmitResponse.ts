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
  export interface PostSubmitResponse {
    signature: string;
    uuid?: string;
  }
}
export type Type = $.api.PostSubmitResponse;

export function getDefaultValue(): $.api.PostSubmitResponse {
  return {
    signature: "",
    uuid: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostSubmitResponse>): $.api.PostSubmitResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSubmitResponse): unknown {
  const result: any = {};
  if (value.signature !== undefined) result.signature = tsValueToJsonValueFns.string(value.signature);
  if (value.uuid !== undefined) result.uuid = tsValueToJsonValueFns.string(value.uuid);
  return result;
}

export function decodeJson(value: any): $.api.PostSubmitResponse {
  const result = getDefaultValue();
  if (value.signature !== undefined) result.signature = jsonValueToTsValueFns.string(value.signature);
  if (value.uuid !== undefined) result.uuid = jsonValueToTsValueFns.string(value.uuid);
  return result;
}

export function encodeBinary(value: $.api.PostSubmitResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.signature !== undefined) {
    const tsValue = value.signature;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.uuid !== undefined) {
    const tsValue = value.uuid;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSubmitResponse {
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
    result.uuid = value;
  }
  return result;
}
