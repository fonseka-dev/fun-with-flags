import { CountryEntry, Country, Locale } from "./types";

export const countriesData: CountryEntry[] = [
  {
      "slug": "afghanistan",
      "flagCode": "af",
      "continent": "Asia",
      "population": "43.8M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Afghanistan",
              "capital": "Kabul",
              "flagDescription": "Afghanistan's flag has three equal vertical stripes of black, red, and green. In the center is a white emblem containing the Islamic shahada (declaration of faith) and two flags. Black represents strength, red symbolizes the blood of independence fighters, and green represents the wealth and hope of Islam.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Hindu Kush Mountains",
                      "description": "The Hindu Kush mountain range stretches across Afghanistan with over 20 peaks higher than 20,000 feet. These dramatic mountains have shaped Afghanistan's culture and history for thousands of years."
                  },
                  {
                      "icon": "history",
                      "title": "Bamiyan Buddhas",
                      "description": "Before they were destroyed in 2001, the Bamiyan Buddhas were two colossal statue carved into a cliffside in the 6th century — among the world's largest Buddha statues ever created."
                  },
                  {
                      "icon": "texture",
                      "title": "Carpet Weaving Tradition",
                      "description": "Afghan carpets are world-famous for their intricate hand-woven designs and vibrant colors. Carpet weaving is a traditional craft passed down through generations in Afghan families."
                  }
              ]
          },
          "es": {
              "name": "Afganistán",
              "capital": "Kabul",
              "flagDescription": "La bandera de Afganistán tiene tres franjas verticales iguales de negro, rojo y verde. En el centro hay un emblema blanco que contiene la shahada islámica (declaración de fe) y dos banderas. El negro representa la fortaleza, el rojo simboliza la sangre de los luchadores por la independencia, y el verde representa la riqueza y esperanza del Islam.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Las montañas del Hindu Kush",
                      "description": "La cadena montañosa del Hindu Kush se extiende por Afganistán con más de 20 picos de más de 20.000 pies de altura. Estas montañas dramáticas han conformado la cultura e historia de Afganistán durante miles de años."
                  },
                  {
                      "icon": "history",
                      "title": "Los Budas de Bamiyan",
                      "description": "Antes de ser destruidos en 2001, los Budas de Bamiyan eran dos estatuas colosales talladas en un acantilado en el siglo VI, entre las estatuas de Buda más grandes jamás creadas."
                  },
                  {
                      "icon": "texture",
                      "title": "Tradición de tejido de alfombras",
                      "description": "Las alfombras afganas son mundialmente famosas por sus diseños tejidos a mano de forma intrincada y colores vibrantes. El tejido de alfombras es una artesanía tradicional transmitida de generación en generación."
                  }
              ]
          }
      }
  },
  {
      "slug": "aland-islands",
      "flagCode": "ax",
      "continent": "Europe",
      "population": "31K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Åland Islands",
              "capital": "Mariehamn",
              "flagDescription": "The Åland Islands flag features a yellow cross outlined in red set on a blue background — a Nordic cross design that combines the colors of both Sweden and Finland. Åland is an autonomous region of Finland but has a Swedish-speaking population, and the flag beautifully blends both national identities. The cross design is shared by all Nordic countries as a symbol of Christianity and shared heritage.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Demilitarized Zone",
                      "description": "The Åland Islands are one of the world's oldest demilitarized and autonomous regions. Since 1856, international treaties have kept the islands free of military forces, making them a symbol of peaceful neutrality."
                  },
                  {
                      "icon": "sailing",
                      "title": "Maritime Capital",
                      "description": "Åland has one of the highest concentrations of registered ships per capita in the world. Many international shipping companies are headquartered here, and sailing is woven into everyday island life."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Cowslip Symbol",
                      "description": "The cowslip flower is the official symbol of Åland. In spring, these bright yellow blooms carpet the meadows, and locals celebrate the season with traditional outdoor gatherings."
                  },
                  {
                      "icon": "language",
                      "title": "Swedish-Speaking Finland",
                      "description": "Although Åland belongs to Finland, Swedish is the only official language. Children learn Swedish in school, road signs are in Swedish, and the culture feels distinctly Scandinavian."
                  }
              ]
          },
          "es": {
              "name": "Islas Åland",
              "capital": "Mariehamn",
              "flagDescription": "La bandera de las Islas Åland muestra una cruz amarilla con contorno rojo sobre fondo azul — un diseño de cruz nórdica que combina los colores de Suecia y Finlandia. Åland es una región autónoma de Finlandia pero con población de habla sueca, y la bandera mezcla ambas identidades nacionales. El diseño de la cruz es compartido por todos los países nórdicos como símbolo del cristianismo y la herencia común.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Zona Desmilitarizada",
                      "description": "Las Islas Åland son una de las regiones autónomas y desmilitarizadas más antiguas del mundo. Desde 1856, tratados internacionales han mantenido las islas libres de fuerzas militares, convirtiéndolas en un símbolo de neutralidad pacífica."
                  },
                  {
                      "icon": "sailing",
                      "title": "Capital Marítima",
                      "description": "Åland tiene una de las concentraciones más altas de barcos registrados per cápita en el mundo. Muchas navieras internacionales tienen su sede aquí, y la navegación está entretejida en la vida cotidiana de las islas."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Símbolo de la Prímula",
                      "description": "La prímula es el símbolo oficial de Åland. En primavera, estas brillantes flores amarillas cubren los prados, y los lugareños celebran la temporada con reuniones tradicionales al aire libre."
                  },
                  {
                      "icon": "language",
                      "title": "Finlandia de habla sueca",
                      "description": "Aunque Åland pertenece a Finlandia, el sueco es el único idioma oficial. Los niños aprenden sueco en la escuela, las señales de tráfico están en sueco y la cultura parece claramente escandinava."
                  }
              ]
          }
      }
  },
  {
      "slug": "albania",
      "flagCode": "al",
      "continent": "Europe",
      "population": "2.4M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Albania",
              "capital": "Tirana",
              "flagDescription": "Albania's flag is one of the most striking in the world — a bold black double-headed eagle on a vivid red background. The double-headed eagle is a symbol that dates back to the medieval Albanian nobleman Gjergj Kastrioti, known as Skanderbeg, who used it as his emblem while defending Albania from the Ottoman Empire. Today it represents Albania's strength and independence.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Skanderbeg the Hero",
                      "description": "Gjergj Kastrioti, known as Skanderbeg, is Albania's greatest national hero. For 25 years in the 1400s, he led Albanian forces against the Ottoman Empire and was never defeated in battle — earning him fame across all of Europe."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Birthplace of Mother Teresa",
                      "description": "Mother Teresa, the Nobel Peace Prize-winning nun who dedicated her life to helping the poor in India, was of Albanian descent. Her parents were ethnic Albanians from North Macedonia, and she is a source of immense national pride."
                  },
                  {
                      "icon": "hiking",
                      "title": "Albanian Alps",
                      "description": "The Albanian Alps in the north are nicknamed the \"Accursed Mountains\" — but don't let the name fool you! They are breathtakingly beautiful, with towering peaks, crystal-clear lakes, and traditional villages unchanged for centuries."
                  },
                  {
                      "icon": "waves",
                      "title": "Riviera Gem",
                      "description": "Albania's Ionian coast is one of Europe's most unspoiled stretches of coastline, with turquoise waters, white pebble beaches, and ancient ruins. It's often called the \"Albanian Riviera\" and is becoming a popular destination."
                  }
              ]
          },
          "es": {
              "name": "Albania",
              "capital": "Tirana",
              "flagDescription": "La bandera de Albania es una de las más llamativas del mundo: un audaz águila bicéfala negra sobre un vivido fondo rojo. El águila bicéfala es un símbolo que se remonta al noble albanés medieval Gjergj Kastrioti, conocido como Skanderbeg, quien lo usó como emblema mientras defendía Albania del Imperio Otomano. Hoy representa la fuerza e independencia de Albania.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Skanderbeg el Héroe",
                      "description": "Gjergj Kastrioti, conocido como Skanderbeg, es el mayor héroe nacional de Albania. Durante 25 años en el siglo XV, lideró las fuerzas albanesas contra el Imperio Otomano y nunca fue derrotado en batalla, ganándose fama en toda Europa."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Cuna de la Madre Teresa",
                      "description": "La Madre Teresa, la monja ganadora del Premio Nobel de la Paz que dedicó su vida a ayudar a los pobres en India, era de ascendencia albanesa. Sus padres eran albaneses étnicos de Macedonia del Norte, y es fuente de inmenso orgullo nacional."
                  },
                  {
                      "icon": "hiking",
                      "title": "Los Alpes Albaneses",
                      "description": "Los Alpes albaneses en el norte son apodados las \"Montañas Malditas\", ¡pero no te dejes engañar por el nombre! Son de una belleza impresionante, con picos imponentes, lagos cristalinos y aldeas tradicionales inalteradas durante siglos."
                  },
                  {
                      "icon": "waves",
                      "title": "Joya de la Riviera",
                      "description": "La costa jónica de Albania es uno de los tramos costeros más vírgenes de Europa, con aguas turquesas, playas de guijarros blancos y ruinas antiguas. A menudo se llama la \"Riviera albanesa\" y se está convirtiendo en un destino popular."
                  }
              ]
          }
      }
  },
  {
      "slug": "algeria",
      "flagCode": "dz",
      "continent": "Africa",
      "population": "47.4M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Algeria",
              "capital": "Algiers",
              "flagDescription": "Algeria's flag has two equal vertical halves — green on the left and white on the right — with a red crescent moon and star in the center. Green represents Islam and the beauty of nature, white stands for peace, and the red crescent and star are symbols of the Islamic faith.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Biggest in Africa",
                      "description": "Algeria is the largest country in Africa and the 10th largest in the world. Most of its land is covered by the vast Sahara Desert."
                  },
                  {
                      "icon": "history",
                      "title": "Ancient Roman City",
                      "description": "The ruins of Timgad in northeastern Algeria were built by the Romans around 100 AD. Walking through its streets feels like stepping back 2,000 years in time!"
                  },
                  {
                      "icon": "local_gas_station",
                      "title": "Oil and Gas Giant",
                      "description": "Algeria is one of Africa's top producers of oil and natural gas. Much of Europe's energy actually comes from Algerian pipelines under the sea."
                  }
              ]
          },
          "es": {
              "name": "Argelia",
              "capital": "Argel",
              "flagDescription": "La bandera de Argelia tiene dos mitades verticales iguales: verde a la izquierda y blanca a la derecha, con una media luna y una estrella rojas en el centro. El verde representa el Islam y la naturaleza, el blanco simboliza la paz, y la media luna roja es símbolo de la fe islámica.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "La más grande de África",
                      "description": "Argelia es el país más grande de África y el décimo más grande del mundo. La mayor parte de su territorio está cubierta por el vasto desierto del Sáhara."
                  },
                  {
                      "icon": "history",
                      "title": "Ciudad romana antigua",
                      "description": "Las ruinas de Timgad en el noreste de Argelia fueron construidas por los romanos hacia el año 100 d.C. ¡Caminar por sus calles es como retroceder 2.000 años en el tiempo!"
                  },
                  {
                      "icon": "local_gas_station",
                      "title": "Gran productor de energía",
                      "description": "Argelia es uno de los principales productores de petróleo y gas natural de África. Gran parte de la energía que usa Europa viene de gasoductos argelinos que cruzan el mar."
                  }
              ]
          }
      }
  },
  {
      "slug": "american-samoa",
      "flagCode": "as",
      "continent": "Oceania",
      "population": "50K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "American Samoa",
              "capital": "Pago Pago",
              "flagDescription": "American Samoa's flag has a blue field with a white-bordered red triangle pointing from the hoist to the fly, creating a V-shape. An American bald eagle clutches a traditional Samoan fly whisk (fue) and a war club (uatogi) — the fue represents wisdom and the uatogi represents power. The eagle symbolizes the protection offered by the United States, while the Samoan objects honor the island's indigenous culture.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Most American Island",
                      "description": "American Samoa has one of the highest rates of military enlistment per capita of any US territory or state. Samoans have served with great distinction in the US armed forces, and military service is a deeply honored tradition here."
                  },
                  {
                      "icon": "anchor",
                      "title": "Natural Harbor",
                      "description": "Pago Pago Harbor is one of the finest natural harbors in the South Pacific — a deep, sheltered bay surrounded by dramatic volcanic mountains. It was a critical coaling station and naval base in the 19th and early 20th centuries."
                  },
                  {
                      "icon": "landscape",
                      "title": "National Park of American Samoa",
                      "description": "The National Park of American Samoa protects pristine tropical rainforest, coral reefs, and traditional Samoan villages. It is one of the few US national parks accessible only by boat or small aircraft."
                  },
                  {
                      "icon": "celebration",
                      "title": "Fa'a Samoa",
                      "description": "The Fa'a Samoa — the Samoan Way — is a living cultural system that guides daily life through communal decision-making, respect for elders, and sharing resources. It has remained remarkably intact despite American influence."
                  }
              ]
          },
          "es": {
              "name": "Samoa Americana",
              "capital": "Pago Pago",
              "flagDescription": "La bandera de Samoa Americana tiene un campo azul con un triángulo rojo bordeado de blanco que apunta desde el asta hasta el extremo, creando una forma de V. Un águila calva americana sostiene un matamoscas tradicional samoano (fue) y un garrote de guerra (uatogi) — el fue representa la sabiduría y el uatogi el poder. El águila simboliza la protección ofrecida por los Estados Unidos, mientras que los objetos samoanos honran la cultura indígena de la isla.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "La Isla Más Americana",
                      "description": "Samoa Americana tiene una de las tasas más altas de alistamiento militar per cápita de cualquier territorio o estado de EE.UU. Los samoanos han servido con gran distinción en las fuerzas armadas estadounidenses, y el servicio militar es una tradición profundamente honrada aquí."
                  },
                  {
                      "icon": "anchor",
                      "title": "Puerto Natural",
                      "description": "El Puerto de Pago Pago es uno de los mejores puertos naturales del Pacífico Sur — una bahía profunda y protegida rodeada de dramáticas montañas volcánicas. Fue una estación carbonera y base naval crítica en los siglos XIX y principios del XX."
                  },
                  {
                      "icon": "landscape",
                      "title": "Parque Nacional de Samoa Americana",
                      "description": "El Parque Nacional de Samoa Americana protege bosques tropicales vírgenes, arrecifes de coral y aldeas samoanas tradicionales. Es uno de los pocos parques nacionales de EE.UU. accesible solo en barco o avioneta."
                  },
                  {
                      "icon": "celebration",
                      "title": "Fa'a Samoa",
                      "description": "El Fa'a Samoa — la Manera Samoana — es un sistema cultural vivo que guía la vida cotidiana a través de la toma de decisiones comunal, el respeto por los ancianos y el intercambio de recursos. Se ha mantenido notablemente intacto a pesar de la influencia americana."
                  }
              ]
          }
      }
  },
  {
      "slug": "andorra",
      "flagCode": "ad",
      "continent": "Europe",
      "population": "88K",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Andorra",
              "capital": "Andorra la Vella",
              "flagDescription": "Andorra's flag has three vertical stripes of blue, yellow, and red — the colors drawn from its two neighboring protectors, France and Spain. In the center is Andorra's coat of arms, featuring a bishop's mitre and crook, two cows, pine logs, and red-and-gold stripes. The motto on the coat of arms says 'Strength United is Stronger,' reflecting how this tiny nation has survived for centuries between powerful neighbors.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Tiny Mountain Kingdom",
                      "description": "Andorra is one of the smallest countries in the world, nestled high in the Pyrenees Mountains between France and Spain. The entire country is about the size of a large city, yet it has been independent for over 700 years!"
                  },
                  {
                      "icon": "shopping_cart",
                      "title": "Tax-Free Shopping",
                      "description": "Andorra is famous for having very low taxes, making it a paradise for shoppers. Every year, millions of visitors come to buy electronics, perfume, chocolate, and tobacco at prices much cheaper than in neighboring countries."
                  },
                  {
                      "icon": "downhill_skiing",
                      "title": "Winter Sports Paradise",
                      "description": "Despite its tiny size, Andorra has world-class ski resorts with over 300 kilometers of ski slopes. Skiing and snowboarding bring huge numbers of visitors each winter to enjoy the spectacular Pyrenean snow."
                  },
                  {
                      "icon": "groups",
                      "title": "Co-Princes Rule",
                      "description": "Andorra has a unique system of government — it is officially ruled by two co-princes simultaneously: the Bishop of Urgell (from Spain) and the President of France. This unusual arrangement has worked since the year 1278!"
                  }
              ]
          },
          "es": {
              "name": "Andorra",
              "capital": "Andorra la Vella",
              "flagDescription": "La bandera de Andorra tiene tres franjas verticales de azul, amarillo y rojo — los colores tomados de sus dos vecinos protectores, Francia y España. En el centro está el escudo de Andorra, con la mitra y el báculo de un obispo, dos vacas, troncos de pino y franjas rojo-doradas. El lema del escudo dice 'La fuerza unida es más fuerte', reflejando cómo esta diminuta nación ha sobrevivido durante siglos entre poderosos vecinos.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Diminuto Reino Montañoso",
                      "description": "¡Andorra es uno de los países más pequeños del mundo, enclavado en las montañas de los Pirineos entre Francia y España. Todo el país tiene el tamaño de una ciudad grande, pero ha sido independiente durante más de 700 años!"
                  },
                  {
                      "icon": "shopping_cart",
                      "title": "Compras Libres de Impuestos",
                      "description": "Andorra es famosa por tener impuestos muy bajos, lo que la convierte en un paraíso para los compradores. Cada año, millones de visitantes vienen a comprar electrónica, perfumes, chocolate y tabaco a precios mucho más baratos que en los países vecinos."
                  },
                  {
                      "icon": "downhill_skiing",
                      "title": "Paraíso de Deportes de Invierno",
                      "description": "A pesar de su diminuto tamaño, Andorra tiene estaciones de esquí de categoría mundial con más de 300 kilómetros de pistas. El esquí y el snowboard atraen a gran cantidad de visitantes cada invierno para disfrutar de la espectacular nieve pirenaica."
                  },
                  {
                      "icon": "groups",
                      "title": "Los Co-Príncipes Gobiernan",
                      "description": "Andorra tiene un sistema de gobierno único: está oficialmente gobernada por dos co-príncipes simultáneamente: el Obispo de Urgell (de España) y el Presidente de Francia. ¡Este inusual acuerdo funciona desde el año 1278!"
                  }
              ]
          }
      }
  },
  {
      "slug": "angola",
      "flagCode": "ao",
      "continent": "Africa",
      "population": "36.2M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Angola",
              "capital": "Luanda",
              "flagDescription": "Angola's flag is divided into two equal halves — red on top and black on the bottom — with a yellow emblem in the center showing a machete, a cog wheel, and a star. Red represents the blood shed for independence, black symbolizes the African continent, and yellow stands for the country's wealth and hard-working people.",
              "funFacts": [
                  {
                      "icon": "oil_barrel",
                      "title": "Africa's Oil Powerhouse",
                      "description": "Angola is one of Africa's top two oil producers, and oil has helped build roads, schools, and hospitals across the country since the 1970s."
                  },
                  {
                      "icon": "festival",
                      "title": "Carnival of Luanda",
                      "description": "The Luanda Carnival is one of Africa's biggest celebrations, featuring dazzling costumes, samba-inspired music, and street dancing that fills the entire capital city!"
                  },
                  {
                      "icon": "pets",
                      "title": "Giant Sable Antelope",
                      "description": "The Giant Sable Antelope is found only in Angola and is so rare it was thought to be extinct during the civil war. It has spectacular curved horns over a meter long."
                  }
              ]
          },
          "es": {
              "name": "Angola",
              "capital": "Luanda",
              "flagDescription": "La bandera de Angola está dividida en dos mitades iguales: roja arriba y negra abajo, con un emblema amarillo en el centro que muestra un machete, una rueda dentada y una estrella. El rojo representa la sangre derramada por la independencia, el negro simboliza el continente africano, y el amarillo representa la riqueza y el esfuerzo del pueblo.",
              "funFacts": [
                  {
                      "icon": "oil_barrel",
                      "title": "Gran potencia petrolera",
                      "description": "Angola es uno de los dos principales productores de petróleo de África, y el oro negro ha financiado carreteras, escuelas y hospitales desde los años 70."
                  },
                  {
                      "icon": "festival",
                      "title": "Carnaval de Luanda",
                      "description": "¡El Carnaval de Luanda es una de las celebraciones más grandes de África, con trajes deslumbrantes, música y baile que inundan toda la capital!"
                  },
                  {
                      "icon": "pets",
                      "title": "El sable gigante angoleño",
                      "description": "El sable gigante angoleño solo existe en Angola y es tan raro que se creyó extinto durante la guerra civil. Sus cuernos curvados miden más de un metro de largo."
                  }
              ]
          }
      }
  },
  {
      "slug": "anguilla",
      "flagCode": "ai",
      "continent": "North America",
      "population": "15.3K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Anguilla",
          "capital": "The Valley",
          "flagDescription": "Anguilla's flag features three horizontal stripes of blue, white, and blue, symbolizing the ocean and sky. The orange-red upright triangle on the hoist side represents the island's people and their African heritage. Inside the triangle is a white dove carrying an olive branch, symbolizing peace.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Island Paradise",
            "description": "Anguilla is famous for its white sand beaches and crystal-clear waters, making it one of the Caribbean's most pristine destinations."
          },
          {
            "icon": "groups",
            "title": "Peaceful People",
            "description": "The dove on the flag represents the peaceful nature of Anguillans and their commitment to harmony."
          },
          {
            "icon": "waves",
            "title": "Coral Reefs",
            "description": "Anguilla has excellent coral reefs perfect for snorkeling and diving, protecting the island and supporting marine life."
          },
          {
            "icon": "celebration",
            "title": "Festival Island",
            "description": "Anguilla is known for its Anguilla Summer Festival, celebrating the island's culture, music, and food."
          }
          ]
        },
        "es": {
          "name": "Anguila",
          "capital": "The Valley",
          "flagDescription": "La bandera de Anguila tiene tres franjas horizontales de azul, blanco y azul, simbolizando el océano y el cielo. El triángulo rojo-anaranjado vertical en el lado del asta representa el pueblo de la isla y su herencia africana. Dentro del triángulo hay una paloma blanca llevando una rama de olivo, simbolizando la paz.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Paraíso Isleño",
            "description": "Anguila es famosa por sus playas de arena blanca y aguas cristalinas, siendo uno de los destinos más pristinos del Caribe."
          },
          {
            "icon": "groups",
            "title": "Gente Pacífica",
            "description": "La paloma en la bandera representa la naturaleza pacífica de los anguileños y su compromiso con la armonía."
          },
          {
            "icon": "waves",
            "title": "Arrecifes de Coral",
            "description": "Anguila tiene excelentes arrecifes de coral perfectos para buceo de snorkel y buceo, protegiendo la isla y apoyando la vida marina."
          },
          {
            "icon": "celebration",
            "title": "Isla de Festivales",
            "description": "Anguila es conocida por su Festival de Verano de Anguila, celebrando la cultura, música y comida de la isla."
          }
          ]
        }
      }
  },
  {
      "slug": "antigua-and-barbuda",
      "flagCode": "ag",
      "continent": "North America",
      "population": "98.7K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Antigua and Barbuda",
          "capital": "Saint John's",
          "flagDescription": "Antigua and Barbuda's flag has a triangular design with red, white, and blue colors. The rising sun at the point of the triangle is gold and red, symbolizing a new era. The horizontal stripes of black, white, and blue represent the unity of the people and the vibrant nation.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Dual Island Nation",
            "description": "The country is made up of two main islands: Antigua and Barbuda, each with distinct characteristics."
          },
          {
            "icon": "celebration",
            "title": "Caribbean Carnival",
            "description": "Antigua and Barbuda's carnival is one of the largest in the Caribbean, celebrated every year with music, food, and dancing."
          },
          {
            "icon": "waves",
            "title": "Beach Paradise",
            "description": "The islands have 365 beaches, one for every day of the year, attracting visitors from around the world."
          },
          {
            "icon": "history",
            "title": "Historical Sites",
            "description": "The islands contain important historical sites related to Caribbean colonial history and maritime heritage."
          }
          ]
        },
        "es": {
          "name": "Antigua y Barbuda",
          "capital": "Saint John's",
          "flagDescription": "La bandera de Antigua y Barbuda tiene un diseño triangular con colores rojo, blanco y azul. El sol naciente en el punto del triángulo es oro y rojo, simbolizando una nueva era. Las franjas horizontales de negro, blanco y azul representan la unidad del pueblo y la nación vibrante.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Nación de Dos Islas",
            "description": "El país está compuesto por dos islas principales: Antigua y Barbuda, cada una con características distintas."
          },
          {
            "icon": "celebration",
            "title": "Carnaval Caribeño",
            "description": "El carnaval de Antigua y Barbuda es uno de los más grandes del Caribe, celebrado cada año con música, comida y baile."
          },
          {
            "icon": "waves",
            "title": "Paraíso de Playas",
            "description": "Las islas tienen 365 playas, una para cada día del año, atrayendo visitantes de todo el mundo."
          },
          {
            "icon": "history",
            "title": "Sitios Históricos",
            "description": "Las islas contienen sitios históricos importantes relacionados con la historia colonial caribeña y el patrimonio marítimo."
          }
          ]
        }
      }
  },
  {
      "slug": "argentina",
      "flagCode": "ar",
      "continent": "South America",
      "population": "46.2M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Argentina",
          "capital": "Buenos Aires",
          "flagDescription": "Argentina's flag consists of three equal horizontal stripes of light blue, white, and light blue. In the center of the white stripe is the Sun of May (Sol de Mayo), a golden sun with a human face, symbolizing independence and national hope. The light blue represents loyalty and righteousness.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Tango Birthplace",
            "description": "Buenos Aires is the birthplace of tango, a passionate dance and music style that originated in the late 19th century."
          },
          {
            "icon": "public",
            "title": "Largest Spanish-Speaking Nation",
            "description": "Argentina is the second-largest Spanish-speaking country by population in the world, after Mexico."
          },
          {
            "icon": "landscape",
            "title": "Diverse Landscapes",
            "description": "Argentina stretches from tropical areas in the north to Patagonia in the south, featuring glaciers, mountains, and vast grasslands."
          },
          {
            "icon": "sports",
            "title": "Football Passion",
            "description": "Football (soccer) is Argentina's national passion, and the country has produced many world-class players and legends."
          }
          ]
        },
        "es": {
          "name": "Argentina",
          "capital": "Buenos Aires",
          "flagDescription": "La bandera de Argentina consta de tres franjas horizontales iguales de azul claro, blanco y azul claro. En el centro de la franja blanca está el Sol de Mayo (Sol de Mayo), un sol dorado con cara humana, simbolizando la independencia y la esperanza nacional. El azul claro representa la lealtad y la rectitud.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Cuna del Tango",
            "description": "Buenos Aires es la cuna del tango, un estilo de danza y música pasional que se originó a finales del siglo XIX."
          },
          {
            "icon": "public",
            "title": "Mayor Nación Hispanohablante",
            "description": "Argentina es el segundo país hispanohablante más grande por población en el mundo, después de México."
          },
          {
            "icon": "landscape",
            "title": "Paisajes Diversos",
            "description": "Argentina se extiende desde áreas tropicales en el norte hasta la Patagonia en el sur, con glaciares, montañas y vastas llanuras."
          },
          {
            "icon": "sports",
            "title": "Pasión por el Fútbol",
            "description": "El fútbol es la pasión nacional de Argentina, y el país ha producido muchos jugadores y leyendas de clase mundial."
          }
          ]
        }
      }
  },
  {
      "slug": "armenia",
      "flagCode": "am",
      "continent": "Asia",
      "population": "3.1M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Armenia",
              "capital": "Yerevan",
              "flagDescription": "Armenia's flag has three equal horizontal stripes of red, blue, and orange/apricot. Red represents the blood of those who died for Armenia, blue symbolizes the sky and hope, and orange/apricot represents the creative genius of the Armenian people. The colors are called the \"Armenian tricolor.\"",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "First Christian Nation",
                      "description": "Armenia was the first nation in the world to officially adopt Christianity as its state religion in 301 AD — before even the Roman Empire!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Ancient Monasteries",
                      "description": "Armenian monasteries like Geghard and Khor Virap are built into mountainsides and carved partly underground. They are UNESCO World Heritage Sites that showcase ancient Armenian architecture."
                  },
                  {
                      "icon": "music_note",
                      "title": "Duduk: Ancient Woodwind",
                      "description": "The duduk is an ancient Armenian woodwind instrument with a warm, soulful sound. It's one of the oldest instruments still in use and has been played for thousands of years."
                  }
              ]
          },
          "es": {
              "name": "Armenia",
              "capital": "Ereván",
              "flagDescription": "La bandera de Armenia tiene tres franjas horizontales iguales de rojo, azul y naranja/damasco. El rojo representa la sangre de quienes murieron por Armenia, el azul simboliza el cielo y la esperanza, y el naranja/damasco representa el genio creativo del pueblo armenio. Los colores se llaman el \"tricolor armenio\".",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Primera nación cristiana",
                      "description": "¡Armenia fue la primera nación del mundo en adoptar oficialmente el cristianismo como religión de estado en el año 301 d.C., antes incluso que el Imperio Romano!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Monasterios antiguos",
                      "description": "Los monasterios armenios como Geghard y Khor Virap están construidos en las laderas de las montañas y tallados parcialmente bajo tierra. Son Patrimonios de la Humanidad de la UNESCO que muestran la arquitectura armenia antigua."
                  },
                  {
                      "icon": "music_note",
                      "title": "Duduk: instrumento de viento antiguo",
                      "description": "El duduk es un antiguo instrumento de viento armenio con un sonido cálido y evocador. Es uno de los instrumentos más antiguos que aún se usan y ha sido tocado durante miles de años."
                  }
              ]
          }
      }
  },
  {
      "slug": "aruba",
      "flagCode": "aw",
      "continent": "North America",
      "population": "106K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Aruba",
          "capital": "Oranjestad",
          "flagDescription": "Aruba's flag has two equal horizontal stripes of light blue and yellow, separated by a thin red-white-red stripe. The light blue represents the sea and sky, yellow represents the sandy beaches, and the red and white bands represent freedom and moral strength.",
          "funFacts": [
          {
            "icon": "public",
            "title": "One Happy Island",
            "description": "Aruba's motto is \"One Happy Island,\" reflecting the island's peaceful, friendly, and welcoming nature."
          },
          {
            "icon": "waves",
            "title": "Year-Round Sunshine",
            "description": "Aruba enjoys consistent warm weather year-round, making it a perfect tropical destination outside the hurricane belt."
          },
          {
            "icon": "landscape",
            "title": "Flamingo Island",
            "description": "Aruba is home to beautiful pink flamingos that can be seen in the wild in certain areas of the island."
          },
          {
            "icon": "celebration",
            "title": "Festival Culture",
            "description": "The island celebrates Carnival and other festivals with colorful parades, music, and traditional cuisine."
          }
          ]
        },
        "es": {
          "name": "Aruba",
          "capital": "Oranjestad",
          "flagDescription": "La bandera de Aruba tiene dos franjas horizontales iguales de azul claro y amarillo, separadas por una fina franja rojo-blanco-rojo. El azul claro representa el mar y el cielo, el amarillo representa las playas de arena, y las bandas roja y blanca representan la libertad y la fortaleza moral.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Una Isla Feliz",
            "description": "El lema de Aruba es \"One Happy Island\", reflejando la naturaleza pacífica, amistosa y acogedora de la isla."
          },
          {
            "icon": "waves",
            "title": "Sol Todo el Año",
            "description": "Aruba disfruta de clima cálido constante durante todo el año, haciéndola un destino tropical perfecto fuera del cinturón de huracanes."
          },
          {
            "icon": "landscape",
            "title": "Isla de Flamencos",
            "description": "Aruba es hogar de hermosos flamencos rosas que se pueden ver en estado salvaje en ciertas áreas de la isla."
          },
          {
            "icon": "celebration",
            "title": "Cultura de Festivales",
            "description": "La isla celebra el Carnaval y otros festivales con desfiles coloridos, música y cocina tradicional."
          }
          ]
        }
      }
  },
  {
      "slug": "australia",
      "flagCode": "au",
      "continent": "Oceania",
      "population": "27.5M",
      "region": "Australia and New Zealand",
      "translations": {
          "en": {
              "name": "Australia",
              "capital": "Canberra",
              "flagDescription": "The Australian flag features the Union Jack in the upper left representing historical ties to Britain, the Commonwealth Star below it with seven points for the six states and territories, and the Southern Cross constellation of five stars on the right — visible only from the Southern Hemisphere.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Unique Wildlife",
                      "description": "Australia is the only continent where marsupials (pouched mammals) dominate. Kangaroos, koalas, and wombats are found nowhere else in the wild."
                  },
                  {
                      "icon": "waves",
                      "title": "Great Barrier Reef",
                      "description": "The Great Barrier Reef is the world's largest coral reef system — so big it can be seen from space. It stretches over 2,300 km along Queensland's coast."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Widest Country",
                      "description": "Australia is wider than the moon! The continent spans about 4,000 km east to west, while the moon's diameter is only 3,474 km."
                  },
                  {
                      "icon": "history_edu",
                      "title": "Ancient Aboriginal Culture",
                      "description": "Aboriginal Australians have the oldest continuous culture on Earth — spanning at least 65,000 years. Their Dreamtime stories, rock art, and knowledge of the land are among humanity's greatest living treasures."
                  }
              ]
          },
          "es": {
              "name": "Australia",
              "capital": "Canberra",
              "flagDescription": "La bandera australiana presenta la Union Jack en la esquina superior izquierda — que representa los vínculos históricos con Gran Bretaña — la Estrella de la Mancomunidad de siete puntas (una por cada estado y territorio) y la constelación de la Cruz del Sur con cinco estrellas a la derecha, visible únicamente desde el hemisferio sur.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Fauna Única",
                      "description": "Australia es el único continente donde los marsupiales (mamíferos con bolsa) dominan. Los canguros, koalas y wombats no se encuentran en estado salvaje en ningún otro lugar del mundo."
                  },
                  {
                      "icon": "waves",
                      "title": "Gran Barrera de Coral",
                      "description": "La Gran Barrera de Coral es el sistema de arrecifes de coral más grande del mundo: tan grande que puede verse desde el espacio. Se extiende más de 2.300 km a lo largo de la costa de Queensland."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "El País Más Ancho",
                      "description": "¡Australia es más ancha que la Luna! El continente mide unos 4.000 km de este a oeste, mientras que el diámetro de la Luna es de solo 3.474 km."
                  },
                  {
                      "icon": "history_edu",
                      "title": "Cultura Aborigen Milenaria",
                      "description": "Los aborígenes australianos poseen la cultura continua más antigua de la Tierra, con al menos 65.000 años de historia. Sus relatos del Tiempo del Sueño, arte rupestre y conocimiento de la tierra son de los más grandes tesoros vivos de la humanidad."
                  }
              ]
          }
      }
  },
  {
      "slug": "austria",
      "flagCode": "at",
      "continent": "Europe",
      "population": "9.2M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Austria",
              "capital": "Vienna",
              "flagDescription": "Austria's flag is one of the oldest national flags in the world, featuring three horizontal stripes of red, white, and red. According to legend, the design was inspired by Duke Leopold V after the Battle of Ptolemais in 1191 — his white tunic was so soaked in blood that only the stripe beneath his belt stayed clean, creating the red-white-red pattern. The flag symbolizes Austria's long and proud history stretching back over 800 years.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Land of Music Masters",
                      "description": "Austria produced some of the world's greatest composers, including Mozart, Haydn, Schubert, and Strauss. Vienna was the musical capital of Europe for centuries, and classical music is still deeply woven into Austrian culture today."
                  },
                  {
                      "icon": "cake",
                      "title": "Sachertorte Tradition",
                      "description": "Austria's most famous dessert, the Sachertorte, is a rich chocolate cake with apricot jam and chocolate glaze, invented in Vienna in 1832. The original recipe is still a closely guarded secret kept at Vienna's Hotel Sacher."
                  },
                  {
                      "icon": "castle",
                      "title": "Habsburg Empire Legacy",
                      "description": "For nearly 700 years, Austria was the center of the Habsburg dynasty, one of the most powerful royal families in European history. The empire once stretched across much of Europe, and grand palaces like Schönbrunn still stand as reminders of this imperial past."
                  },
                  {
                      "icon": "landscape",
                      "title": "Alpine Wonderland",
                      "description": "Austria is dominated by the majestic Alps, with over 60% of the country covered by mountains. The scenery inspired The Sound of Music, and today Austria is world-famous for skiing, hiking, and breathtaking mountain villages."
                  }
              ]
          },
          "es": {
              "name": "Austria",
              "capital": "Viena",
              "flagDescription": "La bandera de Austria es una de las más antiguas del mundo, con tres franjas horizontales de rojo, blanco y rojo. Según la leyenda, el diseño fue inspirado por el Duque Leopoldo V tras la Batalla de Ptolemaida en 1191: su túnica blanca estaba tan empapada de sangre que solo la franja bajo su cinturón quedó limpia, creando el patrón rojo-blanco-rojo. La bandera simboliza la larga y orgullosa historia de Austria que se remonta más de 800 años.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Tierra de Maestros de la Música",
                      "description": "Austria produjo algunos de los compositores más grandes del mundo, incluyendo Mozart, Haydn, Schubert y Strauss. Viena fue la capital musical de Europa durante siglos, y la música clásica sigue estando profundamente arraigada en la cultura austriaca."
                  },
                  {
                      "icon": "cake",
                      "title": "Tradición del Sachertorte",
                      "description": "El postre más famoso de Austria, el Sachertorte, es un rico pastel de chocolate con mermelada de albaricoque y glaseado de chocolate, inventado en Viena en 1832. La receta original sigue siendo un secreto celosamente guardado en el Hotel Sacher de Viena."
                  },
                  {
                      "icon": "castle",
                      "title": "Legado del Imperio Habsburgo",
                      "description": "Durante casi 700 años, Austria fue el centro de la dinastía Habsburgo, una de las familias reales más poderosas de la historia europea. El imperio se extendió por gran parte de Europa, y palacios grandiosos como Schönbrunn aún se mantienen como recordatorios de este pasado imperial."
                  },
                  {
                      "icon": "landscape",
                      "title": "Maravilla Alpina",
                      "description": "Austria está dominada por los majestuosos Alpes, con más del 60% del país cubierto por montañas. El paisaje inspiró La Novicia Rebelde, y hoy Austria es famosa mundialmente por el esquí, el senderismo y los impresionantes pueblos de montaña."
                  }
              ]
          }
      }
  },
  {
      "slug": "azerbaijan",
      "flagCode": "az",
      "continent": "Asia",
      "population": "10.2M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Azerbaijan",
              "capital": "Baku",
              "flagDescription": "Azerbaijan's flag has three equal horizontal stripes of blue, red, and green with a white crescent and eight-pointed star in the center. Blue represents Turkic heritage, red symbolizes progress and prosperity, green represents Islam, and the crescent-star is an Islamic symbol.",
              "funFacts": [
                  {
                      "icon": "whatshot",
                      "title": "Yanar Dag: Fire Mountain",
                      "description": "Yanar Dag is a hillside in Azerbaijan where natural gas seeps from the ground and burns continuously — creating the appearance of a mountain on fire! It has burned for centuries."
                  },
                  {
                      "icon": "water",
                      "title": "Caspian Sea",
                      "description": "The Caspian Sea, bordered by Azerbaijan, is the largest enclosed body of water in the world. It contains unique wildlife like the Caspian seal found nowhere else on Earth."
                  },
                  {
                      "icon": "texture",
                      "title": "Azerbaijani Carpets",
                      "description": "Azerbaijani carpets are masterpieces of hand-weaving, with designs featuring symbols and colors that tell stories. They're considered among the finest in the world."
                  }
              ]
          },
          "es": {
              "name": "Azerbaiyán",
              "capital": "Bakú",
              "flagDescription": "La bandera de Azerbaiyán tiene tres franjas horizontales iguales de azul, rojo y verde con una media luna blanca y una estrella de ocho puntas en el centro. El azul representa el patrimonio turco, el rojo simboliza el progreso y la prosperidad, el verde representa el Islam, y la media luna-estrella es un símbolo islámico.",
              "funFacts": [
                  {
                      "icon": "whatshot",
                      "title": "Yanar Dag: montaña de fuego",
                      "description": "¡Yanar Dag es una colina en Azerbaiyán donde el gas natural se filtra del suelo y quema continuamente, creando la apariencia de una montaña en llamas! Ha estado ardiendo durante siglos."
                  },
                  {
                      "icon": "water",
                      "title": "Mar Caspio",
                      "description": "El mar Caspio, bordeado por Azerbaiyán, es el cuerpo de agua cerrado más grande del mundo. Contiene fauna única como la foca del Caspio que no se encuentra en ningún otro lugar."
                  },
                  {
                      "icon": "texture",
                      "title": "Alfombras azerbaiyanas",
                      "description": "Las alfombras azerbaiyanas son obras maestras de tejido a mano, con diseños que presentan símbolos y colores que cuentan historias. Se consideran entre las mejores del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "bahamas",
      "flagCode": "bs",
      "continent": "North America",
      "population": "407K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "The Bahamas",
          "capital": "Nassau",
          "flagDescription": "The Bahamas' flag has three horizontal stripes of aquamarine, gold, and aquamarine, with a black triangle on the hoist side. The aquamarine represents the water surrounding the islands, the gold represents the beaches and resources, and the black triangle represents the determination of the Bahamian people.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Clear Waters",
            "description": "The Bahamas is famous for its pristine turquoise waters and stunning underwater ecosystems."
          },
          {
            "icon": "waves",
            "title": "Blue Holes",
            "description": "The Bahamas contains mysterious blue holes, deep marine caverns that are popular among divers and scientists."
          },
          {
            "icon": "public",
            "title": "Pirate History",
            "description": "The Bahamas has a rich pirate history, with famous pirates like Blackbeard once operating in these waters."
          },
          {
            "icon": "celebration",
            "title": "Junkanoo Festival",
            "description": "Junkanoo is a spectacular Bahamian parade festival with colorful costumes, music, and masks, celebrated after Christmas."
          }
          ]
        },
        "es": {
          "name": "Las Bahamas",
          "capital": "Nassau",
          "flagDescription": "La bandera de Las Bahamas tiene tres franjas horizontales de agua marina, oro y agua marina, con un triángulo negro en el lado del asta. El agua marina representa el agua que rodea las islas, el oro representa las playas y recursos, y el triángulo negro representa la determinación del pueblo bahamense.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Aguas Cristalinas",
            "description": "Las Bahamas es famosa por sus aguas turquesas prístinas y ecosistemas submarinos impresionantes."
          },
          {
            "icon": "waves",
            "title": "Agujeros Azules",
            "description": "Las Bahamas contiene misteriosos agujeros azules, cavernas marinas profundas populares entre buceadores y científicos."
          },
          {
            "icon": "public",
            "title": "Historia Pirata",
            "description": "Las Bahamas tiene una rica historia de piratas, con famosos piratas como Barba Negra operando en estas aguas."
          },
          {
            "icon": "celebration",
            "title": "Festival Junkanoo",
            "description": "Junkanoo es un espectacular festival de desfile bahamense con disfraces coloridos, música y máscaras, celebrado después de Navidad."
          }
          ]
        }
      }
  },
  {
      "slug": "bahrain",
      "flagCode": "bh",
      "continent": "Asia",
      "population": "1.6M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Bahrain",
              "capital": "Manama",
              "flagDescription": "Bahrain's flag has two colors: white and maroon, separated by a jagged serrated line with 8 points. The white represents peace and honesty, maroon traditionally represented courage in the region, and the serrated line represents the strength of the nation.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Pearl Diving Heritage",
                      "description": "Before oil was discovered, Bahrain was famous for pearl diving. For thousands of years, Bahraini divers hunted for pearls in the Persian Gulf — the finest in the world."
                  },
                  {
                      "icon": "architecture",
                      "title": "Al Baraha Mosque",
                      "description": "The Al Baraha Mosque is one of Bahrain's oldest mosques, built with a stunning wooden dome and intricate Islamic architecture that has survived for over 350 years."
                  },
                  {
                      "icon": "water",
                      "title": "Freshwater Springs",
                      "description": "Bahrain has natural freshwater springs on the seafloor — unique in the Middle East! The spring water is so fresh that locals can dive down and collect it."
                  }
              ]
          },
          "es": {
              "name": "Bahrein",
              "capital": "Manama",
              "flagDescription": "La bandera de Bahrein tiene dos colores: blanco y granate, separados por una línea dentada serrada con 8 puntas. El blanco representa la paz y la honestidad, el granate representa tradicionalmente el valor en la región, y la línea serrada representa la fortaleza de la nación.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Herencia de buceo de perlas",
                      "description": "Antes del descubrimiento del petróleo, Bahrein era famoso por el buceo de perlas. Durante miles de años, los buzos bahraní buscaban perlas en el Golfo Pérsico, las más finas del mundo."
                  },
                  {
                      "icon": "architecture",
                      "title": "Mezquita de Al Baraha",
                      "description": "La Mezquita de Al Baraha es una de las mezquitas más antiguas de Bahrein, construida con una cúpula de madera impresionante y arquitectura islámica intrincada que ha sobrevivido más de 350 años."
                  },
                  {
                      "icon": "water",
                      "title": "Manantiales de agua dulce",
                      "description": "Bahrein tiene manantiales de agua dulce en el fondo del mar, ¡únicos en Oriente Medio! El agua del manantial es tan fresca que los habitantes locales pueden bucear y recopilarla."
                  }
              ]
          }
      }
  },
  {
      "slug": "bangladesh",
      "flagCode": "bd",
      "continent": "Asia",
      "population": "169.8M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Bangladesh",
              "capital": "Dhaka",
              "flagDescription": "Bangladesh's flag is green with a red circle in the center. The green represents the lush vegetation and life of the land, and the red circle represents the blood of those who died in the 1971 independence war. The circle is off-center to represent the rising sun.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Sundarbans Mangrove Forest",
                      "description": "The Sundarbans is the largest mangrove forest in the world, straddling Bangladesh and India. It's home to the endangered Bengal tiger, and its name means \"beautiful forest\" in Bengali."
                  },
                  {
                      "icon": "festival",
                      "title": "Pohela Boishakh: New Year",
                      "description": "Pohela Boishakh is the Bengali New Year, celebrated with parades, music, and traditional food. People wear bright colors and visit friends and family to wish them well."
                  },
                  {
                      "icon": "water",
                      "title": "Floating Villages",
                      "description": "In Bangladesh's rivers and wetlands, some communities live entirely on boats and floating houses. The floating villages are a unique way of life that has existed for centuries."
                  }
              ]
          },
          "es": {
              "name": "Bangladés",
              "capital": "Daca",
              "flagDescription": "La bandera de Bangladés es verde con un círculo rojo en el centro. El verde representa la exuberante vegetación y la vida de la tierra, y el círculo rojo representa la sangre de quienes murieron en la guerra de independencia de 1971. El círculo está descentrado para representar el sol naciente.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Bosque de manglares Sundarbans",
                      "description": "Los Sundarbans es el mayor bosque de manglares del mundo, en la frontera entre Bangladés e India. Es el hogar del tigre de Bengala en peligro de extinción, y su nombre significa \"bosque hermoso\" en bengalí."
                  },
                  {
                      "icon": "festival",
                      "title": "Pohela Boishakh: Año Nuevo",
                      "description": "Pohela Boishakh es el Año Nuevo bengalí, celebrado con desfiles, música y comida tradicional. La gente viste colores brillantes y visita a amigos y familiares para desearles lo mejor."
                  },
                  {
                      "icon": "water",
                      "title": "Aldeas flotantes",
                      "description": "En los ríos y humedales de Bangladés, algunas comunidades viven enteramente en botes y casas flotantes. Las aldeas flotantes son una forma de vida única que ha existido durante siglos."
                  }
              ]
          }
      }
  },
  {
      "slug": "barbados",
      "flagCode": "bb",
      "continent": "North America",
      "population": "288K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Barbados",
          "capital": "Bridgetown",
          "flagDescription": "Barbados' flag has three equal vertical stripes of blue, gold, and blue. A black trident head is centered on the gold stripe, representing the island's African heritage and independence. The blue symbolizes the sea, and the gold symbolizes the sandy beaches.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Caribbean Jewel",
            "description": "Barbados is known as the jewel of the Caribbean, with consistent good weather and vibrant culture."
          },
          {
            "icon": "celebration",
            "title": "Crop Over Festival",
            "description": "Crop Over is Barbados' most famous festival, celebrating the end of the sugar cane harvest with music, dancing, and parades."
          },
          {
            "icon": "waves",
            "title": "Shipwreck Diving",
            "description": "Barbados has numerous shipwrecks offshore that are excellent diving sites for exploring maritime history."
          },
          {
            "icon": "landscape",
            "title": "Bridgetown Harbor",
            "description": "The capital's natural harbor has been a vital maritime hub since colonial times."
          }
          ]
        },
        "es": {
          "name": "Barbados",
          "capital": "Bridgetown",
          "flagDescription": "La bandera de Barbados tiene tres franjas verticales iguales de azul, oro y azul. Una cabeza de tridente negra está centrada en la franja dorada, representando la herencia africana e independencia de la isla. El azul simboliza el mar, y el oro simboliza las playas de arena.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Joya del Caribe",
            "description": "Barbados es conocida como la joya del Caribe, con clima consistentemente bueno y cultura vibrante."
          },
          {
            "icon": "celebration",
            "title": "Festival Crop Over",
            "description": "Crop Over es el festival más famoso de Barbados, celebrando el fin de la cosecha de caña de azúcar con música, baile y desfiles."
          },
          {
            "icon": "waves",
            "title": "Buceo en Naufragios",
            "description": "Barbados tiene numerosos naufragios en la costa que son excelentes sitios de buceo para explorar la historia marítima."
          },
          {
            "icon": "landscape",
            "title": "Puerto de Bridgetown",
            "description": "El puerto natural de la capital ha sido un centro marítimo vital desde tiempos coloniales."
          }
          ]
        }
      }
  },
  {
      "slug": "belarus",
      "flagCode": "by",
      "continent": "Europe",
      "population": "9.1M",
      "region": "Eastern Europe",
      "translations": {
          "en": {
              "name": "Belarus",
              "capital": "Minsk",
              "flagDescription": "Belarus's flag has two horizontal bands — a wide red stripe on top and a narrower green stripe on the bottom — with a decorative white and red ornamental pattern along the left side. The red represents the blood of those who fought for freedom, the green symbolizes the country's vast forests and hope for the future, and the traditional ornamental band on the left is a pattern from Belarusian folk art and weaving traditions.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Land of Forests",
                      "description": "Belarus is often called the \"Lungs of Europe\" because forests cover nearly 40% of the country. The Białowieża Forest, shared with Poland, is one of the last and largest ancient primeval forests in Europe and is home to the rare European bison."
                  },
                  {
                      "icon": "sports_hockey",
                      "title": "Ice Hockey Nation",
                      "description": "Ice hockey is Belarus's national sport and a point of immense national pride. Belarusians are passionate fans, and the country has produced many top NHL players. Winter sports culture runs deep in this cold northern country."
                  },
                  {
                      "icon": "architecture",
                      "title": "Mir Castle",
                      "description": "Mir Castle, a UNESCO World Heritage Site, is a magnificent medieval fortress that survived wars, fires, and centuries of history. Its fairy-tale towers rising above a lake make it one of the most picturesque castles in all of Eastern Europe."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Potato Capital",
                      "description": "Belarus is famous for its love of potatoes — Belarusians eat more potatoes per person than almost any other country. Draniki, crispy potato pancakes, are the national dish and can be found on every menu across the country."
                  }
              ]
          },
          "es": {
              "name": "Bielorrusia",
              "capital": "Minsk",
              "flagDescription": "La bandera de Bielorrusia tiene dos bandas horizontales: una franja roja ancha en la parte superior y una franja verde más estrecha en la parte inferior, con un patrón ornamental blanco y rojo a lo largo del lado izquierdo. El rojo representa la sangre de quienes lucharon por la libertad, el verde simboliza los vastos bosques del país y la esperanza en el futuro, y la banda ornamental tradicional a la izquierda es un patrón del arte popular y las tradiciones textiles bielorrusas.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Tierra de Bosques",
                      "description": "Bielorrusia es conocida como los \"Pulmones de Europa\" porque los bosques cubren casi el 40% del país. El Bosque de Białowieża, compartido con Polonia, es uno de los últimos y más grandes bosques primitivos de Europa y es hogar del raro bisonte europeo."
                  },
                  {
                      "icon": "sports_hockey",
                      "title": "Nación del Hockey sobre Hielo",
                      "description": "El hockey sobre hielo es el deporte nacional de Bielorrusia y fuente de enorme orgullo nacional. Los bielorrusos son fanáticos apasionados y el país ha producido muchos jugadores destacados de la NHL. La cultura de los deportes de invierno está arraigada en este frío país del norte."
                  },
                  {
                      "icon": "architecture",
                      "title": "Castillo de Mir",
                      "description": "El Castillo de Mir, Patrimonio de la Humanidad de la UNESCO, es una magnífica fortaleza medieval que sobrevivió guerras, incendios y siglos de historia. Sus torres de cuento de hadas que se alzan sobre un lago lo convierten en uno de los castillos más pintorescos de Europa del Este."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Capital de la Patata",
                      "description": "Bielorrusia es famosa por su amor a las patatas: los bielorrusos comen más patatas por persona que casi cualquier otro país. Los draniki, crujientes tortitas de patata, son el plato nacional y se pueden encontrar en todos los menús del país."
                  }
              ]
          }
      }
  },
  {
      "slug": "belgium",
      "flagCode": "be",
      "continent": "Europe",
      "population": "11.8M",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Belgium",
              "capital": "Brussels",
              "flagDescription": "Belgium's flag has three vertical stripes of black, yellow, and red — colors taken from the historic coat of arms of the Duchy of Brabant, featuring a golden lion on a black background with red claws and tongue. The flag's design was inspired by the French tricolor during Belgium's revolution of 1830, when Belgians rose up to win their independence. Today it represents Belgium's unity across its Dutch, French, and German-speaking communities.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Chocolate and Waffles Capital",
                      "description": "Belgium is world-famous for its extraordinary chocolate and delicious waffles. Belgian chocolate is considered among the finest in the world, and there are more chocolate shops per square kilometer in Brussels than almost anywhere else on Earth."
                  },
                  {
                      "icon": "mood",
                      "title": "Comic Strip Country",
                      "description": "Belgium is the birthplace of some of the world's most beloved comic strip characters, including Tintin and the Smurfs. The comic strip art form is taken so seriously that Brussels has a Comic Strip Museum and buildings decorated with giant comic murals."
                  },
                  {
                      "icon": "emoji_food_beverage",
                      "title": "Beer Paradise",
                      "description": "Belgium produces over 1,500 different types of beer, many crafted by medieval monks in monasteries. Belgian beer culture was added to UNESCO's Intangible Cultural Heritage list, recognizing it as a unique and precious tradition."
                  },
                  {
                      "icon": "location_city",
                      "title": "Heart of Europe",
                      "description": "Brussels is home to the headquarters of both NATO and the European Union, making Belgium the unofficial political capital of Europe. The country's central location and multilingual culture have made it a natural meeting place for nations."
                  }
              ]
          },
          "es": {
              "name": "Bélgica",
              "capital": "Bruselas",
              "flagDescription": "La bandera de Bélgica tiene tres franjas verticales de negro, amarillo y rojo, colores tomados del histórico escudo del Ducado de Brabante, con un león dorado sobre fondo negro con garras y lengua rojas. El diseño de la bandera fue inspirado por el tricolor francés durante la revolución belga de 1830, cuando los belgas se levantaron para ganar su independencia. Hoy representa la unidad de Bélgica entre sus comunidades de habla neerlandesa, francesa y alemana.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Capital del Chocolate y los Gofres",
                      "description": "Bélgica es famosa mundialmente por su extraordinario chocolate y sus deliciosos gofres. El chocolate belga se considera uno de los mejores del mundo, y hay más tiendas de chocolate por kilómetro cuadrado en Bruselas que en casi cualquier otro lugar de la Tierra."
                  },
                  {
                      "icon": "mood",
                      "title": "País del Cómic",
                      "description": "Bélgica es el lugar de nacimiento de algunos de los personajes de cómic más queridos del mundo, incluyendo Tintín y los Pitufos. El arte del cómic se toma tan en serio que Bruselas tiene un Museo del Cómic y edificios decorados con enormes murales de historietas."
                  },
                  {
                      "icon": "emoji_food_beverage",
                      "title": "Paraíso de la Cerveza",
                      "description": "Bélgica produce más de 1.500 tipos diferentes de cerveza, muchas elaboradas por monjes medievales en monasterios. La cultura cervecera belga fue añadida a la lista del Patrimonio Cultural Inmaterial de la UNESCO, reconociéndola como una tradición única y preciosa."
                  },
                  {
                      "icon": "location_city",
                      "title": "Corazón de Europa",
                      "description": "Bruselas alberga las sedes tanto de la OTAN como de la Unión Europea, convirtiéndose en la capital política no oficial de Europa. La ubicación central del país y su cultura multilingüe lo han convertido en un lugar de encuentro natural para las naciones."
                  }
              ]
          }
      }
  },
  {
      "slug": "belize",
      "flagCode": "bz",
      "continent": "North America",
      "population": "397K",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Belize",
          "capital": "Belmopan",
          "flagDescription": "Belize's flag is the only flag with more people than land in its design. It features the Belize coat of arms (two loggers and a shield) on a blue background with red upper and lower stripes. The mahogany trees and forest symbolize Belize's natural wealth.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Great Blue Hole",
            "description": "Belize is home to the famous Great Blue Hole, a massive underwater sinkhole that is a UNESCO World Heritage Site."
          },
          {
            "icon": "nature",
            "title": "Rainforest Biodiversity",
            "description": "Belize has one of the highest biodiversity densities in the world, with rainforests covering much of the country."
          },
          {
            "icon": "waves",
            "title": "Barrier Reef",
            "description": "Belize has the second-largest coral barrier reef in the world, making it a paradise for snorkeling and diving."
          },
          {
            "icon": "history",
            "title": "Mayan History",
            "description": "Belize has significant Mayan archaeological sites and ruins, showcasing the ancient civilization's achievements."
          }
          ]
        },
        "es": {
          "name": "Belice",
          "capital": "Belmopán",
          "flagDescription": "La bandera de Belice es la única bandera con más personas que tierra en su diseño. Presenta el escudo de armas de Belice (dos leñadores y un escudo) en un fondo azul con franjas rojo en la parte superior e inferior. Los árboles de caoba y bosque simbolizan la riqueza natural de Belice.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Gran Agujero Azul",
            "description": "Belice es hogar del famoso Gran Agujero Azul, un sumidero subacuático masivo que es un Sitio del Patrimonio Mundial de la UNESCO."
          },
          {
            "icon": "nature",
            "title": "Biodiversidad de la Selva Tropical",
            "description": "Belice tiene una de las mayores densidades de biodiversidad del mundo, con selvas tropicales cubriendo gran parte del país."
          },
          {
            "icon": "waves",
            "title": "Barrera de Coral",
            "description": "Belice tiene la segunda barrera de coral más grande del mundo, haciéndolo un paraíso para el buceo de snorkel y buceo."
          },
          {
            "icon": "history",
            "title": "Historia Maya",
            "description": "Belice tiene sitios y ruinas arqueológicos mayas significativos, mostrando los logros de la civilización antigua."
          }
          ]
        }
      }
  },
  {
      "slug": "benin",
      "flagCode": "bj",
      "continent": "Africa",
      "population": "13.2M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Benin",
              "capital": "Porto-Novo",
              "flagDescription": "Benin's flag has a green vertical stripe on the left and two horizontal stripes on the right — yellow on top and red on the bottom. Green represents hope and renewal, yellow symbolizes the country's wealth, and red stands for the courage of the Beninese people.",
              "funFacts": [
                  {
                      "icon": "auto_awesome",
                      "title": "Birthplace of Voodoo",
                      "description": "Benin is the birthplace of Voodoo, a spiritual tradition practiced by millions of people. The annual Voodoo Festival in Ouidah draws thousands of visitors from around the world!"
                  },
                  {
                      "icon": "castle",
                      "title": "Kingdom of Dahomey",
                      "description": "The ancient Kingdom of Dahomey was famous for its fierce all-female warrior corps called the Agojie (or 'Dahomey Amazons'). Their incredible story inspired the film The Woman King."
                  },
                  {
                      "icon": "forest",
                      "title": "Wildlife Sanctuary",
                      "description": "Pendjari National Park in northern Benin is one of West Africa's last refuges for lions, elephants, and hippos, making it one of the most important wildlife areas in the region."
                  }
              ]
          },
          "es": {
              "name": "Benín",
              "capital": "Porto-Novo",
              "flagDescription": "La bandera de Benín tiene una franja vertical verde a la izquierda y dos franjas horizontales a la derecha: amarilla arriba y roja abajo. El verde representa la esperanza, el amarillo simboliza la riqueza del país, y el rojo representa el coraje del pueblo beninés.",
              "funFacts": [
                  {
                      "icon": "auto_awesome",
                      "title": "Cuna del Vudú",
                      "description": "¡Benín es la cuna del Vudú, una tradición espiritual practicada por millones de personas. El Festival del Vudú en Ouidah atrae a miles de visitantes de todo el mundo cada año!"
                  },
                  {
                      "icon": "castle",
                      "title": "Reino de Dahomey",
                      "description": "El antiguo Reino de Dahomey era famoso por su cuerpo de guerreras llamadas Agojie ('Amazonas de Dahomey'). Su increíble historia inspiró la película La Mujer Rey."
                  },
                  {
                      "icon": "forest",
                      "title": "Santuario de vida silvestre",
                      "description": "El Parque Nacional Pendjari es uno de los últimos refugios de leones, elefantes e hipopótamos en África Occidental, siendo uno de los más importantes de la región."
                  }
              ]
          }
      }
  },
  {
      "slug": "bermuda",
      "flagCode": "bm",
      "continent": "North America",
      "population": "64.1K",
      "region": "Atlantic Ocean",
      "translations": {
        "en": {
          "name": "Bermuda",
          "capital": "Hamilton",
          "flagDescription": "Bermuda's flag is red with the Union Jack in the upper hoist corner and the Bermuda coat of arms on the lower right. The coat of arms features a shipwreck and lion, representing maritime heritage and British connections. The red background represents courage.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Island Pink Sands",
            "description": "Bermuda's beaches are famous for their pink sand, which comes from coral, shells, and red minerals."
          },
          {
            "icon": "public",
            "title": "Maritime Nation",
            "description": "Bermuda has a deep maritime heritage and is known for its ships and seafaring traditions."
          },
          {
            "icon": "landscape",
            "title": "Subtropical Paradise",
            "description": "Bermuda is located in the Atlantic Ocean and has a subtropical climate with beautiful landscapes."
          },
          {
            "icon": "celebration",
            "title": "Gombey Dancers",
            "description": "Gombey dancing is a traditional form of street performance in Bermuda with colorful costumes and rhythmic movement."
          }
          ]
        },
        "es": {
          "name": "Bermuda",
          "capital": "Hamilton",
          "flagDescription": "La bandera de Bermuda es roja con la Union Jack en la esquina superior del asta y el escudo de armas de Bermuda en la esquina inferior derecha. El escudo de armas presenta un naufragio y un león, representando el patrimonio marítimo y las conexiones británicas. El fondo rojo representa el coraje.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Arena Rosa de la Isla",
            "description": "Las playas de Bermuda son famosas por su arena rosa, que proviene de coral, conchas y minerales rojos."
          },
          {
            "icon": "public",
            "title": "Nación Marítima",
            "description": "Bermuda tiene un profundo patrimonio marítimo y es conocida por sus barcos y tradiciones de navegación."
          },
          {
            "icon": "landscape",
            "title": "Paraíso Subtropical",
            "description": "Bermuda está ubicada en el Océano Atlántico y tiene un clima subtropical con hermosos paisajes."
          },
          {
            "icon": "celebration",
            "title": "Bailarines Gombey",
            "description": "El baile Gombey es una forma tradicional de actuación callejera en Bermuda con disfraces coloridos y movimiento rítmico."
          }
          ]
        }
      }
  },
  {
      "slug": "bhutan",
      "flagCode": "bt",
      "continent": "Asia",
      "population": "784K",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Bhutan",
              "capital": "Thimphu",
              "flagDescription": "Bhutan's flag is divided diagonally with orange/saffron in the upper triangle and crimson red in the lower triangle. A white dragon (Druk) in the center represents the power and might of Bhutan. Orange symbolizes the Buddhist religion and crimson red represents secular authority.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Gross National Happiness",
                      "description": "Bhutan doesn't measure progress by GDP — instead it measures \"Gross National Happiness.\" The government focuses on the well-being and happiness of its people instead of just economic growth."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Tiger's Nest Monastery",
                      "description": "The Tiger's Nest is a sacred monastery perched on a cliff 3,000 meters above the ground. According to legend, a Buddhist saint flew to this cliffside on a tiger's back."
                  },
                  {
                      "icon": "forest",
                      "title": "70% Forest Coverage",
                      "description": "Bhutan has maintained over 70% forest coverage by constitutional law — making it one of the world's greenest countries and a global leader in environmental conservation."
                  }
              ]
          },
          "es": {
              "name": "Bután",
              "capital": "Timbu",
              "flagDescription": "La bandera de Bután está dividida en diagonal con naranja/azafrán en el triángulo superior y rojo carmesí en el inferior. Un dragón blanco (Druk) en el centro representa el poder y la fuerza de Bután. El naranja simboliza la religión budista y el rojo carmesí representa la autoridad secular.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Felicidad Nacional Bruta",
                      "description": "Bután no mide el progreso por PIB, sino por \"Felicidad Nacional Bruta\". El gobierno se enfoca en el bienestar y la felicidad de su pueblo en lugar de solo el crecimiento económico."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Monasterio del Nido del Tigre",
                      "description": "El Nido del Tigre es un monasterio sagrado encaramado en un acantilado a 3.000 metros de altura. Según la leyenda, un santo budista voló a este acantilado montado en el lomo de un tigre."
                  },
                  {
                      "icon": "forest",
                      "title": "Cobertura forestal del 70%",
                      "description": "Bután ha mantenido más del 70% de cobertura forestal por ley constitucional, lo que la convierte en uno de los países más verdes del mundo y líder mundial en conservación ambiental."
                  }
              ]
          }
      }
  },
  {
      "slug": "bolivia",
      "flagCode": "bo",
      "continent": "South America",
      "population": "11.8M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Bolivia",
          "capital": "La Paz and Sucre",
          "flagDescription": "Bolivia's flag has three equal horizontal stripes of red, yellow, and green. The red symbolizes the blood shed for independence, yellow represents mineral wealth and the sun, and green represents the land and fertility. The national emblem is often displayed in the center.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Salar de Uyuni",
            "description": "Bolivia is home to Salar de Uyuni, the world's largest salt flat, which creates a stunning mirror effect during the rainy season."
          },
          {
            "icon": "public",
            "title": "Indigenous Heritage",
            "description": "Bolivia has a rich indigenous heritage with many people speaking Quechua and Aymara languages."
          },
          {
            "icon": "terrain",
            "title": "Andes Mountains",
            "description": "Bolivia is located in the Andes Mountains and contains some of the highest peaks in South America."
          },
          {
            "icon": "history",
            "title": "Silver Mining History",
            "description": "Bolivia was once the world's largest producer of silver, which attracted Spanish colonizers in the 16th century."
          }
          ]
        },
        "es": {
          "name": "Bolivia",
          "capital": "La Paz y Sucre",
          "flagDescription": "La bandera de Bolivia tiene tres franjas horizontales iguales de rojo, amarillo y verde. El rojo simboliza la sangre derramada por la independencia, el amarillo representa la riqueza mineral y el sol, y el verde representa la tierra y la fertilidad. El escudo nacional a menudo se exhibe en el centro.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Salar de Uyuni",
            "description": "Bolivia es hogar del Salar de Uyuni, el mayor salar del mundo, que crea un efecto espejo impresionante durante la estación lluviosa."
          },
          {
            "icon": "public",
            "title": "Herencia Indígena",
            "description": "Bolivia tiene una herencia indígena rica con muchas personas hablando idiomas quechua y aymara."
          },
          {
            "icon": "terrain",
            "title": "Montañas de los Andes",
            "description": "Bolivia está ubicada en las Montañas de los Andes y contiene algunos de los picos más altos de América del Sur."
          },
          {
            "icon": "history",
            "title": "Historia de Minería de Plata",
            "description": "Bolivia fue una vez el mayor productor de plata del mundo, lo que atrajo a colonizadores españoles en el siglo XVI."
          }
          ]
        }
      }
  },
  {
      "slug": "bosnia-and-herzegovina",
      "flagCode": "ba",
      "continent": "Europe",
      "population": "3.4M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Bosnia and Herzegovina",
              "capital": "Sarajevo",
              "flagDescription": "Bosnia and Herzegovina's flag features a large yellow right triangle pointing upward against a blue background, with a diagonal row of white stars running along the triangle's hypotenuse. The blue and yellow colors are shared with the European Union flag, symbolizing Bosnia's European aspirations. The white stars represent the people of Bosnia and Herzegovina, and the triangle's three points represent the three main ethnic groups: Bosniaks, Croats, and Serbs.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Stari Most Bridge",
                      "description": "The Old Bridge (Stari Most) in Mostar is one of the most beautiful bridges in the world. Built by the Ottoman Empire in 1566, it gracefully arches over the turquoise Neretva River. Brave locals still hold diving competitions from its top every summer."
                  },
                  {
                      "icon": "downhill_skiing",
                      "title": "1984 Winter Olympics",
                      "description": "Sarajevo hosted the 1984 Winter Olympics, putting Bosnia on the world stage. The mountain venues used during those games — Jahorina and Bjelašnica — are still popular ski resorts today, attracting skiers from across Europe."
                  },
                  {
                      "icon": "coffee",
                      "title": "Coffee Culture",
                      "description": "Bosnian coffee is a unique tradition unlike coffee anywhere else. Ground coffee is boiled directly in a small copper pot called a džezva, then poured slowly and sipped ceremonially. Sharing coffee is a deeply important social ritual in Bosnian culture."
                  },
                  {
                      "icon": "water",
                      "title": "Kravice Waterfalls",
                      "description": "The Kravice Waterfalls are often called the \"mini Niagara of Herzegovina\" — a stunning natural spectacle where the Trebižat River cascades over a 25-meter semicircular cliff into a turquoise pool below, surrounded by lush green vegetation."
                  }
              ]
          },
          "es": {
              "name": "Bosnia y Herzegovina",
              "capital": "Sarajevo",
              "flagDescription": "La bandera de Bosnia y Herzegovina muestra un gran triángulo amarillo apuntando hacia arriba sobre un fondo azul, con una fila diagonal de estrellas blancas a lo largo de la hipotenusa del triángulo. Los colores azul y amarillo son compartidos con la bandera de la Unión Europea, simbolizando las aspiraciones europeas de Bosnia. Las estrellas blancas representan al pueblo de Bosnia y Herzegovina, y los tres vértices del triángulo representan a los tres grupos étnicos principales: bosniacos, croatas y serbios.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "El Puente Stari Most",
                      "description": "El Puente Viejo (Stari Most) en Mostar es uno de los puentes más hermosos del mundo. Construido por el Imperio Otomano en 1566, se arquea elegantemente sobre el turquesa Río Neretva. Los valientes lugareños todavía celebran competiciones de salto desde su cima cada verano."
                  },
                  {
                      "icon": "downhill_skiing",
                      "title": "Juegos Olímpicos de Invierno 1984",
                      "description": "Sarajevo fue sede de los Juegos Olímpicos de Invierno de 1984, poniendo a Bosnia en el escenario mundial. Las instalaciones de montaña utilizadas durante esos juegos — Jahorina y Bjelašnica — siguen siendo populares estaciones de esquí hoy en día."
                  },
                  {
                      "icon": "coffee",
                      "title": "Cultura del Café",
                      "description": "El café bosnio es una tradición única diferente al café de cualquier otro lugar. El café molido se hierve directamente en una pequeña olla de cobre llamada džezva, luego se vierte lentamente y se sorbe ceremonialmente. Compartir café es un ritual social profundamente importante en la cultura bosnia."
                  },
                  {
                      "icon": "water",
                      "title": "Cascadas de Kravice",
                      "description": "Las Cascadas de Kravice son a menudo llamadas el \"mini Niágara de Herzegovina\": un impresionante espectáculo natural donde el Río Trebižat cae sobre un acantilado semicircular de 25 metros hacia una piscina turquesa, rodeada de exuberante vegetación verde."
                  }
              ]
          }
      }
  },
  {
      "slug": "botswana",
      "flagCode": "bw",
      "continent": "Africa",
      "population": "2.4M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "Botswana",
              "capital": "Gaborone",
              "flagDescription": "Botswana's flag has two light blue stripes at the top and bottom, a bold black stripe in the middle, and thin white lines on either side of the black — just like a zebra's pattern! Blue represents the precious rain and water in this dry land, while black and white symbolize racial harmony and equality.",
              "funFacts": [
                  {
                      "icon": "diamond",
                      "title": "Diamond Kingdom",
                      "description": "Botswana is the world's largest diamond producer by value. The Jwaneng mine is the richest diamond mine on Earth and has helped make Botswana one of Africa's wealthiest nations."
                  },
                  {
                      "icon": "water",
                      "title": "Magical Okavango Delta",
                      "description": "The Okavango Delta is the world's largest inland river delta — a vast wetland that floods every year in the middle of the Kalahari Desert, creating a paradise for elephants, hippos, and flamingos."
                  },
                  {
                      "icon": "pets",
                      "title": "Cheetah Country",
                      "description": "Botswana has one of the world's largest cheetah populations. Its wide open savanna is the perfect home for the fastest animal on land."
                  }
              ]
          },
          "es": {
              "name": "Botsuana",
              "capital": "Gaborone",
              "flagDescription": "La bandera de Botsuana tiene dos franjas azules arriba y abajo, una gruesa franja negra en el centro y delgadas líneas blancas a cada lado, ¡igual que las rayas de una cebra! El azul representa la lluvia y el agua, tan preciosas en esta tierra seca, mientras que el negro y el blanco simbolizan la armonía racial y la igualdad.",
              "funFacts": [
                  {
                      "icon": "diamond",
                      "title": "Reino del diamante",
                      "description": "Botsuana es el mayor productor mundial de diamantes por valor. La mina de Jwaneng es la más rica del planeta y ha convertido al país en uno de los más prósperos de África."
                  },
                  {
                      "icon": "water",
                      "title": "El mágico delta del Okavango",
                      "description": "El Delta del Okavango es el mayor delta fluvial interior del mundo: un enorme humedal que se inunda cada año en medio del desierto del Kalahari, creando un paraíso para elefantes, hipopótamos y flamencos."
                  },
                  {
                      "icon": "pets",
                      "title": "País del guepardo",
                      "description": "Botsuana alberga una de las mayores poblaciones de guepardos del mundo. Su amplia sabana es el hogar perfecto para el animal terrestre más rápido del planeta."
                  }
              ]
          }
      }
  },
  {
      "slug": "brazil",
      "flagCode": "br",
      "continent": "South America",
      "population": "215.3M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Brazil",
          "capital": "Brasília",
          "flagDescription": "Brazil's flag is green with a yellow diamond and a blue disk (globe) in the center. A white band with the national motto \"Order and Progress\" crosses the disk. Green represents the land, yellow represents the nation's minerals, and blue represents the sky.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Amazon Rainforest",
            "description": "Brazil contains the Amazon Rainforest, the world's largest tropical forest and home to millions of species."
          },
          {
            "icon": "music_note",
            "title": "Samba and Carnival",
            "description": "Brazil is the birthplace of samba music and hosts the world-famous Rio Carnival festival."
          },
          {
            "icon": "sports",
            "title": "Football Legacy",
            "description": "Brazil is a football (soccer) powerhouse with five World Cup victories and countless legendary players."
          },
          {
            "icon": "public",
            "title": "South America's Largest",
            "description": "Brazil is the largest country in South America and the fifth-largest in the world by area."
          }
          ]
        },
        "es": {
          "name": "Brasil",
          "capital": "Brasilia",
          "flagDescription": "La bandera de Brasil es verde con un diamante amarillo y un disco azul (globo) en el centro. Una banda blanca con el lema nacional \"Orden y Progreso\" cruza el disco. El verde representa la tierra, el amarillo representa los minerales de la nación, y el azul representa el cielo.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Selva Amazónica",
            "description": "Brasil contiene la Selva Amazónica, la selva tropical más grande del mundo y hogar de millones de especies."
          },
          {
            "icon": "music_note",
            "title": "Samba y Carnaval",
            "description": "Brasil es el lugar de nacimiento de la música samba y alberga el famoso Carnaval de Río del mundo."
          },
          {
            "icon": "sports",
            "title": "Legado del Fútbol",
            "description": "Brasil es una potencia del fútbol (soccer) con cinco victorias de la Copa Mundial e innumerables jugadores legendarios."
          },
          {
            "icon": "public",
            "title": "El Más Grande de América del Sur",
            "description": "Brasil es el país más grande de América del Sur y el quinto más grande del mundo por área."
          }
          ]
        }
      }
  },
  {
      "slug": "british-indian-ocean-territory",
      "flagCode": "io",
      "continent": "Africa",
      "population": "0",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "British Indian Ocean Territory",
              "capital": "Diego Garcia",
              "flagDescription": "The flag of the British Indian Ocean Territory shows blue and white wavy stripes representing the ocean, with the Union Jack of the United Kingdom in the top-left corner and a palm tree topped with a crown on the right. It is a British overseas territory located in the middle of the Indian Ocean.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Giant Marine Reserve",
                      "description": "The territory is home to one of the world's largest marine protected areas, covering over 640,000 square km of pristine ocean — bigger than the state of California!"
                  },
                  {
                      "icon": "pest_control",
                      "title": "Coconut Crab Giants",
                      "description": "Coconut crabs are the world's biggest land invertebrates and they actually live here! These remarkable crabs can crack open coconuts with their powerful claws and weigh up to 4 kg."
                  },
                  {
                      "icon": "anchor",
                      "title": "Remote Coral Atolls",
                      "description": "The territory consists of coral atolls rising from the deep Indian Ocean, surrounded by crystal-clear turquoise water with some of the most diverse coral reefs on Earth."
                  }
              ]
          },
          "es": {
              "name": "Territorio Británico del Océano Índico",
              "capital": "Diego Garcia",
              "flagDescription": "La bandera del Territorio Británico del Océano Índico muestra franjas onduladas azules y blancas que representan el océano, con la bandera del Reino Unido en la esquina superior izquierda y una palmera coronada a la derecha. Es un territorio británico de ultramar en medio del Océano Índico.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Gran reserva marina",
                      "description": "Este territorio alberga una de las mayores áreas marinas protegidas del mundo, con más de 640.000 km² de océano prístino, ¡más grande que el estado de California!"
                  },
                  {
                      "icon": "pest_control",
                      "title": "El cangrejo de los cocoteros",
                      "description": "El cangrejo de los cocoteros es el invertebrado terrestre más grande del mundo, ¡y vive aquí! Puede abrir cocos con sus poderosas pinzas y pesar hasta 4 kg."
                  },
                  {
                      "icon": "anchor",
                      "title": "Atolones de coral remotos",
                      "description": "El territorio está formado por atolones de coral rodeados de agua turquesa cristalina con algunos de los arrecifes de coral más diversos de la Tierra."
                  }
              ]
          }
      }
  },
  {
      "slug": "british-virgin-islands",
      "flagCode": "vg",
      "continent": "North America",
      "population": "35.7K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "British Virgin Islands",
          "capital": "Road Town",
          "flagDescription": "The British Virgin Islands' flag is blue with the Union Jack in the upper left and the coat of arms on the right. The coat of arms features an oil lamp and the motto \"Vigilate\" (watch). The blue represents the sea and sky surrounding the islands.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Sailing Paradise",
            "description": "The British Virgin Islands are a paradise for sailing, with many yacht charters and water sports activities."
          },
          {
            "icon": "landscape",
            "title": "Island Chain",
            "description": "The territory comprises about 60 islands and cays, many of which are uninhabited and pristine."
          },
          {
            "icon": "public",
            "title": "British Heritage",
            "description": "The islands have maintained strong British cultural and political connections since colonial times."
          },
          {
            "icon": "history",
            "title": "Pirate History",
            "description": "The British Virgin Islands have a colorful history as a pirate haven in the Caribbean."
          }
          ]
        },
        "es": {
          "name": "Islas Vírgenes Británicas",
          "capital": "Road Town",
          "flagDescription": "La bandera de las Islas Vírgenes Británicas es azul con la Union Jack en la esquina superior izquierda y el escudo de armas en la derecha. El escudo de armas presenta una lámpara de aceite y el lema \"Vigilate\" (vigila). El azul representa el mar y el cielo que rodean las islas.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Paraíso de la Vela",
            "description": "Las Islas Vírgenes Británicas son un paraíso para la vela, con muchos alquileres de yates y actividades de deportes acuáticos."
          },
          {
            "icon": "landscape",
            "title": "Cadena de Islas",
            "description": "El territorio comprende aproximadamente 60 islas y cayos, muchos de los cuales son deshabitados y prístinos."
          },
          {
            "icon": "public",
            "title": "Herencia Británica",
            "description": "Las islas han mantenido conexiones culturales y políticas británicas fuertes desde tiempos coloniales."
          },
          {
            "icon": "history",
            "title": "Historia de Piratas",
            "description": "Las Islas Vírgenes Británicas tienen una historia colorida como refugio pirata en el Caribe."
          }
          ]
        }
      }
  },
  {
      "slug": "brunei",
      "flagCode": "bn",
      "continent": "Asia",
      "population": "456K",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Brunei",
              "capital": "Bandar Seri Begawan",
              "flagDescription": "Brunei's flag is yellow with a diagonal stripe of white and black dividing it. The stripes hold the national emblem featuring a crescent, parasol, and hands. Yellow represents the Sultan, while white and black represent the chief ministers. The emblem represents the sultanate.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Jame'ath Hassanil Bolkiah Mosque",
                      "description": "This stunning mosque has a golden dome covered in 24-karat gold leaf and can hold thousands of worshippers. It's one of Asia's largest and most beautiful mosques."
                  },
                  {
                      "icon": "eco",
                      "title": "Ancient Rainforest",
                      "description": "Brunei's rainforests are estimated to be 140 million years old — older than the Amazon! They are home to rare species like the proboscis monkey with its distinctive long nose."
                  },
                  {
                      "icon": "water",
                      "title": "Kampong Ayer: Water Village",
                      "description": "Kampong Ayer is a historic settlement of about 30,000 people living in wooden houses built over water. It's one of the oldest settlements in Brunei, dating back centuries."
                  }
              ]
          },
          "es": {
              "name": "Brunéi",
              "capital": "Bandar Seri Begawan",
              "flagDescription": "La bandera de Brunéi es amarilla con una franja diagonal de blanco y negro dividiéndola. Las franjas contienen el emblema nacional que presenta una media luna, un parasol y manos. El amarillo representa al Sultán, mientras que el blanco y negro representan a los ministros principales. El emblema representa el sultanato.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Mezquita Jame'ath Hassanil Bolkiah",
                      "description": "Esta impresionante mezquita tiene una cúpula dorada cubierta con pan de oro de 24 quilates y puede albergar a miles de fieles. Es una de las mezquitas más grandes y hermosas de Asia."
                  },
                  {
                      "icon": "eco",
                      "title": "Selva tropical antigua",
                      "description": "¡Se estima que las selvas tropicales de Brunéi tienen 140 millones de años, más antiguas que el Amazonas! Albergan especies raras como el mono narigudo con su distintiva nariz larga."
                  },
                  {
                      "icon": "water",
                      "title": "Kampong Ayer: aldea acuática",
                      "description": "Kampong Ayer es un asentamiento histórico de unas 30.000 personas que viven en casas de madera construidas sobre el agua. Es uno de los asentamientos más antiguos de Brunéi, que se remonta siglos atrás."
                  }
              ]
          }
      }
  },
  {
      "slug": "bulgaria",
      "flagCode": "bg",
      "continent": "Europe",
      "population": "6.4M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Bulgaria",
              "capital": "Sofia",
              "flagDescription": "Bulgaria's flag has three horizontal stripes of white, green, and red. The white represents peace and freedom, the green symbolizes the country's forests and agricultural wealth, and the red stands for the courage of those who fought for independence. The colors were chosen after Bulgaria gained independence from the Ottoman Empire in 1878, and the design was partly inspired by Russia's tricolor as a tribute to Russia's role in helping Bulgaria achieve freedom.",
              "funFacts": [
                  {
                      "icon": "local_florist",
                      "title": "Valley of Roses",
                      "description": "Bulgaria produces about 70–85% of the world's rose oil, used in luxury perfumes. The Rose Valley near Kazanlak bursts into bloom every May and June, and locals celebrate with a beautiful Rose Festival — a tradition going back over 300 years."
                  },
                  {
                      "icon": "history",
                      "title": "Ancient Thracian Gold",
                      "description": "Bulgaria has one of the richest collections of ancient Thracian gold treasure in the world. The Panagyurishte Treasure, discovered in 1949, includes extraordinary golden vessels decorated with mythological scenes and is considered a masterpiece of ancient craftsmanship."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Black Sea Resorts",
                      "description": "Bulgaria has a beautiful stretch of Black Sea coastline with warm waters, golden sandy beaches, and ancient seaside towns. Resorts like Sunny Beach attract millions of European visitors every summer, while historic towns like Nessebar date back 3,000 years."
                  },
                  {
                      "icon": "language",
                      "title": "Creators of the Cyrillic Alphabet",
                      "description": "The Cyrillic alphabet, used by over 250 million people across Russia, Ukraine, Serbia, and many other countries, was created in Bulgaria in the 9th century by Saints Cyril and Methodius. Bulgaria is rightfully proud of this enormous gift to world literacy."
                  }
              ]
          },
          "es": {
              "name": "Bulgaria",
              "capital": "Sofía",
              "flagDescription": "La bandera de Bulgaria tiene tres franjas horizontales de blanco, verde y rojo. El blanco representa la paz y la libertad, el verde simboliza los bosques y la riqueza agrícola del país, y el rojo representa el coraje de quienes lucharon por la independencia. Los colores fueron elegidos tras la independencia de Bulgaria del Imperio Otomano en 1878, y el diseño fue parcialmente inspirado por el tricolor ruso como tributo al papel de Rusia en ayudar a Bulgaria a conseguir la libertad.",
              "funFacts": [
                  {
                      "icon": "local_florist",
                      "title": "Valle de las Rosas",
                      "description": "Bulgaria produce entre el 70 y el 85% del aceite de rosas del mundo, usado en perfumes de lujo. El Valle de las Rosas cerca de Kazanlak florece cada mayo y junio, y los lugareños celebran con un hermoso Festival de la Rosa, una tradición que se remonta a más de 300 años."
                  },
                  {
                      "icon": "history",
                      "title": "Oro Tracio Antiguo",
                      "description": "Bulgaria tiene una de las colecciones más ricas de tesoros de oro tracio antiguo del mundo. El Tesoro de Panagyurishte, descubierto en 1949, incluye extraordinarios recipientes de oro decorados con escenas mitológicas y es considerado una obra maestra de la artesanía antigua."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Balnearios del Mar Negro",
                      "description": "Bulgaria tiene un hermoso tramo de costa en el Mar Negro con aguas cálidas, playas de arena dorada y antiguas ciudades costeras. Balnearios como la Sunny Beach atraen a millones de visitantes europeos cada verano, mientras que ciudades históricas como Nessebar datan de hace 3.000 años."
                  },
                  {
                      "icon": "language",
                      "title": "Creadores del Alfabeto Cirílico",
                      "description": "El alfabeto cirílico, usado por más de 250 millones de personas en Rusia, Ucrania, Serbia y muchos otros países, fue creado en Bulgaria en el siglo IX por los Santos Cirilo y Metodio. Bulgaria está justamente orgullosa de este enorme regalo a la alfabetización mundial."
                  }
              ]
          }
      }
  },
  {
      "slug": "burkina-faso",
      "flagCode": "bf",
      "continent": "Africa",
      "population": "24.1M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Burkina Faso",
              "capital": "Ouagadougou",
              "flagDescription": "Burkina Faso's flag has two equal horizontal stripes — red on top and green on the bottom — with a yellow five-pointed star in the center. Red represents the revolution and unity of the people, green symbolizes hope and the country's agriculture, and the yellow star is a guiding light for the nation.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "Land of Upright People",
                      "description": "The name \"Burkina Faso\" means \"Land of Upright (Honest) People\" in the Mossi and Dioula languages. It's one of the most meaningful country names in the world!"
                  },
                  {
                      "icon": "festival",
                      "title": "Spectacular Mask Festivals",
                      "description": "The traditional mask festivals of Burkina Faso are among the most spectacular in all of Africa. Enormous and colorful sacred masks represent ancestors and spirits in dramatic dances."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Mango Capital",
                      "description": "Burkina Faso is one of West Africa's top mango exporters. The sweet Burkinabé mango is sold in markets across Europe and beyond."
                  }
              ]
          },
          "es": {
              "name": "Burkina Faso",
              "capital": "Uagadugú",
              "flagDescription": "La bandera de Burkina Faso tiene dos franjas horizontales iguales: roja arriba y verde abajo, con una estrella amarilla de cinco puntas en el centro. El rojo representa la revolución y la unidad del pueblo, el verde simboliza la esperanza y la agricultura, y la estrella amarilla es una luz guía para la nación.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "Tierra de personas íntegras",
                      "description": "¡El nombre \"Burkina Faso\" significa \"Tierra de personas íntegras (honestas)\" en las lenguas mossi y dioula! Es uno de los nombres de países con más significado en el mundo."
                  },
                  {
                      "icon": "festival",
                      "title": "Espectaculares festivales de máscaras",
                      "description": "Los festivales de máscaras tradicionales de Burkina Faso se encuentran entre los más espectaculares de África. Enormes máscaras sagradas representan a los ancestros en dramáticas danzas."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Capital del mango",
                      "description": "Burkina Faso es uno de los principales exportadores de mangos de África Occidental. El dulce mango burkinés se vende en mercados de toda Europa."
                  }
              ]
          }
      }
  },
  {
      "slug": "burundi",
      "flagCode": "bi",
      "continent": "Africa",
      "population": "12.3M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Burundi",
              "capital": "Gitega",
              "flagDescription": "Burundi's flag has red and green bands separated by a white diagonal cross, with three red stars outlined in green inside a white circle at the center. Red represents the independence struggle, green symbolizes hope, and the three stars stand for the country's three main ethnic groups — a reminder of unity.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Royal Drumming Heritage",
                      "description": "Burundian royal drumming (Ingoma) is a UNESCO Cultural Heritage. For centuries, the giant sacred drums were the heartbeat of the kingdom and were played only for the king."
                  },
                  {
                      "icon": "water",
                      "title": "World's Second Deepest Lake",
                      "description": "Lake Tanganyika on Burundi's western border is the second deepest lake in the world (over 1,470 meters!) and holds 17% of the world's fresh surface water."
                  },
                  {
                      "icon": "coffee",
                      "title": "Fine Highland Coffee",
                      "description": "Burundi grows exceptional coffee on its volcanic highlands. The rich soil and altitude produce a bright, flavorful cup that coffee lovers around the world seek out."
                  }
              ]
          },
          "es": {
              "name": "Burundi",
              "capital": "Gitega",
              "flagDescription": "La bandera de Burundi tiene bandas rojas y verdes separadas por una cruz diagonal blanca, con tres estrellas rojas bordeadas en verde dentro de un círculo blanco en el centro. El rojo representa la lucha por la independencia, el verde simboliza la esperanza, y las tres estrellas representan los tres principales grupos étnicos del país.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Tambores reales",
                      "description": "La percusión real de Burundi (Ingoma) es Patrimonio Cultural de la UNESCO. Durante siglos, los enormes tambores sagrados fueron el latido del reino y solo se tocaban para el rey."
                  },
                  {
                      "icon": "water",
                      "title": "El segundo lago más profundo",
                      "description": "El lago Tanganica, en la frontera oeste de Burundi, es el segundo lago más profundo del mundo (¡más de 1.470 metros!) y contiene el 17% del agua dulce superficial del planeta."
                  },
                  {
                      "icon": "coffee",
                      "title": "Café de las tierras altas",
                      "description": "Burundi cultiva un café excepcional en sus tierras altas volcánicas. El suelo rico y la altitud producen una taza brillante y sabrosa que buscan los amantes del café de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "cambodia",
      "flagCode": "kh",
      "continent": "Asia",
      "population": "17.6M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Cambodia",
              "capital": "Phnom Penh",
              "flagDescription": "Cambodia's flag is red with a blue border and features the Angkor Wat temple in white in the center. Red represents the blood of those who fought for the nation, the blue border symbolizes royalty, and Angkor Wat represents Cambodia's rich cultural heritage.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Angkor Wat Temple",
                      "description": "Angkor Wat is the largest religious monument in the world and one of the most magnificent temples ever built. This 12th-century Hindu temple is a UNESCO World Heritage Site and covers 1,600 square kilometers!"
                  },
                  {
                      "icon": "water",
                      "title": "Tonlé Sap Lake",
                      "description": "Tonlé Sap is Southeast Asia's largest freshwater lake. During monsoon season, it swells to 6 times its dry-season size, creating a unique ecosystem that supports millions of fish and birds."
                  },
                  {
                      "icon": "texture",
                      "title": "Cambodian Silk",
                      "description": "Cambodia is famous for its luxurious silk weaving tradition dating back centuries. Cambodian silk is known for its vibrant colors and intricate patterns, making it highly prized worldwide."
                  }
              ]
          },
          "es": {
              "name": "Camboya",
              "capital": "Nom Pen",
              "flagDescription": "La bandera de Camboya es roja con un borde azul y presenta el templo de Angkor Wat en blanco en el centro. El rojo representa la sangre de quienes lucharon por la nación, el borde azul simboliza la realeza, y Angkor Wat representa el rico patrimonio cultural de Camboya.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Templo de Angkor Wat",
                      "description": "¡Angkor Wat es el monumento religioso más grande del mundo y uno de los templos más magníficos jamás construidos! Este templo hindú del siglo XII es Patrimonio de la Humanidad de la UNESCO y ¡cubre 1.600 kilómetros cuadrados!"
                  },
                  {
                      "icon": "water",
                      "title": "Lago Tonlé Sap",
                      "description": "Tonlé Sap es el mayor lago de agua dulce del Sudeste Asiático. Durante la temporada de monzones, se hincha hasta 6 veces su tamaño en temporada seca, creando un ecosistema único que sustenta millones de peces y aves."
                  },
                  {
                      "icon": "texture",
                      "title": "Seda camboyana",
                      "description": "Camboya es famosa por su tradición de tejido de seda lujosa que se remonta siglos atrás. La seda camboyana es conocida por sus colores vibrantes y patrones intrincados, lo que la hace altamente apreciada en todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "cameroon",
      "flagCode": "cm",
      "continent": "Africa",
      "population": "29.4M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Cameroon",
              "capital": "Yaoundé",
              "flagDescription": "Cameroon's flag has three equal vertical stripes of green, red, and yellow with a small yellow star in the center of the red stripe. These are the Pan-African colors — green represents the forests of the south, red symbolizes unity, yellow stands for the sun and the savannas of the north, and the star represents unity.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "Africa in Miniature",
                      "description": "Cameroon is often called 'Africa in Miniature' because it has almost every landscape found on the continent: rainforest, savanna, mountains, desert, beaches, and over 250 languages spoken!"
                  },
                  {
                      "icon": "forest",
                      "title": "Gorilla Forest",
                      "description": "The Dja Faunal Reserve in Cameroon is one of Africa's most important rainforests and shelters western lowland gorillas, forest elephants, and chimpanzees in dense jungle."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Indomitable Lions",
                      "description": "Cameroon's national football team, the Indomitable Lions, is one of Africa's most celebrated. Legend Roger Milla danced at corner flags during the 1990 World Cup and became an African icon."
                  }
              ]
          },
          "es": {
              "name": "Camerún",
              "capital": "Yaundé",
              "flagDescription": "La bandera de Camerún tiene tres franjas verticales iguales de verde, rojo y amarillo, con una pequeña estrella amarilla en el centro de la franja roja. Estos son los colores panafricanos: el verde representa los bosques del sur, el rojo simboliza la unidad, el amarillo representa el sol y la sabana del norte.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "África en miniatura",
                      "description": "A Camerún a menudo se le llama 'África en miniatura' porque tiene casi todos los paisajes del continente: selva, sabana, montañas, desierto, playas y ¡más de 250 idiomas!"
                  },
                  {
                      "icon": "forest",
                      "title": "Bosque de gorilas",
                      "description": "La Reserva Faunal del Dja es uno de los bosques más importantes de África y alberga gorilas de llanura occidental, elefantes forestales y chimpancés en densa selva."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Los Leones Indomables",
                      "description": "El equipo de fútbol de Camerún, Los Leones Indomables, es uno de los más queridos de África. La leyenda Roger Milla bailó junto a los banderines en el Mundial de 1990 y se convirtió en un ícono africano."
                  }
              ]
          }
      }
  },
  {
      "slug": "canada",
      "flagCode": "ca",
      "continent": "North America",
      "population": "39.7M",
      "region": "North America",
      "translations": {
        "en": {
          "name": "Canada",
          "capital": "Ottawa",
          "flagDescription": "Canada's flag features a red and white design with a maple leaf in the center. The red stripes represent the two oceans that border Canada, and the white center band represents the vast land. The red maple leaf is Canada's national symbol and represents the country's natural heritage.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Niagara Falls",
            "description": "Canada is home to Niagara Falls, one of the world's most spectacular and powerful waterfalls."
          },
          {
            "icon": "terrain",
            "title": "Rocky Mountains",
            "description": "Canada contains the beautiful Canadian Rocky Mountains, famous for their stunning peaks and pristine wilderness."
          },
          {
            "icon": "public",
            "title": "Second Largest Country",
            "description": "Canada is the second-largest country in the world by land area, stretching from the Atlantic to the Pacific Ocean."
          },
          {
            "icon": "celebration",
            "title": "Maple Syrup Tradition",
            "description": "Canada is the world's largest producer of maple syrup, a beloved national symbol and food product."
          }
          ]
        },
        "es": {
          "name": "Canadá",
          "capital": "Ottawa",
          "flagDescription": "La bandera de Canadá presenta un diseño rojo y blanco con una hoja de arce en el centro. Las franjas rojas representan los dos océanos que bordean Canadá, y la banda blanca central representa la vasta tierra. La hoja de arce roja es el símbolo nacional de Canadá y representa la herencia natural del país.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Cataratas del Niágara",
            "description": "Canadá es hogar de las Cataratas del Niágara, una de las cascadas más espectaculares y poderosas del mundo."
          },
          {
            "icon": "terrain",
            "title": "Montañas Rocosas",
            "description": "Canadá contiene las hermosas Montañas Rocosas Canadienses, famosas por sus picos impresionantes y su naturaleza virgen."
          },
          {
            "icon": "public",
            "title": "Segundo País Más Grande",
            "description": "Canadá es el segundo país más grande del mundo por área de tierra, extendiéndose del Océano Atlántico al Pacífico."
          },
          {
            "icon": "celebration",
            "title": "Tradición del Jarabe de Arce",
            "description": "Canadá es el mayor productor de jarabe de arce del mundo, un símbolo nacional amado y producto alimenticio."
          }
          ]
        }
      }
  },
  {
      "slug": "cape-verde",
      "flagCode": "cv",
      "continent": "Africa",
      "population": "491K",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Cape Verde",
              "capital": "Praia",
              "flagDescription": "Cape Verde's flag has a deep blue background representing the ocean and sky, with a red horizontal stripe bordered by two white stripes near the bottom. A circle of 10 yellow stars — one for each of the 10 islands — sits in the center. The red and white stripes represent the road toward building the nation.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Islands in the Atlantic",
                      "description": "Cape Verde is an archipelago of 10 volcanic islands sitting in the middle of the Atlantic Ocean, about 570 km off the coast of West Africa. Each island has its own landscape and personality."
                  },
                  {
                      "icon": "music_note",
                      "title": "Morna Music",
                      "description": "Cape Verde's Morna music — melancholic songs of longing called 'saudade' — is a UNESCO Cultural Heritage. The legendary singer Cesária Évora brought its heartfelt sound to audiences worldwide."
                  },
                  {
                      "icon": "air",
                      "title": "Windsurfer's Paradise",
                      "description": "Year-round trade winds make Cape Verde one of the world's top destinations for windsurfing and kitesurfing. Sal and Boa Vista islands host international competitions every year."
                  }
              ]
          },
          "es": {
              "name": "Cabo Verde",
              "capital": "Praia",
              "flagDescription": "La bandera de Cabo Verde tiene un fondo azul profundo que representa el océano y el cielo, con una franja roja horizontal bordeada por dos franjas blancas cerca de la parte inferior. Un círculo de 10 estrellas amarillas, una por cada una de las 10 islas, se encuentra en el centro.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Islas en el Atlántico",
                      "description": "Cabo Verde es un archipiélago de 10 islas volcánicas en medio del Océano Atlántico, a unos 570 km de la costa de África Occidental. Cada isla tiene su propio paisaje y personalidad."
                  },
                  {
                      "icon": "music_note",
                      "title": "Música Morna",
                      "description": "La Morna de Cabo Verde, canciones melancólicas de añoranza llamadas 'saudade', es Patrimonio Cultural de la UNESCO. La legendaria cantante Cesária Évora llevó su sonido al mundo entero."
                  },
                  {
                      "icon": "air",
                      "title": "Paraíso del windsurf",
                      "description": "Los vientos alisios durante todo el año hacen de Cabo Verde uno de los mejores destinos del mundo para el windsurf y el kitesurf. Las islas de Sal y Boa Vista acogen competiciones internacionales cada año."
                  }
              ]
          }
      }
  },
  {
      "slug": "caribbean-netherlands",
      "flagCode": "bq",
      "continent": "North America",
      "population": "25.2K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Caribbean Netherlands",
          "capital": "Bonaire",
          "flagDescription": "The Caribbean Netherlands (Bonaire, Sint Eustatius, and Saba) use the Dutch flag or local flags. The islands' culture blends Dutch and Caribbean influences. White sandy beaches and clear waters define the islands.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Bonaire Marine Park",
            "description": "Bonaire has one of the world's best marine parks, perfect for snorkeling and diving without leaving the shore."
          },
          {
            "icon": "landscape",
            "title": "Pristine Beaches",
            "description": "The islands offer pristine white sand beaches and crystal-clear waters ideal for beach lovers."
          },
          {
            "icon": "public",
            "title": "Dutch Caribbean",
            "description": "These islands are part of the Kingdom of the Netherlands and blend European and Caribbean cultures."
          },
          {
            "icon": "nature",
            "title": "Flamingo Sanctuary",
            "description": "The islands are home to flamingos and other tropical bird species in their natural habitats."
          }
          ]
        },
        "es": {
          "name": "Caribe Holandés",
          "capital": "Bonaire",
          "flagDescription": "El Caribe Holandés (Bonaire, Sint Eustatius y Saba) utilizan la bandera holandesa o banderas locales. La cultura de las islas combina influencias holandesas y caribeñas. Las playas de arena blanca y aguas cristalinas definen las islas.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Parque Marino de Bonaire",
            "description": "Bonaire tiene uno de los mejores parques marinos del mundo, perfecto para buceo de snorkel y buceo sin dejar la costa."
          },
          {
            "icon": "landscape",
            "title": "Playas Prístinas",
            "description": "Las islas ofrecen playas de arena blanca prístinas y aguas cristalinas ideales para amantes de la playa."
          },
          {
            "icon": "public",
            "title": "Caribe Holandés",
            "description": "Estas islas son parte del Reino de los Países Bajos y combinan culturas europeas y caribeñas."
          },
          {
            "icon": "nature",
            "title": "Santuario de Flamencos",
            "description": "Las islas son hogar de flamencos y otras especies de aves tropicales en sus hábitats naturales."
          }
          ]
        }
      }
  },
  {
      "slug": "cayman-islands",
      "flagCode": "ky",
      "continent": "North America",
      "population": "67.4K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Cayman Islands",
          "capital": "George Town",
          "flagDescription": "The Cayman Islands' flag is blue with the Union Jack in the upper left and the coat of arms on the lower right. The coat of arms features a triple-crowned lion and represents the island's British heritage and maritime traditions.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Stingray City",
            "description": "The Cayman Islands are famous for Stingray City, where visitors can swim with gentle stingrays in shallow water."
          },
          {
            "icon": "landscape",
            "title": "Seven Mile Beach",
            "description": "Seven Mile Beach is one of the Caribbean's most beautiful beaches with pristine white sand."
          },
          {
            "icon": "attach_money",
            "title": "Finance Hub",
            "description": "The Cayman Islands are a major international financial center and banking hub."
          },
          {
            "icon": "waves",
            "title": "Diving Paradise",
            "description": "The islands offer world-class diving with colorful coral reefs and abundant marine life."
          }
          ]
        },
        "es": {
          "name": "Islas Caimán",
          "capital": "George Town",
          "flagDescription": "La bandera de las Islas Caimán es azul con la Union Jack en la esquina superior izquierda y el escudo de armas en la esquina inferior derecha. El escudo de armas presenta un león triple coronado y representa la herencia británica e tradiciones marítimas de la isla.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Stingray City",
            "description": "Las Islas Caimán son famosas por Stingray City, donde los visitantes pueden nadar con rayas gentiles en aguas poco profundas."
          },
          {
            "icon": "landscape",
            "title": "Playa de Siete Millas",
            "description": "Seven Mile Beach es una de las playas más hermosas del Caribe con arena blanca prístina."
          },
          {
            "icon": "attach_money",
            "title": "Centro Financiero",
            "description": "Las Islas Caimán son un centro financiero internacional importante y centro bancario."
          },
          {
            "icon": "waves",
            "title": "Paraíso de Buceo",
            "description": "Las islas ofrecen buceo de clase mundial con arrecifes de coral coloridos y abundante vida marina."
          }
          ]
        }
      }
  },
  {
      "slug": "central-african-republic",
      "flagCode": "cf",
      "continent": "Africa",
      "population": "6.5M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Central African Republic",
              "capital": "Bangui",
              "flagDescription": "The Central African Republic's flag has four horizontal stripes (blue, white, green, yellow) cut through the middle by a bold vertical red stripe, with a yellow star in the top-left corner. The red stripe symbolizes the blood shed for independence and boldly connects all four horizontal colors together.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Forest Elephant Haven",
                      "description": "The Dzanga-Sangha Reserve is one of the best places on Earth to watch forest elephants. Hundreds gather at the Dzanga Bai (an open forest clearing) to drink minerals from the earth."
                  },
                  {
                      "icon": "water",
                      "title": "Pristine Rainforest Rivers",
                      "description": "The Sangha River flows through untouched equatorial rainforest and is part of a UNESCO World Heritage Site shared with Cameroon and the Republic of Congo."
                  },
                  {
                      "icon": "groups",
                      "title": "Aka Forest Dwellers",
                      "description": "The Aka are a remarkable forest people who have lived in harmony with the Central African rainforest for thousands of years. They are renowned for their extraordinary polyphonic singing."
                  }
              ]
          },
          "es": {
              "name": "República Centroafricana",
              "capital": "Bangui",
              "flagDescription": "La bandera de la República Centroafricana tiene cuatro franjas horizontales (azul, blanca, verde, amarilla) cruzadas por una franja vertical roja en el centro y una estrella amarilla en la esquina superior izquierda. La franja roja simboliza la sangre derramada por la independencia y conecta audazmente los cuatro colores horizontales.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Refugio del elefante forestal",
                      "description": "La Reserva de Dzanga-Sangha es uno de los mejores lugares del mundo para observar elefantes forestales. Cientos de ellos se reúnen en el Dzanga Bai para beber minerales del suelo."
                  },
                  {
                      "icon": "water",
                      "title": "Ríos de selva prístina",
                      "description": "El río Sangha fluye por una selva ecuatorial intacta y forma parte de un Patrimonio Mundial de la UNESCO compartido con Camerún y la República del Congo."
                  },
                  {
                      "icon": "groups",
                      "title": "El pueblo Aka",
                      "description": "Los Aka son un notable pueblo forestal que ha vivido en armonía con la selva centroafricana durante miles de años. Son famosos por su extraordinario canto polifónico."
                  }
              ]
          }
      }
  },
  {
      "slug": "chad",
      "flagCode": "td",
      "continent": "Africa",
      "population": "19.3M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Chad",
              "capital": "N'Djamena",
              "flagDescription": "Chad's flag has three vertical stripes of blue, yellow, and red — almost identical to the flag of Romania! Blue represents the sky and hope, yellow symbolizes the sun and the Sahara Desert that covers much of the country, and red stands for sacrifice and progress.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Shrinking Lake Chad",
                      "description": "Lake Chad was once one of Africa's largest lakes, but it has shrunk to less than 10% of its 1960s size due to climate change and water use. Scientists around the world are studying how to save it."
                  },
                  {
                      "icon": "history",
                      "title": "Ancient Rock Art",
                      "description": "The Tibesti Mountains in northern Chad contain rock paintings and engravings that are up to 10,000 years old, showing ancient animals and people from a time when the Sahara was green and wet."
                  },
                  {
                      "icon": "pets",
                      "title": "Saharan Camel Caravans",
                      "description": "Camel caravans have crossed the Chadian Sahara for thousands of years, trading gold, salt, and cloth along routes that connected sub-Saharan Africa to North Africa and the Mediterranean."
                  }
              ]
          },
          "es": {
              "name": "Chad",
              "capital": "N'Djamena",
              "flagDescription": "La bandera del Chad tiene tres franjas verticales de azul, amarillo y rojo, ¡casi idéntica a la bandera de Rumanía! El azul representa el cielo y la esperanza, el amarillo simboliza el sol y el desierto del Sáhara que cubre gran parte del país, y el rojo representa el sacrificio y el progreso.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "El lago Chad se encoge",
                      "description": "El lago Chad fue uno de los lagos más grandes de África, pero se ha reducido a menos del 10% de su tamaño de los años 60 debido al cambio climático. Científicos de todo el mundo estudian cómo salvarlo."
                  },
                  {
                      "icon": "history",
                      "title": "Arte rupestre ancestral",
                      "description": "Las montañas del Tibesti contienen pinturas y grabados rupestres de hasta 10.000 años de antigüedad, que muestran animales y personas de una época en que el Sáhara era verde y húmedo."
                  },
                  {
                      "icon": "pets",
                      "title": "Caravanas de camellos",
                      "description": "Las caravanas de camellos han cruzado el Sáhara chadiano durante miles de años, comerciando oro, sal y telas en rutas que conectaban el África subsahariana con el norte del continente y el Mediterráneo."
                  }
              ]
          }
      }
  },
  {
      "slug": "chile",
      "flagCode": "cl",
      "continent": "South America",
      "population": "19.6M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Chile",
          "capital": "Santiago",
          "flagDescription": "Chile's flag has three horizontal stripes: blue, white, and red. The blue band features a white star, representing the country's unity and progress. The red represents the blood of patriots, and the white represents the snow-covered Andes Mountains.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Atacama Desert",
            "description": "Chile contains the Atacama Desert, one of the driest places on Earth, with stunning otherworldly landscapes."
          },
          {
            "icon": "landscape",
            "title": "Patagonia",
            "description": "Chile's southern region of Patagonia is famous for its glaciers, mountains, and pristine wilderness."
          },
          {
            "icon": "public",
            "title": "Long and Narrow",
            "description": "Chile is the longest north-south country in the world, stretching along South America's Pacific coast."
          },
          {
            "icon": "history",
            "title": "Easter Island",
            "description": "Chile administers Easter Island (Rapa Nui), famous for its mysterious moai stone statues."
          }
          ]
        },
        "es": {
          "name": "Chile",
          "capital": "Santiago",
          "flagDescription": "La bandera de Chile tiene tres franjas horizontales: azul, blanco y rojo. La banda azul presenta una estrella blanca, representando la unidad y el progreso del país. El rojo representa la sangre de los patriotas, y el blanco representa la nieve de las Montañas de los Andes.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Desierto de Atacama",
            "description": "Chile contiene el Desierto de Atacama, uno de los lugares más secos de la Tierra, con paisajes impresionantes y extraterrestres."
          },
          {
            "icon": "landscape",
            "title": "Patagonia",
            "description": "La región austral de Patagonia de Chile es famosa por sus glaciares, montañas y naturaleza prístina."
          },
          {
            "icon": "public",
            "title": "Largo y Estrecho",
            "description": "Chile es el país más largo de norte a sur del mundo, extendiéndose a lo largo de la costa del Pacífico de América del Sur."
          },
          {
            "icon": "history",
            "title": "Isla de Pascua",
            "description": "Chile administra la Isla de Pascua (Rapa Nui), famosa por sus misteriosas estatuas de piedra moai."
          }
          ]
        }
      }
  },
  {
      "slug": "china",
      "flagCode": "cn",
      "continent": "Asia",
      "population": "1.4B",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "China",
              "capital": "Beijing",
              "flagDescription": "China's flag is red with one large yellow star and four smaller yellow stars in the upper-left corner. Red represents the communist revolution, while the yellow stars symbolize the unity of the Chinese people under the Communist Party.",
              "funFacts": [
                  {
                      "icon": "fence",
                      "title": "Great Wall",
                      "description": "The Great Wall of China stretches over 21,000 km and was built over many centuries to protect against invasions. However, contrary to popular belief, it cannot be seen from space with the naked eye."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Noodles: The Original Pasta",
                      "description": "The world's oldest noodles — about 4,000 years old — were discovered in China. Made from millet grass, they were found at the Lajia archaeological site."
                  },
                  {
                      "icon": "rocket_launch",
                      "title": "Four Great Inventions",
                      "description": "Ancient China gave the world four transformative inventions: paper, printing, gunpowder, and the compass — all of which have shaped civilization globally."
                  }
              ]
          },
          "es": {
              "name": "China",
              "capital": "Beijing",
              "flagDescription": "La bandera de China es roja (símbolo del comunismo) con cinco estrellas amarillas en la esquina superior izquierda. Una estrella grande representa el Partido Comunista Chino y cuatro estrellas más pequeñas representan el pueblo chino. El color rojo representa la revolución.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "La Gran Muralla",
                      "description": "La Gran Muralla de China es una de las estructuras más impresionantes construidas por el hombre, extendiéndose más de 21.000 kilómetros. Fue construida durante más de 2.000 años para proteger contra invasiones del norte."
                  },
                  {
                      "icon": "account_balance",
                      "title": "Terracota Warriors",
                      "description": "El Ejército de Terracota es una colección de 8.000 figuras de guerreros de cerámica de tamaño natural hechas para el Emperador Qin. Son una de las arqueologías más importantes descubiertas en el siglo XX."
                  },
                  {
                      "icon": "pets",
                      "title": "Pandas gigantes",
                      "description": "Los pandas gigantes son un símbolo nacional de China. Estos osos dóciles son nativos de los bosques de bambú de China central y están protegidos como patrimonio nacional."
                  }
              ]
          }
      }
  },
  {
      "slug": "christmas-island",
      "flagCode": "cx",
      "continent": "Oceania",
      "population": "2K",
      "region": "Australia and New Zealand",
      "translations": {
          "en": {
              "name": "Christmas Island",
              "capital": "Flying Fish Cove",
              "flagDescription": "Christmas Island's flag features a blue and green diagonal split, representing the ocean and the island's forests. A golden yellow circle in the center contains the outline of the island in green. Below the circle is a golden map of the island, and in the upper hoist is a small Union Jack. The most distinctive element is the golden Abbott's booby bird — a rare seabird found almost exclusively on Christmas Island.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Red Crab Migration",
                      "description": "Christmas Island is famous for one of nature's most spectacular events: every year, over 50 million bright-red Christmas Island crabs migrate from the forest to the sea to breed. Roads are closed and special bridges built to let them pass safely."
                  },
                  {
                      "icon": "forest",
                      "title": "Pristine Rainforest",
                      "description": "About two-thirds of Christmas Island is protected as a national park, preserving ancient rainforest filled with unique wildlife found nowhere else on Earth, including the endangered Abbott's booby bird and the Christmas Island frigatebird."
                  },
                  {
                      "icon": "anchor",
                      "title": "Remote Territory",
                      "description": "Christmas Island is an Australian territory located 2,600 km northwest of the Australian mainland — closer to Indonesia than to Australia. Its remote location has helped preserve its extraordinary biodiversity."
                  },
                  {
                      "icon": "history",
                      "title": "Named by William Mynors",
                      "description": "The island was named Christmas Island because it was discovered on Christmas Day 1643 by Captain William Mynors. It remained uninhabited until the late 19th century, when workers arrived to mine its vast phosphate deposits."
                  }
              ]
          },
          "es": {
              "name": "Isla de Navidad",
              "capital": "Flying Fish Cove",
              "flagDescription": "La bandera de la Isla de Navidad tiene una división diagonal azul y verde, que representa el océano y los bosques de la isla. Un círculo amarillo dorado en el centro contiene el contorno de la isla en verde. Debajo del círculo hay un mapa dorado de la isla, y en la parte superior izquierda hay una pequeña Union Jack. El elemento más distintivo es el pájaro piquero de Abbott dorado — una ave marina rara que se encuentra casi exclusivamente en la Isla de Navidad.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Migración de Cangrejos Rojos",
                      "description": "La Isla de Navidad es famosa por uno de los eventos más espectaculares de la naturaleza: cada año, más de 50 millones de brillantes cangrejos rojos de la Isla de Navidad migran del bosque al mar para reproducirse. Las carreteras se cierran y se construyen puentes especiales para dejarlos pasar con seguridad."
                  },
                  {
                      "icon": "forest",
                      "title": "Selva Tropical Prístina",
                      "description": "Aproximadamente dos tercios de la Isla de Navidad están protegidos como parque nacional, preservando antigua selva tropical llena de fauna única que no se encuentra en ningún otro lugar de la Tierra, incluido el piquero de Abbott en peligro de extinción."
                  },
                  {
                      "icon": "anchor",
                      "title": "Territorio Remoto",
                      "description": "La Isla de Navidad es un territorio australiano ubicado 2.600 km al noroeste del continente australiano — más cerca de Indonesia que de Australia. Su ubicación remota ha ayudado a preservar su extraordinaria biodiversidad."
                  },
                  {
                      "icon": "history",
                      "title": "Nombrada por William Mynors",
                      "description": "La isla fue nombrada Isla de Navidad porque fue descubierta el día de Navidad de 1643 por el capitán William Mynors. Permaneció deshabitada hasta finales del siglo XIX, cuando llegaron trabajadores para explotar sus vastos depósitos de fosfato."
                  }
              ]
          }
      }
  },
  {
      "slug": "cocos-keeling-islands",
      "flagCode": "cc",
      "continent": "Oceania",
      "population": "593",
      "region": "Australia and New Zealand",
      "translations": {
          "en": {
              "name": "Cocos (Keeling) Islands",
              "capital": "West Island",
              "flagDescription": "The Cocos (Keeling) Islands flag has a green field with a palm tree on a gold disc in the canton (upper left). The right side shows a golden crescent and a gold Southern Cross constellation. The palm tree represents the island's coconut plantations, the crescent and green evoke the Cocos Malay community's Muslim heritage, and the Southern Cross connects the territory to Australia.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Two Atolls, One Territory",
                      "description": "The Cocos (Keeling) Islands consist of two coral atolls with 27 islands in total, located in the Indian Ocean midway between Australia and Sri Lanka. The turquoise lagoon inside the southern atoll is considered one of the most beautiful in the world."
                  },
                  {
                      "icon": "history",
                      "title": "Darwin's Stopover",
                      "description": "Charles Darwin visited the Cocos Islands in 1836 during his famous voyage on HMS Beagle. His observations of the coral atoll formation here helped him develop his theory of how atolls are created — a key piece of his scientific work."
                  },
                  {
                      "icon": "language",
                      "title": "Cocos Malay Culture",
                      "description": "The Cocos Islands have a unique Cocos Malay community, descendants of workers brought from Malaysia in the 19th century. They maintain their own distinct dialect of Malay, traditional music, and Islamic customs that set them apart from other Australian communities."
                  },
                  {
                      "icon": "waves",
                      "title": "Pristine Diving",
                      "description": "The Cocos Islands are considered one of the world's finest scuba diving destinations, with crystal-clear waters, healthy coral reefs, and abundant marine life including turtles, reef sharks, and manta rays — largely untouched by mass tourism."
                  }
              ]
          },
          "es": {
              "name": "Islas Cocos (Keeling)",
              "capital": "West Island",
              "flagDescription": "La bandera de las Islas Cocos (Keeling) tiene un campo verde con una palmera sobre un disco dorado en el cantón (parte superior izquierda). El lado derecho muestra una media luna dorada y la constelación de la Cruz del Sur dorada. La palmera representa las plantaciones de cocoteros de la isla, la media luna y el verde evocan la herencia musulmana de la comunidad malaya de las Cocos, y la Cruz del Sur conecta el territorio con Australia.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Dos Atolones, Un Territorio",
                      "description": "Las Islas Cocos (Keeling) consisten en dos atolones de coral con 27 islas en total, ubicadas en el Océano Índico a medio camino entre Australia y Sri Lanka. La laguna turquesa dentro del atolón sur es considerada una de las más hermosas del mundo."
                  },
                  {
                      "icon": "history",
                      "title": "Escala de Darwin",
                      "description": "Charles Darwin visitó las Islas Cocos en 1836 durante su famoso viaje en el HMS Beagle. Sus observaciones de la formación del atolón de coral aquí le ayudaron a desarrollar su teoría sobre cómo se crean los atolones — una pieza clave de su trabajo científico."
                  },
                  {
                      "icon": "language",
                      "title": "Cultura Malaya de Cocos",
                      "description": "Las Islas Cocos tienen una comunidad malaya única, descendientes de trabajadores traídos de Malasia en el siglo XIX. Mantienen su propio dialecto distintivo del malayo, música tradicional y costumbres islámicas que los distinguen de otras comunidades australianas."
                  },
                  {
                      "icon": "waves",
                      "title": "Buceo Prístino",
                      "description": "Las Islas Cocos son consideradas uno de los mejores destinos de buceo del mundo, con aguas cristalinas, arrecifes de coral saludables y abundante vida marina incluyendo tortugas, tiburones de arrecife y mantas rayas — prácticamente intocado por el turismo masivo."
                  }
              ]
          }
      }
  },
  {
      "slug": "colombia",
      "flagCode": "co",
      "continent": "South America",
      "population": "52.1M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Colombia",
          "capital": "Bogotá",
          "flagDescription": "Colombia's flag has three horizontal stripes, with the yellow stripe taking up half the flag. The yellow represents the country's precious resources, blue represents the sea and sky, and red represents the blood of those who fought for independence.",
          "funFacts": [
          {
            "icon": "nature",
            "title": "Coffee Country",
            "description": "Colombia is the world's leading producer of specialty coffee, growing beans in the Andes Mountains."
          },
          {
            "icon": "landscape",
            "title": "Amazon Rainforest",
            "description": "Colombia contains a significant portion of the Amazon Rainforest, one of the world's greatest natural treasures."
          },
          {
            "icon": "public",
            "title": "South America's Only Pacific Caribbean",
            "description": "Colombia is unique in having both Pacific and Caribbean coastlines, offering diverse ecosystems."
          },
          {
            "icon": "music_note",
            "title": "Cumbia and Culture",
            "description": "Colombia is known for its vibrant music culture, with cumbia, reggaeton, and other genres originating here."
          }
          ]
        },
        "es": {
          "name": "Colombia",
          "capital": "Bogotá",
          "flagDescription": "La bandera de Colombia tiene tres franjas horizontales, con la franja amarilla ocupando la mitad de la bandera. El amarillo representa los recursos preciosos del país, el azul representa el mar y el cielo, y el rojo representa la sangre de quienes lucharon por la independencia.",
          "funFacts": [
          {
            "icon": "nature",
            "title": "País Cafetero",
            "description": "Colombia es el principal productor mundial de café de especialidad, cultivando granos en las Montañas de los Andes."
          },
          {
            "icon": "landscape",
            "title": "Selva Amazónica",
            "description": "Colombia contiene una porción significativa de la Selva Amazónica, uno de los tesoros naturales más grandes del mundo."
          },
          {
            "icon": "public",
            "title": "Único Caribeño Pacífico de América del Sur",
            "description": "Colombia es única en tener costas tanto del Pacífico como del Caribe, ofreciendo ecosistemas diversos."
          },
          {
            "icon": "music_note",
            "title": "Cumbia y Cultura",
            "description": "Colombia es conocida por su vibrante cultura musical, con cumbia, reggaeton y otros géneros originarios de aquí."
          }
          ]
        }
      }
  },
  {
      "slug": "comoros",
      "flagCode": "km",
      "continent": "Africa",
      "population": "920K",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Comoros",
              "capital": "Moroni",
              "flagDescription": "The Comoros flag is green with a white crescent moon and four white stars arranged diagonally. Green and the crescent moon represent Islam, which is central to the culture. The four stars stand for the country's four main islands — Grande Comore, Mohéli, Anjouan, and Mayotte.",
              "funFacts": [
                  {
                      "icon": "local_florist",
                      "title": "Perfume Islands",
                      "description": "Comoros is the world's largest producer of ylang-ylang flowers, used in some of the world's most famous perfumes — including Chanel No. 5! The sweet scent fills the air across the islands."
                  },
                  {
                      "icon": "volcano",
                      "title": "Active Volcano",
                      "description": "Mount Karthala on Grande Comore is one of the world's largest active volcanoes. It has erupted over 20 times in recorded history, most recently in 2005 — it even forced people to wear gas masks!"
                  },
                  {
                      "icon": "pets",
                      "title": "Giant Fruit Bats",
                      "description": "Giant fruit bats (flying foxes) with wingspans over a meter wide roost in the trees of Comoros and fly dramatically through the sky at dusk — one of the island's most unforgettable sights."
                  }
              ]
          },
          "es": {
              "name": "Comoras",
              "capital": "Moroni",
              "flagDescription": "La bandera de Comoras es verde con una media luna blanca y cuatro estrellas blancas dispuestas en diagonal. El verde y la media luna representan el Islam, central en la cultura del país. Las cuatro estrellas representan las cuatro islas principales: Gran Comora, Mohéli, Anjouan y Mayotte.",
              "funFacts": [
                  {
                      "icon": "local_florist",
                      "title": "Islas del perfume",
                      "description": "Comoras es el mayor productor mundial de flores de ylang-ylang, usadas en algunos de los perfumes más famosos del mundo, ¡incluido el Chanel No. 5! Su dulce aroma impregna el aire de las islas."
                  },
                  {
                      "icon": "volcano",
                      "title": "Volcán activo",
                      "description": "El monte Karthala en Gran Comora es uno de los volcanes activos más grandes del mundo. Ha hecho erupción más de 20 veces, y en 2005 obligó a los habitantes a usar máscaras antigás."
                  },
                  {
                      "icon": "pets",
                      "title": "Murciélagos frugívoros gigantes",
                      "description": "Los murciélagos frugívoros gigantes (zorros voladores), con envergaduras de más de un metro, se posan en los árboles de Comoras y surcan el cielo al atardecer en uno de los espectáculos más impresionantes de las islas."
                  }
              ]
          }
      }
  },
  {
      "slug": "cook-islands",
      "flagCode": "ck",
      "continent": "Oceania",
      "population": "15K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Cook Islands",
              "capital": "Avarua",
              "flagDescription": "The Cook Islands flag has a blue ensign with the Union Jack in the upper left and a circle of 15 gold stars on the right. The 15 stars represent the 15 islands that make up the Cook Islands. The circle symbolizes unity among the islands, and the blue represents the Pacific Ocean that connects and surrounds them all.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Free Association with New Zealand",
                      "description": "The Cook Islands is a self-governing nation in free association with New Zealand — Cook Islanders are New Zealand citizens but have their own parliament and full control over their own affairs. It's a unique arrangement that gives them both independence and security."
                  },
                  {
                      "icon": "landscape",
                      "title": "Black Pearls",
                      "description": "The Cook Islands produces some of the world's finest black pearls, grown in the pristine lagoons of Manihiki atoll. These lustrous dark pearls are prized worldwide and are one of the islands' most important exports."
                  },
                  {
                      "icon": "celebration",
                      "title": "Dance Capital of the Pacific",
                      "description": "Cook Islands is considered the dance capital of the Pacific. The hip-swiveling ura dance is one of the most dynamic and energetic traditional dances in Polynesia. Dance competitions are central to festivals and cultural celebrations."
                  },
                  {
                      "icon": "forest",
                      "title": "Rarotonga's Interior",
                      "description": "Rarotonga, the main island, has a dramatic volcanic interior of jagged peaks and deep jungle that few tourists ever explore. The Cross-Island Track hike takes you through ancient rainforest to the iconic Needle — a spire of volcanic rock."
                  }
              ]
          },
          "es": {
              "name": "Islas Cook",
              "capital": "Avarua",
              "flagDescription": "La bandera de las Islas Cook tiene un pabellón azul con la Union Jack en la parte superior izquierda y un círculo de 15 estrellas doradas a la derecha. Las 15 estrellas representan las 15 islas que forman las Islas Cook. El círculo simboliza la unidad entre las islas, y el azul representa el Océano Pacífico que las conecta y rodea a todas.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Libre Asociación con Nueva Zelanda",
                      "description": "Las Islas Cook es una nación autogobernada en libre asociación con Nueva Zelanda — los habitantes de las Islas Cook son ciudadanos neozelandeses pero tienen su propio parlamento y pleno control sobre sus propios asuntos. Es un acuerdo único que les da tanto independencia como seguridad."
                  },
                  {
                      "icon": "landscape",
                      "title": "Perlas Negras",
                      "description": "Las Islas Cook produce algunas de las mejores perlas negras del mundo, cultivadas en las prístinas lagunas del atolón Manihiki. Estas perlas oscuras y lustrosas son apreciadas en todo el mundo y son una de las exportaciones más importantes de las islas."
                  },
                  {
                      "icon": "celebration",
                      "title": "Capital de la Danza del Pacífico",
                      "description": "Las Islas Cook es considerada la capital de la danza del Pacífico. La danza ura, con su característico movimiento de caderas, es una de las danzas tradicionales más dinámicas y enérgicas de la Polinesia. Los concursos de danza son centrales en los festivales y celebraciones culturales."
                  },
                  {
                      "icon": "forest",
                      "title": "El Interior de Rarotonga",
                      "description": "Rarotonga, la isla principal, tiene un dramático interior volcánico de picos dentados y selva profunda que pocos turistas exploran. La caminata Cross-Island Track te lleva a través de antigua selva tropical hasta la icónica Aguja — una espira de roca volcánica."
                  }
              ]
          }
      }
  },
  {
      "slug": "costa-rica",
      "flagCode": "cr",
      "continent": "North America",
      "population": "5.2M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Costa Rica",
          "capital": "San José",
          "flagDescription": "Costa Rica's flag has five horizontal stripes: blue, white, red (wider), white, and blue. The red stripe represents the blood and courage of the nation, while the blue and white represent nobility and peace. This flag design is based on the French tricolor.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Biodiversity Hotspot",
            "description": "Costa Rica is one of the world's most biodiverse countries, with rainforests, cloud forests, and beaches."
          },
          {
            "icon": "nature",
            "title": "No Army Since 1949",
            "description": "Costa Rica abolished its military in 1949, investing in education and nature conservation instead."
          },
          {
            "icon": "landscape",
            "title": "Arenal Volcano",
            "description": "Costa Rica is home to the dramatic Arenal Volcano, one of the most active volcanoes in the world."
          },
          {
            "icon": "celebration",
            "title": "Pura Vida Philosophy",
            "description": "\"Pura Vida\" (pure life) is Costa Rica's national motto, representing a lifestyle of happiness and contentment."
          }
          ]
        },
        "es": {
          "name": "Costa Rica",
          "capital": "San José",
          "flagDescription": "La bandera de Costa Rica tiene cinco franjas horizontales: azul, blanco, rojo (más ancho), blanco y azul. La franja roja representa la sangre y el coraje de la nación, mientras que el azul y blanco representan la nobleza y la paz. Este diseño de bandera se basa en el tricolor francés.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Punto Caliente de Biodiversidad",
            "description": "Costa Rica es uno de los países más biodiversos del mundo, con selvas tropicales, bosques nubosos y playas."
          },
          {
            "icon": "nature",
            "title": "Sin Ejército Desde 1949",
            "description": "Costa Rica abolió su ejército en 1949, invirtiendo en educación y conservación de la naturaleza en su lugar."
          },
          {
            "icon": "landscape",
            "title": "Volcán Arenal",
            "description": "Costa Rica es hogar del dramático Volcán Arenal, uno de los volcanes más activos del mundo."
          },
          {
            "icon": "celebration",
            "title": "Filosofía Pura Vida",
            "description": "\"Pura Vida\" (vida pura) es el lema nacional de Costa Rica, representando un estilo de vida de felicidad y contentamiento."
          }
          ]
        }
      }
  },
  {
      "slug": "croatia",
      "flagCode": "hr",
      "continent": "Europe",
      "population": "3.9M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Croatia",
              "capital": "Zagreb",
              "flagDescription": "Croatia's flag has three horizontal stripes of red, white, and blue — the Pan-Slavic colors representing the unity of Slavic peoples. In the center is Croatia's distinctive coat of arms: a red-and-white checkerboard shield, one of the oldest Croatian symbols dating back to medieval times. Above the main shield are five smaller shields representing Croatia's five historic regions, making the coat of arms one of the most complex and beautiful in Europe.",
              "funFacts": [
                  {
                      "icon": "beach_access",
                      "title": "Adriatic Paradise",
                      "description": "Croatia's Adriatic coastline is one of Europe's most spectacular, stretching over 1,700 kilometers with more than 1,000 islands. Crystal-clear turquoise waters, ancient walled cities like Dubrovnik, and stunning national parks make it a dream destination."
                  },
                  {
                      "icon": "style",
                      "title": "Birthplace of the Necktie",
                      "description": "The necktie, worn by millions of people worldwide, was invented in Croatia! During the 17th century, Croatian soldiers wore colorful scarves around their necks, which French fashion designers noticed and transformed into the modern necktie. The word \"cravat\" comes from \"Croat.\""
                  },
                  {
                      "icon": "water",
                      "title": "Plitvice Waterfalls",
                      "description": "Plitvice Lakes National Park, a UNESCO World Heritage Site, is one of nature's greatest wonders: 16 terraced lakes connected by a series of waterfalls cascading through a forested canyon. The lakes change color from azure to green depending on the minerals and organisms in the water."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "World Cup Overachievers",
                      "description": "Despite being a small country of just 4 million people, Croatia reached the World Cup final in 2018 and came third in 2022. With stars like Luka Modrić, Croatia has proven itself one of the greatest football nations in the world."
                  }
              ]
          },
          "es": {
              "name": "Croacia",
              "capital": "Zagreb",
              "flagDescription": "La bandera de Croacia tiene tres franjas horizontales de rojo, blanco y azul — los colores paneslávicos que representan la unidad de los pueblos eslavos. En el centro está el distintivo escudo de armas de Croacia: un escudo de damero rojo y blanco, uno de los símbolos croatas más antiguos que data de la época medieval. Encima del escudo principal hay cinco escudos más pequeños que representan las cinco regiones históricas de Croacia, haciendo que el escudo sea uno de los más complejos y hermosos de Europa.",
              "funFacts": [
                  {
                      "icon": "beach_access",
                      "title": "Paraíso del Adriático",
                      "description": "La costa adriática de Croacia es una de las más espectaculares de Europa, extendiéndose más de 1.700 kilómetros con más de 1.000 islas. Aguas turquesas cristalinas, antiguas ciudades amuralladas como Dubrovnik y magníficos parques nacionales la convierten en un destino de ensueño."
                  },
                  {
                      "icon": "style",
                      "title": "Cuna de la Corbata",
                      "description": "¡La corbata, usada por millones de personas en todo el mundo, fue inventada en Croacia! Durante el siglo XVII, los soldados croatas llevaban pañuelos coloridos alrededor del cuello, que los diseñadores de moda franceses notaron y transformaron en la corbata moderna. La palabra \"cravate\" viene de \"croata\"."
                  },
                  {
                      "icon": "water",
                      "title": "Cascadas de Plitvice",
                      "description": "El Parque Nacional de los Lagos de Plitvice, Patrimonio de la Humanidad de la UNESCO, es una de las maravillas más grandes de la naturaleza: 16 lagos en terrazas conectados por una serie de cascadas que caen en cascada a través de un cañón boscoso. Los lagos cambian de color del azul al verde según los minerales y organismos del agua."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Superestrella del Mundial",
                      "description": "A pesar de ser un pequeño país de solo 4 millones de personas, Croacia llegó a la final del Mundial en 2018 y quedó tercera en 2022. Con estrellas como Luka Modrić, Croacia ha demostrado ser una de las grandes naciones del fútbol mundial."
                  }
              ]
          }
      }
  },
  {
      "slug": "cuba",
      "flagCode": "cu",
      "continent": "North America",
      "population": "11.2M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Cuba",
          "capital": "Havana",
          "flagDescription": "Cuba's flag has five horizontal stripes: blue, white, blue, white, and blue. A red triangle is on the hoist side. The stripes represent the provinces, the blue represents the ocean and sky, the white represents independence and purity, and the red represents the blood of patriots.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Birthplace of Salsa",
            "description": "Cuba is the birthplace of salsa music and dance, which originated in Havana in the 1920s-1940s."
          },
          {
            "icon": "landscape",
            "title": "Viñales Valley",
            "description": "Cuba's Viñales Valley is famous for its dramatic mogote formations and tobacco plantations."
          },
          {
            "icon": "public",
            "title": "Caribbean's Largest Island",
            "description": "Cuba is the largest island in the Caribbean Sea and has a unique culture and history."
          },
          {
            "icon": "history",
            "title": "Colonial Architecture",
            "description": "Havana is famous for its well-preserved colonial architecture dating back centuries."
          }
          ]
        },
        "es": {
          "name": "Cuba",
          "capital": "La Habana",
          "flagDescription": "La bandera de Cuba tiene cinco franjas horizontales: azul, blanco, azul, blanco y azul. Un triángulo rojo está en el lado del asta. Las franjas representan las provincias, el azul representa el océano y el cielo, el blanco representa la independencia y la pureza, y el rojo representa la sangre de los patriotas.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Cuna de la Salsa",
            "description": "Cuba es la cuna de la música y el baile de salsa, que se originó en La Habana en los años 1920-1940."
          },
          {
            "icon": "landscape",
            "title": "Valle de Viñales",
            "description": "El Valle de Viñales de Cuba es famoso por sus formaciones mogote dramáticas y plantaciones de tabaco."
          },
          {
            "icon": "public",
            "title": "Isla Más Grande del Caribe",
            "description": "Cuba es la isla más grande del Mar Caribe y tiene una cultura e historia única."
          },
          {
            "icon": "history",
            "title": "Arquitectura Colonial",
            "description": "La Habana es famosa por su arquitectura colonial bien conservada que data de siglos atrás."
          }
          ]
        }
      }
  },
  {
      "slug": "curacao",
      "flagCode": "cw",
      "continent": "North America",
      "population": "165K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Curaçao",
          "capital": "Willemstad",
          "flagDescription": "Curaçao's flag has a horizontal yellow stripe on a blue background, with white and red bands below the yellow stripe. A white star is centered. The blue represents the sea, yellow represents peace and prosperity, and red represents the blood of patriots.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Colorful Capital",
            "description": "Willemstad is famous for its colorful colonial architecture, with bright pink, yellow, and blue buildings lining the waterfront."
          },
          {
            "icon": "waves",
            "title": "Diving Paradise",
            "description": "Curaçao is an exceptional diving destination with coral reefs accessible right from the shore."
          },
          {
            "icon": "public",
            "title": "Melting Pot Culture",
            "description": "Curaçao is a diverse, multicultural island with influences from Dutch, African, Latin American, and Caribbean cultures."
          },
          {
            "icon": "celebration",
            "title": "Carnival Celebration",
            "description": "Curaçao's Carnival is celebrated with colorful parades, music, dancing, and traditional foods."
          }
          ]
        },
        "es": {
          "name": "Curaçao",
          "capital": "Willemstad",
          "flagDescription": "La bandera de Curaçao tiene una franja amarilla horizontal en un fondo azul, con bandas blancas y rojas debajo de la franja amarilla. Una estrella blanca está centrada. El azul representa el mar, el amarillo representa la paz y la prosperidad, y el rojo representa la sangre de los patriotas.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Capital Colorida",
            "description": "Willemstad es famosa por su arquitectura colonial colorida, con edificios de color rosa, amarillo y azul brillantes en la orilla."
          },
          {
            "icon": "waves",
            "title": "Paraíso de Buceo",
            "description": "Curaçao es un destino de buceo excepcional con arrecifes de coral accesibles directamente desde la costa."
          },
          {
            "icon": "public",
            "title": "Cultura Crisol",
            "description": "Curaçao es una isla diversa y multicultural con influencias de culturas holandesas, africanas, latinoamericanas y caribeñas."
          },
          {
            "icon": "celebration",
            "title": "Celebración de Carnaval",
            "description": "El Carnaval de Curaçao se celebra con desfiles coloridos, música, baile y comidas tradicionales."
          }
          ]
        }
      }
  },
  {
      "slug": "cyprus",
      "flagCode": "cy",
      "continent": "Europe",
      "population": "1.4M",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Cyprus",
              "capital": "Nicosia",
              "flagDescription": "Cyprus has one of the most unique flags in the world — a white background with an orange-copper silhouette of the island above two crossing green olive branches. The copper color reflects that Cyprus means 'copper island' in Greek, as the island was once the world's main source of copper in ancient times. The olive branches symbolize peace between the Greek and Turkish Cypriot communities who share the island.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Birthplace of Aphrodite",
                      "description": "According to Greek mythology, Aphrodite, the goddess of love and beauty, was born from the sea foam near the rocky shores of Cyprus at a place now called Petra tou Romiou. This makes Cyprus one of the most romantically legendary places in the ancient world."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Sunshine Island",
                      "description": "Cyprus enjoys more sunshine than almost anywhere else in Europe — about 340 sunny days per year! This Mediterranean climate makes it a year-round destination, with golden beaches in summer and green hills perfect for hiking in spring."
                  },
                  {
                      "icon": "wine_bar",
                      "title": "World's Oldest Wine",
                      "description": "Cyprus is home to Commandaria wine, which has been produced continuously for at least 5,000 years — making it the world's oldest wine still in production. It was even praised by the ancient Greek poet Hesiod and was famously drunk at a party by the King of England in 1363."
                  },
                  {
                      "icon": "palette",
                      "title": "Incredible Mosaics",
                      "description": "The Paphos Archaeological Park contains some of the most stunning ancient Roman mosaics in the world, depicting scenes from Greek mythology in extraordinary detail and color. These floor mosaics, over 1,700 years old, are so beautiful they became a UNESCO World Heritage Site."
                  }
              ]
          },
          "es": {
              "name": "Chipre",
              "capital": "Nicosia",
              "flagDescription": "Chipre tiene una de las banderas más únicas del mundo: un fondo blanco con una silueta color cobre anaranjado de la isla sobre dos ramas de olivo verdes cruzadas. El color cobre refleja que Chipre significa 'isla del cobre' en griego, ya que la isla fue en tiempos la principal fuente mundial de cobre en la antigüedad. Las ramas de olivo simbolizan la paz entre las comunidades grecochipriota y turcochipriota que comparten la isla.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Cuna de Afrodita",
                      "description": "Según la mitología griega, Afrodita, la diosa del amor y la belleza, nació de la espuma del mar cerca de las rocosas orillas de Chipre en un lugar llamado hoy Petra tou Romiou. Esto convierte a Chipre en uno de los lugares más legendariamente románticos del mundo antiguo."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Isla del Sol",
                      "description": "Chipre disfruta de más sol que casi cualquier otro lugar de Europa — ¡alrededor de 340 días soleados al año! Este clima mediterráneo la convierte en un destino de todo el año, con playas doradas en verano y colinas verdes perfectas para senderismo en primavera."
                  },
                  {
                      "icon": "wine_bar",
                      "title": "El Vino Más Antiguo del Mundo",
                      "description": "Chipre alberga el vino Commandaria, que se ha producido continuamente durante al menos 5.000 años, convirtiéndolo en el vino más antiguo del mundo que aún se produce. Fue elogiado por el antiguo poeta griego Hesíodo y fue bebido famosamente en una fiesta por el Rey de Inglaterra en 1363."
                  },
                  {
                      "icon": "palette",
                      "title": "Mosaicos Increíbles",
                      "description": "El Parque Arqueológico de Pafos contiene algunos de los mosaicos romanos antiguos más impresionantes del mundo, que representan escenas de la mitología griega con extraordinario detalle y color. Estos mosaicos de suelo, con más de 1.700 años de antigüedad, son tan hermosos que se convirtieron en Patrimonio de la Humanidad de la UNESCO."
                  }
              ]
          }
      }
  },
  {
      "slug": "czechia",
      "flagCode": "cz",
      "continent": "Europe",
      "population": "10.9M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Czechia",
              "capital": "Prague",
              "flagDescription": "Czechia's flag has two horizontal stripes of white on top and red on the bottom, with a blue triangle pointing from the left side toward the center. The white and red colors come from the traditional colors of Bohemia, one of the historic Czech lands, while the blue was added to distinguish the flag from Poland's very similar flag. The blue triangle also represents Moravia and Slovakia from the country's former Czechoslovakia days.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Prague Castle",
                      "description": "Prague Castle is the largest ancient castle complex in the world, covering an area of about 70,000 square meters. Perched dramatically above the Vltava River, it has been home to Czech kings, emperors, and presidents for over 1,000 years."
                  },
                  {
                      "icon": "sports_bar",
                      "title": "Beer Champions",
                      "description": "Czechia consumes more beer per person than any other country in the world — about 142 liters per person per year! The world-famous Pilsner style of beer was invented in Plzeň, Czech Republic, in 1842, and the country is rightfully proud of its brewing heritage."
                  },
                  {
                      "icon": "robot_2",
                      "title": "Word \"Robot\" Invented Here",
                      "description": "The word \"robot\" was invented by Czech writer Karel Čapek in his 1920 play R.U.R. It comes from the Czech word \"robota,\" meaning forced labor. The play introduced the concept of artificial beings that do work for humans — a strikingly modern idea over 100 years ago!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Fairy-Tale Towns",
                      "description": "Czech cities like Český Krumlov and Telč are so perfectly preserved from medieval times that they look like fairy-tale settings. Český Krumlov, a UNESCO site, has a stunning castle and winding cobblestone streets that have barely changed in 500 years."
                  }
              ]
          },
          "es": {
              "name": "Chequia",
              "capital": "Praga",
              "flagDescription": "La bandera de Chequia tiene dos franjas horizontales de blanco arriba y rojo abajo, con un triángulo azul que apunta desde el lado izquierdo hacia el centro. Los colores blanco y rojo provienen de los colores tradicionales de Bohemia, una de las tierras checas históricas, mientras que el azul fue añadido para distinguir la bandera de la muy similar de Polonia. El triángulo azul también representa Moravia y Eslovaquia de los días de la antigua Checoslovaquia.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "El Castillo de Praga",
                      "description": "El Castillo de Praga es el complejo de castillo antiguo más grande del mundo, cubriendo un área de unos 70.000 metros cuadrados. Situado dramáticamente sobre el Río Vltava, ha sido hogar de reyes checos, emperadores y presidentes durante más de 1.000 años."
                  },
                  {
                      "icon": "sports_bar",
                      "title": "Campeones de la Cerveza",
                      "description": "Chequia consume más cerveza por persona que cualquier otro país del mundo — ¡unas 142 litros por persona al año! El famoso estilo de cerveza Pilsner fue inventado en Plzeň, República Checa, en 1842, y el país está justamente orgulloso de su herencia cervecera."
                  },
                  {
                      "icon": "robot_2",
                      "title": "La Palabra \"Robot\" Inventada Aquí",
                      "description": "¡La palabra \"robot\" fue inventada por el escritor checo Karel Čapek en su obra de 1920 R.U.R.! Proviene de la palabra checa \"robota\", que significa trabajo forzado. La obra introdujo el concepto de seres artificiales que hacen trabajo para los humanos, ¡una idea sorprendentemente moderna hace más de 100 años!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Ciudades de Cuento de Hadas",
                      "description": "Ciudades checas como Český Krumlov y Telč están tan perfectamente conservadas desde la época medieval que parecen escenarios de cuentos de hadas. Český Krumlov, un sitio de la UNESCO, tiene un impresionante castillo y serpenteantes calles adoquinadas que apenas han cambiado en 500 años."
                  }
              ]
          }
      }
  },
  {
      "slug": "denmark",
      "flagCode": "dk",
      "continent": "Europe",
      "population": "6.0M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Denmark",
              "capital": "Copenhagen",
              "flagDescription": "Denmark's flag — called the Dannebrog, meaning 'Danish cloth' — is the oldest national flag still in use by an independent nation, dating back to the 13th century. It features a bold white Nordic cross on a bright red background. According to legend, the flag fell from the sky during the Battle of Lyndanisse in Estonia in 1219, giving Danish soldiers a miraculous sign of victory. Today the Dannebrog is treasured as one of the most iconic national symbols in the world.",
              "funFacts": [
                  {
                      "icon": "toys",
                      "title": "LEGO Homeland",
                      "description": "LEGO, the world's most popular toy, was invented in Denmark in 1932 by Ole Kirk Christiansen in the small town of Billund. The name LEGO comes from the Danish words \"leg godt\" meaning \"play well.\" Denmark even has the original LEGOLAND theme park in Billund!"
                  },
                  {
                      "icon": "sailing",
                      "title": "Viking Legacy",
                      "description": "Denmark was once the heartland of the fearless Viking warriors who explored and settled much of Europe, the North Atlantic, and even reached North America around 1000 CE — nearly 500 years before Columbus. Viking museums and burial sites can still be visited across Denmark today."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Hans Christian Andersen",
                      "description": "Denmark is the homeland of fairy-tale author Hans Christian Andersen, who wrote beloved stories like The Little Mermaid, Thumbelina, and The Ugly Duckling. A famous bronze statue of the Little Mermaid sits in Copenhagen Harbor as tribute to him."
                  },
                  {
                      "icon": "pedal_bike",
                      "title": "World's Most Bike-Friendly City",
                      "description": "Copenhagen is consistently ranked as the world's most bike-friendly city. More people commute by bicycle than by car, the city has hundreds of kilometers of dedicated bike lanes, and cycling is deeply embedded in Danish culture and identity."
                  }
              ]
          },
          "es": {
              "name": "Dinamarca",
              "capital": "Copenhague",
              "flagDescription": "La bandera de Dinamarca — llamada Dannebrog, que significa 'tela danesa' — es la bandera nacional más antigua en uso por una nación independiente, que data del siglo XIII. Muestra una audaz cruz nórdica blanca sobre un brillante fondo rojo. Según la leyenda, la bandera cayó del cielo durante la Batalla de Lyndanisse en Estonia en 1219, dando a los soldados daneses una señal milagrosa de victoria. Hoy el Dannebrog es atesorado como uno de los símbolos nacionales más icónicos del mundo.",
              "funFacts": [
                  {
                      "icon": "toys",
                      "title": "Patria de LEGO",
                      "description": "LEGO, el juguete más popular del mundo, fue inventado en Dinamarca en 1932 por Ole Kirk Christiansen en el pequeño pueblo de Billund. El nombre LEGO proviene de las palabras danesas \"leg godt\" que significan \"juega bien\". ¡Dinamarca incluso tiene el parque temático LEGOLAND original en Billund!"
                  },
                  {
                      "icon": "sailing",
                      "title": "Legado Vikingo",
                      "description": "Dinamarca fue en su día el corazón de los temibles guerreros vikingos que exploraron y colonizaron gran parte de Europa, el Atlántico Norte e incluso llegaron a América del Norte alrededor del año 1000 d.C., casi 500 años antes de Colón. Los museos vikingos y los sitios de enterramiento aún pueden visitarse en toda Dinamarca."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Hans Christian Andersen",
                      "description": "Dinamarca es la patria del autor de cuentos de hadas Hans Christian Andersen, quien escribió amadas historias como La Sirenita, Pulgarcita y El Patito Feo. Una famosa estatua de bronce de la Sirenita se encuentra en el Puerto de Copenhague en su honor."
                  },
                  {
                      "icon": "pedal_bike",
                      "title": "La Ciudad Más Amigable con la Bicicleta del Mundo",
                      "description": "Copenhague está clasificada constantemente como la ciudad más amigable con la bicicleta del mundo. Más personas se desplazan en bicicleta que en coche, la ciudad tiene cientos de kilómetros de carriles bici dedicados, y el ciclismo está profundamente arraigado en la cultura e identidad danesa."
                  }
              ]
          }
      }
  },
  {
      "slug": "djibouti",
      "flagCode": "dj",
      "continent": "Africa",
      "population": "1.1M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Djibouti",
              "capital": "Djibouti",
              "flagDescription": "Djibouti's flag has two equal horizontal stripes — light blue on top and green on the bottom — with a white triangle on the left side containing a red star. Blue represents the sea and sky, green symbolizes the earth and Islam, white stands for peace, and the red star represents unity and independence.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "World's Busiest Shipping Lane",
                      "description": "Djibouti sits at the crossroads between the Red Sea and the Indian Ocean. Thousands of ships pass its coast every day, making it one of the world's most strategically important locations."
                  },
                  {
                      "icon": "water",
                      "title": "Africa's Lowest Point",
                      "description": "Lake Assal is Africa's lowest point at 155 meters below sea level, and it's one of the saltiest lakes on Earth — about 10 times saltier than the ocean! Salt crystals form beautiful patterns on its shores."
                  },
                  {
                      "icon": "pets",
                      "title": "Whale Shark Season",
                      "description": "Whale sharks — the world's largest fish, as long as a school bus — visit the warm waters of the Gulf of Tadjoura every year between October and January, drawing snorkelers from around the world."
                  }
              ]
          },
          "es": {
              "name": "Yibuti",
              "capital": "Yibuti",
              "flagDescription": "La bandera de Yibuti tiene dos franjas horizontales iguales: azul claro arriba y verde abajo, con un triángulo blanco a la izquierda que contiene una estrella roja. El azul representa el mar y el cielo, el verde simboliza la tierra y el Islam, el blanco representa la paz, y la estrella roja representa la unidad.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Ruta marítima vital",
                      "description": "Yibuti se encuentra en el cruce entre el mar Rojo y el Océano Índico. Miles de barcos pasan por su costa cada día, convirtiéndola en uno de los puntos estratégicos más importantes del mundo."
                  },
                  {
                      "icon": "water",
                      "title": "El punto más bajo de África",
                      "description": "El lago Assal es el punto más bajo de África, a 155 metros bajo el nivel del mar, y uno de los lagos más salados de la Tierra: ¡unas 10 veces más salado que el océano! Los cristales de sal forman hermosos patrones en sus orillas."
                  },
                  {
                      "icon": "pets",
                      "title": "Temporada del tiburón ballena",
                      "description": "Los tiburones ballena, los peces más grandes del mundo (del tamaño de un autobús escolar), visitan las cálidas aguas del golfo de Tadjoura cada año entre octubre y enero, atrayendo a nadadores de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "dominica",
      "flagCode": "dm",
      "continent": "North America",
      "population": "71.6K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Dominica",
          "capital": "Roseau",
          "flagDescription": "Dominica's flag has a green background with a cross in yellow and black, representing the island's natural beauty and cultural diversity. The cross is divided into four sections with stripes of different colors. A red disk with a parrot is centered.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Nature Island",
            "description": "Dominica is known as the Nature Island because of its pristine rainforests, waterfalls, and natural hot springs."
          },
          {
            "icon": "waves",
            "title": "Boiling Lake",
            "description": "Dominica is home to one of the world's largest boiling lakes, a natural geothermal wonder."
          },
          {
            "icon": "public",
            "title": "Diverse Culture",
            "description": "Dominica has a rich cultural heritage blending African, French, and English influences."
          },
          {
            "icon": "nature",
            "title": "Endemic Parrot",
            "description": "The Dominica parrot, depicted on the flag, is an endemic species found only on the island."
          }
          ]
        },
        "es": {
          "name": "Dominica",
          "capital": "Roseau",
          "flagDescription": "La bandera de Dominica tiene un fondo verde con una cruz en amarillo y negro, representando la belleza natural y la diversidad cultural de la isla. La cruz se divide en cuatro secciones con franjas de diferentes colores. Un disco rojo con un loro está centrado.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Isla de la Naturaleza",
            "description": "Dominica es conocida como la Isla de la Naturaleza debido a sus selvas tropicales prístinas, cascadas y aguas termales naturales."
          },
          {
            "icon": "waves",
            "title": "Boiling Lake",
            "description": "Dominica es hogar de uno de los lagos hirvientes más grandes del mundo, una maravilla geotérmica natural."
          },
          {
            "icon": "public",
            "title": "Cultura Diversa",
            "description": "Dominica tiene un rico patrimonio cultural que mezcla influencias africanas, francesas e inglesas."
          },
          {
            "icon": "nature",
            "title": "Loro Endémico",
            "description": "El loro de Dominica, representado en la bandera, es una especie endémica que se encuentra solo en la isla."
          }
          ]
        }
      }
  },
  {
      "slug": "dominican-republic",
      "flagCode": "do",
      "continent": "North America",
      "population": "11.4M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Dominican Republic",
          "capital": "Santo Domingo",
          "flagDescription": "The Dominican Republic's flag has a vertical tricolor of blue, white, and red, with a small coat of arms in the center. The blue represents liberty, white represents independence, and red represents the blood of patriots. A cross divides the flag into four quarters.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Sugar and Beaches",
            "description": "The Dominican Republic is famous for its sugar production and beautiful beaches on both coasts."
          },
          {
            "icon": "landscape",
            "title": "Hispaniola Island",
            "description": "The Dominican Republic shares the island of Hispaniola with Haiti, the second-largest Caribbean island."
          },
          {
            "icon": "public",
            "title": "Baseball Nation",
            "description": "The Dominican Republic is a baseball superpower, producing many Major League Baseball players."
          },
          {
            "icon": "music_note",
            "title": "Merengue and Bachata",
            "description": "The Dominican Republic is the birthplace of merengue and bachata music, vibrant Latin rhythms."
          }
          ]
        },
        "es": {
          "name": "República Dominicana",
          "capital": "Santo Domingo",
          "flagDescription": "La bandera de la República Dominicana tiene un tricolor vertical de azul, blanco y rojo, con un pequeño escudo de armas en el centro. El azul representa la libertad, el blanco representa la independencia, y el rojo representa la sangre de los patriotas. Una cruz divide la bandera en cuatro cuartos.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Azúcar y Playas",
            "description": "La República Dominicana es famosa por su producción de azúcar y hermosas playas en ambas costas."
          },
          {
            "icon": "landscape",
            "title": "Isla Hispaniola",
            "description": "La República Dominicana comparte la isla de Hispaniola con Haití, la segunda isla más grande del Caribe."
          },
          {
            "icon": "public",
            "title": "Nación de Béisbol",
            "description": "La República Dominicana es una superpotencia de béisbol, produciendo muchos jugadores de las Grandes Ligas."
          },
          {
            "icon": "music_note",
            "title": "Merengue y Bachata",
            "description": "La República Dominicana es la cuna de la música merengue y bachata, ritmos latinos vibrantes."
          }
          ]
        }
      }
  },
  {
      "slug": "dr-congo",
      "flagCode": "cd",
      "continent": "Africa",
      "population": "112.8M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "DR Congo",
              "capital": "Kinshasa",
              "flagDescription": "The DR Congo flag is blue with a red diagonal band bordered by thin yellow lines running from the lower-left to upper-right, and a yellow five-pointed star in the top-left corner. Blue represents peace, red recalls the blood of the country's heroes, yellow stands for the nation's mineral wealth, and the star represents a bright future.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Second Largest Rainforest",
                      "description": "The Congo Rainforest is the world's second-largest rainforest after the Amazon, and one of Earth's most important carbon stores. It is home to okapis, bonobos, and thousands of plant species found nowhere else."
                  },
                  {
                      "icon": "water",
                      "title": "World's Deepest River",
                      "description": "The Congo River is the deepest river on Earth — over 220 meters deep in places! Its powerful current generates enough hydroelectric potential to power the whole of Africa."
                  },
                  {
                      "icon": "translate",
                      "title": "Land of 700 Languages",
                      "description": "Over 700 languages are spoken in the DR Congo, making it one of the most linguistically diverse countries on Earth. Lingala, Swahili, Tshiluba, and Kikongo are the four national languages."
                  }
              ]
          },
          "es": {
              "name": "RD Congo",
              "capital": "Kinshasa",
              "flagDescription": "La bandera de la RD Congo es azul con una banda roja diagonal bordeada de líneas amarillas que va de la esquina inferior izquierda a la superior derecha, y una estrella amarilla de cinco puntas en la esquina superior izquierda. El azul representa la paz, el rojo recuerda la sangre de los héroes del país, el amarillo representa la riqueza mineral y la estrella simboliza un futuro brillante.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Segunda mayor selva tropical",
                      "description": "La selva del Congo es la segunda mayor selva tropical del mundo tras el Amazonas y uno de los almacenes de carbono más importantes de la Tierra. Alberga okapis, bonobos y miles de especies vegetales únicas."
                  },
                  {
                      "icon": "water",
                      "title": "El río más profundo del mundo",
                      "description": "¡El río Congo es el río más profundo de la Tierra, con más de 220 metros en algunos puntos! Su poderosa corriente tiene el potencial hidroeléctrico suficiente para abastecer a toda África."
                  },
                  {
                      "icon": "translate",
                      "title": "Tierra de 700 idiomas",
                      "description": "En la RD Congo se hablan más de 700 idiomas, lo que la convierte en uno de los países más lingüísticamente diversos del mundo. El lingala, el suajili, el tshiluba y el kikongo son las cuatro lenguas nacionales."
                  }
              ]
          }
      }
  },
  {
      "slug": "ecuador",
      "flagCode": "ec",
      "continent": "South America",
      "population": "18.2M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Ecuador",
          "capital": "Quito",
          "flagDescription": "Ecuador's flag has three horizontal stripes with yellow taking up half the flag, followed by blue and red. The yellow represents the richness of the soil and the sun, blue represents the sea and sky, and red represents the blood of patriots. The coat of arms is centered on the yellow stripe.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Named After the Equator",
            "description": "Ecuador is named after the equator that runs through the country, dividing the Earth into Northern and Southern hemispheres."
          },
          {
            "icon": "landscape",
            "title": "Galapagos Islands",
            "description": "Ecuador administers the Galapagos Islands, a UNESCO World Heritage Site famous for unique wildlife and Darwin's theory of evolution."
          },
          {
            "icon": "terrain",
            "title": "Andes Mountains",
            "description": "Ecuador is home to the Andes Mountains, with Chimborazo being one of the highest peaks."
          },
          {
            "icon": "nature",
            "title": "Amazon Rainforest",
            "description": "Ecuador contains a significant portion of the Amazon Rainforest in its eastern regions."
          }
          ]
        },
        "es": {
          "name": "Ecuador",
          "capital": "Quito",
          "flagDescription": "La bandera de Ecuador tiene tres franjas horizontales con amarillo ocupando la mitad de la bandera, seguido de azul y rojo. El amarillo representa la riqueza del suelo y el sol, el azul representa el mar y el cielo, y el rojo representa la sangre de los patriotas. El escudo de armas está centrado en la franja amarilla.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Nombrado por la Línea Ecuatorial",
            "description": "Ecuador lleva el nombre de la línea ecuatorial que atraviesa el país, dividiendo la Tierra en hemisferios Norte y Sur."
          },
          {
            "icon": "landscape",
            "title": "Islas Galápagos",
            "description": "Ecuador administra las Islas Galápagos, un Sitio del Patrimonio Mundial de la UNESCO famoso por su vida silvestre única y la teoría de Darwin sobre la evolución."
          },
          {
            "icon": "terrain",
            "title": "Montañas de los Andes",
            "description": "Ecuador es hogar de las Montañas de los Andes, siendo Chimborazo uno de los picos más altos."
          },
          {
            "icon": "nature",
            "title": "Selva Amazónica",
            "description": "Ecuador contiene una porción significativa de la Selva Amazónica en sus regiones orientales."
          }
          ]
        }
      }
  },
  {
      "slug": "egypt",
      "flagCode": "eg",
      "continent": "Africa",
      "population": "107.3M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Egypt",
              "capital": "Cairo",
              "flagDescription": "The Egyptian flag has three horizontal stripes of red, white, and black, with the golden Eagle of Saladin centered on the white band. Red represents the struggle against colonialism, white symbolizes the 1952 revolution, and black recalls the end of oppression.",
              "funFacts": [
                  {
                      "icon": "account_balance",
                      "title": "Ancient Wonders",
                      "description": "The Great Pyramid of Giza is the only surviving structure of the original Seven Wonders of the Ancient World, built around 2560 BC."
                  },
                  {
                      "icon": "water",
                      "title": "The Nile River",
                      "description": "The Nile is one of the longest rivers in the world at about 6,650 km. Ancient Egyptian civilization flourished on its fertile banks for over 3,000 years."
                  },
                  {
                      "icon": "edit_note",
                      "title": "Hieroglyphic Writing",
                      "description": "Ancient Egyptians developed hieroglyphics — one of the earliest writing systems — around 3200 BC, using over 700 different symbols."
                  }
              ]
          },
          "es": {
              "name": "Egipto",
              "capital": "El Cairo",
              "flagDescription": "La bandera de Egipto tiene tres franjas horizontales de rojo, blanco y negro, con el Águila de Saladino dorada en el centro de la franja blanca. El rojo representa la lucha contra el colonialismo, el blanco simboliza la revolución de 1952, y el negro recuerda el fin de la opresión.",
              "funFacts": [
                  {
                      "icon": "account_balance",
                      "title": "Maravillas antiguas",
                      "description": "La Gran Pirámide de Guiza es la única estructura superviviente de las originales Siete Maravillas del Mundo Antiguo, construida alrededor del año 2560 a.C."
                  },
                  {
                      "icon": "water",
                      "title": "El río Nilo",
                      "description": "El Nilo es uno de los ríos más largos del mundo, con unos 6.650 km. La civilización del antiguo Egipto floreció en sus fértiles orillas durante más de 3.000 años."
                  },
                  {
                      "icon": "edit_note",
                      "title": "Escritura jeroglífica",
                      "description": "Los antiguos egipcios desarrollaron los jeroglíficos, uno de los primeros sistemas de escritura del mundo, alrededor del año 3200 a.C., usando más de 700 símbolos diferentes."
                  }
              ]
          }
      }
  },
  {
      "slug": "el-salvador",
      "flagCode": "sv",
      "continent": "North America",
      "population": "6.3M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "El Salvador",
          "capital": "San Salvador",
          "flagDescription": "El Salvador's flag has three horizontal stripes of blue, white, and blue, with the national coat of arms in the center. The blue represents loyalty and ideals, the white represents peace and prosperity. The coat of arms features a triangle with volcanoes and the national motto.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "The Smallest Country",
            "description": "El Salvador is the smallest country in Central America but has one of the highest population densities."
          },
          {
            "icon": "landscape",
            "title": "Volcanic Beauty",
            "description": "El Salvador is home to numerous volcanoes and volcanic lakes, creating dramatic landscapes."
          },
          {
            "icon": "public",
            "title": "Ancient Mayan Sites",
            "description": "El Salvador contains important Mayan archaeological sites, revealing the region's pre-Columbian history."
          },
          {
            "icon": "celebration",
            "title": "Pupusas",
            "description": "El Salvador is famous for pupusas, delicious stuffed tortillas that are the national dish."
          }
          ]
        },
        "es": {
          "name": "El Salvador",
          "capital": "San Salvador",
          "flagDescription": "La bandera de El Salvador tiene tres franjas horizontales de azul, blanco y azul, con el escudo de armas nacional en el centro. El azul representa la lealtad e ideales, el blanco representa la paz y la prosperidad. El escudo de armas presenta un triángulo con volcanes y el lema nacional.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "El País Más Pequeño",
            "description": "El Salvador es el país más pequeño de América Central pero tiene una de las densidades de población más altas."
          },
          {
            "icon": "landscape",
            "title": "Belleza Volcánica",
            "description": "El Salvador es hogar de numerosos volcanes y lagos volcánicos, creando paisajes dramáticos."
          },
          {
            "icon": "public",
            "title": "Sitios Mayas Antiguos",
            "description": "El Salvador contiene sitios arqueológicos mayas importantes, revelando la historia precolombina de la región."
          },
          {
            "icon": "celebration",
            "title": "Pupusas",
            "description": "El Salvador es famoso por las pupusas, deliciosas tortillas rellenas que son el plato nacional."
          }
          ]
        }
      }
  },
  {
      "slug": "equatorial-guinea",
      "flagCode": "gq",
      "continent": "Africa",
      "population": "1.7M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Equatorial Guinea",
              "capital": "Malabo",
              "flagDescription": "Equatorial Guinea's flag has three horizontal stripes — green at the top, white in the middle, and red at the bottom — with a blue triangle on the left side and a coat of arms at the center featuring a silk cotton tree. Green represents the jungle, white symbolizes peace, red recalls the struggle for independence, and blue represents the sea.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "Africa's Spanish Speaker",
                      "description": "Equatorial Guinea is the only country in Africa where Spanish is an official language! It also has French and Portuguese as official languages, reflecting its complex colonial history."
                  },
                  {
                      "icon": "forest",
                      "title": "Tropical Rainforest",
                      "description": "Dense equatorial rainforest covers most of Equatorial Guinea's mainland (Rio Muni), sheltering western lowland gorillas, forest elephants, and hundreds of bird species."
                  },
                  {
                      "icon": "oil_barrel",
                      "title": "Oil Transformation",
                      "description": "The discovery of offshore oil in 1995 dramatically changed Equatorial Guinea — transforming it from one of Africa's poorest countries into one of the continent's highest income nations in just a few decades."
                  }
              ]
          },
          "es": {
              "name": "Guinea Ecuatorial",
              "capital": "Malabo",
              "flagDescription": "La bandera de Guinea Ecuatorial tiene tres franjas horizontales: verde arriba, blanca en el centro y roja abajo, con un triángulo azul a la izquierda y un escudo con un árbol de ceiba en el centro. El verde representa la selva, el blanco simboliza la paz, el rojo recuerda la lucha por la independencia, y el azul representa el mar.",
              "funFacts": [
                  {
                      "icon": "translate",
                      "title": "El hispanohablante de África",
                      "description": "¡Guinea Ecuatorial es el único país de África donde el español es idioma oficial! También tiene el francés y el portugués como idiomas oficiales, reflejo de su compleja historia colonial."
                  },
                  {
                      "icon": "forest",
                      "title": "Selva tropical ecuatorial",
                      "description": "Una densa selva ecuatorial cubre la mayor parte del territorio continental de Guinea Ecuatorial (Río Muni), donde viven gorilas de llanura occidental, elefantes forestales y cientos de especies de aves."
                  },
                  {
                      "icon": "oil_barrel",
                      "title": "Transformación petrolera",
                      "description": "El descubrimiento de petróleo en alta mar en 1995 transformó Guinea Ecuatorial de uno de los países más pobres de África a uno de los de mayor renta del continente en pocas décadas."
                  }
              ]
          }
      }
  },
  {
      "slug": "eritrea",
      "flagCode": "er",
      "continent": "Africa",
      "population": "3.6M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Eritrea",
              "capital": "Asmara",
              "flagDescription": "Eritrea's flag has three triangles — green at the top, blue at the bottom, and red in the center — with a golden olive wreath on the red section. Green represents the country's agriculture, blue symbolizes the Red Sea coastline, red recalls the blood shed in the fight for independence, and the olive wreath represents peace.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Africa's Newest Country",
                      "description": "Eritrea became independent from Ethiopia in 1993 after a 30-year struggle, making it one of Africa's newest nations. Independence Day on May 24 is celebrated with enormous pride every year."
                  },
                  {
                      "icon": "anchor",
                      "title": "Red Sea Dive Paradise",
                      "description": "Eritrea's Red Sea coast has some of the world's most pristine coral reefs, plus WWII shipwrecks resting on the seafloor that divers explore like underwater museums."
                  },
                  {
                      "icon": "castle",
                      "title": "Art Deco Capital",
                      "description": "The capital Asmara is nicknamed 'The Rome of Africa' because Italian colonizers built hundreds of stunning Art Deco buildings in the 1930s. The entire city center is a UNESCO World Heritage Site."
                  }
              ]
          },
          "es": {
              "name": "Eritrea",
              "capital": "Asmara",
              "flagDescription": "La bandera de Eritrea tiene tres triángulos: verde arriba, azul abajo y rojo en el centro, con una corona de olivo dorada sobre la parte roja. El verde representa la agricultura, el azul simboliza el mar Rojo, el rojo recuerda la sangre derramada en la lucha por la independencia, y la corona de olivo representa la paz.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Uno de los países más jóvenes",
                      "description": "Eritrea se independizó de Etiopía en 1993 tras 30 años de lucha, convirtiéndose en uno de los países más jóvenes de África. El Día de la Independencia, el 24 de mayo, se celebra con enorme orgullo."
                  },
                  {
                      "icon": "anchor",
                      "title": "Paraíso de buceo en el mar Rojo",
                      "description": "La costa eritrea del mar Rojo tiene algunos de los arrecifes de coral más vírgenes del mundo, además de naufragios de la Segunda Guerra Mundial que los buceadores exploran como museos submarinos."
                  },
                  {
                      "icon": "castle",
                      "title": "La capital Art Déco",
                      "description": "La capital Asmara es conocida como 'La Roma de África' porque los colonizadores italianos construyeron en los años 30 cientos de impresionantes edificios Art Déco. Todo el centro histórico es Patrimonio Mundial de la UNESCO."
                  }
              ]
          }
      }
  },
  {
      "slug": "estonia",
      "flagCode": "ee",
      "continent": "Europe",
      "population": "1.4M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Estonia",
              "capital": "Tallinn",
              "flagDescription": "Estonia's flag has three equal horizontal stripes of blue, black, and white. Blue represents the sky, sea, and the loyalty of the Estonian people. Black symbolizes the dark soil of Estonia and the suffering of the nation through centuries of occupation. White stands for purity, hard work, and the hope for a bright future. Together these colors tell the story of a small but resilient nation that has always strived for freedom.",
              "funFacts": [
                  {
                      "icon": "wifi",
                      "title": "Digital Pioneer Nation",
                      "description": "Estonia is one of the most digitally advanced countries in the world. It was the first country to offer online voting in national elections, has a digital government that lets citizens do almost everything online, and was the birthplace of Skype, the video-calling app used by hundreds of millions of people."
                  },
                  {
                      "icon": "forest",
                      "title": "Land of Forests and Bogs",
                      "description": "Over half of Estonia is covered by forests, and the country has an extraordinary network of bogs and wetlands that are unique in all of Europe. Walking on bobbing bog moss during guided tours is a popular Estonian activity — it feels like walking on a giant water mattress!"
                  },
                  {
                      "icon": "music_note",
                      "title": "Song Festival Tradition",
                      "description": "Estonia's Song and Dance Celebration, held every five years, is one of the world's largest choral events, gathering up to 30,000 singers on one stage. During Estonia's movement for independence from the Soviet Union, these singing festivals became acts of peaceful national resistance — known as the \"Singing Revolution.\""
                  },
                  {
                      "icon": "castle",
                      "title": "Medieval Tallinn",
                      "description": "Tallinn's Old Town is one of the best-preserved medieval cities in all of Europe, with ancient city walls, limestone towers, and cobblestone streets that look exactly as they did 600 years ago. It has been a UNESCO World Heritage Site since 1997."
                  }
              ]
          },
          "es": {
              "name": "Estonia",
              "capital": "Tallin",
              "flagDescription": "La bandera de Estonia tiene tres franjas horizontales iguales de azul, negro y blanco. El azul representa el cielo, el mar y la lealtad del pueblo estonio. El negro simboliza la tierra oscura de Estonia y el sufrimiento de la nación a través de siglos de ocupación. El blanco representa la pureza, el trabajo duro y la esperanza de un futuro brillante. Juntos, estos colores cuentan la historia de una nación pequeña pero resistente que siempre ha luchado por la libertad.",
              "funFacts": [
                  {
                      "icon": "wifi",
                      "title": "Nación Pionera Digital",
                      "description": "Estonia es uno de los países más digitalmente avanzados del mundo. Fue el primer país en ofrecer votación en línea en elecciones nacionales, tiene un gobierno digital que permite a los ciudadanos hacer casi todo en línea, y fue el lugar de nacimiento de Skype, la aplicación de videollamadas usada por cientos de millones de personas."
                  },
                  {
                      "icon": "forest",
                      "title": "Tierra de Bosques y Turberas",
                      "description": "Más de la mitad de Estonia está cubierta de bosques, y el país tiene una extraordinaria red de turberas y humedales única en toda Europa. Caminar sobre la flotante turba de musgo durante visitas guiadas es una actividad estonia popular, ¡se siente como caminar sobre un gigantesco colchón de agua!"
                  },
                  {
                      "icon": "music_note",
                      "title": "Tradición del Festival de la Canción",
                      "description": "La Celebración de la Canción y la Danza de Estonia, celebrada cada cinco años, es uno de los eventos corales más grandes del mundo, reuniendo hasta 30.000 cantantes en un mismo escenario. Durante el movimiento de independencia de Estonia de la Unión Soviética, estos festivales de canto se convirtieron en actos de resistencia nacional pacífica, conocidos como la \"Revolución Cantante\"."
                  },
                  {
                      "icon": "castle",
                      "title": "Tallin Medieval",
                      "description": "El Casco Antiguo de Tallin es una de las ciudades medievales mejor conservadas de toda Europa, con antiguas murallas, torres de piedra caliza y calles adoquinadas que lucen exactamente como hace 600 años. Es Patrimonio de la Humanidad de la UNESCO desde 1997."
                  }
              ]
          }
      }
  },
  {
      "slug": "eswatini",
      "flagCode": "sz",
      "continent": "Africa",
      "population": "1.2M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "Eswatini",
              "capital": "Mbabane",
              "flagDescription": "Eswatini's flag has blue stripes at the top and bottom, a wide red stripe in the center, and thin yellow stripes in between. In the center of the red stripe is a traditional Nguni shield with two spears and three decorated sticks. Blue represents peace, red recalls past battles, yellow stands for mineral wealth, and the shield symbolizes protection of the nation.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Last Absolute Monarchy",
                      "description": "Eswatini (formerly Swaziland) is one of Africa's last absolute monarchies, ruled by King Mswati III. The king's birthday and national holidays are celebrated with traditional ceremonies and colorful dancing."
                  },
                  {
                      "icon": "festival",
                      "title": "Reed Dance Ceremony",
                      "description": "The annual Umhlanga Reed Dance is a spectacular cultural event where tens of thousands of young women in traditional dress cut reeds and dance for the king in a week-long celebration."
                  },
                  {
                      "icon": "pets",
                      "title": "Rhino Sanctuary",
                      "description": "Both black and white rhinos roam freely in Hlane Royal National Park — one of the best places in southern Africa to see these magnificent and endangered animals up close."
                  }
              ]
          },
          "es": {
              "name": "Esuatini",
              "capital": "Mbabane",
              "flagDescription": "La bandera de Esuatini tiene franjas azules arriba y abajo, una amplia franja roja en el centro, y delgadas franjas amarillas entre ellas. En el centro de la franja roja hay un escudo tradicional Nguni con dos lanzas y tres palos decorados. El azul representa la paz, el rojo recuerda batallas pasadas, el amarillo representa la riqueza mineral, y el escudo simboliza la protección de la nación.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Última monarquía absoluta",
                      "description": "Esuatini (antes Suazilandia) es una de las últimas monarquías absolutas de África, gobernada por el rey Mswati III. El cumpleaños del rey y los días festivos se celebran con ceremonias tradicionales y danzas coloridas."
                  },
                  {
                      "icon": "festival",
                      "title": "La danza de las cañas",
                      "description": "El Umhlanga, la Danza Anual de las Cañas, es un espectacular evento cultural en el que decenas de miles de jóvenes con atuendos tradicionales cortan cañas y bailan para el rey durante una semana."
                  },
                  {
                      "icon": "pets",
                      "title": "Santuario del rinoceronte",
                      "description": "Los rinocerontes negros y blancos deambulan libremente en el Parque Nacional Real de Hlane, uno de los mejores lugares del sur de África para ver a estos magníficos animales en peligro de extinción."
                  }
              ]
          }
      }
  },
  {
      "slug": "ethiopia",
      "flagCode": "et",
      "continent": "Africa",
      "population": "111.7M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Ethiopia",
              "capital": "Addis Ababa",
              "flagDescription": "Ethiopia's flag has three equal horizontal stripes of green, yellow, and red with a blue disc and yellow pentagram at the center. These Pan-African colors inspired many flags across Africa after Ethiopia resisted European colonization.",
              "funFacts": [
                  {
                      "icon": "coffee",
                      "title": "Birthplace of Coffee",
                      "description": "Coffee originated in Ethiopia! According to legend, a goat herder named Kaldi noticed his goats became energetic after eating berries from a certain tree — that tree was the coffee plant."
                  },
                  {
                      "icon": "access_time",
                      "title": "Unique Calendar",
                      "description": "Ethiopia has its own calendar with 13 months and is currently about 7–8 years behind the Gregorian calendar. New Year is celebrated in September!"
                  },
                  {
                      "icon": "history",
                      "title": "Oldest Christian Nation",
                      "description": "Ethiopia is one of the world's oldest Christian nations, adopting Christianity as a state religion in 330 AD — before most European countries."
                  }
              ]
          },
          "es": {
              "name": "Etiopía",
              "capital": "Addis Abeba",
              "flagDescription": "La bandera de Etiopía tiene tres franjas horizontales iguales de verde, amarillo y rojo, con un disco azul y un pentágrama amarillo en el centro. Estos colores panafricanos inspiraron a muchas banderas de África después de que Etiopía resistiera la colonización europea.",
              "funFacts": [
                  {
                      "icon": "coffee",
                      "title": "Cuna del café",
                      "description": "¡El café se originó en Etiopía! Según la leyenda, un pastor de cabras llamado Kaldi notó que sus cabras se volvían enérgicas al comer bayas de cierto árbol: ese árbol era la planta del café."
                  },
                  {
                      "icon": "access_time",
                      "title": "Calendario único",
                      "description": "Etiopía tiene su propio calendario con 13 meses y actualmente va unos 7-8 años por detrás del calendario gregoriano. ¡El Año Nuevo se celebra en septiembre!"
                  },
                  {
                      "icon": "history",
                      "title": "Nación cristiana más antigua",
                      "description": "Etiopía es una de las naciones cristianas más antiguas del mundo, habiendo adoptado el cristianismo como religión estatal en el año 330 d.C., antes que la mayoría de los países europeos."
                  }
              ]
          }
      }
  },
  {
      "slug": "falkland-islands",
      "flagCode": "fk",
      "continent": "South America",
      "population": "3.5K",
      "region": "South Atlantic",
      "translations": {
        "en": {
          "name": "Falkland Islands",
          "capital": "Stanley",
          "flagDescription": "The Falkland Islands' flag is blue with the Union Jack in the upper left and the coat of arms on the right. The coat of arms features a lion and sheep, representing the island's British heritage and wool industry.",
          "funFacts": [
          {
            "icon": "pets",
            "title": "Penguin Paradise",
            "description": "The Falkland Islands are home to five species of penguins, with hundreds of thousands of birds."
          },
          {
            "icon": "landscape",
            "title": "Windswept Islands",
            "description": "The Falkland Islands are known for their windy, windswept landscapes and remote beauty."
          },
          {
            "icon": "public",
            "title": "British Territory",
            "description": "The Falkland Islands are a British Overseas Territory in the South Atlantic Ocean."
          },
          {
            "icon": "history",
            "title": "Sheep Farming",
            "description": "Sheep farming has been the traditional economy of the Falkland Islands since their settlement."
          }
          ]
        },
        "es": {
          "name": "Islas Malvinas",
          "capital": "Stanley",
          "flagDescription": "La bandera de las Islas Malvinas es azul con la Union Jack en la esquina superior izquierda y el escudo de armas en la derecha. El escudo de armas presenta un león y ovejas, representando la herencia británica de la isla e industria de la lana.",
          "funFacts": [
          {
            "icon": "pets",
            "title": "Paraíso de Pingüinos",
            "description": "Las Islas Malvinas son hogar de cinco especies de pingüinos, con cientos de miles de aves."
          },
          {
            "icon": "landscape",
            "title": "Islas Azotadas por el Viento",
            "description": "Las Islas Malvinas son conocidas por sus paisajes azotados por el viento y belleza remota."
          },
          {
            "icon": "public",
            "title": "Territorio Británico",
            "description": "Las Islas Malvinas son un Territorio Británico de Ultramar en el Océano Atlántico Sur."
          },
          {
            "icon": "history",
            "title": "Ganadería de Ovejas",
            "description": "La ganadería de ovejas ha sido la economía tradicional de las Islas Malvinas desde su asentamiento."
          }
          ]
        }
      }
  },
  {
      "slug": "faroe-islands",
      "flagCode": "fo",
      "continent": "Europe",
      "population": "55K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Faroe Islands",
              "capital": "Tórshavn",
              "flagDescription": "The Faroe Islands flag features a red Nordic cross outlined in blue set on a white background. The cross design connects the Faroese to the other Nordic nations — Denmark, Norway, Sweden, Finland, and Iceland — who all share the Nordic cross design on their flags. The colors of red, white, and blue were chosen to represent the Faroese people's connections to both Denmark and Norway while expressing their own unique identity.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Dramatic Atlantic Islands",
                      "description": "The Faroe Islands are a remote archipelago of 18 volcanic islands in the North Atlantic between Norway, Iceland, and Scotland. With dramatic cliffs, waterfalls plunging directly into the sea, and impossibly green hillsides dotted with tiny colorful houses, the scenery is like nowhere else on Earth."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Giant-Killers of Football",
                      "description": "Despite a population of only 55,000 people, the Faroe Islands have a professional football team that has caused several famous upsets against much larger European nations. Their style and passion have made them beloved underdogs around the world."
                  },
                  {
                      "icon": "cloud",
                      "title": "Misty Weather Nation",
                      "description": "The Faroe Islands are famous for their unpredictable, moody weather, where you can experience four seasons in a single day. This dramatic atmosphere has inspired artists and photographers from around the world to make the long journey to capture its ethereal beauty."
                  },
                  {
                      "icon": "local_dining",
                      "title": "Fermented Food Tradition",
                      "description": "The Faroese have a unique food tradition of fermenting and wind-drying fish, lamb, and whale meat — a preservation method dating back to Viking times. The most prized dish is skerpikjøt, wind-dried mutton that hangs in special drying sheds called hjallur for months before eating."
                  }
              ]
          },
          "es": {
              "name": "Islas Feroe",
              "capital": "Tórshavn",
              "flagDescription": "La bandera de las Islas Feroe muestra una cruz nórdica roja con contorno azul sobre fondo blanco. El diseño de cruz conecta a los feroeses con las demás naciones nórdicas — Dinamarca, Noruega, Suecia, Finlandia e Islandia — que comparten el diseño de cruz nórdica en sus banderas. Los colores rojo, blanco y azul fueron elegidos para representar las conexiones del pueblo feroés tanto con Dinamarca como con Noruega, expresando al mismo tiempo su propia identidad única.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Dramáticas Islas Atlánticas",
                      "description": "Las Islas Feroe son un remoto archipiélago de 18 islas volcánicas en el Atlántico Norte, entre Noruega, Islandia y Escocia. Con dramáticos acantilados, cascadas que caen directamente al mar y colinas imposiblemente verdes salpicadas de pequeñas casas coloridas, el paisaje es como ningún otro lugar en la Tierra."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Matadores de Gigantes del Fútbol",
                      "description": "A pesar de una población de solo 55.000 personas, las Islas Feroe tienen un equipo de fútbol profesional que ha causado varias famosas sorpresas contra naciones europeas mucho más grandes. Su estilo y pasión los han convertido en queridos perdedores en todo el mundo."
                  },
                  {
                      "icon": "cloud",
                      "title": "Nación del Clima Neblinoso",
                      "description": "Las Islas Feroe son famosas por su tiempo impredecible y cambiante, donde se pueden experimentar cuatro estaciones en un solo día. Esta atmósfera dramática ha inspirado a artistas y fotógrafos de todo el mundo a hacer el largo viaje para capturar su belleza etérea."
                  },
                  {
                      "icon": "local_dining",
                      "title": "Tradición de Comida Fermentada",
                      "description": "Los feroeses tienen una tradición alimentaria única de fermentar y secar al viento pescado, cordero y carne de ballena, un método de conservación que data de los tiempos vikingos. El plato más apreciado es el skerpikjøt, cordero secado al viento que cuelga en cobertizos especiales llamados hjallur durante meses antes de comerlo."
                  }
              ]
          }
      }
  },
  {
      "slug": "fiji",
      "flagCode": "fj",
      "continent": "Oceania",
      "population": "901K",
      "region": "Melanesia",
      "translations": {
          "en": {
              "name": "Fiji",
              "capital": "Suva",
              "flagDescription": "Fiji's flag is light blue (sky blue) with the Union Jack in the upper-left corner and the Fijian coat of arms on the right. The light blue represents the Pacific Ocean that surrounds the islands. The coat of arms shows a British lion (top) and sugarcane, coconut palm, dove, and bunch of bananas.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "333 Islands",
                      "description": "Fiji is made up of 333 islands and about 500 islets in the South Pacific. About 110 of the islands are permanently inhabited, with most Fijians living on the two main islands."
                  },
                  {
                      "icon": "water",
                      "title": "Warmest People",
                      "description": "Fiji is famous for the warmth and happiness of its people. The phrase 'Bula!' (meaning 'hello' and 'life') captures the Fijian spirit of joy and welcome."
                  },
                  {
                      "icon": "local_bar",
                      "title": "Kava Ceremony",
                      "description": "Kava tea, made from the powdered root of the pepper plant, is central to Fijian culture. Drinking kava in a ceremony called the 'sevusevu' is how guests are welcomed into a village."
                  },
                  {
                      "icon": "scuba_diving",
                      "title": "Coral Triangle Gateway",
                      "description": "Fiji's waters are some of the most biodiverse on Earth, nicknamed the 'soft coral capital of the world'. Divers find over 1,500 species of fish and 400 types of coral just beneath the surface."
                  }
              ]
          },
          "es": {
              "name": "Fiyi",
              "capital": "Suva",
              "flagDescription": "La bandera de Fiyi es de color azul claro (celeste) con la Union Jack en la esquina superior izquierda y el escudo de armas de Fiyi a la derecha. El azul claro representa el Océano Pacífico que rodea las islas. El escudo de armas muestra un león británico (arriba) y caña de azúcar, palmera de coco, paloma y un racimo de plátanos.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "333 Islas",
                      "description": "Fiyi está formada por 333 islas y alrededor de 500 islotes en el Pacífico Sur. Unas 110 islas están habitadas de forma permanente, y la mayoría de los fiyianos viven en las dos islas principales."
                  },
                  {
                      "icon": "water",
                      "title": "La Gente Más Cálida",
                      "description": "Fiyi es famosa por la calidez y la alegría de su gente. El saludo '¡Bula!' (que significa 'hola' y 'vida') captura el espíritu de alegría y bienvenida fiyiano."
                  },
                  {
                      "icon": "local_bar",
                      "title": "Ceremonia del Kava",
                      "description": "El té de kava, elaborado con la raíz en polvo de la planta de pimienta, es fundamental en la cultura fiyiana. Beber kava en una ceremonia llamada 'sevusevu' es la forma en que los huéspedes son bienvenidos en un pueblo."
                  },
                  {
                      "icon": "scuba_diving",
                      "title": "Capital Mundial del Coral Blando",
                      "description": "Las aguas de Fiyi son de las más biodiversas de la Tierra y se les llama la 'capital mundial del coral blando'. Los buceadores encuentran más de 1.500 especies de peces y 400 tipos de coral justo bajo la superficie."
                  }
              ]
          }
      }
  },
  {
      "slug": "finland",
      "flagCode": "fi",
      "continent": "Europe",
      "population": "5.7M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Finland",
              "capital": "Helsinki",
              "flagDescription": "Finland's flag is beautifully simple — a blue Nordic cross on a white background. The white represents Finland's vast snowfields and the thousands of frozen lakes that cover the landscape in winter. The blue represents the country's many lakes and rivers, as well as the sky on a clear winter day. Finland has more lakes per land area than any other country in the world, making water and ice central parts of Finnish identity.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Land of a Thousand Lakes",
                      "description": "Finland has a staggering 187,888 lakes — that's more lakes than almost any other country on Earth! These crystal-clear lakes, surrounded by ancient forests and granite rocks, are the perfect places to swim in summer and skate in winter."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Midnight Sun and Northern Lights",
                      "description": "In northern Finland (called Lapland), the sun doesn't set at all for about 70 consecutive days in summer — called the Midnight Sun. And in winter, the sky comes alive with the spectacular Northern Lights, painting the darkness in dancing green, purple, and pink curtains of light."
                  },
                  {
                      "icon": "spa",
                      "title": "Sauna Nation",
                      "description": "Finland has about 3 million saunas for a population of only 5.5 million people! Sauna culture is so deeply embedded in Finnish life that there are saunas in homes, offices, parliament buildings, and even on ferries. The Finnish sauna tradition was added to UNESCO's Intangible Cultural Heritage list."
                  },
                  {
                      "icon": "cake",
                      "title": "Home of Santa Claus",
                      "description": "Rovaniemi, in Finnish Lapland, is officially recognized as the hometown of Santa Claus. Santa's Village sits right on the Arctic Circle, and children from all over the world write letters to Santa Claus at the North Pole — officially located in Finland!"
                  }
              ]
          },
          "es": {
              "name": "Finlandia",
              "capital": "Helsinki",
              "flagDescription": "La bandera de Finlandia es hermosamente simple: una cruz nórdica azul sobre fondo blanco. El blanco representa los vastos campos de nieve de Finlandia y los miles de lagos congelados que cubren el paisaje en invierno. El azul representa los muchos lagos y ríos del país, así como el cielo en un día claro de invierno. Finlandia tiene más lagos por área de tierra que cualquier otro país del mundo, haciendo del agua y el hielo partes centrales de la identidad finlandesa.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "La Tierra de los Mil Lagos",
                      "description": "¡Finlandia tiene 187.888 lagos, más que casi cualquier otro país de la Tierra! Estos lagos cristalinos, rodeados de antiguos bosques y rocas de granito, son el lugar perfecto para nadar en verano y patinar en invierno."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Sol de Medianoche y Auroras Boreales",
                      "description": "En el norte de Finlandia (llamado Laponia), el sol no se pone en absoluto durante unos 70 días consecutivos en verano, llamado el Sol de Medianoche. Y en invierno, el cielo cobra vida con las espectaculares Auroras Boreales, pintando la oscuridad con danzantes cortinas de luz verde, púrpura y rosa."
                  },
                  {
                      "icon": "spa",
                      "title": "Nación de la Sauna",
                      "description": "¡Finlandia tiene unas 3 millones de saunas para una población de solo 5,5 millones de personas! La cultura de la sauna está tan profundamente arraigada en la vida finlandesa que hay saunas en hogares, oficinas, edificios del parlamento e incluso en ferrys. La tradición de la sauna finlandesa fue añadida a la lista del Patrimonio Cultural Inmaterial de la UNESCO."
                  },
                  {
                      "icon": "cake",
                      "title": "Hogar de Papá Noel",
                      "description": "Rovaniemi, en la Laponia finlandesa, está oficialmente reconocida como la ciudad natal de Papá Noel. El Pueblo de Santa se encuentra justo en el Círculo Polar Ártico, y niños de todo el mundo escriben cartas a Papá Noel en el Polo Norte, ¡oficialmente ubicado en Finlandia!"
                  }
              ]
          }
      }
  },
  {
      "slug": "france",
      "flagCode": "fr",
      "continent": "Europe",
      "population": "66.4M",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "France",
              "capital": "Paris",
              "flagDescription": "France's flag — called the Tricolore, meaning 'three-colored' — has three equal vertical stripes of blue, white, and red. This iconic design was born during the French Revolution of 1789, combining the traditional colors of Paris (blue and red) with the white of the French royal family. The Tricolore went on to inspire the design of national flags around the world and became a powerful symbol of liberty, equality, and fraternity — France's national motto.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Culinary Capital of the World",
                      "description": "France is widely considered the culinary capital of the world. French cuisine has more Michelin-starred restaurants than any other country, and French cooking techniques form the foundation of professional cooking taught in culinary schools worldwide. France also produces over 1,200 different varieties of cheese!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Eiffel Tower Icon",
                      "description": "The Eiffel Tower in Paris is the most visited paid monument in the world, welcoming nearly 7 million visitors every year. When it was built in 1889, it was the tallest man-made structure in the world. Originally criticized by many Parisians, it has since become the ultimate symbol of France."
                  },
                  {
                      "icon": "palette",
                      "title": "Art and Culture Leader",
                      "description": "France leads the world in art, culture, and fashion. The Louvre in Paris is the world's most visited art museum, home to the Mona Lisa and thousands of other priceless works. France is also the birthplace of Impressionism, one of history's most beloved art movements."
                  },
                  {
                      "icon": "tour",
                      "title": "Most Visited Country",
                      "description": "France receives more international tourists than any other country on Earth — roughly 100 million visitors per year. From the beaches of the Côte d'Azur to the vineyards of Bordeaux, from the châteaux of the Loire Valley to the mountains of the Alps, France has something extraordinary for everyone."
                  }
              ]
          },
          "es": {
              "name": "Francia",
              "capital": "París",
              "flagDescription": "La bandera de Francia — llamada Tricolore, que significa 'tres colores' — tiene tres franjas verticales iguales de azul, blanco y rojo. Este icónico diseño nació durante la Revolución Francesa de 1789, combinando los colores tradicionales de París (azul y rojo) con el blanco de la familia real francesa. El Tricolore inspiró el diseño de banderas nacionales en todo el mundo y se convirtió en un poderoso símbolo de libertad, igualdad y fraternidad, el lema nacional de Francia.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Capital Culinaria del Mundo",
                      "description": "Francia es ampliamente considerada la capital culinaria del mundo. La cocina francesa tiene más restaurantes con estrellas Michelin que cualquier otro país, y las técnicas de cocina francesa son la base de la cocina profesional que se enseña en escuelas de cocina de todo el mundo. ¡Francia también produce más de 1.200 variedades diferentes de queso!"
                  },
                  {
                      "icon": "architecture",
                      "title": "El Icono de la Torre Eiffel",
                      "description": "La Torre Eiffel en París es el monumento de pago más visitado del mundo, recibiendo casi 7 millones de visitantes cada año. Cuando fue construida en 1889, era la estructura hecha por el hombre más alta del mundo. Inicialmente criticada por muchos parisinos, se ha convertido desde entonces en el símbolo definitivo de Francia."
                  },
                  {
                      "icon": "palette",
                      "title": "Líder en Arte y Cultura",
                      "description": "Francia lidera el mundo en arte, cultura y moda. El Louvre en París es el museo de arte más visitado del mundo, hogar de la Mona Lisa y miles de otras obras invaluables. Francia también es el lugar de nacimiento del Impresionismo, uno de los movimientos artísticos más amados de la historia."
                  },
                  {
                      "icon": "tour",
                      "title": "El País Más Visitado",
                      "description": "Francia recibe más turistas internacionales que cualquier otro país de la Tierra, aproximadamente 100 millones de visitantes al año. Desde las playas de la Costa Azul hasta los viñedos de Burdeos, desde los castillos del Valle del Loira hasta las montañas de los Alpes, Francia tiene algo extraordinario para todos."
                  }
              ]
          }
      }
  },
  {
      "slug": "french-guiana",
      "flagCode": "gf",
      "continent": "South America",
      "population": "304K",
      "region": "South America",
      "translations": {
        "en": {
          "name": "French Guiana",
          "capital": "Cayenne",
          "flagDescription": "French Guiana uses the French flag (blue, white, and red vertical stripes) as it is an overseas department of France. The region has a tropical climate and diverse cultural heritage blending French and Caribbean influences.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Amazon Rainforest",
            "description": "French Guiana is covered by the Amazon Rainforest and is one of the least densely populated regions in South America."
          },
          {
            "icon": "public",
            "title": "Space Agency",
            "description": "French Guiana hosts the European Space Agency's primary launch facility, the Guiana Space Centre."
          },
          {
            "icon": "history",
            "title": "Devil's Island",
            "description": "French Guiana is home to Devil's Island, a former penal colony and UNESCO World Heritage Site."
          },
          {
            "icon": "nature",
            "title": "Biodiversity",
            "description": "French Guiana has incredible biodiversity with jaguars, caimans, anacondas, and thousands of bird species."
          }
          ]
        },
        "es": {
          "name": "Guayana Francesa",
          "capital": "Cayena",
          "flagDescription": "La Guayana Francesa utiliza la bandera francesa (franjas verticales azul, blanco y rojo) ya que es un departamento de ultramar de Francia. La región tiene un clima tropical y un patrimonio cultural diverso que combina influencias francesas y caribeñas.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Selva Amazónica",
            "description": "La Guayana Francesa está cubierta por la Selva Amazónica y es una de las regiones menos densamente pobladas de América del Sur."
          },
          {
            "icon": "public",
            "title": "Agencia Espacial",
            "description": "La Guayana Francesa alberga la instalación de lanzamiento principal de la Agencia Espacial Europea, el Centro Espacial de Guayana."
          },
          {
            "icon": "history",
            "title": "Isla del Diablo",
            "description": "La Guayana Francesa es hogar de la Isla del Diablo, una antigua colonia penitenciaria y Sitio del Patrimonio Mundial de la UNESCO."
          },
          {
            "icon": "nature",
            "title": "Biodiversidad",
            "description": "La Guayana Francesa tiene una biodiversidad increíble con jaguares, caimanes, anacondas y miles de especies de aves."
          }
          ]
        }
      }
  },
  {
      "slug": "french-polynesia",
      "flagCode": "pf",
      "continent": "Oceania",
      "population": "280K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "French Polynesia",
              "capital": "Papeete",
              "flagDescription": "French Polynesia's flag has a French tricolor background (blue-white-red vertical stripes) with the territory's own emblem in the center: a traditional Polynesian canoe with a red sail on a blue sea, beneath a circle of five golden stars on a red background. The canoe represents the great voyaging tradition of Polynesian seafarers who navigated the Pacific with extraordinary skill thousands of years ago.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "World's Finest Overwater Bungalows",
                      "description": "French Polynesia — especially Bora Bora — invented the overwater bungalow concept that has been copied worldwide. Staying in a thatched-roof house perched over a crystal-clear turquoise lagoon, surrounded by coral reefs, is considered one of the world's ultimate travel experiences."
                  },
                  {
                      "icon": "palette",
                      "title": "Gauguin's Paradise",
                      "description": "French post-impressionist artist Paul Gauguin moved to Tahiti in 1891, inspired by Polynesian life, colors, and culture. His vibrant paintings of Tahitian people and landscapes are among the most recognizable artworks in the world."
                  },
                  {
                      "icon": "anchor",
                      "title": "118 Islands",
                      "description": "French Polynesia comprises 118 islands and atolls spread across an ocean area the size of Europe — yet the total land area is smaller than the US state of Rhode Island. Each island group has its own distinct character and culture."
                  },
                  {
                      "icon": "sports",
                      "title": "Surfing Mecca",
                      "description": "Teahupo'o on Tahiti is considered one of the world's most dangerous and spectacular surf breaks — a massive, hollow wave that breaks over a sharp coral reef in very shallow water. Professional surfers come from around the world to challenge it."
                  }
              ]
          },
          "es": {
              "name": "Polinesia Francesa",
              "capital": "Papeete",
              "flagDescription": "La bandera de la Polinesia Francesa tiene un fondo de tricolor francés (franjas verticales azul-blanco-rojo) con el emblema propio del territorio en el centro: una canoa polinesiana tradicional con una vela roja sobre un mar azul, bajo un círculo de cinco estrellas doradas sobre fondo rojo. La canoa representa la gran tradición de navegación de los marineros polinesios que navegaron el Pacífico con extraordinaria habilidad hace miles de años.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Los Mejores Bungalows sobre el Agua del Mundo",
                      "description": "La Polinesia Francesa — especialmente Bora Bora — inventó el concepto de bungalow sobre el agua que ha sido copiado en todo el mundo. Alojarse en una casa de techo de paja posada sobre una laguna turquesa cristalina, rodeada de arrecifes de coral, se considera una de las experiencias de viaje definitivas del mundo."
                  },
                  {
                      "icon": "palette",
                      "title": "El Paraíso de Gauguin",
                      "description": "El artista postimpresionista francés Paul Gauguin se mudó a Tahití en 1891, inspirado por la vida, los colores y la cultura polinesios. Sus vibrantes pinturas de personas y paisajes tahitianos son algunas de las obras de arte más reconocibles del mundo."
                  },
                  {
                      "icon": "anchor",
                      "title": "118 Islas",
                      "description": "La Polinesia Francesa comprende 118 islas y atolones dispersos en un área oceánica del tamaño de Europa — pero la superficie terrestre total es más pequeña que el estado de Rhode Island de EE.UU. Cada grupo de islas tiene su propio carácter y cultura distintos."
                  },
                  {
                      "icon": "sports",
                      "title": "Meca del Surf",
                      "description": "Teahupo'o en Tahití es considerada una de las rompientes de surf más peligrosas y espectaculares del mundo — una ola masiva y hueca que rompe sobre un arrecife de coral afilado en aguas muy poco profundas. Surfistas profesionales de todo el mundo vienen a desafiarla."
                  }
              ]
          }
      }
  },
  {
      "slug": "gabon",
      "flagCode": "ga",
      "continent": "Africa",
      "population": "2.5M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Gabon",
              "capital": "Libreville",
              "flagDescription": "Gabon's flag has three equal horizontal stripes — green at the top, yellow in the middle, and blue at the bottom. Green represents the country's vast tropical forests, yellow symbolizes the equator that passes right through Gabon and the sunshine, and blue stands for the Atlantic Ocean on its coast.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Nation of Forests",
                      "description": "About 80% of Gabon is covered by rainforest, making it one of Earth's most forested and biodiverse countries. The trees here absorb huge amounts of carbon dioxide, helping to keep our planet cool."
                  },
                  {
                      "icon": "pets",
                      "title": "Forest Elephants",
                      "description": "Gabon protects more than half of the world's remaining forest elephants — a smaller subspecies that lives in dense jungle and is rarely seen. They help the forest grow by spreading seeds."
                  },
                  {
                      "icon": "sunny",
                      "title": "On the Equator",
                      "description": "Gabon lies directly on the equator, meaning it gets almost exactly 12 hours of daylight and 12 hours of night every single day of the year."
                  }
              ]
          },
          "es": {
              "name": "Gabón",
              "capital": "Libreville",
              "flagDescription": "La bandera de Gabón tiene tres franjas horizontales iguales: verde arriba, amarilla en el centro y azul abajo. El verde representa los vastos bosques tropicales del país, el amarillo simboliza el ecuador que atraviesa Gabón y el sol, y el azul representa el Océano Atlántico en su costa.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Nación de bosques",
                      "description": "Aproximadamente el 80% de Gabón está cubierto por bosque tropical, lo que lo convierte en uno de los países más forestados y biodiversos de la Tierra. Sus árboles absorben grandes cantidades de CO₂."
                  },
                  {
                      "icon": "pets",
                      "title": "Elefantes forestales",
                      "description": "Gabón protege a más de la mitad de los elefantes forestales restantes del mundo, una subespecie más pequeña que vive en la selva densa y que ayuda al bosque a crecer dispersando semillas."
                  },
                  {
                      "icon": "sunny",
                      "title": "En el ecuador",
                      "description": "Gabón está situado directamente sobre el ecuador, lo que significa que tiene casi exactamente 12 horas de luz solar y 12 horas de noche todos los días del año."
                  }
              ]
          }
      }
  },
  {
      "slug": "gambia",
      "flagCode": "gm",
      "continent": "Africa",
      "population": "2.4M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Gambia",
              "capital": "Banjul",
              "flagDescription": "The Gambia's flag has three horizontal stripes — red at the top, blue in the middle, and green at the bottom — separated by thin white borders. Red represents the sun and the dry savanna, blue symbolizes the mighty Gambia River that runs through the entire country, green stands for forests and crops, and white represents unity and peace.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Africa's Smallest Country",
                      "description": "The Gambia is the smallest country on mainland Africa — a thin strip of land on both sides of the Gambia River, entirely surrounded by Senegal. You can drive across it in just a few hours!"
                  },
                  {
                      "icon": "pets",
                      "title": "Birdwatcher's Paradise",
                      "description": "Despite its tiny size, The Gambia has over 580 bird species recorded — one of the highest densities of birdlife in the world. Colorful kingfishers, storks, and eagles fill the mangroves and forests."
                  },
                  {
                      "icon": "music_note",
                      "title": "The Kora",
                      "description": "The kora — a beautiful 21-string bridge harp — was born in the Gambia/Senegal region and is one of West Africa's most magnificent instruments. Its music sounds like flowing water."
                  }
              ]
          },
          "es": {
              "name": "Gambia",
              "capital": "Banjul",
              "flagDescription": "La bandera de Gambia tiene tres franjas horizontales: roja arriba, azul en el centro y verde abajo, separadas por delgados bordes blancos. El rojo representa el sol y la sabana seca, el azul simboliza el poderoso río Gambia que atraviesa todo el país, el verde representa los bosques y los cultivos, y el blanco representa la unidad y la paz.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "El país más pequeño de África",
                      "description": "¡Gambia es el país más pequeño de África continental, una delgada franja de tierra a ambos lados del río Gambia, completamente rodeada por Senegal! Se puede cruzar en pocas horas."
                  },
                  {
                      "icon": "pets",
                      "title": "Paraíso para los observadores de aves",
                      "description": "A pesar de su pequeño tamaño, Gambia tiene registradas más de 580 especies de aves, una de las densidades más altas del mundo. Coloridos martines pescadores, cigüeñas y águilas llenan los manglares."
                  },
                  {
                      "icon": "music_note",
                      "title": "La kora",
                      "description": "La kora, una hermosa arpa de 21 cuerdas, nació en la región de Gambia/Senegal y es uno de los instrumentos más magníficos de África Occidental. Su música suena como agua fluyendo."
                  }
              ]
          }
      }
  },
  {
      "slug": "georgia",
      "flagCode": "ge",
      "continent": "Asia",
      "population": "4.0M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Georgia",
              "capital": "Tbilisi",
              "flagDescription": "Georgia's flag has five red squares (one in the center, four in the corners) on a white background, each containing a cross. This unique design represents Georgia's Christian heritage. The cross is the historic symbol of Georgia, representing the four evangelists.",
              "funFacts": [
                  {
                      "icon": "wine_bar",
                      "title": "Ancient Wine Country",
                      "description": "Georgia is considered the birthplace of wine — grape cultivation and fermentation began here around 6000 BC. Georgian wine-making traditions using clay vessels called qvevri are UNESCO-protected."
                  },
                  {
                      "icon": "terrain",
                      "title": "Caucasus Mountains",
                      "description": "The majestic Caucasus Mountains form Georgia's border and are home to Mount Elbrus, the highest peak in Europe at 5,642 meters. The mountains offer spectacular hiking and wildlife."
                  },
                  {
                      "icon": "language",
                      "title": "Unique Script",
                      "description": "Georgian has one of the world's oldest alphabets still in use — developed around 430 AD. The Georgian script is so distinctive it's taught in Georgian schools as a source of national pride."
                  }
              ]
          },
          "es": {
              "name": "Georgia",
              "capital": "Tiflis",
              "flagDescription": "La bandera de Georgia tiene cinco cuadrados rojos (uno en el centro, cuatro en las esquinas) sobre un fondo blanco, cada uno contiene una cruz. Este diseño único representa el patrimonio cristiano de Georgia. La cruz es el símbolo histórico de Georgia, que representa a los cuatro evangelistas.",
              "funFacts": [
                  {
                      "icon": "wine_bar",
                      "title": "País de vino antiguo",
                      "description": "Georgia es considerada la cuna del vino: el cultivo de uvas y la fermentación comenzaron aquí alrededor del 6000 a.C. Las tradiciones georgianas de elaboración de vino usando vasijas de barro llamadas qvevri están protegidas por la UNESCO."
                  },
                  {
                      "icon": "terrain",
                      "title": "Montañas del Cáucaso",
                      "description": "Las majestuosas montañas del Cáucaso forman la frontera de Georgia y albergan el monte Elbrus, el pico más alto de Europa con 5.642 metros. Las montañas ofrecen senderismo espectacular y vida silvestre."
                  },
                  {
                      "icon": "language",
                      "title": "Script único",
                      "description": "El georgiano tiene uno de los alfabetos más antiguos del mundo que aún se usa, desarrollado alrededor del 430 d.C. El script georgiano es tan distintivo que se enseña en las escuelas georgianas como fuente de orgullo nacional."
                  }
              ]
          }
      }
  },
  {
      "slug": "germany",
      "flagCode": "de",
      "continent": "Europe",
      "population": "83.5M",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Germany",
              "capital": "Berlin",
              "flagDescription": "Germany's flag has three horizontal stripes of black, red, and gold (sometimes called golden yellow). These colors were famously worn by the Lützow Free Corps, a volunteer army unit that fought against Napoleon in the early 1800s. The black-red-gold combination became a symbol of German unity and freedom during the revolutions of 1848. Today these colors represent democracy, unity, and the German people's commitment to freedom after the dark years of World War II.",
              "funFacts": [
                  {
                      "icon": "engineering",
                      "title": "Engineering Powerhouse",
                      "description": "Germany is one of the world's greatest engineering and innovation countries. German companies like Volkswagen, BMW, Mercedes-Benz, Siemens, and Bosch are global industry leaders. Germany has the most patents filed per year in Europe and a long tradition of technical excellence."
                  },
                  {
                      "icon": "sports_bar",
                      "title": "Oktoberfest Tradition",
                      "description": "Munich's Oktoberfest, held every autumn, is the world's largest folk festival, drawing over 6 million visitors from around the globe. The tradition began in 1810 as a wedding celebration for Crown Prince Ludwig and has grown into a spectacular two-week celebration of Bavarian culture, music, and beer."
                  },
                  {
                      "icon": "castle",
                      "title": "Neuschwanstein Castle",
                      "description": "Neuschwanstein Castle in Bavaria is one of the world's most iconic and photographed buildings, set dramatically against mountain forests. Built by King Ludwig II in the 19th century, it directly inspired Walt Disney's Sleeping Beauty Castle and Cinderella's Castle at Disneyland."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Gutenberg's Printing Press",
                      "description": "Johannes Gutenberg, born in Mainz, Germany, invented the movable-type printing press around 1440, one of the most revolutionary inventions in human history. His Gutenberg Bible was the first major book printed in Europe, and his invention made books affordable and literacy possible for ordinary people everywhere."
                  }
              ]
          },
          "es": {
              "name": "Alemania",
              "capital": "Berlín",
              "flagDescription": "La bandera de Alemania tiene tres franjas horizontales de negro, rojo y dorado (a veces llamado amarillo dorado). Estos colores fueron usados famosamente por el Cuerpo Libre de Lützow, una unidad del ejército voluntario que luchó contra Napoleón a principios del siglo XIX. La combinación negro-rojo-dorado se convirtió en símbolo de unidad y libertad alemanas durante las revoluciones de 1848. Hoy estos colores representan la democracia, la unidad y el compromiso del pueblo alemán con la libertad después de los oscuros años de la Segunda Guerra Mundial.",
              "funFacts": [
                  {
                      "icon": "engineering",
                      "title": "Potencia de la Ingeniería",
                      "description": "Alemania es uno de los países de ingeniería e innovación más grandes del mundo. Empresas alemanas como Volkswagen, BMW, Mercedes-Benz, Siemens y Bosch son líderes industriales globales. Alemania presenta el mayor número de patentes al año en Europa y tiene una larga tradición de excelencia técnica."
                  },
                  {
                      "icon": "sports_bar",
                      "title": "Tradición del Oktoberfest",
                      "description": "El Oktoberfest de Múnich, celebrado cada otoño, es el festival popular más grande del mundo, atrayendo a más de 6 millones de visitantes de todo el mundo. La tradición comenzó en 1810 como celebración de la boda del Príncipe Heredero Luis y ha crecido hasta convertirse en una espectacular celebración de dos semanas de la cultura bávara, la música y la cerveza."
                  },
                  {
                      "icon": "castle",
                      "title": "Castillo de Neuschwanstein",
                      "description": "El Castillo de Neuschwanstein en Baviera es uno de los edificios más icónicos y fotografiados del mundo, situado dramáticamente entre bosques de montaña. Construido por el Rey Luis II en el siglo XIX, inspiró directamente el Castillo de la Bella Durmiente y el Castillo de la Cenicienta de Walt Disney en Disneyland."
                  },
                  {
                      "icon": "menu_book",
                      "title": "La Imprenta de Gutenberg",
                      "description": "Johannes Gutenberg, nacido en Maguncia, Alemania, inventó la imprenta de tipos móviles alrededor de 1440, uno de los inventos más revolucionarios en la historia humana. Su Biblia de Gutenberg fue el primer libro importante impreso en Europa, y su invento hizo que los libros fueran asequibles y la alfabetización posible para la gente común en todas partes."
                  }
              ]
          }
      }
  },
  {
      "slug": "ghana",
      "flagCode": "gh",
      "continent": "Africa",
      "population": "33.7M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Ghana",
              "capital": "Accra",
              "flagDescription": "Ghana's flag has three horizontal stripes of red, gold, and green with a black star at the center. Red represents blood shed for independence, gold symbolizes mineral wealth, green represents forests, and the black star stands for African freedom.",
              "funFacts": [
                  {
                      "icon": "star",
                      "title": "First Independent African Nation",
                      "description": "Ghana was the first sub-Saharan African country to gain independence from colonial rule, achieving it in 1957 under Kwame Nkrumah's leadership."
                  },
                  {
                      "icon": "shopping_bag",
                      "title": "Kente Cloth",
                      "description": "Kente cloth, woven from silk and cotton, is one of Ghana's greatest cultural treasures. Originally worn only by royalty, each pattern has symbolic meaning."
                  },
                  {
                      "icon": "forest",
                      "title": "Cocoa Capital",
                      "description": "Ghana is the world's second-largest producer of cocoa beans, which are used to make chocolate. About 40% of the world's cocoa comes from West Africa."
                  }
              ]
          },
          "es": {
              "name": "Ghana",
              "capital": "Acra",
              "flagDescription": "La bandera de Ghana tiene tres franjas horizontales de rojo, oro y verde con una estrella negra en el centro. El rojo representa la sangre derramada por la independencia, el oro simboliza la riqueza mineral, el verde representa los bosques, y la estrella negra representa la libertad africana.",
              "funFacts": [
                  {
                      "icon": "star",
                      "title": "Primera nación africana independiente",
                      "description": "Ghana fue el primer país del África subsahariana en independizarse del dominio colonial, lográndolo en 1957 bajo el liderazgo de Kwame Nkrumah."
                  },
                  {
                      "icon": "shopping_bag",
                      "title": "Tela kente",
                      "description": "La tela kente, tejida con seda y algodón, es uno de los mayores tesoros culturales de Ghana. Originalmente usada solo por la realeza, cada patrón tiene un significado simbólico."
                  },
                  {
                      "icon": "forest",
                      "title": "Capital del cacao",
                      "description": "Ghana es el segundo mayor productor mundial de granos de cacao, usados para hacer chocolate. Aproximadamente el 40% del cacao del mundo proviene de África Occidental."
                  }
              ]
          }
      }
  },
  {
      "slug": "gibraltar",
      "flagCode": "gi",
      "continent": "Europe",
      "population": "38K",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Gibraltar",
              "capital": "Gibraltar",
              "flagDescription": "Gibraltar's flag has two horizontal bands — white on top and red on the bottom — with a three-towered castle in red at the center and a golden key hanging below it. The castle and key come from Gibraltar's coat of arms and represent its legendary status as the 'Key to the Mediterranean.' The red castle symbolizes the great fortifications built to defend this strategically vital rock at the entrance to the Mediterranean Sea.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "The Rock of Gibraltar",
                      "description": "The Rock of Gibraltar is a massive 426-meter limestone monolith that dominates the landscape and has been of immense strategic importance for thousands of years. The phrase \"solid as the Rock of Gibraltar\" is used worldwide to describe something incredibly strong and dependable."
                  },
                  {
                      "icon": "pets",
                      "title": "Barbary Macaques",
                      "description": "Gibraltar is the only place in all of Europe where wild monkeys — called Barbary Macaques — live freely. Legend says that as long as the apes remain in Gibraltar, it will stay under British control. Winston Churchill himself ordered monkeys to be brought in when their numbers fell during World War II!"
                  },
                  {
                      "icon": "waves",
                      "title": "Two Seas Meeting",
                      "description": "From Gibraltar, you can see two different bodies of water meeting: the Atlantic Ocean and the Mediterranean Sea. On a clear day, you can even see the coast of Morocco in Africa, just 14 kilometers away — Europe and Africa are closer here than almost anywhere else."
                  },
                  {
                      "icon": "history",
                      "title": "Neanderthal Home",
                      "description": "Gibraltar was one of the last places on Earth where Neanderthals lived before they became extinct about 24,000 years ago. Skulls and tools of Neanderthals have been found in the caves of Gibraltar, giving scientists an extraordinary window into our prehistoric cousins."
                  }
              ]
          },
          "es": {
              "name": "Gibraltar",
              "capital": "Gibraltar",
              "flagDescription": "La bandera de Gibraltar tiene dos bandas horizontales — blanco arriba y rojo abajo — con un castillo de tres torres en rojo en el centro y una llave dorada colgando debajo. El castillo y la llave provienen del escudo de armas de Gibraltar y representan su legendario estatus como la 'Llave del Mediterráneo'. El castillo rojo simboliza las grandes fortificaciones construidas para defender esta roca estratégicamente vital en la entrada del Mar Mediterráneo.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "El Peñón de Gibraltar",
                      "description": "El Peñón de Gibraltar es un enorme monolito de piedra caliza de 426 metros que domina el paisaje y ha sido de inmenso valor estratégico durante miles de años. La frase \"sólido como el Peñón de Gibraltar\" se usa en todo el mundo para describir algo increíblemente fuerte y confiable."
                  },
                  {
                      "icon": "pets",
                      "title": "Macacos de Berbería",
                      "description": "Gibraltar es el único lugar en toda Europa donde los monos salvajes — llamados Macacos de Berbería — viven libremente. La leyenda dice que mientras los monos permanezcan en Gibraltar, permanecerá bajo control británico. ¡El propio Winston Churchill ordenó traer monos cuando su número disminuyó durante la Segunda Guerra Mundial!"
                  },
                  {
                      "icon": "waves",
                      "title": "Dos Mares que se Encuentran",
                      "description": "Desde Gibraltar, se pueden ver dos masas de agua diferentes encontrándose: el Océano Atlántico y el Mar Mediterráneo. En un día claro, incluso se puede ver la costa de Marruecos en África, a solo 14 kilómetros de distancia — Europa y África están más cerca aquí que en casi cualquier otro lugar."
                  },
                  {
                      "icon": "history",
                      "title": "Hogar de los Neandertales",
                      "description": "Gibraltar fue uno de los últimos lugares de la Tierra donde vivieron los neandertales antes de extinguirse hace unos 24.000 años. Cráneos y herramientas de neandertales han sido encontrados en las cuevas de Gibraltar, dando a los científicos una extraordinaria ventana hacia nuestros primos prehistóricos."
                  }
              ]
          }
      }
  },
  {
      "slug": "greece",
      "flagCode": "gr",
      "continent": "Europe",
      "population": "10.4M",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Greece",
              "capital": "Athens",
              "flagDescription": "Greece's flag has nine alternating horizontal stripes of blue and white, with a white cross on a blue square in the upper-left corner. The nine stripes represent the nine syllables of the Greek phrase 'Eleftheria i Thanatos,' meaning 'Freedom or Death' — the motto of the Greek War of Independence. The blue symbolizes the sea and sky, the white represents the purity of the struggle for independence, and the cross represents the Greek Orthodox Christian faith.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Birthplace of Democracy",
                      "description": "Ancient Athens invented democracy around 500 BCE — the idea that citizens should have a say in how their government works. This revolutionary concept, born in a small city-state in Greece over 2,500 years ago, is now the foundation of governments for billions of people around the world."
                  },
                  {
                      "icon": "sports",
                      "title": "First Olympic Games",
                      "description": "The Olympic Games began in ancient Olympia, Greece, in 776 BCE as a religious festival honoring the god Zeus. Athletes came from all over the Greek world to compete, and wars were even stopped during the games. The modern Olympic Games were revived in Athens in 1896."
                  },
                  {
                      "icon": "architecture",
                      "title": "Acropolis of Athens",
                      "description": "The Acropolis of Athens, crowned by the Parthenon temple, is one of the most recognized ancient structures in the world. Built 2,500 years ago, it was dedicated to the goddess Athena and is a symbol of ancient Greek civilization, beauty, and intellectual achievement."
                  },
                  {
                      "icon": "local_dining",
                      "title": "Mediterranean Diet",
                      "description": "Greece is famous for the Mediterranean diet — olive oil, fresh vegetables, fish, legumes, and feta cheese — considered one of the healthiest diets in the world. The island of Ikaria is famous for having one of the highest concentrations of centenarians (people living to 100+) on Earth, linked to this wonderful diet and lifestyle."
                  }
              ]
          },
          "es": {
              "name": "Grecia",
              "capital": "Atenas",
              "flagDescription": "La bandera de Grecia tiene nueve franjas horizontales alternativas de azul y blanco, con una cruz blanca sobre un cuadrado azul en la esquina superior izquierda. Las nueve franjas representan las nueve sílabas de la frase griega 'Eleftheria i Thanatos', que significa 'Libertad o Muerte', el lema de la Guerra de Independencia griega. El azul simboliza el mar y el cielo, el blanco representa la pureza de la lucha por la independencia, y la cruz representa la fe cristiana ortodoxa griega.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Cuna de la Democracia",
                      "description": "La antigua Atenas inventó la democracia alrededor del 500 a.C., la idea de que los ciudadanos deben tener voz en el funcionamiento de su gobierno. Este concepto revolucionario, nacido en una pequeña ciudad-estado de Grecia hace más de 2.500 años, es ahora la base de los gobiernos de miles de millones de personas en todo el mundo."
                  },
                  {
                      "icon": "sports",
                      "title": "Los Primeros Juegos Olímpicos",
                      "description": "Los Juegos Olímpicos comenzaron en la antigua Olimpia, Grecia, en el 776 a.C. como un festival religioso en honor al dios Zeus. Atletas de todo el mundo griego venían a competir, e incluso las guerras se detenían durante los juegos. Los modernos Juegos Olímpicos fueron revividos en Atenas en 1896."
                  },
                  {
                      "icon": "architecture",
                      "title": "La Acrópolis de Atenas",
                      "description": "La Acrópolis de Atenas, coronada por el templo del Partenón, es una de las estructuras antiguas más reconocidas del mundo. Construida hace 2.500 años, estaba dedicada a la diosa Atenea y es símbolo de la civilización, belleza y logro intelectual de la antigua Grecia."
                  },
                  {
                      "icon": "local_dining",
                      "title": "La Dieta Mediterránea",
                      "description": "Grecia es famosa por la dieta mediterránea — aceite de oliva, verduras frescas, pescado, legumbres y queso feta — considerada una de las dietas más saludables del mundo. La isla de Ikaria es famosa por tener una de las concentraciones más altas de centenarios (personas que viven hasta 100 años o más) de la Tierra, relacionada con esta maravillosa dieta y estilo de vida."
                  }
              ]
          }
      }
  },
  {
      "slug": "greenland",
      "flagCode": "gl",
      "continent": "North America",
      "population": "56.4K",
      "region": "North Atlantic",
      "translations": {
        "en": {
          "name": "Greenland",
          "capital": "Nuuk",
          "flagDescription": "Greenland's flag consists of two equal horizontal disks, one red and one white, representing the sun setting over the ice. Red and white are the colors of the Danish flag. The flag symbolizes Greenland's connection to Denmark and its Arctic identity.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Arctic Wonderland",
            "description": "Greenland is the world's largest island, mostly covered in ice, with pristine Arctic landscapes."
          },
          {
            "icon": "nature",
            "title": "Northern Lights",
            "description": "Greenland offers spectacular displays of the Northern Lights (Aurora Borealis) during winter months."
          },
          {
            "icon": "public",
            "title": "Autonomous Territory",
            "description": "Greenland is an autonomous territory within the Kingdom of Denmark."
          },
          {
            "icon": "public",
            "title": "Inuit Heritage",
            "description": "Greenland has a rich Inuit (Kalaallit) cultural heritage with traditional hunting and fishing practices."
          }
          ]
        },
        "es": {
          "name": "Groenlandia",
          "capital": "Nuuk",
          "flagDescription": "La bandera de Groenlandia consiste en dos discos horizontales iguales, uno rojo y uno blanco, representando el sol poniéndose sobre el hielo. El rojo y blanco son los colores de la bandera danesa. La bandera simboliza la conexión de Groenlandia con Dinamarca y su identidad ártica.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Maravilla Ártica",
            "description": "Groenlandia es la isla más grande del mundo, mayormente cubierta de hielo, con paisajes árticos prístinos."
          },
          {
            "icon": "nature",
            "title": "Luces Polares",
            "description": "Groenlandia ofrece espectáculos espectaculares de las Luces Polares (Aurora Boreal) durante los meses de invierno."
          },
          {
            "icon": "public",
            "title": "Territorio Autónomo",
            "description": "Groenlandia es un territorio autónomo dentro del Reino de Dinamarca."
          },
          {
            "icon": "public",
            "title": "Herencia Inuit",
            "description": "Groenlandia tiene un rico patrimonio cultural inuit (Kalaallit) con prácticas tradicionales de caza y pesca."
          }
          ]
        }
      }
  },
  {
      "slug": "grenada",
      "flagCode": "gd",
      "continent": "North America",
      "population": "124K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Grenada",
          "capital": "Saint George's",
          "flagDescription": "Grenada's flag has a rectangle divided into gold and green triangles in the hoist corner, with red and green fields. A red border surrounds the flag. A nutmeg pod is shown, representing the island's spice industry. Yellow, green, and red represent the Caribbean people.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Spice Island",
            "description": "Grenada is known as the Spice Island, famous for growing nutmeg, cinnamon, and other spices."
          },
          {
            "icon": "waves",
            "title": "Sandy Beaches",
            "description": "Grenada has beautiful white sand beaches perfect for swimming, snorkeling, and diving."
          },
          {
            "icon": "public",
            "title": "Island Nation",
            "description": "Grenada consists of the main island of Grenada plus smaller islands like Carriacou and Petite Martinique."
          },
          {
            "icon": "celebration",
            "title": "Carnival Festival",
            "description": "Grenada's Carnival is celebrated with music, dancing, costumes, and traditional Caribbean food."
          }
          ]
        },
        "es": {
          "name": "Granada",
          "capital": "Saint George's",
          "flagDescription": "La bandera de Granada tiene un rectángulo dividido en triángulos oro y verde en la esquina del asta, con campos rojo y verde. Un borde rojo rodea la bandera. Una vaina de nuez moscada se muestra, representando la industria especiera de la isla. El amarillo, verde y rojo representan al pueblo caribeño.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Isla de las Especias",
            "description": "Granada es conocida como la Isla de las Especias, famosa por cultivar nuez moscada, canela y otras especias."
          },
          {
            "icon": "waves",
            "title": "Playas Arenosas",
            "description": "Granada tiene hermosas playas de arena blanca perfectas para nadar, buceo de snorkel y buceo."
          },
          {
            "icon": "public",
            "title": "Nación Insular",
            "description": "Granada consiste en la isla principal de Granada más islas más pequeñas como Carriacou y Petite Martinique."
          },
          {
            "icon": "celebration",
            "title": "Festival de Carnaval",
            "description": "El Carnaval de Granada se celebra con música, baile, disfraces y comida caribeña tradicional."
          }
          ]
        }
      }
  },
  {
      "slug": "guadeloupe",
      "flagCode": "gp",
      "continent": "North America",
      "population": "395K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Guadeloupe",
          "capital": "Basse-Terre",
          "flagDescription": "Guadeloupe uses the French flag (blue, white, and red vertical stripes) as it is an overseas region of France. The islands have a tropical climate and blend French and Caribbean cultures.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Tropical Islands",
            "description": "Guadeloupe is a group of tropical islands in the Caribbean known for beautiful beaches and lush vegetation."
          },
          {
            "icon": "waves",
            "title": "Diving and Snorkeling",
            "description": "The islands offer excellent diving and snorkeling opportunities with colorful coral reefs and diverse marine life."
          },
          {
            "icon": "public",
            "title": "French Caribbean",
            "description": "As an overseas region of France, Guadeloupe combines French and Caribbean cultural influences."
          },
          {
            "icon": "nature",
            "title": "La Soufrière Volcano",
            "description": "Guadeloupe is home to the active La Soufrière volcano, which remains one of the Caribbean's most famous peaks."
          }
          ]
        },
        "es": {
          "name": "Guadalupe",
          "capital": "Basse-Terre",
          "flagDescription": "Guadalupe utiliza la bandera francesa (franjas verticales azul, blanco y rojo) ya que es una región de ultramar de Francia. Las islas tienen un clima tropical y combinan culturas francesas y caribeñas.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Islas Tropicales",
            "description": "Guadalupe es un grupo de islas tropicales en el Caribe conocidas por hermosas playas y vegetación exuberante."
          },
          {
            "icon": "waves",
            "title": "Buceo y Snorkel",
            "description": "Las islas ofrecen excelentes oportunidades de buceo y snorkel con arrecifes de coral coloridos y vida marina diversa."
          },
          {
            "icon": "public",
            "title": "Caribe Francés",
            "description": "Como región de ultramar de Francia, Guadalupe combina influencias culturales francesas y caribeñas."
          },
          {
            "icon": "nature",
            "title": "Volcán La Soufrière",
            "description": "Guadalupe es hogar del volcán activo La Soufrière, que sigue siendo uno de los picos más famosos del Caribe."
          }
          ]
        }
      }
  },
  {
      "slug": "guam",
      "flagCode": "gu",
      "continent": "Oceania",
      "population": "154K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Guam",
              "capital": "Hagåtña",
              "flagDescription": "Guam's flag has a deep blue background with a thin red border and the territory seal in the center: an oval scene showing a proa (traditional sailing canoe) gliding across Agana Bay, with a beach and palm tree on the right, and the word GUAM in red on a white banner below. The proa represents the ancient Chamorro seafaring culture that has lived on this island for over 4,000 years.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Ancient Chamorro Culture",
                      "description": "The Chamorro people have lived on Guam for over 4,000 years. They built remarkable stone pillars called latte stones — used as foundations for high-status houses — that still stand today as powerful symbols of Chamorro heritage and resilience."
                  },
                  {
                      "icon": "anchor",
                      "title": "Strategic Pacific Hub",
                      "description": "Guam is a US territory and a critical military hub in the Pacific, home to major US Air Force and Navy bases. Its strategic location — roughly equidistant between Hawaii and the Philippines — has made it militarily significant since the 19th century."
                  },
                  {
                      "icon": "waves",
                      "title": "Typhoon Alley",
                      "description": "Guam sits in one of the most typhoon-prone areas in the world. The island is frequently hit by powerful tropical storms, and Chamorros have developed deep resilience and strong community bonds through centuries of recovering and rebuilding together."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Fiesta Culture",
                      "description": "Fiestas — community celebrations honoring patron saints — are the heart of Chamorro social life. Every village has its own patron saint and hosts an annual fiesta with traditional food (especially red rice and barbecue), music, dancing, and games for everyone."
                  }
              ]
          },
          "es": {
              "name": "Guam",
              "capital": "Hagåtña",
              "flagDescription": "La bandera de Guam tiene un fondo azul intenso con un delgado borde rojo y el sello del territorio en el centro: una escena oval que muestra una proa (canoa de vela tradicional) deslizándose por la Bahía de Agana, con una playa y una palmera a la derecha, y la palabra GUAM en rojo sobre un banner blanco abajo. La proa representa la antigua cultura marinera chamorra que ha vivido en esta isla durante más de 4.000 años.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Antigua Cultura Chamorra",
                      "description": "El pueblo chamorro ha vivido en Guam durante más de 4.000 años. Construyeron notables pilares de piedra llamados piedras latte — usados como cimientos para casas de alto estatus — que aún permanecen en pie hoy como poderosos símbolos del patrimonio y la resiliencia chamorra."
                  },
                  {
                      "icon": "anchor",
                      "title": "Centro Estratégico del Pacífico",
                      "description": "Guam es un territorio de EE.UU. y un centro militar crítico en el Pacífico, hogar de importantes bases de la Fuerza Aérea y la Marina de EE.UU. Su ubicación estratégica — aproximadamente equidistante entre Hawái y Filipinas — lo ha hecho militarmente significativo desde el siglo XIX."
                  },
                  {
                      "icon": "waves",
                      "title": "El Callejón de los Tifones",
                      "description": "Guam se encuentra en una de las zonas más propensas a tifones del mundo. La isla es frecuentemente azotada por poderosas tormentas tropicales, y los chamorros han desarrollado una profunda resiliencia y fuertes lazos comunitarios a través de siglos de recuperación y reconstrucción juntos."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Cultura de la Fiesta",
                      "description": "Las fiestas — celebraciones comunitarias en honor a los santos patronos — son el corazón de la vida social chamorra. Cada pueblo tiene su propio santo patrón y organiza una fiesta anual con comida tradicional (especialmente arroz rojo y barbacoa), música, baile y juegos para todos."
                  }
              ]
          }
      }
  },
  {
      "slug": "guatemala",
      "flagCode": "gt",
      "continent": "North America",
      "population": "17.1M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Guatemala",
          "capital": "Guatemala City",
          "flagDescription": "Guatemala's flag has three vertical stripes of light blue, white, and light blue. The white stripe displays a simplified version of the national coat of arms. The light blue represents the sky and oceans, while the white represents peace and purity.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Mayan Civilization",
            "description": "Guatemala is the heart of ancient Mayan civilization, with significant ruins and archaeological sites throughout the country."
          },
          {
            "icon": "terrain",
            "title": "Tikal Ruins",
            "description": "Tikal is one of the largest urban centers of Mayan civilization, located in the Petén rainforest."
          },
          {
            "icon": "landscape",
            "title": "Colorful Markets",
            "description": "Guatemala is famous for its vibrant indigenous markets with traditional clothing, textiles, and crafts."
          },
          {
            "icon": "nature",
            "title": "Lake Atitlán",
            "description": "Lake Atitlán is surrounded by volcanoes and indigenous villages, making it one of Central America's most beautiful destinations."
          }
          ]
        },
        "es": {
          "name": "Guatemala",
          "capital": "Ciudad de Guatemala",
          "flagDescription": "La bandera de Guatemala tiene tres franjas verticales de azul claro, blanco y azul claro. La franja blanca muestra una versión simplificada del escudo de armas nacional. El azul claro representa el cielo y los océanos, mientras que el blanco representa la paz y la pureza.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Civilización Maya",
            "description": "Guatemala es el corazón de la civilización maya antigua, con ruinas significativas y sitios arqueológicos en todo el país."
          },
          {
            "icon": "terrain",
            "title": "Ruinas de Tikal",
            "description": "Tikal es uno de los mayores centros urbanos de la civilización maya, ubicado en la selva tropical de Petén."
          },
          {
            "icon": "landscape",
            "title": "Mercados Coloridos",
            "description": "Guatemala es famosa por sus mercados indígenas vibrantes con ropa tradicional, textiles y artesanías."
          },
          {
            "icon": "nature",
            "title": "Lago Atitlán",
            "description": "El Lago Atitlán está rodeado de volcanes y pueblos indígenas, lo que lo convierte en uno de los destinos más hermosos de América Central."
          }
          ]
        }
      }
  },
  {
      "slug": "guernsey",
      "flagCode": "gg",
      "continent": "Europe",
      "population": "65K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Guernsey",
              "capital": "St. Peter Port",
              "flagDescription": "Guernsey's flag features a red cross of St. George on a white background, with a golden cross of Burgundy placed within the red cross. The red St. George's cross is shared with England, reflecting Guernsey's historical ties to the English Crown. The golden cross of Burgundy — also called William's Cross — was added in 1985 to distinguish the Guernsey flag from the plain red-on-white Cross of St. George used by England.",
              "funFacts": [
                  {
                      "icon": "agriculture",
                      "title": "Guernsey Cows",
                      "description": "The beautiful golden-brown Guernsey cow breed was developed on this island and is now famous worldwide for producing exceptionally rich, creamy, golden-hued milk. These gentle cows are often called \"Golden Guernsey\" cows and are considered a national treasure of the island."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Floral Gem",
                      "description": "Guernsey has a mild, sunny climate thanks to the Gulf Stream, allowing exotic plants like palm trees and agapanthus to thrive outdoors. The island is famous for its greenhouse-grown flowers, especially freesias and tomatoes, which have been exported to mainland Britain for over a century."
                  },
                  {
                      "icon": "history",
                      "title": "Victor Hugo's Island",
                      "description": "The French author Victor Hugo, who wrote Les Misérables and The Hunchback of Notre-Dame, lived in exile on Guernsey for 15 years. His house, Hauteville House, which he decorated himself in an extraordinary style, is now a museum and one of the island's most visited sites."
                  },
                  {
                      "icon": "anchor",
                      "title": "World War II Occupation",
                      "description": "Guernsey was the only part of the British Crown to be occupied by Nazi Germany during World War II, from 1940 to 1945. The islanders' experiences during the occupation are movingly preserved in the German Occupation Museum and in the book and film The Guernsey Literary and Potato Peel Pie Society."
                  }
              ]
          },
          "es": {
              "name": "Guernsey",
              "capital": "St. Peter Port",
              "flagDescription": "La bandera de Guernsey muestra una cruz roja de San Jorge sobre fondo blanco, con una cruz dorada de Borgoña colocada dentro de la cruz roja. La cruz roja de San Jorge es compartida con Inglaterra, reflejando los lazos históricos de Guernsey con la Corona inglesa. La cruz dorada de Borgoña, también llamada Cruz de Guillermo, fue añadida en 1985 para distinguir la bandera de Guernsey de la simple cruz roja sobre blanco de San Jorge usada por Inglaterra.",
              "funFacts": [
                  {
                      "icon": "agriculture",
                      "title": "Las Vacas de Guernsey",
                      "description": "La hermosa raza de vaca marrón dorada de Guernsey fue desarrollada en esta isla y es ahora mundialmente famosa por producir leche excepcionalmente rica, cremosa y de tono dorado. Estas gentiles vacas a menudo se llaman vacas \"Dorado de Guernsey\" y son consideradas un tesoro nacional de la isla."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Joya Floral",
                      "description": "Guernsey tiene un clima suave y soleado gracias a la Corriente del Golfo, lo que permite que plantas exóticas como palmeras y agapantos prosperen al aire libre. La isla es famosa por sus flores cultivadas en invernadero, especialmente freesias y tomates, que han sido exportados a la Gran Bretaña continental durante más de un siglo."
                  },
                  {
                      "icon": "history",
                      "title": "La Isla de Víctor Hugo",
                      "description": "El autor francés Víctor Hugo, que escribió Los Miserables y El Jorobado de Notre-Dame, vivió en el exilio en Guernsey durante 15 años. Su casa, Hauteville House, que él mismo decoró en un estilo extraordinario, es ahora un museo y uno de los sitios más visitados de la isla."
                  },
                  {
                      "icon": "anchor",
                      "title": "Ocupación de la Segunda Guerra Mundial",
                      "description": "Guernsey fue la única parte de la Corona Británica ocupada por la Alemania nazi durante la Segunda Guerra Mundial, de 1940 a 1945. Las experiencias de los isleños durante la ocupación están conmovedoramente preservadas en el Museo de la Ocupación Alemana y en el libro y película La Sociedad Literaria y del Pastel de Piel de Patata de Guernsey."
                  }
              ]
          }
      }
  },
  {
      "slug": "guinea",
      "flagCode": "gn",
      "continent": "Africa",
      "population": "14.4M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Guinea",
              "capital": "Conakry",
              "flagDescription": "Guinea's flag has three equal vertical stripes of red, yellow, and green — the Pan-African colors in the reverse order of Ghana's flag. Red represents the blood and sacrifice of the people, yellow symbolizes gold and the wealth of the land, and green stands for the country's lush vegetation and forests.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Home of the Djembe",
                      "description": "The djembe drum was born in Guinea and has spread to become one of the most played hand drums on Earth! Its powerful sound is used in ceremonies, celebrations, and music studios worldwide."
                  },
                  {
                      "icon": "water",
                      "title": "West Africa's Water Tower",
                      "description": "The Fouta Djallon highlands in central Guinea are called 'the water tower of West Africa' because major rivers like the Niger, the Gambia, and the Senegal all begin here."
                  },
                  {
                      "icon": "science",
                      "title": "World's Largest Bauxite Reserves",
                      "description": "Guinea holds the world's largest known reserves of bauxite — the ore used to make aluminum. Almost everything made of aluminum, from soda cans to airplanes, could trace its origins here."
                  }
              ]
          },
          "es": {
              "name": "Guinea",
              "capital": "Conakri",
              "flagDescription": "La bandera de Guinea tiene tres franjas verticales iguales de rojo, amarillo y verde, los colores panafricanos en orden inverso al de la bandera de Ghana. El rojo representa la sangre y el sacrificio del pueblo, el amarillo simboliza el oro y la riqueza de la tierra, y el verde representa la exuberante vegetación y los bosques del país.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Cuna del djembé",
                      "description": "¡El djembé nació en Guinea y se ha convertido en uno de los tambores de mano más tocados del mundo! Su poderoso sonido se usa en ceremonias, celebraciones y estudios de música de todo el planeta."
                  },
                  {
                      "icon": "water",
                      "title": "El castillo de agua de África Occidental",
                      "description": "Las tierras altas de Fouta Djallon, en el centro de Guinea, son llamadas \"el castillo de agua de África Occidental\" porque allí nacen grandes ríos como el Níger, el Gambia y el Senegal."
                  },
                  {
                      "icon": "science",
                      "title": "Mayores reservas de bauxita del mundo",
                      "description": "Guinea alberga las mayores reservas conocidas de bauxita del mundo, el mineral que se usa para fabricar aluminio. Casi todo lo hecho de aluminio, desde latas hasta aviones, podría tener sus orígenes aquí."
                  }
              ]
          }
      }
  },
  {
      "slug": "guinea-bissau",
      "flagCode": "gw",
      "continent": "Africa",
      "population": "1.8M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Guinea-Bissau",
              "capital": "Bissau",
              "flagDescription": "Guinea-Bissau's flag has two horizontal stripes — yellow on top and green on the bottom — with a vertical red stripe on the left bearing a black star. The Pan-African colors represent the struggle for independence, and the black star symbolizes African unity and the dignity of the people.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Hippos in the Ocean!",
                      "description": "The Bijagós Archipelago off Guinea-Bissau's coast is one of Africa's most unique biosphere reserves — it's the only place in the world where wild hippos actually swim between ocean islands!"
                  },
                  {
                      "icon": "agriculture",
                      "title": "Cashew Capital",
                      "description": "Cashew nuts are Guinea-Bissau's biggest export. The whole country smells of cashew blossoms in spring, and the cashew tree is a national symbol of livelihood and pride."
                  },
                  {
                      "icon": "music_note",
                      "title": "Land of the Balafon",
                      "description": "The balafon — a wooden xylophone with gourd resonators — is central to Guinea-Bissau's traditional music. The rich, warm tones of this instrument can be heard at every celebration."
                  }
              ]
          },
          "es": {
              "name": "Guinea-Bisáu",
              "capital": "Bisáu",
              "flagDescription": "La bandera de Guinea-Bisáu tiene dos franjas horizontales: amarilla arriba y verde abajo, con una franja roja vertical a la izquierda que lleva una estrella negra. Los colores panafricanos representan la lucha por la independencia, y la estrella negra simboliza la unidad africana y la dignidad del pueblo.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "¡Hipopótamos en el océano!",
                      "description": "¡El archipiélago de las Bijagós frente a la costa de Guinea-Bisáu es uno de los reservas biosféricas más singulares de África! Es el único lugar del mundo donde los hipopótamos salvajes nadan entre islas oceánicas."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Capital del anacardo",
                      "description": "Las nueces de anacardo son el mayor producto de exportación de Guinea-Bisáu. Todo el país huele a flor de anacardo en primavera, y el árbol del anacardo es un símbolo nacional de orgullo."
                  },
                  {
                      "icon": "music_note",
                      "title": "Tierra del balafón",
                      "description": "El balafón, un xilófono de madera con resonadores de calabaza, es central en la música tradicional de Guinea-Bisáu. Sus ricos y cálidos tonos se escuchan en cada celebración."
                  }
              ]
          }
      }
  },
  {
      "slug": "guyana",
      "flagCode": "gy",
      "continent": "South America",
      "population": "804K",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Guyana",
          "capital": "Georgetown",
          "flagDescription": "Guyana's flag features a gold arrowhead on a red field with black and white bands. The gold represents the country's wealth and resources, the red represents the determination of the people, and green represents the agricultural heritage.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Rainforest Paradise",
            "description": "Guyana is home to vast rainforests covering about 80% of the country, with incredible biodiversity."
          },
          {
            "icon": "waves",
            "title": "Kaieteur Falls",
            "description": "Kaieteur Falls is one of the world's highest single-drop waterfalls, a stunning natural wonder."
          },
          {
            "icon": "public",
            "title": "English-Speaking South America",
            "description": "Guyana is the only English-speaking country in South America."
          },
          {
            "icon": "public",
            "title": "Multicultural Nation",
            "description": "Guyana has a diverse population with influences from African, Indian, European, and indigenous cultures."
          }
          ]
        },
        "es": {
          "name": "Guyana",
          "capital": "Georgetown",
          "flagDescription": "La bandera de Guyana presenta una punta de flecha de oro en un campo rojo con bandas negras y blancas. El oro representa la riqueza y los recursos del país, el rojo representa la determinación del pueblo, y el verde representa la herencia agrícola.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Paraíso de la Selva Tropical",
            "description": "Guyana es hogar de vastas selvas tropicales que cubren aproximadamente el 80% del país, con biodiversidad increíble."
          },
          {
            "icon": "waves",
            "title": "Cataratas de Kaieteur",
            "description": "Las Cataratas de Kaieteur es una de las cataratas de caída única más altas del mundo, una maravilla natural impresionante."
          },
          {
            "icon": "public",
            "title": "Sudamérica de Habla Inglesa",
            "description": "Guyana es el único país de habla inglesa en América del Sur."
          },
          {
            "icon": "public",
            "title": "Nación Multicultural",
            "description": "Guyana tiene una población diversa con influencias de culturas africanas, indias, europeas e indígenas."
          }
          ]
        }
      }
  },
  {
      "slug": "haiti",
      "flagCode": "ht",
      "continent": "North America",
      "population": "11.4M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Haiti",
          "capital": "Port-au-Prince",
          "flagDescription": "Haiti's flag has two equal horizontal stripes of blue and red, with a white rectangular panel in the center containing the national coat of arms. The blue represents unity, red represents courage, and white represents purity.",
          "funFacts": [
          {
            "icon": "history",
            "title": "First Black Republic",
            "description": "Haiti was the first independent black nation in the world, achieving independence from France in 1804."
          },
          {
            "icon": "landscape",
            "title": "Hispaniola Island",
            "description": "Haiti shares the island of Hispaniola with the Dominican Republic, making it the second-largest Caribbean island."
          },
          {
            "icon": "public",
            "title": "Unique Creole Culture",
            "description": "Haiti has a unique cultural blend of African, French, and indigenous Taíno influences."
          },
          {
            "icon": "celebration",
            "title": "Vodou Traditions",
            "description": "Haiti is known for its Vodou spiritual traditions, a blend of African religions and Catholicism."
          }
          ]
        },
        "es": {
          "name": "Haití",
          "capital": "Puerto Príncipe",
          "flagDescription": "La bandera de Haití tiene dos franjas horizontales iguales de azul y rojo, con un panel rectangular blanco en el centro que contiene el escudo de armas nacional. El azul representa la unidad, el rojo representa el coraje, y el blanco representa la pureza.",
          "funFacts": [
          {
            "icon": "history",
            "title": "Primera República Negra",
            "description": "Haití fue la primera nación negra independiente del mundo, logrando la independencia de Francia en 1804."
          },
          {
            "icon": "landscape",
            "title": "Isla Hispaniola",
            "description": "Haití comparte la isla de Hispaniola con la República Dominicana, haciéndola la segunda isla más grande del Caribe."
          },
          {
            "icon": "public",
            "title": "Cultura Criolla Única",
            "description": "Haití tiene una mezcla cultural única de influencias africanas, francesas e indígenas taínas."
          },
          {
            "icon": "celebration",
            "title": "Tradiciones Vudú",
            "description": "Haití es conocida por sus tradiciones espirituales vudú, una mezcla de religiones africanas y catolicismo."
          }
          ]
        }
      }
  },
  {
      "slug": "honduras",
      "flagCode": "hn",
      "continent": "North America",
      "population": "10.1M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Honduras",
          "capital": "Tegucigalpa",
          "flagDescription": "Honduras' flag has three horizontal stripes of light blue, white, and light blue, with five blue stars arranged horizontally on the white stripe. The stars represent the five countries of Central America, and the blue represents loyalty.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Mesoamerican Barrier Reef",
            "description": "Honduras is home to part of the Mesoamerican Barrier Reef, the second-largest coral reef system in the world."
          },
          {
            "icon": "landscape",
            "title": "Bay Islands",
            "description": "The Bay Islands of Honduras are paradise for diving and snorkeling, with pristine beaches and clear waters."
          },
          {
            "icon": "history",
            "title": "Mayan Ruins",
            "description": "Honduras contains important Mayan ruins, including Copán, one of the most significant Mayan sites."
          },
          {
            "icon": "nature",
            "title": "Tropical Forests",
            "description": "Honduras is covered with tropical rainforests and is a biodiversity hotspot for Central America."
          }
          ]
        },
        "es": {
          "name": "Honduras",
          "capital": "Tegucigalpa",
          "flagDescription": "La bandera de Honduras tiene tres franjas horizontales de azul claro, blanco y azul claro, con cinco estrellas azules dispuestas horizontalmente en la franja blanca. Las estrellas representan los cinco países de América Central, y el azul representa la lealtad.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Barrera de Coral Mesoamericana",
            "description": "Honduras es hogar de parte de la Barrera de Coral Mesoamericana, el segundo sistema de barrera de coral más grande del mundo."
          },
          {
            "icon": "landscape",
            "title": "Islas de la Bahía",
            "description": "Las Islas de la Bahía de Honduras son un paraíso para el buceo y snorkel, con playas prístinas y aguas claras."
          },
          {
            "icon": "history",
            "title": "Ruinas Mayas",
            "description": "Honduras contiene ruinas mayas importantes, incluyendo Copán, uno de los sitios mayas más significativos."
          },
          {
            "icon": "nature",
            "title": "Selvas Tropicales",
            "description": "Honduras está cubierta con selvas tropicales y es un punto caliente de biodiversidad para América Central."
          }
          ]
        }
      }
  },
  {
      "slug": "hong-kong",
      "flagCode": "hk",
      "continent": "Asia",
      "population": "7.5M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "Hong Kong",
              "capital": "Hong Kong",
              "flagDescription": "Hong Kong's flag is red with a white bauhinia flower in the center. The bauhinia is the official emblem of Hong Kong and appears on the flag with a gold/red background. Red represents China, the bauhinia is Hong Kong's symbol, and the flag has been Hong Kong's since 1997.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Harbor of a Thousand Ships",
                      "description": "Victoria Harbour is one of the world's most spectacular harbors, surrounded by towering skyscrapers and crowned by the Star Ferry — a historic transport that's been running for over 100 years."
                  },
                  {
                      "icon": "terrain",
                      "title": "Peak Tram",
                      "description": "The Peak Tram climbs to Victoria Peak, offering the most incredible views of Hong Kong's skyline and harbor. The tram has been operating since 1888 and is one of the world's steepest cable cars."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Dim Sum Tradition",
                      "description": "Hong Kong's dim sum dining tradition involves small plates of dumplings, steamed buns, and appetizers. Dim sum restaurants are social hubs where people gather for tea and food served by trolleys."
                  }
              ]
          },
          "es": {
              "name": "Hong Kong",
              "capital": "Hong Kong",
              "flagDescription": "La bandera de Hong Kong es roja con una flor de bauhinia blanca en el centro. La bauhinia es el emblema oficial de Hong Kong y aparece en la bandera con un fondo dorado/rojo. El rojo representa a China, la bauhinia es el símbolo de Hong Kong, y la bandera ha sido de Hong Kong desde 1997.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Puerto de mil barcos",
                      "description": "El Puerto de Victoria es uno de los puertos más espectaculares del mundo, rodeado de rascacielos imponentes y coronado por el Star Ferry, un transporte histórico que opera desde hace más de 100 años."
                  },
                  {
                      "icon": "terrain",
                      "title": "Tranvía del Pico",
                      "description": "El Tranvía del Pico sube a Victoria Peak, ofreciendo vistas increíbles del horizonte de Hong Kong y el puerto. El tranvía ha operado desde 1888 y es uno de los teleféricos más empinados del mundo."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Tradición del dim sum",
                      "description": "La tradición culinaria de dim sum de Hong Kong involucra pequeños platos de dumplings, bollos al vapor y aperitivos. Los restaurantes de dim sum son centros sociales donde la gente se reúne para tomar té y comer servido en carros."
                  }
              ]
          }
      }
  },
  {
      "slug": "hungary",
      "flagCode": "hu",
      "continent": "Europe",
      "population": "9.5M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Hungary",
              "capital": "Budapest",
              "flagDescription": "Hungary's flag has three horizontal stripes of red, white, and green — the national colors that became associated with Hungarian freedom and independence during the 1848 revolution against Austrian rule. Red represents strength and the blood of patriots, white symbolizes faithfulness and the purity of Hungary's purpose, and green represents hope for the country's future. The same tricolor was worn as a cockade by revolutionaries fighting for Hungarian freedom.",
              "funFacts": [
                  {
                      "icon": "hot_tub",
                      "title": "City of Spas",
                      "description": "Budapest is known as the \"City of Spas\" because it sits above more than 100 thermal springs that produce hot mineral water. The city has some of the most magnificent bathing houses in the world, including the spectacular Széchenyi Baths, where people have been soaking in warm mineral pools since 1913."
                  },
                  {
                      "icon": "local_dining",
                      "title": "Paprika Kingdom",
                      "description": "Hungary is the kingdom of paprika — the bright red spice made from dried peppers that gives Hungarian food its distinctive flavor. The national dish, goulash (gulyás), is a rich paprika-spiced beef stew, and it's hard to imagine Hungarian cooking without this beloved spice."
                  },
                  {
                      "icon": "music_note",
                      "title": "Musical Giant",
                      "description": "Hungary produced Franz Liszt, one of the greatest piano composers and performers in history. Hungarian folk music also heavily influenced Béla Bartók, another legendary composer. The famous Rubik's Cube was also invented by Hungarian architect Ernő Rubik in 1974!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Budapest Bridges",
                      "description": "Budapest is famously built on two sides of the Danube River (Buda and Pest), connected by nine spectacular bridges including the ornate Chain Bridge, the first permanent bridge to connect the two cities, opened in 1849. The Parliament Building, reflected in the river at night, is one of Europe's most beautiful buildings."
                  }
              ]
          },
          "es": {
              "name": "Hungría",
              "capital": "Budapest",
              "flagDescription": "La bandera de Hungría tiene tres franjas horizontales de rojo, blanco y verde — los colores nacionales que se asociaron con la libertad e independencia húngaras durante la revolución de 1848 contra el dominio austriaco. El rojo representa la fuerza y la sangre de los patriotas, el blanco simboliza la fidelidad y la pureza del propósito de Hungría, y el verde representa la esperanza para el futuro del país. El mismo tricolor fue usado como escarapela por los revolucionarios que luchaban por la libertad húngara.",
              "funFacts": [
                  {
                      "icon": "hot_tub",
                      "title": "Ciudad de los Baños",
                      "description": "Budapest es conocida como la \"Ciudad de los Baños\" porque se asienta sobre más de 100 manantiales termales que producen agua mineral caliente. La ciudad tiene algunas de las casas de baños más magníficas del mundo, incluyendo los espectaculares Baños Széchenyi, donde la gente ha estado remojándose en piscinas minerales cálidas desde 1913."
                  },
                  {
                      "icon": "local_dining",
                      "title": "Reino del Pimentón",
                      "description": "Hungría es el reino del pimentón, la brillante especia roja hecha de pimientos secos que da a la comida húngara su sabor distintivo. El plato nacional, el goulash (gulyás), es un rico estofado de ternera especiado con pimentón, ¡y es difícil imaginar la cocina húngara sin esta amada especia!"
                  },
                  {
                      "icon": "music_note",
                      "title": "Gigante Musical",
                      "description": "Hungría produjo a Franz Liszt, uno de los compositores e intérpretes de piano más grandes de la historia. La música popular húngara también influyó profundamente en Béla Bartók, otro compositor legendario. ¡El famoso Cubo de Rubik también fue inventado por el arquitecto húngaro Ernő Rubik en 1974!"
                  },
                  {
                      "icon": "architecture",
                      "title": "Los Puentes de Budapest",
                      "description": "Budapest está famosamente construida en dos lados del Río Danubio (Buda y Pest), conectadas por nueve espectaculares puentes incluyendo el ornamentado Puente de las Cadenas, el primer puente permanente que unió las dos ciudades, inaugurado en 1849. El Edificio del Parlamento, reflejado en el río por la noche, es uno de los edificios más hermosos de Europa."
                  }
              ]
          }
      }
  },
  {
      "slug": "iceland",
      "flagCode": "is",
      "continent": "Europe",
      "population": "392K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Iceland",
              "capital": "Reykjavik",
              "flagDescription": "Iceland's flag has a red Nordic cross outlined in white set on a deep blue background. The colors represent the dramatic forces that make up Iceland's incredible landscape: blue for the mountains and the Atlantic Ocean, white for the glaciers and Arctic snow that cover much of the island, and red for the volcanic fire that constantly reshapes the land from below. Iceland truly is a land of fire and ice, and these three colors perfectly capture that wild, elemental spirit.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "Land of Fire and Ice",
                      "description": "Iceland sits on the Mid-Atlantic Ridge where two tectonic plates meet, making it one of the most volcanically active places on Earth. The island has around 130 volcanoes, stunning geysers, hot springs, lava fields, and 11% of its surface is covered by glaciers — truly a land of fire and ice!"
                  },
                  {
                      "icon": "auto_stories",
                      "title": "World's Oldest Parliament",
                      "description": "Iceland's Althing, established in 930 CE, is the world's oldest existing parliament. Viking settlers from Norway created this democratic assembly — called a \"Thing\" — where free men gathered annually at Þingvellir to make laws and settle disputes, over 1,000 years ago."
                  },
                  {
                      "icon": "spa",
                      "title": "Blue Lagoon",
                      "description": "The Blue Lagoon, one of Iceland's most famous attractions, is a geothermal spa where milky-blue, mineral-rich water sits at a perfect 38°C year-round. The water gets its unique color from silica and algae, and it's so warm that people bathe there even in snowstorms with the Northern Lights overhead."
                  },
                  {
                      "icon": "book",
                      "title": "Nation of Readers and Writers",
                      "description": "Iceland has one of the highest literacy rates in the world and more writers, books published, and books read per capita than almost any other nation. The medieval Icelandic Sagas — epic stories of Viking adventures — are still read today and are considered masterpieces of world literature."
                  }
              ]
          },
          "es": {
              "name": "Islandia",
              "capital": "Reikiavik",
              "flagDescription": "La bandera de Islandia tiene una cruz nórdica roja con contorno blanco sobre un fondo azul profundo. Los colores representan las dramáticas fuerzas que componen el increíble paisaje de Islandia: azul para las montañas y el Océano Atlántico, blanco para los glaciares y la nieve ártica que cubre gran parte de la isla, y rojo para el fuego volcánico que constantemente remodela la tierra desde abajo. Islandia es verdaderamente una tierra de fuego y hielo, y estos tres colores capturan perfectamente ese espíritu salvaje y elemental.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "Tierra de Fuego y Hielo",
                      "description": "Islandia se asienta en la Dorsal Mesoatlántica donde se encuentran dos placas tectónicas, lo que la convierte en uno de los lugares más volcánicamente activos de la Tierra. La isla tiene alrededor de 130 volcanes, impresionantes géiseres, aguas termales, campos de lava y el 11% de su superficie está cubierta por glaciares, ¡verdaderamente una tierra de fuego y hielo!"
                  },
                  {
                      "icon": "auto_stories",
                      "title": "El Parlamento Más Antiguo del Mundo",
                      "description": "El Althing de Islandia, establecido en el año 930 d.C., es el parlamento existente más antiguo del mundo. Los colonos vikingos de Noruega crearon esta asamblea democrática — llamada \"Thing\" — donde los hombres libres se reunían anualmente en Þingvellir para hacer leyes y resolver disputas, hace más de 1.000 años."
                  },
                  {
                      "icon": "spa",
                      "title": "La Laguna Azul",
                      "description": "La Laguna Azul, una de las atracciones más famosas de Islandia, es un spa geotérmico donde el agua azul lechosa y rica en minerales se mantiene a una temperatura perfecta de 38°C durante todo el año. El agua obtiene su color único de la sílice y las algas, y es tan cálida que la gente se baña allí incluso en tormentas de nieve con las Auroras Boreales sobre sus cabezas."
                  },
                  {
                      "icon": "book",
                      "title": "Nación de Lectores y Escritores",
                      "description": "Islandia tiene una de las tasas de alfabetización más altas del mundo y más escritores, libros publicados y libros leídos per cápita que casi cualquier otra nación. Las Sagas Islandesas medievales, historias épicas de aventuras vikingas, siguen leyéndose hoy en día y se consideran obras maestras de la literatura mundial."
                  }
              ]
          }
      }
  },
  {
      "slug": "india",
      "flagCode": "in",
      "continent": "Asia",
      "population": "1.4B",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "India",
              "capital": "New Delhi",
              "flagDescription": "India's flag is the \"Tricolor\" — three equal horizontal stripes of orange, white, and green with a blue Ashoka Chakra (24-spoked wheel) in the center of the white stripe. Orange represents courage and sacrifice, white symbolizes peace and truth, green represents fertility and growth, and the wheel represents the law of karma.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Taj Mahal",
                      "description": "The Taj Mahal is one of the world's most beautiful buildings, built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It took 20 years and 20,000 workers to complete this white marble masterpiece."
                  },
                  {
                      "icon": "festival",
                      "title": "Holi: Festival of Colors",
                      "description": "Holi is a joyful Hindu festival celebrating the arrival of spring. People throw colorful powder and water on each other, creating a rainbow of fun and togetherness."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Spice Master",
                      "description": "India is the world's largest producer and consumer of spices. Indian cuisine uses hundreds of spices like turmeric, cardamom, and cinnamon to create some of the world's most flavorful dishes."
                  }
              ]
          },
          "es": {
              "name": "India",
              "capital": "Nueva Delhi",
              "flagDescription": "La bandera de India es el \"Tricolor\": tres franjas horizontales iguales de naranja, blanco y verde con una Rueda de Ashoka azul (rueda de 24 radios) en el centro de la franja blanca. El naranja representa el valor y el sacrificio, el blanco simboliza la paz y la verdad, el verde representa la fertilidad y el crecimiento, y la rueda representa la ley del karma.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Taj Mahal",
                      "description": "El Taj Mahal es uno de los edificios más hermosos del mundo, construido por el emperador mogol Shah Jahan en memoria de su esposa Mumtaz Mahal. ¡Tardó 20 años y 20.000 trabajadores en completar esta obra maestra de mármol blanco!"
                  },
                  {
                      "icon": "festival",
                      "title": "Holi: Festival de los colores",
                      "description": "Holi es un alegre festival hindú que celebra la llegada de la primavera. La gente se lanza polvo y agua de colores entre sí, creando un arcoíris de diversión y unidad."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Maestro de las especias",
                      "description": "India es el mayor productor y consumidor de especias del mundo. La cocina india usa cientos de especias como la cúrcuma, el cardamomo y la canela para crear algunos de los platos más sabrosos del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "indonesia",
      "flagCode": "id",
      "continent": "Asia",
      "population": "284.4M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Indonesia",
              "capital": "Jakarta",
              "flagDescription": "Indonesia's flag is simple but bold — two equal horizontal stripes of red and white. Red represents courage and the blood of independence fighters, while white symbolizes purity and spiritual values. This same colors scheme has been used since the 13th century.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "Ring of Fire",
                      "description": "Indonesia sits on the Pacific Ring of Fire and has more active volcanoes than any other country in the world — about 130 volcanoes, 20 of which erupt regularly!"
                  },
                  {
                      "icon": "pets",
                      "title": "Komodo Dragons",
                      "description": "Komodo dragons are the world's largest living lizards, growing up to 3 meters long. These prehistoric-looking reptiles live only on a few Indonesian islands and are carefully protected."
                  },
                  {
                      "icon": "public",
                      "title": "World's Most Diverse Country",
                      "description": "Indonesia has over 17,000 islands and over 300 ethnic groups, each with their own language and traditions. It's the most linguistically diverse country in the world."
                  }
              ]
          },
          "es": {
              "name": "Indonesia",
              "capital": "Yakarta",
              "flagDescription": "La bandera de Indonesia es simple pero audaz: dos franjas horizontales iguales de rojo y blanco. El rojo representa el valor y la sangre de los luchadores por la independencia, mientras que el blanco simboliza la pureza y los valores espirituales. Este esquema de colores se ha utilizado desde el siglo XIII.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "Anillo de fuego",
                      "description": "¡Indonesia se encuentra en el Anillo de Fuego del Pacífico y tiene más volcanes activos que cualquier otro país del mundo, alrededor de 130 volcanes, 20 de los cuales entran en erupción regularmente!"
                  },
                  {
                      "icon": "pets",
                      "title": "Dragones de Komodo",
                      "description": "Los dragones de Komodo son los lagartos vivientes más grandes del mundo, creciendo hasta 3 metros de largo. Estos reptiles de aspecto prehistórico viven solo en algunas islas indonesias y están cuidadosamente protegidos."
                  },
                  {
                      "icon": "public",
                      "title": "País más diverso del mundo",
                      "description": "Indonesia tiene más de 17.000 islas y más de 300 grupos étnicos, cada uno con su propio idioma y tradiciones. Es el país más diverso lingüísticamente del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "iran",
      "flagCode": "ir",
      "continent": "Asia",
      "population": "86.0M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Iran",
              "capital": "Tehran",
              "flagDescription": "Iran's flag has three equal horizontal stripes of green, white, and red. Along the top and bottom edges runs a red script reading \"Allahu Akbar\" (God is Great). The green represents Islam, white represents peace, red symbolizes the blood of martyrs, and the script affirms Iran's Islamic heritage.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Ancient Persia",
                      "description": "Iran is home to one of the world's oldest civilizations. The ancient Persian Empire was one of history's greatest, stretching from Egypt to India over 2,000 years ago."
                  },
                  {
                      "icon": "apartment",
                      "title": "Persepolis Ruins",
                      "description": "Persepolis was the capital of the Achaemenid Empire and is now a stunning archaeological site with ruins of palaces, gates, and reliefs carved into stone. It's a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "texture",
                      "title": "Persian Carpets",
                      "description": "Persian carpets are considered the finest hand-woven carpets in the world. Each carpet takes months to create and tells stories through its intricate patterns and colors."
                  }
              ]
          },
          "es": {
              "name": "Irán",
              "capital": "Teherán",
              "flagDescription": "La bandera de Irán tiene tres franjas horizontales iguales de verde, blanco y rojo. A lo largo de los bordes superior e inferior corre una escritura roja que dice \"Allahu Akbar\" (Dios es Grandioso). El verde representa el Islam, el blanco la paz, el rojo simboliza la sangre de los mártires, y el script afirma el patrimonio islámico de Irán.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Persia antigua",
                      "description": "Irán es el hogar de una de las civilizaciones más antiguas del mundo. El antiguo Imperio Persa fue uno de los más grandes de la historia, extendiéndose desde Egipto hasta India hace más de 2.000 años."
                  },
                  {
                      "icon": "apartment",
                      "title": "Ruinas de Persépolis",
                      "description": "Persépolis fue la capital del Imperio Aqueménida y ahora es un impresionante sitio arqueológico con ruinas de palacios, puertas y relieves tallados en piedra. Es Patrimonio Mundial de la UNESCO."
                  },
                  {
                      "icon": "texture",
                      "title": "Alfombras persas",
                      "description": "Las alfombras persas son consideradas las mejores alfombras tejidas a mano del mundo. Cada alfombra tarda meses en crearse y cuenta historias a través de sus patrones y colores intrincados."
                  }
              ]
          }
      }
  },
  {
      "slug": "iraq",
      "flagCode": "iq",
      "continent": "Asia",
      "population": "46.1M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Iraq",
              "capital": "Baghdad",
              "flagDescription": "Iraq's flag has three equal horizontal stripes of red, white, and black with the phrase \"Allahu Akbar\" (God is Great) in green script across the middle. Red represents courage, white symbolizes peace, black represents the dark past, and the green script affirms Iraq's Islamic identity.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Cradle of Civilization",
                      "description": "Iraq is home to ancient Mesopotamia, where some of the world's first civilizations began around 3500 BC. It's called the \"Cradle of Civilization\" because writing, cities, and law were invented here."
                  },
                  {
                      "icon": "local_library",
                      "title": "House of Wisdom",
                      "description": "In medieval Baghdad, the House of Wisdom was one of the world's largest libraries and centers of learning. Scholars from around the world came to study mathematics, astronomy, and medicine."
                  },
                  {
                      "icon": "architecture",
                      "title": "Hanging Gardens of Babylon",
                      "description": "The Hanging Gardens of Babylon were one of the Seven Wonders of the Ancient World. Built in ancient Iraq (Babylon), they were legendary for their beauty and irrigation system."
                  }
              ]
          },
          "es": {
              "name": "Irak",
              "capital": "Bagdad",
              "flagDescription": "La bandera de Irak tiene tres franjas horizontales iguales de rojo, blanco y negro con la frase \"Allahu Akbar\" (Dios es Grandioso) en escritura verde atravesando el centro. El rojo representa el valor, el blanco simboliza la paz, el negro representa el pasado oscuro, y la escritura verde afirma la identidad islámica de Irak.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Cuna de la civilización",
                      "description": "Irak es el hogar de la antigua Mesopotamia, donde comenzaron algunas de las primeras civilizaciones del mundo alrededor del 3500 a.C. Se llama la \"Cuna de la Civilización\" porque aquí fueron inventados la escritura, las ciudades y la ley."
                  },
                  {
                      "icon": "local_library",
                      "title": "Casa de la sabiduría",
                      "description": "En el Bagdad medieval, la Casa de la Sabiduría fue una de las mayores bibliotecas y centros de aprendizaje del mundo. Eruditos de todo el mundo vinieron a estudiar matemáticas, astronomía y medicina."
                  },
                  {
                      "icon": "architecture",
                      "title": "Jardines colgantes de Babilonia",
                      "description": "Los Jardines Colgantes de Babilonia fueron una de las Siete Maravillas del Mundo Antiguo. Construidos en el antiguo Irak (Babilonia), eran legendarios por su belleza y sistema de riego."
                  }
              ]
          }
      }
  },
  {
      "slug": "ireland",
      "flagCode": "ie",
      "continent": "Europe",
      "population": "5.5M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Ireland",
              "capital": "Dublin",
              "flagDescription": "Ireland's flag has three equal vertical stripes of green, white, and orange. The green represents the Gaelic Irish Catholic tradition, the orange represents the Protestant tradition associated with William of Orange, and the white in the middle symbolizes the hope for peace and unity between these two communities. The Irish tricolor was first displayed publicly in 1848, inspired by the French tricolor, and became the official flag when Ireland achieved independence in 1922.",
              "funFacts": [
                  {
                      "icon": "local_bar",
                      "title": "St. Patrick's Day Magic",
                      "description": "St. Patrick's Day, celebrated on March 17th, is Ireland's national holiday honoring its patron saint. The celebration has spread so far that cities all around the world, from New York to Sydney to Tokyo, dye their rivers green and hold enormous parades to celebrate Irish heritage and culture."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Literary Giant",
                      "description": "Ireland has produced an extraordinary number of world-famous writers for such a small country. Oscar Wilde, James Joyce, W.B. Yeats, Samuel Beckett, and Seamus Heaney — Ireland has more Nobel Literature Prize winners per capita than any other country in the world!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Cliffs of Moher",
                      "description": "The Cliffs of Moher on Ireland's west coast soar up to 214 meters above the crashing Atlantic Ocean. These dramatic sea cliffs stretch for 14 kilometers and were used as filming location for Harry Potter and the Half-Blood Prince, cementing their status as one of the most dramatic landscapes in all of Europe."
                  },
                  {
                      "icon": "music_note",
                      "title": "Living Musical Tradition",
                      "description": "Irish traditional music — played on fiddles, tin whistles, uilleann pipes, and bodhráns — is a living, breathing art form performed in pubs and festivals across the country. The tradition of the \"session\" (spontaneous group performance) continues unchanged, and Irish music has influenced country, bluegrass, and folk music worldwide."
                  }
              ]
          },
          "es": {
              "name": "Irlanda",
              "capital": "Dublín",
              "flagDescription": "La bandera de Irlanda tiene tres franjas verticales iguales de verde, blanco y naranja. El verde representa la tradición católica gaélica irlandesa, el naranja representa la tradición protestante asociada con Guillermo de Orange, y el blanco en el centro simboliza la esperanza de paz y unidad entre estas dos comunidades. El tricolor irlandés fue exhibido públicamente por primera vez en 1848, inspirado por el tricolor francés, y se convirtió en la bandera oficial cuando Irlanda logró la independencia en 1922.",
              "funFacts": [
                  {
                      "icon": "local_bar",
                      "title": "La Magia del Día de San Patricio",
                      "description": "El Día de San Patricio, celebrado el 17 de marzo, es el día festivo nacional de Irlanda en honor a su santo patrón. La celebración se ha extendido tanto que ciudades de todo el mundo, desde Nueva York hasta Sídney y Tokio, tiñen sus ríos de verde y organizan enormes desfiles para celebrar la herencia y la cultura irlandesas."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Gigante Literario",
                      "description": "Irlanda ha producido un número extraordinario de escritores mundialmente famosos para ser un país tan pequeño. Oscar Wilde, James Joyce, W.B. Yeats, Samuel Beckett y Seamus Heaney — ¡Irlanda tiene más ganadores del Premio Nobel de Literatura per cápita que cualquier otro país del mundo!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Los Acantilados de Moher",
                      "description": "Los Acantilados de Moher en la costa oeste de Irlanda se elevan hasta 214 metros sobre el rompiente Océano Atlántico. Estos dramáticos acantilados marinos se extienden por 14 kilómetros y fueron usados como locación de filmación para Harry Potter y el Misterio del Príncipe, consolidando su estatus como uno de los paisajes más dramáticos de toda Europa."
                  },
                  {
                      "icon": "music_note",
                      "title": "Tradición Musical Viva",
                      "description": "La música tradicional irlandesa, tocada con violines, flautas de hojalata, gaitas uilleann y bodhráns, es una forma de arte viva y palpitante que se interpreta en pubs y festivales de todo el país. La tradición de la \"sesión\" (actuación grupal espontánea) continúa sin cambios, y la música irlandesa ha influido en la música country, bluegrass y folk de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "isle-of-man",
      "flagCode": "im",
      "continent": "Europe",
      "population": "85K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Isle of Man",
              "capital": "Douglas",
              "flagDescription": "The Isle of Man has one of the most unique and ancient flags in the world — a red background featuring the Triskelion, three armored human legs joined at the hip and radiating from a central point. This three-legged symbol is over 700 years old and its motto 'Whichever way you throw it, it will stand' reflects the resilience and determination of the Manx people. The Triskelion (or Trinacria) is one of the oldest symbols of human culture.",
              "funFacts": [
                  {
                      "icon": "two_wheeler",
                      "title": "TT Motorcycle Races",
                      "description": "The Isle of Man TT (Tourist Trophy) motorcycle races, held since 1907, are considered the most dangerous motor races in the world. Riders race at average speeds over 200 km/h on public roads with no barriers, threading through stone walls, cottages, and hedgerows. It's a spectacle that draws fans from around the world every June."
                  },
                  {
                      "icon": "pets",
                      "title": "Manx Cat",
                      "description": "The Isle of Man gave its name to the famous Manx cat, a unique breed naturally born without a tail. The island is the cats' ancestral home, and the story goes that Manx cats ran late to Noah's Ark and had their tails shut in the door as they scrambled aboard!"
                  },
                  {
                      "icon": "history",
                      "title": "Viking Parliament",
                      "description": "The Isle of Man's parliament, called the Tynwald, has been meeting continuously since around 979 CE, making it one of the oldest continuous parliaments in the world. Each year on Tynwald Day (July 5th), laws are proclaimed in both English and Manx Gaelic on a ceremonial outdoor hill."
                  },
                  {
                      "icon": "landscape",
                      "title": "Unspoiled Nature",
                      "description": "Despite being only 52 km long and 22 km wide, the Isle of Man has extraordinary natural diversity — rugged mountains, ancient glens with enchanting waterfalls, wild moorlands, and spectacular coastal scenery. Over a quarter of the island is a UNESCO Biosphere Reserve."
                  }
              ]
          },
          "es": {
              "name": "Isla de Man",
              "capital": "Douglas",
              "flagDescription": "La Isla de Man tiene una de las banderas más únicas y antiguas del mundo: un fondo rojo con el Triskelion, tres piernas humanas acorazadas unidas por la cadera y que irradian desde un punto central. Este símbolo de tres piernas tiene más de 700 años y su lema 'De cualquier manera que lo lances, se mantendrá en pie' refleja la resistencia y determinación del pueblo manés. El Triskelion (o Trinacria) es uno de los símbolos más antiguos de la cultura humana.",
              "funFacts": [
                  {
                      "icon": "two_wheeler",
                      "title": "Las Carreras TT de Motocicletas",
                      "description": "Las carreras de motocicletas TT (Tourist Trophy) de la Isla de Man, celebradas desde 1907, son consideradas las carreras de motor más peligrosas del mundo. Los pilotos corren a velocidades medias de más de 200 km/h en carreteras públicas sin barreras, pasando entre muros de piedra, casas de campo y setos. Es un espectáculo que atrae a fans de todo el mundo cada junio."
                  },
                  {
                      "icon": "pets",
                      "title": "El Gato Manés",
                      "description": "La Isla de Man dio su nombre al famoso gato manés, una raza única que nace naturalmente sin cola. La isla es el hogar ancestral de los gatos, ¡y la historia dice que los gatos maneses llegaron tarde al Arca de Noé y les cerraron la cola en la puerta cuando se apresuraban a subir!"
                  },
                  {
                      "icon": "history",
                      "title": "El Parlamento Vikingo",
                      "description": "El parlamento de la Isla de Man, llamado Tynwald, ha estado reuniéndose continuamente desde alrededor del año 979 d.C., lo que lo convierte en uno de los parlamentos continuos más antiguos del mundo. Cada año en el Día de Tynwald (5 de julio), las leyes se proclaman tanto en inglés como en gaélico manés en una colina ceremonial al aire libre."
                  },
                  {
                      "icon": "landscape",
                      "title": "Naturaleza Virgen",
                      "description": "A pesar de tener solo 52 km de largo y 22 km de ancho, la Isla de Man tiene una extraordinaria diversidad natural: escarpadas montañas, antiguos barrancos con encantadoras cascadas, páramos salvajes y espectaculares paisajes costeros. Más de una cuarta parte de la isla es Reserva de la Biosfera de la UNESCO."
                  }
              ]
          }
      }
  },
  {
      "slug": "israel",
      "flagCode": "il",
      "continent": "Asia",
      "population": "10.1M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Israel",
              "capital": "Jerusalem",
              "flagDescription": "Israel's flag is white with two blue horizontal stripes (top and bottom) and a blue six-pointed Star of David in the center. The colors are inspired by the tallit, a traditional Jewish prayer shawl. The Star of David is an ancient Jewish symbol, and the blue and white represent hope and faith.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Holy Sites",
                      "description": "Jerusalem is the holiest city for Jews, Christians, and Muslims. The Western Wall, Church of the Holy Sepulchre, and Al-Aqsa Mosque are all located here, making it a place of profound spiritual importance."
                  },
                  {
                      "icon": "water",
                      "title": "Dead Sea",
                      "description": "The Dead Sea is the lowest point on Earth at 1,410 feet below sea level. Its water is so salty (33% salinity) that people float without effort — a unique natural phenomenon!"
                  },
                  {
                      "icon": "devices",
                      "title": "Tech Innovation Hub",
                      "description": "Israel is a global leader in technology and innovation. Despite its small size, Israel has more startups per capita than any other country and is called the \"Startup Nation.\""
                  }
              ]
          },
          "es": {
              "name": "Israel",
              "capital": "Jerusalén",
              "flagDescription": "La bandera de Israel es blanca con dos franjas azules horizontales (arriba y abajo) y una Estrella de David azul de seis puntas en el centro. Los colores están inspirados en el tallit, un chal de oración judío tradicional. La Estrella de David es un antiguo símbolo judío, y el azul y blanco representan esperanza y fe.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Sitios sagrados",
                      "description": "Jerusalén es la ciudad más sagrada para judíos, cristianos y musulmanes. El Muro de los Lamentos, la Iglesia del Santo Sepulcro y la Mezquita de Al-Aqsa están todos ubicados aquí, lo que la convierte en un lugar de profunda importancia espiritual."
                  },
                  {
                      "icon": "water",
                      "title": "Mar Muerto",
                      "description": "El Mar Muerto es el punto más bajo de la Tierra, a 430 metros bajo el nivel del mar. Su agua es tan salada (33% de salinidad) que la gente flota sin esfuerzo, ¡un fenómeno natural único!"
                  },
                  {
                      "icon": "devices",
                      "title": "Centro de innovación tecnológica",
                      "description": "Israel es líder mundial en tecnología e innovación. A pesar de su tamaño pequeño, Israel tiene más startups per cápita que cualquier otro país y se conoce como la \"Nación Startup\"."
                  }
              ]
          }
      }
  },
  {
      "slug": "italy",
      "flagCode": "it",
      "continent": "Europe",
      "population": "58.9M",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Italy",
              "capital": "Rome",
              "flagDescription": "Italy's flag has three equal vertical stripes of green, white, and red — called the Tricolore. The design was inspired by the French tricolor during the time of Napoleon, first used by the Cisalpine Republic in 1797. Green represents the Italian landscape and the hope of patriots, white symbolizes the snow of the Alps and the purity of their ideals, and red represents the blood spilled in the struggle for Italian unity and independence.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Birthplace of Pizza and Pasta",
                      "description": "Italy is the birthplace of two of the world's most beloved foods: pizza and pasta. Naples created the modern pizza in the 1800s, and today there are over 2 billion pizzas eaten worldwide every year. Italy also has over 350 different shapes of pasta, each designed to hold different sauces perfectly!"
                  },
                  {
                      "icon": "palette",
                      "title": "Renaissance Art Treasure",
                      "description": "Italy holds more UNESCO World Heritage Sites than any other country in the world — 58 sites! Florence was the cradle of the Renaissance, producing Leonardo da Vinci, Michelangelo, Botticelli, and Raphael. The Vatican Museums, Uffizi Gallery, and Colosseum are among the greatest art and history destinations on Earth."
                  },
                  {
                      "icon": "directions_car",
                      "title": "Birthplace of Opera and Fashion",
                      "description": "Italy invented opera in the late 1500s, and Italian opera houses like La Scala in Milan remain the most prestigious in the world. Italy is also the global capital of high fashion — Milan's fashion week is one of the \"Big Four\" alongside Paris, New York, and London, and brands like Gucci, Prada, Versace, and Ferrari are icons of Italian excellence."
                  },
                  {
                      "icon": "architecture",
                      "title": "Eternal Rome",
                      "description": "Rome, known as the \"Eternal City,\" has been continuously inhabited for over 2,800 years and was the center of the greatest empire the Western world has ever known. Walking through Rome is walking through layer upon layer of history — ancient ruins sit next to Renaissance churches and modern cafés in a uniquely Italian mix."
                  }
              ]
          },
          "es": {
              "name": "Italia",
              "capital": "Roma",
              "flagDescription": "La bandera de Italia tiene tres franjas verticales iguales de verde, blanco y rojo, llamada Tricolore. El diseño fue inspirado por el tricolor francés durante la época de Napoleón, utilizado por primera vez por la República Cisalpina en 1797. El verde representa el paisaje italiano y la esperanza de los patriotas, el blanco simboliza la nieve de los Alpes y la pureza de sus ideales, y el rojo representa la sangre derramada en la lucha por la unidad e independencia italiana.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Cuna de la Pizza y la Pasta",
                      "description": "Italia es el lugar de nacimiento de dos de los alimentos más queridos del mundo: la pizza y la pasta. Nápoles creó la pizza moderna en el siglo XIX, y hoy en día se comen más de 2.000 millones de pizzas en todo el mundo cada año. ¡Italia también tiene más de 350 formas diferentes de pasta, cada una diseñada para retener perfectamente diferentes salsas!"
                  },
                  {
                      "icon": "palette",
                      "title": "Tesoro del Arte del Renacimiento",
                      "description": "Italia alberga más Sitios del Patrimonio Mundial de la UNESCO que cualquier otro país del mundo: ¡58 sitios! Florencia fue la cuna del Renacimiento, produciendo a Leonardo da Vinci, Miguel Ángel, Botticelli y Rafael. Los Museos Vaticanos, la Galería Uffizi y el Coliseo están entre los destinos de arte e historia más importantes de la Tierra."
                  },
                  {
                      "icon": "directions_car",
                      "title": "Cuna de la Ópera y la Moda",
                      "description": "Italia inventó la ópera a finales del siglo XVI, y las óperas italianas como La Scala de Milán siguen siendo las más prestigiosas del mundo. Italia es también la capital mundial de la alta moda: la semana de la moda de Milán es una de las \"Cuatro Grandes\" junto a París, Nueva York y Londres, y marcas como Gucci, Prada, Versace y Ferrari son iconos de la excelencia italiana."
                  },
                  {
                      "icon": "architecture",
                      "title": "La Eterna Roma",
                      "description": "Roma, conocida como la \"Ciudad Eterna\", ha estado habitada continuamente durante más de 2.800 años y fue el centro del mayor imperio que el mundo occidental jamás haya conocido. Pasear por Roma es pasear por capa tras capa de historia: ruinas antiguas se sientan junto a iglesias renacentistas y cafés modernos en una mezcla únicamente italiana."
                  }
              ]
          }
      }
  },
  {
      "slug": "ivory-coast",
      "flagCode": "ci",
      "continent": "Africa",
      "population": "31.7M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Ivory Coast",
              "capital": "Yamoussoukro",
              "flagDescription": "Ivory Coast's flag has three equal vertical stripes of orange, white, and green — the reverse mirror image of Ireland's flag! Orange represents the dry savanna in the north, white symbolizes peace and unity, and green stands for the lush forests of the south.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Chocolate Capital",
                      "description": "Ivory Coast produces about 40% of the world's cocoa beans — meaning almost half of all the chocolate you've ever eaten likely started as a cacao pod on an Ivorian tree!"
                  },
                  {
                      "icon": "church",
                      "title": "World's Largest Church",
                      "description": "The Basilica of Our Lady of Peace in Yamoussoukro is the world's largest church by area — even bigger than St. Peter's Basilica in Rome! It can hold 18,000 people inside."
                  },
                  {
                      "icon": "palette",
                      "title": "Masterpiece Masks",
                      "description": "Traditional Dan and Baule wooden masks from Ivory Coast are recognized as masterpieces of world art. Their intricate craftsmanship has influenced artists like Pablo Picasso and inspired modern art movements."
                  }
              ]
          },
          "es": {
              "name": "Costa de Marfil",
              "capital": "Yamusukro",
              "flagDescription": "La bandera de Costa de Marfil tiene tres franjas verticales iguales de naranja, blanco y verde, ¡el espejo invertido de la bandera de Irlanda! El naranja representa la sabana seca del norte, el blanco simboliza la paz y la unidad, y el verde representa los exuberantes bosques del sur.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Capital del chocolate",
                      "description": "¡Costa de Marfil produce alrededor del 40% de los granos de cacao del mundo! Casi la mitad de todo el chocolate que has comido probablemente comenzó como una mazorca de cacao en un árbol marfileño."
                  },
                  {
                      "icon": "church",
                      "title": "La iglesia más grande del mundo",
                      "description": "La Basílica de Nuestra Señora de la Paz en Yamusukro es la iglesia más grande del mundo por superficie, ¡incluso más grande que la Basílica de San Pedro en Roma! Puede albergar a 18.000 personas."
                  },
                  {
                      "icon": "palette",
                      "title": "Máscaras maestras",
                      "description": "Las máscaras de madera tradicionales Dan y Baule de Costa de Marfil son reconocidas como obras maestras del arte mundial. Su artesanía ha influenciado a artistas como Pablo Picasso y ha inspirado el arte moderno."
                  }
              ]
          }
      }
  },
  {
      "slug": "jamaica",
      "flagCode": "jm",
      "continent": "North America",
      "population": "2.8M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Jamaica",
          "capital": "Kingston",
          "flagDescription": "Jamaica's flag has a gold diagonal cross dividing the flag into four triangles of green and black. The gold represents sunlight and wealth, green represents hope and agricultural wealth, and black represents the hardships overcome.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Reggae Birthplace",
            "description": "Jamaica is the birthplace of reggae music and has produced legendary artists like Bob Marley."
          },
          {
            "icon": "sports",
            "title": "Track and Field Powerhouse",
            "description": "Jamaica is a world-renowned sprinting nation, producing Olympic champions and world record holders."
          },
          {
            "icon": "landscape",
            "title": "Dunn's River Falls",
            "description": "Dunn's River Falls is a beautiful terraced waterfall that flows directly into the Caribbean Sea."
          },
          {
            "icon": "celebration",
            "title": "Rastafarian Culture",
            "description": "Jamaica is the spiritual home of Rastafarianism, a significant religious and cultural movement."
          }
          ]
        },
        "es": {
          "name": "Jamaica",
          "capital": "Kingston",
          "flagDescription": "La bandera de Jamaica tiene una cruz diagonal de oro que divide la bandera en cuatro triángulos de verde y negro. El oro representa la luz solar y la riqueza, el verde representa la esperanza y la riqueza agrícola, y el negro representa las dificultades superadas.",
          "funFacts": [
          {
            "icon": "music_note",
            "title": "Cuna del Reggae",
            "description": "Jamaica es la cuna de la música reggae y ha producido artistas legendarios como Bob Marley."
          },
          {
            "icon": "sports",
            "title": "Potencia de Atletismo",
            "description": "Jamaica es una nación de velocidad de renombre mundial, produciendo campeones olímpicos y poseedores de récords mundiales."
          },
          {
            "icon": "landscape",
            "title": "Cataratas de Dunn's River",
            "description": "Las Cataratas de Dunn's River es una hermosa cascada aterrazada que fluye directamente hacia el Mar Caribe."
          },
          {
            "icon": "celebration",
            "title": "Cultura Rastafari",
            "description": "Jamaica es el hogar espiritual del Rastafari, un movimiento religioso y cultural significativo."
          }
          ]
        }
      }
  },
  {
      "slug": "japan",
      "flagCode": "jp",
      "continent": "Asia",
      "population": "123.2M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "Japan",
              "capital": "Tokyo",
              "flagDescription": "Japan's flag features a red circle representing the sun against a white background. It's called the \"Nisshoki\" or \"sun-mark flag.\" The red circle symbolizes the sun goddess Amaterasu in Japanese mythology, and Japan has been called the \"Land of the Rising Sun.\"",
              "funFacts": [
                  {
                      "icon": "robot",
                      "title": "Robotics Leader",
                      "description": "Japan leads the world in robotics technology and manufacturing. From industrial robots to humanoid robots like Pepper, Japan creates innovations that help people in factories and homes around the world."
                  },
                  {
                      "icon": "terrain",
                      "title": "Mount Fuji",
                      "description": "Mount Fuji is Japan's highest peak at 3,776 meters and is a sacred mountain in Japanese culture. It's almost perfectly conical and is one of Japan's most iconic symbols."
                  },
                  {
                      "icon": "public",
                      "title": "Cherry Blossom Festival",
                      "description": "Hanami (cherry blossom festival) is a beloved Japanese tradition celebrating the blooming of cherry trees in spring. Families gather under the pink and white blossoms for picnics and celebrations."
                  }
              ]
          },
          "es": {
              "name": "Japón",
              "capital": "Tokio",
              "flagDescription": "La bandera de Japón presenta un círculo rojo que representa el sol sobre un fondo blanco. Se llama \"Nisshoki\" o \"bandera marca del sol\". El círculo rojo simboliza a la diosa del sol Amaterasu en la mitología japonesa, y Japón ha sido llamado la \"Tierra del Sol Naciente\".",
              "funFacts": [
                  {
                      "icon": "robot",
                      "title": "Líder en robótica",
                      "description": "Japón lidera el mundo en tecnología robótica y fabricación. Desde robots industriales hasta robots humanoides como Pepper, Japón crea innovaciones que ayudan a las personas en fábricas y hogares de todo el mundo."
                  },
                  {
                      "icon": "terrain",
                      "title": "Monte Fuji",
                      "description": "El Monte Fuji es el pico más alto de Japón con 3.776 metros y es una montaña sagrada en la cultura japonesa. Es casi perfectamente cónico y es uno de los símbolos más icónicos de Japón."
                  },
                  {
                      "icon": "public",
                      "title": "Festival de las flores de cerezo",
                      "description": "Hanami (festival de flores de cerezo) es una tradición japonesa amada que celebra la floración de los árboles de cerezo en primavera. Las familias se reúnen bajo los flores rosa y blanca para picnics y celebraciones."
                  }
              ]
          }
      }
  },
  {
      "slug": "jersey",
      "flagCode": "je",
      "continent": "Europe",
      "population": "103K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Jersey",
              "capital": "St. Helier",
              "flagDescription": "Jersey's flag features a red diagonal cross (called a saltire) on a white background, with a yellow shield in the upper center bearing three red lions, and a red crown on top of the shield. The diagonal red cross is Jersey's traditional heraldic symbol, while the three lions are derived from the arms of the Duchy of Normandy, reflecting Jersey's historical ties to Normandy, France. The crown represents the British Crown's sovereignty over the island.",
              "funFacts": [
                  {
                      "icon": "agriculture",
                      "title": "Jersey Royal Potatoes",
                      "description": "Jersey is world-famous for its Jersey Royal potatoes, a special variety of new potato grown only in Jersey's unique soil conditions. These golden, kidney-shaped potatoes with their buttery flavor are one of the most prized vegetables in Britain and are exported to restaurants across Europe each spring."
                  },
                  {
                      "icon": "history",
                      "title": "Battle of Jersey",
                      "description": "In 1781, French forces attempted to capture Jersey, and a young British officer named Major Peirson led a heroic defense of the island. The Battle of Jersey in Royal Square, St. Helier, ended in British victory but Peirson was killed at the moment of triumph. The battle is immortalized in a famous painting that hangs in the Tate Britain gallery in London."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Sunshine Island",
                      "description": "Jersey is the sunniest place in the British Isles, enjoying more sunshine hours per year than anywhere else in the UK. Its beaches are extraordinary — at low tide, the sea retreats so far that you can walk several kilometers out to rock pools, exploring an entire hidden world that disappears when the tide returns."
                  },
                  {
                      "icon": "landscape",
                      "title": "Tax Haven Finance",
                      "description": "Jersey is a major international finance center with its own government, laws, and tax system independent from the UK. This status has attracted banks and financial firms from around the world, making this small island of 100,000 people one of the most important financial centers in Europe."
                  }
              ]
          },
          "es": {
              "name": "Jersey",
              "capital": "St. Helier",
              "flagDescription": "La bandera de Jersey muestra una cruz diagonal roja (llamada saltire) sobre fondo blanco, con un escudo amarillo en el centro superior que lleva tres leones rojos, y una corona roja encima del escudo. La cruz diagonal roja es el símbolo heráldico tradicional de Jersey, mientras que los tres leones provienen de las armas del Ducado de Normandía, reflejando los lazos históricos de Jersey con Normandía, Francia. La corona representa la soberanía de la Corona Británica sobre la isla.",
              "funFacts": [
                  {
                      "icon": "agriculture",
                      "title": "Patatas Reales de Jersey",
                      "description": "Jersey es mundialmente famosa por sus patatas Reales de Jersey, una variedad especial de patata nueva cultivada únicamente en las condiciones únicas del suelo de Jersey. Estas patatas doradas en forma de riñón con su sabor mantecoso son una de las verduras más apreciadas en Gran Bretaña y se exportan a restaurantes de toda Europa cada primavera."
                  },
                  {
                      "icon": "history",
                      "title": "La Batalla de Jersey",
                      "description": "En 1781, las fuerzas francesas intentaron capturar Jersey, y un joven oficial británico llamado Mayor Peirson lideró una heroica defensa de la isla. La Batalla de Jersey en la Plaza Real de St. Helier terminó en victoria británica, pero Peirson fue asesinado en el momento del triunfo. La batalla está inmortalizada en un famoso cuadro que cuelga en la galería Tate Britain en Londres."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Isla del Sol",
                      "description": "Jersey es el lugar más soleado de las Islas Británicas, disfrutando de más horas de sol al año que en cualquier otro lugar del Reino Unido. Sus playas son extraordinarias: con la marea baja, el mar retrocede tanto que se puede caminar varios kilómetros hasta piscinas de roca, explorando un mundo oculto entero que desaparece cuando la marea regresa."
                  },
                  {
                      "icon": "landscape",
                      "title": "Centro Financiero",
                      "description": "Jersey es un importante centro financiero internacional con su propio gobierno, leyes y sistema fiscal independiente del Reino Unido. Esta situación ha atraído a bancos y empresas financieras de todo el mundo, haciendo de esta pequeña isla de 100.000 personas uno de los centros financieros más importantes de Europa."
                  }
              ]
          }
      }
  },
  {
      "slug": "jordan",
      "flagCode": "jo",
      "continent": "Asia",
      "population": "11.7M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Jordan",
              "capital": "Amman",
              "flagDescription": "Jordan's flag has three equal horizontal stripes of black, white, and green (top to bottom) with a red triangle on the left side. The colors are the Pan-Arab colors: black for history, white for peace, green for the Prophet Muhammad's tribe, and red for courage.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Petra: Rose City",
                      "description": "Petra is an ancient city carved entirely into rose-colored stone cliffs. Built by the Nabataeans around 2,000 years ago, it's one of the New Seven Wonders of the World and a UNESCO site."
                  },
                  {
                      "icon": "water",
                      "title": "Dead Sea Lowest Point",
                      "description": "The Dead Sea on Jordan's border is the lowest point on Earth. Its extreme salinity makes it perfect for floating, and mineral-rich mud is believed to have healing properties."
                  },
                  {
                      "icon": "landscape",
                      "title": "Wadi Rum Red Desert",
                      "description": "Wadi Rum is a stunning desert landscape with massive rock formations. It's been used as a filming location for Star Wars and other movies because of its otherworldly appearance."
                  }
              ]
          },
          "es": {
              "name": "Jordania",
              "capital": "Ammán",
              "flagDescription": "La bandera de Jordania tiene tres franjas horizontales iguales de negro, blanco y verde (de arriba a abajo) con un triángulo rojo a la izquierda. Los colores son los colores panárabes: negro por la historia, blanco por la paz, verde por la tribu del Profeta Mahoma, y rojo por el valor.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Petra: la ciudad rosa",
                      "description": "Petra es una ciudad antigua tallada completamente en acantilados de piedra de color rosa. Construida por los nabateos hace alrededor de 2.000 años, es una de las Nuevas Siete Maravillas del Mundo y un sitio de la UNESCO."
                  },
                  {
                      "icon": "water",
                      "title": "Mar Muerto: punto más bajo",
                      "description": "El Mar Muerto en la frontera de Jordania es el punto más bajo de la Tierra. Su salinidad extrema lo hace perfecto para flotar, y el barro mineral se cree que tiene propiedades curativas."
                  },
                  {
                      "icon": "landscape",
                      "title": "Desierto rojo de Wadi Rum",
                      "description": "Wadi Rum es un impresionante paisaje desértico con formaciones rocosas masivas. Ha sido utilizado como lugar de rodaje de Star Wars y otras películas por su apariencia fuera de este mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "kazakhstan",
      "flagCode": "kz",
      "continent": "Asia",
      "population": "20.4M",
      "region": "Central Asia",
      "translations": {
          "en": {
              "name": "Kazakhstan",
              "capital": "Astana",
              "flagDescription": "Kazakhstan's flag is sky-blue with a golden sun and a soaring steppe eagle (golden) in the center, with a gold ornamental pattern on the left side. The blue represents peace and prosperity, the sun represents life and energy, and the eagle symbolizes freedom and power.",
              "funFacts": [
                  {
                      "icon": "rocket_launch",
                      "title": "Space Travel Birthplace",
                      "description": "The Baikonur Cosmodrome in Kazakhstan is the world's oldest and largest space launch facility. Sputnik launched from here, and rockets carrying cosmonauts to the International Space Station still depart from this historic site."
                  },
                  {
                      "icon": "terrain",
                      "title": "Steppe Landscape",
                      "description": "Kazakhstan's vast steppes cover enormous areas of grassland. These endless rolling plains have been home to nomadic peoples for thousands of years and support unique wildlife like wild horses."
                  },
                  {
                      "icon": "location_city",
                      "title": "Modern Astana",
                      "description": "Astana is one of the world's newest capital cities, built from scratch in the late 1990s. Its futuristic architecture and rapid growth have made it a symbol of Kazakhstan's progress."
                  }
              ]
          },
          "es": {
              "name": "Kazajistán",
              "capital": "Astaná",
              "flagDescription": "La bandera de Kazajistán es azul cielo con un sol dorado y un águila de las estepas en vuelo (dorada) en el centro, con un patrón ornamental dorado en el lado izquierdo. El azul representa la paz y la prosperidad, el sol representa la vida y la energía, y el águila simboliza la libertad y el poder.",
              "funFacts": [
                  {
                      "icon": "rocket_launch",
                      "title": "Cuna de los viajes espaciales",
                      "description": "El Cosmódromo de Baikonur en Kazajistán es la instalación de lanzamiento espacial más antigua y grande del mundo. El Sputnik se lanzó desde aquí, y los cohetes que transportan cosmonautas a la Estación Espacial Internacional aún salen desde este sitio histórico."
                  },
                  {
                      "icon": "terrain",
                      "title": "Paisaje de estepa",
                      "description": "Las vastas estepas de Kazajistán cubren enormes áreas de pastizales. Estas llanuras ondulantes infinitas han sido hogar de pueblos nómadas durante miles de años y sustentan fauna única como caballos salvajes."
                  },
                  {
                      "icon": "location_city",
                      "title": "Astaná moderna",
                      "description": "Astaná es una de las nuevas capitales más nuevas del mundo, construida desde cero a finales de los años 90. Su arquitectura futurista y rápido crecimiento la han convertido en símbolo del progreso de Kazajistán."
                  }
              ]
          }
      }
  },
  {
      "slug": "kenya",
      "flagCode": "ke",
      "continent": "Africa",
      "population": "53.3M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Kenya",
              "capital": "Nairobi",
              "flagDescription": "The Kenyan flag features three horizontal stripes — black, red, and green — separated by thin white bands. A Maasai shield and two crossed spears sit at the center. Black represents the people, red the blood shed for independence, green the landscape, and white peace.",
              "funFacts": [
                  {
                      "icon": "sprint",
                      "title": "Marathon Champions",
                      "description": "Kenya has produced more Olympic and World Championship marathon winners than any other country. The high-altitude Rift Valley is considered the birthplace of distance running."
                  },
                  {
                      "icon": "park",
                      "title": "The Great Migration",
                      "description": "Every year, over 1.5 million wildebeest cross from Tanzania's Serengeti into Kenya's Maasai Mara — the largest land animal migration on Earth."
                  },
                  {
                      "icon": "coffee",
                      "title": "World-Class Coffee",
                      "description": "Kenyan AA coffee is considered among the finest in the world, grown on the slopes of Mount Kenya at elevations above 1,500 meters."
                  }
              ]
          },
          "es": {
              "name": "Kenia",
              "capital": "Nairobi",
              "flagDescription": "La bandera de Kenia tiene tres franjas horizontales: negra, roja y verde, separadas por delgadas bandas blancas. En el centro hay un escudo masái y dos lanzas cruzadas. El negro representa al pueblo, el rojo la sangre derramada por la independencia, el verde el paisaje, y el blanco la paz.",
              "funFacts": [
                  {
                      "icon": "sprint",
                      "title": "Campeones del maratón",
                      "description": "Kenia ha producido más ganadores olímpicos y del campeonato mundial de maratón que cualquier otro país. El Valle del Rift de gran altitud es considerado la cuna de las carreras de fondo."
                  },
                  {
                      "icon": "park",
                      "title": "La gran migración",
                      "description": "Cada año, más de 1,5 millones de ñus cruzan desde el Serengeti de Tanzania hasta el Masái Mara de Kenia, la mayor migración de animales terrestres de la Tierra."
                  },
                  {
                      "icon": "coffee",
                      "title": "Café de clase mundial",
                      "description": "El café keniano AA está considerado uno de los mejores del mundo, cultivado en las laderas del monte Kenia a altitudes superiores a 1.500 metros."
                  }
              ]
          }
      }
  },
  {
      "slug": "kiribati",
      "flagCode": "ki",
      "continent": "Oceania",
      "population": "121K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Kiribati",
              "capital": "South Tarawa",
              "flagDescription": "Kiribati's flag has a red upper half showing a yellow frigate bird in flight above a rising golden sun with 17 rays, representing the 17 Gilbert Islands. The lower half has three wavy horizontal stripes of blue and white, symbolizing the Pacific Ocean. The frigate bird is a symbol of power, freedom, and the seafaring spirit of the Kiribati people.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "First Country to See the New Year",
                      "description": "Kiribati straddles both the International Date Line and the Equator, making it the first country in the world to ring in each New Year. The island of Kiritimati (Christmas Island) was specifically repositioned on the date line side to ensure this distinction."
                  },
                  {
                      "icon": "waves",
                      "title": "Climate Change Frontline",
                      "description": "Kiribati is one of the countries most threatened by rising sea levels due to climate change. Most of its islands rise only 2–3 meters above sea level, and the government has purchased land in Fiji as a potential refuge for its 120,000 citizens."
                  },
                  {
                      "icon": "history",
                      "title": "WWII Battlegrounds",
                      "description": "The Battle of Tarawa in 1943 was one of the most intense battles of the Pacific War, with fierce fighting between US Marines and Japanese defenders. The 76-hour battle on a tiny atoll cost over 6,000 lives. Memorials and WWII relics can still be found on the islands."
                  },
                  {
                      "icon": "anchor",
                      "title": "Scattered Nation",
                      "description": "Kiribati consists of 33 islands scattered across an ocean area as large as the continental United States. The total land area is only 811 km², but the distance from the westernmost to the easternmost island is over 4,000 km."
                  }
              ]
          },
          "es": {
              "name": "Kiribati",
              "capital": "Tarawa del Sur",
              "flagDescription": "La bandera de Kiribati tiene una mitad superior roja que muestra un ave fragata amarilla en vuelo sobre un sol dorado naciente con 17 rayos, que representan las 17 Islas Gilbert. La mitad inferior tiene tres franjas horizontales onduladas de azul y blanco, que simbolizan el Océano Pacífico. El ave fragata es un símbolo de poder, libertad y el espíritu marinero del pueblo de Kiribati.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "El Primer País en Ver el Año Nuevo",
                      "description": "Kiribati atraviesa tanto la Línea Internacional de Cambio de Fecha como el Ecuador, lo que lo convierte en el primer país del mundo en recibir cada Año Nuevo. La isla de Kiritimati (Isla de Navidad) fue específicamente reposicionada en el lado de la línea de fecha para garantizar esta distinción."
                  },
                  {
                      "icon": "waves",
                      "title": "Línea del Frente del Cambio Climático",
                      "description": "Kiribati es uno de los países más amenazados por el aumento del nivel del mar debido al cambio climático. La mayoría de sus islas solo se elevan 2-3 metros sobre el nivel del mar, y el gobierno ha comprado tierras en Fiyi como posible refugio para sus 120.000 ciudadanos."
                  },
                  {
                      "icon": "history",
                      "title": "Campos de Batalla de la Segunda Guerra Mundial",
                      "description": "La Batalla de Tarawa en 1943 fue una de las batallas más intensas de la Guerra del Pacífico, con feroces combates entre marines estadounidenses y defensores japoneses. La batalla de 76 horas en un diminuto atolón costó más de 6.000 vidas. Monumentos y reliquias de la Segunda Guerra Mundial aún se pueden encontrar en las islas."
                  },
                  {
                      "icon": "anchor",
                      "title": "Nación Dispersa",
                      "description": "Kiribati consiste en 33 islas dispersas en un área oceánica tan grande como los Estados Unidos continentales. La superficie terrestre total es solo 811 km², pero la distancia desde la isla más occidental hasta la más oriental es de más de 4.000 km."
                  }
              ]
          }
      }
  },
  {
      "slug": "kosovo",
      "flagCode": "xk",
      "continent": "Europe",
      "population": "1.6M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Kosovo",
              "capital": "Pristina",
              "flagDescription": "Kosovo's flag has a blue background with a golden map of Kosovo at the center, above which are six white stars arranged in an arc. The blue and gold colors are inspired by the flag of the European Union, symbolizing Kosovo's European aspirations and its hope to one day join the EU. The six white stars represent Kosovo's six major ethnic communities living together: Albanians, Serbs, Turks, Bosniaks, Roma, and Gorani.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "World's Youngest Country",
                      "description": "Kosovo declared independence from Serbia on February 17, 2008, making it one of the youngest countries in the world. The declaration was the result of decades of struggle for self-determination by the Albanian-majority population, and it has been recognized by over 100 UN member states."
                  },
                  {
                      "icon": "architecture",
                      "title": "Medieval Serbian Monasteries",
                      "description": "Despite its complex history, Kosovo is home to some of the most beautiful Serbian Orthodox monasteries in the world. Visoki Dečani Monastery, a UNESCO World Heritage Site, was built in the 14th century and contains extraordinarily detailed Byzantine frescoes — thousands of painted figures covering every wall and ceiling."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Football Pride",
                      "description": "Kosovo's national football team was officially recognized by FIFA in 2016. Despite being one of the newest national teams in the world, they have already caused major upsets against established European nations, becoming a source of enormous national pride."
                  },
                  {
                      "icon": "terrain",
                      "title": "Sharr Mountains",
                      "description": "The Sharr Mountains (Šar planina) along Kosovo's southern border are a breathtaking natural treasure with glacial lakes, endemic wildflowers, wolves, lynxes, and golden eagles. The mountain range has been proposed for UNESCO Natural Heritage status for its extraordinary biodiversity."
                  }
              ]
          },
          "es": {
              "name": "Kosovo",
              "capital": "Pristina",
              "flagDescription": "La bandera de Kosovo tiene un fondo azul con un mapa dorado de Kosovo en el centro, sobre el cual hay seis estrellas blancas dispuestas en arco. Los colores azul y dorado están inspirados en la bandera de la Unión Europea, simbolizando las aspiraciones europeas de Kosovo y su esperanza de unirse algún día a la UE. Las seis estrellas blancas representan las seis principales comunidades étnicas de Kosovo que viven juntas: albaneses, serbios, turcos, bosníacos, romaníes y goranís.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El País Más Joven del Mundo",
                      "description": "Kosovo declaró su independencia de Serbia el 17 de febrero de 2008, convirtiéndolo en uno de los países más jóvenes del mundo. La declaración fue el resultado de décadas de lucha por la autodeterminación de la población de mayoría albanesa, y ha sido reconocida por más de 100 estados miembros de la ONU."
                  },
                  {
                      "icon": "architecture",
                      "title": "Monasterios Medievales Serbios",
                      "description": "A pesar de su compleja historia, Kosovo alberga algunos de los monasterios ortodoxos serbios más hermosos del mundo. El Monasterio de Visoki Dečani, Patrimonio de la Humanidad de la UNESCO, fue construido en el siglo XIV y contiene extraordinarios frescos bizantinos con miles de figuras pintadas que cubren cada pared y techo."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Orgullo del Fútbol",
                      "description": "El equipo nacional de fútbol de Kosovo fue reconocido oficialmente por la FIFA en 2016. A pesar de ser uno de los equipos nacionales más nuevos del mundo, ya han causado importantes sorpresas contra naciones europeas establecidas, convirtiéndose en una fuente de enorme orgullo nacional."
                  },
                  {
                      "icon": "terrain",
                      "title": "Las Montañas Šar",
                      "description": "Las Montañas Šar (Šar planina) a lo largo de la frontera sur de Kosovo son un impresionante tesoro natural con lagos glaciales, flores silvestres endémicas, lobos, linces y águilas reales. La cordillera ha sido propuesta para el estatus de Patrimonio Natural de la UNESCO por su extraordinaria biodiversidad."
                  }
              ]
          }
      }
  },
  {
      "slug": "kuwait",
      "flagCode": "kw",
      "continent": "Asia",
      "population": "4.9M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Kuwait",
              "capital": "Kuwait City",
              "flagDescription": "Kuwait's flag has three equal horizontal stripes of green, white, and red, with a black trapezoid on the left (hoist) side. The colors are Pan-Arab colors used across many Arab nations: green represents the fertile lands and Islam, white stands for peace and purity, red symbolizes the blood of enemies on the sword, and black represents the defeat of enemies.",
              "funFacts": [
                  {
                      "icon": "oil_barrel",
                      "title": "Ocean of Oil",
                      "description": "Kuwait sits atop one of the world's largest oil reserves. Oil was discovered in 1938, and within decades transformed Kuwait from a small pearl-diving and trading port into one of the wealthiest countries on Earth per capita."
                  },
                  {
                      "icon": "architecture",
                      "title": "Kuwait Towers",
                      "description": "The iconic Kuwait Towers — three elegant minaret-shaped towers overlooking the Arabian Gulf — are a symbol of modern Kuwait. The largest contains a revolving restaurant with panoramic views and was built to store water for the city."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Extreme Heat",
                      "description": "Kuwait regularly records some of the highest temperatures on Earth. In summer, temperatures can exceed 50°C (122°F). Life largely moves indoors during the peak heat hours, and virtually everything is air-conditioned."
                  },
                  {
                      "icon": "history",
                      "title": "Pearl Diving Heritage",
                      "description": "Before oil, Kuwait's economy was built on pearl diving and trade. Kuwaiti divers were renowned throughout the Gulf for their skill and bravery, diving to depths of 40 meters. The tradition is honored in museums and cultural festivals today."
                  }
              ]
          },
          "es": {
              "name": "Kuwait",
              "capital": "Ciudad de Kuwait",
              "flagDescription": "La bandera de Kuwait tiene tres franjas horizontales iguales de verde, blanco y rojo, con un trapecio negro en el lado izquierdo (asta). Los colores son colores pan-árabes usados en muchas naciones árabes: el verde representa las tierras fértiles y el Islam, el blanco significa paz y pureza, el rojo simboliza la sangre de los enemigos en la espada, y el negro representa la derrota de los enemigos.",
              "funFacts": [
                  {
                      "icon": "oil_barrel",
                      "title": "Océano de Petróleo",
                      "description": "Kuwait se asienta sobre una de las mayores reservas de petróleo del mundo. El petróleo se descubrió en 1938 y en pocas décadas transformó a Kuwait de un pequeño puerto de buceo de perlas y comercio en uno de los países más ricos de la Tierra per cápita."
                  },
                  {
                      "icon": "architecture",
                      "title": "Torres de Kuwait",
                      "description": "Las icónicas Torres de Kuwait — tres elegantes torres en forma de minarete con vistas al Golfo Arábigo — son un símbolo de la Kuwait moderna. La más grande contiene un restaurante giratorio con vistas panorámicas y fue construida para almacenar agua para la ciudad."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Calor Extremo",
                      "description": "Kuwait registra regularmente algunas de las temperaturas más altas de la Tierra. En verano, las temperaturas pueden superar los 50°C. La vida se traslada principalmente a interiores durante las horas de mayor calor, y prácticamente todo está climatizado."
                  },
                  {
                      "icon": "history",
                      "title": "Herencia del Buceo de Perlas",
                      "description": "Antes del petróleo, la economía de Kuwait se basaba en el buceo de perlas y el comercio. Los buzos kuwaitíes eran reconocidos en todo el Golfo por su habilidad y valentía, buceando a profundidades de 40 metros. La tradición se honra en museos y festivales culturales hoy en día."
                  }
              ]
          }
      }
  },
  {
      "slug": "kyrgyzstan",
      "flagCode": "kg",
      "continent": "Asia",
      "population": "7.3M",
      "region": "Central Asia",
      "translations": {
          "en": {
              "name": "Kyrgyzstan",
              "capital": "Bishkek",
              "flagDescription": "Kyrgyzstan's flag is red with a yellow sun in the center containing a red tunduk (a stylized depiction of the crown of a Kyrgyz yurt, the traditional dwelling). The red represents bravery and strength, the yellow sun symbolizes peace and prosperity, and the tunduk represents the Kyrgyz nomadic heritage.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Tian Shan Mountains",
                      "description": "The Tian Shan Mountains (\"Celestial Mountains\") dominate Kyrgyzstan with peaks over 7,000 meters. These dramatic mountains are home to rare snow leopards and ibex."
                  },
                  {
                      "icon": "auto_awesome",
                      "title": "Epic of Manas",
                      "description": "The Epic of Manas is one of the world's longest epic poems, telling stories of a legendary Kyrgyz hero. It's been passed down orally through generations and is UNESCO-protected as world heritage."
                  },
                  {
                      "icon": "public",
                      "title": "Nomadic Yurt Culture",
                      "description": "Kyrgyzstan has a strong nomadic heritage. Yurts (traditional round felt tents) are still used today, and yurt stays allow visitors to experience traditional Kyrgyz hospitality and life."
                  }
              ]
          },
          "es": {
              "name": "Kirguistán",
              "capital": "Biskek",
              "flagDescription": "La bandera de Kirguistán es roja con un sol amarillo en el centro que contiene un tunduk rojo (una representación estilizada de la corona de una yurta kirguisa, la vivienda tradicional). El rojo representa el valor y la fortaleza, el sol amarillo simboliza la paz y la prosperidad, y el tunduk representa el patrimonio nómada kirguiso.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Montañas Tian Shan",
                      "description": "Las Montañas Tian Shan (\"Montañas Celestiales\") dominan Kirguistán con picos superiores a 7.000 metros. Estas dramáticas montañas albergan raros leopardos de las nieves e íbices."
                  },
                  {
                      "icon": "auto_awesome",
                      "title": "Epopeya de Manas",
                      "description": "La Epopeya de Manas es uno de los poemas épicos más largos del mundo, narrando historias de un legendario héroe kirguiso. Ha sido transmitida oralmente a través de generaciones y está protegida por la UNESCO como patrimonio mundial."
                  },
                  {
                      "icon": "public",
                      "title": "Cultura nómada de yurtas",
                      "description": "Kirguistán tiene un fuerte patrimonio nómada. Las yurtas (tiendas de fieltro redondas tradicionales) se siguen usando hoy, y alojamientos en yurtas permiten a los visitantes experimentar la hospitalidad y vida kirguisa tradicional."
                  }
              ]
          }
      }
  },
  {
      "slug": "laos",
      "flagCode": "la",
      "continent": "Asia",
      "population": "7.6M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Laos",
              "capital": "Vientiane",
              "flagDescription": "Laos's flag has three equal horizontal stripes of red, blue, and red with a white circle in the center. The red stripes represent the blood shed for independence, the blue represents the Mekong River and prosperity, and the white circle represents the full moon and unity.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Mekong River",
                      "description": "The Mekong River flows through Laos and is vital to the country's life and economy. It's one of the world's most important rivers and supports millions of people across Southeast Asia."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Luang Prabang Temples",
                      "description": "Luang Prabang is an ancient city filled with hundreds of golden temples and Buddhist monasteries. Watching monks in saffron robes collect alms at dawn is one of Southeast Asia's most peaceful traditions."
                  },
                  {
                      "icon": "nature",
                      "title": "Karst Landscape",
                      "description": "Laos has dramatic karst limestone formations creating stunning landscapes with caves and underground rivers. The karst scenery around Vang Vieng attracts rock climbers and explorers from around the world."
                  }
              ]
          },
          "es": {
              "name": "Laos",
              "capital": "Vientián",
              "flagDescription": "La bandera de Laos tiene tres franjas horizontales iguales de rojo, azul y rojo con un círculo blanco en el centro. Las franjas rojas representan la sangre derramada por la independencia, el azul representa el río Mekong y la prosperidad, y el círculo blanco representa la luna llena y la unidad.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Río Mekong",
                      "description": "El río Mekong fluye a través de Laos y es vital para la vida y la economía del país. Es uno de los ríos más importantes del mundo y sustenta millones de personas en toda el Sudeste Asiático."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Templos de Luang Prabang",
                      "description": "Luang Prabang es una ciudad antigua llena de cientos de templos dorados y monasterios budistas. Ver a monjes con túnicas azafrán recolectando limosnas al amanecer es una de las tradiciones más pacíficas del Sudeste Asiático."
                  },
                  {
                      "icon": "nature",
                      "title": "Paisaje kárstico",
                      "description": "Laos tiene formaciones dramáticas de piedra caliza kárstica creando paisajes impresionantes con cuevas y ríos subterráneos. El paisaje kárstico alrededor de Vang Vieng atrae a escaladores y exploradores de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "latvia",
      "flagCode": "lv",
      "continent": "Europe",
      "population": "1.8M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Latvia",
              "capital": "Riga",
              "flagDescription": "Latvia's flag is one of the oldest national flags in the world — a deep carmine red divided by a narrow white horizontal stripe. The design dates back to the 13th century, when Latvian tribes used it in battle. According to legend, a Latvian chieftain was wounded in battle and his white linen was stained red on both sides, leaving a white stripe in the center where he lay — and that became the flag.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Land of Forests",
                      "description": "More than half of Latvia is covered by forests. Walking through Latvia's ancient woodlands — filled with oaks, pines, and birch trees — feels like stepping into a fairytale."
                  },
                  {
                      "icon": "celebration",
                      "title": "Song and Dance Festival",
                      "description": "Latvia's Song and Dance Festival, held every five years, gathers up to 40,000 singers and dancers in traditional costumes. It is so important to Latvian identity that it is a UNESCO Intangible Cultural Heritage."
                  },
                  {
                      "icon": "architecture",
                      "title": "Art Nouveau Capital",
                      "description": "Riga has one of the finest collections of Art Nouveau architecture in the world, with about 800 buildings decorated in elaborate floral patterns, faces, and geometric designs — a real open-air museum."
                  },
                  {
                      "icon": "star",
                      "title": "Midsummer Magic",
                      "description": "Latvians celebrate Jāņi (Midsummer) with special intensity — people gather around bonfires, weave oak-leaf crowns, sing traditional songs, and search for the mythical fern flower that blooms only on this magical night."
                  }
              ]
          },
          "es": {
              "name": "Letonia",
              "capital": "Riga",
              "flagDescription": "La bandera de Letonia es una de las banderas nacionales más antiguas del mundo: un rojo carmesí profundo dividido por una estrecha franja horizontal blanca. El diseño se remonta al siglo XIII, cuando las tribus letonas lo usaban en batalla. Según la leyenda, un jefe letón fue herido en batalla y su lino blanco se tiñó de rojo por ambos lados, dejando una franja blanca en el centro donde yacía — y así nació la bandera.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Tierra de Bosques",
                      "description": "Más de la mitad de Letonia está cubierta de bosques. Caminar por los antiguos bosques letonos — llenos de robles, pinos y abedules — es como entrar en un cuento de hadas."
                  },
                  {
                      "icon": "celebration",
                      "title": "Festival de Canto y Danza",
                      "description": "El Festival de Canto y Danza de Letonia, celebrado cada cinco años, reúne hasta 40.000 cantantes y bailarines en trajes tradicionales. Es tan importante para la identidad letona que es Patrimonio Cultural Inmaterial de la UNESCO."
                  },
                  {
                      "icon": "architecture",
                      "title": "Capital del Art Nouveau",
                      "description": "Riga tiene una de las mejores colecciones de arquitectura Art Nouveau del mundo, con unos 800 edificios decorados con elaborados patrones florales, rostros y diseños geométricos — un auténtico museo al aire libre."
                  },
                  {
                      "icon": "star",
                      "title": "Magia del Solsticio de Verano",
                      "description": "Los letonos celebran Jāņi (Midsummer) con especial intensidad — la gente se reúne alrededor de hogueras, teje coronas de hojas de roble, canta canciones tradicionales y busca la mítica flor del helecho que florece solo en esta noche mágica."
                  }
              ]
          }
      }
  },
  {
      "slug": "lebanon",
      "flagCode": "lb",
      "continent": "Asia",
      "population": "5.5M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Lebanon",
              "capital": "Beirut",
              "flagDescription": "Lebanon's flag has two red stripes separated by a white stripe with a green cedar tree in the center. The cedar is Lebanon's national symbol and appears on coins and stamps. Red represents courage and sacrifice, white symbolizes peace, and the cedar represents eternal life and resilience.",
              "funFacts": [
                  {
                      "icon": "park",
                      "title": "Iconic Cedar Trees",
                      "description": "The Cedar of Lebanon (Cedrus libani) is Lebanon's national symbol and appears on its flag. These ancient trees have been valued for over 3,000 years and are now protected in mountain reserves."
                  },
                  {
                      "icon": "history",
                      "title": "Phoenician Legacy",
                      "description": "Ancient Phoenicians from Lebanon were the world's greatest sailors and traders. They invented the alphabet (which became the basis for Arabic, Hebrew, and Greek letters) and established trade routes across the Mediterranean."
                  },
                  {
                      "icon": "location_city",
                      "title": "Paris of the Middle East",
                      "description": "Beirut was once called the \"Paris of the Middle East\" for its cosmopolitan culture, restaurants, and nightlife. It remains a vibrant city with a mix of ancient and modern architecture."
                  }
              ]
          },
          "es": {
              "name": "Líbano",
              "capital": "Beirut",
              "flagDescription": "La bandera del Líbano tiene dos franjas rojas separadas por una franja blanca con un árbol de cedro verde en el centro. El cedro es el símbolo nacional del Líbano y aparece en monedas y sellos. El rojo representa el valor y el sacrificio, el blanco simboliza la paz, y el cedro representa la vida eterna y la resiliencia.",
              "funFacts": [
                  {
                      "icon": "park",
                      "title": "Árboles de cedro icónicos",
                      "description": "El Cedro del Líbano (Cedrus libani) es el símbolo nacional del Líbano y aparece en su bandera. Estos árboles antiguos han sido valorados durante más de 3.000 años y ahora están protegidos en reservas montañosas."
                  },
                  {
                      "icon": "history",
                      "title": "Legado fenicio",
                      "description": "Los antiguos fenicios del Líbano fueron los mayores marineros y comerciantes del mundo. Inventaron el alfabeto (que se convirtió en la base de las letras árabes, hebreas y griegas) y establecieron rutas comerciales a través del Mediterráneo."
                  },
                  {
                      "icon": "location_city",
                      "title": "París de Oriente Medio",
                      "description": "Beirut fue una vez llamada la \"París de Oriente Medio\" por su cultura cosmopolita, restaurantes y vida nocturna. Sigue siendo una ciudad vibrante con una mezcla de arquitectura antigua y moderna."
                  }
              ]
          }
      }
  },
  {
      "slug": "lesotho",
      "flagCode": "ls",
      "continent": "Africa",
      "population": "2.1M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "Lesotho",
              "capital": "Maseru",
              "flagDescription": "Lesotho's flag has three horizontal stripes — blue at the top, white in the middle, and green at the bottom — with a brown Basotho hat called a mokorotlo in the center. Blue represents rain and the sky, white symbolizes peace, green stands for prosperity, and the hat represents the Sotho people and their culture.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Kingdom in the Sky",
                      "description": "Lesotho is the only country in the world where every single point of land is above 1,000 meters altitude! It is entirely surrounded by South Africa and nicknamed 'the Kingdom in the Sky'."
                  },
                  {
                      "icon": "landscape",
                      "title": "Sani Pass",
                      "description": "Sani Pass is one of the most dramatic mountain roads in southern Africa — a steep, winding track that climbs to over 2,870 meters and crosses the border between Lesotho and South Africa."
                  },
                  {
                      "icon": "pets",
                      "title": "Basotho Pony Trek",
                      "description": "The sturdy Basotho pony was bred for mountain terrain and is the best way to explore the remote Lesotho highlands. Pony trekking through misty mountain valleys is an unforgettable adventure."
                  }
              ]
          },
          "es": {
              "name": "Lesoto",
              "capital": "Maseru",
              "flagDescription": "La bandera de Lesoto tiene tres franjas horizontales: azul arriba, blanca en el centro y verde abajo, con un sombrero Basotho llamado mokorotlo en el centro. El azul representa la lluvia y el cielo, el blanco simboliza la paz, el verde representa la prosperidad, y el sombrero representa al pueblo Sotho y su cultura.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "El reino en el cielo",
                      "description": "¡Lesoto es el único país del mundo donde cada punto del territorio está por encima de los 1.000 metros de altitud! Está completamente rodeado por Sudáfrica y se le llama \"el Reino en el Cielo\"."
                  },
                  {
                      "icon": "landscape",
                      "title": "El paso de Sani",
                      "description": "El paso de Sani es uno de los caminos de montaña más espectaculares del sur de África: una pista empinada y sinuosa que asciende a más de 2.870 metros y cruza la frontera entre Lesoto y Sudáfrica."
                  },
                  {
                      "icon": "pets",
                      "title": "Cabalgata en poni Basotho",
                      "description": "El robusto poni Basotho fue criado para el terreno montañoso y es la mejor manera de explorar las remotas tierras altas de Lesoto. Cabalgar a través de neblinosos valles de montaña es una aventura inolvidable."
                  }
              ]
          }
      }
  },
  {
      "slug": "liberia",
      "flagCode": "lr",
      "continent": "Africa",
      "population": "5.2M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Liberia",
              "capital": "Monrovia",
              "flagDescription": "Liberia's flag has 11 alternating red and white horizontal stripes with a blue square in the top-left corner containing a single white star. The design was inspired by the American flag because Liberia was founded by freed American slaves. Red represents courage, white stands for purity, blue symbolizes freedom, and the lone star represents the first African republic.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "First African Republic",
                      "description": "Liberia was founded in 1822 by freed African-American slaves returning to Africa, and in 1847 it became the first independent republic in Africa — a powerful symbol of freedom on the continent."
                  },
                  {
                      "icon": "forest",
                      "title": "Pygmy Hippo Homeland",
                      "description": "The pygmy hippopotamus lives in Liberia's rainforests and is one of Africa's rarest animals. About half the world's surviving pygmy hippos live here, deep in the Sapo National Park forest."
                  },
                  {
                      "icon": "agriculture",
                      "title": "World's Largest Rubber Farm",
                      "description": "The Firestone rubber plantation established in 1926 covers over 490 square miles — once the world's largest rubber plantation in a single location, supplying rubber for tires and products globally."
                  }
              ]
          },
          "es": {
              "name": "Liberia",
              "capital": "Monrovia",
              "flagDescription": "La bandera de Liberia tiene 11 franjas horizontales alternadas rojas y blancas, con un cuadrado azul en la esquina superior izquierda que contiene una estrella blanca. El diseño fue inspirado por la bandera de EE. UU. porque Liberia fue fundada por esclavos estadounidenses liberados. El rojo representa el coraje, el blanco la pureza, el azul la libertad, y la estrella solitaria la primera república africana.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Primera república africana",
                      "description": "Liberia fue fundada en 1822 por afroamericanos liberados que regresaron a África, y en 1847 se convirtió en la primera república independiente de África, un poderoso símbolo de libertad en el continente."
                  },
                  {
                      "icon": "forest",
                      "title": "Hogar del hipopótamo pigmeo",
                      "description": "El hipopótamo pigmeo vive en las selvas de Liberia y es uno de los animales más raros de África. Aproximadamente la mitad de los hipopótamos pigmeos supervivientes del mundo viven en el Parque Nacional de Sapo."
                  },
                  {
                      "icon": "agriculture",
                      "title": "La mayor plantación de caucho del mundo",
                      "description": "La plantación de caucho de Firestone, establecida en 1926, cubre más de 1.270 km², siendo en su momento la mayor plantación de caucho del mundo, suministrando caucho para neumáticos y otros productos."
                  }
              ]
          }
      }
  },
  {
      "slug": "libya",
      "flagCode": "ly",
      "continent": "Africa",
      "population": "7.5M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Libya",
              "capital": "Tripoli",
              "flagDescription": "Libya's flag has three horizontal stripes — red at the top, black in the middle, and green at the bottom — with a white crescent moon and star on the black stripe. Red represents valor and the sacrifice of heroes, black recalls the dark era of colonization, green stands for prosperity and Islam, and the crescent and star represent the Islamic faith.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Roman City of Leptis Magna",
                      "description": "Leptis Magna near Tripoli is one of the best-preserved Roman cities in the entire world. Its enormous amphitheater, marble columns, and arches have stood for nearly 2,000 years!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Desert Country",
                      "description": "The Sahara Desert covers over 90% of Libya, making it one of the most desert-dominated countries on Earth. Huge sand seas, rocky plateaus, and ancient dry riverbeds stretch for thousands of kilometers."
                  },
                  {
                      "icon": "history",
                      "title": "Prehistoric Rock Art",
                      "description": "The Fezzan region of southern Libya contains thousands of Stone Age rock paintings depicting giraffes, elephants, and people — from a time when the Sahara was green with lakes and wildlife."
                  }
              ]
          },
          "es": {
              "name": "Libia",
              "capital": "Trípoli",
              "flagDescription": "La bandera de Libia tiene tres franjas horizontales: roja arriba, negra en el centro y verde abajo, con una media luna y una estrella blancas en la franja negra. El rojo representa el valor y el sacrificio, el negro recuerda la era oscura de la colonización, el verde representa la prosperidad y el Islam, y la media luna y la estrella representan la fe islámica.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Leptis Magna: ciudad romana",
                      "description": "¡Leptis Magna, cerca de Trípoli, es una de las ciudades romanas mejor conservadas del mundo! Sus enormes anfiteatros, columnas de mármol y arcos han resistido casi 2.000 años."
                  },
                  {
                      "icon": "landscape",
                      "title": "País desértico",
                      "description": "El desierto del Sáhara cubre más del 90% de Libia, lo que la convierte en uno de los países más desérticos del mundo. Enormes mares de arena y mesetas rocosas se extienden por miles de kilómetros."
                  },
                  {
                      "icon": "history",
                      "title": "Arte rupestre prehistórico",
                      "description": "La región de Fezzan, en el sur de Libia, contiene miles de pinturas rupestres de la Edad de Piedra con jirafas, elefantes y personas, de una época en que el Sáhara era verde con lagos y fauna abundante."
                  }
              ]
          }
      }
  },
  {
      "slug": "liechtenstein",
      "flagCode": "li",
      "continent": "Europe",
      "population": "41K",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Liechtenstein",
              "capital": "Vaduz",
              "flagDescription": "Liechtenstein's flag has two equal horizontal stripes — blue on top and red on the bottom — with a golden crown in the upper left corner. The crown was added after the 1936 Olympics, when Liechtenstein discovered their flag was identical to Haiti's! The crown represents the royal family that has ruled this tiny principality for over 300 years.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Royal Family in Residence",
                      "description": "The Prince of Liechtenstein actually lives in Vaduz Castle, overlooking the capital. Residents can see the castle lit up at night, and the royal family interacts with citizens more directly than most European royals."
                  },
                  {
                      "icon": "factory",
                      "title": "Industrial Powerhouse",
                      "description": "Despite being tiny — about 160 km² — Liechtenstein has one of the highest GDP per capita in the world. It is a major center for precision manufacturing, dental technology, and financial services."
                  },
                  {
                      "icon": "public",
                      "title": "Double Landlocked",
                      "description": "Liechtenstein is one of only two countries in the world that is doubly landlocked — surrounded entirely by countries that are themselves landlocked (Austria and Switzerland). The other is Uzbekistan."
                  },
                  {
                      "icon": "no_drinks",
                      "title": "No Army Since 1868",
                      "description": "Liechtenstein has not maintained a standing army since 1868, when it returned from its last war and decided the expense wasn't worth it. The last soldiers it sent out came back with one extra — a friend they made along the way!"
                  }
              ]
          },
          "es": {
              "name": "Liechtenstein",
              "capital": "Vaduz",
              "flagDescription": "La bandera de Liechtenstein tiene dos franjas horizontales iguales — azul arriba y roja abajo — con una corona dorada en la esquina superior izquierda. La corona se añadió después de los Juegos Olímpicos de 1936, cuando Liechtenstein descubrió que su bandera era idéntica a la de Haití. La corona representa a la familia real que ha gobernado este pequeño principado durante más de 300 años.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "La Familia Real en Residencia",
                      "description": "El Príncipe de Liechtenstein vive en el Castillo de Vaduz, con vistas a la capital. Los residentes pueden ver el castillo iluminado por la noche, y la familia real interactúa con los ciudadanos de forma más directa que la mayoría de los reyes europeos."
                  },
                  {
                      "icon": "factory",
                      "title": "Potencia Industrial",
                      "description": "A pesar de ser diminuto — unos 160 km² — Liechtenstein tiene uno de los PIB per cápita más altos del mundo. Es un gran centro de fabricación de precisión, tecnología dental y servicios financieros."
                  },
                  {
                      "icon": "public",
                      "title": "Doblemente Sin Salida al Mar",
                      "description": "Liechtenstein es uno de los dos únicos países del mundo que está doblemente sin salida al mar — rodeado por países que a su vez no tienen costa (Austria y Suiza). El otro es Uzbekistán."
                  },
                  {
                      "icon": "no_drinks",
                      "title": "Sin Ejército Desde 1868",
                      "description": "Liechtenstein no ha mantenido un ejército permanente desde 1868, cuando regresó de su última guerra y decidió que el gasto no valía la pena. ¡Los últimos soldados que envió regresaron con uno extra — un amigo que hicieron en el camino!"
                  }
              ]
          }
      }
  },
  {
      "slug": "lithuania",
      "flagCode": "lt",
      "continent": "Europe",
      "population": "2.9M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Lithuania",
              "capital": "Vilnius",
              "flagDescription": "Lithuania's flag has three equal horizontal stripes of yellow, green, and red. Yellow represents the golden fields of grain and the rising sun. Green symbolizes the deep forests that cover much of the country, hope, and freedom. Red stands for the blood and courage of Lithuanians throughout history. Together they paint a picture of a nation rooted in nature and shaped by resilience.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Europe's Last Pagan State",
                      "description": "Lithuania was the last country in Europe to officially convert to Christianity, doing so in 1387. Before that, Lithuanians practiced their ancient Baltic religion, worshipping nature gods, sacred fires, and the forces of the natural world."
                  },
                  {
                      "icon": "public",
                      "title": "Grand Duchy Giant",
                      "description": "In the 14th and 15th centuries, the Grand Duchy of Lithuania was one of the largest states in Europe, stretching from the Baltic Sea to the Black Sea — covering much of what is now Poland, Ukraine, Belarus, and Russia."
                  },
                  {
                      "icon": "sports_basketball",
                      "title": "Basketball Nation",
                      "description": "Basketball is practically a religion in Lithuania. The country has won three Olympic bronze medals, and many Lithuanian players have had successful NBA careers. On game days, the whole nation watches together."
                  },
                  {
                      "icon": "park",
                      "title": "Hill of Crosses",
                      "description": "The Hill of Crosses near Šiauliai is one of the most unique pilgrimage sites in the world — a hill covered with over 100,000 crosses of every size. People have been leaving crosses there for centuries as acts of faith and remembrance."
                  }
              ]
          },
          "es": {
              "name": "Lituania",
              "capital": "Vilnius",
              "flagDescription": "La bandera de Lituania tiene tres franjas horizontales iguales de amarillo, verde y rojo. El amarillo representa los dorados campos de cereales y el sol naciente. El verde simboliza los densos bosques que cubren gran parte del país, la esperanza y la libertad. El rojo representa la sangre y el coraje de los lituanos a lo largo de la historia. Juntos pintan el retrato de una nación arraigada en la naturaleza y forjada por la resiliencia.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El Último Estado Pagano de Europa",
                      "description": "Lituania fue el último país de Europa en convertirse oficialmente al cristianismo, en 1387. Antes, los lituanos practicaban su antigua religión báltica, venerando dioses de la naturaleza, fuegos sagrados y las fuerzas del mundo natural."
                  },
                  {
                      "icon": "public",
                      "title": "El Gigante del Gran Ducado",
                      "description": "En los siglos XIV y XV, el Gran Ducado de Lituania era uno de los estados más grandes de Europa, extendiéndose desde el mar Báltico hasta el mar Negro — cubriendo gran parte de lo que hoy es Polonia, Ucrania, Bielorrusia y Rusia."
                  },
                  {
                      "icon": "sports_basketball",
                      "title": "Nación del Baloncesto",
                      "description": "El baloncesto es prácticamente una religión en Lituania. El país ha ganado tres medallas de bronce olímpicas, y muchos jugadores lituanos han tenido exitosas carreras en la NBA. Los días de partido, toda la nación mira junta."
                  },
                  {
                      "icon": "park",
                      "title": "La Colina de las Cruces",
                      "description": "La Colina de las Cruces cerca de Šiauliai es uno de los lugares de peregrinación más únicos del mundo — una colina cubierta con más de 100.000 cruces de todos los tamaños. La gente lleva siglos dejando cruces allí como actos de fe y recuerdo."
                  }
              ]
          }
      }
  },
  {
      "slug": "luxembourg",
      "flagCode": "lu",
      "continent": "Europe",
      "population": "682K",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Luxembourg",
              "capital": "Luxembourg City",
              "flagDescription": "Luxembourg's flag has three equal horizontal stripes of red, white, and light blue — very similar to the Dutch flag but with a lighter shade of blue. The colors come from the coat of arms of the Count of Luxembourg used in the 13th century. Though simple, the flag represents a small but prosperous nation that has been at the heart of European integration for centuries.",
              "funFacts": [
                  {
                      "icon": "account_balance",
                      "title": "Banking Powerhouse",
                      "description": "Luxembourg is one of the wealthiest countries in the world per capita. It is a major European financial center, with hundreds of international banks and investment funds headquartered there — and the second largest investment fund center after the United States."
                  },
                  {
                      "icon": "language",
                      "title": "Three Official Languages",
                      "description": "Luxembourg has three official languages: Luxembourgish, French, and German. Most Luxembourgers speak all three fluently, plus often English. It's one of the most multilingual countries on Earth."
                  },
                  {
                      "icon": "castle",
                      "title": "Fortress City",
                      "description": "Luxembourg City's old fortifications are so impressive they are a UNESCO World Heritage Site. The city was once considered one of the strongest fortresses in Europe — its underground casemates tunnel for 23 kilometers beneath the city."
                  },
                  {
                      "icon": "star",
                      "title": "Founding of the EU",
                      "description": "Luxembourg was one of the six founding members of what became the European Union. Many key EU institutions are headquartered in Luxembourg City, making this tiny country a giant in European politics."
                  }
              ]
          },
          "es": {
              "name": "Luxemburgo",
              "capital": "Ciudad de Luxemburgo",
              "flagDescription": "La bandera de Luxemburgo tiene tres franjas horizontales iguales de rojo, blanco y azul claro — muy similar a la bandera holandesa pero con un tono más claro de azul. Los colores provienen del escudo de armas del Conde de Luxemburgo usado en el siglo XIII. Aunque simple, la bandera representa a una nación pequeña pero próspera que ha sido el corazón de la integración europea durante siglos.",
              "funFacts": [
                  {
                      "icon": "account_balance",
                      "title": "Potencia Bancaria",
                      "description": "Luxemburgo es uno de los países más ricos del mundo per cápita. Es un importante centro financiero europeo, con cientos de bancos internacionales y fondos de inversión con sede allí — y el segundo mayor centro de fondos de inversión después de los Estados Unidos."
                  },
                  {
                      "icon": "language",
                      "title": "Tres Idiomas Oficiales",
                      "description": "Luxemburgo tiene tres idiomas oficiales: luxemburgués, francés y alemán. La mayoría de los luxemburgueses hablan los tres con fluidez, además de a menudo inglés. Es uno de los países más multilingües de la Tierra."
                  },
                  {
                      "icon": "castle",
                      "title": "Ciudad Fortaleza",
                      "description": "Las antiguas fortificaciones de la Ciudad de Luxemburgo son tan impresionantes que son Patrimonio de la Humanidad por la UNESCO. La ciudad fue considerada una de las fortalezas más fuertes de Europa — sus casemates subterráneas se extienden 23 kilómetros bajo la ciudad."
                  },
                  {
                      "icon": "star",
                      "title": "Fundación de la UE",
                      "description": "Luxemburgo fue uno de los seis miembros fundadores de lo que se convirtió en la Unión Europea. Muchas instituciones clave de la UE tienen sede en la Ciudad de Luxemburgo, haciendo de este diminuto país un gigante de la política europea."
                  }
              ]
          }
      }
  },
  {
      "slug": "macau",
      "flagCode": "mo",
      "continent": "Asia",
      "population": "686K",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "Macau",
              "capital": "Macau",
              "flagDescription": "Macau's flag is green with the Macau emblem in white in the center. The emblem features a stylized lotus flower (symbol of purity and grace), an arched bridge (Macau-Zhuhai Bridge), and a boat representing the maritime heritage. Green represents harmony and the territory's prosperity.",
              "funFacts": [
                  {
                      "icon": "casino",
                      "title": "Gambling Capital",
                      "description": "Macau is the world's largest gambling center, surpassing even Las Vegas in gaming revenue. The glittering casinos and resorts line the skyline, making it a major Asian entertainment destination."
                  },
                  {
                      "icon": "architecture",
                      "title": "Historic Portuguese Colony",
                      "description": "Macau was the first European settlement in East Asia and remained a Portuguese colony for over 400 years until 1999. Its historic center is a UNESCO site with Portuguese architecture and traditions still visible."
                  },
                  {
                      "icon": "festival",
                      "title": "Bun Festival",
                      "description": "The Bun Festival celebrates Macau's multicultural heritage with traditional activities, opera performances, and the famous bun scrambling competition on a tower."
                  }
              ]
          },
          "es": {
              "name": "Macao",
              "capital": "Macao",
              "flagDescription": "La bandera de Macao es verde con el emblema de Macao en blanco en el centro. El emblema presenta una flor de loto estilizada (símbolo de pureza y gracia), un puente arqueado (Puente Macao-Zhuhai) y un barco que representa el patrimonio marítimo. El verde representa la armonía y la prosperidad del territorio.",
              "funFacts": [
                  {
                      "icon": "casino",
                      "title": "Capital de juego",
                      "description": "Macao es el mayor centro de juego del mundo, superando incluso a Las Vegas en ingresos de juego. Los resplandecientes casinos y resorts bordean el horizonte, lo que la convierte en un importante destino de entretenimiento asiático."
                  },
                  {
                      "icon": "architecture",
                      "title": "Colonia portuguesa histórica",
                      "description": "Macao fue el primer asentamiento europeo en Asia Oriental y permaneció como colonia portuguesa durante más de 400 años hasta 1999. Su centro histórico es un sitio de la UNESCO con arquitectura portuguesa y tradiciones aún visibles."
                  },
                  {
                      "icon": "festival",
                      "title": "Festival de bollos",
                      "description": "El Festival de Bollos celebra el patrimonio multicultural de Macao con actividades tradicionales, actuaciones de ópera y la famosa competencia de escalada de bollos en una torre."
                  }
              ]
          }
      }
  },
  {
      "slug": "madagascar",
      "flagCode": "mg",
      "continent": "Africa",
      "population": "31.7M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Madagascar",
              "capital": "Antananarivo",
              "flagDescription": "Madagascar's flag has a white vertical stripe on the left side and two horizontal stripes on the right — red on top and green on the bottom. White represents purity, red symbolizes sovereignty and the royal Merina people, and green stands for the coastal peoples and hope for the future.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Island of Unique Wildlife",
                      "description": "About 90% of Madagascar's wildlife exists NOWHERE else on Earth! This includes all 107 lemur species, over half the world's chameleons, and thousands of unique plants — like the famous upside-down-looking baobab trees."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Vanilla Capital of the World",
                      "description": "Madagascar produces about 80% of the world's natural vanilla — the most popular flavor in food and ice cream on the planet. Madagascar vanilla is considered the finest in the world."
                  },
                  {
                      "icon": "water",
                      "title": "Giant Island",
                      "description": "Madagascar is the world's 4th largest island — bigger than France! It separated from India about 88 million years ago, which is why its wildlife evolved so differently from everywhere else."
                  }
              ]
          },
          "es": {
              "name": "Madagascar",
              "capital": "Antananarivo",
              "flagDescription": "La bandera de Madagascar tiene una franja vertical blanca a la izquierda y dos franjas horizontales a la derecha: roja arriba y verde abajo. El blanco representa la pureza, el rojo simboliza la soberanía y el pueblo Merina real, y el verde representa a los pueblos costeros y la esperanza para el futuro.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Isla de fauna única",
                      "description": "¡Aproximadamente el 90% de la fauna de Madagascar no existe en ningún otro lugar de la Tierra! Esto incluye las 107 especies de lémures, más de la mitad de los camaleones del mundo y miles de plantas únicas."
                  },
                  {
                      "icon": "agriculture",
                      "title": "Capital mundial de la vainilla",
                      "description": "Madagascar produce alrededor del 80% de la vainilla natural del mundo, el sabor más popular en alimentos y helados del planeta. La vainilla malgache es considerada la mejor del mundo."
                  },
                  {
                      "icon": "water",
                      "title": "Isla gigante",
                      "description": "Madagascar es la 4ª isla más grande del mundo, ¡más grande que Francia! Se separó de India hace unos 88 millones de años, lo que explica por qué su fauna evolucionó tan diferente al resto del planeta."
                  }
              ]
          }
      }
  },
  {
      "slug": "malawi",
      "flagCode": "mw",
      "continent": "Africa",
      "population": "20.7M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Malawi",
              "capital": "Lilongwe",
              "flagDescription": "Malawi's flag has three equal horizontal stripes — black at the top, red in the middle, and green at the bottom — with a rising red sun in the center of the black stripe. Black represents the African people, red symbolizes the blood of martyrs who fought for freedom, green stands for Malawi's beautiful nature, and the rising sun represents the dawn of hope for the continent.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Lake of Stars",
                      "description": "Lake Malawi contains more fish species than any other lake on Earth — over 1,000 types of cichlid fish! The lake is so clear and beautiful it's nicknamed 'the Lake of Stars' because the fishing boats' lanterns reflect like stars at night."
                  },
                  {
                      "icon": "pets",
                      "title": "Africa's Fish Eagle",
                      "description": "The African fish eagle's piercing cry is one of the most iconic sounds in Africa and serves as Malawi's national symbol. Seeing one swoop down and snatch a fish from the lake is unforgettable."
                  },
                  {
                      "icon": "festival",
                      "title": "Warm Heart of Africa",
                      "description": "Malawi is nicknamed 'the Warm Heart of Africa' because its people are famously friendly, welcoming, and joyful. Visitors consistently say it is one of the warmest and most hospitable countries they have ever visited."
                  }
              ]
          },
          "es": {
              "name": "Malaui",
              "capital": "Lilongüe",
              "flagDescription": "La bandera de Malaui tiene tres franjas horizontales iguales: negra arriba, roja en el centro y verde abajo, con un sol naciente rojo en el centro de la franja negra. El negro representa al pueblo africano, el rojo simboliza la sangre de los mártires que lucharon por la libertad, el verde representa la hermosa naturaleza de Malaui, y el sol naciente representa el amanecer de esperanza para el continente.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "El lago de las estrellas",
                      "description": "El lago Malaui contiene más especies de peces que cualquier otro lago de la Tierra: ¡más de 1.000 tipos de peces cíclidos! El lago es tan claro y hermoso que se le llama \"el Lago de las Estrellas\" porque las linternas de los pescadores se reflejan como estrellas de noche."
                  },
                  {
                      "icon": "pets",
                      "title": "El águila pescadora africana",
                      "description": "El penetrante grito del águila pescadora africana es uno de los sonidos más icónicos de África y sirve como símbolo nacional de Malaui. Ver a una abalanzarse y atrapar un pez del lago es inolvidable."
                  },
                  {
                      "icon": "festival",
                      "title": "El corazón cálido de África",
                      "description": "Malaui tiene el apodo de \"el Corazón Cálido de África\" porque su gente es famosa por su amabilidad y hospitalidad. Los visitantes dicen que es uno de los países más acogedores que han conocido."
                  }
              ]
          }
      }
  },
  {
      "slug": "malaysia",
      "flagCode": "my",
      "continent": "Asia",
      "population": "34.2M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Malaysia",
              "capital": "Kuala Lumpur",
              "flagDescription": "Malaysia's flag (Jalur Gemilang) has 14 red and white stripes (7 each) with a blue canton containing a crescent and 14-pointed star. The colors are red and white for the nation, blue for the states, the crescent represents Islam, and the star symbolizes the 13 states and federal territories.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Petronas Twin Towers",
                      "description": "The Petronas Twin Towers in Kuala Lumpur are iconic skyscrapers connected by a skybridge. At 452 meters, they were once the world's tallest buildings and remain a symbol of Malaysia's modern development."
                  },
                  {
                      "icon": "eco",
                      "title": "Ancient Rainforest",
                      "description": "Malaysia has one of the world's oldest rainforests, estimated at 130 million years old. The rainforest is home to orangutans, tigers, and countless other species found nowhere else on Earth."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Food Capital of Asia",
                      "description": "Malaysian cuisine blends Malay, Chinese, and Indian flavors. Street food is legendary — dishes like nasi lemak, laksa, and dim sum reflect Malaysia's multicultural heritage."
                  }
              ]
          },
          "es": {
              "name": "Malasia",
              "capital": "Kuala Lumpur",
              "flagDescription": "La bandera de Malasia (Jalur Gemilang) tiene 14 franjas rojo y blancas (7 cada una) con un cantón azul que contiene una media luna y una estrella de 14 puntas. Los colores son rojo y blanco para la nación, azul para los estados, la media luna representa el Islam, y la estrella simboliza los 13 estados y territorios federales.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Torres gemelas Petronas",
                      "description": "Las Torres Gemelas Petronas en Kuala Lumpur son rascacielos icónicos conectados por un puente aéreo. Con 452 metros, una vez fueron los edificios más altos del mundo y siguen siendo un símbolo del desarrollo moderno de Malasia."
                  },
                  {
                      "icon": "eco",
                      "title": "Selva tropical antigua",
                      "description": "Malasia tiene una de las selvas tropicales más antiguas del mundo, estimada en 130 millones de años. La selva tropical es hogar de orangutanes, tigres e incontables otras especies que no existen en ningún otro lugar de la Tierra."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Capital gastronómica de Asia",
                      "description": "La cocina malaya mezcla sabores malayo, chino e indio. La comida callejera es legendaria: platos como nasi lemak, laksa y dim sum reflejan el patrimonio multicultural de Malasia."
                  }
              ]
          }
      }
  },
  {
      "slug": "maldives",
      "flagCode": "mv",
      "continent": "Asia",
      "population": "515K",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Maldives",
              "capital": "Malé",
              "flagDescription": "The Maldives flag is red with a green rectangle on the left containing a white crescent. Red represents the blood shed for independence, green represents Islam and prosperity, the crescent is an Islamic symbol, and white represents peace and purity.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Paradise Islands",
                      "description": "The Maldives is an archipelago of 1,190 coral islands in the Indian Ocean, with only 199 inhabited. The islands are famous for their pristine white-sand beaches and crystal-clear turquoise waters."
                  },
                  {
                      "icon": "scuba_diving",
                      "title": "World's Top Diving Destination",
                      "description": "The Maldives has some of the world's best coral reefs and is a paradise for snorkeling and diving. Visitors can see colorful fish, sea turtles, rays, and even whale sharks."
                  },
                  {
                      "icon": "water",
                      "title": "Lowest Country on Earth",
                      "description": "The Maldives has an average elevation of just 1.5 meters above sea level — the lowest of any country. Climate change and rising sea levels are a serious concern for the nation's future."
                  }
              ]
          },
          "es": {
              "name": "Maldivas",
              "capital": "Malé",
              "flagDescription": "La bandera de Maldivas es roja con un rectángulo verde a la izquierda que contiene una media luna blanca. El rojo representa la sangre derramada por la independencia, el verde representa el Islam y la prosperidad, la media luna es un símbolo islámico, y el blanco representa la paz y la pureza.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Islas paradisíacas",
                      "description": "Las Maldivas es un archipiélago de 1.190 islas de coral en el Océano Índico, con solo 199 habitadas. Las islas son famosas por sus playas de arena blanca virgen y aguas turquesas cristalinas."
                  },
                  {
                      "icon": "scuba_diving",
                      "title": "Mejor destino de buceo del mundo",
                      "description": "Las Maldivas tiene algunos de los mejores arrecifes de coral del mundo y es un paraíso para snorkel y buceo. Los visitantes pueden ver peces coloridos, tortugas marinas, rayas, e incluso tiburones ballena."
                  },
                  {
                      "icon": "water",
                      "title": "País más bajo de la Tierra",
                      "description": "Las Maldivas tiene una elevación promedio de solo 1,5 metros sobre el nivel del mar, la más baja de cualquier país. El cambio climático y la subida del nivel del mar son una preocupación seria para el futuro de la nación."
                  }
              ]
          }
      }
  },
  {
      "slug": "mali",
      "flagCode": "ml",
      "continent": "Africa",
      "population": "22.4M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Mali",
              "capital": "Bamako",
              "flagDescription": "Mali's flag has three equal vertical stripes of green, yellow, and red — the Pan-African colors. Green represents hope and the forests of the south, yellow symbolizes the gold and mineral wealth that made ancient Mali famous, and red stands for the blood shed for independence.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Timbuktu: City of Gold",
                      "description": "Timbuktu was one of the world's greatest centers of learning in the 14th century, with a famous university and over 700,000 ancient manuscripts still preserved there — a treasure trove of African knowledge."
                  },
                  {
                      "icon": "castle",
                      "title": "Great Mud Mosque",
                      "description": "The Great Mosque of Djenné is the world's largest mud-brick building. Every year, the entire community comes together to replaster it — one of the most remarkable communal traditions in the world."
                  },
                  {
                      "icon": "landscape",
                      "title": "Dogon Cliff Villages",
                      "description": "The Dogon people have built their villages in the cliffs of the Bandiagara Escarpment for centuries. Their unique architecture, cosmology, and art have fascinated people worldwide."
                  }
              ]
          },
          "es": {
              "name": "Malí",
              "capital": "Bamako",
              "flagDescription": "La bandera de Malí tiene tres franjas verticales iguales de verde, amarillo y rojo, los colores panafricanos. El verde representa la esperanza y los bosques del sur, el amarillo simboliza el oro y la riqueza mineral que hizo famoso al antiguo Mali, y el rojo representa la sangre derramada por la independencia.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Tombuctú: la ciudad de oro",
                      "description": "Tombuctú fue uno de los mayores centros de aprendizaje del mundo en el siglo XIV, con una famosa universidad y más de 700.000 manuscritos antiguos aún conservados, un tesoro del conocimiento africano."
                  },
                  {
                      "icon": "castle",
                      "title": "La gran mezquita de barro",
                      "description": "La Gran Mezquita de Djenné es el mayor edificio de adobe del mundo. Cada año, toda la comunidad se reúne para revocarlo, ¡una de las tradiciones comunitarias más notables del mundo!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Aldeas Dogon en los acantilados",
                      "description": "El pueblo Dogon ha construido sus aldeas en los acantilados del Escarpe de Bandiagara durante siglos. Su arquitectura única, cosmología y arte han fascinado al mundo entero."
                  }
              ]
          }
      }
  },
  {
      "slug": "malta",
      "flagCode": "mt",
      "continent": "Europe",
      "population": "574K",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Malta",
              "capital": "Valletta",
              "flagDescription": "Malta's flag has two equal vertical stripes — white on the left and red on the right — with the George Cross on the upper left. The George Cross is a British military decoration awarded to Malta in 1942 by King George VI for the island's extraordinary bravery during WWII, when it endured intense bombing while remaining a vital Allied base.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Ancient Megalithic Temples",
                      "description": "Malta is home to the world's oldest freestanding stone structures — the Megalithic Temples, built around 3600–2500 BC, predating Stonehenge and the Egyptian pyramids. These incredible buildings are a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "anchor",
                      "title": "Knights of Malta",
                      "description": "For over 250 years (1530–1798), Malta was ruled by the Knights of St. John, a Christian military order. They transformed Valletta into one of the most fortified cities in the world and built hospitals, churches, and palaces."
                  },
                  {
                      "icon": "language",
                      "title": "Arabic Roots",
                      "description": "Maltese is the only Semitic language written in Latin script, and the only official EU language with Arabic roots. It evolved from medieval Sicilian Arabic mixed with Italian, French, and English — a linguistic treasure."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Sunshine Capital of Europe",
                      "description": "Malta enjoys more than 300 sunny days per year — one of the sunniest places in Europe. Its warm climate, crystal-clear waters, and historic towns make it one of the most visited places per square kilometer in the world."
                  }
              ]
          },
          "es": {
              "name": "Malta",
              "capital": "La Valeta",
              "flagDescription": "La bandera de Malta tiene dos franjas verticales iguales — blanca a la izquierda y roja a la derecha — con la Cruz de Jorge en la parte superior izquierda. La Cruz de Jorge es una condecoración militar británica otorgada a Malta en 1942 por el rey Jorge VI por el extraordinario valor de la isla durante la Segunda Guerra Mundial, cuando soportó intensos bombardeos mientras seguía siendo una base aliada vital.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Templos Megalíticos Antiguos",
                      "description": "Malta alberga las estructuras de piedra independientes más antiguas del mundo — los Templos Megalíticos, construidos alrededor del 3600–2500 a.C., anteriores a Stonehenge y las pirámides egipcias. Estos increíbles edificios son Patrimonio de la Humanidad por la UNESCO."
                  },
                  {
                      "icon": "anchor",
                      "title": "Caballeros de Malta",
                      "description": "Durante más de 250 años (1530–1798), Malta fue gobernada por los Caballeros de San Juan, una orden militar cristiana. Transformaron La Valeta en una de las ciudades más fortificadas del mundo y construyeron hospitales, iglesias y palacios."
                  },
                  {
                      "icon": "language",
                      "title": "Raíces Árabes",
                      "description": "El maltés es el único idioma semítico escrito en alfabeto latino, y el único idioma oficial de la UE con raíces árabes. Evolucionó del árabe siciliano medieval mezclado con italiano, francés e inglés — un tesoro lingüístico."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Capital del Sol de Europa",
                      "description": "Malta disfruta de más de 300 días soleados al año — uno de los lugares más soleados de Europa. Su cálido clima, aguas cristalinas y pueblos históricos lo convierten en uno de los lugares más visitados por kilómetro cuadrado del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "marshall-islands",
      "flagCode": "mh",
      "continent": "Oceania",
      "population": "42K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Marshall Islands",
              "capital": "Majuro",
              "flagDescription": "The Marshall Islands flag has a blue background with two diagonal stripes of orange and white rising from the lower left to the upper right. A large white star with 24 points sits in the upper hoist corner. The blue represents the Pacific Ocean, the stripes symbolize the two main island chains (Ratak and Ralik, meaning Sunrise and Sunset), and the star's points represent the 24 municipalities.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Nuclear Testing Legacy",
                      "description": "The Marshall Islands was the site of 67 US nuclear tests between 1946 and 1958, including the massive Bikini Atoll tests. The nuclear legacy caused significant environmental damage and health issues for islanders, and the affected atolls remain too radioactive to inhabit today."
                  },
                  {
                      "icon": "waves",
                      "title": "Stick Chart Navigation",
                      "description": "Ancient Marshallese navigators used stick charts — intricate maps made of sticks and shells representing wave patterns and island positions — to navigate the open ocean. This sophisticated navigation system allowed them to voyage hundreds of miles without any modern instruments."
                  },
                  {
                      "icon": "anchor",
                      "title": "Atoll Nation",
                      "description": "The Marshall Islands consists entirely of coral atolls and reef islands — 1,156 individual islands and islets spread across 29 atolls. No point in the country is more than a few meters above sea level, making it one of the most vulnerable nations to sea level rise."
                  },
                  {
                      "icon": "public",
                      "title": "Free Association with the USA",
                      "description": "The Marshall Islands is in free association with the United States, which provides defense and financial assistance in exchange for the right to maintain military bases. Marshallese citizens can live and work in the US without a visa."
                  }
              ]
          },
          "es": {
              "name": "Islas Marshall",
              "capital": "Majuro",
              "flagDescription": "La bandera de las Islas Marshall tiene un fondo azul con dos franjas diagonales de naranja y blanco que suben desde la parte inferior izquierda hasta la parte superior derecha. Una gran estrella blanca con 24 puntas se asienta en la esquina superior izquierda. El azul representa el Océano Pacífico, las franjas simbolizan las dos cadenas de islas principales (Ratak y Ralik, que significan Amanecer y Atardecer), y las puntas de la estrella representan los 24 municipios.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Legado de las Pruebas Nucleares",
                      "description": "Las Islas Marshall fue el sitio de 67 pruebas nucleares estadounidenses entre 1946 y 1958, incluidas las masivas pruebas del Atolón Bikini. El legado nuclear causó daños ambientales significativos y problemas de salud para los isleños, y los atolones afectados siguen siendo demasiado radiactivos para habitarlos hoy."
                  },
                  {
                      "icon": "waves",
                      "title": "Navegación con Cartas de Palos",
                      "description": "Los antiguos navegantes marshaleses usaban cartas de palos — mapas intrincados hechos de palos y conchas que representan patrones de olas y posiciones de islas — para navegar por el océano abierto. Este sofisticado sistema de navegación les permitía viajar cientos de millas sin ningún instrumento moderno."
                  },
                  {
                      "icon": "anchor",
                      "title": "Nación de Atolones",
                      "description": "Las Islas Marshall consisten enteramente en atolones de coral e islas de arrecife — 1.156 islas e islotes individuales dispersos en 29 atolones. Ningún punto del país está a más de unos pocos metros sobre el nivel del mar, lo que lo convierte en una de las naciones más vulnerables al aumento del nivel del mar."
                  },
                  {
                      "icon": "public",
                      "title": "Libre Asociación con EE.UU.",
                      "description": "Las Islas Marshall están en libre asociación con los Estados Unidos, que proporciona defensa y asistencia financiera a cambio del derecho a mantener bases militares. Los ciudadanos marshaleses pueden vivir y trabajar en EE.UU. sin visado."
                  }
              ]
          }
      }
  },
  {
      "slug": "martinique",
      "flagCode": "mq",
      "continent": "North America",
      "population": "375K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Martinique",
          "capital": "Fort-de-France",
          "flagDescription": "Martinique uses the French flag (blue, white, and red vertical stripes) as it is an overseas region of France. The island blends French and Caribbean cultures with tropical beauty.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Tropical Beauty",
            "description": "Martinique is known for its tropical beaches, lush vegetation, and pleasant Caribbean climate."
          },
          {
            "icon": "terrain",
            "title": "Mount Pelée",
            "description": "Mount Pelée is an active volcano that devastated the capital in 1902, one of history's deadliest eruptions."
          },
          {
            "icon": "public",
            "title": "French Caribbean",
            "description": "As an overseas region of France, Martinique is part of the European Union and uses the Euro currency."
          },
          {
            "icon": "public",
            "title": "Creole Heritage",
            "description": "Martinique has a rich creole culture blending African, French, and Caribbean influences."
          }
          ]
        },
        "es": {
          "name": "Martinica",
          "capital": "Fort-de-France",
          "flagDescription": "Martinica utiliza la bandera francesa (franjas verticales azul, blanco y rojo) ya que es una región de ultramar de Francia. La isla combina culturas francesas y caribeñas con belleza tropical.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Belleza Tropical",
            "description": "Martinica es conocida por sus playas tropicales, vegetación exuberante y agradable clima caribeño."
          },
          {
            "icon": "terrain",
            "title": "Monte Pelée",
            "description": "El Monte Pelée es un volcán activo que devastó la capital en 1902, una de las erupciones más mortíferas de la historia."
          },
          {
            "icon": "public",
            "title": "Caribe Francés",
            "description": "Como región de ultramar de Francia, Martinica es parte de la Unión Europea y utiliza la moneda Euro."
          },
          {
            "icon": "public",
            "title": "Herencia Criolla",
            "description": "Martinica tiene una cultura criolla rica que mezcla influencias africanas, francesas y caribeñas."
          }
          ]
        }
      }
  },
  {
      "slug": "mauritania",
      "flagCode": "mr",
      "continent": "Africa",
      "population": "4.9M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Mauritania",
              "capital": "Nouakchott",
              "flagDescription": "Mauritania's flag is green with a gold crescent moon and a gold five-pointed star in the center, plus thin red stripes at the top and bottom (added in 2017). Green and gold represent Islam and the Saharan heritage of the country, while the red stripes symbolize the blood and effort of the Mauritanian people.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Ancient Manuscript Libraries",
                      "description": "The medieval city of Chinguetti contains ancient libraries with hundreds of thousands of priceless manuscripts from the 13th century — a treasure of Islamic scholarship in the middle of the Sahara Desert."
                  },
                  {
                      "icon": "train",
                      "title": "World's Longest Train",
                      "description": "The Mauritanian Iron Ore Train runs nearly 700 km through the Sahara Desert and is sometimes over 2 km long — one of the longest trains in the world! Adventurous travelers ride on top of the iron ore cars."
                  },
                  {
                      "icon": "pets",
                      "title": "Millions of Migratory Birds",
                      "description": "Banc d'Arguin National Park (UNESCO) is one of the world's most important stopovers for migratory birds. Millions of flamingos, pelicans, and wading birds rest here on their journey between Europe and Africa."
                  }
              ]
          },
          "es": {
              "name": "Mauritania",
              "capital": "Nuakchot",
              "flagDescription": "La bandera de Mauritania es verde con una media luna dorada y una estrella dorada de cinco puntas en el centro, más delgadas franjas rojas en la parte superior e inferior (añadidas en 2017). El verde y el dorado representan el Islam y el patrimonio sahariano, mientras que las franjas rojas simbolizan la sangre y el esfuerzo del pueblo mauritano.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Bibliotecas de manuscritos ancestrales",
                      "description": "La ciudad medieval de Chinguetti contiene antiguas bibliotecas con cientos de miles de manuscritos del siglo XIII, un tesoro de sabiduría islámica en medio del desierto del Sáhara."
                  },
                  {
                      "icon": "train",
                      "title": "El tren más largo del mundo",
                      "description": "El tren de mineral de hierro de Mauritania recorre casi 700 km a través del Sáhara y a veces supera los 2 km de longitud, ¡uno de los más largos del mundo! Los viajeros aventureros montan sobre los vagones de mineral."
                  },
                  {
                      "icon": "pets",
                      "title": "Millones de aves migratorias",
                      "description": "El Parque Nacional Banc d'Arguin (UNESCO) es uno de los puntos de parada más importantes del mundo para las aves migratorias. Millones de flamencos, pelícanos y limícolas descansan aquí en su viaje entre Europa y África."
                  }
              ]
          }
      }
  },
  {
      "slug": "mauritius",
      "flagCode": "mu",
      "continent": "Africa",
      "population": "1.2M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Mauritius",
              "capital": "Port Louis",
              "flagDescription": "The Mauritius flag has four equal horizontal stripes of red, blue, yellow, and green — one of the most colorful flags in Africa. Red represents the nation and the blood of independence, blue symbolizes the Indian Ocean that surrounds the island, yellow stands for the bright light of freedom, and green represents the lush vegetation of this tropical island.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Home of the Dodo",
                      "description": "The dodo bird lived only on Mauritius and became extinct around 1690 after sailors and their animals arrived on the island. It became one of the most famous examples of human-caused extinction in history."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Cultural Melting Pot",
                      "description": "Mauritius has a beautiful blend of Indian, African, European, and Chinese cultures reflected in its food, music, and festivals. Dishes like dholl puri (flatbread with lentils) and the rougaille (tomato stew) tell the story of the island."
                  },
                  {
                      "icon": "waves",
                      "title": "Lagoon Paradise",
                      "description": "Mauritius is surrounded by a coral reef that creates stunning calm lagoons perfect for snorkeling. Colorful fish, sea turtles, and dolphins swim in the warm turquoise waters year-round."
                  }
              ]
          },
          "es": {
              "name": "Mauricio",
              "capital": "Port Louis",
              "flagDescription": "La bandera de Mauricio tiene cuatro franjas horizontales iguales de rojo, azul, amarillo y verde, una de las banderas más coloridas de África. El rojo representa la nación y la sangre de la independencia, el azul simboliza el Océano Índico que rodea la isla, el amarillo representa la luz brillante de la libertad, y el verde la exuberante vegetación tropical.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "El hogar del dodo",
                      "description": "El dodo vivió solo en Mauricio y se extinguió hacia 1690 tras la llegada de marineros y sus animales a la isla. Se convirtió en uno de los ejemplos más famosos de extinción causada por los seres humanos."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Crisol cultural",
                      "description": "Mauricio tiene una hermosa mezcla de culturas india, africana, europea y china reflejada en su gastronomía, música y festividades. Platos como el dholl puri y la rougaille cuentan la historia de la isla."
                  },
                  {
                      "icon": "waves",
                      "title": "Paraíso de lagunas",
                      "description": "Mauricio está rodeado por un arrecife de coral que crea impresionantes lagunas tranquilas perfectas para el snorkel. Peces de colores, tortugas marinas y delfines nadan en sus cálidas aguas turquesas todo el año."
                  }
              ]
          }
      }
  },
  {
      "slug": "mayotte",
      "flagCode": "yt",
      "continent": "Africa",
      "population": "321K",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Mayotte",
              "capital": "Mamoudzou",
              "flagDescription": "As a French overseas department, Mayotte uses the French flag — three equal vertical stripes of blue, white, and red. The island also has its own coat of arms featuring two ylang-ylang flowers, which grow abundantly here and are famous for their sweet fragrance.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Giant Lagoon",
                      "description": "Mayotte has one of the world's largest naturally enclosed lagoons, protecting incredible marine life including nesting sea turtles, colorful coral reefs, and bottlenose dolphins that play in the warm waters."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Ylang-Ylang Paradise",
                      "description": "Ylang-ylang flowers grow abundantly in Mayotte and are harvested to make some of the world's most famous perfumes. The sweet, exotic scent fills the air across the island."
                  },
                  {
                      "icon": "pets",
                      "title": "Home of Dugongs",
                      "description": "Dugongs — rare sea mammals related to manatees — live in the seagrass beds of Mayotte's lagoon. These gentle creatures can live up to 70 years and are a protected species."
                  }
              ]
          },
          "es": {
              "name": "Mayotte",
              "capital": "Mamoudzou",
              "flagDescription": "Como departamento de ultramar francés, Mayotte usa la bandera de Francia: tres franjas verticales iguales de azul, blanco y rojo. La isla también tiene su propio escudo con dos flores de ylang-ylang, que crecen abundantemente aquí y son famosas por su dulce fragancia.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Laguna gigante",
                      "description": "Mayotte tiene una de las lagunas naturalmente cerradas más grandes del mundo, que protege increíble vida marina: tortugas marinas, coloridos arrecifes de coral y delfines nariz de botella que juegan en sus aguas cálidas."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Paraíso del ylang-ylang",
                      "description": "Las flores de ylang-ylang crecen abundantemente en Mayotte y se cosechan para elaborar algunos de los perfumes más famosos del mundo. Su dulce y exótico aroma impregna el aire de la isla."
                  },
                  {
                      "icon": "pets",
                      "title": "Hogar de dugongos",
                      "description": "Los dugongos, raros mamíferos marinos emparentados con los manatíes, viven en los lechos de hierbas marinas de la laguna de Mayotte. Estas criaturas gentiles pueden vivir hasta 70 años y son una especie protegida."
                  }
              ]
          }
      }
  },
  {
      "slug": "mexico",
      "flagCode": "mx",
      "continent": "North America",
      "population": "128.3M",
      "region": "North America",
      "translations": {
        "en": {
          "name": "Mexico",
          "capital": "Mexico City",
          "flagDescription": "Mexico's flag has three vertical stripes of green, white, and red. The center features the national coat of arms: an eagle perched on a cactus, eating a snake. This symbolizes the founding of Mexico City. The green represents hope, white represents peace, and red represents the blood of patriots.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Aztec Legacy",
            "description": "Mexico was the center of the Aztec Empire, with ruins still visible in Mexico City including Templo Mayor."
          },
          {
            "icon": "landscape",
            "title": "Chichen Itza",
            "description": "Chichen Itza is one of the New Seven Wonders of the World, an impressive Mayan-Aztec archaeological site."
          },
          {
            "icon": "celebration",
            "title": "Día de Muertos",
            "description": "Day of the Dead is a unique Mexican celebration honoring deceased loved ones with colorful altars and traditions."
          },
          {
            "icon": "public",
            "title": "Most Populous Spanish-Speaking Nation",
            "description": "Mexico is the most populous Spanish-speaking country in the world."
          }
          ]
        },
        "es": {
          "name": "México",
          "capital": "Ciudad de México",
          "flagDescription": "La bandera de México tiene tres franjas verticales de verde, blanco y rojo. El centro presenta el escudo de armas nacional: un águila encaramada en un cactus, comiendo una serpiente. Esto simboliza la fundación de la Ciudad de México. El verde representa la esperanza, el blanco representa la paz, y el rojo representa la sangre de los patriotas.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Legado Azteca",
            "description": "México fue el centro del Imperio Azteca, con ruinas aún visibles en la Ciudad de México incluyendo el Templo Mayor."
          },
          {
            "icon": "landscape",
            "title": "Chichén Itzá",
            "description": "Chichén Itzá es una de las Nuevas Siete Maravillas del Mundo, un impresionante sitio arqueológico maya-azteca."
          },
          {
            "icon": "celebration",
            "title": "Día de Muertos",
            "description": "Día de Muertos es una celebración única mexicana que honra a los seres queridos fallecidos con altares coloridos y tradiciones."
          },
          {
            "icon": "public",
            "title": "Nación Hispanohablante Más Poblada",
            "description": "México es el país hispanohablante más poblado del mundo."
          }
          ]
        }
      }
  },
  {
      "slug": "micronesia",
      "flagCode": "fm",
      "continent": "Oceania",
      "population": "106K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Micronesia",
              "capital": "Palikir",
              "flagDescription": "The Federated States of Micronesia's flag is a sky blue background with four white five-pointed stars arranged in a diamond pattern in the center. The blue represents the Pacific Ocean, and the four stars represent the four federated states: Chuuk, Pohnpei, Kosrae, and Yap. The original flag had just one star when the federation was formed in 1965, with more added as states joined.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Nan Madol: City in the Sea",
                      "description": "Nan Madol is one of the most mysterious archaeological sites in the Pacific — an ancient city built on a coral reef, with 92 man-made islets connected by canals. Built around 1200 AD, this remarkable stone city is sometimes called the Venice of the Pacific and is a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "waves",
                      "title": "Chuuk Lagoon Wrecks",
                      "description": "Chuuk Lagoon is considered the world's greatest wreck diving site. In 1944, the US Navy sank 60 Japanese ships in a single surprise attack (Operation Hailstone). Today those ships rest at the bottom of the lagoon, covered in coral and teeming with fish."
                  },
                  {
                      "icon": "payments",
                      "title": "Stone Money",
                      "description": "The island of Yap is famous for its rai — giant stone discs up to 4 meters in diameter used as currency. Even when a stone sinks to the bottom of the ocean, everyone knows who owns it, and it still holds value. It's one of the most unusual monetary systems ever devised."
                  },
                  {
                      "icon": "public",
                      "title": "Free Association with the USA",
                      "description": "Micronesia is in free association with the United States. Micronesians can freely enter, live, and work in the US without a visa. The US provides extensive financial aid and defense commitments in return."
                  }
              ]
          },
          "es": {
              "name": "Micronesia",
              "capital": "Palikir",
              "flagDescription": "La bandera de los Estados Federados de Micronesia tiene un fondo azul cielo con cuatro estrellas blancas de cinco puntas dispuestas en forma de diamante en el centro. El azul representa el Océano Pacífico, y las cuatro estrellas representan los cuatro estados federados: Chuuk, Pohnpei, Kosrae y Yap. La bandera original tenía solo una estrella cuando se formó la federación en 1965, añadiéndose más a medida que los estados se unían.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Nan Madol: Ciudad en el Mar",
                      "description": "Nan Madol es uno de los sitios arqueológicos más misteriosos del Pacífico — una ciudad antigua construida sobre un arrecife de coral, con 92 islotes artificiales conectados por canales. Construida alrededor del año 1200 d.C., esta notable ciudad de piedra es a veces llamada la Venecia del Pacífico y es Patrimonio de la Humanidad por la UNESCO."
                  },
                  {
                      "icon": "waves",
                      "title": "Los Naufragios de la Laguna de Chuuk",
                      "description": "La Laguna de Chuuk es considerada el mejor sitio de buceo en naufragios del mundo. En 1944, la Marina de EE.UU. hundió 60 barcos japoneses en un único ataque sorpresa (Operación Hailstone). Hoy esos barcos descansan en el fondo de la laguna, cubiertos de coral y repletos de peces."
                  },
                  {
                      "icon": "payments",
                      "title": "Dinero de Piedra",
                      "description": "La isla de Yap es famosa por sus rai — enormes discos de piedra de hasta 4 metros de diámetro usados como moneda. Incluso cuando una piedra se hunde al fondo del océano, todos saben quién es el dueño, y sigue teniendo valor. Es uno de los sistemas monetarios más inusuales jamás ideados."
                  },
                  {
                      "icon": "public",
                      "title": "Libre Asociación con EE.UU.",
                      "description": "Micronesia está en libre asociación con los Estados Unidos. Los micronesios pueden entrar, vivir y trabajar libremente en EE.UU. sin visado. EE.UU. proporciona amplia ayuda financiera y compromisos de defensa a cambio."
                  }
              ]
          }
      }
  },
  {
      "slug": "moldova",
      "flagCode": "md",
      "continent": "Europe",
      "population": "2.7M",
      "region": "Eastern Europe",
      "translations": {
          "en": {
              "name": "Moldova",
              "capital": "Chișinău",
              "flagDescription": "Moldova's flag has three vertical stripes of blue, yellow, and red — the same colors as Romania's flag, reflecting their shared Romanian heritage. In the center is Moldova's coat of arms showing an eagle holding a golden cross, an olive branch, and a scepter, with a shield bearing an aurochs head, a star, a rose, and a crescent — symbols rooted in ancient Moldovan history.",
              "funFacts": [
                  {
                      "icon": "wine_bar",
                      "title": "Wine Country",
                      "description": "Moldova is one of the world's most wine-dense countries per capita. It has some of the oldest winemaking traditions in the world — over 5,000 years — and the Cricova winery has tunnels stretching 120 km underground filled with millions of bottles."
                  },
                  {
                      "icon": "history",
                      "title": "Soviet Past",
                      "description": "Moldova was part of the Soviet Union until 1991. Today it is the poorest country in Europe by GDP, but its people are known for their warmth, resilience, and incredibly generous hospitality."
                  },
                  {
                      "icon": "castle",
                      "title": "Soroca Fortress",
                      "description": "The Soroca Fortress, built in the 15th–16th centuries on the banks of the Dniester River, is one of Moldova's most iconic landmarks. Its perfectly circular design is unique among medieval European fortresses."
                  },
                  {
                      "icon": "celebration",
                      "title": "Wine Festival",
                      "description": "Moldova's National Wine Day, held every October, is one of Europe's biggest wine festivals. Wineries open their doors, music fills the streets, and the entire country celebrates its most cherished tradition."
                  }
              ]
          },
          "es": {
              "name": "Moldavia",
              "capital": "Chișinău",
              "flagDescription": "La bandera de Moldavia tiene tres franjas verticales de azul, amarillo y rojo — los mismos colores que la bandera de Rumanía, reflejando su herencia rumana compartida. En el centro está el escudo de armas de Moldavia que muestra un águila sosteniendo una cruz dorada, una rama de olivo y un cetro, con un escudo que lleva una cabeza de uro, una estrella, una rosa y una media luna — símbolos arraigados en la antigua historia moldava.",
              "funFacts": [
                  {
                      "icon": "wine_bar",
                      "title": "País del Vino",
                      "description": "Moldavia es uno de los países con más densidad de vino per cápita del mundo. Tiene algunas de las tradiciones vinícolas más antiguas del mundo — más de 5.000 años — y la bodega Cricova tiene túneles que se extienden 120 km bajo tierra llenos de millones de botellas."
                  },
                  {
                      "icon": "history",
                      "title": "Pasado Soviético",
                      "description": "Moldavia formó parte de la Unión Soviética hasta 1991. Hoy es el país más pobre de Europa por PIB, pero su gente es conocida por su calidez, resiliencia y una hospitalidad increíblemente generosa."
                  },
                  {
                      "icon": "castle",
                      "title": "Fortaleza de Soroca",
                      "description": "La Fortaleza de Soroca, construida en los siglos XV–XVI a orillas del río Dniéster, es uno de los hitos más icónicos de Moldavia. Su diseño perfectamente circular es único entre las fortalezas medievales europeas."
                  },
                  {
                      "icon": "celebration",
                      "title": "Festival del Vino",
                      "description": "El Día Nacional del Vino de Moldavia, celebrado cada octubre, es uno de los mayores festivales de vino de Europa. Las bodegas abren sus puertas, la música llena las calles y todo el país celebra su tradición más querida."
                  }
              ]
          }
      }
  },
  {
      "slug": "monaco",
      "flagCode": "mc",
      "continent": "Europe",
      "population": "38K",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Monaco",
              "capital": "Monaco",
              "flagDescription": "Monaco's flag is one of the simplest in the world — two equal horizontal bands, red on top and white on the bottom. These colors have been associated with the Grimaldi family, Monaco's ruling dynasty, since the 13th century. Interestingly, the flag is almost identical to Indonesia's flag — both have red on top and white on the bottom — though Monaco's flag is square while Indonesia's is rectangular.",
              "funFacts": [
                  {
                      "icon": "sports_motorsports",
                      "title": "Formula 1 Street Circuit",
                      "description": "The Monaco Grand Prix is one of the most prestigious races in Formula 1. Drivers race through Monaco's narrow streets, tunnels, and tight corners — it is incredibly difficult to overtake and widely considered the most glamorous race in the world."
                  },
                  {
                      "icon": "casino",
                      "title": "Casino Capital",
                      "description": "The Monte Carlo Casino is one of the most famous gambling venues in the world. Ironically, Monegasque citizens are banned from gambling in the casino — it's reserved for tourists."
                  },
                  {
                      "icon": "castle",
                      "title": "Oldest Ruling Family",
                      "description": "The Grimaldi family has ruled Monaco almost continuously since 1297 — making it one of the world's oldest ruling dynasties. Prince Albert II currently leads this tiny principality with great flair and global influence."
                  },
                  {
                      "icon": "eco",
                      "title": "Tiny but Green",
                      "description": "Despite being the world's second smallest country and one of the most densely populated, Monaco is surprisingly eco-conscious. It aims to be carbon neutral by 2050 and has built an entire district on land reclaimed from the sea."
                  }
              ]
          },
          "es": {
              "name": "Mónaco",
              "capital": "Mónaco",
              "flagDescription": "La bandera de Mónaco es una de las más simples del mundo: dos bandas horizontales iguales, roja arriba y blanca abajo. Estos colores han estado asociados con la familia Grimaldi, la dinastía gobernante de Mónaco, desde el siglo XIII. Curiosamente, la bandera es casi idéntica a la de Indonesia — ambas tienen rojo arriba y blanco abajo — aunque la de Mónaco es cuadrada mientras que la de Indonesia es rectangular.",
              "funFacts": [
                  {
                      "icon": "sports_motorsports",
                      "title": "Circuito Callejero de Fórmula 1",
                      "description": "El Gran Premio de Mónaco es una de las carreras más prestigiosas de la Fórmula 1. Los pilotos corren por las estrechas calles de Mónaco, túneles y curvas cerradas — es increíblemente difícil adelantar y ampliamente considerada la carrera más glamurosa del mundo."
                  },
                  {
                      "icon": "casino",
                      "title": "Capital del Casino",
                      "description": "El Casino de Montecarlo es uno de los lugares de juego más famosos del mundo. Irónicamente, los ciudadanos monegascos tienen prohibido jugar en el casino — está reservado para los turistas."
                  },
                  {
                      "icon": "castle",
                      "title": "La Familia Gobernante Más Antigua",
                      "description": "La familia Grimaldi ha gobernado Mónaco casi sin interrupción desde 1297 — convirtiéndola en una de las dinastías gobernantes más antiguas del mundo. El Príncipe Alberto II lidera actualmente este diminuto principado con gran estilo e influencia global."
                  },
                  {
                      "icon": "eco",
                      "title": "Pequeño pero Verde",
                      "description": "A pesar de ser el segundo país más pequeño del mundo y uno de los más densamente poblados, Mónaco es sorprendentemente ecológico. Aspira a ser neutral en carbono para 2050 y ha construido un distrito entero en tierra recuperada del mar."
                  }
              ]
          }
      }
  },
  {
      "slug": "mongolia",
      "flagCode": "mn",
      "continent": "Asia",
      "population": "3.5M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "Mongolia",
              "capital": "Ulaanbaatar",
              "flagDescription": "Mongolia's flag has a gold-red vertical stripe in the center flanked by two red stripes, with a gold national emblem on the hoist side. Red represents the power and determination of the Mongolian people, and the emblem (Soyombo symbol) represents independence and cultural heritage.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Land of Genghis Khan",
                      "description": "Mongolia was the birthplace of Genghis Khan, who created the largest land empire in history. At its peak, the Mongol Empire stretched from China to Europe — the largest continuous land empire ever!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Gobi Desert",
                      "description": "The Gobi Desert is one of the largest deserts in Asia, covering Mongolia, China, and beyond. It's home to unique wildlife like wild camels, snow leopards, and fossils of prehistoric dinosaurs."
                  },
                  {
                      "icon": "public",
                      "title": "Nomadic Heritage",
                      "description": "Nomadic pastoralism is still part of Mongolian culture. Herders live in gers (yurts) and move seasonally with their flocks of sheep, goats, and horses across the vast steppes."
                  }
              ]
          },
          "es": {
              "name": "Mongolia",
              "capital": "Ulán Bator",
              "flagDescription": "La bandera de Mongolia tiene una franja vertical dorada-roja en el centro flanqueada por dos franjas rojas, con un emblema nacional dorado en el lado del asta. El rojo representa el poder y la determinación del pueblo mongol, y el emblema (símbolo Soyombo) representa la independencia y el patrimonio cultural.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Tierra de Gengis Khan",
                      "description": "Mongolia fue la cuna de Gengis Khan, quien creó el imperio terrestre más grande de la historia. En su apogeo, el Imperio Mongol se extendía desde China hasta Europa, ¡el imperio terrestre continuo más grande jamás!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Desierto de Gobi",
                      "description": "El Desierto de Gobi es uno de los mayores desiertos de Asia, cubriendo Mongolia, China y más allá. Es hogar de fauna única como camellos salvajes, leopardos de las nieves y fósiles de dinosaurios prehistóricos."
                  },
                  {
                      "icon": "public",
                      "title": "Patrimonio nómada",
                      "description": "El pastoralismo nómada sigue siendo parte de la cultura mongola. Los pastores viven en gers (yurtas) y se mueven estacionalmente con sus rebaños de ovejas, cabras y caballos a través de las vastas estepas."
                  }
              ]
          }
      }
  },
  {
      "slug": "montenegro",
      "flagCode": "me",
      "continent": "Europe",
      "population": "623K",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Montenegro",
              "capital": "Podgorica",
              "flagDescription": "Montenegro's flag has a golden-yellow border around a red field, with the country's coat of arms in the center — a golden double-headed eagle holding a blue-shielded lion. This design brings together centuries of Montenegrin heraldic tradition. The name 'Montenegro' means 'Black Mountain' in Italian and Venetian, inspired by the dark appearance of Mount Lovćen.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Black Mountain Beauty",
                      "description": "Montenegro's landscape is breathtaking — from the dramatic peaks of the Durmitor National Park (a UNESCO World Heritage Site) to the medieval walled city of Kotor, nestled between mountains and a stunning bay."
                  },
                  {
                      "icon": "waves",
                      "title": "Deepest Canyon in Europe",
                      "description": "The Tara River Canyon is the deepest canyon in Europe and the second deepest in the world after the Grand Canyon. Its turquoise waters are perfect for white-water rafting through ancient forests."
                  },
                  {
                      "icon": "history",
                      "title": "Oldest Royal Dynasty",
                      "description": "Montenegro was an independent kingdom for centuries before joining Yugoslavia. Its royal Petrović-Njegoš dynasty produced not only kings but also poets, bishops, and diplomats — rare in European history."
                  },
                  {
                      "icon": "anchor",
                      "title": "Bay of Kotor",
                      "description": "The Bay of Kotor is the only fjord-like bay in the Mediterranean — a stunning winding inlet surrounded by steep mountains and dotted with medieval towns and Venetian fortifications."
                  }
              ]
          },
          "es": {
              "name": "Montenegro",
              "capital": "Podgorica",
              "flagDescription": "La bandera de Montenegro tiene un borde amarillo dorado alrededor de un campo rojo, con el escudo de armas del país en el centro — un águila bicéfala dorada sosteniendo un león en escudo azul. Este diseño reúne siglos de tradición heráldica montenegrina. El nombre 'Montenegro' significa 'Montaña Negra' en italiano y veneciano, inspirado en la apariencia oscura del monte Lovćen.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "La Belleza de la Montaña Negra",
                      "description": "El paisaje de Montenegro es impresionante — desde los dramáticos picos del Parque Nacional Durmitor (Patrimonio de la Humanidad por la UNESCO) hasta la ciudad medieval amurallada de Kotor, enclavada entre montañas y una bahía impresionante."
                  },
                  {
                      "icon": "waves",
                      "title": "El Cañón Más Profundo de Europa",
                      "description": "El Cañón del río Tara es el más profundo de Europa y el segundo más profundo del mundo tras el Gran Cañón. Sus aguas turquesas son perfectas para el descenso de ríos en kayak a través de bosques antiguos."
                  },
                  {
                      "icon": "history",
                      "title": "La Dinastía Real Más Antigua",
                      "description": "Montenegro fue un reino independiente durante siglos antes de unirse a Yugoslavia. Su dinastía real Petrović-Njegoš produjo no solo reyes sino también poetas, obispos y diplomáticos — algo raro en la historia europea."
                  },
                  {
                      "icon": "anchor",
                      "title": "Bahía de Kotor",
                      "description": "La Bahía de Kotor es la única bahía parecida a un fiordo en el Mediterráneo — una impresionante ensenada serpenteante rodeada de escarpadas montañas y salpicada de pueblos medievales y fortificaciones venecianas."
                  }
              ]
          }
      }
  },
  {
      "slug": "montserrat",
      "flagCode": "ms",
      "continent": "North America",
      "population": "4.4K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Montserrat",
          "capital": "Little Bay",
          "flagDescription": "Montserrat's flag is divided into four triangles by a gold cross. The upper and lower sections are green and blue, representing the island's agriculture and sea. The cross bears a female figure in the center, symbolizing the island's rich heritage.",
          "funFacts": [
          {
            "icon": "terrain",
            "title": "Soufrière Hills Volcano",
            "description": "Montserrat is home to the active Soufrière Hills Volcano, which erupted dramatically in 1997, altering the island's landscape."
          },
          {
            "icon": "landscape",
            "title": "Volcanic Island",
            "description": "The southern part of Montserrat is still an exclusion zone due to volcanic activity, making it a unique geological site."
          },
          {
            "icon": "public",
            "title": "British Territory",
            "description": "Montserrat is a British Overseas Territory with a small but resilient population."
          },
          {
            "icon": "nature",
            "title": "Black Sand Beaches",
            "description": "Montserrat has unique black sand beaches formed by the volcanic activity on the island."
          }
          ]
        },
        "es": {
          "name": "Montserrat",
          "capital": "Little Bay",
          "flagDescription": "La bandera de Montserrat está dividida en cuatro triángulos por una cruz de oro. Las secciones superior e inferior son verde y azul, representando la agricultura de la isla y el mar. La cruz lleva una figura femenina en el centro, simbolizando el rico patrimonio de la isla.",
          "funFacts": [
          {
            "icon": "terrain",
            "title": "Volcán Soufrière Hills",
            "description": "Montserrat es hogar del volcán Soufrière Hills activo, que entró en erupción dramáticamente en 1997, alterando el paisaje de la isla."
          },
          {
            "icon": "landscape",
            "title": "Isla Volcánica",
            "description": "La parte sur de Montserrat sigue siendo una zona de exclusión debido a la actividad volcánica, lo que la convierte en un sitio geológico único."
          },
          {
            "icon": "public",
            "title": "Territorio Británico",
            "description": "Montserrat es un Territorio Británico de Ultramar con una población pequeña pero resiliente."
          },
          {
            "icon": "nature",
            "title": "Playas de Arena Negra",
            "description": "Montserrat tiene playas únicas de arena negra formadas por la actividad volcánica en la isla."
          }
          ]
        }
      }
  },
  {
      "slug": "morocco",
      "flagCode": "ma",
      "continent": "Africa",
      "population": "36.8M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Morocco",
              "capital": "Rabat",
              "flagDescription": "Morocco's flag is bright red with a green pentagram (five-pointed star) at the center called the Seal of Solomon. Red represents hardiness and bravery, while green symbolizes hope, joy, and love.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Ancient Medinas",
                      "description": "Fez's medina is the world's largest car-free urban area, a UNESCO World Heritage Site with streets so narrow that two donkeys can barely pass each other."
                  },
                  {
                      "icon": "landscape",
                      "title": "Sahara Desert Gateway",
                      "description": "Morocco is one of the best places to experience the Sahara Desert. The Erg Chebbi dunes near Merzouga can soar up to 150 meters high."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Tagine Tradition",
                      "description": "The tagine — a slow-cooked stew named after the conical clay pot it's cooked in — has been a cornerstone of Moroccan cuisine for thousands of years."
                  }
              ]
          },
          "es": {
              "name": "Marruecos",
              "capital": "Rabat",
              "flagDescription": "La bandera de Marruecos es de color rojo brillante con un pentáculo verde (estrella de cinco puntas) en el centro, llamado Sello de Salomón. El rojo representa la fortaleza y la valentía, mientras que el verde simboliza la esperanza, la alegría y el amor.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Medinas antiguas",
                      "description": "La medina de Fez es el área urbana libre de coches más grande del mundo, Patrimonio de la Humanidad de la UNESCO, con calles tan estrechas que apenas pueden cruzarse dos burros."
                  },
                  {
                      "icon": "landscape",
                      "title": "Puerta del Sáhara",
                      "description": "Marruecos es uno de los mejores lugares para experimentar el desierto del Sáhara. Las dunas de Erg Chebbi cerca de Merzouga pueden alcanzar los 150 metros de altura."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Tradición del tajín",
                      "description": "El tajín, un guiso cocinado a fuego lento en una olla de barro cónica del mismo nombre, ha sido un pilar de la cocina marroquí durante miles de años."
                  }
              ]
          }
      }
  },
  {
      "slug": "mozambique",
      "flagCode": "mz",
      "continent": "Africa",
      "population": "34.1M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Mozambique",
              "capital": "Maputo",
              "flagDescription": "Mozambique's flag has three horizontal stripes of green, black, and yellow (separated by thin white lines) with a red triangle on the left side. Inside the red triangle is a white book (representing education), a hoe (for agriculture), and an AK-47 rifle (symbolizing defense). Green represents the land, black the African continent, yellow the minerals, and red the independence struggle.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Island of Mozambique",
                      "description": "Mozambique Island was the Portuguese colonial capital for 500 years and its old stone fort, chapel, and palaces are a UNESCO World Heritage Site — one of Africa's most atmospheric historic towns."
                  },
                  {
                      "icon": "waves",
                      "title": "Whale Shark Hotspot",
                      "description": "Whale sharks cruise Mozambique's warm waters year-round, and the Bazaruto Archipelago has some of the best coral reefs in Africa — a paradise for divers and snorkelers."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Peri-Peri Prawns",
                      "description": "Mozambique is famous for its enormous freshwater prawns cooked with peri-peri chili sauce — a fiery and delicious dish that has spread worldwide. South Africa's Nando's restaurant chain was inspired by Mozambican flavors."
                  }
              ]
          },
          "es": {
              "name": "Mozambique",
              "capital": "Maputo",
              "flagDescription": "La bandera de Mozambique tiene tres franjas horizontales de verde, negro y amarillo (separadas por delgadas líneas blancas) con un triángulo rojo a la izquierda. Dentro del triángulo hay un libro blanco (educación), una azada (agricultura) y un fusil AK-47 (defensa). El verde representa la tierra, el negro el continente africano, el amarillo los minerales y el rojo la lucha por la independencia.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "La isla de Mozambique",
                      "description": "La isla de Mozambique fue la capital colonial portuguesa durante 500 años, y su antiguo fuerte de piedra, capilla y palacios son Patrimonio Mundial de la UNESCO, uno de los pueblos históricos más evocadores de África."
                  },
                  {
                      "icon": "waves",
                      "title": "Punto caliente del tiburón ballena",
                      "description": "Los tiburones ballena navegan por las aguas cálidas de Mozambique durante todo el año, y el archipiélago de Bazaruto tiene algunos de los mejores arrecifes de coral de África, un paraíso para buceadores."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Gambas al peri-peri",
                      "description": "Mozambique es famoso por sus enormes gambas de agua dulce cocinadas con salsa de chile peri-peri, un plato picante y delicioso que se ha extendido por todo el mundo. La cadena Nando's se inspiró en los sabores mozambiqueños."
                  }
              ]
          }
      }
  },
  {
      "slug": "myanmar",
      "flagCode": "mm",
      "continent": "Asia",
      "population": "51.3M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Myanmar",
              "capital": "Naypyidaw",
              "flagDescription": "Myanmar's flag has three equal horizontal stripes of yellow, green, and red with a white star in the center. Yellow represents solidarity and freedom, green represents peace and tranquility, red represents courage, and the white star represents the unity of the nation.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Shwedagon Pagoda",
                      "description": "The Shwedagon Pagoda in Yangon is one of the most sacred Buddhist sites in the world, covered in 27 tons of gold. It has been a place of pilgrimage for over 2,500 years."
                  },
                  {
                      "icon": "public",
                      "title": "Longyi Tradition",
                      "description": "Longyi (or sarongs) are traditional skirts worn by both men and women in Myanmar. Each region has distinctive patterns and colors, making them an important part of Burmese cultural identity."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Land of a Thousand Pagodas",
                      "description": "Bagan is an archaeological zone with over 2,000 Buddhist temples and pagodas built between the 11th and 13th centuries. It's one of the most impressive religious sites in Asia."
                  }
              ]
          },
          "es": {
              "name": "Myanmar",
              "capital": "Naipyidó",
              "flagDescription": "La bandera de Myanmar tiene tres franjas horizontales iguales de amarillo, verde y rojo con una estrella blanca en el centro. El amarillo representa la solidaridad y la libertad, el verde la paz y la tranquilidad, el rojo el valor, y la estrella blanca representa la unidad de la nación.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Pagoda de Shwedagon",
                      "description": "La Pagoda de Shwedagon en Yangón es uno de los sitios budistas más sagrados del mundo, cubierta en 27 toneladas de oro. Ha sido un lugar de peregrinación durante más de 2.500 años."
                  },
                  {
                      "icon": "public",
                      "title": "Tradición del Longyi",
                      "description": "El longyi (o sarongs) son faldas tradicionales usadas tanto por hombres como por mujeres en Myanmar. Cada región tiene patrones y colores distintivos, lo que los convierte en una parte importante de la identidad cultural birmana."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Tierra de mil pagodas",
                      "description": "Bagan es una zona arqueológica con más de 2.000 templos budistas y pagodas construidos entre los siglos XI y XIII. Es uno de los sitios religiosos más impresionantes de Asia."
                  }
              ]
          }
      }
  },
  {
      "slug": "namibia",
      "flagCode": "na",
      "continent": "Africa",
      "population": "3.0M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "Namibia",
              "capital": "Windhoek",
              "flagDescription": "Namibia's flag has a diagonal red band (bordered by white) running from the lower-left to the upper-right, with a green triangle in the upper-left and a blue triangle in the lower-right. A golden sun with 12 rays shines from the upper-left. Blue represents the sky and the Atlantic Ocean, red symbolizes the people and their heroism, green stands for vegetation, and the gold sun represents life and energy.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Oldest Desert on Earth",
                      "description": "The Namib Desert is the oldest desert on Earth at approximately 55 million years old! Its towering orange sand dunes at Sossusvlei can reach 300 meters — some of the tallest in the world."
                  },
                  {
                      "icon": "pets",
                      "title": "Desert Elephants",
                      "description": "Desert-adapted elephants in Namibia have learned to survive for days without water by traveling vast distances through the desert. They have longer legs and wider feet than regular elephants."
                  },
                  {
                      "icon": "anchor",
                      "title": "Skeleton Coast",
                      "description": "The Skeleton Coast is one of the world's most dramatic and desolate shorelines, littered with shipwrecks and whale bones from when sailors called it 'the Gates of Hell'. Today it is a protected wilderness."
                  }
              ]
          },
          "es": {
              "name": "Namibia",
              "capital": "Windhoek",
              "flagDescription": "La bandera de Namibia tiene una banda roja diagonal (bordeada de blanco) que va de la esquina inferior izquierda a la superior derecha, con un triángulo verde arriba a la izquierda y uno azul abajo a la derecha. Un sol dorado con 12 rayos brilla desde la esquina superior izquierda. El azul representa el cielo y el Océano Atlántico, el rojo simboliza al pueblo y su heroísmo, el verde representa la vegetación, y el sol dorado la vida y la energía.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "El desierto más antiguo de la Tierra",
                      "description": "¡El desierto de Namib es el desierto más antiguo de la Tierra, con aproximadamente 55 millones de años! Sus imponentes dunas anaranjadas en Sossusvlei pueden alcanzar 300 metros de altura, algunas de las más altas del mundo."
                  },
                  {
                      "icon": "pets",
                      "title": "Elefantes del desierto",
                      "description": "Los elefantes adaptados al desierto en Namibia han aprendido a sobrevivir días sin agua recorriendo grandes distancias. Tienen patas más largas y pies más anchos que los elefantes normales."
                  },
                  {
                      "icon": "anchor",
                      "title": "La Costa de los Esqueletos",
                      "description": "La Costa de los Esqueletos es una de las orillas más dramáticas y desoladas del mundo, plagada de naufragios y huesos de ballenas. Los marineros la llamaban 'las Puertas del Infierno'. Hoy es un santuario protegido."
                  }
              ]
          }
      }
  },
  {
      "slug": "nauru",
      "flagCode": "nr",
      "continent": "Oceania",
      "population": "12K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Nauru",
              "capital": "Yaren",
              "flagDescription": "Nauru's flag has a blue background representing the Pacific Ocean, with a thin gold horizontal stripe across the middle representing the Equator — Nauru lies just south of it. A large white 12-pointed star sits just below the gold stripe on the left, representing Nauru's 12 original tribes. The flag's design is essentially a map: the star shows Nauru's position south of the Equator in the Pacific.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Boom and Bust",
                      "description": "In the 1980s, Nauru became one of the richest countries in the world per capita thanks to massive phosphate deposits (ancient bird droppings). The country bought luxury hotels and an aircraft fleet. Then the phosphate ran out, and by the 2000s Nauru became one of the poorest."
                  },
                  {
                      "icon": "anchor",
                      "title": "World's Smallest Republic",
                      "description": "Nauru is the world's smallest republic — just 21 km² — and one of the only island nations in the world with no official capital city. Government operations are spread across the island rather than centered in one place."
                  },
                  {
                      "icon": "sports",
                      "title": "Weightlifting Champions",
                      "description": "Despite its tiny size, Nauru has produced many world-class weightlifters. Nauruan weightlifters have won numerous Commonwealth Games gold medals, and the sport is deeply popular on the island."
                  },
                  {
                      "icon": "waves",
                      "title": "Freshwater Crisis",
                      "description": "Nauru has no rivers, streams, or natural freshwater lakes. Drinking water comes entirely from rainwater catchment and desalination. Climate change-driven droughts and population growth make water security a critical challenge for the island."
                  }
              ]
          },
          "es": {
              "name": "Nauru",
              "capital": "Yaren",
              "flagDescription": "La bandera de Nauru tiene un fondo azul que representa el Océano Pacífico, con una delgada franja horizontal dorada en el medio que representa el Ecuador — Nauru está justo al sur. Una gran estrella blanca de 12 puntas se asienta justo debajo de la franja dorada a la izquierda, que representa las 12 tribus originales de Nauru. El diseño de la bandera es esencialmente un mapa: la estrella muestra la posición de Nauru al sur del Ecuador en el Pacífico.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Auge y Caída",
                      "description": "En la década de 1980, Nauru se convirtió en uno de los países más ricos del mundo per cápita gracias a los masivos depósitos de fosfato (excrementos de aves antiguas). El país compró hoteles de lujo y una flota de aviones. Luego se agotó el fosfato, y para la década de 2000 Nauru se convirtió en uno de los más pobres."
                  },
                  {
                      "icon": "anchor",
                      "title": "La República Más Pequeña del Mundo",
                      "description": "Nauru es la república más pequeña del mundo — solo 21 km² — y una de las pocas naciones insulares del mundo sin una ciudad capital oficial. Las operaciones gubernamentales están distribuidas por toda la isla en lugar de concentrarse en un solo lugar."
                  },
                  {
                      "icon": "sports",
                      "title": "Campeones de Halterofilia",
                      "description": "A pesar de su pequeño tamaño, Nauru ha producido muchos levantadores de pesas de clase mundial. Los levantadores de pesas nauruanos han ganado numerosas medallas de oro en los Juegos de la Mancomunidad, y el deporte es muy popular en la isla."
                  },
                  {
                      "icon": "waves",
                      "title": "Crisis de Agua Dulce",
                      "description": "Nauru no tiene ríos, arroyos ni lagos naturales de agua dulce. El agua potable proviene enteramente de la captación de agua de lluvia y la desalinización. Las sequías impulsadas por el cambio climático y el crecimiento de la población hacen que la seguridad del agua sea un desafío crítico para la isla."
                  }
              ]
          }
      }
  },
  {
      "slug": "nepal",
      "flagCode": "np",
      "continent": "Asia",
      "population": "29.9M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Nepal",
              "capital": "Kathmandu",
              "flagDescription": "Nepal's flag is unique — the only non-rectangular flag among UN nations. It consists of two stacked triangles, with a white crescent and star on each. Red represents the courage of Nepali people, blue represents peace, and the crimson color is very auspicious in Hindu culture.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Mount Everest",
                      "description": "Mount Everest, the world's highest mountain at 8,849 meters, straddles Nepal and Tibet. Many climbers attempt to summit Everest from Nepal's side, making it a major adventure tourism destination."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Birthplace of Buddha",
                      "description": "Lumbini in Nepal is the birthplace of Siddhartha Gautama, who became Buddha. It's one of the holiest sites in Buddhism and is a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "public",
                      "title": "Himalayan Culture",
                      "description": "Nepal is famous for its Hindu and Buddhist temples, including the stunning Kathmandu Valley temples. The country blends ancient tradition with stunning mountain scenery."
                  }
              ]
          },
          "es": {
              "name": "Nepal",
              "capital": "Katmandú",
              "flagDescription": "La bandera de Nepal es única, la única bandera no rectangular entre las naciones de la ONU. Consiste en dos triángulos apilados, con una media luna blanca y una estrella en cada uno. El rojo representa el coraje del pueblo nepalí, el azul la paz, y el color carmesí es muy auspicioso en la cultura hindú.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Monte Everest",
                      "description": "El Monte Everest, la montaña más alta del mundo con 8.849 metros, se extiende entre Nepal y el Tíbet. Muchos alpinistas intentan ascender al Everest por el lado de Nepal, lo que la convierte en un importante destino de turismo de aventura."
                  },
                  {
                      "icon": "temple_hindu",
                      "title": "Lugar de nacimiento de Buda",
                      "description": "Lumbini en Nepal es el lugar de nacimiento de Siddharta Gautama, quien se convirtió en Buda. Es uno de los sitios más sagrados en el budismo y es Patrimonio de la Humanidad de la UNESCO."
                  },
                  {
                      "icon": "public",
                      "title": "Cultura del Himalaya",
                      "description": "Nepal es famoso por sus templos hindúes y budistas, incluidos los impresionantes templos del Valle de Katmandú. El país mezcla tradición antigua con impresionante paisaje montañoso."
                  }
              ]
          }
      }
  },
  {
      "slug": "netherlands",
      "flagCode": "nl",
      "continent": "Europe",
      "population": "18.1M",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Netherlands",
              "capital": "Amsterdam",
              "flagDescription": "The Netherlands flag has three equal horizontal stripes of red, white, and blue from top to bottom. It is one of the oldest tricolor flags in the world, adopted in the 17th century during the Dutch Republic.",
              "funFacts": [
                  {
                      "icon": "directions_bike",
                      "title": "Bicycle Capital",
                      "description": "The Netherlands has more bicycles than people — around 23 million bikes for 17.9 million residents. Amsterdam has 800,000 bikes but only 600,000 residents."
                  },
                  {
                      "icon": "landscape",
                      "title": "Below Sea Level",
                      "description": "About 26% of the Netherlands lies below sea level. The Dutch have been reclaiming land from the sea for centuries using a sophisticated system of dykes and pumping stations."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Tulip Capital",
                      "description": "The Netherlands is the world's largest flower exporter, selling about 12 billion tulip bulbs per year. Tulips actually originated in Turkey but became the Dutch national flower."
                  },
                  {
                      "icon": "palette",
                      "title": "Golden Age of Painting",
                      "description": "The 17th century Dutch Golden Age produced Rembrandt and Vermeer — two of the greatest painters in history. The Rijksmuseum in Amsterdam houses thousands of these masterpieces, including Rembrandt's famous Night Watch."
                  }
              ]
          },
          "es": {
              "name": "Países Bajos",
              "capital": "Amsterdam",
              "flagDescription": "La bandera de los Países Bajos tiene tres franjas horizontales iguales de rojo, blanco y azul de arriba a abajo. Es una de las banderas tricolores más antiguas del mundo, adoptada en el siglo XVII durante la República Holandesa.",
              "funFacts": [
                  {
                      "icon": "directions_bike",
                      "title": "Capital de las Bicicletas",
                      "description": "Los Países Bajos tienen más bicicletas que personas: unos 23 millones de bicis para 17,9 millones de habitantes. Ámsterdam tiene 800.000 bicicletas pero solo 600.000 residentes."
                  },
                  {
                      "icon": "landscape",
                      "title": "Bajo el Nivel del Mar",
                      "description": "Aproximadamente el 26% de los Países Bajos está por debajo del nivel del mar. Los holandeses han ganado tierras al mar durante siglos gracias a un sofisticado sistema de diques y estaciones de bombeo."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Capital del Tulipán",
                      "description": "Los Países Bajos son el mayor exportador de flores del mundo, con unos 12.000 millones de bulbos de tulipán al año. Los tulipanes se originaron en Turquía, pero se convirtieron en la flor nacional holandesa."
                  },
                  {
                      "icon": "palette",
                      "title": "Edad de Oro de la Pintura",
                      "description": "El Siglo de Oro holandés del siglo XVII dio al mundo a Rembrandt y Vermeer, dos de los pintores más grandes de la historia. El Rijksmuseum de Ámsterdam alberga miles de estas obras maestras, incluyendo la famosa Ronda de Noche de Rembrandt."
                  }
              ]
          }
      }
  },
  {
      "slug": "new-caledonia",
      "flagCode": "nc",
      "continent": "Oceania",
      "population": "265K",
      "region": "Melanesia",
      "translations": {
          "en": {
              "name": "New Caledonia",
              "capital": "Nouméa",
              "flagDescription": "New Caledonia is a French special collectivity and officially uses the French tricolor (blue, white, red). However, the indigenous Kanak people use their own flag: a horizontal tricolor of blue, red, and green with a yellow disc (representing the sun) and a vertical black band on the left bearing a flèche faîtière — a traditional Kanak arrow used as a totem symbol. Both flags are seen across the territory.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Lagoon UNESCO Wonder",
                      "description": "New Caledonia's lagoon is the second largest coral reef lagoon in the world, after Australia's Great Barrier Reef. It is a UNESCO World Heritage Site and protects an extraordinary diversity of sea life, including dugongs, sea turtles, and hundreds of species of coral."
                  },
                  {
                      "icon": "factory",
                      "title": "Nickel Powerhouse",
                      "description": "New Caledonia has about 25% of the world's known nickel reserves — a metal critical for stainless steel and electric vehicle batteries. Nickel mining has shaped the island's economy and landscape for over a century."
                  },
                  {
                      "icon": "forest",
                      "title": "Unique Biodiversity",
                      "description": "New Caledonia is a biodiversity hotspot. It is home to the world's only known carnivorous plant in the sundew family that grows as a shrub, and over 3,000 plant species — 75% of them found nowhere else on Earth."
                  },
                  {
                      "icon": "celebration",
                      "title": "Kanak Culture",
                      "description": "The indigenous Kanak people have one of the richest traditional cultures in the Pacific, with intricate wood carving, tapa cloth weaving, and a complex system of ceremonial exchange called the coutume that governs social relationships and marks important life events."
                  }
              ]
          },
          "es": {
              "name": "Nueva Caledonia",
              "capital": "Numea",
              "flagDescription": "Nueva Caledonia es una colectividad especial francesa y usa oficialmente el tricolor francés (azul, blanco, rojo). Sin embargo, el pueblo indígena Kanak usa su propia bandera: un tricolor horizontal de azul, rojo y verde con un disco amarillo (que representa el sol) y una banda negra vertical a la izquierda con una flèche faîtière — una flecha tradicional Kanak usada como símbolo totémico. Ambas banderas se ven en todo el territorio.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Laguna Maravilla de la UNESCO",
                      "description": "La laguna de Nueva Caledonia es la segunda laguna de arrecife de coral más grande del mundo, después de la Gran Barrera de Coral de Australia. Es Patrimonio de la Humanidad por la UNESCO y protege una extraordinaria diversidad de vida marina, incluidos dugongos, tortugas marinas y cientos de especies de coral."
                  },
                  {
                      "icon": "factory",
                      "title": "Potencia del Níquel",
                      "description": "Nueva Caledonia tiene alrededor del 25% de las reservas conocidas de níquel del mundo — un metal crítico para el acero inoxidable y las baterías de vehículos eléctricos. La minería del níquel ha dado forma a la economía y el paisaje de la isla durante más de un siglo."
                  },
                  {
                      "icon": "forest",
                      "title": "Biodiversidad Única",
                      "description": "Nueva Caledonia es un punto caliente de biodiversidad. Es el hogar de la única planta carnívora conocida del mundo de la familia de los rocíos del sol que crece como un arbusto, y más de 3.000 especies de plantas — el 75% de ellas no se encuentran en ningún otro lugar de la Tierra."
                  },
                  {
                      "icon": "celebration",
                      "title": "Cultura Kanak",
                      "description": "El pueblo indígena Kanak tiene una de las culturas tradicionales más ricas del Pacífico, con intrincada talla en madera, tejido de tapa y un complejo sistema de intercambio ceremonial llamado la coutume que rige las relaciones sociales y marca importantes eventos vitales."
                  }
              ]
          }
      }
  },
  {
      "slug": "new-zealand",
      "flagCode": "nz",
      "continent": "Oceania",
      "population": "5.3M",
      "region": "Australia and New Zealand",
      "translations": {
          "en": {
              "name": "New Zealand",
              "capital": "Wellington",
              "flagDescription": "New Zealand's flag features the Union Jack in the upper left and four red stars with white borders representing the Southern Cross constellation. The stars are slightly different sizes, reflecting the actual brightness of the stars in the night sky.",
              "funFacts": [
                  {
                      "icon": "nature_people",
                      "title": "More Sheep Than People",
                      "description": "New Zealand has about 26 million sheep for its 5 million people — a ratio of roughly 5 sheep per person."
                  },
                  {
                      "icon": "hiking",
                      "title": "Adventure Capital",
                      "description": "Queenstown, New Zealand, is known as the adventure capital of the world. Bungee jumping was commercialized here in 1988."
                  },
                  {
                      "icon": "movie",
                      "title": "Middle-earth",
                      "description": "The entire Lord of the Rings and Hobbit film trilogies were filmed in New Zealand. The Hobbiton movie set in Matamata is now a permanent tourist attraction."
                  },
                  {
                      "icon": "sports",
                      "title": "Haka and the All Blacks",
                      "description": "New Zealand's national rugby team, the All Blacks, is the most successful national rugby team in history. Before every match they perform the haka — a powerful Māori ceremonial dance that has become one of sport's most electrifying rituals."
                  }
              ]
          },
          "es": {
              "name": "Nueva Zelanda",
              "capital": "Wellington",
              "flagDescription": "La bandera de Nueva Zelanda presenta la Union Jack en la esquina superior izquierda y cuatro estrellas rojas con bordes blancos que representan la constelación de la Cruz del Sur. Las estrellas tienen tamaños ligeramente distintos, reflejando el brillo real de las estrellas en el cielo nocturno.",
              "funFacts": [
                  {
                      "icon": "nature_people",
                      "title": "Más Ovejas que Personas",
                      "description": "Nueva Zelanda tiene unos 26 millones de ovejas para sus 5 millones de habitantes, una proporción de aproximadamente 5 ovejas por persona."
                  },
                  {
                      "icon": "hiking",
                      "title": "Capital de la Aventura",
                      "description": "Queenstown, Nueva Zelanda, es conocida como la capital mundial de la aventura. El puenting se comercializó aquí en 1988."
                  },
                  {
                      "icon": "movie",
                      "title": "La Tierra Media",
                      "description": "Las trilogías completas de El Señor de los Anillos y El Hobbit se filmaron en Nueva Zelanda. El set de rodaje de Hobbiton en Matamata es ahora una atracción turística permanente."
                  },
                  {
                      "icon": "sports",
                      "title": "El Haka y los All Blacks",
                      "description": "El equipo nacional de rugby de Nueva Zelanda, los All Blacks, es el más exitoso de la historia. Antes de cada partido realizan el haka, una poderosa danza ceremonial māori que se ha convertido en uno de los rituales más electrizantes del deporte."
                  }
              ]
          }
      }
  },
  {
      "slug": "nicaragua",
      "flagCode": "ni",
      "continent": "North America",
      "population": "6.9M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Nicaragua",
          "capital": "Managua",
          "flagDescription": "Nicaragua's flag has three horizontal stripes of light blue, white, and light blue, with the national coat of arms on the white stripe. The coat of arms features two oceanic peaks separated by a volcanic cone, representing the country's two coasts and volcanic terrain.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Lake Nicaragua",
            "description": "Lake Nicaragua is Central America's largest lake, home to freshwater sharks and diverse marine life."
          },
          {
            "icon": "terrain",
            "title": "Volcanic Landscape",
            "description": "Nicaragua sits on the Pacific Ring of Fire and has numerous active and dormant volcanoes."
          },
          {
            "icon": "waves",
            "title": "Two Ocean Coasts",
            "description": "Nicaragua is one of Central America's only two countries with both Pacific and Caribbean coastlines."
          },
          {
            "icon": "nature",
            "title": "Rainforest Biodiversity",
            "description": "Nicaragua has extensive rainforests and cloud forests with incredible biodiversity."
          }
          ]
        },
        "es": {
          "name": "Nicaragua",
          "capital": "Managua",
          "flagDescription": "La bandera de Nicaragua tiene tres franjas horizontales de azul claro, blanco y azul claro, con el escudo de armas nacional en la franja blanca. El escudo de armas presenta dos picos oceánicos separados por un cono volcánico, representando las dos costas del país y el terreno volcánico.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Lago Nicaragua",
            "description": "El Lago de Nicaragua es el lago más grande de América Central, hogar de tiburones de agua dulce y vida marina diversa."
          },
          {
            "icon": "terrain",
            "title": "Paisaje Volcánico",
            "description": "Nicaragua se encuentra en el Anillo de Fuego del Pacífico y tiene numerosos volcanes activos e inactivos."
          },
          {
            "icon": "waves",
            "title": "Dos Costas Oceánicas",
            "description": "Nicaragua es uno de los únicos dos países de América Central con costas tanto del Pacífico como del Caribe."
          },
          {
            "icon": "nature",
            "title": "Biodiversidad de la Selva Tropical",
            "description": "Nicaragua tiene extensas selvas tropicales y bosques nubosos con biodiversidad increíble."
          }
          ]
        }
      }
  },
  {
      "slug": "niger",
      "flagCode": "ne",
      "continent": "Africa",
      "population": "26.3M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Niger",
              "capital": "Niamey",
              "flagDescription": "Niger's flag has three equal horizontal stripes — orange at the top, white in the middle, and green at the bottom — with an orange circle in the center of the white stripe. Orange represents the Sahara Desert in the north, white symbolizes purity and the Niger River, green stands for the fertile grasslands of the south, and the orange circle represents the sun.",
              "funFacts": [
                  {
                      "icon": "science",
                      "title": "Uranium Superpower",
                      "description": "Niger is one of the world's largest producers of uranium, which is used to generate nuclear electricity in France and other countries. About 15% of France's electricity comes from Nigerien uranium."
                  },
                  {
                      "icon": "pets",
                      "title": "Last West African Giraffes",
                      "description": "A small but growing population of wild West African giraffes lives near Niamey — the only giraffes remaining in all of West Africa! Niger is working hard to protect and grow this herd."
                  },
                  {
                      "icon": "history",
                      "title": "Ancient Agadez Mosque",
                      "description": "The spectacular Agadez Mosque has a towering minaret built entirely from mud and wood, regularly repaired by the community. Agadez was once a thriving crossroads of trans-Saharan camel trade routes."
                  }
              ]
          },
          "es": {
              "name": "Níger",
              "capital": "Niamey",
              "flagDescription": "La bandera de Níger tiene tres franjas horizontales iguales: naranja arriba, blanca en el centro y verde abajo, con un círculo naranja en el centro de la franja blanca. El naranja representa el desierto del Sáhara en el norte, el blanco simboliza la pureza y el río Níger, el verde representa las fértiles llanuras del sur, y el círculo naranja representa el sol.",
              "funFacts": [
                  {
                      "icon": "science",
                      "title": "Gran productor de uranio",
                      "description": "Níger es uno de los mayores productores mundiales de uranio, que se usa para generar electricidad nuclear en Francia y otros países. Alrededor del 15% de la electricidad francesa proviene del uranio nigerino."
                  },
                  {
                      "icon": "pets",
                      "title": "Las últimas jirafas de África Occidental",
                      "description": "Una pequeña pero creciente población de jirafas salvajes del África Occidental vive cerca de Niamey, ¡las únicas jirafas que quedan en toda África Occidental! Níger trabaja para proteger y hacer crecer esta manada."
                  },
                  {
                      "icon": "history",
                      "title": "La mezquita de Agadez",
                      "description": "La espectacular mezquita de Agadez tiene un minarete construido enteramente de barro y madera, reparado regularmente por la comunidad. Agadez fue una vez un próspero cruce de rutas caravaneras transsaharianas."
                  }
              ]
          }
      }
  },
  {
      "slug": "nigeria",
      "flagCode": "ng",
      "continent": "Africa",
      "population": "223.8M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Nigeria",
              "capital": "Abuja",
              "flagDescription": "Nigeria's flag features two vertical green stripes flanking a central white stripe. Green represents Nigeria's lush agricultural land and forests, while white symbolizes peace and unity between the country's many ethnic groups.",
              "funFacts": [
                  {
                      "icon": "groups",
                      "title": "Most Populous in Africa",
                      "description": "Nigeria is Africa's most populous nation with over 218 million people. One in every six Africans is Nigerian."
                  },
                  {
                      "icon": "movie",
                      "title": "Nollywood",
                      "description": "Nigeria's film industry, Nollywood, produces over 2,500 films per year — making it the second-largest film industry in the world by volume, ahead of Hollywood."
                  },
                  {
                      "icon": "terrain",
                      "title": "Diverse Cultures",
                      "description": "Nigeria has over 500 distinct ethnic groups and languages. The three largest — Hausa-Fulani, Yoruba, and Igbo — each have rich traditions, music, and art."
                  }
              ]
          },
          "es": {
              "name": "Nigeria",
              "capital": "Abuya",
              "flagDescription": "La bandera de Nigeria tiene dos franjas verdes verticales que enmarcan una franja central blanca. El verde representa las fértiles tierras agrícolas y los bosques de Nigeria, mientras que el blanco simboliza la paz y la unidad entre los muchos grupos étnicos del país.",
              "funFacts": [
                  {
                      "icon": "groups",
                      "title": "El más poblado de África",
                      "description": "Nigeria es la nación más poblada de África, con más de 218 millones de habitantes. Uno de cada seis africanos es nigeriano."
                  },
                  {
                      "icon": "movie",
                      "title": "Nollywood",
                      "description": "La industria cinematográfica de Nigeria, Nollywood, produce más de 2.500 películas al año, lo que la convierte en la segunda industria cinematográfica del mundo por volumen, por delante de Hollywood."
                  },
                  {
                      "icon": "terrain",
                      "title": "Culturas diversas",
                      "description": "Nigeria tiene más de 500 grupos étnicos y lenguas distintos. Los tres más grandes, hausa-fulani, yoruba e igbo, tienen ricas tradiciones, música y arte propios."
                  }
              ]
          }
      }
  },
  {
      "slug": "niue",
      "flagCode": "nu",
      "continent": "Oceania",
      "population": "2K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Niue",
              "capital": "Alofi",
              "flagDescription": "Niue's flag has a yellow background — unusual for a Pacific island nation — with the Union Jack in the upper left corner. The Union Jack features a small yellow disc (the sun) in the center. Around the Union Jack are four yellow five-pointed stars arranged in the pattern of the Southern Cross. The yellow represents the warm friendship between Niue and New Zealand, and the sunshine that bathes the island.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Rock of Polynesia",
                      "description": "Niue is sometimes called the Rock of Polynesia because it is a single raised coral island — a massive rocky platform rising steeply from the ocean rather than a flat atoll. The dramatic coastal caves and chasms carved by the sea are stunning."
                  },
                  {
                      "icon": "waves",
                      "title": "World's Smallest Self-Governing Nation",
                      "description": "With about 1,600 people, Niue is the world's smallest self-governing state in free association with New Zealand. Many Niueans live in New Zealand — there are far more Niueans in New Zealand than on Niue itself."
                  },
                  {
                      "icon": "eco",
                      "title": "Dark Sky Reserve",
                      "description": "Niue is one of the few places in the world certified as a Dark Sky Nation — the entire island has minimal light pollution, making it one of the best places on Earth to stargaze. The Milky Way appears brilliantly overhead on clear nights."
                  },
                  {
                      "icon": "forest",
                      "title": "Humpback Whale Nursery",
                      "description": "Niue's crystal-clear waters are a nursery for humpback whales. Every winter, mother humpbacks bring their calves to Niue's sheltered waters to nurse and grow. Snorkeling with these gentle giants is one of the most magical wildlife experiences in the Pacific."
                  }
              ]
          },
          "es": {
              "name": "Niue",
              "capital": "Alofi",
              "flagDescription": "La bandera de Niue tiene un fondo amarillo — inusual para una nación insular del Pacífico — con la Union Jack en la esquina superior izquierda. La Union Jack tiene un pequeño disco amarillo (el sol) en el centro. Alrededor de la Union Jack hay cuatro estrellas amarillas de cinco puntas dispuestas en el patrón de la Cruz del Sur. El amarillo representa la cálida amistad entre Niue y Nueva Zelanda, y el sol que baña la isla.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "La Roca de la Polinesia",
                      "description": "Niue es a veces llamada la Roca de la Polinesia porque es una única isla de coral elevada — una plataforma rocosa masiva que se eleva abruptamente desde el océano en lugar de ser un atolón plano. Las dramáticas cuevas costeras y grietas esculpidas por el mar son impresionantes."
                  },
                  {
                      "icon": "waves",
                      "title": "El Estado Autogobernado Más Pequeño del Mundo",
                      "description": "Con unas 1.600 personas, Niue es el estado autogobernado más pequeño del mundo en libre asociación con Nueva Zelanda. Muchos niueanos viven en Nueva Zelanda — hay muchos más niueanos en Nueva Zelanda que en la propia Niue."
                  },
                  {
                      "icon": "eco",
                      "title": "Reserva de Cielo Oscuro",
                      "description": "Niue es uno de los pocos lugares del mundo certificado como Nación de Cielo Oscuro — toda la isla tiene mínima contaminación lumínica, lo que la convierte en uno de los mejores lugares de la Tierra para observar las estrellas. La Vía Láctea aparece brillantemente en lo alto en las noches despejadas."
                  },
                  {
                      "icon": "forest",
                      "title": "Guardería de Ballenas Jorobadas",
                      "description": "Las aguas cristalinas de Niue son una guardería para las ballenas jorobadas. Cada invierno, las jorobadas madres traen a sus crías a las aguas protegidas de Niue para amamantarlas y crecer. Nadar con estos gentiles gigantes es una de las experiencias de vida silvestre más mágicas del Pacífico."
                  }
              ]
          }
      }
  },
  {
      "slug": "norfolk-island",
      "flagCode": "nf",
      "continent": "Oceania",
      "population": "2K",
      "region": "Australia and New Zealand",
      "translations": {
          "en": {
              "name": "Norfolk Island",
              "capital": "Kingston",
              "flagDescription": "Norfolk Island's flag has three vertical stripes — green, white, and green — with a Norfolk Island pine tree silhouette in the center white stripe. The Norfolk Island pine is iconic to the island — these tall, distinctive trees were used by early European navigators as landmarks visible from far out at sea, and they still dominate the island's skyline today.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Pitcairn Islanders' New Home",
                      "description": "In 1856, the entire population of Pitcairn Island — descendants of the Bounty mutineers — was relocated to Norfolk Island. They spoke a unique Creole language (Norfuk) blending 18th-century English with Tahitian, which is still spoken today as an official language alongside English."
                  },
                  {
                      "icon": "anchor",
                      "title": "First British Colony",
                      "description": "Norfolk Island was one of the first British colonial settlements in the Pacific, established in 1788 at the same time as the Sydney colony. It later served as a brutal penal colony where convicts were sent as a punishment for crimes committed in Australia."
                  },
                  {
                      "icon": "forest",
                      "title": "World Heritage Nature",
                      "description": "The Norfolk Island National Park protects exceptional biodiversity, including ancient forests of Norfolk Island pine and endemic birds found nowhere else. The island sits on an underwater volcanic ridge and has remarkably rich terrestrial and marine ecosystems."
                  },
                  {
                      "icon": "language",
                      "title": "Norfuk Language",
                      "description": "Norfuk is a unique Creole language spoken on Norfolk Island, blending 18th-century English with Tahitian. Descended from the language of the Bounty mutineers and their Tahitian companions, it is officially recognized and actively preserved by the community."
                  }
              ]
          },
          "es": {
              "name": "Isla Norfolk",
              "capital": "Kingston",
              "flagDescription": "La bandera de la Isla Norfolk tiene tres franjas verticales — verde, blanca y verde — con la silueta de un pino de la Isla Norfolk en el centro de la franja blanca. El pino de la Isla Norfolk es icónico para la isla — estos altos y distintivos árboles fueron usados por los primeros navegantes europeos como puntos de referencia visibles desde lejos en el mar, y todavía dominan el horizonte de la isla hoy en día.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El Nuevo Hogar de los Isleños de Pitcairn",
                      "description": "En 1856, toda la población de la Isla Pitcairn — descendientes de los amotinados del Bounty — fue reubicada en la Isla Norfolk. Hablaban un idioma criollo único (Norfuk) que mezcla inglés del siglo XVIII con tahitiano, que todavía se habla hoy como idioma oficial junto con el inglés."
                  },
                  {
                      "icon": "anchor",
                      "title": "Primera Colonia Británica",
                      "description": "La Isla Norfolk fue uno de los primeros asentamientos coloniales británicos en el Pacífico, establecido en 1788 al mismo tiempo que la colonia de Sídney. Más tarde sirvió como brutal colonia penal donde se enviaba a los convictos como castigo por crímenes cometidos en Australia."
                  },
                  {
                      "icon": "forest",
                      "title": "Naturaleza Patrimonio Mundial",
                      "description": "El Parque Nacional de la Isla Norfolk protege una biodiversidad excepcional, incluidos los bosques antiguos de pino de la Isla Norfolk y aves endémicas que no se encuentran en ningún otro lugar. La isla se asienta sobre una cresta volcánica submarina y tiene ecosistemas terrestres y marinos notablemente ricos."
                  },
                  {
                      "icon": "language",
                      "title": "Idioma Norfuk",
                      "description": "El norfuk es un idioma criollo único hablado en la Isla Norfolk, que mezcla inglés del siglo XVIII con tahitiano. Descendiente del idioma de los amotinados del Bounty y sus compañeros tahitianos, está oficialmente reconocido y activamente preservado por la comunidad."
                  }
              ]
          }
      }
  },
  {
      "slug": "north-korea",
      "flagCode": "kp",
      "continent": "Asia",
      "population": "25.9M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "North Korea",
              "capital": "Pyongyang",
              "flagDescription": "North Korea's flag has three horizontal stripes: red, white (with blue stripe on edges), and red, with a white circle and red star on the left. Red represents the blood of independence fighters, white symbolizes the pure Korean character, and the star represents communism.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Juche Tower",
                      "description": "The Juche Tower in Pyongyang is 170 meters tall and symbolizes the philosophy of self-reliance (Juche). It's one of the tallest monuments in the world and is a symbol of North Korean national pride."
                  },
                  {
                      "icon": "sports",
                      "title": "Winter Sports Legacy",
                      "description": "North Korea has competed in the Winter Olympics and has shown strength in winter sports. The national mass games in Pyongyang are spectacular performances involving thousands of participants."
                  },
                  {
                      "icon": "public",
                      "title": "Arirang Festival",
                      "description": "The Arirang Festival is a mass celebration in Pyongyang featuring synchronized gymnastics, dance, and performances with thousands of participants creating human mosaics."
                  }
              ]
          },
          "es": {
              "name": "Corea del Norte",
              "capital": "Pyongyang",
              "flagDescription": "La bandera de Corea del Norte tiene tres franjas horizontales: rojo, blanco (con franja azul en los bordes) y rojo, con un círculo blanco y una estrella roja a la izquierda. El rojo representa la sangre de los luchadores por la independencia, el blanco simboliza el carácter puro coreano, y la estrella representa el comunismo.",
              "funFacts": [
                  {
                      "icon": "architecture",
                      "title": "Torre Juche",
                      "description": "La Torre Juche en Pyongyang mide 170 metros de alto y simboliza la filosofía de la autosuficiencia (Juche). Es uno de los monumentos más altos del mundo y es un símbolo del orgullo nacional norcoreano."
                  },
                  {
                      "icon": "sports",
                      "title": "Legado de deportes de invierno",
                      "description": "Corea del Norte ha competido en los Juegos Olímpicos de Invierno y ha mostrado fortaleza en deportes de invierno. Los juegos de masas nacionales en Pyongyang son actuaciones espectaculares con miles de participantes."
                  },
                  {
                      "icon": "public",
                      "title": "Festival de Arirang",
                      "description": "El Festival de Arirang es una celebración de masas en Pyongyang que presenta gimnasia sincronizada, danza y actuaciones con miles de participantes que crean mosaicos humanos."
                  }
              ]
          }
      }
  },
  {
      "slug": "north-macedonia",
      "flagCode": "mk",
      "continent": "Europe",
      "population": "1.8M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "North Macedonia",
              "capital": "Skopje",
              "flagDescription": "North Macedonia's flag features a golden sun with eight rays bursting outward on a vivid red background. This is the 'Sun of Liberty,' a symbol of enlightenment and freedom for the Macedonian people. The flag was redesigned in 1995 after a dispute with Greece over the original Vergina Sun symbol, which Greece associated with ancient Macedonia — a region of Greece.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Alexander the Great's Land",
                      "description": "The ancient kingdom of Macedonia — the homeland of Alexander the Great, one of history's greatest conquerors — was located in the region that today includes North Macedonia and northern Greece. Alexander's legacy is a source of enormous pride and historical debate."
                  },
                  {
                      "icon": "landscape",
                      "title": "Lake Ohrid",
                      "description": "Lake Ohrid is one of Europe's oldest and deepest lakes, estimated to be over 3 million years old. It is a UNESCO World Heritage Site and home to unique species found nowhere else on Earth, including the Ohrid trout."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Mother Teresa's Birthplace",
                      "description": "Mother Teresa was born in Skopje in 1910 as Anjezë Gonxhe Bojaxhiu. The city honors her with a museum and memorial house. She is beloved here as a symbol of compassion and humility."
                  },
                  {
                      "icon": "music_note",
                      "title": "Galichnik Wedding",
                      "description": "The Galichnik Wedding is a famous annual folk festival where couples marry in traditional Macedonian costumes in a centuries-old ceremony — with music, dancing, and feasting that lasts for days."
                  }
              ]
          },
          "es": {
              "name": "Macedonia del Norte",
              "capital": "Skopje",
              "flagDescription": "La bandera de Macedonia del Norte muestra un sol dorado con ocho rayos irradiándose sobre un vivido fondo rojo. Este es el 'Sol de la Libertad', símbolo de iluminación y libertad para el pueblo macedonio. La bandera fue rediseñada en 1995 tras una disputa con Grecia sobre el símbolo original del Sol de Vergina, que Grecia asociaba con la Macedonia antigua — una región de Grecia.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "La Tierra de Alejandro Magno",
                      "description": "El antiguo reino de Macedonia — la tierra natal de Alejandro Magno, uno de los mayores conquistadores de la historia — estaba ubicado en la región que hoy incluye Macedonia del Norte y el norte de Grecia. El legado de Alejandro es fuente de enorme orgullo y debate histórico."
                  },
                  {
                      "icon": "landscape",
                      "title": "Lago Ohrid",
                      "description": "El lago Ohrid es uno de los lagos más antiguos y profundos de Europa, con una antigüedad estimada de más de 3 millones de años. Es Patrimonio de la Humanidad por la UNESCO y hogar de especies únicas que no se encuentran en ningún otro lugar de la Tierra, incluida la trucha de Ohrid."
                  },
                  {
                      "icon": "temple_buddhist",
                      "title": "Lugar de Nacimiento de la Madre Teresa",
                      "description": "La Madre Teresa nació en Skopje en 1910 como Anjezë Gonxhe Bojaxhiu. La ciudad la honra con un museo y una casa memorial. Es amada aquí como símbolo de compasión y humildad."
                  },
                  {
                      "icon": "music_note",
                      "title": "La Boda de Galichnik",
                      "description": "La Boda de Galichnik es un famoso festival folklórico anual donde las parejas se casan con trajes tradicionales macedonios en una ceremonia centenaria — con música, baile y festín que dura días."
                  }
              ]
          }
      }
  },
  {
      "slug": "northern-mariana-islands",
      "flagCode": "mp",
      "continent": "Oceania",
      "population": "47K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Northern Mariana Islands",
              "capital": "Saipan",
              "flagDescription": "The Northern Mariana Islands flag has a blue background with a large white star in the center, surrounded by a traditional Chamorro stone latte (a stone pillar used as a house foundation) and a white mwar (flower lei) wreath. The latte stone represents the ancient Chamorro culture, and the white star represents the islands' covenant with the United States established in 1978.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "WWII Significance",
                      "description": "The Northern Mariana Islands, especially Saipan and Tinian, were the site of some of the most important battles of World War II in the Pacific. The US B-29 bombers that dropped atomic bombs on Japan took off from Tinian Island in 1945."
                  },
                  {
                      "icon": "landscape",
                      "title": "Saipan's Blue Waters",
                      "description": "Saipan has a stunning lagoon with some of the clearest and most brilliantly blue water in the world. The combination of white sand beaches, calm turquoise waters, and warm tropical climate makes it a popular resort destination."
                  },
                  {
                      "icon": "language",
                      "title": "Ancient Chamorro Heritage",
                      "description": "The Chamorro people have lived on the Marianas for over 4,000 years and developed a rich culture of seafaring, weaving, and chant. Despite colonization by Spain, Germany, Japan, and the US, Chamorro culture and language have survived and are actively revitalized today."
                  },
                  {
                      "icon": "anchor",
                      "title": "US Commonwealth",
                      "description": "Unlike US territories like Guam, the Northern Mariana Islands are a US Commonwealth, giving them a slightly higher degree of self-government. All residents are US citizens, though they cannot vote in federal elections unless they move to the US mainland."
                  }
              ]
          },
          "es": {
              "name": "Islas Marianas del Norte",
              "capital": "Saipán",
              "flagDescription": "La bandera de las Islas Marianas del Norte tiene un fondo azul con una gran estrella blanca en el centro, rodeada de una piedra latte chamorra tradicional (un pilar de piedra usado como cimiento de casa) y una guirnalda de mwar (corona de flores). La piedra latte representa la antigua cultura chamorra, y la estrella blanca representa el pacto de las islas con los Estados Unidos establecido en 1978.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Importancia en la Segunda Guerra Mundial",
                      "description": "Las Islas Marianas del Norte, especialmente Saipán y Tinian, fueron el sitio de algunas de las batallas más importantes de la Segunda Guerra Mundial en el Pacífico. Los bombarderos B-29 de EE.UU. que lanzaron las bombas atómicas sobre Japón despegaron de la isla de Tinian en 1945."
                  },
                  {
                      "icon": "landscape",
                      "title": "Las Aguas Azules de Saipán",
                      "description": "Saipán tiene una laguna impresionante con algunas de las aguas más claras y brillantemente azules del mundo. La combinación de playas de arena blanca, aguas turquesas tranquilas y cálido clima tropical lo convierte en un popular destino turístico."
                  },
                  {
                      "icon": "language",
                      "title": "Antigua Herencia Chamorra",
                      "description": "El pueblo chamorro ha vivido en las Marianas durante más de 4.000 años y desarrolló una rica cultura de navegación, tejido y canto. A pesar de la colonización por España, Alemania, Japón y EE.UU., la cultura y el idioma chamorros han sobrevivido y se revitalizan activamente hoy en día."
                  },
                  {
                      "icon": "anchor",
                      "title": "Estado Libre Asociado de EE.UU.",
                      "description": "A diferencia de los territorios de EE.UU. como Guam, las Islas Marianas del Norte son un Estado Libre Asociado de EE.UU., dándoles un grado ligeramente mayor de autogobierno. Todos los residentes son ciudadanos estadounidenses, aunque no pueden votar en las elecciones federales a menos que se muden al continente de EE.UU."
                  }
              ]
          }
      }
  },
  {
      "slug": "norway",
      "flagCode": "no",
      "continent": "Europe",
      "population": "5.6M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Norway",
              "capital": "Oslo",
              "flagDescription": "Norway's flag has a red background with a blue Nordic cross outlined in white. The cross symbol is used by all Nordic countries. The design was adopted in 1821 to distinguish the Norwegian flag from similar Scandinavian flags.",
              "funFacts": [
                  {
                      "icon": "local_see",
                      "title": "Northern Lights",
                      "description": "Norway is one of the best places in the world to see the Aurora Borealis (Northern Lights). Tromsø, above the Arctic Circle, is nicknamed the 'Gateway to the Arctic'."
                  },
                  {
                      "icon": "directions_boat",
                      "title": "Viking Origins",
                      "description": "Norway was the heartland of the Vikings who explored, traded, and settled from Iceland to North America about 500 years before Columbus."
                  },
                  {
                      "icon": "account_balance",
                      "title": "World's Richest Fund",
                      "description": "Norway's sovereign wealth fund — built from oil revenues — is the world's largest at over $1.4 trillion, investing in about 9,000 companies in 70 countries."
                  },
                  {
                      "icon": "landscape",
                      "title": "Land of Fjords",
                      "description": "Norway has over 1,000 fjords — long, deep inlets carved by ancient glaciers. The Sognefjord is the deepest in the world at over 1,300 m. UNESCO has listed the Norwegian fjords as a World Heritage Site."
                  }
              ]
          },
          "es": {
              "name": "Noruega",
              "capital": "Oslo",
              "flagDescription": "La bandera de Noruega tiene un fondo rojo con una cruz nórdica azul bordeada en blanco. El símbolo de la cruz lo usan todos los países nórdicos. El diseño fue adoptado en 1821 para distinguir la bandera noruega de las similares banderas escandinavas.",
              "funFacts": [
                  {
                      "icon": "local_see",
                      "title": "Aurora Boreal",
                      "description": "Noruega es uno de los mejores lugares del mundo para ver la Aurora Boreal. Tromsø, por encima del Círculo Ártico, recibe el apodo de 'Puerta al Ártico'."
                  },
                  {
                      "icon": "directions_boat",
                      "title": "Origen Vikingo",
                      "description": "Noruega fue el corazón del mundo vikingo, que exploró, comerció y se asentó desde Islandia hasta América del Norte unos 500 años antes que Colón."
                  },
                  {
                      "icon": "account_balance",
                      "title": "El Fondo Más Rico del Mundo",
                      "description": "El fondo soberano de Noruega — construido con los ingresos del petróleo — es el mayor del mundo, con más de 1,4 billones de dólares invertidos en unas 9.000 empresas de 70 países."
                  },
                  {
                      "icon": "landscape",
                      "title": "Tierra de Fiordos",
                      "description": "Noruega tiene más de 1.000 fiordos: largas y profundas entradas esculpidas por antiguos glaciares. El Sognefjord es el más profundo del mundo, con más de 1.300 m. La UNESCO ha declarado los fiordos noruegos Patrimonio de la Humanidad."
                  }
              ]
          }
      }
  },
  {
      "slug": "oman",
      "flagCode": "om",
      "continent": "Asia",
      "population": "5.3M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Oman",
              "capital": "Muscat",
              "flagDescription": "Oman's flag has three equal horizontal stripes of white, red, and green with a vertical red stripe on the hoist side containing the national emblem (white khanjar dagger and crossed swords). The colors represent different aspects of the nation's character and heritage.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Green Mountain (Jabal Akhdar)",
                      "description": "Jabal Akhdar is a limestone mountain in Oman's interior that's green due to its higher elevation and monsoon moisture. It's surrounded by lush terraced gardens growing roses and pomegranates."
                  },
                  {
                      "icon": "water",
                      "title": "Sultanate of Oman Coasts",
                      "description": "Oman has coastlines along the Arabian Sea and Persian Gulf with dramatic rocky cliffs, hidden beaches, and coral reefs. The coasts are home to sea turtles and dolphins."
                  },
                  {
                      "icon": "public",
                      "title": "Frankincense Trail",
                      "description": "Oman was a major trading hub on the frankincense trail for thousands of years. The town of Salalah still produces frankincense, and the historical trade routes are being preserved as cultural heritage."
                  }
              ]
          },
          "es": {
              "name": "Omán",
              "capital": "Mascate",
              "flagDescription": "La bandera de Omán tiene tres franjas horizontales iguales de blanco, rojo y verde con una franja roja vertical en el lado del asta que contiene el emblema nacional (puñal khanjar blanco y espadas cruzadas). Los colores representan diferentes aspectos del carácter y patrimonio de la nación.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Montaña Verde (Jabal Akhdar)",
                      "description": "Jabal Akhdar es una montaña de piedra caliza en el interior de Omán que es verde debido a su mayor elevación y humedad de monzón. Está rodeada de exuberantes jardines en terrazas que cultivan rosas y granadas."
                  },
                  {
                      "icon": "water",
                      "title": "Costas del Sultanato de Omán",
                      "description": "Omán tiene costas a lo largo del Mar Arábigo y el Golfo Pérsico con acantilados rocosos dramáticos, playas escondidas y arrecifes de coral. Las costas albergan tortugas marinas y delfines."
                  },
                  {
                      "icon": "public",
                      "title": "Ruta del incienso",
                      "description": "Omán fue un importante centro comercial en la ruta del incienso durante miles de años. La ciudad de Salalah sigue produciendo incienso, y las rutas comerciales históricas se están preservando como patrimonio cultural."
                  }
              ]
          }
      }
  },
  {
      "slug": "pakistan",
      "flagCode": "pk",
      "continent": "Asia",
      "population": "241.5M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Pakistan",
              "capital": "Islamabad",
              "flagDescription": "Pakistan's flag is dark green with a white crescent and five-pointed star in the center and a vertical white stripe on the hoist side. Green represents Islam, the crescent and star are Islamic symbols, the white stripe represents religious minorities, and white symbolizes peace.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "K2 Mountain",
                      "description": "K2 is the world's second-highest mountain at 8,611 meters, located in the Karakoram Mountains in northern Pakistan. It's known as the \"Savage Mountain\" because climbing it is extremely difficult and dangerous."
                  },
                  {
                      "icon": "apartment",
                      "title": "Badshahi Mosque",
                      "description": "The Badshahi Mosque in Lahore is one of the largest mosques in the world, with room for over 24,000 worshippers. Its red brick construction and marble inlay are architectural masterpieces."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Spice Haven",
                      "description": "Pakistan is famous for its aromatic and flavorful cuisine. Dishes like biryani, karahi, and samosas are beloved worldwide, and Pakistani spice markets are legendary for their variety."
                  }
              ]
          },
          "es": {
              "name": "Pakistán",
              "capital": "Islamabad",
              "flagDescription": "La bandera de Pakistán es verde oscuro con una media luna blanca y una estrella de cinco puntas en el centro y una franja blanca vertical en el lado del asta. El verde representa el Islam, la media luna y la estrella son símbolos islámicos, la franja blanca representa a las minorías religiosas, y el blanco simboliza la paz.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Montaña K2",
                      "description": "K2 es la segunda montaña más alta del mundo con 8.611 metros, ubicada en las Montañas Karakórum en el norte de Pakistán. Es conocida como la \"Montaña Salvaje\" porque escalarla es extremadamente difícil y peligroso."
                  },
                  {
                      "icon": "apartment",
                      "title": "Mezquita Badshahi",
                      "description": "La Mezquita Badshahi en Lahore es una de las mezquitas más grandes del mundo, con espacio para más de 24.000 fieles. Su construcción de ladrillo rojo y adornos de mármol son obras maestras arquitectónicas."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Paraíso de especias",
                      "description": "Pakistán es famoso por su cocina aromática y sabrosa. Platos como biryani, karahi y samosas son amados en todo el mundo, y los mercados de especias pakistaní son legendarios por su variedad."
                  }
              ]
          }
      }
  },
  {
      "slug": "palau",
      "flagCode": "pw",
      "continent": "Oceania",
      "population": "17K",
      "region": "Micronesia",
      "translations": {
          "en": {
              "name": "Palau",
              "capital": "Ngerulmud",
              "flagDescription": "Palau's flag is a sky blue background with a large golden circle slightly off-center towards the hoist side. The blue represents the Pacific Ocean, and the golden circle represents the moon — which holds great significance in Palauan culture as the time for many traditional activities including fishing, planting, and ceremony. The moon's position slightly off-center represents Palau positioned within the Pacific.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Jellyfish Lake Wonder",
                      "description": "Palau's Jellyfish Lake is one of the world's most extraordinary swimming experiences. Millions of golden jellyfish migrated into a landlocked lake thousands of years ago and evolved without predators, losing their ability to sting. Swimmers can float among them completely safely."
                  },
                  {
                      "icon": "eco",
                      "title": "Marine Sanctuary",
                      "description": "Palau established one of the world's first shark sanctuaries, banning commercial shark fishing entirely. The country protects its ocean as a national treasure — its waters are considered some of the most biodiverse in the world with over 700 species of coral and 1,500 species of fish."
                  },
                  {
                      "icon": "history",
                      "title": "Bai Meeting Houses",
                      "description": "Traditional Palauan culture is centered around the bai — ornate communal meeting houses with intricately painted facade panels telling the stories and legends of the community. Each bai is a work of art that encodes the community's history and values."
                  },
                  {
                      "icon": "anchor",
                      "title": "Rock Islands UNESCO Site",
                      "description": "Palau's Rock Islands are a UNESCO World Heritage Site — hundreds of mushroom-shaped limestone islands covered in dense jungle, rising from turquoise lagoons. Created by millions of years of marine erosion, they are one of the most visually stunning landscapes on Earth."
                  }
              ]
          },
          "es": {
              "name": "Palaos",
              "capital": "Ngerulmud",
              "flagDescription": "La bandera de Palaos tiene un fondo azul cielo con un gran círculo dorado ligeramente descentrado hacia el lado del asta. El azul representa el Océano Pacífico, y el círculo dorado representa la luna — que tiene gran importancia en la cultura palauense como el momento para muchas actividades tradicionales incluida la pesca, la siembra y la ceremonia. La posición ligeramente descentrada de la luna representa a Palaos posicionado dentro del Pacífico.",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "El Lago de las Medusas",
                      "description": "El Lago de las Medusas de Palaos es una de las experiencias de natación más extraordinarias del mundo. Millones de medusas doradas migraron a un lago sin salida al mar hace miles de años y evolucionaron sin depredadores, perdiendo su capacidad de picar. Los nadadores pueden flotar entre ellas con total seguridad."
                  },
                  {
                      "icon": "eco",
                      "title": "Santuario Marino",
                      "description": "Palaos estableció uno de los primeros santuarios de tiburones del mundo, prohibiendo totalmente la pesca comercial de tiburones. El país protege su océano como un tesoro nacional — sus aguas son consideradas algunas de las más biodiversas del mundo con más de 700 especies de coral y 1.500 especies de peces."
                  },
                  {
                      "icon": "history",
                      "title": "Casas de Reunión Bai",
                      "description": "La cultura palauense tradicional se centra en el bai — ornamentadas casas comunales de reunión con paneles de fachada intrincadamente pintados que cuentan las historias y leyendas de la comunidad. Cada bai es una obra de arte que codifica la historia y los valores de la comunidad."
                  },
                  {
                      "icon": "anchor",
                      "title": "Sitio UNESCO de las Islas Rocosas",
                      "description": "Las Islas Rocosas de Palaos son Patrimonio de la Humanidad por la UNESCO — cientos de islas de piedra caliza en forma de seta cubiertas de densa selva, que se elevan de lagunas turquesas. Creadas por millones de años de erosión marina, son uno de los paisajes más visualmente impresionantes de la Tierra."
                  }
              ]
          }
      }
  },
  {
      "slug": "palestine",
      "flagCode": "ps",
      "continent": "Asia",
      "population": "5.5M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Palestine",
              "capital": "East Jerusalem",
              "flagDescription": "Palestine's flag is identical to the Pan-Arab flag with three equal horizontal stripes of black, white, and green, with a red triangle on the left. The colors represent pan-Arab unity, and the flag symbolizes Palestinian national identity and sovereignty.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Church of the Nativity",
                      "description": "The Church of the Nativity in Bethlehem is one of Christianity's holiest sites, believed to be built over the birthplace of Jesus. It's been a pilgrimage destination for nearly 2,000 years."
                  },
                  {
                      "icon": "public",
                      "title": "Palestinian Embroidery",
                      "description": "Palestinian traditional embroidery is an ancient craft with distinctive patterns and colors passed down through generations. Each region has unique designs that tell stories of Palestinian heritage."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Olive Trees",
                      "description": "Olive trees have been part of Palestinian culture for thousands of years. Ancient olive groves produce some of the world's finest olive oil, and olives are central to Palestinian cuisine and economy."
                  }
              ]
          },
          "es": {
              "name": "Palestina",
              "capital": "Jerusalén Oriental",
              "flagDescription": "La bandera de Palestina es idéntica a la bandera panárabe con tres franjas horizontales iguales de negro, blanco y verde, con un triángulo rojo a la izquierda. Los colores representan la unidad panárabe, y la bandera simboliza la identidad nacional palestina y la soberanía.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Iglesia de la Natividad",
                      "description": "La Iglesia de la Natividad en Belén es uno de los sitios más sagrados del cristianismo, se cree que está construida sobre el lugar de nacimiento de Jesús. Ha sido un destino de peregrinación durante casi 2.000 años."
                  },
                  {
                      "icon": "public",
                      "title": "Bordado palestino",
                      "description": "El bordado tradicional palestino es una artesanía antigua con patrones y colores distintivos transmitidos a través de generaciones. Cada región tiene diseños únicos que cuentan historias del patrimonio palestino."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Olivos",
                      "description": "Los olivos han sido parte de la cultura palestina durante miles de años. Los olivares antiguos producen algunos de los mejores aceites de oliva del mundo, y las aceitunas son fundamentales para la cocina y la economía palestina."
                  }
              ]
          }
      }
  },
  {
      "slug": "panama",
      "flagCode": "pa",
      "continent": "North America",
      "population": "4.4M",
      "region": "Central America",
      "translations": {
        "en": {
          "name": "Panama",
          "capital": "Panama City",
          "flagDescription": "Panama's flag is quartered with red, blue, white, and red-blue sections. Each quarter contains a white or gold star representing civic virtues. The flag design represents the unity and diversity of the Panamanian people.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Panama Canal",
            "description": "The Panama Canal is one of the world's most important waterways, connecting the Atlantic and Pacific Oceans."
          },
          {
            "icon": "landscape",
            "title": "Darien Gap",
            "description": "The Darien Gap is a unique jungle region and the only land break in the Pan-American Highway."
          },
          {
            "icon": "landscape",
            "title": "Biodiversity Hotspot",
            "description": "Panama is a biodiversity hotspot, home to more species per square kilometer than almost any other place on Earth."
          },
          {
            "icon": "public",
            "title": "Multicultural Hub",
            "description": "Panama is a multicultural nation influenced by Caribbean, Latin American, African, and Asian cultures."
          }
          ]
        },
        "es": {
          "name": "Panamá",
          "capital": "Ciudad de Panamá",
          "flagDescription": "La bandera de Panamá está dividida en cuartos con secciones roja, azul, blanca y rojo-azul. Cada cuarto contiene una estrella blanca u dorada que representa virtudes cívicas. El diseño de la bandera representa la unidad y diversidad del pueblo panameño.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Canal de Panamá",
            "description": "El Canal de Panamá es una de las vías fluviales más importantes del mundo, conectando los Océanos Atlántico y Pacífico."
          },
          {
            "icon": "landscape",
            "title": "Tapón del Darién",
            "description": "El Tapón del Darién es una región de selva única y el único quiebre de tierra en la Carretera Panamericana."
          },
          {
            "icon": "landscape",
            "title": "Punto Caliente de Biodiversidad",
            "description": "Panamá es un punto caliente de biodiversidad, hogar de más especies por kilómetro cuadrado que casi cualquier otro lugar en la Tierra."
          },
          {
            "icon": "public",
            "title": "Centro Multicultural",
            "description": "Panamá es una nación multicultural influenciada por culturas caribeñas, latinoamericanas, africanas y asiáticas."
          }
          ]
        }
      }
  },
  {
      "slug": "papua-new-guinea",
      "flagCode": "pg",
      "continent": "Oceania",
      "population": "11.8M",
      "region": "Melanesia",
      "translations": {
          "en": {
              "name": "Papua New Guinea",
              "capital": "Port Moresby",
              "flagDescription": "Papua New Guinea's flag is divided diagonally — the upper triangle is red with a Bird of Paradise, and the lower triangle is black with the Southern Cross constellation in white. The Bird of Paradise represents the nation's natural beauty.",
              "funFacts": [
                  {
                      "icon": "language",
                      "title": "Most Languages on Earth",
                      "description": "Papua New Guinea has more languages than any other country — over 800 distinct languages, representing about 12% of the world's total. Tok Pisin is the national lingua franca."
                  },
                  {
                      "icon": "forest",
                      "title": "Untouched Wilderness",
                      "description": "The highlands of PNG contain some of the last intact rainforests in the Pacific. It's estimated that 5% of the world's biodiversity lives in PNG."
                  },
                  {
                      "icon": "emoji_nature",
                      "title": "Birds of Paradise",
                      "description": "Papua New Guinea is home to over 40 species of Birds of Paradise — the most elaborate and colorful birds on Earth. Males perform incredible dances to attract mates."
                  },
                  {
                      "icon": "museum",
                      "title": "Thousands of Cultures",
                      "description": "PNG has over 1,000 distinct cultural groups — each with its own traditions, ceremonies, and art forms. Annual Sing-Sing festivals bring tribes together in a dazzling display of feathered headdresses, body paint, and traditional music."
                  }
              ]
          },
          "es": {
              "name": "Papúa Nueva Guinea",
              "capital": "Port Moresby",
              "flagDescription": "La bandera de Papúa Nueva Guinea está dividida en diagonal: el triángulo superior es rojo con un Ave del Paraíso, y el triángulo inferior es negro con la constelación de la Cruz del Sur en blanco. El Ave del Paraíso representa la belleza natural de la nación.",
              "funFacts": [
                  {
                      "icon": "language",
                      "title": "Más Idiomas del Mundo",
                      "description": "Papúa Nueva Guinea tiene más idiomas que cualquier otro país: más de 800 lenguas distintas, que representan aproximadamente el 12% del total mundial. El tok pisin es la lengua franca nacional."
                  },
                  {
                      "icon": "forest",
                      "title": "Naturaleza Virgen",
                      "description": "Las tierras altas de PNG contienen algunas de las últimas selvas tropicales intactas del Pacífico. Se estima que el 5% de la biodiversidad mundial vive en PNG."
                  },
                  {
                      "icon": "emoji_nature",
                      "title": "Aves del Paraíso",
                      "description": "Papúa Nueva Guinea alberga más de 40 especies de Aves del Paraíso, las aves más elaboradas y coloridas de la Tierra. Los machos realizan bailes increíbles para atraer a sus parejas."
                  },
                  {
                      "icon": "museum",
                      "title": "Miles de Culturas",
                      "description": "PNG tiene más de 1.000 grupos culturales distintos, cada uno con sus propias tradiciones, ceremonias y formas de arte. Los festivales anuales Sing-Sing reúnen a las tribus en un deslumbrante despliegue de tocados de plumas, pintura corporal y música tradicional."
                  }
              ]
          }
      }
  },
  {
      "slug": "paraguay",
      "flagCode": "py",
      "continent": "South America",
      "population": "6.7M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Paraguay",
          "capital": "Asunción",
          "flagDescription": "Paraguay's flag has three horizontal stripes of red, white, and blue. On the white stripe is a seal (on the obverse side) or the Treasury seal (on the reverse). The colors represent the blood of patriots (red), peace (white), and loyalty (blue).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Jesuit Heritage",
            "description": "Paraguay is famous for its Jesuit missions, UNESCO World Heritage Sites that showcase colonial religious history."
          },
          {
            "icon": "public",
            "title": "Bilingual Nation",
            "description": "Paraguay is unique in that both Spanish and Guaraní (indigenous language) are official languages."
          },
          {
            "icon": "landscape",
            "title": "Iguazu Falls",
            "description": "Paraguay shares the spectacular Iguazu Falls with Argentina and Brazil, one of the world's most powerful waterfalls."
          },
          {
            "icon": "nature",
            "title": "Chocó Rainforest",
            "description": "Paraguay contains part of the Chocó rainforest, one of the world's most biodiverse regions."
          }
          ]
        },
        "es": {
          "name": "Paraguay",
          "capital": "Asunción",
          "flagDescription": "La bandera de Paraguay tiene tres franjas horizontales de rojo, blanco y azul. En la franja blanca hay un sello (en el lado del anverso) o el sello del Tesoro (en el reverso). Los colores representan la sangre de los patriotas (rojo), la paz (blanco), y la lealtad (azul).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Herencia Jesuita",
            "description": "Paraguay es famosa por sus misiones jesuitas, Sitios del Patrimonio Mundial de la UNESCO que muestran la historia religiosa colonial."
          },
          {
            "icon": "public",
            "title": "Nación Bilingüe",
            "description": "Paraguay es única en que tanto el español como el guaraní (lengua indígena) son idiomas oficiales."
          },
          {
            "icon": "landscape",
            "title": "Cataratas de Iguazú",
            "description": "Paraguay comparte las espectaculares Cataratas de Iguazú con Argentina y Brasil, una de las cataratas más poderosas del mundo."
          },
          {
            "icon": "nature",
            "title": "Selva Tropical del Chocó",
            "description": "Paraguay contiene parte de la selva tropical del Chocó, una de las regiones más biodiversas del mundo."
          }
          ]
        }
      }
  },
  {
      "slug": "peru",
      "flagCode": "pe",
      "continent": "South America",
      "population": "34.4M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Peru",
          "capital": "Lima",
          "flagDescription": "Peru's flag has three vertical stripes of red, white, and red. The white stripe features the coat of arms on the obverse side. Red represents the blood of patriots, white represents peace and honesty, and the coat of arms symbolizes Peru's natural resources.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Machu Picchu",
            "description": "Machu Picchu is an ancient Inca citadel located high in the Andes Mountains, one of the world's most iconic ruins."
          },
          {
            "icon": "landscape",
            "title": "Lake Titicaca",
            "description": "Lake Titicaca is the world's highest navigable lake, shared with Bolivia, at over 12,000 feet elevation."
          },
          {
            "icon": "landscape",
            "title": "Amazon Rainforest",
            "description": "Peru contains a significant portion of the Amazon Rainforest, the world's largest tropical forest."
          },
          {
            "icon": "public",
            "title": "Inca Heritage",
            "description": "Peru is the heart of Inca civilization, with countless archaeological sites and artifacts throughout the country."
          }
          ]
        },
        "es": {
          "name": "Perú",
          "capital": "Lima",
          "flagDescription": "La bandera de Perú tiene tres franjas verticales de rojo, blanco y rojo. La franja blanca presenta el escudo de armas en el lado del anverso. El rojo representa la sangre de los patriotas, el blanco representa la paz y la honestidad, y el escudo de armas simboliza los recursos naturales de Perú.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Machu Picchu",
            "description": "Machu Picchu es una ciudadela inca antigua ubicada en lo alto de las Montañas de los Andes, una de las ruinas más icónicas del mundo."
          },
          {
            "icon": "landscape",
            "title": "Lago Titicaca",
            "description": "El Lago Titicaca es el lago navegable más alto del mundo, compartido con Bolivia, a más de 12,000 pies de elevación."
          },
          {
            "icon": "landscape",
            "title": "Selva Amazónica",
            "description": "Perú contiene una porción significativa de la Selva Amazónica, la selva tropical más grande del mundo."
          },
          {
            "icon": "public",
            "title": "Herencia Inca",
            "description": "Perú es el corazón de la civilización inca, con innumerables sitios arqueológicos y artefactos en todo el país."
          }
          ]
        }
      }
  },
  {
      "slug": "philippines",
      "flagCode": "ph",
      "continent": "Asia",
      "population": "114.1M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Philippines",
              "capital": "Manila",
              "flagDescription": "The Philippine flag is unique with a white equilateral triangle on the left (representing the sun) with three gold stars (representing Luzon, Visayas, and Mindanao) and a gold sun. Blue (top) represents peace, red (bottom) represents courage, white represents unity, and gold represents wealth.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Banaue Rice Terraces",
                      "description": "The Banaue Rice Terraces are ancient agricultural terraces built by the Ifugao people over 2,000 years ago. These 1,500-meter-high terraces are carved into the mountains and are a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "festival",
                      "title": "Sinulog Festival",
                      "description": "The Sinulog Festival in Cebu is one of Asia's largest festivals, celebrating the Ati-Atihan with colorful street dances, parades, and reenactments of the legend of the Santo Niño."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Tropical Island Nation",
                      "description": "The Philippines is an archipelago of over 7,600 islands with diverse ecosystems, pristine beaches, and some of the world's best diving spots. Its coral reefs are among the most biodiverse."
                  }
              ]
          },
          "es": {
              "name": "Filipinas",
              "capital": "Manila",
              "flagDescription": "La bandera filipina es única con un triángulo blanco equilátero a la izquierda (representando el sol) con tres estrellas de oro (representando Luzón, Visayas y Mindanao) y un sol de oro. El azul (superior) representa la paz, el rojo (inferior) representa el valor, el blanco representa la unidad, y el oro representa la riqueza.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Terrazas de arroz de Banaue",
                      "description": "Las Terrazas de Arroz de Banaue son antiguas terrazas agrícolas construidas por el pueblo Ifugao hace más de 2.000 años. Estas terrazas de 1.500 metros de altura están talladas en las montañas y son Patrimonio de la Humanidad de la UNESCO."
                  },
                  {
                      "icon": "festival",
                      "title": "Festival de Sinulog",
                      "description": "El Festival de Sinulog en Cebú es uno de los mayores festivales de Asia, celebrando el Ati-Atihan con danzas callejeras coloridas, desfiles y recreaciones de la leyenda del Santo Niño."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Nación de islas tropicales",
                      "description": "Las Filipinas es un archipiélago de más de 7.600 islas con ecosistemas diversos, playas pristinas y algunos de los mejores lugares de buceo del mundo. Sus arrecifes de coral están entre los más biodiversos."
                  }
              ]
          }
      }
  },
  {
      "slug": "pitcairn-islands",
      "flagCode": "pn",
      "continent": "Oceania",
      "population": "35",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Pitcairn Islands",
              "capital": "Adamstown",
              "flagDescription": "The Pitcairn Islands flag is a British blue ensign with the territory's coat of arms on the right: a green hillside bearing an anchor (representing the HMS Bounty) and a Bible and wheelbarrow on the shield. The crest shows a Pitcairn Island bird of paradise and a Polynesian canoe. The design reflects the islands' unique heritage as a settlement founded by the Bounty mutineers.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "The Bounty Mutiny",
                      "description": "In 1789, sailors aboard HMS Bounty mutinied against Captain Bligh and sailed to Pitcairn, where they burned the Bounty and settled with their Tahitian companions. Their descendants — about 50 people — still live on the island today, making Pitcairn one of the world's most isolated communities."
                  },
                  {
                      "icon": "anchor",
                      "title": "Least Populated Territory",
                      "description": "Pitcairn is the least populated territory in the world — home to about 50 people. The island has no airport and is accessible only by boat, with supply ships arriving every few months. It is one of the most remote inhabited places on Earth."
                  },
                  {
                      "icon": "language",
                      "title": "Pitkern Language",
                      "description": "Pitcairn Islanders speak Pitkern — a unique Creole language that evolved from 18th-century English and Tahitian. It was the private language of the Bounty mutineers and their Tahitian companions, and their descendants still speak it today."
                  },
                  {
                      "icon": "local_post_office",
                      "title": "Famous Postage Stamps",
                      "description": "Despite having only 50 inhabitants, Pitcairn is famous worldwide for its beautiful, collectible postage stamps, which depict local wildlife, history, and culture. Stamp sales are one of the island's main sources of income and are treasured by collectors globally."
                  }
              ]
          },
          "es": {
              "name": "Islas Pitcairn",
              "capital": "Adamstown",
              "flagDescription": "La bandera de las Islas Pitcairn es un pabellón azul británico con el escudo de armas del territorio a la derecha: una ladera verde con un ancla (que representa el HMS Bounty) y una Biblia y una carretilla en el escudo. El cimero muestra un ave del paraíso de la Isla Pitcairn y una canoa polinesia. El diseño refleja el único patrimonio de las islas como asentamiento fundado por los amotinados del Bounty.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El Motín del Bounty",
                      "description": "En 1789, marineros a bordo del HMS Bounty se amotinaron contra el Capitán Bligh y navegaron a Pitcairn, donde quemaron el Bounty y se asentaron con sus compañeras tahitianas. Sus descendientes — unas 50 personas — todavía viven en la isla hoy, haciendo de Pitcairn una de las comunidades más aisladas del mundo."
                  },
                  {
                      "icon": "anchor",
                      "title": "El Territorio Menos Poblado",
                      "description": "Pitcairn es el territorio menos poblado del mundo — hogar de unas 50 personas. La isla no tiene aeropuerto y solo es accesible en barco, con barcos de suministro que llegan cada pocos meses. Es uno de los lugares habitados más remotos de la Tierra."
                  },
                  {
                      "icon": "language",
                      "title": "Idioma Pitkern",
                      "description": "Los isleños de Pitcairn hablan pitkern — un idioma criollo único que evolucionó del inglés del siglo XVIII y del tahitiano. Era el idioma privado de los amotinados del Bounty y sus compañeras tahitianas, y sus descendientes todavía lo hablan hoy en día."
                  },
                  {
                      "icon": "local_post_office",
                      "title": "Sellos Postales Famosos",
                      "description": "A pesar de tener solo 50 habitantes, Pitcairn es famosa en todo el mundo por sus hermosos y coleccionables sellos postales, que representan la vida silvestre local, la historia y la cultura. La venta de sellos es una de las principales fuentes de ingresos de la isla y son apreciados por coleccionistas de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "poland",
      "flagCode": "pl",
      "continent": "Europe",
      "population": "37.4M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Poland",
              "capital": "Warsaw",
              "flagDescription": "Poland's flag has two equal horizontal stripes — white on top and red on bottom. These two colors have represented Poland since the 13th century. The colors come from the coat of arms showing a white eagle on a red background.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Chopin's Homeland",
                      "description": "Frédéric Chopin, one of the greatest piano composers in history, was born in Poland. His romantic compositions are deeply tied to Polish folk music and national identity."
                  },
                  {
                      "icon": "science",
                      "title": "Marie Curie",
                      "description": "Marie Curie, born Maria Sklodowska in Warsaw, was the first woman to win a Nobel Prize — and the only person ever to win Nobel Prizes in two different sciences (Physics and Chemistry)."
                  },
                  {
                      "icon": "castle",
                      "title": "Medieval Treasures",
                      "description": "Krakow's Wawel Castle and the medieval old town are UNESCO World Heritage Sites. The city miraculously escaped destruction in WWII and preserves centuries of Polish history."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Pierogi Paradise",
                      "description": "Poland's most beloved dish is pierogi — dumplings stuffed with potato and cheese, meat, mushrooms, or sweet cherries. Every Polish family has its own recipe, and there is even a dedicated annual Pierogi Festival in Krakow each August."
                  }
              ]
          },
          "es": {
              "name": "Polonia",
              "capital": "Varsovia",
              "flagDescription": "La bandera de Polonia tiene dos franjas horizontales iguales: blanca arriba y roja abajo. Estos dos colores han representado a Polonia desde el siglo XIII y provienen del escudo de armas que muestra un águila blanca sobre fondo rojo.",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "La Patria de Chopin",
                      "description": "Frédéric Chopin, uno de los más grandes compositores para piano de la historia, nació en Polonia. Sus composiciones románticas están profundamente ligadas a la música folclórica polaca y a la identidad nacional."
                  },
                  {
                      "icon": "science",
                      "title": "Marie Curie",
                      "description": "Marie Curie, nacida Maria Sklodowska en Varsovia, fue la primera mujer en ganar un Premio Nobel y la única persona en ganar Premios Nobel en dos ciencias distintas (Física y Química)."
                  },
                  {
                      "icon": "castle",
                      "title": "Tesoros Medievales",
                      "description": "El Castillo de Wawel y el casco antiguo medieval de Cracovia son Patrimonio de la Humanidad por la UNESCO. La ciudad escapó milagrosamente de la destrucción en la Segunda Guerra Mundial y conserva siglos de historia polaca."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Paraíso de los Pierogi",
                      "description": "El plato más querido de Polonia son los pierogi: empanadillas rellenas de patata y queso, carne, setas o cerezas dulces. Cada familia polaca tiene su propia receta, y cada agosto se celebra en Cracovia un Festival del Pierogi."
                  }
              ]
          }
      }
  },
  {
      "slug": "portugal",
      "flagCode": "pt",
      "continent": "Europe",
      "population": "10.7M",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Portugal",
              "capital": "Lisbon",
              "flagDescription": "Portugal's flag has a vertical green stripe on the left and a wider red stripe on the right with the Portuguese coat of arms centered on the border. Green represents hope for the future, while red honors those who died fighting for the country.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Age of Exploration",
                      "description": "In the 15th and 16th centuries, Portuguese explorers mapped much of the world. Vasco da Gama found the sea route to India, and Bartolomeu Dias was the first European to round the Cape of Good Hope."
                  },
                  {
                      "icon": "music_note",
                      "title": "Fado Music",
                      "description": "Fado is Portugal's haunting, melancholy music genre expressing longing (saudade). UNESCO recognized fado as an Intangible Cultural Heritage in 2011."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Pastel de Nata",
                      "description": "The pastel de nata (custard tart) was invented by monks at Jerónimos Monastery in Lisbon in the 18th century. The original recipe from Pastéis de Belém is still a closely guarded secret."
                  },
                  {
                      "icon": "park",
                      "title": "Cork Capital of the World",
                      "description": "Portugal produces over half the world's cork, harvested from the bark of cork oak trees without cutting them down. The trees live for over 200 years and are stripped every 9 years — a perfectly sustainable industry practiced for centuries."
                  }
              ]
          },
          "es": {
              "name": "Portugal",
              "capital": "Lisboa",
              "flagDescription": "La bandera de Portugal tiene una franja verde vertical a la izquierda y una franja roja más ancha a la derecha, con el escudo de armas portugués centrado en el límite entre ambas. El verde representa la esperanza en el futuro, mientras que el rojo honra a quienes murieron luchando por el país.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "La Era de los Descubrimientos",
                      "description": "En los siglos XV y XVI, los exploradores portugueses cartografiaron gran parte del mundo. Vasco da Gama encontró la ruta marítima hacia la India, y Bartolomeu Dias fue el primer europeo en doblar el Cabo de Buena Esperanza."
                  },
                  {
                      "icon": "music_note",
                      "title": "El Fado",
                      "description": "El fado es el conmovedor y melancólico género musical de Portugal que expresa la añoranza (saudade). La UNESCO reconoció el fado como Patrimonio Cultural Inmaterial en 2011."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Pastel de Nata",
                      "description": "El pastel de nata fue inventado por los monjes del Monasterio de los Jerónimos en Lisboa en el siglo XVIII. La receta original de los Pastéis de Belém sigue siendo un secreto celosamente guardado."
                  },
                  {
                      "icon": "park",
                      "title": "Capital Mundial del Corcho",
                      "description": "Portugal produce más de la mitad del corcho del mundo, cosechado de la corteza de los alcornoques sin talarlos. Los árboles viven más de 200 años y se pelan cada 9 años: una industria perfectamente sostenible practicada durante siglos."
                  }
              ]
          }
      }
  },
  {
      "slug": "puerto-rico",
      "flagCode": "pr",
      "continent": "North America",
      "population": "3.2M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Puerto Rico",
          "capital": "San Juan",
          "flagDescription": "Puerto Rico's flag has five horizontal stripes of red and white, with a blue isosceles triangle on the hoist side. The triangle contains a white five-pointed star. The colors represent the blood of patriots (red), peace (white), and the sky and sea (blue).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Bioluminescent Bays",
            "description": "Puerto Rico has bioluminescent bays where dinoflagellates glow in the dark, creating a magical experience."
          },
          {
            "icon": "landscape",
            "title": "El Yunque Rainforest",
            "description": "El Yunque National Rainforest is the only rainforest in the U.S. National Forest System."
          },
          {
            "icon": "public",
            "title": "Salsa Music",
            "description": "Puerto Rico is a major center of salsa music and culture, with vibrant music venues throughout the island."
          },
          {
            "icon": "public",
            "title": "U.S. Territory",
            "description": "Puerto Rico is a self-governing unincorporated territory of the United States."
          }
          ]
        },
        "es": {
          "name": "Puerto Rico",
          "capital": "San Juan",
          "flagDescription": "La bandera de Puerto Rico tiene cinco franjas horizontales de rojo y blanco, con un triángulo isósceles azul en el lado del asta. El triángulo contiene una estrella blanca de cinco puntas. Los colores representan la sangre de los patriotas (rojo), la paz (blanco), y el cielo y el mar (azul).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Bahías Bioluminiscentes",
            "description": "Puerto Rico tiene bahías bioluminiscentes donde los dinoflagelados brillan en la oscuridad, creando una experiencia mágica."
          },
          {
            "icon": "landscape",
            "title": "Bosque Tropical El Yunque",
            "description": "El Bosque Tropical Nacional El Yunque es el único bosque tropical en el Sistema de Bosques Nacionales de EE.UU."
          },
          {
            "icon": "public",
            "title": "Música Salsa",
            "description": "Puerto Rico es un centro importante de música y cultura de salsa, con vibrantes lugares de música en toda la isla."
          },
          {
            "icon": "public",
            "title": "Territorio de EE.UU.",
            "description": "Puerto Rico es un territorio no incorporado autogobernado de los Estados Unidos."
          }
          ]
        }
      }
  },
  {
      "slug": "qatar",
      "flagCode": "qa",
      "continent": "Asia",
      "population": "3.2M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Qatar",
              "capital": "Doha",
              "flagDescription": "Qatar's flag has a crimson/maroon stripe on the left separated by a white vertical stripe from a white field. The unusual saw-tooth border between the colors is distinctive. White represents peace and purity, while maroon represents the blood shed for independence.",
              "funFacts": [
                  {
                      "icon": "location_city",
                      "title": "Doha's Modern Skyline",
                      "description": "Doha has transformed from a small coastal town into a gleaming modern metropolis. The city is known for its futuristic architecture, including the iconic Burj Qatar and Museum of Islamic Art."
                  },
                  {
                      "icon": "sports",
                      "title": "FIFA World Cup 2022",
                      "description": "Qatar hosted the 2022 FIFA World Cup, the first World Cup in the Middle East and the first held in November instead of summer. It was a momentous event showcasing world-class stadiums."
                  },
                  {
                      "icon": "public",
                      "title": "Qatari Pearl Diving Heritage",
                      "description": "Before oil, Qatar's wealth came from pearl diving. The pearl diving heritage is preserved in museums and cultural centers, telling the story of this historic industry."
                  }
              ]
          },
          "es": {
              "name": "Catar",
              "capital": "Doha",
              "flagDescription": "La bandera de Catar tiene una franja carmesí/granate a la izquierda separada por una franja blanca vertical de un campo blanco. El inusual borde dentado entre los colores es distintivo. El blanco representa la paz y la pureza, mientras que el granate representa la sangre derramada por la independencia.",
              "funFacts": [
                  {
                      "icon": "location_city",
                      "title": "Horizonte moderno de Doha",
                      "description": "Doha se ha transformado de un pequeño pueblo costero en una metrópolis moderna y resplandeciente. La ciudad es conocida por su arquitectura futurista, incluyendo el icónico Burj Qatar y Museo de Arte Islámico."
                  },
                  {
                      "icon": "sports",
                      "title": "Copa Mundial FIFA 2022",
                      "description": "Catar fue anfitrión de la Copa Mundial FIFA 2022, la primera Copa Mundial en Oriente Medio y la primera celebrada en noviembre en lugar de verano. Fue un evento monumental que mostró estadios de clase mundial."
                  },
                  {
                      "icon": "public",
                      "title": "Patrimonio de buceo de perlas de Catar",
                      "description": "Antes del petróleo, la riqueza de Catar provenía del buceo de perlas. El patrimonio de buceo de perlas se conserva en museos y centros culturales, contando la historia de esta industria histórica."
                  }
              ]
          }
      }
  },
  {
      "slug": "republic-of-the-congo",
      "flagCode": "cg",
      "continent": "Africa",
      "population": "6.1M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "Republic of the Congo",
              "capital": "Brazzaville",
              "flagDescription": "The Republic of the Congo's flag has three diagonal stripes running from the lower-left to the upper-right — green at the top-left, yellow in the center, and red at the bottom-right. These Pan-African colors were given a unique diagonal arrangement when the flag was adopted in 1958, making it stand out from other African flags.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Twin Capitals Across the River",
                      "description": "Brazzaville (Congo) and Kinshasa (DR Congo) face each other across the Congo River — the only two capital cities in the entire world that are directly visible to each other from across a river!"
                  },
                  {
                      "icon": "forest",
                      "title": "Congo Basin Rainforest",
                      "description": "The Congo Basin rainforest extends into this country, sheltering western lowland gorillas, forest elephants, and bonobos. It is one of Earth's most critical ecosystems for absorbing carbon dioxide."
                  },
                  {
                      "icon": "water",
                      "title": "World's Deepest River",
                      "description": "The Congo River, which borders the country, is the deepest river on Earth (over 220 meters in places) and the second most powerful river by water volume after the Amazon."
                  }
              ]
          },
          "es": {
              "name": "República del Congo",
              "capital": "Brazzaville",
              "flagDescription": "La bandera de la República del Congo tiene tres franjas diagonales que van de la esquina inferior izquierda a la superior derecha: verde arriba a la izquierda, amarilla en el centro y roja abajo a la derecha. Estos colores panafricanos recibieron un arreglo diagonal único cuando se adoptó la bandera en 1958.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Capitales gemelas frente al río",
                      "description": "¡Brazzaville (Congo) y Kinshasa (RD Congo) se miran a través del río Congo, las dos únicas capitales del mundo directamente visibles entre sí a través de un río!"
                  },
                  {
                      "icon": "forest",
                      "title": "Selva de la cuenca del Congo",
                      "description": "La selva de la cuenca del Congo se extiende por este país, albergando gorilas de llanura occidental, elefantes forestales y bonobos. Es uno de los ecosistemas más importantes de la Tierra para absorber CO₂."
                  },
                  {
                      "icon": "water",
                      "title": "El río más profundo del mundo",
                      "description": "El río Congo, que bordea el país, es el río más profundo de la Tierra (más de 220 metros en algunos puntos) y el segundo más poderoso por volumen de agua tras el Amazonas."
                  }
              ]
          }
      }
  },
  {
      "slug": "reunion",
      "flagCode": "re",
      "continent": "Africa",
      "population": "896K",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Réunion",
              "capital": "Saint-Denis",
              "flagDescription": "As a French overseas department, Réunion uses the French flag — three equal vertical stripes of blue, white, and red. The island has its own local flag featuring a volcano, a sun, and tropical flowers, but officially it flies the tricolor of France.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "One of the Most Active Volcanoes",
                      "description": "Réunion's Piton de la Fournaise volcano erupts on average once a year and is one of the world's most active volcanoes! Watching the lava flow into the sea at night is an incredible spectacle."
                  },
                  {
                      "icon": "landscape",
                      "title": "Spectacular Cirques",
                      "description": "The island has three ancient volcanic calderas called 'cirques' — Cilaos, Mafate, and Salazie — that are filled with lush jungle, waterfalls, and dramatic cliffs perfect for hiking and trekking."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Creole Culture Fusion",
                      "description": "Réunion's culture beautifully blends African, Indian, European, and Chinese traditions in its food, music, and festivals. The island is famous for its spicy Creole dishes and colorful celebrations."
                  }
              ]
          },
          "es": {
              "name": "Reunión",
              "capital": "Saint-Denis",
              "flagDescription": "Como departamento de ultramar francés, Reunión usa la bandera de Francia: tres franjas verticales iguales de azul, blanco y rojo. La isla tiene su propia bandera local con un volcán, un sol y flores tropicales, pero oficialmente ondea el tricolor de Francia.",
              "funFacts": [
                  {
                      "icon": "volcano",
                      "title": "Uno de los volcanes más activos",
                      "description": "El volcán Piton de la Fournaise de Reunión hace erupción en promedio una vez al año y es uno de los volcanes más activos del mundo. ¡Ver la lava fluir al mar de noche es un espectáculo increíble!"
                  },
                  {
                      "icon": "landscape",
                      "title": "Circos volcánicos espectaculares",
                      "description": "La isla tiene tres calderas volcánicas antiguas llamadas 'circos': Cilaos, Mafate y Salazie, llenas de selva exuberante, cascadas y acantilados dramáticos, perfectos para el senderismo."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Fusión cultural criolla",
                      "description": "La cultura de Reunión mezcla de forma preciosa tradiciones africanas, indias, europeas y chinas en su gastronomía, música y festividades. La isla es famosa por sus picantes platos criollos y coloridas celebraciones."
                  }
              ]
          }
      }
  },
  {
      "slug": "romania",
      "flagCode": "ro",
      "continent": "Europe",
      "population": "19.0M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Romania",
              "capital": "Bucharest",
              "flagDescription": "Romania's flag has three vertical stripes of blue, yellow, and red. These colors have been used by Romanians since the early 19th century independence movements. Blue represents the sky and freedom, yellow symbolizes the wealth of the land and the fields of grain, and red stands for the blood and sacrifice of those who fought for Romania's independence and unity.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Land of Dracula",
                      "description": "Bran Castle in Transylvania is known as Dracula's Castle, inspiring Bram Stoker's famous novel. The real Vlad the Impaler (Vlad III) was a fierce Romanian prince who defended his country from the Ottoman Empire — his terrifying methods became legend."
                  },
                  {
                      "icon": "forest",
                      "title": "Europe's Last Primeval Forests",
                      "description": "Romania has some of the last ancient primeval forests in Europe. The Carpathian Mountains are home to Europe's largest populations of wolves, bears, and lynxes — wildlife that has long disappeared from much of the continent."
                  },
                  {
                      "icon": "sports_gymnastics",
                      "title": "Gymnastics Legend",
                      "description": "Nadia Comaneci, a Romanian gymnast, became the first person to score a perfect 10 in Olympic gymnastics at the 1976 Montreal Olympics — a moment that shocked the world because the scoreboard wasn't even designed to show a 10!"
                  },
                  {
                      "icon": "history",
                      "title": "Roman Descendants",
                      "description": "Romania's name comes from Rome. The Romans conquered the region of Dacia in the 2nd century AD and left a lasting cultural imprint. Romanian is the only Eastern European language descended from Latin, closely related to Italian, French, and Spanish."
                  }
              ]
          },
          "es": {
              "name": "Rumanía",
              "capital": "Bucarest",
              "flagDescription": "La bandera de Rumanía tiene tres franjas verticales de azul, amarillo y rojo. Estos colores han sido usados por los rumanos desde los movimientos de independencia de principios del siglo XIX. El azul representa el cielo y la libertad, el amarillo simboliza la riqueza de la tierra y los campos de cereales, y el rojo representa la sangre y el sacrificio de quienes lucharon por la independencia y unidad de Rumanía.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Tierra de Drácula",
                      "description": "El Castillo de Bran en Transilvania es conocido como el Castillo de Drácula, que inspiró la famosa novela de Bram Stoker. El verdadero Vlad el Empalador (Vlad III) fue un feroz príncipe rumano que defendió su país del Imperio Otomano — sus aterradores métodos se convirtieron en leyenda."
                  },
                  {
                      "icon": "forest",
                      "title": "Los Últimos Bosques Primigenios de Europa",
                      "description": "Rumanía tiene algunos de los últimos bosques primigenios de Europa. Los Cárpatos albergan las mayores poblaciones de lobos, osos y linces de Europa — fauna que ha desaparecido hace mucho de gran parte del continente."
                  },
                  {
                      "icon": "sports_gymnastics",
                      "title": "Leyenda de la Gimnasia",
                      "description": "Nadia Comaneci, una gimnasta rumana, se convirtió en la primera persona en obtener un 10 perfecto en gimnasia olímpica en los Juegos Olímpicos de Montreal de 1976 — un momento que impactó al mundo porque el marcador ni siquiera estaba diseñado para mostrar un 10."
                  },
                  {
                      "icon": "history",
                      "title": "Descendientes de Roma",
                      "description": "El nombre de Rumanía viene de Roma. Los romanos conquistaron la región de Dacia en el siglo II d.C. y dejaron una huella cultural duradera. El rumano es el único idioma de Europa del Este descendiente del latín, estrechamente relacionado con el italiano, francés y español."
                  }
              ]
          }
      }
  },
  {
      "slug": "russia",
      "flagCode": "ru",
      "continent": "Europe",
      "population": "146.0M",
      "region": "Eastern Europe",
      "translations": {
          "en": {
              "name": "Russia",
              "capital": "Moscow",
              "flagDescription": "Russia's flag has three equal horizontal stripes of white, blue, and red from top to bottom. The white-blue-red tricolor was introduced by Peter the Great in the 17th century, inspired by the Dutch flag when he visited the Netherlands to study shipbuilding.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "Largest Country on Earth",
                      "description": "Russia is by far the largest country in the world, covering 17.1 million km² — spanning 11 time zones and both Europe and Asia. It's larger than the entire continent of Pluto."
                  },
                  {
                      "icon": "rocket_launch",
                      "title": "Space Pioneer",
                      "description": "The Soviet Union (Russia) launched the first satellite (Sputnik, 1957), the first human in space (Yuri Gagarin, 1961), and the first space station. Gagarin's 'Let's go!' became one of history's most famous quotes."
                  },
                  {
                      "icon": "train",
                      "title": "Trans-Siberian Railway",
                      "description": "The Trans-Siberian Railway is the world's longest railway at 9,289 km, connecting Moscow to the Russian Far East. The full journey takes about 7 days."
                  },
                  {
                      "icon": "water",
                      "title": "Lake Baikal",
                      "description": "Lake Baikal in Siberia is the world's deepest lake (1,642 m) and holds about 20% of all the fresh unfrozen surface water on Earth. It's also home to the nerpa, the world's only freshwater seal."
                  }
              ]
          },
          "es": {
              "name": "Rusia",
              "capital": "Moscú",
              "flagDescription": "La bandera de Rusia tiene tres franjas horizontales iguales de blanco, azul y rojo de arriba a abajo. El tricolor blanco-azul-rojo fue introducido por Pedro el Grande en el siglo XVII, inspirado en la bandera holandesa durante su visita a los Países Bajos para estudiar la construcción naval.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "El País Más Grande del Mundo",
                      "description": "Rusia es con diferencia el país más grande del mundo, con 17,1 millones de km²: abarca 11 zonas horarias y se extiende por Europa y Asia. Es más grande que el planeta Plutón."
                  },
                  {
                      "icon": "rocket_launch",
                      "title": "Pionero del Espacio",
                      "description": "La Unión Soviética (Rusia) lanzó el primer satélite (Sputnik, 1957), el primer ser humano al espacio (Yuri Gagarin, 1961) y la primera estación espacial. El '¡Poyekhali!' de Gagarin se convirtió en una de las frases más famosas de la historia."
                  },
                  {
                      "icon": "train",
                      "title": "Ferrocarril Transiberiano",
                      "description": "El Ferrocarril Transiberiano es el más largo del mundo con 9.289 km, conectando Moscú con el Extremo Oriente ruso. El viaje completo dura aproximadamente 7 días."
                  },
                  {
                      "icon": "water",
                      "title": "Lago Baikal",
                      "description": "El lago Baikal en Siberia es el lago más profundo del mundo (1.642 m) y contiene aproximadamente el 20% de toda el agua dulce superficial no congelada de la Tierra. También es hogar de la nerpa, la única foca de agua dulce del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "rwanda",
      "flagCode": "rw",
      "continent": "Africa",
      "population": "14.1M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Rwanda",
              "capital": "Kigali",
              "flagDescription": "Rwanda's flag features three horizontal bands of blue (top, taking up half the flag), yellow, and green. A golden sun with 24 rays appears in the upper-right corner of the blue band, symbolizing unity, work, and national pride.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Mountain Gorilla Haven",
                      "description": "Rwanda's Volcanoes National Park is home to about half the world's remaining mountain gorillas. Up-close gorilla trekking experiences are among the world's most memorable wildlife encounters."
                  },
                  {
                      "icon": "recycling",
                      "title": "Greenest City in Africa",
                      "description": "Kigali is considered Africa's cleanest and most organized capital city. Rwanda banned plastic bags in 2008 — years before most developed countries."
                  },
                  {
                      "icon": "female",
                      "title": "Most Female Parliament",
                      "description": "Rwanda has the world's highest percentage of women in parliament at over 60%, leading the world in gender equality in government."
                  }
              ]
          },
          "es": {
              "name": "Ruanda",
              "capital": "Kigali",
              "flagDescription": "La bandera de Ruanda tiene tres franjas horizontales de azul (arriba, ocupando la mitad), amarillo y verde. Un sol dorado de 24 rayos aparece en la esquina superior derecha de la franja azul, simbolizando la unidad, el trabajo y el orgullo nacional.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Refugio del gorila de montaña",
                      "description": "El Parque Nacional de los Volcanes de Ruanda alberga aproximadamente la mitad de los gorilas de montaña restantes en el mundo. El trekking de gorilas aquí es una de las experiencias de fauna más memorables del mundo."
                  },
                  {
                      "icon": "recycling",
                      "title": "La ciudad más verde de África",
                      "description": "Kigali es considerada la capital más limpia y organizada de África. Ruanda prohibió las bolsas de plástico en 2008, años antes que la mayoría de los países desarrollados."
                  },
                  {
                      "icon": "female",
                      "title": "El parlamento más femenino",
                      "description": "Ruanda tiene el mayor porcentaje de mujeres en el parlamento del mundo, con más del 60%, liderando el mundo en igualdad de género en el gobierno."
                  }
              ]
          }
      }
  },
  {
      "slug": "saint-barthelemy",
      "flagCode": "bl",
      "continent": "North America",
      "population": "9.7K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Saint Barthélemy",
          "capital": "Gustavia",
          "flagDescription": "Saint Barthélemy uses the French flag as it is a French overseas collectivity. The island is known for its upscale beaches, luxury resorts, and blend of French and Caribbean charm.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Luxury Island",
            "description": "Saint Barthélemy is known for its exclusive resorts, designer shops, and upscale beach clubs."
          },
          {
            "icon": "landscape",
            "title": "Beautiful Beaches",
            "description": "The island has pristine white sand beaches and crystal-clear waters perfect for swimming and watersports."
          },
          {
            "icon": "public",
            "title": "French Territory",
            "description": "Saint Barthélemy is a French overseas collectivity with French culture, language, and governance."
          },
          {
            "icon": "celebration",
            "title": "Festival Season",
            "description": "The island hosts various festivals and events throughout the year, celebrating music, culture, and cuisine."
          }
          ]
        },
        "es": {
          "name": "San Bartolomé",
          "capital": "Gustavia",
          "flagDescription": "San Bartolomé utiliza la bandera francesa ya que es una colectividad francesa de ultramar. La isla es conocida por sus playas de lujo, resorts de lujo, y mezcla de encanto francés y caribeño.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Isla de Lujo",
            "description": "San Bartolomé es conocida por sus resorts exclusivos, tiendas de diseñador y clubes de playa de alta gama."
          },
          {
            "icon": "landscape",
            "title": "Playas Hermosas",
            "description": "La isla tiene playas de arena blanca prístina y aguas cristalinas perfectas para nadar y deportes acuáticos."
          },
          {
            "icon": "public",
            "title": "Territorio Francés",
            "description": "San Bartolomé es una colectividad francesa de ultramar con cultura, idioma y gobernanza franceses."
          },
          {
            "icon": "celebration",
            "title": "Temporada de Festivales",
            "description": "La isla alberga varios festivales y eventos durante todo el año, celebrando música, cultura y cocina."
          }
          ]
        }
      }
  },
  {
      "slug": "saint-helena-ascension-and-tristan-da-cunha",
      "flagCode": "sh",
      "continent": "Africa",
      "population": "6K",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Saint Helena, Ascension and Tristan da Cunha",
              "capital": "Jamestown",
              "flagDescription": "The flag of Saint Helena, Ascension and Tristan da Cunha has a blue background with the Union Jack of the United Kingdom in the top-left corner and the territory's coat of arms on the right. The coat of arms features a Saint Helena wirebird — a rare wading bird found only on this island — and a sailing ship.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Napoleon's Last Home",
                      "description": "Napoleon Bonaparte was exiled to the remote island of Saint Helena after his defeat at the Battle of Waterloo in 1815. He lived on this tiny island until his death in 1821 — it was his last home."
                  },
                  {
                      "icon": "landscape",
                      "title": "Most Remote Inhabited Island",
                      "description": "Tristan da Cunha is the most remote inhabited island in the entire world — the nearest land is 2,437 km away! The island's small community of about 250 people grows vegetables and fishes for their living."
                  },
                  {
                      "icon": "pets",
                      "title": "The Wirebird",
                      "description": "The Saint Helena wirebird (Saint Helena plover) is found ONLY on Saint Helena island and was nearly extinct, with fewer than 200 remaining. Conservation efforts have helped the population slowly recover."
                  }
              ]
          },
          "es": {
              "name": "Santa Elena, Ascensión y Tristán de Acuña",
              "capital": "Jamestown",
              "flagDescription": "La bandera de Santa Elena, Ascensión y Tristán de Acuña tiene un fondo azul con la bandera del Reino Unido en la esquina superior izquierda y el escudo del territorio a la derecha. El escudo muestra un pájaro playero de Santa Elena, un ave limícola rara que solo existe en esta isla, y un velero.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El último hogar de Napoleón",
                      "description": "Napoleón Bonaparte fue exiliado a la remota isla de Santa Elena tras su derrota en la batalla de Waterloo en 1815. Vivió en esta pequeña isla hasta su muerte en 1821: fue su último hogar."
                  },
                  {
                      "icon": "landscape",
                      "title": "La isla habitada más remota",
                      "description": "¡Tristán de Acuña es la isla habitada más remota del mundo: el territorio más cercano está a 2.437 km! Su pequeña comunidad de unas 250 personas cultiva verduras y pesca para vivir."
                  },
                  {
                      "icon": "pets",
                      "title": "El playero alambre",
                      "description": "El playero alambre de Santa Elena solo existe en la isla de Santa Elena y estuvo al borde de la extinción con menos de 200 individuos. Los esfuerzos de conservación han ayudado a que la población se recupere lentamente."
                  }
              ]
          }
      }
  },
  {
      "slug": "saint-kitts-and-nevis",
      "flagCode": "kn",
      "continent": "North America",
      "population": "53.4K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Saint Kitts and Nevis",
          "capital": "Basseterre",
          "flagDescription": "Saint Kitts and Nevis' flag has a diagonal yellow band dividing black and green triangles with two white stars. The black represents the soil and African heritage, green represents vegetation, yellow represents sunshine, and white represents purity.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Historical Fortresses",
            "description": "Saint Kitts is home to Brimstone Hill Fortress, one of the Caribbean's most impressive historical forts."
          },
          {
            "icon": "landscape",
            "title": "Twin Island Nation",
            "description": "The country comprises two main islands: Saint Kitts and Nevis, each with distinct characteristics."
          },
          {
            "icon": "waves",
            "title": "Pristine Beaches",
            "description": "The islands have beautiful beaches with turquoise water and white sand, perfect for beach lovers."
          },
          {
            "icon": "celebration",
            "title": "Carnival Culture",
            "description": "Saint Kitts and Nevis celebrates carnival with colorful parades, music, and traditional foods."
          }
          ]
        },
        "es": {
          "name": "San Cristóbal y Nieves",
          "capital": "Basseterre",
          "flagDescription": "La bandera de San Cristóbal y Nieves tiene una banda amarilla diagonal dividiendo triángulos negros y verdes con dos estrellas blancas. El negro representa el suelo y la herencia africana, el verde representa la vegetación, el amarillo representa la luz solar, y el blanco representa la pureza.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Fortalezas Históricas",
            "description": "San Cristóbal es hogar de la Fortaleza de Brimstone, uno de los fuertes históricos más impresionantes del Caribe."
          },
          {
            "icon": "landscape",
            "title": "Nación Insular Gemela",
            "description": "El país comprende dos islas principales: San Cristóbal y Nieves, cada una con características distintas."
          },
          {
            "icon": "waves",
            "title": "Playas Prístinas",
            "description": "Las islas tienen hermosas playas con agua turquesa y arena blanca, perfectas para amantes de la playa."
          },
          {
            "icon": "celebration",
            "title": "Cultura de Carnaval",
            "description": "San Cristóbal y Nieves celebra el carnaval con desfiles coloridos, música y comidas tradicionales."
          }
          ]
        }
      }
  },
  {
      "slug": "saint-lucia",
      "flagCode": "lc",
      "continent": "North America",
      "population": "180K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Saint Lucia",
          "capital": "Castries",
          "flagDescription": "Saint Lucia's flag has a blue background with a triangle of black and white at the center, and a diamond shape composed of yellow and black triangles below. The colors represent the island's natural beauty and cultural heritage.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Pitons",
            "description": "Saint Lucia is famous for the twin Pitons peaks, which are UNESCO World Heritage Sites and appear on the flag."
          },
          {
            "icon": "landscape",
            "title": "Volcanic Island",
            "description": "Saint Lucia is a volcanic island with sulfur springs, adding to its dramatic natural landscape."
          },
          {
            "icon": "public",
            "title": "Creole Culture",
            "description": "Saint Lucia has a vibrant creole culture blending African, French, and English influences."
          },
          {
            "icon": "celebration",
            "title": "Carnival Celebration",
            "description": "The island celebrates carnival with colorful parades, steel bands, and traditional costumes."
          }
          ]
        },
        "es": {
          "name": "Santa Lucía",
          "capital": "Castries",
          "flagDescription": "La bandera de Santa Lucía tiene un fondo azul con un triángulo de negro y blanco en el centro, y una forma de diamante compuesta por triángulos amarillos y negros debajo. Los colores representan la belleza natural y el patrimonio cultural de la isla.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Pitons",
            "description": "Santa Lucía es famosa por los picos gemelos de Pitons, que son Sitios del Patrimonio Mundial de la UNESCO y aparecen en la bandera."
          },
          {
            "icon": "landscape",
            "title": "Isla Volcánica",
            "description": "Santa Lucía es una isla volcánica con aguas termales de azufre, añadiendo más a su paisaje natural dramático."
          },
          {
            "icon": "public",
            "title": "Cultura Criolla",
            "description": "Santa Lucía tiene una cultura criolla vibrante que mezcla influencias africanas, francesas e inglesas."
          },
          {
            "icon": "celebration",
            "title": "Celebración de Carnaval",
            "description": "La isla celebra el carnaval con desfiles coloridos, bandas de acero y disfraces tradicionales."
          }
          ]
        }
      }
  },
  {
      "slug": "saint-martin",
      "flagCode": "mf",
      "continent": "North America",
      "population": "31.4K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Saint Martin",
          "capital": "Marigot",
          "flagDescription": "Saint Martin uses the French flag as it is a French overseas collectivity. The island is shared with the Netherlands (Sint Maarten), creating a unique cultural blend.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Shared Island",
            "description": "Saint Martin is uniquely shared between France and the Netherlands, creating a blend of European cultures."
          },
          {
            "icon": "waves",
            "title": "Beautiful Beaches",
            "description": "The island has stunning beaches with clear waters perfect for swimming, snorkeling, and watersports."
          },
          {
            "icon": "celebration",
            "title": "Cultural Diversity",
            "description": "Saint Martin is a multicultural destination with French, Dutch, and Caribbean influences."
          },
          {
            "icon": "restaurant",
            "title": "Culinary Destination",
            "description": "The island is known for its excellent restaurants and blend of French and Caribbean cuisine."
          }
          ]
        },
        "es": {
          "name": "San Martín",
          "capital": "Marigot",
          "flagDescription": "San Martín utiliza la bandera francesa ya que es una colectividad francesa de ultramar. La isla se comparte con los Países Bajos (Sint Maarten), creando una mezcla cultural única.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Isla Compartida",
            "description": "San Martín se comparte únicamente entre Francia y los Países Bajos, creando una mezcla de culturas europeas."
          },
          {
            "icon": "waves",
            "title": "Playas Hermosas",
            "description": "La isla tiene playas impresionantes con aguas claras perfectas para nadar, snorkel y deportes acuáticos."
          },
          {
            "icon": "celebration",
            "title": "Diversidad Cultural",
            "description": "San Martín es un destino multicultural con influencias francesas, holandesas y caribeñas."
          },
          {
            "icon": "restaurant",
            "title": "Destino Culinario",
            "description": "La isla es conocida por sus excelentes restaurantes y mezcla de cocina francesa y caribeña."
          }
          ]
        }
      }
  },
  {
      "slug": "saint-pierre-and-miquelon",
      "flagCode": "pm",
      "continent": "North America",
      "population": "5.4K",
      "region": "North Atlantic",
      "translations": {
        "en": {
          "name": "Saint Pierre and Miquelon",
          "capital": "Saint Pierre",
          "flagDescription": "Saint Pierre and Miquelon uses the French flag as it is a French overseas collectivity. The islands are located off the coast of Newfoundland, Canada, making them the closest French territory to North America.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "French North America",
            "description": "These islands are a unique piece of France located near Newfoundland, making them the closest French territory to North America."
          },
          {
            "icon": "landscape",
            "title": "Fishing Heritage",
            "description": "The islands have a rich fishing heritage, traditionally dependent on cod fishing in the Atlantic."
          },
          {
            "icon": "public",
            "title": "French Territory",
            "description": "Despite their location in North America, the islands are a French overseas collectivity with French culture and governance."
          },
          {
            "icon": "nature",
            "title": "Sea Bird Colonies",
            "description": "The islands host important colonies of seabirds, making them significant for wildlife observation."
          }
          ]
        },
        "es": {
          "name": "San Pierre y Miquelón",
          "capital": "San Pierre",
          "flagDescription": "San Pierre y Miquelón utiliza la bandera francesa ya que es una colectividad francesa de ultramar. Las islas están ubicadas frente a la costa de Terranova, Canadá, haciéndolas el territorio francés más cercano a América del Norte.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Francia en América del Norte",
            "description": "Estas islas son una pieza única de Francia ubicada cerca de Terranova, haciéndolas el territorio francés más cercano a América del Norte."
          },
          {
            "icon": "landscape",
            "title": "Herencia Pesquera",
            "description": "Las islas tienen una rica herencia pesquera, tradicionalmente dependiente de la pesca de bacalao en el Atlántico."
          },
          {
            "icon": "public",
            "title": "Territorio Francés",
            "description": "A pesar de su ubicación en América del Norte, las islas son una colectividad francesa de ultramar con cultura y gobernanza francesas."
          },
          {
            "icon": "nature",
            "title": "Colonias de Aves Marinas",
            "description": "Las islas albergan colonias importantes de aves marinas, haciéndolas significativas para la observación de vida silvestre."
          }
          ]
        }
      }
  },
  {
      "slug": "saint-vincent-and-the-grenadines",
      "flagCode": "vc",
      "continent": "North America",
      "population": "111K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Saint Vincent and the Grenadines",
          "capital": "Kingstown",
          "flagDescription": "Saint Vincent and the Grenadines' flag has three vertical stripes of blue, gold, and green, with three diamonds in the gold stripe representing the islands. The colors represent the sea (blue), sunshine (gold), and vegetation (green).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Island Chain",
            "description": "The country comprises Saint Vincent and 32 islands and cays known as the Grenadines."
          },
          {
            "icon": "landscape",
            "title": "Volcanic Island",
            "description": "Saint Vincent is home to La Soufrière volcano, which last erupted in 1979."
          },
          {
            "icon": "waves",
            "title": "Sailing Paradise",
            "description": "The Grenadines are a sailor's paradise with pristine anchorages and crystal-clear waters."
          },
          {
            "icon": "celebration",
            "title": "Carnival Festival",
            "description": "The nation celebrates carnival with music, dancing, and colorful parades throughout the islands."
          }
          ]
        },
        "es": {
          "name": "San Vicente y las Granadinas",
          "capital": "Kingstown",
          "flagDescription": "La bandera de San Vicente y las Granadinas tiene tres franjas verticales de azul, oro y verde, con tres diamantes en la franja dorada que representan las islas. Los colores representan el mar (azul), la luz solar (oro), y la vegetación (verde).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Cadena de Islas",
            "description": "El país comprende San Vicente y 32 islas y cayos conocidos como las Granadinas."
          },
          {
            "icon": "landscape",
            "title": "Isla Volcánica",
            "description": "San Vicente es hogar del volcán La Soufrière, que entró en erupción por última vez en 1979."
          },
          {
            "icon": "waves",
            "title": "Paraíso de la Vela",
            "description": "Las Granadinas son un paraíso de navegantes con fondeaderos prístinos y aguas cristalinas."
          },
          {
            "icon": "celebration",
            "title": "Festival de Carnaval",
            "description": "La nación celebra el carnaval con música, baile y desfiles coloridos en todas las islas."
          }
          ]
        }
      }
  },
  {
      "slug": "samoa",
      "flagCode": "ws",
      "continent": "Oceania",
      "population": "206K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Samoa",
              "capital": "Apia",
              "flagDescription": "Samoa's flag is red with the blue canton (upper-left) containing the Southern Cross constellation in white, with an extra small star added in 1997. Red represents courage, white represents purity, and blue represents freedom.",
              "funFacts": [
                  {
                      "icon": "sports",
                      "title": "Rugby Nation",
                      "description": "For a tiny nation of 200,000 people, Samoa has produced a remarkable number of professional rugby players and is a powerhouse in Pacific rugby."
                  },
                  {
                      "icon": "brush",
                      "title": "Tattoo Heritage",
                      "description": "The word 'tattoo' comes from the Samoan word 'tatau'. The traditional pe'a (full body tattoo for men) and malu (leg tattoo for women) are considered sacred rites of passage."
                  },
                  {
                      "icon": "access_time",
                      "title": "First to See the New Year",
                      "description": "Samoa shifted time zones in 2011 and is now one of the first countries to celebrate New Year's Day every year, ahead of even New Zealand and Australia."
                  },
                  {
                      "icon": "home",
                      "title": "Open-Air Fale Architecture",
                      "description": "Traditional Samoan homes called fale are open-sided oval structures with thatched roofs and no walls — allowing ocean breezes to flow freely. They reflect the Samoan value of communal living and transparency in community life."
                  }
              ]
          },
          "es": {
              "name": "Samoa",
              "capital": "Apia",
              "flagDescription": "La bandera de Samoa es roja con el cantón azul (esquina superior izquierda) que contiene la constelación de la Cruz del Sur en blanco, con una pequeña estrella extra añadida en 1997. El rojo representa el valor, el blanco la pureza y el azul la libertad.",
              "funFacts": [
                  {
                      "icon": "sports",
                      "title": "Nación del Rugby",
                      "description": "Para una pequeña nación de 200.000 habitantes, Samoa ha producido un número notable de jugadores de rugby profesionales y es una potencia del rugby del Pacífico."
                  },
                  {
                      "icon": "brush",
                      "title": "Herencia del Tatuaje",
                      "description": "La palabra 'tatuaje' proviene de la palabra samoana 'tatau'. El pe'a tradicional (tatuaje de cuerpo completo para hombres) y el malu (tatuaje de piernas para mujeres) son considerados sagrados ritos de paso."
                  },
                  {
                      "icon": "access_time",
                      "title": "Primeros en Ver el Año Nuevo",
                      "description": "Samoa cambió de zona horaria en 2011 y ahora es uno de los primeros países en celebrar el Año Nuevo cada año, antes incluso que Nueva Zelanda y Australia."
                  },
                  {
                      "icon": "home",
                      "title": "Arquitectura del Fale",
                      "description": "Las casas tradicionales samoanas llamadas fale son estructuras ovaladas abiertas con techos de paja y sin paredes, que permiten que la brisa del océano circule libremente. Reflejan el valor samoano de la vida comunitaria y la transparencia."
                  }
              ]
          }
      }
  },
  {
      "slug": "san-marino",
      "flagCode": "sm",
      "continent": "Europe",
      "population": "34K",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "San Marino",
              "capital": "San Marino City",
              "flagDescription": "San Marino's flag has two equal horizontal stripes — pale blue on top and white on the bottom — with the country's coat of arms in the center. The coat of arms shows three towers (representing the three castles on Mount Titano), a crown, an ostrich feather, and two branches. San Marino claims to be the world's oldest republic, founded in 301 AD.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "World's Oldest Republic",
                      "description": "San Marino claims to be the world's oldest constitutional republic, founded in 301 AD by a Christian stonemason named Marinus who fled religious persecution. It has maintained its independence for over 1,700 years, even surviving Napoleon and both World Wars."
                  },
                  {
                      "icon": "landscape",
                      "title": "Completely Inside Italy",
                      "description": "San Marino is a microstate entirely surrounded by Italy — the only country in the world fully enclosed by a single nation other than Lesotho (in South Africa). Despite this, it has maintained full independence for centuries."
                  },
                  {
                      "icon": "sports_motorsports",
                      "title": "Formula 1 Connection",
                      "description": "The famous San Marino Grand Prix was held in Imola, Italy — not San Marino itself, since the tiny country has no room for a race track! The race borrowed the name to honor the neighboring republic."
                  },
                  {
                      "icon": "castle",
                      "title": "Three Towers on the Mountain",
                      "description": "The three medieval towers of San Marino — Guaita, Cesta, and Montale — perch dramatically on the rocky peaks of Mount Titano and are UNESCO World Heritage Sites. They appear on the country's flag and coat of arms."
                  }
              ]
          },
          "es": {
              "name": "San Marino",
              "capital": "Ciudad de San Marino",
              "flagDescription": "La bandera de San Marino tiene dos franjas horizontales iguales — azul pálido arriba y blanco abajo — con el escudo de armas del país en el centro. El escudo muestra tres torres (que representan los tres castillos del Monte Titano), una corona, una pluma de avestruz y dos ramas. San Marino se proclama la república más antigua del mundo, fundada en el año 301 d.C.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "La República Más Antigua del Mundo",
                      "description": "San Marino se proclama la república constitucional más antigua del mundo, fundada en el año 301 d.C. por un cantero cristiano llamado Marinus que huyó de la persecución religiosa. Ha mantenido su independencia durante más de 1.700 años, sobreviviendo incluso a Napoleón y a las dos guerras mundiales."
                  },
                  {
                      "icon": "landscape",
                      "title": "Completamente Dentro de Italia",
                      "description": "San Marino es un microestado completamente rodeado por Italia — el único país del mundo totalmente encerrado por una sola nación aparte de Lesoto (en Sudáfrica). A pesar de esto, ha mantenido plena independencia durante siglos."
                  },
                  {
                      "icon": "sports_motorsports",
                      "title": "Conexión con la Fórmula 1",
                      "description": "El famoso Gran Premio de San Marino se celebraba en Imola, Italia — ¡no en el propio San Marino, ya que el diminuto país no tiene espacio para un circuito de carreras! La carrera tomó prestado el nombre para honrar a la república vecina."
                  },
                  {
                      "icon": "castle",
                      "title": "Las Tres Torres en la Montaña",
                      "description": "Las tres torres medievales de San Marino — Guaita, Cesta y Montale — se asientan dramáticamente en los picos rocosos del Monte Titano y son Patrimonio de la Humanidad por la UNESCO. Aparecen en la bandera y el escudo de armas del país."
                  }
              ]
          }
      }
  },
  {
      "slug": "sao-tome-and-principe",
      "flagCode": "st",
      "continent": "Africa",
      "population": "210K",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "São Tomé and Príncipe",
              "capital": "São Tomé",
              "flagDescription": "São Tomé and Príncipe's flag has three horizontal stripes of green, yellow, and green with a red triangle on the left side and two black stars — one for each of the two islands. The Pan-African colors represent the struggle for independence, and the two stars symbolize the twin islands that make up this small nation.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Birthplace of Cacao Farming",
                      "description": "São Tomé was one of the first places in the world where cacao (chocolate!) was cultivated on large plantations in the 1800s, making the island a key part of chocolate history."
                  },
                  {
                      "icon": "forest",
                      "title": "Biodiversity Hotspot",
                      "description": "These tiny volcanic islands have extraordinary biodiversity with many unique bird species found nowhere else on Earth. The cloud forests that cover the mountains are home to endemic monkeys and birds."
                  },
                  {
                      "icon": "volcano",
                      "title": "Volcanic Mountains from the Sea",
                      "description": "Dramatic volcanic mountains rise sharply from the ocean and are cloaked in lush tropical cloud forest. Pico Cão Grande (Great Dog Peak) is a spectacular needle-like volcanic plug soaring 370 meters."
                  }
              ]
          },
          "es": {
              "name": "Santo Tomé y Príncipe",
              "capital": "Santo Tomé",
              "flagDescription": "La bandera de Santo Tomé y Príncipe tiene tres franjas horizontales de verde, amarillo y verde con un triángulo rojo a la izquierda y dos estrellas negras, una por cada isla. Los colores panafricanos representan la lucha por la independencia, y las dos estrellas simbolizan las dos islas que forman esta pequeña nación.",
              "funFacts": [
                  {
                      "icon": "restaurant",
                      "title": "Cuna del cultivo del cacao",
                      "description": "Santo Tomé fue uno de los primeros lugares del mundo donde se cultivó cacao (¡chocolate!) en grandes plantaciones en el siglo XIX, convirtiéndola en parte clave de la historia del chocolate."
                  },
                  {
                      "icon": "forest",
                      "title": "Punto de gran biodiversidad",
                      "description": "Estas pequeñas islas volcánicas tienen una biodiversidad extraordinaria con muchas especies de aves únicas que no existen en ningún otro lugar. Los bosques de niebla que cubren las montañas albergan monos y aves endémicas."
                  },
                  {
                      "icon": "volcano",
                      "title": "Montañas volcánicas sobre el océano",
                      "description": "Las dramáticas montañas volcánicas se elevan abruptamente del océano cubiertas de selva tropical. El Pico Cão Grande ('Pico del Gran Perro') es un impresionante pitón volcánico de 370 metros de altura."
                  }
              ]
          }
      }
  },
  {
      "slug": "saudi-arabia",
      "flagCode": "sa",
      "continent": "Asia",
      "population": "35.3M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Saudi Arabia",
              "capital": "Riyadh",
              "flagDescription": "Saudi Arabia's flag is green with the Islamic Shahada (declaration of faith) in white Arabic script and a curved white sword below it. Green is the color of Islam, the Shahada represents the faith, and the sword represents the nation's strength and heritage.",
              "funFacts": [
                  {
                      "icon": "temple_hindu",
                      "title": "Islam's Holiest Sites",
                      "description": "Saudi Arabia is home to Mecca and Medina, the two holiest cities in Islam. Every year, millions of pilgrims make the Hajj (pilgrimage) to Mecca, one of Islam's Five Pillars."
                  },
                  {
                      "icon": "landscape",
                      "title": "Rub' al Khali Desert",
                      "description": "The Rub' al Khali is the world's largest pure sand desert, covering an area larger than France. Its name means \"Empty Quarter\" in Arabic, and it's one of the harshest environments on Earth."
                  },
                  {
                      "icon": "local_gas_station",
                      "title": "Oil Superpower",
                      "description": "Saudi Arabia has the second-largest proven oil reserves in the world and is the largest oil exporter. Oil has transformed the nation into one of the world's most influential economic powers."
                  }
              ]
          },
          "es": {
              "name": "Arabia Saudí",
              "capital": "Riad",
              "flagDescription": "La bandera de Arabia Saudí es verde con la Shahada islámica (declaración de fe) en escritura árabe blanca y una espada curva blanca debajo. El verde es el color del Islam, la Shahada representa la fe, y la espada representa la fortaleza y el patrimonio de la nación.",
              "funFacts": [
                  {
                      "icon": "temple_hindu",
                      "title": "Sitios más sagrados del Islam",
                      "description": "Arabia Saudí es hogar de La Meca y Medina, las dos ciudades más sagradas del Islam. Cada año, millones de peregrinos realizan el Hajj (peregrinación) a La Meca, uno de los Cinco Pilares del Islam."
                  },
                  {
                      "icon": "landscape",
                      "title": "Desierto Rub' al Khali",
                      "description": "El Rub' al Khali es el desierto de arena pura más grande del mundo, cubriendo un área más grande que Francia. Su nombre significa \"Cuarto Vacío\" en árabe, y es uno de los ambientes más hostiles de la Tierra."
                  },
                  {
                      "icon": "local_gas_station",
                      "title": "Superpotencia petrolera",
                      "description": "Arabia Saudí tiene la segunda mayor reserva de petróleo probada del mundo y es el mayor exportador de petróleo. El petróleo ha transformado la nación en una de las potencias económicas más influyentes del mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "senegal",
      "flagCode": "sn",
      "continent": "Africa",
      "population": "18.6M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Senegal",
              "capital": "Dakar",
              "flagDescription": "Senegal's flag has three vertical stripes of green, yellow, and red. A green five-pointed star sits at the center. The Pan-African colors represent hope (green), wealth (yellow), and blood of martyrs (red).",
              "funFacts": [
                  {
                      "icon": "sports_soccer",
                      "title": "Wrestling Nation",
                      "description": "Traditional Senegalese wrestling (laamb) is the country's most popular sport, more popular even than football. Champions are celebrated as national heroes."
                  },
                  {
                      "icon": "music_note",
                      "title": "Mbalax Music",
                      "description": "Mbalax, a rhythmic music genre blending traditional Wolof percussion with jazz, is Senegal's signature sound. Superstar Youssou N'Dour brought it to global audiences."
                  },
                  {
                      "icon": "landscape",
                      "title": "Pink Lake",
                      "description": "Lake Retba (Lac Rose) near Dakar has bubblegum-pink water caused by a salt-loving micro-organism. With 40% salinity — saltier than the Dead Sea — swimmers float effortlessly."
                  }
              ]
          },
          "es": {
              "name": "Senegal",
              "capital": "Dakar",
              "flagDescription": "La bandera de Senegal tiene tres franjas verticales de verde, amarillo y rojo, con una estrella verde de cinco puntas en el centro. Los colores panafricanos representan la esperanza (verde), la riqueza (amarillo) y la sangre de los mártires (rojo).",
              "funFacts": [
                  {
                      "icon": "sports_soccer",
                      "title": "Nación de luchadores",
                      "description": "La lucha tradicional senegalesa (laamb) es el deporte más popular del país, más que el fútbol. Los campeones son celebrados como héroes nacionales."
                  },
                  {
                      "icon": "music_note",
                      "title": "Música mbalax",
                      "description": "El mbalax, un género musical rítmico que mezcla percusión wolof tradicional con jazz, es el sonido distintivo de Senegal. La superestrella Youssou N'Dour lo llevó a las audiencias de todo el mundo."
                  },
                  {
                      "icon": "landscape",
                      "title": "El lago rosa",
                      "description": "El lago Retba (Lac Rose), cerca de Dakar, tiene un agua de color rosa chicle causada por un microorganismo que ama la sal. Con un 40% de salinidad, más salado que el Mar Muerto, los nadadores flotan sin esfuerzo."
                  }
              ]
          }
      }
  },
  {
      "slug": "serbia",
      "flagCode": "rs",
      "continent": "Europe",
      "population": "6.6M",
      "region": "Southeast Europe",
      "translations": {
          "en": {
              "name": "Serbia",
              "capital": "Belgrade",
              "flagDescription": "Serbia's flag has three equal horizontal stripes of red, blue, and white — the Pan-Slavic colors used by many Slavic nations. The coat of arms on the left shows a white double-headed eagle on a red shield, topped with a golden crown, with a smaller red shield showing a white cross and four firesteels. The firesteels are a traditional Serbian symbol representing the initials of the motto 'Only Unity Saves the Serbs.'",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Exit Festival",
                      "description": "Serbia hosts the Exit Festival in Novi Sad — one of Europe's best and most beloved music festivals. Held in a 17th-century fortress overlooking the Danube River, it has hosted legendary artists and earned multiple awards for best European festival."
                  },
                  {
                      "icon": "science",
                      "title": "Tesla's Homeland",
                      "description": "Nikola Tesla, one of the greatest inventors in history, was born in Serbia (then part of the Austrian Empire). He invented alternating current (AC) electricity and made foundational contributions to radio, radar, and X-ray technology."
                  },
                  {
                      "icon": "castle",
                      "title": "Kalemegdan Fortress",
                      "description": "Belgrade's Kalemegdan Fortress sits at the confluence of the Danube and Sava rivers and has been fought over more than 115 times in history. Today it's a park where locals stroll, play chess, and watch stunning sunsets."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Rakija Culture",
                      "description": "Rakija — a fruit brandy typically made from plums — is practically Serbia's national drink. Every family has its own recipe, and homemade rakija is offered to guests as a sign of hospitality and friendship."
                  }
              ]
          },
          "es": {
              "name": "Serbia",
              "capital": "Belgrado",
              "flagDescription": "La bandera de Serbia tiene tres franjas horizontales iguales de rojo, azul y blanco — los colores paneslávos usados por muchas naciones eslavas. El escudo de armas a la izquierda muestra un águila bicéfala blanca sobre un escudo rojo, coronada con una corona dorada, con un escudo rojo más pequeño que muestra una cruz blanca y cuatro eslabones de fuego. Los eslabones de fuego son un símbolo serbio tradicional que representa las iniciales del lema 'Solo la unidad salva a los serbios.'",
              "funFacts": [
                  {
                      "icon": "music_note",
                      "title": "Festival Exit",
                      "description": "Serbia acoge el Festival Exit en Novi Sad — uno de los mejores y más queridos festivales de música de Europa. Celebrado en una fortaleza del siglo XVII con vistas al río Danubio, ha acogido a artistas legendarios y ha ganado múltiples premios al mejor festival europeo."
                  },
                  {
                      "icon": "science",
                      "title": "La Patria de Tesla",
                      "description": "Nikola Tesla, uno de los mayores inventores de la historia, nació en Serbia (entonces parte del Imperio Austríaco). Inventó la corriente alterna (CA) y realizó contribuciones fundamentales a la radio, el radar y la tecnología de rayos X."
                  },
                  {
                      "icon": "castle",
                      "title": "Fortaleza de Kalemegdan",
                      "description": "La Fortaleza de Kalemegdan de Belgrado se asienta en la confluencia de los ríos Danubio y Sava y ha sido disputada más de 115 veces a lo largo de la historia. Hoy es un parque donde los lugareños pasean, juegan al ajedrez y contemplan impresionantes atardeceres."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Cultura de la Rakija",
                      "description": "La rakija — un aguardiente de frutas elaborado típicamente con ciruelas — es prácticamente la bebida nacional de Serbia. Cada familia tiene su propia receta, y la rakija casera se ofrece a los invitados como señal de hospitalidad y amistad."
                  }
              ]
          }
      }
  },
  {
      "slug": "seychelles",
      "flagCode": "sc",
      "continent": "Africa",
      "population": "123K",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Seychelles",
              "capital": "Victoria",
              "flagDescription": "The Seychelles flag has five colored rays spreading outward from the bottom-left corner like a sunrise: blue, yellow, red, white, and green. Blue represents the sky and sea, yellow stands for the golden sun, red symbolizes the determination of the people to build a better future, white represents social justice, and green stands for the land and natural environment.",
              "funFacts": [
                  {
                      "icon": "nature",
                      "title": "Coco de Mer: World's Biggest Seed",
                      "description": "The coco de mer palm in the Seychelles produces the world's largest and heaviest seed — a single nut can weigh up to 25 kg and takes six years to mature! It looks like two coconuts joined together."
                  },
                  {
                      "icon": "pets",
                      "title": "Giant Tortoises",
                      "description": "The Seychelles is home to the Aldabra giant tortoise — the world's largest land tortoise. These gentle giants can live over 150 years, weigh up to 250 kg, and roam freely on Aldabra Atoll."
                  },
                  {
                      "icon": "waves",
                      "title": "World's Most Beautiful Beaches",
                      "description": "The Seychelles' 115 islands have some of the most beautiful beaches on Earth, with powder-white sand, turquoise water, and huge pink granite boulders creating a landscape unlike anywhere else."
                  }
              ]
          },
          "es": {
              "name": "Seychelles",
              "capital": "Victoria",
              "flagDescription": "La bandera de las Seychelles tiene cinco rayos de colores que se expanden desde la esquina inferior izquierda como un amanecer: azul, amarillo, rojo, blanco y verde. El azul representa el cielo y el mar, el amarillo el sol dorado, el rojo la determinación del pueblo, el blanco la justicia social, y el verde la tierra y el medio ambiente natural.",
              "funFacts": [
                  {
                      "icon": "nature",
                      "title": "Coco de mer: la semilla más grande del mundo",
                      "description": "La palmera coco de mer de las Seychelles produce la semilla más grande y pesada del mundo: ¡una sola nuez puede pesar hasta 25 kg y tarda seis años en madurar! Parece dos cocos unidos."
                  },
                  {
                      "icon": "pets",
                      "title": "Tortugas gigantes",
                      "description": "Las Seychelles albergan la tortuga gigante de Aldabra, la mayor tortuga terrestre del mundo. Estos gentiles gigantes pueden vivir más de 150 años, pesar hasta 250 kg y deambulan libremente por el Atolón de Aldabra."
                  },
                  {
                      "icon": "waves",
                      "title": "Las playas más hermosas del mundo",
                      "description": "Las 115 islas de las Seychelles tienen algunas de las playas más hermosas de la Tierra, con arena blanca, agua turquesa y enormes rocas de granito rosa, creando un paisaje único en el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "sierra-leone",
      "flagCode": "sl",
      "continent": "Africa",
      "population": "9.1M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Sierra Leone",
              "capital": "Freetown",
              "flagDescription": "Sierra Leone's flag has three equal horizontal stripes — green at the top, white in the middle, and blue at the bottom. Green represents the country's mountains and agriculture, white symbolizes unity and justice, and blue stands for the Atlantic Ocean that borders the country and the natural resources of the sea.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Chimpanzee Sanctuary",
                      "description": "The Tacugama Chimpanzee Sanctuary outside Freetown rescues and rehabilitates orphaned chimps, then teaches them to live in the wild again. It is one of Africa's most important primate conservation projects."
                  },
                  {
                      "icon": "waves",
                      "title": "Beautiful West African Beaches",
                      "description": "Sierra Leone has some of the most beautiful and unspoiled beaches in West Africa, including Tokeh Beach and River No. 2 Beach, with white sand and warm crystal-clear water."
                  },
                  {
                      "icon": "history",
                      "title": "Lion Mountain Country",
                      "description": "The country is named after the 'Lion Mountains' (Serra Leoa in Portuguese) — the dramatic hills that overlook Freetown. Portuguese explorers named them in the 15th century when they heard what they thought sounded like a lion's roar in the thunder."
                  }
              ]
          },
          "es": {
              "name": "Sierra Leona",
              "capital": "Freetown",
              "flagDescription": "La bandera de Sierra Leona tiene tres franjas horizontales iguales: verde arriba, blanca en el centro y azul abajo. El verde representa las montañas y la agricultura, el blanco simboliza la unidad y la justicia, y el azul representa el Océano Atlántico y los recursos naturales del mar.",
              "funFacts": [
                  {
                      "icon": "pets",
                      "title": "Santuario de chimpancés",
                      "description": "El Santuario de Chimpancés de Tacugama, en las afueras de Freetown, rescata y rehabilita a chimpancés huérfanos para que vuelvan a vivir en la naturaleza. Es uno de los proyectos de conservación de primates más importantes de África."
                  },
                  {
                      "icon": "waves",
                      "title": "Hermosas playas del África Occidental",
                      "description": "Sierra Leona tiene algunas de las playas más hermosas e vírgenes de África Occidental, como Tokeh Beach y River No. 2 Beach, con arena blanca y aguas cálidas y cristalinas."
                  },
                  {
                      "icon": "history",
                      "title": "El país de la montaña del león",
                      "description": "El país lleva el nombre de las 'Montañas del León' (Serra Leoa en portugués), las dramáticas colinas que dominan Freetown. Los exploradores portugueses del siglo XV creyeron escuchar el rugido de un león en el trueno."
                  }
              ]
          }
      }
  },
  {
      "slug": "singapore",
      "flagCode": "sg",
      "continent": "Asia",
      "population": "6.1M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Singapore",
              "capital": "Singapore",
              "flagDescription": "Singapore's flag has a red upper half with a white crescent and five white stars, and a white lower half. Red represents universal brotherhood and equality, white represents virtue and purity, the crescent symbolizes a young nation growing, and the five stars represent democracy, peace, progress, justice, and equality.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Marina Bay Sands",
                      "description": "The Marina Bay Sands is one of the world's most iconic hotels, designed to look like a ship's bow. Its rooftop infinity pool and observation deck offer stunning views of Singapore's skyline."
                  },
                  {
                      "icon": "devices",
                      "title": "Tech and Finance Hub",
                      "description": "Singapore is a global leader in technology, finance, and innovation. Its strategic location, efficient port, and highly educated population make it one of Asia's most important economic centers."
                  },
                  {
                      "icon": "yard",
                      "title": "Gardens by the Bay",
                      "description": "The Gardens by the Bay is a futuristic park featuring vertical gardens, nature attractions, and the iconic illuminated Supertrees that light up at night with synchronized performances."
                  }
              ]
          },
          "es": {
              "name": "Singapur",
              "capital": "Singapur",
              "flagDescription": "La bandera de Singapur tiene una mitad superior roja con una media luna blanca y cinco estrellas blancas, y una mitad inferior blanca. El rojo representa la fraternidad universal e igualdad, el blanco representa la virtud y pureza, la media luna simboliza una nación joven en crecimiento, y las cinco estrellas representan democracia, paz, progreso, justicia e igualdad.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Marina Bay Sands",
                      "description": "Marina Bay Sands es uno de los hoteles más icónicos del mundo, diseñado para parecer una proa de barco. Su piscina de infinito en la azotea y plataforma de observación ofrecen vistas impresionantes del horizonte de Singapur."
                  },
                  {
                      "icon": "devices",
                      "title": "Centro tecnológico y financiero",
                      "description": "Singapur es líder mundial en tecnología, finanzas e innovación. Su ubicación estratégica, puerto eficiente y población altamente educada la convierten en uno de los centros económicos más importantes de Asia."
                  },
                  {
                      "icon": "yard",
                      "title": "Jardines de la Bahía",
                      "description": "Los Jardines de la Bahía es un parque futurista que presenta jardines verticales, atracciones naturales, y los icónicos Supertrees iluminados que se iluminan por la noche con actuaciones sincronizadas."
                  }
              ]
          }
      }
  },
  {
      "slug": "sint-maarten",
      "flagCode": "sx",
      "continent": "North America",
      "population": "41.4K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Sint Maarten",
          "capital": "Philipsburg",
          "flagDescription": "Sint Maarten's flag features a vertical tricolor of red, white, and blue, matching Dutch colors, with the coat of arms. Sint Maarten is the Dutch part of the shared island of Saint Martin.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Shared Island",
            "description": "Sint Maarten shares the island with Saint Martin (France), creating a unique cultural blend."
          },
          {
            "icon": "waves",
            "title": "Water Sports Paradise",
            "description": "The island is renowned for diving, snorkeling, windsurfing, and other water sports."
          },
          {
            "icon": "celebration",
            "title": "Carnival Festival",
            "description": "Sint Maarten celebrates carnival with vibrant parades, music, and cultural festivities."
          },
          {
            "icon": "landscape",
            "title": "Beautiful Beaches",
            "description": "The island has numerous stunning beaches with different characteristics and activities."
          }
          ]
        },
        "es": {
          "name": "Sint Maarten",
          "capital": "Philipsburg",
          "flagDescription": "La bandera de Sint Maarten presenta un tricolor vertical de rojo, blanco y azul, coincidiendo con los colores holandeses, con el escudo de armas. Sint Maarten es la parte holandesa de la isla compartida de San Martín.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Isla Compartida",
            "description": "Sint Maarten comparte la isla con San Martín (Francia), creando una mezcla cultural única."
          },
          {
            "icon": "waves",
            "title": "Paraíso de Deportes Acuáticos",
            "description": "La isla es de renombre por el buceo, snorkel, windsurf y otros deportes acuáticos."
          },
          {
            "icon": "celebration",
            "title": "Festival de Carnaval",
            "description": "Sint Maarten celebra el carnaval con desfiles vibrantes, música y festividades culturales."
          },
          {
            "icon": "landscape",
            "title": "Playas Hermosas",
            "description": "La isla tiene numerosas playas impresionantes con características y actividades diferentes."
          }
          ]
        }
      }
  },
  {
      "slug": "slovakia",
      "flagCode": "sk",
      "continent": "Europe",
      "population": "5.4M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Slovakia",
              "capital": "Bratislava",
              "flagDescription": "Slovakia's flag has three equal horizontal stripes of white, blue, and red — the Pan-Slavic colors. What makes it unique is the country's coat of arms on the left side: a white double cross on a blue hill, representing the three mountain ranges of Slovakia. The double cross is a powerful Christian symbol and also connects to Slovakia's historical ties to the Byzantine mission of Saints Cyril and Methodius.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "Castle Country",
                      "description": "Slovakia has one of the highest concentrations of castles per capita in the world — over 180 castles and castle ruins scattered across the landscape. The most dramatic is Spiš Castle, one of the largest castle ruins in Central Europe and a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "history",
                      "title": "Peaceful Velvet Divorce",
                      "description": "In 1993, Czechoslovakia peacefully split into two countries — the Czech Republic and Slovakia — in what became known as the Velvet Divorce. It remains one of history's most civilized and amicable national separations."
                  },
                  {
                      "icon": "landscape",
                      "title": "Slovak Karst",
                      "description": "The Slovak Karst region contains some of the most spectacular cave systems in the world, including the Domica cave system which connects underground with Hungary. Several caves are UNESCO World Heritage Sites."
                  },
                  {
                      "icon": "sports_hockey",
                      "title": "Ice Hockey Passion",
                      "description": "Ice hockey is Slovakia's most beloved sport. The national team has won the World Championship and produced many NHL stars. On game days, Slovak cities come to a standstill as everyone gathers to cheer."
                  }
              ]
          },
          "es": {
              "name": "Eslovaquia",
              "capital": "Bratislava",
              "flagDescription": "La bandera de Eslovaquia tiene tres franjas horizontales iguales de blanco, azul y rojo — los colores paneslávos. Lo que la hace única es el escudo de armas del país en el lado izquierdo: una cruz doble blanca sobre una colina azul, que representa las tres cadenas montañosas de Eslovaquia. La cruz doble es un poderoso símbolo cristiano y también conecta con los lazos históricos de Eslovaquia con la misión bizantina de los Santos Cirilo y Metodio.",
              "funFacts": [
                  {
                      "icon": "castle",
                      "title": "País de Castillos",
                      "description": "Eslovaquia tiene una de las concentraciones más altas de castillos per cápita del mundo — más de 180 castillos y ruinas de castillos esparcidos por el paisaje. El más dramático es el Castillo de Spiš, una de las ruinas de castillos más grandes de Europa Central y Patrimonio de la Humanidad por la UNESCO."
                  },
                  {
                      "icon": "history",
                      "title": "El Pacífico Divorcio de Terciopelo",
                      "description": "En 1993, Checoslovaquia se dividió pacíficamente en dos países — la República Checa y Eslovaquia — en lo que se conoció como el Divorcio de Terciopelo. Sigue siendo una de las separaciones nacionales más civilizadas y amistosas de la historia."
                  },
                  {
                      "icon": "landscape",
                      "title": "El Karst Eslovaco",
                      "description": "La región del Karst Eslovaco contiene algunos de los sistemas de cuevas más espectaculares del mundo, incluido el sistema de cuevas de Domica que conecta bajo tierra con Hungría. Varias cuevas son Patrimonio de la Humanidad por la UNESCO."
                  },
                  {
                      "icon": "sports_hockey",
                      "title": "Pasión por el Hockey sobre Hielo",
                      "description": "El hockey sobre hielo es el deporte más querido de Eslovaquia. La selección nacional ha ganado el Campeonato Mundial y ha producido muchas estrellas de la NHL. Los días de partido, las ciudades eslovacas se paralizan mientras todos se reúnen para animar."
                  }
              ]
          }
      }
  },
  {
      "slug": "slovenia",
      "flagCode": "si",
      "continent": "Europe",
      "population": "2.1M",
      "region": "Central Europe",
      "translations": {
          "en": {
              "name": "Slovenia",
              "capital": "Ljubljana",
              "flagDescription": "Slovenia's flag has three equal horizontal stripes of white, blue, and red — Pan-Slavic colors. The coat of arms on the upper left shows Mount Triglav, Slovenia's highest peak, in white on a blue background, with two wavy blue lines below representing the Adriatic Sea and the country's rivers, and three golden stars above from the historical Celje coat of arms.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Lake Bled",
                      "description": "Lake Bled is one of Europe's most photographed spots — a crystal-clear glacial lake with a tiny island and church in the center, backdropped by Julian Alps and a medieval clifftop castle. It looks like it was designed by a fairy-tale illustrator."
                  },
                  {
                      "icon": "forest",
                      "title": "Most Forested Country in Europe",
                      "description": "About 60% of Slovenia is covered by forests — making it one of the most forested countries in Europe. The country takes immense pride in its natural environment and has ambitious conservation policies."
                  },
                  {
                      "icon": "wine_bar",
                      "title": "Oldest Vine in the World",
                      "description": "In the city of Maribor grows the world's oldest known grape vine, over 400 years old and still producing grapes every year. It is a proud national symbol and its wine is bottled and given as a gift to world leaders."
                  },
                  {
                      "icon": "anchor",
                      "title": "Tiny Adriatic Coast",
                      "description": "Despite being a small country, Slovenia has a 46.6 km stretch of Adriatic coastline with charming towns like Piran — a beautifully preserved Venetian city that feels like a miniature Venice."
                  }
              ]
          },
          "es": {
              "name": "Eslovenia",
              "capital": "Liubliana",
              "flagDescription": "La bandera de Eslovenia tiene tres franjas horizontales iguales de blanco, azul y rojo — colores paneslávos. El escudo de armas en la parte superior izquierda muestra el Monte Triglav, el pico más alto de Eslovenia, en blanco sobre fondo azul, con dos líneas azules onduladas debajo que representan el Mar Adriático y los ríos del país, y tres estrellas doradas arriba del escudo histórico de Celje.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Lago Bled",
                      "description": "El lago Bled es uno de los lugares más fotografiados de Europa — un lago glacial cristalino con una pequeña isla e iglesia en el centro, con los Alpes Julianos de fondo y un castillo medieval en lo alto de un acantilado. Parece diseñado por un ilustrador de cuentos de hadas."
                  },
                  {
                      "icon": "forest",
                      "title": "El País Más Boscoso de Europa",
                      "description": "Aproximadamente el 60% de Eslovenia está cubierto de bosques — convirtiéndola en uno de los países más boscosos de Europa. El país siente un inmenso orgullo por su entorno natural y tiene ambiciosas políticas de conservación."
                  },
                  {
                      "icon": "wine_bar",
                      "title": "La Vid Más Antigua del Mundo",
                      "description": "En la ciudad de Maribor crece la vid más antigua conocida del mundo, con más de 400 años de antigüedad y que sigue produciendo uvas cada año. Es un orgulloso símbolo nacional y su vino se embotella y regala a líderes mundiales."
                  },
                  {
                      "icon": "anchor",
                      "title": "Pequeña Costa Adriática",
                      "description": "A pesar de ser un país pequeño, Eslovenia tiene 46,6 km de costa adriática con encantadoras ciudades como Piran — una bellísima ciudad veneciana conservada que parece una Venecia en miniatura."
                  }
              ]
          }
      }
  },
  {
      "slug": "solomon-islands",
      "flagCode": "sb",
      "continent": "Oceania",
      "population": "750K",
      "region": "Melanesia",
      "translations": {
          "en": {
              "name": "Solomon Islands",
              "capital": "Honiara",
              "flagDescription": "The Solomon Islands flag has a blue lower triangle and a green upper triangle, divided by a thin yellow diagonal stripe running from the lower-left to the upper-right corner. The blue represents the surrounding sea, the green symbolizes the land, and the yellow stripe represents the sunshine. Five white five-pointed stars in the upper-left blue area represent the five main island groups of the Solomon Islands.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "WWII Guadalcanal",
                      "description": "The Solomon Islands, especially Guadalcanal, was the site of one of the most pivotal and brutal campaigns of World War II in the Pacific. The six-month Guadalcanal Campaign (1942–43) was the first major Allied offensive against Japan and marked a turning point in the war."
                  },
                  {
                      "icon": "forest",
                      "title": "Ancient Rainforests",
                      "description": "The Solomon Islands has some of the most biodiverse and ancient rainforests in the Pacific. These forests are home to hundreds of endemic species, including spectacular butterflies, unique birds of paradise, and extraordinary insects found nowhere else on Earth."
                  },
                  {
                      "icon": "anchor",
                      "title": "Skull Island Legends",
                      "description": "The people of Skull Island (Nggatokae) in the New Georgia group once practiced head-taking, using skulls to decorate their canoe houses. The warrior tradition was connected to spiritual beliefs, and the impressive stone fortresses and canoe houses of the island are still visible today."
                  },
                  {
                      "icon": "waves",
                      "title": "Marovo Lagoon",
                      "description": "Marovo Lagoon is one of the largest saltwater lagoons in the world and a UNESCO-listed area of outstanding natural beauty. Its extraordinary marine biodiversity, pristine coral reefs, and traditional islander communities make it a destination of global significance."
                  }
              ]
          },
          "es": {
              "name": "Islas Salomón",
              "capital": "Honiara",
              "flagDescription": "La bandera de las Islas Salomón tiene un triángulo inferior azul y un triángulo superior verde, divididos por una delgada franja diagonal amarilla que va de la esquina inferior izquierda a la superior derecha. El azul representa el mar circundante, el verde simboliza la tierra, y la franja amarilla representa el sol. Cinco estrellas blancas de cinco puntas en el área azul superior izquierda representan los cinco grupos de islas principales de las Islas Salomón.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Guadalcanal en la Segunda Guerra Mundial",
                      "description": "Las Islas Salomón, especialmente Guadalcanal, fue el sitio de una de las campañas más decisivas y brutales de la Segunda Guerra Mundial en el Pacífico. La Campaña de Guadalcanal de seis meses (1942-43) fue la primera gran ofensiva aliada contra Japón y marcó un punto de inflexión en la guerra."
                  },
                  {
                      "icon": "forest",
                      "title": "Selvas Tropicales Antiguas",
                      "description": "Las Islas Salomón tiene algunas de las selvas tropicales más biodiversas y antiguas del Pacífico. Estos bosques albergan cientos de especies endémicas, incluidas mariposas espectaculares, aves del paraíso únicas e insectos extraordinarios que no se encuentran en ningún otro lugar de la Tierra."
                  },
                  {
                      "icon": "anchor",
                      "title": "Leyendas de la Isla de las Calaveras",
                      "description": "Los habitantes de la Isla de las Calaveras (Nggatokae) en el grupo de Nueva Georgia practicaron la decapitación, usando cráneos para decorar sus casas de canoas. La tradición guerrera estaba conectada a creencias espirituales, y las impresionantes fortalezas de piedra y las casas de canoas de la isla son todavía visibles hoy en día."
                  },
                  {
                      "icon": "waves",
                      "title": "Laguna Marovo",
                      "description": "La Laguna Marovo es una de las lagunas de agua salada más grandes del mundo y un área de sobresaliente belleza natural catalogada por la UNESCO. Su extraordinaria biodiversidad marina, los arrecifes de coral prístinos y las comunidades insulares tradicionales la convierten en un destino de importancia global."
                  }
              ]
          }
      }
  },
  {
      "slug": "somalia",
      "flagCode": "so",
      "continent": "Africa",
      "population": "19.7M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Somalia",
              "capital": "Mogadishu",
              "flagDescription": "Somalia's flag is light blue with a white five-pointed star in the center. The blue color was inspired by the United Nations flag (the UN helped Somalia gain independence) and represents both the sky and the Indian Ocean. The white star represents the five Somali territories that were once divided across different colonial powers.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Longest Coastline in Africa",
                      "description": "Somalia has the longest coastline of any country in Africa — over 3,333 km of beaches, bays, and shores stretching along the Indian Ocean and Gulf of Aden."
                  },
                  {
                      "icon": "local_florist",
                      "title": "Frankincense and Myrrh",
                      "description": "Somalia has been trading frankincense and myrrh — precious tree resins — for thousands of years. These aromatic resins were used by ancient Egyptians, Greeks, and Romans in ceremonies and medicines."
                  },
                  {
                      "icon": "pets",
                      "title": "Land of Camels",
                      "description": "Somalia has the world's largest population of camels! Camels are so central to Somali culture and economy that poetry, proverbs, and traditional songs are built around them."
                  }
              ]
          },
          "es": {
              "name": "Somalia",
              "capital": "Mogadiscio",
              "flagDescription": "La bandera de Somalia es azul claro con una estrella blanca de cinco puntas en el centro. El color azul fue inspirado por la bandera de las Naciones Unidas (la ONU ayudó a Somalia a lograr su independencia) y representa el cielo y el Océano Índico. La estrella blanca representa los cinco territorios somalíes que una vez estuvieron divididos bajo distintos poderes coloniales.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "La costa más larga de África",
                      "description": "Somalia tiene la costa más larga de cualquier país en África, ¡más de 3.333 km de playas, bahías y orillas a lo largo del Océano Índico y el golfo de Adén!"
                  },
                  {
                      "icon": "local_florist",
                      "title": "Incienso y mirra",
                      "description": "Somalia ha comerciado con incienso y mirra, preciosas resinas de árbol, durante miles de años. Estas resinas aromáticas fueron utilizadas por los antiguos egipcios, griegos y romanos en ceremonias y medicinas."
                  },
                  {
                      "icon": "pets",
                      "title": "Tierra de camellos",
                      "description": "¡Somalia tiene la mayor población de camellos del mundo! Los camellos son tan centrales en la cultura y economía somalí que la poesía, los proverbios y las canciones tradicionales están construidos alrededor de ellos."
                  }
              ]
          }
      }
  },
  {
      "slug": "south-africa",
      "flagCode": "za",
      "continent": "Africa",
      "population": "63.1M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "South Africa",
              "capital": "Pretoria",
              "flagDescription": "South Africa's flag is one of the most colorful in the world, featuring six colors: black, gold, green, white, red, and blue. The Y-shaped green band symbolizes the convergence of diverse elements of South African society.",
              "funFacts": [
                  {
                      "icon": "diamond",
                      "title": "Diamond Capital",
                      "description": "South Africa is home to the Kimberley Mine, once the world's largest diamond mine. The 'Big Hole' excavated there is considered the largest hand-dug excavation in history."
                  },
                  {
                      "icon": "balance",
                      "title": "Three Capitals",
                      "description": "South Africa is the only country in the world with three official capitals: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)."
                  },
                  {
                      "icon": "directions_walk",
                      "title": "Cradle of Humankind",
                      "description": "The Cradle of Humankind, a UNESCO World Heritage Site near Johannesburg, contains the world's largest concentration of hominin fossils — some over 3.5 million years old."
                  }
              ]
          },
          "es": {
              "name": "Sudáfrica",
              "capital": "Pretoria",
              "flagDescription": "La bandera de Sudáfrica es una de las más coloridas del mundo, con seis colores: negro, dorado, verde, blanco, rojo y azul. La banda verde en forma de Y simboliza la convergencia de los diversos elementos de la sociedad sudafricana.",
              "funFacts": [
                  {
                      "icon": "diamond",
                      "title": "Capital del diamante",
                      "description": "Sudáfrica alberga la mina Kimberley, que fue la mayor mina de diamantes del mundo. El 'Gran Agujero' excavado allí es considerado la mayor excavación manual de la historia."
                  },
                  {
                      "icon": "balance",
                      "title": "Tres capitales",
                      "description": "Sudáfrica es el único país del mundo con tres capitales oficiales: Pretoria (ejecutiva), Ciudad del Cabo (legislativa) y Bloemfontein (judicial)."
                  },
                  {
                      "icon": "directions_walk",
                      "title": "Cuna de la Humanidad",
                      "description": "La Cuna de la Humanidad, Patrimonio Mundial de la UNESCO cerca de Johannesburgo, contiene la mayor concentración de fósiles de homínidos del mundo, algunos de más de 3,5 millones de años."
                  }
              ]
          }
      }
  },
  {
      "slug": "south-korea",
      "flagCode": "kr",
      "continent": "Asia",
      "population": "51.2M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "South Korea",
              "capital": "Seoul",
              "flagDescription": "South Korea's flag (Taegeuk-gi) features a white background with a red and blue taegeuk (yin-yang) symbol in the center and black trigrams in the four corners. The red and blue represent balance, the trigrams represent universal principles, and white represents peace and purity.",
              "funFacts": [
                  {
                      "icon": "devices",
                      "title": "Technology Leader",
                      "description": "South Korea is a global powerhouse in technology, producing cutting-edge smartphones, semiconductors, and electronics. Companies like Samsung and LG are household names worldwide."
                  },
                  {
                      "icon": "music_note",
                      "title": "K-Pop Phenomenon",
                      "description": "K-Pop (Korean pop music) has become a global sensation, with groups like BTS and BLACKPINK having millions of devoted fans worldwide. Korean entertainment is now a major cultural export."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Korean Cuisine Excellence",
                      "description": "Korean cuisine features kimchi, bulgogi, bibimbap, and Korean BBQ. Korean food culture emphasizes banchan (side dishes) and communal eating, creating a unique and delicious dining experience."
                  }
              ]
          },
          "es": {
              "name": "Corea del Sur",
              "capital": "Seúl",
              "flagDescription": "La bandera de Corea del Sur (Taegeuk-gi) presenta un fondo blanco con un símbolo rojo y azul taegeuk (yin-yang) en el centro y triggramas negros en las cuatro esquinas. El rojo y azul representan equilibrio, los triggramas representan principios universales, y el blanco representa paz y pureza.",
              "funFacts": [
                  {
                      "icon": "devices",
                      "title": "Líder en tecnología",
                      "description": "Corea del Sur es una potencia mundial en tecnología, produciendo smartphones de vanguardia, semiconductores y electrónica. Compañías como Samsung y LG son marcas conocidas mundialmente."
                  },
                  {
                      "icon": "music_note",
                      "title": "Fenómeno del K-Pop",
                      "description": "El K-Pop (música pop coreana) se ha convertido en una sensación global, con grupos como BTS y BLACKPINK teniendo millones de fans devotos en todo el mundo. El entretenimiento coreano es ahora una importante exportación cultural."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Excelencia de la cocina coreana",
                      "description": "La cocina coreana presenta kimchi, bulgogi, bibimbap y BBQ coreano. La cultura de la comida coreana enfatiza banchan (platos laterales) y comer comunitario, creando una experiencia gastronómica única y deliciosa."
                  }
              ]
          }
      }
  },
  {
      "slug": "south-sudan",
      "flagCode": "ss",
      "continent": "Africa",
      "population": "15.8M",
      "region": "Middle Africa",
      "translations": {
          "en": {
              "name": "South Sudan",
              "capital": "Juba",
              "flagDescription": "South Sudan's flag has three equal horizontal stripes — black at the top, red in the middle, and green at the bottom — with thin white borders between them and a blue triangle on the left side containing a gold star. Black represents the people, red the blood shed for independence, green the land's fertility, blue symbolizes the Nile River, and the star represents the unity of all states.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "World's Newest Country",
                      "description": "South Sudan became the world's newest internationally recognized country on July 9, 2011, when it voted to separate from Sudan. Independence Day is celebrated with enormous pride each year."
                  },
                  {
                      "icon": "water",
                      "title": "The Sudd Wetland",
                      "description": "The Sudd is one of the world's largest freshwater wetlands — a vast swamp where papyrus reeds tower overhead and rare shoebill storks and millions of birds make their home."
                  },
                  {
                      "icon": "pets",
                      "title": "Great Wildlife Migration",
                      "description": "The white-eared kob antelope undertakes one of Africa's greatest wildlife migrations across South Sudan's plains — with over a million animals moving together in a spectacular annual journey."
                  }
              ]
          },
          "es": {
              "name": "Sudán del Sur",
              "capital": "Juba",
              "flagDescription": "La bandera de Sudán del Sur tiene tres franjas horizontales iguales: negra arriba, roja en el centro y verde abajo, con delgados bordes blancos entre ellas y un triángulo azul a la izquierda que contiene una estrella dorada. El negro representa al pueblo, el rojo la sangre derramada por la independencia, el verde la fertilidad de la tierra, el azul simboliza el Nilo, y la estrella la unidad de todos los estados.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "El país más nuevo del mundo",
                      "description": "Sudán del Sur se convirtió en el país independiente reconocido internacionalmente más nuevo del mundo el 9 de julio de 2011, cuando votó para separarse de Sudán. El Día de la Independencia se celebra con enorme orgullo."
                  },
                  {
                      "icon": "water",
                      "title": "El humedal del Sudd",
                      "description": "El Sudd es uno de los mayores humedales de agua dulce del mundo: un vasto pantano donde el papiro crece hasta grandes alturas y el ave picozapato y millones de aves hacen su hogar."
                  },
                  {
                      "icon": "pets",
                      "title": "Gran migración de fauna",
                      "description": "El kob de orejas blancas realiza una de las mayores migraciones de fauna de África por las llanuras de Sudán del Sur, con más de un millón de animales moviéndose juntos en un espectacular viaje anual."
                  }
              ]
          }
      }
  },
  {
      "slug": "spain",
      "flagCode": "es",
      "continent": "Europe",
      "population": "49.3M",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Spain",
              "capital": "Madrid",
              "flagDescription": "Spain's flag has three horizontal stripes — red at top and bottom with a wide yellow stripe in the middle bearing the Spanish coat of arms. The red and yellow have been associated with Spanish rule since the 15th century.",
              "funFacts": [
                  {
                      "icon": "celebration",
                      "title": "Festival Country",
                      "description": "Spain has some of the world's most spectacular festivals including La Tomatina (tomato fight), Running of the Bulls in Pamplona, and Las Fallas fire festival in Valencia."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Tapas Culture",
                      "description": "Tapas originated in southern Spain as small dishes served with drinks. The word means 'lid' — early tapas were slices of bread placed over glasses to keep flies out."
                  },
                  {
                      "icon": "palette",
                      "title": "Gaudí's Architecture",
                      "description": "Antoni Gaudí designed Barcelona's Sagrada Família basilica, which has been under construction since 1882 and is still not finished. It's one of the most-visited buildings in the world."
                  },
                  {
                      "icon": "music_note",
                      "title": "Flamenco",
                      "description": "Flamenco — the passionate art of guitar, singing, and dance born in Andalusia — is one of the world's most expressive art forms. UNESCO listed flamenco as Intangible Cultural Heritage in 2010."
                  }
              ]
          },
          "es": {
              "name": "España",
              "capital": "Madrid",
              "flagDescription": "La bandera de España tiene tres franjas horizontales: rojo arriba y abajo, con una franja amarilla ancha en el centro que lleva el escudo de armas español. El rojo y el amarillo han estado asociados con la corona española desde el siglo XV.",
              "funFacts": [
                  {
                      "icon": "celebration",
                      "title": "País de las Fiestas",
                      "description": "España tiene algunas de las fiestas más espectaculares del mundo: La Tomatina (batalla de tomates), el Encierro de los Toros en Pamplona y Las Fallas de Valencia."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Cultura de las Tapas",
                      "description": "Las tapas se originaron en el sur de España como pequeños platos servidos con bebidas. La palabra significa 'tapa': las primeras tapas eran rebanadas de pan colocadas sobre los vasos para mantener alejadas las moscas."
                  },
                  {
                      "icon": "palette",
                      "title": "La Arquitectura de Gaudí",
                      "description": "Antoni Gaudí diseñó la basílica de la Sagrada Família de Barcelona, que lleva en construcción desde 1882 y aún no está terminada. Es uno de los edificios más visitados del mundo."
                  },
                  {
                      "icon": "music_note",
                      "title": "Flamenco",
                      "description": "El flamenco — el apasionado arte de la guitarra, el cante y el baile nacido en Andalucía — es una de las formas artísticas más expresivas del mundo. La UNESCO declaró el flamenco Patrimonio Cultural Inmaterial en 2010."
                  }
              ]
          }
      }
  },
  {
      "slug": "sri-lanka",
      "flagCode": "lk",
      "continent": "Asia",
      "population": "21.8M",
      "region": "Southern Asia",
      "translations": {
          "en": {
              "name": "Sri Lanka",
              "capital": "Colombo",
              "flagDescription": "Sri Lanka's flag features a gold lion holding a curved sword (symbolizing courage) against a maroon background, with a gold border and two green and orange vertical stripes on the hoist side. The lion represents the nation's bravery, and the stripes represent the Muslim and Tamil communities.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Adam's Peak",
                      "description": "Adam's Peak is a sacred mountain in Sri Lanka with a depression at the summit believed by pilgrims to be the footprint of Buddha (by Buddhists), Adam (by Muslims and Christians), and other holy figures."
                  },
                  {
                      "icon": "emoji_food_beverage",
                      "title": "Ceylon Tea Paradise",
                      "description": "Sri Lanka (formerly Ceylon) produces some of the world's finest tea. The misty tea gardens in the central highlands cover thousands of hectares and produce the aromatic \"Ceylon Tea\" famous worldwide."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Tropical Island Paradise",
                      "description": "Sri Lanka is surrounded by pristine beaches, coral reefs, and tropical weather year-round. The island offers diverse attractions from ancient temples to surfing beaches and wildlife sanctuaries."
                  }
              ]
          },
          "es": {
              "name": "Sri Lanka",
              "capital": "Colombo",
              "flagDescription": "La bandera de Sri Lanka presenta un león dorado sosteniendo una espada curva (simbolizando el valor) contra un fondo granate, con un borde dorado y dos franjas verticales verde y naranja en el lado del asta. El león representa la valentía de la nación, y las franjas representan a las comunidades musulmana y tamil.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Pico de Adán",
                      "description": "El Pico de Adán es una montaña sagrada en Sri Lanka con una depresión en la cúspide que los peregrinos creen que es la huella de Buda (por budistas), Adán (por musulmanes y cristianos) y otras figuras sagradas."
                  },
                  {
                      "icon": "emoji_food_beverage",
                      "title": "Paraíso del té de Ceilán",
                      "description": "Sri Lanka (anteriormente Ceilán) produce algunos de los mejores tés del mundo. Los jardines de té brumosos en las tierras altas centrales cubren miles de hectáreas y producen el aromático \"Té de Ceilán\" famoso mundialmente."
                  },
                  {
                      "icon": "beach_access",
                      "title": "Paraíso de isla tropical",
                      "description": "Sri Lanka está rodeada de playas prístinas, arrecifes de coral y clima tropical todo el año. La isla ofrece atracciones diversas desde templos antiguos hasta playas de surf y santuarios de vida silvestre."
                  }
              ]
          }
      }
  },
  {
      "slug": "sudan",
      "flagCode": "sd",
      "continent": "Africa",
      "population": "51.7M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Sudan",
              "capital": "Khartoum",
              "flagDescription": "Sudan's flag has three horizontal stripes — red at the top, white in the middle, and black at the bottom — with a green triangle on the left side. Red represents the struggle for independence, white symbolizes peace and the bright future, black recalls the country's name ('Sudan' means 'Land of the Blacks' in Arabic), and green stands for Islam and prosperity.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "More Pyramids Than Egypt!",
                      "description": "Sudan has more ancient pyramids than Egypt — over 200 pyramids built by the Nubian Kushite civilization. These smaller, steeper pyramids at Meroe sit dramatically in the middle of the desert."
                  },
                  {
                      "icon": "water",
                      "title": "Where Two Niles Meet",
                      "description": "Khartoum sits at the exact spot where the Blue Nile (coming from Ethiopia) and the White Nile (coming from Uganda) merge to form the mighty Nile River — one of the most historic confluences in the world."
                  },
                  {
                      "icon": "castle",
                      "title": "Ancient Nubian Kingdom",
                      "description": "The ancient Kingdom of Kush and the Meroitic civilization were among the most powerful empires in Africa, producing art, ironwork, and architecture that rivaled ancient Egypt and Rome."
                  }
              ]
          },
          "es": {
              "name": "Sudán",
              "capital": "Jartum",
              "flagDescription": "La bandera de Sudán tiene tres franjas horizontales: roja arriba, blanca en el centro y negra abajo, con un triángulo verde a la izquierda. El rojo representa la lucha por la independencia, el blanco simboliza la paz y el futuro brillante, el negro recuerda el nombre del país ('Sudán' significa 'Tierra de los negros' en árabe), y el verde representa el Islam y la prosperidad.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "¡Más pirámides que Egipto!",
                      "description": "Sudán tiene más pirámides antiguas que Egipto: ¡más de 200 pirámides construidas por la civilización nubia kushita! Estas pirámides más pequeñas y empinadas de Meroe se alzan dramáticamente en medio del desierto."
                  },
                  {
                      "icon": "water",
                      "title": "Donde se encuentran dos Nilos",
                      "description": "Jartum está ubicada exactamente donde el Nilo Azul (que viene de Etiopía) y el Nilo Blanco (que viene de Uganda) se unen para formar el poderoso río Nilo, una de las confluencias más históricas del mundo."
                  },
                  {
                      "icon": "castle",
                      "title": "El antiguo reino nubio",
                      "description": "El antiguo Reino de Kush y la civilización meroítica fueron poderosos imperios de África que produjeron arte, herrería y arquitectura que rivalizaban con el antiguo Egipto y Roma."
                  }
              ]
          }
      }
  },
  {
      "slug": "suriname",
      "flagCode": "sr",
      "continent": "South America",
      "population": "612K",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Suriname",
          "capital": "Paramaribo",
          "flagDescription": "Suriname's flag has five horizontal stripes of green, white, red, white, and green, with a gold star in the center. The colors represent the harvest (green), peace (white), and the blood of patriots (red).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Rainforest Paradise",
            "description": "Suriname is almost entirely covered by rainforest, with incredible biodiversity and indigenous communities."
          },
          {
            "icon": "public",
            "title": "Dutch-Speaking South America",
            "description": "Suriname is the only South American country where Dutch is the official language."
          },
          {
            "icon": "landscape",
            "title": "Cultural Diversity",
            "description": "Suriname has a diverse population with African, Indian, Indonesian, and indigenous cultures blending together."
          },
          {
            "icon": "history",
            "title": "Colonial History",
            "description": "Suriname has a unique colonial history as a Dutch colony, reflected in its architecture and culture."
          }
          ]
        },
        "es": {
          "name": "Surinam",
          "capital": "Paramaribo",
          "flagDescription": "La bandera de Surinam tiene cinco franjas horizontales de verde, blanco, rojo, blanco y verde, con una estrella de oro en el centro. Los colores representan la cosecha (verde), la paz (blanco), y la sangre de los patriotas (rojo).",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Paraíso de la Selva Tropical",
            "description": "Surinam está casi completamente cubierto por selva tropical, con biodiversidad increíble y comunidades indígenas."
          },
          {
            "icon": "public",
            "title": "Sudamérica de Habla Holandesa",
            "description": "Surinam es el único país sudamericano donde el holandés es el idioma oficial."
          },
          {
            "icon": "landscape",
            "title": "Diversidad Cultural",
            "description": "Surinam tiene una población diversa con culturas africanas, indias, indonesias e indígenas que se mezclan juntas."
          },
          {
            "icon": "history",
            "title": "Historia Colonial",
            "description": "Surinam tiene una historia colonial única como colonia holandesa, reflejada en su arquitectura y cultura."
          }
          ]
        }
      }
  },
  {
      "slug": "svalbard-and-jan-mayen",
      "flagCode": "sj",
      "continent": "Europe",
      "population": "3K",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Svalbard and Jan Mayen",
              "capital": "Longyearbyen",
              "flagDescription": "Svalbard and Jan Mayen use the flag of Norway — a red background with a blue Nordic cross outlined in white. Although these Arctic territories are under Norwegian sovereignty, they have a special status under international treaties. Svalbard is unique because citizens of all countries that signed the 1920 Svalbard Treaty can live and work there without a visa.",
              "funFacts": [
                  {
                      "icon": "ac_unit",
                      "title": "Polar Night and Midnight Sun",
                      "description": "In Longyearbyen, the sun does not rise for about 4 months in winter (Polar Night) and does not set for about 4 months in summer (Midnight Sun). Living through total darkness — and then endless light — is a profoundly unique experience."
                  },
                  {
                      "icon": "pets",
                      "title": "More Polar Bears than People",
                      "description": "Svalbard has about 3,000 polar bears and only around 2,600 human residents! Locals are required by law to carry a rifle when venturing outside town. Encountering a polar bear in the wild is a real possibility."
                  },
                  {
                      "icon": "science",
                      "title": "Svalbard Global Seed Vault",
                      "description": "Buried deep in an Arctic mountain on Svalbard is the Svalbard Global Seed Vault — a backup of over 1.3 million seed samples from around the world. It's humanity's insurance policy against crop extinction and global catastrophe."
                  },
                  {
                      "icon": "public",
                      "title": "Visa-Free for Everyone",
                      "description": "Uniquely, Svalbard is a visa-free zone for all nationalities due to the 1920 Svalbard Treaty. People from any country can move there to live and work. It is one of the only places on Earth where this is possible."
                  }
              ]
          },
          "es": {
              "name": "Svalbard y Jan Mayen",
              "capital": "Longyearbyen",
              "flagDescription": "Svalbard y Jan Mayen usan la bandera de Noruega — un fondo rojo con una cruz nórdica azul delineada en blanco. Aunque estos territorios árticos están bajo soberanía noruega, tienen un estatus especial bajo tratados internacionales. Svalbard es único porque los ciudadanos de todos los países que firmaron el Tratado de Svalbard de 1920 pueden vivir y trabajar allí sin visado.",
              "funFacts": [
                  {
                      "icon": "ac_unit",
                      "title": "Noche Polar y Sol de Medianoche",
                      "description": "En Longyearbyen, el sol no sale durante unos 4 meses en invierno (Noche Polar) y no se pone durante unos 4 meses en verano (Sol de Medianoche). Vivir en total oscuridad — y luego en luz interminable — es una experiencia profundamente única."
                  },
                  {
                      "icon": "pets",
                      "title": "Más Osos Polares que Personas",
                      "description": "Svalbard tiene unos 3.000 osos polares y solo alrededor de 2.600 residentes humanos. Los lugareños están obligados por ley a llevar un rifle cuando salen del pueblo. Encontrarse con un oso polar en la naturaleza es una posibilidad real."
                  },
                  {
                      "icon": "science",
                      "title": "Bóveda Global de Semillas de Svalbard",
                      "description": "Enterrada en lo profundo de una montaña ártica de Svalbard está la Bóveda Global de Semillas de Svalbard — una copia de seguridad de más de 1,3 millones de muestras de semillas de todo el mundo. Es la póliza de seguros de la humanidad contra la extinción de cultivos y la catástrofe global."
                  },
                  {
                      "icon": "public",
                      "title": "Sin Visado para Todos",
                      "description": "Curiosamente, Svalbard es una zona sin visado para todas las nacionalidades debido al Tratado de Svalbard de 1920. Personas de cualquier país pueden mudarse allí para vivir y trabajar. Es uno de los únicos lugares de la Tierra donde esto es posible."
                  }
              ]
          }
      }
  },
  {
      "slug": "sweden",
      "flagCode": "se",
      "continent": "Europe",
      "population": "10.6M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "Sweden",
              "capital": "Stockholm",
              "flagDescription": "Sweden's flag is a golden-yellow Nordic cross on a blue background. The cross design — with the crossbar extending to the right edge — is shared with all Nordic countries. The blue and yellow colors have been associated with Sweden since the 14th century.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Right to Roam",
                      "description": "Sweden has the 'Allemansrätten' or 'Everyman's Right' — the legal right to roam freely across any land, including private property, as long as you don't disturb it."
                  },
                  {
                      "icon": "lightbulb",
                      "title": "Innovation Nation",
                      "description": "Sweden has given the world dynamite (Alfred Nobel), the zipper, the safety match, Bluetooth technology, and Spotify. For a small nation, it has an outsized innovation record."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Midsommar Festival",
                      "description": "Midsommar, celebrated around the summer solstice in June, is Sweden's most important celebration. Swedes dance around a maypole, eat herring, and stay up for the midnight sun."
                  },
                  {
                      "icon": "gamepad",
                      "title": "Gaming Powerhouse",
                      "description": "Sweden is one of the world's top gaming nations. Swedish studios created Minecraft, Battlefield, Candy Crush, and ABBA's music is still among the best-selling of all time. Stockholm has more billion-dollar tech startups per capita than any city outside Silicon Valley."
                  }
              ]
          },
          "es": {
              "name": "Suecia",
              "capital": "Estocolmo",
              "flagDescription": "La bandera de Suecia es una cruz nórdica dorado-amarilla sobre fondo azul. El diseño de la cruz — con el travesaño que se extiende hasta el borde derecho — es compartido por todos los países nórdicos. Los colores azul y amarillo han estado asociados con Suecia desde el siglo XIV.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Derecho a Deambular",
                      "description": "Suecia tiene el 'Allemansrätten' o 'Derecho de todos': el derecho legal de deambular libremente por cualquier terreno, incluida la propiedad privada, siempre que no se cause daño."
                  },
                  {
                      "icon": "lightbulb",
                      "title": "Nación Innovadora",
                      "description": "Suecia le ha dado al mundo la dinamita (Alfred Nobel), la cremallera, la cerilla de seguridad, la tecnología Bluetooth y Spotify. Para ser una nación pequeña, tiene un historial de innovación desproporcionado."
                  },
                  {
                      "icon": "wb_sunny",
                      "title": "Festival de Midsommar",
                      "description": "El Midsommar, celebrado en torno al solsticio de verano en junio, es la celebración más importante de Suecia. Los suecos bailan alrededor de un palo de mayo, comen arenque y se quedan despiertos para ver el sol de medianoche."
                  },
                  {
                      "icon": "gamepad",
                      "title": "Potencia del Videojuego",
                      "description": "Suecia es una de las principales potencias mundiales del videojuego. Los estudios suecos crearon Minecraft, Battlefield y Candy Crush. Estocolmo tiene más startups tecnológicas valoradas en mil millones de dólares per cápita que cualquier ciudad fuera de Silicon Valley."
                  }
              ]
          }
      }
  },
  {
      "slug": "switzerland",
      "flagCode": "ch",
      "continent": "Europe",
      "population": "9.1M",
      "region": "Western Europe",
      "translations": {
          "en": {
              "name": "Switzerland",
              "capital": "Bern",
              "flagDescription": "Switzerland's flag is a red square with a white cross. One of only two square national flags (the other being Vatican City), the flag's design dates back to the 14th century and inspired the Red Cross symbol.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Alpine Nation",
                      "description": "About 70% of Switzerland is covered by the Alps. The country has 208 mountains above 3,000 meters and some of the world's most scenic train journeys, like the Glacier Express."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Chocolate and Cheese",
                      "description": "Switzerland is famous for both chocolate and cheese. Swiss cheese (raclette, emmental, gruyère) and Swiss chocolate brands like Lindt and Toblerone are known worldwide."
                  },
                  {
                      "icon": "balance",
                      "title": "Permanent Neutrality",
                      "description": "Switzerland has been officially neutral in international conflicts since 1815. It was the last European country to join the United Nations in 2002 and still hasn't joined the EU."
                  },
                  {
                      "icon": "watch_later",
                      "title": "Watchmaking Capital",
                      "description": "Switzerland produces some of the world's finest watches — brands like Rolex, Omega, and Patek Philippe are crafted here. The Swiss watchmaking tradition stretches back over 500 years and the phrase 'Swiss Made' is legally protected to guarantee quality."
                  }
              ]
          },
          "es": {
              "name": "Suiza",
              "capital": "Berna",
              "flagDescription": "La bandera de Suiza es un cuadrado rojo con una cruz blanca. Es una de las únicas dos banderas nacionales cuadradas (la otra es la del Vaticano). El diseño se remonta al siglo XIV e inspiró el símbolo de la Cruz Roja.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Nación Alpina",
                      "description": "Aproximadamente el 70% de Suiza está cubierto por los Alpes. El país tiene 208 montañas por encima de los 3.000 metros y algunos de los trayectos en tren más pintorescos del mundo, como el Glacier Express."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Chocolate y Queso",
                      "description": "Suiza es famosa por el chocolate y el queso. Los quesos suizos (raclette, emmental, gruyère) y las marcas de chocolate suizo como Lindt y Toblerone son conocidas en todo el mundo."
                  },
                  {
                      "icon": "balance",
                      "title": "Neutralidad Permanente",
                      "description": "Suiza ha sido oficialmente neutral en los conflictos internacionales desde 1815. Fue el último país europeo en unirse a las Naciones Unidas en 2002 y aún no se ha unido a la UE."
                  },
                  {
                      "icon": "watch_later",
                      "title": "Capital de la Relojería",
                      "description": "Suiza fabrica algunos de los mejores relojes del mundo: marcas como Rolex, Omega y Patek Philippe se elaboran aquí. La tradición relojera suiza se remonta más de 500 años y la etiqueta 'Swiss Made' está protegida legalmente para garantizar la calidad."
                  }
              ]
          }
      }
  },
  {
      "slug": "syria",
      "flagCode": "sy",
      "continent": "Asia",
      "population": "25.6M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Syria",
              "capital": "Damascus",
              "flagDescription": "Syria's flag has three equal horizontal stripes of red, white, and black with two green stars in the white stripe. The colors are Pan-Arab colors representing unity, and the stars represent Egypt and Syria in historical Arab union. Red represents courage, white means purity, and black represents hardship.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Ancient Civilization",
                      "description": "Syria is home to some of the world's oldest cities, including Damascus, one of the oldest continuously inhabited capitals. The region has been a center of culture, trade, and learning for millennia."
                  },
                  {
                      "icon": "apartment",
                      "title": "Umayyad Mosque",
                      "description": "The Umayyad Mosque in Damascus is one of Islam's greatest masterpieces, featuring stunning mosaics and architecture. It was built in the early 8th century and is considered a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "architecture",
                      "title": "Palmyra Ruins",
                      "description": "Palmyra is an ancient city in the desert with stunning ruins including temples, colonnades, and tombs. It was a major trading hub on the Silk Road connecting East and West."
                  }
              ]
          },
          "es": {
              "name": "Siria",
              "capital": "Damasco",
              "flagDescription": "La bandera de Siria tiene tres franjas horizontales iguales de rojo, blanco y negro con dos estrellas verdes en la franja blanca. Los colores son colores panárabes que representan la unidad, y las estrellas representan Egipto y Siria en la unión árabe histórica. El rojo representa el valor, el blanco significa pureza, y el negro representa dificultad.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Civilización antigua",
                      "description": "Siria es hogar de algunas de las ciudades más antiguas del mundo, incluyendo Damasco, una de las capitales continuamente habitadas más antiguas. La región ha sido un centro de cultura, comercio y aprendizaje durante milenios."
                  },
                  {
                      "icon": "apartment",
                      "title": "Mezquita Omeya",
                      "description": "La Mezquita Omeya en Damasco es una de las grandes obras maestras del Islam, con mosaicos y arquitectura impresionantes. Fue construida a principios del siglo VIII y se considera Patrimonio de la Humanidad de la UNESCO."
                  },
                  {
                      "icon": "architecture",
                      "title": "Ruinas de Palmira",
                      "description": "Palmira es una ciudad antigua en el desierto con impresionantes ruinas incluyendo templos, columnatas y tumbas. Fue un importante centro comercial en la Ruta de la Seda que conectaba Oriente y Occidente."
                  }
              ]
          }
      }
  },
  {
      "slug": "taiwan",
      "flagCode": "tw",
      "continent": "Asia",
      "population": "23.3M",
      "region": "Eastern Asia",
      "translations": {
          "en": {
              "name": "Taiwan",
              "capital": "Taipei",
              "flagDescription": "Taiwan's flag is known as the Blue Sky, White Sun, and a Wholly Red Earth. A blue canton in the upper left bears a white sun with 12 triangular rays, representing the 12 months and 12 traditional hours of the day. The red field symbolizes the blood of revolutionaries who fought for the nation's founding. Blue stands for liberty and democracy, and white for fraternity and equality.",
              "funFacts": [
                  {
                      "icon": "devices",
                      "title": "Semiconductor Superpower",
                      "description": "Taiwan produces more than 60% of the world's semiconductors and over 90% of the most advanced chips. Companies like TSMC manufacture the tiny chips that power nearly every smartphone, computer, car, and modern device on the planet."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Night Market Culture",
                      "description": "Taiwan's night markets are legendary — bustling outdoor food markets open late into the night serving hundreds of unique dishes. Taipei's Shilin Night Market is one of the most famous in Asia, drawing millions of visitors with dumplings, bubble tea, and stinky tofu."
                  },
                  {
                      "icon": "landscape",
                      "title": "Island of Beautiful Mountains",
                      "description": "Portugal's 16th-century sailors named Taiwan Ilha Formosa — Beautiful Island — and it still lives up to the name. Taroko Gorge, with its marble cliffs and turquoise rivers, is one of Asia's most spectacular natural wonders."
                  },
                  {
                      "icon": "local_library",
                      "title": "National Palace Museum",
                      "description": "The National Palace Museum in Taipei houses one of the world's greatest collections of Chinese art and imperial treasures — over 700,000 items spanning 8,000 years. The collection was brought from mainland China during the Chinese Civil War."
                  }
              ]
          },
          "es": {
              "name": "Taiwán",
              "capital": "Taipéi",
              "flagDescription": "La bandera de Taiwán es conocida como el Cielo Azul, el Sol Blanco y la Tierra Completamente Roja. Un cantón azul en la parte superior izquierda lleva un sol blanco con 12 rayos triangulares, que representan los 12 meses y las 12 horas tradicionales del día. El campo rojo simboliza la sangre de los revolucionarios que lucharon por la fundación de la nación. El azul representa la libertad y la democracia, y el blanco la fraternidad y la igualdad.",
              "funFacts": [
                  {
                      "icon": "devices",
                      "title": "Superpotencia de Semiconductores",
                      "description": "Taiwán produce más del 60% de los semiconductores del mundo y más del 90% de los chips más avanzados. Empresas como TSMC fabrican los diminutos chips que impulsan prácticamente todos los smartphones, ordenadores, coches y dispositivos modernos del planeta."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Cultura de los Mercados Nocturnos",
                      "description": "Los mercados nocturnos de Taiwán son legendarios — bulliciosos mercados de comida al aire libre abiertos hasta altas horas de la noche que sirven cientos de platos únicos. El Mercado Nocturno Shilin de Taipéi es uno de los más famosos de Asia, atrayendo a millones de visitantes con dumplings, té de burbujas y tofu apestoso."
                  },
                  {
                      "icon": "landscape",
                      "title": "Isla de Hermosas Montañas",
                      "description": "Los marineros portugueses del siglo XVI llamaron a Taiwán Ilha Formosa — Isla Hermosa — y todavía está a la altura del nombre. La Garganta de Taroko, con sus acantilados de mármol y ríos turquesas, es una de las maravillas naturales más espectaculares de Asia."
                  },
                  {
                      "icon": "local_library",
                      "title": "Museo del Palacio Nacional",
                      "description": "El Museo del Palacio Nacional en Taipéi alberga una de las mayores colecciones del mundo de arte chino y tesoros imperiales — más de 700.000 objetos que abarcan 8.000 años. La colección fue traída desde la China continental durante la Guerra Civil China."
                  }
              ]
          }
      }
  },
  {
      "slug": "tajikistan",
      "flagCode": "tj",
      "continent": "Asia",
      "population": "10.5M",
      "region": "Central Asia",
      "translations": {
          "en": {
              "name": "Tajikistan",
              "capital": "Dushanbe",
              "flagDescription": "Tajikistan's flag has three equal horizontal stripes of red, white, and green with a gold crown and arch above seven gold stars in the white stripe. Red represents the blood of independence, white means peace and purity, green represents the mountains, and the stars represent the Tajik regions.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Pamir Mountains",
                      "description": "The Pamir Mountains (\"Roof of the World\") dominate Tajikistan with peaks over 7,000 meters. These dramatic mountains are among the most remote and pristine wilderness areas on Earth."
                  },
                  {
                      "icon": "public",
                      "title": "Silk Road Legacy",
                      "description": "Tajikistan was a major crossroads on the ancient Silk Road trade route. The mountains, valleys, and ancient cities preserve the legacy of this historical trading network connecting East and West."
                  },
                  {
                      "icon": "public",
                      "title": "Traditional Textiles",
                      "description": "Tajik traditional embroidery and weaving are renowned for intricate patterns and vibrant colors. The ikat technique is used to create beautifully patterned fabrics with geometric and floral designs."
                  }
              ]
          },
          "es": {
              "name": "Tayikistán",
              "capital": "Dusambé",
              "flagDescription": "La bandera de Tayikistán tiene tres franjas horizontales iguales de rojo, blanco y verde con una corona dorada y arco sobre siete estrellas doradas en la franja blanca. El rojo representa la sangre de la independencia, el blanco significa paz y pureza, el verde representa las montañas, y las estrellas representan las regiones tayikas.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Montañas Pamir",
                      "description": "Las Montañas Pamir (\"Techo del Mundo\") dominan Tayikistán con picos superiores a 7.000 metros. Estas dramáticas montañas están entre las áreas de vida silvestre más remotas y prístinas de la Tierra."
                  },
                  {
                      "icon": "public",
                      "title": "Legado de la Ruta de la Seda",
                      "description": "Tayikistán fue una encrucijada importante en la ruta comercial antigua de la Ruta de la Seda. Las montañas, valles y ciudades antiguas preservan el legado de esta red comercial histórica que conecta Oriente y Occidente."
                  },
                  {
                      "icon": "public",
                      "title": "Textiles tradicionales",
                      "description": "El bordado y tejido tradicional tayiko son renombrados por patrones intrincados y colores vibrantes. La técnica ikat se utiliza para crear telas con patrones hermosos con diseños geométricos y florales."
                  }
              ]
          }
      }
  },
  {
      "slug": "tanzania",
      "flagCode": "tz",
      "continent": "Africa",
      "population": "68.2M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Tanzania",
              "capital": "Dodoma",
              "flagDescription": "Tanzania's flag has a black diagonal stripe with yellow borders running from the lower-left to upper-right, dividing the flag into green (upper-left) and blue (lower-right). Black represents the people, green the land, blue the sea, and yellow the mineral wealth.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "Roof of Africa",
                      "description": "Mount Kilimanjaro in Tanzania is the highest peak in Africa at 5,895 meters. It's a volcanic mountain that can be climbed without any technical equipment."
                  },
                  {
                      "icon": "park",
                      "title": "Serengeti Migration",
                      "description": "The Serengeti National Park hosts the Great Migration, where 1.5 million wildebeest and 250,000 zebra make an epic annual journey across the savanna."
                  },
                  {
                      "icon": "anchor",
                      "title": "Zanzibar Spice Island",
                      "description": "The island of Zanzibar, part of Tanzania, was once the world's largest producer of cloves. Its old town is a UNESCO World Heritage Site with a rich Swahili culture."
                  }
              ]
          },
          "es": {
              "name": "Tanzania",
              "capital": "Dodoma",
              "flagDescription": "La bandera de Tanzania tiene una franja diagonal negra con bordes amarillos que va de la esquina inferior izquierda a la superior derecha, dividiendo la bandera en verde (arriba a la izquierda) y azul (abajo a la derecha). El negro representa al pueblo, el verde la tierra, el azul el mar y el amarillo la riqueza mineral.",
              "funFacts": [
                  {
                      "icon": "terrain",
                      "title": "El techo de África",
                      "description": "El monte Kilimanjaro en Tanzania es el pico más alto de África con 5.895 metros. Es un volcán que puede ser escalado sin ningún equipo técnico."
                  },
                  {
                      "icon": "park",
                      "title": "La migración del Serengeti",
                      "description": "El Parque Nacional del Serengeti alberga la Gran Migración, donde 1,5 millones de ñus y 250.000 cebras realizan un épico viaje anual por la sabana."
                  },
                  {
                      "icon": "anchor",
                      "title": "Zanzíbar, la isla de las especias",
                      "description": "La isla de Zanzíbar, parte de Tanzania, fue en su día el mayor productor mundial de clavo. Su ciudad antigua es Patrimonio de la Humanidad de la UNESCO y tiene una rica cultura suajili."
                  }
              ]
          }
      }
  },
  {
      "slug": "thailand",
      "flagCode": "th",
      "continent": "Asia",
      "population": "65.9M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Thailand",
              "capital": "Bangkok",
              "flagDescription": "Thailand's flag has five horizontal stripes of red, white, blue, white, and red. Blue is twice the size of other stripes and represents the monarchy. Red represents the nation, and white represents Buddhism. The proportion is unique among national flags.",
              "funFacts": [
                  {
                      "icon": "temple_buddhist",
                      "title": "Temple of the Emerald Buddha",
                      "description": "The Temple of the Emerald Buddha (Wat Phra Kaew) in Bangkok is the most sacred Buddhist temple in Thailand, housing a highly revered jade Buddha statue. It's one of the most beautifully decorated temples in the world."
                  },
                  {
                      "icon": "pets",
                      "title": "Elephant Symbol",
                      "description": "Elephants are deeply revered in Thai culture and appear on the national emblem. White elephants are considered especially sacred. Elephants have been used in Thai warfare, ceremonies, and daily life for centuries."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Thai Cuisine Mastery",
                      "description": "Thai cuisine is famous worldwide for its balance of sweet, sour, salty, and spicy flavors. Dishes like pad thai, green curry, and tom yum are beloved globally and showcase Thai culinary expertise."
                  }
              ]
          },
          "es": {
              "name": "Tailandia",
              "capital": "Bangkok",
              "flagDescription": "La bandera de Tailandia tiene cinco franjas horizontales de rojo, blanco, azul, blanco y rojo. El azul tiene el doble del tamaño de las otras franjas y representa la monarquía. El rojo representa la nación, y el blanco representa el budismo. La proporción es única entre banderas nacionales.",
              "funFacts": [
                  {
                      "icon": "temple_buddhist",
                      "title": "Templo del Buda de Esmeralda",
                      "description": "El Templo del Buda de Esmeralda (Wat Phra Kaew) en Bangkok es el templo budista más sagrado de Tailandia, albergando una estatua de Buda de jade muy reverenciada. Es uno de los templos más hermosamente decorados del mundo."
                  },
                  {
                      "icon": "pets",
                      "title": "Símbolo del elefante",
                      "description": "Los elefantes son profundamente reverenciados en la cultura tailandesa y aparecen en el emblema nacional. Los elefantes blancos se consideran especialmente sagrados. Los elefantes han sido usados en la guerra tailandesa, ceremonias y vida diaria durante siglos."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Maestría de la cocina tailandesa",
                      "description": "La cocina tailandesa es famosa mundialmente por su equilibrio de sabores dulce, agrio, salado y picante. Platos como pad thai, curry verde y tom yum son amados mundialmente y muestran la experiencia culinaria tailandesa."
                  }
              ]
          }
      }
  },
  {
      "slug": "timor-leste",
      "flagCode": "tl",
      "continent": "Asia",
      "population": "1.4M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Timor-Leste",
              "capital": "Dili",
              "flagDescription": "Timor-Leste's flag has a yellow background with a white isosceles triangle and a black isosceles triangle overlapping, with a white star in the black triangle. Yellow represents the wealth of the nation, white represents peace, black represents the struggle for independence, and the star represents guidance.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Island of Spices",
                      "description": "Timor-Leste was called the \"Island of Spices\" because it was famous for its nutmeg, cloves, and mace. These spices were highly sought after and made the island valuable to colonial powers."
                  },
                  {
                      "icon": "nature",
                      "title": "Unique Biodiversity",
                      "description": "Timor-Leste has unique ecosystems with species found nowhere else on Earth. Its forests and marine environments support endemic wildlife and are crucial for conservation."
                  },
                  {
                      "icon": "flag",
                      "title": "Youngest Nation",
                      "description": "Timor-Leste is the youngest country in Asia, having gained independence from Indonesia in 2002 after decades of struggle. It's the only Asian country colonized by Portugal."
                  }
              ]
          },
          "es": {
              "name": "Timor Oriental",
              "capital": "Dili",
              "flagDescription": "La bandera de Timor Oriental tiene un fondo amarillo con un triángulo isósceles blanco y un triángulo isósceles negro superpuestos, con una estrella blanca en el triángulo negro. El amarillo representa la riqueza de la nación, el blanco representa la paz, el negro representa la lucha por la independencia, y la estrella representa la guía.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Isla de las especias",
                      "description": "Timor Oriental fue llamada la \"Isla de las Especias\" porque era famosa por su nuez moscada, clavos y macís. Estas especias eran muy codiciadas e hicieron que la isla fuera valiosa para las potencias coloniales."
                  },
                  {
                      "icon": "nature",
                      "title": "Biodiversidad única",
                      "description": "Timor Oriental tiene ecosistemas únicos con especies que no se encuentran en ningún otro lugar de la Tierra. Sus bosques y ambientes marinos sustentan fauna endémica y son cruciales para la conservación."
                  },
                  {
                      "icon": "flag",
                      "title": "Nación más joven",
                      "description": "Timor Oriental es el país más joven de Asia, habiendo obtenido la independencia de Indonesia en 2002 después de décadas de lucha. Es el único país asiático colonizado por Portugal."
                  }
              ]
          }
      }
  },
  {
      "slug": "togo",
      "flagCode": "tg",
      "continent": "Africa",
      "population": "8.1M",
      "region": "Western Africa",
      "translations": {
          "en": {
              "name": "Togo",
              "capital": "Lomé",
              "flagDescription": "Togo's flag has five alternating horizontal stripes of green and yellow (green, yellow, green, yellow, green) with a red square in the top-left corner containing a white star. Green represents hope and agriculture, yellow symbolizes mineral wealth, red stands for love and the blood of those who fought for independence, and the white star represents life and purity.",
              "funFacts": [
                  {
                      "icon": "auto_awesome",
                      "title": "World's Largest Voodoo Market",
                      "description": "The Akodessewa Fetish Market in Lomé is the world's largest Voodoo market, selling traditional medicines, dried animals, and ritual items used in West African spiritual ceremonies. It's one of the most extraordinary markets on Earth!"
                  },
                  {
                      "icon": "palette",
                      "title": "Kente and Batik Weaving",
                      "description": "Togo has a rich tradition of handwoven kente cloth and hand-dyed batik fabric. Skilled weavers create intricate geometric patterns that have been passed down through generations."
                  },
                  {
                      "icon": "forest",
                      "title": "Wildlife National Park",
                      "description": "Fazao-Malfakassa National Park in central Togo shelters elephants, lions, leopards, and buffalos — making it an important wildlife sanctuary in West Africa."
                  }
              ]
          },
          "es": {
              "name": "Togo",
              "capital": "Lomé",
              "flagDescription": "La bandera de Togo tiene cinco franjas horizontales alternas de verde y amarillo (verde, amarillo, verde, amarillo, verde) con un cuadrado rojo en la esquina superior izquierda que contiene una estrella blanca. El verde representa la esperanza y la agricultura, el amarillo la riqueza mineral, el rojo el amor y la sangre de quienes lucharon por la independencia, y la estrella blanca la vida y la pureza.",
              "funFacts": [
                  {
                      "icon": "auto_awesome",
                      "title": "El mayor mercado de Vudú del mundo",
                      "description": "¡El mercado fetiche de Akodessewa en Lomé es el mayor mercado de Vudú del mundo, que vende medicinas tradicionales, animales disecados y objetos rituales usados en ceremonias espirituales! Es uno de los mercados más extraordinarios de la Tierra."
                  },
                  {
                      "icon": "palette",
                      "title": "Tejido kente y batik",
                      "description": "Togo tiene una rica tradición de tela kente tejida a mano y batik teñido a mano. Los tejedores expertos crean intrincados patrones geométricos que se han transmitido de generación en generación."
                  },
                  {
                      "icon": "forest",
                      "title": "Parque nacional de fauna",
                      "description": "El Parque Nacional Fazao-Malfakassa, en el centro de Togo, alberga elefantes, leones, leopardos y búfalos, lo que lo convierte en un importante santuario de fauna del África Occidental."
                  }
              ]
          }
      }
  },
  {
      "slug": "tokelau",
      "flagCode": "tk",
      "continent": "Oceania",
      "population": "3K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Tokelau",
              "capital": "Fakaofo",
              "flagDescription": "Tokelau's flag has a blue background with a yellow Tokelau canoe (a traditional proa) in the lower-left area, and in the upper-right a yellow Southern Cross constellation. Below the cross is a yellow crescent shape representing the atoll. The blue represents the Pacific Ocean, the yellow canoe represents the traditional seafaring culture, and the Southern Cross connects Tokelau to New Zealand, which administers the territory.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "Rotating Government",
                      "description": "Tokelau has the world's most unusual government structure — the position of its head of government (the Ulu-o-Tokelau) rotates annually among the three village councils of its three atolls. This ensures equal representation for all three communities."
                  },
                  {
                      "icon": "eco",
                      "title": "100% Solar Powered",
                      "description": "Tokelau became the first territory in the world to run entirely on solar power in 2012. All three atolls generate their electricity from solar panels and coconut oil biofuel backup, making them 100% renewable — an impressive achievement for such a tiny place."
                  },
                  {
                      "icon": "anchor",
                      "title": "No Cars, No Airport",
                      "description": "Tokelau has no cars, no airports, no harbors, and no paved roads. The only way to reach the three atolls is by boat from Samoa (a 2-day voyage). All transport on the atolls themselves is by foot or small boat through the lagoon."
                  },
                  {
                      "icon": "waves",
                      "title": "Coral Atoll Living",
                      "description": "Tokelau's three atolls — Atafu, Nukunonu, and Fakaofo — are tiny strips of coral rising just 2–3 meters above sea level. About 1,500 people live on a total land area of just 12 km², making it one of the most densely populated territories in the Pacific."
                  }
              ]
          },
          "es": {
              "name": "Tokelau",
              "capital": "Fakaofo",
              "flagDescription": "La bandera de Tokelau tiene un fondo azul con una canoa tokelau amarilla (una proa tradicional) en la zona inferior izquierda, y en la parte superior derecha una constelación de la Cruz del Sur amarilla. Debajo de la cruz hay una forma de media luna amarilla que representa el atolón. El azul representa el Océano Pacífico, la canoa amarilla representa la cultura marinera tradicional, y la Cruz del Sur conecta a Tokelau con Nueva Zelanda, que administra el territorio.",
              "funFacts": [
                  {
                      "icon": "public",
                      "title": "Gobierno Rotatorio",
                      "description": "Tokelau tiene la estructura de gobierno más inusual del mundo — el cargo de jefe de gobierno (el Ulu-o-Tokelau) rota anualmente entre los tres consejos de aldea de sus tres atolones. Esto garantiza una representación igualitaria para las tres comunidades."
                  },
                  {
                      "icon": "eco",
                      "title": "100% Energía Solar",
                      "description": "Tokelau se convirtió en el primer territorio del mundo en funcionar completamente con energía solar en 2012. Los tres atolones generan su electricidad a partir de paneles solares y biocombustible de aceite de coco de reserva, haciéndolos 100% renovables — un logro impresionante para un lugar tan pequeño."
                  },
                  {
                      "icon": "anchor",
                      "title": "Sin Coches, Sin Aeropuerto",
                      "description": "Tokelau no tiene coches, aeropuertos, puertos ni carreteras pavimentadas. La única forma de llegar a los tres atolones es en barco desde Samoa (un viaje de 2 días). Todo el transporte en los propios atolones es a pie o en pequeñas embarcaciones a través de la laguna."
                  },
                  {
                      "icon": "waves",
                      "title": "Vida en el Atolón de Coral",
                      "description": "Los tres atolones de Tokelau — Atafu, Nukunonu y Fakaofo — son pequeñas franjas de coral que se elevan solo 2-3 metros sobre el nivel del mar. Aproximadamente 1.500 personas viven en una superficie terrestre total de solo 12 km², lo que lo convierte en uno de los territorios más densamente poblados del Pacífico."
                  }
              ]
          }
      }
  },
  {
      "slug": "tonga",
      "flagCode": "to",
      "continent": "Oceania",
      "population": "100K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Tonga",
              "capital": "Nukuʻalofa",
              "flagDescription": "Tonga's flag is red with a white rectangle in the upper-left containing a red cross. The red represents the blood of Christ, white symbolizes purity, and the cross represents Christianity, which has been fundamental to Tongan culture since the 19th century.",
              "funFacts": [
                  {
                      "icon": "sports",
                      "title": "Rugby Powerhouse",
                      "description": "Like Samoa and Fiji, tiny Tonga punches far above its weight in rugby union. Tongan players are known for their physicality and the Sipi Tau (war dance) performed before matches."
                  },
                  {
                      "icon": "anchor",
                      "title": "Friendly Islands",
                      "description": "Captain James Cook called Tonga the 'Friendly Islands' after the warm welcome he received in 1773 from the Tongan people."
                  },
                  {
                      "icon": "crown",
                      "title": "Pacific Kingdom",
                      "description": "Tonga is the only remaining monarchy in the Pacific Ocean. The royal family has ruled uninterrupted since the 10th century, making the Tongan monarchy one of the oldest continuous dynasties in the world."
                  },
                  {
                      "icon": "water",
                      "title": "Humpback Whale Nursery",
                      "description": "Every year, humpback whales migrate to the warm waters of Tonga to give birth and nurse their calves. Tonga is one of the only places on Earth where you can legally swim alongside humpback whale mothers and their newborns."
                  }
              ]
          },
          "es": {
              "name": "Tonga",
              "capital": "Nuku'alofa",
              "flagDescription": "La bandera de Tonga es roja con un rectángulo blanco en la esquina superior izquierda que contiene una cruz roja. El rojo representa la sangre de Cristo, el blanco simboliza la pureza y la cruz representa el cristianismo, que ha sido fundamental en la cultura tongana desde el siglo XIX.",
              "funFacts": [
                  {
                      "icon": "sports",
                      "title": "Potencia del Rugby",
                      "description": "Al igual que Samoa y Fiyi, la pequeña Tonga supera con creces su peso en rugby union. Los jugadores tonganos son conocidos por su físico y el Sipi Tau (danza de guerra) que realizan antes de los partidos."
                  },
                  {
                      "icon": "anchor",
                      "title": "Las Islas Amigas",
                      "description": "El Capitán James Cook llamó a Tonga las 'Islas Amigas' tras la cálida bienvenida que recibió en 1773 del pueblo tongano."
                  },
                  {
                      "icon": "crown",
                      "title": "El Reino del Pacífico",
                      "description": "Tonga es la única monarquía que queda en el Océano Pacífico. La familia real ha gobernado ininterrumpidamente desde el siglo X, convirtiendo a la monarquía tongana en una de las dinastías continuas más antiguas del mundo."
                  },
                  {
                      "icon": "water",
                      "title": "Guardería de Ballenas Jorobadas",
                      "description": "Cada año, las ballenas jorobadas migran a las cálidas aguas de Tonga para dar a luz y amamantar a sus crías. Tonga es uno de los únicos lugares de la Tierra donde se puede nadar legalmente junto a madres ballenas jorobadas y sus recién nacidos."
                  }
              ]
          }
      }
  },
  {
      "slug": "trinidad-and-tobago",
      "flagCode": "tt",
      "continent": "North America",
      "population": "1.4M",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Trinidad and Tobago",
          "capital": "Port of Spain",
          "flagDescription": "Trinidad and Tobago's flag has a red field with a white-edged black diagonal band dividing it. The red represents the vitality and courage of the people, white represents equality, and black represents the strength and unity of the nation.",
          "funFacts": [
          {
            "icon": "celebration",
            "title": "Carnival Paradise",
            "description": "Trinidad and Tobago is famous for its spectacular Caribbean carnival with steel band music and colorful costumes."
          },
          {
            "icon": "landscape",
            "title": "Pitch Lake",
            "description": "Trinidad has Pitch Lake, the world's largest natural reservoir of asphalt, a geological wonder."
          },
          {
            "icon": "music_note",
            "title": "Steel Drums",
            "description": "Trinidad and Tobago is the birthplace of steel drum music, an iconic Caribbean sound."
          },
          {
            "icon": "nature",
            "title": "Biodiversity",
            "description": "The islands are home to incredible biodiversity with tropical birds, orchids, and marine life."
          }
          ]
        },
        "es": {
          "name": "Trinidad y Tobago",
          "capital": "Puerto de España",
          "flagDescription": "La bandera de Trinidad y Tobago tiene un campo rojo con una banda diagonal negra con bordes blancos que lo divide. El rojo representa la vitalidad y el coraje del pueblo, el blanco representa la igualdad, y el negro representa la fortaleza y la unidad de la nación.",
          "funFacts": [
          {
            "icon": "celebration",
            "title": "Paraíso del Carnaval",
            "description": "Trinidad y Tobago es famosa por su espectacular carnaval caribeño con música de banda de acero y disfraces coloridos."
          },
          {
            "icon": "landscape",
            "title": "Pitch Lake",
            "description": "Trinidad tiene Pitch Lake, el mayor depósito natural de asfalto del mundo, una maravilla geológica."
          },
          {
            "icon": "music_note",
            "title": "Tambores de Acero",
            "description": "Trinidad y Tobago es el lugar de nacimiento de la música de tambores de acero, un sonido caribeño icónico."
          },
          {
            "icon": "nature",
            "title": "Biodiversidad",
            "description": "Las islas son hogar de biodiversidad increíble con aves tropicales, orquídeas y vida marina."
          }
          ]
        }
      }
  },
  {
      "slug": "tunisia",
      "flagCode": "tn",
      "continent": "Africa",
      "population": "12.0M",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Tunisia",
              "capital": "Tunis",
              "flagDescription": "Tunisia's flag is red with a white circle in the center containing a red crescent moon and a red five-pointed star. Red represents the blood of those who defended the country against invaders, white stands for peace, and the crescent moon and star are symbols of Islam, which is central to Tunisian culture.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "Africa's Doorstep to Europe",
                      "description": "Tunisia is Africa's closest country to Europe — Sicily, Italy is only 140 km away across the sea! This proximity has made Tunisia a crossroads of civilizations for thousands of years."
                  },
                  {
                      "icon": "history",
                      "title": "Ancient Carthage",
                      "description": "The ancient city of Carthage, founded in 814 BC, was once Rome's greatest rival and nearly conquered the Roman Empire under general Hannibal (who crossed the Alps with elephants!). Its ruins are just outside Tunis."
                  },
                  {
                      "icon": "movie",
                      "title": "Star Wars Was Filmed Here",
                      "description": "Scenes from the Star Wars movies — including Luke Skywalker's home planet Tatooine — were filmed in the Tunisian Sahara Desert and the underground cave city of Matmata. Fans still visit these locations today!"
                  }
              ]
          },
          "es": {
              "name": "Túnez",
              "capital": "Túnez",
              "flagDescription": "La bandera de Túnez es roja con un círculo blanco en el centro que contiene una media luna roja y una estrella roja de cinco puntas. El rojo representa la sangre de quienes defendieron el país de los invasores, el blanco simboliza la paz, y la media luna y la estrella son símbolos del Islam, central en la cultura tunecina.",
              "funFacts": [
                  {
                      "icon": "anchor",
                      "title": "El umbral de África a Europa",
                      "description": "¡Túnez es el país de África más cercano a Europa: Sicilia, Italia, está a solo 140 km a través del mar! Esta proximidad ha convertido a Túnez en un cruce de civilizaciones durante miles de años."
                  },
                  {
                      "icon": "history",
                      "title": "La antigua Cartago",
                      "description": "La ciudad de Cartago, fundada en 814 a.C., fue el mayor rival de Roma y casi conquistó el Imperio Romano bajo el general Aníbal (¡que cruzó los Alpes con elefantes!). Sus ruinas están justo a las afueras de la capital."
                  },
                  {
                      "icon": "movie",
                      "title": "Star Wars se filmó aquí",
                      "description": "¡Escenas de las películas de Star Wars, incluido el planeta natal de Luke Skywalker, Tatooine, fueron filmadas en el Sáhara tunecino y en la ciudad subterránea de Matmata! Los fans aún visitan estas localizaciones hoy."
                  }
              ]
          }
      }
  },
  {
      "slug": "turkey",
      "flagCode": "tr",
      "continent": "Asia",
      "population": "85.7M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Turkey",
              "capital": "Ankara",
              "flagDescription": "Turkey's flag is red with a white crescent moon and a white star. The crescent and star are symbols of Islam and have appeared on Ottoman flags for centuries. According to legend, the crescent reflects the moon's image in a pool of blood after a battle.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Where East Meets West",
                      "description": "Istanbul is the only city in the world that straddles two continents — Europe and Asia are separated by the Bosphorus Strait, which runs right through the middle of the city."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Birthplace of Baklava",
                      "description": "Turkey lays claim to baklava, a rich pastry of filo dough, nuts, and syrup. Turkish coffee — thick, unfiltered, and often served with fortune-telling from the grounds — is also a UNESCO-listed cultural heritage."
                  },
                  {
                      "icon": "landscape",
                      "title": "Fairy Chimneys",
                      "description": "Cappadocia's otherworldly landscape features volcanic rock formations called 'fairy chimneys' that have been hollowed out into cave homes and hotels for thousands of years."
                  }
              ]
          },
          "es": {
              "name": "Turquía",
              "capital": "Ankara",
              "flagDescription": "La bandera de Turquía es roja con una media luna blanca y una estrella de cinco puntas blanca en el centro. El rojo representa la sangre derramada en la lucha por la independencia, la media luna y la estrella son símbolos islámicos tradicionales que representan la fe musulmana del país.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Puente entre dos continentes",
                      "description": "Turquía es el único país que se extiende a través de dos continentes: Europa y Asia. El Estrecho de Bósforo en Estambul separa los dos continentes y ha sido un sitio estratégico por miles de años."
                  },
                  {
                      "icon": "architecture",
                      "title": "Hagia Sophia",
                      "description": "La Basílica de Santa Sofía es una de las estructuras más impresionantes del mundo antiguo, construida en el siglo VI como una iglesia cristiana, luego convertida en mezquita, y ahora un museo de renombre mundial."
                  },
                  {
                      "icon": "nature",
                      "title": "Capadocia: Chimeneas de hadas",
                      "description": "Capadocia es famosa por sus formaciones rocosas únicas llamadas \"chimeneas de hadas\". El paisaje surrealista ha sido usado como set de película y es popular para paseos en globo aerostático."
                  }
              ]
          }
      }
  },
  {
      "slug": "turkmenistan",
      "flagCode": "tm",
      "continent": "Asia",
      "population": "7.1M",
      "region": "Central Asia",
      "translations": {
          "en": {
              "name": "Turkmenistan",
              "capital": "Ashgabat",
              "flagDescription": "Turkmenistan's flag has a green field with a red vertical stripe on the hoist containing a white carpet design (gul pattern). The flag also has a white crescent and five white stars in the upper hoist corner. Green represents Islam, and the carpet symbolizes Turkmen cultural heritage.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Crater of Fire",
                      "description": "The Crater of Fire (Darvaza Gas Crater) is a natural gas field that has been burning continuously since 1971 in the Karakum Desert. Locals call it \"the Gates of Hell\" because of its otherworldly appearance."
                  },
                  {
                      "icon": "architecture",
                      "title": "White Marble City",
                      "description": "Ashgabat is known for its white marble buildings and monuments. The city was built with white marble to create a stunning aesthetic, giving it the nickname \"White Marble City.\""
                  },
                  {
                      "icon": "public",
                      "title": "Turkmen Carpet Masters",
                      "description": "Turkmen carpets are world-renowned for their intricate designs and beautiful colors. Carpet weaving is a traditional art form passed down through generations of Turkmen families."
                  }
              ]
          },
          "es": {
              "name": "Turkmenistán",
              "capital": "Asjabat",
              "flagDescription": "La bandera de Turkmenistán tiene un campo verde con una franja vertical roja en el asta que contiene un diseño blanco de alfombra (patrón gul). La bandera también tiene una media luna blanca y cinco estrellas blancas en la esquina superior del asta. El verde representa el Islam, y la alfombra simboliza el patrimonio cultural turkmeno.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Cráter de fuego",
                      "description": "El Cráter de Fuego (Cráter de Gas de Darvaza) es un campo de gas natural que ha estado ardiendo continuamente desde 1971 en el Desierto de Karakum. Los lugareños lo llaman \"las Puertas del Infierno\" por su apariencia sobrenatural."
                  },
                  {
                      "icon": "architecture",
                      "title": "Ciudad de mármol blanco",
                      "description": "Asjabat es conocida por sus edificios y monumentos de mármol blanco. La ciudad fue construida con mármol blanco para crear una estética impresionante, dándole el apodo de \"Ciudad de Mármol Blanco\"."
                  },
                  {
                      "icon": "public",
                      "title": "Maestros de alfombras turmenas",
                      "description": "Las alfombras turmenas son mundialmente reconocidas por sus diseños intrincados y hermosos colores. El tejido de alfombras es una forma de arte tradicional transmitida a través de generaciones de familias turmenas."
                  }
              ]
          }
      }
  },
  {
      "slug": "turks-and-caicos-islands",
      "flagCode": "tc",
      "continent": "North America",
      "population": "59.9K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "Turks and Caicos Islands",
          "capital": "Cockburn Town",
          "flagDescription": "The Turks and Caicos Islands' flag has a blue field with the Union Jack in the upper left and a shield on the right. The shield features a conch shell, a spiny lobster, and a turk's head cactus, representing the islands' natural resources.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Diving Paradise",
            "description": "The Turks and Caicos Islands are a world-class diving destination with colorful coral reefs and marine life."
          },
          {
            "icon": "landscape",
            "title": "Grace Bay Beach",
            "description": "Grace Bay Beach is consistently ranked among the world's best beaches, with pristine white sand."
          },
          {
            "icon": "public",
            "title": "British Territory",
            "description": "The Turks and Caicos Islands are a British Overseas Territory in the Atlantic."
          },
          {
            "icon": "waves",
            "title": "Snorkeling and Water Sports",
            "description": "The islands offer excellent opportunities for snorkeling, fishing, windsurfing, and other water activities."
          }
          ]
        },
        "es": {
          "name": "Islas Turcas y Caicos",
          "capital": "Cockburn Town",
          "flagDescription": "La bandera de las Islas Turcas y Caicos tiene un campo azul con la Union Jack en la esquina superior izquierda y un escudo en la derecha. El escudo presenta una concha de concha marina, una langosta espinosa, y un cactus cabeza de turco, representando los recursos naturales de las islas.",
          "funFacts": [
          {
            "icon": "waves",
            "title": "Paraíso de Buceo",
            "description": "Las Islas Turcas y Caicos son un destino de buceo de clase mundial con arrecifes de coral coloridos y vida marina."
          },
          {
            "icon": "landscape",
            "title": "Playa de Grace Bay",
            "description": "La Playa de Grace Bay está constantemente clasificada entre las mejores playas del mundo, con arena blanca prístina."
          },
          {
            "icon": "public",
            "title": "Territorio Británico",
            "description": "Las Islas Turcas y Caicos son un Territorio Británico de Ultramar en el Atlántico."
          },
          {
            "icon": "waves",
            "title": "Snorkel y Deportes Acuáticos",
            "description": "Las islas ofrecen excelentes oportunidades para snorkel, pesca, windsurf y otras actividades acuáticas."
          }
          ]
        }
      }
  },
  {
      "slug": "tuvalu",
      "flagCode": "tv",
      "continent": "Oceania",
      "population": "11K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Tuvalu",
              "capital": "Funafuti",
              "flagDescription": "Tuvalu's flag has a light blue background representing the Pacific Ocean, with the Union Jack in the upper left corner. On the right side are nine golden stars arranged in the same positions as Tuvalu's nine islands on a map of the Pacific. Each star represents one of the islands (though one island, Niulakita, was sometimes not counted, which led the flag to have 8 stars at one point — a political controversy that was resolved in 1997).",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Rising Sea Threat",
                      "description": "Tuvalu faces an existential threat from rising sea levels. Most of its land is less than 2 meters above sea level, and king tides already flood parts of the main island. The government has signed an agreement with Australia to allow all Tuvaluans to migrate there if the islands become uninhabitable."
                  },
                  {
                      "icon": "language",
                      "title": "Tuvalu.tv Domain",
                      "description": "Tuvalu owns the .tv internet domain extension and licenses it to television companies worldwide for millions of dollars per year. This income from a quirk of geography has been a significant source of funding for this tiny nation."
                  },
                  {
                      "icon": "anchor",
                      "title": "Funafuti Atoll",
                      "description": "Funafuti Atoll is one of the strangest capitals in the world — a narrow strip of coral encircling a vast lagoon. The entire capital fits on a ribbon of land barely 20 meters wide in places, with the ocean on both sides just steps away."
                  },
                  {
                      "icon": "celebration",
                      "title": "Fatele Dance",
                      "description": "The fatele is Tuvalu's traditional group dance and the heart of all celebrations. Performed by seated groups who sing while a lead dancer performs increasingly energetic movements, fatele competitions between islands are passionate affairs where the honor of entire communities is at stake."
                  }
              ]
          },
          "es": {
              "name": "Tuvalu",
              "capital": "Funafuti",
              "flagDescription": "La bandera de Tuvalu tiene un fondo azul claro que representa el Océano Pacífico, con la Union Jack en la esquina superior izquierda. En el lado derecho hay nueve estrellas doradas dispuestas en las mismas posiciones que las nueve islas de Tuvalu en un mapa del Pacífico. Cada estrella representa una de las islas (aunque una isla, Niulakita, a veces no se contaba, lo que llevó a que la bandera tuviera 8 estrellas en un momento — una controversia política que se resolvió en 1997).",
              "funFacts": [
                  {
                      "icon": "waves",
                      "title": "Amenaza del Mar en Ascenso",
                      "description": "Tuvalu enfrenta una amenaza existencial del aumento del nivel del mar. La mayor parte de sus tierras está a menos de 2 metros sobre el nivel del mar, y las mareas reyes ya inundan partes de la isla principal. El gobierno ha firmado un acuerdo con Australia para permitir que todos los tuvaluanos emigren allí si las islas se vuelven inhabitables."
                  },
                  {
                      "icon": "language",
                      "title": "El Dominio Tuvalu.tv",
                      "description": "Tuvalu posee la extensión de dominio de internet .tv y la licencia a empresas de televisión de todo el mundo por millones de dólares al año. Este ingreso de una peculiaridad geográfica ha sido una fuente significativa de financiación para esta diminuta nación."
                  },
                  {
                      "icon": "anchor",
                      "title": "Atolón Funafuti",
                      "description": "El Atolón Funafuti es una de las capitales más extrañas del mundo — una estrecha franja de coral que rodea una vasta laguna. Toda la capital cabe en una cinta de tierra de apenas 20 metros de ancho en algunos lugares, con el océano a ambos lados a pocos pasos."
                  },
                  {
                      "icon": "celebration",
                      "title": "Danza Fatele",
                      "description": "El fatele es la danza grupal tradicional de Tuvalu y el corazón de todas las celebraciones. Interpretado por grupos sentados que cantan mientras un bailarín principal realiza movimientos cada vez más enérgicos, las competiciones de fatele entre islas son asuntos apasionados donde está en juego el honor de comunidades enteras."
                  }
              ]
          }
      }
  },
  {
      "slug": "uganda",
      "flagCode": "ug",
      "continent": "Africa",
      "population": "45.9M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Uganda",
              "capital": "Kampala",
              "flagDescription": "Uganda's flag has six equal horizontal stripes alternating black, yellow, and red (black, yellow, red, black, yellow, red) with a white circle in the center featuring a grey crowned crane. Black represents the African people, yellow symbolizes the sunshine and vitality of the country, red stands for brotherhood and the blood of all people, and the grey crowned crane is Uganda's beloved national bird.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Mountain Gorilla Capital",
                      "description": "Bwindi Impenetrable National Park is home to over half the world's remaining mountain gorillas. Uganda has the most accessible gorilla trekking in the world — getting close to a gorilla family in the wild is a life-changing experience."
                  },
                  {
                      "icon": "water",
                      "title": "Source of the Nile",
                      "description": "The source of the Nile River — where it flows out of Lake Victoria — is at Jinja, Uganda. From here, the great Nile begins its 6,650 km journey to the Mediterranean Sea. Jinja is also famous for thrilling white-water rafting!"
                  },
                  {
                      "icon": "water",
                      "title": "Africa's Largest Lake",
                      "description": "Lake Victoria is the largest lake in Africa and the world's largest tropical lake. It supports the livelihoods of over 30 million people living on its shores in Uganda, Kenya, and Tanzania."
                  }
              ]
          },
          "es": {
              "name": "Uganda",
              "capital": "Kampala",
              "flagDescription": "La bandera de Uganda tiene seis franjas horizontales iguales que alternan negro, amarillo y rojo (negro, amarillo, rojo, negro, amarillo, rojo) con un círculo blanco en el centro con una grulla coronada gris. El negro representa al pueblo africano, el amarillo simboliza el sol y la vitalidad del país, el rojo representa la fraternidad y la sangre de todas las personas, y la grulla coronada gris es el querido pájaro nacional de Uganda.",
              "funFacts": [
                  {
                      "icon": "forest",
                      "title": "Capital del gorila de montaña",
                      "description": "El Parque Nacional Impenetrable de Bwindi alberga a más de la mitad de los gorilas de montaña restantes del mundo. Uganda ofrece el trekking de gorilas más accesible del mundo, una experiencia que cambia la vida."
                  },
                  {
                      "icon": "water",
                      "title": "El nacimiento del Nilo",
                      "description": "El nacimiento del río Nilo, donde sale del lago Victoria, está en Jinja, Uganda. Desde aquí, el gran Nilo comienza su viaje de 6.650 km hasta el mar Mediterráneo. ¡Jinja también es famosa por el rafting en aguas bravas!"
                  },
                  {
                      "icon": "water",
                      "title": "El lago más grande de África",
                      "description": "El lago Victoria es el lago más grande de África y el mayor lago tropical del mundo. Sustenta los medios de vida de más de 30 millones de personas que viven en sus orillas en Uganda, Kenia y Tanzania."
                  }
              ]
          }
      }
  },
  {
      "slug": "ukraine",
      "flagCode": "ua",
      "continent": "Europe",
      "population": "32.9M",
      "region": "Eastern Europe",
      "translations": {
          "en": {
              "name": "Ukraine",
              "capital": "Kyiv",
              "flagDescription": "Ukraine's flag is beautifully simple — two equal horizontal stripes of blue on top and yellow on the bottom. The blue represents the clear sky over Ukraine, and the yellow represents the vast golden wheat fields that stretch across the country. Together they paint a picture of Ukraine's landscape: an endless blue sky over golden plains. This combination has been used as a Ukrainian symbol since the 12th century.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "The Breadbasket of Europe",
                      "description": "Ukraine has some of the world's most fertile agricultural land. Its rich black soil (called chernozem) is among the most productive on Earth. Ukraine is one of the world's largest exporters of wheat, corn, and sunflower oil — vital to global food supply."
                  },
                  {
                      "icon": "history",
                      "title": "Birthplace of Kievan Rus",
                      "description": "Kyiv, Ukraine's capital, was the center of Kievan Rus — the first great Slavic state, founded in the 9th century. It was one of medieval Europe's largest cities and the cultural and spiritual ancestor of modern Russia, Ukraine, and Belarus."
                  },
                  {
                      "icon": "celebration",
                      "title": "Vyshyvanka Embroidery",
                      "description": "The vyshyvanka — a traditional embroidered shirt — is a beloved symbol of Ukrainian identity. Each region has its own unique patterns and colors. On Vyshyvanka Day, millions of Ukrainians around the world proudly wear their embroidered shirts."
                  },
                  {
                      "icon": "science",
                      "title": "Space Pioneers",
                      "description": "Ukraine has a proud space heritage. Yuzhnoye Design Office in Dnipro has designed rockets used in over 400 space launches. Ukrainian engineers have contributed to major space programs across the world, from satellites to launch vehicles."
                  }
              ]
          },
          "es": {
              "name": "Ucrania",
              "capital": "Kiev",
              "flagDescription": "La bandera de Ucrania es bellamente simple — dos franjas horizontales iguales de azul arriba y amarillo abajo. El azul representa el cielo despejado sobre Ucrania, y el amarillo representa los vastos campos de trigo dorado que se extienden por todo el país. Juntos pintan un cuadro del paisaje de Ucrania: un cielo azul infinito sobre llanuras doradas. Esta combinación se ha usado como símbolo ucraniano desde el siglo XII.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "El Granero de Europa",
                      "description": "Ucrania tiene algunas de las tierras agrícolas más fértiles del mundo. Su rico suelo negro (llamado chernozem) es uno de los más productivos de la Tierra. Ucrania es uno de los mayores exportadores mundiales de trigo, maíz y aceite de girasol — vital para el suministro alimentario global."
                  },
                  {
                      "icon": "history",
                      "title": "Cuna de la Rus de Kiev",
                      "description": "Kiev, la capital de Ucrania, fue el centro de la Rus de Kiev — el primer gran estado eslavo, fundado en el siglo IX. Era una de las ciudades más grandes de la Europa medieval y el ancestro cultural y espiritual de la Rusia, Ucrania y Bielorrusia modernas."
                  },
                  {
                      "icon": "celebration",
                      "title": "Bordado Vyshyvanka",
                      "description": "El vyshyvanka — una camisa bordada tradicional — es un querido símbolo de identidad ucraniana. Cada región tiene sus propios patrones y colores únicos. En el Día del Vyshyvanka, millones de ucranianos de todo el mundo llevan con orgullo sus camisas bordadas."
                  },
                  {
                      "icon": "science",
                      "title": "Pioneros del Espacio",
                      "description": "Ucrania tiene un orgulloso patrimonio espacial. La Oficina de Diseño Yuzhnoye en Dnipro ha diseñado cohetes utilizados en más de 400 lanzamientos espaciales. Los ingenieros ucranianos han contribuido a los principales programas espaciales de todo el mundo."
                  }
              ]
          }
      }
  },
  {
      "slug": "united-arab-emirates",
      "flagCode": "ae",
      "continent": "Asia",
      "population": "11.3M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "United Arab Emirates",
              "capital": "Abu Dhabi",
              "flagDescription": "The UAE flag has three equal horizontal stripes of green, white, and black, with a red vertical stripe on the hoist. Green represents Islam and hope, white represents peace, black represents strength, and red symbolizes courage and the blood of independence fighters.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Burj Khalifa",
                      "description": "The Burj Khalifa in Dubai is the world's tallest building at 828 meters. This architectural marvel is an iconic symbol of Dubai's ambition and rapid development in the 21st century."
                  },
                  {
                      "icon": "landscape",
                      "title": "Arabian Desert",
                      "description": "The UAE is home to vast desert landscapes featuring towering sand dunes. Desert safaris and dune bashing are popular activities offering visitors a taste of traditional Bedouin culture and stunning desert scenery."
                  },
                  {
                      "icon": "lightbulb",
                      "title": "Innovation and Modernity",
                      "description": "The UAE has transformed from an oil-based economy into a global hub for innovation, finance, and tourism. Palm Jumeirah, Dubai Marina, and the Sheikh Zayed Grand Mosque showcase modern and traditional architecture."
                  }
              ]
          },
          "es": {
              "name": "Emiratos Árabes Unidos",
              "capital": "Abu Dabi",
              "flagDescription": "La bandera de los EAU tiene tres franjas horizontales iguales de verde, blanco y negro, con una franja vertical roja en el asta. El verde representa el Islam y la esperanza, el blanco representa la paz, el negro representa la fortaleza, y el rojo simboliza el valor y la sangre de los luchadores por la independencia.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Burj Khalifa",
                      "description": "El Burj Khalifa en Dubái es el edificio más alto del mundo con 828 metros. Esta maravilla arquitectónica es un símbolo icónico de la ambición y el rápido desarrollo de Dubái en el siglo XXI."
                  },
                  {
                      "icon": "landscape",
                      "title": "Desierto Arábigo",
                      "description": "Los EAU albergan vastos paisajes desérticos con dunas de arena imponentes. Los safaris en el desierto y el dune bashing son actividades populares que ofrecen a los visitantes un sabor de la cultura beduina tradicional y el impresionante paisaje del desierto."
                  },
                  {
                      "icon": "lightbulb",
                      "title": "Innovación y modernidad",
                      "description": "Los EAU se han transformado de una economía basada en el petróleo en un centro mundial de innovación, finanzas y turismo. Palm Jumeirah, Dubai Marina y la Mezquita Sheikh Zayed muestran arquitectura moderna y tradicional."
                  }
              ]
          }
      }
  },
  {
      "slug": "united-kingdom",
      "flagCode": "gb",
      "continent": "Europe",
      "population": "69.3M",
      "region": "Northern Europe",
      "translations": {
          "en": {
              "name": "United Kingdom",
              "capital": "London",
              "flagDescription": "The UK flag, the Union Jack, combines three crosses: the red St George's Cross (England), the white diagonal St Andrew's Cross (Scotland), and the red diagonal St Patrick's Cross (Ireland). The blue background comes from the Scottish flag.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Industrial Revolution",
                      "description": "The United Kingdom was the birthplace of the Industrial Revolution in the 18th century, changing the world through steam engines, factories, and railways — launching the modern era."
                  },
                  {
                      "icon": "menu_book",
                      "title": "Shakespeare's Legacy",
                      "description": "William Shakespeare invented over 1,700 words still used today, including 'bedroom', 'lonely', 'generous', and 'eyeball'. He remains the most performed playwright in history."
                  },
                  {
                      "icon": "music_note",
                      "title": "British Invasion",
                      "description": "In the 1960s, British bands like The Beatles, The Rolling Stones, and The Who transformed global music in what became known as the 'British Invasion' of American pop culture."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Birthplace of Football",
                      "description": "England invented Association Football (soccer) and codified its rules in 1863. The English Premier League is now the most-watched sports league in the world, broadcast to 189 countries."
                  }
              ]
          },
          "es": {
              "name": "Reino Unido",
              "capital": "Londres",
              "flagDescription": "La bandera del Reino Unido, la Union Jack, combina tres cruces: la Cruz de San Jorge roja (Inglaterra), la Cruz diagonal blanca de San Andrés (Escocia) y la Cruz diagonal roja de San Patricio (Irlanda). El fondo azul proviene de la bandera escocesa.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "La Revolución Industrial",
                      "description": "El Reino Unido fue la cuna de la Revolución Industrial en el siglo XVIII, cambiando el mundo mediante máquinas de vapor, fábricas y ferrocarriles, e impulsando la era moderna."
                  },
                  {
                      "icon": "menu_book",
                      "title": "El Legado de Shakespeare",
                      "description": "William Shakespeare inventó más de 1.700 palabras que aún se usan hoy, como 'bedroom', 'lonely', 'generous' y 'eyeball'. Sigue siendo el dramaturgo más representado de la historia."
                  },
                  {
                      "icon": "music_note",
                      "title": "La Invasión Británica",
                      "description": "En los años 60, bandas británicas como The Beatles, The Rolling Stones y The Who transformaron la música global en lo que se conoció como la 'Invasión Británica' de la cultura pop americana."
                  },
                  {
                      "icon": "sports_soccer",
                      "title": "Cuna del Fútbol",
                      "description": "Inglaterra inventó el fútbol asociación y codificó sus reglas en 1863. La Premier League inglesa es actualmente el torneo deportivo más visto del mundo, emitido en 189 países."
                  }
              ]
          }
      }
  },
  {
      "slug": "united-states",
      "flagCode": "us",
      "continent": "North America",
      "population": "340.1M",
      "region": "North America",
      "translations": {
        "en": {
          "name": "United States",
          "capital": "Washington, D.C.",
          "flagDescription": "The United States flag, known as the Stars and Stripes, features 13 horizontal stripes representing the original 13 states and 50 stars representing the current 50 states. The blue canton (upper left) contains the stars. Red represents courage, white represents purity, and blue represents loyalty.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "National Parks",
            "description": "The USA has 63 national parks including Yellowstone, the world's first national park."
          },
          {
            "icon": "landscape",
            "title": "Diverse Geography",
            "description": "The USA spans from Atlantic to Pacific with deserts, mountains, plains, and forests."
          },
          {
            "icon": "public",
            "title": "Most Populous Democracy",
            "description": "The USA is the world's largest democracy and a global superpower."
          },
          {
            "icon": "public",
            "title": "Cultural Influence",
            "description": "American culture, music, and entertainment have global influence and reach."
          }
          ]
        },
        "es": {
          "name": "Estados Unidos",
          "capital": "Washington, D.C.",
          "flagDescription": "La bandera de Estados Unidos, conocida como las Barras y Estrellas, presenta 13 franjas horizontales que representan los 13 estados originales y 50 estrellas que representan los 50 estados actuales. El cantón azul (esquina superior izquierda) contiene las estrellas. El rojo representa el coraje, el blanco representa la pureza, y el azul representa la lealtad.",
          "funFacts": [
          {
            "icon": "tour",
            "title": "Parques Nacionales",
            "description": "EE.UU. tiene 63 parques nacionales incluyendo Yellowstone, el primer parque nacional del mundo."
          },
          {
            "icon": "landscape",
            "title": "Geografía Diversa",
            "description": "EE.UU. se extiende desde el Atlántico al Pacífico con desiertos, montañas, llanuras y bosques."
          },
          {
            "icon": "public",
            "title": "Democracia Más Poblada",
            "description": "EE.UU. es la democracia más grande del mundo y una superpotencia global."
          },
          {
            "icon": "public",
            "title": "Influencia Cultural",
            "description": "La cultura, música y entretenimiento estadounidenses tienen influencia y alcance global."
          }
          ]
        }
      }
  },
  {
      "slug": "united-states-minor-outlying-islands",
      "flagCode": "um",
      "continent": "North America",
      "population": "0K",
      "region": "Pacific & Atlantic",
      "translations": {
        "en": {
          "name": "United States Minor Outlying Islands",
          "capital": "None",
          "flagDescription": "The United States Minor Outlying Islands use the U.S. flag. These are uninhabited or sparsely populated territories under U.S. sovereignty, scattered across the Pacific and Atlantic Oceans.",
          "funFacts": [
          {
            "icon": "public",
            "title": "U.S. Territories",
            "description": "These are U.S. territories spread across the Pacific and Atlantic Oceans."
          },
          {
            "icon": "landscape",
            "title": "Mostly Uninhabited",
            "description": "Most of these islands are uninhabited and primarily used for military or scientific purposes."
          },
          {
            "icon": "nature",
            "title": "Important Ecosystems",
            "description": "Despite being small, these islands contain important ecosystems and wildlife habitats."
          },
          {
            "icon": "history",
            "title": "Strategic Importance",
            "description": "Many of these islands have historical and strategic significance for the United States."
          }
          ]
        },
        "es": {
          "name": "Islas Menores Alejadas de EE.UU.",
          "capital": "Ninguna",
          "flagDescription": "Las Islas Menores Alejadas de EE.UU. utilizan la bandera estadounidense. Estos son territorios deshabitados o escasamente poblados bajo soberanía estadounidense, dispersos en los Océanos Pacífico y Atlántico.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Territorios estadounidenses",
            "description": "Estos son territorios estadounidenses dispersos en los Océanos Pacífico y Atlántico."
          },
          {
            "icon": "landscape",
            "title": "Mayormente Deshabitados",
            "description": "La mayoría de estas islas están deshabitadas y se utilizan principalmente para propósitos militares o científicos."
          },
          {
            "icon": "nature",
            "title": "Ecosistemas Importantes",
            "description": "A pesar de ser pequeñas, estas islas contienen ecosistemas importantes y hábitats de vida silvestre."
          },
          {
            "icon": "history",
            "title": "Importancia Estratégica",
            "description": "Muchas de estas islas tienen importancia histórica y estratégica para Estados Unidos."
          }
          ]
        }
      }
  },
  {
      "slug": "united-states-virgin-islands",
      "flagCode": "vi",
      "continent": "North America",
      "population": "87.1K",
      "region": "Caribbean",
      "translations": {
        "en": {
          "name": "United States Virgin Islands",
          "capital": "Charlotte Amalie",
          "flagDescription": "The U.S. Virgin Islands use the U.S. flag with a local seal. The territory is an unincorporated territory of the United States with a distinct island culture.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Tropical Paradise",
            "description": "The U.S. Virgin Islands are known for pristine beaches, crystal-clear waters, and lush tropical vegetation."
          },
          {
            "icon": "waves",
            "title": "Water Sports",
            "description": "The islands offer excellent diving, snorkeling, sailing, and other water sports activities."
          },
          {
            "icon": "public",
            "title": "Caribbean Culture",
            "description": "The islands have a vibrant Caribbean culture with distinct music, food, and traditions."
          },
          {
            "icon": "public",
            "title": "U.S. Territory",
            "description": "The U.S. Virgin Islands are an unincorporated territory of the United States."
          }
          ]
        },
        "es": {
          "name": "Islas Vírgenes de EE.UU.",
          "capital": "Charlotte Amalie",
          "flagDescription": "Las Islas Vírgenes de EE.UU. utilizan la bandera estadounidense con un sello local. El territorio es un territorio no incorporado de Estados Unidos con una cultura insular distinta.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Paraíso Tropical",
            "description": "Las Islas Vírgenes de EE.UU. son conocidas por playas prístinas, aguas cristalinas y exuberante vegetación tropical."
          },
          {
            "icon": "waves",
            "title": "Deportes Acuáticos",
            "description": "Las islas ofrecen excelente buceo, snorkel, vela y otras actividades de deportes acuáticos."
          },
          {
            "icon": "public",
            "title": "Cultura Caribeña",
            "description": "Las islas tienen una cultura caribeña vibrante con música distinta, comida y tradiciones."
          },
          {
            "icon": "public",
            "title": "Territorio estadounidense",
            "description": "Las Islas Vírgenes de EE.UU. son un territorio no incorporado de Estados Unidos."
          }
          ]
        }
      }
  },
  {
      "slug": "uruguay",
      "flagCode": "uy",
      "continent": "South America",
      "population": "3.4M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Uruguay",
          "capital": "Montevideo",
          "flagDescription": "Uruguay's flag has nine horizontal stripes alternating white and blue. The upper left canton contains a white square with the Sun of May in gold. The stripes represent the nine departments of the original nation, and the sun symbolizes independence.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Most Developed in Latin America",
            "description": "Uruguay is considered the most developed and stable country in Latin America."
          },
          {
            "icon": "public",
            "title": "Tango Homeland",
            "description": "Uruguay is the homeland of tango, sharing this cultural treasure with Argentina."
          },
          {
            "icon": "public",
            "title": "Progressive Nation",
            "description": "Uruguay is known for progressive policies including legalized marijuana, same-sex marriage, and education."
          },
          {
            "icon": "landscape",
            "title": "River Plate",
            "description": "Uruguay is located between the Paraná River and the Atlantic Ocean, with beautiful river and beach landscapes."
          }
          ]
        },
        "es": {
          "name": "Uruguay",
          "capital": "Montevideo",
          "flagDescription": "La bandera de Uruguay tiene nueve franjas horizontales alternadas blancas y azules. El cantón superior izquierdo contiene un cuadrado blanco con el Sol de Mayo en oro. Las franjas representan los nueve departamentos de la nación original, y el sol simboliza la independencia.",
          "funFacts": [
          {
            "icon": "public",
            "title": "Más Desarrollado en América Latina",
            "description": "Uruguay es considerado el país más desarrollado y estable en América Latina."
          },
          {
            "icon": "public",
            "title": "Patria del Tango",
            "description": "Uruguay es la patria del tango, compartiendo este tesoro cultural con Argentina."
          },
          {
            "icon": "public",
            "title": "Nación Progresista",
            "description": "Uruguay es conocida por políticas progresistas incluyendo legalización de marihuana, matrimonio entre parejas del mismo sexo, y educación."
          },
          {
            "icon": "landscape",
            "title": "Río de la Plata",
            "description": "Uruguay está ubicada entre el Río Paraná y el Océano Atlántico, con hermosos paisajes de río y playa."
          }
          ]
        }
      }
  },
  {
      "slug": "uzbekistan",
      "flagCode": "uz",
      "continent": "Asia",
      "population": "37.9M",
      "region": "Central Asia",
      "translations": {
          "en": {
              "name": "Uzbekistan",
              "capital": "Tashkent",
              "flagDescription": "Uzbekistan's flag has three equal horizontal stripes of blue, white, and green, separated by thin red lines, with a white crescent and 12 white stars in the upper hoist corner. Blue represents the sky and hope, white represents peace, green represents nature and fertility, and red symbolizes vitality.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Samarkand and Bukhara",
                      "description": "Samarkand and Bukhara are ancient Silk Road cities filled with stunning Islamic architecture including the Registan and Bibi-Khanym Mosque. These UNESCO sites showcase the region's rich cultural heritage."
                  },
                  {
                      "icon": "texture",
                      "title": "Silk Road Hub",
                      "description": "Uzbekistan was a major crossroads on the ancient Silk Road, connecting East and West through trade. The region became famous for silk, spices, and crafts that traveled along these historic routes."
                  },
                  {
                      "icon": "palette",
                      "title": "Traditional Crafts",
                      "description": "Uzbek traditional crafts include intricate silk ikat weaving, ceramic tilework, and carpet making. These crafts are still practiced today and are a source of pride in Uzbek culture."
                  }
              ]
          },
          "es": {
              "name": "Uzbekistán",
              "capital": "Taskent",
              "flagDescription": "La bandera de Uzbekistán tiene tres franjas horizontales iguales de azul, blanco y verde, separadas por líneas rojas finas, con una media luna blanca y 12 estrellas blancas en la esquina superior del asta. El azul representa el cielo y la esperanza, el blanco representa la paz, el verde representa la naturaleza y la fertilidad, y el rojo simboliza la vitalidad.",
              "funFacts": [
                  {
                      "icon": "apartment",
                      "title": "Samarcanda y Bujará",
                      "description": "Samarcanda y Bujará son ciudades antiguas de la Ruta de la Seda llenas de impresionante arquitectura islámica incluyendo el Registan y la Mezquita Bibi-Khanym. Estos sitios de la UNESCO muestran el rico patrimonio cultural de la región."
                  },
                  {
                      "icon": "texture",
                      "title": "Centro de la Ruta de la Seda",
                      "description": "Uzbekistán fue una encrucijada importante en la antigua Ruta de la Seda, conectando Oriente y Occidente a través del comercio. La región se hizo famosa por la seda, especias y artesanías que viajaban a través de estas rutas históricas."
                  },
                  {
                      "icon": "palette",
                      "title": "Artesanías tradicionales",
                      "description": "Las artesanías tradicionales uzbekas incluyen tejido intrincado de seda ikat, azulejos de cerámica y fabricación de alfombras. Estas artesanías aún se practican hoy y son una fuente de orgullo en la cultura uzbeka."
                  }
              ]
          }
      }
  },
  {
      "slug": "vanuatu",
      "flagCode": "vu",
      "continent": "Oceania",
      "population": "321K",
      "region": "Melanesia",
      "translations": {
          "en": {
              "name": "Vanuatu",
              "capital": "Port Vila",
              "flagDescription": "Vanuatu's flag has two equal horizontal stripes — black on top and red below — with a green triangle on the hoist side. A thin yellow border separates the triangle from the stripes, forming a Y-shape. In the black stripe sits a yellow emblem: a boar's tusk (a symbol of prosperity in ni-Vanuatu culture) with two crossed namangu ferns. The colors represent the dark soil, the blood of boars and men, and the lush greenery of the island chain.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Yasur — Most Accessible Volcano",
                      "description": "Mount Yasur on Tanna Island is one of the world's most accessible active volcanoes. Visitors can walk to the very rim and watch the spectacular eruptions up close. It has been erupting continuously for hundreds of years and is sacred to the local Tanna people."
                  },
                  {
                      "icon": "celebration",
                      "title": "Land Diving — the Original Bungee Jump",
                      "description": "Naghol land diving on Pentecost Island is the inspiration for modern bungee jumping. Men and boys tie vines to their ankles and jump from wooden towers up to 30 meters high — a ritual to ensure a good yam harvest and demonstrate courage."
                  },
                  {
                      "icon": "language",
                      "title": "Most Languages Per Capita",
                      "description": "Vanuatu has more languages per capita than any other country on Earth — over 100 indigenous languages spoken by just 330,000 people. The national language, Bislama, is an English-based Creole that allows all these different linguistic groups to communicate."
                  },
                  {
                      "icon": "history",
                      "title": "Cargo Cults",
                      "description": "Vanuatu is home to the John Frum cargo cult on Tanna Island — one of the world's most unusual religious movements. Believers expect the return of a messianic figure called John Frum, who will bring modern goods and expel Europeans. They still march with bamboo rifles on February 15 each year."
                  }
              ]
          },
          "es": {
              "name": "Vanuatu",
              "capital": "Port Vila",
              "flagDescription": "La bandera de Vanuatu tiene dos franjas horizontales iguales — negra arriba y roja abajo — con un triángulo verde en el lado del asta. Un delgado borde amarillo separa el triángulo de las franjas, formando una forma de Y. En la franja negra hay un emblema amarillo: un colmillo de jabalí (símbolo de prosperidad en la cultura ni-vanuatu) con dos helechos namangu cruzados. Los colores representan el suelo oscuro, la sangre de los jabalíes y los hombres, y la exuberante vegetación de la cadena de islas.",
              "funFacts": [
                  {
                      "icon": "landscape",
                      "title": "Yasur — El Volcán Más Accesible",
                      "description": "El Monte Yasur en la isla de Tanna es uno de los volcanes activos más accesibles del mundo. Los visitantes pueden caminar hasta el mismo borde y observar las espectaculares erupciones de cerca. Ha estado en erupción continuamente durante cientos de años y es sagrado para el pueblo local Tanna."
                  },
                  {
                      "icon": "celebration",
                      "title": "Salto de Tierra — El Bungee Original",
                      "description": "El salto de tierra naghol en la isla de Pentecostés es la inspiración del moderno bungee jumping. Hombres y niños atan lianas a sus tobillos y saltan desde torres de madera de hasta 30 metros de altura — un ritual para garantizar una buena cosecha de ñame y demostrar valentía."
                  },
                  {
                      "icon": "language",
                      "title": "Más Idiomas Per Cápita",
                      "description": "Vanuatu tiene más idiomas per cápita que cualquier otro país de la Tierra — más de 100 idiomas indígenas hablados por solo 330.000 personas. El idioma nacional, el bislama, es un criollo de base inglesa que permite que todos estos diferentes grupos lingüísticos se comuniquen."
                  },
                  {
                      "icon": "history",
                      "title": "Cultos al Cargo",
                      "description": "Vanuatu es el hogar del culto al cargo de John Frum en la isla de Tanna — uno de los movimientos religiosos más inusuales del mundo. Los creyentes esperan el regreso de una figura mesiánica llamada John Frum, que traerá bienes modernos y expulsará a los europeos. Aún marchan con rifles de bambú el 15 de febrero de cada año."
                  }
              ]
          }
      }
  },
  {
      "slug": "vatican-city",
      "flagCode": "va",
      "continent": "Europe",
      "population": "882",
      "region": "Southern Europe",
      "translations": {
          "en": {
              "name": "Vatican City",
              "capital": "Vatican City",
              "flagDescription": "Vatican City's flag has two equal vertical stripes — yellow on the left and white on the right — with the Papal coat of arms on the white stripe. The coat of arms shows two crossed keys (one gold, one silver, representing the Keys of Heaven given to Saint Peter) and the Papal Tiara (a triple crown). Yellow and white represent the two papal keys. This is the only square national flag in the world alongside Switzerland's.",
              "funFacts": [
                  {
                      "icon": "church",
                      "title": "World's Smallest Country",
                      "description": "Vatican City is the world's smallest country — just 0.44 km², smaller than many city parks. Yet it is home to the Pope, the headquarters of the Roman Catholic Church, and some of the world's greatest art treasures."
                  },
                  {
                      "icon": "palette",
                      "title": "Michelangelo's Ceiling",
                      "description": "The Sistine Chapel ceiling, painted by Michelangelo between 1508 and 1512, is one of humanity's greatest artistic achievements. Michelangelo painted it lying on scaffolding, looking up — he was so dedicated he reportedly slept in his clothes to keep working."
                  },
                  {
                      "icon": "sports",
                      "title": "Own Postal Service and Bank",
                      "description": "Despite its tiny size, Vatican City has its own postal service (whose stamps are prized by collectors worldwide), its own bank (the Institute for the Works of Religion), its own radio station, and even its own supermarket and pharmacy."
                  },
                  {
                      "icon": "public",
                      "title": "Over a Billion Followers",
                      "description": "The Pope in Vatican City is the spiritual leader of over 1.3 billion Roman Catholics worldwide — about 17% of the entire human population. No other country on Earth has such a disproportionate spiritual influence relative to its size."
                  }
              ]
          },
          "es": {
              "name": "Ciudad del Vaticano",
              "capital": "Ciudad del Vaticano",
              "flagDescription": "La bandera de la Ciudad del Vaticano tiene dos franjas verticales iguales — amarilla a la izquierda y blanca a la derecha — con el escudo de armas papal en la franja blanca. El escudo muestra dos llaves cruzadas (una de oro, una de plata, que representan las Llaves del Cielo entregadas a San Pedro) y la Tiara Papal (una corona triple). El amarillo y el blanco representan las dos llaves papales. Esta es la única bandera nacional cuadrada del mundo junto con la de Suiza.",
              "funFacts": [
                  {
                      "icon": "church",
                      "title": "El País Más Pequeño del Mundo",
                      "description": "La Ciudad del Vaticano es el país más pequeño del mundo — solo 0,44 km², más pequeño que muchos parques urbanos. Sin embargo, es el hogar del Papa, la sede de la Iglesia Católica Romana y algunos de los mayores tesoros artísticos del mundo."
                  },
                  {
                      "icon": "palette",
                      "title": "El Techo de Miguel Ángel",
                      "description": "El techo de la Capilla Sixtina, pintado por Miguel Ángel entre 1508 y 1512, es uno de los mayores logros artísticos de la humanidad. Miguel Ángel lo pintó tumbado en andamios, mirando hacia arriba — estaba tan dedicado que supuestamente dormía con la ropa puesta para seguir trabajando."
                  },
                  {
                      "icon": "sports",
                      "title": "Servicio Postal y Banco Propios",
                      "description": "A pesar de su diminuto tamaño, la Ciudad del Vaticano tiene su propio servicio postal (cuyos sellos son apreciados por coleccionistas de todo el mundo), su propio banco (el Instituto para las Obras de la Religión), su propia emisora de radio e incluso su propio supermercado y farmacia."
                  },
                  {
                      "icon": "public",
                      "title": "Más de Mil Millones de Seguidores",
                      "description": "El Papa en la Ciudad del Vaticano es el líder espiritual de más de 1.300 millones de católicos romanos en todo el mundo — aproximadamente el 17% de toda la población humana. Ningún otro país de la Tierra tiene una influencia espiritual tan desproporcionada en relación a su tamaño."
                  }
              ]
          }
      }
  },
  {
      "slug": "venezuela",
      "flagCode": "ve",
      "continent": "South America",
      "population": "28.3M",
      "region": "South America",
      "translations": {
        "en": {
          "name": "Venezuela",
          "capital": "Caracas",
          "flagDescription": "Venezuela's flag has three horizontal stripes of yellow, blue, and red. The yellow stripe is twice as wide as the other two. The flag also features stars and the coat of arms. The yellow represents the nation's wealth, blue represents independence, and red represents the blood of patriots.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Angel Falls",
            "description": "Venezuela is home to Angel Falls, the world's highest uninterrupted waterfall at 979 meters."
          },
          {
            "icon": "landscape",
            "title": "Amazon Rainforest",
            "description": "Venezuela contains a significant portion of the Amazon Rainforest in its southern region."
          },
          {
            "icon": "public",
            "title": "Oil Rich",
            "description": "Venezuela has the world's largest proven oil reserves, a major part of its economy."
          },
          {
            "icon": "nature",
            "title": "Biodiversity Hotspot",
            "description": "Venezuela is one of the world's most biodiverse countries with unique flora and fauna."
          }
          ]
        },
        "es": {
          "name": "Venezuela",
          "capital": "Caracas",
          "flagDescription": "La bandera de Venezuela tiene tres franjas horizontales de amarillo, azul y rojo. La franja amarilla es dos veces más ancha que las otras dos. La bandera también presenta estrellas y el escudo de armas. El amarillo representa la riqueza de la nación, el azul representa la independencia, y el rojo representa la sangre de los patriotas.",
          "funFacts": [
          {
            "icon": "landscape",
            "title": "Salto Ángel",
            "description": "Venezuela es hogar del Salto Ángel, la cascada ininterrumpida más alta del mundo con 979 metros."
          },
          {
            "icon": "landscape",
            "title": "Selva Amazónica",
            "description": "Venezuela contiene una porción significativa de la Selva Amazónica en su región meridional."
          },
          {
            "icon": "public",
            "title": "Rica en Petróleo",
            "description": "Venezuela tiene las mayores reservas probadas de petróleo del mundo, una parte importante de su economía."
          },
          {
            "icon": "nature",
            "title": "Punto Caliente de Biodiversidad",
            "description": "Venezuela es uno de los países más biodiversos del mundo con flora y fauna única."
          }
          ]
        }
      }
  },
  {
      "slug": "vietnam",
      "flagCode": "vn",
      "continent": "Asia",
      "population": "101.3M",
      "region": "South-Eastern Asia",
      "translations": {
          "en": {
              "name": "Vietnam",
              "capital": "Hanoi",
              "flagDescription": "Vietnam's flag is red with a single large yellow five-pointed star in the center. Red represents the blood shed for independence and the communist revolution. The single star represents the Communist Party as the sole leader of the nation, while the color and star are traditional revolutionary symbols.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Ha Long Bay",
                      "description": "Ha Long Bay is a UNESCO World Heritage Site featuring thousands of limestone karst peaks rising from emerald waters. Its otherworldly landscape inspired the name \"Ha Long\" meaning \"where the dragon descended.\""
                  },
                  {
                      "icon": "history",
                      "title": "Thousand-Year Struggle for Independence",
                      "description": "Vietnam has a long history of fighting for independence against foreign powers including China, France, and America. This struggle shapes Vietnamese culture, resilience, and national pride."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Pho and Culinary Excellence",
                      "description": "Vietnamese cuisine is renowned for its balance of fresh herbs, lime, and fish sauce. Dishes like pho, banh mi, and spring rolls are beloved worldwide and represent Vietnamese culinary artistry."
                  }
              ]
          },
          "es": {
              "name": "Vietnam",
              "capital": "Hanói",
              "flagDescription": "La bandera de Vietnam es roja con una gran estrella amarilla de cinco puntas en el centro. El rojo representa la sangre derramada por la independencia y la revolución comunista. La única estrella representa al Partido Comunista como único líder de la nación, mientras que el color y la estrella son símbolos revolucionarios tradicionales.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Bahía de Ha Long",
                      "description": "La Bahía de Ha Long es un Patrimonio de la Humanidad de la UNESCO que presenta miles de picos de karst de piedra caliza elevándose desde aguas esmeraldas. Su paisaje sobrenatural inspiró el nombre \"Ha Long\" que significa \"donde descendió el dragón\"."
                  },
                  {
                      "icon": "history",
                      "title": "Lucha milenaria por la independencia",
                      "description": "Vietnam tiene una larga historia de lucha por la independencia contra potencias extranjeras incluyendo China, Francia y América. Esta lucha forma la cultura, resiliencia y orgullo nacional de Vietnam."
                  },
                  {
                      "icon": "restaurant",
                      "title": "Pho y excelencia culinaria",
                      "description": "La cocina vietnamita es renombrada por su equilibrio de hierbas frescas, lima y salsa de pescado. Platos como pho, banh mi y rollos de primavera son amados mundialmente y representan el arte culinario vietnamita."
                  }
              ]
          }
      }
  },
  {
      "slug": "wallis-and-futuna",
      "flagCode": "wf",
      "continent": "Oceania",
      "population": "12K",
      "region": "Polynesia",
      "translations": {
          "en": {
              "name": "Wallis and Futuna",
              "capital": "Mata-Utu",
              "flagDescription": "Wallis and Futuna officially uses the French tricolor, but has an unofficial local flag with a red background and the French tricolor in the upper left corner. In the center are three small Christian crosses arranged triangularly, representing the three traditional kingdoms (Uvea, Sigave, and Alo) that make up the territory. The territory is unique in the Pacific for maintaining its traditional monarchies alongside French administration.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Three Living Kingdoms",
                      "description": "Wallis and Futuna is one of the last places in the world with functioning traditional monarchies operating alongside a modern government. Three kings — the Lavelua of Uvea, the Tuigaifo of Sigave, and the Tuisigave of Alo — still hold real political authority alongside the French administration."
                  },
                  {
                      "icon": "anchor",
                      "title": "Remote French Territory",
                      "description": "Wallis and Futuna is one of France's most remote territories — located in the central Pacific between Fiji and Samoa. The islands have no ATMs, limited internet, and only a few flights per week. Life moves at an unhurried island pace far from metropolitan France."
                  },
                  {
                      "icon": "celebration",
                      "title": "Kava Ceremonies",
                      "description": "Kava — a mildly sedating drink made from the pounded roots of the kava plant — is central to traditional ceremonies, social gatherings, and conflict resolution in Wallis and Futuna. Kava ceremonies follow strict protocols of respect and rank."
                  },
                  {
                      "icon": "language",
                      "title": "Two Distinct Languages",
                      "description": "Wallis (Uvea) and Futuna speak two mutually unintelligible Polynesian languages — Wallisian and Futunan — in addition to French. The two island groups are separated by 230 km of ocean and have developed distinct cultures, traditions, and languages over centuries."
                  }
              ]
          },
          "es": {
              "name": "Wallis y Futuna",
              "capital": "Mata-Utu",
              "flagDescription": "Wallis y Futuna usa oficialmente el tricolor francés, pero tiene una bandera local no oficial con fondo rojo y el tricolor francés en la esquina superior izquierda. En el centro hay tres pequeñas cruces cristianas dispuestas en triángulo, que representan los tres reinos tradicionales (Uvea, Sigave y Alo) que forman el territorio. El territorio es único en el Pacífico por mantener sus monarquías tradicionales junto a la administración francesa.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Tres Reinos Vivos",
                      "description": "Wallis y Futuna es uno de los últimos lugares del mundo con monarquías tradicionales funcionando junto a un gobierno moderno. Tres reyes — el Lavelua de Uvea, el Tuigaifo de Sigave y el Tuisigave de Alo — todavía tienen autoridad política real junto a la administración francesa."
                  },
                  {
                      "icon": "anchor",
                      "title": "Territorio Francés Remoto",
                      "description": "Wallis y Futuna es uno de los territorios más remotos de Francia — ubicado en el Pacífico central entre Fiyi y Samoa. Las islas no tienen cajeros automáticos, internet limitado y solo unos pocos vuelos por semana. La vida transcurre a un ritmo isleño tranquilo lejos de la Francia metropolitana."
                  },
                  {
                      "icon": "celebration",
                      "title": "Ceremonias del Kava",
                      "description": "El kava — una bebida levemente sedante hecha de las raíces trituradas de la planta del kava — es central en las ceremonias tradicionales, reuniones sociales y resolución de conflictos en Wallis y Futuna. Las ceremonias del kava siguen estrictos protocolos de respeto y rango."
                  },
                  {
                      "icon": "language",
                      "title": "Dos Idiomas Distintos",
                      "description": "Wallis (Uvea) y Futuna hablan dos idiomas polinesios mutuamente ininteligibles — wallisiano y futunaño — además del francés. Los dos grupos de islas están separados por 230 km de océano y han desarrollado culturas, tradiciones e idiomas distintos a lo largo de los siglos."
                  }
              ]
          }
      }
  },
  {
      "slug": "western-sahara",
      "flagCode": "eh",
      "continent": "Africa",
      "population": "601K",
      "region": "Northern Africa",
      "translations": {
          "en": {
              "name": "Western Sahara",
              "capital": "El Aaiún",
              "flagDescription": "The Western Sahara flag has three equal horizontal stripes — black at the top, white in the middle, and green at the bottom — with a red crescent moon and red star in the center of the white stripe. These are Pan-Arab colors representing the Sahrawi people's identity and their ongoing claim for independence as a recognized nation.",
              "funFacts": [
                  {
                      "icon": "balance",
                      "title": "A Disputed Territory",
                      "description": "Western Sahara is a disputed territory — Morocco controls most of the land, but the Sahrawi people's Polisario Front claims it should be an independent nation called the Sahrawi Arab Democratic Republic."
                  },
                  {
                      "icon": "science",
                      "title": "Phosphate Treasure",
                      "description": "Western Sahara sits on some of the world's richest phosphate deposits — a mineral used to make fertilizer. Control of these resources is one reason why the territory's future is so contested."
                  },
                  {
                      "icon": "pets",
                      "title": "Flamingos on the Coast",
                      "description": "Despite being mostly barren desert, large flocks of flamingos gather along the Atlantic coastline of Western Sahara, feeding in the shallow coastal waters in a beautiful and unexpected spectacle."
                  }
              ]
          },
          "es": {
              "name": "Sahara Occidental",
              "capital": "El Aaiún",
              "flagDescription": "La bandera del Sahara Occidental tiene tres franjas horizontales iguales: negra arriba, blanca en el centro y verde abajo, con una media luna roja y una estrella roja en el centro de la franja blanca. Estos son colores panarabistas que representan la identidad del pueblo saharaui y su reclamo continuo de independencia.",
              "funFacts": [
                  {
                      "icon": "balance",
                      "title": "Un territorio en disputa",
                      "description": "El Sahara Occidental es un territorio en disputa: Marruecos controla la mayor parte del territorio, pero el Frente Polisario del pueblo saharaui reclama que debería ser una nación independiente llamada República Árabe Saharaui Democrática."
                  },
                  {
                      "icon": "science",
                      "title": "Tesoro de fosfatos",
                      "description": "El Sahara Occidental se asienta sobre algunos de los depósitos de fosfato más ricos del mundo, un mineral usado para fabricar fertilizantes. El control de estos recursos es una razón clave por la que el futuro del territorio está tan disputado."
                  },
                  {
                      "icon": "pets",
                      "title": "Flamencos en la costa",
                      "description": "A pesar de ser en su mayor parte desierto árido, grandes bandadas de flamencos se congregan a lo largo de la costa atlántica del Sahara Occidental, alimentándose en las aguas costeras poco profundas en un espectáculo hermoso e inesperado."
                  }
              ]
          }
      }
  },
  {
      "slug": "yemen",
      "flagCode": "ye",
      "continent": "Asia",
      "population": "32.7M",
      "region": "Western Asia",
      "translations": {
          "en": {
              "name": "Yemen",
              "capital": "Sana'a",
              "flagDescription": "Yemen's flag has three equal horizontal stripes of red, white, and black. These are the Pan-Arab colors adopted during Yemen's struggle for independence and unification. Red represents courage and sacrifice, white symbolizes peace and purity, and black represents the past struggles.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Queen of Sheba's Land",
                      "description": "Yemen was home to the Queen of Sheba, a legendary queen mentioned in ancient texts. The kingdom was a major power controlling trade routes and known for its wealth and wisdom in ancient times."
                  },
                  {
                      "icon": "apartment",
                      "title": "Shibam: Manhattan of the Desert",
                      "description": "Shibam is an ancient walled city with skyscrapers-like mud-brick towers rising up to 30 meters tall. These centuries-old structures create a stunning skyline and are a UNESCO World Heritage Site."
                  },
                  {
                      "icon": "spa",
                      "title": "Frankincense Trade",
                      "description": "Yemen was a major producer of frankincense on the ancient trade routes. The fragrant resin was highly valued and traded across the Arabian Peninsula and beyond for thousands of years."
                  }
              ]
          },
          "es": {
              "name": "Yemen",
              "capital": "Saná",
              "flagDescription": "La bandera de Yemen tiene tres franjas horizontales iguales de rojo, blanco y negro. Estos son los colores panárabes adoptados durante la lucha de Yemen por la independencia y la unificación. El rojo representa el valor y el sacrificio, el blanco simboliza la paz y la pureza, y el negro representa las luchas pasadas.",
              "funFacts": [
                  {
                      "icon": "history",
                      "title": "Tierra de la Reina de Sheba",
                      "description": "Yemen fue hogar de la Reina de Sheba, una reina legendaria mencionada en textos antiguos. El reino fue una potencia importante que controla rutas comerciales y era conocido por su riqueza y sabiduría en tiempos antiguos."
                  },
                  {
                      "icon": "apartment",
                      "title": "Shibam: Manhattan del desierto",
                      "description": "Shibam es una ciudad amurallada antigua con torres de ladrillo de barro parecidas a rascacielos que se elevan hasta 30 metros de altura. Estas estructuras centenarias crean un horizonte impresionante y son Patrimonio de la Humanidad de la UNESCO."
                  },
                  {
                      "icon": "spa",
                      "title": "Comercio del incienso",
                      "description": "Yemen fue un importante productor de incienso en las rutas comerciales antiguas. La resina fragante era muy valorada y comercializada a través de la Península Arábiga y más allá durante miles de años."
                  }
              ]
          }
      }
  },
  {
      "slug": "zambia",
      "flagCode": "zm",
      "continent": "Africa",
      "population": "19.7M",
      "region": "Eastern Africa",
      "translations": {
          "en": {
              "name": "Zambia",
              "capital": "Lusaka",
              "flagDescription": "Zambia's flag is predominantly green with a vertical band of red, black, and orange on the right side near the bottom, and an orange eagle in flight above it. Green represents the country's natural resources and farmland, red symbolizes the struggle for freedom, black represents the Zambian people, orange stands for copper and mineral wealth, and the eagle represents freedom.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Victoria Falls",
                      "description": "Victoria Falls — one of the world's largest waterfalls — sits on the Zambia-Zimbabwe border. The thundering water creates a permanent rainbow and a mist cloud that can be seen from 50 km away!"
                  },
                  {
                      "icon": "diamond",
                      "title": "Copper Country",
                      "description": "Zambia's Copperbelt region has some of the world's richest copper deposits. Copper has shaped the country's economy for over a century and is still Zambia's most important export."
                  },
                  {
                      "icon": "park",
                      "title": "Kafue National Park",
                      "description": "Kafue National Park is one of the largest national parks in Africa — almost as big as Switzerland! Red lechwe antelope, hippos, lions, and leopards roam this magnificent wilderness."
                  }
              ]
          },
          "es": {
              "name": "Zambia",
              "capital": "Lusaka",
              "flagDescription": "La bandera de Zambia es predominantemente verde con una banda vertical de rojo, negro y naranja en el lado derecho inferior, y un águila naranja en vuelo encima. El verde representa los recursos naturales y las tierras de cultivo, el rojo simboliza la lucha por la libertad, el negro representa al pueblo zambiano, el naranja representa el cobre y la riqueza mineral, y el águila representa la libertad.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Las cataratas Victoria",
                      "description": "Las cataratas Victoria, una de las cascadas más grandes del mundo, se encuentran en la frontera entre Zambia y Zimbabue. ¡El agua atronadora crea un arcoíris permanente y una nube de vapor visible a 50 km de distancia!"
                  },
                  {
                      "icon": "diamond",
                      "title": "País del cobre",
                      "description": "La región del Cinturón de Cobre de Zambia tiene algunos de los depósitos de cobre más ricos del mundo. El cobre ha conformado la economía del país durante más de un siglo y sigue siendo la exportación más importante de Zambia."
                  },
                  {
                      "icon": "park",
                      "title": "Parque Nacional Kafue",
                      "description": "¡El Parque Nacional Kafue es uno de los parques nacionales más grandes de África, casi tan grande como Suiza! El antílope lechwe rojo, hipopótamos, leones y leopardos deambulan por esta magnífica naturaleza."
                  }
              ]
          }
      }
  },
  {
      "slug": "zimbabwe",
      "flagCode": "zw",
      "continent": "Africa",
      "population": "17.1M",
      "region": "Southern Africa",
      "translations": {
          "en": {
              "name": "Zimbabwe",
              "capital": "Harare",
              "flagDescription": "Zimbabwe's flag has seven horizontal stripes (green, yellow, red, black, red, yellow, green) with a white triangle on the left containing a red star and the Zimbabwe Bird — a carving of a fish eagle. Green represents vegetation and agriculture, yellow symbolizes mineral wealth, red stands for the blood shed during independence, black represents the African heritage of the people, and the Zimbabwe Bird recalls the ancient stone civilization of Great Zimbabwe.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Victoria Falls: Wonder of the World",
                      "description": "Victoria Falls (shared with Zambia) is so massive and powerful it creates its own weather — a permanent mist and rainbow every day — and the roar of the falls can be heard from 40 km away!"
                  },
                  {
                      "icon": "history",
                      "title": "Great Zimbabwe Ruins",
                      "description": "The Great Zimbabwe ruins are a massive stone city built between 1100-1450 AD entirely without mortar — one of Africa's most impressive ancient monuments and the source of the country's name."
                  },
                  {
                      "icon": "pets",
                      "title": "Rhino Conservation Leader",
                      "description": "Zimbabwe is home to some of the last large populations of both black and white rhinos in Africa. Its national parks are among the best in the world for seeing these magnificent endangered giants."
                  }
              ]
          },
          "es": {
              "name": "Zimbabue",
              "capital": "Harare",
              "flagDescription": "La bandera de Zimbabue tiene siete franjas horizontales (verde, amarillo, rojo, negro, rojo, amarillo, verde) con un triángulo blanco a la izquierda que contiene una estrella roja y el Pájaro de Zimbabue, una talla de águila pescadora. El verde representa la vegetación y la agricultura, el amarillo la riqueza mineral, el rojo la sangre derramada en la independencia, el negro el patrimonio africano del pueblo, y el Pájaro de Zimbabue recuerda la antigua civilización de piedra del Gran Zimbabue.",
              "funFacts": [
                  {
                      "icon": "water",
                      "title": "Cataratas Victoria: maravilla del mundo",
                      "description": "¡Las cataratas Victoria (compartidas con Zambia) son tan grandes y poderosas que crean su propio clima, con una niebla permanente y un arcoíris todos los días, y el rugido del agua se escucha a 40 km de distancia!"
                  },
                  {
                      "icon": "history",
                      "title": "Las ruinas del Gran Zimbabue",
                      "description": "Las ruinas del Gran Zimbabue son una enorme ciudad de piedra construida entre 1100 y 1450 d.C. completamente sin mortero, uno de los monumentos antiguos más impresionantes de África y el origen del nombre del país."
                  },
                  {
                      "icon": "pets",
                      "title": "Líder en conservación del rinoceronte",
                      "description": "Zimbabue alberga algunas de las últimas grandes poblaciones de rinocerontes negros y blancos de África. Sus parques nacionales son de los mejores del mundo para ver a estos magníficos gigantes en peligro de extinción."
                  }
              ]
          }
      }
  }
];

export function getCountriesForLocale(
  locale: Locale,
  data: CountryEntry[] = countriesData,
): Country[] {
  return data.map(({ translations, ...base }) => ({
    ...base,
    ...translations[locale],
  }));
}

/** Default English view — used by tests and SSG utilities */
export const countries: Country[] = getCountriesForLocale("en");
