"use client";

import { LanguageToggle, uiStrings, useLanguage } from "./i18n";

export default function SiteHeader() {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex w-full max-w-5xl justify-end px-6">
        <LanguageToggle />
      </div>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Shokunin Shortlist
      </h1>
      <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        {uiStrings[language].tagline}
      </p>
    </div>
  );
}
