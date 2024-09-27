"use client";

import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function CompanyVideo() {
  const { t } = useTranslation();
  const [videoVisible, setVideoVisible] = useState(false);
  const videoId = "t2LMvk7CKJ0";

  return (
    <div className="w-full md:h-screen h-auto aspect-[3/2] flex items-center justify-center py-4">
      <div className="relative bg-[url('https://plus.unsplash.com/premium_photo-1683121407881-de8a4a1456c3?q=80&w=1660&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-left h-full w-full">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="absolute bottom-4 md:bottom-16 p-2 left-6 sm:left-10 md:left-16 text-white">
          <h1 className="mb-2 md:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {t("watch_video")}
          </h1>
          <div className="flex items-center">
            <div>
              <button
                onClick={() => setVideoVisible(true)}
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-white hover:bg-white transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white group-hover:text-black transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="5,3 19,10 5,17" />
                </svg>
              </button>
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
                CLICK TO WATCH
              </h3>
              <h3 className="text-xs sm:text-sm md:text-base lg:text-lg">
                See how it works
              </h3>
            </div>
          </div>
        </div>

        {/* YouTube Video Iframe */}
        {videoVisible && (
          <div className="absolute inset-0 flex items-center justify-center w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=1&loop=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            <Button
              variant="outline"
              className="absolute top-0 right-0 bg-white text-black p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 opacity-70"
              size="icon"
              onClick={() => {
                setVideoVisible(false);
              }}
            >
              <IoCloseSharp className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyVideo;
