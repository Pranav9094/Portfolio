import { motion } from "framer-motion";
import TerminalFeed from "./TerminalFeed";
import GradientField from "./GradientField";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-16 px-6 bg-paper dark:bg-ink transition-colors overflow-hidden"
    >
      <GradientField />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-signal mb-4">
            Nashik, Maharashtra → Parul University
          </p>
          <h1 className="font-display font-semibold text-ink dark:text-paper text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight">
            Building with
            <br />
            AI, data & code.
          </h1>
          <p className="mt-6 text-lg text-ink/70 dark:text-paper/70 max-w-md leading-relaxed">
            CSE (AI &amp; Data Science) student, hackathon builder, and
            freelance web developer — currently designing at Ellauramist and
            shipping side projects most weeks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="font-mono text-sm px-5 py-3 rounded-md bg-ink dark:bg-paper text-paper dark:text-ink hover:bg-signal dark:hover:bg-signal dark:hover:text-paper transition-colors"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="font-mono text-sm px-5 py-3 rounded-md border border-ink/20 dark:border-paper/20 text-ink dark:text-paper hover:border-signal transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {[
              ["10+", "Hackathons"],
              ["3", "Client sites"],
              ["1", "Win"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-display font-semibold text-2xl text-ink dark:text-paper">
                  {n}
                </p>
                <p className="font-mono text-xs text-ink/50 dark:text-paper/50">
                  {l}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <motion.div
            className="absolute -top-5 -right-4 z-10 font-mono text-xs px-3 py-2 rounded-lg bg-[#3ED598] text-ink shadow-lg shadow-[#3ED598]/30 rotate-3"
            initial={{ opacity: 0, y: -10, rotate: 8 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            🏆 Hack2026 Winner
          </motion.div>
          <TerminalFeed />
        </motion.div>
      </div>
    </section>
  );
}
