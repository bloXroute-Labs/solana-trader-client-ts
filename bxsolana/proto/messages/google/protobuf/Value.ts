import {
  Type as Struct,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Struct";
import {
  Type as ListValue,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./ListValue";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
  Field,
} from "../../../runtime/wire/index";
import {
  default as serialize,
} from "../../../runtime/wire/serialize";
import {
  default as Long,
} from "../../../runtime/Long";
import {
  name2num,
  num2name,
} from "./NullValue";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.protobuf {
  export interface Value {
    kind?: (
      | { field: "nullValue", value: null }
      | { field: "numberValue", value: number }
      | { field: "stringValue", value: string }
      | { field: "boolValue", value: boolean }
      | { field: "structValue", value: Struct }
      | { field: "listValue", value: ListValue }
  );
  }
}
export type Type = $.google.protobuf.Value;

export function getDefaultValue(): $.google.protobuf.Value {
  return {
    kind: undefined,
  };
}

export function createValue(partialValue: Partial<$.google.protobuf.Value>): $.google.protobuf.Value {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.protobuf.Value): unknown {
  const result: any = {};
  switch (value.kind?.field) {
    case "nullValue": {
      result.nullValue = value.kind.value;
      break;
    }
    case "numberValue": {
      result.numberValue = tsValueToJsonValueFns.double(value.kind.value);
      break;
    }
    case "stringValue": {
      result.stringValue = tsValueToJsonValueFns.string(value.kind.value);
      break;
    }
    case "boolValue": {
      result.boolValue = tsValueToJsonValueFns.bool(value.kind.value);
      break;
    }
    case "structValue": {
      result.structValue = encodeJson_1(value.kind.value);
      break;
    }
    case "listValue": {
      result.listValue = encodeJson_2(value.kind.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.google.protobuf.Value {
  const result = getDefaultValue();
  if (value.nullValue !== undefined) result.kind = {field: "nullValue", value: value.nullValue};
  if (value.numberValue !== undefined) result.kind = {field: "numberValue", value: jsonValueToTsValueFns.double(value.numberValue)};
  if (value.stringValue !== undefined) result.kind = {field: "stringValue", value: jsonValueToTsValueFns.string(value.stringValue)};
  if (value.boolValue !== undefined) result.kind = {field: "boolValue", value: jsonValueToTsValueFns.bool(value.boolValue)};
  if (value.structValue !== undefined) result.kind = {field: "structValue", value: decodeJson_1(value.structValue)};
  if (value.listValue !== undefined) result.kind = {field: "listValue", value: decodeJson_2(value.listValue)};
  return result;
}

export function encodeBinary(value: $.google.protobuf.Value): Uint8Array {
  const result: WireMessage = [];
  switch (value.kind?.field) {
    case "nullValue": {
      const tsValue = value.kind.value;
      result.push(
        [1, ((tsValue) => ({ type: WireType.Varint as const, value: new Long(name2num[tsValue as keyof typeof name2num]) }))("NULL_VALUE")],
      );
      break;
    }
    case "numberValue": {
      const tsValue = value.kind.value;
      result.push(
        [2, tsValueToWireValueFns.double(tsValue)],
      );
      break;
    }
    case "stringValue": {
      const tsValue = value.kind.value;
      result.push(
        [3, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "boolValue": {
      const tsValue = value.kind.value;
      result.push(
        [4, tsValueToWireValueFns.bool(tsValue)],
      );
      break;
    }
    case "structValue": {
      const tsValue = value.kind.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "listValue": {
      const tsValue = value.kind.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "nullValue"],
  [2, "numberValue"],
  [3, "stringValue"],
  [4, "boolValue"],
  [5, "structValue"],
  [6, "listValue"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  kind: new Set([1, 2, 3, 4, 5, 6]),
};
const oneofFieldNamesMap = {
  kind: new Map([
    [1, "nullValue" as const],
    [2, "numberValue" as const],
    [3, "stringValue" as const],
    [4, "boolValue" as const],
    [5, "structValue" as const],
    [6, "listValue" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.google.protobuf.Value {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.kind;
    const oneofFieldNames = oneofFieldNamesMap.kind;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return (wireValue.type === WireType.Varint ? num2name[wireValue.value[0] as keyof typeof num2name] : undefined) === "NULL_VALUE" ? null : undefined; },
      [2](wireValue: Field) { return wireValueToTsValueFns.double(wireValue); },
      [3](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [4](wireValue: Field) { return wireValueToTsValueFns.bool(wireValue); },
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.kind = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
