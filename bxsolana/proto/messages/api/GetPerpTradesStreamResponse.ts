// @ts-nocheck
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
  export type GetPerpTradesStreamResponse = {
    contract: PerpContract;
    makerPositionSide: PerpPositionSide;
    fillerAddress: string;
    takerAddress: string;
    takerOrderID: string;
    makerAddress: string;
    makerOrderID: string;
    baseAmountFilled: number;
    quoteAmountFilled: number;
  }
}

export type Type = $.api.GetPerpTradesStreamResponse;

export function getDefaultValue(): $.api.GetPerpTradesStreamResponse {
  return {
    contract: "ALL",
    makerPositionSide: "PS_UNKNOWN",
    fillerAddress: "",
    takerAddress: "",
    takerOrderID: "",
    makerAddress: "",
    makerOrderID: "",
    baseAmountFilled: 0,
    quoteAmountFilled: 0,
  };
}

export function createValue(partialValue: Partial<$.api.GetPerpTradesStreamResponse>): $.api.GetPerpTradesStreamResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPerpTradesStreamResponse): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.makerPositionSide !== undefined) result.makerPositionSide = tsValueToJsonValueFns.enum(value.makerPositionSide);
  if (value.fillerAddress !== undefined) result.fillerAddress = tsValueToJsonValueFns.string(value.fillerAddress);
  if (value.takerAddress !== undefined) result.takerAddress = tsValueToJsonValueFns.string(value.takerAddress);
  if (value.takerOrderID !== undefined) result.takerOrderID = tsValueToJsonValueFns.string(value.takerOrderID);
  if (value.makerAddress !== undefined) result.makerAddress = tsValueToJsonValueFns.string(value.makerAddress);
  if (value.makerOrderID !== undefined) result.makerOrderID = tsValueToJsonValueFns.string(value.makerOrderID);
  if (value.baseAmountFilled !== undefined) result.baseAmountFilled = tsValueToJsonValueFns.double(value.baseAmountFilled);
  if (value.quoteAmountFilled !== undefined) result.quoteAmountFilled = tsValueToJsonValueFns.double(value.quoteAmountFilled);
  return result;
}

export function decodeJson(value: any): $.api.GetPerpTradesStreamResponse {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.makerPositionSide !== undefined) result.makerPositionSide = jsonValueToTsValueFns.enum(value.makerPositionSide) as PerpPositionSide;
  if (value.fillerAddress !== undefined) result.fillerAddress = jsonValueToTsValueFns.string(value.fillerAddress);
  if (value.takerAddress !== undefined) result.takerAddress = jsonValueToTsValueFns.string(value.takerAddress);
  if (value.takerOrderID !== undefined) result.takerOrderID = jsonValueToTsValueFns.string(value.takerOrderID);
  if (value.makerAddress !== undefined) result.makerAddress = jsonValueToTsValueFns.string(value.makerAddress);
  if (value.makerOrderID !== undefined) result.makerOrderID = jsonValueToTsValueFns.string(value.makerOrderID);
  if (value.baseAmountFilled !== undefined) result.baseAmountFilled = jsonValueToTsValueFns.double(value.baseAmountFilled);
  if (value.quoteAmountFilled !== undefined) result.quoteAmountFilled = jsonValueToTsValueFns.double(value.quoteAmountFilled);
  return result;
}

export function encodeBinary(value: $.api.GetPerpTradesStreamResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.makerPositionSide !== undefined) {
    const tsValue = value.makerPositionSide;
    result.push(
      [2, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.fillerAddress !== undefined) {
    const tsValue = value.fillerAddress;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.takerAddress !== undefined) {
    const tsValue = value.takerAddress;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.takerOrderID !== undefined) {
    const tsValue = value.takerOrderID;
    result.push(
      [5, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.makerAddress !== undefined) {
    const tsValue = value.makerAddress;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.makerOrderID !== undefined) {
    const tsValue = value.makerOrderID;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseAmountFilled !== undefined) {
    const tsValue = value.baseAmountFilled;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.quoteAmountFilled !== undefined) {
    const tsValue = value.quoteAmountFilled;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPerpTradesStreamResponse {
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
    result.makerPositionSide = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.fillerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.takerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.takerOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.makerAddress = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.makerOrderID = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.baseAmountFilled = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.quoteAmountFilled = value;
  }
  return result;
}
