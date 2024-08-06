import { ReactNode } from 'react';

import Sidebar from '@/app/ui/sidebar/Sidebar';

const HomeLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default HomeLayout;
