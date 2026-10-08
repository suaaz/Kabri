/**
 * Core Application Controller for FaunaVerse / Kabri WildSphere
 * Manages theme switching, sound toggle, interactive facts explorer,
 * news reader modal, bookmarks, and UI micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSoundToggle();
  initFactsExplorer();
  initNewsHub();
  initStatsCounters();
  initMobileNav();
  initAnimalCallButtons();
  initDailyFact();
});

/* ========================================================
   THEME TOGGLING (DARK / LIGHT)
======================================================== */
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('fauna_theme') || 'dark';

  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('fauna_theme', isDark ? 'dark' : 'light');
      updateThemeIcon();

      // Update map tiles if map exists
      if (window.migrationMapCtrl) {
        window.migrationMapCtrl.updateTileLayer();
      }

      if (window.soundCtrl) window.soundCtrl.playPop();
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  const isDark = document.documentElement.classList.contains('dark');
  icon.textContent = isDark ? '☀️' : '🌙';
}

/* ========================================================
   AUDIO CONTROLLER TOGGLE
======================================================== */
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  const updateSoundUI = () => {
    const isMuted = window.soundCtrl ? window.soundCtrl.isMuted : false;
    soundBtn.innerHTML = isMuted ? '🔇 <span class="nav-btn-text">Sound Off</span>' : '🔊 <span class="nav-btn-text">Sound On</span>';
    soundBtn.classList.toggle('muted', isMuted);
  };

  updateSoundUI();

  soundBtn.addEventListener('click', () => {
    if (window.soundCtrl) {
      window.soundCtrl.toggleMute();
      updateSoundUI();
      if (!window.soundCtrl.isMuted) window.soundCtrl.playPop();
    }
  });
}

/* ========================================================
   DAILY FACT SPOTLIGHT
======================================================== */
function initDailyFact() {
  const dailyContainer = document.getElementById('daily-fact-container');
  if (!dailyContainer || !window.ANIMAL_FACTS) return;

  // Pick deterministic fact based on day of year
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const dailyFact = window.ANIMAL_FACTS[dayOfYear % window.ANIMAL_FACTS.length];

  dailyContainer.innerHTML = `
    <div class="daily-fact-banner">
      <div class="daily-badge">⭐ Daily Wild Marvel</div>
      <div class="daily-fact-body">
        <span class="daily-icon">${dailyFact.icon}</span>
        <div class="daily-content">
          <h4>${dailyFact.animal}: ${dailyFact.teaser}</h4>
          <p>${dailyFact.fact}</p>
        </div>
      </div>
      <div class="daily-actions">
        <span class="daily-meta">${dailyFact.scientificName} • ${dailyFact.badge}</span>
        <button class="btn-share-fact" onclick="shareFact('${encodeURIComponent(dailyFact.fact)}')">
          📋 Copy Fact
        </button>
      </div>
    </div>
  `;
}

/* ========================================================
   INTERACTIVE FACTS EXPLORER
======================================================== */
let activeCategory = 'all';
let factSearchQuery = '';

function initFactsExplorer() {
  const factsGrid = document.getElementById('facts-grid');
  const categoryFilters = document.getElementById('facts-category-filters');
  const searchInput = document.getElementById('facts-search-input');
  const randomFactBtn = document.getElementById('btn-random-fact');

  if (categoryFilters) {
    categoryFilters.querySelectorAll('.category-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryFilters.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        renderFactsList();
        if (window.soundCtrl) window.soundCtrl.playPop();
      });
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      factSearchQuery = e.target.value.toLowerCase().trim();
      renderFactsList();
    });
  }

  if (randomFactBtn) {
    randomFactBtn.addEventListener('click', () => {
      if (!window.ANIMAL_FACTS || window.ANIMAL_FACTS.length === 0) return;
      const rand = window.ANIMAL_FACTS[Math.floor(Math.random() * window.ANIMAL_FACTS.length)];
      highlightRandomFact(rand);
      if (window.soundCtrl) window.soundCtrl.playClueReveal();
    });
  }

  renderFactsList();
}

