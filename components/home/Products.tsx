"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { categories } from "@/data/categoriesData";

const products: { [key: string]: string[] } = {
  Popular: [
    "/products/popular-2.jpg",
    "/products/popular-1.png",
    "/products/popular-3.jpg",
    "/products/popular-2.png",
  ],
  "Arabian Majlis": [
    "/products/popular-1.png",
    "/products/popular-2.png",
    "/products/popular-3.png",
    "/products/popular-4.png",
  ],
  Sofa: [
    "/products/popular-2.jpg",
    "/products/popular-1.png",
    "/products/popular-3.jpg",
    "/products/popular-2.png",
  ],
  Curtains: [
    "/products/popular-1.png",
    "/products/popular-2.png",
    "/products/popular-3.png",
    "/products/popular-4.png",
  ],
  Beds: [
    "/products/popular-1.png",
    "/products/popular-2.png",
    "/products/popular-3.png",
    "/products/popular-4.png",
  ],
  "Tv Stand": [
    "/products/popular-1.png",
    "/products/popular-2.png",
    "/products/popular-3.png",
    "/products/popular-4.png",
  ],
};

const ProductShowcase = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof products>("Popular");
  const [images, setImages] = useState<string[]>(products[selectedCategory]);
  const [fadeIn, setFadeIn] = useState(true);

  const handleCategoryChange = (category: string) => {
    setFadeIn(false); // Trigger fade-out animation
    setTimeout(() => {
      setSelectedCategory(category);
      setImages(products[category]);
      setFadeIn(true); // Trigger fade-in animation
    }, 300);
  };

  return (
    <div id="products" className="mx-auto px-2 sm:px-10 md:px-16 w-full">
      <h3 className="text-3xl font-bold text-center mb-6">
        {t("home:products")}
      </h3>
      <h2 className="text-2xl text-center mb-8">{t("home:products_title")}</h2>

      {/* Category Tabs */}
      <div className="flex justify-between mb-10 sm:px-2 md:px-10 lg:px-36 overflow-x-auto whitespace-nowrap">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`text-lg font-medium px-4 ${
              selectedCategory === category ? "text-black" : "text-gray-400"
            } transition-all duration-300 ease-in-out`}
            onClick={() => handleCategoryChange(category)}
          >
            {category === "Arabian Majlis"
              ? t("common:arabian_mejlis")
              : category === "Curtains"
              ? t("common:curtain")
              : category === "Sofa"
              ? t("common:sofa")
              : category === "Beds"
              ? t("common:beds")
              : category === "Tv Stand"
              ? t("common:tv_stand")
              : category === "Popular"
              ? t("common:popular")
              : category}
          </button>
        ))}
      </div>

      {/* Images with transition */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 pb-6 transition-opacity duration-500 ease-in-out ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`overflow-hidden transform transition-transform duration-500 px-2 md:px-4 lg:px-6 pt-6 h-[85vh] max-h-2/3 `}
            // ${ (index === 2 || index === 3) && "max-md:hidden"}
            style={{ transition: "transform 0.5s ease-in-out" }}
          >
            {index === 0 ? (
              <div className="max-w-4xl mx-auto bg-white shadow-lg h-full flex flex-col">
                {/* Image Section */}
                <div className="overflow-hidden flex-1">
                  <Image
                    src={image}
                    alt="Product"
                    className="w-full h-full object-cover"
                    width={1000}
                    height={1000}
                  />
                </div>

                {/* Info Section */}
                <div className="p-1 sm:p-4 flex justify-between">
                  <div className="w-2/3 pr-2 sm:pr-4">
                    {/* Title */}
                    <h2 className="text-2xl sm:text-xl font-bold mb-2 truncate">
                      {selectedCategory === "Arabian Majlis"
                        ? t("common:arabian_mejlis")
                        : selectedCategory === "Curtains"
                        ? t("common:curtain")
                        : selectedCategory === "Sofa"
                        ? t("common:sofa")
                        : selectedCategory === "Beds"
                        ? t("common:beds")
                        : selectedCategory === "Tv Stand"
                        ? t("common:tv_stand")
                        : selectedCategory === "Popular"
                        ? t("common:popular")
                        : selectedCategory}
                    </h2>
                    {/* Description */}
                    <p className="text-gray-700 text-base sm:text-sm mb-4 break-words">
                      {t("common:lang") === "en"
                        ? categories[index].description
                        : categories[index].description_am}
                    </p>
                  </div>
                  <div className="flex flex-col w-1/3">
                    <div className="text-center">
                      {/* Rating */}
                      <h3 className="text-lg sm:text-base font-bold">
                        {t("products:best_selling")}
                      </h3>
                      <div className="flex items-center justify-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className="text-yellow-500 text-lg sm:text-base mb-2"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Show Details Button */}
                    <div className="flex items-center justify-center">
                      <Button className="bg-black text-white px-1 sm:px-4 py-2 rounded-xl hover:bg-gray-800 transition duration-300 text-xs sm:text-sm">
                        SHOW DETAILS
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src={image}
                alt={`Category ${selectedCategory} image ${index + 1}`}
                width={1000}
                height={1000}
                className={`w-full h-full object-cover rounded-xl`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center ">
        <Link
          href="/products"
          className="font-semibold px-16 py-4 rounded-xl hover:bg-gray-200 transition duration-300 border border-primary"
        >
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default ProductShowcase;
