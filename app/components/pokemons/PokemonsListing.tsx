import { type FC } from "react";
import { PokemonCard } from "~/components";
import type { RootQueryResult } from "~/types";

type PokemonsListingProps = {
  pokemons: RootQueryResult[];
};

export const PokemonsListing: FC<PokemonsListingProps> = ({ pokemons }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pkm) => (
        <PokemonCard key={pkm.name} url={pkm.url} />
      ))}
    </div>
  );
};
