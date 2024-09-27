import Image from "next/image";
import ExampleClientComponent from "@/components/global/ExampleClientComponent";
import initTranslations from "../../i18n";
import Link from "next/link";

export default async function Home({ params: { locale } }: any) {
  const { t } = await initTranslations(locale, ["home", "common"]); //here home name space is our default
  return (
    <main>
      <h1>{t("Home")}</h1>=<Link href="/">{t("Home")}</Link>
    </main>
  );
}
