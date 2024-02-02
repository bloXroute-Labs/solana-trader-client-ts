import {
  Type as Side,
  name2num,
  num2name,
} from "./Side";
import {
  Type as Project,
  name2num as name2num_1,
  num2name as num2name_1,
} from "./Project";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index";
import {
  default as serialize,
} from "../../runtime/wire/serialize";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as Long,
} from "../../runtime/Long";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface PostCancelOrderRequest {
    orderID: string;
    side: Side;
    marketAddress: string;
    ownerAddress: string;
    openOrdersAddress: string;
    computeLimit: number;
    computePrice: string;
    tip?: string;
    project: Project;
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
    computeLimit: 0,
    computePrice: "0",
    tip: "0",
    project: "P_UNKNOWN",
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
  if (value.computeLimit !== undefined) result.computeLimit = tsValueToJsonValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = tsValueToJsonValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = tsValueToJsonValueFns.uint64(value.tip);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  return result;
}

export function decodeJson(value: any): $.api.PostCancelOrderRequest {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.marketAddress !== undefined) result.marketAddress = jsonValueToTsValueFns.string(value.marketAddress);
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.openOrdersAddress !== undefined) result.openOrdersAddress = jsonValueToTsValueFns.string(value.openOrdersAddress);
  if (value.computeLimit !== undefined) result.computeLimit = jsonValueToTsValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = jsonValueToTsValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = jsonValueToTsValueFns.uint64(value.tip);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
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
  if (value.computeLimit !== undefined) {
    const tsValue = value.computeLimit;
    result.push(
      [6, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.computePrice !== undefined) {
    const tsValue = value.computePrice;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.tip !== undefined) {
    const tsValue = value.tip;
    result.push(
      [8, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [9, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
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
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.computeLimit = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.computePrice = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tip = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  return result;
}
