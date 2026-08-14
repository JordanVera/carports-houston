type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,oklch(0.42_0.12_250_/_0.06),transparent)] dark:bg-[linear-gradient(to_bottom,oklch(0.62_0.14_250_/_0.1),transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
