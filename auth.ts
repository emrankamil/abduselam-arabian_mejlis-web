import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  ...authConfig,
  pages: {
    signIn: "/account/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: false,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials: any, req) {
        if (!credentials.email || !credentials.password) {
          return null; // Return null for missing credentials, instead of throwing an error.
        }

        const { email, password } = credentials;

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}login`,
            {
              method: "POST",
              body: JSON.stringify({ email, password }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (res.status !== 200) {
            return null;
          }

          const user = await res.json();

          if (res.ok && user) {
            return user as any;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
