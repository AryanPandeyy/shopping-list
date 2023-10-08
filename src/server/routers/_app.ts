import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const appRouter = router({
  hello: publicProcedure.query((opts) => {
    return 9;
  }),
  getTask: publicProcedure.query(async (opts) => {
    const result = prisma.list.findMany();
    console.log("RESULT ", result);
    return result;
  }),
  addTask: publicProcedure
    .input(z.object({ task: z.string() }))
    .mutation(async (opts) => {
      await prisma.list.create({
        data: {
          task: opts.input.task,
        },
      });
    }),
});
export type AppRouter = typeof appRouter;
