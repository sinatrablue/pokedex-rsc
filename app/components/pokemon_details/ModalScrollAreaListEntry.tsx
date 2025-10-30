import { type FC, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router";
import { fetchDetails } from "~/actions";
import { Badge, DialogClose } from "~/components/ui";
import { cn } from "~/lib/utils";
import type { PokemonQuery } from "~/types";

type ListEntryProps = { is_hidden: boolean; url: string };
export const ListEntry: FC<ListEntryProps> = ({ is_hidden, url }) => {
  const [pokemon, setPokemon] = useState<PokemonQuery>();
  useEffect(() => {
    (async () => setPokemon(await fetchDetails(url)))();
  }, []);

  return (
    <div
      className={cn(
        "flex items-center justify-between",
        is_hidden && "text-muted",
      )}
    >
      <div className="flex items-center gap-2">
        {pokemon ? (
          <img
            height={32}
            width={32}
            src={pokemon.sprites.front_default ?? undefined}
          />
        ) : (
          <Skeleton circle />
        )}
        <DialogClose>
          <Link
            to={`/pokemons/${pokemon?.id}`}
            className="hover:text-primary/80"
          >
            {pokemon?.name ?? <Skeleton />}
          </Link>
        </DialogClose>
      </div>

      {pokemon ? (
        is_hidden && <Badge variant="secondary">no longer concerned</Badge>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
