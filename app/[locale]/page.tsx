import Hero from "@/components/home/Hero";
import CompanyVideo from "@/components/home/CompanyVideo";
import Features from "@/components/home/Features";
import Catagories from "@/components/home/Catagories";
import HowItWorks from "@/components/home/HowItWorks";
import Products from "@/components/home/Products";
import Testimonial from "@/components/home/Testimonial";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="flex flex-col gap-24 md:gap-32 h-full w-full mx-auto font-playfair">
      <Hero />
      <CompanyVideo />
      <Features
        params={{
          locale: locale,
        }}
      />
      <Catagories />
      <Products />
      <HowItWorks />
      <Testimonial />
    </div>
  );
}
