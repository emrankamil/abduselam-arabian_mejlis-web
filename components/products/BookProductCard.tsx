import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { FaTerminal } from "react-icons/fa";

const Result = ({ onClose }: { onClose: () => void }) => {
  return (
    <Alert className="relative font-latoRegular rounded-none border-l-4 border-primary bg-white font-medium text-primary w-96 max-w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        &times;
      </button>
      <FaTerminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        Your order has been successfully submitted. Thank you for choosing to
        visit our shop. We look forward to seeing you on your visit day and are
        happy to serve you well.
      </AlertDescription>
    </Alert>
  );
};

const BookingFormModal = ({
  onClose,
  productId,
}: {
  onClose: () => void;
  productId: string;
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    visitDate: "",
    visitShop: "",
  });
  const [result, showResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const body = {
      product_id: productId,
      quantity: 1,
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      visit_date: new Date(formData.visitDate).toISOString(),
      visit_shop: formData.visitShop,
    };
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("data", data);
      if (data.success) {
        showResult(true);
      } else {
        console.error("Error:", data.message);
      }
    } catch (error) {
      console.error("Error during order submission:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex justify-center items-center">
      {!result ? (
        <div className="relative bg-white p-8 rounded-lg max-w-md w-full">
          <button
            onClick={onClose}
            className="absolute text-2xl top-2 right-4 text-primary font-bold hover:text-primary/70"
          >
            &times;
          </button>
          <h2 className="text-2xl mb-4">Booking Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">
                Phone number *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Date *</label>
              <input
                type="date"
                name="visitDate"
                value={formData.visitDate}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Location</label>
              <div>
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    name="visitShop"
                    value="Betel"
                    onChange={handleInputChange}
                    className="form-radio"
                    required
                  />
                  <span className="ml-2">Betel</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="visitShop"
                    value="Merkato"
                    onChange={handleInputChange}
                    className="form-radio"
                    required
                  />
                  <span className="ml-2">Merkato</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition w-full"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Result onClose={onClose} />
      )}
    </div>
  );
};

export default BookingFormModal;
