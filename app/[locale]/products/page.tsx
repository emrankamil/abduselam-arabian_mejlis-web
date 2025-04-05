// app/products/page.tsx

import ProductList from "@/components/products/productList";

interface ProductPageProps {
  searchParams: {
    category?: string;
    page?: string;
    tag?: string;
    q?: string;
    sort?: string;
  };
}

export default function ProductPage({ searchParams }: ProductPageProps) {
  // Extract parameters with default values
  const category = searchParams.category || "";
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const tag = searchParams.tag || "";
  const search = searchParams.q || "";

  return (
    <ProductList category={category} page={page} tag={tag} search={search} />
  );
}
