import "./globals.css";
import type { Metadata } from "next";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import localFont from "next/font/local";

import initTranslations from "../i18n";
import NavBar from "@/components/global/NavBar";
import TranslationsProvider from "@/components/global/TranslationsProvider";
import BecomeFamily from "@/components/global/BecomeFamily";
import Footer from "@/components/global/Footer";
import ChatWidget from "@/components/global/ToggleChat";

const playfair = localFont({
  src: "../fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
  weight: "100 900",
});
const latoBold = localFont({
  src: "../fonts/Lato/Lato-Black.ttf",
  variable: "--font-latoBold",
  weight: "100 900",
});
const latoRegular = localFont({
  src: "../fonts/Lato/Lato-Regular.ttf",
  variable: "--font-latoRegular",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Abduselam Curtain, Mejlis and Furniture",
  description:
    "Abduselam Arabian Mejlis Manufacturing Experts. We are not just suppliers, we are your partners",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18nNamespaces = ["home", "common", "products"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)} data-theme="winter">
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <body
          className={`${latoBold.variable} ${latoRegular.variable} ${playfair.variable} antialiased font-sans bg-background`}
        >
          <div className="">
            <NavBar />
            {children}
            <ChatWidget />
            <BecomeFamily />
            <Footer />
          </div>
        </body>
      </TranslationsProvider>
    </html>
  );
}
