# 🐾 Kabri FaunaSphere: Animal Kingdom Odyssey & Facts Hub

An engaging, clean, attention-grabbing interactive website designed for animal lovers. Full of verified zoological science, mind-blowing animal facts, groundbreaking research discoveries, a clue-based guessing game, and an interactive global migration map traversing Earth's geological zones.

Built with **zero build dependencies** (pure modern HTML5, CSS3, ES6 JavaScript, Web Audio API, and Leaflet.js), making it **100% ready for instant hosting on GitHub Pages**!

---

## ✨ Features & Architecture

### 1. 🤯 Mind-Blowing & Fun Animal Facts
- **3D Flip Cards:** Click any fact card to flip between the provocative teaser and the verified zoological reality.
- **Categorized Library:** Filter by *Mind-Bending*, *Superpowers*, *Deep Ocean*, *Cute & Quirky*, *Extreme Survival*, and *Intelligence*.
- **Interactive Search & Random Fact Machine:** Instantly filter by keyword or click `🎲 Surprise Fact!` with sound effects.
- **Daily Wild Marvel Banner:** Dynamic daily spotlight with one-click clipboard copying and favorite bookmarking.

### 2. 📰 Groundbreaking Animal News (2024–2026)
- **Peer-Reviewed Breakthroughs:** Curated from journals such as *Nature*, *Science*, and *PNAS*.
  - *Elephants Call Each Other by Unique Personal Names* (Arbitrary AI acoustic analysis in Kenya)
  - *Sperm Whales Use Combinatorial Phonetic Alphabet* (Project CETI & MIT CSAIL)
  - *Wild Orangutan 'Rakus' Treats Flesh Wound with Medicinal Plant Poultice*
  - *Octopuses Hunt in Cross-Species Packs and Punch Slackers*
  - *Historic De-Extinction Milestone: Cloned Black-Footed Ferret Gives Birth to Kits*
  - *Deep Sea Discovery: "Dark Oxygen" Produced by Seafloor Nodules Without Sunlight*
  - *The Iberian Lynx Comeback: Downlisted from Endangered to Vulnerable*
- **Interactive Reader Modal:** Deep dive into each discovery's methodology, key findings, and global conservation impact.

### 3. 🎮 "Wild Guesser: Mystery Creature" Clue Game
- **Progressive Clue Tiers:**
  - **Tier 1 (Hard):** Cryptic anatomical clues (worth **100 pts**)
  - **Tier 2 (Medium):** Biome and behavioral clues (**75 pts**)
  - **Tier 3 (Easy):** Iconic signature trait clues (**50 pts**)
  - **Tier 4 (Visual Hint):** Anagram letters and silhouette hints (**25 pts**)
- **Two Game Modes:** Quick *Multiple Choice* or challenge yourself in *Type Guess*.
- **Gamification:** Streak multipliers, high score tracking via `localStorage`, 3 hearts/lives system, celebratory confetti cannon, and custom Web Audio fanfares.
- **Educational Spotlight Card:** Reveals scientific taxonomy, IUCN conservation status, and bonus trivia upon solving each creature.

### 4. 🌍 Animal Migration & Geological Zones Explorer
- **Interactive Global Map (Leaflet.js):**
  - Animated glowing polyline trajectories tracking legendary migration corridors.
  - Interactive waypoints with details on departure points, refuel stopovers, and arrival zones.
  - One-click `✈️ Simulate Odyssey` route animation that traces the journey step-by-step with sound effects.
- **10+ Epic Migration Routes:**
  - *Arctic Tern:* The 96,000 km pole-to-pole perpetual summer odyssey.
  - *Monarch Butterfly:* The 4-generation 4,800 km flight to the Oyamel fir forests of Mexico.
  - *The Great Serengeti Migration:* 1.5 million wildebeest in a clockwise survival loop.
  - *Humpback Whale:* Polar krill feasts to tropical shallow calving lagoons.
  - *Bar-Headed Goose:* Flapping over Mount Everest's summit in thin air at 29,000 ft.
  - *Pacific Sockeye Salmon, Leatherback Sea Turtle, and Saiga Antelope.*
