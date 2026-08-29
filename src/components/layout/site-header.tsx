'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone } from 'lucide-react';

import { ServicesNav } from '@/components/layout/services-nav';
import { SiteLogo } from '@/components/layout/site-logo';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { navLinks, siteConfig } from '@/lib/content';
import { getServiceNavGroups } from '@/lib/services';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  const pathname = usePathname();
  const serviceGroups = getServiceNavGroups();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label={siteConfig.name}
          className="rounded-md outline-offset-4 transition-opacity hover:opacity-80"
        >
          <SiteLogo priority />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) =>
            link.href === '/services' ? (
              <ServicesNav key={link.href} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground',
                  pathname === link.href
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="hidden lg:inline-flex"
          >
            <a href={siteConfig.phoneHref}>
              <Phone className="size-4" />
              {siteConfig.phone}
            </a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <SiteLogo />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.href === '/services' ? (
                    <div key={link.href} className="space-y-1">
                      <Link
                        href={link.href}
                        className={cn(
                          'rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted',
                          pathname.startsWith('/services')
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground',
                        )}
                      >
                        {link.label}
                      </Link>
                      {serviceGroups.map((group) => (
                        <div key={group.category} className="pb-2 pl-3">
                          <p className="px-3 pt-2 pb-1 text-xs font-semibold tracking-wide text-foreground uppercase">
                            {group.label}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                'block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted',
                                pathname === item.href
                                  ? 'bg-muted text-foreground'
                                  : 'text-muted-foreground',
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted',
                        pathname === link.href
                          ? 'bg-muted text-foreground'
                          : 'text-muted-foreground',
                      )}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Button asChild variant="outline" className="mt-4">
                  <a href={siteConfig.phoneHref}>
                    <Phone className="size-4" />
                    {siteConfig.phone}
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
