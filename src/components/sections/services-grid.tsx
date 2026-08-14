import Link from "next/link";
import { ArrowRight, Building2, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesPreview } from "@/lib/content";

const icons = [Home, Building2];

type ServicesGridProps = {
  showViewAll?: boolean;
};

export function ServicesGrid({ showViewAll = false }: ServicesGridProps) {
  return (
    <section className="border-y border-border bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
            Quality Metal Structures
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert carport and metal building services for residential and commercial
            needs in Houston.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {servicesPreview.map((service, index) => {
            const Icon = icons[index] ?? Home;
            return (
              <Card
                key={service.title}
                className="flex flex-col border-border/80 transition-shadow hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button asChild variant="ghost" className="px-0">
                    <Link href="/services">
                      Learn more
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/services">
                View All Services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
