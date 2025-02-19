import { decrypt } from "@/lib";
import { cookies } from "next/headers";

export async function GET() {
  const session = cookies().get("session")?.value;
  if (!session) {
    return new Response(JSON.stringify({ session: null }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  const decryptedSession = await decrypt(session);
  return new Response(JSON.stringify({ session: decryptedSession }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
