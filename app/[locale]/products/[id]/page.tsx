"use client";

import { FetchFunction } from "@/api/FetchFunction";
import { Product } from "@/types/productType";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { services } from "@/data/aboutus";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await FetchFunction<{
        success: boolean;
        message: string;
        data: Product;
      }>(`${process.env.NEXT_PUBLIC_ORIGIN}/products/${id}`);
      if (response.success) {
        setProduct(response.data);
      } else {
        setError(true);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) {
    return <p>Error loading product</p>;
  }
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            Order Your Product Now
          </h1>
        </div>
      </div>

      {error && <p>Error loading product</p>}
      {!product && (
        <div className="container mx-auto py-12 px-4">Loading ....</div>
      )}

      {/* product */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Images */}
          <div className="flex flex-col space-y-4">
            <div className="h-64">
              {/* Big Image */}

              <Image
                src={product.images[0]}
                alt={"Large"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Two Small Images */}
              <Image
                src={product.images[1]}
                alt="Small 1"
                width={1000}
                height={1000}
                className="w-full h-48 object-cover rounded-lg"
              />
              <Image
                src={product.images[2]}
                alt="Small 2"
                width={1000}
                height={1000}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-800">
              {product.title.toUpperCase()}
            </h2>
            <p className="text-gray-600">{product.description}</p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              {colors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className="w-12 h-12 rounded-full p-4 border border-gray-900 cursor-pointer"
                />
              ))}
            </div> */}
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-primary-600 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/70 transition">
              Book Now
            </button>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={service.imageUrl}
              alt={service.title}
              className="w-full h-64 object-cover"
              width={500}
              height={300}
            />
            <div className="flex text-left">
              <div className="p-2 w-full">
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
              <div className="w-auto p-4 flex items-center">
                <span>{service.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
