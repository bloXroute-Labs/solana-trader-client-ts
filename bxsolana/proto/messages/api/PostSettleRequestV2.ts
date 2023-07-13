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
  export interface PostSettleRequestV2 {
    ownerAddress: string;
    market: string;
    baseTokenWallet: string;
    quoteTokenWallet: string;
    openOrdersAddress: string;
  }
}
export type Type = $.api.PostSettleRequestV2;

export function getDefaultValue(): $.api.PostSettleRequestV2 {
  return {
    ownerAddress: "",
    market: "",
    baseTokenWallet: "",
    quoteTokenWallet: "",
    openOrdersAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostSettleRequestV2>): $.api.PostSettleRequestV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostSettleRequestV2): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.baseTokenWallet !== undefined) result.baseTokenWallet = tsValueToJsonValueFns.string(value.baseTokenWallet);
  if (value.quoteTokenWallet !== undefined) result.quoteTokenWallet = tsValueToJsonValueFns.string(value.quoteTokenWallet);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = tsValueToJsonValueFns.string(value.openOrdersAddress);
  return result;
}

export function decodeJson(value: any): $.api.PostSettleRequestV2 {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.baseTokenWallet !== undefined) result.baseTokenWallet = jsonValueToTsValueFns.string(value.baseTokenWallet);
  if (value.quoteTokenWallet !== undefined) result.quoteTokenWallet = jsonValueToTsValueFns.string(value.quoteTokenWallet);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = jsonValueToTsValueFns.string(value.openOrdersAddress);
  return result;
}

export function encodeBinary(value: $.api.PostSettleRequestV2): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseTokenWallet !== undefined) {
    const tsValue = value.baseTokenWallet;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.quoteTokenWallet !== undefined) {
    const tsValue = value.quoteTokenWallet;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.openOrdersAddress !== undefined) {
    const tsValue = value.openOrdersAddress;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostSettleRequestV2 {
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
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.baseTokenWallet = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.quoteTokenWallet = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.openOrdersAddress = value;
  }
  return result;
}