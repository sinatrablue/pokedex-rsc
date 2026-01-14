"use client";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { ListEntry } from "~/components/pokemon_details";
import {
  Button,
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
} from "~/components/ui";
import type { PokemonsRelated } from "~/types";

interface SeeOtherPokemonsModalProps {
  triggerText: string;
  description: string;
  pokemons: PokemonsRelated;
}

export const SeeOtherPokemonsModal: React.FC<SeeOtherPokemonsModalProps> = ({
  triggerText,
  description,
  pokemons,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary" className="w-fit">
          {triggerText}
          <LucideSquareArrowOutUpRight />
        </Button>
      </DialogTrigger>

      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Other pokemons</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex max-h-80 flex-col gap-3 p-2">
          {pokemons.map((pkm) => (
            <ListEntry is_hidden={pkm.is_hidden} url={pkm.pokemon.url} />
          ))}
        </ScrollArea>

        <DialogFooter>
          <DialogClose>Close</DialogClose>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
