
    // ── Menú hamburguesa ──────────────────────────────────────────────────────
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    const navClose = document.getElementById('navClose');

    hamburger.addEventListener('click', function () {
      mainNav.classList.add('is-open');
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
    });

    function closeNav() {
      mainNav.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    navClose.addEventListener('click', closeNav);

    mainNav.querySelectorAll('a:not(#dropServiciosToggle)').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    document.querySelectorAll('.dropdown-content a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    document.getElementById('dropServiciosToggle').addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('dropServicios').classList.toggle('is-open');
      }
    });

    // ── Mapa Leaflet ──────────────────────────────────────────────────────────
    const map = L.map('leafletMap', {
      center: [20, 10], zoom: 2, minZoom: 2, maxZoom: 5,
      scrollWheelZoom: false, worldCopyJump: true, attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd', maxZoom: 19
    }).addTo(map);

    L.control.attribution({
      prefix: '<span style="color:#334155;">© OpenStreetMap · © CARTO</span>'
    }).addTo(map);

    function makeIcon(color, size) {
      return L.divIcon({
        className: '',
        html: `<div style="width:${size}px;height:${size}px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.4);box-shadow:0 0 ${size}px ${color};"></div>`,
        iconSize: [size, size], iconAnchor: [size / 2, size / 2]
      });
    }

    const presencia = [
      [37.09, -95.71, 'Estados Unidos', 'América del Norte', 'corresponsal'],
      [56.13, -106.35, 'Canadá', 'América del Norte', 'corresponsal'],
      [23.63, -102.55, 'México', 'América Central', 'corresponsal'],
      [-33.45, -70.67, 'Chile', 'América del Sur', 'oficina'],
      [4.57, -74.29, 'Colombia', 'América del Sur', 'corresponsal'],
      [-14.24, -51.93, 'Brasil', 'América del Sur', 'corresponsal'],
      [-38.42, -63.62, 'Argentina', 'América del Sur', 'corresponsal'],
      [-9.19, -75.02, 'Perú', 'América del Sur', 'corresponsal'],
      [-16.29, -63.59, 'Bolivia', 'América del Sur', 'corresponsal'],
      [-23.44, -58.44, 'Paraguay', 'América del Sur', 'corresponsal'],
      [-32.52, -55.77, 'Uruguay', 'América del Sur', 'corresponsal'],
      [1.65, -75.38, 'Ecuador', 'América del Sur', 'corresponsal'],
      [6.42, -66.59, 'Venezuela', 'América del Sur', 'corresponsal'],
      [51.51, -0.13, 'Londres — Adjusteck LLC', 'Europa', 'oficina'],
      [51.17, 10.45, 'Alemania', 'Europa', 'corresponsal'],
      [46.23, 2.21, 'Francia', 'Europa', 'corresponsal'],
      [40.46, -3.75, 'España', 'Europa', 'corresponsal'],
      [41.87, 12.57, 'Italia', 'Europa', 'corresponsal'],
      [52.13, 5.29, 'Países Bajos', 'Europa', 'corresponsal'],
      [51.92, 19.15, 'Polonia', 'Europa', 'corresponsal'],
      [47.52, 14.55, 'Austria', 'Europa', 'corresponsal'],
      [45.94, 24.97, 'Rumanía', 'Europa', 'corresponsal'],
      [60.47, 8.47, 'Noruega', 'Europa', 'corresponsal'],
      [60.13, 18.64, 'Suecia', 'Europa', 'corresponsal'],
      [38.96, 35.24, 'Turquía', 'Europa/Asia', 'corresponsal'],
      [31.79, -7.09, 'Marruecos', 'África', 'corresponsal'],
      [9.08, 8.68, 'Nigeria', 'África', 'corresponsal'],
      [-0.02, 37.91, 'Kenia', 'África', 'corresponsal'],
      [-30.56, 22.94, 'Sudáfrica', 'África', 'corresponsal'],
      [23.89, 45.08, 'Arabia Saudita', 'Medio Oriente', 'corresponsal'],
      [23.42, 53.85, 'Emiratos Árabes', 'Medio Oriente', 'corresponsal'],
      [20.59, 78.96, 'India', 'Asia', 'corresponsal'],
      [30.38, 69.35, 'Pakistán', 'Asia', 'corresponsal'],
      [35.86, 104.20, 'China', 'Asia', 'corresponsal'],
      [35.91, 127.77, 'Corea del Sur', 'Asia', 'corresponsal'],
      [36.20, 138.25, 'Japón', 'Asia', 'corresponsal'],
      [1.35, 103.82, 'Singapur', 'Asia', 'corresponsal'],
      [23.68, 90.36, 'Bangladesh', 'Asia', 'corresponsal'],
      [7.87, 80.77, 'Sri Lanka', 'Asia', 'corresponsal'],
      [-25.27, 133.78, 'Australia', 'Oceanía', 'corresponsal'],
      [-40.90, 174.89, 'Nueva Zelanda', 'Oceanía', 'corresponsal']
    ];

    presencia.forEach(([lat, lng, nombre, region, tipo]) => {
      const isMain = tipo === 'oficina';
      const color = isMain ? '#ff3d00' : '#00aaff';
      const size = isMain ? 18 : 12;
      const marker = L.marker([lat, lng], { icon: makeIcon(color, size) }).addTo(map);
      marker.bindPopup(`
        <div style="font-family:'Open Sans',sans-serif; min-width:150px;">
          <strong style="color:#0077cc; font-size:1rem;">${nombre}</strong><br>
          <span style="color:#64748b; font-size:0.85rem;">${region}</span><br>
          <span style="color:#94a3b8; font-size:0.8rem;">${isMain ? '★ Oficina principal' : 'Corresponsal'}</span>
        </div>
      `, { className: 'custom-popup' });
    });

    // Línea Chile - Londres
    const latlngs = [
      [-33.45, -70.67],
      [-20, -50],
      [10, -30],
      [35, -15],
      [51.51, -0.13]
    ];
    L.polyline(latlngs, { color: '#00aaff', weight: 1.5, dashArray: '8,6', opacity: 0.4 }).addTo(map);

    setTimeout(() => { map.invalidateSize(); }, 300);
