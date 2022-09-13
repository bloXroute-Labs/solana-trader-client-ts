export declare namespace $.api {
  export type MarketStatus =
    | "MS_UNKNOWN"
    | "MS_ONLINE";
}
export type Type = $.api.MarketStatus;

export const num2name = {
  0: "MS_UNKNOWN",
  1: "MS_ONLINE",
} as const;

export const name2num = {
  MS_UNKNOWN: 0,
  MS_ONLINE: 1,
} as const;