function renderFactsList() {
  const container = document.getElementById('facts-grid');
  if (!container || !window.ANIMAL_FACTS) return;

  const filtered = window.ANIMAL_FACTS.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesQuery = !factSearchQuery || 
      item.animal.toLowerCase().includes(factSearchQuery) ||
      item.fact.toLowerCase().includes(factSearchQuery) ||
      item.tag.toLowerCase().includes(factSearchQuery);
    return matchesCategory && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">🔍</span>
        <h3>No animal facts found</h3>
        <p>Try a different keyword or category!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="fact-card" data-fact-id="${item.id}" onclick="flipFactCard(this)">
      <div class="fact-card-inner">
        <!-- Front of Card -->
        <div class="fact-card-front">
          <div class="fact-card-header">
            <span class="fact-tag">${item.tag}</span>
            <span class="fact-score">🔥 ${item.funScore}/100</span>
          </div>
          <div class="fact-animal-hero">
            <span class="fact-emoji">${item.icon}</span>
            <h3>${item.animal}</h3>
            <span class="fact-scientific">${item.scientificName}</span>
          </div>
          <p class="fact-teaser">${item.teaser}</p>
          <div class="fact-card-footer">
            <span class="click-hint">🔄 Click to Flip for Truth</span>
            <span class="fact-biome-pill">${item.biome}</span>
          </div>
        </div>

        <!-- Back of Card -->
        <div class="fact-card-back">
          <div class="fact-card-header">
            <span class="fact-badge-pill">${item.badge}</span>
            <span class="fact-back-close">✕</span>
          </div>
          <h4 class="fact-back-title">The Zoological Reality:</h4>
          <p class="fact-back-body">${item.fact}</p>
          <div class="fact-back-footer" onclick="event.stopPropagation()">
            <button class="btn-fact-action" onclick="shareFact('${encodeURIComponent(item.fact)}')">
              📋 Copy Fact
            </button>
            <button class="btn-fact-action bookmark-btn" onclick="toggleBookmarkFact(${item.id}, this)">
              ${isFactBookmarked(item.id) ? '❤️ Saved' : '🤍 Bookmark'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function flipFactCard(cardEl) {
  cardEl.classList.toggle('flipped');
  if (window.soundCtrl) window.soundCtrl.playPop();
}

function highlightRandomFact(factItem) {
  const container = document.getElementById('facts-grid');
  if (!container) return;

  // Reset filter to all
  activeCategory = 'all';
  factSearchQuery = '';
  document.querySelectorAll('#facts-category-filters .category-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });
  const searchInput = document.getElementById('facts-search-input');
  if (searchInput) searchInput.value = '';

  renderFactsList();

  setTimeout(() => {
    const card = document.querySelector(`[data-fact-id="${factItem.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('pulse-highlight');
      card.classList.add('flipped');
      setTimeout(() => card.classList.remove('pulse-highlight'), 2000);
    }
  }, 100);
}

function shareFact(encodedFact) {
  const text = decodeURIComponent(encodedFact);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Fact copied to clipboard! 📋');
    });
  } else {
    showToast('Fact copied! 📋');
  }
}

function isFactBookmarked(id) {
  const bookmarks = JSON.parse(localStorage.getItem('fauna_bookmarks') || '[]');
  return bookmarks.includes(id);
}

function toggleBookmarkFact(id, btnEl) {
  let bookmarks = JSON.parse(localStorage.getItem('fauna_bookmarks') || '[]');
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(b => b !== id);
    if (btnEl) btnEl.innerHTML = '🤍 Bookmark';
    showToast('Removed from favorites');
  } else {
    bookmarks.push(id);
    if (btnEl) btnEl.innerHTML = '❤️ Saved';
    showToast('Saved to your favorites! ❤️');
  }
  localStorage.setItem('fauna_bookmarks', JSON.stringify(bookmarks));
  if (window.soundCtrl) window.soundCtrl.playPop();
}

/* ========================================================
   GROUNDBREAKING NEWS HUB
======================================================== */
let activeNewsCategory = 'all';

function initNewsHub() {
  const newsGrid = document.getElementById('news-grid');
  const newsFilters = document.getElementById('news-category-filters');

  if (newsFilters) {
    newsFilters.querySelectorAll('.news-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        newsFilters.querySelectorAll('.news-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeNewsCategory = btn.dataset.category;
        renderNewsList();
        if (window.soundCtrl) window.soundCtrl.playPop();
      });
    });
  }

  renderNewsList();
  setupNewsModal();
}

function renderNewsList() {
  const container = document.getElementById('news-grid');
  if (!container || !window.ANIMAL_NEWS) return;

  const filtered = window.ANIMAL_NEWS.filter(item => {
    return activeNewsCategory === 'all' || item.category.toLowerCase().includes(activeNewsCategory.toLowerCase());
  });

  container.innerHTML = filtered.map(item => `
    <article class="news-card" onclick="openNewsModal('${item.id}')">
      <div class="news-card-thumb">
        <span class="news-large-emoji">${item.thumbnail}</span>
        <span class="news-badge-floating">${item.badge}</span>
      </div>
      <div class="news-card-content">
        <div class="news-meta-row">
          <span class="news-source">🏛️ ${item.source}</span>
          <span class="news-date">${item.date}</span>
        </div>
        <h3 class="news-card-title">${item.title}</h3>
        <p class="news-card-lead">${item.lead}</p>
        <div class="news-card-footer">
          <span class="news-read-time">⏱️ ${item.readingTime}</span>
          <span class="news-read-cta">Read Investigation →</span>
        </div>
      </div>
    </article>
  `).join('');
}

function setupNewsModal() {
  const modal = document.getElementById('news-reader-modal');
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = document.getElementById('modal-backdrop');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => closeNewsModal());
  }
  if (overlay) {
    overlay.addEventListener('click', () => closeNewsModal());
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNewsModal();
  });
}

function openNewsModal(newsId) {
  const news = (window.ANIMAL_NEWS || []).find(n => n.id === newsId);
  const modal = document.getElementById('news-reader-modal');
  const modalBody = document.getElementById('modal-content-body');
  if (!news || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-news-header">
      <div class="modal-category-row">
        <span class="badge-accent">${news.badge}</span>
        <span class="meta-tag">🔬 ${news.category}</span>
        <span class="meta-tag">📅 ${news.date}</span>
      </div>
      <h2>${news.title}</h2>
      <p class="modal-meta-source">Published via <strong>${news.source}</strong> | Research conducted by: <em>${news.authorities}</em></p>
    </div>

    <div class="modal-hero-quote">
      "${news.lead}"
    </div>

    <div class="modal-section">
      <h3>The Discovery & Methodology</h3>
      <p>${news.summary}</p>
    </div>

    <div class="modal-section">
      <h3>Key Scientific Breakthroughs</h3>
      <ul class="modal-takeaways-list">
        ${news.keyTakeaways.map(t => `<li><span class="bullet-check">✓</span><span>${t}</span></li>`).join('')}
      </ul>
    </div>

    <div class="modal-section highlight-box">
      <h3>Why This Matters For Humanity & Conservation</h3>
      <p>${news.whyItMatters}</p>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.soundCtrl) window.soundCtrl.playPop();
}

function closeNewsModal() {
  const modal = document.getElementById('news-reader-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/* ========================================================
   ANIMATED STATS COUNTER
======================================================== */
function initStatsCounters() {
  const statElements = document.querySelectorAll('.counter-val');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statElements.forEach(el => {
          const target = parseInt(el.dataset.target, 10);
          const duration = 1500;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString();
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString();
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const section = document.getElementById('stats-ticker-section');
  if (section) observer.observe(section);
}

/* ========================================================
   MOBILE NAVIGATION
======================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobile-nav-toggle');
  const navDrawer = document.getElementById('mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (toggleBtn && navDrawer) {
    toggleBtn.addEventListener('click', () => {
      navDrawer.classList.toggle('open');
      toggleBtn.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navDrawer.classList.remove('open');
        toggleBtn.classList.remove('active');
      });
    });
  }
}

/* ========================================================
   PLAYFUL ANIMAL SOUND CALLS
======================================================== */
function initAnimalCallButtons() {
  document.querySelectorAll('[data-sound-call]').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.soundCall;
      if (window.soundCtrl) {
        if (type === 'chirp') window.soundCtrl.playBirdChirp();
        else if (type === 'sonar') window.soundCtrl.playDolphinSonar();
        else if (type === 'chime') window.soundCtrl.playClueReveal();
      }
    });
  });
}

/* ========================================================
   TOAST NOTIFICATION HELPER
======================================================== */
function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'global-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('visible');

  setTimeout(() => {
    toast.classList.remove('visible');
  }, 2600);
}

// Global exposure for inline events
window.flipFactCard = flipFactCard;
window.shareFact = shareFact;
window.toggleBookmarkFact = toggleBookmarkFact;
window.openNewsModal = openNewsModal;
window.closeNewsModal = closeNewsModal;
