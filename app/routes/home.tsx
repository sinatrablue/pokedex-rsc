import { HomeHero, PokedexPreview } from "~/components";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function ServerComponent() {
  return (
    <div className="flex flex-col gap-10 pt-24">
      <HomeHero />

      <div className="flex flex-col gap-6 px-12">
        Random preview within the whole Pokedex :
        <PokedexPreview />
      </div>
    </div>
  );
}
