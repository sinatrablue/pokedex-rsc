import type { Route } from ".react-router/types/app/routes/+types/pokemon_details";
import { Back } from "~/components";
import { DetailsTabs, MainInfosCard } from "~/components/pokemon_details";
import type { PokemonQuery } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Details - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function ServerComponent({ params }: Route.ComponentProps) {
  const pokemon: PokemonQuery = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`,
  ).then((res) => res.json());

  return (
    <>
      <Back />
      <div className="flex w-4xl flex-col gap-10 self-center">
        <MainInfosCard pokemon={pokemon} />
        <DetailsTabs pokemon={pokemon} />
      </div>
    </>
  );
}
