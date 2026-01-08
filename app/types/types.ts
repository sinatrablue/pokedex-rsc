import type { BasicProps } from "~/types/basic_props";
import type { EntityBase } from "~/types/entity_base";
import type { TYPES } from "../constants";

export type Type = BasicProps;

export type Types = (EntityBase & {
  type: Type;
})[];

export type TypeLiteral = (typeof TYPES)[number];
