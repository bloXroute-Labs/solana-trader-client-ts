import {
  Type as Project,
  name2num,
  num2name,
} from "./Project.js";
import {
  Type as PriceImpactPercent,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./PriceImpactPercent.js";
import {
  Type as Fee,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Fee.js";
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
  default as Long,
} from "../../runtime/Long.js";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../runtime/wire/scalar.js";
import {
  default as deserialize,
} from "../../runtime/wire/deserialize.js";

export declare namespace $.api {
  export type TradeSwapResponse = {
    project: Project;
    transactions: string[];
    outAmount: number;
    minOutAmount: number;
    priceImpact?: PriceImpactPercent;
    fee?: Fee;
  }
}
export type Type = $.api.TradeSwapResponse;

export function getDefaultValue(): $.api.TradeSwapResponse {
  return {
    project: "P_UNKNOWN",
    transactions: [],
    outAmount: 0,
    minOutAmount: 0,
    priceImpact: undefined,
    fee: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.TradeSwapResponse>): $.api.TradeSwapResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.TradeSwapResponse): unknown {
  const result: any = {};
  if (value.project !== undefined) result.project = tsValueToJsonValueFns.enum(value.project);
  result.transactions = value.transactions.map(value => tsValueToJsonValueFns.string(value));
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.minOutAmount !== undefined) result.minOutAmount = tsValueToJsonValueFns.double(value.minOutAmount);
  if (value.priceImpact !== undefined) result.priceImpact = encodeJson_1(value.priceImpact);
  if (value.fee !== undefined) result.fee = encodeJson_2(value.fee);
  return result;
}

export function decodeJson(value: any): $.api.TradeSwapResponse {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  result.transactions = value.transactions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.minOutAmount !== undefined) result.minOutAmount = jsonValueToTsValueFns.double(value.minOutAmount);
  if (value.priceImpact !== undefined) result.priceImpact = decodeJson_1(value.priceImpact);
  if (value.fee !== undefined) result.fee = decodeJson_2(value.fee);
  return result;
}

export function encodeBinary(value: $.api.TradeSwapResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.project !== undefined) {
    const tsValue = value.project;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  for (const tsValue of value.transactions) {
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.outAmount !== undefined) {
    const tsValue = value.outAmount;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.minOutAmount !== undefined) {
    const tsValue = value.minOutAmount;
    result.push(
      [4, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.priceImpact !== undefined) {
    const tsValue = value.priceImpact;
    result.push(
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.fee !== undefined) {
    const tsValue = value.fee;
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.TradeSwapResponse {
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
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 2).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.transactions = value as any;
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
    result.minOutAmount = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.priceImpact = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.fee = value;
  }
  return result;
}
