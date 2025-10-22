import { Link } from "react-router";
import { HomeHero, PokedexPreview } from "~/components/Home";
import { Button } from "~/components/ui";
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

      <div className="flex flex-col gap-10 px-12">
        Random preview within the whole Pokedex :
        <PokedexPreview />
        <Link className="self-center" to="/listing">
          <Button size="xl">View the whole listing</Button>
        </Link>
      </div>
    </div>
  );
}
