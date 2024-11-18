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
import LoadingSpinner from "@/components/global/LoadingSpinner";
import Slider from "@/components/products/Slider";
import ProductCard from "@/components/products/ProductCard";
import { LuPackage } from "react-icons/lu";
import { MdOutlinePayment } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import BookingFormModal from "@/components/products/BookProductCard";

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  const [product, setProduct] = useState<Product | null>(null);
  const [popularProduct, setPopularProduct] = useState<Product[]>([]);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

    const fetchPopularProduct = async () => {
      const response = await FetchFunction<{
        success: boolean;
        message: string;
        data: Product[];
      }>(`${process.env.NEXT_PUBLIC_ORIGIN}/products?tag=popular`);
      if (response.success) {
        setPopularProduct(response.data.slice(0, 4));
      } else {
        setError(true);
      }
    };

    fetchProduct();
    fetchPopularProduct();
  }, [id]);

  if (error) {
    return (
      <div>
        {/* banner */}
        <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
          <div className="relative w-full h-full z-10 flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-white text-center leading-normal">
              Order Your Product Now
            </h1>
          </div>
        </div>
        <div className="py-16 ">Error loading product</div>
      </div>
    );
  }
  if (!product) {
    return (
      <div>
        {/* banner */}
        <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
          <div className="relative w-full h-full z-10 flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-white text-center leading-normal">
              Order Your Product Now
            </h1>
          </div>
        </div>

        <div className="mx-auto py-6 px-4 w-[48px] h-[48px]">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="font-latoRegular">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal font-playfair">
            Order Your Product Now
          </h1>
        </div>
      </div>

      {error && <p>Error loading product</p>}
      {!product && <div className="mx-auto py-12 px-4">Loading ....</div>}

      {isModalOpen && (
        <BookingFormModal productId={product.id} onClose={closeModal} />
      )}

      {/* product */}
      <div className="mx-auto py-12 px-6 sm:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Images */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold block md:hidden font-playfair">
              {product.title.toUpperCase()}
            </h2>
            <p className="text-gray-600 block md:hidden">
              {product.description}
            </p>
            <div className="w-full aspect-[1/1]">
              {/* Big Image */}
              <Image
                src={product.images[0]}
                alt={product.description}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Two Small Images */}
              <Image
                src={product.images[1]}
                alt={product.description}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover rounded-lg"
              />
              <Image
                src={product.images[2] ? product.images[2] : "/image.png"}
                alt={product.description}
                width={1000}
                height={1000}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            {/* slider */}
            <div>
              <Slider imageUrls={product.images.slice().reverse()} />
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-bold  font-playfair hidden md:block">
              {product.title.toUpperCase()}
            </h2>
            <p className="text-gray-600 hidden md:block">
              {product.description}
            </p>
            <button
              className="my-10 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/70 transition"
              onClick={openModal}
            >
              Book Now
            </button>
            <div>
              <h3 className="text-xl font-semibold ">
                {product.long_description}
              </h3>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold ">Features</h3>

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
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex">
                    <LuPackage className="h-8 w-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <h3 className="text-lg font-latoBold">PACKAGING</h3>
                      <h2>Luxury & Ecological Packaging</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-8">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex">
                    <MdOutlinePayment className="h-8 w-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <h3 className="text-lg font-latoBold">
                        PAYMENT INFORMATION
                      </h3>
                      <h2>Cash, CBE, telebirr, Awash Bank, ...</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-8">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex">
                    <TbTruckDelivery className="h-8 w-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <h3 className="text-lg font-latoBold">
                        DELIVERY INFORMATION
                      </h3>
                      <h2>Free Delivery</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-8">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  <div className="flex">
                    <FaExchangeAlt className="h-8 w-8 text-primary-600 mr-4" />
                    <div className="text-left">
                      <h3 className="text-lg font-latoBold">
                        INFORMATION IN EXCHANGE & RETURN
                      </h3>
                      <h2>Free Delivery</h2>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-8">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mx-auto py-12 px-6 sm:px-16">
        <div className="w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-center leading-normal font-playfair">
            IT MIGHT ALSO INTEREST YOU
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
          {popularProduct &&
            popularProduct.map((product: Product) => (
              <ProductCard
                params={{ locale: "en" }}
                key={product.id}
                id={product.id}
                title={product.title}
                title_am={product.title_am}
                description={product.description}
                description_am={product.description_am}
                image={product.images[0]}
                views={product.views}
                likes={product.likes}
                admin={false}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
