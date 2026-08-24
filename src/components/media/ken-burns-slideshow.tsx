"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";

const SLIDE_MS = 8000;

type KenBurnsSlideshowProps = {
  images: readonly SiteImage[];
  className?: string;
};

export function KenBurnsSlideshow({ images, className }: KenBurnsSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || images.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [images.length, reduceMotion]);

  if (images.length === 0) return null;

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {images.map((image, imageIndex) => {
        const isActive = imageIndex === index;
        return (
          <Image
            key={image.label}
            src={image.src}
            alt={isActive ? image.alt : ""}
            fill
            priority={imageIndex === 0}
            placeholder="blur"
            sizes="100vw"
            className={cn(
              "object-cover transition-opacity duration-1000 ease-in-out motion-reduce:transition-none",
              isActive ? "opacity-100" : "opacity-0",
              isActive && !reduceMotion && "will-change-transform",
              isActive && !reduceMotion && (imageIndex % 2 === 0
                ? "animate-ken-burns"
                : "animate-ken-burns-alt"),
            )}
          />
        );
      })}
    </div>
  );
}
