# Country Content Enrichment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enrich `flagDescription` and `funFacts` for all 245 countries in `src/data/countries.ts`, replacing placeholder content with kid-friendly (ages 8–12), bilingual (EN + ES) content of consistent quality.

**Architecture:** Six sequential PRs — one per continent — each modifying `src/data/countries.ts` in place. Each PR enriches all countries within that continent: writing new EN content for "thin" entries (placeholder `flagDescription` < 80 chars) while preserving EN content for the ~57 already-rich entries, and writing ES translations for every country in the continent (all 245 ES entries are currently auto-generated boilerplate).

**Tech Stack:** TypeScript, `src/data/types.ts` (`FunFact`, `CountryTranslation`), Next.js App Router, next-intl

---

## Content Rules (apply to every task below)

### `flagDescription` (EN)
- 1–2 short paragraphs, 2–4 sentences total
- Explain what colors/symbols mean (historical, cultural, or natural significance)
- Simple vocabulary, no jargon — a 10-year-old should understand it
- Example quality bar (Egypt):
  > "The Egyptian flag has three horizontal stripes of red, white, and black, with the golden Eagle of Saladin centered on the white band. Red represents the struggle against colonialism, white symbolizes the 1952 revolution, and black recalls the end of oppression."

### `funFacts` array (EN)
- 2–4 items per country (never fewer than 2)
- Each fact: `icon` (material-symbols-outlined name), `title` (3–5 words), `description` (1–2 sentences)
- Cover a mix of: nature, culture/food/traditions, innovation/achievements, or "wow" facts
- **Never** use the three boilerplate topics: "About X", "Population", "Capital"
- Icons must be valid `material-symbols-outlined` names — good choices: `landscape`, `pets`, `music_note`, `restaurant`, `sports_soccer`, `emoji_events`, `forest`, `water`, `history`, `science`, `language`, `festival`

### `flagDescription` (ES)
- Full Spanish translation of the EN `flagDescription` (not a new description)
- Natural Spanish, not word-for-word literal — read naturally to a Spanish-speaking child

### `funFacts` (ES)
- Full Spanish translation of EN `funFacts` — same icons, translated `title` and `description`

### Rich-EN countries (ES-only work)
For countries where EN is already good (listed per task), **do not modify** the EN `flagDescription` or `funFacts`. Only write the ES translation block.

---

## Files

- **Modify:** `src/data/countries.ts` — the only file touched in every task

---

## Task 1: Africa (59 countries)

**Branch:** `content/enrich-africa`

**Thin EN (49) — write both EN and ES:**
algeria, angola, benin, botswana, british-indian-ocean-territory, burkina-faso, burundi, cameroon, cape-verde, central-african-republic, chad, comoros, djibouti, dr-congo, equatorial-guinea, eritrea, eswatini, gabon, gambia, guinea, guinea-bissau, ivory-coast, lesotho, liberia, libya, madagascar, malawi, mali, mauritania, mauritius, mayotte, mozambique, namibia, niger, republic-of-the-congo, reunion, saint-helena-ascension-and-tristan-da-cunha, sao-tome-and-principe, seychelles, sierra-leone, somalia, south-sudan, sudan, togo, tunisia, uganda, western-sahara, zambia, zimbabwe

