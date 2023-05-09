import {
  Type as PerpContract,
  name2num,
  num2name,
} from "../common/PerpContract";
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
  export interface GetPerpTradesResponse {
    contract: PerpContract;
    indexPrice: number;
    marketIndex: string;
    filler: string;
    fillerReward: number;
    fillRecordID: string;
    baseAssetAmountFilled: number;
    quoteAssetAmountFilled: number;
    takerFee: number;
    makerFee: number;
    referrerReward: number;
    quoteAssetAmountSurplus: number;
    spotFulfillmentMethodFee: number;
    taker: string;
    takerOrderID: string;
    takerOrderDirection: string;
    takerOrderBaseAssetAmount: number;
    takerOrderCumulativeBaseAssetAmountFilled: number;
    takerOrderCumulativeQuoteAssetAmountFilled: number;
    maker: string;
    makerOrderID: string;
    makerOrderDirection: string;
    makerOrderBaseAssetAmount: number;
    makerOrderCumulativeBaseAssetAmountFilled: number;
    makerOrderCumulativeQuoteAssetAmountFilled: number;
  }
}
export type Type = $.api.GetPerpTradesResponse;

export function getDefaultValue(): $.api.GetPerpTradesResponse {
  return {
    contract: "ALL",
    indexPrice: 0,
    marketIndex: "0",
    filler: "",
    fillerReward: 0,
    fillRecordID: "0",
    baseAssetAmountFilled: 0,
    quoteAssetAmountFilled: 0,
    takerFee: 0,
    makerFee: 0,
    referrerReward: 0,
    quoteAssetAmountSurplus: 0,
    spotFulfillmentMethodFee: 0,
    taker: "",
    takerOrderID: "0",
    takerOrderDirection: "",
    takerOrderBaseAssetAmount: 0,
    takerOrderCumulativeBaseAssetAmountFilled: 0,
    takerOrderCumulativeQuoteAssetAmountFilled: 0,
    maker: "",
    makerOrderID: "0",
    makerOrderDirection: "",
    makerOrderBaseAssetAmount: 0,
    makerOrderCumulativeBaseAssetAmountFilled: 0,
    makerOrderCumulativeQuoteAssetAmountFilled: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPerpTradesResponse>): $.api.GetPerpTradesResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPerpTradesResponse): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.indexPrice !== undefined) result.indexPrice = tsValueToJsonValueFns.double(value.indexPrice);
  if (value.marketIndex !== undefined) result.marketIndex = tsValueToJsonValueFns.int64(value.marketIndex);
  if (value.filler !== undefined) result.filler = tsValueToJsonValueFns.string(value.filler);
  if (value.fillerReward !== undefined) result.fillerReward = tsValueToJsonValueFns.double(value.fillerReward);
  if (value.fillRecordID !== undefined) result.fillRecordID = tsValueToJsonValueFns.int64(value.fillRecordID);
  if (value.baseAssetAmountFilled !== undefined) result.baseAssetAmountFilled = tsValueToJsonValueFns.double(value.baseAssetAmountFilled);
  if (value.quoteAssetAmountFilled !== undefined) result.quoteAssetAmountFilled = tsValueToJsonValueFns.double(value.quoteAssetAmountFilled);
  if (value.takerFee !== undefined) result.takerFee = tsValueToJsonValueFns.double(value.takerFee);
  if (value.makerFee !== undefined) result.makerFee = tsValueToJsonValueFns.double(value.makerFee);
  if (value.referrerReward !== undefined) result.referrerReward = tsValueToJsonValueFns.double(value.referrerReward);
  if (value.quoteAssetAmountSurplus !== undefined) result.quoteAssetAmountSurplus = tsValueToJsonValueFns.double(value.quoteAssetAmountSurplus);
  if (value.spotFulfillmentMethodFee !== undefined) result.spotFulfillmentMethodFee = tsValueToJsonValueFns.double(value.spotFulfillmentMethodFee);
  if (value.taker !== undefined) result.taker = tsValueToJsonValueFns.string(value.taker);
  if (value.takerOrderID !== undefined) result.takerOrderID = tsValueToJsonValueFns.int64(value.takerOrderID);
  if (value.takerOrderDirection !== undefined) result.takerOrderDirection = tsValueToJsonValueFns.string(value.takerOrderDirection);
  if (value.takerOrderBaseAssetAmount !== undefined) result.takerOrderBaseAssetAmount = tsValueToJsonValueFns.double(value.takerOrderBaseAssetAmount);
  if (value.takerOrderCumulativeBaseAssetAmountFilled !== undefined) result.takerOrderCumulativeBaseAssetAmountFilled = tsValueToJsonValueFns.double(value.takerOrderCumulativeBaseAssetAmountFilled);
  if (value.takerOrderCumulativeQuoteAssetAmountFilled !== undefined) result.takerOrderCumulativeQuoteAssetAmountFilled = tsValueToJsonValueFns.double(value.takerOrderCumulativeQuoteAssetAmountFilled);
  if (value.maker !== undefined) result.maker = tsValueToJsonValueFns.string(value.maker);
  if (value.makerOrderID !== undefined) result.makerOrderID = tsValueToJsonValueFns.int64(value.makerOrderID);
  if (value.makerOrderDirection !== undefined) result.makerOrderDirection = tsValueToJsonValueFns.string(value.makerOrderDirection);
  if (value.makerOrderBaseAssetAmount !== undefined) result.makerOrderBaseAssetAmount = tsValueToJsonValueFns.double(value.makerOrderBaseAssetAmount);
  if (value.makerOrderCumulativeBaseAssetAmountFilled !== undefined) result.makerOrderCumulativeBaseAssetAmountFilled = tsValueToJsonValueFns.double(value.makerOrderCumulativeBaseAssetAmountFilled);
  if (value.makerOrderCumulativeQuoteAssetAmountFilled !== undefined) result.makerOrderCumulativeQuoteAssetAmountFilled = tsValueToJsonValueFns.double(value.makerOrderCumulativeQuoteAssetAmountFilled);
  return result;
}

