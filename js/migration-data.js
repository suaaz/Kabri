/**
 * Animal Migration & Geological Zones Comprehensive Dataset
 * Details biological drivers, geological biomes, sensory navigation marvels,
 * and precise geo-coordinates for interactive map path rendering.
 */

const MIGRATION_DRIVERS = [
  {
    icon: "🌱",
    title: "Resource & Trophic Pulses",
    subtitle: "Tracking Seasonal Bounty",
    description: "Animals migrate to harvest temporary biological explosions. High-latitude Arctic summers trigger 24-hour daylight and catastrophic insect blooms; oceanic upwellings generate billions of tons of Antarctic krill. Migrators arrive to feast when energy density peaks, then retreat before winter starvation."
  },
  {
    icon: "❄️",
    title: "Thermal Refuge & Survival",
    subtitle: "Escaping Deadly Freezes & Desiccation",
    description: "Ectotherms and uninsulated mammals cannot endure sub-zero winters or searing desert droughts. Migration allows species to follow perpetual temperate conditions, avoiding frozen waters, blanketed forage, or cellular ice crystallization."
  },
  {
    icon: "🍼",
    title: "Nursery & Breeding Sanctuaries",
    subtitle: "Protecting Vulnerable Offspring",
    description: "Newborn whales lack thick blubber and would freeze in polar seas; high-latitude tundras offer few land predators (like snakes or rodents) to raid bird nests. Animals migrate thousands of miles so young can nurse in warm calm lagoons or nest in predator-sparse zones."
  },
  {
    icon: "🛡️",
    title: "Predator Swamping & Dilution",
    subtitle: "Safety in Massive Collective Numbers",
    description: "When 1.5 million wildebeest or millions of salmon move simultaneously, resident predators become satiated quickly. The individual probability of being eaten drops to a fraction of a percent, turning migration into an evolutionary shield."
  }
];

const NAVIGATION_SENSES = [
  {
    title: "Quantum Magnetoreception",
    organ: "Avian Eyes & Cryptochrome-4",
    detail: "Migratory birds possess light-activated cryptochrome proteins in their retinas. When blue photons strike the eye, quantum entangled radical pairs form, allowing birds to literally 'see' Earth's geomagnetic lines as visual contours superimposed over their vision."
  },
  {
    title: "Celestial & Solar Compasses",
    organ: "Circadian Clocks & Star Charts",
    detail: "Diurnal migrants calculate directions using the sun's azimuth, automatically adjusting for the sun's movement through internal circadian clocks in their antennae. Nocturnal songbirds learn the rotational center of constellations around the North Star (Polaris)."
  },
  {
    title: "Olfactory Geochemical Highways",
    organ: "Nasal Epithelium & Lateral Line",
    detail: "Pelagic seabirds detect traces of dimethyl sulfide (DMS)—a chemical released when zooplankton graze on ocean phytoplankton—mapping fertile oceanic upwellings across featureless open seas. Salmon recall the exact mineral bouquet of their natal mountain stream."
  },
  {
    title: "Infrasound & Seismic Hearing",
    organ: "Pacinian Corpuscles & Middle Ear",
    detail: "Whales and elephants tune into ultra-low-frequency sound waves (below 20 Hz). These infrasonic acoustic rumbles penetrate mountain ranges and ocean basins across hundreds of miles, warning herds of distant monsoons and guiding ocean navigators."
  }
];

