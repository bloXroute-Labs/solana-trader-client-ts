import {
  Type as Accepted,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./Accepted";
import {
  Type as Rejected,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./Rejected";
import {
  Type as Finalized,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./Finalized";
import {
  Type as Processed,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./Processed";
import {
  Type as Dropped,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./Dropped";
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../../runtime/json/scalar";
import {
  WireMessage,
  WireType,
  Field,
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

export declare namespace $.bundle {
  export interface BundleResult {
    bundleId: string;
    result?: (
      | { field: "accepted", value: Accepted }
      | { field: "rejected", value: Rejected }
      | { field: "finalized", value: Finalized }
      | { field: "processed", value: Processed }
      | { field: "dropped", value: Dropped }
  );
  }
}
export type Type = $.bundle.BundleResult;

export function getDefaultValue(): $.bundle.BundleResult {
  return {
    bundleId: "",
    result: undefined,
  };
}

export function createValue(partialValue: Partial<$.bundle.BundleResult>): $.bundle.BundleResult {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.BundleResult): unknown {
  const result: any = {};
  if (value.bundleId !== undefined) result.bundleId = tsValueToJsonValueFns.string(value.bundleId);
  switch (value.result?.field) {
    case "accepted": {
      result.accepted = encodeJson_1(value.result.value);
      break;
    }
    case "rejected": {
      result.rejected = encodeJson_2(value.result.value);
      break;
    }
    case "finalized": {
      result.finalized = encodeJson_3(value.result.value);
      break;
    }
    case "processed": {
      result.processed = encodeJson_4(value.result.value);
      break;
    }
    case "dropped": {
      result.dropped = encodeJson_5(value.result.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.bundle.BundleResult {
  const result = getDefaultValue();
  if (value.bundleId !== undefined) result.bundleId = jsonValueToTsValueFns.string(value.bundleId);
  if (value.accepted !== undefined) result.result = {field: "accepted", value: decodeJson_1(value.accepted)};
  if (value.rejected !== undefined) result.result = {field: "rejected", value: decodeJson_2(value.rejected)};
  if (value.finalized !== undefined) result.result = {field: "finalized", value: decodeJson_3(value.finalized)};
  if (value.processed !== undefined) result.result = {field: "processed", value: decodeJson_4(value.processed)};
  if (value.dropped !== undefined) result.result = {field: "dropped", value: decodeJson_5(value.dropped)};
  return result;
}

export function encodeBinary(value: $.bundle.BundleResult): Uint8Array {
  const result: WireMessage = [];
  if (value.bundleId !== undefined) {
    const tsValue = value.bundleId;
    result.push(
      [1, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.result?.field) {
    case "accepted": {
      const tsValue = value.result.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "rejected": {
      const tsValue = value.result.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "finalized": {
      const tsValue = value.result.value;
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "processed": {
      const tsValue = value.result.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "dropped": {
      const tsValue = value.result.value;
      result.push(
        [6, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "bundleId"],
  [2, "accepted"],
  [3, "rejected"],
  [4, "finalized"],
  [5, "processed"],
  [6, "dropped"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  result: new Set([2, 3, 4, 5, 6]),
};
const oneofFieldNamesMap = {
  result: new Map([
    [2, "accepted" as const],
    [3, "rejected" as const],
    [4, "finalized" as const],
    [5, "processed" as const],
    [6, "dropped" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.bundle.BundleResult {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.string(wireValue);
    if (value === undefined) break field;
    result.bundleId = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.result;
    const oneofFieldNames = oneofFieldNamesMap.result;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [4](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [6](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.result = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
