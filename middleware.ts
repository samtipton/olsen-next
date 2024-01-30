import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./lib/session";

/**
 * Read more: https://nextjs.org/docs/app/building-your-application/authentication#protecting-routes-with-middleware
 */

// export async function middleware(request: NextRequest) {
//   const currentUser = await getCurrentUser();

//   if (currentUser) {
//     return NextResponse.redirect(new URL("/admin", request.url));
//   }
//   return NextResponse.redirect(new URL("/login", request.url));
// }

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/((?!api||_next/static|_next/image|.*\\.png$).*)",
    "/((?=admin).*)",
  ],
};
