import {
  Type as Project,
  name2num,
  num2name,
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
  export interface TokenPrice {
    token: string;
    tokenAddress: string;
    project: Project;
    buy: number;
    buySize: number;
    sell: number;
    sellSize: number;
  }
}
export type Type = $.api.TokenPrice;

export function getDefaultValue(): $.api.TokenPrice {
  return {
    token: "",
    tokenAddress: "",
    project: "P_UNKNOWN",
    buy: 0,
    buySize: 0,
    sell: 0,
    sellSize: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TokenPrice>): $.api.TokenPrice {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TokenPrice): unknown {
  const result: any = {};
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.string(value.token);
  if (value.tokenAddress !== undefined) result.tokenAddress = tsValueToJsonValueFns.string(value.tokenAddress);
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.buy !== undefined) result.buy = tsValueToJsonValueFns.double(value.buy);
  if (value.buySize !== undefined) result.buySize = tsValueToJsonValueFns.double(value.buySize);
  if (value.sell !== undefined) result.sell = tsValueToJsonValueFns.double(value.sell);
  if (value.sellSize !== undefined) result.sellSize = tsValueToJsonValueFns.double(value.sellSize);
  return result;
}

export function decodeJson(value: any): $.api.TokenPrice {
  const result = getDefaultValue();
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.string(value.token);
  if (value.tokenAddress !== undefined) result.tokenAddress = jsonValueToTsValueFns.string(value.tokenAddress);
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.buy !== undefined) result.buy = jsonValueToTsValueFns.double(value.buy);
  if (value.buySize !== undefined) result.buySize = jsonValueToTsValueFns.double(value.buySize);
  if (value.sell !== undefined) result.sell = jsonValueToTsValueFns.double(value.sell);
  if (value.sellSize !== undefined) result.sellSize = jsonValueToTsValueFns.double(value.sellSize);
  return result;
}

export function encodeBinary(value: $.api.TokenPrice): Uint8Array {
  const result: WireMessage = [];
  if (value.token !== undefined) {
    const tsValue = value.token;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.tokenAddress !== undefined) {
    const tsValue = value.tokenAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.buy !== undefined) {
    const tsValue = value.buy;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.buySize !== undefined) {
    const tsValue = value.buySize;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sell !== undefined) {
    const tsValue = value.sell;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellSize !== undefined) {
    const tsValue = value.sellSize;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TokenPrice {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.token = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.tokenAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buy = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buySize = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sell = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellSize = value;
  }
  return result;
}
