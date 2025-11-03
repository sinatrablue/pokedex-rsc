"use client";
import type { FC } from "react";
import { AbilitiesAccordion } from "~/components/pokemon_details/AbilitiesAccordion";
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FramePanel,
  FrameTitle,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
} from "~/components/ui";
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
        <Frame>
          <FrameHeader>
            <FrameTitle>
              An Ability (Japanese: 特性 Ability) is a game mechanic introduced
              in Generation III that provides a passive effect in battle or in
              the overworld.
            </FrameTitle>
            <FrameDescription>
              Individual Pokémon may have only one Ability at a time. Prior to
              Generation VI, an Ability could not be changed after a Pokémon was
              obtained except by Evolution—where the new Ability is determined
              by the former Ability—and form change. Not every Ability is
              entirely beneficial; some of them are hindering.
            </FrameDescription>
          </FrameHeader>
          <FramePanel>
            <AbilitiesAccordion abilities={pokemon.abilities} />
          </FramePanel>
        </Frame>
      </TabsPanel>
      <TabsPanel value="moves">
        <Frame>
          <FrameHeader>
            <FrameTitle>
              Moves are the skills of Pokémon in battle. In battle, a Pokémon
              uses one move each turn.
            </FrameTitle>
            <FrameDescription>
              Some moves (including those learned by Hidden Machine) can be used
              outside of battle as well, usually for the purpose of removing
              obstacles or exploring new areas.
            </FrameDescription>
          </FrameHeader>
          <FramePanel>TODO moves table</FramePanel>
        </Frame>
      </TabsPanel>
    </Tabs>
  );
};
