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
  export interface GetRaydiumCLMMPoolsRequest {
    pairOrAddress: string;
  }
}
export type Type = $.api.GetRaydiumCLMMPoolsRequest;

export function getDefaultValue(): $.api.GetRaydiumCLMMPoolsRequest {
  return {
    pairOrAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetRaydiumCLMMPoolsRequest>): $.api.GetRaydiumCLMMPoolsRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRaydiumCLMMPoolsRequest): unknown {
  const result: any = {};
  if (value.pairOrAddress !== undefined) result.pairOrAddress = tsValueToJsonValueFns.string(value.pairOrAddress);
  return result;
}

export function decodeJson(value: any): $.api.GetRaydiumCLMMPoolsRequest {
  const result = getDefaultValue();
  if (value.pairOrAddress !== undefined) result.pairOrAddress = jsonValueToTsValueFns.string(value.pairOrAddress);
  return result;
}

export function encodeBinary(value: $.api.GetRaydiumCLMMPoolsRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.pairOrAddress !== undefined) {
    const tsValue = value.pairOrAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRaydiumCLMMPoolsRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pairOrAddress = value;
  }
  return result;
}
