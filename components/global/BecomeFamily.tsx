import { Button } from "../ui/button";

const BecomeFamily = () => {
  return (
    <section className="w-full px-2 sm:px-6 md:px-10 lg:px-24 xl:px-32 overflow-hidden my-16 md:my-24 lg:my-36">
      <div className="relative bg-[url('/subscription_background.png')] bg-cover bg-bottom rounded-2xl h-full w-full">
        {/* Background Layer */}
        <div className="z-10 absolute inset-0 bg-gradient-to-r from-black/80 to-transparent bg-opacity-70 rounded-xl" />

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-8 space-y-6 sm:space-y-8 w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-normal">
            Start your journey with Abduselam
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
            Exclusive offer, special rewards and amazing privileges await
            <br />
            Abduselam members
          </p>
          <Button className="mt-6 p-4 sm:p-6 md:p-8 w-36 sm:w-40 md:w-48 text-black bg-white rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            JOIN NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BecomeFamily;
