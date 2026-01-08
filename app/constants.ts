import { HandFist, LoaderPinwheel, Meh } from "lucide-react";

export const POKEMONS_PER_PAGE = 40;

export const DAMMAGE_CLASSES_ICONS = {
  physical: HandFist,
  status: Meh,
  special: LoaderPinwheel,
} as const;

export const TYPES = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
] as const;
