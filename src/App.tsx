import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, Phone, Mail, MapPin, Clock, Plus, Star,
  Instagram, MessageCircle, Menu, X, Play,
} from "lucide-react";
import {
  WordsPullUp, WordsPullUpMultiStyle, AnimatedParagraph, Reveal, GoldIcon, GoldDefs,
} from "./components/anim";
import {
  wa, nav, diffs, treatments, features, specialties, journey, testimonials, faqs,
} from "./data";

const EASE = [0.22, 1, 0.36, 1] as const;
const PHOTO = "/sara-atendimento.webp";

const proof = [
  { src: "/ad-1.webp", label: "Reabilitação com prótese" },
  { src: "/espaco-1.webp", label: "Nosso consultório" },
  { src: "/ad-2.webp", label: "Sorriso transformado" },
  { src: "/hero-poster.webp", label: "Atendimento humanizado" },
  { src: PHOTO, label: "Dra. Sara em atendimento" },
  { src: "/depo-poster.webp", label: "Depoimento real" },
];
const antesDepois = [
  { src: "/ad-1.webp", trat: "Prótese sobre implante", txt: "Reabilitação oral completa, devolvendo função e estética ao sorriso." },
  { src: "/ad-2.webp", trat: "Prótese dentária", txt: "Novo sorriso com acabamento natural e confortável no dia a dia." },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-3 flex items-center justify-between rounded-full border border-gold/20 bg-cream/85 px-4 py-2 backdrop-blur-md sm:px-6">
          <a href="#topo" className="flex items-center"><img src="/logo-horizontal.png" alt="Dra. Sara Bitu" className="h-8 w-auto sm:h-9" /></a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (<a key={n.href} href={n.href} className="text-sm font-medium text-muted transition-colors hover:text-gold-deep">{n.label}</a>))}
          </nav>
          <a href={wa("Olá! Vim pelo site e gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer"
            className="hidden rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_28px_-12px_rgba(211,164,76,0.7)] transition-transform hover:-translate-y-0.5 sm:block">Agendar avaliação</a>
          <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen((v) => !v)}>{open ? <X className="text-petrol" /> : <Menu className="text-petrol" />}</button>
        </div>
        {open && (<div className="mt-2 rounded-3xl border border-gold/20 bg-cream p-4 lg:hidden">{nav.map((n) => (<a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block border-b border-gold/10 py-3 font-medium text-petrol last:border-0">{n.label}</a>))}</div>)}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-4 pb-14 pt-28 sm:pt-32 md:px-6 md:pb-20">
      <div className="pointer-events-none absolute -right-40 -top-52 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(211,164,76,0.22),transparent_60%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" />Odontologia Especializada · Paulista/PE</span></Reveal>
          <h1 className="mt-5 font-display text-[10vw] font-semibold leading-[0.95] tracking-[-0.02em] text-petrol sm:text-6xl lg:text-[4.4rem]">
            <WordsPullUp text="Preserve a" delay={0.05} />{" "}
            <span className="text-gold-deep"><WordsPullUp text="saúde" delay={0.18} /></span>,<br className="hidden sm:block" />{" "}
            <span className="font-serif italic text-gold-deep"><WordsPullUp text="a beleza" delay={0.3} /></span>{" "}
            <WordsPullUp text="e o sorriso." delay={0.42} />
          </h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-lg text-base text-muted sm:text-lg">
            Implantes, próteses e ortodontia com tecnologia de ponta e um atendimento humano, transparente e ao seu lado em cada etapa do tratamento.
          </motion.p>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }} className="mt-8 flex flex-wrap items-center gap-4">
            <a href={wa("Olá! Vim pelo site e gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] py-2 pl-6 pr-2 font-semibold text-ink shadow-[0_12px_30px_-12px_rgba(211,164,76,0.75)] transition-all hover:gap-3">Falar com a Dra. Sara<span className="grid h-9 w-9 place-items-center rounded-full bg-petrol transition-transform group-hover:scale-110 sm:h-10 sm:w-10"><ArrowRight className="h-4 w-4 text-gold-light" /></span></a>
            <a href="#tratamentos" className="rounded-full border border-gold/40 px-6 py-3 font-semibold text-gold-deep transition-all hover:-translate-y-0.5 hover:border-gold">Conhecer tratamentos</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-10 flex flex-wrap gap-7">
            {[["9 anos", "de experiência clínica"], ["6 especialistas", "equipe multidisciplinar"], ["+140", "avaliações 5★ no Google"]].map(([a, b]) => (
              <div key={a}><div className="font-display text-xl font-bold text-gold-grad whitespace-nowrap">{a}</div><div className="text-sm text-muted">{b}</div></div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.3, ease: EASE }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 shadow-[0_24px_60px_-30px_rgba(16,40,47,0.55)]">
            <video className="h-[440px] w-full object-cover sm:h-[540px]" autoPlay muted loop playsInline poster="/hero-poster.webp">
              <source src="/hero.mp4" type="video/mp4" />
            </video>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-petrol/45 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_5px_rgba(255,255,255,0.45),inset_0_0_0_6px_rgba(211,164,76,0.35)]" />
            <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-gold-light/40 bg-petrol/75 px-4 py-2 backdrop-blur-md"><span className="h-2 w-2 animate-pulse rounded-full bg-gold-light" /><span className="text-sm font-medium text-cream">Consultório Dra. Sara Bitu · Paulista/PE</span></div>
          </div>
          <div className="absolute -right-3 top-5 flex items-center gap-3 rounded-2xl border border-gold/30 bg-paper p-3 shadow-[0_24px_60px_-30px_rgba(16,40,47,0.55)]"><Star className="h-7 w-7 fill-gold text-gold" /><div><div className="font-display text-lg font-bold leading-none text-petrol">5,0</div><div className="text-[0.7rem] text-muted">+140 no Google</div></div></div>
        </motion.div>
      </div>
    </section>
  );
}

function ProvaSocial() {
  const row = [...proof, ...proof];
  return (
    <section className="overflow-hidden border-y border-gold/20 bg-petrol py-6">
      <div className="mx-auto mb-5 max-w-7xl px-4 sm:px-6"><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"><span className="h-px w-7 bg-gold" />Resultados e momentos reais</span></div>
      <div className="flex w-max animate-marquee gap-4">
        {row.map((p, i) => (
          <figure key={i} className="relative h-44 w-64 flex-none overflow-hidden rounded-2xl border border-gold-light/20 sm:h-52 sm:w-80">
            <img src={p.src} alt={p.label} className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-petrol/90 to-transparent p-3 text-sm font-medium text-cream">{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="relative mx-auto max-w-[420px]">
          <div className="overflow-hidden rounded-[1.75rem] border border-gold/35 shadow-[0_24px_60px_-30px_rgba(16,40,47,0.55)]" style={{ aspectRatio: "4/4.7" }}><img src={PHOTO} alt="Dra. Sara Bitu" className="h-full w-full object-cover" /><div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay" /></div>
          <div className="absolute -left-5 bottom-6 rounded-2xl bg-petrol px-5 py-4 text-white shadow-[0_24px_60px_-30px_rgba(16,40,47,0.55)]"><div className="font-display text-base">Dra. Sara Bitu</div><div className="mt-0.5 text-[0.74rem] text-gold-light">CRO-PE 12787 · Protesista e Implantodontista</div></div>
        </Reveal>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Quem cuida de você</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-[0.95] text-petrol sm:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle center={false} segments={[{ text: "Sou a" }, { text: "Dra. Sara Bitu,", className: "text-gold-grad" }, { text: "especialista em" }, { text: "prótese e implantes.", className: "font-serif italic text-gold-deep" }]} />
          </h2>
          <AnimatedParagraph className="mt-6 max-w-xl text-base leading-relaxed text-petrol sm:text-lg" text="À frente do consultório há 4 anos, reúno 9 anos de experiência clínica ao lado de uma equipe de 6 especialistas. Cada detalhe do tratamento é planejado com dedicação, unindo experiência, tecnologia e um atendimento próximo — para cuidar da saúde, da beleza e da autoestima de cada paciente." />
          <Reveal delay={0.1}><div className="mt-7 flex flex-wrap gap-2.5">{["Comprometimento", "Ética", "Inovação", "Eficiência", "Respeito", "Humanização"].map((v) => (<span key={v} className="rounded-full bg-petrol px-4 py-2 text-sm font-semibold text-gold-light">{v}</span>))}</div></Reveal>
        </div>
      </div>
    </section>
  );
}

function DepoimentoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => { const v = ref.current; if (!v) return; if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); } };
  return (
    <section className="relative overflow-hidden bg-petrol px-4 py-24 sm:px-6">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(211,164,76,0.14),transparent_62%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="mx-auto w-full max-w-[340px]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-gold-light/25 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.7)]" style={{ aspectRatio: "9/14" }}>
            <video ref={ref} className="h-full w-full object-cover" poster="/depo-poster.webp" playsInline controls={playing} onEnded={() => setPlaying(false)}>
              <source src="/depoimento.mp4" type="video/mp4" />
            </video>
            {!playing && (
              <button onClick={toggle} className="absolute inset-0 grid place-items-center bg-petrol/25 transition-colors hover:bg-petrol/10" aria-label="Reproduzir depoimento">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] shadow-[0_12px_30px_-8px_rgba(211,164,76,0.8)] transition-transform hover:scale-110"><Play className="ml-1 h-8 w-8 fill-ink text-ink" /></span>
              </button>
            )}
          </div>
        </div>
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"><span className="h-px w-7 bg-gold" /> Depoimento real</span>
          <h2 className="mt-4 max-w-[18ch] font-display text-3xl font-semibold leading-[1] text-white sm:text-4xl lg:text-5xl">
            <WordsPullUpMultiStyle center={false} segments={[{ text: "Histórias de quem voltou a" }, { text: "sorrir sem medo.", className: "font-serif italic text-gold-light" }]} />
          </h2>
          <p className="mt-5 max-w-lg text-cream/80">Ouça do próprio paciente como foi a experiência de reabilitar o sorriso no consultório da Dra. Sara — do acolhimento ao resultado final.</p>
          <div className="mt-8 flex flex-wrap gap-8">
            <div><div className="font-display text-3xl font-bold text-gold-light">+140</div><div className="text-sm text-cream/70">avaliações 5★ no Google</div></div>
            <div><div className="font-display text-3xl font-bold text-gold-light">100%</div><div className="text-sm text-cream/70">atendimento humanizado</div></div>
            <div><div className="font-display text-3xl font-bold text-gold-light">9 anos</div><div className="text-sm text-cream/70">transformando sorrisos</div></div>
          </div>
          <a href={wa("Olá! Vi o depoimento no site e quero agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5">Quero a minha transformação <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Por que a Dra. Sara Bitu</span>
        <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-semibold leading-[0.98] text-petrol sm:text-4xl"><WordsPullUp text="Cuidado de excelência, do começo ao fim." /></h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {diffs.map((d, i) => (
            <motion.div key={d.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }} className="rounded-[15px] border border-gold/20 bg-paper p-7 transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_60px_-30px_rgba(16,40,47,0.5)]">
              <span className="ic3d mb-4 grid h-14 w-14 place-items-center rounded-2xl"><GoldIcon name={d.icon} /></span>
              <div className="font-display text-lg font-semibold text-petrol">{d.title}</div>
              <p className="mt-1.5 text-sm text-muted">{d.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tratamentos() {
  const [i, setI] = useState(0);
  const t = treatments[i];
  return (
    <section id="tratamentos" className="bg-cream-2 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Tratamentos</span>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold leading-[0.98] text-petrol sm:text-4xl"><WordsPullUp text="Cada sorriso pede um caminho. Cuidamos de todos eles." /></h2>
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1">
            {treatments.map((tr, idx) => (
              <button key={tr.name} onClick={() => setI(idx)} className={`flex items-center gap-3.5 rounded-[15px] px-4 py-3 text-left font-display text-lg font-medium transition-colors lg:text-2xl ${idx === i ? "bg-paper text-gold-deep" : "text-muted hover:text-petrol"} border lg:border-0 ${idx === i ? "border-transparent" : "border-gold/25 lg:border-0"}`}>
                <span className={`h-2.5 w-2.5 flex-none rounded-full transition-all ${idx === i ? "scale-150 bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] shadow-[0_0_12px_rgba(211,164,76,0.6)]" : "bg-gold/35"}`} />{tr.name}
              </button>
            ))}
          </div>
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE }} className="rounded-3xl border border-gold-light/20 bg-petrol p-9 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)] sm:p-11 lg:sticky lg:top-24">
            <span className="ic3d-dark mb-5 grid h-14 w-14 place-items-center rounded-2xl"><GoldIcon name={t.icon} /></span>
            <h3 className="font-display text-2xl font-semibold text-white">{t.name}</h3>
            <p className="mt-3 text-cream/75">{t.desc}</p>
            <div className="mt-5 flex flex-wrap gap-2">{t.tags.map((tag) => (<span key={tag} className="rounded-full border border-gold-light/30 bg-gold-light/10 px-3.5 py-1.5 text-sm font-semibold text-gold-light">{tag}</span>))}</div>
            <a href={wa(`Olá! Quero saber mais sobre ${t.name} no consultório da Dra. Sara.`)} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5">Quero esse tratamento <ArrowRight className="h-4 w-4" /></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Destaques() {
  return (
    <section id="destaques" className="relative px-4 py-24 sm:px-6">
      <div className="relative mx-auto max-w-7xl">
        <h2 className="max-w-3xl font-display text-2xl font-normal leading-tight sm:text-3xl lg:text-4xl">
          <WordsPullUpMultiStyle center={false} segments={[{ text: "Tratamentos de destaque para", className: "text-petrol" }, { text: "transformar o seu sorriso.", className: "text-gold-deep" }]} />
        </h2>
        <div className="mt-10 grid gap-3 sm:gap-2 md:grid-cols-2 lg:h-[480px] lg:grid-cols-4 lg:gap-2">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, ease: EASE }} className="relative overflow-hidden rounded-[15px] border border-gold/25 lg:h-full">
            <img src="/ad-1.webp" alt="Resultado real — reabilitação" className="h-64 w-full object-cover lg:h-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-petrol/85 via-petrol/10 to-transparent" />
            <div className="absolute bottom-5 left-5 font-display text-lg text-gold-light">Resultados que falam por si.</div>
          </motion.div>
          {features.map((f, idx) => (
            <motion.div key={f.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: (idx + 1) * 0.15, ease: EASE }} className="flex flex-col rounded-[15px] border border-gold/20 bg-paper p-6 lg:h-full">
              <div className="flex items-center justify-between"><span className="ic3d grid h-12 w-12 place-items-center rounded-xl"><GoldIcon name={f.icon} className="h-6 w-6" /></span><span className="font-display text-sm font-bold text-gold/70">{f.num}</span></div>
              <div className="mt-5 font-display text-lg font-semibold text-petrol">{f.title}</div>
              <ul className="mt-3 flex-1 space-y-2.5">{f.items.map((it) => (<li key={it} className="flex gap-2 text-sm text-muted"><Check className="mt-0.5 h-4 w-4 flex-none text-gold-deep" /> {it}</li>))}</ul>
              <a href={wa(`Olá! Quero saber mais sobre ${f.title}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep">Saber mais <ArrowRight className="h-4 w-4 -rotate-45" /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AntesDepois() {
  return (
    <section id="antes-depois" className="bg-cream-2 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Antes & Depois</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-petrol sm:text-4xl"><WordsPullUp text="Transformações reais de pacientes." /></h2>
          </div>
          <p className="max-w-[36ch] text-muted">Resultados de prótese e reabilitação oral realizados no consultório. Cada caso é único e definido após avaliação.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {antesDepois.map((a, i) => (
            <Reveal key={i} delay={i * 0.1} className="overflow-hidden rounded-[1.75rem] border border-gold/25 bg-paper shadow-[0_24px_60px_-34px_rgba(16,40,47,0.5)]">
              <div className="relative">
                <img src={a.src} alt={`Antes e depois — ${a.trat}`} className="w-full object-cover" />
                <div className="absolute left-4 top-4 flex gap-2"><span className="rounded-full bg-petrol/80 px-3 py-1 text-xs font-semibold text-cream backdrop-blur">Antes</span><span className="rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] px-3 py-1 text-xs font-semibold text-ink">Depois</span></div>
              </div>
              <div className="flex items-center justify-between gap-4 p-5"><div><div className="font-display text-lg font-semibold text-petrol">{a.trat}</div><p className="mt-1 text-sm text-muted">{a.txt}</p></div></div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted">Imagens reais de pacientes, divulgadas mediante autorização. Resultados variam conforme cada caso.</p>
      </div>
    </section>
  );
}

function Especialidades() {
  return (
    <section id="especialidades" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Equipe de especialistas</span><h2 className="mt-4 font-display text-3xl font-semibold text-petrol sm:text-4xl"><WordsPullUp text="Cada sorriso nas mãos certas." /></h2></div>
          <p className="max-w-[34ch] text-muted">Uma equipe multidisciplinar para você encontrar todos os tratamentos em um só lugar.</p>
        </div>
        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {specialties.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: EASE }} className="group relative overflow-hidden rounded-[15px] border border-gold/20 bg-paper p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_-30px_rgba(16,40,47,0.55)]">
              <span className="ic3d mb-4 grid h-14 w-14 place-items-center rounded-2xl"><GoldIcon name={s.icon} /></span>
              <div className="font-display text-base font-semibold text-petrol">{s.name}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.d}</p>
              <span className="absolute inset-x-6 bottom-0 h-[3px] origin-left scale-x-0 rounded-t bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Jornada() {
  return (
    <section className="bg-[linear-gradient(180deg,#f6eee1,#efe4d2)] px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Como funciona</span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-petrol sm:text-4xl"><WordsPullUp text="Seu tratamento em três passos." /></h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {journey.map((j, i) => (
            <Reveal key={j.n} delay={i * 0.1} className="rounded-[1.75rem] border border-gold/20 bg-paper p-9">
              <div className="mb-4 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-gold-deep"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] text-sm text-ink shadow-[0_10px_24px_-10px_rgba(211,164,76,0.7)]">{j.n}</span>{j.k}</div>
              <div className="font-display text-xl font-semibold text-petrol">{j.t}</div>
              <p className="mt-2 text-sm text-muted">{j.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Galeria() {
  const items = [
    { src: "/espaco-1.webp", label: "Consultório", span: "sm:col-span-2 sm:row-span-2" },
    { src: "/hero-poster.webp", label: "Atendimento", span: "" },
    { src: PHOTO, label: "Cuidado de perto", span: "sm:row-span-2" },
    { src: "/ad-2.webp", label: "Sorriso renovado", span: "sm:col-span-2" },
    { src: "/depo-poster.webp", label: "Pacientes felizes", span: "" },
    { src: "/ad-1.webp", label: "Resultados reais", span: "" },
  ];
  return (
    <section id="espaco" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Nosso espaço</span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-petrol sm:text-4xl"><WordsPullUp text="Um ambiente acolhedor e moderno." /></h2>
        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3.5 sm:auto-rows-[200px] sm:grid-cols-4">
          {items.map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.06} className={`group relative overflow-hidden rounded-[15px] border border-gold/25 ${g.span}`}>
              <img src={g.src} alt={g.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-petrol/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-cream">{g.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-petrol px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"><span className="h-px w-7 bg-gold" /> O que dizem nossos pacientes</span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl"><WordsPullUp text="Sorrisos que transformam histórias." /></h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1} className="rounded-[1.75rem] border border-gold-light/20 bg-white/[0.05] p-8">
              <div className="font-display text-4xl leading-none text-gold">"</div>
              <p className="mt-1 italic text-cream">{t.text}</p>
              <div className="mt-5 flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] font-display font-bold text-ink">{t.ini}</div><div><div className="font-semibold text-white">{t.name}</div><div className="text-sm tracking-wide text-gold-light">★★★★★</div></div></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="text-center"><span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Perguntas frequentes</span><h2 className="mx-auto mt-4 max-w-[18ch] font-display text-3xl font-semibold text-petrol sm:text-4xl">Ficou com alguma dúvida?</h2></div>
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`overflow-hidden rounded-[15px] border border-gold/20 bg-paper ${isOpen ? "shadow-[0_24px_60px_-30px_rgba(16,40,47,0.5)]" : ""}`}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg font-medium text-petrol">{f.q}<span className={`grid h-6 w-6 flex-none place-items-center rounded-full transition-all ${isOpen ? "rotate-45 bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] text-ink" : "bg-cream-2 text-gold-deep"}`}><Plus className="h-3.5 w-3.5" /></span></button>
                <div className="grid transition-all duration-300" style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}><div className="overflow-hidden"><p className="px-6 pb-5 text-muted">{f.a}</p></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep"><span className="h-px w-7 bg-[linear-gradient(90deg,#f4d98a,#d3a44c)]" /> Onde nos encontrar</span>
        <h2 className="mt-4 font-display text-3xl font-semibold text-petrol sm:text-4xl"><WordsPullUp text="Venha cuidar do seu sorriso." /></h2>
        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-gold-light/20 bg-petrol shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)] md:grid-cols-2">
          <iframe title="Mapa Paulista/PE" loading="lazy" className="min-h-[340px] w-full md:min-h-full" src="https://maps.google.com/maps?q=Paulista%2C%20Pernambuco&t=m&z=13&output=embed&iwloc=near" style={{ border: 0, filter: "saturate(0.92)" }} />
          <div className="flex flex-col justify-center p-9 sm:p-12 text-cream">
            <h3 className="font-display text-2xl text-white">Fale com a gente</h3>
            <p className="mt-1 text-cream/75">Será um prazer te receber. Agende sua avaliação pelos canais abaixo.</p>
            <div className="mt-7 space-y-5">
              {[
                { ic: <MessageCircle className="h-5 w-5 text-gold-light" />, t: "WhatsApp", v: "(81) 99195-1562", href: wa("Olá! Vim pelo site e gostaria de agendar uma avaliação.") },
                { ic: <Mail className="h-5 w-5 text-gold-light" />, t: "E-mail", v: "drasarabitu@hotmail.com", href: "mailto:drasarabitu@hotmail.com" },
                { ic: <Clock className="h-5 w-5 text-gold-light" />, t: "Horário", v: "Seg a Sex · 08h30 às 18h" },
                { ic: <MapPin className="h-5 w-5 text-gold-light" />, t: "Localização", v: "Paulista e Região Metropolitana do Recife" },
              ].map((r) => (
                <div key={r.t} className="flex items-start gap-4"><span className="ic3d-dark grid h-11 w-11 flex-none place-items-center rounded-xl">{r.ic}</span><div><div className="text-[0.7rem] uppercase tracking-[0.14em] text-gold-light">{r.t}</div>{r.href ? <a href={r.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:text-gold-light">{r.v}</a> : <div className="font-semibold text-white">{r.v}</div>}</div></div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3"><a href={wa("Olá! Vim pelo site e gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] px-6 py-3 font-semibold text-ink">Agendar no WhatsApp</a><a href="tel:+5581991951562" className="inline-flex items-center gap-2 rounded-full border border-gold-light/40 px-6 py-3 font-semibold text-gold-light"><Phone className="h-4 w-4" /> Ligar agora</a></div>
            <div className="mt-6 flex gap-3">{[{ ic: <Instagram className="h-5 w-5" />, href: "https://instagram.com/drasarabitu" }, { ic: <MessageCircle className="h-5 w-5" />, href: wa("Olá! Vim pelo site.") }].map((s, i) => (<a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="grid h-11 w-11 place-items-center rounded-xl border border-gold-light/20 bg-white/[0.07] text-white transition-all hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#f4d98a,#d3a44c)] hover:text-ink">{s.ic}</a>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <Reveal className="relative overflow-hidden rounded-[2.25rem] bg-[linear-gradient(135deg,#f4d98a,#d3a44c_48%,#9a7033)] px-6 py-20 text-center text-ink shadow-[0_12px_40px_-14px_rgba(211,164,76,0.55)]">
          <div className="pointer-events-none absolute -inset-1/3 bg-[radial-gradient(circle_at_22%_26%,rgba(255,255,255,0.45),transparent_38%)]" />
          <div className="relative"><span className="text-xs font-semibold uppercase tracking-[0.18em]">Agende agora</span><h2 className="mx-auto mt-4 max-w-[20ch] font-display text-3xl font-semibold leading-tight sm:text-5xl">Seu sorriso merece o cuidado de quem entende do assunto.</h2><p className="mx-auto mt-4 max-w-[52ch] font-medium opacity-80">Fale com a gente pelo WhatsApp e dê o primeiro passo para um sorriso mais saudável e bonito.</p><a href={wa("Olá! Quero agendar minha avaliação.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-petrol px-7 py-3.5 font-semibold text-gold-light transition-transform hover:-translate-y-0.5">Agendar pelo WhatsApp <ArrowRight className="h-4 w-4" /></a></div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0a1c21] px-4 py-16 text-cream/70 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-wrap items-center justify-center gap-2.5 rounded-2xl border border-gold-light/20 bg-gold-light/[0.06] px-6 py-4 text-center text-gold-light"><span className="text-base">⚕</span> Atendimento exclusivamente particular. <strong className="text-gold-light">Não atendemos SUS nem convênios.</strong></div>
        <div className="grid gap-10 border-b border-gold-light/10 pb-10 md:grid-cols-4">
          <div><img src="/logo-circular.png" alt="Dra. Sara Bitu" className="mb-3 h-20 w-auto" /><p className="max-w-[34ch] text-sm">Somos gente que cuida. Implantes, próteses e ortodontia com tecnologia e atendimento humanizado em Paulista/PE.</p></div>
          {[
            { h: "Tratamentos", l: [["Implantes", "#destaques"], ["Prótese", "#tratamentos"], ["Ortodontia", "#tratamentos"], ["Antes & Depois", "#antes-depois"]] },
            { h: "Consultório", l: [["A Dra. Sara", "#sobre"], ["Especialidades", "#especialidades"], ["Nosso espaço", "#espaco"], ["Depoimentos", "#depoimentos"]] },
          ].map((c) => (<div key={c.h}><h4 className="mb-4 font-display text-[0.92rem] text-gold-light">{c.h}</h4><ul className="space-y-2.5 text-sm">{c.l.map(([t, href]) => <li key={t}><a href={href} className="hover:text-gold-light">{t}</a></li>)}</ul></div>))}
          <div><h4 className="mb-4 font-display text-[0.92rem] text-gold-light">Contato</h4><ul className="space-y-2.5 text-sm"><li><a href={wa("Olá! Vim pelo site.")} className="hover:text-gold-light">(81) 99195-1562</a></li><li><a href="mailto:drasarabitu@hotmail.com" className="hover:text-gold-light">drasarabitu@hotmail.com</a></li><li><a href="https://instagram.com/drasarabitu" className="hover:text-gold-light">@drasarabitu</a></li><li>Seg a Sex · 08h30 às 18h</li></ul></div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-cream/50"><span>© 2026 Consultório Odontológico Dra. Sara Bitu. Todos os direitos reservados.</span><span>Responsável Técnica: Dra. Sara Bitu · CRO-PE 12787</span></div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-cream">
      <GoldDefs />
      <Header />
      <Hero />
      <ProvaSocial />
      <Sobre />
      <DepoimentoVideo />
      <Diferenciais />
      <Tratamentos />
      <Destaques />
      <AntesDepois />
      <Especialidades />
      <Jornada />
      <Galeria />
      <Depoimentos />
      <Faq />
      <Contato />
      <FinalCta />
      <Footer />
      <a href={wa("Olá! Vim pelo site e gostaria de agendar uma avaliação.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_30px_-8px_rgba(18,140,82,0.6)] transition-transform hover:scale-110"><MessageCircle className="h-7 w-7 fill-white text-white" /></a>
    </div>
  );
}
