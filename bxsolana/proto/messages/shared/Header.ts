import {
  Type as Timestamp,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../google/protobuf/Timestamp";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.shared {
  export interface Header {
    ts?: Timestamp;
  }
}
export type Type = $.shared.Header;

export function getDefaultValue(): $.shared.Header {
  return {
    ts: undefined,
  };
}

export function createValue(partialValue: Partial<$.shared.Header>): $.shared.Header {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.shared.Header): unknown {
  const result: any = {};
  if (value.ts !== undefined) result.ts = encodeJson_1(value.ts);
  return result;
}

export function decodeJson(value: any): $.shared.Header {
  const result = getDefaultValue();
  if (value.ts !== undefined) result.ts = decodeJson_1(value.ts);
  return result;
}

export function encodeBinary(value: $.shared.Header): Uint8Array {
  const result: WireMessage = [];
  if (value.ts !== undefined) {
    const tsValue = value.ts;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.shared.Header {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.ts = value;
  }
  return result;
}
