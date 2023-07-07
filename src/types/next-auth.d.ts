import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            userId: string | unknown;
            role: string | unknown;
        }  & DefaultSession["user"]
    }
}