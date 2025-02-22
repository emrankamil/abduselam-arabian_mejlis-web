"use client";

import React, { useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/global/LoadingSpinner";
import { Session } from "@/types/sessionType";

const AddProduct = () => {
  const router = useRouter();

  const [images, setImages] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<"loading" | "authenticated">("loading");
  const [isLoading, setIsLoading] = useState(true);

  const [product, setProduct] = useState({
    title: "",
    title_am: "",
    description: "",
    description_am: "",
    long_description: "",
    long_description_am: "",
    category: "",
    features: [""],
    features_am: [""],
    tags: [""],
  });

  useEffect(() => {
    async function fetchSession() {
      const response = await fetch("/api/session");
      const data = await response.json();
      setSession(data.session);
      setStatus("authenticated");
    }

    fetchSession();
  }, []);

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.User_type !== "ADMIN") {
      router.push("/account");
    } else {
      setIsLoading(false);
    }
  }, [session, status, router]);

  const handleCloseOverlay = () => {
    setIsSuccess(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setImages(filesArray);
    }
  };

  const handleProductChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    // Check word count for short description (English)
    if (name === "description" || name === "description_am") {
      const wordCount = Math.max(
        product.description.trim().split(/\s+/).length,
        product.description_am.trim().split(/\s+/).length
      );
      if (wordCount > 10) {
        setError("Short description must be 10 words or less.");
      } else {
        setError(""); // Clear error if within limit
      }
    }
  };

  const handleArrayChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    const { value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value.split("/").map((item) => item.trim()),
    }));
  };

  const handleOnImageSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    setIsImageLoading(true); // Start loading

    let urls: string[] = []; // Initialize an empty array to store image URLs

    // Map over the images and call Cloudinary for each image
    const uploadPromises = images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "my-uploads");

      // Make the API call to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setIsImageLoading(false); // Stop loading

      return data.secure_url; // Return the URL of the uploaded image
    });

    // Wait for all uploadPromises to resolve and collect all the image URLs
    urls = await Promise.all(uploadPromises);

    // Set the uploaded URLs to the state
    setUploadedUrls(urls);

    //console.log("Uploaded URLs:", urls);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check that uploadedUrls has data before submitting product information
    if (uploadedUrls.length === 0) {
      alert("Image upload failed. Please try again.");
      return;
    }

    const wordCount = Math.max(
      product.description.trim().split(/\s+/).length,
      product.description_am.trim().split(/\s+/).length
    );
    if (wordCount > 10) {
      setError("Short description must be 10 words or less.");
      return; // Prevent form submission if word limit exceeded
    }

    const productData = {
      ...product,
      images: uploadedUrls,
    };

    //console.log("Product Data:", productData);

    try {
      await fetch(`${process.env.NEXT_PUBLIC_ORIGIN}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
        cache: "no-store",
      });

      // If successful, show success message
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting product:", error);
    } finally {
      setIsFormLoading(false); // Hide loading overlay after request is done
    }
  };

  if (isLoading) {
    return (
      <div className="text-center m-10 w-[48px] h-[48px]">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative bg-[url('/products_hero.png')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            Add New Product
          </h1>
        </div>
      </div>
      {/* Breadcum */}

      <div className="flex text-gray-800 dark:text-gray-300 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-blue-500">
          <MdHome />
          <Link href="/account" className="mx-2">
            Account
          </Link>
        </div>
        {">"}
        <p className="mx-2">Add Product</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        {/* Form for product information */}
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <h3 className="text-primary text-xl font-semibold mb-4">
          Upload Product Information
        </h3>
        {/* image Upload form */}
        <div className="py-6">
          <label className="text-sm font-medium text-gray-700">
            Upload Images
          </label>

          <form onSubmit={handleOnImageSubmit} className="mt-2">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="block w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary mb-4"
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              Upload Selected Images
            </button>
          </form>

          {/* Display uploaded image URLs */}
          {isImageLoading ? (
            <div className="mt-4">
              <p className="text-primary">
                Loading... Uploading images, please wait.
              </p>
            </div>
          ) : (
            uploadedUrls.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Uploaded Images:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {uploadedUrls.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Uploaded ${index}`}
                      width={1000}
                      height={1000}
                      className="w-40 h-40 object-cover rounded-md shadow-sm"
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Overlay */}
        {/* Overlay */}
        {(isFormLoading || isSuccess) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <div className="relative w-3/4 max-w-3xl bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
              {isFormLoading && (
                <div className="text-center text-xl text-primary font-semibold">
                  Submitting... Please wait.
                </div>
              )}
              {isSuccess && (
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    Success!
                  </h3>
                  <p className="text-lg text-gray-700">
                    Your product has been successfully submitted.
                  </p>
                  <button
                    onClick={handleCloseOverlay}
                    className="mt-6 bg-primary text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition duration-300"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Product information form */}
        <form onSubmit={handleSubmit} className="flex flex-col  space-y-4 ">
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Product Title"
            value={product.title}
            onChange={handleProductChange}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Title (Amharic)
          </label>
          <input
            type="text"
            name="title_am"
            placeholder="Product Title (Amharic)"
            value={product.title_am}
            onChange={handleProductChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Short Description
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleProductChange}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Short Description (Amharic)
          </label>
          <textarea
            name="description_am"
            value={product.description_am}
            onChange={handleProductChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Complete Description
          </label>
          <textarea
            name="long_description"
            value={product.long_description}
            onChange={handleProductChange}
            required
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Complete Description (Amharic)
          </label>
          <textarea
            name="long_description_am"
            value={product.long_description_am}
            onChange={handleProductChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Features (slash-/ separated)
          </label>
          <textarea
            name="features"
            value={product.features.join("/ ")}
            onChange={(e) => handleArrayChange(e, "features")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">
            Features - Amharic (slash-/ separated)
          </label>
          <textarea
            name="features_am"
            value={product.features_am.join("/ ")}
            onChange={(e) => handleArrayChange(e, "features_am")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleProductChange}
            required
            className="p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="sofa">Sofa</option>
            <option value="arabian_mejlis">Arabian Mejlis</option>
            <option value="curtain">Curtain</option>
            <option value="tv_stand">Tv Stand</option>
            <option value="bed">Bed</option>
          </select>

          <label className="text-sm font-medium text-gray-700">
            Tags (slash-/ separated)
          </label>
          <input
            type="text"
            value={product.tags.join("/ ")}
            onChange={(e) => handleArrayChange(e, "tags")}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-primary text-white py-2 rounded-md mt-4 hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
