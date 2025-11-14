import type { BasicProps } from "~/types/basic_props";

export type Language = BasicProps;

export type NamesLocalized = {
  name: string;
  language: Language;
}[];

export type FlavourTextsLocalized = {
  flavour_text: string;
  language: Language;
  /**
   * can be ignored
   */
  version_group: BasicProps;
};
