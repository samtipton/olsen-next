import type { DefaultSession, User, NextAuthOptions } from "next-auth";

import clientPromise from "@mongodb";
import bcrypt from "bcrypt";
import { WithId } from "mongodb";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  /** The User that is returned from authorize */
  interface User {
    /** The user's role. */
    role: string;
  }
}

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    /** The user's role. */
    role: string;
  }
}

export type UserDocument = WithId<{
  email: string;
  hash: string;
  role: string;
}>;

export const config = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log(credentials);
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const mongo = await clientPromise;
        const user = await mongo
          .db("olsen-park")
          .collection<UserDocument>("users")
          .findOne({ email: credentials.email });

        if (!user) {
          return null;
        }
        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hash
        );

        if (!passwordsMatch) {
          return Promise.resolve(null);
        }
        return Promise.resolve({ email: user.email, role: user.role } as User);
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      return { ...token, ...(user && { role: user.role }) };
    },
    session: async ({ session, token, user }) => {
      return { ...session, role: token.role };
    },
  },
} as NextAuthOptions;
