import { places } from "@/data/places";
import PlaceBrowser from "./place-browser";
import SiteHeader from "./site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 px-6 py-16 text-center dark:bg-black">
      <SiteHeader />
      <div className="mt-12 w-full">
        <PlaceBrowser places={places} />
      </div>
    </div>
  );
}
