import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const USERNAME = process.env.BASIC_AUTH_USER ?? "admin";
const PASSWORD = process.env.BASIC_AUTH_PASS ?? "volley";

function isAuthorized(authHeader: string | null) {
  if (!authHeader) return false;
  const [scheme, encoded] = authHeader.split(" ");
  if (scheme !== "Basic" || !encoded) return false;
  const decoded =
    typeof atob === "function"
      ? atob(encoded)
      : Buffer.from(encoded, "base64").toString("utf-8");
  const [user, pass] = decoded.split(":");
  return user === USERNAME && pass === PASSWORD;
}

export function proxy(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const authorized = isAuthorized(request.headers.get("authorization"));
  if (authorized) {
    return NextResponse.next();
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Protected"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
