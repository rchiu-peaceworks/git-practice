export type Discipline =
  | "unagi"
  | "tonkatsu"
  | "yakitori"
  | "ramen"
  | "sushi"
  | "tempura"
  | "soba"
  | "kappo"
  | "sukiyaki";

export interface Place {
  slug: string;
  name: string;
  nameJa: string;
  area: string;
  discipline: Discipline;
  theOneThing: string;
  whyNotable: string;
  dishBackground: string;
  etiquette?: string;
  hours: string;
  hoursConfirmed: boolean;
  googleMapsUrl: string;
  source: string;
}

function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const places: Place[] = [
  {
    slug: "izuei-honten",
    name: "Izuei Honten",
    nameJa: "伊豆栄",
    area: "Ueno, Tokyo",
    discipline: "unagi",
    theOneThing: "Unagi (eel) only",
    whyNotable:
      "~300-year history dating to the Edo period, now on its 9th generation.",
    dishBackground:
      "Unagi kabayaki — freshwater eel split, boned, steamed (Kanto style), then grilled over charcoal while basted in a sweet soy-based tare — became a formalized restaurant dish in Edo during the 18th century, when eel was caught locally in the rivers and bay around the city.",
    hours: "Daily 11:00-21:00 (L.O. 20:30). Closed Dec 31-Jan 1.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Izuei Honten Ueno Tokyo"),
    source: "https://japanjourneys.jp/tokyo/ueno/dining/restaurants/izuei-unagi/",
  },
  {
    slug: "nodaiwa",
    name: "Nodaiwa",
    nameJa: "野田岩",
    area: "Azabu, Tokyo",
    discipline: "unagi",
    theOneThing: "Unagi only",
    whyNotable:
      "~200-year history from the Kansei era; current chef Kanejiro Kanemoto is 5th generation.",
    dishBackground:
      "Unagi kabayaki — freshwater eel split, boned, steamed (Kanto style), then grilled over charcoal while basted in a sweet soy-based tare — became a formalized restaurant dish in Edo during the 18th century, when eel was caught locally in the rivers and bay around the city.",
    hours: "Tue-Sat 11:00-14:30, 17:00-21:00. Closed Sun + irregular Mondays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Nodaiwa Azabu Iikura Honten Tokyo"),
    source:
      "https://old-tokyo.info/the-best-unagi-in-tokyo-200-years-old-restaurant-nodaiwa/",
  },
  {
    slug: "hashimoto",
    name: "Hashimoto",
    nameJa: "橋本",
    area: "Edogawabashi, Bunkyo, Tokyo",
    discipline: "unagi",
    theOneThing: "Unagi (kabayaki) only",
    whyNotable: "Operating continuously since 1835; run by the 6th-generation chef.",
    dishBackground:
      "Unagi kabayaki — freshwater eel split, boned, steamed (Kanto style), then grilled over charcoal while basted in a sweet soy-based tare — became a formalized restaurant dish in Edo during the 18th century, when eel was caught locally in the rivers and bay around the city.",
    hours: "Lunch 11:30-14:30 (L.O. 13:50), Dinner 16:30-20:00 (L.O. 19:30). Closed one Wednesday a month and Thursdays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Hashimoto Unagi Edogawabashi Tokyo"),
    source:
      "https://livejapan.com/en/in-tokyo/in-pref-tokyo/in-tokyo_train_station/article-a0002252/",
  },
  {
    slug: "ponta-honke",
    name: "Ponta Honke",
    nameJa: "ぽん多本家",
    area: "Ueno, Tokyo",
    discipline: "tonkatsu",
    theOneThing: "Tonkatsu only",
    whyNotable:
      "Established 1905, one of the original \"Big Three\" tonkatsu shops; current owner Yoshihiko Shimada is 4th generation.",
    dishBackground:
      "Tonkatsu — a breaded, deep-fried pork cutlet — is a Japanese adaptation of the Western côtelette that emerged in the Meiji era (1899), later served with rice, miso soup, and shredded cabbage to become its own washoku dish rather than a Western import.",
    hours:
      "Lunch Tue-Sun 11:00-14:00 (L.O. 13:45); Dinner Tue-Sat 16:30-20:20 (L.O. 19:45), Sun/holidays 16:00-20:20 (L.O. 19:45). Closed Mondays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Ponta Honke Ueno Tokyo"),
    source:
      "https://www.tokyoweekender.com/food-and-drink/restaurants-and-bars/best-tonkatsu-restaurants-in-tokyo/",
  },
  {
    slug: "tonkatsu-enraku",
    name: "Tonkatsu Enraku",
    nameJa: "とんかつ 燕楽",
    area: "Shinbashi, Minato, Tokyo",
    discipline: "tonkatsu",
    theOneThing: "Tonkatsu only",
    whyNotable:
      "Family-owned since 1950, barely changed in décor or method; now 3rd generation of the Ma family.",
    dishBackground:
      "Tonkatsu — a breaded, deep-fried pork cutlet — is a Japanese adaptation of the Western côtelette that emerged in the Meiji era (1899), later served with rice, miso soup, and shredded cabbage to become its own washoku dish rather than a Western import.",
    hours: "Mon-Fri 11:00-14:00, 17:00-21:00; Sat 11:00-14:00. Closed Sun & holidays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Tonkatsu Enraku Shinbashi Tokyo"),
    source:
      "https://www.tokyoweekender.com/food-and-drink/restaurants-and-bars/best-tonkatsu-restaurants-in-tokyo/",
  },
  {
    slug: "kyobashi-isehiro",
    name: "Kyobashi Isehiro",
    nameJa: "京橋 伊勢廣",
    area: "Kyobashi, Tokyo",
    discipline: "yakitori",
    theOneThing: "Yakitori only",
    whyNotable:
      "Founded 1921 as a poultry shop; 3rd-generation proprietor Masanobu Hoshino; some regulars are 3rd-generation customers too.",
    dishBackground:
      "Yakitori — skewered, charcoal-grilled chicken — spread as affordable street food from the Meiji era onward near train stations and worker districts, later refined by dedicated yakitori-ya into single-bird, part-by-part craft cooking.",
    etiquette:
      "Pull the meat off with chopsticks or eat straight off the stick — don't put a bitten skewer back on a shared plate.",
    hours: "Mon-Fri 11:30-14:00, 16:30-21:00; Sat 11:30-14:00, 16:30-20:30. Closed Sundays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Kyobashi Isehiro Tokyo"),
    source: "https://www.tokyoupdates.metro.tokyo.lg.jp/en/post-1776/",
  },
  {
    slug: "kiraku",
    name: "Kiraku",
    nameJa: "喜楽",
    area: "Shibuya (Hyakkendana), Tokyo",
    discipline: "ramen",
    theOneThing: "Noodle soup only (shoyu ramen/wontanmen), one broth",
    whyNotable:
      "Founded 1952; now run by the 2nd generation (Lin Maofu), serving roughly 400 bowls a day from the same recipe.",
    dishBackground:
      "Ramen is a Chinese-derived wheat-noodle soup that Japan adapted into regional shoyu, miso, and tonkotsu styles; postwar shortages and cheap ingredients drove a nationwide ramen boom from the late 1940s on.",
    hours: "Thu-Tue 11:30-20:30. Closed Wednesdays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Kiraku ramen Shibuya Hyakkendana Tokyo"),
    source: "https://www.5amramen.com/post/ramen-in-shibuya-kiraku",
  },
  {
    slug: "harukiya-ogikubo-honten",
    name: "Harukiya Ogikubo Honten",
    nameJa: "春木屋 荻窪本店",
    area: "Ogikubo, Tokyo",
    discipline: "ramen",
    theOneThing: "Shoyu ramen only, one recipe",
    whyNotable:
      "Operating since 1949; considered the birthplace of Tokyo-style ramen; recipe refined and preserved by the founder's family.",
    dishBackground:
      "Ramen is a Chinese-derived wheat-noodle soup that Japan adapted into regional shoyu, miso, and tonkotsu styles; postwar shortages and cheap ingredients drove a nationwide ramen boom from the late 1940s on.",
    hours: "Daily 11:00-21:20 (occasional holidays). Cashless only.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Harukiya Ogikubo Honten Tokyo"),
    source: "https://ramenbeast.com/blogs/news/tokyos-oldest-living-ramen-shops",
  },
  {
    slug: "ichihachi-fukuzushi",
    name: "Ichihachi Fukuzushi",
    nameJa: "市はち福鮨",
    area: "Sumida, Tokyo",
    discipline: "sushi",
    theOneThing: "Edomae sushi only",
    whyNotable:
      "Established 1965; 2nd-generation owner Kazuya Kurumizawa took over from his father.",
    dishBackground:
      "Edomae sushi originated in early-19th-century Edo (old Tokyo) as fast food: vinegared rice hand-pressed with fish fresh from Edo Bay, sold at stalls to be eaten quickly and by hand.",
    etiquette:
      "Nigiri is meant to be eaten in one bite; it's fine to use your hands; dip the fish side (not the rice) lightly in soy sauce.",
    hours: "Not confirmed — closed Wednesdays and the first Tuesday of the month.",
    hoursConfirmed: false,
    googleMapsUrl: mapsUrl("Ichihachi Fukuzushi Sumida Tokyo"),
    source: "https://newsonjapan.com/article/142132.php",
  },
  {
    slug: "umezono-sushi",
    name: "Umezono Sushi",
    nameJa: "梅ぞの鮨",
    area: "Aoto, Katsushika, Tokyo",
    discipline: "sushi",
    theOneThing: "Traditional downtown (shitamachi) sushi only",
    whyNotable:
      "Family-run for 30+ years; chef trained in Ginza before dedicating the shop to one style of sushi.",
    dishBackground:
      "Edomae sushi originated in early-19th-century Edo (old Tokyo) as fast food: vinegared rice hand-pressed with fish fresh from Edo Bay, sold at stalls to be eaten quickly and by hand.",
    etiquette:
      "Nigiri is meant to be eaten in one bite; it's fine to use your hands; dip the fish side (not the rice) lightly in soy sauce.",
    hours: "Not confirmed — closed Sundays and public holidays.",
    hoursConfirmed: false,
    googleMapsUrl: mapsUrl("Umezono Sushi Aoto Katsushika Tokyo"),
    source: "https://wanderlog.com/place/details/3488232/梅ぞの鮨-umezono-sushi",
  },
  {
    slug: "sansada",
    name: "Sansada",
    nameJa: "三定",
    area: "Asakusa, Tokyo",
    discipline: "tempura",
    theOneThing: "Tempura only",
    whyNotable:
      "Founded 1837 — oldest tempura restaurant in Japan; still Edomae-style, not heavily marketed to tourists despite the pedigree.",
    dishBackground:
      "Tempura — batter-fried seafood and vegetables — arrived with Portuguese traders in the 16th century and was adapted into Edo-style tempura by the 18th-19th century: twice-fried in sesame oil, served with a light tentsuyu dipping sauce.",
    etiquette:
      "Eat each piece soon after it's served, dipping briefly rather than soaking, so the batter stays crisp.",
    hours: "11:30-20:00. Closed Mondays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Sansada Asakusa Tokyo"),
    source: "http://tempura-sansada.co.jp/history.html",
  },
  {
    slug: "kanda-matsuya",
    name: "Kanda Matsuya",
    nameJa: "神田まつや",
    area: "Kanda, Chiyoda, Tokyo",
    discipline: "soba",
    theOneThing: "Soba only",
    whyNotable:
      "Founded 1884, rebuilt after the 1923 Great Kanto Earthquake; 140+ years of handmade soba, recognized as a Tokyo Metropolitan historical landmark.",
    dishBackground:
      "Soba (buckwheat noodles) became a staple of Edo-period Tokyo, when neighborhood sobaya turned hand-cut noodles into a fast, everyday meal — a craft still centered on the quality of the hand-cut noodle itself.",
    etiquette:
      "Slurping is normal and considered part of tasting the noodles properly; dip only the bottom third of the noodles into the tsuyu rather than submerging them.",
    hours: "Mon-Fri 11:00-20:00; Sat & national holidays 11:00-19:00. Closed Sundays (except national holidays).",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Kanda Matsuya Soba Tokyo"),
    source: "https://tinyurbankitchen.com/matsuya-kanda-soba-tokyo/",
  },
  {
    slug: "toyoda",
    name: "Toyoda",
    nameJa: "豊田",
    area: "Nihonbashi (Mitsukoshimae), Tokyo",
    discipline: "kappo",
    theOneThing: "Kappo/kaiseki only",
    whyNotable: "160-year history; current owner Toru Hashimoto is 5th generation.",
    dishBackground:
      "Kappo (literally \"cut and cook\") is counter-style Japanese fine dining where the chef prepares each course in front of the guest, distinct from the more formal, tea-ceremony-rooted style of kaiseki.",
    etiquette:
      "It's a chef's-choice counter — better to let the chef guide the order than to request substitutions.",
    hours: "Not confirmed — closed Sundays and public holidays.",
    hoursConfirmed: false,
    googleMapsUrl: mapsUrl("Kappo Toyoda Nihonbashi Mitsukoshimae Tokyo"),
    source: "https://www.byfood.com/blog/tokyo/oldest-restaurants-in-tokyo",
  },
  {
    slug: "janoichi-honten",
    name: "Janoichi Honten",
    nameJa: "蛇の市本店",
    area: "Nihonbashi (Muromachi), Tokyo",
    discipline: "sushi",
    theOneThing: "Edomae sushi only",
    whyNotable:
      "Founded 1889 as a street stall; now run by the 5th generation, using a tsume glaze aged continuously for 130+ years.",
    dishBackground:
      "Edomae sushi originated in early-19th-century Edo (old Tokyo) as fast food: vinegared rice hand-pressed with fish fresh from Edo Bay, sold at stalls to be eaten quickly and by hand.",
    etiquette:
      "Nigiri is meant to be eaten in one bite; it's fine to use your hands; dip the fish side (not the rice) lightly in soy sauce.",
    hours: "Lunch 11:30-14:00 (L.O. 12:00), Dinner 16:30-22:30 (L.O. 20:30). Closed Sundays and Mondays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Janoichi Honten Nihonbashi Muromachi Tokyo"),
    source: "https://justincox.medium.com/130-year-old-sushi-in-tokyo-555487140af8",
  },
  {
    slug: "iseju",
    name: "Iseju",
    nameJa: "伊勢重",
    area: "Nihonbashi (Kodenmacho), Tokyo",
    discipline: "sukiyaki",
    theOneThing: "Sukiyaki only",
    whyNotable:
      "Founded 1869 — Tokyo's oldest sukiyaki specialty restaurant; now run by the 7th generation.",
    dishBackground:
      "Sukiyaki — thin-sliced beef simmered in a sweet soy sauce (warishita) with vegetables and tofu — spread after the 1868 Meiji Restoration, when beef-eating became newly popular after centuries of Buddhist-influenced restriction.",
    etiquette:
      "Dip the cooked meat in a bowl of raw beaten egg before eating — standard practice here, not an optional extra.",
    hours: "11:00-22:00 (L.O. 21:30, or 22:30 for seats taken after 20:00). Closed Sundays and public holidays.",
    hoursConfirmed: true,
    googleMapsUrl: mapsUrl("Iseju Sukiyaki Nihonbashi Kodenmacho Tokyo"),
    source: "https://tabelog.com/en/tokyo/A1302/A130204/13008056/",
  },
];
