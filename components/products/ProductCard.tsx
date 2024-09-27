"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
  onLikeToggle?: (id: string) => void;
  onSaveToggle?: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  image,
  views,
  onLikeToggle,
  onSaveToggle,
}) => {
  return (
    <div className="product-card w-full max-w-s bg-white m-2">
      <div className="w-full h-64 overflow-hidden rounded-tl rounded-tr">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className=" w-full px-2 py-2">
        <div className="flex justify-between">
          <h1 className="text-md font-semibold">{title}</h1>
          <div className="flex justify-between items-center mt-2 w-1/4">
            <div className="flex items-center space-x-1">
              <button onClick={() => {}}>
                <Image src="/svgs/like.svg" alt="Like" width={20} height={20} />
              </button>
              <span className="text-sm">20</span>
            </div>
            <div className="flex items-center space-x-1">
              <button onClick={() => {}}>
                <Image src="/svgs/view.svg" alt="Save" width={20} height={20} />
              </button>
              <span className="text-sm">{views}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
