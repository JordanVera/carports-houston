import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PhotoCard } from "@/components/media/photo-card";
import { CtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { commercialServices, residentialServices } from "@/lib/content";
import { siteImages } from "@/lib/images";
import {
  getServiceHref,
  getServicesByCategory,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Metal Building Services in Houston",
  description:
    "Residential and commercial metal building services in Houston: custom carports, patio covers, RV covers, parking structures, hangars, and commercial roofing.",
};

const serviceSections = [
  {
    ...residentialServices,
    id: "residential" as const,
    image: siteImages.residentialService,
    imageClassName: "object-[50%_35%]",
    items: getServicesByCategory("residential").map((service) => ({
      label: service.name,
      href: getServiceHref(service.slug),
    })),
  },
  {
    ...commercialServices,
    id: "commercial" as const,
    image: siteImages.commercialService,
    imageClassName: "object-[40%_50%]",
    items: getServicesByCategory("commercial").map((service) => ({
      label: service.name,
      href: getServiceHref(service.slug),
    })),
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Quality Metal Structures"
        subtitle="Expert carport and metal building services for residential and commercial needs in Houston."
        image={siteImages.commercialCanopy.src}
        imageAlt={siteImages.commercialCanopy.alt}
        imageClassName="object-[40%_45%]"
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceSections.map((section) => (
              <div key={section.title} id={section.id} className="scroll-mt-24">
                <PhotoCard
                  image={section.image}
                  title={section.title}
                  description={section.description}
                  items={section.items}
                  imageClassName={section.imageClassName}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="outline">
              <Link href="/gallery">
                View Our Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
