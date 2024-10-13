"use client";
import React, { useState } from "react";
import { categories } from "@/data/categoriesData";
import { Category } from "@/data/categoriesData";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Catagories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(2);
  const { t } = useTranslation();

  return (
    <div className="max-w-full py-16 -my-16 md:px-8">
      <div className="flex justify-center items-center h-full w-full">
        {/* Images */}
        <div className="w-full lg:w-3/5 flex h-full">
          {/* These two images will be hidden on screens smaller than lg */}
          <div
            className={`h-[500px] p-2 hidden lg:block ${
              hoveredIndex === 0 ? "w-1/2" : "w-1/4"
            }`}
            style={{ transition: "width 0.3s ease" }}
            onMouseEnter={() => setHoveredIndex(0)}
          >
            <Image
              src={categories[selectedCategory].images[0]}
              alt={""}
              width={1000}
              height={1000}
              className={`h-full object-cover rounded `}
            />
          </div>
          <div
            className={`h-[500px] p-2 hidden lg:block ${
              hoveredIndex === 1 ? "w-1/2" : "w-1/4"
            }`}
            style={{ transition: "width 0.3s ease" }}
            onMouseEnter={() => setHoveredIndex(1)}
          >
            <Image
              src={categories[selectedCategory].images[1]}
              alt={""}
              width={1000}
              height={1000}
              className={`h-full object-cover rounded `}
            />
          </div>
          {/* Main image, always visible */}
          <div
            className={`h-[500px] p-2 w-full ${
              hoveredIndex === 2 ? "lg:w-1/2" : "lg:w-1/4"
            }`}
            style={{ transition: "width 0.3s ease" }}
            onMouseEnter={() => setHoveredIndex(2)}
          >
            <Image
              src={categories[selectedCategory].images[2]}
              alt={""}
              width={1000}
              height={1000}
              className={`h-full object-cover rounded `}
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="w-full lg:w-2/5 h-full">
          <div className="flex flex-col items-start px-4 md:p-8 space-y-6">
            <h2 className="text-primary text-h3 font-playfair">
              {t("home:categories")}
            </h2>
            <div className="text-3xl font-bold text-gray-800 max-w-full font-latoBold">
              {t("home:best_recommendation")}
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
                      {category.name === "Arabian Mejlis"
                        ? t("common:arabian_mejlis")
                        : category.name === "Curtains"
                        ? t("common:curtain")
                        : category.name === "Sofas"
                        ? t("common:sofa")
                        : category.name === "Beds"
                        ? t("common:beds")
                        : category.name === "Tv Stand"
                        ? t("common:tv_stand")
                        : category.name}
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

const CategoryDetail: React.FC<Category> = ({
  name,
  description,
  description_am,
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full ">
      {/* Displaying the selected category's description */}
      <div className="rounded-xl bg-primary text-white p-6 shadow-md transition-opacity duration-500 ease-in-out opacity-100">
        <h3 className="text-xl font-bold font-playfair">
          {name === "Arabian Mejlis"
            ? t("common:arabian_mejlis")
            : name === "Curtains"
            ? t("common:curtain")
            : name === "Sofas"
            ? t("common:sofa")
            : name === "Beds"
            ? t("common:beds")
            : name === "Tv Stand"
            ? t("common:tv_stand")
            : name}
        </h3>
        <p className="text-sm mt-3 font-latoRegular">
          {t("common:lang") === "en" ? description : description_am}
        </p>
      </div>
    </div>
  );
};
