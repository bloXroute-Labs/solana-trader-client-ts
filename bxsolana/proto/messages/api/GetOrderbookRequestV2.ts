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
  export interface GetOrderbookRequestV2 {
    market: string;
    limit: number;
  }
}
export type Type = $.api.GetOrderbookRequestV2;

export function getDefaultValue(): $.api.GetOrderbookRequestV2 {
  return {
    market: "",
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderbookRequestV2>): $.api.GetOrderbookRequestV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderbookRequestV2): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderbookRequestV2 {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetOrderbookRequestV2): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.limit !== undefined) {
    const tsValue = value.limit;
    result.push(
      [2, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderbookRequestV2 {
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
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.limit = value;
  }
  return result;
}
