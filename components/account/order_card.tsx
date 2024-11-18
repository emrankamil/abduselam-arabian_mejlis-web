"use client";

import { useState } from "react";

interface OrderCardProps {
  id: string;
  productTitle: string;
  productId: string;
  quantity: number;
  phone: string;
  visitDate: string;
  visitShop: string;
  onDelete: (id: string) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({
  id,
  productTitle,
  productId,
  quantity,
  phone,
  visitDate,
  visitShop,
  onDelete,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_ORIGIN}/order/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          onDelete(id); // Callback to remove the order from the list
          alert("Order deleted successfully!");
        } else {
          alert("Failed to delete order.");
        }
      } catch (error) {
        console.error("Error deleting order:", error);
        alert("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4 bg-white">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-800">
              {productTitle}
            </h3>
            <a
              href={`/products/${productId}`} // Replace `id` with `product_id` if needed
              className="text-sm text-blue-500 underline hover:text-blue-600"
            >
              View Product
            </a>
          </div>
          <p className="text-sm text-gray-500">Shop: {visitShop}</p>
        </div>
        <button
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </button>
      </div>
      {isOpen && (
        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>Quantity:</strong> {quantity}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Visit Date:</strong>{" "}
            {new Date(visitDate).toLocaleDateString()}
          </p>
          <div className="mt-4">
            <button
              onClick={handleDelete}
              className="text-red-500 bg-red-100 px-4 py-2 rounded hover:bg-red-200"
            >
              Delete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderCard;
