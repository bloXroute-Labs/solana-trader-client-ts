export declare namespace $.grpc.gateway.protoc_gen_openapiv2.options {
  export type Scheme =
    | "UNKNOWN"
    | "HTTP"
    | "HTTPS"
    | "WS"
    | "WSS";
}
export type Type = $.grpc.gateway.protoc_gen_openapiv2.options.Scheme;

export const num2name = {
  0: "UNKNOWN",
  1: "HTTP",
  2: "HTTPS",
  3: "WS",
  4: "WSS",
} as const;

export const name2num = {
  UNKNOWN: 0,
  HTTP: 1,
  HTTPS: 2,
  WS: 3,
  WSS: 4,
} as const;
