export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  export type In =
    | "IN_INVALID"
    | "IN_QUERY"
    | "IN_HEADER";
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.In;

export const num2name = {
  0: "IN_INVALID",
  1: "IN_QUERY",
  2: "IN_HEADER",
} as const;

export const name2num = {
  IN_INVALID: 0,
  IN_QUERY: 1,
  IN_HEADER: 2,
} as const;
