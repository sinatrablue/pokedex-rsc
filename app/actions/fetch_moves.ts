"use server";

import type { MoveQuery, Moves } from "~/types";

export const fetch_moves = async (moves: Moves): Promise<MoveQuery[]> => {
  return await Promise.all(
    moves.map(({ move }) => fetch(move.url).then((res) => res.json())),
  );
};
