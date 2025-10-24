"use client";
import type { FC } from "react";
import { useSearchParams } from "react-router";
import { Button } from "~/components/ui";
import { POKEMONS_PER_PAGE } from "~/constants";

type PaginationControlsProps = { totalCount: number };

export const PaginationControls: FC<PaginationControlsProps> = ({
  totalCount,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");

  const page = pageParam ? parseInt(pageParam) : 1;
  const totalPages = Math.ceil(totalCount / POKEMONS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center gap-12 self-center">
      <Button
        variant="ghost"
        size="xs"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </Button>

      <span>
        Page {page} over {totalPages}
      </span>

      <Button
        variant="ghost"
        size="xs"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </Button>
    </div>
  );
};
