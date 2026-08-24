import type { Metadata } from 'next';
import Image from 'next/image';
import { Building2, Factory, ShieldCheck } from 'lucide-react';

import { CtaSection } from '@/components/sections/cta-section';
import { PageHeader } from '@/components/sections/page-header';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { aboutContent, trustHighlights } from '@/lib/content';
import { siteImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Carports Houston — a family-owned company with decades of experience building custom metal structures across the Texas Gulf Coast.',
};

const highlightIcons = [ShieldCheck, Factory, Building2];

const storyStrip = [
  siteImages.pavilionBuild,
  siteImages.customBuilding,
  siteImages.commercialInstall,
] as const;

export default function AboutPage() {
  const [lead, ...rest] = aboutContent.paragraphs;

  return (
    <>
      <PageHeader
        title={aboutContent.title}
        subtitle="Family-owned metal structures for homes and businesses across the Texas Gulf Coast."
        image={siteImages.pavilionInterior.src}
        imageAlt={siteImages.pavilionInterior.alt}
        imageClassName="object-[50%_40%]"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-foreground/10 lg:aspect-auto lg:min-h-112">
            <Image
              src={siteImages.pavilionBuild.src}
              alt={siteImages.pavilionBuild.alt}
              fill
              placeholder="blur"
              className="object-cover object-[50%_40%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{lead}</p>
            {rest.slice(0, 1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-6 sm:grid-cols-3">
          {storyStrip.map((image) => (
            <div
              key={image.label}
              className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-foreground/10"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder="blur"
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            {rest.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p className="font-medium text-foreground">
              {aboutContent.closing}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {trustHighlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? ShieldCheck;
              return (
                <Card key={item.title} className="border-border/80">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="font-heading text-lg">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
