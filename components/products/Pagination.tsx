"use client";
import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

const PaginationComp = ({ pages }: { pages: number }) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {/* prev */}
          <PaginationItem>
            <PaginationPrevious
              className={`${currentPage === 1 && "active:bg-white opacity-60"}`}
              href={currentPage === 1 ? undefined : `?page=${currentPage - 1}`}
            />
          </PaginationItem>

          {Array.from({ length: pages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`?page=${index + 1}`}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* next */}
          <PaginationItem>
            <PaginationNext
              className={`${
                currentPage === pages && "active:bg-white opacity-60"
              }`}
              href={
                currentPage === pages ? undefined : `?page=${currentPage + 1}`
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComp;
