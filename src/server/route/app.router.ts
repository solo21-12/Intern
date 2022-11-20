import { createRouter } from "../createRouter";
import {userRouter} from './user.router'
import {communityRouter} from './community.router'

export const appRouter = createRouter().merge('users.',userRouter ).merge('communities.',communityRouter)

export type AppRouter = typeof appRouter;
