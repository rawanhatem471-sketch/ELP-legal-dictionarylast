/* =========================================================
   ELP LEGAL DICTIONARY
   3-FILE VERSION
   Arabic-first interface
   ========================================================= */


/* =========================================================
   DICTIONARY DATA
========================================================= */

const terms = [

  {
    id: 1,
    arabic: "الكيان القانوني",
    english: "Legal Status",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinition:
      "الحالة القانونية للشخص الطبيعي أو الاعتباري التي تحدد حقوقه والتزاماته أمام القانون.",

    fullDefinition:
      "هو الوضع القانوني الذي يعترف به القانون للشخص الطبيعي أو الاعتباري باعتباره وحدة مستقلة لها حقوق والتزامات قانونية، ويختلف نطاق هذه الحقوق والالتزامات بحسب طبيعة الشخص ونوع نشاطه.",

    keywords: [
      "طبيعة العمل",
      "Nature of business",
      "نوع النشاط",
      "Type of activity",
      "الشركة",
      "Company"
    ],

    related: [6, 2, 3],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 2,
    arabic: "رقم البطاقة الضريبية",
    english: "Tax Card No.",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinition:
      "رقم تعريف فريد يصدر للمسجلين ضريبيًا لتحديد الممول ومتابعة التزاماته ومعاملاته الضريبية.",

    fullDefinition:
      "هو رقم تعريف فريد يصدر عن الجهة الضريبية للأفراد أو الشركات المسجلين ضريبيًا، ويستخدم للتعرف على الممول ومتابعة التزاماته والمعاملات المالية الخاضعة للضريبة.",

    keywords: [
      "الرقم الضريبي",
      "Tax number",
      "معرف الضرائب",
      "Tax ID",
      "المعاملات",
      "Transactions"
    ],

    related: [1, 6],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 3,
    arabic: "التفويض",
    english: "Delegation",
    category: "القانون الإداري",
    categoryEn: "Administrative Law",

    shortDefinition:
      "إسناد مهام أو مسؤوليات محددة إلى طرف آخر للقيام بها نيابةً عن الطرف المفوض.",

    fullDefinition:
      "هو إسناد شخص أو جهة لمهام أو واجبات أو مسؤوليات محددة إلى شخص أو جهة أخرى، مثل الموظف أو الوكيل أو المتعهد، للقيام بها نيابةً عن الطرف المفوض وفقًا للنطاق المحدد للتفويض.",

    keywords: [
      "الإنابة",
      "Authorization",
      "التكليف",
      "Assignment"
    ],

    related: [7, 1],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 4,
    arabic: "مراقبة جودة",
    english: "Quality Control",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinition:
      "عملية التحقق من توافق الأعمال المنفذة مع المعايير والمتطلبات المحددة.",

    fullDefinition:
      "هي عملية التحقق من أن الأعمال المنفذة تتوافق مع المواصفات والمعايير المحددة في العقد، من خلال الفحص والاختبار وإجراءات مراقبة الجودة اللازمة لاكتشاف العيوب أو حالات عدم المطابقة ومعالجتها.",

    keywords: [
      "ضبط الجودة",
      "Quality assurance",
      "التأكد من الجودة",
      "Quality verification"
    ],

    related: [9, 5],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 5,
    arabic: "فسخ العقد",
    english: "Termination",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinition:
      "إنهاء العقد قانونيًا قبل إتمام تنفيذه، سواء بالاتفاق أو نتيجة إخلال أحد الأطراف بالتزاماته.",

    fullDefinition:
      "هو إنهاء العقد قبل إتمام تنفيذه، سواء باتفاق الأطراف أو نتيجة إخلال أحد الأطراف بالتزاماته التعاقدية، وذلك وفقًا لشروط العقد والقانون واجب التطبيق.",

    keywords: [
      "إنهاء العقد",
      "Contract Termination",
      "إنهاء التعاقد",
      "Termination of Agreement"
    ],

    related: [9, 8, 10],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 6,
    arabic: "وكيل تجاري",
    english: "Commercial Agent",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinition:
      "شخص يمثل الأصيل في المعاملات والأنشطة التجارية، بما في ذلك عمليات البيع والشراء.",

    fullDefinition:
      "هو شخص أو جهة تمثل الأصيل في المعاملات التجارية، بما في ذلك الأنشطة المرتبطة بالبيع والشراء، وذلك في حدود نطاق الوكالة المتفق عليه.",

    keywords: [
      "وكالة تجارية",
      "Commercial Agency Contract",
      "سمسار",
      "Broker"
    ],

    related: [1, 7, 8],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 7,
    arabic: "واجب الإخطار",
    english: "Duty to Notify",
    category: "القانون التجاري",
    categoryEn: "Commercial Law",

    shortDefinition:
      "التزام الوكيل بإبلاغ الأصيل بالمعلومات المهمة المتعلقة بعلاقة الوكالة.",

    fullDefinition:
      "هو التزام يفرض على الوكيل إبلاغ الأصيل بالمعلومات المهمة والمرتبطة بعلاقة الوكالة، بما يساعد على الشفافية واتخاذ القرارات المناسبة.",

    keywords: [
      "الشفافية",
      "Transparency",
      "الإفصاح",
      "Disclosure"
    ],

    related: [6, 8],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 8,
    arabic: "السرية",
    english: "Confidentiality",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinition:
      "التزام بعدم إفشاء المعلومات السرية الخاصة بالطرف الآخر أو الجهة المحمية.",

    fullDefinition:
      "هو الالتزام بحماية المعلومات السرية وعدم إفشائها إلى أطراف غير مصرح لها، خاصة عندما يتم الحصول على هذه المعلومات من خلال علاقة تعاقدية أو علاقة تقوم على الثقة.",

    keywords: [
      "واجب الولاء",
      "Duty of loyalty",
      "علاقة محل الثقة",
      "Fiduciary Relationship"
    ],

    related: [6, 7, 5],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 9,
    arabic: "مدة العقد",
    english: "Contract Term",
    category: "القانون المدني",
    categoryEn: "Civil Law",

    shortDefinition:
      "الفترة الزمنية التي يظل خلالها العقد ساريًا وتستمر خلالها حقوق والتزامات الأطراف.",

    fullDefinition:
      "هي الفترة الزمنية التي يظل العقد خلالها نافذًا، وتستمر خلالها الحقوق والالتزامات المتفق عليها، مع مراعاة شروط العقد والقانون واجب التطبيق.",

    keywords: [
      "تجديد العقد",
      "Contract Renewal",
      "انتهاء العقد",
      "Contract Expiration",
      "مدة الالتزام",
      "Obligation Period"
    ],

    related: [5, 6],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  },


  {
    id: 10,
    arabic: "الاختصاص القضائي",
    english: "Competent Jurisdiction",
    category: "القانون الإداري",
    categoryEn: "Administrative Law",

    shortDefinition:
      "المحكمة أو الجهة القضائية المختصة بنظر والفصل في النزاعات وفقًا لقواعد الاختصاص.",

    fullDefinition:
      "هي المحكمة أو الجهة القضائية التي تتمتع بالاختصاص القانوني لنظر والفصل في النزاعات الناشئة عن عقد أو علاقة قانونية وفقًا للقواعد القانونية المنظمة للاختصاص.",

    keywords: [
      "النزاع القضائي",
      "Legal Dispute",
      "مكان التقاضي",
      "Litigation Venue",
      "التحكيم الدولي",
      "International Arbitration"
    ],

    related: [5, 9],

    source:
      "Public-source demo content from the project workbook",

    lastUpdated:
      "2026-08-17"
  }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

  {
    name: "القانون الجنائي",
    english: "Criminal Law",
    icon: "⚖",
    description: "الجرائم والسرقة والاحتيال والمصطلحات المرتبطة بها."
  },

  {
    name: "القانون المدني",
    english: "Civil Law",
    icon: "▤",
    description: "العقود والتعويض والمسؤولية والالتزامات."
  },

  {
    name: "قانون الأسرة",
    english: "Family Law",
    icon: "♧",
    description: "الزواج والطلاق والحضانة والمسائل الأسرية."
  },

  {
    name: "القانون التجاري",
    english: "Commercial Law",
    icon: "▣",
    description: "الشركات والتجارة والعلاقات التجارية."
  },

  {
    name: "قانون العمل",
    english: "Labor Law",
    icon: "◈",
    description: "العمل والأجور وعلاقات العمل."
  },

  {
    name: "القانون الإداري",
    english: "Administrative Law",
    icon: "⌂",
    description: "التنظيم والسلطات والتراخيص."
  },

  {
    name: "القانون الدستوري",
    english: "Constitutional Law",
    icon: "◇",
    description: "الدستور والحقوق والحريات."
  },

  {
    name: "مصطلحات قانونية عامة",
    english: "General Legal Terms",
    icon: "§",
    description: "مصطلحات قانونية شائعة في مختلف المجالات."
  }

];


