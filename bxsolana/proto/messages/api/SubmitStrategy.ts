export declare namespace $.api {
  export type SubmitStrategy =
    | "P_UKNOWN"
    | "P_SUBMIT_ALL"
    | "P_ABORT_ON_FIRST_ERROR"
    | "P_WAIT_FOR_CONFIRMATION";
}
export type Type = $.api.SubmitStrategy;

export const num2name = {
  0: "P_UKNOWN",
  1: "P_SUBMIT_ALL",
  2: "P_ABORT_ON_FIRST_ERROR",
  3: "P_WAIT_FOR_CONFIRMATION",
} as const;

export const name2num = {
  P_UKNOWN: 0,
  P_SUBMIT_ALL: 1,
  P_ABORT_ON_FIRST_ERROR: 2,
  P_WAIT_FOR_CONFIRMATION: 3,
} as const;