export function decodeJson(value: any): $.api.GetPerpTradesResponse {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.indexPrice !== undefined) result.indexPrice = jsonValueToTsValueFns.double(value.indexPrice);
  if (value.marketIndex !== undefined) result.marketIndex = jsonValueToTsValueFns.int64(value.marketIndex);
  if (value.filler !== undefined) result.filler = jsonValueToTsValueFns.string(value.filler);
  if (value.fillerReward !== undefined) result.fillerReward = jsonValueToTsValueFns.double(value.fillerReward);
  if (value.fillRecordID !== undefined) result.fillRecordID = jsonValueToTsValueFns.int64(value.fillRecordID);
  if (value.baseAssetAmountFilled !== undefined) result.baseAssetAmountFilled = jsonValueToTsValueFns.double(value.baseAssetAmountFilled);
  if (value.quoteAssetAmountFilled !== undefined) result.quoteAssetAmountFilled = jsonValueToTsValueFns.double(value.quoteAssetAmountFilled);
  if (value.takerFee !== undefined) result.takerFee = jsonValueToTsValueFns.double(value.takerFee);
  if (value.makerFee !== undefined) result.makerFee = jsonValueToTsValueFns.double(value.makerFee);
  if (value.referrerReward !== undefined) result.referrerReward = jsonValueToTsValueFns.double(value.referrerReward);
  if (value.quoteAssetAmountSurplus !== undefined) result.quoteAssetAmountSurplus = jsonValueToTsValueFns.double(value.quoteAssetAmountSurplus);
  if (value.spotFulfillmentMethodFee !== undefined) result.spotFulfillmentMethodFee = jsonValueToTsValueFns.double(value.spotFulfillmentMethodFee);
  if (value.taker !== undefined) result.taker = jsonValueToTsValueFns.string(value.taker);
  if (value.takerOrderID !== undefined) result.takerOrderID = jsonValueToTsValueFns.int64(value.takerOrderID);
  if (value.takerOrderDirection !== undefined) result.takerOrderDirection = jsonValueToTsValueFns.string(value.takerOrderDirection);
  if (value.takerOrderBaseAssetAmount !== undefined) result.takerOrderBaseAssetAmount = jsonValueToTsValueFns.double(value.takerOrderBaseAssetAmount);
  if (value.takerOrderCumulativeBaseAssetAmountFilled !== undefined) result.takerOrderCumulativeBaseAssetAmountFilled = jsonValueToTsValueFns.double(value.takerOrderCumulativeBaseAssetAmountFilled);
  if (value.takerOrderCumulativeQuoteAssetAmountFilled !== undefined) result.takerOrderCumulativeQuoteAssetAmountFilled = jsonValueToTsValueFns.double(value.takerOrderCumulativeQuoteAssetAmountFilled);
  if (value.maker !== undefined) result.maker = jsonValueToTsValueFns.string(value.maker);
  if (value.makerOrderID !== undefined) result.makerOrderID = jsonValueToTsValueFns.int64(value.makerOrderID);
  if (value.makerOrderDirection !== undefined) result.makerOrderDirection = jsonValueToTsValueFns.string(value.makerOrderDirection);
  if (value.makerOrderBaseAssetAmount !== undefined) result.makerOrderBaseAssetAmount = jsonValueToTsValueFns.double(value.makerOrderBaseAssetAmount);
  if (value.makerOrderCumulativeBaseAssetAmountFilled !== undefined) result.makerOrderCumulativeBaseAssetAmountFilled = jsonValueToTsValueFns.double(value.makerOrderCumulativeBaseAssetAmountFilled);
  if (value.makerOrderCumulativeQuoteAssetAmountFilled !== undefined) result.makerOrderCumulativeQuoteAssetAmountFilled = jsonValueToTsValueFns.double(value.makerOrderCumulativeQuoteAssetAmountFilled);
  return result;
}

