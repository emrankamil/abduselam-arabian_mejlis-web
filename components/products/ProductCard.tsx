"use client";

interface ProductCardProps {
  params: { locale: string };
  id: string;
  title: string;
  title_am: string;
  description: string;
  description_am: string;
  image: string;
  views: number;
  likes: number;
}
import { TbEyeFilled } from "react-icons/tb";
import { BiSolidLike } from "react-icons/bi";
import { PiFolderOpenFill } from "react-icons/pi";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const ProductCard: React.FC<ProductCardProps> = ({
  params: { locale },
  id,
  title,
  title_am,
  description,
  description_am,
  image,
  views,
  likes,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [productLikes, setProductLikes] = useState(likes);

  const handleLikeToggle = () => {
    if (isLiked) {
      handleUnlike(id);
    } else {
      handleLike(id);
    }
    setIsLiked(!isLiked);
  };

  const handleLike = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/products/${id}/like`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        setProductLikes(productLikes + 1);
      })
      .catch((error) => {
        console.error("Error liking product:", error);
      });
  };

  const handleUnlike = (id: string) => {
    fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/products/${id}/unlike`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then(() => {
        setProductLikes(productLikes - 1);
      })
      .catch((error) => {
        console.error("Error unliking product:", error);
      });
  };

  return (
    <div className="product-card w-full max-w-s bg-white">
      <div className="w-full h-64 overflow-hidden rounded relative group">
        <Image src={image} alt={""} width={1000} height={1000} />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
        <button className="absolute flex items-center gap-2 top-2 left-2 rounded-full bg-black/75 px-3 py-1.5 text-sm text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <PiFolderOpenFill />
          <h1>Save</h1>
        </button>
      </div>
      <div className=" w-full py-2 px-1">
        <div className="flex justify-between items-center">
          <Link
            href={`/products/${id}`}
            className="text-md font-bold overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[200px] relative hover:underline"
          >
            <span className="">{locale == "en" ? title : title_am}</span>
          </Link>
          <div className="flex justify-between items-center ml-2 w-[70px]">
            <div className="flex items-center space-x-0.5">
              <button onClick={handleLikeToggle}>
                <BiSolidLike
                  className={`${
                    isLiked ? "text-red-500" : "text-gray-800/80"
                  } transition-colors duration-300`}
                />
              </button>
              <span className="text-sm">{productLikes}</span>
            </div>
            <div className="flex items-center space-x-0.5">
              <div>
                <TbEyeFilled className="text-gray-800/80" />
              </div>
              <span className="text-sm">{views}</span>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-900">
          {locale == "en" ? description : description_am}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;