const app = document.getElementById("app");
const savedCount = document.getElementById("savedCount");
const toast = document.getElementById("toast");

const state = {
  language: localStorage.getItem("elpLanguage") || "en",
  saved: readStorage("elpSaved", []),
  recent: readStorage("elpRecent", []),
  route: "home",
  query: "",
  category: "All Categories",
  letter: "All"
};

function readStorage(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}
function findTerm(id) { return terms.find(t => t.id === Number(id)); }
function isSaved(id) { return state.saved.includes(Number(id)); }

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function updateSavedCount() {
  savedCount.textContent = state.saved.length;
}
function saveState() {
  writeStorage("elpSaved", state.saved);
  writeStorage("elpRecent", state.recent);
  localStorage.setItem("elpLanguage", state.language);
  updateSavedCount();
}
function addRecent(id) {
  id = Number(id);
  state.recent = [id, ...state.recent.filter(x => x !== id)].slice(0, 6);
  saveState();
}
function toggleSaved(id) {
  id = Number(id);
  if (isSaved(id)) {
    state.saved = state.saved.filter(x => x !== id);
    showToast("Term removed from saved terms.");
  } else {
    state.saved.unshift(id);
    showToast("Term saved successfully.");
  }
  saveState();
  render();
}
function setRoute(route) {
  state.route = route;
  state.query = "";
  state.category = "All Categories";
  state.letter = "All";
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}
function normalize(value) {
  return String(value || "").toLocaleLowerCase();
}
function matchesQuery(term, q) {
  if (!q) return true;
  const haystack = [
    term.arabic, term.english, term.category,
    term.shortDefinition, term.fullDefinition, ...(term.keywords || [])
  ].join(" ");
  return normalize(haystack).includes(normalize(q));
}
function matchesLetter(term, letter) {
  if (letter === "All") return true;
  return normalize(term.english).startsWith(normalize(letter));
}
function filteredTerms() {
  return terms.filter(t =>
    matchesQuery(t, state.query) &&
    (state.category === "All Categories" || t.category === state.category) &&
    matchesLetter(t, state.letter)
  );
}

function termCard(term) {
  const saved = isSaved(term.id);
  return `
    <article class="term-card">
      <div class="term-top">
        <div>
          <div class="term-ar">${escapeHtml(term.arabic)}</div>
          <div class="term-en">${escapeHtml(term.english)}</div>
        </div>
        <button class="btn icon ${saved ? "saved" : ""}" title="${saved ? "Remove bookmark" : "Save term"}"
          data-action="save" data-id="${term.id}">${saved ? "★" : "☆"}</button>
      </div>
      <span class="badge">${escapeHtml(term.category)}</span>
      <p>${escapeHtml(term.shortDefinition)}</p>
      <div class="card-actions">
        <button class="btn primary" data-action="open" data-id="${term.id}">View Term</button>
        <button class="btn" data-action="speak" data-id="${term.id}">🔊</button>
      </div>
    </article>
  `;
}

function alphaButtons(active = "All", prefix = "") {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return `<div class="${prefix}alphabet">
    <button class="alpha-btn ${active === "All" ? "active" : ""}" data-action="letter" data-letter="All">All</button>
    ${letters.map(l => `<button class="alpha-btn ${active === l ? "active" : ""}" data-action="letter" data-letter="${l}">${l}</button>`).join("")}
  </div>`;
}