- **Why Animals Migrate:** Deep-dive into the 4 evolutionary forces: *Resource Pulses*, *Thermal Refuges*, *Nursery Sanctuaries*, and *Predator Swamping*.
- **Nature's Navigational Super-Senses:** *Quantum Magnetoreception* (cryptochrome-4), *Celestial/Solar Compasses*, *Olfactory Geochemical Highways*, and *Infrasound Detection*.
- **Geological & Biogeographical Zones:** Breakdown of the *Polar Tundra*, *Boreal Taiga*, *Tropical Savannas*, *Pelagic Oceans*, *Alpine Highlands*, and *Arid Steppes*.

### 5. 🎨 Design, Audio & Polish
- **Dynamic Themes:** Instant Dark / Light mode toggle with smooth CSS variable transitions.
- **Zero-Dependency Web Audio Synthesizer:** Built-in audio generator for clicks, bird chirps, dolphin sonar, and victory fanfares—no missing MP3 files or CORS errors!
- **Mobile Responsive:** Works seamlessly on smartphones, tablets, laptops, and ultra-wide screens.

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

Because this website uses pure modern HTML5, CSS3, and JavaScript with CDN libraries, **no compilation or npm build step is required**. It deploys to GitHub Pages in seconds!

### Step 1: Initialize Git and Commit
Open PowerShell or your terminal in this project folder (`Kabri/`) and run:

```bash
# 1. Initialize git repository (if not already done)
git init

# 2. Add all project files
git add .

# 3. Create initial commit
git commit -m "Initial commit: Kabri FaunaSphere website"
```

### Step 2: Push to Your GitHub Account
1. Go to [GitHub.com](https://github.com) and click **New Repository**.
2. Name it (for example: `faunasphere` or `kabri-faunasphere`). Keep it **Public**.
3. Do **not** initialize with a README, .gitignore, or license (we already created them).
4. Run the commands shown on GitHub:

```bash
# Replace YOUR-USERNAME and REPO-NAME with your GitHub details:
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (2 Clicks!)
1. On your GitHub repository page, click the **Settings** tab (gear icon at the top).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment** > **Source**:
   - Select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/(root)`.
   - Click **Save**.
4. *(Alternative)* You can also select **GitHub Actions** as the source, since we've already included `.github/workflows/pages.yml`!
5. Within 1 to 2 minutes, GitHub will display your live website URL:
   `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 💻 How to Preview Locally

You can open `index.html` directly in your browser:

### Option A: Double-Click
Simply double-click `index.html` in your file explorer.

### Option B: PowerShell One-Liner
From PowerShell in the `Kabri/` directory:
```powershell
Start-Process index.html
```

---

## 📂 Project Directory Structure

```
Kabri/
├── index.html                   # Main single-page web app entrypoint
├── css/
│   ├── style.css                # Custom responsive design system, animations & dark/light theme
│   └── leaflet-custom.css       # Map popups, polyline dash animations & map styling
├── js/
│   ├── app.js                   # Application controller, theme toggling, search, modal
│   ├── audio.js                 # Web Audio API synthesizer for chirps, sonars, and sound FX
│   ├── facts-data.js            # 20+ verified mind-blowing animal facts dataset
│   ├── news-data.js             # Groundbreaking peer-reviewed animal science news (2024-2026)
│   ├── migration-data.js        # Geological zones, evolutionary drivers & GPS routes
│   ├── game.js                  # "Wild Guesser" interactive 4-tier clue game logic
│   └── migration-map.js         # Leaflet interactive world map controller & animations
├── .github/
│   └── workflows/
│       └── pages.yml            # Automated GitHub Pages CI/CD workflow
├── .gitignore
└── README.md                    # Documentation & hosting guide
```

---

## 📜 Citations & Scientific References
- **Elephant Personal Names:** *Nature Ecology & Evolution* (2024), Colorado State University & Save the Elephants.
- **Sperm Whale Phonetic Dialects:** *Nature Communications* (2024), Project CETI & MIT CSAIL.
- **Chimpanzee / Orangutan Self-Medication:** *Scientific Reports* (2024), Max Planck Institute of Animal Behavior.
- **Interspecies Hunting Coalitions:** *Nature Ecology & Evolution* (2024), University of Konstanz.
- **Bumblebee Cultural Transmission:** *Nature* (2024), Queen Mary University of London.
- **Deep-Sea Dark Oxygen:** *Nature Geoscience* (2024), Scottish Association for Marine Science.
- **Conservation Status:** *IUCN Red List of Threatened Species*.
