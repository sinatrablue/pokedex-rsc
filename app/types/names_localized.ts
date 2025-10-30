import type { BasicProps } from "~/types/basic_props";

export type Language = BasicProps;

export type NamesLocalized = {
  name: string;
  language: Language;
}[];
