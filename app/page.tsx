import { places } from "@/data/places";
import PlaceBrowser from "./place-browser";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-6 py-16 text-center dark:bg-black">
      <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
        Shokunin Shortlist
      </h1>
      <p className="mt-4 max-w-md text-lg text-zinc-600 dark:text-zinc-400">
        Craft-first Japanese restaurants for travelers who want the places
        locals actually go — not the ones every guidebook already sends you
        to.
      </p>
      <div className="mt-12 w-full">
        <PlaceBrowser places={places} />
      </div>
    </div>
  );
}
