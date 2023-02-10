import {
  Type as Project,
  name2num,
  num2name,
} from "./Project";
import {
  Type as TransactionMessage,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./TransactionMessage";
import {
  Type as PriceImpactPercent,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../common/PriceImpactPercent";
import {
  Type as Fee,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
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
  export interface TradeSwapResponse {
    project: Project;
    transactions: TransactionMessage[];
    outAmount: number;
    outAmountMin: number;
    priceImpact?: PriceImpactPercent;
    fees: Fee[];
  }
}
export type Type = $.api.TradeSwapResponse;

export function getDefaultValue(): $.api.TradeSwapResponse {
  return {
    project: "P_UNKNOWN",
    transactions: [],
    outAmount: 0,
    outAmountMin: 0,
    priceImpact: undefined,
    fees: [],
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
  result.transactions = value.transactions.map(value => encodeJson_1(value));
  if (value.outAmount !== undefined) result.outAmount = tsValueToJsonValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = tsValueToJsonValueFns.double(value.outAmountMin);
  if (value.priceImpact !== undefined) result.priceImpact = encodeJson_2(value.priceImpact);
  result.fees = value.fees.map(value => encodeJson_3(value));
  return result;
}

export function decodeJson(value: any): $.api.TradeSwapResponse {
  const result = getDefaultValue();
  if (value.project !== undefined) result.project = jsonValueToTsValueFns.enum(value.project) as Project;
  result.transactions = value.transactions?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.outAmount !== undefined) result.outAmount = jsonValueToTsValueFns.double(value.outAmount);
  if (value.outAmountMin !== undefined) result.outAmountMin = jsonValueToTsValueFns.double(value.outAmountMin);
  if (value.priceImpact !== undefined) result.priceImpact = decodeJson_2(value.priceImpact);
  result.fees = value.fees?.map((value: any) => decodeJson_3(value)) ?? [];
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
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
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
      [5, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  for (const tsValue of value.fees) {
    result.push(
      [6, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
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
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
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
    result.outAmountMin = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.priceImpact = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 6).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.fees = value as any;
  }
  return result;
}
