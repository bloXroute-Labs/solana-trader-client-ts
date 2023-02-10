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
  export interface TradeSwapRequest {
    project: Project;
    ownerAddress: string;
    inToken: string;
    outToken: string;
    inAmount: number;
    slippage: number;
  }
}
export type Type = $.api.TradeSwapRequest;

export function getDefaultValue(): $.api.TradeSwapRequest {
  return {
    project: "P_UNKNOWN",
    ownerAddress: "",
    inToken: "",
    outToken: "",
    inAmount: 0,
    slippage: 0,
  };
}

export function createValue(partialValue: Partial<$.api.TradeSwapRequest>): $.api.TradeSwapRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TradeSwapRequest): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.inToken !== undefined) result.inToken = tsValueToJsonValueFns.string(value.inToken);
  if (value.outToken !== undefined) result.outToken = tsValueToJsonValueFns.string(value.outToken);
  if (value.inAmount !== undefined) result.inAmount = tsValueToJsonValueFns.double(value.inAmount);
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  return result;
}

export function decodeJson(value: any): $.api.TradeSwapRequest {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.inToken !== undefined) result.inToken = jsonValueToTsValueFns.string(value.inToken);
  if (value.outToken !== undefined) result.outToken = jsonValueToTsValueFns.string(value.outToken);
  if (value.inAmount !== undefined) result.inAmount = jsonValueToTsValueFns.double(value.inAmount);
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  return result;
}

export function encodeBinary(value: $.api.TradeSwapRequest): Uint8Array {
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
  if (value.inToken !== undefined) {
    const tsValue = value.inToken;
    result.push(
      [3, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outToken !== undefined) {
    const tsValue = value.outToken;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.inAmount !== undefined) {
    const tsValue = value.inAmount;
    result.push(
      [5, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [6, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TradeSwapRequest {
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
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.inToken = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.outToken = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.inAmount = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  return result;
}
