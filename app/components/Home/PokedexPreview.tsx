import { PokemonCard } from "~/components/PokemonCard";
import { randomIntFromInterval } from "~/lib/utils";
import type { RootQuery } from "~/types";

export const PokedexPreview = async () => {
  const randomOffset = randomIntFromInterval(1, 1300);

  const { results: pokemons }: RootQuery = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=6&offset=${randomOffset}`,
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-3 gap-6">
      {pokemons.map((pkm) => (
        <PokemonCard key={pkm.name} url={pkm.url} />
      ))}
    </div>
  );
};
