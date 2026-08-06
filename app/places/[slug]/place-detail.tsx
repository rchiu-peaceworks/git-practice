"use client";

import Link from "next/link";
import type { Place } from "@/data/places";
import { disciplineLabels, LanguageToggle, uiStrings, useLanguage } from "@/app/i18n";

export default function PlaceDetail({ place }: { place: Place }) {
  const { language } = useLanguage();
  const strings = uiStrings[language];
  const labels = disciplineLabels[language];
  const t = language === "zh" ? place.zh : place;

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col bg-zinc-50 px-6 py-16 dark:bg-black">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-sm underline underline-offset-2">
          {strings.backToBrowse}
        </Link>
        <LanguageToggle />
      </div>

      <span className="mt-8 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {labels[place.discipline]}
      </span>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        {place.name} <span className="text-xl font-normal text-zinc-500 dark:text-zinc-400">{place.nameJa}</span>
      </h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-400">{t.area}</p>
      <p className="mt-4 text-lg text-zinc-800 dark:text-zinc-200">{t.theOneThing}</p>

      <Section title={strings.whyNotableLabel} body={t.whyNotable} />
      <Section title={strings.dishBackgroundLabel} body={t.dishBackground} />
      {t.etiquette && <Section title={strings.etiquetteLabel} body={t.etiquette} />}

      <div className="mt-8 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {strings.hoursLabel}
        </h2>
        <p className="mt-1 text-zinc-800 dark:text-zinc-200">
          {place.hours}
          {!place.hoursConfirmed && (
            <span className="ml-1 text-zinc-500 dark:text-zinc-400">
              {strings.hoursUnconfirmed}
            </span>
          )}
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <a
          className="rounded-full border border-black px-4 py-1.5 text-black dark:border-zinc-50 dark:text-zinc-50"
          href={place.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.openMaps}
        </a>
        <a
          className="self-center underline underline-offset-2 text-zinc-500 dark:text-zinc-400"
          href={place.source}
          target="_blank"
          rel="noopener noreferrer"
        >
          {strings.sourceLabel}
        </a>
      </div>
    </div>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-6">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {title}
      </h2>
      <p className="mt-1 text-zinc-800 dark:text-zinc-200">{body}</p>
    </div>
  );
}
