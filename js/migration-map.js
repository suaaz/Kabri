/**
 * Interactive Animal Migration Map (Leaflet.js)
 * Visualizes global migration flyways, ocean corridors, and overland routes across
 * diverse geological zones. Includes animated paths, waypoint inspections,
 * and biome filtering.
 */

class MigrationMapController {
  constructor() {
    this.map = null;
    this.routes = window.MIGRATION_ROUTES || [];
    this.activeRoute = null;
    this.polylineLayers = {};
    this.markerLayers = {};
    this.animationTimer = null;
    this.currentTileLayer = null;

    this.initMap();
    this.renderRouteSelector();
    this.renderGeologicalZoneBadges();
    this.renderDriversAndSenses();
  }

  initMap() {
    const mapContainer = document.getElementById('migration-map');
    if (!mapContainer) return;

    // Check if Leaflet is available
    if (typeof L === 'undefined') {
      mapContainer.innerHTML = '<div class="map-fallback">Interactive map loading...</div>';
      return;
    }

    // Default global center
    this.map = L.map('migration-map', {
      center: [20, 0],
      zoom: 2,
      minZoom: 1,
      maxZoom: 12,
      worldCopyJump: true,
      zoomControl: true,
      attributionControl: true
    });

    this.updateTileLayer();
    this.renderAllRoutes();

    // Map resize trigger on window resize
    window.addEventListener('resize', () => {
      if (this.map) this.map.invalidateSize();
    });
  }

  updateTileLayer() {
    if (!this.map) return;
    const isDark = document.documentElement.classList.contains('dark');

    if (this.currentTileLayer) {
      this.map.removeLayer(this.currentTileLayer);
    }

    const tileUrl = isDark
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

    const attribution = '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    this.currentTileLayer = L.tileLayer(tileUrl, {
      attribution: attribution,
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(this.map);
  }

