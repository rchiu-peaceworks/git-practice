"use client";

import { useMemo, useState } from "react";
import type { Discipline, Place } from "@/data/places";

const disciplineLabels: Record<Discipline, string> = {
  unagi: "Unagi",
  tonkatsu: "Tonkatsu",
  yakitori: "Yakitori",
  ramen: "Ramen",
  sushi: "Sushi",
  tempura: "Tempura",
  soba: "Soba",
  kappo: "Kappo/Kaiseki",
  sukiyaki: "Sukiyaki",
};

export default function PlaceBrowser({ places }: { places: Place[] }) {
  const [activeDiscipline, setActiveDiscipline] = useState<Discipline | "all">(
    "all"
  );

  const disciplines = useMemo(() => {
    const present = new Set(places.map((place) => place.discipline));
    return (Object.keys(disciplineLabels) as Discipline[]).filter((d) =>
      present.has(d)
    );
  }, [places]);

  const filteredPlaces = useMemo(() => {
    if (activeDiscipline === "all") return places;
    return places.filter((place) => place.discipline === activeDiscipline);
  }, [places, activeDiscipline]);

  return (
    <div className="w-full max-w-5xl">
      <div className="flex flex-wrap justify-center gap-2 px-6">
        <FilterChip
          label={`All (${places.length})`}
          active={activeDiscipline === "all"}
          onClick={() => setActiveDiscipline("all")}
        />
        {disciplines.map((discipline) => {
          const count = places.filter((p) => p.discipline === discipline).length;
          return (
            <FilterChip
              key={discipline}
              label={`${disciplineLabels[discipline]} (${count})`}
              active={activeDiscipline === discipline}
              onClick={() => setActiveDiscipline(discipline)}
            />
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPlaces.map((place) => (
          <li
            key={place.slug}
            className="flex flex-col rounded-lg border border-zinc-200 p-5 text-left dark:border-zinc-800"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              {disciplineLabels[place.discipline]}
            </span>
            <h2 className="mt-1 text-lg font-semibold text-black dark:text-zinc-50">
              {place.name}{" "}
              <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400">
                {place.nameJa}
              </span>
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {place.area}
            </p>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              {place.theOneThing}
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a
                className="underline underline-offset-2"
                href={`/places/${place.slug}`}
              >
                View place
              </a>
              <a
                className="underline underline-offset-2"
                href={place.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
        active
          ? "border-black bg-black text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-black"
          : "border-zinc-300 text-zinc-700 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
      }`}
    >
      {label}
    </button>
  );
}
