import { NextRequest, NextResponse } from "next/server";
import { SessionEventClient } from "./clients/sessionEventClient";

export function middleware(request: NextRequest) {
  // Attempt to get analytics cookie on page navigation
  const analyticsCookie = request.cookies.get("analytics");

  const response = NextResponse.next();

  let cookieData;

  if (analyticsCookie) {
    // Use existing data from analytics cookie if it exists
    cookieData = JSON.parse(analyticsCookie.value);
  } else {
    // Otherwise, initialize a new session id and session user id to track user
    cookieData = {
      sessionId: crypto.randomUUID(),
      sessionUserId: crypto.randomUUID(),
    };
  }

  // Create update analytics cookie data
  const analyticsCookieData = {
    ...cookieData,
    sessionStartTimestamp: Date.now().toString(),
  };

  const updatedAnalyticsCookie = {
    name: "analytics",
    value: JSON.stringify(analyticsCookieData),
    path: "/",
  };

  // Set cookie
  response.cookies.set(updatedAnalyticsCookie);

  const sessionEventClient = new SessionEventClient();

  sessionEventClient.createSessionEvent({
    sessionEventType: "PAGE_VIEW",
    elementId: request.nextUrl.toString(),
  });

  // Return response
  return response;
}

export const config = {
  matcher: "/",
};
