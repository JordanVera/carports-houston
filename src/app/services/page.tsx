import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { ServiceCard } from '@/components/media/service-card';
import { CtaSection } from '@/components/sections/cta-section';
import { PageHeader } from '@/components/sections/page-header';
import { Button } from '@/components/ui/button';
import { commercialServices, residentialServices } from '@/lib/content';
import { siteImages } from '@/lib/images';
import {
  getServicesByCategory,
  serviceCategories,
} from '@/lib/services';

export const metadata: Metadata = {
  title: 'Metal Building Services in Houston',
  description:
    'Residential and commercial metal building services in Houston: custom carports, patio covers, RV covers, parking structures, hangars, and commercial roofing.',
};

const sections = [
  {
    ...serviceCategories.residential,
    id: 'residential' as const,
    title: residentialServices.title,
    description: residentialServices.description,
  },
  {
    ...serviceCategories.commercial,
    id: 'commercial' as const,
    title: commercialServices.title,
    description: commercialServices.description,
  },
] as const;

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

      {sections.map((section, index) => {
        const services = getServicesByCategory(section.id);

        return (
          <section
            key={section.id}
            id={section.id}
            className={
              index % 2 === 1
                ? 'scroll-mt-24 border-y border-border bg-muted/30 py-20'
                : 'scroll-mt-24 py-20'
            }
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="mb-10 max-w-2xl">
                <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {section.label}
                </p>
                <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight md:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  {section.description}
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="pb-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row">
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
      </section>

      <CtaSection />
    </>
  );
}
