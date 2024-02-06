export declare namespace $.auth {
  export type Role =
    | "RELAYER"
    | "SEARCHER"
    | "VALIDATOR"
    | "SHREDSTREAM_SUBSCRIBER";
}
export type Type = $.auth.Role;

export const num2name = {
  0: "RELAYER",
  1: "SEARCHER",
  2: "VALIDATOR",
  3: "SHREDSTREAM_SUBSCRIBER",
} as const;

export const name2num = {
  RELAYER: 0,
  SEARCHER: 1,
  VALIDATOR: 2,
  SHREDSTREAM_SUBSCRIBER: 3,
} as const;
