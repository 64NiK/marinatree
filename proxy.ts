import { NextResponse, type NextRequest } from "next/server";
import { hasLang } from "@/content/dictionary";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];
  if (hasLang(first)) return;

  const accept = request.headers.get("accept-language") ?? "";
  const lang = /\bru\b/i.test(accept.split(",")[0] ?? "") ? "ru" : "lv";
  request.nextUrl.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|photos|favicon.ico|.*\\.).*)"],
};
