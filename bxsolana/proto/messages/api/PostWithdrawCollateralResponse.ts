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
  export type PostWithdrawCollateralResponse = {
    transaction: string;
  }
}
export type Type = $.api.PostWithdrawCollateralResponse;

export function getDefaultValue(): $.api.PostWithdrawCollateralResponse {
  return {
    transaction: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostWithdrawCollateralResponse>): $.api.PostWithdrawCollateralResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostWithdrawCollateralResponse): unknown {
  const result: any = {};
  if (value.transaction !== undefined) result.transaction = tsValueToJsonValueFns.string(value.transaction);
  return result;
}

export function decodeJson(value: any): $.api.PostWithdrawCollateralResponse {
  const result = getDefaultValue();
  if (value.transaction !== undefined) result.transaction = jsonValueToTsValueFns.string(value.transaction);
  return result;
}

export function encodeBinary(value: $.api.PostWithdrawCollateralResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.transaction !== undefined) {
    const tsValue = value.transaction;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostWithdrawCollateralResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.transaction = value;
  }
  return result;
}
