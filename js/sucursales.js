
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

    // ── Filter ────────────────────────────────────────────────────────────────
    function filterCards(type, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cards = document.querySelectorAll('.office-card');
      let count = 0;
      cards.forEach(card => {
        if (type === 'all' || card.classList.contains(type)) {
          card.classList.remove('hidden');
          count++;
        } else {
          card.classList.add('hidden');
        }
      });
      document.getElementById('countBadge').textContent = count + ' oficinas en Chile';
    }

    // ── Office data ───────────────────────────────────────────────────────────
    const offices = {
      casa_matriz: {
        title: 'Casa Matriz – Santiago', type: 'sucursal', typeLabel: 'Sucursal · Casa Matriz',
        contact: '', address: 'La Concepción Nº 322, Piso 13, Casilla 4203 – Providencia',
        phone: '(56-2) 23784300', fax: '(56-2) 23784301', email: 'claims@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9829984097805!2d-70.61954608523733!3d-33.423687603524364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6167d84f39%3A0x6c6bfb6f47cd6340!2sLa+Concepci%C3%B3n+322%2C+Providencia!5e0!3m2!1ses-419!2scl!4v1562802262424'
      },
      antofagasta: {
        title: 'Antofagasta', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sra. Lisette Bulnes', address: 'Arturo Prat N° 461, Of. N° 905, Antofagasta',
        phone: '(56-55) 281963 · (56-55) 2268792', fax: '(56-55) 281863', email: 'lbulnes@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.793166000205!2d-70.39969388502061!3d-23.647577184640177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2b20bebfffe5%3A0x70ba7eed0bbfe957!2sArturo+Prat+461%2C+Antofagasta!5e0!3m2!1ses-419!2scl!4v1562801914477'
      },
      vina_del_mar: {
        title: 'Viña del Mar', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sr. Siegfredo Starke T.', address: 'Siete Norte Nº 645, Oficina 405, Viña del Mar',
        phone: '(32) 2697982', fax: '(32) 2697972', cel: '(56) 9-68390418', email: 'sstarke@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.53241569629!2d-71.5533249848119!3d-33.01610098090044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689dde70710cce7%3A0x65c6f5e945f5d4e!2s7+Nte.+645%2C+Vi%C3%B1a+del+Mar!5e0!3m2!1ses-419!2scl!4v1562802142527'
      },
      san_antonio: {
        title: 'San Antonio', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Carolina Marambio', address: 'Blanco Encalada 840, Of. 403, San Antonio',
        phone: '(56 35) 2233044', cel: '(09-9) 92331820', email: 'cmarambio@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.675826880372!2d-71.61290658479717!3d-33.587765180734834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966238fae16c6729%3A0x16b3ba93cacb33f1!2sBlanco+Encalada+840%2C+San+Antonio!5e0!3m2!1ses-419!2scl!4v1566530647344'
      },
      talca: {
        title: 'Talca', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sr. Felipe Pérez', address: 'Uno Norte N° 931, Of. 513, Edificio Portal del Maule, Talca',
        phone: '(56 71) 2221826 · (56 71) 2223954', cel: '(56 9) 93305247', email: 'fperez@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3251.1599043965875!2d-71.66555898474812!3d-35.42606868025458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9665c6a1c768b13f%3A0x76f6123423de7d19!2sUno+Norte+931%2C+Talca!5e0!3m2!1ses-419!2scl!4v1562802328836'
      },
      concepcion: {
        title: 'Concepción', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sra. Mylene Mautz', address: 'Tucapel Nº 391, Ofic. C, Edificio Montecristo, Concepción',
        phone: '(56 41) 2227265 · (56 41) 2222970', fax: '(41) 2227184', cel: '(9) 93305424', email: 'mmautz@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.6889093229247!2d-73.04763358470936!3d-36.82597387994325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d2316c6a99%3A0x5dd8d15acfe1fa8c!2zVHVjYXBlbCAzOTEsIENvbmNlcGNpw7Nubg!5e0!3m2!1ses-419!2scl!4v1562802385062'
      },
      temuco: {
        title: 'Temuco', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sra. Mylene Mautz Toro', address: 'Av. España N° 446, Of. 205, Temuco',
        phone: '(56 45) 2386431 · (56 45) 2386539', cel: '(09) 93305424', email: 'mmautz@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.302669905966!2d-72.61430228465449!3d-38.73381617959618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3f6806552b9%3A0x83bc359dbc43e194!2zRXNwYcOxYSA0NDYsIFRlbXVjbw!5e0!3m2!1ses-419!2scl!4v1562802452265'
      },
      pto_montt: {
        title: 'Puerto Montt', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sr. Rene Miño A.', address: 'Urmeneta Nº 305, Oficina 402, Edificio Los Héroes, Puerto Montt',
        phone: '(56-65) 2294400', fax: '(56-65) 2294404', cel: '(56 9) 92506759', email: 'rmino@vyaa.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.5110446245003!2d-72.94081698457157!3d-41.47151917925654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a51a1a748d7%3A0xa4a9bdd5dffc09f5!2sUrmeneta+305%2C+Puerto+Montt!5e0!3m2!1ses-419!2scl!4v1562802719926'
      },
      punta_arenas: {
        title: 'Punta Arenas', type: 'sucursal', typeLabel: 'Sucursal',
        contact: 'Sra. Gloria Loaiza', address: 'Roca N° 817, Piso 4, Of. 40, Punta Arenas',
        phone: '(56 61) 2243676', cel: '(56 9) 74308387', email: 'gloaiza@vyaa.cl',
        extra: '<strong>Área Transporte – Sr. Juan Carlos Carilao</strong><br>Tel: (56 61) 2280885 · Cel: (56 9) 96935641<br><a href="mailto:carloscarilao@tie.cl">carloscarilao@tie.cl</a>',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2392.021135412343!2d-70.90974888416842!3d-53.16366007994109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdb2637a4fbc5403%3A0xbbe82f420151dd1!2sPdte.+Julio+A.Roca+817%2C+Punta+Arenas!5e0!3m2!1ses-419!2scl!4v1562802569868'
      },
      arica: {
        title: 'Arica y Parinacota', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sr. Angel Guillermo Sepúlveda Castro', phone: '(56 58) 2228680', cel: '(56 9) 77539964', email: 'angelsepulveda1@yahoo.es', mapSrc: null
      },
      iquique: {
        title: 'Iquique', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sr. Horacio R. Rubio M.', address: 'Baquedano 1282, Iquique', phone: '(56 57) 427 169', cel: '(56-9) 849 2304', email: 'iquique@vyaa.cl', mapSrc: null
      },
      copiapo: {
        title: 'Copiapó', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Fabiola Gaéte Pulgar', address: 'Copiapó', cel: '(56 9) 58596588', email: 'fabiolagaete@gmail.com', mapSrc: null
      },
      la_serena: {
        title: 'La Serena', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sr. Ismael Diaz A.', address: 'La Serena', phone: '(56 51) 2272652 · (56 51) 2492779', cel: '(56 9) 45781401', email: 'idiaza@gmail.com', mapSrc: null
      },
      los_angeles: {
        title: 'Los Ángeles', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sra. Mylene Mautz', address: 'Tucapel Nº 391, Ofic. C, Edificio Montecristo, Concepción',
        phone: '(56 41) 2227265', cel: '(9) 93305424', email: 'mmautz@vyaa.cl', mapSrc: null
      },
      valdivia: {
        title: 'Valdivia', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sra. Mylene Mautz Toro', address: 'Av. España N° 446, Of. 205, Temuco',
        phone: '(56 45) 2386431', cel: '(09) 93305424', email: 'mmautz@vyaa.cl', mapSrc: null
      },
      osorno: {
        title: 'Osorno', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sr. Rene Miño A.', address: 'Urmeneta Nº 305, Oficina 402, Edificio Los Héroes, Puerto Montt',
        phone: '(56-65) 2294400', fax: '(56-65) 2294404', cel: '(56 9) 92506759', email: 'rmino@viollierajustadores.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.5110446245003!2d-72.94081698457157!3d-41.47151917925654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96183a51a1a748d7%3A0xa4a9bdd5dffc09f5!2sUrmeneta+305%2C+Puerto+Montt!5e0!3m2!1ses-419!2scl!4v1562803357418'
      },
      coyaique: {
        title: 'Coyhaique', type: 'corresponsal', typeLabel: 'Corresponsal',
        contact: 'Sr. Jorge A. Holmberg Barra', address: 'Bilbao N° 873, Coyhaique',
        phone: '(56 67) 2234405', cel: '(56 9) 68142660', email: 'jorgeandres@holmberg.cl',
        mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.7855709853256!2d-72.06494838475285!3d-45.574750524123274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdf2c49577529a05%3A0x13f9d61bd7c283fc!2sFrancisco+Bilbao+873%2C+Coyhaique!5e0!3m2!1ses-419!2scl!4v1562802664174'
      }
    };

    function openModal(id) {
      const o = offices[id];
      if (!o) return;
      const isSuc = o.type === 'sucursal';
      const badge = document.getElementById('modalTypeBadge');
      badge.textContent = o.typeLabel;
      badge.style.background = isSuc ? '#eff6ff' : '#f5f3ff';
      badge.style.color = isSuc ? '#0077cc' : '#7c3aed';
      document.getElementById('modalTitle').textContent = o.title;

      let html = '';
      if (o.contact) html += `<div class="modal-detail-row"><i class="fas fa-user"></i><div><strong>${o.contact}</strong></div></div>`;
      if (o.address) html += `<div class="modal-detail-row"><i class="fas fa-map-marker-alt"></i><div>${o.address}</div></div>`;
      if (o.phone) html += `<div class="modal-detail-row"><i class="fas fa-phone-alt"></i><div>Tel: ${o.phone}</div></div>`;
      if (o.cel) html += `<div class="modal-detail-row"><i class="fas fa-mobile-alt"></i><div>Cel: ${o.cel}</div></div>`;
      if (o.fax) html += `<div class="modal-detail-row"><i class="fas fa-fax"></i><div>Fax: ${o.fax}</div></div>`;
      if (o.email) html += `<div class="modal-detail-row"><i class="fas fa-envelope"></i><div><a href="mailto:${o.email}">${o.email}</a></div></div>`;
      if (o.extra) html += `<div class="modal-detail-row"><i class="fas fa-info-circle"></i><div>${o.extra}</div></div>`;
      if (o.mapSrc) html += `<div class="modal-map-embed"><iframe src="${o.mapSrc}" allowfullscreen loading="lazy"></iframe></div>`;

      document.getElementById('modalBody').innerHTML = html;
      document.getElementById('officeModal').style.display = 'block';
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('officeModal').style.display = 'none';
      document.body.style.overflow = '';
    }

    function handleModalClick(e) {
      if (e.target === document.getElementById('officeModal')) closeModal();
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeModal();
    });
