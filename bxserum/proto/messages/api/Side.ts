export declare namespace $.api {
  export type Side =
    | "S_UNKNOWN"
    | "S_BID"
    | "S_ASK";
}
export type Type = $.api.Side;

export const num2name = {
  0: "S_UNKNOWN",
  1: "S_BID",
  2: "S_ASK",
} as const;

export const name2num = {
  S_UNKNOWN: 0,
  S_BID: 1,
  S_ASK: 2,
} as const;
