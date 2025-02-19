import { i18nRouter } from "next-i18n-router";
import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";
// import { updateSession } from "./lib";

export async function middleware(request: NextRequest) {
  // Apply i18n routing
  const i18nResponse = i18nRouter(request, i18nConfig);

  // Update session
  // const sessionResponse = await updateSession(request);

  // Merge or prioritize the responses if needed
  // return sessionResponse || i18nResponse || NextResponse.next();
  return i18nResponse || NextResponse.next();
}

// Applies this middleware only to files in the app directory
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
