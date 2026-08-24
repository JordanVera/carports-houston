import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredProject } from "@/lib/content";
import { featuredMosaicKeys, getSiteImage } from "@/lib/images";

const mosaic = featuredMosaicKeys.map((key) => getSiteImage(key));
const [featured, ...thumbs] = mosaic;

export function FeaturedWorkSection() {
  return (
    <section className="border-y border-border">
      <div className="grid lg:grid-cols-2">
        <div className="grid min-h-96 auto-rows-[minmax(7.5rem,1fr)] grid-cols-2 gap-1 bg-foreground/5 sm:grid-cols-4 sm:grid-rows-2 lg:min-h-140">
          <Link
            href="/gallery"
            className="group relative col-span-2 row-span-2 min-h-52 overflow-hidden sm:min-h-0"
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              placeholder="blur"
              className="object-cover object-[70%_50%] transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[oklch(0.14_0.02_250/0.7)] to-transparent p-4 pt-16">
              <p className="text-sm font-medium text-white">{featured.label}</p>
            </div>
          </Link>

          {thumbs.map((image) => (
            <Link key={image.label} href="/gallery" className="group relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col justify-center bg-card px-6 py-16 md:px-12 md:py-20">
          <Badge variant="secondary" className="w-fit">
            {featuredProject.badge}
          </Badge>
          <h2 className="font-heading mt-4 max-w-lg text-3xl font-bold tracking-tight md:text-4xl">
            {featuredProject.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {featuredProject.description}
          </p>

          <ul className="mt-8 space-y-3">
            {featuredProject.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/gallery">
                View Our Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
