import { PhotoCard } from "@/components/media/photo-card";
import { servicesPreview } from "@/lib/content";
import { getSiteImage } from "@/lib/images";

export function ServicesGrid() {
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
          {servicesPreview.map((service) => (
            <PhotoCard
              key={service.title}
              image={getSiteImage(service.image)}
              title={service.title}
              description={service.description}
              items={service.items}
              href="/services"
              imageClassName={
                service.image === "commercialService"
                  ? "object-[50%_40%]"
                  : "object-[50%_35%]"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
