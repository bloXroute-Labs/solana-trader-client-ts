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
  export interface GetPriorityFeeRequest {
    percentile?: number;
  }
}
export type Type = $.api.GetPriorityFeeRequest;

export function getDefaultValue(): $.api.GetPriorityFeeRequest {
  return {
    percentile: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPriorityFeeRequest>): $.api.GetPriorityFeeRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPriorityFeeRequest): unknown {
  const result: any = {};
  if (value.percentile !== undefined) result.percentile = tsValueToJsonValueFns.double(value.percentile);
  return result;
}

export function decodeJson(value: any): $.api.GetPriorityFeeRequest {
  const result = getDefaultValue();
  if (value.percentile !== undefined) result.percentile = jsonValueToTsValueFns.double(value.percentile);
  return result;
}

export function encodeBinary(value: $.api.GetPriorityFeeRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.percentile !== undefined) {
    const tsValue = value.percentile;
    result.push(
      [1, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPriorityFeeRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.percentile = value;
  }
  return result;
}
