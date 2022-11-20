import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import {
  createUserOutputSchema,
  createUserSchema,
} from "../../schema/user.schema";

import * as trpc from "@trpc/server";
import { createRouter } from "../createRouter";
import z from "zod";

export const userRouter = createRouter().mutation("register-user", {
  // input:createUserSchema,
  input: z.object({
    email: z.string().email(),
    name: z.string().max(50).optional(),
    image: z.string().optional()
  }),

  async resolve({ ctx, input }) {
    const { email, name } = input;

    try {
      const user:any = await ctx.prisma.user.create({
        data: {
          email,
          name,
        },
      });
      return user;
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new trpc.TRPCError({
            code: "CONFLICT",
            message: "User already exist,",
          });
        }
      }
      throw new trpc.TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong",
      });
    }
  },
})
