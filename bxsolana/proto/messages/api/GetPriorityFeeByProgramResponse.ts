import {
  Type as ProgramPriorityFee,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "./ProgramPriorityFee";
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

export declare namespace $.api {
  export interface GetPriorityFeeByProgramResponse {
    data: ProgramPriorityFee[];
  }
}
export type Type = $.api.GetPriorityFeeByProgramResponse;

export function getDefaultValue(): $.api.GetPriorityFeeByProgramResponse {
  return {
    data: [],
  };
}

export function createValue(partialValue: Partial<$.api.GetPriorityFeeByProgramResponse>): $.api.GetPriorityFeeByProgramResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.api.GetPriorityFeeByProgramResponse): unknown {
  const result: any = {};
  result.data = value.data.map(value => encodeJson_1(value));
  return result;
}

export function decodeJson(value: any): $.api.GetPriorityFeeByProgramResponse {
  const result = getDefaultValue();
  result.data = value.data?.map((value: any) => decodeJson_1(value)) ?? [];
  return result;
}

export function encodeBinary(value: $.api.GetPriorityFeeByProgramResponse): Uint8Array {
  const result: WireMessage = [];
  for (const tsValue of value.data) {
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.api.GetPriorityFeeByProgramResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  collection: {
    const wireValues = wireMessage.filter(([fieldNumber]) => fieldNumber === 1).map(([, wireValue]) => wireValue);
    const value = wireValues.map((wireValue) => wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined).filter(x => x !== undefined);
    if (!value.length) break collection;
    result.data = value as any;
  }
  return result;
}
