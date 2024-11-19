// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "../../../lib/mongodb";
import { SessionEvent } from "../../../models/SessionEvent";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(400);

  // Ensure `eventType` property is present

  const body = JSON.parse(req.body);

  if (!body.eventType) return res.status(400);

  // Connect to MongoDB

  await connectDB();

  // Check for `analytics` cookie

  const analyticsCookieValue = req.cookies["analytics"];

  if (!analyticsCookieValue) return res.status(400);

  const analyticsData = JSON.parse(analyticsCookieValue);

  // Create ane save session event

  const sessionEvent = new SessionEvent({
    sessionId: analyticsData.sessionId,
    sessionUserId: analyticsData.sessionUserId,
    elementId: analyticsData.elementId,
    sessionStartTimestamp: analyticsData.sessionStartTimestamp,
    eventType: body.eventType,
  });

  await sessionEvent.save();

  res.status(200);
}
