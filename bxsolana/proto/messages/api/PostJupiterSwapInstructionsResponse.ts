import {
  Type as InstructionJupiter,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./InstructionJupiter";
import {
  Type as PublicKeys,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./PublicKeys";
import {
  Type as PriceImpactPercentV2,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../common/PriceImpactPercentV2";
import {
  Type as Fee,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "../common/Fee";
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
  export interface PostJupiterSwapInstructionsResponse {
    instructions: InstructionJupiter[];
    addressLookupTableAddresses: Map<string, PublicKeys>;
    outAmount: number;
    outAmountMin: number;
    priceImpact?: PriceImpactPercentV2;
    fees: Fee[];
  }
}
export type Type = $.api.PostJupiterSwapInstructionsResponse;

export function getDefaultValue(): $.api.PostJupiterSwapInstructionsResponse {
  return {
    instructions: [],
    addressLookupTableAddresses: new Map(),
    outAmount: 0,
    outAmountMin: 0,
    priceImpact: undefined,
    fees: [],
  };
}

export function createValue(partialValue: Partial<$.api.PostJupiterSwapInstructionsResponse>): $.api.PostJupiterSwapInstructionsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.PostJupiterSwapInstructionsResponse): unknown {
  const result: any = {};
  result.instructions = value.instructions.map(value => encodeJson_1(value));
  if (value.addressLookupTableAddresses !== undefined) result.addressLookupTableAddresses = Object.fromEntries([...value.addressLookupTableAddresses.entries()].map(([key, value]) => [key, encodeJson_2(value)]));
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.double(value.outAmountMin);
  if (value.priceImpact !== undefined) result.priceImpact = encodeJson_3(value.priceImpact);
  result.fees = value.fees.map(value => encodeJson_4(value));
  return result;
}

export function decodeJson(value: any): $.api.PostJupiterSwapInstructionsResponse {
  const result = getDefaultValue();
  result.instructions = value.instructions?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.addressLookupTableAddresses !== undefined) result.addressLookupTableAddresses = Object.fromEntries([...value.addressLookupTableAddresses.entries()].map(([key, value]) => [key, decodeJson_2(value)]));
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.double(value.outAmountMin);
  if (value.priceImpact !== undefined) result.priceImpact = decodeJson_3(value.priceImpact);
  result.fees = value.fees?.map((value: any) => decodeJson_4(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.PostJupiterSwapInstructionsResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.instructions) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  {
    const fields = value.addressLookupTableAddresses.entries();
    for (const [key, value] of fields) {
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: serialize([[1, tsValueToWireValueFns.string(key)], [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(value) }]]) }],
      );
    }
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.outAmountMin !== undefined) {
    const tsValue = value.outAmountMin;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.priceImpact !== undefined) {
    const tsValue = value.priceImpact;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
    );
  }
  for (const tsValue of value.fees) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.PostJupiterSwapInstructionsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.instructions = value as any;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => (() => { if (wireValue.type !== WireType.LengthDelimited) { return; } const { 1: key, 2: value } = Object.fromEntries(deserialize(wireValue.value)); if (key === undefined || value === undefined) return; return [wireValueToTsValueFns.string(key), value.type === WireType.LengthDelimited ? decodeBinary_2(value.value) : undefined] as const;})()).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.addressLookupTableAddresses = new Map(value as any);
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmount = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.outAmountMin = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.priceImpact = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.fees = value as any;
  }
  return result;
}
