"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/products/ProductCard";
import PaginationComp from "@/components/products/Pagination";
import { Product } from "@/types/productType";
import ProductsTab from "@/components/products/ProductsTab";
import React from "react";
import { useTranslation } from "react-i18next";
import { getProductsData } from "@/server-actions/product";
import { ProductSkeleton } from "./product-skeleton";
import Skeleton from "react-loading-skeleton";

interface ProductListProps {
  category: string;
  page: number;
  tag: string;
  search: string;
}

export default function ProductList({
  category,
  page: initialPage,
  tag,
  search,
}: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isError, setIsError] = useState(false);
  const { t, i18n } = useTranslation();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const searchParams = {
        page: currentPage.toString(),
        category: category || undefined,
        tag: tag || undefined,
        q: search || undefined,
      };

      const { products: fetchedProducts, totalProducts: total } =
        await getProductsData(searchParams);

      setProducts(fetchedProducts);
      setTotalProducts(total);
    } catch (error) {
      setIsError(true);
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category, currentPage, search, tag]);

  const handlePageChange = (newPage: number) => {
    console.log("Page changed to:", newPage);
    setCurrentPage(newPage);
  };

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setProducts(sortedProducts);
  };

  return (
    <section className="w-full space-y-6">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            {t("products:header")}
          </h1>
        </div>
      </div>
      <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
        <ProductsTab handleSort={handleSort} />
      </div>

      {/* products */}
      {search && (
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              {t("products:search")} &quot;{search}&quot;
            </h2>
            <a
              href="/products"
              className="text-blue-500 hover:underline font-medium"
            >
              {t("products:all_products")}
            </a>
          </div>
        </div>
      )}
      {(tag || category) && (
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          <div className="flex justify-between items-center">
            <a
              href="/products"
              className="text-blue-500 hover:underline font-medium"
            >
              {t("products:clear_filter")}
            </a>
          </div>
        </div>
      )}

      <div className="w-auto mx-auto px-3 sm:px-6 lg:px-8 xl:px-16">
        {loading ? (
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex w-full flex-row justify-between px-5">
              <Skeleton width={160} height={40} className="" />
              <Skeleton width={130} height={40} className="" />
            </div>
            <div className="mx-auto grid max-w-screen-lg grid-cols-2 flex-wrap justify-center gap-6 md:flex">
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <ProductSkeleton key={index} />
                ))}
            </div>
          </div>
        ) : isError ? (
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
            {t("products:fetching_error")}
          </div>
        ) : !products || products.length === 0 ? (
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
            {t("products:no_products")}
          </div>
        ) : (
          <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product: Product) => (
              <ProductCard
                params={{ locale: i18n.language }}
                key={product.id}
                id={product.id}
                title={product.title}
                title_am={product.title_am}
                description={product.description}
                description_am={product.description_am}
                image={product.images[0]}
                views={product.views}
                likes={product.likes}
                admin={false}
              />
            ))}
          </div>
        )}
      </div>

      {products && (
        <PaginationComp
          pages={Math.ceil(totalProducts / 10)}
          handlePageChange={handlePageChange}
        />
      )}
    </section>
  );
}
