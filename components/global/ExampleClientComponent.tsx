"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
  const { t } = useTranslation();

  return <h1>{t("Home")}</h1>;
}
