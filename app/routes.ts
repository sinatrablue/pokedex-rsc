import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    index: true,
    file: "routes/home.tsx",
  },
  {
    file: "layouts/PageLayout.tsx",
    path: "/pokemons",
    children: [
      {
        index: true,
        file: "routes/pokemons.tsx",
      },
      {
        path: "/pokemons/:pokemonId",
        file: "routes/pokemon_details.tsx",
      },
    ],
  },
] satisfies RouteConfig;
