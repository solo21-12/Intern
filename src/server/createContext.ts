//@ts-nocheck
import { prisma } from "../utilis/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { string } from "zod";
import { unstable_getServerSession as getServerSession } from "next-auth";
import authOptions from "../pages/api/auth/[...nextauth]";

const clientId =
  "BK0ky54JYQP43tQWz3GJJ6dvAUTsPJ-3_PDJuDxMIOVXHx1E_SY9b-HVqlVFxZ0Zf_IRuAk_ZUBgEWHaxN0wcCA"; // get from https://dashboard.web3auth.io


const user = (
  (await getServerSession(req, res, authOptions))) as
  | {
      user?: {
        name?: string | " ";
        email?: string | " ";
        image?: string | " ";
        id?: string | " ";
      };
      expires: string;
      community: {
        id: string | null,
        title: string | null,
        description: string | " ",
        tags: string | " ",
        textPreview: string | " ",
      },
    }
  | null
  | undefined;

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  return {
    req,
    res,
    prisma,
    user,
    community,
  };
}

export type Context = ReturnType<typeof createContext>;
