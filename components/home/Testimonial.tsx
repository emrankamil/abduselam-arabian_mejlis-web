import { testimonials } from "@/data/testimonial";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="bg-white py-10 md:py-16 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What our Customers Say
        </h2>
        <p className="mt-4 text-lg text-gray-500">1K+ Happy Customers</p>
        <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-background border border-primary text-primary rounded-full py-2 px-4 flex text-left items-center space-x-4 ${
                index == 3 || index == 4 || index == 5
                  ? "lg:relative lg:left-4"
                  : ""
              } ${
                index == 2 || index == 3
                  ? "md:relative md:left-4 lg:left-0"
                  : ""
              }`}
            >
              <Image
                className="w-16 h-16 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
              />
              <div>
                <p className="text-sm">
                  {testimonial.message}-{testimonial.username}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a
            href="https://t.me/abdeselammejlismegarja"
            className="text-indigo-600 font-medium"
          >
            Hear more from our 30K+ Families
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
