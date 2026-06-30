import { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------- WordsPullUp: cada palavra sobe escalonada ---------- */
export function WordsPullUp({
  text,
  className = "",
  delay = 0,
  showAsterisk = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  showAsterisk?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline">
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="relative inline-block"
              initial={{ y: 26, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: delay + i * 0.08, ease: EASE }}
            >
              {w}
              {showAsterisk && i === words.length - 1 && (
                <sup className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] text-gold">*</sup>
              )}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/* ---------- WordsPullUpMultiStyle: segmentos com classes próprias ---------- */
export function WordsPullUpMultiStyle({
  segments,
  className = "",
  center = true,
}: {
  segments: { text: string; className?: string }[];
  className?: string;
  center?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words: { w: string; cls: string }[] = [];
  segments.forEach((s) =>
    s.text.split(" ").forEach((w) => words.push({ w, cls: s.className || "" }))
  );
  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap ${center ? "justify-center" : ""} ${className}`}
    >
      {words.map((it, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${it.cls}`}
            initial={{ y: 26, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
          >
            {it.w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- Parágrafo com opacidade por caractere ligada ao scroll ---------- */
function AnimatedLetter({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  // espaço normal (quebrável) — NBSP impedia a quebra de linha e estourava no mobile
  return char === " " ? (
    <span> </span>
  ) : (
    <motion.span style={{ opacity }}>{char}</motion.span>
  );
}

export function AnimatedParagraph({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });
  const chars = Array.from(text);
  return (
    <p ref={ref} className={className}>
      {chars.map((c, i) => {
        const cp = i / chars.length;
        return (
          <AnimatedLetter
            key={i}
            char={c}
            progress={scrollYProgress}
            range={[Math.max(0, cp - 0.12), Math.min(1, cp + 0.05)]}
          />
        );
      })}
    </p>
  );
}

/* ---------- Reveal: fade-up genérico ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 22,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Ícones dourados (gradiente url(#gAu)) ---------- */
export const ICON_PATHS: Record<string, ReactNode> = {
  implant: (
    <>
      <path fill="url(#gAu)" d="M12 2c-3 0-5 2-5 5 0 2 .8 3 .8 6S7 21 9 21c1 0 1-3 3-3s2 3 3 3c2 0 1.2-5 1.2-8S17 9 17 7c0-3-2-5-5-5z" />
      <path d="M12 7v11" stroke="#10282f" strokeWidth="1.3" opacity=".7" />
      <path d="M9.5 9h5M9.7 12h4.6" stroke="#10282f" strokeWidth="1.1" opacity=".55" />
    </>
  ),
  prosthesis: (
    <>
      <path fill="url(#gAu)" d="M5 5h14v6a7 7 0 01-7 7 7 7 0 01-7-7V5z" />
      <path d="M8 5v3M12 5v4M16 5v3" stroke="#10282f" strokeWidth="1.1" opacity=".6" />
    </>
  ),
  braces: (
    <>
      <rect x="3" y="9" width="18" height="2.2" rx="1.1" fill="url(#gAuV)" />
      <rect x="3" y="13" width="18" height="2.2" rx="1.1" fill="url(#gAuV)" />
      <rect x="6" y="7.5" width="3" height="9" rx="1" fill="url(#gAu)" />
      <rect x="10.5" y="7.5" width="3" height="9" rx="1" fill="url(#gAu)" />
      <rect x="15" y="7.5" width="3" height="9" rx="1" fill="url(#gAu)" />
    </>
  ),
  aligner: (
    <>
      <path fill="url(#gAu)" d="M4 8c0-1.5 1.3-2.5 3-2.5h10c1.7 0 3 1 3 2.5 0 4-2 9-8 9S4 12 4 8z" />
      <path d="M7 8.5h10M8 11.5h8" stroke="#10282f" strokeWidth="1.1" opacity=".5" />
    </>
  ),
  canal: (
    <>
      <path fill="url(#gAu)" d="M12 3c-3 0-5 2-5 5 0 4 1 13 3 13 1 0 1-3 2-3s1 3 2 3c2 0 3-9 3-13 0-3-2-5-5-5z" />
      <path d="M12 9v9" stroke="#10282f" strokeWidth="1.3" opacity=".65" />
    </>
  ),
  surgery: <path fill="url(#gAu)" d="M14 3l-1 4 4-1-2 3 4 1-4 1 2 3-4-1 1 4-3-2-3 2 1-4-4 1 2-3-4-1 4-1-2-3 4 1-1-4 3 2 3-2z" />,
  whitening: (
    <>
      <path fill="url(#gAu)" d="M12 2c-3 0-5 2-5 5 0 2 .8 3.5.8 6.5S7 21 9 21c1 0 1-3 3-3s2 3 3 3c2 0 1.2-4.5 1.2-7.5S17 9 17 7c0-3-2-5-5-5z" />
      <path fill="url(#gAuV)" d="M16.5 2.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8L14 5l1.8-.7z" />
    </>
  ),
  veneer: (
    <>
      <path fill="url(#gAu)" d="M6 4h12v7c0 4-2.7 7-6 7s-6-3-6-7V4z" />
      <path fill="url(#gAuV)" d="M9 4h6v6.5c0 2.5-1.3 4.5-3 4.5s-3-2-3-4.5V4z" />
    </>
  ),
  perio: (
    <>
      <path d="M4 13c2-6 14-6 16 0" stroke="url(#gAu)" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path fill="url(#gAuV)" d="M7 13h2.4v5.5c0 .7-.6 1.3-1.2 1.3S7 19.2 7 18.5V13zM10.8 13h2.4v6.2c0 .7-.6 1.3-1.2 1.3s-1.2-.6-1.2-1.3V13zM14.6 13H17v5.5c0 .7-.6 1.3-1.2 1.3s-1.2-.6-1.2-1.3V13z" />
    </>
  ),
  general: (
    <>
      <circle cx="12" cy="11" r="8" fill="url(#gAu)" />
      <path d="M8 11a4 4 0 008 0" stroke="#10282f" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1" fill="#10282f" />
      <circle cx="15" cy="9" r="1" fill="#10282f" />
    </>
  ),
  tech: (
    <>
      <rect x="3" y="5" width="18" height="13" rx="2.4" fill="url(#gAu)" />
      <path d="M3 9h18" stroke="#10282f" strokeWidth="1.2" opacity=".5" />
      <circle cx="6" cy="7" r=".8" fill="#10282f" opacity=".6" />
      <path d="M8 13h8M8 15.4h5" stroke="#10282f" strokeWidth="1.2" opacity=".55" />
    </>
  ),
  shield: (
    <>
      <path fill="url(#gAu)" d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
      <path d="M9 12l2 2 4-4" stroke="#10282f" strokeWidth="1.6" fill="none" />
    </>
  ),
  heart: <path fill="url(#gAu)" d="M12 21s-7-4.35-7-10a4 4 0 017-2.65A4 4 0 0119 11c0 5.65-7 10-7 10z" />,
  badge: (
    <>
      <path fill="url(#gAu)" d="M12 2l2.5 1.8 3-.3 1 2.9 2.6 1.6-1 2.9 1 2.9-2.6 1.6-1 2.9-3-.3L12 22l-2.5-1.8-3 .3-1-2.9L2.9 16l1-2.9-1-2.9 2.6-1.6 1-2.9 3 .3z" />
      <path d="M9 12l2 2 4-4" stroke="#10282f" strokeWidth="1.5" fill="none" />
    </>
  ),
};

export function GoldIcon({ name, className = "w-7 h-7" }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {ICON_PATHS[name]}
    </svg>
  );
}

/* defs do gradiente — montar uma vez no App */
export function GoldDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="gAu" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4d98a" />
          <stop offset=".5" stopColor="#d3a44c" />
          <stop offset="1" stopColor="#9a7033" />
        </linearGradient>
        <linearGradient id="gAuV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fbeebc" />
          <stop offset="1" stopColor="#b9882f" />
        </linearGradient>
      </defs>
    </svg>
  );
}
