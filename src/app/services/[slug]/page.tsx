import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetail } from '@/components/sections/service-detail';
import { siteConfig } from '@/lib/content';
import {
  getAllServices,
  getServiceBySlug,
  getServiceHref,
} from '@/lib/services';

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: 'Service' };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: getServiceHref(service.slug),
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    url: getServiceHref(service.slug),
    areaServed: ['Houston, TX', siteConfig.serviceArea],
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}
