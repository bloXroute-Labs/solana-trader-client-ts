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
  export interface TickerV2 {
    market: string;
    marketAddress: string;
    bid: number;
    bidSize: number;
    ask: number;
    askSize: number;
  }
}
export type Type = $.api.TickerV2;

export function getDefaultValue(): $.api.TickerV2 {
  return {
    market: "",
    marketAddress: "",
    bid: 0,
    bidSize: 0,
    ask: 0,
    askSize: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TickerV2>): $.api.TickerV2 {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TickerV2): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.marketAddress !== undefined) result.marketAddress = tsValueToJsonValueFns.string(value.marketAddress);
  if (value.bid !== undefined) result.bid = tsValueToJsonValueFns.double(value.bid);
  if (value.bidSize !== undefined) result.bidSize = tsValueToJsonValueFns.double(value.bidSize);
  if (value.ask !== undefined) result.ask = tsValueToJsonValueFns.double(value.ask);
  if (value.askSize !== undefined) result.askSize = tsValueToJsonValueFns.double(value.askSize);
  return result;
}

export function decodeJson(value: any): $.api.TickerV2 {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.marketAddress !== undefined) result.marketAddress = jsonValueToTsValueFns.string(value.marketAddress);
  if (value.bid !== undefined) result.bid = jsonValueToTsValueFns.double(value.bid);
  if (value.bidSize !== undefined) result.bidSize = jsonValueToTsValueFns.double(value.bidSize);
  if (value.ask !== undefined) result.ask = jsonValueToTsValueFns.double(value.ask);
  if (value.askSize !== undefined) result.askSize = jsonValueToTsValueFns.double(value.askSize);
  return result;
}

export function encodeBinary(value: $.api.TickerV2): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.marketAddress !== undefined) {
    const tsValue = value.marketAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.bid !== undefined) {
    const tsValue = value.bid;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.bidSize !== undefined) {
    const tsValue = value.bidSize;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.ask !== undefined) {
    const tsValue = value.ask;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.askSize !== undefined) {
    const tsValue = value.askSize;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TickerV2 {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.marketAddress = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.bid = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.bidSize = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.ask = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.askSize = value;
  }
  return result;
}
