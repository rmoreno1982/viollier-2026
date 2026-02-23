

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

    // Cerrar al tocar un enlace (excepto el toggle del dropdown)
    mainNav.querySelectorAll('a:not(#dropServiciosToggle)').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    // Los items del dropdown también cierran el nav
    document.querySelectorAll('.dropdown-content a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });

    // Dropdown táctil
    document.getElementById('dropServiciosToggle').addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopPropagation();
        document.getElementById('dropServicios').classList.toggle('is-open');
      }
    });

    // ── Mapa Red Internacional ────────────────────────────────────────────────
    var previewMapInit = false;
    var previewMapEl = document.getElementById('previewMap');

    function initPreviewMap() {
      if (previewMapInit) return;
      previewMapInit = true;

      var previewMap = L.map('previewMap', {
        center: [20, 10], zoom: 2, minZoom: 2, maxZoom: 2,
        scrollWheelZoom: false, zoomControl: false,
        dragging: false, attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd', maxZoom: 19
      }).addTo(previewMap);

      var mapStyle = document.createElement('style');
      mapStyle.textContent = '#previewMap .leaflet-tile { filter: brightness(1.5) contrast(0.9); }';
      document.head.appendChild(mapStyle);

      function makePreviewIcon(color, size) {
        return L.divIcon({
          className: '',
          html: '<div style="width:' + size + 'px;height:' + size + 'px;background:' + color + ';border-radius:50%;border:2px solid rgba(255,255,255,0.4);box-shadow:0 0 ' + size + 'px ' + color + ';"></div>',
          iconSize: [size, size], iconAnchor: [size / 2, size / 2]
        });
      }

      var puntos = [
        [37.09, -95.71, 'c'], [56.13, -106.35, 'c'], [23.63, -102.55, 'c'],
        [-33.45, -70.67, 'o'], [-14.24, -51.93, 'c'], [-38.42, -63.62, 'c'],
        [4.57, -74.29, 'c'], [-9.19, -75.02, 'c'],
        [51.51, -0.13, 'o'], [51.17, 10.45, 'c'], [46.23, 2.21, 'c'],
        [40.46, -3.75, 'c'], [41.87, 12.57, 'c'], [52.13, 5.29, 'c'],
        [31.79, -7.09, 'c'], [9.08, 8.68, 'c'], [-0.02, 37.91, 'c'], [-30.56, 22.94, 'c'],
        [23.89, 45.08, 'c'], [23.42, 53.85, 'c'],
        [20.59, 78.96, 'c'], [35.86, 104.20, 'c'], [36.20, 138.25, 'c'],
        [1.35, 103.82, 'c'], [35.91, 127.77, 'c'],
        [-25.27, 133.78, 'c'], [-40.90, 174.89, 'c']
      ];

      puntos.forEach(function (p) {
        var isMain = p[2] === 'o';
        L.marker([p[0], p[1]], { icon: makePreviewIcon(isMain ? '#ff3d00' : '#00aaff', isMain ? 14 : 10) }).addTo(previewMap);
      });

      L.polyline([[-33.45, -70.67], [51.51, -0.13]], {
        color: '#00aaff', weight: 1.5, dashArray: '8,6', opacity: 0.5
      }).addTo(previewMap);

      setTimeout(function () { previewMap.invalidateSize(); }, 200);
      setTimeout(function () { previewMap.invalidateSize(); }, 800);
    }

    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { initPreviewMap(); obs.disconnect(); }
      }, { threshold: 0.1 });
      obs.observe(previewMapEl);
    } else {
      initPreviewMap();
    }

    // ── Modal sucursales ──────────────────────────────────────────────────────
    var sucursalesData = {
      santiago: {
        title: "Santiago — Oficina Matriz",
        content: '<p><strong>Dirección:</strong> La Concepción 322, Piso 13, Providencia, Santiago</p><p><strong>Teléfono:</strong> +56 2 2378 4300</p><p><strong>Email:</strong> claims@vyaa.cl</p><p><strong>Horario:</strong> Lunes a Viernes 09:00 - 18:00</p><div class="modal-map"><iframe src="https://maps.google.com/maps?q=-33.4260,-70.6127&z=16&output=embed" allowfullscreen loading="lazy"></iframe></div>'
      },
      antofagasta: {
        title: "Antofagasta",
        content: '<p><strong>Responsable:</strong> Sra. Lisette Bulnes</p><p><strong>Dirección:</strong> Arturo Prat N° 461, Of. N° 905, Antofagasta</p><p><strong>Teléfono:</strong> (56-55) 281963 · (56-55) 2268792</p><p><strong>Email:</strong> lbulnes@vyaa.cl</p><div class="modal-map"><iframe src="https://maps.google.com/maps?q=-23.6509,-70.3975&z=16&output=embed" allowfullscreen loading="lazy"></iframe></div>'
      },
      concepcion: {
        title: "Concepción",
        content: '<p><strong>Responsable:</strong> Sra. Mylene Mautz</p><p><strong>Dirección:</strong> Tucapel Nº 391, Ofic. C, Edif. Montecristo, Concepción</p><p><strong>Teléfono:</strong> (56 41) 2227265</p><p><strong>Email:</strong> mmautz@vyaa.cl</p><div class="modal-map"><iframe src="https://maps.google.com/maps?q=-36.8201,-73.0444&z=16&output=embed" allowfullscreen loading="lazy"></iframe></div>'
      },
      temuco: {
        title: "Temuco",
        content: '<p><strong>Responsable:</strong> Sra. Mylene Mautz Toro</p><p><strong>Dirección:</strong> Av. España N° 446, Of. 205, Temuco</p><p><strong>Teléfono:</strong> (56 45) 2386431</p><p><strong>Email:</strong> mmautz@vyaa.cl</p><div class="modal-map"><iframe src="https://maps.google.com/maps?q=-38.7359,-72.5904&z=16&output=embed" allowfullscreen loading="lazy"></iframe></div>'
      },
      puertomontt: {
        title: "Puerto Montt",
        content: '<p><strong>Responsable:</strong> Sr. Rene Miño A.</p><p><strong>Dirección:</strong> Urmeneta Nº 305, Of. 402, Edif. Los Héroes, Puerto Montt</p><p><strong>Teléfono:</strong> (56-65) 2294400</p><p><strong>Email:</strong> rmino@vyaa.cl</p><div class="modal-map"><iframe src="https://maps.google.com/maps?q=-41.4693,-72.9424&z=16&output=embed" allowfullscreen loading="lazy"></iframe></div>'
      }
    };

    function openModal(id) {
      if (!sucursalesData[id]) return;
      document.getElementById('modal-title').textContent = sucursalesData[id].title;
      document.getElementById('modal-body').innerHTML = sucursalesData[id].content;
      document.getElementById('sucursalModal').style.display = 'block';
    }

    function closeModal() {
      document.getElementById('sucursalModal').style.display = 'none';
    }

    document.getElementById('sucursalModal').addEventListener('click', function (e) {
      if (e.target === this) closeModal();
    });

