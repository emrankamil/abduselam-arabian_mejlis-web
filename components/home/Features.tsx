import initTranslations from "@/app/i18n";
import Image from "next/image";
import React from "react";

export default async function Features({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ["home"]);

  return (
    <div className="relative h-fit bg-[url('/arabic_board.png')] bg-cover py-6">
      <div className="absolute inset-0 z-0 bg-black bg-opacity-40" />
      <div className="relative z-20 flex flex-col items-center justify-center text-white text-center md:text-left px-2 md:px-4 lg:px-20 y-full">
        <div className="w-full text-center md:text-left py-6">
          <h1 className="text-h3 font-h3_bold py-2">{t("features")}</h1>
          <h1 className="text-h2 font-h3_bold py-2">{t("features_title")}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 space-x-2 lg:space-x-4 space-y-4">
          <div className="text-white py-6 px-4 lg:px-6 flex items-center space-x-4">
            {/* Icon */}
            <Image
              src="/svgs/iconic.svg"
              alt="Craftsmanship Icon"
              className="w-16 h-16"
              width={1000}
              height={1000}
            />

            {/* Text Section */}
            <div>
              <h2 className="text-xl font-bold">{t("feature1_title")}</h2>
              <p className="mt-2 font-latoRegular">
                {t("feature1_description")}
              </p>
            </div>
          </div>

          <div className="text-white py-6 px-4 lg:px-6 flex items-center space-x-4">
            {/* Icon */}
            <Image
              src="/svgs/iconic.svg"
              alt="Craftsmanship Icon"
              className="w-16 h-16"
              width={1000}
              height={1000}
            />

            {/* Text Section */}
            <div>
              <h2 className="text-xl font-bold">{t("feature2_title")}</h2>
              <p className="mt-2 font-latoRegular">
                {t("feature2_description")}
              </p>
            </div>
          </div>

          <div className="text-white py-6 px-4 lg:px-6 flex items-center space-x-4">
            {/* Icon */}
            <Image
              src="/svgs/iconic.svg"
              alt="Craftsmanship Icon"
              className="w-16 h-16"
              width={1000}
              height={1000}
            />

            {/* Text Section */}
            <div>
              <h2 className="text-xl font-bold">{t("feature3_title")}</h2>
              <p className="mt-2 font-latoRegular">
                {t("feature3_description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
