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

const PaginationComp = ({
  pages,
  handlePageChange,
}: {
  pages: number;
  handlePageChange: (pageNum: number) => void;
}) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          {/* prev */}
          <PaginationItem>
            <PaginationPrevious
              className={`${
                currentPage === 1 && "active:bg-white opacity-60"
              } cursor-pointer`}
              onClick={() => {
                if (currentPage > 1) {
                  handlePageChange(currentPage - 1);
                }
              }}
            />
          </PaginationItem>

          {/* page numbers */}
          {Array.from({ length: pages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                // href={`?page=${index + 1}`}
                onClick={() => {
                  if (currentPage !== index + 1) handlePageChange(index + 1);
                }}
                isActive={currentPage === index + 1}
                className="cursor-pointer"
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {/* next */}
          <PaginationItem>
            <PaginationNext
              aria-label="Next"
              className={`cursor-pointer ${
                currentPage === pages && "active:bg-white opacity-60"
              } `}
              // href={
              //   currentPage === pages ? undefined : `?page=${currentPage + 1}`
              // }
              onClick={() => {
                if (currentPage < pages) {
                  handlePageChange(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComp;
