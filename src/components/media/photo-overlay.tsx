import { cn } from "@/lib/utils";

type PhotoOverlayProps = {
  variant?: "hero" | "header" | "cta";
  className?: string;
};

const overlays = {
  hero: [
    "bg-linear-to-r from-[oklch(0.14_0.02_250/0.92)] via-[oklch(0.14_0.02_250/0.72)] to-[oklch(0.14_0.02_250/0.28)]",
    "bg-linear-to-t from-[oklch(0.14_0.02_250/0.75)] via-transparent to-[oklch(0.14_0.02_250/0.25)]",
  ],
  header: [
    "bg-linear-to-r from-[oklch(0.14_0.02_250/0.88)] via-[oklch(0.14_0.02_250/0.7)] to-[oklch(0.14_0.02_250/0.45)]",
    "bg-linear-to-t from-[oklch(0.14_0.02_250/0.5)] to-transparent",
  ],
  cta: [
    "bg-linear-to-r from-[oklch(0.14_0.02_250/0.9)] via-[oklch(0.14_0.02_250/0.75)] to-[oklch(0.14_0.02_250/0.55)]",
  ],
} as const;

export function PhotoOverlay({ variant = "hero", className }: PhotoOverlayProps) {
  return (
    <>
      {overlays[variant].map((layer) => (
        <div key={layer} aria-hidden className={cn("absolute inset-0", layer, className)} />
      ))}
    </>
  );
}
