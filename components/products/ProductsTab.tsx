"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { categories, tags } from "@/data/catagories";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";

const ProductsTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchTerm) {
      try {
        // Make a request to the backend before the redirect
        const response = await fetch(
          `${
            process.env.NEXT_PUBLIC_ORIGIN
          }/products/search?q=${encodeURIComponent(searchTerm)}`
        );

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Proceed with the redirection
        router.push(`/products?q=${encodeURIComponent(searchTerm)}`);
      } catch (error) {
        console.error("Error fetching data from the backend:", error);
      }
    }
  };

  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-between px-2 sm:p-6 gap-4">
      {/* filter section */}
      <div className="relative w-full md:w-64 border-2 border-sm rounded-xl px-4 text-center">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex gap-4">
                <Image
                  src="/svgs/filter_icon.svg"
                  alt="Like"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-semibold">Filter</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="absolute top-full left-0 w-full z-10 bg-white border border-gray-200 rounded-md shadow-lg">
              {/* catagory */}
              <Accordion
                type="single"
                collapsible
                className="px-4 font-semibold"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">
                    Filter By Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        href={`/products?category=${category.name}`}
                        className=" px-4 my-0.5 py-1.5 rounded-full border-2 border-md hover:bg-gray-200/70 transition-colors"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* tag */}
              <Accordion
                type="single"
                collapsible
                className="px-4 font-semibold"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold">
                    Filter By Tag
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col">
                    {tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/products?tag=${tag}`}
                        className=" px-4 my-0.5 py-1.5 rounded-full border-2 border-md hover:bg-gray-200/70 transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {/* search bar */}
      <form
        onSubmit={handleSearch}
        className="flex px-4 py-3 border-2 border-sm rounded-xl overflow-hidden w-full md:w-2/5 lg:w-1/2 mx-auto font-[sans-serif]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="16px"
          className="fill-gray-600 mr-3 rotate-90"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
        </svg>
        <input
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-transparent text-gray-600 text-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/* sort products */}
      <Link
        className="w-1/5 border-2 border-sm rounded-xl px-4 flex justify-center items-center max-md:hidden"
        href={`/products?sort=true`}
      >
        <span className="text-sm font-semibold">Sort</span>
      </Link>
    </section>
  );
};

export default ProductsTab;
