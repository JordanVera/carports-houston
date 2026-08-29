'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ClipboardCheck, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/content';
import { cn } from '@/lib/utils';

const SHOW_AFTER_PX = 80;

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');

    const update = () => {
      setVisible(media.matches && window.scrollY > SHOW_AFTER_PX);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    media.addEventListener('change', update);

    return () => {
      window.removeEventListener('scroll', update);
      media.removeEventListener('change', update);
    };
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-40 md:hidden',
        'border-t border-border/60 bg-background/90 backdrop-blur-md',
        'px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]',
        'transition-transform duration-300 ease-out',
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full',
      )}
      aria-hidden={!visible}
      inert={!visible || undefined}
    >
      <nav
        aria-label="Quick actions"
        className="mx-auto flex max-w-6xl gap-2"
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-11 flex-1 border-primary/25 text-primary hover:bg-primary/10 hover:text-primary"
        >
          <a href={siteConfig.phoneHref}>
            <Phone className="size-4" />
            Call Now
          </a>
        </Button>
        <Button asChild size="lg" className="h-11 flex-1">
          <Link href="/contact">
            <ClipboardCheck className="size-4" />
            Free Quote
          </Link>
        </Button>
      </nav>
    </div>
  );
}
