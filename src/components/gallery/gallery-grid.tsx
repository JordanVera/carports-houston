"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/sections/page-header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { galleryImages } from "@/lib/content";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <>
      <PageHeader
        title="Our Structures"
        subtitle="Browse our portfolio of custom metal buildings, carports, and commercial structures."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            className="mx-auto w-full max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <CarouselContent className="-ml-0">
                {galleryImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-0">
                    <div className="relative aspect-16/10 w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 896px) 100vw, 896px"
                        priority={image.id === 1}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="left-4 size-10 border-border/60 bg-background/80 backdrop-blur-sm hover:bg-background" />
              <CarouselNext className="right-4 size-10 border-border/60 bg-background/80 backdrop-blur-sm hover:bg-background" />
            </div>

            <div className="mt-4 flex items-center justify-between px-1">
              <p className="font-medium text-foreground">
                {galleryImages[current]?.label}
              </p>
              <p className="text-sm tabular-nums text-muted-foreground">
                {current + 1} / {galleryImages.length}
              </p>
            </div>
          </Carousel>

          <div className="mx-auto mt-6 max-w-4xl">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              All projects
            </p>
            <div className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => scrollTo(index)}
                  aria-label={`View ${image.label}`}
                  aria-current={current === index ? "true" : undefined}
                  className={cn(
                    "relative size-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:size-24",
                    current === index
                      ? "border-primary ring-2 ring-primary/20"
                      : "border-border opacity-70 hover:opacity-100"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Like what you see?"
        description="Contact us to discuss a custom metal structure for your property."
      />
    </>
  );
}
