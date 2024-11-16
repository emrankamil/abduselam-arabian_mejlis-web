"use client";

import { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ imageUrls }: { imageUrls: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNext = () => {
    if (imageIndex === imageUrls.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const showPrev = () => {
    if (imageIndex === 0) {
      setImageIndex(imageUrls.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="w-full h-100vh relative">
      <div className="w-full h-full flex overflow-hidden">
        {imageUrls.map((url: string, key: number) => (
          <img
            src={url}
            key={key}
            className="img-slider-img"
            alt="slider"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        className="image-slider-btn"
        style={{ left: 0 }}
        onClick={showPrev}
      >
        <FaRegArrowAltCircleLeft style={{ fontSize: "40" }} />
      </button>
      <button
        className="image-slider-btn"
        style={{ right: 0 }}
        onClick={showNext}
      >
        <FaRegArrowAltCircleRight style={{ fontSize: "40" }} />
      </button>
    </div>
  );
};

export default Slider;
