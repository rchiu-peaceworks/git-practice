import { notFound } from "next/navigation";
import { places } from "@/data/places";
import { LanguageProvider } from "@/app/i18n";
import PlaceDetail from "./place-detail";

export function generateStaticParams() {
  return places.map((place) => ({ slug: place.slug }));
}

export default async function PlacePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = places.find((p) => p.slug === slug);

  if (!place) {
    notFound();
  }

  return (
    <LanguageProvider>
      <PlaceDetail place={place} />
    </LanguageProvider>
  );
}
