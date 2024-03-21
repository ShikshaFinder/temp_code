import bcrypt from "bcryptjs";

import { publicProcedure, router } from "@/server/trpc";
import db from "@/utils/db";
import { SIGN_UP_SCHEMA, STRING_WITH_BOOL_OBJ } from "@/utils/types/zod";

const userRouter = router({
  signUp: publicProcedure
    .input(SIGN_UP_SCHEMA)
    .output(STRING_WITH_BOOL_OBJ)
    .mutation(async function ({ input }) {
      try {
        const { email, password } = input;
        const existedUser = await db.user.findUnique({
          where: {
            email,
          },
        });
        if (existedUser) {
          return { msg: "User already exists! please login!", success: false };
        }
        const hashedPassword = bcrypt.hashSync(password, 16);
        await db.user.create({
          data: {
            email,
            hashedPassword,
          },
        });
        return {
          msg: "Sign up successfully! Please wait while we auto login you in...",
          success: true,
        };
      } catch (error: any) {
        return { msg: `Error: ${error.message}`, success: false };
      }
    }),
});

export default userRouter;
