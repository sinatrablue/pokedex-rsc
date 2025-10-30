import type { Language } from "~/types";

type Effect = {
  effect: string;
  short_effect: string;
  language: Language;
};

export type EffectEntries = Effect[];
