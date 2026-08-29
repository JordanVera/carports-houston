'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { getServiceNavGroups } from '@/lib/services';
import { cn } from '@/lib/utils';

export function ServicesNav() {
  const pathname = usePathname();
  const groups = getServiceNavGroups();
  const isActive = pathname.startsWith('/services');

  return (
    <NavigationMenu viewport>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              'bg-transparent px-3 py-2 text-sm font-medium',
              isActive ? 'bg-muted text-foreground' : 'text-muted-foreground',
            )}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-xl grid-cols-2 gap-6 p-4">
              {groups.map((group) => (
                <div key={group.category} className="space-y-2">
                  <Link
                    href={group.href}
                    className="block rounded-md px-2 py-1 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {group.label}
                  </Link>
                  {/* <p className="px-2 text-xs text-muted-foreground">
                    {group.description}
                  </p> */}
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={item.href}
                            className={cn(
                              'block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground',
                              pathname === item.href &&
                                'bg-muted text-foreground',
                            )}
                          >
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="border-t border-border px-4 py-3">
              <NavigationMenuLink asChild>
                <Link
                  href="/services"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View all services
                </Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
