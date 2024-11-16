import { FaTelegramPlane } from "react-icons/fa";
import initTranslations from "@/app/i18n";
// import Slider from "@/components/products/Slider";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import Image from "next/image";

const Shops = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ["shops"]);

  return (
    <div className="w-full space-y-16 h-full font-latoRegular">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal font-playfair">
            {t("shops")}
          </h1>
        </div>
      </div>

      {/* betel shop */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-start p-2 lg:w-1/2  bg-white  ">
          <div className="w-full h-full border border-1 border-primary p-8 md:px-24">
            <h1 className="text-3xl lg:text-5xl mb-6 font-playfair">
              {t("betel_show_room")}
            </h1>
            <h2 className="text-lg mb-6">{t("betel_headline")}</h2>
            <p className=" mb-6">{t("content1")}</p>
            <p className=" mb-6">{t("content2")}</p>
            <div className="mb-6 flex">
              <MdOutlineLocationOn fontSize={30} className="mr-2" />
              <p className="">{t("betel_address")}</p>
            </div>
            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <a
                rel="noopener noreferrer"
                href="https://t.me/Abduselam_MC"
                className="text-blue-500 hover:underline"
              >
                <div className="flex ">
                  <FaTelegramPlane fontSize={30} className="mr-2" />
                  <h1>{t("send_message")}</h1>
                </div>
              </a>
              <span className="">|</span>
              <a
                href="tel:+251910583763"
                className="text-blue-500 hover:underline"
              >
                +251 910583763
              </a>
            </div>
            <a
              href="https://www.google.com/maps/place/Abduselam+Curtain,+Mejlis+%26+Furniture/@9.0026448,38.6942005,3219m/data=!3m1!1e3!4m6!3m5!1s0x164b87153a980967:0x8a391b9f99b47bc3!8m2!3d9.0026448!4d38.6942005!16s%2Fg%2F11lnprb6xb?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex px-6 py-4 w-full max-w-md text-black rounded-full font-semibold border-2 border-black/50 bg-transparent hover:bg-primary hover:text-white transition duration-300 font-lato items-center">
                <h1 className="flex-grow text-center">
                  {t("google_map_location")}
                </h1>
                <FaMap fontSize={30} />
              </div>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 bg-cover bg-center relative">
          <Image src="/betel-shop-3.jpg" alt="Showroom Display" fill />
        </div>
      </div>

      {/* merkato show room */}
      {/* betel shop */}
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Section */}
        <div className="lg:w-1/2 bg-cover bg-center relative">
          <Image src="/betel-shop-3.jpg" alt="Showroom Display" fill />
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center items-start p-2 lg:w-1/2  bg-white  ">
          <div className="w-full h-full border border-1 border-primary p-8 md:px-24">
            <h1 className="text-3xl lg:text-5xl mb-6 font-playfair">
              {t("merkato_show_room")}
            </h1>
            <h2 className="text-lg mb-6">{t("merkato_headline")}</h2>
            <p className=" mb-6">{t("content1")}</p>
            <p className=" mb-6">{t("content2")}</p>
            <div className="mb-6 flex">
              <MdOutlineLocationOn fontSize={30} className="mr-2" />
              <p className="">{t("merkato_address")}</p>
            </div>
            <div className="flex flex-wrap items-center space-x-4 mb-6">
              <a
                rel="noopener noreferrer"
                href="https://t.me/Abduselam_MC"
                className="text-blue-500 hover:underline"
              >
                <div className="flex ">
                  <FaTelegramPlane fontSize={30} className="mr-2" />
                  <h1>{t("send_message")}</h1>
                </div>
              </a>
              <span className="">|</span>
              <a
                href="tel:+251910583763"
                className="text-blue-500 hover:underline"
              >
                +251 910583763
              </a>
            </div>
            <a
              href="https://www.google.com/maps/place/Abduselam+Curtain,+Mejlis+%26+Furniture+-+Merkato+Branch/@9.0313489,38.7367831,805m/data=!3m2!1e3!4b1!4m6!3m5!1s0x164b85007e971d61:0x90e682fe05e77cf6!8m2!3d9.0313436!4d38.7393634!16s%2Fg%2F11wpp4j2qd?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex px-6 py-4 w-full max-w-md text-black rounded-full font-semibold border-2 border-black/50 bg-transparent hover:bg-primary hover:text-white transition duration-300 font-lato items-center">
                <h1 className="flex-grow text-center">
                  {t("google_map_location")}
                </h1>
                <FaMap fontSize={30} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
