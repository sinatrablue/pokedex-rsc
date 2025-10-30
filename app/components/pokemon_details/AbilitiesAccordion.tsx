"use client";
import type { FC } from "react";
import { AbilityDetails } from "~/components/pokemon_details";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  Badge,
} from "~/components/ui";
import type { Abilities } from "~/types";

interface AbilitiesAccordionProps {
  abilities: Abilities;
}

export const AbilitiesAccordion: FC<AbilitiesAccordionProps> = ({
  abilities,
}) => {
  return (
    <Accordion className="w-3xl self-center">
      {abilities.map((ability) => (
        <AccordionItem value={ability.ability.url} key={ability.ability.url}>
          <AccordionTrigger disabled={ability.is_hidden}>
            <div className="flex gap-3">
              {ability.ability.name}
              {ability.is_hidden && <Badge>no longer available</Badge>}
            </div>
          </AccordionTrigger>
          <AccordionPanel>
            <AbilityDetails url={ability.ability.url} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
