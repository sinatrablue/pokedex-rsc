"use client";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/ui";
import { POKEMONS_PER_PAGE } from "~/constants";

type PaginationControlsProps = { page: number; totalCount: number };

export const PaginationControls: FC<PaginationControlsProps> = ({
  page,
  totalCount,
}) => {
  const navigate = useNavigate();

  const totalPages = Math.ceil(totalCount / POKEMONS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    navigate(`?page=${newPage}`);
  };

  return (
    <div className="flex items-center gap-12 self-center">
      <Button
        variant="outline"
        size="xs"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Précédent
      </Button>

      <span>
        Page {page} over {totalPages}
      </span>

      <Button
        variant="outline"
        size="xs"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Suivant
      </Button>
    </div>
  );
};
