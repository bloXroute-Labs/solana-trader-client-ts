export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme {
  export type Type =
    | "TYPE_INVALID"
    | "TYPE_BASIC"
    | "TYPE_API_KEY"
    | "TYPE_OAUTH2";
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme.Type;

export const num2name = {
  0: "TYPE_INVALID",
  1: "TYPE_BASIC",
  2: "TYPE_API_KEY",
  3: "TYPE_OAUTH2",
} as const;

export const name2num = {
  TYPE_INVALID: 0,
  TYPE_BASIC: 1,
  TYPE_API_KEY: 2,
  TYPE_OAUTH2: 3,
} as const;
