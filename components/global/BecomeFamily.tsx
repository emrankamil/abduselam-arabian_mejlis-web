import { Button } from "../ui/button";
import initTranslations from "@/app/i18n";

const BecomeFamily = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ["common"]);
  return (
    <section className="w-full px-2 sm:px-6 md:px-10 lg:px-24 xl:px-32 overflow-hidden my-16 md:my-24 lg:my-36">
      <div className=" bg-[url('/subscription_bg.png')] bg-cover bg-bottom rounded-2xl h-auto w-full">
        {/* Background Layer */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent bg-opacity-70 rounded-xl" /> */}

        {/* Content Layer */}
        <div className="flex flex-col justify-center px-2 sm:px-4 md:px-6 lg:px-10 py-8 space-y-6 sm:space-y-8 w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-normal">
            {t("start_journey")}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold">
            {t("start_journey_text")}
          </p>
          <Button className="mt-6 p-4 sm:p-6 md:p-8 w-36 sm:w-40 md:w-48 text-black bg-white rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
            {t("join_now")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BecomeFamily;
