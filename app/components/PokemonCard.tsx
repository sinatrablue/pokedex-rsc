"use client";
import { useEffect, useState, type FC } from "react";
import Skeleton from "react-loading-skeleton";
import {
  Badge,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "~/components/ui";
import type { PokemonQuery } from "~/types";

interface PokemonCardProps {
  url: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({ url }) => {
  const [pokemon, setPokemon] = useState<PokemonQuery>();

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(url);
      setPokemon(await res.json());
    };
    fetchDetails();
  }, [url]);

  return (
    <Card className="flex flex-row justify-between">
      <div className="flex flex-2 flex-col">
        <CardHeader>
          <CardTitle>
            {pokemon?.name ?? (
              <Skeleton containerClassName="flex-1" width={128} />
            )}
          </CardTitle>
          <CardDescription>
            {pokemon ? (
              `Pokedex #${pokemon.order}`
            ) : (
              <Skeleton containerClassName="flex-1" width={96} />
            )}
          </CardDescription>
        </CardHeader>
        <CardPanel className="space-x-2">
          {pokemon ? (
            pokemon.types.map(({ type }) => <Badge>{type.name}</Badge>)
          ) : (
            <Skeleton
              count={2}
              inline
              containerClassName="flex-1 space-x-2"
              width={48}
            />
          )}
        </CardPanel>
      </div>
      <CardFooter>
        {pokemon ? (
          <img width={56} src={pokemon.sprites.front_default ?? undefined} />
        ) : (
          <Skeleton circle width={56} height={56} />
        )}
      </CardFooter>
    </Card>
  );
};
