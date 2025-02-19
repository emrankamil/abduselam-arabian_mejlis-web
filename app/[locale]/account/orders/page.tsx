"use client";

import { useEffect, useState } from "react";
import OrderCard from "@/components/account/order_card";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import { MdHome } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Session } from "@/types/sessionType";
import React from "react";

interface Order {
  id: string;
  product?: string;
  product_id: string;
  quantity: number;
  email: string;
  name: string;
  phone: string;
  visit_date: string;
  visit_shop: string;
}

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("/api/session");
      const data = await response.json();
      setSession(data.session);
      setIsLoading(false);
    }

    fetchSession();
  }, []);

  useEffect(() => {
    // Check for session
    if (isLoading) return;

    if (!session) {
      router.push("/account");
      return;
    }

    // Fetch orders
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ORIGIN}/order?user_id=${session.User_id}`
        );

        const data = await response.json();
        if (data.success) {
          setOrders(data.data);
        } else {
          console.error("Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, [session, router, isLoading]);

  const handleDelete = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <div className="space-y-16 h-full w-full">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            My Orders
          </h1>
        </div>
      </div>
      {/* Breadcum */}
      <div className="flex text-gray-800 dark:text-gray-300 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-blue-500">
          <MdHome />
          <Link href="/account" className="mx-2">
            Account
          </Link>
        </div>
        {">"}
        <p className="mx-2">My Orders</p>
      </div>

      {/* orders */}
      {isLoading && (
        <div className="text-center m-10 w-[48px] h-[48px]">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading &&
        orders.filter((order) => new Date(order.visit_date) >= new Date())
          .length === 0 && (
          <div className="mt-48 px-24">
            <div className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700">
              <p className="font-bold">No orders availabe!</p>
              <p>
                You have no bookings to visit our shop. Please visit the{" "}
              </p>{" "}
              <a
                href="/products"
                className="text-blue-500 underline hover:text-blue-600"
              >
                Products page
              </a>{" "}
              to book a product you don&apos;t want to miss.
            </div>
          </div>
        )}
      {!isLoading &&
        orders.filter((order) => new Date(order.visit_date) >= new Date())
          .length > 0 && (
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="grid gap-4">
              {orders.map((order) => {
                const visitDate = new Date(order.visit_date);
                const currentDate = new Date();
                if (visitDate < currentDate) {
                  return null;
                }
                return (
                  <OrderCard
                    key={order.id}
                    id={order.id}
                    productId={order.product_id}
                    productTitle={order.product || "Arabian Mejlis"}
                    quantity={order.quantity}
                    phone={order.phone}
                    visitDate={order.visit_date}
                    visitShop={order.visit_shop}
                    onDelete={handleDelete}
                  />
                );
              })}
            </div>
          </div>
        )}
    </div>
  );
};

export default Orders;
