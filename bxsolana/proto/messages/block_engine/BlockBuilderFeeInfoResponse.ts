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

export declare namespace $.block_engine {
  export interface BlockBuilderFeeInfoResponse {
    pubkey: string;
    commission: string;
  }
}
export type Type = $.block_engine.BlockBuilderFeeInfoResponse;

export function getDefaultValue(): $.block_engine.BlockBuilderFeeInfoResponse {
  return {
    pubkey: "",
    commission: "0",
  };
}

export function createValue(partialValue: Partial<$.block_engine.BlockBuilderFeeInfoResponse>): $.block_engine.BlockBuilderFeeInfoResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.block_engine.BlockBuilderFeeInfoResponse): unknown {
  const result: any = {};
  if (value.pubkey !== undefined) result.pubkey = tsValueToJsonValueFns.string(value.pubkey);
  if (value.commission !== undefined) result.commission = tsValueToJsonValueFns.uint64(value.commission);
  return result;
}

export function decodeJson(value: any): $.block_engine.BlockBuilderFeeInfoResponse {
  const result = getDefaultValue();
  if (value.pubkey !== undefined) result.pubkey = jsonValueToTsValueFns.string(value.pubkey);
  if (value.commission !== undefined) result.commission = jsonValueToTsValueFns.uint64(value.commission);
  return result;
}

export function encodeBinary(value: $.block_engine.BlockBuilderFeeInfoResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.pubkey !== undefined) {
    const tsValue = value.pubkey;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.commission !== undefined) {
    const tsValue = value.commission;
    result.push(
      [2, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.block_engine.BlockBuilderFeeInfoResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.pubkey = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.commission = value;
  }
  return result;
}
