import {
  Type as Side,
  name2num,
  num2name,
} from "./Side.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type PostCancelOrderRequest = {
    orderID: string;
    side: Side;
    marketAddress: string;
    ownerAddress: string;
    openOrdersAddress: string;
  }
}
export type Type = $.api.PostCancelOrderRequest;

export function getDefaultValue(): $.api.PostCancelOrderRequest {
  return {
    orderID: "",
    side: "S_UNKNOWN",
    marketAddress: "",
    ownerAddress: "",
    openOrdersAddress: "",
  };
}

export function createValue(partialValue: Partial<$.api.PostCancelOrderRequest>): $.api.PostCancelOrderRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostCancelOrderRequest): unknown {
  const result: any = {};
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.marketAddress !== undefined) result.marketAddress = tsValueToJsonValueFns.string(value.marketAddress);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = tsValueToJsonValueFns.string(value.openOrdersAddress);
  return result;
}

export function decodeJson(value: any): $.api.PostCancelOrderRequest {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.marketAddress !== undefined) result.marketAddress = jsonValueToTsValueFns.string(value.marketAddress);
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = jsonValueToTsValueFns.string(value.openOrdersAddress);
  return result;
}

export function encodeBinary(value: $.api.PostCancelOrderRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.marketAddress !== undefined) {
    const tsValue = value.marketAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
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

export function decodeBinary(binary: Uint8Array): $.api.PostCancelOrderRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
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
