import type { Route } from ".react-router/types/app/routes/+types/pokemon_details";
import { Back } from "~/components";
import { AbilitiesAccordion } from "~/components/pokemon_details";
import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "~/components/ui";
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

  const MainInfosCard = () => {
    return (
      <Card className="flex flex-row-reverse justify-between p-24">
        <div className="flex flex-2 flex-col">
          <CardHeader className="gap-8">
            <CardTitle className="flex flex-col">
              <h1 className="text-gray-100/70">#{pokemon.order}</h1>
              <h1 className="!tracking-normal">{pokemon.name}</h1>
            </CardTitle>
            <CardDescription className="flex gap-4">
              {pokemon.types.map((type) => (
                <Badge
                  key={type.slot}
                  className="rounded-2xl px-6 py-2 text-3xl"
                >
                  {type.type.name}
                </Badge>
              ))}
            </CardDescription>
          </CardHeader>
        </div>
        <CardPanel className="grid grid-cols-2 gap-3">
          <img src={pokemon.sprites.front_default ?? undefined} />
          <img src={pokemon.sprites.back_default ?? undefined} />
          <img src={pokemon.sprites.front_shiny ?? undefined} />
          <img src={pokemon.sprites.back_shiny ?? undefined} />
        </CardPanel>
      </Card>
    );
  };

  return (
    <>
      <Back />
      <div className="flex w-4xl flex-col gap-10 self-center">
        <MainInfosCard />
        <h2>Abilities</h2>
        <AbilitiesAccordion abilities={pokemon.abilities} />
      </div>
    </>
  );
}
