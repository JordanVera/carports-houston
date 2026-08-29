import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

import { CtaSection } from '@/components/sections/cta-section';
import { PageHeader } from '@/components/sections/page-header';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { siteConfig } from '@/lib/content';
import {
  getRelatedServices,
  getServiceHref,
  getServiceImages,
  serviceCategories,
  type Service,
} from '@/lib/services';

type ServiceDetailProps = {
  service: Service;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  const images = getServiceImages(service);
  const [hero, secondary] = images;
  const related = getRelatedServices(service);
  const category = serviceCategories[service.category];

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.excerpt}
        image={hero.src}
        imageAlt={hero.alt}
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <nav
            aria-label="Breadcrumb"
            className="mb-10 text-sm text-muted-foreground"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground">{service.name}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="text-sm font-semibold tracking-wide text-primary uppercase">
                {category.label} metal structures
              </p>
              {service.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button asChild>
                  <Link href="/contact">
                    Request a Free Quote
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={siteConfig.phoneHref}>Call {siteConfig.phone}</a>
                </Button>
              </div>
            </div>

            {secondary ? (
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl ring-1 ring-foreground/10">
                <Image
                  src={secondary.src}
                  alt={secondary.alt}
                  fill
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
          </div>

          <div className="mt-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              What is included with {service.name.toLowerCase()} in Houston
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border/80 bg-card p-4 text-sm leading-relaxed"
                >
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
            {service.name} questions we hear in Houston
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {service.faqs.map((faq) => (
              <Card key={faq.question} className="border-border/80">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {faq.answer}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
              Related metal building services
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={getServiceHref(item.slug)}
                  className="rounded-xl border border-border/80 bg-card p-5 transition-colors hover:bg-muted"
                >
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {serviceCategories[item.category].label}
                  </p>
                  <p className="mt-2 font-heading text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection
        title={`Ready for ${service.name.toLowerCase()} in Houston?`}
        description={`Contact Carports Houston for a custom quote on ${service.name.toLowerCase()} anywhere in the Texas Gulf Coast region.`}
      />
    </>
  );
}
