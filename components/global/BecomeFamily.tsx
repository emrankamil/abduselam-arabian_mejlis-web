import { Button } from "../ui/button";

const BecomeFamily = () => {
  return (
    <section className=" w-full px-16 overflow-hidden my-36">
      <div className="relative bg-[url('/subscription_background.png')] bg-cover bg-bottom rounded-2xl h-full w-full">
        {/* Background Layer */}
        <div className="z-10 absolute inset-0 bg-gradient-to-r from-black/80 to-transparent bg-opacity-70 rounded-xl" />

        {/* Content Layer */}
        <div className="relative z-20 flex flex-col justify-center px-10 py-6 w-2/3 space-y-8">
          <h1 className="text-5xl font-bold text-white leading-normal">
            Start your journey with Abduselam
          </h1>
          <p className="text-lg text-white font-semibold">
            Exclusive offer, special rewards and amazing privileges await
            <br />
            Abduselam members
          </p>
          <Button className="mt-6 p-8 w-48 text-black bg-white rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            JOIN NOW
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BecomeFamily;
