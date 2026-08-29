import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import {
  getServiceHref,
  getServiceImages,
  type Service,
} from '@/lib/services';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const image = getServiceImages(service)[0];
  const href = getServiceHref(service.slug);

  return (
    <Link
      href={href}
      className="group relative flex min-h-80 flex-col justify-end overflow-hidden rounded-xl ring-1 ring-foreground/10 transition-shadow hover:shadow-md"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        placeholder="blur"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-[oklch(0.14_0.02_250/0.92)] via-[oklch(0.14_0.02_250/0.45)] to-transparent"
      />
      <div className="relative flex flex-col gap-2 p-5 pt-16">
        <h3 className="font-heading text-lg font-semibold tracking-tight text-white">
          {service.name}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-white/75">
          {service.excerpt}
        </p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-white">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
