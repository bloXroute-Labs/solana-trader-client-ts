export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  export type Flow =
    | "FLOW_INVALID"
    | "FLOW_IMPLICIT"
    | "FLOW_PASSWORD"
    | "FLOW_APPLICATION"
    | "FLOW_ACCESS_CODE";
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Flow;

export const num2name = {
  0: "FLOW_INVALID",
  1: "FLOW_IMPLICIT",
  2: "FLOW_PASSWORD",
  3: "FLOW_APPLICATION",
  4: "FLOW_ACCESS_CODE",
} as const;

export const name2num = {
  FLOW_INVALID: 0,
  FLOW_IMPLICIT: 1,
  FLOW_PASSWORD: 2,
  FLOW_APPLICATION: 3,
  FLOW_ACCESS_CODE: 4,
} as const;
