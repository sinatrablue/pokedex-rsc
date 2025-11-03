"use client";
import type { FC } from "react";
import { AbilitiesAccordion } from "~/components/pokemon_details";
import { Tabs, TabsList, TabsPanel, TabsTab } from "~/components/ui";
import type { PokemonQuery } from "~/types";

interface DetailsTabsProps {
  pokemon: PokemonQuery;
}

export const DetailsTabs: FC<DetailsTabsProps> = ({ pokemon }) => {
  return (
    <Tabs defaultValue="abilities">
      <TabsList className="w-1/3 self-center">
        <TabsTab value="abilities">Abilities</TabsTab>
        <TabsTab value="moves">Moves</TabsTab>
      </TabsList>

      <TabsPanel value="abilities">
        <AbilitiesAccordion abilities={pokemon.abilities} />
      </TabsPanel>
      <TabsPanel value="moves">TODO moves</TabsPanel>
    </Tabs>
  );
};
