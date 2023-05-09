import {
  Type as UnsettledAccountToken,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./UnsettledAccountToken";
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
  export interface UnsettledAccount {
    account: string;
    baseToken?: UnsettledAccountToken;
    quoteToken?: UnsettledAccountToken;
  }
}
export type Type = $.api.UnsettledAccount;

export function getDefaultValue(): $.api.UnsettledAccount {
  return {
    account: "",
    baseToken: undefined,
    quoteToken: undefined,
  };
}

export function createValue(partialValue: Partial<$.api.UnsettledAccount>): $.api.UnsettledAccount {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.UnsettledAccount): unknown {
  const result: any = {};
  if (value.account !== undefined) result.account = tsValueToJsonValueFns.string(value.account);
  if (value.baseToken !== undefined) result.baseToken = encodeJson_1(value.baseToken);
  if (value.quoteToken !== undefined) result.quoteToken = encodeJson_1(value.quoteToken);
  return result;
}

export function decodeJson(value: any): $.api.UnsettledAccount {
  const result = getDefaultValue();
  if (value.account !== undefined) result.account = jsonValueToTsValueFns.string(value.account);
  if (value.baseToken !== undefined) result.baseToken = decodeJson_1(value.baseToken);
  if (value.quoteToken !== undefined) result.quoteToken = decodeJson_1(value.quoteToken);
  return result;
}

export function encodeBinary(value: $.api.UnsettledAccount): Uint8Array {
  const result: WireMessage = [];
  if (value.account !== undefined) {
    const tsValue = value.account;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.baseToken !== undefined) {
    const tsValue = value.baseToken;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.quoteToken !== undefined) {
    const tsValue = value.quoteToken;
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.UnsettledAccount {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.account = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.baseToken = value;
  }
  field: {
    const wireValue = wireFields.get(3);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.quoteToken = value;
  }
  return result;
}
