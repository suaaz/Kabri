/**
 * Guess the Animal Game: "Wild Guesser"
 * Interactive clue-based animal guessing game with 4 progressive clue tiers:
 * Hard -> Medium -> Easy -> Visual / Letter Clue.
 * Includes score streaks, lives, confetti celebrations, and educational reveal cards.
 */

const GAME_CREATURES = [
  {
    id: "platypus",
    name: "Platypus",
    scientificName: "Ornithorhynchus anatinus",
    icon: "🦆",
    category: "Mammal / Monotreme",
    status: "Near Threatened",
    clues: {
      hard: "I am one of only two living mammals that lay eggs instead of giving live birth, and males produce venom from calcaneus ankle spurs.",
      medium: "I have no stomach—my esophagus connects straight to my intestines. I hunt with my eyes and nostrils closed underwater using electroreception.",
      easy: "I look like nature mashed together a duck's bill, a beaver's paddle tail, and an otter's webbed feet.",
      visualHint: "P _ A _ Y _ U _ (Duck-billed swimmer from Down Under)"
    },
    funFact: "Under ultraviolet light, the fur of a platypus glows a brilliant biofluorescent blue-green!",
    habitat: "Freshwater streams of Eastern Australia & Tasmania"
  },
  {
    id: "axolotl",
    name: "Axolotl",
    scientificName: "Ambystoma mexicanum",
    icon: "🦎",
    category: "Amphibian",
    status: "Critically Endangered",
    clues: {
      hard: "I exhibit permanent neoteny—I spend my entire adult life in my larval juvenile form, never undergoing metamorphosis unless induced chemically.",
      medium: "I possess feather-like external gills branching from the sides of my head, and I can regenerate entire severed limbs, spinal cords, and heart ventricles.",
      easy: "Often called the 'Mexican Walking Fish', I have a permanent cute smile and pink feathery head frills.",
      visualHint: "A _ O _ O _ L (Pink smiling water creature of Lake Xochimilco)"
    },
    funFact: "Axolotls can accept organ and tissue transplants from other axolotls without any immunological rejection!",
    habitat: "Ancient canals of Lake Xochimilco, Mexico City"
  },
  {
    id: "pangolin",
    name: "Pangolin",
    scientificName: "Manis pentadactyla",
    icon: "🦔",
    category: "Mammal",
    status: "Critically Endangered",
    clues: {
      hard: "My tongue is anchored not in my mouth, but deep inside my pelvis near my ribcage, and can be longer than my entire body.",
      medium: "I am the only mammal on Earth completely covered in large protective keratin scales—the same protein as human fingernails.",
      easy: "When threatened, I curl into an impenetrable armored ball, earning me the title of 'scaly anteater'.",
      visualHint: "P _ N _ O _ I N (Armored scaly mammal that rolls into a tight sphere)"
    },
    funFact: "A single adult pangolin can consume up to 70 million ants and termites each year, acting as nature's pest control!",
    habitat: "Tropical forests & savannas across Africa and Asia"
  },
  {
    id: "honey-badger",
    name: "Honey Badger",
    scientificName: "Mellivora capensis",
    icon: "🦡",
    category: "Mustelid Mammal",
    status: "Least Concern",
    clues: {
      hard: "My nicotinic acetylcholine receptors have mutated to neutralize neurotoxic snake venoms like alpha-bungarotoxins.",
      medium: "My rubbery skin is up to 6mm thick, loose enough that if bitten from behind, I can turn 180 degrees inside my own skin to bite back.",
      easy: "Known in the Guinness Book of Records as the 'World's Most Fearless Creature', I fearlessly raid beehives and fight off pride of lions.",
      visualHint: "H _ N _ Y   B _ D _ E R (Tough black-and-white carnivore that never backs down)"
    },
    funFact: "Honey badgers partner with the Greater Honeyguide bird, which calls and leads the badger to bee nests!",
    habitat: "Sub-Saharan Africa, Middle East, and Indian subcontinent"
  },
  {
    id: "mantis-shrimp",
    name: "Peacock Mantis Shrimp",
    scientificName: "Odontodactylus scyllarus",
    icon: "🦞",
    category: "Crustacean",
    status: "Data Deficient",
    clues: {
      hard: "I possess 16 distinct color-receptive cones and can process circular polarized light, perceiving invisible cancer cells and satellite signals.",
      medium: "My club strike accelerates faster than a .22 caliber bullet, creating cavitation bubbles with flash-temperatures as hot as the surface of the Sun.",
      easy: "I am a vibrant rainbow-colored crustacean whose punch can shatter glass aquariums and crack open crab shells.",
      visualHint: "M _ N _ I S   S _ R _ M P (Rainbow oceanic boxer with supersonic punch)"
    },
    funFact: "Engineers study the structure of mantis shrimp clubs to design ultra-impact-resistant airplane bodies and military armor!",
    habitat: "Indo-Pacific coral reefs at depths of 3 to 40 meters"
  },
  {
    id: "narwhal",
    name: "Narwhal",
    scientificName: "Monodon monoceros",
    icon: "🐳",
    category: "Marine Mammal",
    status: "Least Concern",
    clues: {
      hard: "My famous feature is actually an overgrown canine tooth with up to 10 million sensory nerve endings exposed directly to seawater.",
      medium: "My spiral tusk can grow up to 10 feet long and functions as a sensory organ to gauge water salinity, temperature, and atmospheric pressure.",
      easy: "Often crowned the 'Unicorn of the Sea', I am an Arctic whale famous for a single long spiral ivory tusk.",
      visualHint: "N _ R _ H _ L (Arctic whale with a legendary spiral ivory tusk)"
    },
    funFact: "Occasionally, male narwhals develop two tusks instead of one! The tusk also flexes up to a foot without snapping.",
    habitat: "Icy coastal waters of the Arctic Ocean"
  },
  {
    id: "shoebill",
    name: "Shoebill Stork",
    scientificName: "Balaeniceps rex",
    icon: "🦅",
    category: "Avian",
    status: "Vulnerable",
    clues: {
      hard: "My acoustic greeting display sounds identically to rapid gunfire from a heavy automatic machine gun.",
      medium: "I can stand motionless like a statue for hours in papyrus swamps waiting to ambush juvenile Nile crocodiles and lungfish.",
      easy: "I look like a living prehistoric dinosaur bird with an enormous shoe-shaped bulbous bill ending in a sharp nail hook.",
      visualHint: "S _ O _ B _ L L (Towering swamp bird with a massive clog-shaped beak)"
    },
    funFact: "Shoebills are capable of decapitating 6-foot lungfish with a single snap of their sharp-edged bill!",
    habitat: "Freshwater swamps & papyrus marshes of East and Central Africa"
  },
  {
    id: "mimic-octopus",
    name: "Mimic Octopus",
    scientificName: "Thaumoctopus mimicus",
    icon: "🐙",
    category: "Cephalopod",
    status: "Data Deficient",
    clues: {
      hard: "I dynamically assess which predator threatens me and intentionally mimic that specific predator's natural enemy.",
      medium: "I can contort my 8 arms to impersonate lionfish, banded sea snakes, stingrays, and flatfish with perfect chromatic accuracy.",
      easy: "Discovered only in 1998, I am the ultimate shape-shifting magician of the shallow silt seabed.",
      visualHint: "M _ M _ C   O _ T _ P U S (Shape-shifting master of the ocean floor)"
    },
    funFact: "When attacked by damselfish, the octopus buries 6 arms and waves 2 banded arms in opposite directions to look like a venomous sea krait!",
    habitat: "Murky river mouths and sand flats of Indonesia and Malaysia"
  },
  {
    id: "capybara",
    name: "Capybara",
    scientificName: "Hydrochoerus hydrochaeris",
    icon: "🐹",
    category: "Rodent",
    status: "Least Concern",
    clues: {
      hard: "I am semi-aquatic with webbed feet and can stay submerged underwater for up to 5 minutes to evade jaguars.",
      medium: "I am famous for my supreme chill demeanor, regularly photographed serving as an armchair for birds, turtles, and even monkeys.",
      easy: "I am officially the largest living rodent on planet Earth, weighing up to 150 pounds.",
      visualHint: "C _ P _ B _ R A (Giant chill South American rodent loved worldwide)"
    },
    funFact: "Capybaras have constantly growing incisor teeth that they keep worn down by chewing bark and aquatic grasses!",
    habitat: "Dense forests and savannas near bodies of water across South America"
  },
  {
    id: "tardigrade",
    name: "Tardigrade (Water Bear)",
    scientificName: "Hypsibius dujardini",
    icon: "🔬",
    category: "Micro-Animal",
    status: "Abundant Globally",
    clues: {
      hard: "I enter a state called cryptobiosis, replacing cellular water with glass-forming proteins to survive 1,000 times lethal human gamma radiation.",
      medium: "I have survived 10 days in the open vacuum and freezing temperatures of outer space aboard a space shuttle mission.",
      easy: "I am a microscopic eight-legged 'water bear' that looks like a chubby, barrel-shaped vacuum cushion.",
      visualHint: "T _ R _ I G _ A D E (Indestructible microscopic eight-legged moss piglet)"
    },
    funFact: "Tardigrades can survive frozen in Antarctic ice for over 30 years and wake up within minutes when warmed in water!",
    habitat: "Mosses, lichens, glaciers, and deep sea trenches worldwide"
  },
  {
    id: "sloth",
    name: "Three-Toed Sloth",
    scientificName: "Bradypus tridactylus",
    icon: "🦥",
    category: "Mammal",
    status: "Least Concern",
    clues: {
      hard: "My metabolic rate is so low that it can take a full month for a single leaf to pass through my multi-chambered stomach.",
      medium: "I host an entire unique ecosystem of symbiotic green algae and specialized moths inside the microscopic grooves of my fur.",
      easy: "I only descend from my canopy perch once a week to poop, and I move so slowly that moss literally grows on my back.",
      visualHint: "S _ O _ H (Canopy dweller famous for supreme slow motion)"
    },
    funFact: "Sloths are surprisingly strong swimmers! In water, they can paddle three times faster than they can crawl on land.",
    habitat: "Tropical rainforest canopies of Central and South America"
  },
  {
    id: "aye-aye",
    name: "Aye-Aye",
    scientificName: "Daubentonia madagascariensis",
    icon: "🐒",
    category: "Lemur / Primate",
    status: "Endangered",
    clues: {
      hard: "I fill the ecological niche of woodpeckers in my native island through a foraging method known as percussive tapping.",
      medium: "My middle finger is elongated, skeletal, and rotates on a ball-and-socket joint to tap wood 8 times a second to find hollow grub channels.",
      easy: "I am a nocturnal lemur with gremlin-like ears, glowing amber eyes, and a skinny witch-like finger.",
      visualHint: "A _ E - A _ E (Nocturnal Madagascar lemur with a tapping skeletal finger)"
    },
    funFact: "The aye-aye's incisor teeth grow continuously throughout its life, just like those of rodents!",
    habitat: "Dense rainforests and deciduous forests of Madagascar"
  }
];

