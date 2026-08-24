/* Demo dictionary data supplied by the Week 3 workbook.
   Prototype/training content only — not authoritative legal advice. */

const terms = [
  {
    id: 1,
    arabic: "الكيان القانوني",
    english: "Legal Status",
    category: "Commercial Law",
    shortDefinition: "The legal condition of a natural or legal person that determines their rights and obligations under the law.",
    fullDefinition: "A natural or legal person recognized by law as an independent unit with legal rights and obligations. Depending on its nature, a legal entity may enter contracts, own rights, assume obligations, conduct legal and financial activities, and participate in transactions or legal proceedings.",
    keywords: ["طبيعة العمل", "Nature of business", "نوع النشاط", "Type of activity", "الشركة", "Company"],
    related: [6, 2, 3],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 2,
    arabic: "رقم البطاقة الضريبية",
    english: "Tax Card No.",
    category: "Commercial Law",
    shortDefinition: "A unique identification number issued to tax-registered individuals or companies to track tax obligations and taxable transactions.",
    fullDefinition: "A unique identification number issued by the tax authority to tax-registered individuals or companies. It is used to identify the taxpayer and track tax obligations and taxable financial transactions.",
    keywords: ["الرقم الضريبي", "Tax number", "معرف الضرائب", "Tax ID", "المعاملات", "Transactions"],
    related: [1, 6],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 3,
    arabic: "التفويض",
    english: "Delegation",
    category: "Administrative Law",
    shortDefinition: "Assigning another party to perform specific tasks or responsibilities on behalf of the delegating party.",
    fullDefinition: "The act of assigning another party, such as an employee, agent, or subcontractor, to perform specific tasks, duties, or responsibilities on behalf of the delegating party, while the delegating party retains ultimate responsibility and accountability for the delegated work.",
    keywords: ["الإنابة", "Authorization", "التكليف", "Assignment"],
    related: [7, 1],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 4,
    arabic: "مراقبة جودة",
    english: "Quality Control",
    category: "Commercial Law",
    shortDefinition: "The process of checking whether executed work complies with specified standards and requirements.",
    fullDefinition: "The process of verifying that executed work complies with the specifications and standards outlined in a contract through inspection, testing, and necessary quality-control procedures to ensure quality and identify and address defects or non-compliance.",
    keywords: ["ضبط الجودة", "Quality assurance", "التأكد من الجودة", "Quality verification"],
    related: [9, 5],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 5,
    arabic: "فسخ العقد",
    english: "Termination",
    category: "Civil Law",
    shortDefinition: "The legal ending of a contract before its full execution, by agreement or because of a breach.",
    fullDefinition: "The legal ending of a contract before its full execution, whether by agreement of the parties or as a result of one party failing to meet contractual obligations, according to the contract terms and applicable law.",
    keywords: ["إنهاء العقد", "Contract Termination", "إنهاء التعاقد", "Termination of Agreement"],
    related: [9, 8, 10],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 6,
    arabic: "وكيل تجاري",
    english: "Commercial Agent",
    category: "Commercial Law",
    shortDefinition: "An agent who represents a principal in commercial activities and sales or purchases.",
    fullDefinition: "A commercial agent is a party who represents a principal in commercial transactions, including activities connected with sales and purchases, within the agreed scope of agency.",
    keywords: ["وكالة تجارية", "Commercial Agency Contract", "سمسار", "Broker"],
    related: [1, 7, 8],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 7,
    arabic: "واجب الإخطار",
    english: "Duty to Notify",
    category: "Commercial Law",
    shortDefinition: "The duty of an agent to inform the principal of important information related to the agency.",
    fullDefinition: "An obligation requiring an agent to communicate important information relevant to the agency relationship to the principal, supporting transparency and informed decision-making.",
    keywords: ["الشفافية", "Transparency", "الإفصاح", "Disclosure"],
    related: [6, 8],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 8,
    arabic: "السرية",
    english: "Confidentiality",
    category: "Civil Law",
    shortDefinition: "An obligation not to disclose confidential information belonging to the principal or another protected party.",
    fullDefinition: "An obligation to protect confidential information and not disclose it to unauthorized parties, particularly where the information is received through a contractual or fiduciary relationship.",
    keywords: ["واجب الولاء", "Duty of loyalty", "علاقة محل الثقة", "Fiduciary Relationship"],
    related: [6, 7, 5],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 9,
    arabic: "مدة العقد",
    english: "Contract Term",
    category: "Civil Law",
    shortDefinition: "The period during which a contract remains valid.",
    fullDefinition: "The period of time during which the contract remains in force and its agreed rights and obligations continue to apply, subject to its terms and applicable law.",
    keywords: ["تجديد العقد", "Contract Renewal", "انتهاء العقد", "Contract Expiration", "مدة الالتزام", "Obligation Period"],
    related: [5, 6],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  },
  {
    id: 10,
    arabic: "الاختصاص القضائي",
    english: "Competent Jurisdiction",
    category: "Administrative Law",
    shortDefinition: "The court or judicial body competent to hear disputes arising from a contract.",
    fullDefinition: "The court or judicial body that has legal competence to hear and decide disputes arising from a contract or legal relationship, according to the applicable rules of jurisdiction.",
    keywords: ["النزاع القضائي", "Legal Dispute", "مكان التقاضي", "Litigation Venue", "التحكيم الدولي", "International arbitration"],
    related: [5, 9],
    source: "Public-source demo content from the project workbook",
    lastUpdated: "2026-08-17"
  }
];

const categories = [
  { name: "Criminal Law", icon: "⚖", description: "Crime, theft, fraud and related terms." },
  { name: "Civil Law", icon: "▤", description: "Contracts, compensation and liability." },
  { name: "Family Law", icon: "♧", description: "Marriage, divorce, custody and family matters." },
  { name: "Commercial Law", icon: "▣", description: "Companies, trade and commercial relationships." },
  { name: "Labor Law", icon: "◈", description: "Employment, salary and workplace terms." },
  { name: "Administrative Law", icon: "⌂", description: "Regulation, authority and licensing terms." },
  { name: "Constitutional Law", icon: "◇", description: "Constitution, rights and freedoms." },
  { name: "General Legal Terms", icon: "§", description: "Common terms used across legal fields." }
];
