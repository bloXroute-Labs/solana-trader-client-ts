import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
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

export declare namespace $.api {
  export type PostCancelOrderResponse = {
    transaction: string;
  }
}
export type Type = $.api.PostCancelOrderResponse;

export function getDefaultValue(): $.api.PostCancelOrderResponse {
  return {
    transaction: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostCancelOrderResponse>): $.api.PostCancelOrderResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCancelOrderResponse): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = tsValueToJsonValueFns.string(value.transaction);
  return result;
}

export function decodeJson(value: any): $.api.PostCancelOrderResponse {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = jsonValueToTsValueFns.string(value.transaction);
  return result;
}

export function encodeBinary(value: $.api.PostCancelOrderResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostCancelOrderResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.transaction = value;
  }
  return result;
}
