import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import FacebookProvider from "next-auth/providers/facebook";
import GitHubProvider from "next-auth/providers/github";
import prisma from "../../../lib/prismadb";

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "clientId",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "clientSecret",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "clientId",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "clientSecret",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "clientId",
      clientSecret: process.env.GITHUB_SECRET || "clientSecret",
    }),
  ],
});
