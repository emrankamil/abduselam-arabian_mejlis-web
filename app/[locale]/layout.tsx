import "./globals.css";
import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import { Lato } from "next/font/google";

import initTranslations from "../i18n";
import NavBar from "@/components/global/NavBar";
import TranslationsProvider from "@/components/global/TranslationsProvider";
import BecomeFamily from "@/components/global/BecomeFamily";
import Footer from "@/components/global/Footer";
import ChatWidget from "@/components/global/ToggleChat";

const myFont = Lato({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--my-font-family",
});

export const metadata: Metadata = {
  title: "Abduselam Arabian Mejlis",
  description:
    "Abduselam Arabian Mejlis Manufacturing Experts. We are not just suppliers, we are your partners",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

/* eslint-disable react/no-unescaped-entities */
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={dir(locale)} data-theme="winter">
      <body className={`${myFont.className} bg-background`}>
        <div className="">
          <NavBarWithTranslation params={{ locale }} />
          {children}
          <ChatWidget />
          <BecomeFamily />
          <Footer />
        </div>
      </body>
    </html>
  );
}

const i18nNamespaces = ["home", "common"];

async function NavBarWithTranslation({
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
      <NavBar />
    </TranslationsProvider>
  );
}
