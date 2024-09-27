"use client";
import React, { useState } from "react";
import { categories } from "@/data/catagories";
import { Category } from "@/data/catagories";
import Image from "next/image";

const images = [
  { src: "/arabic_board.png", alt: "Image 1" },
  { src: "/gray-logo.png", alt: "Image 2" },
  { src: "/hero-image.png", alt: "Image 3" },
];

const Catagories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredImage, setHoveredImage] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getStyle = (index: number) => ({
    width: hoveredIndex === index ? "50%" : "25%",
    transition: "width 0.3s ease",
  });

  return (
    <div className="max-w-full h-screen py-16 -my-16 md:px-8">
      <div className="flex justify-center items-center h-full w-full">
        {/* Images  */}
        <div className="group w-2/3 flex h-full">
          <div
            className="w-1/4 p-4 "
            style={getStyle(0)}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={"/video-image.jpg"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover"
              style={{ borderRadius: "1rem" }}
            />
          </div>
          <div
            className="w-1/4 p-4 "
            style={getStyle(1)}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={"/video-image.jpg"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover"
              style={{ borderRadius: "1rem" }}
            />
          </div>
          <div className="w-1/2 p-4 ">
            <Image
              src={"/features_image-1.png"}
              alt={""}
              width={1000}
              height={1000}
              className="h-full object-cover"
              style={{ borderRadius: "1rem" }}
            />
          </div>
        </div>

        {/* title and discription */}
        <div className="w-1/3 h-full">
          <div className="flex flex-col items-start p-8 space-y-6">
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

const ToggleDescription = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
      >
        {isVisible ? "Hide Description" : "Show Description"}
      </button>

      {/* Always render the element but apply transition classes based on visibility */}
      <div
        className={`bg-gray-900 text-white p-6 shadow-md rounded-md mt-4 cursor-pointer transition-all duration-500 ease-in-out transform ${
          isVisible ? "opacity-100" : "opacity-0  pointer-events-none"
        }`}
        onClick={handleClick}
      >
        <h3 className="text-xl font-bold">Majlis</h3>
        <p className="text-sm mt-3">
          Experience the essence of Arabian luxury with our Majlis collections,
          crafted to create the perfect gathering space that exudes warmth and
          elegance.
        </p>
      </div>
    </div>
  );
};
