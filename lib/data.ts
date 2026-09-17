export const site = {
  name: "Shaik Dada Ibrahim",
  title: "Business Analyst @ WyzMindZ Solutions · Automation & Agentic AI",
  location: "Bengaluru, India",
  email: "sdi.dadaibrahim.mj@gmail.com",
  phone: "+91 7997923771",
  social: {
    github: "https://github.com/dadaibrahim",
    linkedin: "https://linkedin.com/in/shaik-dada-ibrahim",
    whatsapp: "https://wa.link/7xk626"
  },
  summary:
    "Business Analyst at WyzMindZ Solutions (Suryojasvi Group), working across service delivery operations, data analytics, and automation on the AUTOSherpa automotive dealership CRM platform. Builds internal tooling and end-to-end workflow automations, with hands-on proficiency in n8n and agentic AI (LLM-driven pipelines) alongside strong Python and web fundamentals.",
  keywords: [
    "Business Analysis",
    "Workflow Automation",
    "n8n",
    "Agentic AI",
    "Python",
    "Next.js",
    "Google Apps Script",
    "Git",
    "CI/CD"
  ]
};

export const education = [
  { degree: "B.Tech in CSE", school: "G Pullaiah College of Engineering and Technology", year: "2025", location: "Kurnool, India", meta: "CGPA: 7.26" },
  { degree: "Diploma in CSE", school: "Govt Polytechnic for Minorities", year: "2022", location: "Kurnool, India", meta: "Percentage: 76%" },
  { degree: "10th SSC", school: "Z P High School", year: "2019", location: "Kurnool, India", meta: "GPA: 7.8" },
];

export const skills = {
  automation: ["n8n (cloud & self-hosted)", "GitHub Actions", "Google Apps Script", "Workflow Design"],
  agenticAI: ["LLM-driven AI Agents", "Prompt Engineering", "AI Content Pipelines", "Multi-provider AI Fallback (Gemini/OpenRouter/Groq)"],
  languages: ["Python", "JavaScript", "TypeScript", "SQL"],
  versionControl: ["Git", "GitHub"],
  tools: ["VS Code", "Jupyter Notebook", "Google Sheets/Excel (advanced formulas, VBA)"],
  scm: ["Branching", "Merging", "Release Management"],
  web: ["HTML", "CSS", "Bootstrap", "Next.js"],
  soft: ["Business Analysis", "Problem-solving", "Debugging", "Software Lifecycle Knowledge", "Team Leadership"]
};

export type Project = {
  name: string;
  stack: string[];
  description: string;
  highlights?: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "Automated Tech Blog Pipeline",
    stack: ["n8n", "Astro", "AI Agent (LLM)", "GitHub", "Render"],
    description:
      "Fully autonomous blog pipeline: an n8n workflow pulls trending dev topics, an AI agent drafts an original post, and it's committed straight to a live Astro site — no manual approval step.",
    highlights: [
      "Scheduled end-to-end flow: topic sourcing → AI drafting → Markdown generation → auto-commit → auto-deploy",
      "Runs on a self-hosted n8n instance with OAuth-based GitHub integration"
    ],
    repo: "https://github.com/dadaibrahim/my-blog"
  },
  {
    name: "AI-Powered News Blog Automation",
    stack: ["GitHub Actions", "Python", "Astro", "Gemini/OpenRouter/Groq"],
    description:
      "Daily automated tech news blog with a resilient 3-provider AI fallback chain — RSS stories are sourced, drafted into original articles, and published automatically via GitHub Actions.",
    highlights: [
      "Provider-fallback design keeps the pipeline running even if one AI API fails",
      "Explicit anti-plagiarism instruction set — drafts are original, not copied summaries"
    ],
    repo: "https://github.com/dadaibrahim/news-blog"
  },
  {
    name: "Billing & Payment Reminder Automation",
    stack: ["n8n", "Google Apps Script", "Google Sheets", "Gmail"],
    description:
      "Automation built for a dealership CRM's finance operations — matches outstanding receivables against invoice files and sends structured payment follow-up reminders automatically.",
    highlights: [
      "Cross-references live Receivables and Customer Details sheets against Drive-stored invoices",
      "Handles Drive API rate limits with batching/throttling for reliable runs"
    ]
  },
  {
    name: "BA Timesheet Leaderboard",
    stack: ["Next.js 14", "TypeScript", "Google Apps Script"],
    description:
      "Internal leaderboard app for tracking Business Analyst timesheet performance, evolved from a static prototype into a full App Router application backed by a cached Apps Script API.",
    highlights: [
      "Same-origin API route keeps the browser decoupled from backend credentials",
      "Token-authenticated Apps Script backend with server-side caching"
    ]
  },
  {
    name: "MRR Hierarchy Reporting System",
    stack: ["Google Sheets (ARRAYFORMULA/LET/LAMBDA)", "Excel VBA", "Python"],
    description:
      "Company-wide MRR reporting workbook rolling up costs across a multi-level org hierarchy, with automated data-quality flagging and a companion Python forecasting script.",
    highlights: [
      "Built a monolithic hierarchical-rollup formula with individual salary lookups",
      "Added automated warning flags for data mismatches across thousands of rows"
    ]
  },
  {
    name: "Spam & Fake User Detection",
    stack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    description:
      "Supervised learning pipeline to detect spam/fake profiles based on behavioral signals; evaluated with F1, PR, ROC-AUC.",
    highlights: [
      "Feature engineering (gender inference, click behavior, activity frequency)",
      "Model evaluation and visualization"
    ],
    repo: "https://github.com/dadaibrahim/spammer-and-fake-id-detection"
  },
  {
    name: "Adaptive Learning Platform (AI)",
    stack: ["Next.js", "Node.js", "Python (LLM Prompting)", "Gemini API"],
    description:
      "AI-powered platform that adapts content difficulty using schema-validated prompts and progressive rendering.",
    highlights: [
      "Prompt engineering & response validation",
      "Modular backend with clear separation of concerns"
    ],
    repo: "https://github.com/dadaibrahim/alpv2.git"
  },
  {
    name: "Hostel Management System",
    stack: ["Next.js", "Postgres", "Auth"],
    description:
      "Full-stack app for room allocation, payments, and maintenance tracking.",
  },
  {
    name: "E-commerce Website",
    stack: ["Next.js", "Stripe (mock)", "Tailwind"],
    description:
      "Clean product catalog, cart, and checkout flow (mock payments)."
  },
  {
    name: "Text-based JavaScript RPG",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "Retro-inspired terminal RPG with branching dialogs and inventory."
  }
];

export const publications = [
  {
    title: "AI-Driven Adaptive Learning Platform for Hyper-Personalized Education",
    venue: "Independent Publication",
    summary:
      "Explores real-time analytics and cognitive modeling for intelligent content delivery with behavioral personalization."
  }
];

export const certificates = [
  "AWS Cloud Practitioner – Foundations",
  "Java Development – SoloLearn",
  "Microsoft Azure Fundamentals",
  "Cambridge Linguaskills – English Communication"
];
