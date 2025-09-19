import { type NextRequest } from "next/server";
import { updateSession } from "./shared/api/supabase/middleware";

export async function middleware(request: NextRequest) {
  // All authentication logic and redirects are handled in updateSession
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
