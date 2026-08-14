import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";

type CtaSectionProps = {
  title?: string;
  description?: string;
};

export function CtaSection({
  title = "Ready to start your project?",
  description = "Contact Carports Houston today for a custom metal structure designed around your needs.",
}: CtaSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-12 md:px-12 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,oklch(0.42_0.12_250_/_0.08),transparent)] dark:bg-[linear-gradient(135deg,oklch(0.62_0.14_250_/_0.12),transparent)]"
          />

          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.emailHref}>
                  <Mail className="size-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
