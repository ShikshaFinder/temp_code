import z from "zod";

export const SIGN_UP_SCHEMA = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const STRING_WITH_BOOL_OBJ = z.object({
  msg: z.string(),
  success: z.boolean(),
});
