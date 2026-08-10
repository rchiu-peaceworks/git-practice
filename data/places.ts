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

export interface PlaceTranslation {
  area: string;
  theOneThing: string;
  whyNotable: string;
  dishBackground: string;
  etiquette?: string;
  hours: string;
}

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
  zh: PlaceTranslation;
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
    zh: {
      area: "東京・上野",
      theOneThing: "只供應鰻魚料理",
      whyNotable: "歷史可追溯至江戶時代,約有三百年歷史,現已傳承至第九代。",
      dishBackground:
        "蒲燒鰻是將淡水鰻剖開去骨、以關東風格先蒸過,再刷上以醬油為基底的甜味醬汁,放到炭火上燒烤而成。這道料理在18世紀的江戶逐漸發展成正式的餐廳料理,當時鰻魚多取自城市周邊的河川與海灣。",
      hours: "每日 11:00-21:00(最後點餐 20:30)。12月31日至1月1日公休。",
    },
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
    zh: {
      area: "東京・麻布",
      theOneThing: "只供應鰻魚",
      whyNotable:
        "創業於寬政年間,約有兩百年歷史;現任主廚金本兼次郎為第五代傳人。",
      dishBackground:
        "蒲燒鰻是將淡水鰻剖開去骨、以關東風格先蒸過,再刷上以醬油為基底的甜味醬汁,放到炭火上燒烤而成。這道料理在18世紀的江戶逐漸發展成正式的餐廳料理,當時鰻魚多取自城市周邊的河川與海灣。",
      hours: "週二至週六 11:00-14:30、17:00-21:00。週日公休,週一不定期公休。",
    },
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
    zh: {
      area: "東京文京區・江戶川橋",
      theOneThing: "只供應蒲燒鰻魚",
      whyNotable: "自1835年起持續營業至今,現由第六代主廚掌店。",
      dishBackground:
        "蒲燒鰻是將淡水鰻剖開去骨、以關東風格先蒸過,再刷上以醬油為基底的甜味醬汁,放到炭火上燒烤而成。這道料理在18世紀的江戶逐漸發展成正式的餐廳料理,當時鰻魚多取自城市周邊的河川與海灣。",
      hours: "午餐 11:30-14:30(最後點餐 13:50),晚餐 16:30-20:00(最後點餐 19:30)。每月一次週三及每週四公休。",
    },
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
    zh: {
      area: "東京・上野",
      theOneThing: "只供應炸豬排",
      whyNotable:
        "創立於1905年,為東京炸豬排「三大老店」之一;現任店主島田良彥為第四代。",
      dishBackground:
        "豬排是將豬肉裹上麵包粉油炸而成,源自明治時代(1899年)對西式肉排的日式改良,後來搭配白飯、味噌湯與高麗菜絲,發展成獨具一格的和食,而非單純的西式舶來品。",
      hours: "午餐週二至週日 11:00-14:00(最後點餐 13:45);晚餐週二至週六 16:30-20:20(最後點餐 19:45),週日／國定假日 16:00-20:20(最後點餐 19:45)。週一公休。",
    },
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
    zh: {
      area: "東京港區・新橋",
      theOneThing: "只供應炸豬排",
      whyNotable:
        "自1950年由馬氏家族經營至今,裝潢與做法幾乎未變,現已傳承至第三代。",
      dishBackground:
        "豬排是將豬肉裹上麵包粉油炸而成,源自明治時代(1899年)對西式肉排的日式改良,後來搭配白飯、味噌湯與高麗菜絲,發展成獨具一格的和食,而非單純的西式舶來品。",
      hours: "週一至週五 11:00-14:00、17:00-21:00;週六 11:00-14:00。週日及國定假日公休。",
    },
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
    zh: {
      area: "東京・京橋",
      theOneThing: "只供應串燒雞肉",
      whyNotable:
        "1921年以雞肉鋪起家,現任第三代店主星野正伸經營;部分老顧客甚至也是第三代常客。",
      dishBackground:
        "串燒雞肉是將雞肉串起以炭火燒烤而成,自明治時代起在車站與勞工聚集區作為平價街頭小吃流行開來,後來被專門的串燒店提升為講究單一雞種、按部位分切燒烤的職人料理。",
      etiquette:
        "可用筷子將肉取下,或直接就著竹籤食用——切勿將咬過的串籤放回共用的盤子上。",
      hours: "週一至週五 11:30-14:00、16:30-21:00;週六 11:30-14:00、16:30-20:30。週日公休。",
    },
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
    zh: {
      area: "東京澀谷・百軒店",
      theOneThing: "只供應麵食(醬油拉麵／餛飩麵),單一湯頭",
      whyNotable:
        "創立於1952年,現由第二代林茂夫經營,每天以同一配方售出約四百碗麵。",
      dishBackground:
        "拉麵源自中式小麥麵條湯品,經日本改良發展出醬油、味噌、豚骨等各地風格;戰後物資短缺與廉價食材,促成了1940年代末期以來全國性的拉麵風潮。",
      hours: "週四至週二 11:30-20:30。週三公休。",
    },
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
    zh: {
      area: "東京・荻窪",
      theOneThing: "只供應醬油拉麵,單一配方",
      whyNotable:
        "自1949年營業至今,被視為東京拉麵的發源地之一;配方由創辦人家族傳承並不斷精進。",
      dishBackground:
        "拉麵源自中式小麥麵條湯品,經日本改良發展出醬油、味噌、豚骨等各地風格;戰後物資短缺與廉價食材,促成了1940年代末期以來全國性的拉麵風潮。",
      hours: "每日 11:00-21:20(偶有公休)。僅接受非現金支付。",
    },
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
    zh: {
      area: "東京・墨田",
      theOneThing: "只供應江戶前壽司",
      whyNotable:
        "創立於1965年,現任第二代店主車澤和也自父親手中接下店鋪。",
      dishBackground:
        "江戶前壽司起源於19世紀初的江戶(今東京),原本是一種快餐:將醋飯以手捏製,搭配江戶灣現撈的新鮮魚貨,在路邊攤販售,方便顧客用手快速食用。",
      etiquette:
        "握壽司建議一口食用;可以直接用手拿取;沾醬油時請沾魚肉那一面,而非米飯。",
      hours: "尚未確認——週三及每月第一個週二公休。",
    },
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
    zh: {
      area: "東京葛飾區・青戶",
      theOneThing: "只供應傳統下町風壽司",
      whyNotable:
        "家族經營超過三十年;主廚曾在銀座修業,之後專心鑽研單一風格的壽司。",
      dishBackground:
        "江戶前壽司起源於19世紀初的江戶(今東京),原本是一種快餐:將醋飯以手捏製,搭配江戶灣現撈的新鮮魚貨,在路邊攤販售,方便顧客用手快速食用。",
      etiquette:
        "握壽司建議一口食用;可以直接用手拿取;沾醬油時請沾魚肉那一面,而非米飯。",
      hours: "尚未確認——週日及國定假日公休。",
    },
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
    zh: {
      area: "東京・淺草",
      theOneThing: "只供應天婦羅",
      whyNotable:
        "創立於1837年,是日本歷史最悠久的天婦羅專門店;至今仍維持江戶前風格,儘管歷史悠久卻鮮少主打觀光客。",
      dishBackground:
        "天婦羅是將海鮮與蔬菜裹粉油炸而成,16世紀隨葡萄牙商人傳入日本,到18、19世紀發展成江戶風天婦羅:以芝麻油二次油炸,搭配清爽的天婦羅沾醬享用。",
      etiquette:
        "每一份上桌後請盡快食用,沾醬時稍微沾一下即可,不要浸泡太久,才能保持麵衣酥脆。",
      hours: "11:30-20:00。週一公休。",
    },
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
    zh: {
      area: "東京千代田區・神田",
      theOneThing: "只供應蕎麥麵",
      whyNotable:
        "創立於1884年,於1923年關東大地震後重建;手打蕎麥麵傳承超過140年,並獲東京都指定為歷史建築。",
      dishBackground:
        "蕎麥麵在江戶時代成為東京的日常主食,街坊蕎麥麵店將手切麵條變成快速方便的日常餐點,這門手藝至今仍以手切麵條本身的品質為核心。",
      etiquette:
        "發出吸麵聲是正常的,也被視為品嚐蕎麥麵香氣的一部分;沾麵露時只需沾到麵條下三分之一即可,不必整口浸入。",
      hours: "週一至週五 11:00-20:00;週六及國定假日 11:00-19:00。週日公休(國定假日除外)。",
    },
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
    zh: {
      area: "東京日本橋・三越前",
      theOneThing: "只供應割烹／懷石料理",
      whyNotable: "有160年歷史,現任店主橋本亨為第五代傳人。",
      dishBackground:
        "割烹(字面意思為「切與煮」)是一種吧檯式的日式高級料理,主廚會在顧客面前現場料理每一道菜,有別於源自茶道、更為正式的懷石料理風格。",
      etiquette:
        "這是主廚發辦的吧檯料理——建議讓主廚安排上菜順序,盡量避免要求更換菜色。",
      hours: "尚未確認——週日及國定假日公休。",
    },
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
    zh: {
      area: "東京日本橋・室町",
      theOneThing: "只供應江戶前壽司",
      whyNotable:
        "1889年以路邊攤起家,現由第五代經營,使用持續熬煮超過130年的煮詰醬汁。",
      dishBackground:
        "江戶前壽司起源於19世紀初的江戶(今東京),原本是一種快餐:將醋飯以手捏製,搭配江戶灣現撈的新鮮魚貨,在路邊攤販售,方便顧客用手快速食用。",
      etiquette:
        "握壽司建議一口食用;可以直接用手拿取;沾醬油時請沾魚肉那一面,而非米飯。",
      hours: "午餐 11:30-14:00(最後點餐 12:00),晚餐 16:30-22:30(最後點餐 20:30)。週日及週一公休。",
    },
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
    zh: {
      area: "東京日本橋・小傳馬町",
      theOneThing: "只供應壽喜燒",
      whyNotable:
        "創立於1869年,是東京歷史最悠久的壽喜燒專門店,現已傳承至第七代。",
      dishBackground:
        "壽喜燒是將薄切牛肉與蔬菜、豆腐一同放入甜醬油湯底中燉煮的料理,在1868年明治維新後開始普及——此前受佛教文化影響,吃牛肉長期受到限制。",
      etiquette:
        "煮熟的肉片請沾一下生蛋液再食用——這是這裡的標準吃法,並非額外選項。",
      hours: "11:00-22:00(最後點餐 21:30;20:00後入座則延至22:30)。週日及國定假日公休。",
    },
  },
];
