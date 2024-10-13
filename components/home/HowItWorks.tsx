import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { HiBuildingStorefront } from "react-icons/hi2";

const HowItWorks = () => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-2 sm:px-10 md:px-16">
        <h2 className="text-3xl font-bold mb-4 text-center">How it works</h2>
        <p className="text-center mb-12 max-w-2xl px-1 sm:px-4">
          Our streamlined process makes it effortless for you to bring luxury
          into your home. Follow these simple steps to experience the quality
          and elegance of our products:
        </p>

        <div className="flex flex-col lg:flex-row w-full justify-center items-center lg:space-x-6">
          {/* Text Section */}
          <div className="w-full lg:w-3/5 space-y-6 lg:space-y-4 lg:pr-6">
            <div className="bg-white shadow-md rounded-lg sm:p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center p-2">
                <div className="text-2xl pr-2 sm:pr-4 ">
                  <FaSearch />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Browse and Select</h3>
                  <p>
                    Explore our curated collection of premium Majlis, sofas,
                    beds, and curtains. Choose the perfect pieces that reflect
                    your taste and meet your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg sm:p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center p-2">
                <div className="text-2xl pr-2 sm:pr-4">
                  <GiConfirmed />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Book and Confirm</h3>
                  <p>
                    Once you’ve made your selection, book your items through our
                    seamless online process. You’ll receive a confirmation and
                    all the details you need for the next steps.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg sm:p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-center p-2">
                <div className="text-2xl pr-2 sm:pr-4">
                  <HiBuildingStorefront />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Arrive at Our Shop</h3>
                  <p>
                    Visit our shop to complete your purchase. Experience the
                    quality firsthand, finalize your order, and take home the
                    luxurious pieces that will elevate your living space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-2/5 h-auto mt-8 lg:mt-0 hidden lg:block">
            <Image
              src="/how_it_works.png"
              alt="Luxury Sofa Set"
              width={1000}
              height={1000}
              className="object-cover w-full shadow-md rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
