import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

const Page = async () => {
  return (
    <div className="mt-48 px-24">
      <a href="/">
        <h1>Return to Home</h1>
      </a>
      <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
        <p className="font-bold">Coming Soon</p>
        <p>This page will be available soon. Stay tuned!</p>
      </div>
    </div>
  );
  // Simulate session data with user name and their saved items/orders
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
    return null;
  }

  return (
    <div className="space-y-16 h-full w-full">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            My Account
          </h1>
        </div>
      </div>

      {/* Account Details */}
      <div className="w-4/5 px-24">
        <p className="text-lg mb-8">Welcome back, {session?.user?.name}!</p>
        <Link href="/api/auth/signout?callbackUrl=/">Sign Out</Link>

        {/* Saved Items Section */}
        {/* <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Saved Items</h2>
          {savedItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg shadow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>You have no saved items.</p>
          )}
        </section> */}

        {/* Orders Section */}
        {/* <section>
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
          {orders.length > 0 ? (
            <div className="border-t border-gray-300 pt-4">
              {orders.map((order) => (
                <div key={order.id} className="border-b py-4">
                  <p className="font-semibold">Order #{order.id}</p>
                  <p>Date: {order.date}</p>
                  <p>Total: ${order.total.toFixed(2)}</p>
                  <p>
                    Status:{" "}
                    <span className="text-blue-500">{order.status}</span>
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>You have no orders yet.</p>
          )}
        </section> */}
      </div>
    </div>
  );
};

export default Page;

// function SignOut() {
//   return (
//     <form
//       action={async () => {
//         "use server";
//         await signOut();
//       }}
//     >
//       <button type="submit">Sign out</button>
//     </form>
//   );
// }
