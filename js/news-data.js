/**
 * Groundbreaking Animal News & Scientific Breakthroughs Dataset
 * Curated from major peer-reviewed publications (Nature, Science, PNAS, Scientific Reports)
 * and landmark conservation milestones.
 */

const ANIMAL_NEWS = [
  {
    id: "news-1",
    title: "Elephants Call Each Other by Unique Personal 'Names'",
    category: "AI & Animal Language",
    date: "June 2024",
    source: "Nature Ecology & Evolution",
    badge: "Landmark Discovery",
    readingTime: "4 min read",
    thumbnail: "🐘",
    lead: "Groundbreaking AI acoustic analysis reveals wild African savanna elephants produce arbitrary vocal labels to address specific individual herd members.",
    summary: "For decades, humans believed arbitrary naming was exclusive to our species. Unlike dolphins or parrots that mimic the sound of the individual they call, African elephants in Kenya's Samburu and Amboseli reserves invent acoustic 'name' rumbles that do not imitate the recipient.",
    keyTakeaways: [
      "AI analyzed 469 elephant vocalizations recorded over 14 years in Kenya.",
      "Elephants responded actively and enthusiastically when hearing their own specific name call played back over speakers, while ignoring names directed at other elephants.",
      "This indicates abstract, symbolic cognitive communication formerly thought to be unique to human speech."
    ],
    whyItMatters: "Proves that complex symbolic language can evolve in large-brained mammals with rich social structures, bridging the cognitive divide between humans and wildlife.",
    authorities: "Colorado State University, Save the Elephants, ElephantVoices"
  },
  {
    id: "news-2",
    title: "Project CETI Decodes Sperm Whale 'Phonetic Alphabet'",
    category: "Marine Cognition",
    date: "May 2024",
    source: "Nature Communications",
    badge: "Ocean Breakthrough",
    readingTime: "5 min read",
    thumbnail: "🐋",
    lead: "Scientists discover that sperm whale clicks contain combinatorial vocal structures strikingly similar to human phonemes, vowels, and musical rhythm.",
    summary: "By analyzing thousands of recordings off the island of Dominica using machine learning, marine biologists discovered that sperm whale 'codas' (rapid click patterns) are far richer than previously recognized. Whales modulate their tempo ('rubato'), add extra rhythmic flourishes ('ornamentation'), and change their fundamental frequencies like human vowels.",
    keyTakeaways: [
      "Identified an inventory of over 140 distinct coda types assembled in systematic combinatorial permutations.",
      "Whales dynamically alter click patterns in real-time dialogue based on who is listening and who is speaking.",
      "First proof of a combinatorial vocal system in non-human marine life with communicative flexibility."
    ],
    whyItMatters: "Brings humanity closer than ever to deciphering a non-terrestrial language system among deep-sea leviathans.",
    authorities: "Project CETI, MIT CSAIL, National Geographic Society"
  },
  {
    id: "news-3",
    title: "Wild Orangutan 'Rakus' Documented Treating Open Wound With Medicinal Plant",
    category: "Tool Use & Medicine",
    date: "May 2024",
    source: "Scientific Reports (Max Planck Institute)",
    badge: "Evolutionary First",
    readingTime: "4 min read",
    thumbnail: "🦧",
    lead: "A wild Sumatran orangutan was observed chewing an antibacterial medicinal vine and applying the juice directly onto a deep facial wound until it healed completely.",
    summary: "Researchers in Gunung Leuser National Park observed an adult male orangutan named Rakus who sustained a severe facial injury during a fight. Rakus plucked leaves of Akar Kuning (Fibraurea tinctoria)—a known anti-inflammatory and pain-relieving vine—chewed them into a paste, and repeatedly dabbed the juice into his wound for over 30 minutes, finally covering the wound with a leaf mesh bandage.",
    keyTakeaways: [
      "First documented case of an animal treating an open wound using a pharmacologically active plant.",
      "The wound closed cleanly within 5 days and healed completely with zero bacterial infection within a month.",
      "Suggests medical self-treatment emerged in a common ancestor of great apes and humans millions of years ago."
    ],
    whyItMatters: "Provides tangible living evidence that pharmacology and wound surgery instincts predate modern human emergence.",
    authorities: "Max Planck Institute of Animal Behavior, Universitas Nasional Jakarta"
  },
  {
    id: "news-4",
    title: "Octopuses Form Cross-Species Hunting Packs With Fish—And Punch Slackers",
    category: "Animal Sociology",
    date: "September 2024",
    source: "Nature Ecology & Evolution",
    badge: "Fascinating Behavior",
    readingTime: "3 min read",
    thumbnail: "🐙",
    lead: "Underwater 3D tracking reveals octopuses lead complex hunting parties with multiple fish species, dividing labor and disciplining uncooperative partners.",
    summary: "In the Red Sea, researchers equipped with synchronized underwater camera rigs tracked day octopuses (Octopus cyanea) forming interspecies hunting alliances with goatfish and groupers. Fish act as scouts searching open reefs while the octopus flushes prey from tight coral crevices.",
    keyTakeaways: [
      "Labor is divided: goatfish locate prey, while the octopus makes executive navigational decisions.",
      "When a fish tries to free-ride without contributing or strays too close to the prize, the octopus delivers a swift physical punch with its tentacle.",
      "Demonstrates high-level social decision-making and cross-species coalition enforcement."
    ],
    whyItMatters: "Demolishes the myth that octopuses are purely solitary and incapable of complex social governance.",
    authorities: "University of Konstanz, Max Planck Institute, University of Sydney"
  },
  {
    id: "news-5",
    title: "Genetic Rescue Milestone: Cloned Endangered Ferret 'Antonia' Gives Birth",
    category: "Conservation Science",
    date: "November 2024",
    source: "US Fish & Wildlife Service & Revive & Restore",
    badge: "De-Extinction Victory",
    readingTime: "3 min read",
    thumbnail: "🦦",
    lead: "For the first time in North American history, a cloned individual of an endangered species has successfully produced healthy offspring.",
    summary: "Antonia, a black-footed ferret cloned from cryogenic cells frozen in 1988, gave birth to two healthy kits at the Smithsonian National Zoo & Conservation Biology Institute. Black-footed ferrets suffered severe genetic bottlenecks down to just 7 founding individuals, leaving the species vulnerable to diseases.",
    keyTakeaways: [
      "Antonia was cloned from genetic tissue preserved for 36 years in the San Diego Frozen Zoo.",
      "Her kits introduce crucial extinct gene variants back into the living breeding pool.",
      "Proves cryo-banking and cloning can rescue vanishing genetic diversity for endangered wildlife worldwide."
    ],
    whyItMatters: "Opens a powerful new frontier in preventing extinction and rejuvenating severely inbred populations.",
    authorities: "USFWS, San Diego Zoo Wildlife Alliance, Revive & Restore"
  },
  {
    id: "news-6",
    title: "Bumblebees Master Complex Puzzles & Culturally Pass Them to Hive Mates",
    category: "Cognitive Science",
    date: "March 2024",
    source: "Nature",
    badge: "Insect Brilliance",
    readingTime: "3 min read",
    thumbnail: "🐝",
    lead: "Researchers show bumblebees can learn multi-step tasks too difficult for any single bee to invent alone, proving cumulative culture in insects.",
    summary: "Scientists devised a two-step puzzle box where a bee had to press a blue lever to unlock a red lever to access sugar syrup. Untrained bees could never figure it out alone. But when a demonstrator bee was trained with step-by-step rewards, observer bees watched, learned the complete sequence, and passed it through the hive without further human training.",
    keyTakeaways: [
      "Challenged the orthodoxy that cumulative culture is unique to humans and great apes.",
      "Insects with brains smaller than a sesame seed can share complex learned technologies.",
      "Highlights the power of collective social cognition in invertebrates."
    ],
    whyItMatters: "Expands the biological definition of culture and intelligence across the entire animal tree of life.",
    authorities: "Queen Mary University of London, University of Sheffield"
  },
  {
    id: "news-7",
    title: "Deep Sea 'Dark Oxygen' Discovery Reveals Polymetallic Nodules Act as Batteries",
    category: "Abyssal Discoveries",
    date: "July 2024",
    source: "Nature Geoscience",
    badge: "Earth Science Shock",
    readingTime: "4 min read",
    thumbnail: "🌊",
    lead: "Oxygen is being generated 4,000 meters deep in total darkness on the Pacific seafloor by metal nodules splitting seawater molecules.",
    summary: "In the Clarion-Clipperton Zone in the Pacific Ocean, researchers found significant oxygen production where zero sunlight penetrates. Potato-sized polymetallic nodules (manganese, nickel, cobalt) generate electrical voltages of up to 0.95 volts. Clustered together, they act like natural geobatteries driving seawater electrolysis.",
    keyTakeaways: [
      "Overturns the longstanding belief that all planetary oxygen requires photosynthetic sunlight.",
      "Supports mysterious benthic fauna ecosystems thriving in the abyss without surface dependencies.",
      "Ignites international debate over seabed mining that could destroy these ancient oxygen-producing habitats."
    ],
    whyItMatters: "Rewrites the textbook on planetary geobiology and where complex aerobic life can exist, on Earth and icy moons like Europa.",
    authorities: "Scottish Association for Marine Science, Northwestern University"
  },
  {
    id: "news-8",
    title: "Iberian Lynx Makes Miraculous Recovery, Off the 'Endangered' List",
    category: "Conservation Success",
    date: "June 2024",
    source: "IUCN Red List of Threatened Species",
    badge: "Triumphant Comeback",
    readingTime: "3 min read",
    thumbnail: "🐾",
    lead: "After plummeting to just 62 individuals in 2001, the Iberian lynx population has surged past 2,000, prompting a historic downlisting to 'Vulnerable'.",
    summary: "In one of the greatest conservation turnarounds in history, coordinated European rewilding, rabbit prey restoration, safe highway underpasses, and captive breeding programs have repopulated Spain and Portugal with flourishing lynx packs.",
    keyTakeaways: [
      "Population exploded from 62 adult cats in 2001 to over 2,021 individuals in 2024.",
      "Restored across 14 distinct populations spanning Andalusia, Extremadura, and central Portugal.",
      "Serves as the global gold standard for habitat restoration and predator coexistence."
    ],
    whyItMatters: "Proves that dedicated, science-backed human action can pull magnificent apex species back from the very brink of extinction.",
    authorities: "IUCN, European Commission LIFE Programme, WWF"
  }
];

window.ANIMAL_NEWS = ANIMAL_NEWS;
