import { NextResponse } from 'next/server';
import { getToken } from "next-auth/jwt";

export async function middleware(req) {

    const token = await getToken({ req });

    const { pathname } = req.nextUrl;

    // Define protected routes
    const protectedRoutes = ['/create-prompt', '/profile'];

    // Fast return if it's a public route
    if (!protectedRoutes.includes(pathname)) {
        return NextResponse.next(); // Allow public routes immediately
    }

    // Redirect to log in if no token is found for protected routes
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    // Allow access to protected routes if the user is authenticated
    return NextResponse.next();
}

// Export default middleware from next-auth to handle authentication automatically
// export { default } from "next-auth/middleware";

export const config = {
    matcher: ['/create-prompt', '/profile'],
};
