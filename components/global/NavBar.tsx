"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import LanguageChanger from "./LanguageChanger";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import { LiaUser } from "react-icons/lia";
import { Button } from "../ui/button";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [top, setTop] = useState(0);
  const [backgroundTransparent, setBackgroundTransparent] = useState(true);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // Close the mobile menu when the screen size changes to a larger breakpoint
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbarHeight = 90;

      if (currentScrollPos > navbarHeight) {
        // Apply scroll logic only after scrolling past the navbar height
        if (prevScrollpos > currentScrollPos) {
          setTop(0); // Show navbar
        } else {
          setTop(-70); // Hide navbar
        }
      } else {
        setTop(0); // Keep navbar visible at the top
        setBackgroundTransparent(true); // Set navbar background to transparent
      }

      // Change background to solid color once you scroll past navbar height
      if (currentScrollPos > navbarHeight || isMobileMenuOpen) {
        setBackgroundTransparent(false);
      }

      setPrevScrollpos(currentScrollPos);
    };

    const checkInitialScroll = () => {
      const currentScrollPos = window.scrollY;
      const navbarHeight = 90;

      if (currentScrollPos > navbarHeight) {
        setBackgroundTransparent(false);
      }
    };

    checkInitialScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos, isMobileMenuOpen]);

  const { t } = useTranslation();
  return (
    <div
      className="navbar"
      style={{
        top: `${top}px`,
        backgroundColor: backgroundTransparent ? "transparent" : "white",
        color: backgroundTransparent ? "white" : "black",
        borderBottom: backgroundTransparent
          ? "2px solid rgba(128, 128, 128, 0.2)"
          : "none",
      }}
    >
      <div className="relative flex h-16 items-center justify-between">
        <div className={isMobileMenuOpen ? "" : "sm:hidden"}>
          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 "
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              // Icon when menu is open
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Icon when menu is closed
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links and Logo */}
        <div className="flex items-center justify-between w-full">
          <div className="block sm:ml-6 sm:hidden"></div>
          <div className="px-2">
            <Link href="/" className="flex">
              <Image
                src={
                  backgroundTransparent ? "/white-logo.png" : "/gray-logo.png"
                }
                alt={"logo"}
                width="50"
                height="50"
              />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-16">
              <Button
                variant="link"
                onClick={() => (window.location.href = "/")}
                className=" px-1 py-2 text-lg text-white"
              >
                {t("common:home")}
              </Button>
              <Button
                variant="link"
                onClick={() => (window.location.href = "/products")}
                className=" px-1 py-2 text-lg text-white"
              >
                {t("common:products")}
              </Button>
              <Button
                variant="link"
                onClick={() => (window.location.href = "/contact_us")}
                className=" px-1 py-2 text-lg text-white"
              >
                {t("common:contact_us")}
              </Button>
              <Button
                variant="link"
                onClick={() => (window.location.href = "/about_us")}
                className=" px-1 py-2 text-lg text-white"
              >
                {t("common:about_us")}
              </Button>
              {/* <Link href="/products" className=" px-1 py-2 text-lg">
                {t("common:products")}
              </Link> */}
            </div>
          </div>

          <div className="flex items-center px-2 space-x-4 ">
            <Button
              variant="link"
              onClick={() => (window.location.href = "/account")}
              className=" px-1 py-2 hidden sm:block text-white"
            >
              <LiaUser fontSize={27} fontWeight={400} />
            </Button>
            <Button
              variant="link"
              onClick={() => (window.location.href = "/shops")}
              className=" px-1 py-2 hidden sm:block text-white"
            >
              <MdOutlineLocationOn fontSize={23} />
            </Button>
            {/* <Link href={"/account"} className="hidden sm:block">
              <LiaUser fontSize={27} fontWeight={400} />
            </Link> */}
            <LanguageChanger />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "" : "hidden"
        } sm:hidden max-w-full text-center`}
        id="mobile-menu"
      >
        <div className="space-y-1 pb-3 pt-2">
          <Button
            variant="link"
            onClick={() => (window.location.href = "/")}
            className="w-full px-3 py-2 text-base"
          >
            {t("common:home")}
          </Button>

          {/* <Link href="/" className=" block px-3 py-2 text-base">
            {t("common:home")}
          </Link> */}
          <Button
            variant="link"
            onClick={() => (window.location.href = "/products")}
            className="w-full px-3 py-2 text-base"
          >
            {t("common:products")}
          </Button>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/contact_us")}
            className="w-full px-3 py-2 text-base"
          >
            {t("common:contact_us")}
          </Button>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/about_us")}
            className="w-full px-3 py-2 text-base"
          >
            {t("common:about_us")}
          </Button>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/shops")}
            className="w-full px-3 py-2 text-base flex items-center justify-center"
          >
            <MdOutlineLocationOn fontSize={23} />
            Our Shops
          </Button>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/account")}
            className="w-full px-3 py-2 text-base flex items-center justify-center"
          >
            <LiaUser fontSize={27} fontWeight={400} /> Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
