import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SiteImage } from "@/lib/images";
import { cn } from "@/lib/utils";

type PhotoCardProps = {
  image: SiteImage;
  title: string;
  description: string;
  items: readonly string[];
  href?: string;
  imageClassName?: string;
};

export function PhotoCard({
  image,
  title,
  description,
  items,
  href,
  imageClassName,
}: PhotoCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden border-border/80 pt-0 transition-shadow hover:shadow-md">
      <div className="relative aspect-16/10">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          placeholder="blur"
          className={cn("object-cover", imageClassName)}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-heading text-xl md:text-2xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="grid gap-2 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      {href ? (
        <CardFooter>
          <Button asChild variant="ghost" className="px-0">
            <Link href={href}>
              Learn more
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardFooter>
      ) : null}
    </Card>
  );
}
