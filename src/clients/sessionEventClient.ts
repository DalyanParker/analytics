import { SessionEvent } from "../../models/SessionEvent";

type SessionEventType =
  | "PAGE_VIEW"
  | "PAGE_NAVIGATE_AWAY"
  | "PAGE_RETURN"
  | "BUTTON_CLICK";

export type CreateSessionEventParameters = {
  sessionEventType: SessionEventType;
  abortControllerSignal?: AbortSignal;
  elementId?: string;
};

export class SessionEventClient {
  private endpoint = "http://localhost:3000/api/session_event";

  constructor() {}

  async createSessionEvent({
    sessionEventType,
    abortControllerSignal,
    elementId,
  }: CreateSessionEventParameters) {
    const createSessionEventResponse = await fetch(this.endpoint, {
      method: "POST",
      body: JSON.stringify({ eventType: sessionEventType, elementId }),
      signal: abortControllerSignal,
    });
    const response = await createSessionEventResponse.json();
    return response;
  }
}