/* =========================================================
   STATE
========================================================= */

const app = document.getElementById("app");
const savedCount = document.getElementById("savedCount");
const toast = document.getElementById("toast");

const state = {

  saved:
    readStorage("elpSaved", []),

  recent:
    readStorage("elpRecent", []),

  route:
    "home",

  query:
    "",

  category:
    "الكل",

  englishLetter:
    "الكل",

  arabicLetter:
    "الكل",

  speakingId:
    null

};


/* =========================================================
   STORAGE
========================================================= */

function readStorage(key, fallback) {

  try {

    const value =
      JSON.parse(
        localStorage.getItem(key)
      );

    return value ?? fallback;

  } catch {

    return fallback;

  }

}


function writeStorage(key, value) {

  try {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  } catch {}

}


/* =========================================================
   HELPERS
========================================================= */

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/[&<>"']/g, c => ({

      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"

    }[c]));

}


function findTerm(id) {

  return terms.find(
    t => t.id === Number(id)
  );

}


function isSaved(id) {

  return state.saved.includes(
    Number(id)
  );

}


function showToast(message) {

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(
      () =>
        toast.classList.remove("show"),
      2200
    );

}


function updateSavedCount() {

  savedCount.textContent =
    state.saved.length;

}


function saveState() {

  writeStorage(
    "elpSaved",
    state.saved
  );

  writeStorage(
    "elpRecent",
    state.recent
  );

  updateSavedCount();

}


