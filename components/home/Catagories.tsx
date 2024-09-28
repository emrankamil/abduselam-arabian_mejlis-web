"use client";
import React, { useState } from "react";
import { categories } from "@/data/catagories";
import { Category } from "@/data/catagories";
import Image from "next/image";

// const images = [
//   { src: "/arabic_board.png", alt: "Image 1" },
//   { src: "/gray-logo.png", alt: "Image 2" },
//   { src: "/hero-image.png", alt: "Image 3" },
// ];

const Catagories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getStyle = (index: number) => ({
    width: hoveredIndex === index ? "50%" : "25%",
    transition: "width 0.3s ease",
  });

  return (
    <div className="max-w-full py-16 -my-16 md:px-8">
      <div className="flex justify-center items-center h-full w-full">
        {/* Images */}
        <div className="w-full lg:w-2/3 flex h-full">
          {/* These two images will be hidden on screens smaller than lg */}
          <div
            className="w-1/4 p-4 hidden lg:block"
            style={getStyle(0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={"/video-image.jpg"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover rounded-xl"
            />
          </div>
          <div
            className="w-1/4 p-4 hidden lg:block"
            style={getStyle(1)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={"/video-image.jpg"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover rounded-xl"
            />
          </div>
          {/* Main image, always visible */}
          <div className="w-full h-96 sm:h-full lg:w-1/2 md:p-4">
            <Image
              src={"/features_image-1.png"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover md:rounded-xl"
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="w-full lg:w-1/3 h-full">
          <div className="flex flex-col items-start px-4 md:p-8 space-y-6">
            <h2 className="text-gray-500 text-h2 font-bold">Categories</h2>
            <div className="text-3xl font-bold text-gray-800 max-w-full">
              Our best recommendation
            </div>

            {/* Categories List */}
            <div className="space-y-4">
              {categories.map((category: Category, index) => (
                <div key={index}>
                  {categories[selectedCategory].name === category.name ? (
                    <CategoryDetail {...category} />
                  ) : (
                    <button
                      onClick={() => setSelectedCategory(index)}
                      className={`text-lg font-semibold transition-colors duration-300 ease-in-out ${
                        categories[selectedCategory].name === category.name
                          ? "text-gray-800"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {category.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagories;

const CategoryDetail: React.FC<Category> = ({ name, description }) => {
  return (
    <div className="w-full ">
      {/* Displaying the selected category's description */}
      <div className="rounded-xl bg-primary text-white p-6 shadow-md transition-opacity duration-500 ease-in-out opacity-100">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};
