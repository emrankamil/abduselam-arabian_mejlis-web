"use client";

import Image from "next/image";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  views: number;
  onLikeToggle?: (id: string) => void;
  onSaveToggle?: (id: string) => void;
}
import { TbEyeFilled } from "react-icons/tb";
import { BiSolidLike } from "react-icons/bi";
import { PiFolderOpenFill } from "react-icons/pi";
import Link from "next/link";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  image,
  views,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onLikeToggle,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSaveToggle,
}) => {
  return (
    <div className="product-card w-full max-w-s bg-white">
      <div className="w-full h-64 overflow-hidden rounded relative group">
        <img src={image} alt={title} className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <button className="absolute flex items-center gap-2 top-2 left-2 rounded-full bg-black/75 px-3 py-1.5 text-sm text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <PiFolderOpenFill />
          <h1>Save</h1>
        </button>
      </div>
      <div className=" w-full py-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/products/${id}`}
            className="text-md font-bold overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[200px] relative hover:underline"
          >
            <span className="">{title}</span>
          </Link>
          <div className="flex justify-between items-center ml-2 w-[70px]">
            <div className="flex items-center space-x-0.5">
              <button onClick={() => {}}>
                <BiSolidLike className="text-gray-800/80" />
              </button>
              <span className="text-sm">20</span>
            </div>
            <div className="flex items-center space-x-0.5">
              <div>
                <TbEyeFilled className="text-gray-800/80" />
              </div>
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
