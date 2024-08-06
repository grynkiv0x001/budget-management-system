'use client';

import { usePathname } from 'next/navigation';

import SidebarItem from '@/app/ui/sidebar/SidebarItem';

const links = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    title: 'Transactions',
    href: '/history',
  },
  {
    title: 'Wallet',
    href: '/wallet',
  }
];

const SidebarNav = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-4 mt-4">
      {links.map((link) => (
        <SidebarItem
          key={link.href}
          link={link}
          active={pathname === link.href}
        />
      ))}
    </div>
  );
};

export default SidebarNav;
