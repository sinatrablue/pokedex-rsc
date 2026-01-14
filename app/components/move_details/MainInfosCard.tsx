import type { FC } from "react";
import { SeeOtherPokemonsModal } from "~/components";
import { DAMMAGE_CLASSES_ICONS } from "../../constants";
import { formatGeneration } from "../../lib/utils";
import type { MoveQuery, TypeLiteral } from "../../types";
import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
  Separator,
} from "../ui";

interface MainInfosCardProps {
  names: MoveQuery["names"];
  accuracy: MoveQuery["accuracy"];
  pp: MoveQuery["pp"];
  priority: MoveQuery["priority"];
  power: MoveQuery["power"];
  damage_class: MoveQuery["damage_class"];
  generation: MoveQuery["generation"];
  type: MoveQuery["type"];
  effect_chance: MoveQuery["effect_chance"];
  effect_entries: MoveQuery["effect_entries"];
  learned_by_pokemon: MoveQuery["learned_by_pokemon"];
}

export const MainInfosCard: FC<MainInfosCardProps> = ({
  accuracy,
  damage_class,
  generation,
  names,
  power,
  pp,
  priority,
  type,
  effect_chance,
  effect_entries,
  learned_by_pokemon,
}) => {
  const name = names.find((name) => name.language.name === "en")?.name;
  const DammageClassIcon =
    DAMMAGE_CLASSES_ICONS[
      damage_class.name as keyof typeof DAMMAGE_CLASSES_ICONS
    ];

  return (
    <Card className="w-4xl gap-12">
      <div className="flex flex-2 flex-col">
        <CardHeader className="gap-8">
          <CardTitle className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h1>{name}</h1>
              {learned_by_pokemon.length > 1 && (
                <SeeOtherPokemonsModal
                  triggerText={`${learned_by_pokemon.length - 1} other pokemons can learn it`}
                  description={`These pokemons can also learn ${name}`}
                  pokemons={learned_by_pokemon.map((pkm) => ({
                    is_hidden: false,
                    pokemon: pkm,
                    slot: 0,
                  }))}
                />
              )}
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant={type.name as TypeLiteral}
                className="rounded-2xl border-2 px-4 py-1 text-lg"
              >
                {type.name}
              </Badge>
              <Badge className="rounded-2xl border-2 px-4 py-1 text-lg">
                {<DammageClassIcon />} {damage_class.name}
              </Badge>
              <Badge
                variant="outline"
                className="rounded-2xl border-2 px-4 py-1 text-lg"
              >
                {formatGeneration(generation.name)}
              </Badge>
            </div>
          </CardTitle>
          <CardDescription className="flex flex-col gap-4">
            Power : {power}
            <Separator />
            Accuracy : {accuracy}
            <Separator />
            PP : {pp}
            <Separator />
            Priority : {priority}
            <Separator />
            Effect chance : {effect_chance}%
          </CardDescription>
        </CardHeader>
      </div>
      <CardPanel>
        {effect_entries.find((effect) => effect.language.name === "en")?.effect}
      </CardPanel>
    </Card>
  );
};
