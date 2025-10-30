import type { BasicProps, EntityBase } from "~/types";

type Ability = BasicProps;

export type Abilities = (EntityBase & {
  ability: Ability;
})[];
