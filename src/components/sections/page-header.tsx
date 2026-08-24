import type { StaticImageData } from "next/image";

import { KenBurnsImage } from "@/components/media/ken-burns-image";
import { PhotoOverlay } from "@/components/media/photo-overlay";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
  imageClassName?: string;
};

export function PageHeader({
  title,
  subtitle,
  image,
  imageAlt = "",
  imageClassName,
}: PageHeaderProps) {
  const hasImage = Boolean(image);

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      {hasImage && image ? (
        <>
          <KenBurnsImage
            src={image}
            alt={imageAlt}
            priority
            imageClassName={imageClassName}
          />
          <PhotoOverlay variant="header" />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.42_0.12_250/0.06),transparent)] dark:bg-[linear-gradient(to_bottom,oklch(0.62_0.14_250/0.1),transparent)]"
        />
      )}

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h1
          className={cn(
            "font-heading text-4xl font-bold tracking-tight md:text-5xl",
            hasImage && "text-white",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg",
              hasImage ? "text-white/75" : "text-muted-foreground",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
