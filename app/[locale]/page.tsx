import Hero from "@/components/home/Hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/global/TranslationsProvider";
import CompanyVideo from "@/components/home/CompanyVideo";
import Features from "@/components/home/Features";
import Catagories from "@/components/home/Catagories";
import HowItWorks from "@/components/home/HowItWorks";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";

const i18nNamespaces = ["home"];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col gap-24 md:gap-32 h-full w-full mx-auto">
        <Hero
          params={{
            locale: locale,
          }}
        />
        <CompanyVideo />
        <Features
          params={{
            locale: locale,
          }}
        />
        <Catagories />
        <HowItWorks />
        <Products />
        <Testimonial />
      </div>
    </TranslationsProvider>
  );
}
