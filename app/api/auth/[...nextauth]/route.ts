import { config } from "@/auth";
import NextAuth, { NextAuthOptions } from "next-auth";

/**
 * https://authjs.dev/guides/providers/credentials#example---username--password
 */
export const authOptions: NextAuthOptions = {
  ...config,
};
export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
