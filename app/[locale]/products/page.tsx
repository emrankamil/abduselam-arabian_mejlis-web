import ProductCard from "@/components/products/ProductCard";
import PaginationComp from "@/components/products/Pagination";
import { Product } from "@/types/productType";
import ProductsTab from "@/components/products/ProductsTab";

const ProductList: React.FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const currentPage = searchParams.page || 1;
  const tag = searchParams.tag;
  const category = searchParams.category;
  const sortProducts = searchParams.sort;
  const search = searchParams.search;

  let isError: boolean = false;
  let products: Product[];

  const queryParams = new URLSearchParams();
  if (category) queryParams.append("category", category as string);
  if (tag) queryParams.append("tag", tag as string);
  queryParams.append("page", currentPage as string);
  queryParams.append("page_size", "10");

  if (search) {
    console.log(
      `${process.env.NEXT_PUBLIC_ORIGIN}/products/search?q=${search}`
    );

    products = await fetch(
      `${process.env.NEXT_PUBLIC_ORIGIN}/products/search?q=${search}`
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response.body);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        isError = true;
        console.error("Error fetching products:", error);
      });
  } else {
    products = await fetch(
      `${process.env.NEXT_PUBLIC_ORIGIN}/products?${queryParams.toString()}`
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response.body);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        return data.data;
      })
      .catch((error) => {
        isError = true;
        console.error("Error fetching products:", error);
      });
  }
  const pages = products ? Math.ceil(products.length / 10) : 0;

  if (sortProducts === "true") {
    products.sort((a: Product, b: Product) => {
      return a.title.localeCompare(b.title);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleLikeToggle = (id: string) => {
    // const updatedProducts = products.map((product:Product) => {
    //   if (product.id === id) {
    //     // Toggle the like status
    //     const updatedProduct = { ...product, liked: !product.liked };
    //     // Make an API call to update the like status in the backend
    //     fetch(`/api/products/${id}/like`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ liked: updatedProduct.liked }),
    //     });
    //     return updatedProduct;
    //   }
    //   return product;
    // });
    // setProducts(updatedProducts);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSaveToggle = (id: string) => {
    // const updatedProducts = products.map((product) => {
    //   if (product.id === id) {
    //     // Toggle the save status
    //     const updatedProduct = { ...product, saved: !product.saved };
    //     // Make an API call to update the save status in the backend
    //     // fetch(`/api/products/${id}/save`, {
    //     //   method: 'POST',
    //     //   headers: {
    //     //     'Content-Type': 'application/json',
    //     //   },
    //     //   body: JSON.stringify({ saved: updatedProduct.saved }),
    //     // });
    //     return updatedProduct;
    //   }
    //   return product;
    // });
    // setProducts(updatedProducts);
  };

  if (isError) {
    return <div className="py-16">Error fetching products</div>;
  }
  // if (!products) {
  //   return <div className="py-16">No Product Found</div>;
  // }

  return (
    <section className="w-full space-y-6">
      {/* banner */}
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[190px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl text-white text-center leading-normal">
            Our Products
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
      <div className="w-auto mx-auto">
        <div className="pb-16 px-2 sm:px-4 lg:px-8 xl:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {products && <PaginationComp pages={pages} />}
    </section>
  );
};

export default ProductList;
