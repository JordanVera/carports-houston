import Link from "next/link";
import { ArrowRight, Images, Mail, Phone } from "lucide-react";

import { KenBurnsSlideshow } from "@/components/media/ken-burns-slideshow";
import { PhotoOverlay } from "@/components/media/photo-overlay";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeHero, siteConfig } from "@/lib/content";
import { getSiteImage, heroSlideshowKeys } from "@/lib/images";

const heroImages = heroSlideshowKeys.map((key) => getSiteImage(key));

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      <KenBurnsSlideshow images={heroImages} />
      <PhotoOverlay variant="hero" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Badge
          variant="outline"
          className="mb-6 h-auto border-white/20 bg-white/10 px-3 py-1 text-white backdrop-blur-sm"
        >
          {siteConfig.serviceArea}
        </Badge>

        <h1 className="font-heading max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl md:leading-[1.1]">
          {homeHero.title}
        </h1>

        <p className="mt-4 max-w-2xl text-xl font-medium text-white/90 md:text-2xl">
          {homeHero.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
          {homeHero.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-11 px-5">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-11 border-white/30 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/gallery">
              <Images className="size-4" />
              View Gallery
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Phone className="size-4 text-white" />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.emailHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-white"
          >
            <Mail className="size-4 text-white" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
