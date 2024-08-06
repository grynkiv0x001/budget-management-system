import Image from 'next/image';
// import { useState } from 'react';

import MenuBurgerIcon from '@/public/menu-burger.svg';
import SidebarNav from '@/app/ui/sidebar/SidebarNav';
import { signOut } from '@/auth';

const Sidebar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // TODO: Add sidebar toggle
  // if (!isOpen) {
  //   return (
  //     <div className="p-8">
  //       <button onClick={toggleSidebar}>
  //         <Image
  //           src={MenuBurgerIcon}
  //           alt="Toggle Sidebar Icon"
  //           width={16}
  //           height={16}
  //           style={{
  //             filter: 'invert(1)',
  //           }}
  //         />
  //       </button>
  //     </div>
  //   );
  // };

  return (
    <aside className="flex h-screen w-72 bg-white flex-col">
      <div className="flex-1">
        <div className="flex h-16 items-center justify-between px-8 bg-gray-100">
          <div className="text-black">Logo & Sidebar</div>
          {/* <button className="text-black">
            <Image
              src={MenuBurgerIcon}
              alt="Toggle Sidebar Icon"
              width={16}
              height={16}
            />
          </button> */}
        </div>

        <SidebarNav />
      </div>

      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button className="text-black text-left p-8" type="submit">
          Sign out
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
