import {
  Type as Context,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Context";
import {
  Type as DriftMarginOrder,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./DriftMarginOrder";
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
  export interface GetDriftOpenMarginOrderResponse {
    context?: Context;
    ownerAddress: string;
    order?: DriftMarginOrder;
  }
}
export type Type = $.api.GetDriftOpenMarginOrderResponse;

export function getDefaultValue(): $.api.GetDriftOpenMarginOrderResponse {
  return {
    context: undefined,
    ownerAddress: "",
    order: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.GetDriftOpenMarginOrderResponse>): $.api.GetDriftOpenMarginOrderResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetDriftOpenMarginOrderResponse): unknown {
  const result: any = {};
  if (value.context !== undefined) result.context = encodeJson_1(value.context);
  if (value.ownerAddress !== undefined) result.ownerAddress = tsValueToJsonValueFns.string(value.ownerAddress);
  if (value.order !== undefined) result.order = encodeJson_2(value.order);
  return result;
}

export function decodeJson(value: any): $.api.GetDriftOpenMarginOrderResponse {
  const result = getDefaultValue();
  if (value.context !== undefined) result.context = decodeJson_1(value.context);
  if (value.ownerAddress !== undefined) result.ownerAddress = jsonValueToTsValueFns.string(value.ownerAddress);
  if (value.order !== undefined) result.order = decodeJson_2(value.order);
  return result;
}

export function encodeBinary(value: $.api.GetDriftOpenMarginOrderResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.context !== undefined) {
    const tsValue = value.context;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.ownerAddress !== undefined) {
    const tsValue = value.ownerAddress;
    result.push(
      [2, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.order !== undefined) {
    const tsValue = value.order;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetDriftOpenMarginOrderResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.context = value;
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
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.order = value;
  }
  return result;
}
