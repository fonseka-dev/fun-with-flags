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
];
