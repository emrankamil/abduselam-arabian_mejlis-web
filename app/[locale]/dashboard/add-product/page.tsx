"use client";

import React from "react";
import { MdAdd } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlineSaveAs } from "react-icons/md";
import { MdHome } from "react-icons/md";

import { Card, CardContent } from "@/components/ui/card";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import Link from "next/link";

const FormTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mb-3 text-sm font-semibold text-gray-600 dark:text-gray-300">
      {children}
    </h2>
  );
};

const AddProduct = () => {
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
      <div className="flex text-gray-800 dark:text-gray-300">
        <div className="flex items-center text-purple-600">
          <MdHome />
          <Link href="/dashboard" className="mx-2">
            Dashboard
          </Link>
        </div>
        {">"}
        <p className="mx-2">Add new Product</p>
      </div>

      <div className="w-full mt-8 grid gap-4 grid-col md:grid-cols-3 ">
        <Card className="row-span-2 md:col-span-2">
          <CardContent>
            <FormTitle>Product Image</FormTitle>
            <input
              type="file"
              className="mb-4 text-gray-800 dark:text-gray-300"
            />

            <FormTitle>Product Name</FormTitle>
            <Label>
              <Input className="mb-4" placeholder="Type product name here" />
            </Label>

            <FormTitle>Product Price</FormTitle>
            <Label>
              <Input className="mb-4" placeholder="Enter product price here" />
            </Label>

            <FormTitle>Short description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows={3}
                placeholder="Enter product short description here"
              />
            </Label>

            <FormTitle>Stock Qunatity</FormTitle>
            <Label>
              <Input
                className="mb-4"
                placeholder="Enter product stock quantity"
              />
            </Label>

            <FormTitle>Full description</FormTitle>
            <Label>
              <Textarea
                className="mb-4"
                rows={5}
                placeholder="Enter product full description here"
              />
            </Label>

            <div className="w-full">
              <Button size="lg" className="flex">
                <MdAdd className="mr-2" />
                Add Product
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="h-48">
          <CardContent>
            <div className="flex mb-8">
              <Button className="flex">
                <MdOutlinePlaylistAdd className="mr-2" />
                Publish
              </Button>
              <Button className="flex">
                <MdOutlineSaveAs className="mr-2" />
                Save as Draft
              </Button>
            </div>
            <Label className="mt-4">
              <FormTitle>Select Product Category</FormTitle>
              <Select>
                <option>Arabian Mejlis</option>
                <option>Sofa</option>
                <option>Bed</option>
                <option>Curtain</option>
                <option>Tv Stand</option>
              </Select>
            </Label>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddProduct;
