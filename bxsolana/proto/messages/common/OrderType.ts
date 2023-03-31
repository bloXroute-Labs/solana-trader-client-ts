export declare namespace $.common {
  export type OrderType =
    | "OT_MARKET"
    | "OT_LIMIT"
    | "OT_IOC"
    | "OT_POST";
}
export type Type = $.common.OrderType;

export const num2name = {
  0: "OT_MARKET",
  1: "OT_LIMIT",
  2: "OT_IOC",
  3: "OT_POST",
} as const;

export const name2num = {
  OT_MARKET: 0,
  OT_LIMIT: 1,
  OT_IOC: 2,
  OT_POST: 3,
} as const;
