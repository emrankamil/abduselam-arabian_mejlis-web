import { type NextAuthOptions } from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
// import { env } from "@/env.mjs";

declare module "next-auth" {
  interface User extends DefaultUser {
    data?: {
      accessToken: string;
      refreshToken: string;
    };
  }

  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
    user: {
      email?: string;
      userType?: string;
      userId?: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  debug: false,
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null; // Return null for missing credentials, instead of throwing an error.
        }

        const { email, password } = credentials;
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          // console.log(res);
          // if (res.status === 401) {
          //   throw new Error("The email/password you entered is incorrect."); // Unauthorized
          // }

          // if (res.status === 404) {
          //   throw new Error(
          //     "User with this email does not exist. Please Signup"
          //   ); // Not found
          // }
          // if (res.status !== 200) {
          //   throw new Error("Please try again.");
          // }

          if (res.ok) {
            const user = await res.json();
            return user;
          }
          return null;
        } catch (error) {
          // throw error;
          return null;
          // if (error instanceof Error) {
          //   throw new Error(error.message || "An unexpected error occurred");
          // } else {
          //   throw new Error("An unexpected error occurred");
          // }
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // When the user logs in for the first time, extract info from the user object
      if (user && user.data) {
        token.accessToken = user.data.accessToken;
        token.refreshToken = user.data.refreshToken;

        // Decode the token to extract custom claims
        const decodedToken = JSON.parse(
          Buffer.from(user.data.accessToken.split(".")[1], "base64").toString()
        );
        // console.log("decoded", decodedToken);
        token.email = decodedToken.Email;
        token.userType = decodedToken.User_type;
        token.userId = decodedToken.User_id;
      }

      return token;
    },
    async session({ session, token }) {
      // Add custom fields to the session object
      if (session.user) {
        session.user.email = token.email as string;
        session.user.userType = token.userType as string;
        session.user.userId = token.userId as string;
      }
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};
