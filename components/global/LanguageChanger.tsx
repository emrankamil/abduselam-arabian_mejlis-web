"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [showOptions, setShowOptions] = useState(false); // To toggle display on hover

  const handleChange = (newLocale: string) => {
    // Set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // Redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div
      className="relative h-full font-latoRegular"
      onMouseEnter={() => setShowOptions(true)}
      onMouseLeave={() => setShowOptions(false)}
      onClick={() => setShowOptions(!showOptions)}
    >
      {/* The current language button with flag */}
      <div className="flex items-center cursor-pointer">
        {currentLocale === "en" ? (
          <>
            <span role="img" aria-label="UK flag" className="px-1">
              <BiWorld />
            </span>{" "}
            English
          </>
        ) : (
          <>
            <span role="img" aria-label="Ethiopian flag" className="px-1">
              <BiWorld />
            </span>{" "}
            አማርኛ
          </>
        )}
      </div>

      {/* Show options only on hover */}
      {showOptions && (
        <div className="absolute top-full right-1 -mt-1 bg-transparent w-36 py-2 text-primary">
          <ul>
            {currentLocale === "en" ? (
              <li
                onClick={() => handleChange("am")}
                className="flex items-center justify-center cursor-pointer p-2 bg-white text-center"
              >
                <h1>አማርኛ</h1>
              </li>
            ) : (
              <li
                onClick={() => handleChange("en")}
                className="flex items-center justify-center cursor-pointer p-2 bg-white"
              >
                <span>English</span>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
