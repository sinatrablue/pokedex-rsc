"use client";
import { LucideArrowLeft } from "lucide-react";
import { Button } from "~/components/ui";

export const Back = () => {
  return (
    <Button
      variant="outline"
      className="flex gap-2"
      onClick={() => history.back()}
    >
      <LucideArrowLeft />
      Back
    </Button>
  );
};