/* =========================================================
   RECENT
========================================================= */

function addRecent(id) {

  id = Number(id);

  state.recent = [

    id,

    ...state.recent.filter(
      x => x !== id
    )

  ].slice(0, 6);

  saveState();

}


/* =========================================================
   SAVE
========================================================= */

function toggleSaved(id) {

  id = Number(id);

  if (isSaved(id)) {

    state.saved =
      state.saved.filter(
        x => x !== id
      );

    showToast(
      "تم حذف المصطلح من المحفوظات."
    );

  } else {

    state.saved.unshift(id);

    showToast(
      "تم حفظ المصطلح بنجاح."
    );

  }

  saveState();

  render();

}


/* =========================================================
   ROUTING
========================================================= */

function setRoute(route) {

  state.route =
    route;

  state.query =
    "";

  state.category =
    "الكل";

  state.englishLetter =
    "الكل";

  state.arabicLetter =
    "الكل";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  render();

}


/* =========================================================
   SEARCH
========================================================= */

function normalize(value) {

  return String(value || "")
    .toLocaleLowerCase("ar-EG")
    .trim();

}


function matchesQuery(term, q) {

  if (!q)
    return true;

  const haystack = [

    term.arabic,

    term.english,

    term.category,

    term.categoryEn,

    term.shortDefinition,

    term.fullDefinition,

    ...(term.keywords || [])

  ].join(" ");

  return normalize(haystack)
    .includes(
      normalize(q)
    );

}


/* =========================================================
   LETTER FILTER
========================================================= */

function matchesEnglishLetter(term) {

  if (
    state.englishLetter === "الكل"
  )
    return true;

  return normalize(
    term.english
  ).startsWith(
    normalize(
      state.englishLetter
    )
  );

}


function matchesArabicLetter(term) {

  if (
    state.arabicLetter === "الكل"
  )
    return true;

  return term.arabic
    .trim()
    .startsWith(
      state.arabicLetter
    );

}


function filteredTerms() {

  return terms.filter(term =>

    matchesQuery(
      term,
      state.query
    )

    &&

    (
      state.category === "الكل"
      ||
      term.category === state.category
    )

    &&

    matchesEnglishLetter(term)

    &&

    matchesArabicLetter(term)

  );

}


/* =========================================================
   TERM CARD
   Arabic + English ONLY
   NO DEFINITION ON CARD
========================================================= */