function homeView() {
  const recentTerms = state.recent.map(findTerm).filter(Boolean).slice(0, 3);
  const featured = terms.slice(0, 6);
  return `
    <section class="hero">
      <div class="container hero-content">
        <div class="eyebrow">Egyptian Legal Portal • Knowledge Service</div>
        <h1>ELP Legal Dictionary</h1>
        <p>Find legal terms, understand definitions, explore related concepts and browse the legal vocabulary by category.</p>
        <form class="search-box" id="homeSearch">
          <input id="homeSearchInput" type="search" autocomplete="off"
            placeholder="${state.language === "ar" ? "ابحث عن مصطلح قانوني..." : "Search a legal term..."}"
            aria-label="Search the legal dictionary">
          <button type="submit">Search</button>
        </form>
      </div>
    </section>

    <div class="quick-strip">
      <div class="container quick-strip-inner">
        <div class="quick-title">Browse by letter</div>
        ${alphaButtons("All")}
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="section-head">
          <div><h2>Legal Categories</h2><p>Browse the dictionary by area of law.</p></div>
          <button class="text-link" data-route="browse">View all →</button>
        </div>
        <div class="category-grid">
          ${categories.map(c => `
            <button class="category-card" data-action="category" data-category="${escapeHtml(c.name)}">
              <div class="category-icon">${c.icon}</div>
              <strong>${escapeHtml(c.name)}</strong>
              <span>${escapeHtml(c.description)}</span>
            </button>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <div class="section-head">
          <div><h2>Recently Added</h2><p>Demo terms included in the prototype.</p></div>
          <button class="text-link" data-route="browse">Browse all →</button>
        </div>
        <div class="term-grid">${featured.map(termCard).join("")}</div>
      </div>
    </section>

    ${recentTerms.length ? `
      <section class="section" style="padding-top:0">
        <div class="container">
          <div class="section-head">
            <div><h2>Recently Viewed</h2><p>Quick access to terms you opened.</p></div>
            <button class="text-link" data-route="recent">View history →</button>
          </div>
          <div class="term-grid">${recentTerms.map(termCard).join("")}</div>
        </div>
      </section>` : ""}
  `;
}

function resultsView() {
  const results = filteredTerms();
  return `
    <section class="page-head">
      <div class="container">
        <h1>Search Results</h1>
        <p>${state.query ? `Results for “${escapeHtml(state.query)}”` : "Browse the legal dictionary."}</p>
      </div>
    </section>
    <section class="section">
      <div class="container results-layout">
        <aside class="filters">
          <h3>Refine Results</h3>
          <div class="filter-group">
            <label for="resultSearch">Keyword</label>
            <input id="resultSearch" type="search" value="${escapeHtml(state.query)}" placeholder="Search...">
          </div>
          <div class="filter-group">
            <label for="categoryFilter">Legal Category</label>
            <select id="categoryFilter">
              <option>All Categories</option>
              ${categories.map(c => `<option ${state.category === c.name ? "selected" : ""}>${escapeHtml(c.name)}</option>`).join("")}
            </select>
          </div>
          <button class="btn" id="resetFilters">Reset filters</button>
        </aside>

        <div>
          <div class="results-toolbar">
            <span class="result-count"><strong>${results.length}</strong> term${results.length === 1 ? "" : "s"} found</span>
            <button class="text-link" data-route="browse">A-Z Browse →</button>
          </div>
          ${results.length
            ? `<div class="term-grid">${results.map(termCard).join("")}</div>`
            : `<div class="no-results">
                <h3>No exact match found</h3>
                <p>Try another spelling, English equivalent, keyword, or reset the filters.</p>
                <button class="btn primary" id="noResultReset">Reset Search</button>
              </div>`}
        </div>
      </div>
    </section>
  `;
}

function browseView() {
  const results = filteredTerms();
  return `
    <section class="browse-head">
      <div class="container">
        <h1>Browse Legal Terms A–Z</h1>
        <p>Select a letter or category to explore the dictionary without typing a search.</p>
        ${alphaButtons(state.letter, "browse-")}
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="results-toolbar">
          <span class="result-count"><strong>${results.length}</strong> available terms</span>
          <select id="browseCategory" class="btn" style="padding:9px 12px">
            <option>All Categories</option>
            ${categories.map(c => `<option ${state.category === c.name ? "selected" : ""}>${escapeHtml(c.name)}</option>`).join("")}
          </select>
        </div>
        ${results.length ? `<div class="term-grid">${results.map(termCard).join("")}</div>` :
          `<div class="empty-state">No terms are available for this filter yet.</div>`}
      </div>
    </section>
  `;
}

function bookmarksView() {
  const savedTerms = state.saved.map(findTerm).filter(Boolean);
  return `
    <section class="page-head">
      <div class="container">
        <h1>Saved Terms</h1>
        <p>Your bookmarked legal terms are stored locally in this browser.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${savedTerms.length ? `<div class="term-grid">${savedTerms.map(termCard).join("")}</div>` :
          `<div class="empty-state">
            <h3>No saved terms yet</h3>
            <p>Open a term and press ☆ to add it to your saved list.</p>
            <button class="btn primary" data-route="browse">Browse Terms</button>
          </div>`}
      </div>
    </section>
  `;
}

function recentView() {
  const recentTerms = state.recent.map(findTerm).filter(Boolean);
  return `
    <section class="page-head">
      <div class="container">
        <h1>Recently Viewed</h1>
        <p>Your latest opened terms are kept locally for quick access.</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        ${recentTerms.length ? `<div class="term-grid">${recentTerms.map(termCard).join("")}</div>` :
          `<div class="empty-state"><h3>No recently viewed terms</h3><p>Open a dictionary term and it will appear here.</p></div>`}
      </div>
    </section>
  `;
}

function detailView(id) {
  const term = findTerm(id);
  if (!term) return homeView();
  addRecent(term.id);
  const related = term.related.map(findTerm).filter(Boolean);
  return `
    <section class="detail-wrap">
      <div class="container">
        <div class="breadcrumb">
          <button class="text-link" data-route="home">Home</button> / 
          <button class="text-link" data-route="browse">Legal Dictionary</button> / 
          ${escapeHtml(term.english)}
        </div>
        <article class="detail-card">
          <header class="detail-header">
            <div class="term-ar">${escapeHtml(term.arabic)}</div>
            <div class="term-en">${escapeHtml(term.english)}</div>
            <div class="detail-meta">
              <span class="badge">${escapeHtml(term.category)}</span>
              <span class="badge">Updated ${escapeHtml(term.lastUpdated)}</span>
            </div>
            <div class="detail-actions">
              <button class="btn" data-action="speak" data-id="${term.id}">🔊 Text-to-Speech</button>
              <button class="btn" data-action="save" data-id="${term.id}">${isSaved(term.id) ? "★ Saved" : "☆ Save Term"}</button>
              <button class="btn" onclick="window.print()">🖨 Print</button>
              <button class="btn" data-route="browse">← Back to Dictionary</button>
            </div>
          </header>
          <div class="detail-body">
            <div class="definition-tabs">
              <button class="tab-btn active" data-tab="simple">Simple Definition</button>
              <button class="tab-btn" data-tab="full">Full Definition</button>
            </div>
            <div id="definitionContent" class="definition-text">${escapeHtml(term.shortDefinition)}</div>

            <div class="detail-section">
              <h3>Keywords & Synonyms</h3>
              <div class="tags">${term.keywords.map(k => `<span class="tag">${escapeHtml(k)}</span>`).join("")}</div>
            </div>

            <div class="detail-section">
              <h3>Related Terms</h3>
              <div class="related-list">
                ${related.map(r => `<button class="related-link" data-action="open" data-id="${r.id}">${escapeHtml(r.arabic)} · ${escapeHtml(r.english)}</button>`).join("")}
              </div>
            </div>

            <div class="detail-section">
              <h3>Reference</h3>
              <p class="definition-text">${escapeHtml(term.source)}</p>
              <div class="notice">Prototype/training content only. This dictionary does not provide authoritative legal advice.</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

function render() {
  updateSavedCount();
  document.documentElement.lang = state.language === "ar" ? "ar" : "en";
  document.body.classList.toggle("rtl", state.language === "ar");

  let html = "";
  if (state.route === "home") html = homeView();
  else if (state.route === "results") html = resultsView();
  else if (state.route === "browse") html = browseView();
  else if (state.route === "bookmarks") html = bookmarksView();
  else if (state.route === "recent") html = recentView();
  else if (state.route.startsWith("term/")) html = detailView(state.route.split("/")[1]);
  app.innerHTML = html;
  updateNav();
  bindDynamicEvents();
}

function updateNav() {
  document.querySelectorAll("[data-route]").forEach(el => {
    if (el.classList.contains("nav-link")) {
      el.classList.toggle("active", el.dataset.route === state.route);
    }
  });
}

function bindDynamicEvents() {
  const homeSearch = document.getElementById("homeSearch");
  if (homeSearch) {
    homeSearch.addEventListener("submit", e => {
      e.preventDefault();
      state.query = document.getElementById("homeSearchInput").value.trim();
      state.route = "results";
      state.letter = "All";
      render();
    });
  }

  const resultSearch = document.getElementById("resultSearch");
  if (resultSearch) {
    resultSearch.addEventListener("input", e => {
      state.query = e.target.value;
      render();
      const input = document.getElementById("resultSearch");
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    });
  }

  const categoryFilter = document.getElementById("categoryFilter");
  if (categoryFilter) categoryFilter.addEventListener("change", e => {
    state.category = e.target.value;
    render();
  });

  const browseCategory = document.getElementById("browseCategory");
  if (browseCategory) browseCategory.addEventListener("change", e => {
    state.category = e.target.value;
    render();
  });

  document.getElementById("resetFilters")?.addEventListener("click", () => {
    state.query = ""; state.category = "All Categories"; state.letter = "All"; render();
  });
  document.getElementById("noResultReset")?.addEventListener("click", () => {
    state.query = ""; state.category = "All Categories"; state.letter = "All"; render();
  });

  document.querySelectorAll("[data-tab]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-tab]").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const termId = Number(state.route.split("/")[1]);
      const term = findTerm(termId);
      const content = document.getElementById("definitionContent");
      if (content && term) {
        content.textContent = btn.dataset.tab === "simple" ? term.shortDefinition : term.fullDefinition;
      }
    });
  });
}

