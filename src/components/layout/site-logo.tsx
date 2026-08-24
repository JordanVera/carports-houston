import Image from 'next/image';

import logoMark from '../../../public/images/logo-mark.png';
import { cn } from '@/lib/utils';

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <Image
        src={logoMark}
        alt=""
        width={36}
        height={36}
        priority={priority}
        className="size-9 shrink-0 rounded-lg shadow-sm ring-1 ring-black/10 dark:ring-white/20"
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-[15px] font-semibold tracking-tight text-foreground">
          Carports
        </span>
        <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-primary uppercase">
          Houston
        </span>
      </span>
    </span>
  );
}
