import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="w-full space-y-16 h-full font-latoRegular">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal font-playfair">
            Admin Dashboard
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center  font-latoRegular">
        <Link
          className=" w-64 px-6 py-3 text-lg text-white bg-primary rounded-md shadow-lg hover:bg-primary/90 transition duration-300 mb-4 text-center"
          href="/dashboard/add-product"
        >
          Add Product
        </Link>

        <Link
          className=" w-64 px-6 py-3 text-lg text-white bg-primary rounded-md shadow-lg hover:bg-primary/90 transition duration-300 mb-4 text-center"
          href="/dashboard/all-products"
        >
          See All Products
        </Link>
        <Link
          className=" w-64 px-6 py-3 text-lg text-white bg-primary rounded-md shadow-lg hover:bg-primary/90 transition duration-300 mb-4 text-center"
          href="/dashboard/chat"
        >
          Chat
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
