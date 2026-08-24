"use client";

import { useState } from "react";
import Image from "next/image";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/sections/page-header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryImages, siteImages } from "@/lib/images";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex !== null ? galleryImages[activeIndex] : undefined;

  return (
    <>
      <PageHeader
        title="Our Structures"
        subtitle="Browse our portfolio of custom metal buildings, carports, and commercial structures."
        image={siteImages.commercial.src}
        imageAlt={siteImages.commercial.alt}
        imageClassName="object-[40%_35%]"
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl ring-1 ring-foreground/10 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  index === 0
                    ? "aspect-16/10 sm:col-span-2 lg:col-span-3"
                    : image.orientation === "portrait"
                      ? "aspect-3/4"
                      : "aspect-4/3",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  sizes={
                    index === 0
                      ? "(max-width: 1152px) 100vw, 1152px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  }
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[oklch(0.14_0.02_250/0.75)] to-transparent p-5 pt-16">
                  <p className="text-left font-medium text-white">{image.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-w-5xl overflow-hidden p-0 sm:max-w-5xl">
          {activeImage ? (
            <>
              <DialogTitle className="sr-only">{activeImage.label}</DialogTitle>
              <DialogDescription className="sr-only">{activeImage.alt}</DialogDescription>
              <div
                className={cn(
                  "relative w-full",
                  activeImage.orientation === "portrait" ? "aspect-3/4 max-h-[80vh]" : "aspect-16/10",
                )}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
              <div className="px-5 py-4">
                <p className="font-medium">{activeImage.label}</p>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>

      <CtaSection
        title="Like what you see?"
        description="Contact us to discuss a custom metal structure for your property."
      />
    </>
  );
}
