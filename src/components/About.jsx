import Reveal from "./Reveal";
import PhotoFrame from "./PhotoFrame";
import { photo } from "../data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 bg-paper dark:bg-ink transition-colors"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12">
        <Reveal>
          <h2 className="font-display font-semibold text-2xl text-ink dark:text-paper mb-8">
            About
          </h2>
          <PhotoFrame src={photo} />
        </Reveal>
        <Reveal delay={0.1} className="max-w-xl">
          <p className="text-lg text-ink/80 dark:text-paper/80 leading-relaxed">
            I'm a first-year CSE (AI &amp; Data Science) student at Parul
            University, originally from Nashik. Most of what I know I learned
            by shipping — hackathon projects, client websites, and whatever
            broke along the way.
          </p>
          <p className="mt-5 text-lg text-ink/80 dark:text-paper/80 leading-relaxed">
            I lead a small hackathon crew, THE ELITES, where I usually own the
            backend, AI integration, and getting things actually deployed. On
            the side, I freelance — building websites and e-commerce setups
            for clients — and I'm currently designing for Ellauramist as a
            paid intern.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
