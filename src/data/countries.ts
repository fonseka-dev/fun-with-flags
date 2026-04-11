import { Country } from "./types";

export const countries: Country[] = [
  // ═══ AFRICA ═══
  {
    slug: "kenya",
    name: "Kenya",
    capital: "Nairobi",
    continent: "Africa",
    population: "54.0M",
    region: "East Africa",
    flagCode: "ke",
    flagDescription:
      "The Kenyan flag features three horizontal stripes — black, red, and green — separated by thin white bands. A Maasai shield and two crossed spears sit at the center. Black represents the people, red the blood shed for independence, green the landscape, and white peace.",
    funFacts: [
      {
        icon: "sprint",
        title: "Marathon Champions",
        description:
          "Kenya has produced more Olympic and World Championship marathon winners than any other country. The high-altitude Rift Valley is considered the birthplace of distance running.",
      },
      {
        icon: "park",
        title: "The Great Migration",
        description:
          "Every year, over 1.5 million wildebeest cross from Tanzania's Serengeti into Kenya's Maasai Mara — the largest land animal migration on Earth.",
      },
      {
        icon: "coffee",
        title: "World-Class Coffee",
        description:
          "Kenyan AA coffee is considered among the finest in the world, grown on the slopes of Mount Kenya at elevations above 1,500 meters.",
      },
    ],
  },
  {
    slug: "egypt",
    name: "Egypt",
    capital: "Cairo",
    continent: "Africa",
    population: "104.3M",
    region: "North Africa",
    flagCode: "eg",
    flagDescription:
      "The Egyptian flag has three horizontal stripes of red, white, and black, with the golden Eagle of Saladin centered on the white band. Red represents the struggle against colonialism, white symbolizes the 1952 revolution, and black recalls the end of oppression.",
    funFacts: [
      {
        icon: "pyramid",
        title: "Ancient Wonders",
        description:
          "The Great Pyramid of Giza is the only surviving structure of the original Seven Wonders of the Ancient World, built around 2560 BC.",
      },
      {
        icon: "water",
        title: "The Nile River",
        description:
          "The Nile is one of the longest rivers in the world at about 6,650 km. Ancient Egyptian civilization flourished on its fertile banks for over 3,000 years.",
      },
      {
        icon: "edit_note",
        title: "Hieroglyphic Writing",
        description:
          "Ancient Egyptians developed hieroglyphics — one of the earliest writing systems — around 3200 BC, using over 700 different symbols.",
      },
    ],
  },
  // ═══ ASIA ═══
  {
    slug: "japan",
    name: "Japan",
    capital: "Tokyo",
    continent: "Asia",
    population: "125.7M",
    region: "East Asia",
    flagCode: "jp",
    flagDescription:
      'The national flag of Japan, known as the Hinomaru ("Circle of the Sun"), features a red circle on a white field. White represents honesty and purity, while the red circle represents the sun — connecting Japan to its ancient name, "Land of the Rising Sun."',
    funFacts: [
      {
        icon: "mountain_flag",
        title: "Volcanic Landscape",
        description:
          "Japan has over 100 active volcanoes! Mount Fuji is the tallest and most iconic, standing at 3,776 meters.",
      },
      {
        icon: "restaurant",
        title: "Sushi Origins",
        description:
          'While sushi is now considered high-end cuisine, it originally started as a cheap "fast food" for laborers to eat on the go!',
      },
      {
        icon: "train",
        title: "Bullet Train Punctuality",
        description:
          'Japanese trains are so punctual that if a train is more than 5 minutes late, the staff hands out "delay certificates."',
      },
    ],
  },
  {
    slug: "india",
    name: "India",
    capital: "New Delhi",
    continent: "Asia",
    population: "1,428.6M",
    region: "South Asia",
    flagCode: "in",
    flagDescription:
      "India's tricolor flag features saffron (courage), white (peace and truth), and green (fertility). The navy blue Ashoka Chakra — a 24-spoke wheel — sits at the center, representing the eternal cycle of dharma (righteousness).",
    funFacts: [
      {
        icon: "calculate",
        title: "Inventor of Zero",
        description:
          "The concept of zero as a number was first developed by Indian mathematician Brahmagupta in 628 AD, revolutionizing mathematics worldwide.",
      },
      {
        icon: "movie",
        title: "Bollywood Powerhouse",
        description:
          "India's film industry produces more movies annually than Hollywood — over 1,500 films per year in more than 20 languages.",
      },
      {
        icon: "local_dining",
        title: "Spice Capital of the World",
        description:
          "India produces 75% of the world's spices and has been a hub of the global spice trade for over 4,000 years.",
      },
    ],
  },
  // ═══ EUROPE ═══
  {
    slug: "france",
    name: "France",
    capital: "Paris",
    continent: "Europe",
    population: "67.5M",
    region: "Western Europe",
    flagCode: "fr",
    flagDescription:
      "The French tricolor features three vertical bands of blue, white, and red. Adopted during the French Revolution, the colors combine the blue and red of Paris with the royal white, symbolizing liberty, equality, and fraternity.",
    funFacts: [
      {
        icon: "museum",
        title: "Art Capital",
        description:
          "The Louvre Museum in Paris is the world's largest art museum, housing over 380,000 objects including the Mona Lisa and the Venus de Milo.",
      },
      {
        icon: "bakery_dining",
        title: "Bread Culture",
        description:
          'The French eat about 10 billion baguettes per year. In 1993, the government passed a law defining exactly what a "traditional French baguette" must contain.',
      },
      {
        icon: "rocket_launch",
        title: "Space Pioneers",
        description:
          "France has the third-largest space program in the world. The Ariane rockets launch from French Guiana, near the equator for maximum efficiency.",
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    capital: "Berlin",
    continent: "Europe",
    population: "83.2M",
    region: "Central Europe",
    flagCode: "de",
    flagDescription:
      "Germany's flag displays three horizontal stripes of black, red, and gold. The colors date back to the early 19th century democratic movements and symbolize unity and freedom. They were officially adopted after World War II in 1949.",
    funFacts: [
      {
        icon: "directions_car",
        title: "Autobahn Freedom",
        description:
          "About 70% of Germany's Autobahn highways have no speed limit. Some drivers regularly travel above 200 km/h (124 mph).",
      },
      {
        icon: "castle",
        title: "Castle Country",
        description:
          "Germany has over 20,000 castles — more than any other country in the world. Neuschwanstein Castle inspired the Sleeping Beauty castle at Disneyland.",
      },
      {
        icon: "science",
        title: "Invention Nation",
        description:
          "Germans invented the printing press (Gutenberg), aspirin (Bayer), the automobile (Benz), and the MP3 audio format (Fraunhofer Institute).",
      },
    ],
  },
  // ═══ NORTH AMERICA ═══
  {
    slug: "canada",
    name: "Canada",
    capital: "Ottawa",
    continent: "North America",
    population: "38.2M",
    region: "Northern America",
    flagCode: "ca",
    flagDescription:
      "The Canadian flag features a red maple leaf on a white background, flanked by two red vertical bands. The maple leaf has been a symbol of Canada since the 1700s. The red and white colors were proclaimed Canada's official colors by King George V in 1921.",
    funFacts: [
      {
        icon: "water",
        title: "Lake Superpower",
        description:
          "Canada contains more lakes than the rest of the world combined — over 2 million lakes, holding 20% of the world's fresh water.",
      },
      {
        icon: "forest",
        title: "Massive Wilderness",
        description:
          "Canada is the second-largest country in the world by area, yet 90% of its population lives within 160 km of the US border.",
      },
      {
        icon: "sports_hockey",
        title: "Hockey Nation",
        description:
          "Ice hockey is so important in Canada that the sport is referenced in the country's currency — the $5 bill features children playing hockey.",
      },
    ],
  },
  {
    slug: "mexico",
    name: "Mexico",
    capital: "Mexico City",
    continent: "North America",
    population: "128.9M",
    region: "Central America",
    flagCode: "mx",
    flagDescription:
      "The Mexican flag has three vertical stripes of green, white, and red. The coat of arms at the center shows an eagle perched on a cactus, eating a snake — fulfilling an ancient Aztec prophecy about where to build their capital city, Tenochtitlan.",
    funFacts: [
      {
        icon: "restaurant",
        title: "Chocolate Inventors",
        description:
          "The ancient Aztecs and Maya invented chocolate over 3,000 years ago. They drank it as a bitter, spicy beverage called xocolātl — nothing like hot cocoa!",
      },
      {
        icon: "volcano",
        title: "Ring of Fire",
        description:
          'Mexico sits on the "Ring of Fire" and has 42 active volcanoes, including Popocatépetl near Mexico City, which is one of the most active in the world.',
      },
      {
        icon: "celebration",
        title: "Day of the Dead",
        description:
          "Día de los Muertos is a colorful celebration where families honor their deceased loved ones with altars, marigolds, sugar skulls, and their favorite foods.",
      },
    ],
  },
  // ═══ SOUTH AMERICA ═══
  {
    slug: "brazil",
    name: "Brazil",
    capital: "Brasília",
    continent: "South America",
    population: "214.3M",
    region: "Eastern South America",
    flagCode: "br",
    flagDescription:
      'The Brazilian flag features a green background with a large yellow diamond, inside which sits a dark blue globe with 27 white stars and a curved white band reading "Ordem e Progresso" (Order and Progress). The stars represent Brazil\'s states and the Federal District.',
    funFacts: [
      {
        icon: "forest",
        title: "Amazon Rainforest",
        description:
          "Brazil contains about 60% of the Amazon Rainforest — the largest tropical rainforest on Earth, producing about 20% of the world's oxygen.",
      },
      {
        icon: "sports_soccer",
        title: "Football Kingdom",
        description:
          "Brazil is the only country to have played in every FIFA World Cup tournament and has won the title a record 5 times.",
      },
      {
        icon: "celebration",
        title: "Carnival",
        description:
          "Rio de Janeiro's Carnival is the world's largest festival, attracting over 2 million people per day to the streets for music, dance, and elaborate costumes.",
      },
    ],
  },
  {
    slug: "argentina",
    name: "Argentina",
    capital: "Buenos Aires",
    continent: "South America",
    population: "45.8M",
    region: "Southern South America",
    flagCode: "ar",
    flagDescription:
      "Argentina's flag has three horizontal stripes — light blue, white, and light blue — with the Sun of May at the center. The sun commemorates the May 1810 revolution. The light blue represents the sky, and white represents clouds and snow of the Andes.",
    funFacts: [
      {
        icon: "music_note",
        title: "Tango Birthplace",
        description:
          "Tango was born in the neighborhoods of Buenos Aires in the late 1800s, blending African, European, and indigenous rhythms into one of the world's most passionate dances.",
      },
      {
        icon: "landscape",
        title: "Patagonian Glaciers",
        description:
          "Argentina's Perito Moreno Glacier in Patagonia is one of the few glaciers in the world that is still growing, advancing about 2 meters per day.",
      },
      {
        icon: "local_dining",
        title: "Steak Capital",
        description:
          "Argentines consume more beef per capita than almost any other country — about 50 kg per person per year. The traditional asado (barbecue) is a national ritual.",
      },
    ],
  },
  // ═══ OCEANIA ═══
  {
    slug: "australia",
    name: "Australia",
    capital: "Canberra",
    continent: "Oceania",
    population: "25.7M",
    region: "Australasia",
    flagCode: "au",
    flagDescription:
      "The Australian flag features the Union Jack in the upper left representing historical ties to Britain, the Commonwealth Star below it with seven points for the six states and territories, and the Southern Cross constellation of five stars on the right — visible only from the Southern Hemisphere.",
    funFacts: [
      {
        icon: "pets",
        title: "Unique Wildlife",
        description:
          "Australia is the only continent where marsupials (pouched mammals) dominate. Kangaroos, koalas, and wombats are found nowhere else in the wild.",
      },
      {
        icon: "waves",
        title: "Great Barrier Reef",
        description:
          "The Great Barrier Reef is the world's largest coral reef system — so big it can be seen from space. It stretches over 2,300 km along Queensland's coast.",
      },
      {
        icon: "wb_sunny",
        title: "Widest Country",
        description:
          "Australia is wider than the moon! The continent spans about 4,000 km east to west, while the moon's diameter is only 3,474 km.",
      },
    ],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    capital: "Wellington",
    continent: "Oceania",
    population: "5.1M",
    region: "Polynesia",
    flagCode: "nz",
    flagDescription:
      "New Zealand's flag features the Union Jack in the upper left and four red stars with white borders representing the Southern Cross constellation. The stars are slightly different sizes, reflecting the actual brightness of the stars in the night sky.",
    funFacts: [
      {
        icon: "nature_people",
        title: "More Sheep Than People",
        description:
          "New Zealand has about 26 million sheep for its 5 million people — a ratio of roughly 5 sheep per person.",
      },
      {
        icon: "hiking",
        title: "Adventure Capital",
        description:
          "Queenstown, New Zealand, is known as the adventure capital of the world. Bungee jumping was commercialized here in 1988.",
      },
      {
        icon: "movie",
        title: "Middle-earth",
        description:
          "The entire Lord of the Rings and Hobbit film trilogies were filmed in New Zealand. The Hobbiton movie set in Matamata is now a permanent tourist attraction.",
      },
    ],
  },

  // ═══ AFRICA (continued) ═══
  {
    slug: "nigeria",
    name: "Nigeria",
    capital: "Abuja",
    continent: "Africa",
    population: "218.5M",
    region: "West Africa",
    flagCode: "ng",
    flagDescription:
      "Nigeria's flag features two vertical green stripes flanking a central white stripe. Green represents Nigeria's lush agricultural land and forests, while white symbolizes peace and unity between the country's many ethnic groups.",
    funFacts: [
      {
        icon: "groups",
        title: "Most Populous in Africa",
        description:
          "Nigeria is Africa's most populous nation with over 218 million people. One in every six Africans is Nigerian.",
      },
      {
        icon: "movie",
        title: "Nollywood",
        description:
          "Nigeria's film industry, Nollywood, produces over 2,500 films per year — making it the second-largest film industry in the world by volume, ahead of Hollywood.",
      },
      {
        icon: "terrain",
        title: "Diverse Cultures",
        description:
          "Nigeria has over 500 distinct ethnic groups and languages. The three largest — Hausa-Fulani, Yoruba, and Igbo — each have rich traditions, music, and art.",
      },
    ],
  },
  {
    slug: "south-africa",
    name: "South Africa",
    capital: "Pretoria",
    continent: "Africa",
    population: "60.1M",
    region: "Southern Africa",
    flagCode: "za",
    flagDescription:
      "South Africa's flag is one of the most colorful in the world, featuring six colors: black, gold, green, white, red, and blue. The Y-shaped green band symbolizes the convergence of diverse elements of South African society.",
    funFacts: [
      {
        icon: "diamond",
        title: "Diamond Capital",
        description:
          "South Africa is home to the Kimberley Mine, once the world's largest diamond mine. The 'Big Hole' excavated there is considered the largest hand-dug excavation in history.",
      },
      {
        icon: "balance",
        title: "Three Capitals",
        description:
          "South Africa is the only country in the world with three official capitals: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial).",
      },
      {
        icon: "directions_walk",
        title: "Cradle of Humankind",
        description:
          "The Cradle of Humankind, a UNESCO World Heritage Site near Johannesburg, contains the world's largest concentration of hominin fossils — some over 3.5 million years old.",
      },
    ],
  },
  {
    slug: "ethiopia",
    name: "Ethiopia",
    capital: "Addis Ababa",
    continent: "Africa",
    population: "126.5M",
    region: "East Africa",
    flagCode: "et",
    flagDescription:
      "Ethiopia's flag has three equal horizontal stripes of green, yellow, and red with a blue disc and yellow pentagram at the center. These Pan-African colors inspired many flags across Africa after Ethiopia resisted European colonization.",
    funFacts: [
      {
        icon: "coffee",
        title: "Birthplace of Coffee",
        description:
          "Coffee originated in Ethiopia! According to legend, a goat herder named Kaldi noticed his goats became energetic after eating berries from a certain tree — that tree was the coffee plant.",
      },
      {
        icon: "access_time",
        title: "Unique Calendar",
        description:
          "Ethiopia has its own calendar with 13 months and is currently about 7–8 years behind the Gregorian calendar. New Year is celebrated in September!",
      },
      {
        icon: "history",
        title: "Oldest Christian Nation",
        description:
          "Ethiopia is one of the world's oldest Christian nations, adopting Christianity as a state religion in 330 AD — before most European countries.",
      },
    ],
  },
  {
    slug: "morocco",
    name: "Morocco",
    capital: "Rabat",
    continent: "Africa",
    population: "37.5M",
    region: "North Africa",
    flagCode: "ma",
    flagDescription:
      "Morocco's flag is bright red with a green pentagram (five-pointed star) at the center called the Seal of Solomon. Red represents hardiness and bravery, while green symbolizes hope, joy, and love.",
    funFacts: [
      {
        icon: "castle",
        title: "Ancient Medinas",
        description:
          "Fez's medina is the world's largest car-free urban area, a UNESCO World Heritage Site with streets so narrow that two donkeys can barely pass each other.",
      },
      {
        icon: "landscape",
        title: "Sahara Desert Gateway",
        description:
          "Morocco is one of the best places to experience the Sahara Desert. The Erg Chebbi dunes near Merzouga can soar up to 150 meters high.",
      },
      {
        icon: "restaurant",
        title: "Tagine Tradition",
        description:
          "The tagine — a slow-cooked stew named after the conical clay pot it's cooked in — has been a cornerstone of Moroccan cuisine for thousands of years.",
      },
    ],
  },
  {
    slug: "ghana",
    name: "Ghana",
    capital: "Accra",
    continent: "Africa",
    population: "33.5M",
    region: "West Africa",
    flagCode: "gh",
    flagDescription:
      "Ghana's flag has three horizontal stripes of red, gold, and green with a black star at the center. Red represents blood shed for independence, gold symbolizes mineral wealth, green represents forests, and the black star stands for African freedom.",
    funFacts: [
      {
        icon: "star",
        title: "First Independent African Nation",
        description:
          "Ghana was the first sub-Saharan African country to gain independence from colonial rule, achieving it in 1957 under Kwame Nkrumah's leadership.",
      },
      {
        icon: "shopping_bag",
        title: "Kente Cloth",
        description:
          "Kente cloth, woven from silk and cotton, is one of Ghana's greatest cultural treasures. Originally worn only by royalty, each pattern has symbolic meaning.",
      },
      {
        icon: "forest",
        title: "Cocoa Capital",
        description:
          "Ghana is the world's second-largest producer of cocoa beans, which are used to make chocolate. About 40% of the world's cocoa comes from West Africa.",
      },
    ],
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    capital: "Dodoma",
    continent: "Africa",
    population: "63.3M",
    region: "East Africa",
    flagCode: "tz",
    flagDescription:
      "Tanzania's flag has a black diagonal stripe with yellow borders running from the lower-left to upper-right, dividing the flag into green (upper-left) and blue (lower-right). Black represents the people, green the land, blue the sea, and yellow the mineral wealth.",
    funFacts: [
      {
        icon: "terrain",
        title: "Roof of Africa",
        description:
          "Mount Kilimanjaro in Tanzania is the highest peak in Africa at 5,895 meters. It's a volcanic mountain that can be climbed without any technical equipment.",
      },
      {
        icon: "park",
        title: "Serengeti Migration",
        description:
          "The Serengeti National Park hosts the Great Migration, where 1.5 million wildebeest and 250,000 zebra make an epic annual journey across the savanna.",
      },
      {
        icon: "anchor",
        title: "Zanzibar Spice Island",
        description:
          "The island of Zanzibar, part of Tanzania, was once the world's largest producer of cloves. Its old town is a UNESCO World Heritage Site with a rich Swahili culture.",
      },
    ],
  },
  {
    slug: "senegal",
    name: "Senegal",
    capital: "Dakar",
    continent: "Africa",
    population: "17.8M",
    region: "West Africa",
    flagCode: "sn",
    flagDescription:
      "Senegal's flag has three vertical stripes of green, yellow, and red. A green five-pointed star sits at the center. The Pan-African colors represent hope (green), wealth (yellow), and blood of martyrs (red).",
    funFacts: [
      {
        icon: "sports_soccer",
        title: "Wrestling Nation",
        description:
          "Traditional Senegalese wrestling (laamb) is the country's most popular sport, more popular even than football. Champions are celebrated as national heroes.",
      },
      {
        icon: "music_note",
        title: "Mbalax Music",
        description:
          "Mbalax, a rhythmic music genre blending traditional Wolof percussion with jazz, is Senegal's signature sound. Superstar Youssou N'Dour brought it to global audiences.",
      },
      {
        icon: "landscape",
        title: "Pink Lake",
        description:
          "Lake Retba (Lac Rose) near Dakar has bubblegum-pink water caused by a salt-loving micro-organism. With 40% salinity — saltier than the Dead Sea — swimmers float effortlessly.",
      },
    ],
  },
  {
    slug: "rwanda",
    name: "Rwanda",
    capital: "Kigali",
    continent: "Africa",
    population: "13.5M",
    region: "East Africa",
    flagCode: "rw",
    flagDescription:
      "Rwanda's flag features three horizontal bands of blue (top, taking up half the flag), yellow, and green. A golden sun with 24 rays appears in the upper-right corner of the blue band, symbolizing unity, work, and national pride.",
    funFacts: [
      {
        icon: "forest",
        title: "Mountain Gorilla Haven",
        description:
          "Rwanda's Volcanoes National Park is home to about half the world's remaining mountain gorillas. Up-close gorilla trekking experiences are among the world's most memorable wildlife encounters.",
      },
      {
        icon: "recycling",
        title: "Greenest City in Africa",
        description:
          "Kigali is considered Africa's cleanest and most organized capital city. Rwanda banned plastic bags in 2008 — years before most developed countries.",
      },
      {
        icon: "female",
        title: "Most Female Parliament",
        description:
          "Rwanda has the world's highest percentage of women in parliament at over 60%, leading the world in gender equality in government.",
      },
    ],
  },

  // ═══ ASIA (continued) ═══
  {
    slug: "china",
    name: "China",
    capital: "Beijing",
    continent: "Asia",
    population: "1.41B",
    region: "East Asia",
    flagCode: "cn",
    flagDescription:
      "China's flag is red with one large yellow star and four smaller yellow stars in the upper-left corner. Red represents the communist revolution, while the yellow stars symbolize the unity of the Chinese people under the Communist Party.",
    funFacts: [
      {
        icon: "wall",
        title: "Great Wall",
        description:
          "The Great Wall of China stretches over 21,000 km and was built over many centuries to protect against invasions. However, contrary to popular belief, it cannot be seen from space with the naked eye.",
      },
      {
        icon: "restaurant",
        title: "Noodles: The Original Pasta",
        description:
          "The world's oldest noodles — about 4,000 years old — were discovered in China. Made from millet grass, they were found at the Lajia archaeological site.",
      },
      {
        icon: "rocket_launch",
        title: "Four Great Inventions",
        description:
          "Ancient China gave the world four transformative inventions: paper, printing, gunpowder, and the compass — all of which have shaped civilization globally.",
      },
    ],
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    capital: "Jakarta",
    continent: "Asia",
    population: "277.5M",
    region: "Southeast Asia",
    flagCode: "id",
    flagDescription:
      "Indonesia's flag, known as the Sang Saka Merah Putih (Sacred Red and White), features two equal horizontal stripes — red on top and white below. Red represents courage and white symbolizes purity.",
    funFacts: [
      {
        icon: "public",
        title: "World's Largest Archipelago",
        description:
          "Indonesia is the world's largest archipelago nation with over 17,000 islands. About 6,000 of those islands are inhabited by people.",
      },
      {
        icon: "forest",
        title: "Orangutan Home",
        description:
          "Borneo and Sumatra — two of Indonesia's main islands — are among the last wild habitats of orangutans, which share about 97% of human DNA.",
      },
      {
        icon: "volcano",
        title: "Ring of Fire",
        description:
          "Indonesia sits on the Pacific Ring of Fire and has over 130 active volcanoes — the most of any country. The 1883 Krakatoa eruption was heard 4,800 km away.",
      },
    ],
  },
  {
    slug: "thailand",
    name: "Thailand",
    capital: "Bangkok",
    continent: "Asia",
    population: "71.8M",
    region: "Southeast Asia",
    flagCode: "th",
    flagDescription:
      "Thailand's flag, known as the Trairanga (Tricolor), has five horizontal stripes: red, white, blue, white, and red. Red represents the nation and blood of the people, white symbolizes religion and purity, and blue stands for the monarchy.",
    funFacts: [
      {
        icon: "temple_buddhist",
        title: "Land of Temples",
        description:
          "Thailand has over 40,000 Buddhist temples (wats). Bangkok alone contains more than 400 temples, with Wat Pho housing a 46-meter-long reclining Buddha statue.",
      },
      {
        icon: "emoji_nature",
        title: "Elephant Symbol",
        description:
          "The elephant has been sacred to Thailand for centuries. Thai war elephants once decided battles, and the white elephant is considered so rare and auspicious that it belongs to the king.",
      },
      {
        icon: "restaurant",
        title: "Street Food Paradise",
        description:
          "Thailand has one of the most vibrant street food cultures on Earth. Pad Thai, som tum, and mango sticky rice are enjoyed by millions daily from roadside stalls.",
      },
    ],
  },
  {
    slug: "vietnam",
    name: "Vietnam",
    capital: "Hanoi",
    continent: "Asia",
    population: "97.5M",
    region: "Southeast Asia",
    flagCode: "vn",
    flagDescription:
      "Vietnam's flag is a solid red background with a large gold star at the center. The red symbolizes the revolution and the blood shed by soldiers, while the five-pointed gold star represents the five classes of Vietnamese workers: intellectuals, farmers, workers, businesspeople, and soldiers.",
    funFacts: [
      {
        icon: "landscape",
        title: "Ha Long Bay",
        description:
          "Ha Long Bay features 1,600 limestone islands and islets rising from emerald waters near the Gulf of Tonkin. It's a UNESCO World Heritage Site and one of the most breathtaking natural wonders of the world.",
      },
      {
        icon: "directions_bike",
        title: "Motorbike Nation",
        description:
          "Vietnam has about 45 million registered motorbikes — one for every two people. Watching traffic flow through Hanoi is like watching a river of bikes weave seamlessly together.",
      },
      {
        icon: "restaurant",
        title: "Pho Culture",
        description:
          "Pho, a fragrant noodle soup, is more than Vietnam's national dish — it's a cultural institution. Shops open at dawn to serve broth simmered overnight for 12–24 hours.",
      },
    ],
  },
  {
    slug: "south-korea",
    name: "South Korea",
    capital: "Seoul",
    continent: "Asia",
    population: "51.7M",
    region: "East Asia",
    flagCode: "kr",
    flagDescription:
      "South Korea's flag (the Taegukgi) has a white background representing purity, a red-and-blue yin-yang circle called the Taeguk symbolizing balance, and four black trigrams from the I Ching in the corners representing heaven, earth, water, and fire.",
    funFacts: [
      {
        icon: "wifi",
        title: "Fastest Internet",
        description:
          "South Korea consistently ranks among the top nations for internet speed. Nearly every home and street corner is connected, making it a global leader in digital infrastructure.",
      },
      {
        icon: "music_note",
        title: "K-Pop Phenomenon",
        description:
          "K-pop is a global cultural force. Groups like BTS and BLACKPINK have hundreds of millions of fans worldwide, and South Korea exports its pop culture through music, dramas, and food.",
      },
      {
        icon: "restaurant",
        title: "Kimchi Kingdom",
        description:
          "Kimchi — fermented vegetables, usually cabbage — is Korea's most iconic food. Koreans eat about 1.85 million tons per year, with many households still making it from scratch in a tradition called kimjang.",
      },
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    capital: "Riyadh",
    continent: "Asia",
    population: "36.0M",
    region: "Western Asia",
    flagCode: "sa",
    flagDescription:
      "Saudi Arabia's flag is green with white Arabic script reading the Shahada (Islamic declaration of faith) and a white sword below it. Green is the traditional color of Islam, and the sword represents strength and justice.",
    funFacts: [
      {
        icon: "oil_barrel",
        title: "Oil Giant",
        description:
          "Saudi Arabia holds about 17% of the world's proven petroleum reserves and is typically the world's largest oil exporter. Oil accounts for about 70% of the country's export earnings.",
      },
      {
        icon: "mosque",
        title: "Holy Cities",
        description:
          "Saudi Arabia is home to Islam's two holiest cities: Mecca and Medina. Every Muslim who is able is expected to make a pilgrimage (Hajj) to Mecca at least once, drawing 2-3 million pilgrims annually.",
      },
      {
        icon: "landscape",
        title: "Ancient Trading Hub",
        description:
          "Al-Ula, in northwestern Saudi Arabia, contains the remarkably preserved Nabataean city of Hegra, with tombs carved directly into rose-red sandstone cliffs — a second Petra.",
      },
    ],
  },
  {
    slug: "turkey",
    name: "Turkey",
    capital: "Ankara",
    continent: "Asia",
    population: "85.3M",
    region: "Western Asia",
    flagCode: "tr",
    flagDescription:
      "Turkey's flag is red with a white crescent moon and a white star. The crescent and star are symbols of Islam and have appeared on Ottoman flags for centuries. According to legend, the crescent reflects the moon's image in a pool of blood after a battle.",
    funFacts: [
      {
        icon: "history",
        title: "Where East Meets West",
        description:
          "Istanbul is the only city in the world that straddles two continents — Europe and Asia are separated by the Bosphorus Strait, which runs right through the middle of the city.",
      },
      {
        icon: "restaurant",
        title: "Birthplace of Baklava",
        description:
          "Turkey lays claim to baklava, a rich pastry of filo dough, nuts, and syrup. Turkish coffee — thick, unfiltered, and often served with fortune-telling from the grounds — is also a UNESCO-listed cultural heritage.",
      },
      {
        icon: "landscape",
        title: "Fairy Chimneys",
        description:
          "Cappadocia's otherworldly landscape features volcanic rock formations called 'fairy chimneys' that have been hollowed out into cave homes and hotels for thousands of years.",
      },
    ],
  },
  {
    slug: "philippines",
    name: "Philippines",
    capital: "Manila",
    continent: "Asia",
    population: "115.6M",
    region: "Southeast Asia",
    flagCode: "ph",
    flagDescription:
      "The Philippines flag has a blue stripe (top) and red stripe (bottom) with a white equilateral triangle on the left containing a yellow sun with eight rays and three yellow stars. Blue represents peace and justice, red represents courage, and the sun's eight rays represent the first eight provinces that revolted against Spanish rule.",
    funFacts: [
      {
        icon: "anchor",
        title: "7,641 Islands",
        description:
          "The Philippines is an archipelago of 7,641 islands. The number officially changed in 2016 when new islands were discovered through satellite imagery.",
      },
      {
        icon: "music_note",
        title: "Karaoke Homeland",
        description:
          "The karaoke machine was invented by Roberto del Rosario of the Philippines in 1975. Today, singing is deeply embedded in Filipino culture with karaoke bars everywhere.",
      },
      {
        icon: "water",
        title: "Tubbataha Reef",
        description:
          "Tubbataha Reef Natural Park in the Sulu Sea is a UNESCO World Heritage Site and one of the world's best dive spots, home to over 600 species of fish and 360 species of coral.",
      },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    capital: "Singapore",
    continent: "Asia",
    population: "5.9M",
    region: "Southeast Asia",
    flagCode: "sg",
    flagDescription:
      "Singapore's flag has two horizontal stripes — red over white. On the red stripe, a white crescent moon faces five white stars arranged in a circle. Red represents universal brotherhood, white stands for purity, the crescent symbolizes the young nation, and the five stars represent democracy, peace, progress, justice, and equality.",
    funFacts: [
      {
        icon: "forest",
        title: "City in a Garden",
        description:
          "Singapore's Gardens by the Bay features 18 'Supertrees' — vertical gardens up to 16 stories tall — and over 250,000 plants. Singapore is called a 'City in a Garden' for its remarkable green urban spaces.",
      },
      {
        icon: "restaurant",
        title: "Hawker Culture",
        description:
          "Singapore's hawker centres, where dozens of food stalls serve dishes at low prices, were recognized by UNESCO as an Intangible Cultural Heritage. Singapore even has Michelin-starred street food stalls.",
      },
      {
        icon: "account_balance",
        title: "No Natural Resources",
        description:
          "Singapore has almost no natural resources and must import almost all its water and food. Yet it has become one of the world's wealthiest and most prosperous nations through trade and education.",
      },
    ],
  },
  {
    slug: "united-arab-emirates",
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    continent: "Asia",
    population: "9.9M",
    region: "Western Asia",
    flagCode: "ae",
    flagDescription:
      "The UAE flag has three equal horizontal stripes of green, white, and black with a vertical red stripe on the left. The Arab Liberation colours represent Arab unity: red for hardiness and courage, green for hope and prosperity, white for peace and neutrality, and black for the defeat of enemies.",
    funFacts: [
      {
        icon: "apartment",
        title: "Tallest Building",
        description:
          "The Burj Khalifa in Dubai is the world's tallest building at 828 meters — taller than 160 floors. On a clear day, you can see it from 95 km away.",
      },
      {
        icon: "wb_sunny",
        title: "Desert Skiing",
        description:
          "Ski Dubai inside a shopping mall maintains temperatures of -1°C in the desert where outside it may be 45°C. The indoor ski slope is 400 meters long with real snow.",
      },
      {
        icon: "emoji_nature",
        title: "Falcon Culture",
        description:
          "Falconry is a UNESCO-listed cultural heritage in the UAE. Falcons are treated as prized companions — they even get their own passports for international travel with their owners.",
      },
    ],
  },

  // ═══ EUROPE (continued) ═══
  {
    slug: "italy",
    name: "Italy",
    capital: "Rome",
    continent: "Europe",
    population: "60.3M",
    region: "Southern Europe",
    flagCode: "it",
    flagDescription:
      "Italy's flag is a vertical tricolor of green, white, and red. Inspired by the French flag during Napoleon's campaign, the colors were adopted in 1797. Green represents hope and the Italian landscape, white symbolizes faith and the snow-capped Alps, and red represents charity and the blood of patriots.",
    funFacts: [
      {
        icon: "history",
        title: "Most UNESCO Sites",
        description:
          "Italy has more UNESCO World Heritage Sites than any other country — 58 sites ranging from the Colosseum and Pompeii to the Venice lagoon and Cinque Terre.",
      },
      {
        icon: "restaurant",
        title: "Pasta Pioneers",
        description:
          "Italy has over 350 distinct pasta shapes, each traditionally matched with specific sauces. 'Spaghetti Bolognese' is actually not a traditional Italian dish — in Bologna, the ragu is served with tagliatelle.",
      },
      {
        icon: "palette",
        title: "Renaissance Birthplace",
        description:
          "Italy was the birthplace of the Renaissance — a cultural rebirth in art, science, and architecture. Leonardo da Vinci, Michelangelo, and Galileo all called Italy home.",
      },
    ],
  },
  {
    slug: "spain",
    name: "Spain",
    capital: "Madrid",
    continent: "Europe",
    population: "47.4M",
    region: "Southern Europe",
    flagCode: "es",
    flagDescription:
      "Spain's flag has three horizontal stripes — red at top and bottom with a wide yellow stripe in the middle bearing the Spanish coat of arms. The red and yellow have been associated with Spanish rule since the 15th century.",
    funFacts: [
      {
        icon: "celebration",
        title: "Festival Country",
        description:
          "Spain has some of the world's most spectacular festivals including La Tomatina (tomato fight), Running of the Bulls in Pamplona, and Las Fallas fire festival in Valencia.",
      },
      {
        icon: "restaurant",
        title: "Tapas Culture",
        description:
          "Tapas originated in southern Spain as small dishes served with drinks. The word means 'lid' — early tapas were slices of bread placed over glasses to keep flies out.",
      },
      {
        icon: "palette",
        title: "Gaudí's Architecture",
        description:
          "Antoni Gaudí designed Barcelona's Sagrada Família basilica, which has been under construction since 1882 and is still not finished. It's one of the most-visited buildings in the world.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    capital: "London",
    continent: "Europe",
    population: "67.5M",
    region: "Northern Europe",
    flagCode: "gb",
    flagDescription:
      "The UK flag, the Union Jack, combines three crosses: the red St George's Cross (England), the white diagonal St Andrew's Cross (Scotland), and the red diagonal St Patrick's Cross (Ireland). The blue background comes from the Scottish flag.",
    funFacts: [
      {
        icon: "history",
        title: "Industrial Revolution",
        description:
          "The United Kingdom was the birthplace of the Industrial Revolution in the 18th century, changing the world through steam engines, factories, and railways — launching the modern era.",
      },
      {
        icon: "menu_book",
        title: "Shakespeare's Legacy",
        description:
          "William Shakespeare invented over 1,700 words still used today, including 'bedroom', 'lonely', 'generous', and 'eyeball'. He remains the most performed playwright in history.",
      },
      {
        icon: "music_note",
        title: "British Invasion",
        description:
          "In the 1960s, British bands like The Beatles, The Rolling Stones, and The Who transformed global music in what became known as the 'British Invasion' of American pop culture.",
      },
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    capital: "Lisbon",
    continent: "Europe",
    population: "10.3M",
    region: "Southern Europe",
    flagCode: "pt",
    flagDescription:
      "Portugal's flag has a vertical green stripe on the left and a wider red stripe on the right with the Portuguese coat of arms centered on the border. Green represents hope for the future, while red honors those who died fighting for the country.",
    funFacts: [
      {
        icon: "anchor",
        title: "Age of Exploration",
        description:
          "In the 15th and 16th centuries, Portuguese explorers mapped much of the world. Vasco da Gama found the sea route to India, and Bartolomeu Dias was the first European to round the Cape of Good Hope.",
      },
      {
        icon: "music_note",
        title: "Fado Music",
        description:
          "Fado is Portugal's haunting, melancholy music genre expressing longing (saudade). UNESCO recognized fado as an Intangible Cultural Heritage in 2011.",
      },
      {
        icon: "restaurant",
        title: "Pastel de Nata",
        description:
          "The pastel de nata (custard tart) was invented by monks at Jerónimos Monastery in Lisbon in the 18th century. The original recipe from Pastéis de Belém is still a closely guarded secret.",
      },
    ],
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    capital: "Amsterdam",
    continent: "Europe",
    population: "17.9M",
    region: "Western Europe",
    flagCode: "nl",
    flagDescription:
      "The Netherlands flag has three equal horizontal stripes of red, white, and blue from top to bottom. It is one of the oldest tricolor flags in the world, adopted in the 17th century during the Dutch Republic.",
    funFacts: [
      {
        icon: "directions_bike",
        title: "Bicycle Capital",
        description:
          "The Netherlands has more bicycles than people — around 23 million bikes for 17.9 million residents. Amsterdam has 800,000 bikes but only 600,000 residents.",
      },
      {
        icon: "landscape",
        title: "Below Sea Level",
        description:
          "About 26% of the Netherlands lies below sea level. The Dutch have been reclaiming land from the sea for centuries using a sophisticated system of dykes and pumping stations.",
      },
      {
        icon: "local_florist",
        title: "Tulip Capital",
        description:
          "The Netherlands is the world's largest flower exporter, selling about 12 billion tulip bulbs per year. Tulips actually originated in Turkey but became the Dutch national flower.",
      },
    ],
  },
  {
    slug: "sweden",
    name: "Sweden",
    capital: "Stockholm",
    continent: "Europe",
    population: "10.6M",
    region: "Northern Europe",
    flagCode: "se",
    flagDescription:
      "Sweden's flag is a golden-yellow Nordic cross on a blue background. The cross design — with the crossbar extending to the right edge — is shared with all Nordic countries. The blue and yellow colors have been associated with Sweden since the 14th century.",
    funFacts: [
      {
        icon: "forest",
        title: "Right to Roam",
        description:
          "Sweden has the 'Allemansrätten' or 'Everyman's Right' — the legal right to roam freely across any land, including private property, as long as you don't disturb it.",
      },
      {
        icon: "lightbulb",
        title: "Innovation Nation",
        description:
          "Sweden has given the world dynamite (Alfred Nobel), the zipper, the safety match, Bluetooth technology, and Spotify. For a small nation, it has an outsized innovation record.",
      },
      {
        icon: "wb_sunny",
        title: "Midsommar Festival",
        description:
          "Midsommar, celebrated around the summer solstice in June, is Sweden's most important celebration. Swedes dance around a maypole, eat herring, and stay up for the midnight sun.",
      },
    ],
  },
  {
    slug: "switzerland",
    name: "Switzerland",
    capital: "Bern",
    continent: "Europe",
    population: "8.7M",
    region: "Western Europe",
    flagCode: "ch",
    flagDescription:
      "Switzerland's flag is a red square with a white cross. One of only two square national flags (the other being Vatican City), the flag's design dates back to the 14th century and inspired the Red Cross symbol.",
    funFacts: [
      {
        icon: "terrain",
        title: "Alpine Nation",
        description:
          "About 70% of Switzerland is covered by the Alps. The country has 208 mountains above 3,000 meters and some of the world's most scenic train journeys, like the Glacier Express.",
      },
      {
        icon: "restaurant",
        title: "Chocolate and Cheese",
        description:
          "Switzerland is famous for both chocolate and cheese. Swiss cheese (raclette, emmental, gruyère) and Swiss chocolate brands like Lindt and Toblerone are known worldwide.",
      },
      {
        icon: "balance",
        title: "Permanent Neutrality",
        description:
          "Switzerland has been officially neutral in international conflicts since 1815. It was the last European country to join the United Nations in 2002 and still hasn't joined the EU.",
      },
    ],
  },
  {
    slug: "poland",
    name: "Poland",
    capital: "Warsaw",
    continent: "Europe",
    population: "37.8M",
    region: "Central Europe",
    flagCode: "pl",
    flagDescription:
      "Poland's flag has two equal horizontal stripes — white on top and red on bottom. These two colors have represented Poland since the 13th century. The colors come from the coat of arms showing a white eagle on a red background.",
    funFacts: [
      {
        icon: "music_note",
        title: "Chopin's Homeland",
        description:
          "Frédéric Chopin, one of the greatest piano composers in history, was born in Poland. His romantic compositions are deeply tied to Polish folk music and national identity.",
      },
      {
        icon: "science",
        title: "Marie Curie",
        description:
          "Marie Curie, born Maria Sklodowska in Warsaw, was the first woman to win a Nobel Prize — and the only person ever to win Nobel Prizes in two different sciences (Physics and Chemistry).",
      },
      {
        icon: "castle",
        title: "Medieval Treasures",
        description:
          "Krakow's Wawel Castle and the medieval old town are UNESCO World Heritage Sites. The city miraculously escaped destruction in WWII and preserves centuries of Polish history.",
      },
    ],
  },
  {
    slug: "greece",
    name: "Greece",
    capital: "Athens",
    continent: "Europe",
    population: "10.7M",
    region: "Southern Europe",
    flagCode: "gr",
    flagDescription:
      "Greece's flag has nine equal blue and white horizontal stripes with a white cross on a blue square in the upper left. The nine stripes represent the nine syllables of 'Eleftheria i thanatos' (Freedom or Death) — the motto of the Greek revolution.",
    funFacts: [
      {
        icon: "history",
        title: "birthplace of Democracy",
        description:
          "Ancient Athens invented democracy around 508 BC. Citizens gathered in the Agora to vote directly on laws — an idea that transformed how the world is governed.",
      },
      {
        icon: "sports",
        title: "Olympic Origins",
        description:
          "The Olympic Games were first held in ancient Olympia, Greece, in 776 BC in honor of the god Zeus. The modern Games were revived in Athens in 1896.",
      },
      {
        icon: "castle",
        title: "The Acropolis",
        description:
          "The Parthenon on Athens' Acropolis, built in 447 BC, is considered the pinnacle of ancient Greek architecture and one of the most recognizable structures in the world.",
      },
    ],
  },
  {
    slug: "norway",
    name: "Norway",
    capital: "Oslo",
    continent: "Europe",
    population: "5.4M",
    region: "Northern Europe",
    flagCode: "no",
    flagDescription:
      "Norway's flag has a red background with a blue Nordic cross outlined in white. The cross symbol is used by all Nordic countries. The design was adopted in 1821 to distinguish the Norwegian flag from similar Scandinavian flags.",
    funFacts: [
      {
        icon: "local_see",
        title: "Northern Lights",
        description:
          "Norway is one of the best places in the world to see the Aurora Borealis (Northern Lights). Tromsø, above the Arctic Circle, is nicknamed the 'Gateway to the Arctic'.",
      },
      {
        icon: "directions_boat",
        title: "Viking Origins",
        description:
          "Norway was the heartland of the Vikings who explored, traded, and settled from Iceland to North America about 500 years before Columbus.",
      },
      {
        icon: "account_balance",
        title: "World's Richest Fund",
        description:
          "Norway's sovereign wealth fund — built from oil revenues — is the world's largest at over $1.4 trillion, investing in about 9,000 companies in 70 countries.",
      },
    ],
  },
  {
    slug: "russia",
    name: "Russia",
    capital: "Moscow",
    continent: "Europe",
    population: "144.2M",
    region: "Eastern Europe",
    flagCode: "ru",
    flagDescription:
      "Russia's flag has three equal horizontal stripes of white, blue, and red from top to bottom. The white-blue-red tricolor was introduced by Peter the Great in the 17th century, inspired by the Dutch flag when he visited the Netherlands to study shipbuilding.",
    funFacts: [
      {
        icon: "public",
        title: "Largest Country on Earth",
        description:
          "Russia is by far the largest country in the world, covering 17.1 million km² — spanning 11 time zones and both Europe and Asia. It's larger than the entire continent of Pluto.",
      },
      {
        icon: "rocket_launch",
        title: "Space Pioneer",
        description:
          "The Soviet Union (Russia) launched the first satellite (Sputnik, 1957), the first human in space (Yuri Gagarin, 1961), and the first space station. Gagarin's 'Let's go!' became one of history's most famous quotes.",
      },
      {
        icon: "train",
        title: "Trans-Siberian Railway",
        description:
          "The Trans-Siberian Railway is the world's longest railway at 9,289 km, connecting Moscow to the Russian Far East. The full journey takes about 7 days.",
      },
    ],
  },

  // ═══ NORTH AMERICA (continued) ═══
  {
    slug: "united-states",
    name: "United States",
    capital: "Washington D.C.",
    continent: "North America",
    population: "334.9M",
    region: "Northern America",
    flagCode: "us",
    flagDescription:
      "The US flag has 13 alternating red and white horizontal stripes representing the original 13 colonies, and 50 white stars on a blue canton representing the current 50 states. The blue represents vigilance, perseverance and justice; red symbolizes hardiness and valor.",
    funFacts: [
      {
        icon: "landscape",
        title: "National Parks",
        description:
          "The USA has 63 national parks protecting some of Earth's most spectacular landscapes, from Yellowstone's geysers to the Grand Canyon's mile-deep gorge. The idea of creating national parks was called 'America's best idea'.",
      },
      {
        icon: "lightbulb",
        title: "Innovation Engine",
        description:
          "The USA has produced more Nobel Prize winners than any other country and is home to the world's most prestigious technology companies. Silicon Valley has spawned Google, Apple, and thousands of world-changing startups.",
      },
      {
        icon: "music_note",
        title: "Birthplace of Jazz",
        description:
          "Jazz emerged in New Orleans in the late 1800s from a fusion of African rhythms, blues, and European classical music. It's considered America's greatest original art form and gave rise to genres from pop to hip-hop.",
      },
    ],
  },
  {
    slug: "cuba",
    name: "Cuba",
    capital: "Havana",
    continent: "North America",
    population: "11.3M",
    region: "Caribbean",
    flagCode: "cu",
    flagDescription:
      "Cuba's flag has five alternating blue and white horizontal stripes with a red triangle on the left containing a white five-pointed star. The triangle represents liberty, equality, and fraternity, and the star is the 'Lone Star' symbolizing Cuba's independence.",
    funFacts: [
      {
        icon: "music_note",
        title: "Rhythm of Salsa",
        description:
          "Cuba is the birthplace of salsa, rumba, mambo, and cha-cha-cha. Cuban music has influenced the entire world, blending African rhythms with Spanish guitar.",
      },
      {
        icon: "directions_car",
        title: "Classic Car Haven",
        description:
          "Havana's streets are famously full of American cars from the 1950s, preserved as a result of the US trade embargo. These vintage vehicles are now iconic symbols of Cuba.",
      },
      {
        icon: "sports",
        title: "Baseball Nation",
        description:
          "Baseball is Cuba's national sport and passion. Despite being a small island, Cuba has won the most Baseball World Cups and consistently challenges powerhouse nations in the Olympics.",
      },
    ],
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    capital: "Kingston",
    continent: "North America",
    population: "2.8M",
    region: "Caribbean",
    flagCode: "jm",
    flagDescription:
      "Jamaica's flag is the only national flag that doesn't use red, white, or blue. It features a gold diagonal cross dividing the flag into four triangles — green on the left and right, black on top and bottom. Gold represents natural wealth, green the land and hope, and black the strength of the people.",
    funFacts: [
      {
        icon: "music_note",
        title: "Reggae Homeland",
        description:
          "Jamaica is the birthplace of reggae music. Bob Marley, who grew up in Kingston, brought reggae to the entire world. UNESCO listed reggae music as an Intangible Cultural Heritage.",
      },
      {
        icon: "sprint",
        title: "Fastest Nation",
        description:
          "Jamaica has produced the world's fastest sprinters proportionally. Usain Bolt, who broke multiple world records, is from Trelawny, Jamaica. The island dominates Olympic 100m and 200m events.",
      },
      {
        icon: "coffee",
        title: "Blue Mountain Coffee",
        description:
          "Jamaica's Blue Mountain coffee is among the most expensive in the world. Grown in misty mountains at over 2,000 meters, it's known for its mild flavor and lack of bitterness.",
      },
    ],
  },
  {
    slug: "costa-rica",
    name: "Costa Rica",
    capital: "San José",
    continent: "North America",
    population: "5.2M",
    region: "Central America",
    flagCode: "cr",
    flagDescription:
      "Costa Rica's flag has five horizontal stripes: blue, white, red (double width), white, and blue. The coat of arms sits on the red stripe. The colors were inspired by France's flag; blue represents the sky, white symbolizes peace, and red represents the warmth of the people.",
    funFacts: [
      {
        icon: "forest",
        title: "Biodiversity Hotspot",
        description:
          "Despite being smaller than the US state of West Virginia, Costa Rica contains about 6% of the world's total biodiversity, including 500,000 species of animals and plants.",
      },
      {
        icon: "bolt",
        title: "Almost 100% Renewables",
        description:
          "Costa Rica regularly generates over 99% of its electricity from renewable sources — mostly hydropower, geothermal, and wind. It's one of the greenest nations on Earth.",
      },
      {
        icon: "balance",
        title: "No Army Since 1948",
        description:
          "Costa Rica abolished its military in 1948 and redirected that budget to education and healthcare. It's been nicknamed 'the Switzerland of Central America'.",
      },
    ],
  },
  {
    slug: "haiti",
    name: "Haiti",
    capital: "Port-au-Prince",
    continent: "North America",
    population: "11.4M",
    region: "Caribbean",
    flagCode: "ht",
    flagDescription:
      "Haiti's flag has two horizontal stripes of blue (top) and red (bottom) with the national coat of arms at the center. The flag was created by slicing the French tricolor and removing the white stripe — symbolically removing white colonizers from the island.",
    funFacts: [
      {
        icon: "history",
        title: "First Black Republic",
        description:
          "Haiti became the world's first Black republic and the first Caribbean nation to gain independence in 1804 after a successful slave revolt against French rule — a pivotal moment in world history.",
      },
      {
        icon: "palette",
        title: "Vibrant Art Scene",
        description:
          "Haiti has one of the most vibrant folk art traditions in the Western Hemisphere. Haitian `naïve art' with its bold colors and joyful imagery is internationally collected and celebrated.",
      },
      {
        icon: "music_note",
        title: "Kompa Music",
        description:
          "Kompa, a meringue-jazz fusion born in Haiti in the 1950s, is the national music and has influenced Caribbean music everywhere. It's known for its insistent, rolling rhythm.",
      },
    ],
  },
  {
    slug: "guatemala",
    name: "Guatemala",
    capital: "Guatemala City",
    continent: "North America",
    population: "17.6M",
    region: "Central America",
    flagCode: "gt",
    flagDescription:
      "Guatemala's flag has three vertical stripes — two light blue flanking a white center — with the national coat of arms on the white stripe. The blue stripes represent the Pacific and Caribbean coasts, and white represents purity. It is the only flag with a rifle among its symbols.",
    funFacts: [
      {
        icon: "history",
        title: "Maya Heartland",
        description:
          "Guatemala is the heartland of Maya civilization. Tikal National Park contains towering Maya pyramids in the jungle that were at their peak 1,200 years ago.",
      },
      {
        icon: "local_florist",
        title: "Quetzal Bird",
        description:
          "The Resplendent Quetzal, Guatemala's national bird, has iridescent green tail feathers up to 1 meter long. The ancient Maya regarded it as divine, and its image appears on currency.",
      },
      {
        icon: "coffee",
        title: "Specialty Coffee Origin",
        description:
          "Guatemala's volcanic highlands — especially Antigua and Huehuetenango — produce some of the world's most prized specialty coffees. The volcanic soil and altitude create unique flavor profiles.",
      },
    ],
  },
  {
    slug: "dominican-republic",
    name: "Dominican Republic",
    capital: "Santo Domingo",
    continent: "North America",
    population: "11.2M",
    region: "Caribbean",
    flagCode: "do",
    flagDescription:
      "The Dominican Republic flag is a centred white cross dividing it into four rectangles — alternating blue and red. At the center is the national coat of arms. It is the only national flag that includes a Bible.",
    funFacts: [
      {
        icon: "history",
        title: "First European City",
        description:
          "Santo Domingo, founded in 1498 by Bartholomew Columbus, is the oldest continuously inhabited European settlement in the Americas. Its Colonial Zone is a UNESCO World Heritage Site.",
      },
      {
        icon: "sports",
        title: "Baseball Capital",
        description:
          "The Dominican Republic produces more Major League Baseball players per capita than any other country. Many players come from humble backgrounds and see baseball as their path to a better life.",
      },
      {
        icon: "local_florist",
        title: "Punta Cana Beaches",
        description:
          "The DR's eastern coast, especially Punta Cana, is famous for its powder-white beaches and crystal-clear Caribbean water, making it one of the most visited tourist destinations in the Americas.",
      },
    ],
  },

  // ═══ SOUTH AMERICA (continued) ═══
  {
    slug: "colombia",
    name: "Colombia",
    capital: "Bogotá",
    continent: "South America",
    population: "51.9M",
    region: "South America",
    flagCode: "co",
    flagDescription:
      "Colombia's flag has three horizontal stripes: yellow (top, double width), blue, and red. Yellow represents the gold of the land, blue represents the seas on both its Pacific and Caribbean coasts, and red symbolizes the blood shed by those who fought for independence.",
    funFacts: [
      {
        icon: "coffee",
        title: "World Coffee Capital",
        description:
          "Colombia is the world's largest producer of washed (mild) Arabica coffee. The coffee-growing regions — called the 'Eje Cafetero' — are a UNESCO World Heritage Site.",
      },
      {
        icon: "local_florist",
        title: "Orchid Nation",
        description:
          "Colombia is home to over 4,000 species of orchids — more than any other country. The Christmas orchid (Cattleya trianae) is its national flower.",
      },
      {
        icon: "music_note",
        title: "Cumbia & Vallenato",
        description:
          "Colombia gave the world cumbia and vallenato music. Superstar Shakira and singer Carlos Vives have brought Colombian music and dance to global audiences.",
      },
    ],
  },
  {
    slug: "peru",
    name: "Peru",
    capital: "Lima",
    continent: "South America",
    population: "33.4M",
    region: "South America",
    flagCode: "pe",
    flagDescription:
      "Peru's flag has three vertical stripes — red, white, and red. The national coat of arms appears in the center of the state flag (but not the civil flag). Red represents the blood of those who fought for independence, and white symbolizes peace.",
    funFacts: [
      {
        icon: "terrain",
        title: "Machu Picchu",
        description:
          "Machu Picchu, the 15th-century Inca citadel set 2,430 meters above sea level in the Andes, is considered one of the greatest wonders of the ancient world.",
      },
      {
        icon: "restaurant",
        title: "Gastronomic Capital",
        description:
          "Lima is widely considered the culinary capital of Latin America. Peruvian cuisine blends Inca traditions with influences from Spanish, Japanese, Chinese, and Italian immigrants.",
      },
      {
        icon: "history",
        title: "Ancient Nazca Lines",
        description:
          "The Nazca Lines in southern Peru are a series of huge geoglyphs etched into the desert, depicting animals and plants up to 370 meters long. They were created between 500 BC and 500 AD and can only be fully seen from the air.",
      },
    ],
  },
  {
    slug: "chile",
    name: "Chile",
    capital: "Santiago",
    continent: "South America",
    population: "19.6M",
    region: "South America",
    flagCode: "cl",
    flagDescription:
      "Chile's flag has two equal horizontal stripes — white on top and red on bottom — with a blue square in the upper-left corner containing a white five-pointed star. The star represents a guide to progress and honor, blue symbolizes the sky and Pacific Ocean, white represents the snow of the Andes, and red represents the blood of independence patriots.",
    funFacts: [
      {
        icon: "landscape",
        title: "Driest Desert on Earth",
        description:
          "The Atacama Desert in northern Chile is the driest non-polar desert on Earth — some areas have never recorded rainfall. Its extreme aridity makes it ideal for stargazing.",
      },
      {
        icon: "public",
        title: "Longest Country",
        description:
          "Chile is the longest country in the world, stretching 4,270 km from north to south while rarely more than 177 km wide. It spans from the tropics to the edge of Antarctica.",
      },
      {
        icon: "local_bar",
        title: "Wine Powerhouse",
        description:
          "Chile is one of the world's top wine exporters, with valleys like Maipo and Colchagua producing world-class Cabernet Sauvignon and Carménère.",
      },
    ],
  },
  {
    slug: "ecuador",
    name: "Ecuador",
    capital: "Quito",
    continent: "South America",
    population: "18.0M",
    region: "South America",
    flagCode: "ec",
    flagDescription:
      "Ecuador's flag has three horizontal stripes of yellow (double width), blue, and red with the national coat of arms at the center. The colors come from Gran Colombia (Ecuador, Colombia, Venezuela) which they were all once part of; yellow represents gold and fertility, blue the sky and sea, and red the blood of patriots.",
    funFacts: [
      {
        icon: "emoji_nature",
        title: "Galápagos Islands",
        description:
          "Ecuador's Galápagos Islands are called the 'living laboratory of evolution' — Charles Darwin visited in 1835 and developed his theory of natural selection after observing unique species found nowhere else on Earth.",
      },
      {
        icon: "public",
        title: "On the Equator",
        description:
          "Ecuador gets its name from the Equator ('ecuador' in Spanish), which passes through the country. The Mitad del Mundo monument marks 0° latitude near Quito.",
      },
      {
        icon: "terrain",
        title: "Farthest Point from Earth's Core",
        description:
          "Mount Chimborazo in Ecuador is the farthest point from Earth's center — farther even than Everest — because the Earth bulges at the equator.",
      },
    ],
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    capital: "Caracas",
    continent: "South America",
    population: "28.3M",
    region: "South America",
    flagCode: "ve",
    flagDescription:
      "Venezuela's flag has three horizontal stripes — yellow, blue, and red — with an arc of eight white stars on the blue stripe representing the country's provinces at independence, and the national coat of arms in the upper left.",
    funFacts: [
      {
        icon: "water",
        title: "Angel Falls",
        description:
          "Angel Falls in Venezuela is the world's highest uninterrupted waterfall at 979 meters — nearly 20 times taller than Niagara Falls. It was named after American aviator Jimmie Angel who flew over it in 1933.",
      },
      {
        icon: "oil_barrel",
        title: "Largest Oil Reserves",
        description:
          "Venezuela holds the world's largest proven oil reserves — even more than Saudi Arabia. The discovery of oil in 1914 transformed the country's economy.",
      },
      {
        icon: "female",
        title: "Beauty Queen Nation",
        description:
          "Venezuela has won more Miss Universe and Miss World titles than any other country, earning it the nickname 'the most beautiful country in the world' in pageant circles.",
      },
    ],
  },
  {
    slug: "uruguay",
    name: "Uruguay",
    capital: "Montevideo",
    continent: "South America",
    population: "3.5M",
    region: "South America",
    flagCode: "uy",
    flagDescription:
      "Uruguay's flag has nine horizontal stripes — five white and four blue — representing the nine original departments (provinces). A white canton with the Sun of May (16 alternating straight and wavy rays) sits in the upper left, representing the first May revolution.",
    funFacts: [
      {
        icon: "sports_soccer",
        title: "First Football World Cup",
        description:
          "Uruguay hosted and won the very first FIFA World Cup in 1930, defeating Argentina 4-2 in the final with 93,000 fans watching.",
      },
      {
        icon: "bolt",
        title: "Renewable Energy Leader",
        description:
          "Uruguay gets about 98% of its electricity from renewables — mostly wind and hydro. It became one of the first countries in the world to achieve near-total renewable electricity.",
      },
      {
        icon: "emoji_nature",
        title: "Sea Lion Colony",
        description:
          "Cabo Polonio, a remote peninsula in Uruguay, is home to one of the largest South American sea lion colonies in the world, with up to 2,500 sea lions visible on the rocks.",
      },
    ],
  },

  // ═══ OCEANIA (continued) ═══
  {
    slug: "fiji",
    name: "Fiji",
    capital: "Suva",
    continent: "Oceania",
    population: "929K",
    region: "Melanesia",
    flagCode: "fj",
    flagDescription:
      "Fiji's flag is light blue (sky blue) with the Union Jack in the upper-left corner and the Fijian coat of arms on the right. The light blue represents the Pacific Ocean that surrounds the islands. The coat of arms shows a British lion (top) and sugarcane, coconut palm, dove, and bunch of bananas.",
    funFacts: [
      {
        icon: "anchor",
        title: "333 Islands",
        description:
          "Fiji is made up of 333 islands and about 500 islets in the South Pacific. About 110 of the islands are permanently inhabited, with most Fijians living on the two main islands.",
      },
      {
        icon: "water",
        title: "Warmest People",
        description:
          "Fiji is famous for the warmth and happiness of its people. The phrase 'Bula!' (meaning 'hello' and 'life') captures the Fijian spirit of joy and welcome.",
      },
      {
        icon: "local_bar",
        title: "Kava Ceremony",
        description:
          "Kava tea, made from the powdered root of the pepper plant, is central to Fijian culture. Drinking kava in a ceremony called the 'sevusevu' is how guests are welcomed into a village.",
      },
    ],
  },
  {
    slug: "papua-new-guinea",
    name: "Papua New Guinea",
    capital: "Port Moresby",
    continent: "Oceania",
    population: "10.3M",
    region: "Melanesia",
    flagCode: "pg",
    flagDescription:
      "Papua New Guinea's flag is divided diagonally — the upper triangle is red with a Bird of Paradise, and the lower triangle is black with the Southern Cross constellation in white. The Bird of Paradise represents the nation's natural beauty.",
    funFacts: [
      {
        icon: "language",
        title: "Most Languages on Earth",
        description:
          "Papua New Guinea has more languages than any other country — over 800 distinct languages, representing about 12% of the world's total. Tok Pisin is the national lingua franca.",
      },
      {
        icon: "forest",
        title: "Untouched Wilderness",
        description:
          "The highlands of PNG contain some of the last intact rainforests in the Pacific. It's estimated that 5% of the world's biodiversity lives in PNG.",
      },
      {
        icon: "emoji_nature",
        title: "Birds of Paradise",
        description:
          "Papua New Guinea is home to over 40 species of Birds of Paradise — the most elaborate and colorful birds on Earth. Males perform incredible dances to attract mates.",
      },
    ],
  },
  {
    slug: "samoa",
    name: "Samoa",
    capital: "Apia",
    continent: "Oceania",
    population: "222K",
    region: "Polynesia",
    flagCode: "ws",
    flagDescription:
      "Samoa's flag is red with the blue canton (upper-left) containing the Southern Cross constellation in white, with an extra small star added in 1997. Red represents courage, white represents purity, and blue represents freedom.",
    funFacts: [
      {
        icon: "sports",
        title: "Rugby Nation",
        description:
          "For a tiny nation of 200,000 people, Samoa has produced a remarkable number of professional rugby players and is a powerhouse in Pacific rugby.",
      },
      {
        icon: "brush",
        title: "Tattoo Heritage",
        description:
          "The word 'tattoo' comes from the Samoan word 'tatau'. The traditional pe'a (full body tattoo for men) and malu (leg tattoo for women) are considered sacred rites of passage.",
      },
      {
        icon: "access_time",
        title: "First to See the New Year",
        description:
          "Samoa shifted time zones in 2011 and is now one of the first countries to celebrate New Year's Day every year, ahead of even New Zealand and Australia.",
      },
    ],
  },
  {
    slug: "tonga",
    name: "Tonga",
    capital: "Nukuʻalofa",
    continent: "Oceania",
    population: "100K",
    region: "Polynesia",
    flagCode: "to",
    flagDescription:
      "Tonga's flag is red with a white rectangle in the upper-left containing a red cross. The red represents the blood of Christ, white symbolizes purity, and the cross represents Christianity, which has been fundamental to Tongan culture since the 19th century.",
    funFacts: [
      {
        icon: "sports",
        title: "Rugby Powerhouse",
        description:
          "Like Samoa and Fiji, tiny Tonga punches far above its weight in rugby union. Tongan players are known for their physicality and the Sipi Tau (war dance) performed before matches.",
      },
      {
        icon: "anchor",
        title: "Friendly Islands",
        description:
          "Captain James Cook called Tonga the 'Friendly Islands' after the warm welcome he received in 1773 from the Tongan people.",
      },
      {
        icon: "king",
        title: "Pacific Kingdom",
        description:
          "Tonga is the only remaining monarchy in the Pacific Ocean. The royal family has ruled uninterrupted since the 10th century, making the Tongan monarchy one of the oldest continuous dynasties in the world.",
      },
    ],
  },
];
