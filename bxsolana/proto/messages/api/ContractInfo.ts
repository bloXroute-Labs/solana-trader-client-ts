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
  export interface ContractInfo {
    contract: PerpContract;
    contractAddress: string;
    fundingRate: number;
    minSize: number;
    perpPrice: number;
    indexPrice: number;
    openInterest: number;
  }
}
export type Type = $.api.ContractInfo;

export function getDefaultValue(): $.api.ContractInfo {
  return {
    contract: "ALL",
    contractAddress: "",
    fundingRate: 0,
    minSize: 0,
    perpPrice: 0,
    indexPrice: 0,
    openInterest: 0,
  };
}

export function createValue(partialValue: Partial<$.api.ContractInfo>): $.api.ContractInfo {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.ContractInfo): unknown {
  const result: any = {};
  if (value.contract !== undefined) result.contract = tsValueToJsonValueFns.enum(value.contract);
  if (value.contractAddress !== undefined) result.contractAddress = tsValueToJsonValueFns.string(value.contractAddress);
  if (value.fundingRate !== undefined) result.fundingRate = tsValueToJsonValueFns.double(value.fundingRate);
  if (value.minSize !== undefined) result.minSize = tsValueToJsonValueFns.double(value.minSize);
  if (value.perpPrice !== undefined) result.perpPrice = tsValueToJsonValueFns.double(value.perpPrice);
  if (value.indexPrice !== undefined) result.indexPrice = tsValueToJsonValueFns.double(value.indexPrice);
  if (value.openInterest !== undefined) result.openInterest = tsValueToJsonValueFns.double(value.openInterest);
  return result;
}

export function decodeJson(value: any): $.api.ContractInfo {
  const result = getDefaultValue();
  if (value.contract !== undefined) result.contract = jsonValueToTsValueFns.enum(value.contract) as PerpContract;
  if (value.contractAddress !== undefined) result.contractAddress = jsonValueToTsValueFns.string(value.contractAddress);
  if (value.fundingRate !== undefined) result.fundingRate = jsonValueToTsValueFns.double(value.fundingRate);
  if (value.minSize !== undefined) result.minSize = jsonValueToTsValueFns.double(value.minSize);
  if (value.perpPrice !== undefined) result.perpPrice = jsonValueToTsValueFns.double(value.perpPrice);
  if (value.indexPrice !== undefined) result.indexPrice = jsonValueToTsValueFns.double(value.indexPrice);
  if (value.openInterest !== undefined) result.openInterest = jsonValueToTsValueFns.double(value.openInterest);
  return result;
}

export function encodeBinary(value: $.api.ContractInfo): Uint8Array {
  const result: WireMessage = [];
  if (value.contract !== undefined) {
    const tsValue = value.contract;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.contractAddress !== undefined) {
    const tsValue = value.contractAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.fundingRate !== undefined) {
    const tsValue = value.fundingRate;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.minSize !== undefined) {
    const tsValue = value.minSize;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.perpPrice !== undefined) {
    const tsValue = value.perpPrice;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.indexPrice !== undefined) {
    const tsValue = value.indexPrice;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.openInterest !== undefined) {
    const tsValue = value.openInterest;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.ContractInfo {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.contractAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.fundingRate = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.minSize = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.perpPrice = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.indexPrice = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.openInterest = value;
  }
  return result;
}
