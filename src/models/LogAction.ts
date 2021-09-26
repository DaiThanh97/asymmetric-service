import { Schema } from "mongoose";
import { logConnection } from './../configs/mongo';
import { LogAction } from "../types/log";

const logActionSchema = new Schema<LogAction>({
  adminId: {
    type: String,
    required: true
  },
  adminName: {
    type: String,
    required: true
  },
  action: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  collection: 'logActions'
});

export const LogActionDAO = logConnection.model<LogAction>(
  'logActions',
  logActionSchema
);