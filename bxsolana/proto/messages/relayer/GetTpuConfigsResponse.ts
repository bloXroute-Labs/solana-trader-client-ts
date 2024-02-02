import {
  Type as Socket,
  encodeJson as encodeJson_1,
  decodeJson as decodeJson_1,
  encodeBinary as encodeBinary_1,
  decodeBinary as decodeBinary_1,
} from "../shared/Socket";
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

export declare namespace $.relayer {
  export interface GetTpuConfigsResponse {
    tpu?: Socket;
    tpuForward?: Socket;
  }
}
export type Type = $.relayer.GetTpuConfigsResponse;

export function getDefaultValue(): $.relayer.GetTpuConfigsResponse {
  return {
    tpu: undefined,
    tpuForward: undefined,
  };
}

export function createValue(partialValue: Partial<$.relayer.GetTpuConfigsResponse>): $.relayer.GetTpuConfigsResponse {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.relayer.GetTpuConfigsResponse): unknown {
  const result: any = {};
  if (value.tpu !== undefined) result.tpu = encodeJson_1(value.tpu);
  if (value.tpuForward !== undefined) result.tpuForward = encodeJson_1(value.tpuForward);
  return result;
}

export function decodeJson(value: any): $.relayer.GetTpuConfigsResponse {
  const result = getDefaultValue();
  if (value.tpu !== undefined) result.tpu = decodeJson_1(value.tpu);
  if (value.tpuForward !== undefined) result.tpuForward = decodeJson_1(value.tpuForward);
  return result;
}

export function encodeBinary(value: $.relayer.GetTpuConfigsResponse): Uint8Array {
  const result: WireMessage = [];
  if (value.tpu !== undefined) {
    const tsValue = value.tpu;
    result.push(
      [1, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  if (value.tpuForward !== undefined) {
    const tsValue = value.tpuForward;
    result.push(
      [2, { type: WireType.LengthDelimited as const, value: encodeBinary_1(tsValue) }],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.relayer.GetTpuConfigsResponse {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.tpu = value;
  }
  field: {
    const wireValue = wireFields.get(2);
    if (wireValue === undefined) break field;
    const value = wireValue.type === WireType.LengthDelimited ? decodeBinary_1(wireValue.value) : undefined;
    if (value === undefined) break field;
    result.tpuForward = value;
  }
  return result;
}
