// import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { services, stats } from "@/data/aboutus";
import initTranslations from "@/app/i18n";
import Button from "@/components/global/Button";

const AboutUs = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ["about_us"]);

  return (
    <div className="w-full space-y-16 h-full font-latoRegular">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal font-playfair">
            {t("about_us")}
          </h1>
        </div>
      </div>

      {/* hero */}

      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug md:leading-tight text-center md:hidden sm:my-8">
        Creating Inspiring Products
        <br /> Discover Premier Furniture
        <br /> Design Experts
      </h1>
      <div className="flex flex-col md:flex-row px-4 sm:px-8 lg:px-24 gap-6 md:gap-12 h-auto md:h-[70vh]">
        {/* hero image */}

        <div className="relative w-full md:w-1/2 aspect-square">
          <Image
            src={"/about_us/about-us_image.png"}
            alt={"image"}
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* hero text */}
        <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
          <h1 className=" text-xs sm:text-sm md:text-lg hidden md:block">
            {t("about_company")}
          </h1>

          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-snug md:leading-tight hidden md:block">
            {t("title")}
          </h1>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            {t("detail")}
          </p>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Image
              src="/gray-logo.png"
              alt="logo"
              width={30}
              height={30}
              className="object-cover"
            />

            <div className="flex flex-col space-y-1 sm:space-y-2">
              {/* Three text points with icons */}
              <div className="flex items-center">
                <span className="font-light">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-xs sm:text-sm md:text-base">
                  {t("feature1")}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-light">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-xs sm:text-sm md:text-base">
                  {t("feature2")}
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-light">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-xs sm:text-sm md:text-base">
                  {t("feature3")}
                </p>
              </div>
            </div>
          </div>

          {/* Call Us Now button */}

          <Button size="medium">{t("lets_talk")}</Button>
        </div>
      </div>
      {/* features section */}
      {/* <div className="text-center py-8 px-2 md:px-12">
        <h2 className="text-2xl font-semibold font-playfair max-w-sm mx-auto">
          {t("features_title")}
        </h2>

        <div className="">
          <div className="flex justify-between w-full">
            <div>
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
            <div>
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="hidden md:block">
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
            <div className="w-auto h-96">
              <Image
                className="w-full h-full"
                src={"/about_us/sofa-imagesvg.png"}
                alt={""}
                width={1000}
                height={1000}
              />
            </div>

            <div className="hidden md:block">
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
            <div>
              <InfoCard
                title="Quality Craftmanship"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed "
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Services */}
      <div className="text-center py-8 px-2 md:px-12">
        <h2 className="text-2xl font-semibold font-playfair ">{t("offer")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-64 object-cover"
                width={500}
                height={300}
              />
              <div className="flex text-left">
                <div className="p-2 w-full">
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className=" mt-2">{service.description}</p>
                </div>
                <div className="w-auto p-4 flex items-center">
                  <span>{service.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* data section */}

      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center mx-2 md:mx-12 lg:mx-24">
        <div className="absolute inset-0 bg-black bg-opacity-80" />
        <div className="relative py-12 mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center space-x-8 w-full h-full z-10 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col p-4 items-center text-white"
            >
              <div className="text-5xl mb-4">
                <Image src={stat.icon} alt="success" width={70} height={70} />
              </div>{" "}
              <p className="text-lg font-semibold">
                {t("lang") == "en" ? stat.label : stat.label_am}
              </p>
              <p className="text-3xl font-bold mt-2 text-center">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

// const InfoCard = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="relative flex items-start gap-4 max-w-sm">
//       {/* Icon or Decoration */}
//       <div className="absolute top-0 right-0">
//         <Image
//           src={"/about_us/elipse.svg"}
//           alt="elipse"
//           width={35}
//           height={35}
//         />
//       </div>
//       {/* Content */}
//       <div>
//         <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
//         <p className="text-sm text-gray-600 mt-1">{description}</p>
//       </div>
//     </div>
//   );
// };
