import { timeline } from "../data/profile";
import Reveal from "./Reveal";

export default function Timeline() {
  return (
    <section className="px-6 py-24 bg-paper dark:bg-ink transition-colors">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper">
            Timeline
          </h2>
        </Reveal>
        <ol className="max-w-xl">
          {timeline.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="flex gap-4 pb-8 last:pb-0 relative">
              {i < timeline.length - 1 && (
                <span className="absolute left-[11px] top-6 bottom-0 w-px bg-ink/10 dark:bg-paper/10" />
              )}
              <span className="font-mono text-xs w-6 h-6 rounded-full bg-signal/10 border border-signal/30 text-signal flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              <div>
                <p className="font-mono text-xs text-ink/50 dark:text-paper/50">
                  {t.year}
                </p>
                <p className="text-ink/80 dark:text-paper/80 mt-1">
                  {t.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
