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
  export interface GetDriftMarketDepthRequest {
    contract: string;
    limit: number;
  }
}
export type Type = $.api.GetDriftMarketDepthRequest;

export function getDefaultValue(): $.api.GetDriftMarketDepthRequest {
  return {
    contract: "",
    limit: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarketDepthRequest>): $.api.GetDriftMarketDepthRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarketDepthRequest): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  if (value.limit !== undefined) result.limit = tsValueToJsonValueFns.uint32(value.limit);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarketDepthRequest {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  if (value.limit !== undefined) result.limit = jsonValueToTsValueFns.uint32(value.limit);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarketDepthRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
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

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarketDepthRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
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
