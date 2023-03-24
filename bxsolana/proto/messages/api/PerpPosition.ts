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
  export type PerpPosition = {
    contract: PerpContract;
    contractVolume: number;
    volumeAvailable: number;
    volumeInOrder: number;
    positionMargin: number;
    positionSide: PerpPositionSide;
    unrealizedPnL: number;
    notionalValue: number;
    indexPrice: number;
    liquidationPrice: number;
  }
}

export type Type = $.api.PerpPosition;

export function getDefaultValue(): $.api.PerpPosition {
  return {
    contract: "ALL",
    contractVolume: 0,
    volumeAvailable: 0,
    volumeInOrder: 0,
    positionMargin: 0,
    positionSide: "PS_UNKNOWN",
    unrealizedPnL: 0,
    notionalValue: 0,
    indexPrice: 0,
    liquidationPrice: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PerpPosition>): $.api.PerpPosition {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PerpPosition): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.contractVolume !== undefined) result.contractVolume = tsValueToJsonValueFns.double(value.contractVolume);
  if (value.volumeAvailable !== undefined) result.volumeAvailable = tsValueToJsonValueFns.double(value.volumeAvailable);
  if (value.volumeInOrder !== undefined) result.volumeInOrder = tsValueToJsonValueFns.double(value.volumeInOrder);
  if (value.positionMargin !== undefined) result.positionMargin = tsValueToJsonValueFns.double(value.positionMargin);
  if (value.positionSide !== undefined) result.positionSide = tsValueToJsonValueFns.enum(value.positionSide);
  if (value.unrealizedPnL !== undefined) result.unrealizedPnL = tsValueToJsonValueFns.double(value.unrealizedPnL);
  if (value.notionalValue !== undefined) result.notionalValue = tsValueToJsonValueFns.double(value.notionalValue);
  if (value.indexPrice !== undefined) result.indexPrice = tsValueToJsonValueFns.double(value.indexPrice);
  if (value.liquidationPrice !== undefined) result.liquidationPrice = tsValueToJsonValueFns.double(value.liquidationPrice);
  return result;
}

export function decodeJson(value: any): $.api.PerpPosition {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.contractVolume !== undefined) result.contractVolume = jsonValueToTsValueFns.double(value.contractVolume);
  if (value.volumeAvailable !== undefined) result.volumeAvailable = jsonValueToTsValueFns.double(value.volumeAvailable);
  if (value.volumeInOrder !== undefined) result.volumeInOrder = jsonValueToTsValueFns.double(value.volumeInOrder);
  if (value.positionMargin !== undefined) result.positionMargin = jsonValueToTsValueFns.double(value.positionMargin);
  if (value.positionSide !== undefined) result.positionSide = jsonValueToTsValueFns.enum(value.positionSide) as PerpPositionSide;
  if (value.unrealizedPnL !== undefined) result.unrealizedPnL = jsonValueToTsValueFns.double(value.unrealizedPnL);
  if (value.notionalValue !== undefined) result.notionalValue = jsonValueToTsValueFns.double(value.notionalValue);
  if (value.indexPrice !== undefined) result.indexPrice = jsonValueToTsValueFns.double(value.indexPrice);
  if (value.liquidationPrice !== undefined) result.liquidationPrice = jsonValueToTsValueFns.double(value.liquidationPrice);
  return result;
}

export function encodeBinary(value: $.api.PerpPosition): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.contractVolume !== undefined) {
    const tsValue = value.contractVolume;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.volumeAvailable !== undefined) {
    const tsValue = value.volumeAvailable;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.volumeInOrder !== undefined) {
    const tsValue = value.volumeInOrder;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.positionMargin !== undefined) {
    const tsValue = value.positionMargin;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.positionSide !== undefined) {
    const tsValue = value.positionSide;
    result.push(
      [6, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  if (value.unrealizedPnL !== undefined) {
    const tsValue = value.unrealizedPnL;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.notionalValue !== undefined) {
    const tsValue = value.notionalValue;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.indexPrice !== undefined) {
    const tsValue = value.indexPrice;
    result.push(
      [9, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.liquidationPrice !== undefined) {
    const tsValue = value.liquidationPrice;
    result.push(
      [10, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PerpPosition {
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
    result.contractVolume = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.volumeAvailable = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.volumeInOrder = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.positionMargin = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.positionSide = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.unrealizedPnL = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.notionalValue = value;
  }
  field: {
    const wireValue = wireFields.get(9);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.indexPrice = value;
  }
  field: {
    const wireValue = wireFields.get(10);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.liquidationPrice = value;
  }
  return result;
}
