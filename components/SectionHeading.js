const ALIGNMENT = {
  center: "text-center",
  left: "text-left",
  right: "text-right",
};

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`space-y-3 max-w-3xl mx-auto ${ALIGNMENT[align] ?? ALIGNMENT.center}`}>
      {eyebrow && (
        <p className="text-sm tracking-[0.15em] uppercase text-indigo-400">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{title}</h2>
      {description && <p className="text-base text-slate-600">{description}</p>}
    </div>
  );
}
