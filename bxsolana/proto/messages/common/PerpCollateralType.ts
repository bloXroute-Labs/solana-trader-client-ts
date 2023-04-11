export declare namespace $.common {
  export type PerpCollateralType =
    | "PCT_DEPOSIT"
    | "PCT_WITHDRAWAL"
    | "PCT_TRANSFER";
}
export type Type = $.common.PerpCollateralType;

export const num2name = {
  0: "PCT_DEPOSIT",
  1: "PCT_WITHDRAWAL",
  2: "PCT_TRANSFER",
} as const;

export const name2num = {
  PCT_DEPOSIT: 0,
  PCT_WITHDRAWAL: 1,
  PCT_TRANSFER: 2,
} as const;
