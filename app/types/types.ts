import type { BasicProps } from "~/types/basic_props";
import type { EntityBase } from "~/types/entity_base";

export type Type = BasicProps;

export type Types = (EntityBase & {
  type: Type;
})[];