**Rich EN (10) — write ES only:**
egypt, ethiopia, ghana, kenya, morocco, nigeria, rwanda, senegal, south-africa, tanzania

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-africa -b content/enrich-africa
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-africa/.env.local
cd .worktrees/content/enrich-africa
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```
Expected: all tests pass. If failures exist, report before proceeding.

- [ ] **Step 3: Enrich thin-EN Africa countries in `src/data/countries.ts`**

For each of the 49 thin-EN countries, replace the `en` and `es` translation blocks.

**Pattern to replace (example — Algeria):**
```typescript
"en": {
    "name": "Algeria",
    "capital": "Algiers",
    "flagDescription": "The flag of Algeria.",
    "funFacts": [
        { "icon": "public", "title": "About Algeria", "description": "Algeria is a country in Northern Africa." },
        { "icon": "groups", "title": "Population", "description": "Algeria has a population of approximately 46.9M." },
        { "icon": "location_city", "title": "Capital", "description": "The capital of Algeria is Algiers." }
    ]
},
"es": {
    "name": "Argelia",
    "capital": "Argel",
    "flagDescription": "La bandera de Argelia.",
    "funFacts": [
        { "icon": "public", "title": "Sobre Argelia", "description": "Argelia es un país en Northern Africa." },
        { "icon": "groups", "title": "Población", "description": "Argelia tiene una población de aproximadamente 46.9M." },
        { "icon": "location_city", "title": "Capital", "description": "La capital de Argelia es Argel." }
    ]
}
```

**Replace with enriched content (example — Algeria):**
```typescript
"en": {
    "name": "Algeria",
    "capital": "Algiers",
    "flagDescription": "Algeria's flag has two vertical stripes — green on the left and white on the right — with a red crescent moon and star in the center. Green and white are traditional Islamic colors symbolizing hope and peace, while the crescent and star represent the country's Muslim faith.",
    "funFacts": [
        { "icon": "landscape", "title": "Largest Country in Africa", "description": "Algeria is the biggest country in Africa and the tenth largest in the world — it's so large it covers parts of the Sahara Desert, the world's biggest hot desert!" },
        { "icon": "history", "title": "Ancient Roman Ruins", "description": "Algeria is home to Timgad, a remarkably preserved Roman city built over 2,000 years ago. Walking through it feels like stepping back in time!" },
        { "icon": "forest", "title": "Two Very Different Landscapes", "description": "The north of Algeria is green with forests and mountains, while the south is mostly the vast Sahara Desert — making it a country of two very different worlds." }
    ]
},
"es": {
    "name": "Argelia",
    "capital": "Argel",
    "flagDescription": "La bandera de Argelia tiene dos franjas verticales: verde a la izquierda y blanca a la derecha, con una luna creciente y una estrella rojas en el centro. El verde y el blanco son colores islámicos tradicionales que simbolizan la esperanza y la paz, mientras que la media luna y la estrella representan la fe musulmana del país.",
    "funFacts": [
        { "icon": "landscape", "title": "El país más grande de África", "description": "Argelia es el país más grande de África y el décimo más grande del mundo. ¡Es tan enorme que incluye partes del desierto del Sahara, el mayor desierto caliente del planeta!" },
        { "icon": "history", "title": "Ruinas romanas antiguas", "description": "Argelia alberga Timgad, una ciudad romana extraordinariamente bien conservada construida hace más de 2,000 años. ¡Caminar por ella es como viajar al pasado!" },
        { "icon": "forest", "title": "Dos paisajes muy distintos", "description": "El norte de Argelia es verde, con bosques y montañas, mientras que el sur es el inmenso desierto del Sahara, convirtiendo al país en dos mundos completamente diferentes." }
    ]
}
```

Apply the same enrichment pattern for all 49 thin-EN African countries. Reference content for each:

| Country | Flag colors/symbols | Fun fact topics |
|---|---|---|
| angola | Red/black + machete/star (MPLA revolution) | Oil wealth, Okavango delta, Carnival |
| benin | Green/yellow/red (pan-African colors + prosperity) | Birthplace of Voodoo, ancient Dahomey kingdom, Pendjari wildlife |
| botswana | Blue/black/white stripes (water + harmony) | Most diamonds mined here, Okavango Delta, cheetah conservation |
| british-indian-ocean-territory | Blue/white waves + Union Jack | Largest marine reserve, Diego Garcia atoll, coconut crabs |
| burkina-faso | Red/green + yellow star (revolution + agriculture) | Land of upright people (name meaning), Bobo mask festivals, mangoes |
| burundi | Red/white/green + 3 stars (3 ethnic groups) | Drumming UNESCO heritage, Lake Tanganyika, coffee farming |
| cameroon | Green/red/yellow + star (unity of regions) | Most soccer World Cups from Africa at the time, 250+ languages, gorillas |
| cape-verde | Blue/white/red + 10 stars (islands) | 10 volcanic islands, music genre Morna, year-round trade winds |
| central-african-republic | Blue/white/green/yellow/red stripes + star | Rainforests, western lowland gorillas, diamond mining |
| chad | Blue/yellow/red (like France but darker blue, Pan-African) | Lake Chad shrinking, ancient rock art, camel caravans |
| comoros | Green + crescent + 4 stars (4 islands) | Ylang-ylang perfume capital, active volcano Kartala, island chain |
| djibouti | Light blue/green + white triangle + red star | Strategic Horn of Africa port, whale sharks, Lake Assal salt lake |
| dr-congo | Blue + red diagonal + yellow star | World's 2nd largest rainforest, Congo River, mountain gorillas |
| equatorial-guinea | Green/white/red + blue triangle + coat of arms | Only Spanish-speaking country in Africa, oil discovery, rainforest |
| eritrea | Green/blue/red + gold olive wreath | Newest country (1993), Red Sea coast, ancient Aksumite empire |
| eswatini | Blue/yellow/red + Nguni shield | One of Africa's last absolute monarchies, reed dance festival, rhinos |
| gabon | Green/yellow/blue stripes | 80% covered in rainforest, forest elephants, Atlantic coast |
| gambia | Red/blue/green + white stripes | Smallest mainland African country, River Gambia, mangroves |
| guinea | Red/yellow/green (reversed pan-African) | Huge bauxite reserves, Fouta Djallon highlands, djembe drum birthplace |
| guinea-bissau | Red/yellow/green + black star | Bijagós archipelago UNESCO biosphere, cashew nuts, pirogues |
| ivory-coast | Orange/white/green (reversed Ireland) | World's top cocoa producer, mask traditions, Basilica of Yamoussoukro |
| lesotho | Blue/white/green + Basotho hat | Mountain kingdom surrounded by South Africa, pony trekking, highest peak |
| liberia | Red/white stripes + blue corner + white star | Founded by freed American slaves (1822), rubber plantations, pygmy hippos |
| libya | Red/black/green + crescent moon | Ancient Roman Leptis Magna ruins, Sahara dunes, oil reserves |
| madagascar | White/red vertical + green vertical | Unique biodiversity (90% species found nowhere else), lemurs, baobab trees |
| malawi | Black/red/green + rising sun | Lake Malawi (3rd largest African lake), fish eagle, warm heart of Africa |
| mali | Green/yellow/red vertical stripes | Timbuktu ancient library city, Dogon cliff villages, desert festivals |
| mauritania | Green + gold crescent/star + red stripes | Iron ore Sahara trains, ancient Chinguetti libraries, sand dunes |
| mauritius | Red/blue/yellow/green stripes | Dodo bird (extinct here), rainbow of cultures, coral reefs |
| mayotte | Blue/white + two ylang-ylang flowers | French overseas territory, sea turtles, mangrove lagoons |
| mozambique | Green/black/yellow + red triangle + book/hoe/rifle | Mozambique Island UNESCO heritage, whale sharks, cashew nuts |
| namibia | Blue/red/green + gold sun | Oldest desert (Namib), Skeleton Coast, desert-adapted elephants |
| niger | Orange/white/green + orange circle | Air Mountains Sahara, giraffes in the wild, groundnut farming |
| republic-of-the-congo | Green/yellow/red diagonal | Congo Basin forests, gorillas, river trade routes |
| reunion | French tricolor (overseas territory) | Active volcano Piton de la Fournaise, cyclone season, multi-cultural cuisine |
| saint-helena-ascension-and-tristan-da-cunha | Blue + coat of arms | Napoleon's exile island, remotest inhabited islands, wirebird species |
| sao-tome-and-principe | Green/yellow/red + black stars | Tiny island nation, cacao birthplace, tropical birds |
| seychelles | Five colored rays from corner | 115 islands, coco de mer (world's biggest seed), giant tortoises |
| sierra-leone | Green/white/blue horizontal | Diamond mining, free education, chimpanzee sanctuary |
| somalia | Light blue + white star | Longest coastline in Africa, ancient frankincense trade, camel herders |
| south-sudan | Black/red/green + blue triangle + gold star | Newest country in the world (2011), Nile River source, wildlife migration |
| sudan | Red/white/black + green triangle | Nubian pyramids (more than Egypt!), Nile confluence, camel racing |
| togo | Green/yellow stripes + red square + white star | Voodoo markets, kente weaving, Lake Togo lagoon |
| tunisia | Red + white circle + crescent/star | Closest African country to Europe, Carthage ruins, Star Wars filmed here |
| uganda | Black/yellow/red stripes + crowned crane | Mountain gorillas, source of the Nile, Lake Victoria |
| western-sahara | Black/white/green + red crescent + star | Disputed territory, Sahara dunes, flamingos |
| zambia | Green + orange/black/red corner + eagle | Victoria Falls (shared with Zimbabwe), copper mining, red lechwe antelope |
| zimbabwe | Green/yellow/red/black stripes + white triangle + Zimbabwe bird | Victoria Falls, Great Zimbabwe ruins, last wild rhino herds |

- [ ] **Step 4: Enrich ES-only for rich-EN Africa countries**

For each of the 10 rich-EN countries (egypt, ethiopia, ghana, kenya, morocco, nigeria, rwanda, senegal, south-africa, tanzania), **only** update the `es` block — do NOT touch the `en` block.

Translate the existing EN `flagDescription` and all EN `funFacts` (`title` and `description`) into natural Spanish. Keep the same `icon` values and same number of facts.

- [ ] **Step 5: Run tests**

```bash
cd /Users/george/dev/FunWithFlags/.worktrees/content/enrich-africa
npm test
```
Expected: all tests pass (no changes to logic, only string content in data).

- [ ] **Step 6: Run build**

```bash
npm run build
```
Expected: clean build with no TypeScript errors.

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(africa): enrich flag meanings and fun facts for 59 African countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(africa): enrich flag meanings and fun facts for 59 African countries" \
  --body "Closes #87 (partial — Africa batch)

## Changes
- Rewrote EN \`flagDescription\` for 49 thin-EN African countries
- Wrote 2–4 \`funFacts\` for 49 thin-EN African countries (replacing auto-generated boilerplate)
- Added ES translations for all 59 African countries (all 10 previously-rich EN entries + 49 new)

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Task 2: Asia (50 countries)

**Branch:** `content/enrich-asia`

**Thin EN (39) — write both EN and ES:**
afghanistan, armenia, azerbaijan, bahrain, bangladesh, bhutan, brunei, cambodia, georgia, hong-kong, iran, iraq, israel, japan, jordan, kazakhstan, kuwait, kyrgyzstan, laos, lebanon, macau, malaysia, maldives, mongolia, myanmar, nepal, north-korea, oman, pakistan, palestine, qatar, sri-lanka, syria, taiwan, tajikistan, timor-leste, turkmenistan, uzbekistan, yemen

**Rich EN (11) — write ES only:**
china, india, indonesia, philippines, saudi-arabia, singapore, south-korea, thailand, turkey, united-arab-emirates, vietnam

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-asia -b content/enrich-asia
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-asia/.env.local
cd .worktrees/content/enrich-asia
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```

