"use client";

import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const ProductSkeleton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This only runs on the client-side
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Skeleton
        className="relative mx-auto h-[126px] w-full overflow-hidden rounded-full md:h-[180px]"
        width={isMobile ? 150 : 210}
      />

      <div className="flex flex-col gap-2">
        <Skeleton height={20} />
        <Skeleton height={30} />
      </div>
    </div>
  );
};