function termCard(term) {

  const saved =
    isSaved(term.id);

  return `

    <article class="term-card">

      <div class="term-top">

        <div>

          <div class="term-ar">
            ${escapeHtml(term.arabic)}
          </div>

          <div class="term-en">
            ${escapeHtml(term.english)}
          </div>

        </div>

        <button
          class="btn icon ${saved ? "saved" : ""}"
          title="${saved ? "إزالة من المحفوظات" : "حفظ المصطلح"}"
          data-action="save"
          data-id="${term.id}"
        >
          ${saved ? "★" : "☆"}
        </button>

      </div>


      <div class="card-category">

        <span>
          ${escapeHtml(term.category)}
        </span>

        <small>
          ${escapeHtml(term.categoryEn)}
        </small>

      </div>


      <div class="card-actions">

        <button
          class="btn primary"
          data-action="open"
          data-id="${term.id}"
        >
          عرض المصطلح
        </button>

        <button
          class="btn speak-button"
          data-action="speak"
          data-id="${term.id}"
          title="نطق المصطلح"
        >
          🔊
        </button>

      </div>

    </article>

  `;

}


/* =========================================================
   ENGLISH ALPHABET
========================================================= */

function englishAlphabet(active = "الكل") {

  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      .split("");

  return `

    <div class="alphabet">

      <button
        class="alpha-btn ${
          active === "الكل"
            ? "active"
            : ""
        }"
        data-action="englishLetter"
        data-letter="الكل"
      >
        الكل
      </button>

      ${letters.map(letter => `

        <button
          class="alpha-btn ${
            active === letter
              ? "active"
              : ""
          }"
          data-action="englishLetter"
          data-letter="${letter}"
        >
          ${letter}
        </button>

      `).join("")}

    </div>

  `;

}


/* =========================================================
   ARABIC ALPHABET
========================================================= */

function arabicAlphabet(active = "الكل") {

  const letters = [

    "ا","ب","ت","ث","ج","ح","خ",
    "د","ذ","ر","ز","س","ش","ص",
    "ض","ط","ظ","ع","غ","ف","ق",
    "ك","ل","م","ن","ه","و","ي"

  ];

  return `

    <div class="arabic-alphabet">

      <button
        class="arabic-alpha-btn ${
          active === "الكل"
            ? "active"
            : ""
        }"
        data-action="arabicLetter"
        data-letter="الكل"
      >
        الكل
      </button>

      ${letters.map(letter => `

        <button
          class="arabic-alpha-btn ${
            active === letter
              ? "active"
              : ""
          }"
          data-action="arabicLetter"
          data-letter="${letter}"
        >
          ${letter}
        </button>

      `).join("")}

    </div>

  `;

}


/* =========================================================
   HOME
========================================================= */

function homeView() {

  const recentTerms =
    state.recent
      .map(findTerm)
      .filter(Boolean)
      .slice(0, 3);


  const featured =
    terms.slice(0, 6);


  return `

    <section class="hero">

      <div class="container hero-content">

        <div class="eyebrow">
          البوابة القانونية المصرية • خدمة المعرفة
        </div>

        <h1>
          القاموس القانوني
        </h1>

        <p>
          ابحث عن المصطلحات القانونية،
          تعرف على معانيها،
          واستكشف المفاهيم القانونية حسب التصنيف.
        </p>


        <form
          class="search-box"
          id="homeSearch"
        >

          <input
            id="homeSearchInput"
            type="search"
            autocomplete="off"
            placeholder="ابحث عن مصطلح قانوني..."
            aria-label="البحث في القاموس القانوني"
          >

          <button type="submit">
            بحث
          </button>

        </form>

      </div>

    </section>


    <div class="quick-strip">

      <div class="container">

        <div class="quick-strip-inner">

          <div class="quick-title">
            تصفح بالإنجليزية
          </div>

          ${englishAlphabet()}

        </div>


        <div class="arabic-browse-row">

          <div class="quick-title">
            تصفح بالعربية
          </div>

          ${arabicAlphabet()}

        </div>

      </div>

    </div>


    <section class="section">

      <div class="container">

        <div class="section-head">

          <div>

            <h2>
              التصنيفات القانونية
            </h2>

            <p>
              تصفح القاموس حسب المجال القانوني.
            </p>

          </div>

          <button
            class="text-link"
            data-route="browse"
          >
            عرض الكل ←
          </button>

        </div>


        <div class="category-grid">

          ${categories.map(category => `

            <button
              class="category-card"
              data-action="category"
              data-category="${escapeHtml(category.name)}"
            >

              <div class="category-icon">
                ${category.icon}
              </div>

              <strong>
                ${escapeHtml(category.name)}
              </strong>

              <span class="category-en">
                ${escapeHtml(category.english)}
              </span>

              <span>
                ${escapeHtml(category.description)}
              </span>

            </button>

          `).join("")}

        </div>

      </div>

    </section>


    <section
      class="section"
      style="padding-top:0"
    >

      <div class="container">

        <div class="section-head">

          <div>

            <h2>
              المصطلحات المضافة حديثًا
            </h2>

            <p>
              مجموعة من المصطلحات التجريبية في القاموس.
            </p>

          </div>

          <button
            class="text-link"
            data-route="browse"
          >
            تصفح الكل ←
          </button>

        </div>


        <div class="term-grid">

          ${featured
            .map(termCard)
            .join("")}

        </div>

      </div>

    </section>


    ${
      recentTerms.length

        ? `

          <section
            class="section"
            style="padding-top:0"
          >

            <div class="container">

              <div class="section-head">

                <div>

                  <h2>
                    شوهد مؤخرًا
                  </h2>

                  <p>
                    وصول سريع إلى المصطلحات التي فتحتها.
                  </p>

                </div>

                <button
                  class="text-link"
                  data-route="recent"
                >
                  عرض السجل ←
                </button>

              </div>


              <div class="term-grid">

                ${recentTerms
                  .map(termCard)
                  .join("")}

              </div>

            </div>

          </section>

        `

        : ""
    }

  `;

}


