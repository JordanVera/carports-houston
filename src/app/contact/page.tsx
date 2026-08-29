import type { Metadata } from 'next';
import { Check, Clock, Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '@/components/contact/contact-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  contactContent,
  contactExpectations,
  siteConfig,
} from '@/lib/content';
import { getServiceBySlug } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a free quote from Carports Houston for custom metal buildings, carports, and commercial structures. Call 281-387-1989.',
};

const contactDetails = [
  {
    label: 'Call or text',
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    icon: Phone,
  },
  {
    label: 'Email',
    value: siteConfig.email,
    href: siteConfig.emailHref,
    icon: Mail,
  },
  {
    label: 'Service area',
    value: 'Houston, TX and the Texas Gulf Coast',
    icon: MapPin,
  },
] as const;

type ContactPageProps = {
  searchParams: Promise<{ service?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service: serviceSlug } = await searchParams;
  const initialService = serviceSlug
    ? getServiceBySlug(serviceSlug)?.name
    : undefined;

  return (
    <section className="bg-muted/40 py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
        <div className="order-2 space-y-6 lg:order-1">
          <Card className="border-border/80 py-6">
            <CardHeader>
              <CardTitle className="font-heading text-xl">
                Contact information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const value = (
                  <p className="text-sm font-medium text-foreground">
                    {item.value}
                  </p>
                );

                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      {'href' in item && item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        value
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Clock className="size-4" />
                </span>
                <div>
                  <p className="text-sm text-muted-foreground">Hours</p>
                  <ul className="space-y-0.5 text-sm font-medium text-foreground">
                    {siteConfig.hours.map((entry) => (
                      <li key={entry.days}>
                        {entry.days}: {entry.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 py-6">
            <CardHeader>
              <CardTitle className="font-heading text-sm font-semibold tracking-wide uppercase">
                What to expect
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {contactExpectations.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="order-1 border-border/80 py-6 lg:order-2">
          <CardHeader className="gap-2">
            <CardTitle className="font-heading text-2xl md:text-3xl">
              <h1>{contactContent.title}</h1>
            </CardTitle>
            <p className="text-muted-foreground">{contactContent.subtitle}</p>
          </CardHeader>
          <CardContent>
            <ContactForm initialService={initialService} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
