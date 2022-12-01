import {
  Type as MarketProgram,
  name2num,
  num2name,
} from "./MarketProgram.js";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar.js";
import {
  WireMessage,
  WireType,
} from "../../runtime/wire/index.js";
import {
  default as serialize,
} from "../../runtime/wire/serialize.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as Long,
} from "../../runtime/Long.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type GetOrderByIDRequest = {
    orderID: string;
    market: string;
    program: MarketProgram;
  }
}
export type Type = $.api.GetOrderByIDRequest;

export function getDefaultValue(): $.api.GetOrderByIDRequest {
  return {
    orderID: "",
    market: "",
    program: "MP_SERUM",
  };
}

export function createValue(partialValue: Partial<$.api.GetOrderByIDRequest>): $.api.GetOrderByIDRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetOrderByIDRequest): unknown {
  const result: any = {};
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.program !== undefined) result.program = tsValueToJsonValueFns.enum(value.program);
  return result;
}

export function decodeJson(value: any): $.api.GetOrderByIDRequest {
  const result = getDefaultValue();
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.program !== undefined) result.program = jsonValueToTsValueFns.enum(value.program) as MarketProgram;
  return result;
}

export function encodeBinary(value: $.api.GetOrderByIDRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.program !== undefined) {
    const tsValue = value.program;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetOrderByIDRequest {
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
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.market = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.program = value;
  }
  return result;
}
