export declare namespace $.common {
  export type PostOnlyParams =
    | "PO_NONE"
    | "PO_MUST_POST_ONLY"
    | "PO_TRY_POST_ONLY";
}
export type Type = $.common.PostOnlyParams;

export const num2name = {
  0: "PO_NONE",
  1: "PO_MUST_POST_ONLY",
  2: "PO_TRY_POST_ONLY",
} as const;

export const name2num = {
  PO_NONE: 0,
  PO_MUST_POST_ONLY: 1,
  PO_TRY_POST_ONLY: 2,
} as const;
