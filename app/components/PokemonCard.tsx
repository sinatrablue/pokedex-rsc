import type { FC } from "react";
import { Card, CardHeader, CardTitle } from "~/components/ui";

interface PokemonCardProps {
  name: string;
  url: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({ name, url }) => {
  return (
    <Card key={name}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
    </Card>
  );
};
