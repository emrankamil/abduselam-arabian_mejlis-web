"use client";

import Image from "next/image";
import { FaSquareFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [isFocused, setIsFocused] = useState(false);
  const { t } = useTranslation();

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white bg-[url('/footer_bg.png')] bg-center bg-cover space-y-6">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(4,7,16,0.8)] to-[#0F0F0F] bg-opacity-70" />
      {/* Footer content */}
      <div className="relative h-fit px-6 md:px-16 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {/* Call us now */}
        <div className="px-2 md:px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">{t("common:call_us")}</h3>
          <p className="mb-2">
            {t("common:office_tel")}:{" "}
            <a href="tel:+251910583763" className="hover:underline">
              0910583763
            </a>
          </p>
          <p>
            {t("common:whatsapp_num")}:{" "}
            <a href="tel:+251911822034" className="hover:underline">
              0911822034
            </a>
          </p>
        </div>

        {/* Visit us */}
        <div className="px-2 md:px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">
            {t("common:come_visit_us")}
          </h3>
          <p>{t("common:betel")}</p>
          <p>{t("common:merkato")}</p>
        </div>

        {/* Send a message */}
        <div className="px-2 md:px-10 text-left">
          <h3 className="text-xl font-semibold mb-4">
            {t("common:send_message")}
          </h3>
          <p>
            {t("common:email")}:{" "}
            <a href="mailto:abduselam.mc@gmail.com" className="hover:underline">
              abduselam.mc@gmail.com
            </a>
          </p>
          <p>
            {t("common:inquiries")}:{" "}
            <a href="mailto:abduselam.mc@gmail.com" className="hover:underline">
              abduselam.mc@gmail.com
            </a>
          </p>
        </div>

        <div className="pr-2 md:pr-10">
          <div className="flex mt-6 space-x-4 justify-left text-left items-left">
            <div className="">
              <Image
                src="/white-logo.png"
                alt="Logo"
                width={200}
                height={200}
              />
            </div>
            <p className="">{t("common:footer_text")}</p>
          </div>
        </div>

        {/* work hours */}
        <div className=" text-left px-2 md:px-10">
          <h4 className="my-6 font-semibold">{t("common:work_hours")}</h4>
          <p>{t("common:mon_to_fri")}</p>
          <p>{t("common:sat")}</p>
        </div>

        {/* subscribe */}
        <div className=" space-y-4 px-2 md:px-8 text-left">
          <button
            className={`mt-8 font-semibold px-4 py-2 rounded-3xl ${
              isFocused
                ? "border border-white bg-white text-black"
                : "bg-transparent text-white"
            }`}
          >
            {t("common:subscribe_now")}
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
          <p className="mt-2 text-xs">
            DON&apos;T WORRY, WE DON&apos;T SEND YOU SPAM.
          </p>
        </div>
      </div>
      <div className="relative px-6 md:px-16 mt-6 flex space-x-4 px-10">
        <a
          href="https://www.facebook.com/AbduselamMC?mibextid=2JQ9oc"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareFacebook fontSize={40} />
        </a>
        <a
          href="https://instagram.com/abduselam.mc"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillInstagram fontSize={40} />
        </a>
        <a
          href="tiktok.com/@abduselam_mc"
          aria-label="TikTok"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTikTok fontSize={40} />
        </a>
        <a
          href="https://t.me/Abduselam_MC"
          aria-label="Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram fontSize={40} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center w-full text-center py-4 bg-black bg-opacity-50 text-sm">
        <p className=" whitespace-nowrap sm:ml-6 md:ml-16">
          Bitz Software Design and Development©ALL RIGHTS RESERVED -{" "}
          {new Date().getFullYear()}
        </p>
        <div className="mt-2 md:mt-0 space-x-4 flex-nowrap sm:mr-6 md:mr-16">
          <Link href="/" className="hover:underline">
            {t("common:home")}
          </Link>
          <Link href="/products" className="hover:underline">
            {t("common:products")}
          </Link>
          <Link href="/abou" className="hover:underline">
            {t("common:about_us")}
          </Link>
          <Link href="/contact_us" className="hover:underline">
            {t("common:contact_us")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
