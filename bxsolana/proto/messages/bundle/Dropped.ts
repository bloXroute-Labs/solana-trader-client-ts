import {
  Type as DroppedReason,
  name2num,
  num2name,
} from "./DroppedReason";
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.bundle {
  export interface Dropped {
    reason: DroppedReason;
  }
}
export type Type = $.bundle.Dropped;

export function getDefaultValue(): $.bundle.Dropped {
  return {
    reason: "BlockhashExpired",
  };
}

export function createValue(partialValue: Partial<$.bundle.Dropped>): $.bundle.Dropped {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Dropped): unknown {
  const result: any = {};
  if (value.reason !== undefined) result.reason = tsValueToJsonValueFns.enum(value.reason);
  return result;
}

export function decodeJson(value: any): $.bundle.Dropped {
  const result = getDefaultValue();
  if (value.reason !== undefined) result.reason = jsonValueToTsValueFns.enum(value.reason) as DroppedReason;
  return result;
}

export function encodeBinary(value: $.bundle.Dropped): Uint8Array {
  const result: WireMessage = [];
  if (value.reason !== undefined) {
    const tsValue = value.reason;
    result.push(
      [1, { type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.Dropped {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined;
    if (value === undefined) break field;
    result.reason = value;
  }
  return result;
}
