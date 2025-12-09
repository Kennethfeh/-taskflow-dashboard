import SectionHeading from "../../components/SectionHeading";

const sitemap = [
  { node: "Marketing", children: ["Hero", "Stats", "Workflow", "Blueprint CTA"] },
  { node: "Dashboard", children: ["Overview", "Swimlanes", "QA checklist"] },
  { node: "Docs", children: ["Design system", "Architecture", "Handoff"] },
];

const grids = [
  { module: "Hero", grid: "12-col fluid", notes: "Max width 1120px" },
  { module: "Swimlanes", grid: "3-up cards", notes: "Stack at 768px" },
  { module: "Blueprint section", grid: "2-col split", notes: "50/50 → stack" },
];

export const metadata = {
  title: "TaskFlow Blueprint",
  description: "Site architecture, grid rules, and dev checklist for TaskFlow.",
};

export default function Blueprint() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
      <SectionHeading
        eyebrow="Blueprint"
        title="Information architecture & specs"
        description="Use this alongside the docs folder to keep design, PM, and engineering aligned."
        align="left"
      />

      <section className="grid gap-6 md:grid-cols-3">
        {sitemap.map((node) => (
          <article key={node.node} className="card-surface p-5">
            <p className="text-sm font-semibold text-indigo-500">{node.node}</p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600">
              {node.children.map((child) => (
                <li key={child}>• {child}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section>
        <h3 className="text-lg font-semibold">Responsive grids</h3>
        <table className="mt-4 w-full text-sm">
          <thead className="text-slate-500">
            <tr>
              <th className="py-2 text-left">Module</th>
              <th className="py-2 text-left">Grid</th>
              <th className="py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody>
            {grids.map((row) => (
              <tr key={row.module} className="border-t border-slate-200">
                <td className="py-3 font-medium">{row.module}</td>
                <td className="py-3">{row.grid}</td>
                <td className="py-3 text-slate-600">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Motion guidelines</h3>
        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          <li>• Cards lift by 4px and increase shadow on hover/focus.</li>
          <li>• CTA buttons scale to 102% with 180ms ease-out.</li>
          <li>• Graph shimmer uses CSS gradients (`bg-gradient-to-r`).</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold">Developer checklist</h3>
        <ol className="mt-4 space-y-2 text-sm text-slate-600">
          <li>1. Import shared tokens from `app/globals.css`.</li>
          <li>2. Use `components/SectionHeading` for consistent typography.</li>
          <li>3. Follow docs/design-system.md for spacing + radii.</li>
          <li>4. Reference README for deployment instructions.</li>
        </ol>
      </section>
    </main>
  );
}
