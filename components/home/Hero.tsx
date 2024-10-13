"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const handleScroll = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[url('/hero-image.png')] bg-cover bg-left h-screen w-full">
      {/* Scroll Button */}
      <button
        className="absolute bottom-5 left-1/2 z-50 transform -translate-x-1/2 p-2"
        onClick={handleScroll}
      >
        <Image src="/svgs/drag.svg" alt="" width={25} height={25} />
      </button>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/100 to-transparent bg-opacity-70 rounded-xl" />

      {/* Hero Content */}
      <div className="relative w-full h-full z-10 flex flex-col justify-center md:w-2/3 md:px-8 lg:px-24 px-8 py-6 space-y-8">
        <h1 className="text-4xl sm:text-6xl text-white leading-snug md:leading-normal font-playfair">
          {t("home:header")}
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white font-latoRegular">
          {t("home:moto")} <br />
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-20 space-y-4 sm:space-y-0 font-latoBold">
          <Button
            variant="outline"
            className="px-6 py-4 lg:px-8 lg:py-7 w-full sm:w-48 text-primary rounded-full font-semibold border-2 border-white/50 bg-white/90 hover:bg-gray-200/20 transition duration-300 font-lato"
            onClick={() => (window.location.href = "/products")}
          >
            {t("home:shop_now")}
          </Button>

          <Button
            variant="outline"
            className="px-6 py-4 lg:px-8 lg:py-7 w-full sm:w-48 text-white rounded-full font-semibold border-2 border-white/50 bg-transparent hover:bg-gray-200/20 transition duration-300 font-lato"
            onClick={() => (window.location.href = "tel:+251910583763")}
          >
            {t("home:lets_talk")}
          </Button>
        </div>
      </div>
    </div>
  );
}
