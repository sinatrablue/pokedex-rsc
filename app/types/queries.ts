import type {
  Abilities,
  BasicProps,
  EffectEntries,
  EntityBase,
  FlavourTextsLocalized,
  Moves,
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
  moves: Moves;
};

type PokemonRelated = EntityBase & { pokemon: BasicProps };
export type PokemonsRelated = PokemonRelated[];

export type AbilityQuery = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: BasicProps;
  names: NamesLocalized;
  effect_entries: EffectEntries;
  pokemon: PokemonsRelated;
};

export type MoveQuery = {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  damage_class: BasicProps;
  effect_entries: EffectEntries;
  generation: BasicProps;
  names: NamesLocalized;
  type: BasicProps;
  learned_by_pokemon: BasicProps[];
  flavor_text_entries: FlavourTextsLocalized[];
};
