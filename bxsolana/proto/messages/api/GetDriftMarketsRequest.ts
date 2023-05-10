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
  export interface GetDriftMarketsRequest {
    metadata: boolean;
  }
}
export type Type = $.api.GetDriftMarketsRequest;

export function getDefaultValue(): $.api.GetDriftMarketsRequest {
  return {
    metadata: false,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftMarketsRequest>): $.api.GetDriftMarketsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftMarketsRequest): unknown {
  const result: any = {};
  if (value.metadata !== undefined) result.metadata = tsValueToJsonValueFns.bool(value.metadata);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftMarketsRequest {
  const result = getDefaultValue();
  if (value.metadata !== undefined) result.metadata = jsonValueToTsValueFns.bool(value.metadata);
  return result;
}

export function encodeBinary(value: $.api.GetDriftMarketsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.metadata !== undefined) {
    const tsValue = value.metadata;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftMarketsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.metadata = value;
  }
  return result;
}
