import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { HiBuildingStorefront } from "react-icons/hi2";

const HowItWorks = () => {
  return (
    <section className="h-screen ">
      <div className="flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold mb-4">How it works</h2>
        <p className="text-center mb-12 max-w-2xl">
          Our streamlined process makes it effortless for you to bring luxury
          into your home. Follow these simple steps to experience the quality
          and elegance of our products:
        </p>

        <div className="flex w-full max-w-6xl justify-center items-center">
          {/* Text Section */}
          <div className="w-3/5 space-y-2 pr-6">
            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">
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

            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">
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

            <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="text-2xl">
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
          <div className="w-2/5 h-full">
            <div className="rounded-lg overflow-hidden shadow-md h-full">
              <Image
                src="/how_it_works.png" // Replace with the correct image source
                alt="Luxury Sofa Set"
                width={1000}
                height={1000}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
