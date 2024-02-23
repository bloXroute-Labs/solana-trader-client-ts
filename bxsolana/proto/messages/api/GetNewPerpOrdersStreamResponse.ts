import {
  Type as PerpContract,
  name2num,
  num2name,
} from "../common/PerpContract";
import {
  Type as PerpPositionSide,
  name2num as name2num_1,
  num2name as num2name_1,
} from "../common/PerpPositionSide";
import {
  Type as PerpOrderType,
  name2num as name2num_2,
  num2name as num2name_2,
} from "../common/PerpOrderType";
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
  default as Long,
} from "../../runtime/Long";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface GetNewPerpOrdersStreamResponse {
    contract: PerpContract;
    side: PerpPositionSide;
    type: PerpOrderType;
    userAddress: string;
    orderID: string;
    clientOrderID: string;
    slot: string;
    price: number;
    triggerPrice: number;
    baseAmount: number;
    baseAmountFilled: number;
    quoteAmount: number;
    quoteAmountFilled: number;
  }
}
export type Type = $.api.GetNewPerpOrdersStreamResponse;

export function getDefaultValue(): $.api.GetNewPerpOrdersStreamResponse {
  return {
    contract: "ALL",
    side: "PS_UNKNOWN",
    type: "POT_UNKNOWN",
    userAddress: "",
    orderID: "",
    clientOrderID: "",
    slot: "",
    price: 0,
    triggerPrice: 0,
    baseAmount: 0,
    baseAmountFilled: 0,
    quoteAmount: 0,
    quoteAmountFilled: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetNewPerpOrdersStreamResponse>): $.api.GetNewPerpOrdersStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetNewPerpOrdersStreamResponse): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.type !== undefined) result.type = tsValueToJsonValueFns.enum(value.type);
  if (value.userAddress !== undefined) result.userAddress = tsValueToJsonValueFns.string(value.userAddress);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = tsValueToJsonValueFns.string(value.clientOrderID);
  if (value.slot !== undefined) result.slot = tsValueToJsonValueFns.string(value.slot);
  if (value.price !== undefined) result.price = tsValueToJsonValueFns.double(value.price);
  if (value.triggerPrice !== undefined) result.triggerPrice = tsValueToJsonValueFns.double(value.triggerPrice);
  if (value.baseAmount !== undefined) result.baseAmount = tsValueToJsonValueFns.double(value.baseAmount);
  if (value.baseAmountFilled !== undefined) result.baseAmountFilled = tsValueToJsonValueFns.double(value.baseAmountFilled);
  if (value.quoteAmount !== undefined) result.quoteAmount = tsValueToJsonValueFns.double(value.quoteAmount);
  if (value.quoteAmountFilled !== undefined) result.quoteAmountFilled = tsValueToJsonValueFns.double(value.quoteAmountFilled);
  return result;
}

export function decodeJson(value: any): $.api.GetNewPerpOrdersStreamResponse {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as PerpPositionSide;
  if (value.type !== undefined) result.type = jsonValueToTsValueFns.enum(value.type) as PerpOrderType;
  if (value.userAddress !== undefined) result.userAddress = jsonValueToTsValueFns.string(value.userAddress);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.clientOrderID !== undefined) result.clientOrderID = jsonValueToTsValueFns.string(value.clientOrderID);
  if (value.slot !== undefined) result.slot = jsonValueToTsValueFns.string(value.slot);
  if (value.price !== undefined) result.price = jsonValueToTsValueFns.double(value.price);
  if (value.triggerPrice !== undefined) result.triggerPrice = jsonValueToTsValueFns.double(value.triggerPrice);
  if (value.baseAmount !== undefined) result.baseAmount = jsonValueToTsValueFns.double(value.baseAmount);
  if (value.baseAmountFilled !== undefined) result.baseAmountFilled = jsonValueToTsValueFns.double(value.baseAmountFilled);
  if (value.quoteAmount !== undefined) result.quoteAmount = jsonValueToTsValueFns.double(value.quoteAmount);
  if (value.quoteAmountFilled !== undefined) result.quoteAmountFilled = jsonValueToTsValueFns.double(value.quoteAmountFilled);
  return result;
}

export function encodeBinary(value: $.api.GetNewPerpOrdersStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.type !== undefined) {
    const tsValue = value.type;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num_2[tsValue as keyof typeof name2num_2]) }],
    );
  }
  if (value.userAddress !== undefined) {
    const tsValue = value.userAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.clientOrderID !== undefined) {
    const tsValue = value.clientOrderID;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.slot !== undefined) {
    const tsValue = value.slot;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.price !== undefined) {
    const tsValue = value.price;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.triggerPrice !== undefined) {
    const tsValue = value.triggerPrice;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.baseAmount !== undefined) {
    const tsValue = value.baseAmount;
    result.push(
      [10, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.baseAmountFilled !== undefined) {
    const tsValue = value.baseAmountFilled;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.quoteAmount !== undefined) {
    const tsValue = value.quoteAmount;
    result.push(
      [12, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.quoteAmountFilled !== undefined) {
    const tsValue = value.quoteAmountFilled;
    result.push(
      [13, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetNewPerpOrdersStreamResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.contract = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_2[wireValue.value[0] as keyof typeof num2name_2] : undefined;
    if (value === undefined) break field;
    result.type = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.userAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.clientOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.slot = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.price = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.triggerPrice = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.baseAmount = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.baseAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quoteAmount = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quoteAmountFilled = value;
  }
  return result;
}
