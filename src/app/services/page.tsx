import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { commercialServices, residentialServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial metal building services from Carports Houston — carports, patio covers, hangars, and more.",
};

const serviceSections = [
  { ...residentialServices, icon: Home },
  { ...commercialServices, icon: Building2 },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Quality Metal Structures"
        subtitle="Expert carport and metal building services for residential and commercial needs in Houston."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceSections.map((section) => {
              const Icon = section.icon;
              return (
                <Card key={section.title} className="border-border/80">
                  <CardHeader>
                    <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{section.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {section.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
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
