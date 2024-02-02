import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as RouteStep,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./RouteStep";
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
  export interface RouteTradeSwapRequest {
    project: Project;
    ownerAddress: string;
    steps: RouteStep[];
    slippage: number;
    computeLimit: number;
    computePrice: string;
    tip?: string;
  }
}
export type Type = $.api.RouteTradeSwapRequest;

export function getDefaultValue(): $.api.RouteTradeSwapRequest {
  return {
    project: "P_UNKNOWN",
    ownerAddress: "",
    steps: [],
    slippage: 0,
    computeLimit: 0,
    computePrice: "0",
    tip: "0",
  };
}

export function createValue(partialValue: Partial<$.api.RouteTradeSwapRequest>): $.api.RouteTradeSwapRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.RouteTradeSwapRequest): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  result.steps = value.steps.map(value => encodeJson_1(value));
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  if (value.computeLimit !== undefined) result.computeLimit = tsValueToJsonValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = tsValueToJsonValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = tsValueToJsonValueFns.uint64(value.tip);
  return result;
}

export function decodeJson(value: any): $.api.RouteTradeSwapRequest {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  result.steps = value.steps?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  if (value.computeLimit !== undefined) result.computeLimit = jsonValueToTsValueFns.uint32(value.computeLimit);
  if (value.computePrice !== undefined) result.computePrice = jsonValueToTsValueFns.uint64(value.computePrice);
  if (value.tip !== undefined) result.tip = jsonValueToTsValueFns.uint64(value.tip);
  return result;
}

export function encodeBinary(value: $.api.RouteTradeSwapRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.steps) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.computeLimit !== undefined) {
    const tsValue = value.computeLimit;
    result.push(
      [5, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  if (value.computePrice !== undefined) {
    const tsValue = value.computePrice;
    result.push(
      [6, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  if (value.tip !== undefined) {
    const tsValue = value.tip;
    result.push(
      [7, tsValueToWireValueFns.uint64(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.RouteTradeSwapRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.project = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.steps = value as any;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.computeLimit = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.computePrice = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint64(wireValue);
    if (value === undefined) break field;
    result.tip = value;
  }
  return result;
}
