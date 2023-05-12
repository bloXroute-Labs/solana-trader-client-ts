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
  export interface PostDriftEnableMarginTradingRequest {
    ownerAddress: string;
    accountAddress: string;
    enableMargin: boolean;
  }
}
export type Type = $.api.PostDriftEnableMarginTradingRequest;

export function getDefaultValue(): $.api.PostDriftEnableMarginTradingRequest {
  return {
    ownerAddress: "",
    accountAddress: "",
    enableMargin: false,
  };
}

export function createValue(partialValue: Partial<$.api.PostDriftEnableMarginTradingRequest>): $.api.PostDriftEnableMarginTradingRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostDriftEnableMarginTradingRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.enableMargin !== undefined) result.enableMargin = tsValueToJsonValueFns.bool(value.enableMargin);
  return result;
}

export function decodeJson(value: any): $.api.PostDriftEnableMarginTradingRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.enableMargin !== undefined) result.enableMargin = jsonValueToTsValueFns.bool(value.enableMargin);
  return result;
}

export function encodeBinary(value: $.api.PostDriftEnableMarginTradingRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.accountAddress !== undefined) {
    const tsValue = value.accountAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.enableMargin !== undefined) {
    const tsValue = value.enableMargin;
    result.push(
      [3, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostDriftEnableMarginTradingRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.accountAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.enableMargin = value;
  }
  return result;
}
