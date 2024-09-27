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
      <div className="absolute inset-0 z-0 bg-black bg-opacity-60 rounded-xl" />
      <div className="relative z-20 flex flex-col items-center justify-center text-white text-center md:text-left p-2 sm:p-6 md:px-20 y-full">
        <div className="w-full text-center md:text-left py-6">
          <h1 className="text-h3 font-h3_bold py-2">{t("features")}</h1>
          <h1 className="text-h2 font-h3_bold py-2">{t("features_title")}</h1>
        </div>
        <div className="flex flex-col md:flex-row space-x-4 space-y-4">
          <div className="flex text-left text-white mr-2">
            <div className="flex items-center justify-center">
              <Image
                src={"/svgs/iconic.svg"}
                alt="icon"
                width={250}
                height={250}
              />
            </div>
            <div>
              <h2 className="text-h3 font-bold mb-2">
                Craftsmanship & Quality
              </h2>
              <p className="text-h4">
                Our furniture is crafted by skilled artisans who uphold the
                finest Arabian traditions, ensuring each piece is a work of art
                that will last for generations.
              </p>
            </div>
          </div>

          <div className="flex text-left text-white mr-2">
            <div className="flex items-center justify-center">
              <Image
                src={"/svgs/iconic.svg"}
                alt="icon"
                width={250}
                height={250}
              />
            </div>
            <div>
              <h2 className="text-h3 font-bold mb-2">
                Craftsmanship & Quality
              </h2>
              <p className="text-h4">
                Our furniture is crafted by skilled artisans who uphold the
                finest Arabian traditions, ensuring each piece is a work of art
                that will last for generations.
              </p>
            </div>
          </div>

          <div className="flex text-left text-white">
            <div className="flex items-center justify-center mr-2">
              <Image
                src={"/svgs/iconic.svg"}
                alt="icon"
                width={250}
                height={250}
              />
            </div>
            <div>
              <h2 className="text-h3 font-bold mb-2">
                Craftsmanship & Quality
              </h2>
              <p className="text-h4">
                Our furniture is crafted by skilled artisans who uphold the
                finest Arabian traditions, ensuring each piece is a work of art
                that will last for generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
