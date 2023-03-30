export declare namespace $.google.api {
  export type FieldBehavior =
    | "FIELD_BEHAVIOR_UNSPECIFIED"
    | "OPTIONAL"
    | "REQUIRED"
    | "OUTPUT_ONLY"
    | "INPUT_ONLY"
    | "IMMUTABLE"
    | "UNORDERED_LIST"
    | "NON_EMPTY_DEFAULT";
}
export type Type = $.google.api.FieldBehavior;

export const num2name = {
  0: "FIELD_BEHAVIOR_UNSPECIFIED",
  1: "OPTIONAL",
  2: "REQUIRED",
  3: "OUTPUT_ONLY",
  4: "INPUT_ONLY",
  5: "IMMUTABLE",
  6: "UNORDERED_LIST",
  7: "NON_EMPTY_DEFAULT",
} as const;

export const name2num = {
  FIELD_BEHAVIOR_UNSPECIFIED: 0,
  OPTIONAL: 1,
  REQUIRED: 2,
  OUTPUT_ONLY: 3,
  INPUT_ONLY: 4,
  IMMUTABLE: 5,
  UNORDERED_LIST: 6,
  NON_EMPTY_DEFAULT: 7,
} as const;
