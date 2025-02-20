"use server";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.JWT_SECRET;
const expiryTime = parseInt(process.env.TOKEN_EXPIRY || "10", 10);
const key = new TextEncoder().encode(secretKey);

// export async function encrypt(payload: any) {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("10 sec from now")
//     .sign(key);
// }

export async function decrypt(input: string): Promise<any> {
  // const { payload } = await jwtVerify(input, key, {
  //   algorithms: ["HS256"],
  // });
  // return payload;

  const decodedToken = JSON.parse(
    Buffer.from(input.split(".")[1], "base64").toString()
  );
  return decodedToken;
}

export async function login(credentials: { email: string; password: string }) {
  // Verify credentials && get the user

  const { email, password } = credentials;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", res);
    if (res.ok) {
      const result = await res.json();
      console.log("result", result);
      const expires = new Date(Date.now() + expiryTime * 1000);
      cookies().set("session", result.data.accessToken, {
        expires,
        httpOnly: true,
      });
      return result.data;
    }
    return null;
  } catch (error) {
    return null;
  }
  // Create the session
  // const expires = new Date(Date.now() + 10 * 1000);
  // const session = await encrypt({ user, expires });

  // Save the session in a cookie
  // cookies().set("session", session, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// export async function updateSession(request: NextRequest) {
//   const session = request.cookies.get("session")?.value;
//   if (!session) return;

//   // Refresh the session so it doesn't expire
//   const parsed = await decrypt(session);
//   parsed.expires = new Date(Date.now() + 10 * 1000);
//   const res = NextResponse.next();
//   // res.cookies.set({
//   //   name: "session",
//   //   value: session,
//   //   httpOnly: true,
//   //   expires: parsed.expires,
//   // });
//   return res;
// }
