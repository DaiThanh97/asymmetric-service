import { LeanDocument } from "mongoose";
import { LogActionDAO } from "../models/LogAction";
import { LogGameDAO } from "../models/LogGame";
import {
  LogAction,
  LogActionDocument,
  LogGame,
  LogGameDocument
} from "../types/log";

/**
 * This function create log action.
 *
 * @param payload The Log Action's props
 * @return `LogActionDocument`.
 */
const createLogAction = async (
  payload: LogAction
): Promise<LeanDocument<LogActionDocument> | null> => {
  return await LogActionDAO.create(payload);
};

/**
 * This function create log game.
 *
 * @param payload The Log Game's props
 * @return `LogGameDocument`.
 */
const createLogGame = async (
  payload: LogGame
): Promise<LeanDocument<LogGameDocument> | null> => {
  return await LogGameDAO.create(payload);
};

export default {
  createLogGame,
  createLogAction
};