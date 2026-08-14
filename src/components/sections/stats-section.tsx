import { Award, Hammer } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { stats } from "@/lib/content";

const icons = [Hammer, Award];

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {stats.map((stat, index) => {
            const Icon = icons[index] ?? Hammer;
            return (
              <Card
                key={stat.label}
                className="border-border/80 bg-card/50 transition-shadow hover:shadow-md"
              >
                <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <CardTitle className="font-heading text-4xl font-bold tracking-tight">
                      {stat.value}
                    </CardTitle>
                    <CardDescription className="mt-1 text-base font-medium text-foreground">
                      {stat.label}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
