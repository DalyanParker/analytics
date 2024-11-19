import mongoose, { Schema, model } from "mongoose";

export interface SessionEventDocument {
  _id: string;
  sessionId: string;
  sessionUserId: string;
  sessionStartTimestamp: string;
  elementId: string;
  eventType: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionEventSchema = new Schema<SessionEventDocument>(
  {
    sessionId: {
      type: String,
      required: [true, "sessionId is required"],
    },
    sessionUserId: {
      type: String,
      required: [true, "sessionUserId is required"],
    },
    elementId: {
      type: String,
    },
    sessionStartTimestamp: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      required: [true, "eventType is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const SessionEvent =
  mongoose.models?.SessionEvent ||
  model<SessionEventDocument>("SessionEvent", SessionEventSchema);
