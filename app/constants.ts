import { HandFist, LoaderPinwheel, Meh } from "lucide-react";

export const POKEMONS_PER_PAGE = 40;

export const DAMMAGE_CLASSES_ICONS = {
  physical: HandFist,
  status: Meh,
  special: LoaderPinwheel,
} as const;
