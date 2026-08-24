import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { KenBurnsImage } from "@/components/media/ken-burns-image";
import { PhotoOverlay } from "@/components/media/photo-overlay";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import { siteImages } from "@/lib/images";

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
        <div className="relative overflow-hidden rounded-2xl px-8 py-14 md:px-12 md:py-20">
          <KenBurnsImage
            src={siteImages.patioStringLights.src}
            alt=""
            variant="alt"
            imageClassName="object-[50%_40%]"
            sizes="(max-width: 1152px) 100vw, 1152px"
          />
          <PhotoOverlay variant="cta" />

          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg text-white/75">{description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                <a href={siteConfig.phoneHref}>
                  <Phone className="size-4" />
                  {siteConfig.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-11 border-white/30 bg-white/10 px-5 text-white hover:bg-white/20 hover:text-white"
              >
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
