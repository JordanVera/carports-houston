import Link from "next/link";
import { ArrowRight, Images, Mail, Phone } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { homeHero, siteConfig } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom_right,oklch(0.42_0.12_250_/_0.08),transparent_50%)] dark:bg-[linear-gradient(to_bottom_right,oklch(0.62_0.14_250_/_0.12),transparent_50%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,oklch(0.5_0.05_250_/_0.06)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.5_0.05_250_/_0.06)_1px,transparent_1px)] bg-size-[4rem_4rem]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Badge variant="secondary" className="mb-6">
          {siteConfig.serviceArea}
        </Badge>

        <h1 className="font-heading max-w-3xl text-4xl font-bold tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
          {homeHero.title}
        </h1>

        <p className="mt-4 max-w-2xl text-xl font-medium text-primary md:text-2xl">
          {homeHero.subtitle}
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {homeHero.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/gallery">
              <Images className="size-4" />
              View Gallery
            </Link>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Phone className="size-4 text-primary" />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.emailHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-primary" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
