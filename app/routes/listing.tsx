import type { Route } from ".react-router/types/app/routes/+types/listing";
import type { LoaderFunctionArgs } from "react-router";
import { PaginationControls, PokemonsListing } from "~/components/Listing";
import { POKEMONS_PER_PAGE } from "~/constants";
import type { RootQuery } from "~/types";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const pageParam = url.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const offset = (page - 1) * POKEMONS_PER_PAGE;

  const { results: pokemons, count: totalCount }: RootQuery = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`,
  ).then((res) => res.json());

  return {
    pokemons,
    totalCount,
    page,
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listing - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function ServerComponent({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-col gap-10 px-24 py-12">
      <h1>Pokemons listing</h1>
      Filters
      <PokemonsListing pokemons={loaderData.pokemons} />
      <PaginationControls
        page={loaderData.page}
        totalCount={loaderData.totalCount}
      />
    </div>
  );
}
