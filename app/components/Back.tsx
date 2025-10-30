"use client";
import { LucideArrowLeft } from "lucide-react";
import { Button } from "~/components/ui";

export const Back = () => {
  return (
    <Button
      variant="link"
      className="flex gap-2"
      onClick={() => history.back()}
    >
      <LucideArrowLeft />
      Back to list
    </Button>
  );
};
