import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";
import { services, stats, steps } from "@/data/aboutus";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="w-full space-y-16 h-full">
      {/* banner */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center h-[300px]">
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <h1 className="text-5xl font-semibold text-white text-center leading-normal">
            About Us
          </h1>
        </div>
      </div>

      {/* hero */}
      <div className="flex flex-col md:flex-row px-6 md:px-24 gap-6 h-auto md:h-[70vh]">
        {/* hero image */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto">
          <div className="absolute left-0 bottom-0 h-64 md:h-80 w-64 md:w-80 m-2 md:m-4">
            <Image
              src={"/about_us/about-image.png"}
              alt={"image"}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 h-64 md:h-80 w-48 md:w-64 m-2 md:m-4 border-4 md:border-8 border-white">
            <Image
              src={"/about_us/furniture-design.png"}
              alt={"image"}
              fill
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 flex m-2 md:m-4 py-2 md:py-4 pr-3 md:pr-6 gap-1">
            <span className="text-primary text-3xl md:text-[3rem] leading-none font-bold">
              90%
            </span>
            <span className="text-sm md:text-md font-semibold">
              Happy
              <br /> Customer
            </span>
          </div>
          <div className="absolute top-0 left-6 flex items-center justify-center m-2 md:m-4 px-4 md:px-10 gap-1 text-primary">
            <Image
              src={"/about_us/image.png"}
              alt={"how we do it"}
              width={40}
              height={40}
              className="rotate-[200deg] object-cover"
            />
          </div>
        </div>

        {/* hero text */}
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
          <h1 className="text-gray-500 text-sm md:text-lg -mb-2 md:-mb-6">
            About Company
          </h1>

          <h1 className="text-2xl md:text-4xl font-bold leading-snug md:leading-tight">
            Creating Inspiring Products
            <br /> Discover Premier Furniture
            <br /> Design Experts
          </h1>

          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="flex items-center space-x-4">
            <Image
              src="/gray-logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-cover"
            />

            <div className="flex flex-col space-y-2">
              {/* Three text points with icons */}
              <div className="flex items-center">
                <span className="font-light text-gray-500">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-gray-700 text-sm md:text-base">
                  We provide high-quality products.
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-light text-gray-500">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-gray-700 text-sm md:text-base">
                  Customer satisfaction is our priority.
                </p>
              </div>
              <div className="flex items-center">
                <span className="font-light text-gray-500">
                  <IoIosCheckmark />
                </span>
                <p className="ml-2 text-gray-700 text-sm md:text-base">
                  Innovative designs for modern living.
                </p>
              </div>
            </div>
          </div>

          {/* Call Us Now button */}
          <Button
            variant="outline"
            className="px-4 py-3 lg:px-7 lg:py-6 w-full sm:w-48 text-white rounded font-semibold bg-primary/90 transition duration-300"
          >
            LET&apos;S TALK
          </Button>
        </div>
      </div>

      {/* Services */}
      <div className="text-center py-8 px-2 md:px-12">
        <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
        <h3 className="text-xl font-medium text-gray-600 mt-2">
          We Are Experts In
        </h3>

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
                  <h4 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mt-2">{service.description}</p>
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
        <div className="relative py-12 mx-auto flex flex-wrap sm:flex-row sm:flex-nowrap justify-center space-x-8 w-full h-full z-10 items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col p-4 items-center text-white"
            >
              <div className="text-5xl mb-4">
                <Image src={stat.icon} alt="success" width={70} height={70} />
              </div>{" "}
              <p className="text-lg font-semibold">{stat.label}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* our process */}
      <div className="relative bg-[url('/about_us/aboutus_banner.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80" />
        <div className="relative w-full h-full z-10 flex justify-center items-center">
          <div className="text-white py-12 px-2 sm:px-4 md:px-8 lg:px-14">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="text-center lg:text-left px-2 py-4"
                  >
                    <div className="text-3xl py-4">{step.icon}</div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <Separator className="my-8 border border-white/80" />
                    <ul className="mt-4 space-y-2 text-sm text-white">
                      {step.items.map((item, i) => (
                        <li key={i} className="list-disc list-inside h-10">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
