import {
  Type as Step,
  name2num,
  num2name,
} from "./Step.js";
import {
  Type as MarketProgram,
  name2num as name2num_1,
  num2name as num2name_1,
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
  export type GetMarketDepthRequest = {
    market: string;
    depth: number;
    step: Step;
    program: MarketProgram;
  }
}
export type Type = $.api.GetMarketDepthRequest;

export function getDefaultValue(): $.api.GetMarketDepthRequest {
  return {
    market: "",
    depth: 0,
    step: "STEP0",
    program: "MP_SERUM",
  };
}

export function createValue(partialValue: Partial<$.api.GetMarketDepthRequest>): $.api.GetMarketDepthRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetMarketDepthRequest): unknown {
  const result: any = {};
  if (value.market !== undefined) result.market = tsValueToJsonValueFns.string(value.market);
  if (value.depth !== undefined) result.depth = tsValueToJsonValueFns.int32(value.depth);
  if (value.step !== undefined) result.step = tsValueToJsonValueFns.enum(value.step);
  if (value.program !== undefined) result.program = tsValueToJsonValueFns.enum(value.program);
  return result;
}

export function decodeJson(value: any): $.api.GetMarketDepthRequest {
  const result = getDefaultValue();
  if (value.market !== undefined) result.market = jsonValueToTsValueFns.string(value.market);
  if (value.depth !== undefined) result.depth = jsonValueToTsValueFns.int32(value.depth);
  if (value.step !== undefined) result.step = jsonValueToTsValueFns.enum(value.step) as Step;
  if (value.program !== undefined) result.program = jsonValueToTsValueFns.enum(value.program) as MarketProgram;
  return result;
}

export function encodeBinary(value: $.api.GetMarketDepthRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.market !== undefined) {
    const tsValue = value.market;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.depth !== undefined) {
    const tsValue = value.depth;
    result.push(
      [2, tsValueToWireValueFns.int32(tsValue)],
    );
  }
  if (value.step !== undefined) {
    const tsValue = value.step;
    result.push(
      [3, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.program !== undefined) {
    const tsValue = value.program;
    result.push(
      [4, { type: WireType.Varint as const, value: new Long(name2num_1[tsValue as keyof typeof name2num_1]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetMarketDepthRequest {
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
    const value = wireValueToTsValueFns.int32(wireValue);
    if (value === undefined) break field;
    result.depth = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.step = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name_1[wireValue.value[0] as keyof typeof num2name_1] : undefined;
    if (value === undefined) break field;
    result.program = value;
  }
  return result;
}