function speakTerm(id) {
  const term = findTerm(id);
  if (!term) return;
  if (!("speechSynthesis" in window)) {
    showToast("Text-to-Speech is not supported in this browser.");
    return;
  }
  speechSynthesis.cancel();
  const text = `${term.arabic}. ${term.english}. ${term.shortDefinition}. ${term.fullDefinition}`;
  const utterance = new SpeechSynthesisUtterance(text);
  const voices = speechSynthesis.getVoices();
  const arabicVoice = voices.find(v => v.lang?.toLowerCase().startsWith("ar"));
  if (arabicVoice) utterance.voice = arabicVoice;
  utterance.lang = arabicVoice?.lang || "ar-EG";
  utterance.rate = 0.9;
  speechSynthesis.speak(utterance);
  showToast("Reading term aloud...");
}

document.addEventListener("click", e => {
  const routeEl = e.target.closest("[data-route]");
  if (routeEl) {
    e.preventDefault();
    setRoute(routeEl.dataset.route);
    return;
  }

  const actionEl = e.target.closest("[data-action]");
  if (!actionEl) return;

  const action = actionEl.dataset.action;
  if (action === "open") {
    state.route = `term/${actionEl.dataset.id}`;
    render();
  } else if (action === "save") {
    toggleSaved(actionEl.dataset.id);
  } else if (action === "speak") {
    speakTerm(actionEl.dataset.id);
  } else if (action === "letter") {
    state.letter = actionEl.dataset.letter;
    if (state.route === "home") {
      state.query = "";
      state.category = "All Categories";
      state.route = "browse";
    }
    render();
  } else if (action === "category") {
    state.category = actionEl.dataset.category;
    state.letter = "All";
    state.query = "";
    state.route = "results";
    render();
  }
});

document.getElementById("languageToggle").addEventListener("click", () => {
  state.language = state.language === "en" ? "ar" : "en";
  saveState();
  document.getElementById("languageToggle").textContent = state.language === "en" ? "العربية" : "English";
  render();
});

if ("speechSynthesis" in window && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = () => {};
}

updateSavedCount();
document.getElementById("languageToggle").textContent = state.language === "en" ? "العربية" : "English";
render();
