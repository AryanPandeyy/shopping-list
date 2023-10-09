import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const appRouter = router({
  hello: publicProcedure.query((opts) => {
    return 9;
  }),
  getTask: publicProcedure.query(async (opts) => {
    const result = prisma.list.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
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
  deleteTask: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      await prisma.list.delete({
        where: {
          id: opts.input.id,
        },
      });
    }),
  // https://github.com/prisma/prisma/discussions/2531#discussioncomment-17499
  // https://github.com/prisma/prisma/discussions/2531
  checkTask: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      await prisma.$executeRaw`UPDATE public."List" SET checked = NOT checked WHERE id = ${opts.input.id};
`;
    }),
});
export type AppRouter = typeof appRouter;