const GEOLOGICAL_ZONES = [
  {
    id: "polar-tundra",
    name: "Polar Tundra & Pack Ice",
    tempRange: "-50°C to +10°C",
    soil: "Permafrost, sparse lichens, glacial crust",
    badge: "Extreme Cold",
    challenge: "Months of continuous winter darkness and sub-zero blizzards followed by explosive continuous summer daylight.",
    keyMigrators: ["Arctic Tern", "Caribou", "Snowy Owl", "Beluga Whale"]
  },
  {
    id: "boreal-taiga",
    name: "Boreal Taiga & Coniferous Forests",
    tempRange: "-40°C to +20°C",
    soil: "Acidic spodosols, dense peat moss, bogs",
    badge: "Subarctic Forest",
    challenge: "Short 3-month growing season with immense seasonal snow cover forcing massive winter dispersal.",
    keyMigrators: ["North American Elk", "Whooping Crane", "Boreal Warblers"]
  },
  {
    id: "savanna-grasslands",
    name: "Tropical Savannas & Volcanic Plains",
    tempRange: "+18°C to +35°C",
    soil: "Fertile volcanic ash, calcified clays",
    badge: "Seasonal Rain Cycles",
    challenge: "Dramatic wet and dry seasons; water holes vanish completely during droughts, requiring herds to track rainfall.",
    keyMigrators: ["Blue Wildebeest", "Plains Zebra", "African Elephant"]
  },
  {
    id: "pelagic-ocean",
    name: "Pelagic Open Oceans & Abyssal Trenches",
    tempRange: "0°C to +28°C",
    soil: "Deep oceanic crust, thermal hydrothermal vents",
    badge: "Global Corridors",
    challenge: "Featureless open water spanning tens of thousands of miles governed by thermohaline conveyor currents.",
    keyMigrators: ["Humpback Whale", "Leatherback Sea Turtle", "Bluefin Tuna"]
  },
  {
    id: "alpine-montane",
    name: "Alpine & Montane Highlands",
    tempRange: "-25°C to +15°C",
    soil: "Thin rocky lithosols, talus slopes, scree",
    badge: "High Altitude",
    challenge: "Severe hypoxia (low oxygen), extreme ultraviolet radiation, and treacherous vertical terrain.",
    keyMigrators: ["Bar-headed Goose", "Snow Leopard", "Himalayan Blue Sheep"]
  },
  {
    id: "arid-steppes",
    name: "Arid Steppes & Semi-Deserts",
    tempRange: "-30°C in winter to +45°C in summer",
    soil: "Saline soils, sand, dry chalk plains",
    badge: "Harsh Temperature Swings",
    challenge: "Deadly winter ground-freezes ('dzhut') locking grass under sheets of impenetrable ice, alternating with blistering summers.",
    keyMigrators: ["Saiga Antelope", "Pronghorn", "Asian Wild Ass"]
  }
];

