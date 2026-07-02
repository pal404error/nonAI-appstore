(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`search`,name:`Search Engines`,icon:`🔍`,description:`Traditional web search without AI-generated results or chatbots`,apps:[{name:`SearXNG`,url:`https://searxng.org`,license:`open-source`,description:`Self-hosted meta-search engine aggregating results from multiple sources`,replaces:`Google Search, Perplexity AI`},{name:`Marginalia`,url:`https://search.marginalia.nu`,license:`open-source`,description:`Search engine focused on non-JS, non-AI web content`,replaces:`AI-powered search results`},{name:`Wiby`,url:`https://wiby.me`,license:`closed-source`,description:`Search engine for the classic web — hand-crafted results`,replaces:`AI-curated search`},{name:`Mojeek`,url:`https://mojeek.com`,license:`closed-source`,description:`Independent search engine with its own crawler, no AI ranking`,replaces:`Google, Bing AI search`},{name:`Stract`,url:`https://stract.com`,license:`open-source`,description:`Open-source search engine with transparent ranking`,replaces:`AI search assistants`},{name:`DuckDuckGo`,url:`https://duckduckgo.com`,license:`closed-source`,description:`Privacy-first search engine (non-AI instant answers mode)`,replaces:`Google Search AI`}]},{id:`browsers`,name:`Browsers`,icon:`🌐`,description:`Web browsers without built-in AI assistants or AI features`,apps:[{name:`Firefox`,url:`https://mozilla.org/firefox`,license:`open-source`,description:`Full-featured browser with no built-in AI assistant`,replaces:`Arc browser, Edge Copilot`},{name:`LibreWolf`,url:`https://librewolf.net`,license:`open-source`,description:`Privacy-hardened Firefox fork — telemetry and AI features stripped`,replaces:`AI-integrated browsers`},{name:`Pale Moon`,url:`https://palemoon.org`,license:`open-source`,description:`Goanna-based browser focused on efficiency and customization`,replaces:`Chrome with AI features`},{name:`SeaMonkey`,url:`https://seamonkey-project.org`,license:`open-source`,description:`All-in-one internet suite — browser, email, editor, chat`,replaces:`AI-ified browsers`},{name:`Ungoogled Chromium`,url:`https://ungoogled-software.github.io`,license:`open-source`,description:`Chromium stripped of Google services and AI features`,replaces:`Google Chrome, Edge`}]},{id:`photo-editing`,name:`Photo Editing`,icon:`🎨`,description:`Image editors using traditional tools, no AI generation or upscaling`,apps:[{name:`GIMP`,url:`https://gimp.org`,license:`open-source`,description:`Full-featured raster graphics editor — layers, masks, filters`,replaces:`Adobe Photoshop AI, Canva AI`},{name:`Krita`,url:`https://krita.org`,license:`open-source`,description:`Professional digital painting and photo editing`,replaces:`AI image generators, Photoshop AI`},{name:`Darktable`,url:`https://darktable.org`,license:`open-source`,description:`RAW photo workflow and editing — non-destructive, no AI`,replaces:`Adobe Lightroom AI`},{name:`RawTherapee`,url:`https://rawtherapee.com`,license:`open-source`,description:`Cross-platform RAW photo processor with manual controls`,replaces:`AI photo enhancement`},{name:`Inkscape`,url:`https://inkscape.org`,license:`open-source`,description:`Vector graphics editor for illustrations and diagrams`,replaces:`Adobe Illustrator AI`},{name:`Paint.NET`,url:`https://getpaint.net`,license:`closed-source`,description:`Lightweight image and photo editor for Windows`,replaces:`Photoshop, AI editors`},{name:`Photopea`,url:`https://photopea.com`,license:`closed-source`,description:`Browser-based image editor with PSD support, no AI features`,replaces:`Photoshop AI, Canva AI`}]},{id:`video-editing`,name:`Video Editing`,icon:`🎬`,description:`Video editors with manual editing — no AI generation or auto-editing`,apps:[{name:`DaVinci Resolve`,url:`https://blackmagicdesign.com/products/davinciresolve`,license:`closed-source`,description:`Professional color grading and video editing (use without AI features)`,replaces:`AI video editors, Runway`},{name:`Kdenlive`,url:`https://kdenlive.org`,license:`open-source`,description:`Full-featured non-linear video editor for Linux and Windows`,replaces:`AI auto-editing tools`},{name:`Olive`,url:`https://olivevideoeditor.org`,license:`open-source`,description:`Professional open-source non-linear video editor`,replaces:`Premiere Pro AI, Final Cut AI`},{name:`Shotcut`,url:`https://shotcut.org`,license:`open-source`,description:`Cross-platform video editor with wide format support`,replaces:`AI video generation`},{name:`Avidemux`,url:`https://avidemux.org`,license:`open-source`,description:`Simple video cutting, filtering and encoding tool`,replaces:`AI video tools`}]},{id:`code-editors`,name:`Code Editors`,icon:`💻`,description:`Code editors and IDEs without AI code completion or generation`,apps:[{name:`VSCodium`,url:`https://vscodium.com`,license:`open-source`,description:`VS Code fork without telemetry and Microsoft AI features`,replaces:`VS Code Copilot, Cursor`},{name:`Neovim`,url:`https://neovim.io`,license:`open-source`,description:`Modern Vim fork — extensible, fast, no AI baked in`,replaces:`AI code assistants`},{name:`Geany`,url:`https://geany.org`,license:`open-source`,description:`Lightweight IDE with basic editing, no AI features`,replaces:`Copilot-enabled editors`},{name:`Kate`,url:`https://kate-editor.org`,license:`open-source`,description:`KDE advanced text editor with IDE features`,replaces:`AI coding assistants`},{name:`Emacs`,url:`https://gnu.org/software/emacs`,license:`open-source`,description:`Extensible text editor — add only the features you need`,replaces:`Cursor, Copilot-based editors`},{name:`Sublime Text`,url:`https://sublimetext.com`,license:`closed-source`,description:`Fast, lightweight code editor (disable AI plugins)`,replaces:`AI-powered code editors`}]},{id:`office`,name:`Office & Productivity`,icon:`📄`,description:`Office suites and productivity tools without AI assistants or AI generation`,apps:[{name:`LibreOffice`,url:`https://libreoffice.org`,license:`open-source`,description:`Full office suite — documents, spreadsheets, presentations`,replaces:`Microsoft 365 AI Copilot`},{name:`OnlyOffice`,url:`https://onlyoffice.com`,license:`open-source`,description:`Office suite with deep document compatibility`,replaces:`Google Docs AI, Office AI`},{name:`FreeOffice`,url:`https://freeoffice.com`,license:`closed-source`,description:`Microsoft Office-compatible suite, no AI features`,replaces:`Office 365 AI assistant`},{name:`Zathura`,url:`https://pwmt.org/projects/zathura`,license:`open-source`,description:`Minimal document viewer for PDF, EPUB, DjVu`,replaces:`AI document readers`}]},{id:`note-taking`,name:`Note Taking`,icon:`📝`,description:`Note-taking apps with manual organization — no AI writing or auto-suggest`,apps:[{name:`Obsidian`,url:`https://obsidian.md`,license:`closed-source`,description:`Local-first knowledge base (disable AI plugins)`,replaces:`Notion AI, Mem AI`},{name:`Joplin`,url:`https://joplinapp.org`,license:`open-source`,description:`Open-source note-taking with markdown and sync`,replaces:`Notion AI, AI note apps`},{name:`Zettlr`,url:`https://zettlr.com`,license:`open-source`,description:`Markdown editor for academic and research writing`,replaces:`AI writing assistants`},{name:`Trilium`,url:`https://github.com/zadam/trilium`,license:`open-source`,description:`Self-hosted hierarchical note-taking application`,replaces:`AI note-taking apps`},{name:`Standard Notes`,url:`https://standardnotes.com`,license:`open-source`,description:`Encrypted note-taking, plain text (disable AI extensions)`,replaces:`AI writing tools`}]},{id:`media-players`,name:`Media Players`,icon:`▶️`,description:`Media players without AI recommendations or AI-generated content`,apps:[{name:`VLC`,url:`https://videolan.org/vlc`,license:`open-source`,description:`Plays everything — no AI, no tracking, just playback`,replaces:`AI-recommendation media players`},{name:`MPC-HC`,url:`https://mpc-hc.org`,license:`open-source`,description:`Lightweight Windows media player, no AI features`,replaces:`AI-powered media apps`},{name:`mpv`,url:`https://mpv.io`,license:`open-source`,description:`Minimal powerful media player with scriptable interface`,replaces:`AI-recommendation players`},{name:`Foobar2000`,url:`https://foobar2000.org`,license:`closed-source`,description:`Advanced audio player with no AI features`,replaces:`Spotify AI recommendations`},{name:`Audacious`,url:`https://audacious-media-player.org`,license:`open-source`,description:`Lightweight audio player with Winamp-style interface`,replaces:`AI music recommendation`}]},{id:`messaging`,name:`Messaging & Email`,icon:`💬`,description:`Communication tools without AI chatbots, AI replies, or AI features`,apps:[{name:`Thunderbird`,url:`https://thunderbird.net`,license:`open-source`,description:`Full-featured email client (disable AI smart replies)`,replaces:`Gmail AI, Outlook AI`},{name:`Element`,url:`https://element.io`,license:`open-source`,description:`Matrix client for secure decentralized messaging`,replaces:`AI chatbots, Discord AI`},{name:`Signal`,url:`https://signal.org`,license:`open-source`,description:`Private messaging with end-to-end encryption, no AI`,replaces:`WhatsApp AI, Telegram AI`},{name:`Delta Chat`,url:`https://delta.chat`,license:`open-source`,description:`Email-based messenger — uses existing email infrastructure`,replaces:`AI messaging assistants`},{name:`SimpleX`,url:`https://simplex.chat`,license:`open-source`,description:`Privacy-first messaging without user identifiers`,replaces:`AI-integrated chat apps`}]},{id:`password-managers`,name:`Password Managers`,icon:`🔐`,description:`Password managers without AI features or AI-generated suggestions`,apps:[{name:`KeePassXC`,url:`https://keepassxc.org`,license:`open-source`,description:`Local password manager with strong encryption`,replaces:`AI-featured password managers`},{name:`Bitwarden`,url:`https://bitwarden.com`,license:`open-source`,description:`Self-hostable password manager (disable AI vault features)`,replaces:`AI password generators`},{name:`LessPass`,url:`https://lesspass.com`,license:`open-source`,description:`Deterministic password generator — no database needed`,replaces:`AI password tools`},{name:`pass`,url:`https://passwordstore.org`,license:`open-source`,description:`Standard Unix password manager using GPG encryption`,replaces:`AI-integrated auth managers`}]},{id:`file-sync`,name:`File Sync & Storage`,icon:`☁️`,description:`File storage and synchronization without AI organization or AI features`,apps:[{name:`Syncthing`,url:`https://syncthing.net`,license:`open-source`,description:`Peer-to-peer file sync without cloud dependency`,replaces:`Dropbox AI, Google Drive AI`},{name:`Nextcloud`,url:`https://nextcloud.com`,license:`open-source`,description:`Self-hosted cloud storage (use without AI apps)`,replaces:`Google Drive AI, iCloud AI`},{name:`Rclone`,url:`https://rclone.org`,license:`open-source`,description:`Command-line file sync for any cloud storage`,replaces:`AI cloud management tools`},{name:`FreeFileSync`,url:`https://freefilesync.org`,license:`open-source`,description:`Folder comparison and file synchronization tool`,replaces:`AI-organized file systems`},{name:`Seafile`,url:`https://seafile.com`,license:`open-source`,description:`Cloud file sync with client-side encryption`,replaces:`Google Drive AI, OneDrive AI`}]},{id:`audio-editing`,name:`Audio Editing`,icon:`🎵`,description:`Audio editors using manual controls — no AI separation or generation`,apps:[{name:`Audacity`,url:`https://audacityteam.org`,license:`open-source`,description:`Multi-track audio editor and recorder`,replaces:`AI audio tools, Adobe Podcast AI`},{name:`LMMS`,url:`https://lmms.io`,license:`open-source`,description:`Digital audio workstation for music production`,replaces:`AI music generators`},{name:`MuseScore`,url:`https://musescore.org`,license:`open-source`,description:`Music notation software for composing and scoring`,replaces:`AI composition tools`},{name:`Ardour`,url:`https://ardour.org`,license:`open-source`,description:`Professional DAW for recording and mixing`,replaces:`AI mastering services`},{name:`Tenacity`,url:`https://tenacityaudio.org`,license:`open-source`,description:`Audacity fork focused on privacy, no telemetry`,replaces:`AI audio processing tools`}]},{id:`maps`,name:`Maps & Navigation`,icon:`🗺️`,description:`Mapping tools without AI routing, AI recommendations, or AI features`,apps:[{name:`OpenStreetMap`,url:`https://openstreetmap.org`,license:`open-source`,description:`Community-built map of the world, no AI data`,replaces:`Google Maps AI, Apple Maps AI`},{name:`OsmAnd`,url:`https://osmand.net`,license:`open-source`,description:`Offline maps with turn-by-turn navigation`,replaces:`Google Maps AI routing`},{name:`Organic Maps`,url:`https://organicmaps.app`,license:`open-source`,description:`Privacy-friendly offline maps app`,replaces:`AI-recommendation maps`},{name:`QMapShack`,url:`https://github.com/Maproom/qmapshack`,license:`open-source`,description:`Planning and management of GPS routes`,replaces:`AI route planning`},{name:`Marble`,url:`https://marble.kde.org`,license:`open-source`,description:`KDE virtual globe and world atlas`,replaces:`Google Earth AI features`}]}],t=`https://github.com/pal404error/nonAI-appstore/pulls`,n=[`#0071e3`,`#34c759`,`#ff9500`,`#ff3b30`,`#af52de`,`#5856d6`,`#ff2d55`,`#00c7be`,`#8e8e93`,`#636366`,`#5ac8fa`,`#ffe44d`,`#ff6482`,`#30d158`,`#66d4ff`,`#ffd60a`,`#bf5af2`,`#ff9f0a`];function r(e){let t=e.replace(/[^a-zA-Z0-9]/g,``),r=0;for(let t=0;t<e.length;t++)r=r*31+e.charCodeAt(t)|0;let i=n[Math.abs(r)%n.length];return{letters:(t.length>=2?t.slice(0,2):t[0]).toUpperCase(),bg:i}}var i=`Sublime Text`,a=e.flatMap(e=>e.apps.map(t=>({...t,catId:e.id,catName:e.name,catIcon:e.icon}))),o=a.length,s=a.filter(e=>e.license===`open-source`).length,c=a.find(e=>e.name===i),l=!1,u=``,d=null,f=`today`;function p(){let n=a.filter(e=>{if(l&&e.license!==`open-source`||d&&e.catId!==d)return!1;if(u){let t=u.toLowerCase();return e.name.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.replaces.toLowerCase().includes(t)}return!0}),p={};for(let t of n)p[t.catId]||(p[t.catId]={...e.find(e=>e.id===t.catId),apps:[]}),p[t.catId].apps.push(t);let h=!u&&!d,g=a.filter(e=>e.license===`open-source`).slice(0,10),_=e=>{let t=r(e);return`<div class="icon-box" style="background:${t.bg}">${t.letters}</div>`},v=e=>{let t=r(e);return`<div class="icon-box icon-box--sm" style="background:${t.bg}">${t.letters}</div>`};e.find(e=>e.id===c?.catId);let y=h?`
    <div class="hero">
      <div class="hero-card">
        <div class="hero-content">
          ${c?`
            <div class="hero-badge">● Editor's Pick</div>
            <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;">
              ${v(i)}
              <div>
                <div style="font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.8px;">Code Editors</div>
                <h1 style="font-size:32px;margin-bottom:0;">${i}</h1>
              </div>
            </div>
            <p style="max-width:500px;">${c.description} No AI features, no copilot, no telemetry — just a fast, native code editor that respects your workflow.</p>
            <div class="hero-actions">
              <a class="hero-btn" href="${c.url}" target="_blank" rel="noopener">View App →</a>
              <a class="hero-btn-outline" href="${t}" target="_blank" rel="noopener">Submit Yours</a>
            </div>
          `:`
            <div class="hero-badge">● ${f===`today`?`Editor's Pick`:`Featured`}</div>
            <h1>Software Without Artificial Intelligence</h1>
            <p>A curated index of applications built on deterministic human logic — every entry verified to have zero AI dependencies or machine learning features.</p>
            <div class="hero-actions">
              <a class="hero-btn" href="${t}" target="_blank" rel="noopener">Submit an App →</a>
              <a class="hero-btn-outline" href="#" id="browse-link">Browse All Apps</a>
            </div>
          `}
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-num">${o}</div>
              <div class="hero-stat-label">Apps</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">${e.length}</div>
              <div class="hero-stat-label">Categories</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">${s}</div>
              <div class="hero-stat-label">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `:``,b=e=>`<a class="card-large" href="${e.url}" target="_blank" rel="noopener">
    ${_(e.name)}
    <h3>${e.name}</h3>
    <p>${e.description}</p>
    <span class="card-large-license ${e.license===`open-source`?`os`:`closed`}">${e.license===`open-source`?`open source`:`closed`}</span>
  </a>`,x=e=>`<div class="app-row">
    ${_(e.name)}
    <div class="app-row-info">
      <h4>${e.name}</h4>
      <div class="desc">${e.description}</div>
      <div class="app-row-meta">
        <span class="license-dot ${e.license===`open-source`?`os`:`closed`}"></span>
        <span class="replaces">→ replaces <span>${e.replaces}</span></span>
      </div>
    </div>
    <a href="${e.url}" target="_blank" rel="noopener" class="app-row-link">View ↗</a>
  </div>`,S=e.map(e=>{let t=l?a.filter(t=>t.catId===e.id&&t.license===`open-source`).length:a.filter(t=>t.catId===e.id).length;return`<a class="cat-card${d===e.id?` active`:``}" data-cat="${e.id}">
      <div class="cat-icon">${e.icon}</div>
      <h3>${e.name}</h3>
      <span class="cat-count">${t}</span>
    </a>`}).join(``),C=Object.values(p).map(e=>`
    <div class="cat-block">
      <div class="cat-block-header">
        <h3>${e.icon} ${e.name}</h3>
        <span class="count">${e.apps.length} app${e.apps.length===1?``:`s`}</span>
      </div>
      <div class="app-list">${e.apps.map(x).join(``)}</div>
    </div>
  `).join(``),w=document.querySelector(`#app`);w.innerHTML=`
    <div class="tabbar">
      <div class="tabbar-inner">
        <a class="tabbar-brand" href="#" id="brand-link">nonAI<sup>™</sup></a>
        <a class="tab${f===`today`?` active`:``}" href="#" data-tab="today">Today</a>
        <a class="tab${f===`apps`?` active`:``} tab-hide" href="#" data-tab="apps">Apps</a>
        <a class="tab${f===`categories`?` active`:``} tab-hide" href="#" data-tab="categories">Categories</a>
        <span class="tab-spacer"></span>
        <div class="tab-search">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input type="text" id="search" placeholder="Search ${o} apps" value="${u}" spellcheck="false" autocomplete="off">
        </div>
        <button class="tab-filter${l?` active`:``}" id="os-btn">${l?`✓`:`○`} OS</button>
        <a class="tab" href="${t}" target="_blank" rel="noopener" style="font-weight:600;color:var(--accent)">Submit</a>
      </div>
    </div>

    ${y}

    ${h?`
      <div class="content">
        <div class="section">
          <div class="section-header">
            <h2>Featured Apps</h2>
            <a href="${t}" target="_blank" rel="noopener">See All →</a>
          </div>
          <div class="section-subtitle">Our hand-picked selection of open-source, no-AI software</div>
          <div class="scroll-x">
            ${g.map(b).join(``)}
          </div>
        </div>

        <div class="section">
          <div class="section-header">
            <h2>Browse Categories</h2>
          </div>
          <div class="section-subtitle">${e.length} categories — all apps verified zero AI</div>
          <div class="cat-grid">${S}</div>
        </div>

        ${C}
      </div>
    `:`
      <div class="content">
        <div class="filtered-view">
          <div class="filtered-head">
            <h2>${d?`${e.find(e=>e.id===d)?.icon} ${e.find(e=>e.id===d)?.name}`:`Search`}</h2>
            <span class="filtered-count">— ${n.length} result${n.length===1?``:`s`}</span>
          </div>
          ${d?`<div class="filtered-desc">${e.find(e=>e.id===d)?.description}</div>`:``}
          ${n.length>0?`
            <div style="display:flex;flex-direction:column;gap:0;">
              ${n.map(e=>`<div class="app-row" style="border-bottom:1px solid var(--border);padding:12px 4px;">
                ${_(e.name)}
                <div class="app-row-info">
                  <h4>${e.name}</h4>
                  <div class="desc">${e.description}</div>
                  <div class="app-row-meta">
                    <span class="license-dot ${e.license===`open-source`?`os`:`closed`}"></span>
                    <span class="replaces">→ replaces <span>${e.replaces}</span></span>
                  </div>
                </div>
                <a href="${e.url}" target="_blank" rel="noopener" class="app-row-link">View ↗</a>
              </div>`).join(``)}
            </div>
          `:`
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
          <a href="${t}" target="_blank" rel="noopener">Submit App</a>
          <a href="https://github.com/pal404error/nonAI-appstore" target="_blank" rel="noopener">GitHub</a>
        </div>
      </div>
    </footer>
  `,m()}function m(){let e=e=>document.querySelector(e),t=e=>document.querySelectorAll(e),n=e(`#search`);n&&n.addEventListener(`input`,e=>{u=e.target.value,u&&(f=`apps`),p()});let r=e(`#os-btn`);r&&r.addEventListener(`click`,()=>{l=!l,p()}),t(`[data-cat]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),d=e.dataset.cat,u=``,f=`categories`,p()})}),t(`[data-tab]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),f=e.dataset.tab,u=``,d=null,p()})});let i=e(`#brand-link`);i&&i.addEventListener(`click`,e=>{e.preventDefault(),u=``,d=null,l=!1,f=`today`,p()});let a=e(`#browse-link`);a&&a.addEventListener(`click`,e=>{e.preventDefault(),f=`apps`,u=``,p()})}p();