  renderAllRoutes(filterZone = 'all') {
    if (!this.map) return;

    // Clear existing layers
    Object.values(this.polylineLayers).forEach(layer => this.map.removeLayer(layer));
    Object.values(this.markerLayers).forEach(markers => markers.forEach(m => this.map.removeLayer(m)));
    this.polylineLayers = {};
    this.markerLayers = {};

    this.routes.forEach(route => {
      if (filterZone !== 'all' && route.zone !== filterZone) {
        return;
      }

      const latlngs = route.waypoints.map(wp => wp.coords);

      // Create polyline with dashed style
      const polyline = L.polyline(latlngs, {
        color: route.color,
        weight: 4,
        opacity: 0.85,
        dashArray: '8, 8',
        className: `migration-path path-${route.id}`
      }).addTo(this.map);

      this.polylineLayers[route.id] = polyline;
      this.markerLayers[route.id] = [];

      // Waypoint markers
      route.waypoints.forEach((wp, idx) => {
        const isStart = idx === 0;
        const isEnd = idx === route.waypoints.length - 1;

        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `
            <div class="pin-marker ${isStart ? 'start-pin' : isEnd ? 'end-pin' : 'waypoint-pin'}" style="background-color: ${route.color}">
              <span>${isStart ? '🏁' : isEnd ? '🎯' : (idx + 1)}</span>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14]
        });

        const marker = L.marker(wp.coords, { icon: customIcon }).addTo(this.map);

        // Rich popup
        const popupContent = `
          <div class="map-popup-card">
            <div class="popup-header" style="border-left: 4px solid ${route.color}">
              <span class="popup-species">${route.name}</span>
              <span class="popup-role">${isStart ? 'Departure Point' : isEnd ? 'Final Destination' : `Waypoint #${idx + 1}`}</span>
            </div>
            <h4 class="popup-location">${wp.name}</h4>
            <p class="popup-note">${wp.note}</p>
            <div class="popup-meta">
              <span><strong>Distance:</strong> ${route.totalDistance}</span>
              <span><strong>Duration:</strong> ${route.duration}</span>
            </div>
          </div>
        `;

        marker.bindPopup(popupContent);
        this.markerLayers[route.id].push(marker);
      });

      // Click on line selects route
      polyline.on('click', () => {
        this.selectRoute(route.id);
      });
    });
  }

  selectRoute(routeId) {
    const route = this.routes.find(r => r.id === routeId);
    if (!route || !this.map) return;

    this.activeRoute = route;

    // Highlight route line
    Object.keys(this.polylineLayers).forEach(id => {
      const layer = this.polylineLayers[id];
      if (id === routeId) {
        layer.setStyle({ weight: 6, opacity: 1, dashArray: null });
        layer.bringToFront();
      } else {
        layer.setStyle({ weight: 3, opacity: 0.25, dashArray: '6, 6' });
      }
    });

    // Fit bounds smoothly
    const polyline = this.polylineLayers[routeId];
    if (polyline) {
      this.map.fitBounds(polyline.getBounds(), { padding: [50, 50], maxZoom: 5 });
    }

    // Update Details Drawer / Card
    this.updateRouteDetailCard(route);

    // Active button in list
    document.querySelectorAll('.route-list-item').forEach(el => {
      el.classList.toggle('active', el.dataset.routeId === routeId);
    });

    if (window.soundCtrl) window.soundCtrl.playPop();
  }

  updateRouteDetailCard(route) {
    const detailContainer = document.getElementById('migration-route-details');
    if (!detailContainer) return;

    detailContainer.innerHTML = `
      <div class="route-hero-card" style="border-top: 4px solid ${route.color}">
        <div class="route-header-flex">
          <div>
            <span class="route-badge-category" style="background-color: ${route.color}20; color: ${route.color}">${route.category}</span>
            <h3 class="route-card-title">${route.name}</h3>
            <p class="route-card-scientific"><em>${route.species}</em></p>
          </div>
          <button class="btn-play-odyssey" id="btn-replay-journey" title="Animate Migration Flight">
            <span>✈️ Simulate Odyssey</span>
          </button>
        </div>

        <div class="route-quick-stats">
          <div class="stat-pill">
            <span class="stat-label">Total Distance</span>
            <span class="stat-value">${route.totalDistance}</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">Duration</span>
            <span class="stat-value">${route.duration}</span>
          </div>
        </div>

        <div class="route-hero-fact">
          <span class="fact-sparkle">✨</span>
          <p><strong>Marvel of Nature:</strong> ${route.heroFact}</p>
        </div>

        <div class="route-body-section">
          <h4>Why Do They Migrate?</h4>
          <p>${route.whyTheyMigrate}</p>
        </div>

        <div class="route-body-section">
          <h4>The Epic Journey</h4>
          <p>${route.summary}</p>
        </div>

        <div class="route-waypoints-stepper">
          <h4>Key Waypoints & Refueling Hubs</h4>
          <ul class="stepper-list">
            ${route.waypoints.map((wp, i) => `
              <li>
                <span class="step-num" style="background: ${route.color}">${i + 1}</span>
                <div>
                  <strong>${wp.name}</strong>
                  <p>${wp.note}</p>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    const playBtn = document.getElementById('btn-replay-journey');
    if (playBtn) {
      playBtn.addEventListener('click', () => this.animateRouteJourney(route));
    }
  }

  animateRouteJourney(route) {
    if (!this.map || !route.waypoints.length) return;

    if (window.soundCtrl) {
      if (route.category.includes('Avian')) window.soundCtrl.playBirdChirp();
      else if (route.category.includes('Marine')) window.soundCtrl.playDolphinSonar();
      else window.soundCtrl.playClueReveal();
    }

    const coords = route.waypoints.map(wp => wp.coords);
    let currentIdx = 0;

    // Moving icon
    const travelerIcon = L.divIcon({
      className: 'traveler-marker-pin',
      html: `<div class="pulse-traveler" style="background:${route.color}">📍</div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });

    if (this.travelerMarker) {
      this.map.removeLayer(this.travelerMarker);
    }

    this.travelerMarker = L.marker(coords[0], { icon: travelerIcon }).addTo(this.map);

    if (this.animationTimer) clearInterval(this.animationTimer);

    this.animationTimer = setInterval(() => {
      currentIdx++;
      if (currentIdx >= coords.length) {
        clearInterval(this.animationTimer);
        if (window.soundCtrl) window.soundCtrl.playCorrect();
        return;
      }
      this.travelerMarker.setLatLng(coords[currentIdx]);
      this.map.panTo(coords[currentIdx], { animate: true, duration: 0.8 });

      // Open corresponding popup
      const markers = this.markerLayers[route.id];
      if (markers && markers[currentIdx]) {
        markers[currentIdx].openPopup();
      }
    }, 1800);
  }

  renderRouteSelector() {
    const listContainer = document.getElementById('migration-routes-list');
    if (!listContainer) return;

    listContainer.innerHTML = '';
    this.routes.forEach(route => {
      const item = document.createElement('div');
      item.className = 'route-list-item';
      item.dataset.routeId = route.id;
      item.innerHTML = `
        <div class="route-item-color" style="background-color: ${route.color}"></div>
        <div class="route-item-info">
          <h4>${route.name}</h4>
          <span class="route-item-sub">${route.totalDistance}</span>
        </div>
        <span class="route-item-arrow">→</span>
      `;

      item.addEventListener('click', () => {
        this.selectRoute(route.id);
      });

      listContainer.appendChild(item);
    });

    // Select the first route by default
    if (this.routes.length > 0) {
      this.selectRoute(this.routes[0].id);
    }
  }

  renderGeologicalZoneBadges() {
    const zonesContainer = document.getElementById('geological-zones-container');
    if (!zonesContainer || !window.GEOLOGICAL_ZONES) return;

    zonesContainer.innerHTML = window.GEOLOGICAL_ZONES.map(z => `
      <div class="zone-card">
        <div class="zone-card-header">
          <span class="zone-badge">${z.badge}</span>
          <span class="zone-temp">${z.tempRange}</span>
        </div>
        <h4>${z.name}</h4>
        <p class="zone-challenge"><strong>Survival Barrier:</strong> ${z.challenge}</p>
        <p class="zone-soil"><strong>Substrate & Geology:</strong> ${z.soil}</p>
        <div class="zone-migrators">
          <span class="label">Key Nomads:</span>
          ${z.keyMigrators.map(k => `<span class="migrator-tag">${k}</span>`).join('')}
        </div>
      </div>
    `).join('');

    // Zone filter buttons for map
    const filterGroup = document.getElementById('map-zone-filters');
    if (filterGroup) {
      filterGroup.querySelectorAll('.zone-filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          filterGroup.querySelectorAll('.zone-filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const zoneKey = btn.dataset.zone;
          this.renderAllRoutes(zoneKey);
          if (window.soundCtrl) window.soundCtrl.playPop();
        });
      });
    }
  }

  renderDriversAndSenses() {
    // Drivers
    const driversContainer = document.getElementById('migration-drivers-list');
    if (driversContainer && window.MIGRATION_DRIVERS) {
      driversContainer.innerHTML = window.MIGRATION_DRIVERS.map(d => `
        <div class="driver-card">
          <div class="driver-icon">${d.icon}</div>
          <h4>${d.title}</h4>
          <span class="driver-sub">${d.subtitle}</span>
          <p>${d.description}</p>
        </div>
      `).join('');
    }

    // Senses
    const sensesContainer = document.getElementById('navigation-senses-list');
    if (sensesContainer && window.NAVIGATION_SENSES) {
      sensesContainer.innerHTML = window.NAVIGATION_SENSES.map(s => `
        <div class="sense-card">
          <div class="sense-header">
            <h4>${s.title}</h4>
            <span class="organ-tag">${s.organ}</span>
          </div>
          <p>${s.detail}</p>
        </div>
      `).join('');
    }
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  window.migrationMapCtrl = new MigrationMapController();
});
