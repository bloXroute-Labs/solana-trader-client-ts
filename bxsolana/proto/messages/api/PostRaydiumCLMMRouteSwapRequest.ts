import {
  Type as RaydiumRouteStep,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./RaydiumRouteStep";
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.api {
  export interface PostRaydiumCLMMRouteSwapRequest {
    ownerAddress: string;
    steps: RaydiumRouteStep[];
    slippage: number;
  }
}
export type Type = $.api.PostRaydiumCLMMRouteSwapRequest;

export function getDefaultValue(): $.api.PostRaydiumCLMMRouteSwapRequest {
  return {
    ownerAddress: "",
    steps: [],
    slippage: 0,
  };
}

export function createValue(partialValue: Partial<$.api.PostRaydiumCLMMRouteSwapRequest>): $.api.PostRaydiumCLMMRouteSwapRequest {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostRaydiumCLMMRouteSwapRequest): unknown {
  const result: any = {};
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  result.steps = value.steps.map(value => encodeJson_1(value));
  if (value.slippage !== undefined) result.slippage = tsValueToJsonValueFns.double(value.slippage);
  return result;
}

export function decodeJson(value: any): $.api.PostRaydiumCLMMRouteSwapRequest {
  const result = getDefaultValue();
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  result.steps = value.steps?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.slippage !== undefined) result.slippage = jsonValueToTsValueFns.double(value.slippage);
  return result;
}

export function encodeBinary(value: $.api.PostRaydiumCLMMRouteSwapRequest): Uint8Array {
  const result: WireMessage = [];
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.steps) {
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.slippage !== undefined) {
    const tsValue = value.slippage;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostRaydiumCLMMRouteSwapRequest {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.ownerAddress = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.steps = value as any;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.slippage = value;
  }
  return result;
}
