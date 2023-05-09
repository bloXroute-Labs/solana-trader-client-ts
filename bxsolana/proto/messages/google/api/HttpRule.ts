import {
  Type as CustomHttpPattern,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./CustomHttpPattern";
import {
  Type as HttpRule_1,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./HttpRule";
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
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../../../runtime/wire/scalar";
import {
  default as deserialize,
} from "../../../runtime/wire/deserialize";

export declare namespace $.google.api {
  export interface HttpRule {
    selector: string;
    body: string;
    additionalBindings: HttpRule_1[];
    responseBody: string;
    pattern?: (
      | { field: "get", value: string }
      | { field: "put", value: string }
      | { field: "post", value: string }
      | { field: "delete", value: string }
      | { field: "patch", value: string }
      | { field: "custom", value: CustomHttpPattern }
  );
  }
}
export type Type = $.google.api.HttpRule;

export function getDefaultValue(): $.google.api.HttpRule {
  return {
    selector: "",
    body: "",
    additionalBindings: [],
    responseBody: "",
    pattern: undefined,
  };
}

export function createValue(partialValue: Partial<$.google.api.HttpRule>): $.google.api.HttpRule {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.google.api.HttpRule): unknown {
  const result: any = {};
  if (value.selector !== undefined) result.selector = tsValueToJsonValueFns.string(value.selector);
  if (value.body !== undefined) result.body = tsValueToJsonValueFns.string(value.body);
  result.additionalBindings = value.additionalBindings.map(value => encodeJson_1(value));
  if (value.responseBody !== undefined) result.responseBody = tsValueToJsonValueFns.string(value.responseBody);
  switch (value.pattern?.field) {
    case "get": {
      result.get = tsValueToJsonValueFns.string(value.pattern.value);
      break;
    }
    case "put": {
      result.put = tsValueToJsonValueFns.string(value.pattern.value);
      break;
    }
    case "post": {
      result.post = tsValueToJsonValueFns.string(value.pattern.value);
      break;
    }
    case "delete": {
      result.delete = tsValueToJsonValueFns.string(value.pattern.value);
      break;
    }
    case "patch": {
      result.patch = tsValueToJsonValueFns.string(value.pattern.value);
      break;
    }
    case "custom": {
      result.custom = encodeJson_2(value.pattern.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.google.api.HttpRule {
  const result = getDefaultValue();
  if (value.selector !== undefined) result.selector = jsonValueToTsValueFns.string(value.selector);
  if (value.body !== undefined) result.body = jsonValueToTsValueFns.string(value.body);
  result.additionalBindings = value.additionalBindings?.map((value: any) => decodeJson_1(value)) ?? [];
  if (value.responseBody !== undefined) result.responseBody = jsonValueToTsValueFns.string(value.responseBody);
  if (value.get !== undefined) result.pattern = {field: "get", value: jsonValueToTsValueFns.string(value.get)};
  if (value.put !== undefined) result.pattern = {field: "put", value: jsonValueToTsValueFns.string(value.put)};
  if (value.post !== undefined) result.pattern = {field: "post", value: jsonValueToTsValueFns.string(value.post)};
  if (value.delete !== undefined) result.pattern = {field: "delete", value: jsonValueToTsValueFns.string(value.delete)};
  if (value.patch !== undefined) result.pattern = {field: "patch", value: jsonValueToTsValueFns.string(value.patch)};
  if (value.custom !== undefined) result.pattern = {field: "custom", value: decodeJson_2(value.custom)};
  return result;
}

export function encodeBinary(value: $.google.api.HttpRule): Uint8Array {
  const result: WireMessage = [];
  if (value.selector !== undefined) {
    const tsValue = value.selector;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  if (value.body !== undefined) {
    const tsValue = value.body;
    result.push(
      [7, tsValueToWireValueFns.string(tsValue)],
    );
  }
  for (const tsValue of value.additionalBindings) {
    result.push(
      [11, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.responseBody !== undefined) {
    const tsValue = value.responseBody;
    result.push(
      [12, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.pattern?.field) {
    case "get": {
      const tsValue = value.pattern.value;
      result.push(
        [2, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "put": {
      const tsValue = value.pattern.value;
      result.push(
        [3, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "post": {
      const tsValue = value.pattern.value;
      result.push(
        [4, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "delete": {
      const tsValue = value.pattern.value;
      result.push(
        [5, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "patch": {
      const tsValue = value.pattern.value;
      result.push(
        [6, tsValueToWireValueFns.string(tsValue)],
      );
      break;
    }
    case "custom": {
      const tsValue = value.pattern.value;
      result.push(
        [8, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "selector"],
  [2, "get"],
  [3, "put"],
  [4, "post"],
  [5, "delete"],
  [6, "patch"],
  [7, "body"],
  [8, "custom"],
  [11, "additionalBindings"],
  [12, "responseBody"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  pattern: new Set([2, 3, 4, 5, 6, 8]),
};
const oneofFieldNamesMap = {
  pattern: new Map([
    [2, "get" as const],
    [3, "put" as const],
    [4, "post" as const],
    [5, "delete" as const],
    [6, "patch" as const],
    [8, "custom" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.google.api.HttpRule {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.selector = value;
  }
  field: {
    const wireValue = wireFields.get(7);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.body = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 11).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.additionalBindings = value as any;
  }
  field: {
    const wireValue = wireFields.get(12);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.responseBody = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.pattern;
    const oneofFieldNames = oneofFieldNamesMap.pattern;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [2](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [3](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [4](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [5](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [6](wireValue: Field) { return wireValueToTsValueFns.string(wireValue); },
      [8](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.pattern = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