export function encodeBinary(value: $.api.GetPerpTradesResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.indexPrice !== undefined) {
    const tsValue = value.indexPrice;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.marketIndex !== undefined) {
    const tsValue = value.marketIndex;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.filler !== undefined) {
    const tsValue = value.filler;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.fillerReward !== undefined) {
    const tsValue = value.fillerReward;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.fillRecordID !== undefined) {
    const tsValue = value.fillRecordID;
    result.push(
      [6, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.baseAssetAmountFilled !== undefined) {
    const tsValue = value.baseAssetAmountFilled;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.quoteAssetAmountFilled !== undefined) {
    const tsValue = value.quoteAssetAmountFilled;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.takerFee !== undefined) {
    const tsValue = value.takerFee;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.makerFee !== undefined) {
    const tsValue = value.makerFee;
    result.push(
      [10, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.referrerReward !== undefined) {
    const tsValue = value.referrerReward;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.quoteAssetAmountSurplus !== undefined) {
    const tsValue = value.quoteAssetAmountSurplus;
    result.push(
      [12, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.spotFulfillmentMethodFee !== undefined) {
    const tsValue = value.spotFulfillmentMethodFee;
    result.push(
      [13, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.taker !== undefined) {
    const tsValue = value.taker;
    result.push(
      [14, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.takerOrderID !== undefined) {
    const tsValue = value.takerOrderID;
    result.push(
      [15, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.takerOrderDirection !== undefined) {
    const tsValue = value.takerOrderDirection;
    result.push(
      [16, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.takerOrderBaseAssetAmount !== undefined) {
    const tsValue = value.takerOrderBaseAssetAmount;
    result.push(
      [17, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.takerOrderCumulativeBaseAssetAmountFilled !== undefined) {
    const tsValue = value.takerOrderCumulativeBaseAssetAmountFilled;
    result.push(
      [18, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.takerOrderCumulativeQuoteAssetAmountFilled !== undefined) {
    const tsValue = value.takerOrderCumulativeQuoteAssetAmountFilled;
    result.push(
      [19, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.maker !== undefined) {
    const tsValue = value.maker;
    result.push(
      [20, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.makerOrderID !== undefined) {
    const tsValue = value.makerOrderID;
    result.push(
      [21, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.makerOrderDirection !== undefined) {
    const tsValue = value.makerOrderDirection;
    result.push(
      [22, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.makerOrderBaseAssetAmount !== undefined) {
    const tsValue = value.makerOrderBaseAssetAmount;
    result.push(
      [23, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.makerOrderCumulativeBaseAssetAmountFilled !== undefined) {
    const tsValue = value.makerOrderCumulativeBaseAssetAmountFilled;
    result.push(
      [24, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.makerOrderCumulativeQuoteAssetAmountFilled !== undefined) {
    const tsValue = value.makerOrderCumulativeQuoteAssetAmountFilled;
    result.push(
      [25, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPerpTradesResponse {
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
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.indexPrice = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.marketIndex = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.filler = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.fillerReward = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.fillRecordID = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.baseAssetAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quoteAssetAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.takerFee = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.makerFee = value;
  }
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.referrerReward = value;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quoteAssetAmountSurplus = value;
  }
  field: {
    const wireValue = wireFields.get(13);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.spotFulfillmentMethodFee = value;
  }
  field: {
    const wireValue = wireFields.get(14);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.taker = value;
  }
  field: {
    const wireValue = wireFields.get(15);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.takerOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(16);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.takerOrderDirection = value;
  }
  field: {
    const wireValue = wireFields.get(17);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.takerOrderBaseAssetAmount = value;
  }
  field: {
    const wireValue = wireFields.get(18);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.takerOrderCumulativeBaseAssetAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(19);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.takerOrderCumulativeQuoteAssetAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(20);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.maker = value;
  }
  field: {
    const wireValue = wireFields.get(21);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.makerOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(22);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.makerOrderDirection = value;
  }
  field: {
    const wireValue = wireFields.get(23);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.makerOrderBaseAssetAmount = value;
  }
  field: {
    const wireValue = wireFields.get(24);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.makerOrderCumulativeBaseAssetAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(25);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.makerOrderCumulativeQuoteAssetAmountFilled = value;
  }
  return result;
}
