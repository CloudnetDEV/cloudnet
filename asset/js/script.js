// =============================================
//   CLOUDNET — script.js
//   v1.2 — with i18n Language Switcher
// =============================================

const WA_NUMBER = '62895329556657';

// ===== TRANSLATIONS =====
const translations = {
  id: {
    'nav.home': 'Home',
    'nav.products': 'Produk',
    'nav.about': 'Tentang',
    'nav.contact': 'Kontak',
    'nav.cta': 'Hubungi Kami',
    'hero.badge': 'CloudNet 1.2 Update — Sekarang Tersedia',
    'hero.title1': 'Solusi Minecraft',
    'hero.title2': 'Profesional',
    'hero.title3': 'untuk Anda',
    'hero.desc': 'Dari setup server hingga pengembangan plugin — kami menyediakan layanan teknis Minecraft berkualitas tinggi untuk kebutuhan Anda.',
    'hero.btn1': 'Lihat Layanan',
    'hero.btn2': 'Konsultasi Gratis',
    'hero.stat1': 'Klien Puas',
    'hero.stat2': 'Jenis Layanan',
    'hero.stat3': 'Support Aktif',
    'products.tag': 'LAYANAN KAMI',
    'products.title': 'Pilih Layanan Yang Anda Butuhkan',
    'products.desc': 'Semua layanan dirancang khusus untuk ekosistem Minecraft dengan standar teknis tertinggi.',
    'card.setup.desc': 'Setup server Minecraft dari awal hingga siap digunakan. Konfigurasi optimal, performa stabil, dan keamanan terjamin.',
    'card.setup.f1': 'Konfigurasi penuh',
    'card.setup.f2': 'Optimasi performa',
    'card.setup.f3': 'Garansi setup berjalan',
    'card.hire.desc': 'Rekrut developer Minecraft dedicated untuk tim atau server Anda secara permanen maupun jangka panjang.',
    'card.hire.f1': 'Dedicated full-time',
    'card.hire.f2': 'Spesialis Java / Bedrock',
    'card.hire.f3': 'Terverifikasi & terpercaya',
    'card.replica.desc': 'Duplikasi server Minecraft yang sudah ada — tidak termasuk world dan data player.',
    'card.replica.f1': 'Kloning akurat 11:12',
    'card.replica.f2': 'Full configurasi',
    'card.replica.f3': 'Tanpa downtime lama',
    'card.pluginreplica.desc': 'Duplikasi konfigurasi plugin dari server lain secara akurat — tanpa perlu menyentuh world atau data pemain.',
    'card.pluginreplica.f1': 'Kloning plugin & config',
    'card.pluginreplica.f2': 'Tanpa transfer world/data',
    'card.pluginreplica.f3': 'Kompatibel semua versi',
    'card.tag.hot': 'HOT',
    'card.plugins.desc': 'Koleksi plugin premium Minecraft pilihan dengan fitur lengkap dan kompatibilitas tinggi untuk berbagai versi server.',
    'card.plugins.f1': 'Plugin terupdate',
    'card.plugins.f2': 'Kompatibel multiversi',
    'card.plugins.f3': 'Dukungan instalasi',
    'card.script.desc': 'Pembuatan script kustom sesuai kebutuhan server Anda — automation, sistem ekonomi, mini-game, dan berbagai fitur unik lainnya.',
    'card.script.f1': 'Kustom sesuai request',
    'card.script.f2': 'Revisi hingga selesai',
    'card.script.f3': 'Source code diserahkan',
    'card.tag.exclusive': 'EKSKLUSIF',
    'card.legend.desc': 'Paket senjata legendaris dengan model, texture, dan efek custom berkualitas tinggi. Jadikan server Anda tampil berbeda dari yang lain.',
    'card.legend.f1': 'Model 3D custom',
    'card.legend.f2': 'Texture HD eksklusif',
    'card.legend.f3': 'Efek partikel unik',
    'card.legend.f4': 'Kompatibel semua versi',
    'card.legend.btn': 'Dapatkan Pack',
    'card.order': 'Pesan Sekarang',
    'about.tag': 'TENTANG CLOUDNET',
    'about.title': 'Mengapa Memilih CloudNet?',
    'about.desc': 'CloudNet hadir sebagai penyedia layanan teknis Minecraft yang mengutamakan kualitas dan kepuasan klien. Dengan pengalaman di dunia pengembangan server Minecraft, kami memahami apa yang dibutuhkan server Anda untuk berkembang.',
    'about.p1.title': 'Terpercaya',
    'about.p1.desc': 'Setiap layanan disertai garansi dan transparansi penuh dalam proses pengerjaan.',
    'about.p2.title': 'Cepat & Efisien',
    'about.p2.desc': 'Pengerjaan tepat waktu dengan komunikasi aktif dari awal hingga akhir.',
    'about.p3.title': 'Support 24/7',
    'about.p3.desc': 'Tim kami siap membantu kapan saja melalui WhatsApp dan platform lainnya.',
    'about.changelog.title': 'CloudNet v1.2 — Catatan Update',
    'about.cl3': 'Peningkatan signifikan kualitas <strong>Script Creation</strong>',
    'about.cl4': 'Alur order lebih cepat dan terstruktur',
    'about.cl5': 'Harga lebih kompetitif tanpa mengurangi kualitas',
    'about.cl6': 'Response time lebih cepat & responsif',
    'about.cl7': 'Konsultasi lebih personal dan terarah',
    'about.cl8': 'Kebijakan revisi lebih fleksibel',
    'footer.tagline': 'Layanan teknis Minecraft profesional dengan standar kualitas tertinggi.',
    'footer.col1.title': 'Layanan',
    'footer.col2.title': 'Informasi',
    'footer.col2.l1': 'Beranda',
    'footer.col2.l2': 'Tentang Kami',
    'footer.col2.l3': 'Semua Layanan',
    'footer.col2.l4': 'Hubungi Kami',
    'footer.col3.title': 'Informasi Kontak',
    'footer.active': 'Aktif 24/7 via WhatsApp',
    'footer.specialist': 'Spesialis Minecraft Server',
    'footer.copy': '© 2025 CloudNet. Seluruh hak dilindungi.',
    'footer.sub': 'Minecraft Store & Development Services',
  },
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact Us',
    'hero.badge': 'CloudNet 1.2 Update — Now Available',
    'hero.title1': 'Minecraft Solutions',
    'hero.title2': 'Professional',
    'hero.title3': 'for You',
    'hero.desc': 'From server setup to plugin development — we provide high-quality Minecraft technical services for your needs.',
    'hero.btn1': 'View Services',
    'hero.btn2': 'Free Consultation',
    'hero.stat1': 'Happy Clients',
    'hero.stat2': 'Service Types',
    'hero.stat3': 'Active Support',
    'products.tag': 'OUR SERVICES',
    'products.title': 'Choose the Service You Need',
    'products.desc': 'All services are specially designed for the Minecraft ecosystem with the highest technical standards.',
    'card.setup.desc': 'Set up a Minecraft server from scratch to ready-to-use. Optimal configuration, stable performance, and guaranteed security.',
    'card.setup.f1': 'Full configuration',
    'card.setup.f2': 'Performance optimization',
    'card.setup.f3': 'Setup guarantee',
    'card.hire.desc': 'Hire a dedicated Minecraft developer for your team or server on a permanent or long-term basis.',
    'card.hire.f1': 'Dedicated full-time',
    'card.hire.f2': 'Java / Bedrock specialist',
    'card.hire.f3': 'Verified & trusted',
    'card.replica.desc': 'Duplicate an existing Minecraft server — including world, plugins, configuration, and player data accurately.',
    'card.replica.f1': 'Accurate 1:1 cloning',
    'card.replica.f2': 'World & data transfer',
    'card.replica.f3': 'Minimal downtime',
    'card.pluginreplica.desc': 'Accurately duplicate plugin configurations from another server — without touching the world or player data.',
    'card.pluginreplica.f1': 'Plugin & config cloning',
    'card.pluginreplica.f2': 'No world/data transfer',
    'card.pluginreplica.f3': 'All versions compatible',
    'card.tag.hot': 'HOT',
    'card.plugins.desc': 'A curated collection of premium Minecraft plugins with complete features and high compatibility for various server versions.',
    'card.plugins.f1': 'Up-to-date plugins',
    'card.plugins.f2': 'Multi-version compatible',
    'card.plugins.f3': 'Installation support',
    'card.script.desc': 'Custom script creation tailored to your server — automation, economy systems, mini-games, and various other unique features.',
    'card.script.f1': 'Custom per request',
    'card.script.f2': 'Revisions until done',
    'card.script.f3': 'Source code delivered',
    'card.tag.exclusive': 'EXCLUSIVE',
    'card.legend.desc': 'Legendary weapon pack with high-quality custom models, textures, and effects. Make your server stand out from the rest.',
    'card.legend.f1': 'Custom 3D models',
    'card.legend.f2': 'Exclusive HD textures',
    'card.legend.f3': 'Unique particle effects',
    'card.legend.f4': 'All versions compatible',
    'card.legend.btn': 'Get the Pack',
    'card.order': 'Order Now',
    'about.tag': 'ABOUT CLOUDNET',
    'about.title': 'Why Choose CloudNet?',
    'about.desc': 'CloudNet is a Minecraft technical service provider that prioritizes quality and client satisfaction. With experience in Minecraft server development, we understand what your server needs to grow.',
    'about.p1.title': 'Trusted',
    'about.p1.desc': 'Every service comes with a guarantee and full transparency throughout the process.',
    'about.p2.title': 'Fast & Efficient',
    'about.p2.desc': 'On-time delivery with active communication from start to finish.',
    'about.p3.title': 'Support 24/7',
    'about.p3.desc': 'Our team is ready to help anytime via WhatsApp and other platforms.',
    'about.changelog.title': 'CloudNet v1.2 — Update Notes',
    'about.cl3': 'Significantly improved <strong>Script Creation</strong> quality',
    'about.cl4': 'Faster and more structured order flow',
    'about.cl5': 'More competitive pricing without compromising quality',
    'about.cl6': 'Faster and more responsive support',
    'about.cl7': 'More personal and focused consultation experience',
    'about.cl8': 'More flexible revision policy',
    'footer.tagline': 'Professional Minecraft technical services with the highest quality standards.',
    'footer.col1.title': 'Services',
    'footer.col2.title': 'Information',
    'footer.col2.l1': 'Home',
    'footer.col2.l2': 'About Us',
    'footer.col2.l3': 'All Services',
    'footer.col2.l4': 'Contact Us',
    'footer.col3.title': 'Contact Information',
    'footer.active': 'Active 24/7 via WhatsApp',
    'footer.specialist': 'Minecraft Server Specialist',
    'footer.copy': '© 2025 CloudNet. All rights reserved.',
    'footer.sub': 'Minecraft Store & Development Services',
  }
};

