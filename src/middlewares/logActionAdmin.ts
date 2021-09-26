import { Context } from "mali";
import { errorHandler, JwtPayload } from "@galaxy-fortune/common";
import logRepository from '../repository/log';

export const logActionAdmin = errorHandler(async (ctx: Context<any>, next: Function) => {
  const { id, username } = (ctx as any).payload as JwtPayload;
  logRepository.createLogAction({
    adminId: id.toString(),
    adminName: username,
    action: ctx.fullName,
    data: JSON.stringify(ctx.req.toObject())
  });
  await next();
});