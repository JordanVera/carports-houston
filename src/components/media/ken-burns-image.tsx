import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type KenBurnsImageProps = {
  src: StaticImageData | string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  variant?: "default" | "alt";
};

export function KenBurnsImage({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  sizes = "100vw",
  variant = "default",
}: KenBurnsImageProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        placeholder={typeof src === "object" ? "blur" : "empty"}
        sizes={sizes}
        className={cn(
          "object-cover will-change-transform motion-reduce:animate-none",
          variant === "alt" ? "animate-ken-burns-alt" : "animate-ken-burns",
          imageClassName,
        )}
      />
    </div>
  );
}
