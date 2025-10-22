import { PokemonsListing } from "~/components/Listing";
import { POKEMONS_PER_PAGE } from "~/constants";
import type { RootQuery } from "~/types";
import type { Route } from "./+types/listing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listing - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function ServerComponent() {
  const page = 1;
  const { results: pokemons }: RootQuery = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${page * POKEMONS_PER_PAGE}`,
  ).then((res) => res.json());

  return (
    <div className="flex flex-col gap-10 px-24 py-12">
      <h1>Pokemons listing</h1>
      Filters
      <PokemonsListing pokemons={pokemons} />
      Pagination
    </div>
  );
}
