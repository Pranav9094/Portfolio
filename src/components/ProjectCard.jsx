import { useRef } from "react";

const statusColors = {
  winner: "text-[#3ED598] border-[#3ED598]/30 bg-[#3ED598]/10",
  finalist: "text-circuit border-circuit/30 bg-circuit/10",
  qualified: "text-signal border-signal/30 bg-signal/10",
  participated: "text-slate border-slate/30 bg-slate/10",
};

const categoryGradients = {
  hackathon: "from-signal/70 via-circuit/60 to-[#3ED598]/50",
  freelance: "from-circuit/70 via-signal/50 to-circuit/30",
  personal: "from-[#3ED598]/60 via-signal/50 to-circuit/40",
};

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);

  // Direct style writes on the DOM node (no React re-render per pixel of
  // mouse movement) — keeps hover-tilt smooth even during scroll/animation.
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateX(${py * -6}deg) rotateY(${px * 8}deg)`;
  };
  const reset = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="h-full rounded-xl border border-ink/10 dark:border-paper/10 overflow-hidden bg-paper dark:bg-inkSoft hover:border-signal/50 hover:shadow-xl hover:shadow-signal/10 transition-[border,box-shadow,transform] flex flex-col"
      style={{ willChange: "transform" }}
    >
      {project.image ? (
        <div className="relative h-32 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className={`h-0.5 bg-gradient-to-r ${
            categoryGradients[project.category] || categoryGradients.personal
          }`}
        />
      )}

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-semibold text-lg text-ink dark:text-paper">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-ink/40 dark:text-paper/40 shrink-0">
            {project.year}
          </span>
        </div>

        {project.statusLabel && (
          <span
            className={`mt-2 inline-block w-fit font-mono text-[11px] px-2 py-1 rounded border ${
              statusColors[project.status] ||
              "text-ink/60 dark:text-paper/60 border-ink/15 dark:border-paper/15"
            }`}
          >
            {project.statusLabel}
          </span>
        )}

        <p className="mt-3 text-sm text-ink/70 dark:text-paper/70 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] px-2 py-1 rounded bg-ink/5 dark:bg-paper/10 text-ink/60 dark:text-paper/60"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 font-mono text-sm text-signal hover:underline w-fit"
          >
            {project.linkLabel}
          </a>
        )}
      </div>
    </div>
  );
}
