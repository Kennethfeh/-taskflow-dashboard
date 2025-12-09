import SectionHeading from "../components/SectionHeading";

const metrics = [
  { label: "Active tasks", value: "128" },
  { label: "Avg. SLA", value: "4.2h" },
  { label: "On-time delivery", value: "97%" },
];

const columns = [
  {
    name: "Backlog",
    tasks: [
      "Research auth flows",
      "Document design debt",
    ],
  },
  {
    name: "In Progress",
    tasks: [
      "Ship settings mock",
      "QA notifications",
    ],
  },
  {
    name: "Review",
    tasks: [
      "Accessibility sweep",
      "Handoff checklist",
    ],
  },
];

const initiatives = [
  {
    title: "Workflow composer",
    desc: "Drag + drop builder with guardrails and preview panels.",
    impact: "High",
  },
  {
    title: "Insight alerts",
    desc: "Failed SLAs stream into Ops Slack with quick triage actions.",
    impact: "Medium",
  },
];

export default function Dashboard() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <main id="main" className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <header className="space-y-10">
          <nav className="flex items-center justify-between" aria-label="Primary">
            <div className="font-semibold text-xl">TaskFlow</div>
            <div className="flex items-center gap-3 text-sm">
              <a className="hidden md:inline-flex border border-slate-200 px-4 py-2 rounded-full focus-ring" href="/blueprint">
                Blueprint
              </a>
              <a className="inline-flex px-5 py-2 rounded-full bg-indigo-600 text-white focus-ring" href="#handoff">
                Handoff docs
              </a>
            </div>
          </nav>
          <div className="app-shell p-10 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600">
                Admin dashboard concept
              </span>
              <p className="text-sm text-slate-500">Design + product + ops</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold">TaskFlow Control Center</h1>
                <p className="text-lg text-slate-600">
                  High-fidelity dashboard exploring how I orchestrate dense data, progressive disclosure, and developer-ready annotations. The blueprint route captures information architecture and component APIs.
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-slate-500">
                  <span>Role-based states</span>
                  <span>•</span>
                  <span>Realtime health</span>
                  <span>•</span>
                  <span>Audit-friendly</span>
                </div>
              </div>
              <div className="card-surface p-6 space-y-4" role="img" aria-label="Widget preview">
                <p className="text-sm text-slate-500">Asset status</p>
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-semibold">162 open</p>
                  <span className="rounded-full bg-emerald-100 text-emerald-700 text-xs px-3 py-1">Stable</span>
                </div>
                <div className="h-32 rounded-xl bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600" aria-hidden />
                <p className="text-xs text-slate-500">Graph compares SLA attainment vs. forecast.</p>
              </div>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="card-surface px-5 py-6">
                  <dt className="text-sm text-slate-500">{metric.label}</dt>
                  <dd className="text-2xl font-semibold mt-2">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="space-y-10" id="boards">
          <SectionHeading
            eyebrow="Workflow"
            title="Three swimlanes keep work visible"
            description="Cards inherit tokens defined in docs/design-system.md for consistent borders, radius, and hover behaviors."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {columns.map((column) => (
              <article key={column.name} className="card-surface p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{column.name}</h3>
                  <span className="text-xs text-slate-500">{column.tasks.length} tasks</span>
                </div>
                <ul className="space-y-3 text-sm">
                  {column.tasks.map((task) => (
                    <li key={task} className="rounded-lg border border-slate-200 px-3 py-2 hover:border-indigo-200 hover:bg-indigo-50 transition">
                      {task}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-2" id="handoff">
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Blueprint"
              title="Sitemap, component APIs, and timeline"
              description="Open /blueprint for a textual sitemap, responsive grid rules, and dev checklist."
            />
            <ul className="space-y-3 text-sm text-slate-600">
              <li>• Marketing hero introduces the product story.</li>
              <li>• Dashboard route shows live components.</li>
              <li>• Docs folder hosts tokens + architecture narrative.</li>
            </ul>
            <div className="card-surface p-5 space-y-3">
              <p className="text-sm font-semibold text-slate-500">Initiatives</p>
              {initiatives.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 px-3 py-3">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                  <p className="text-xs text-indigo-500">Impact: {item.impact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface p-6 space-y-6">
            <p className="text-sm text-slate-500">Design QA checklist</p>
            <ol className="space-y-3 text-sm text-slate-600">
              <li>1. Check 8px baseline grid alignment.</li>
              <li>2. Validate color contrast (4.5:1 or better).</li>
              <li>3. Confirm hover + focus states match docs.</li>
              <li>4. Export blueprint notes for engineering.</li>
            </ol>
            <a className="inline-flex items-center gap-2 text-indigo-600 font-medium focus-ring" href="/blueprint">
              Review blueprint
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        <section className="card-surface px-6 py-10 text-center space-y-4">
          <SectionHeading
            title="Ready for stakeholder demos"
            description="Deploy on Vercel, drop the live link into your portfolio, and pair it with the docs folder + blueprint for context."
          />
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a className="rounded-full bg-indigo-600 px-6 py-3 text-white font-medium focus-ring" href="mailto:design@gamemaker.dev">
              Request walkthrough
            </a>
            <a className="rounded-full border border-slate-200 px-6 py-3 font-medium focus-ring" href="/blueprint">
              See IA notes
            </a>
          </div>
        </section>

        <footer className="text-sm text-slate-500 text-center">
          TaskFlow dashboard · documenting product + engineering collaboration.
        </footer>
      </main>
    </>
  );
}
