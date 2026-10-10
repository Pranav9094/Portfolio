import { skills, certifications } from "../data/profile";
import Reveal from "./Reveal";
import Services from "./Services";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24 bg-paperSoft dark:bg-inkSoft transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper mb-8">
            Skills
          </h2>
          <div className="flex flex-col gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="font-mono text-xs text-ink/50 dark:text-paper/50 mb-2">
                  {group}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-sm px-3 py-1.5 rounded-md bg-paper dark:bg-ink text-ink/80 dark:text-paper/80 border border-ink/10 dark:border-paper/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper mb-8">
            Certifications
          </h2>
          <div className="flex flex-col gap-3">
            {certifications.map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-ink/10 dark:border-paper/10 p-4 flex items-center justify-between gap-4"
              >
                <div>
                  <p className="font-medium text-ink dark:text-paper text-sm">
                    {c.title}
                  </p>
                  <p className="font-mono text-xs text-ink/50 dark:text-paper/50 mt-1">
                    {c.issuer} · {c.date}
                  </p>
                </div>
                {c.link && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-signal shrink-0 hover:underline"
                  >
                    Verify
                  </a>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <Services />
    </section>
  );
}
