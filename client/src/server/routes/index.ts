import { publicProcedure, router } from "../trpc";

import userRouter from "./user/index.routes";

const appRouter = router({
  hello: publicProcedure.query(() => "Hello, world!"),
  user: userRouter,
});

export type AppRouter = typeof appRouter;
export default appRouter;
