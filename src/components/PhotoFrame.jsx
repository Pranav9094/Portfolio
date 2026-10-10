import { useRef } from "react";
import { motion } from "framer-motion";

export default function PhotoFrame({ src, alt = "Pranav Chaudhari", initials = "PC" }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${py * -10}deg) rotateY(${px * 12}deg)`;
  };
  const reset = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <div className="relative mx-auto md:mx-0 w-56 h-56 sm:w-64 sm:h-64" style={{ perspective: 900 }}>
      <motion.div
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-signal via-circuit to-[#3ED598] opacity-70 blur-xl"
        animate={{ rotate: [0, 8, 0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="relative w-full h-full rounded-[2rem] overflow-hidden border border-paper/20 dark:border-ink/20 shadow-2xl bg-inkSoft transition-transform duration-150"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ink to-inkSoft">
            <span
              className="font-display font-semibold text-6xl text-paper/90"
              style={{ transform: "translateZ(30px)" }}
            >
              {initials}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
