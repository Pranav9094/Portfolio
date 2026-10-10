import { services } from "../data/profile";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <Reveal>
        <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper mb-8">
          What I can do
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-ink/10 dark:border-paper/10 p-5 bg-paper dark:bg-inkSoft"
            >
              <h3 className="font-display font-semibold text-base text-ink dark:text-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-ink/65 dark:text-paper/65 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
