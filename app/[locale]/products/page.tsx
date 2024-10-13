import ProductCard from "@/components/products/ProductCard";
import PaginationComp from "@/components/products/Pagination";
import { Product } from "@/types/productType";
import ProductsTab from "@/components/products/ProductsTab";
import { FetchFunction } from "@/api/FetchFunction";
import initTranslations from "@/app/i18n";

export const fetchCache = "force-no-store";

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

  if (sortProducts) {
    products.sort((a: Product, b: Product) => {
      return a.title.localeCompare(b.title);
    });
  }

  return { products, totalProducts };
};

const ProductList: React.FC<{
  searchParams: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}> = async ({ searchParams, params: { locale } }) => {
  const { t } = await initTranslations(locale, ["products"]);
  const currentPage = searchParams.page || "1";
  const tag = searchParams.tag as string;
  const category = searchParams.category as string;
  const sortProducts = searchParams.sort ? true : false;
  const search = searchParams.q as string;

  let isError: boolean = false;
  let products: Product[] = [];
  let totalProducts: number = 0;

  try {
    const response = await getProductsData({
      page: currentPage as string,
      tag: tag as string,
      category: category as string,
      sort: sortProducts,
      q: search,
    });
    products = response.products;
    totalProducts = response.totalProducts;
  } catch (error) {
    isError = true;
  }

  if (isError) {
    return (
      <section className="w-full space-y-6">
        {/* banner */}
        <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
          <div className="relative w-full h-full z-10 flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-white text-center leading-normal">
              {t("header")}
            </h1>
          </div>
        </div>
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          <ProductsTab />
        </div>

        {(tag || category) && (
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
            <div className="flex justify-between items-center">
              <a
                href="/products"
                className="text-blue-500 hover:underline font-medium"
              >
                {t("clear_filter")}
              </a>
            </div>
          </div>
        )}
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          {t("fetching_error")}
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="w-full space-y-6">
        {/* banner */}
        <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
          <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
          <div className="relative w-full h-full z-10 flex justify-center items-center">
            <h1 className="text-5xl font-semibold text-white text-center leading-normal">
              {t("header")}
            </h1>
          </div>
        </div>
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          <ProductsTab />
        </div>
        {(tag || category) && (
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
            <div className="flex justify-between items-center">
              <a
                href="/products"
                className="text-blue-500 hover:underline font-medium"
              >
                {t("clear_filter")}
              </a>
            </div>
          </div>
        )}
        {search && (
          <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                {t("search")} &quot;{search}&quot;
              </h2>
              <a
                href="/products"
                className="text-blue-500 hover:underline font-medium"
              >
                {t("all_products")}
              </a>
            </div>
          </div>
        )}
        <div className="w-full px-2 sm:px-4 lg:px-8 xl:px-16">
          {t("no_products")}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full space-y-6">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            {t("header")}
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
              {t("search")} &quot;{search}&quot;
            </h2>
            <a
              href="/products"
              className="text-blue-500 hover:underline font-medium"
            >
              {t("all_products")}
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
              {t("clear_filter")}
            </a>
          </div>
        </div>
      )}
      <div className="w-auto mx-auto px-3 sm:px-6 lg:px-8 xl:px-16">
        <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products &&
            products.map((product: Product) => (
              <ProductCard
                params={{ locale: locale }}
                key={product.id}
                id={product.id}
                title={product.title}
                title_am={product.title_am}
                description={product.description}
                description_am={product.description_am}
                image={product.images[0]}
                views={product.views}
                likes={product.likes}
              />
            ))}
        </div>
      </div>

      {products && <PaginationComp pages={Math.ceil(totalProducts / 10)} />}
    </section>
  );
};

export default ProductList;
