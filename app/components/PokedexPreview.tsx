import type { RootQuery } from "~/types";

export const PokedexPreview = async () => {
  const { results: pokemons }: RootQuery = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=8&offset=0`,
  ).then((res) => res.json());

  return (
    <div className="grid grid-cols-4 gap-6">
      {pokemons.map((pkm) => (
        <div key={pkm.name}>{pkm.name}</div>
      ))}
    </div>
  );
};
