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
  export interface GetUnsettledRequest {
    market: string;
    owner: string;
  }
}
export type Type = $.api.GetUnsettledRequest;

export function getDefaultValue(): $.api.GetUnsettledRequest {
  return {
    market: "",
    owner: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetUnsettledRequest>): $.api.GetUnsettledRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetUnsettledRequest): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.owner !== undefined) result.owner = tsValueToJsonValueFns.string(value.owner);
  return result;
}

export function decodeJson(value: any): $.api.GetUnsettledRequest {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.owner !== undefined) result.owner = jsonValueToTsValueFns.string(value.owner);
  return result;
}

export function encodeBinary(value: $.api.GetUnsettledRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.owner !== undefined) {
    const tsValue = value.owner;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetUnsettledRequest {
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
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.owner = value;
  }
  return result;
}
