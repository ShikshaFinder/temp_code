/**
 * This file is used to initialize the trpc instances which is created once
 */

import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
