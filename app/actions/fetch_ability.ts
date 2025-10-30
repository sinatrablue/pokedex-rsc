"use server";

import type { AbilityQuery } from "~/types";

export const fetchAbility = async (url: string): Promise<AbilityQuery> =>
  await fetch(url).then((res) => res.json());
