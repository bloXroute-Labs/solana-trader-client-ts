import {
  Type as Side,
  name2num,
  num2name,
} from "./Side";
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
  export interface Trade {
    side: Side;
    size: number;
    fillPrice: number;
    orderID: string;
    isMaker: boolean;
    address: string;
    feeOrRebate: number;
    orderPrice: number;
  }
}
export type Type = $.api.Trade;

export function getDefaultValue(): $.api.Trade {
  return {
    side: "S_UNKNOWN",
    size: 0,
    fillPrice: 0,
    orderID: "",
    isMaker: false,
    address: "",
    feeOrRebate: 0,
    orderPrice: 0,
  };
}

export function createValue(partialValue: Partial<$.api.Trade>): $.api.Trade {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.Trade): unknown {
  const result: any = {};
  if (value.side !== undefined) result.side = tsValueToJsonValueFns.enum(value.side);
  if (value.size !== undefined) result.size = tsValueToJsonValueFns.double(value.size);
  if (value.fillPrice !== undefined) result.fillPrice = tsValueToJsonValueFns.double(value.fillPrice);
  if (value.orderID !== undefined) result.orderID = tsValueToJsonValueFns.string(value.orderID);
  if (value.isMaker !== undefined) result.isMaker = tsValueToJsonValueFns.bool(value.isMaker);
  if (value.address !== undefined) result.address = tsValueToJsonValueFns.string(value.address);
  if (value.feeOrRebate !== undefined) result.feeOrRebate = tsValueToJsonValueFns.double(value.feeOrRebate);
  if (value.orderPrice !== undefined) result.orderPrice = tsValueToJsonValueFns.double(value.orderPrice);
  return result;
}

export function decodeJson(value: any): $.api.Trade {
  const result = getDefaultValue();
  if (value.side !== undefined) result.side = jsonValueToTsValueFns.enum(value.side) as Side;
  if (value.size !== undefined) result.size = jsonValueToTsValueFns.double(value.size);
  if (value.fillPrice !== undefined) result.fillPrice = jsonValueToTsValueFns.double(value.fillPrice);
  if (value.orderID !== undefined) result.orderID = jsonValueToTsValueFns.string(value.orderID);
  if (value.isMaker !== undefined) result.isMaker = jsonValueToTsValueFns.bool(value.isMaker);
  if (value.address !== undefined) result.address = jsonValueToTsValueFns.string(value.address);
  if (value.feeOrRebate !== undefined) result.feeOrRebate = jsonValueToTsValueFns.double(value.feeOrRebate);
  if (value.orderPrice !== undefined) result.orderPrice = jsonValueToTsValueFns.double(value.orderPrice);
  return result;
}

export function encodeBinary(value: $.api.Trade): Uint8Array {
  const result: WireMessage = [];
  if (value.side !== undefined) {
    const tsValue = value.side;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  if (value.size !== undefined) {
    const tsValue = value.size;
    result.push(
      [2, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.fillPrice !== undefined) {
    const tsValue = value.fillPrice;
    result.push(
      [3, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.orderID !== undefined) {
    const tsValue = value.orderID;
    result.push(
      [4, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.isMaker !== undefined) {
    const tsValue = value.isMaker;
    result.push(
      [5, tsValueToWireValueFns.bool(tsValue)],
    );
  }
  if (value.address !== undefined) {
    const tsValue = value.address;
    result.push(
      [6, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.feeOrRebate !== undefined) {
    const tsValue = value.feeOrRebate;
    result.push(
      [7, tsValueToWireValueFns.double(tsValue)],
    );
  }
  if (value.orderPrice !== undefined) {
    const tsValue = value.orderPrice;
    result.push(
      [8, tsValueToWireValueFns.double(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.Trade {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.side = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.size = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.fillPrice = value;
  }
  field: {
    const wireValue = wireFields.get(4);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.orderID = value;
  }
  field: {
    const wireValue = wireFields.get(5);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.bool(wireValue);
    if (value === undefined) break field;
    result.isMaker = value;
  }
  field: {
    const wireValue = wireFields.get(6);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.address = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.feeOrRebate = value;
  }
  field: {
    const wireValue = wireFields.get(8);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.double(wireValue);
    if (value === undefined) break field;
    result.orderPrice = value;
  }
  return result;
}