- [ ] **Step 3: Enrich thin-EN Asia countries in `src/data/countries.ts`**

Reference content for each:

| Country | Flag description focus | Fun fact topics |
|---|---|---|
| afghanistan | Black/red/green + coat of arms (Islamic faith, law, sovereignty) | Lapis lazuli mines, Silk Road history, pomegranates |
| armenia | Red/blue/orange horizontal (blood/sky/wheat) | Oldest Christian nation (301 AD), Mount Ararat, apricots |
| azerbaijan | Blue/red/green + crescent/star (sky/republic/Islam) | Land of fire (oil and gas), Caspian Sea, mud volcanoes |
| bahrain | Red + white serrated edge | Pearl diving history, Formula 1 Grand Prix, tree of life |
| bangladesh | Green + red circle | Largest river delta, Royal Bengal Tiger, muslin fabric |
| bhutan | Orange/red diagonal + white dragon | Measures happiness index (GNH), Himalayan kingdom, gross national happiness |
| brunei | Yellow + diagonal black/white stripes + coat of arms | Sultan's palace largest in world, rainforest canopy, oil wealth |
| cambodia | Blue/red + Angkor Wat | Angkor Wat largest religious monument, Tonle Sap lake, silk weaving |
| georgia | White + red cross + 4 small crosses | Oldest wine tradition (8,000 years), Caucasus mountains, ancient alphabet |
| hong-kong | Red + bauhinia flower | Skyline of 1,300+ skyscrapers, dim sum culture, Victoria Harbour |
| iran | Green/white/red + Takbir writing + lion/sun | Ancient Persian Empire, carpets, saffron and pomegranate |
| iraq | Red/white/black + green Takbir writing | Cradle of civilization (Mesopotamia), Tigris and Euphrates rivers, dates |
| israel | White + blue stripes + Star of David | Dead Sea (lowest point on Earth), start-up nation, ancient Jerusalem |
| japan | White + red circle (rising sun) | Cherry blossom season, bullet trains, sushi culture |
| jordan | Black/white/green + red triangle + white star | Petra ancient city, Dead Sea, Wadi Rum desert |
| kazakhstan | Light blue + golden sun and eagle | Largest landlocked country, steppe grasslands, horse riding culture |
| kuwait | Green/white/red + black trapezoid | Tiny but oil-rich, desalination technology, perch falconry |
| kyrgyzstan | Red + yellow sun/yurt symbol | Ala-Too mountains, nomadic yurt culture, walnut forests |
| laos | Blue/red + white circle | Mekong River, thousand Buddha caves, sticky rice |
| lebanon | White/red + green cedar tree | Cedar of Lebanon (ancient symbol), hummus birthplace, Phoenician alphabet |
| macau | Green + white lotus + bridge | World's biggest casino city (bigger than Las Vegas), Portuguese egg tarts |
| malaysia | Red/white stripes + blue canton + crescent/star | Petronas Towers, rainforest orangutans, durian fruit |
| maldives | Green + white crescent | Lowest-lying country in the world, coral atolls, whale sharks |
| mongolia | Red/blue/red + gold soyombo | Genghis Khan's vast empire, horseback culture, nomadic gers |
| myanmar | Yellow/green/red + white star | Shwedagon Pagoda gold, Irrawaddy dolphins, thanaka bark paste |
| nepal | Double-pennant shape (only non-rectangular flag!) | Mount Everest, birthplace of Buddha, yaks |
| north-korea | Blue/red + white circles + red star | Hermit kingdom, Arirang gymnastics, DMZ birds |
| oman | White/red/green + khanjar dagger | Oldest independent Arab state, frankincense trade, Arabian oryx |
| pakistan | Green + white stripe + crescent/star | K2 (2nd highest mountain), Indus Valley civilization, mango capital |
| palestine | Black/white/green + red triangle | Olive trees, Dead Sea, Jericho (world's oldest city) |
| qatar | Maroon + white + serrated edge | Natural gas wealth, World Cup 2022, desert falconry |
| sri-lanka | Dark red + golden lion + leaves | Cinnamon origin, blue whales nearby, ancient Sigiriya rock fortress |
| syria | Red/white/black + two green stars | Ancient Damascus (oldest continuously inhabited city), apricots, Aleppo soap |
| taiwan | Red + blue canton + white sun | Semiconductor technology leader, night markets, bubble tea origin |
| tajikistan | Red/white/green + crown and arc | Pamir Mountains, apricots, Silk Road caravans |
| timor-leste | Red/yellow/black + white star | Newest country in Asia (2002), coffee growing, coral reef diving |
| turkmenistan | Green + crescent/stars + carpet pattern | World's 4th largest gas reserves, Door to Hell burning crater, Akhal-Teke horses |
| uzbekistan | Blue/white/green + crescent and stars | Samarkand Silk Road city, plov rice dish, cotton fields |
| yemen | Red/white/black horizontal | Socotra Island unique biodiversity, coffee origin (Mocha), ancient Marib dam |

- [ ] **Step 4: Enrich ES-only for rich-EN Asia countries**

Translate existing EN content for: china, india, indonesia, philippines, saudi-arabia, singapore, south-korea, thailand, turkey, united-arab-emirates, vietnam.

- [ ] **Step 5: Run tests**

```bash
npm test
```

- [ ] **Step 6: Run build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(asia): enrich flag meanings and fun facts for 50 Asian countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(asia): enrich flag meanings and fun facts for 50 Asian countries" \
  --body "Closes #87 (partial — Asia batch)

## Changes
- Rewrote EN \`flagDescription\` for 39 thin-EN Asian countries
- Wrote 2–4 \`funFacts\` for 39 thin-EN Asian countries
- Added ES translations for all 50 Asian countries

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Task 3: Europe (53 countries)

**Branch:** `content/enrich-europe`

**Thin EN (40) — write both EN and ES:**
aland-islands, albania, andorra, austria, belarus, belgium, bosnia-and-herzegovina, bulgaria, croatia, cyprus, czechia, denmark, estonia, faroe-islands, finland, gibraltar, guernsey, hungary, iceland, ireland, isle-of-man, jersey, kosovo, latvia, liechtenstein, lithuania, luxembourg, malta, moldova, monaco, montenegro, north-macedonia, romania, san-marino, serbia, slovakia, slovenia, svalbard-and-jan-mayen, ukraine, vatican-city

**Rich EN (13) — write ES only:**
france, germany, greece, italy, netherlands, norway, poland, portugal, russia, spain, sweden, switzerland, united-kingdom

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-europe -b content/enrich-europe
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-europe/.env.local
cd .worktrees/content/enrich-europe
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```

- [ ] **Step 3: Enrich thin-EN Europe countries in `src/data/countries.ts`**

Reference content for each:

| Country | Flag description focus | Fun fact topics |
|---|---|---|
| aland-islands | Yellow Nordic cross on blue (Scandinavian tradition) | Autonomous Finnish archipelago, 6,500 islands, car-free biking routes |
| albania | Red + black double-headed eagle | Eagle of Skanderbeg national hero, Riviera beaches, UNESCO Berat city |
| andorra | Blue/yellow/red vertical + coat of arms | One of Europe's smallest countries, ski resorts, no airport |
| austria | Red/white/red horizontal | Mozart birthplace, Lipizzaner horses, Sachertorte chocolate cake |
| belarus | Red/green + white/red ornament stripe | Primeval Białowieża Forest (last European bison), flax weaving, storks |
| belgium | Black/yellow/red vertical | Chocolate and waffle capital, Tintin comic birthplace, Belgian blue cattle |
| bosnia-and-herzegovina | Blue + yellow triangle + white stars | Stari Most ancient bridge, Olympic host (1984), world's best plum brandy |
| bulgaria | White/green/red horizontal | Rose Valley (world's rose oil), Cyrillic alphabet origin, Thracian gold tombs |
| croatia | Red/white/blue + coat of arms | Tie/cravat invented here, Plitvice Lakes, Dalmatian dog origin |
| cyprus | White + copper island map + olive branches | Birthplace of Aphrodite, divided island, oldest wine (Commandaria) |
| czechia | White/red + blue triangle | Prague Castle (largest in world), Pilsner beer origin, Bohemian glass |
| denmark | Red + white Nordic cross | Oldest national flag still in use, LEGO birthplace, vikings |
| estonia | Blue/black/white horizontal | Most digitally advanced country, forest cover 50%, ancient song festivals |
| faroe-islands | White + red-outlined Nordic cross on blue | 18 volcanic islands, puffin colonies, no trees naturally |
| finland | White + blue Nordic cross | Midnight sun, 188,000 lakes, sauna culture birthplace |
| gibraltar | White/red + castle and key | Rock of Gibraltar (Barbary macaques!), strategic strait, tiny territory |
| guernsey | White + red cross + gold cross | Channel Island, Victor Hugo lived here, Guernsey cow breed |
| hungary | Red/white/green horizontal | Rubik's Cube invented here, thermal spa culture, paprika |
| iceland | Blue + white-outlined red Nordic cross | Geysers and Northern Lights, no army, land of fire and ice |
| ireland | Green/white/orange vertical | St. Patrick's Day worldwide, Celtic mythology, Cliffs of Moher |
| isle-of-man | Red + three-legged triskelion | TT motorcycle races, tailless Manx cat, ancient Norse kingdom |
| jersey | White + red diagonal cross + gold lily | Channel Island, Jersey cow breed, finance hub |
| kosovo | Blue + gold map + six stars | Europe's newest country (2008), young population, Kosovo Force (KFOR) |
| latvia | Dark red/white/dark red horizontal | Baltic amber coast, song and dance festivals, Riga Art Nouveau |
| liechtenstein | Blue/red + gold crown | Tiny principality, double-locked border (no border control), castle residence |
| lithuania | Yellow/green/red horizontal | Amber capital of the world, Hill of Crosses, basketball passion |
| luxembourg | Red/white/light blue horizontal | Highest GDP per capita in EU, fairy-tale castles, steel heritage |
| malta | White/red + George Cross | Ancient megalithic temples (older than Stonehenge!), Mediterranean island, honey |
| moldova | Blue/yellow/red + coat of arms | Wine caves (world's largest underground winery), sunflowers, carpets |
| monaco | Red/white horizontal | Smallest French-speaking country, Formula 1 street circuit, royal palace |
| montenegro | Red border + gold lion coat of arms | Name means "Black Mountain," Tara River canyon, Adriatic coast |
| north-macedonia | Red + yellow rising sun | Alexander the Great (possibly from here), Lake Ohrid, ajvar pepper sauce |
| romania | Blue/yellow/red vertical | Dracula's castle (Bran), Danube Delta birds, Carpathian bears |
| san-marino | Blue/white + coat of arms | Oldest republic in the world (301 AD), three towers on Mount Titano |
| serbia | Red/blue/white + coat of arms | Tesla birthplace (Nikola Tesla!), Exit music festival, šljivovica plum brandy |
| slovakia | White/blue/red + double cross on mountains | Tatra Mountains, wooden churches UNESCO, world's best ice hockey fans |
| slovenia | White/blue/red + coat of arms with mountains | Triglav mountain, Postojna cave (27 km long!), world's oldest wheel |
| svalbard-and-jan-mayen | Norwegian flag (no distinct territorial flag) | Polar bears outnumber people, midnight sun for months, global seed vault |
| ukraine | Blue/yellow horizontal | Breadbasket of Europe (wheat), Chernobyl zone wildlife recovery, embroidery tradition |
| vatican-city | Yellow/white + papal keys + tiara | Smallest country in the world, Sistine Chapel ceiling, Swiss Guard |

- [ ] **Step 4: Enrich ES-only for rich-EN Europe countries**

Translate existing EN content for: france, germany, greece, italy, netherlands, norway, poland, portugal, russia, spain, sweden, switzerland, united-kingdom.

- [ ] **Step 5: Run tests**

```bash
npm test
```

- [ ] **Step 6: Run build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(europe): enrich flag meanings and fun facts for 53 European countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(europe): enrich flag meanings and fun facts for 53 European countries" \
  --body "Closes #87 (partial — Europe batch)

## Changes
- Rewrote EN \`flagDescription\` for 40 thin-EN European countries
- Wrote 2–4 \`funFacts\` for 40 thin-EN European countries
- Added ES translations for all 53 European countries

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Task 4: North America (42 countries)

**Branch:** `content/enrich-north-america`

**Thin EN (33) — write both EN and ES:**
anguilla, antigua-and-barbuda, aruba, bahamas, barbados, belize, bermuda, british-virgin-islands, caribbean-netherlands, cayman-islands, curacao, dominica, el-salvador, greenland, grenada, guadeloupe, honduras, martinique, montserrat, nicaragua, panama, puerto-rico, saint-barthelemy, saint-kitts-and-nevis, saint-lucia, saint-martin, saint-pierre-and-miquelon, saint-vincent-and-the-grenadines, sint-maarten, trinidad-and-tobago, turks-and-caicos-islands, united-states-minor-outlying-islands, united-states-virgin-islands

**Rich EN (9) — write ES only:**
canada, costa-rica, cuba, dominican-republic, guatemala, haiti, jamaica, mexico, united-states

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-north-america -b content/enrich-north-america
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-north-america/.env.local
cd .worktrees/content/enrich-north-america
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```

- [ ] **Step 3: Enrich thin-EN North America countries in `src/data/countries.ts`**

Reference content for each:

| Country | Flag description focus | Fun fact topics |
|---|---|---|
| anguilla | Blue + white + three dolphins | Coral reefs, luxury beaches, flamingo pond |
| antigua-and-barbuda | Black/blue/white/red + yellow rising sun | 365 beaches (one per day!), cricket passion, English Harbour |
| aruba | Blue + two yellow stripes + red star | Constant trade winds (perfect for windsurfing), flamingos, Arikok desert |
| bahamas | Black/aquamarine/yellow + black triangle | Pink sand beaches, Atlantis reef, bioluminescent bays |
| barbados | Ultramarine/gold + black trident | Birthplace of rum, flying fish cuisine, cricket legends |
| belize | Blue/red + coat of arms | Only jaguar reserve in the world, Great Blue Hole, ancient Mayan ruins |
| bermuda | Red + Union Jack + coat of arms | Bermuda Triangle mystery, pink sand, international finance hub |
| british-virgin-islands | Blue + Union Jack + Virgin Islands seal | Sailing capital of Caribbean, BVI Spring Regatta, reef snorkeling |
| caribbean-netherlands | Dutch flag colors vary per island | Three islands (Bonaire, Sint Eustatius, Saba), world-class dive sites |
| cayman-islands | Blue + Union Jack + coat of arms | Financial center, sea turtle nesting, Stingray City sandbar |
| curacao | Blue + yellow stripe + two white stars | Willemstad UNESCO port, blue curaçao liqueur, floating market |
| dominica | Green + cross + parrot | Sperm whale watching year-round, boiling lake volcano, Sisserou parrot |
| el-salvador | Blue/white/blue + coat of arms | Pupusa national food, surf capital of Central America, Mayan pyramids |
| greenland | White/red horizontal | World's largest island (not continent), midnight sun, ice sheet covers 80% |
| grenada | Red/green + yellow stars + nutmeg | Spice island (nutmeg), Grand Anse beach, underwater sculpture park |
| guadeloupe | French flag (overseas territory), butterfly island shape | Butterfly-shaped islands, black sand beaches, active La Soufrière volcano |
| honduras | Blue/white/blue + five stars | Ancient Mayan city Copán, scarlet macaws, white-water rafting |
| martinique | French flag (overseas territory) | Mount Pelée volcano, birthplace of Napoleon's Josephine, Creole cuisine |
| montserrat | Blue + Union Jack + coat of arms | Emerald Isle of Caribbean (Irish heritage), active Soufrière Hills volcano |
| nicaragua | Blue/white/blue + coat of arms | Lake Nicaragua (only freshwater lake with sharks!), volcano surfing, Corn Islands |
| panama | White/red/blue quarters + stars | Panama Canal (engineering marvel), migratory birds, golden frog |
| puerto-rico | Red/white stripes + blue triangle + white star | Bioluminescent Mosquito Bay, Old San Juan fortresses, rainforest El Yunque |
| saint-barthelemy | French flag, coat of arms with pelican | Glamorous French island, St. Barths music festival, beaches |
| saint-kitts-and-nevis | Green/red/black diagonal + stars | Federation of two islands, Alexander Hamilton birthplace, volcano hikes |
| saint-lucia | Blue + yellow/black/white triangle | Nobel Prize per capita (most per capita!), Piton mountains, volcanic springs |
| saint-martin | French half (northern), blue/white/red | Divided French-Dutch island, 36 beaches, gourmet food scene |
| saint-pierre-and-miquelon | French flag (overseas territory) | Last French territory in North America, cod fishing heritage |
| saint-vincent-and-the-grenadines | Blue/yellow/green + diamonds | Potatoes (sweet!) and bananas, Pirates of Caribbean filmed here, Tobago Cays |
| sint-maarten | Dutch half (southern), white + two-part design | Dutch side of divided island, Maho Beach (planes fly over beach!), duty-free shopping |
| trinidad-and-tobago | Red + black diagonal + white stripes | Birthplace of calypso and steel pan music, scarlet ibis, carnival |
| turks-and-caicos-islands | Blue + Union Jack + coat of arms | Conch capital of Caribbean, Grace Bay beach, whale migration route |
| united-states-minor-outlying-islands | Various US flag | Scattered Pacific/Caribbean atolls, sea turtle nesting, military history |
| united-states-virgin-islands | White + US eagle + USVI shield | Charlotte Amalie duty-free port, Buck Island reef, Carnival tradition |

- [ ] **Step 4: Enrich ES-only for rich-EN North America countries**

Translate existing EN content for: canada, costa-rica, cuba, dominican-republic, guatemala, haiti, jamaica, mexico, united-states.

- [ ] **Step 5: Run tests**

```bash
npm test
```

- [ ] **Step 6: Run build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(north-america): enrich flag meanings and fun facts for 42 North American countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(north-america): enrich flag meanings and fun facts for 42 North American countries" \
  --body "Closes #87 (partial — North America batch)

## Changes
- Rewrote EN \`flagDescription\` for 33 thin-EN North American countries
- Wrote 2–4 \`funFacts\` for 33 thin-EN North American countries
- Added ES translations for all 42 North American countries

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Task 5: South America (14 countries)

**Branch:** `content/enrich-south-america`

**Thin EN (6) — write both EN and ES:**
bolivia, falkland-islands, french-guiana, guyana, paraguay, suriname

**Rich EN (8) — write ES only:**
argentina, brazil, chile, colombia, ecuador, peru, uruguay, venezuela

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-south-america -b content/enrich-south-america
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-south-america/.env.local
cd .worktrees/content/enrich-south-america
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```

- [ ] **Step 3: Enrich thin-EN South America countries in `src/data/countries.ts`**

Reference content for each:

| Country | Flag description focus | Fun fact topics |
|---|---|---|
| bolivia | Red/yellow/green + coat of arms | Two capitals (La Paz + Sucre), Salar de Uyuni salt flats, llamas |
| falkland-islands | Blue + Union Jack + coat of arms | Penguins outnumber people, remote South Atlantic, sheep farming |
| french-guiana | French flag (overseas territory) | Amazon rainforest, European Space Agency launch site (Kourou), sloths |
| guyana | Green/yellow/red/white/black | Only English-speaking South American country, Kaieteur Falls, El Dorado legends |
| paraguay | Red/white/blue + two-sided coat of arms | Only flag with different emblems front and back, yerba mate, Jesuit ruins |
| suriname | Green/white/red + gold star | Most forested country in the world, Amazon river tributaries, Paramaribo UNESCO city |

- [ ] **Step 4: Enrich ES-only for rich-EN South America countries**

Translate existing EN content for: argentina, brazil, chile, colombia, ecuador, peru, uruguay, venezuela.

- [ ] **Step 5: Run tests**

```bash
npm test
```

- [ ] **Step 6: Run build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(south-america): enrich flag meanings and fun facts for 14 South American countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(south-america): enrich flag meanings and fun facts for 14 South American countries" \
  --body "Closes #87 (partial — South America batch)

## Changes
- Rewrote EN \`flagDescription\` for 6 thin-EN South American countries
- Wrote 2–4 \`funFacts\` for 6 thin-EN South American countries
- Added ES translations for all 14 South American countries

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Task 6: Oceania (27 countries)

**Branch:** `content/enrich-oceania`

**Thin EN (21) — write both EN and ES:**
american-samoa, christmas-island, cocos-keeling-islands, cook-islands, french-polynesia, guam, kiribati, marshall-islands, micronesia, nauru, new-caledonia, niue, norfolk-island, northern-mariana-islands, palau, pitcairn-islands, solomon-islands, tokelau, tuvalu, vanuatu, wallis-and-futuna

**Rich EN (6) — write ES only:**
australia, fiji, new-zealand, papua-new-guinea, samoa, tonga

- [ ] **Step 1: Create worktree and branch**

```bash
cd /Users/george/dev/FunWithFlags
git worktree add .worktrees/content/enrich-oceania -b content/enrich-oceania
ln -s /Users/george/dev/FunWithFlags/.env.local \
      /Users/george/dev/FunWithFlags/.worktrees/content/enrich-oceania/.env.local
cd .worktrees/content/enrich-oceania
npm install
```

- [ ] **Step 2: Run baseline tests**

```bash
npm test
```

- [ ] **Step 3: Enrich thin-EN Oceania countries in `src/data/countries.ts`**

Reference content for each:

| Country | Flag description focus | Fun fact topics |
|---|---|---|
| american-samoa | Blue + red-bordered white triangle + eagle and staff | Traditional fa'a Samoa culture, tuna fishing, only US territory south of equator |
| christmas-island | Blue/green + gold Southern Cross + frigate bird + phosphate wheel | Christmas crabs migration (120 million red crabs!), golden bosun bird, remote Indian Ocean |
| cocos-keeling-islands | Green + palm/crescent/southern cross | Two atolls, 27 coral islands, coconut crabs, Australian territory |
| cook-islands | Blue + Union Jack + 15 stars circle | 15 islands, black pearl farming, traditional ura dance |
| french-polynesia | Red/white + coat of arms with canoe and sun | 118 islands, overwater bungalows birthplace, Bora Bora lagoon, black pearls |
| guam | Blue + red-outlined seal with proa canoe | Chamorro people, WWII history, largest US military base in Pacific |
| kiribati | Red/white waves + yellow rising sun + frigate bird | Straddles equator AND date line, first country to see New Year, atolls threatened by sea rise |
| marshall-islands | Blue + orange/white diagonal + white star | Bikini Atoll nuclear test history, stick chart navigation, mantas and turtles |
| micronesia | Light blue + four white stars | 607 islands, oldest stone money (Yap), diving paradise |
| nauru | Blue + yellow stripe + white star | Smallest island nation in the world, phosphate wealth, 0 km² forest remaining |
| new-caledonia | French flag (overseas territory) | World's largest lagoon UNESCO, kagu bird (cannot fly!), nickel mines |
| niue | Gold + UK flag corner + stars | World's largest raised coral island, ocean swimming with whales, self-governing |
| norfolk-island | Green/white/green + Norfolk Island pine | Descendants of Bounty mutineers, world's longest car park (the runway!), pine trees |
| northern-mariana-islands | Blue + white latte stone + star wreath | Latte stones ancient pillars, WWII Saipan, manta ray encounters |
| palau | Light blue + gold circle | Jellyfish Lake (harmless jellies you can swim with!), WWII wrecks, stingless jellyfish |
| pitcairn-islands | Blue + UK flag + coat of arms | World's least populated nation territory, Bounty mutineers' descendants, Henderson Island |
| solomon-islands | Blue/green + yellow diagonal + five stars | WWII Iron Bottom Sound, saltwater crocodiles, nguzunguzu canoe prow |
| tokelau | Blue + Southern Cross + traditional fale | Three atolls, no airport (boat only!), 100% renewable energy |
| tuvalu | Light blue + UK flag + nine stars | 4th smallest country, threatened by rising seas, .tv domain name earns income |
| vanuatu | Red/green/black + yellow Y shape + fern/boar tusk | Vanuatu is happiest country in Pacific surveys, custom dances, land diving (naghol) |
| wallis-and-futuna | French flag (overseas territory) | Three kingdoms in one territory, kava drinking ceremonies, tropical islands |

- [ ] **Step 4: Enrich ES-only for rich-EN Oceania countries**

Translate existing EN content for: australia, fiji, new-zealand, papua-new-guinea, samoa, tonga.

- [ ] **Step 5: Run tests**

```bash
npm test
```

- [ ] **Step 6: Run build**

```bash
npm run build
```

- [ ] **Step 7: Commit**

```bash
git add src/data/countries.ts
git commit -m "content(oceania): enrich flag meanings and fun facts for 27 Oceanian countries (EN + ES)"
```

- [ ] **Step 8: Open PR**

```bash
gh pr create \
  --repo fonseka-dev/fun-with-flags \
  --base main \
  --title "content(oceania): enrich flag meanings and fun facts for 27 Oceanian countries" \
  --body "Closes #87

## Changes
- Rewrote EN \`flagDescription\` for 21 thin-EN Oceanian countries
- Wrote 2–4 \`funFacts\` for 21 thin-EN Oceanian countries
- Added ES translations for all 27 Oceanian countries

## Testing
- \`npm run build\` ✅
- \`npm test\` ✅"
```

---

## Quality Checklist (apply to each PR before opening)

Before opening each PR, verify a random sample of 5 countries from the batch:

- [ ] `flagDescription` is 2–4 sentences, explains colors/symbols, no jargon
- [ ] `funFacts` has 2–4 items, none using "About X / Population / Capital" titles
- [ ] Every `icon` is a valid `material-symbols-outlined` name
- [ ] ES `flagDescription` reads naturally in Spanish (not word-for-word literal)
- [ ] ES `funFacts` titles and descriptions are translated (icons unchanged)
- [ ] TypeScript compiles clean (`npm run build`)
- [ ] All existing tests pass (`npm test`)

---

## Summary

| Task | Continent | Countries | Thin EN | Rich EN (ES only) | Branch |
|---|---|---|---|---|---|
| 1 | Africa | 59 | 49 | 10 | `content/enrich-africa` |
| 2 | Asia | 50 | 39 | 11 | `content/enrich-asia` |
| 3 | Europe | 53 | 40 | 13 | `content/enrich-europe` |
| 4 | North America | 42 | 33 | 9 | `content/enrich-north-america` |
| 5 | South America | 14 | 6 | 8 | `content/enrich-south-america` |
| 6 | Oceania | 27 | 21 | 6 | `content/enrich-oceania` |
| **Total** | | **245** | **188** | **57** | |
