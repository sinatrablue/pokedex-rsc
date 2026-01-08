import { mergeProps } from "@base-ui-components/react/merge-props";
import { useRender } from "@base-ui-components/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const badgeVariants = cva(
  "relative inline-flex shrink-0 items-center justify-center gap-1 rounded-sm border border-transparent font-medium whitespace-nowrap transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-64 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3 [button,a&]:cursor-pointer [button,a&]:pointer-coarse:after:absolute [button,a&]:pointer-coarse:after:size-full [button,a&]:pointer-coarse:after:min-h-11 [button,a&]:pointer-coarse:after:min-w-11",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground [button,a&]:hover:bg-primary/90",
        destructive:
          "bg-destructive text-white [button,a&]:hover:bg-destructive/90",
        outline:
          "border-border bg-transparent dark:bg-input/32 [button,a&]:hover:bg-accent/25 dark:[button,a&]:hover:bg-input/48",
        secondary:
          "bg-secondary text-secondary-foreground [button,a&]:hover:bg-secondary/90",
        info: "bg-info/8 text-info-foreground dark:bg-info/16",
        success: "bg-success/8 text-success-foreground dark:bg-success/16",
        warning: "bg-warning/8 text-warning-foreground dark:bg-warning/16",
        error:
          "bg-destructive/8 text-destructive-foreground dark:bg-destructive/16",
        bug: "border-bug-primary/50 bg-bug-secondary/25 text-bug-primary dark:bg-inherit",
        dark: "border-dark-primary/50 bg-dark-secondary/25 text-dark-primary dark:bg-inherit",
        dragon:
          "border-dragon-primary/50 bg-dragon-secondary/25 text-dragon-primary dark:bg-inherit",
        electric:
          "border-electric-primary/50 bg-electric-secondary/25 text-electric-primary dark:bg-inherit",
        fairy:
          "border-fairy-primary/50 bg-fairy-secondary/25 text-fairy-primary dark:bg-inherit",
        fighting:
          "border-fighting-primary/50 bg-fighting-secondary/25 text-fighting-primary dark:bg-inherit",
        fire: "border-fire-primary/50 bg-fire-secondary/25 text-fire-primary dark:bg-inherit",
        flying:
          "border-flying-primary/50 bg-flying-secondary/25 text-flying-primary dark:bg-inherit",
        ghost:
          "border-ghost-primary/50 bg-ghost-secondary/25 text-ghost-primary dark:bg-inherit",
        grass:
          "border-grass-primary/50 bg-grass-secondary/25 text-grass-primary dark:bg-inherit",
        ground:
          "border-ground-primary/50 bg-ground-secondary/25 text-ground-primary dark:bg-inherit",
        ice: "border-ice-primary/50 bg-ice-secondary/25 text-ice-primary dark:bg-inherit",
        normal:
          "border-normal-primary/50 bg-normal-secondary/25 text-normal-primary dark:bg-inherit",
        poison:
          "border-poison-primary/50 bg-poison-secondary/25 text-poison-primary dark:bg-inherit",
        psychic:
          "border-psychic-primary/50 bg-psychic-secondary/25 text-psychic-primary dark:bg-inherit",
        rock: "border-rock-primary/50 bg-rock-secondary/25 text-rock-primary dark:bg-inherit",
        steel:
          "border-steel-primary/50 bg-steel-secondary/25 text-steel-primary dark:bg-inherit",
        water:
          "border-water-primary/50 bg-water-secondary/25 text-water-primary dark:bg-inherit",
      },
      size: {
        default: "px-[calc(--spacing(1)-1px)] text-xs",
        sm: "rounded-[calc(var(--radius-sm)-2px)] px-[calc(--spacing(1)-1px)] text-[.625rem]",
        lg: "px-[calc(--spacing(1.5)-1px)] text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: VariantProps<typeof badgeVariants>["variant"];
  size?: VariantProps<typeof badgeVariants>["size"];
}

function Badge({ className, variant, size, render, ...props }: BadgeProps) {
  const defaultProps = {
    "data-slot": "badge",
    className: cn(badgeVariants({ variant, size, className })),
  };

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(defaultProps, props),
  });
}

export { Badge, badgeVariants };
