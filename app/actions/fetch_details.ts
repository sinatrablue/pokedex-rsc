"use server";

import type { PokemonQuery } from "~/types";

export const fetchDetails = async (url: string): Promise<PokemonQuery> =>
  await fetch(url).then((res) => res.json());
