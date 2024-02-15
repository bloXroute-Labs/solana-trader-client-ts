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
  export interface GetBundleResultRequest {
    uuid: string;
  }
}
export type Type = $.api.GetBundleResultRequest;

export function getDefaultValue(): $.api.GetBundleResultRequest {
  return {
    uuid: "",
  };
}

export function createValue(partialValue: Partial<$.api.GetBundleResultRequest>): $.api.GetBundleResultRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetBundleResultRequest): unknown {
  const result: any = {};
  if (value.uuid !== undefined) result.uuid = tsValueToJsonValueFns.string(value.uuid);
  return result;
}

export function decodeJson(value: any): $.api.GetBundleResultRequest {
  const result = getDefaultValue();
  if (value.uuid !== undefined) result.uuid = jsonValueToTsValueFns.string(value.uuid);
  return result;
}

export function encodeBinary(value: $.api.GetBundleResultRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.uuid !== undefined) {
    const tsValue = value.uuid;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetBundleResultRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.uuid = value;
  }
  return result;
}