const langConfig = {
  id: { flag: '🇮🇩', label: 'ID', name: 'Bahasa Indonesia', sub: 'Indonesian' },
  en: { flag: '🇬🇧', label: 'EN', name: 'English',          sub: 'English'     }
};

let currentLang = localStorage.getItem('cn-lang') || 'id';

// ===== APPLY TRANSLATIONS =====
function applyTranslations(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
}

// ===== UPDATE BUTTON =====
function updateLangButton(lang) {
  const cfg = langConfig[lang];
  const flagEl  = document.getElementById('langFlag');
  const labelEl = document.getElementById('langLabel');
  if (flagEl)  flagEl.textContent  = cfg.flag;
  if (labelEl) labelEl.textContent = cfg.label;
}

// ===== BUILD DROPDOWN =====
function buildLangDropdown() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;

  btn.removeAttribute('onclick');

  const wrapper = document.createElement('div');
  wrapper.className = 'lang-wrapper';
  btn.parentNode.insertBefore(wrapper, btn);
  wrapper.appendChild(btn);

  const chevron = document.createElement('span');
  chevron.className = 'lang-chevron';
  chevron.innerHTML = `<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"><polyline points="2,4 6,8 10,4"/></svg>`;
  btn.appendChild(chevron);

  const dropdown = document.createElement('div');
  dropdown.className = 'lang-dropdown';
  dropdown.id = 'langDropdown';

  Object.entries(langConfig).forEach(([code, cfg]) => {
    const opt = document.createElement('div');
    opt.className = `lang-option${code === currentLang ? ' active' : ''}`;
    opt.dataset.lang = code;
    opt.innerHTML = `
      <span class="lang-option-flag">${cfg.flag}</span>
      <span class="lang-option-text">
        <span class="lang-option-name">${cfg.name}</span>
        <span class="lang-option-sub">${cfg.sub}</span>
      </span>
      <span class="lang-option-check">
        <svg viewBox="0 0 14 14" fill="none" stroke="#4ade80" stroke-width="2.5"
          stroke-linecap="round" stroke-linejoin="round">
          <polyline points="2,7 5.5,10.5 12,3"/>
        </svg>
      </span>`;
    opt.addEventListener('click', () => selectLang(code));
    dropdown.appendChild(opt);
  });

  wrapper.appendChild(dropdown);

  btn.addEventListener('click', e => {
    e.stopPropagation();
    dropdown.classList.contains('visible') ? closeDropdown() : openDropdown();
  });

  document.addEventListener('click', closeDropdown);
  dropdown.addEventListener('click', e => e.stopPropagation());
}

