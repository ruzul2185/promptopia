import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/create-prompt', '/profile'];
const homePath = '/';

export default function middleware(req) {
    const cookieStore = cookies();
    const token = cookieStore.get('next-auth.session-token')?.value || null;
    const { pathname } = req.nextUrl;

    console.log(`Requested Path: ${pathname}`);

    // Fast return if it's a public route
    if (!protectedRoutes.includes(pathname)) {
        return NextResponse.next(); // Allow public routes immediately
    }

    // Redirect to login if no token is found for protected routes
    if (!token) {
        return NextResponse.redirect(new URL(homePath, req.url));
    }

    // Allow access to protected routes if the user is authenticated
    return NextResponse.next();
}