class WildGuesserGame {
  constructor() {
    this.creatures = [...GAME_CREATURES];
    this.currentIndex = 0;
    this.currentScore = 0;
    this.highScore = parseInt(localStorage.getItem('wild_guesser_high_score') || '0', 10);
    this.streak = 0;
    this.lives = 3;
    this.currentClueLevel = 1; // 1: Hard, 2: Medium, 3: Easy, 4: Visual
    this.isAnswered = false;
    this.gameMode = 'choice'; // 'choice' or 'type'

    this.initUI();
  }

  shuffleCreatures() {
    for (let i = this.creatures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.creatures[i], this.creatures[j]] = [this.creatures[j], this.creatures[i]];
    }
  }

  getCurrentCreature() {
    return this.creatures[this.currentIndex];
  }

  initUI() {
    this.shuffleCreatures();
    this.renderCurrentQuestion();
    this.updateScoreboard();
    this.setupEventListeners();
  }

  setupEventListeners() {
    const revealNextClueBtn = document.getElementById('game-reveal-clue-btn');
    if (revealNextClueBtn) {
      revealNextClueBtn.addEventListener('click', () => this.revealNextClue());
    }

    const nextRoundBtn = document.getElementById('game-next-round-btn');
    if (nextRoundBtn) {
      nextRoundBtn.addEventListener('click', () => this.nextRound());
    }

    const restartBtn = document.getElementById('game-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.restartGame());
    }

    const typeInput = document.getElementById('game-type-input');
    const typeSubmit = document.getElementById('game-type-submit');
    if (typeSubmit && typeInput) {
      typeSubmit.addEventListener('click', () => this.submitTypedGuess(typeInput.value));
      typeInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.submitTypedGuess(typeInput.value);
      });
    }

    const modeChoiceBtn = document.getElementById('game-mode-choice');
    const modeTypeBtn = document.getElementById('game-mode-type');
    if (modeChoiceBtn && modeTypeBtn) {
      modeChoiceBtn.addEventListener('click', () => {
        this.gameMode = 'choice';
        modeChoiceBtn.classList.add('active');
        modeTypeBtn.classList.remove('active');
        document.getElementById('game-choice-container').classList.remove('hidden');
        document.getElementById('game-type-container').classList.add('hidden');
      });
      modeTypeBtn.addEventListener('click', () => {
        this.gameMode = 'type';
        modeTypeBtn.classList.add('active');
        modeChoiceBtn.classList.remove('active');
        document.getElementById('game-choice-container').classList.add('hidden');
        document.getElementById('game-type-container').classList.remove('hidden');
        if (typeInput) typeInput.focus();
      });
    }
  }

  getPointsForCurrentClue() {
    switch (this.currentClueLevel) {
      case 1: return 100;
      case 2: return 75;
      case 3: return 50;
      case 4: return 25;
      default: return 25;
    }
  }

  renderCurrentQuestion() {
    this.isAnswered = false;
    this.currentClueLevel = 1;
    const creature = this.getCurrentCreature();

    // Reset UI visibility
    document.getElementById('game-result-card').classList.add('hidden');
    document.getElementById('game-controls-card').classList.remove('hidden');
    document.getElementById('game-reveal-clue-btn').disabled = false;
    document.getElementById('game-reveal-clue-btn').classList.remove('opacity-50');

    // Update potential score badge
    this.updatePointsBadge();

    // Clue 1 (Hard)
    const clue1El = document.getElementById('clue-hard-text');
    clue1El.textContent = creature.clues.hard;

    // Clue 2 (Medium)
    const clue2El = document.getElementById('clue-medium-text');
    clue2El.textContent = "🔒 Click 'Unlock Clue' below to reveal habitat & behavioral clues (-25 pts)";
    document.getElementById('clue-medium-box').classList.add('locked');
    document.getElementById('clue-medium-box').classList.remove('unlocked');

    // Clue 3 (Easy)
    const clue3El = document.getElementById('clue-easy-text');
    clue3El.textContent = "🔒 Locked clue (-25 pts)";
    document.getElementById('clue-easy-box').classList.add('locked');
    document.getElementById('clue-easy-box').classList.remove('unlocked');

    // Clue 4 (Visual/Scramble)
    const clue4El = document.getElementById('clue-visual-text');
    clue4El.textContent = "🔒 Locked final anagram clue (-25 pts)";
    document.getElementById('clue-visual-box').classList.add('locked');
    document.getElementById('clue-visual-box').classList.remove('unlocked');

    // Render Choice Options
    this.renderChoiceOptions(creature);

    // Reset type input
    const typeInput = document.getElementById('game-type-input');
    if (typeInput) typeInput.value = '';

    // Creature indicator
    document.getElementById('game-round-indicator').textContent = `Creature ${this.currentIndex + 1} of ${this.creatures.length}`;
  }

  renderChoiceOptions(currentCreature) {
    const container = document.getElementById('game-choice-container');
    if (!container) return;
    container.innerHTML = '';

    // Pick 3 random distractors
    const otherCreatures = this.creatures.filter(c => c.id !== currentCreature.id);
    const shuffledOthers = otherCreatures.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [currentCreature, ...shuffledOthers].sort(() => 0.5 - Math.random());

    options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'game-option-btn';
      btn.innerHTML = `
        <span class="option-icon">${opt.icon}</span>
        <span class="option-name">${opt.name}</span>
      `;
      btn.addEventListener('click', () => this.handleGuess(opt.id, btn));
      container.appendChild(btn);
    });
  }

  revealNextClue() {
    if (this.currentClueLevel >= 4 || this.isAnswered) return;

    this.currentClueLevel++;
    const creature = this.getCurrentCreature();

    if (window.soundCtrl) window.soundCtrl.playClueReveal();

    if (this.currentClueLevel === 2) {
      const box = document.getElementById('clue-medium-box');
      box.classList.remove('locked');
      box.classList.add('unlocked');
      document.getElementById('clue-medium-text').textContent = creature.clues.medium;
    } else if (this.currentClueLevel === 3) {
      const box = document.getElementById('clue-easy-box');
      box.classList.remove('locked');
      box.classList.add('unlocked');
      document.getElementById('clue-easy-text').textContent = creature.clues.easy;
    } else if (this.currentClueLevel === 4) {
      const box = document.getElementById('clue-visual-box');
      box.classList.remove('locked');
      box.classList.add('unlocked');
      document.getElementById('clue-visual-text').textContent = creature.clues.visualHint;

      const btn = document.getElementById('game-reveal-clue-btn');
      btn.disabled = true;
      btn.classList.add('opacity-50');
      btn.innerHTML = `<span>All Clues Revealed!</span>`;
    }

    this.updatePointsBadge();
  }

  updatePointsBadge() {
    const badge = document.getElementById('game-potential-points');
    if (badge) {
      badge.textContent = `+${this.getPointsForCurrentClue()} pts`;
    }
  }

  submitTypedGuess(val) {
    if (this.isAnswered || !val.trim()) return;
    const cleanGuess = val.trim().toLowerCase();
    const creature = this.getCurrentCreature();
    const isCorrect = cleanGuess === creature.name.toLowerCase() || 
                      cleanGuess.includes(creature.name.toLowerCase()) || 
                      creature.name.toLowerCase().includes(cleanGuess);
    
    this.handleGuessOutcome(isCorrect);
  }

  handleGuess(selectedId, buttonEl) {
    if (this.isAnswered) return;
    const creature = this.getCurrentCreature();
    const isCorrect = selectedId === creature.id;

    if (buttonEl) {
      if (isCorrect) {
        buttonEl.classList.add('correct');
      } else {
        buttonEl.classList.add('incorrect');
      }
    }

    this.handleGuessOutcome(isCorrect);
  }

  handleGuessOutcome(isCorrect) {
    this.isAnswered = true;
    const creature = this.getCurrentCreature();

    // Disable all option buttons
    const allBtns = document.querySelectorAll('.game-option-btn');
    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent.includes(creature.name)) {
        btn.classList.add('correct');
      }
    });

    if (isCorrect) {
      // Points calculation
      const pts = this.getPointsForCurrentClue();
      this.streak++;
      const streakBonus = Math.min(this.streak * 10, 50);
      const roundEarned = pts + streakBonus;

      this.currentScore += roundEarned;
      if (this.currentScore > this.highScore) {
        this.highScore = this.currentScore;
        localStorage.setItem('wild_guesser_high_score', this.highScore);
      }

      if (window.soundCtrl) {
        window.soundCtrl.playCorrect();
        setTimeout(() => window.soundCtrl.playFanfare(), 300);
      }

      this.triggerConfetti();
      this.showResultCard(true, roundEarned, streakBonus);
    } else {
      this.lives--;
      this.streak = 0;

      if (window.soundCtrl) window.soundCtrl.playWrong();

      if (this.lives <= 0) {
        this.showGameOverModal();
        return;
      }

      this.showResultCard(false, 0, 0);
    }

    this.updateScoreboard();
  }

  showResultCard(wasCorrect, ptsEarned, streakBonus) {
    const creature = this.getCurrentCreature();
    const resultCard = document.getElementById('game-result-card');
    const controlsCard = document.getElementById('game-controls-card');

    controlsCard.classList.add('hidden');
    resultCard.classList.remove('hidden');

    const titleEl = document.getElementById('result-card-title');
    const badgeEl = document.getElementById('result-card-badge');

    if (wasCorrect) {
      titleEl.innerHTML = `🎉 Brilliant! You discovered the <strong>${creature.name}</strong>!`;
      titleEl.className = 'result-title success';
      badgeEl.textContent = `+${ptsEarned} Points! (Streak bonus: +${streakBonus})`;
      badgeEl.className = 'result-badge success';
    } else {
      titleEl.innerHTML = `❌ Nice try! The mystery creature was the <strong>${creature.name}</strong>!`;
      titleEl.className = 'result-title danger';
      badgeEl.textContent = `Lost 1 Heart • 0 Points`;
      badgeEl.className = 'result-badge danger';
    }

    document.getElementById('result-creature-icon').textContent = creature.icon;
    document.getElementById('result-creature-name').textContent = creature.name;
    document.getElementById('result-creature-scientific').textContent = creature.scientificName;
    document.getElementById('result-creature-habitat').textContent = creature.habitat;
    document.getElementById('result-creature-status').textContent = creature.status;
    document.getElementById('result-creature-fact').textContent = creature.funFact;
  }

  showGameOverModal() {
    const resultCard = document.getElementById('game-result-card');
    const controlsCard = document.getElementById('game-controls-card');

    controlsCard.classList.add('hidden');
    resultCard.classList.remove('hidden');

    const creature = this.getCurrentCreature();
    const titleEl = document.getElementById('result-card-title');
    const badgeEl = document.getElementById('result-card-badge');

    titleEl.innerHTML = `💔 Game Over! The last creature was the <strong>${creature.name}</strong>.`;
    titleEl.className = 'result-title danger';
    badgeEl.textContent = `Final Score: ${this.currentScore} points`;
    badgeEl.className = 'result-badge warning';

    document.getElementById('result-creature-icon').textContent = creature.icon;
    document.getElementById('result-creature-name').textContent = creature.name;
    document.getElementById('result-creature-scientific').textContent = creature.scientificName;
    document.getElementById('result-creature-habitat').textContent = creature.habitat;
    document.getElementById('result-creature-status').textContent = creature.status;
    document.getElementById('result-creature-fact').textContent = creature.funFact;

    const nextBtn = document.getElementById('game-next-round-btn');
    nextBtn.textContent = 'Play Again';
    nextBtn.onclick = () => this.restartGame();
  }

  nextRound() {
    this.currentIndex++;
    if (this.currentIndex >= this.creatures.length) {
      // Completed all creatures!
      this.shuffleCreatures();
      this.currentIndex = 0;
    }
    const nextBtn = document.getElementById('game-next-round-btn');
    nextBtn.textContent = 'Next Mystery Creature →';
    nextBtn.onclick = () => this.nextRound();

    const clueBtn = document.getElementById('game-reveal-clue-btn');
    clueBtn.innerHTML = `<span>💡 Unlock Next Clue (-25 pts)</span>`;

    this.renderCurrentQuestion();
  }

  restartGame() {
    this.currentScore = 0;
    this.lives = 3;
    this.streak = 0;
    this.currentIndex = 0;
    this.shuffleCreatures();

    const nextBtn = document.getElementById('game-next-round-btn');
    nextBtn.textContent = 'Next Mystery Creature →';
    nextBtn.onclick = () => this.nextRound();

    const clueBtn = document.getElementById('game-reveal-clue-btn');
    clueBtn.innerHTML = `<span>💡 Unlock Next Clue (-25 pts)</span>`;

    this.updateScoreboard();
    this.renderCurrentQuestion();
  }

  updateScoreboard() {
    const scoreEl = document.getElementById('game-score-display');
    const highEl = document.getElementById('game-high-score-display');
    const streakEl = document.getElementById('game-streak-display');
    const livesEl = document.getElementById('game-lives-display');

    if (scoreEl) scoreEl.textContent = this.currentScore;
    if (highEl) highEl.textContent = this.highScore;
    if (streakEl) streakEl.textContent = `🔥 ${this.streak}`;
    if (livesEl) {
      livesEl.textContent = '❤️'.repeat(Math.max(0, this.lives)) + '🖤'.repeat(Math.max(0, 3 - this.lives));
    }
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.wildGuesser = new WildGuesserGame();
});
