export declare namespace $.api {
  export type Step =
    | "STEP0"
    | "STEP1"
    | "STEP2"
    | "STEP3";
}
export type Type = $.api.Step;

export const num2name = {
  0: "STEP0",
  1: "STEP1",
  2: "STEP2",
  3: "STEP3",
} as const;

export const name2num = {
  STEP0: 0,
  STEP1: 1,
  STEP2: 2,
  STEP3: 3,
} as const;
