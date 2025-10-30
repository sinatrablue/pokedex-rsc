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
  abilityName: string;
  pokemons: PokemonsRelated;
}

export const SeeOtherPokemonsModal: React.FC<SeeOtherPokemonsModalProps> = ({
  abilityName,
  pokemons,
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary" className="w-fit">
          See other pokemons learning it
          <LucideSquareArrowOutUpRight />
        </Button>
      </DialogTrigger>

      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Other pokemons</DialogTitle>
          <DialogDescription>
            Those pokemons can also have {abilityName} as their ability
          </DialogDescription>
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
