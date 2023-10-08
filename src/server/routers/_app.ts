import { z } from "zod";
import { publicProcedure, router } from "../trpc";
export const appRouter = router({
  hello: publicProcedure.query((opts) => {
    return 9;
    // return {
    //   greeting: `hello ${opts.input.text}`,
    // };
  }),
});
export type AppRouter = typeof appRouter;
