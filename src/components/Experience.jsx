import { experience } from "../data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24 bg-paper dark:bg-ink transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper">
            Experience
          </h2>
        </Reveal>
        <div className="max-w-xl flex flex-col gap-6">
          {experience.map((e, i) => (
            <Reveal
              key={e.id}
              delay={i * 0.1}
              className="rounded-xl border border-ink/10 dark:border-paper/10 p-5 hover:border-signal/40 hover:-translate-y-0.5 transition-[border,transform]"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display font-semibold text-lg text-ink dark:text-paper">
                  {e.role}
                </h3>
                <span className="font-mono text-xs px-2 py-1 rounded bg-signal/10 text-signal border border-signal/30">
                  {e.type}
                </span>
              </div>
              <p className="mt-1 font-mono text-sm text-ink/60 dark:text-paper/60">
                {e.org} · {e.period}
              </p>
              <p className="mt-3 text-sm text-ink/70 dark:text-paper/70 leading-relaxed">
                {e.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
