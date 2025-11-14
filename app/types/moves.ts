import type { BasicProps } from "~/types/basic_props";

type Move = BasicProps;

export type Moves = {
  move: Move;
  version_group_details: unknown[]; // TODO: enrich later on
}[];
