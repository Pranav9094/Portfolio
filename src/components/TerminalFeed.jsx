import { useEffect, useState } from "react";

const lines = [
  "$ training yolov8n.pt on agroshield-dataset (4,396 imgs)",
  "✓ mAP50 94.73% — done",
  "$ git push origin main",
  "✓ deployed ellauramist.com",
  "$ status hackcelestial-3.0",
  "✓ finalist",
  "$ whoami",
  "✓ pranav chaudhari — building, always",
];

export default function TerminalFeed() {
  const [displayed, setDisplayed] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];

    if (charIndex <= current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setDisplayed((d) => [...d, current]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
    }, 500);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex]);

  const activeLine =
    lineIndex < lines.length ? lines[lineIndex].slice(0, charIndex) : null;

  return (
    <div className="rounded-xl overflow-hidden border border-ink/10 dark:border-paper/10 shadow-2xl shadow-ink/10 dark:shadow-black/40 bg-inkSoft">
      <div className="flex items-center gap-2 px-4 py-3 bg-ink/60 border-b border-paper/10">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-paper/50">
          pranav@portfolio
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] leading-7 min-h-[220px]">
        {displayed.map((l, i) => (
          <div
            key={i}
            className={l.startsWith("✓") ? "text-[#3ED598]" : "text-paper/80"}
          >
            {l}
          </div>
        ))}
        {activeLine !== null && (
          <div
            className={
              activeLine.startsWith("✓") ? "text-[#3ED598]" : "text-paper/80"
            }
          >
            {activeLine}
            <span className="inline-block w-2 h-4 bg-signal ml-0.5 animate-pulse align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
