import * as trpc from "@trpc/server";
import { createRouter } from "../createRouter";
import {
  createCommunitySchema,
  createPostSchema,
  getSingleCommunitySchema,
} from "../../schema/community.schema";
import z from "zod";

export const communityRouter = createRouter()
  .mutation("create-community", {
    // input: createCommunitySchema,
    input: z.object({
      title:z.string().max(256,'Max title length is 200'),
      body:z.string().min(5)
    }),
    async resolve({ ctx, input }) {
      if (!ctx) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Can not create a community while logged out",
        });
      }
      const commu=await ctx.prisma.community.create({
        data:{
          ...input,
          user:{
            connect:{
              id:ctx.user?.user?.id,
            }
          }
        }
      })
      return commu;
      
    },
  })
  .query("communities", {
    resolve({ ctx }) {
      ctx.prisma.community.findMany();
    },
  })
  .query("single-community", {
    input: getSingleCommunitySchema,
    resolve({ input, ctx }) {
      return ctx.prisma.community.findUnique({
        where: {
          id: input.postId,
        },
      });
    },
  }).mutation("post", {
    input: createPostSchema,
    async resolve({ ctx, input }) {
      if (!ctx) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Can not create a community while logged out",
        });
      }
      const commu=await ctx.prisma.post.create({
        data:{
          ...input,
          community:{
            connect:{
              //@ts-ignore
              id:ctx.user?.community.id,
            }
          }
        }
      })
      return commu;
    },
  })
