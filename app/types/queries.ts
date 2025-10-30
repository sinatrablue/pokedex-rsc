import type {
  Abilities,
  BasicProps,
  EffectEntries,
  EntityBase,
  NamesLocalized,
  Sprites,
  Types,
} from "~/types";

export type RootQuery = {
  count: number;
  results: RootQueryResult[];
};

export type RootQueryResult = BasicProps;

export type PokemonQuery = {
  id: number;
  name: string;
  order: number;
  sprites: Sprites;
  types: Types;
  abilities: Abilities;
};

type PokemonRelated = EntityBase & BasicProps;
type PokemonsRelated = PokemonRelated[];

export type AbilityQuery = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: BasicProps;
  names: NamesLocalized;
  effect_entries: EffectEntries;
  pokemon: PokemonsRelated;
};
