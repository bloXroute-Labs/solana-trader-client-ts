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
  export interface GetNewRaydiumPoolsRequest {
    includeCPMM?: boolean;
  }
}
export type Type = $.api.GetNewRaydiumPoolsRequest;

export function getDefaultValue(): $.api.GetNewRaydiumPoolsRequest {
  return {
    includeCPMM: false,
  };
}

export function createValue(partialValue: Partial<$.api.GetNewRaydiumPoolsRequest>): $.api.GetNewRaydiumPoolsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewRaydiumPoolsRequest): unknown {
  const result: any = {};
  if (value.includeCPMM !== undefined) result.includeCPMM = tsValueToJsonValueFns.bool(value.includeCPMM);
  return result;
}

export function decodeJson(value: any): $.api.GetNewRaydiumPoolsRequest {
  const result = getDefaultValue();
  if (value.includeCPMM !== undefined) result.includeCPMM = jsonValueToTsValueFns.bool(value.includeCPMM);
  return result;
}

export function encodeBinary(value: $.api.GetNewRaydiumPoolsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.includeCPMM !== undefined) {
    const tsValue = value.includeCPMM;
    result.push(
      [1, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewRaydiumPoolsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.includeCPMM = value;
  }
  return result;
}
