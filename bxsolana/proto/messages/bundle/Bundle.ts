import {
  Type as Header,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Header";
import {
  Type as Packet,
  encodeJson as encodeJson_2,
  decodeJson as decodeJson_2,
  encodeBinary as encodeBinary_2,
  decodeBinary as decodeBinary_2,
} from "../packet/Packet";
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

export declare namespace $.bundle {
  export interface Bundle {
    header?: Header;
    packets: Packet[];
  }
}
export type Type = $.bundle.Bundle;

export function getDefaultValue(): $.bundle.Bundle {
  return {
    header: undefined,
    packets: [],
  };
}

export function createValue(partialValue: Partial<$.bundle.Bundle>): $.bundle.Bundle {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.bundle.Bundle): unknown {
  const result: any = {};
  if (value.header !== undefined) result.header = encodeJson_1(value.header);
  result.packets = value.packets.map(value => encodeJson_2(value));
  return result;
}

export function decodeJson(value: any): $.bundle.Bundle {
  const result = getDefaultValue();
  if (value.header !== undefined) result.header = decodeJson_1(value.header);
  result.packets = value.packets?.map((value: any) => decodeJson_2(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.bundle.Bundle): Uint8Array {
  const result: WireMessage = [];
  if (value.header !== undefined) {
    const tsValue = value.header;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  for (const tsValue of value.packets) {
    result.push(
      [3, { type: WireType.LengthDelimited as const, value: encodeBinary_2(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.bundle.Bundle {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.header = value;
  }
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 3).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_2(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.packets = value as any;
  }
  return result;
}
