"use client";

import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <footer className="relative h-[70vh] w-full px-16 overflow-hidden bg-black text-white bg-[url('/footer_bg.jpg')] bg-center bg-cover space-y-6">
      <div className="absolute inset-0 bg-black bg-opacity-70 rounded-xl" />
      {/* Footer content */}
      <div className="relative h-fit flex justify-between items-top">
        {/* Call us now */}
        <div className="w-1/3 px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">Call us now</h3>
          <p className="mb-2">Office telephone: 090909090909</p>
          <p>Office telephone: 090909090909</p>
        </div>

        {/* Visit us */}
        <div className="w-1/3  px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">Come visit us</h3>
          <p>Betel, Addis Ababa</p>
          <p>Merkato, Addis Ababa</p>
        </div>

        {/* Send a message */}
        <div className="w-1/3  px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">Send a message</h3>
          <p>Email: abduselam@gmail.com</p>
          <p>Inquiries: support@chaos.com</p>
        </div>
      </div>

      {/* Footer middle */}
      <div className="relative h-fit flex justify-between items-top ">
        <div className="w-1/3 pr-10">
          <div className="flex mt-6 space-x-4 justify-left text-left items-left">
            <div className="">
              <Image
                src="/white-logo.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <p className="">
              We specialize in crafting luxurious Arabian-inspired furniture and
              decor. With a commitment to quality and authenticity.
            </p>
          </div>

          <div className="mt-6 flex space-x-4 px-10">
            <a href="#" aria-label="Facebook">
              <FaSquareFacebook fontSize={40} />
            </a>
            <a href="#" aria-label="Instagram">
              <AiFillInstagram fontSize={40} />
            </a>
            <a href="#" aria-label="TikTok">
              <AiFillTikTok fontSize={40} />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegram fontSize={40} />
            </a>
          </div>
        </div>

        {/* work hours */}
        <div className="w-1/3 text-left px-10">
          <h4 className="my-6 font-semibold">Hours work</h4>
          <p>Monday to Friday: 08:00 AM - 17:00 PM</p>
          <p>Saturday: 08:00 AM - 12:00 PM</p>
        </div>

        {/* subscribe */}
        <div className="w-1/3 space-y-4 px-8 text-left">
          <button
            className={`mt-8 font-semibold px-4 py-2 rounded-3xl ${
              isFocused
                ? "border border-white bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            Subscribe now
          </button>
          <div className="mt-4 flex justify-center items-center">
            <Input
              type="email"
              placeholder="enter your email"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="px-4 py-2 bg-transparent border-b border-white rounded-3xl focus-visible:ring-transparent"
            />
          </div>
          <p className="mt-2 text-xs">DON'T WORRY, WE DON'T SEND YOU SPAM.</p>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="absolute flex justify-between items-center bottom-0 left-0 w-full text-center py-4 bg-black bg-opacity-50 text-sm">
        <p className="px-24">EMEX TEMPLATE©ALL RIGHTS RESERVED - 2016</p>
        <div className="mt-2 space-x-4 px-24">
          <Link href="#" className="hover:underline">
            HOME
          </Link>
          <Link href="#" className="hover:underline">
            PRODUCTS
          </Link>
          <Link href="#" className="hover:underline">
            ABOUT
          </Link>
          <Link href="#" className="hover:underline">
            CONTACT US
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
