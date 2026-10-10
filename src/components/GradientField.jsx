// Decorative background layer for the hero. Everything here runs on
// pure CSS animation (compositor thread) instead of JS-driven loops,
// so it stays smooth even while the page is scrolling.
export default function GradientField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* soft color wash — CSS keyframes, not JS */}
      <div className="blob-a absolute -top-40 -left-32 w-[30rem] h-[30rem] rounded-full bg-signal/25 blur-[90px]" />
      <div className="blob-b absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full bg-circuit/25 blur-[90px]" />
      <div className="blob-c absolute bottom-0 left-1/4 w-[22rem] h-[22rem] rounded-full bg-[#3ED598]/12 blur-[80px]" />

      {/* grain texture for a premium, non-flat surface */}
      <div className="grain-overlay absolute inset-0 opacity-[0.05]" />

      {/* spinning isometric cube — real 3D via CSS transforms */}
      <div
        className="hidden md:block absolute right-[8%] top-[12%] w-24 h-24"
        style={{ perspective: 600 }}
      >
        <div
          className="cube-spin relative w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[
            "rotateY(0deg) translateZ(48px)",
            "rotateY(90deg) translateZ(48px)",
            "rotateY(180deg) translateZ(48px)",
            "rotateY(-90deg) translateZ(48px)",
            "rotateX(90deg) translateZ(48px)",
            "rotateX(-90deg) translateZ(48px)",
          ].map((t, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-signal/40 bg-signal/5 backdrop-blur-sm"
              style={{ transform: t }}
            />
          ))}
        </div>
      </div>

      {/* constellation — a small circuit/data-network motif tying to the AI theme */}
      <svg
        className="absolute left-[6%] bottom-[8%] w-64 h-64 opacity-70 dark:opacity-50"
        viewBox="0 0 220 220"
        fill="none"
      >
        <g stroke="currentColor" className="text-signal" strokeWidth="1" opacity="0.5">
          <line x1="20" y1="30" x2="90" y2="70" />
          <line x1="90" y1="70" x2="160" y2="40" />
          <line x1="90" y1="70" x2="70" y2="150" />
          <line x1="70" y1="150" x2="150" y2="170" />
          <line x1="160" y1="40" x2="200" y2="100" />
        </g>
        {[
          [20, 30],
          [90, 70],
          [160, 40],
          [70, 150],
          [150, 170],
          [200, 100],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            className="node-pulse text-circuit fill-current"
            style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>
    </div>
  );
}
