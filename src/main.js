import './style.css';
import { categories } from './data.js';

const SUBMIT_URL = 'https://github.com/pal404error/nonAI-submissions-/issues';

const palette = [
  '#0071e3', '#34c759', '#ff9500', '#ff3b30', '#af52de', '#5856d6',
  '#ff2d55', '#00c7be', '#8e8e93', '#636366', '#5ac8fa', '#ffe44d',
  '#ff6482', '#30d158', '#66d4ff', '#ffd60a', '#bf5af2', '#ff9f0a',
];

function appIcon(name) {
  const clean = name.replace(/[^a-zA-Z0-9]/g, '');
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  const bg = palette[Math.abs(hash) % palette.length];
  const letters = clean.length >= 2 ? clean.slice(0, 2) : clean[0];
  return { letters: letters.toUpperCase(), bg };
}

const SUBLIME = 'Sublime Text';

const flat = categories.flatMap(c => c.apps.map(a => ({ ...a, catId: c.id, catName: c.name, catIcon: c.icon })));
const totalApps = flat.length;
const totalOS = flat.filter(a => a.license === 'open-source').length;
const sublime = flat.find(a => a.name === SUBLIME);

let osOnly = false;
let query = '';
let activeCat = null;
let activeTab = 'today';

function render() {
  const matching = flat.filter(a => {
    if (osOnly && a.license !== 'open-source') return false;
    if (activeCat && a.catId !== activeCat) return false;
    if (query) {
      const q = query.toLowerCase();
      return a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q) || a.replaces.toLowerCase().includes(q);
    }
    return true;
  });

  const byCat = {};
  for (const a of matching) {
    if (!byCat[a.catId]) byCat[a.catId] = { ...categories.find(c => c.id === a.catId), apps: [] };
    byCat[a.catId].apps.push(a);
  }

  const isLanding = !query && !activeCat;
  const featured = flat.filter(a => a.license === 'open-source').slice(0, 10);

  const ic = name => { const i = appIcon(name); return `<div class="icon-box" style="background:${i.bg}">${i.letters}</div>`; };
  const icSmall = name => { const i = appIcon(name); return `<div class="icon-box icon-box--sm" style="background:${i.bg}">${i.letters}</div>`; };

  const sublimeCat = categories.find(c => c.id === sublime?.catId);

  const heroHtml = isLanding ? `
    <div class="hero">
      <div class="hero-card">
        <div class="hero-content">
          ${sublime ? `
            <div class="hero-badge">● Editor's Pick</div>
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;">
              ${icSmall(SUBLIME)}
              <div>
                <div style="font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.8px;">Code Editors</div>
                <h1 style="font-size:32px;margin-bottom:0;">${SUBLIME}</h1>
              </div>
            </div>
            <p style="max-width:500px;">${sublime.description} No AI features, no copilot, no telemetry — just a fast, native code editor that respects your workflow.</p>
            <div class="hero-actions">
              <a class="hero-btn" href="${sublime.url}" target="_blank" rel="noopener">View App →</a>
              <a class="hero-btn-outline" href="${SUBMIT_URL}" target="_blank" rel="noopener">Submit Yours</a>
            </div>
          ` : `
            <div class="hero-badge">● ${activeTab === 'today' ? "Editor's Pick" : 'Featured'}</div>
            <h1>Software Without Artificial Intelligence</h1>
            <p>A curated index of applications built on deterministic human logic — every entry verified to have zero AI dependencies or machine learning features.</p>
            <div class="hero-actions">
              <a class="hero-btn" href="${SUBMIT_URL}" target="_blank" rel="noopener">Submit an App →</a>
              <a class="hero-btn-outline" href="#" id="browse-link">Browse All Apps</a>
            </div>
          `}
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-num">${totalApps}</div>
              <div class="hero-stat-label">Apps</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">${categories.length}</div>
              <div class="hero-stat-label">Categories</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">${totalOS}</div>
              <div class="hero-stat-label">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ` : '';

  const appCardLarge = a => `<a class="card-large" href="${a.url}" target="_blank" rel="noopener">
    ${ic(a.name)}
    <h3>${a.name}</h3>
    <p>${a.description}</p>
    <span class="card-large-license ${a.license === 'open-source' ? 'os' : 'closed'}">${a.license === 'open-source' ? 'open source' : 'closed'}</span>
  </a>`;

  const appRowHtml = a => `<div class="app-row">
    ${ic(a.name)}
    <div class="app-row-info">
      <h4>${a.name}</h4>
      <div class="desc">${a.description}</div>
      <div class="app-row-meta">
        <span class="license-dot ${a.license === 'open-source' ? 'os' : 'closed'}"></span>
        <span class="replaces">→ replaces <span>${a.replaces}</span></span>
      </div>
    </div>
    <a href="${a.url}" target="_blank" rel="noopener" class="app-row-link">View ↗</a>
  </div>`;

  const catGridHtml = categories.map(c => {
    const count = osOnly ? flat.filter(a => a.catId === c.id && a.license === 'open-source').length : flat.filter(a => a.catId === c.id).length;
    const sel = activeCat === c.id;
    return `<a class="cat-card${sel ? ' active' : ''}" data-cat="${c.id}">
      <div class="cat-icon">${c.icon}</div>
      <h3>${c.name}</h3>
      <span class="cat-count">${count}</span>
    </a>`;
  }).join('');

  const sectionsHtml = Object.values(byCat).map(c => `
    <div class="cat-block">
      <div class="cat-block-header">
        <h3>${c.icon} ${c.name}</h3>
        <span class="count">${c.apps.length} app${c.apps.length !== 1 ? 's' : ''}</span>
      </div>
      <div class="app-list">${c.apps.map(appRowHtml).join('')}</div>
    </div>
  `).join('');

  const app = document.querySelector('#app');
  app.innerHTML = `
    <div class="tabbar">
      <div class="tabbar-inner">
        <a class="tabbar-brand" href="#" id="brand-link">nonAI<sup>™</sup></a>
        <a class="tab${activeTab === 'today' ? ' active' : ''}" href="#" data-tab="today">Today</a>
        <a class="tab${activeTab === 'apps' ? ' active' : ''} tab-hide" href="#" data-tab="apps">Apps</a>
        <a class="tab${activeTab === 'categories' ? ' active' : ''} tab-hide" href="#" data-tab="categories">Categories</a>
        <span class="tab-spacer"></span>
        <div class="tab-search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" id="search" placeholder="Search ${totalApps} apps" value="${query}" spellcheck="false" autocomplete="off">
        </div>
        <button class="tab-filter${osOnly ? ' active' : ''}" id="os-btn">${osOnly ? '✓' : '○'} OS</button>
        <a class="tab" href="${SUBMIT_URL}" target="_blank" rel="noopener" style="font-weight:600;color:var(--accent)">Submit</a>
      </div>
    </div>

    ${heroHtml}

    ${isLanding ? `
      <div class="content">
        <div class="section">
          <div class="section-header">
            <h2>Featured Apps</h2>
            <a href="${SUBMIT_URL}" target="_blank" rel="noopener">See All →</a>
          </div>
          <div class="section-subtitle">Our hand-picked selection of open-source, no-AI software</div>
          <div class="scroll-x">
            ${featured.map(appCardLarge).join('')}
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <h2>Browse Categories</h2>
          </div>
          <div class="section-subtitle">${categories.length} categories — all apps verified zero AI</div>
          <div class="cat-grid">${catGridHtml}</div>
        </div>

        ${sectionsHtml}
      </div>
    ` : `
      <div class="content">
        <div class="filtered-view">
          <div class="filtered-head">
            <h2>${activeCat ? `${categories.find(c => c.id === activeCat)?.icon} ${categories.find(c => c.id === activeCat)?.name}` : 'Search'}</h2>
            <span class="filtered-count">— ${matching.length} result${matching.length !== 1 ? 's' : ''}</span>
          </div>
          ${activeCat ? `<div class="filtered-desc">${categories.find(c => c.id === activeCat)?.description}</div>` : ''}
          ${matching.length > 0 ? `
            <div style="display:flex;flex-direction:column;gap:0;">
              ${matching.map(a => `<div class="app-row" style="border-bottom:1px solid var(--border);padding:12px 4px;">
                ${ic(a.name)}
                <div class="app-row-info">
                  <h4>${a.name}</h4>
                  <div class="desc">${a.description}</div>
                  <div class="app-row-meta">
                    <span class="license-dot ${a.license === 'open-source' ? 'os' : 'closed'}"></span>
                    <span class="replaces">→ replaces <span>${a.replaces}</span></span>
                  </div>
                </div>
                <a href="${a.url}" target="_blank" rel="noopener" class="app-row-link">View ↗</a>
              </div>`).join('')}
            </div>
          ` : `
            <div class="empty">
              <div class="empty-icon">🔍</div>
              <h3>No Results</h3>
              <p>Try broadening your search or clearing your filters.</p>
            </div>
          `}
        </div>
      </div>
    `}

    <footer>
      <div class="footer-inner">
        <p>Built by <a href="https://github.com/pal404error" target="_blank" rel="noopener">pal404error</a> · not affiliated with listed projects</p>
        <div class="footer-links">
          <a href="${SUBMIT_URL}" target="_blank" rel="noopener">Submit App</a>
          <a href="https://github.com/pal404error/nonAI-appstore" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </footer>
  `;

  bind();
}

function bind() {
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  const inp = $('#search');
  if (inp) inp.addEventListener('input', e => { query = e.target.value; if (query) activeTab = 'apps'; render(); });

  const os = $('#os-btn');
  if (os) os.addEventListener('click', () => { osOnly = !osOnly; render(); });

  $$('[data-cat]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      activeCat = el.dataset.cat;
      query = '';
      activeTab = 'categories';
      render();
    });
  });

  $$('[data-tab]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      activeTab = el.dataset.tab;
      query = '';
      activeCat = null;
      render();
    });
  });

  const brand = $('#brand-link');
  if (brand) brand.addEventListener('click', e => { e.preventDefault(); query = ''; activeCat = null; osOnly = false; activeTab = 'today'; render(); });

  const browse = $('#browse-link');
  if (browse) browse.addEventListener('click', e => { e.preventDefault(); activeTab = 'apps'; query = ''; render(); });
}

render();