function openDropdown() {
  document.getElementById('langToggle')?.classList.add('open');
  document.getElementById('langDropdown')?.classList.add('visible');
}

function closeDropdown() {
  document.getElementById('langToggle')?.classList.remove('open');
  document.getElementById('langDropdown')?.classList.remove('visible');
}

function selectLang(lang) {
  if (lang === currentLang) { closeDropdown(); return; }
  currentLang = lang;
  localStorage.setItem('cn-lang', lang);
  applyTranslations(lang);
  updateLangButton(lang);
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });
  closeDropdown();
}

function toggleLang() {
  selectLang(currentLang === 'id' ? 'en' : 'id');
}

// ===== WHATSAPP =====
function openWA(product) {
  const msg = currentLang === 'en'
    ? `Hello, I'm interested in the *${product}* service from CloudNet. Could I get more information?`
    : `Halo, saya ingin membeli layanan *${product}* dari CloudNet. Bisakah saya mendapatkan informasi lebih lanjut?`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('.nav-item').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== ACTIVE NAV ON SCROLL =====
const sections = document.querySelectorAll('section[id], footer[id]');
const navItems  = document.querySelectorAll('.nav-item');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(i => i.classList.remove('active'));
      document.querySelector(`.nav-item[href="#${entry.target.id}"]`)?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
sections.forEach(s => sectionObserver.observe(s));

// ===== FADE IN =====
const fadeEls = document.querySelectorAll('.product-card, .pillar, .update-card, .hero-badge, .stat-item');
fadeEls.forEach(el => el.classList.add('fade-in'));
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const idx = Array.from(fadeEls).indexOf(entry.target);
      setTimeout(() => entry.target.classList.add('visible'), 60 * (idx % 6));
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => fadeObserver.observe(el));

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  buildLangDropdown();
  applyTranslations(currentLang);
  updateLangButton(currentLang);
});
