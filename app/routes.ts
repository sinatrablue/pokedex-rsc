import { type RouteConfig } from "@react-router/dev/routes";

export default [
  {
    index: true,
    file: "routes/home.tsx",
  },
  {
    file: "layouts/pokemon_details.layout.tsx",
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
  {
    file: "layouts/move_details.layout.tsx",
    path: "/moves",
    children: [
      {
        path: "/moves/:moveId",
        file: "routes/move_details.tsx",
      },
    ],
  },
] satisfies RouteConfig;
