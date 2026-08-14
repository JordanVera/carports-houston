import type { Metadata } from "next";

import { CtaSection } from "@/components/sections/cta-section";
import { PageHeader } from "@/components/sections/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutContent, trustHighlights } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Carports Houston — a family-owned company with decades of experience building custom metal structures across the Texas Gulf Coast.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title={aboutContent.title} />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            {aboutContent.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p className="font-medium text-foreground">{aboutContent.closing}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {trustHighlights.map((item) => (
              <Card key={item.title} className="border-border/80">
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
