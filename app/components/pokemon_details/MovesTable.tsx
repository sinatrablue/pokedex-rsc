import { useEffect, useMemo, useState, useTransition, type FC } from "react";
import { Link } from "react-router";
import { fetch_moves } from "~/actions";
import {
  Badge,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui";
import { Spinner } from "~/components/ui/spinner";
import { DAMMAGE_CLASSES_ICONS } from "~/constants";
import { cn, formatGeneration } from "~/lib/utils";
import type { MoveQuery, Moves } from "~/types";

interface MovesTableProps {
  moves: Moves;
}

export const MovesTable: FC<MovesTableProps> = ({ moves: _moves }) => {
  const [moves, setMoves] = useState<MoveQuery[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      startTransition(async () => {
        const moves = await fetch_moves(_moves);
        setMoves(moves);
      });
    })();
  }, []);

  const headers = useMemo(
    () => [
      "Name",
      "Accuracy",
      "PP",
      "Priority",
      "Power",
      "Damage class",
      "Effects",
      "Generation",
      "Type",
      "",
    ],
    [],
  );

  const rows = useMemo(
    () =>
      moves.map((move) => {
        const effectInEnglish = move.effect_entries.find(
          (entry) => entry.language.name === "en",
        );
        const flavourTextInEnglish = move.flavor_text_entries.find(
          (entry) => entry.language.name === "en",
        );
        const dammageClass = move.damage_class.name as
          | "physical"
          | "status"
          | "special";
        const DammageClassIcon = DAMMAGE_CLASSES_ICONS[dammageClass];
        return [
          <Link to={`/moves/${move.id}`} className="hover:underline">
            {move.name}
          </Link>,
          move.accuracy,
          move.pp,
          move.priority,
          move.power,
          <Badge>
            {<DammageClassIcon />} {dammageClass}
          </Badge>,
          effectInEnglish?.effect,
          <Badge variant="outline">
            {formatGeneration(move.generation.name)}
          </Badge>,
          <Badge variant="secondary">{move.type.name}</Badge>,
          flavourTextInEnglish?.flavour_text,
        ];
      }),
    [moves],
  );

  return (
    <Table>
      <TableCaption>
        {isPending ? (
          <>
            <Spinner />
            Fetching moves...
          </>
        ) : (
          "You can click on each move to see the details"
        )}
      </TableCaption>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={`${row[0]}-${row[1]}-${row[2]}`}>
            {row.map((cell, cellIndex) => (
              <TableCell
                key={`${rowIndex}-${cell}-${cellIndex}`}
                className={cn(
                  "max-w-xs overflow-hidden text-ellipsis whitespace-nowrap",
                  cellIndex === 6 ? "row-span-3" : "row-span-1",
                )}
              >
                {cell}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
