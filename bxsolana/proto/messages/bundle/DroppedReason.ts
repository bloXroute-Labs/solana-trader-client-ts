export declare namespace $.bundle {
  export type DroppedReason =
    | "BlockhashExpired"
    | "PartiallyProcessed"
    | "NotFinalized";
}
export type Type = $.bundle.DroppedReason;

export const num2name = {
  0: "BlockhashExpired",
  1: "PartiallyProcessed",
  2: "NotFinalized",
} as const;

export const name2num = {
  BlockhashExpired: 0,
  PartiallyProcessed: 1,
  NotFinalized: 2,
} as const;
