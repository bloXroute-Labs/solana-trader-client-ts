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
  export interface DriftPerpPosition {
    contract: string;
    accountAddress: string;
    subAccountID: string;
    volumeAvailable: number;
    volumeInOrder: number;
    positionMargin: number;
    positionSide: string;
    notionalValue: number;
    indexPrice: number;
    liquidationPrice: number;
    unrealizedPNL: number;
  }
}
export type Type = $.api.DriftPerpPosition;

export function getDefaultValue(): $.api.DriftPerpPosition {
  return {
    contract: "",
    accountAddress: "",
    subAccountID: "0",
    volumeAvailable: 0,
    volumeInOrder: 0,
    positionMargin: 0,
    positionSide: "",
    notionalValue: 0,
    indexPrice: 0,
    liquidationPrice: 0,
    unrealizedPNL: 0,
  };
}

export function createValue(partialValue: Partial<$.api.DriftPerpPosition>): $.api.DriftPerpPosition {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.DriftPerpPosition): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.string(value.contract);
  if (value.accountAddress !== undefined) result.accountAddress = tsValueToJsonValueFns.string(value.accountAddress);
  if (value.subAccountID !== undefined) result.subAccountID = tsValueToJsonValueFns.int64(value.subAccountID);
  if (value.volumeAvailable !== undefined) result.volumeAvailable = tsValueToJsonValueFns.double(value.volumeAvailable);
  if (value.volumeInOrder !== undefined) result.volumeInOrder = tsValueToJsonValueFns.double(value.volumeInOrder);
  if (value.positionMargin !== undefined) result.positionMargin = tsValueToJsonValueFns.double(value.positionMargin);
  if (value.positionSide !== undefined) result.positionSide = tsValueToJsonValueFns.string(value.positionSide);
  if (value.notionalValue !== undefined) result.notionalValue = tsValueToJsonValueFns.double(value.notionalValue);
  if (value.indexPrice !== undefined) result.indexPrice = tsValueToJsonValueFns.double(value.indexPrice);
  if (value.liquidationPrice !== undefined) result.liquidationPrice = tsValueToJsonValueFns.double(value.liquidationPrice);
  if (value.unrealizedPNL !== undefined) result.unrealizedPNL = tsValueToJsonValueFns.double(value.unrealizedPNL);
  return result;
}

export function decodeJson(value: any): $.api.DriftPerpPosition {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.string(value.contract);
  if (value.accountAddress !== undefined) result.accountAddress = jsonValueToTsValueFns.string(value.accountAddress);
  if (value.subAccountID !== undefined) result.subAccountID = jsonValueToTsValueFns.int64(value.subAccountID);
  if (value.volumeAvailable !== undefined) result.volumeAvailable = jsonValueToTsValueFns.double(value.volumeAvailable);
  if (value.volumeInOrder !== undefined) result.volumeInOrder = jsonValueToTsValueFns.double(value.volumeInOrder);
  if (value.positionMargin !== undefined) result.positionMargin = jsonValueToTsValueFns.double(value.positionMargin);
  if (value.positionSide !== undefined) result.positionSide = jsonValueToTsValueFns.string(value.positionSide);
  if (value.notionalValue !== undefined) result.notionalValue = jsonValueToTsValueFns.double(value.notionalValue);
  if (value.indexPrice !== undefined) result.indexPrice = jsonValueToTsValueFns.double(value.indexPrice);
  if (value.liquidationPrice !== undefined) result.liquidationPrice = jsonValueToTsValueFns.double(value.liquidationPrice);
  if (value.unrealizedPNL !== undefined) result.unrealizedPNL = jsonValueToTsValueFns.double(value.unrealizedPNL);
  return result;
}

export function encodeBinary(value: $.api.DriftPerpPosition): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
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
  if (value.subAccountID !== undefined) {
    const tsValue = value.subAccountID;
    result.push(
      [3, tsValueToWireValueFns.int64(tsValue)],
    );
  }
  if (value.volumeAvailable !== undefined) {
    const tsValue = value.volumeAvailable;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.volumeInOrder !== undefined) {
    const tsValue = value.volumeInOrder;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.positionMargin !== undefined) {
    const tsValue = value.positionMargin;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.positionSide !== undefined) {
    const tsValue = value.positionSide;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
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
  if (value.unrealizedPNL !== undefined) {
    const tsValue = value.unrealizedPNL;
    result.push(
      [11, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.DriftPerpPosition {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contract = value;
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
    const value = wireValueToTsValueFns.int64(wireValue);
    if (value === undefined) break field;
    result.subAccountID = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.volumeAvailable = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.volumeInOrder = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.positionMargin = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.positionSide = value;
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
  field: {
    const wireValue = wireFields.get(11);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.unrealizedPNL = value;
  }
  return result;
}
