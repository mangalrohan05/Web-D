import { NextResponse } from "next/server";

export function middleware(request) {

    if (request.nextUrl.pathname.startsWith('/this')) {
        return NextResponse.rewrite(new URL('/about', request.url)) 
    }
    
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/about', request.url)) 
    }


    // return NextResponse.json({ message: "Redirected to this message" })
    // return NextResponse.redirect(new URL('/', request.url))
}

// export const config = {
//     matcher: '/abis/:path*'
// }