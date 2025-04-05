import { FetchFunction } from "@/api/FetchFunction";
import { Product } from "@/types/productType";

export const getProductsData = async (searchParams: {
  page: string;
  tag?: string;
  category?: string;
  q?: string;
}) => {
  const currentPage = searchParams.page;
  const tag = searchParams.tag;
  const category = searchParams.category;
  const search = searchParams.q;

  let products: Product[] = [];
  let totalProducts: number = 0;

  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category);
  if (tag) queryParams.append("tag", tag);
  queryParams.append("page", currentPage);
  queryParams.append("page_size", "10");

  if (search) {
    const response = await FetchFunction<{
      success: boolean;
      data: Product[];
    }>(
      `${process.env.NEXT_PUBLIC_ORIGIN}/products/search?q=${search as string}`
    );
    if (response.success) {
      products = response.data;
      totalProducts = response.data.length;
    }
  } else {
    const response = await FetchFunction<{
      success: boolean;
      data: Product[];
      total_count: number;
    }>(`${process.env.NEXT_PUBLIC_ORIGIN}/products?${queryParams.toString()}`);
    if (response.success) {
      products = response.data;
      totalProducts = response.total_count;
    }
  }

  return { products, totalProducts };
};
