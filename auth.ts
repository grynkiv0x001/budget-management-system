import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

import authConfig from './auth.config';

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLogin = nextUrl.pathname.startsWith('/login');
      const callbackUrl = nextUrl.searchParams.get('callbackUrl');

      if (isLoggedIn && callbackUrl) {
        return Response.redirect(new URL(callbackUrl, nextUrl));
      }

      if (!isLoggedIn) {
        return false;
      }

      if (isOnLogin) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
    },
  },
  ...authConfig,
});
