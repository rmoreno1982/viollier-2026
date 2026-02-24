// ── Menú hamburguesa ─────────────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mainNav   = document.getElementById('mainNav');
const navClose  = document.getElementById('navClose');

hamburger.addEventListener('click', () => {
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
mainNav.querySelectorAll('a:not(#dropServiciosToggle)').forEach(a => a.addEventListener('click', closeNav));
document.querySelectorAll('.dropdown-content a').forEach(a => a.addEventListener('click', closeNav));
document.getElementById('dropServiciosToggle').addEventListener('click', e => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); e.stopPropagation();
    document.getElementById('dropServicios').classList.toggle('is-open');
  }
});

// ── Base de datos de contactos ────────────────────────────────────────────────
const CONTACTOS = {

  /* AMERICA DEL NORTE */
  'bahamas': {
    titulo: 'Bahamas &mdash; Nassau',
    html: `<div class="bp-empresa">Algoma Adjusters (Bahamas) Ltd.</div>
<p><strong>Steven M. Dillet</strong><br>
P.O. Box N-4289, Nassau, N.P., Bahamas<br>
Tel: (1-242) 325 55 91 &middot; Fax: (1-242) 322 63 53</p>`
  },

  'canada': {
    titulo: 'Canad&aacute; &mdash; Vancouver',
    html: `<div class="bp-empresa">Maxwell Claims Services Inc.</div>
<p><strong>Ian Maxwell &middot; Marion Maxwell</strong><br>
301 &ndash; 2515 Burrard Street, Vancouver BC V6J<br>
Tel: (1-604) 683 56 65 &middot; Fax: (1-604) 683 57 65<br>
<a href="mailto:ian@maxwellclaims.net">ian@maxwellclaims.net</a><br>
<a href="mailto:marion@maxwellclaims.net">marion@maxwellclaims.net</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/301+Burrard+St,+Vancouver" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'estados unidos': {
    titulo: 'Estados Unidos &mdash; Virginia &amp; New York',
    html: `<div class="bp-empresa">Adjusteck LLC</div>
<p><strong>Virginia</strong><br>
125 East Hirst Road, Suite 3C, Purcellville, VA 20132<br>
Tel: 1 540 338 7151<br>
<a href="mailto:info@adjusteck.com">info@adjusteck.com</a> &middot; <a href="https://adjusteck.com" target="_blank">adjusteck.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/3z3M1pSobou34v9z8" target="_blank">&#128205; Virginia</a>
<p style="margin-top:1.2rem"><strong>New York</strong><br>
80 Broad Street, 5th floor, New York, NY 10004<br>
Tel: 1 833 494 1294<br>
<a href="mailto:info@adjusteck.com">info@adjusteck.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/VSeoFudyfM45nosv6" target="_blank">&#128205; New York</a>`
  },

  'mexico': {
    titulo: 'M&eacute;xico &mdash; Monterrey &middot; Ciudad de M&eacute;xico &middot; Jalisco',
    html: `<div class="bp-empresa">Kimsi &amp; Associates</div>
<p><strong>Monterrey</strong><br>
Av. L&aacute;zaro C&aacute;rdenas 2321, Piso 3, Col. Residencial San Agust&iacute;n, 66260 San Pedro Garza Garc&iacute;a, N.L.<br>
<strong>Jos&eacute; Luis Nava Valtierra</strong> &ndash; Gerente<br>
<a href="mailto:jlnava@kimsiandassociates.com">jlnava@kimsiandassociates.com</a></p>
<a class="bp-mapbtn" href="https://www.google.com/maps/place/Torre+Axiss/@25.650637,-100.3326178,17z" target="_blank">&#128205; Monterrey</a>
<p style="margin-top:1.2rem"><strong>Ciudad de M&eacute;xico</strong><br>
Av. Insurgentes Sur 1647, San Jos&eacute; Insurgentes, Benito Ju&aacute;rez, 03900 CDMX<br>
Tel: (5255) 1555 8314<br>
<strong>Eduardo Kimsi Palacios</strong> &ndash; Director General<br>
<a href="mailto:ekimsi@kimsiandassociates.com">ekimsi@kimsiandassociates.com</a><br>
<strong>Eduardo Samaniego Aldave</strong> &ndash; Director<br>
<a href="mailto:esamaniego@kimsiandassociates.com">esamaniego@kimsiandassociates.com</a><br>
<strong>Jes&uacute;s Medina Ramos</strong> &ndash; Ajustador Senior<br>
<a href="mailto:jmedina@kimsiandassociates.com">jmedina@kimsiandassociates.com</a></p>
<a class="bp-mapbtn" href="https://www.google.com/maps/place/Corporativo+Prisma,+Av.+Insurgentes+Sur+1647" target="_blank">&#128205; Ciudad de M&eacute;xico</a>
<p style="margin-top:1.2rem"><strong>Jalisco</strong><br>
Av. de las Am&eacute;ricas 1545, Piso 20, Col. Providencia CP 44630, Guadalajara<br>
Oficina: (34) 8000 0389<br>
<strong>Martha Garc&iacute;a Gonz&aacute;lez</strong> &ndash; Directora<br>
<a href="mailto:mgarcia@kimsiandassociates.com">mgarcia@kimsiandassociates.com</a></p>
<a class="bp-mapbtn" href="https://www.google.com/maps/place/Punto+Sao+Paulo/@20.7019852,-103.3788114,17z" target="_blank">&#128205; Jalisco</a>`
  },

  /* AMERICA CENTRAL */
  'costa rica': {
    titulo: 'Costa Rica &mdash; San Jos&eacute;',
    html: `<div class="bp-empresa">Mollercen S.A. Ajustadores</div>
<p><strong>Victor Brenes &middot; Ginette Brenes</strong><br>
Sabana Sur-Oeste, Del M.A.G. 30 Oeste y 150 Sur,<br>
Casa N&ordm; 26, Urb. Loma Linda, San Jos&eacute;, Costa Rica<br>
Tel: (506) 290 23 29 &middot; Fax: (506) 231 25 16<br>
<a href="mailto:moller@racsa.co.cr">moller@racsa.co.cr</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Sabana+Sur-Oeste,San+Jos%C3%A9,+Costa+Rica" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'el salvador': {
    titulo: 'El Salvador &mdash; San Salvador',
    html: `<div class="bp-empresa">Gibson &amp; Co., Suc.</div>
<p><strong>Carlos Ernesto Perdomo</strong><br>
17, Calle Poniente 320, San Salvador<br>
Tel: (503) 281 55 55 &middot; Fax: (503) 271 10 26<br>
<a href="mailto:cperdomo@gibson.com.sv">cperdomo@gibson.com.sv</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Calle+Poniente+320,+San+Salvador" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'guatemala': {
    titulo: 'Guatemala &mdash; Ciudad de Guatemala',
    html: `<div class="bp-empresa">Moller S.A. Guatemala</div>
<p><strong>Henry Lewin</strong><br>
Tel: (502) 2335 22 70 &middot; Fax: (502) 2335 18 03<br>
<a href="mailto:mollergt@mollergroup.net">mollergt@mollergroup.net</a></p>`
  },

  'honduras': {
    titulo: 'Honduras &mdash; Tegucigalpa',
    html: `<div class="bp-empresa">Moller de Honduras S.A. de C.V.</div>
<p><strong>Mauricio Montes</strong><br>
Colonia Am&eacute;rica 2, Calle N&ordm; 1805, P.O. Box 739, Tegucigalpa<br>
Tel: (504) 234.30.41 / 234.60.63 &middot; Cel: (504) 891.94.83<br>
Fax: (504) 239.04.46<br>
<a href="mailto:moller@netsys.hn">moller@netsys.hn</a><br>
<a href="mailto:mollerhonduras@gmail.com">mollerhonduras@gmail.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/COLONIA+AMERICA+2+CALLE+TEGUCIGALPA" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'panama': {
    titulo: 'Panam&aacute; &mdash; Ciudad de Panam&aacute;',
    html: `<div class="bp-empresa">Asesor&iacute;as, Inspecciones y Recobros, S.A.</div>
<p><strong>Cinthya Correa</strong> (Gerente Mar&iacute;timo) &ndash; Cel: (507) 66769171<br>
<strong>Jos&eacute; Salda&ntilde;a</strong> (Inspector de Aver&iacute;as) &ndash; Cel: (507) 66711080<br>
<strong>N&eacute;stor del Castillo</strong> (Inspector de Aver&iacute;as) &ndash; Cel: (507) 66734898<br>
Tel: (507) 399 69 00 &middot; Fax: (507) 399 69 49<br>
<a href="mailto:c.correa@airpma.net">c.correa@airpma.net</a><br>
<a href="mailto:j.saldana@airpma.net">j.saldana@airpma.net</a><br>
<a href="mailto:n.castillo@airpma.net">n.castillo@airpma.net</a></p>`
  },

  'puerto rico': {
    titulo: 'Puerto Rico &mdash; San Juan',
    html: `<div class="bp-empresa">Cunningham Lindsay (Americas) Inc.</div>
<p><strong>Peter Clarke &middot; Ivelisse Urb&aacute;n</strong><br>
Puerto Home Mortgage Plaza, Suite 1110, 268 Ponce de Leon Ave., Hato Rey, PR 00918<br>
Tel: (1-787) 250 7927 &middot; Fax: (1-787) 250 6230<br>
<a href="mailto:pcc@cunninghamlidsaypr.com">pcc@cunninghamlidsaypr.com</a><br>
<a href="mailto:iu@cunninghamlidsaypr.com">iu@cunninghamlidsaypr.com</a></p>
<div class="bp-sep"></div>
<p><strong>Israel Encarnaci&oacute;n, MBA</strong> &ndash; Gerente Ajustador Senior<br>
53 Calle Palmeras, Ste. 401, San Juan, PR 00901-2408<br>
Tel: (787) 705 8156<br>
<a href="mailto:iencarnacion@kimsiandassociates.com">iencarnacion@kimsiandassociates.com</a></p>`
  },

  'republica dominicana': {
    titulo: 'Rep&uacute;blica Dominicana &mdash; Santo Domingo',
    html: `<div class="bp-empresa">Frederic Schad, Inc.</div>
<p><strong>Frederic Schad &middot; Nikda Burgos</strong><br>
Jos&eacute; Gabriel Garc&iacute;a 26, 2&deg; piso, Ciudad Colonial, Santo Domingo<br>
Tel: (1-809) 221 80 00 &middot; (1-809) 689 93 77<br>
Fax: (1-809) 686 74 41 &middot; (1-809) 688 76 96<br>
<a href="mailto:mail@fschad.com">mail@fschad.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Calle+Jos%C3%A9+Gabriel+Garc%C3%ADa+26,+Santo+Domingo" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  /* AMERICA DEL SUR */
  'argentina': {
    titulo: 'Argentina &mdash; Buenos Aires',
    html: `<div class="bp-empresa">Ascoli &amp; Weil</div>
<p><strong>Francisco Weil</strong><br>
Tte. Gral. J. D. Per&oacute;n 328, 4&deg; Piso 1038, Buenos Aires<br>
Tel: (54-11) 434 20 081 &middot; Cel: (54-9-11) 444 73 258<br>
<a href="mailto:ascoliweil@weil.com.ar">ascoliweil@weil.com.ar</a><br>
<a href="mailto:fweil@ascoliweil.com.ar">fweil@ascoliweil.com.ar</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Pres.+Tte.+Gral.+Juan+Domingo+Per%C3%B3n+328,+Buenos+Aires" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'bolivia': {
    titulo: 'Bolivia &mdash; La Paz &middot; Cochabamba &middot; Santa Cruz',
    html: `<div class="bp-empresa">Enr&iacute;quez &amp; Long SRL</div>
<p><strong>La Paz</strong> &mdash; David Long<br>
Tel: (591) 2243-4427 &middot; Cel: (591) 715-24634<br>
<a href="mailto:dlong@entelnet.bo">dlong@entelnet.bo</a></p>
<div class="bp-sep"></div>
<p><strong>Cochabamba</strong> &mdash; Javier Calder&oacute;n<br>
Tel: (591) 4448-8378 &middot; Cel: (591) 722-66180<br>
<a href="mailto:jjcalderon91@hotmail.com">jjcalderon91@hotmail.com</a></p>
<div class="bp-sep"></div>
<p><strong>Santa Cruz</strong> &mdash; Mario Alvarado<br>
Tel: (591) 2336-9924 &middot; Cel: (591) 708-11601<br>
<a href="mailto:aybsrl@cotas.com.bo">aybsrl@cotas.com.bo</a></p>`
  },

  'brasil': {
    titulo: 'Brasil &mdash; Recife &middot; Vit&oacute;ria &middot; R&iacute;o &middot; S&atilde;o Paulo &middot; Santos',
    html: `<p><strong>Recife Port</strong> &mdash; R&eacute;gulo Nordeste S/A<br>
Paulo J. Ferraz de Oliveira<br>
P&ccedil;a. Artur Oscar 35, 11&deg; andar, Cj 1101/1102, CEP 50030-460, Recife &ndash; PE<br>
Tel: 55 81 3224 2323 &middot; <a href="mailto:regulo@hotlink.com.br">regulo@hotlink.com.br</a></p>
<div class="bp-sep"></div>
<p><strong>Vit&oacute;ria Port</strong> &mdash; D.M.G Vistorias<br>
Tel: (27) 2122-3741 &middot; <a href="mailto:dmg.coimex@dmgsinistro.com.br">dmg.coimex@dmgsinistro.com.br</a></p>
<div class="bp-sep"></div>
<p><strong>Rio de Janeiro Port</strong> &mdash; Pent&aacute;gono Servi&ccedil;os T&eacute;cnicos<br>
Paulo Roberto &middot; Rua Mariz e Barros 479, Tijuca, RJ &ndash; CEP 20270-003<br>
Tel: 55 21 2234 0017 &middot; <a href="mailto:prab@pentagonoseg.com.br">prab@pentagonoseg.com.br</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/R.+Mariz+e+Barros,+479,+Rio+de+Janeiro" target="_blank">&#128205; R&iacute;o de Janeiro</a>
<div class="bp-sep"></div>
<p><strong>S&atilde;o Paulo</strong> &mdash; Cunningham Lindsey International do Brasil<br>
Martin E. Faller<br>
Av. Dr. Cardoso de Melo 1460, Cj. 54, Villa Olimpia, 04548-005, SP<br>
Tel: (55-11) 3060-2200 &middot; <a href="mailto:MFaller@cl-int.com">MFaller@cl-int.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Av.+Dr.+Cardoso+de+Melo,+1460,+S%C3%A3o+Paulo" target="_blank">&#128205; S&atilde;o Paulo</a>
<div class="bp-sep"></div>
<p><strong>Santos Port</strong> &mdash; Smera Comiss&aacute;ria de Avarias<br>
Av. Da Ana Costa 482/484, 7&deg; andar, Cj 702, Santos &ndash; SP, CEP 11060-002<br>
Tel: 55 11 13 2101 0300 &middot; <a href="mailto:smera@uol.com.br">smera@uol.com.br</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Av.+Ana+Costa,+Santos" target="_blank">&#128205; Santos</a>`
  },

  'colombia': {
    titulo: 'Colombia &mdash; Bogot&aacute;',
    html: `<div class="bp-empresa">CRM Consulting Services</div>
<p><strong>Juan Carlos Mart&iacute;nez P. &middot; Oscar Vanegas</strong><br>
Tel: (57-1) 282 7970 &ndash; (57-1) 282 3683<br>
<a href="mailto:jcm@cargorisk.com">jcm@cargorisk.com</a><br>
<a href="mailto:ovanegas@cargorisk.com">ovanegas@cargorisk.com</a></p>`
  },

  'ecuador': {
    titulo: 'Ecuador &mdash; Quito',
    html: `<div class="bp-empresa">Special Service Adjustment C&iacute;a. Ltda.</div>
<p><strong>Ricardo Villag&oacute;mez</strong><br>
Francisco de Iz&aacute;zaga N&deg; 45-07 y P&iacute;o Valdivieso, Quito<br>
Tel: 593-2 227 65 68 &middot; Fax: 593-2 245 55 09<br>
<a href="mailto:rvillagomez@ssadjustment.com">rvillagomez@ssadjustment.com</a></p>`
  },

  'paraguay': {
    titulo: 'Paraguay &mdash; Asunci&oacute;n',
    html: `<div class="bp-empresa">ETICA. Peritos Liquidadores</div>
<p>Tel: (595.21) 442850<br>
<strong>V&iacute;ctor A. Duarte Schiefer</strong> &ndash; Cel: (595.981) 205406<br>
<a href="mailto:beni@etica.com.py">beni@etica.com.py</a><br>
<strong>Antonio Franco</strong> &ndash; Cel: (595.981) 205407<br>
<a href="mailto:transportes@etica.com.py">transportes@etica.com.py</a></p>`
  },

  'peru': {
    titulo: 'Per&uacute; &mdash; Lima',
    html: `<div class="bp-empresa">BMB Ajustadores de Seguros</div>
<p><strong>Martin Bereche Helguero</strong><br>
Calle Germ&aacute;n Schreiber 184, Oficina 901, San Isidro, Lima<br>
Cel: +51 975 141 744<br>
<a href="mailto:mbereche@bmbajustadores.com">mbereche@bmbajustadores.com</a></p>
<a class="bp-mapbtn" href="https://maps.app.goo.gl/ePDT5oDpjgHbqUX96" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'uruguay': {
    titulo: 'Uruguay &mdash; Montevideo',
    html: `<div class="bp-empresa">Ascoli &amp; Weil</div>
<p><strong>Laura Pollero</strong><br>
Cel: (598) 94 42 25 46<br>
<a href="mailto:pollero@netgate.com.uy">pollero@netgate.com.uy</a></p>`
  },

  'venezuela': {
    titulo: 'Venezuela &mdash; Caracas',
    html: `<div class="bp-empresa">W. Moller C.A.</div>
<p><strong>Claudia Moller &middot; Bruno Moller</strong><br>
Centro Empresarial La Lagunita, Piso 5, Of. 511,<br>
Av. Sur &ndash; Urb. La Lagunita, Municipio El Hatillo 1083, Caracas<br>
Tel: (58-212) 815 06 68 &middot; Fax: (58-212) 963 93 04<br>
<a href="mailto:claudia.moller@mollergroup.net">claudia.moller@mollergroup.net</a><br>
<a href="mailto:bruno.moller@mollergroup.net">bruno.moller@mollergroup.net</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/La+Lagunita+Country+Club" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  /* EUROPA */
  'reino unido': {
    titulo: 'Reino Unido &mdash; Londres &#9733; Oficina Principal',
    html: `<div class="bp-empresa">Adjusteck LLC</div>
<p>70 Gracechurch Street, London, UK EC3V 0HR<br>
Tel: 44 203 968 8626<br>
<a href="mailto:info@adjusteck.com">info@adjusteck.com</a><br>
<a href="https://adjusteck.com" target="_blank">adjusteck.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/C75YYooeLqLFQ9HLA" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'espana': {
    titulo: 'Espa&ntilde;a &mdash; Madrid &middot; Barcelona',
    html: `<p><strong>Madrid &mdash; Oterin S.A.</strong><br>
Francisco L&oacute;pez de la Serna<br>
Orense 32, Oficina 7, 28020 Madrid<br>
Tel: (34-91) 556 48 51 / 556 49 45 &middot; Fax: (34-91) 597 04 99<br>
<a href="mailto:lopezf@oterin.com">lopezf@oterin.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Calle+de+Orense,+32,+28020+Madrid" target="_blank">&#128205; Oterin Madrid</a>
<div class="bp-sep"></div>
<p><strong>Madrid &mdash; Grisk Peritos</strong><br>
Vel&aacute;zquez 27, 28001 Madrid &middot; Tel: 34 91 426 14 52<br>
<a href="mailto:grisk@griskperitos.com">grisk@griskperitos.com</a> &middot; <a href="https://griskperitos.com" target="_blank">griskperitos.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/cN5LqsM7q6Vg1N9X6" target="_blank">&#128205; Grisk Madrid</a>
<div class="bp-sep"></div>
<p><strong>Barcelona &mdash; Grisk Peritos</strong><br>
Sant Elies 29&ndash;35, B 2&deg; 4&ordf; 08006 Barcelona<br>
Tel: 34 93 209 30 66<br>
<a href="mailto:grisk@griskperitos.com">grisk@griskperitos.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/3UwcvtrJUBQ6p33D8" target="_blank">&#128205; Barcelona</a>`
  },

  'italia': {
    titulo: 'Italia &mdash; Mil&aacute;n',
    html: `<div class="bp-empresa">STB Europe &ndash; Shipping Technical Bureau Srl.</div>
<p><strong>Capt. Cesare Cavallo &middot; Marco Beuf</strong><br>
V&iacute;a Polibio, 3 &ndash; 20144 Milano<br>
Tel: (39-2) 4801 2120 &middot; Fax: (39-2) 4819 3543<br>
<a href="mailto:cesare.cavallo@stbeurope.it">cesare.cavallo@stbeurope.it</a><br>
<a href="mailto:marco.beuf@stbeurope.it">marco.beuf@stbeurope.it</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Via+Polibio,+3,+20144+Milano" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'noruega': {
    titulo: 'Noruega &mdash; Billingstad',
    html: `<div class="bp-empresa">Lagerstr&ouml;m &amp; M&ouml;ller AS</div>
<p><strong>Peter Lagerstr&ouml;m</strong><br>
N-1361 Billingstad, Norway<br>
Tel: (47-66) 848500 &middot; Fax: (47-66) 847252</p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/1396+Billingstad,+Noruega" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'polonia': {
    titulo: 'Polonia &mdash; Varsovia',
    html: `<div class="bp-empresa">ICRC Loss Adjusters</div>
<p>al. Waszyngtona 20/26, 03-910 Warsaw<br>
Tel: 48 22 404 97 76<br>
<a href="mailto:office@icrc-la.com">office@icrc-la.com</a> &middot; <a href="https://www.icrc-la.com" target="_blank">icrc-la.com</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/oSs5dewx12xZ6pZ19" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'suiza': {
    titulo: 'Suiza &mdash; Ginebra',
    html: `<p><strong>Eric Capewell</strong><br>
Chemin De Normandie 14, PO Box 449, 1211 Geneva 12<br>
Tel: +41 22 369 0066 &middot; Fax: +41 22 369 1256<br>
<a href="mailto:eric.capewell@ctcplc.com">eric.capewell@ctcplc.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Chemin+De+Normandie+14,+Geneva" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'eslovaquia': {
    titulo: 'Eslovaquia &mdash; Bratislava',
    html: `<div class="bp-empresa">Gielisch Slovakia &ndash; Expert Surveyors</div>
<p><strong>Zolt&aacute;n Di&oacute;zeghy</strong><br>
Hattalova 8, 831 03 Bratislava<br>
Tel: (421-2) 4463 0738<br>
<a href="mailto:dioszeghy@expertsurveys.sk">dioszeghy@expertsurveys.sk</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Hattalova+8,+831+03+Bratislava" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  /* AFRICA */
  'sudafrica': {
    titulo: 'Sud&aacute;frica &mdash; Ciudad del Cabo',
    html: `<div class="bp-empresa">Proloss Adjusters</div>
<p>WJM Hse, Logan Way Pinelands, Cape Town, 7405<br>
Tel: 27 21 532 3621<br>
<a href="mailto:capetown@proloss.co.za">capetown@proloss.co.za</a><br>
<a href="http://proloss.co.za" target="_blank">proloss.co.za</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/s1Tvkv1GaPuXRb19A" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  /* MEDIO ORIENTE */
  'emiratos arabes': {
    titulo: 'Emiratos &Aacute;rabes Unidos &mdash; Dubai',
    html: `<div class="bp-empresa">Cunningham Lindsey Middle East</div>
<p><strong>David Summers</strong><br>
Apt 207, Zalfa Building, Garhoud, PO Box 3453, Dubai, UAE<br>
Tel: (971-4) 286 86 36 &middot; Fax: (971-4) 282 33 79<br>
<a href="mailto:clme@emirates.net.ae">clme@emirates.net.ae</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Apt+207,+Zalfa+Building,+Garhoud,+Dubai" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'irak': {
    titulo: 'Irak &mdash; Basora',
    html: `<div class="bp-empresa">Med. Bureau</div>
<p><strong>Mohammed Abdullah</strong><br>
Al-Abaseyah &ndash; Mahallad 306 &ndash; House 20, Basrah, Irak<br>
Cel: (962-79) 5539498<br>
<a href="mailto:med.bureau@link.net.jo">med.bureau@link.net.jo</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Basora,+Irak" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'jordania': {
    titulo: 'Jordania &mdash; Amman',
    html: `<div class="bp-empresa">N.E. Azzam &amp; Partners</div>
<p><strong>Reyad Arsalan</strong><br>
PO Box 5333, Amman, Jordan<br>
Tel: (962-6) 593 02 54 &middot; Fax: (962-6) 593 16 81<br>
<a href="mailto:nazzam@go.com.jo">nazzam@go.com.jo</a></p>`
  },

  /* ASIA */
  'china': {
    titulo: 'China &mdash; Guangzhou &middot; Shanghai',
    html: `<p><strong>Guangzhou</strong> &mdash; Pierre Leong Adjusters<br>
Phyllex Leung<br>
2503-4, 25/F., CITIC Ming Yue Ge Bldg., N&deg;1, Ming Yue Yi Rd., Guangzhou<br>
Tel: 86-20 8735 8337 / 8339 &middot; Fax: 86-20 8735 8340</p>
<div class="bp-sep"></div>
<p><strong>Shanghai</strong> &mdash; Shanghai Dictum Loss Adjusters Co., Ltd.<br>
Eddie Chen<br>
Tel: 86-21-3414 0801 &middot; Fax: 86-21-5448 9986 &middot; M&oacute;vil: 86-136 0172 0931<br>
<a href="mailto:eddiechen@dictum.cn">eddiechen@dictum.cn</a></p>`
  },

  'japon': {
    titulo: 'Jap&oacute;n &mdash; Yokohama',
    html: `<div class="bp-empresa">Cornes &amp; Co., Ltd.</div>
<p><strong>M. Ueno &middot; S.J. Morimoto</strong><br>
Tel: (81-78) 332 34 21 &middot; Fax: (81-71) 332 30 70<br>
<a href="mailto:m_ueno@kobe.cornes.co.jp">m_ueno@kobe.cornes.co.jp</a><br>
<a href="mailto:smorimoto@ykh.cornes.co.jp">smorimoto@ykh.cornes.co.jp</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Yokohama+Japan+Cornes" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'corea del sur': {
    titulo: 'Corea del Sur &mdash; Se&uacute;l',
    html: `<div class="bp-empresa">KORHI Average Adjusters &amp; Surveyors Ltd.</div>
<p><strong>D.R. Kim</strong><br>
Rm.1708, Chung Dong Building, 15-5 Chung-Dong, Chung-Ku, Seoul 100-120<br>
Tel: +82 2752 1891 &middot; Fax: +82 2756 4535<br>
<a href="mailto:drkim@korhi.co.kr">drkim@korhi.co.kr</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Ku/@37.5599842,126.9836356,13z" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'singapur': {
    titulo: 'Singapur',
    html: `<div class="bp-empresa">Insight Adjusters and Surveyors Pte. Ltd.</div>
<p><strong>Andrew Lee &middot; Wilson Tan</strong><br>
14 Robinson Road #11-00, Far East Finance Building, Singapore 048545<br>
Tel: (65) 224 85 00 &middot; Fax: (65) 225 79 36<br>
<a href="mailto:insight@singnet.com.sg">insight@singnet.com.sg</a><br>
<a href="mailto:andrewlee@insight.com.sg">andrewlee@insight.com.sg</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/place/Far+East+Finance+Building" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  'india': {
    titulo: 'India &mdash; Gurgaon',
    html: `<div class="bp-empresa">Proclaim Loss Assessors</div>
<p>718, JMD Megapolis, Sector-48, Sohna Road, Gurgaon &ndash; 122 018<br>
Tel: 91 124 600 2678<br>
<a href="mailto:gurugram@proclaim.co.in">gurugram@proclaim.co.in</a><br>
<a href="https://proclaim.co.in" target="_blank">proclaim.co.in</a></p>
<a class="bp-mapbtn" href="https://goo.gl/maps/zrsvAx5qu43pJ9Zb9" target="_blank">&#128205; Ver en Google Maps</a>`
  },

  /* OCEANIA */
  'australia': {
    titulo: 'Australia &mdash; Sydney',
    html: `<div class="bp-empresa">Manu Marine (NSW) Pty. Ltd.</div>
<p><strong>Capt. Iain Frost</strong><br>
P.O. Box 184, Cherry Brook, NSW 2126, Sydney<br>
Tel: (61-2) 9651 5922 &middot; Fax: (61-2) 9651 6388<br>
<a href="mailto:iain.frost@manumarine.com">iain.frost@manumarine.com</a></p>
<a class="bp-mapbtn" href="https://www.google.cl/maps/search/Cherry+Brook+NSW+2126+Sydney" target="_blank">&#128205; Ver en Google Maps</a>`
  }
};

// ── Normalizar texto para lookup ──────────────────────────────────────────────
function norm(s) {
  return (s || '')
    .toLowerCase()
    .replace(/\s*[★*]\s*/g, '')
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .trim();
}

function buscarContacto(label) {
  const key = norm(label);
  if (CONTACTOS[key]) return CONTACTOS[key];
  // búsqueda parcial
  for (const [k, v] of Object.entries(CONTACTOS)) {
    if (key.startsWith(k) || k.startsWith(key)) return v;
  }
  return null;
}

// ── Panel lateral ─────────────────────────────────────────────────────────────
(function () {
  const panel    = document.getElementById('branch-panel');
  const backdrop = document.getElementById('branch-panel-backdrop');
  const closeBtn = document.getElementById('branch-panel-close');
  const titleEl  = document.getElementById('branch-panel-title');
  const bodyEl   = document.getElementById('branch-panel-body');

  function openPanel(label) {
    const data = buscarContacto(label);
    titleEl.innerHTML = data
      ? data.titulo
      : label.replace(/\s*[★*]\s*/g, '').trim();
    bodyEl.innerHTML = data
      ? data.html
      : `<p style="color:#64748b;font-style:italic;">Informaci&oacute;n de contacto no disponible.<br>Cont&aacute;ctenos directamente.</p>`;
    panel.setAttribute('aria-hidden', 'false');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    panel.setAttribute('aria-hidden', 'true');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn  && closeBtn.addEventListener('click', closePanel);
  backdrop  && backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // Conectar .pais-tag
  document.querySelectorAll('.pais-tag').forEach(tag => {
    tag.style.cursor = 'pointer';
    tag.setAttribute('role', 'button');
    tag.setAttribute('tabindex', '0');
    tag.addEventListener('click', () => openPanel(tag.textContent));
    tag.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(tag.textContent); }
    });
  });
})();

// ── Mapa Leaflet ──────────────────────────────────────────────────────────────
const map = L.map('leafletMap', {
  center: [20, 10], zoom: 2, minZoom: 2, maxZoom: 5,
  scrollWheelZoom: false, worldCopyJump: true, attributionControl: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  subdomains: 'abcd', maxZoom: 19
}).addTo(map);

L.control.attribution({ prefix: '<span style="color:#334155;">© OpenStreetMap · © CARTO</span>' }).addTo(map);

function makeIcon(color, size) {
  return L.divIcon({
    className: '',
    html: `<div style="width:${size}px;height:${size}px;background:${color};border-radius:50%;border:2px solid rgba(255,255,255,0.5);box-shadow:0 0 ${size}px ${color};cursor:pointer;"></div>`,
    iconSize: [size, size], iconAnchor: [size / 2, size / 2]
  });
}

const presencia = [
  [37.09,  -95.71, 'Estados Unidos',       'América del Norte', 'corresponsal'],
  [56.13, -106.35, 'Canadá',               'América del Norte', 'corresponsal'],
  [25.00,  -77.35, 'Bahamas',              'América del Norte', 'corresponsal'],
  [23.63, -102.55, 'México',               'América Central',   'corresponsal'],
  [10.00,  -83.00, 'Costa Rica',           'América Central',   'corresponsal'],
  [13.79,  -88.90, 'El Salvador',          'América Central',   'corresponsal'],
  [15.78,  -90.23, 'Guatemala',            'América Central',   'corresponsal'],
  [14.07,  -87.21, 'Honduras',             'América Central',   'corresponsal'],
  [ 8.99,  -79.52, 'Panamá',              'América Central',   'corresponsal'],
  [18.22,  -66.59, 'Puerto Rico',          'América Central',   'corresponsal'],
  [18.74,  -70.16, 'República Dominicana', 'América Central',   'corresponsal'],
  [-33.45, -70.67, 'Chile',                'América del Sur',   'oficina'],
  [  4.57, -74.29, 'Colombia',             'América del Sur',   'corresponsal'],
  [-14.24, -51.93, 'Brasil',               'América del Sur',   'corresponsal'],
  [-38.42, -63.62, 'Argentina',            'América del Sur',   'corresponsal'],
  [ -9.19, -75.02, 'Perú',                'América del Sur',   'corresponsal'],
  [-16.29, -63.59, 'Bolivia',              'América del Sur',   'corresponsal'],
  [-23.44, -58.44, 'Paraguay',             'América del Sur',   'corresponsal'],
  [-32.52, -55.77, 'Uruguay',              'América del Sur',   'corresponsal'],
  [  1.65, -75.38, 'Ecuador',              'América del Sur',   'corresponsal'],
  [  6.42, -66.59, 'Venezuela',            'América del Sur',   'corresponsal'],
  [ 51.51,  -0.13, 'Reino Unido',          'Europa',            'oficina'],
  [ 40.46,  -3.75, 'España',              'Europa',            'corresponsal'],
  [ 41.87,  12.57, 'Italia',               'Europa',            'corresponsal'],
  [ 51.92,  19.15, 'Polonia',              'Europa',            'corresponsal'],
  [ 60.47,   8.47, 'Noruega',              'Europa',            'corresponsal'],
  [ 47.52,  14.55, 'Suiza',               'Europa',            'corresponsal'],
  [ 48.15,  17.11, 'Eslovaquia',           'Europa',            'corresponsal'],
  [-30.56,  22.94, 'Sudáfrica',           'África',            'corresponsal'],
  [ 23.42,  53.85, 'Emiratos Árabes',     'Medio Oriente',     'corresponsal'],
  [ 30.52,  47.77, 'Irak',                'Medio Oriente',     'corresponsal'],
  [ 31.96,  35.95, 'Jordania',             'Medio Oriente',     'corresponsal'],
  [ 20.59,  78.96, 'India',               'Asia',              'corresponsal'],
  [ 35.86, 104.20, 'China',               'Asia',              'corresponsal'],
  [ 35.91, 127.77, 'Corea del Sur',        'Asia',              'corresponsal'],
  [ 36.20, 138.25, 'Japón',              'Asia',              'corresponsal'],
  [  1.35, 103.82, 'Singapur',             'Asia',              'corresponsal'],
  [-25.27, 133.78, 'Australia',            'Oceanía',          'corresponsal'],
];

presencia.forEach(([lat, lng, nombre, region, tipo]) => {
  const isMain = tipo === 'oficina';
  const color  = isMain ? '#ff3d00' : '#00aaff';
  const size   = isMain ? 18 : 11;
  const marker = L.marker([lat, lng], { icon: makeIcon(color, size) }).addTo(map);

  const datos = buscarContacto(nombre);
  const header = `<div style="font-family:'Open Sans',sans-serif;padding:2px 0 6px;">
    <strong style="color:${color};font-size:0.92rem;">${nombre}</strong><br>
    <span style="color:#64748b;font-size:0.75rem;">${region} &middot; ${isMain ? '&#9733; Oficina principal' : 'Corresponsal'}</span>
  </div>`;
  const body = datos
    ? `<hr style="border-color:rgba(255,255,255,0.1);margin:4px 0 8px"><div style="font-size:0.75rem;color:#cbd5e1;max-width:260px;max-height:150px;overflow:auto;">${datos.html}</div>`
    : '';
  marker.bindPopup(header + body, { className: 'custom-popup', maxWidth: 300 });
});

// Línea decorativa Chile – Londres
L.polyline([[-33.45,-70.67],[-20,-50],[10,-30],[35,-15],[51.51,-0.13]], {
  color: '#00aaff', weight: 1.5, dashArray: '8,6', opacity: 0.35
}).addTo(map);

setTimeout(() => map.invalidateSize(), 300);