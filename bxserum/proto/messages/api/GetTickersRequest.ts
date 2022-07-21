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
  export interface GetTickersRequest {
    market: string;
  }
}
export type Type = $.api.GetTickersRequest;

export function getDefaultValue(): $.api.GetTickersRequest {
  return {
    market: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetTickersRequest>): $.api.GetTickersRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetTickersRequest): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  return result;
}

export function decodeJson(value: any): $.api.GetTickersRequest {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  return result;
}

export function encodeBinary(value: $.api.GetTickersRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetTickersRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  return result;
}