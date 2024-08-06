import { NextResponse } from 'next/server';

import { auth } from '@/auth';

export default auth((req) => {
  const { pathname } = req.nextUrl;

  if (!req.auth && req.nextUrl.pathname !== '/login') {
    const redirectTo = req.nextUrl.clone();

    redirectTo.pathname = '/login';
    redirectTo.searchParams.set('callbackUrl', pathname);

    return NextResponse.redirect(redirectTo);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
