import {
  Type as Heartbeat,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../shared/Heartbeat";
import {
  Type as PacketBatch,
  encodeJson as encodeJson_3,
  decodeJson as decodeJson_3,
  encodeBinary as encodeBinary_3,
  decodeBinary as decodeBinary_3,
} from "../packet/PacketBatch";
import {
  Type as Header,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Header";
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

export declare namespace $.relayer {
  export interface SubscribePacketsResponse {
    header?: Header;
    msg?: (
      | { field: "heartbeat", value: Heartbeat }
      | { field: "batch", value: PacketBatch }
  );
  }
}
export type Type = $.relayer.SubscribePacketsResponse;

export function getDefaultValue(): $.relayer.SubscribePacketsResponse {
  return {
    header: undefined,
    msg: undefined,
  };
}

export function createValue(partialValue: Partial<$.relayer.SubscribePacketsResponse>): $.relayer.SubscribePacketsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.relayer.SubscribePacketsResponse): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  switch (value.msg?.field) {
    case "heartbeat": {
      result.heartbeat = encodeJson_2(value.msg.value);
      break;
    }
    case "batch": {
      result.batch = encodeJson_3(value.msg.value);
      break;
    }
  }
  return result;
}

export function decodeJson(value: any): $.relayer.SubscribePacketsResponse {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  if (value.heartbeat !== undefined) result.msg = {field: "heartbeat", value: decodeJson_2(value.heartbeat)};
  if (value.batch !== undefined) result.msg = {field: "batch", value: decodeJson_3(value.batch)};
  return result;
}

export function encodeBinary(value: $.relayer.SubscribePacketsResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.header !== undefined) {
    const tsValue = value.header;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  switch (value.msg?.field) {
    case "heartbeat": {
      const tsValue = value.msg.value;
      result.push(
        [2, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
      );
      break;
    }
    case "batch": {
      const tsValue = value.msg.value;
      result.push(
        [3, { type: WireType.LengthDelimited as const, value: encodeBinary_3(tsValue) }],
      );
      break;
    }
  }
  return serialize(result);
}

const fieldNames: Map<number, string> = new Map([
  [1, "header"],
  [2, "heartbeat"],
  [3, "batch"],
]);
const oneofFieldNumbersMap: { [oneof: string]: Set<number> } = {
  msg: new Set([2, 3]),
};
const oneofFieldNamesMap = {
  msg: new Map([
    [2, "heartbeat" as const],
    [3, "batch" as const],
  ]),
};
export function decodeBinary(binary: Uint8Array): $.relayer.SubscribePacketsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  const wireFieldNumbers = Array.from(wireFields.keys()).reverse();
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.header = value;
  }
  oneof: {
    const oneofFieldNumbers = oneofFieldNumbersMap.msg;
    const oneofFieldNames = oneofFieldNamesMap.msg;
    const fieldNumber = wireFieldNumbers.find(v => oneofFieldNumbers.has(v));
    if (fieldNumber == null) break oneof;
    const wireValue = wireFields.get(fieldNumber);
    const wireValueToTsValueMap = {
      [2](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined; },
      [3](wireValue: Field) { return wireValue.type === WireType.LengthDelimited ? decodeBinary_3(wireValue.value) : undefined; },
    };
    const value = (wireValueToTsValueMap[fieldNumber as keyof typeof wireValueToTsValueMap] as any)?.(wireValue!);
    if (value === undefined) break oneof;
    result.msg = { field: oneofFieldNames.get(fieldNumber)!, value: value as any };
  }
  return result;
}
