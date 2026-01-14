import type { FC } from "react";
import { Card, CardHeader, CardTitle } from "../ui";

interface ContestInfosCardProps {}

export const ContestInfosCard: FC<ContestInfosCardProps> = () => {
  return (
    <Card className="bg-secondary w-4xl gap-12">
      <CardHeader>
        <CardTitle className="flex flex-col gap-2">
          <h3>✨ Contest card</h3>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
