/* Brahim Laamech — portfolio interactions */
(function () {
  'use strict';

  /* ================= I18N (FR default) ================= */
  const I18N = {
    fr: {
      'nav.home': "Accueil", 'nav.about': "À propos", 'nav.skills': "Compétences",
      'nav.projects': "Projets", 'nav.journey': "Parcours", 'nav.contact': "Contact", 'nav.cv': "CV",
      'hero.cv': "Télécharger CV", 'hero.hello': "Bonjour, je suis",
      'hero.role_short': "Génie Télécoms & Réseaux",
      'hero.i_am': "Étudiant-ingénieur en",
      'hero.lead': "Étudiant-ingénieur en 5ème année à l'ENSA Safi, filière Génie Télécommunications et Réseaux. En recherche active d'un stage PFE en télécommunications, réseaux, cloud, cybersécurité ou DevOps.",
      'hero.see_projects': "Voir mes projets", 'hero.contact_me': "Me contacter",
      'hero.available': "Stage PFE recherché · Télécoms, Cyber & Cloud",
      'stats.projects': "projets majeurs", 'stats.internships': "stages & PFA", 'stats.techs': "technologies & outils",
      'about.kicker': "À propos",
      'about.title': "Du circuit au réseau sécurisé : concevoir, optimiser et protéger.",
      'about.who': "Qui suis-je ?",
      'about.p1': "Étudiant-ingénieur en 5ème année à l'École Nationale des Sciences Appliquées de Safi (ENSA Safi), filière Génie Télécommunications et Réseaux (2024–en cours, promotion 2026–2027). Mon parcours a débuté en Génie Électrique (DUT à l'EST Meknès, spécialité numérique) avant d'évoluer vers les architectures réseaux, la cybersécurité, le cloud et les systèmes communicants.",
      'about.p2': "Ce qui me motive : concevoir et sécuriser des systèmes communicants performants — de la détection d'intrusions (Suricata/IDS) au routage intelligent par IA et aux capteurs connectés LoRa. Je recherche un stage de fin d'études (PFE) pour relever des défis techniques concrets.",
      'about.loc_label': "Localisation", 'about.phone_label': "Téléphone",
      'about.langs': "Langues", 'about.ar_note': "Maternel", 'about.fr_note': "Courant", 'about.en_note': "Technique",
      'about.now': "En ce moment",
      'about.now_text': "5ème année ENSA Safi (2026–2027) · Recherche stage PFE · Préparation CCNA",
      'skills.kicker': "Compétences",
      'skills.title': "Réseaux, Cybersécurité, Systèmes & Développement.",
      'skills.tab1': "Réseaux & Cybersécurité", 'skills.tab2': "Systèmes & Cloud", 'skills.tab3': "Dev & Outils",
      'skills.telecom_desc': "TCP/IP, architectures, sécurisation des réseaux, VoIP, 5G et détection d'intrusions (Suricata).",
      'skills.sec': "Sécurité réseau & IDS/IPS",
      'skills.elec_desc': "Linux (Ubuntu, Kali, Red Hat), cloud computing, sécurité SI/IoT, blockchain et réseaux étendus.",
      'skills.dev_desc': "C, VHDL, Ladder, Web (HTML/CSS/JS, PHP, Laravel, React), outils GNS3, Wireshark, Packet Tracer.",
      'certs.title': "Certifications Cisco CCNA",
      'cert1.title': "CCNA : Introduction to Networks",
      'cert1.desc': "Protocoles TCP/IP, modèles OSI, adressage IPv4/IPv6, configuration et commutation de base.",
      'cert1.status': "Obtenue",
      'cert2.title': "CCNA : Switching, Routing, and Wireless Essentials",
      'cert2.desc': "VLANs, routage inter-VLAN, STP, EtherChannel, DHCPv4/v6, protocoles de découverte et WLAN.",
      'cert2.status': "En cours",
      'cert3.title': "CCNA : Enterprise Networking, Security, and Automation",
      'cert3.desc': "Routage OSPF, QoS, listes de contrôle d'accès (ACL), architectures WAN, virtualisation et automatisation.",
      'cert3.status': "En cours",
      'projects.kicker': "Projets", 'projects.title': "Trois projets qui résument mon profil.",
      'projects.sub': "Clique sur un projet pour le détail. Sur mobile, fais défiler horizontalement.",
      'projects.details': "Détails", 'projects.swipe': "← glisser →",
      'p1.title': "Suiveur solaire 2 axes + batterie",
      'p1.desc': "Orientation auto des panneaux (horizontal + vertical) pour maximiser la captation, énergie stockée sur batterie pour une autonomie complète.",
      'p1.t1': "Embarqué", 'p1.t2': "Énergie",
      'p2.title': "Gestion de trafic par IA",
      'p2.desc': "Routage dynamique et réduction des congestions en temps réel via algorithmes d'IA. Rôle : Scrum Master — Squad Hardware.",
      'p3.title': "Détection incendie IoT",
      'p3.desc': "Détecteur → Arduino → LoRa → serveur → alerte SMS en moins de 3 secondes. Temps réel de bout en bout.",
      'p3.t': "Temps réel",
      'm1.p': "Conception et réalisation d'un suiveur solaire à deux axes avec stockage d'énergie sur batterie. Le système oriente automatiquement les panneaux selon la position du soleil (axe horizontal et vertical) afin de maximiser la captation, puis stocke l'énergie pour une utilisation autonome.",
      'm1.l1': "Double axe : suivi horizontal + vertical du soleil",
      'm1.l2': "Stockage batterie pour fonctionnement autonome",
      'm1.l3': "Capteurs + commande embarquée, prototypage et tests",
      'm2.p': "Système intelligent de gestion et d'optimisation du trafic réseau basé sur des algorithmes d'intelligence artificielle, permettant un routage dynamique et une réduction des congestions en temps réel.",
      'm2.l1': "Routage dynamique optimisé par IA",
      'm2.l2': "Rôle : Scrum Master — Squad Hardware",
      'm2.l3': "Objectif : réduire les congestions en temps réel",
      'm3.p': "Système IoT de détection d'incendie en temps réel : signal capté par détecteur, traité par Arduino, transmis sans fil via LoRa, puis acheminé jusqu'à un serveur qui stocke les données et envoie automatiquement une alerte SMS en moins de 3 secondes.",
      'm3.l1': "Chaîne : détecteur → Arduino → LoRa → serveur → SMS",
      'm3.l2': "Alerte SMS automatique en moins de 3 secondes",
      'm3.l3': "Stockage serveur + supervision temps réel",
      'journey.kicker': "Parcours", 'journey.title': "Formation et expériences.",
      'journey.edu': "Éducation", 'journey.exp': "Stages & Expériences",
      'edu1.title': "Cycle Ingénieur — ENSA Safi",
      'edu1.desc': "Cycle ingénieur en Génie des télécommunications et réseaux — 5ème année (2026–2027).",
      'edu2.title': "DUT Génie Électrique — EST Meknès",
      'edu2.desc': "Diplôme Universitaire de Technologie, spécialité numérique. Électronique, électrotechnique, automatismes.",
      'edu3.title': "Baccalauréat Sciences Physiques — Lycée Lalla Amina",
      'edu3.desc': "Baccalauréat en sciences physiques (Meknès).",
      'exp_ocp.title': "Stage PFA en Réseaux & Cybersécurité — OCP Safi",
      'exp_ocp.desc': "Déploiement et configuration de Suricata pour détecter et prévenir les intrusions sur une infrastructure réseau simulée.",
      'exp1.title': "Stage en Développement Web — Devosoft",
      'exp1.desc': "Participation au développement d’applications web et à des projets clients en environnement professionnel.",
      'exp2.title': "Stage en Électricité — ONCF",
      'exp2.desc': "Étude d’installations électriques ferroviaires et participation aux opérations de maintenance.",
      'exp2.t': "Électrique",
      'exp3.title': "Stage Industriel — City Bus Meknès",
      'exp3.desc': "Diagnostic de pannes mécaniques et électriques, maintenance et remise en service des autobus.",
      'exp3.t': "Terrain",
      'contact.kicker': "Contact",
      'contact.title': "Un stage PFE, un projet, une discussion ? Écrivez-moi.",
      'form.name': "Votre nom", 'form.email': "Votre email", 'form.msg': "Message",
      'form.send': "Envoyer via email",
      'form.note': "Ouvre votre messagerie — 100% compatible GitHub Pages (sans backend).",
      'foot.made': "Fait avec passion à Meknès → Safi",
      'fab.cv': "Télécharger CV"
    },
    en: {
      'nav.home': "Home", 'nav.about': "About", 'nav.skills': "Skills",
      'nav.projects': "Projects", 'nav.journey': "Journey", 'nav.contact': "Contact", 'nav.cv': "Resume",
      'hero.cv': "Download Resume", 'hero.hello': "Hello, I am",
      'hero.role_short': "Telecom & Networks Engineering",
      'hero.i_am': "Engineering student in",
      'hero.lead': "5th-year engineering student at ENSA Safi, Telecommunications & Networks Engineering. Actively seeking an end-of-studies internship (PFE) in telecommunications, networks, cloud, cybersecurity or DevOps.",
      'hero.see_projects': "See my projects", 'hero.contact_me': "Contact me",
      'hero.available': "Seeking PFE Internship · Telecom, Cyber & Cloud",
      'stats.projects': "major projects", 'stats.internships': "internships & PFA", 'stats.techs': "technologies & tools",
      'about.kicker': "About",
      'about.title': "From circuit to secure network: design, optimize and protect.",
      'about.who': "Who am I?",
      'about.p1': "5th-year engineering student at the National School of Applied Sciences of Safi (ENSA Safi), Telecommunications & Networks Engineering (2024–present, class of 2026–2027). My journey began in Electrical Engineering (DUT at EST Meknes, digital specialty) before expanding into network architectures, cybersecurity, cloud computing and connected systems.",
      'about.p2': "What drives me: building and securing reliable high-performance communications — from intrusion detection (Suricata/IDS) to AI dynamic routing and IoT LoRa sensors. I am seeking an end-of-studies internship (PFE) to tackle real-world engineering challenges.",
      'about.loc_label': "Location", 'about.phone_label': "Phone",
      'about.langs': "Languages", 'about.ar_note': "Native", 'about.fr_note': "Fluent", 'about.en_note': "Technical",
      'about.now': "Right now",
      'about.now_text': "5th year ENSA Safi (2026–2027) · Seeking PFE internship · CCNA preparation",
      'skills.kicker': "Skills",
      'skills.title': "Networks, Cybersecurity, Systems & Development.",
      'skills.tab1': "Networks & Cybersecurity", 'skills.tab2': "Systems & Cloud", 'skills.tab3': "Dev & Tools",
      'skills.telecom_desc': "TCP/IP, architectures, network security, VoIP, 5G and intrusion detection (Suricata).",
      'skills.sec': "Network Security & IDS/IPS",
      'skills.elec_desc': "Linux (Ubuntu, Kali, Red Hat), cloud computing, IS/IoT security, blockchain and WAN.",
      'skills.dev_desc': "C, VHDL, Ladder, Web (HTML/CSS/JS, PHP, Laravel, React), simulation tools GNS3, Wireshark, Packet Tracer.",
      'certs.title': "Cisco CCNA Certifications",
      'cert1.title': "CCNA: Introduction to Networks",
      'cert1.desc': "TCP/IP protocols, OSI models, IPv4/IPv6 addressing, network media and fundamental switching.",
      'cert1.status': "Completed",
      'cert2.title': "CCNA: Switching, Routing, and Wireless Essentials",
      'cert2.desc': "VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, discovery protocols and WLAN.",
      'cert2.status': "In Progress",
      'cert3.title': "CCNA: Enterprise Networking, Security, and Automation",
      'cert3.desc': "OSPF routing, QoS, ACLs, WAN architectures, virtualization and network automation.",
      'cert3.status': "In Progress",
      'projects.kicker': "Projects", 'projects.title': "Three projects that sum up my profile.",
      'projects.sub': "Click a project for details. On mobile, swipe horizontally.",
      'projects.details': "Details", 'projects.swipe': "← swipe →",
      'p1.title': "2-axis solar tracker + battery",
      'p1.desc': "Auto panel orientation (horizontal + vertical) to maximize capture, energy stored on battery for full autonomy.",
      'p1.t1': "Embedded", 'p1.t2': "Energy",
      'p2.title': "AI traffic management",
      'p2.desc': "Dynamic routing and real-time congestion reduction with AI algorithms. Role: Scrum Master — Hardware Squad.",
      'p3.title': "IoT fire detection",
      'p3.desc': "Sensor → Arduino → LoRa → server → SMS alert in under 3 seconds. End-to-end real time.",
      'p3.t': "Real time",
      'm1.p': "Design and build of a two-axis solar tracker with battery energy storage. The system automatically orients panels to the sun (horizontal and vertical axes) to maximize capture, then stores energy for autonomous use.",
      'm1.l1': "Dual axis: horizontal + vertical sun tracking",
      'm1.l2': "Battery storage for autonomous operation",
      'm1.l3': "Sensors + embedded control, prototyping and testing",
      'm2.p': "Smart network traffic management and optimization system using artificial intelligence algorithms, enabling dynamic routing and real-time congestion reduction.",
      'm2.l1': "AI-optimized dynamic routing",
      'm2.l2': "Role: Scrum Master — Hardware Squad",
      'm2.l3': "Goal: reduce congestion in real time",
      'm3.p': "Real-time IoT fire detection system: signal captured by a detector, processed by Arduino, sent wirelessly via LoRa to a server that stores data and automatically sends an SMS alert in under 3 seconds.",
      'm3.l1': "Chain: detector → Arduino → LoRa → server → SMS",
      'm3.l2': "Automatic SMS alert in under 3 seconds",
      'm3.l3': "Server storage + real-time monitoring",
      'journey.kicker': "Journey", 'journey.title': "Education and experience.",
      'journey.edu': "Education", 'journey.exp': "Internships & Experience",
      'edu1.title': "Engineering Degree — ENSA Safi",
      'edu1.desc': "Telecommunications & Networks Engineering — 5th year (2026–2027).",
      'edu2.title': "DUT Electrical Engineering — EST Meknes",
      'edu2.desc': "University Diploma of Technology, digital specialty. Electronics, electrotechnics, automation.",
      'edu3.title': "Physics Baccalaureate — Lalla Amina High School",
      'edu3.desc': "Science baccalaureate, physics option (Meknes).",
      'exp_ocp.title': "PFA Internship in Networks & Cybersecurity — OCP Safi",
      'exp_ocp.desc': "Deployment and configuration of Suricata for intrusion detection and prevention on a simulated network infrastructure.",
      'exp1.title': "Internship — Web Development — Devosoft",
      'exp1.desc': "Participation in web application development and real client projects in a professional environment.",
      'exp2.title': "Electrical Internship — ONCF",
      'exp2.desc': "Study of railway electrical installations and participation in equipment maintenance operations.",
      'exp2.t': "Electrical",
      'exp3.title': "Industrial Internship — City Bus Meknes",
      'exp3.desc': "Bus maintenance and troubleshooting: mechanical and electrical diagnostics, recommissioning.",
      'exp3.t': "Field work",
      'contact.kicker': "Contact",
      'contact.title': "A PFE internship, a project, a chat? Write to me.",
      'form.name': "Your name", 'form.email': "Your email", 'form.msg': "Message",
      'form.send': "Send via email",
      'form.note': "Opens your mail app — 100% GitHub Pages friendly (no backend).",
      'foot.made': "Built with passion in Meknes → Safi",
      'fab.cv': "Download Resume"
    }
  };
  const PH = {
    fr: { 'form.name_ph': "Ex : Salma Bennani", 'form.msg_ph': "Bonjour Brahim, nous vous proposons un stage PFE en..." },
    en: { 'form.name_ph': "E.g.: Jane Doe", 'form.msg_ph': "Hello Brahim, we would like to offer a PFE internship in..." }
  };
  const TYPED = {
    fr: ["Génie Télécoms & Réseaux.", "Cybersécurité & Réseaux.", "Cloud & DevOps.", "IoT, LoRa & 5G.", "IA & Routage dynamique."],
    en: ["Telecoms & Networks Eng.", "Cybersecurity & Networks.", "Cloud & DevOps.", "IoT, LoRa & 5G.", "AI & Dynamic Routing."]
  };

  let lang = localStorage.getItem('bl-lang') || 'fr';

  function applyLang(l) {
    lang = l;
    localStorage.setItem('bl-lang', l);
    document.documentElement.lang = l;
    document.documentElement.dataset.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (I18N[l][k]) el.textContent = I18N[l][k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const k = el.getAttribute('data-i18n-ph');
      if (PH[l][k]) el.placeholder = PH[l][k];
    });
    document.querySelectorAll('.lang-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.setLang === l));
    document.querySelectorAll('.lang-switch').forEach(sw => {
      sw.dataset.active = l;
      sw.classList.remove('switching');
      void sw.offsetWidth;
      sw.classList.add('switching');
      setTimeout(() => sw.classList.remove('switching'), 450);
    });
    document.title = l === 'fr'
      ? "Brahim Laamech — Génie Télécoms & Réseaux | Portfolio"
      : "Brahim Laamech — Telecom & Networks Engineering | Portfolio";
    restartTyping();
  }
  document.querySelectorAll('[data-set-lang]').forEach(b =>
    b.addEventListener('click', () => applyLang(b.dataset.setLang)));

  /* ================= TYPING ================= */
  const typedEl = document.getElementById('typed');
  let tWord = 0, tChar = 0, tDel = false, tTimer = null;
  function restartTyping() { tWord = 0; tChar = 0; tDel = false; clearTimeout(tTimer); tick(); }
  function tick() {
    const words = TYPED[lang];
    const w = words[tWord];
    typedEl.textContent = w.slice(0, tChar);
    let speed = tDel ? 32 : 72;
    if (!tDel && tChar === w.length) { speed = 1600; tDel = true; }
    else if (tDel && tChar === 0) { tDel = false; tWord = (tWord + 1) % words.length; speed = 350; }
    else tChar += tDel ? -1 : 1;
    tTimer = setTimeout(tick, speed);
  }

  /* ================= NETWORK PARTICLES ================= */
  const canvas = document.getElementById('network-bg');
  const ctx = canvas.getContext('2d');
  const isMobile = () => window.innerWidth <= 900;
  let pts = [];
  function resize() {
    canvas.width = innerWidth; canvas.height = innerHeight;
    const n = isMobile() ? 34 : 80;
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .45, vy: (Math.random() - .5) * .45,
      r: Math.random() * 1.8 + .7
    }));
  }
  function drawNet() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const max = isMobile() ? 110 : 150;
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7);
      ctx.fillStyle = 'rgba(0,229,255,.7)'; ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
      if (d < max) {
        ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(0,229,255,${(1 - d / max) * .22})`; ctx.lineWidth = 1; ctx.stroke();
      }
    }
    requestAnimationFrame(drawNet);
  }
  resize(); addEventListener('resize', resize); drawNet();

  /* ================= SCROLL REVEAL + BARS + COUNTERS ================= */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    e.target.querySelectorAll('.bar i[data-w]').forEach(b => b.style.width = b.dataset.w + '%');
    if (e.target.querySelector('.bar i[data-w]')) {
      const b = e.target.querySelector('.bar i[data-w]');
      if (b) b.style.width = b.dataset.w + '%';
    }
    // language bars (inline --w)
    e.target.querySelectorAll && e.target.querySelectorAll('.bar i:not([data-w])').forEach(b => {
      b.style.width = getComputedStyle(b).getPropertyValue('--w') || b.style.getPropertyValue('--w');
      const w = b.getAttribute('style') || '';
      const m = w.match(/--w:\s*(\d+%)/);
      if (m) b.style.width = m[1];
    });
    io.unobserve(e.target);
  }), { threshold: .15 });
  document.querySelectorAll('.reveal, .meter').forEach(el => io.observe(el));
  // animate all bars when visible
  const barIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) {
      const b = e.target;
      if (b.dataset.w) b.style.width = b.dataset.w + '%';
      else { const m = (b.getAttribute('style') || '').match(/--w:\s*(\d+%)/); if (m) b.style.width = m[1]; }
      barIO.unobserve(b);
    }
  }), { threshold: .4 });
  document.querySelectorAll('.bar i').forEach(b => barIO.observe(b));

  const cIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, target = +el.dataset.target;
    let v = 0; const step = () => {
      v += Math.max(1, Math.ceil(target / 40));
      if (v >= target) { el.textContent = target; return; }
      el.textContent = v; setTimeout(step, 40);
    }; step(); cIO.unobserve(el);
  }), { threshold: .6 });
  document.querySelectorAll('.counter').forEach(c => cIO.observe(c));

  /* ================= NAV / DRAWER / TABBAR ================= */
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const openDrawer = o => {
    drawer.classList.toggle('open', o); overlay.classList.toggle('open', o);
    burger.setAttribute('aria-expanded', o); drawer.setAttribute('aria-hidden', !o);
    document.body.style.overflow = o ? 'hidden' : '';
  };
  burger.addEventListener('click', () => openDrawer(!drawer.classList.contains('open')));
  overlay.addEventListener('click', () => openDrawer(false));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => openDrawer(false)));

  // active link + tabbar on scroll
  const sections = ['home', 'skills', 'projects', 'journey', 'contact'];
  const links = document.querySelectorAll('.nav-link');
  const tabs = document.querySelectorAll('.mobile-tabbar .tab');
  addEventListener('scroll', () => {
    const y = scrollY + 140;
    let cur = 'home';
    sections.forEach(id => { const s = document.getElementById(id); if (s && s.offsetTop <= y) cur = id; });
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === cur));
    document.getElementById('toTop').classList.toggle('show', scrollY > 700);
  }, { passive: true });
  document.getElementById('toTop').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ================= SKILL TABS (mobile) ================= */
  const tabBtns = document.querySelectorAll('.skill-tab');
  const panels = document.querySelectorAll('.skill-panel');
  function showPanel(id) {
    panels.forEach(p => p.classList.toggle('active', p.id === id));
    tabBtns.forEach(b => b.classList.toggle('active', b.dataset.tabPanel === id));
  }
  tabBtns.forEach(b => b.addEventListener('click', () => showPanel(b.dataset.tabPanel)));
  if (isMobile()) showPanel('panel-telecom');

  /* ================= MODALS ================= */
  const mOverlay = document.getElementById('modalOverlay');
  const openModal = id => {
    mOverlay.classList.add('open');
    mOverlay.querySelectorAll('.modal').forEach(m => m.classList.toggle('open', m.id === id));
    document.body.style.overflow = 'hidden';
  };
  const closeModals = () => { mOverlay.classList.remove('open'); document.body.style.overflow = ''; };
  document.querySelectorAll('[data-modal-open]').forEach(b =>
    b.addEventListener('click', e => { e.stopPropagation(); openModal(b.dataset.modalOpen); }));
  document.querySelectorAll('.proj').forEach(c =>
    c.addEventListener('click', () => openModal(c.dataset.modal)));
  mOverlay.addEventListener('click', e => { if (e.target === mOverlay) closeModals(); });
  document.querySelectorAll('[data-modal-close]').forEach(b => b.addEventListener('click', closeModals));
  addEventListener('keydown', e => { if (e.key === 'Escape') { closeModals(); openDrawer(false); } });

  /* ================= CONTACT FORM (mailto, Pages-safe) ================= */
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`[Portfolio] ${f.get('name')} — stage/projet`);
    const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')} (${f.get('email')})`);
    location.href = `mailto:laamachibrahim123@gmail.com?subject=${subject}&body=${body}`;
  });

  /* ================= TILT (desktop only) ================= */
  if (!isMobile()) {
    document.querySelectorAll('.tilt').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(700px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
      });
      card.addEventListener('mouseleave', () => card.style.transform = '');
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  applyLang(lang);
})();