/* =========================================================
   RESULTS
========================================================= */

function resultsView() {

  const results =
    filteredTerms();


  return `

    <section class="page-head">

      <div class="container">

        <h1>
          نتائج البحث
        </h1>

        <p>

          ${
            state.query

              ? `نتائج البحث عن:
                 “${escapeHtml(state.query)}”`

              : "تصفح المصطلحات القانونية."

          }

        </p>

      </div>

    </section>


    <section class="section">

      <div class="container results-layout">


        <aside class="filters">

          <h3>
            تصفية النتائج
          </h3>


          <div class="filter-group">

            <label>
              البحث
            </label>

            <input
              id="resultSearch"
              type="search"
              value="${escapeHtml(state.query)}"
              placeholder="ابحث..."
            >

          </div>


          <div class="filter-group">

            <label>
              التصنيف القانوني
            </label>

            <select id="categoryFilter">

              <option>الكل</option>

              ${categories.map(c => `

                <option
                  ${
                    state.category === c.name
                      ? "selected"
                      : ""
                  }
                >
                  ${escapeHtml(c.name)}
                </option>

              `).join("")}

            </select>

          </div>


          <button
            class="btn"
            id="resetFilters"
          >
            إعادة ضبط الفلاتر
          </button>

        </aside>


        <div>

          <div class="results-toolbar">

            <span class="result-count">

              <strong>
                ${results.length}
              </strong>

              مصطلح متاح

            </span>


            <button
              class="text-link"
              data-route="browse"
            >
              تصفح أ-ي ←
            </button>

          </div>


          ${
            results.length

              ? `

                <div class="term-grid">

                  ${results
                    .map(termCard)
                    .join("")}

                </div>

              `

              : `

                <div class="no-results">

                  <h3>
                    لم يتم العثور على نتائج
                  </h3>

                  <p>
                    جربي كلمة أخرى أو ابحثي بالإنجليزية
                    أو استخدمي أحد التصنيفات.
                  </p>

                  <button
                    class="btn primary"
                    id="noResultReset"
                  >
                    إعادة البحث
                  </button>

                </div>

              `
          }

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   BROWSE
========================================================= */

function browseView() {

  const results =
    filteredTerms();


  return `

    <section class="browse-head">

      <div class="container">

        <h1>
          تصفح المصطلحات
        </h1>

        <p>
          اختر حرفًا بالعربية أو الإنجليزية
          لاستكشاف المصطلحات.
        </p>


        <h3 class="browse-label">
          الحروف الإنجليزية A-Z
        </h3>

        ${englishAlphabet(
          state.englishLetter
        )}


        <h3 class="browse-label">
          الحروف العربية أ-ي
        </h3>

        ${arabicAlphabet(
          state.arabicLetter
        )}

      </div>

    </section>


    <section class="section">

      <div class="container">


        <div class="results-toolbar">

          <span class="result-count">

            <strong>
              ${results.length}
            </strong>

            مصطلح متاح

          </span>


          <select
            id="browseCategory"
            class="btn"
          >

            <option>الكل</option>

            ${categories.map(c => `

              <option
                ${
                  state.category === c.name
                    ? "selected"
                    : ""
                }
              >
                ${escapeHtml(c.name)}
              </option>

            `).join("")}

          </select>

        </div>


        ${
          results.length

            ? `

              <div class="term-grid">

                ${results
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                لا توجد مصطلحات لهذا الحرف حاليًا.

              </div>

            `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   BOOKMARKS
========================================================= */

function bookmarksView() {

  const savedTerms =
    state.saved
      .map(findTerm)
      .filter(Boolean);


  return `

    <section class="page-head">

      <div class="container">

        <h1>
          المصطلحات المحفوظة
        </h1>

        <p>
          المصطلحات التي قمتِ بحفظها على هذا المتصفح.
        </p>

      </div>

    </section>


    <section class="section">

      <div class="container">

        ${
          savedTerms.length

            ? `

              <div class="term-grid">

                ${savedTerms
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                <h3>
                  لا توجد مصطلحات محفوظة
                </h3>

                <p>
                  اضغطي ☆ بجانب أي مصطلح لإضافته للمحفوظات.
                </p>

                <button
                  class="btn primary"
                  data-route="browse"
                >
                  تصفح المصطلحات
                </button>

              </div>

            `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   RECENT
========================================================= */

function recentView() {

  const recentTerms =
    state.recent
      .map(findTerm)
      .filter(Boolean);


  return `

    <section class="page-head">

      <div class="container">

        <h1>
          شوهد مؤخرًا
        </h1>

        <p>
          آخر المصطلحات التي قمتِ بفتحها.
        </p>

      </div>

    </section>


    <section class="section">

      <div class="container">

        ${
          recentTerms.length

            ? `

              <div class="term-grid">

                ${recentTerms
                  .map(termCard)
                  .join("")}

              </div>

            `

            : `

              <div class="empty-state">

                <h3>
                  لا توجد مصطلحات تم عرضها مؤخرًا
                </h3>

                <p>
                  افتحي أي مصطلح وسيظهر هنا.
                </p>

              </div>

            `
        }

      </div>

    </section>

  `;

}


/* =========================================================
   DETAIL PAGE
========================================================= */

function detailView(id) {

  const term =
    findTerm(id);


  if (!term)
    return homeView();


  addRecent(term.id);


  const related =
    term.related
      .map(findTerm)
      .filter(Boolean);


  return `

    <section class="detail-wrap">

      <div class="container">


        <div class="breadcrumb">

          <button
            class="text-link"
            data-route="home"
          >
            الرئيسية
          </button>

          /

          <button
            class="text-link"
            data-route="browse"
          >
            القاموس القانوني
          </button>

          /

          ${escapeHtml(term.english)}

        </div>


        <article class="detail-card">


          <header class="detail-header">

            <div class="term-ar">
              ${escapeHtml(term.arabic)}
            </div>

            <div class="term-en">
              ${escapeHtml(term.english)}
            </div>


            <div class="detail-meta">

              <span class="badge">

                ${escapeHtml(term.category)}

              </span>

              <span class="badge">

                ${escapeHtml(term.categoryEn)}

              </span>

              <span class="badge">

                آخر تحديث:
                ${escapeHtml(term.lastUpdated)}

              </span>

            </div>


            <div class="detail-actions">

              <button
                class="btn speak-detail"
                data-action="speak"
                data-id="${term.id}"
              >
                🔊 نطق المصطلح
              </button>


              <button
                class="btn"
                data-action="save"
                data-id="${term.id}"
              >
                ${
                  isSaved(term.id)
                    ? "★ محفوظ"
                    : "☆ حفظ المصطلح"
                }
              </button>


              <button
                class="btn"
                onclick="window.print()"
              >
                🖨 طباعة
              </button>


              <button
                class="btn"
                data-route="browse"
              >
                ← العودة للقاموس
              </button>

            </div>

          </header>


          <div class="detail-body">


            <div class="definition-tabs">

              <button
                class="tab-btn active"
                data-tab="simple"
              >
                التعريف المختصر
              </button>

              <button
                class="tab-btn"
                data-tab="full"
              >
                التعريف الموسع
              </button>

            </div>


            <div
              id="definitionContent"
              class="definition-text arabic"
            >
              ${escapeHtml(
                term.shortDefinition
              )}
            </div>


            <div class="detail-section">

              <h3>
                الكلمات المفتاحية والمرادفات
              </h3>

              <div class="tags">

                ${term.keywords
                  .map(k => `

                    <span class="tag">

                      ${escapeHtml(k)}

                    </span>

                  `)
                  .join("")}

              </div>

            </div>


            <div class="detail-section">

              <h3>
                مصطلحات ذات صلة
              </h3>

              <div class="related-list">

                ${related
                  .map(r => `

                    <button
                      class="related-link"
                      data-action="open"
                      data-id="${r.id}"
                    >

                      ${escapeHtml(r.arabic)}

                      ·

                      ${escapeHtml(r.english)}

                    </button>

                  `)
                  .join("")}

              </div>

            </div>


            <div class="detail-section">

              <h3>
                المرجع
              </h3>

              <p class="definition-text">
                ${escapeHtml(term.source)}
              </p>


              <div class="notice">

                محتوى تجريبي لأغراض التدريب والنموذج الأولي.
                لا يقدم هذا القاموس استشارة قانونية رسمية.

              </div>

            </div>


          </div>

        </article>

      </div>

    </section>

  `;

}


/* =========================================================
   RENDER
========================================================= */

function render() {

  updateSavedCount();


  document.documentElement.lang =
    "ar";

  document.documentElement.dir =
    "rtl";

  document.body.classList.add("rtl");


  let html = "";


  if (state.route === "home") {

    html =
      homeView();

  }

  else if (state.route === "results") {

    html =
      resultsView();

  }

  else if (state.route === "browse") {

    html =
      browseView();

  }

  else if (state.route === "bookmarks") {

    html =
      bookmarksView();

  }

  else if (state.route === "recent") {

    html =
      recentView();

  }

  else if (
    state.route.startsWith("term/")
  ) {

    html =
      detailView(
        state.route.split("/")[1]
      );

  }


  app.innerHTML =
    html;


  updateNav();

  bindDynamicEvents();

}


/* =========================================================
   NAVIGATION
========================================================= */

function updateNav() {

  document
    .querySelectorAll(".nav-link")
    .forEach(el => {

      el.classList.toggle(
        "active",

        el.dataset.route ===
        state.route

      );

    });

}


/* =========================================================
   EVENTS
========================================================= */

function bindDynamicEvents() {


  /* HOME SEARCH */

  const homeSearch =
    document.getElementById(
      "homeSearch"
    );


  if (homeSearch) {

    homeSearch.addEventListener(
      "submit",
      e => {

        e.preventDefault();


        state.query =
          document
            .getElementById(
              "homeSearchInput"
            )
            .value
            .trim();


        state.route =
          "results";


        state.englishLetter =
          "الكل";

        state.arabicLetter =
          "الكل";


        render();

      }
    );

  }


  /* RESULTS SEARCH */

  const resultSearch =
    document.getElementById(
      "resultSearch"
    );


  if (resultSearch) {

    resultSearch.addEventListener(
      "input",
      e => {

        state.query =
          e.target.value;


        const cursor =
          e.target.selectionStart;


        render();


        const input =
          document.getElementById(
            "resultSearch"
          );


        if (input) {

          input.focus();

          input.setSelectionRange(
            cursor,
            cursor
          );

        }

      }
    );

  }


  /* CATEGORY */

  const categoryFilter =
    document.getElementById(
      "categoryFilter"
    );


  if (categoryFilter) {

    categoryFilter.addEventListener(
      "change",
      e => {

        state.category =
          e.target.value;

        render();

      }
    );

  }


  const browseCategory =
    document.getElementById(
      "browseCategory"
    );


  if (browseCategory) {

    browseCategory.addEventListener(
      "change",
      e => {

        state.category =
          e.target.value;

        render();

      }
    );

  }


  /* RESET */

  document
    .getElementById(
      "resetFilters"
    )
    ?.addEventListener(
      "click",
      () => {

        state.query =
          "";

        state.category =
          "الكل";

        state.englishLetter =
          "الكل";

        state.arabicLetter =
          "الكل";

        render();

      }
    );


  document
    .getElementById(
      "noResultReset"
    )
    ?.addEventListener(
      "click",
      () => {

        state.query =
          "";

        state.category =
          "الكل";

        state.englishLetter =
          "الكل";

        state.arabicLetter =
          "الكل";

        render();

      }
    );


  /* DEFINITION TABS */

  document
    .querySelectorAll(
      "[data-tab]"
    )
    .forEach(btn => {

      btn.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              "[data-tab]"
            )
            .forEach(
              b =>
                b.classList.remove(
                  "active"
                )
            );


          btn.classList.add(
            "active"
          );


          const termId =
            Number(
              state.route.split("/")[1]
            );


          const term =
            findTerm(termId);


          const content =
            document.getElementById(
              "definitionContent"
            );


          if (
            content &&
            term
          ) {

            content.textContent =
              btn.dataset.tab ===
              "simple"

                ? term.shortDefinition

                : term.fullDefinition;

          }

        }
      );

    });

}


/* =========================================================
   SPEECH
   SECOND CLICK STOPS SPEECH
========================================================= */

function speakTerm(id) {

  const term =
    findTerm(id);


  if (!term)
    return;


  if (
    !("speechSynthesis" in window)
  ) {

    showToast(
      "النطق غير مدعوم في هذا المتصفح."
    );

    return;

  }


  /*
     If the SAME term is currently speaking,
     clicking again stops it.
  */

  if (
    speechSynthesis.speaking &&
    state.speakingId ===
      Number(id)
  ) {

    speechSynthesis.cancel();

    state.speakingId =
      null;

    showToast(
      "تم إيقاف النطق."
    );

    return;

  }


  speechSynthesis.cancel();


  const text = `

    ${term.arabic}.

    ${term.english}.

    ${term.shortDefinition}.

  `;


  const utterance =
    new SpeechSynthesisUtterance(
      text
    );


  const voices =
    speechSynthesis.getVoices();


  const arabicVoice =
    voices.find(
      voice =>
        voice.lang
          ?.toLowerCase()
          .startsWith("ar")
    );


  if (arabicVoice) {

    utterance.voice =
      arabicVoice;

  }


  utterance.lang =
    arabicVoice?.lang ||
    "ar-EG";


  utterance.rate =
    0.9;


  utterance.onend =
    () => {

      state.speakingId =
        null;

    };


  utterance.onerror =
    () => {

      state.speakingId =
        null;

    };


  state.speakingId =
    Number(id);


  speechSynthesis.speak(
    utterance
  );


  showToast(
    "جاري نطق المصطلح... اضغطي مرة أخرى للإيقاف."
  );

}


/* =========================================================
   GLOBAL CLICK HANDLER
========================================================= */

document.addEventListener(
  "click",
  e => {


    /* ROUTE */

    const routeEl =
      e.target.closest(
        "[data-route]"
      );


    if (routeEl) {

      e.preventDefault();

      setRoute(
        routeEl.dataset.route
      );

      return;

    }


    /* ACTION */

    const actionEl =
      e.target.closest(
        "[data-action]"
      );


    if (!actionEl)
      return;


    const action =
      actionEl.dataset.action;


    /* OPEN */

    if (
      action === "open"
    ) {

      state.route =
        `term/${actionEl.dataset.id}`;

      render();

    }


    /* SAVE */

    else if (
      action === "save"
    ) {

      toggleSaved(
        actionEl.dataset.id
      );

    }


    /* SPEAK */

    else if (
      action === "speak"
    ) {

      speakTerm(
        actionEl.dataset.id
      );

    }


    /* ENGLISH LETTER */

    else if (
      action ===
      "englishLetter"
    ) {

      state.englishLetter =
        actionEl.dataset.letter;


      state.arabicLetter =
        "الكل";


      if (
        state.route ===
        "home"
      ) {

        state.query =
          "";

        state.category =
          "الكل";

        state.route =
          "browse";

      }


      render();

    }


    /* ARABIC LETTER */

    else if (
      action ===
      "arabicLetter"
    ) {

      state.arabicLetter =
        actionEl.dataset.letter;


      state.englishLetter =
        "الكل";


      if (
        state.route ===
        "home"
      ) {

        state.query =
          "";

        state.category =
          "الكل";

        state.route =
          "browse";

      }


      render();

    }


    /* CATEGORY */

    else if (
      action ===
      "category"
    ) {

      state.category =
        actionEl.dataset.category;


      state.englishLetter =
        "الكل";

      state.arabicLetter =
        "الكل";

      state.query =
        "";

      state.route =
        "results";


      render();

    }

  }
);


/* =========================================================
   SPEECH VOICES
========================================================= */

if (
  "speechSynthesis" in window &&
  speechSynthesis.onvoiceschanged !==
    undefined
) {

  speechSynthesis.onvoiceschanged =
    () => {};

}


/* =========================================================
   INITIALIZE
========================================================= */

updateSavedCount();

render();
