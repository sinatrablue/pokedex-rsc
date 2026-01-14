"use client";
import { Tv } from "lucide-react";
import { useEffect, useState, type FC } from "react";
import { fetchAbility } from "~/actions";
import { SeeOtherPokemonsModal } from "~/components";
import { Badge } from "~/components/ui";
import { formatGeneration } from "~/lib/utils";
import type { AbilityQuery } from "~/types";

interface AbilityDetailsProps {
  url: string;
}

export const AbilityDetails: FC<AbilityDetailsProps> = ({ url }) => {
  const [ability, setAbility] = useState<AbilityQuery>();
  useEffect(() => {
    (async () => setAbility(await fetchAbility(url)))();
  }, []);

  const effectInEnglish = ability?.effect_entries.find(
    (entry) => entry.language.name === "en",
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-6">
          <h3 className="capitalize">{ability?.name}</h3>
        </div>
        {ability && ability.pokemon.length > 0 && (
          <SeeOtherPokemonsModal
            description={`Those pokemons can also have ${ability.name} as their ability`}
            triggerText="See other pokemons learning it"
            pokemons={ability.pokemon}
          />
        )}
      </div>

      <div className="flex gap-2">
        <Badge size="lg" variant="outline">
          {formatGeneration(ability?.generation.name)}
        </Badge>
        {ability?.is_main_series && (
          <Badge
            size="lg"
            variant="warning"
            className="flex items-center gap-2"
          >
            <Tv />
            From the series !
          </Badge>
        )}
      </div>

      {effectInEnglish && (
        <div className="flex flex-col gap-1">
          <span>{effectInEnglish.short_effect}</span>
          <span className="text-accent text-sm">{effectInEnglish.effect}</span>
        </div>
      )}
    </div>
  );
};
