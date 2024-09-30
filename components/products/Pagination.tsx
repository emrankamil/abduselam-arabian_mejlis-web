"use client";
import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import React from "react";

const PaginationComp = () => {
  const searchParams = useSearchParams();
  const pages: number = 2;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${currentPage === 1 && "active:bg-white opacity-60"}`}
              href={currentPage === 1 ? undefined : `?page=${currentPage - 1}`}
            />
          </PaginationItem>

          {currentPage === 1 && (
            <>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage + 1}`}>
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage + 2}`}>
                  {currentPage + 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          {currentPage > 1 && currentPage < pages && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage - 1}`}>
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage + 1}`}>
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            </>
          )}
          {currentPage === pages && currentPage !== 1 && (
            <>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage - 2}`}>
                  {currentPage - 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`?page=${currentPage - 1}`}>
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
            </>
          )}
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
