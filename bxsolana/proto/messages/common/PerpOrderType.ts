export declare namespace $.common {
  export type PerpOrderType =
    | "POT_UNKNOWN"
    | "POT_MARKET"
    | "POT_LIMIT"
    | "POT_TRIGGER_MARKET"
    | "POT_TRIGGER_LIMIT";
}
export type Type = $.common.PerpOrderType;

export const num2name = {
  0: "POT_UNKNOWN",
  1: "POT_MARKET",
  2: "POT_LIMIT",
  3: "POT_TRIGGER_MARKET",
  4: "POT_TRIGGER_LIMIT",
} as const;

export const name2num = {
  POT_UNKNOWN: 0,
  POT_MARKET: 1,
  POT_LIMIT: 2,
  POT_TRIGGER_MARKET: 3,
  POT_TRIGGER_LIMIT: 4,
} as const;