const MIGRATION_ROUTES = [
  {
    id: "arctic-tern",
    name: "Arctic Tern",
    species: "Sterna paradisaea",
    category: "Avian Champion",
    zone: "polar-tundra",
    totalDistance: "Up to 96,000 km (60,000 mi) Round Trip",
    duration: "Annual (Perpetual Summer)",
    heroFact: "Sees more daylight than any creature on Earth by commuting between Arctic and Antarctic summers!",
    summary: "The Arctic Tern is the absolute reigning champion of animal migration. Nesting in Greenland, Iceland, and the Arctic tundra during northern summer, it travels down the Atlantic Ocean, rides prevailing trade winds in an S-shaped oceanic highway, and spends the southern summer on the Antarctic pack ice before returning.",
    whyTheyMigrate: "To exploit the peak summer feeding frenzies at both poles, ensuring its entire life is lived in near-constant daylight with boundless surface fish and crustaceans.",
    startPoint: { name: "Arctic Breeding Grounds (Greenland / Iceland)", coords: [72.0, -40.0] },
    endPoint: { name: "Weddell Sea Pack Ice, Antarctica", coords: [-70.0, -30.0] },
    color: "#06b6d4",
    waypoints: [
      { name: "Greenland Tundra (Breeding)", coords: [72.0, -40.0], note: "Nesting in 24h Arctic sunlight" },
      { name: "North Atlantic Drift", coords: [50.0, -25.0], note: "Foraging on North Atlantic pelagic fish" },
      { name: "Cape Verde Archipelago", coords: [16.0, -24.0], note: "Catching eastern trade winds" },
      { name: "Mid-Atlantic Ridge", coords: [-10.0, -18.0], note: "Riding atmospheric wind spirals" },
      { name: "Cape of Good Hope / South Atlantic", coords: [-38.0, 15.0], note: "Southern staging corridor" },
      { name: "Weddell Sea, Antarctica (Wintering)", coords: [-70.0, -30.0], note: "Feasting on Antarctic krill swarms" }
    ]
  },
  {
    id: "monarch-butterfly",
    name: "Monarch Butterfly",
    species: "Danaus plexippus",
    category: "Insect Miracle",
    zone: "boreal-taiga",
    totalDistance: "4,800 km (3,000 mi)",
    duration: "4 Generations (Multi-Generational Epic)",
    heroFact: "The returning 4th generation has never been to Mexico before, yet navigates to the exact same fir trees!",
    summary: "In autumn, millions of North American Monarchs fly southward from southern Canada and northern US to the high-altitude Oyamel fir forests in Michoacán, Mexico. The southward flight is undertaken by a specialized 'Methuselah super-generation' that lives up to 8 months. In spring, they head north, laying eggs on milkweed, with descendants continuing the relay over 3 subsequent generations.",
    whyTheyMigrate: "Freezing northern winters kill milkweed and adult butterflies. The microclimate of the high Mexican fir forests provides the exact humidity and chill that prevents them from freezing while keeping their metabolism suspended.",
    startPoint: { name: "Great Lakes & St. Lawrence River Basin", coords: [45.0, -78.0] },
    endPoint: { name: "Michoacán Biosphere Reserve, Mexico", coords: [19.6, -100.2] },
    color: "#f59e0b",
    waypoints: [
      { name: "Southern Ontario & Great Lakes", coords: [45.0, -78.0], note: "Super-generation emergence" },
      { name: "Appalachian Funnel", coords: [38.0, -82.0], note: "Gliding on autumn thermal updrafts" },
      { name: "Texas Coastal Corridor", coords: [30.0, -97.0], note: "Nectar fueling pitstop" },
      { name: "Sierra Madre Oriental", coords: [24.0, -100.5], note: "Mountain navigation corridor" },
      { name: "Oyamel Fir Forests, Michoacán", coords: [19.6, -100.2], note: "Millions blanket high fir trees" }
    ]
  },
  {
    id: "serengeti-migration",
    name: "The Great Serengeti Wildebeest Migration",
    species: "Connochaetes taurinus",
    category: "Terrestrial Spectacle",
    zone: "savanna-grasslands",
    totalDistance: "1,000 km (620 mi) Clockwise Loop",
    duration: "Continuous Year-Round Cycle",
    heroFact: "Over 1.5 million wildebeest, 250,000 zebras, and 400,000 gazelles on a non-stop quest for phosphorus-rich grass!",
    summary: "The greatest terrestrial mammalian migration on Earth. The herds follow rainfall and volcanic soil mineral gradients across Tanzania's Serengeti and Kenya's Masai Mara. Calving takes place in the southern plains in February, followed by the dramatic and dangerous Mara River crossings in July-August where Nile crocodiles lie in wait.",
    whyTheyMigrate: "Lactating wildebeest mothers require high levels of phosphorus and calcium found exclusively in the southern Serengeti volcanic soil during the wet season. When the rains cease, water holes dry up, driving the mega-herd north to permanent rivers.",
    startPoint: { name: "Ndutu Plains (Southern Serengeti, Tanzania)", coords: [-3.0, 35.0] },
    endPoint: { name: "Masai Mara National Reserve, Kenya", coords: [-1.5, 35.2] },
    color: "#10b981",
    waypoints: [
      { name: "Ndutu / Southern Plains (Calving)", coords: [-3.0, 35.0], note: "500,000 calves born in 3 weeks" },
      { name: "Western Corridor (Grumeti River)", coords: [-2.2, 34.2], note: "Treacherous river crossing" },
      { name: "Northern Serengeti", coords: [-1.8, 34.9], note: "Rocky woodland traversal" },
      { name: "Mara River Crossing, Kenya", coords: [-1.5, 35.2], note: "Iconic crossing against Nile crocodiles" },
      { name: "Eastern Serengeti Plains", coords: [-2.5, 35.4], note: "Heading south as rains return" }
    ]
  },
  {
    id: "humpback-whale",
    name: "Humpback Whale Odyssey",
    species: "Megaptera novaeangliae",
    category: "Marine Titan",
    zone: "pelagic-ocean",
    totalDistance: "8,500 km (5,300 mi) Each Way",
    duration: "Bi-Annual Journey",
    heroFact: "Fast for up to 6 months while migrating, living purely off blubber reserves while nursing calves!",
    summary: "Humpback whales make one of the longest mammalian marine migrations. During polar summers, they gorge on millions of krill in nutrient-rich icy waters near Antarctica. As polar winter approaches and sea ice freezes, they undertake an epic journey to tropical shallow archipelagos (such as Tonga, Costa Rica, or Hawaii) to mate and give birth.",
    whyTheyMigrate: "Polar waters are bursting with food but deadly for uninsulated newborn calves who have very thin blubber. Tropical lagoons offer warm, tranquil, shallow sanctuaries free from high concentrations of predatory Orcas.",
    startPoint: { name: "Antarctic Southern Ocean (Feeding)", coords: [-65.0, -140.0] },
    endPoint: { name: "Tropical Reefs of Tonga & South Pacific", coords: [-21.0, -175.0] },
    color: "#3b82f6",
    waypoints: [
      { name: "Antarctic Pack Ice (Feeding Grounds)", coords: [-65.0, -140.0], note: "Bubble-net feeding on krill" },
      { name: "Sub-Antarctic Front", coords: [-50.0, -155.0], note: "Heading north through roaring forties" },
      { name: "Kermadec Trench Corridor", coords: [-32.0, -178.0], note: "Deep water acoustic navigation" },
      { name: "Tongan Archipelagos (Calving Nurseries)", coords: [-21.0, -175.0], note: "Warm lagoons, singing males & nursing calves" }
    ]
  },
  {
    id: "bar-headed-goose",
    name: "Bar-Headed Goose (Himalayan Flyway)",
    species: "Anser indicus",
    category: "High-Altitude Aviator",
    zone: "alpine-montane",
    totalDistance: "3,000 km (1,860 mi)",
    duration: "Spring & Autumn Transit (Crosses in 8 hours!)",
    heroFact: "Flies straight over the peaks of Mount Everest and Makalu at altitudes exceeding 29,000 feet!",
    summary: "Bar-headed geese migrate between high-altitude breeding lakes on the Tibetan Plateau and wintering wetlands in India. They accomplish what should be physiologically impossible: flapping flight over the Himalayas through hurricane-force winds and air with only one-third the oxygen density found at sea level.",
    whyTheyMigrate: "Tibetan alpine lakes provide abundant aquatic vegetation and remote predator-free islands in summer, but freeze solid in winter. India's lowland wetlands provide winter food.",
    startPoint: { name: "Qinghai Lake, Tibetan Plateau", coords: [36.9, 100.2] },
    endPoint: { name: "Keoladeo Wetlands, Northern India", coords: [27.1, 77.5] },
    color: "#ec4899",
    waypoints: [
      { name: "Qinghai Lake (Breeding)", coords: [36.9, 100.2], note: "Nesting on high saline alpine lakes" },
      { name: "Yarlung Tsangpo Valley", coords: [29.3, 91.1], note: "Pre-crossing altitude acclimatization" },
      { name: "Himalayan Crest / Everest Ridge", coords: [27.9, 86.9], note: "Flapping over 8,000m peaks in thin air" },
      { name: "Indo-Gangetic Plain, India", coords: [27.1, 77.5], note: "Wintering in rich marshlands" }
    ]
  },
  {
    id: "pacific-salmon",
    name: "Pacific Sockeye Salmon",
    species: "Oncorhynchus nerka",
    category: "Anadromous Odyssey",
    zone: "pelagic-ocean",
    totalDistance: "1,400 km Upstream (After 4,000 km in Ocean)",
    duration: "4-Year Life Cycle",
    heroFact: "Can sniff out the single drop of mineral water that marks the mountain stream where it hatched 4 years earlier!",
    summary: "Anadromous sockeye salmon hatch in freshwater gravel shallows, migrate to the North Pacific Ocean to spend 2-3 years growing to adult size, and then swim thousands of kilometers back to their exact natal stream. They battle roaring waterfalls, rapids, and grizzly bears, ceasing all feeding and turning crimson red before spawning and dying to nourish the forest.",
    whyTheyMigrate: "The open ocean has immense nutrient density allowing juveniles to rapidly grow large. Mountain headwaters are crystal clear, oxygen-rich, and free from ocean predators, providing optimal conditions for fragile eggs.",
    startPoint: { name: "Gulf of Alaska / Aleutian Basin", coords: [54.0, -145.0] },
    endPoint: { name: "Adams River Spawning Beds, BC Canada", coords: [50.9, -119.5] },
    color: "#ef4444",
    waypoints: [
      { name: "Gulf of Alaska Feeding Grounds", coords: [54.0, -145.0], note: "Ocean feeding on squid and krill" },
      { name: "Fraser River Estuary (Pacific Coast)", coords: [49.2, -123.2], note: "Osmoregulatory shift to freshwater" },
      { name: "Hell's Gate Canyon Rapids", coords: [49.7, -121.4], note: "Leaping upstream against roaring torrents" },
      { name: "Adams River Headwaters (Spawning)", coords: [50.9, -119.5], note: "Spawning on gravel beds, marine nutrient dispersal" }
    ]
  },
  {
    id: "saiga-antelope",
    name: "Saiga Antelope Steppe Traverse",
    species: "Saiga tatarica",
    category: "Steppe Nomad",
    zone: "arid-steppes",
    totalDistance: "1,200 km (750 mi)",
    duration: "Biannual Transition",
    heroFact: "Possesses an oversized inflatable nose that heats freezing winter air and filters desert dust!",
    summary: "The Saiga is a survivor of the Ice Age mammoth steppe. In herds of tens of thousands, they cross the expansive semi-deserts and dry steppes of Kazakhstan and Uzbekistan. In autumn, as harsh Siberian winds approach, they race south at speeds up to 80 km/h to escape lethal freezing ground conditions.",
    whyTheyMigrate: "To dodge 'dzhuts'—severe winter crust freezes where rain turns to ice over vegetation, starving entire populations. In spring, they migrate north to feast on lush short-lived steppe green-up.",
    startPoint: { name: "Betpak-Dala Steppe, Central Kazakhstan", coords: [46.8, 68.5] },
    endPoint: { name: "Ustyurt Plateau, Uzbekistan Border", coords: [43.5, 57.0] },
    color: "#d97706",
    waypoints: [
      { name: "Betpak-Dala Steppes (Spring Calving)", coords: [46.8, 68.5], note: "Mass synchronized birthing" },
      { name: "Turgay Depression", coords: [49.0, 64.0], note: "Summer grazing across semi-desert" },
      { name: "Aral Sea Basin Buffer", coords: [45.0, 60.5], note: "Autumn migration corridor" },
      { name: "Ustyurt Plateau (Winter Sanctuary)", coords: [43.5, 57.0], note: "Sheltering from Siberian blizzards" }
    ]
  },
  {
    id: "leatherback-turtle",
    name: "Pacific Leatherback Sea Turtle",
    species: "Dermochelys coriacea",
    category: "Reptilian Mariner",
    zone: "pelagic-ocean",
    totalDistance: "16,000 km (10,000 mi) Trans-Pacific",
    duration: "Multi-Year Foraging Circuit",
    heroFact: "Can dive 1,200 meters into near-freezing depths and maintain body heat thanks to countercurrent blood vessels!",
    summary: "Female leatherbacks lay eggs on tropical beaches in Indonesia and the Solomon Islands, then embark on an extraordinary trans-Pacific voyage across the entire Pacific basin to reach coastal waters of California and Oregon, where cold upwellings produce vast blooms of giant jellyfish.",
    whyTheyMigrate: "Tropical beaches have warm sand required for egg incubation, but lack sufficient adult food. California waters are packed with Chrysaora fuscescens jellyfish, allowing turtles to eat hundreds of pounds of jellyfish daily.",
    startPoint: { name: "Jamursba Medi Beach, Papua, Indonesia", coords: [-0.5, 132.5] },
    endPoint: { name: "Monterey Bay National Sanctuary, California", coords: [36.8, -122.0] },
    color: "#8b5cf6",
    waypoints: [
      { name: "Papua Nesting Beaches", coords: [-0.5, 132.5], note: "Laying clutches of eggs in tropical sand" },
      { name: "Mariana Trench Transit", coords: [11.3, 142.2], note: "Diving deep for pelagic siphonophores" },
      { name: "North Pacific Subtropical Gyre", coords: [28.0, 175.0], note: "Riding open ocean current highways" },
      { name: "Hawaiian Ridge Waters", coords: [23.0, -160.0], note: "Pelagic transition zone" },
      { name: "Monterey Bay, California", coords: [36.8, -122.0], note: "Feasting on summer jellyfish blooms" }
    ]
  }
];

window.MIGRATION_DRIVERS = MIGRATION_DRIVERS;
window.NAVIGATION_SENSES = NAVIGATION_SENSES;
window.GEOLOGICAL_ZONES = GEOLOGICAL_ZONES;
window.MIGRATION_ROUTES = MIGRATION_ROUTES;
