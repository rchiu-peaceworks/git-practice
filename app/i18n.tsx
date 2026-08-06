"use client";

import { createContext, useContext, useState } from "react";
import type { Discipline } from "@/data/places";

export type Language = "en" | "zh";

interface LanguageContextValue {
  language: Language;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const toggle = () => setLanguage((l) => (l === "en" ? "zh" : "en"));
  return (
    <LanguageContext.Provider value={{ language, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export const uiStrings: Record<
  Language,
  {
    tagline: string;
    all: string;
    viewPlace: string;
    openMaps: string;
    toggleLabel: string;
    backToBrowse: string;
    hoursLabel: string;
    hoursUnconfirmed: string;
    whyNotableLabel: string;
    dishBackgroundLabel: string;
    etiquetteLabel: string;
    sourceLabel: string;
  }
> = {
  en: {
    tagline:
      "Craft-first Japanese restaurants for travelers who want the places locals actually go — not the ones every guidebook already sends you to.",
    all: "All",
    viewPlace: "View place",
    openMaps: "Open in Google Maps",
    toggleLabel: "中文",
    backToBrowse: "← Back to all places",
    hoursLabel: "Hours",
    hoursUnconfirmed: "(not yet confirmed — verify before visiting)",
    whyNotableLabel: "Why the craft is notable",
    dishBackgroundLabel: "About the dish",
    etiquetteLabel: "Good to know",
    sourceLabel: "Source",
  },
  zh: {
    tagline:
      "職人嚴選:專為想尋找當地人真正光顧、而非導覽書早已推薦之名店的旅人,精選以工藝為本的日本料理。",
    all: "全部",
    viewPlace: "查看詳情",
    openMaps: "在 Google 地圖開啟",
    toggleLabel: "EN",
    backToBrowse: "← 返回所有店家",
    hoursLabel: "營業時間",
    hoursUnconfirmed: "(尚未確認,前往前請再次核實)",
    whyNotableLabel: "工藝亮點",
    dishBackgroundLabel: "料理背景",
    etiquetteLabel: "小提醒",
    sourceLabel: "資料來源",
  },
};

export const disciplineLabels: Record<Language, Record<Discipline, string>> = {
  en: {
    unagi: "Unagi",
    tonkatsu: "Tonkatsu",
    yakitori: "Yakitori",
    ramen: "Ramen",
    sushi: "Sushi",
    tempura: "Tempura",
    soba: "Soba",
    kappo: "Kappo/Kaiseki",
    sukiyaki: "Sukiyaki",
  },
  zh: {
    unagi: "鰻魚",
    tonkatsu: "炸豬排",
    yakitori: "串燒",
    ramen: "拉麵",
    sushi: "壽司",
    tempura: "天婦羅",
    soba: "蕎麥麵",
    kappo: "割烹／懷石",
    sukiyaki: "壽喜燒",
  },
};

export function LanguageToggle() {
  const { language, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm text-zinc-700 transition-colors hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
    >
      {uiStrings[language].toggleLabel}
    </button>
  );
}
