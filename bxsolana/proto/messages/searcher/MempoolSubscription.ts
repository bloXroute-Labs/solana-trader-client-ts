import {
  Type as ProgramSubscriptionV0,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ProgramSubscriptionV0";
import {
  Type as WriteLockedAccountSubscriptionV0,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./WriteLockedAccountSubscriptionV0";
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

export declare namespace $.searcher {
  export interface MempoolSubscription {
    regions: string[];
    msg?: (
      | { field: "programV0Sub", value: ProgramSubscriptionV0 }
      | { field: "wlaV0Sub", value: WriteLockedAccountSubscriptionV0 }
  );
  }
}
export type Type = $.searcher.MempoolSubscription;

export function getDefaultValue(): $.searcher.MempoolSubscription {
  return {
    regions: [],
    msg: undefined,
  };
}

export function createValue(partialValue: Partial<$.searcher.MempoolSubscription>): $.searcher.MempoolSubscription {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.searcher.MempoolSubscription): unknown {
  const result: any = {};
  result.regions = value.regions.map(value => tsValueToJsonValueFns.string(value));
  switch (value.msg?.field) {
    case "programV0Sub": {
      result.programV0Sub = encodeJson_1(value.msg.value);
      break;
    }
    case "wlaV0Sub": {
      result.wlaV0Sub = encodeJson_2(value.msg.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.searcher.MempoolSubscription {
  const result = getDefaultValue();
  result.regions = value.regions?.map((value: any) => jsonValueToTsValueFns.string(value)) ?? [];
  if (value.programV0Sub !== undefined) result.msg = {field: "programV0Sub", value: decodeJson_1(value.programV0Sub)};
  if (value.wlaV0Sub !== undefined) result.msg = {field: "wlaV0Sub", value: decodeJson_2(value.wlaV0Sub)};
  return result;
}

export function encodeBinary(value: $.searcher.MempoolSubscription): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.regions) {
    result.push(
      [10, tsValueToWireValueFns.string(tsValue)],
    );
  }
  switch (value.msg?.field) {
    case "programV0Sub": {
      const tsValue = value.msg.value;
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "wlaV0Sub": {
      const tsValue = value.msg.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "programV0Sub"],
  [2, "wlaV0Sub"],
  [10, "regions"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  msg: new Set([1, 2]),
};
const oneofFieldNamesMap = {
  msg: new Map([
    [1, "programV0Sub" as const],
    [2, "wlaV0Sub" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.searcher.MempoolSubscription {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 10).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValueToTsValueFns.string(wireValue)).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.regions = value as any;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.msg;
    const oneofFieldNames = oneofFieldNamesMap.msg;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.msg = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
