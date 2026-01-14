import { Back } from "~/components";
import type { MoveQuery } from "~/types";
import { ContestInfosCard, MainInfosCard } from "../components/move_details";
import type { Route } from "./+types/move_details";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Move details - Pokédex-RSC" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function ServerComponent({ params }: Route.ComponentProps) {
  const move: MoveQuery = await fetch(
    `https://pokeapi.co/api/v2/move/${params.moveId}`,
  ).then((res) => res.json());

  return (
    <>
      <Back />
      <div className="flex flex-col items-center gap-10 self-center">
        <MainInfosCard {...move} />
        <ContestInfosCard />
      </div>
    </>
  );
}
