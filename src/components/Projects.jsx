import { useState } from "react";
import { projects, categories, otherHackathons } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="work"
      className="px-6 py-24 bg-paperSoft dark:bg-inkSoft transition-colors"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper">
            Work
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors ${
                  filter === c.id
                    ? "bg-ink dark:bg-paper text-paper dark:text-ink border-ink dark:border-paper"
                    : "border-ink/20 dark:border-paper/20 text-ink/60 dark:text-paper/60 hover:border-signal"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {(filter === "all" || filter === "hackathon") && (
          <Reveal delay={0.1} className="mt-14 pt-10 border-t border-ink/10 dark:border-paper/10">
            <p className="font-mono text-xs text-ink/50 dark:text-paper/50 mb-4">
              Also built for hackathons
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {otherHackathons.map((h) => (
                <span
                  key={h.title}
                  className="text-sm text-ink/70 dark:text-paper/70"
                >
                  <span className="font-medium text-ink dark:text-paper">
                    {h.title}
                  </span>{" "}
                  <span className="font-mono text-xs text-ink/45 dark:text-paper/45">
                    · {h.statusLabel}
                  </span>
                </span>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
