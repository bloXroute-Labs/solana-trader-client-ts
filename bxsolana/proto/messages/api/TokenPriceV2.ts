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
  export interface TokenPriceV2 {
    token: string;
    tokenAddress: string;
    buy: number;
    buySize: number;
    sell: number;
    sellSize: number;
  }
}
export type Type = $.api.TokenPriceV2;

export function getDefaultValue(): $.api.TokenPriceV2 {
  return {
    token: "",
    tokenAddress: "",
    buy: 0,
    buySize: 0,
    sell: 0,
    sellSize: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TokenPriceV2>): $.api.TokenPriceV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TokenPriceV2): unknown {
  const result: any = {};
  if (value.token !== undefined) result.token = tsValueToJsonValueFns.string(value.token);
  if (value.tokenAddress !== undefined) result.tokenAddress = tsValueToJsonValueFns.string(value.tokenAddress);
  if (value.buy !== undefined) result.buy = tsValueToJsonValueFns.double(value.buy);
  if (value.buySize !== undefined) result.buySize = tsValueToJsonValueFns.double(value.buySize);
  if (value.sell !== undefined) result.sell = tsValueToJsonValueFns.double(value.sell);
  if (value.sellSize !== undefined) result.sellSize = tsValueToJsonValueFns.double(value.sellSize);
  return result;
}

export function decodeJson(value: any): $.api.TokenPriceV2 {
  const result = getDefaultValue();
  if (value.token !== undefined) result.token = jsonValueToTsValueFns.string(value.token);
  if (value.tokenAddress !== undefined) result.tokenAddress = jsonValueToTsValueFns.string(value.tokenAddress);
  if (value.buy !== undefined) result.buy = jsonValueToTsValueFns.double(value.buy);
  if (value.buySize !== undefined) result.buySize = jsonValueToTsValueFns.double(value.buySize);
  if (value.sell !== undefined) result.sell = jsonValueToTsValueFns.double(value.sell);
  if (value.sellSize !== undefined) result.sellSize = jsonValueToTsValueFns.double(value.sellSize);
  return result;
}

export function encodeBinary(value: $.api.TokenPriceV2): Uint8Array {
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
  if (value.buy !== undefined) {
    const tsValue = value.buy;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.buySize !== undefined) {
    const tsValue = value.buySize;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sell !== undefined) {
    const tsValue = value.sell;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.sellSize !== undefined) {
    const tsValue = value.sellSize;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TokenPriceV2 {
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
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buy = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.buySize = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sell = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.sellSize = value;
  }
  return result;
}
