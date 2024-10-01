import ProductCard from "@/components/products/ProductCard";
import PaginationComp from "@/components/products/Pagination";
import { Product } from "@/types/productType";
import ProductsTab from "@/components/products/ProductsTab";
import { FetchFunction } from "@/api/FetchFunction";
import React from "react";

const getProductsData = async (searchParams: {
  page: string;
  tag?: string;
  category?: string;
  sort?: boolean;
  q?: string;
}) => {
  const currentPage = searchParams.page;
  const tag = searchParams.tag;
  const category = searchParams.category;
  const sortProducts = searchParams.sort;
  const search = searchParams.q;

  let products: Product[];

  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (tag) queryParams.append("tag", tag);
  queryParams.append("page", currentPage);
  queryParams.append("page_size", "10");

  if (search) {
    products = await FetchFunction<Product[]>(
      `${process.env.NEXT_PUBLIC_ORIGIN}/products/search?q=${search as string}`
    );
  } else {
    const response = await FetchFunction<{
      success: boolean;
      message: string;
      data: Product[];
    }>(`${process.env.NEXT_PUBLIC_ORIGIN}/products?${queryParams.toString()}`);
    products = response.data;
  }

  if (sortProducts) {
    products.sort((a: Product, b: Product) => {
      return a.title.localeCompare(b.title);
    });
  }

  return products;
};

const AdminProductsPage: React.FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const currentPage = searchParams.page || "1";
  const tag = searchParams.tag as string;
  const category = searchParams.category as string;
  const sortProducts = searchParams.sort ? true : false;
  const search = searchParams.q as string;

  let isError: boolean = false;
  let products: Product[] = [];

  try {
    products = await getProductsData({
      page: currentPage as string,
      tag: tag as string,
      category: category as string,
      sort: sortProducts,
      q: search,
    });
  } catch (error) {
    isError = true;
  }

  if (isError) {
    return <div className="py-16">Error fetching products</div>;
  }
  // if (!products) {
  //   return <div className="py-16">No Product Found</div>;
  // }

  return (
    <section className="w-full space-y-6">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            Products
          </h1>
        </div>
      </div>
      <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
        <ProductsTab />
      </div>
      {/* products */}
      {search && (
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              Search results for &quot;{search}&quot;
            </h2>
            <a
              href="/products"
              className="text-blue-500 hover:underline font-medium"
            >
              Return to All Products
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
              Clear Filter
            </a>
          </div>
        </div>
      )}
      <div className="w-auto mx-auto px-3 sm:px-6 lg:px-8 xl:px-16">
        <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products ? (
            products.map((product: Product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.images[0]}
                views={product.views}
                // onLikeToggle={handleLikeToggle}
                // onSaveToggle={handleSaveToggle}
              />
            ))
          ) : (
            <div className="">No Product Found</div>
          )}
        </div>
      </div>

      {products && <PaginationComp />}
    </section>
  );
};

export default AdminProductsPage;
