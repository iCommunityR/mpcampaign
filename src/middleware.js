import { NextResponse } from "next/server";

export const config = {
  matcher: "/integrations/:path*",
};

export function middleware(request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-createxyz-project-id", "aa22ada5-1a1b-4d56-9fe4-1a2df0ca3eb7");
  requestHeaders.set("x-createxyz-project-group-id", "82361c4a-ac56-4bf4-ab62-cf0b58a98f7a");


  request.nextUrl.href = `https://www.create.xyz/${request.nextUrl.pathname}`;

  return NextResponse.rewrite(request.nextUrl, {
    request: {
      headers: requestHeaders,
    },
  });
}