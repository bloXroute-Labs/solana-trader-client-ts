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
  export interface GetRecentBlockHashRequestV2 {
    offset: string;
  }
}
export type Type = $.api.GetRecentBlockHashRequestV2;

export function getDefaultValue(): $.api.GetRecentBlockHashRequestV2 {
  return {
    offset: "0",
  };
}

export function createValue(partialValue: Partial<$.api.GetRecentBlockHashRequestV2>): $.api.GetRecentBlockHashRequestV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetRecentBlockHashRequestV2): unknown {
  const result: any = {};
  if (value.offset !== undefined) result.offset = tsValueToJsonValueFns.uint64(value.offset);
  return result;
}

export function decodeJson(value: any): $.api.GetRecentBlockHashRequestV2 {
  const result = getDefaultValue();
  if (value.offset !== undefined) result.offset = jsonValueToTsValueFns.uint64(value.offset);
  return result;
}

export function encodeBinary(value: $.api.GetRecentBlockHashRequestV2): Uint8Array {
  const result: WireMessage = [];
  if (value.offset !== undefined) {
    const tsValue = value.offset;
    result.push(
      [1, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetRecentBlockHashRequestV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.offset = value;
  }
  return result;
}
