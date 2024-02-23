import {
  Type as StateAuctionBidRejected,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./StateAuctionBidRejected";
import {
  Type as WinningBatchBidRejected,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "./WinningBatchBidRejected";
import {
  Type as SimulationFailure,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "./SimulationFailure";
import {
  Type as InternalError,
  encodeJson as encodeJson_4,
  decodeJson as decodeJson_4,
  encodeBinary as encodeBinary_4,
  decodeBinary as decodeBinary_4,
} from "./InternalError";
import {
  Type as DroppedBundle,
  encodeJson as encodeJson_5,
  decodeJson as decodeJson_5,
  encodeBinary as encodeBinary_5,
  decodeBinary as decodeBinary_5,
} from "./DroppedBundle";
import {
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
  default as deserialize,
} from "../../runtime/wire/deserialize";

export declare namespace $.bundle {
  export interface Rejected {
    reason?: (
      | { field: "stateAuctionBidRejected", value: StateAuctionBidRejected }
      | { field: "winningBatchBidRejected", value: WinningBatchBidRejected }
      | { field: "simulationFailure", value: SimulationFailure }
      | { field: "internalError", value: InternalError }
      | { field: "droppedBundle", value: DroppedBundle }
  );
  }
}
export type Type = $.bundle.Rejected;

export function getDefaultValue(): $.bundle.Rejected {
  return {
    reason: undefined,
  };
}

export function createValue(partialValue: Partial<$.bundle.Rejected>): $.bundle.Rejected {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Rejected): unknown {
  const result: any = {};
  switch (value.reason?.field) {
    case "stateAuctionBidRejected": {
      result.stateAuctionBidRejected = encodeJson_1(value.reason.value);
      break;
    }
    case "winningBatchBidRejected": {
      result.winningBatchBidRejected = encodeJson_2(value.reason.value);
      break;
    }
    case "simulationFailure": {
      result.simulationFailure = encodeJson_3(value.reason.value);
      break;
    }
    case "internalError": {
      result.internalError = encodeJson_4(value.reason.value);
      break;
    }
    case "droppedBundle": {
      result.droppedBundle = encodeJson_5(value.reason.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.bundle.Rejected {
  const result = getDefaultValue();
  if (value.stateAuctionBidRejected !== undefined) result.reason = {field: "stateAuctionBidRejected", value: decodeJson_1(value.stateAuctionBidRejected)};
  if (value.winningBatchBidRejected !== undefined) result.reason = {field: "winningBatchBidRejected", value: decodeJson_2(value.winningBatchBidRejected)};
  if (value.simulationFailure !== undefined) result.reason = {field: "simulationFailure", value: decodeJson_3(value.simulationFailure)};
  if (value.internalError !== undefined) result.reason = {field: "internalError", value: decodeJson_4(value.internalError)};
  if (value.droppedBundle !== undefined) result.reason = {field: "droppedBundle", value: decodeJson_5(value.droppedBundle)};
  return result;
}

export function encodeBinary(value: $.bundle.Rejected): Uint8Array {
  const result: WireMessage = [];
  switch (value.reason?.field) {
    case "stateAuctionBidRejected": {
      const tsValue = value.reason.value;
      result.push(
        [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
      );
      break;
    }
    case "winningBatchBidRejected": {
      const tsValue = value.reason.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "simulationFailure": {
      const tsValue = value.reason.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
    case "internalError": {
      const tsValue = value.reason.value;
      result.push(
        [4, { type: WireType.LengthDelimited as const, value: encodeBinary_4(tsValue) }],
      );
      break;
    }
    case "droppedBundle": {
      const tsValue = value.reason.value;
      result.push(
        [5, { type: WireType.LengthDelimited as const, value: encodeBinary_5(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "stateAuctionBidRejected"],
  [2, "winningBatchBidRejected"],
  [3, "simulationFailure"],
  [4, "internalError"],
  [5, "droppedBundle"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  reason: new Set([1, 2, 3, 4, 5]),
};
const oneofFieldNamesMap = {
  reason: new Map([
    [1, "stateAuctionBidRejected" as const],
    [2, "winningBatchBidRejected" as const],
    [3, "simulationFailure" as const],
    [4, "internalError" as const],
    [5, "droppedBundle" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.bundle.Rejected {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.reason;
    const oneofFieldNames = oneofFieldNamesMap.reason;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [1](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined; },
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
      [4](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_4(wireValue.value) : undefined; },
      [5](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_5(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.reason = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
