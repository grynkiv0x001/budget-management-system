import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import Sidebar from '@/app/ui/sidebar/Sidebar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Budget Management System',
  description: 'By grynkiv0x001',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen w-screen">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
