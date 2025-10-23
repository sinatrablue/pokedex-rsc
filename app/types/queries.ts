import type { Sprites, Types } from "~/types";

export type RootQuery = {
  count: number;
  results: RootQueryResult[];
};

export type RootQueryResult = {
  name: string;
  url: string;
};

export type PokemonQuery = {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  types: Types;
};
