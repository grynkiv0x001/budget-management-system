'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

import SidebarItem from '@/app/ui/sidebar/SidebarItem';

import MenuBurgerIcon from '@/public/menu-burger.svg';

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

const Sidebar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <div className="p-8">
        <button onClick={toggleSidebar}>
          <Image
            src={MenuBurgerIcon}
            alt="Toggle Sidebar Icon"
            width={16}
            height={16}
            style={{
              filter: 'invert(1)',
            }}
          />
        </button>
      </div>
    );
  };

  return (
    <aside className="flex h-screen w-72 bg-white flex-col">
      <div className="flex h-16 items-center justify-between px-8 bg-gray-100">
        <div className="text-black">Logo & Sidebar</div>
        <button className="text-black" onClick={toggleSidebar}>
          <Image
            src={MenuBurgerIcon}
            alt="Toggle Sidebar Icon"
            width={16}
            height={16}
          />
        </button>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        {links.map((link) => (
          <SidebarItem
            key={link.href}
            link={link}
            active={pathname === link.href}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
