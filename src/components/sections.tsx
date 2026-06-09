import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { projects, type Project } from "../data/projects";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Smartphone,
  Layers,
  Plug,
  Download,
  Sparkles,
  Twitter,
} from "lucide-react";
import profile from "../assets/profile.jpeg";

import { TechMarquee } from './tech-marquee';

const ease = [0.22, 1, 0.36, 1] as const;
// FadeUp
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
      delay: i * 0.08
    },
  })
}
// Floating Shapes


function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="animate-blob absolute -top-40 -left-32 h-105 w-105 rounded-full bg-[#9d7bd6]/25 blur-3xl" />
      <div
        className="animate-blob absolute top-1/3 -right-32 h-115 w-115 rounded-full bg-[#8aa0bf]/20 blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/3 h-85 w-85 rounded-full bg-[#a78664]/20 blur-3xl"
        style={{ animationDelay: "-12s" }}
      />
      <motion.div
        className="animate-float-slow absolute right-[12%] top-[18%] h-16 w-16 rounded-2xl border border-[#e9dcc4]/20 glass"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="animate-float-slow absolute left-[8%] top-[60%] h-10 w-10 rounded-full border border-[#9d7bd6]/40" style={{ animationDelay: "-3s" }} />
      <div className="animate-float-slow absolute left-[40%] top-[12%] h-3 w-3 rounded-full bg-[#9d7bd6]" style={{ animationDelay: "-5s" }} />
    </div>
  );
}

/* HOME ----------------------------------------------------------------- */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = ["Frontend Developer", "React & Next.js Developer"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIdx((i) => (i + 1) % words.length);
    }, 2200);

    return () => clearTimeout(timer);
  }, [idx]);
  return (
    <section id="home" ref={ref} className="relative flex min-h-screen  items-center overflow-hidden py-28">
      <FloatingShapes />
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#e9dcc4]/80"
          >
            <Sparkles className="h-3 w-3 text-[#9d7bd6]" />
            Available for projects
          </motion.div>

          <h1 className="font-display text-5xl leading-[1.05] text-[#f5ecd9] md:text-7xl">
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.1 }} className="block">
              Crafting
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.25 }} className="block">
              elegant <span className="italic text-gradient">interfaces</span>
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.4 }} className="block text-[#e9dcc4]/80">
              that feel alive.
            </motion.span>
          </h1>

          <div className="mt-6 flex h-9 items-center text-lg text-[#e9dcc4]/80">
            <span className="mr-3 h-px w-10 bg-[#9d7bd6]" />
            <AnimatePresence mode="wait">
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="font-medium tracking-wide"
              >
                {words[idx]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-8 max-w-md text-base leading-relaxed text-[#e9dcc4]/65"
          >
            I'm Yasmeen,
            a Frontend Developer focused on building modern and immersive web experiences with React.js and Next.js
            — blending clean code, smooth interactions,
            and elegant UI design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#f5ecd9] px-7 py-3.5 text-sm font-medium text-[#1a1612] transition hover:shadow-[0_0_40px_-5px_rgba(245,236,217,0.6)]"
            >
              <span className="relative z-10">View Projects</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-[#9d7bd6] to-[#8aa0bf] transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e9dcc4]/30 px-7 py-3.5 text-sm text-[#f5ecd9] transition hover:border-[#9d7bd6] hover:bg-[#9d7bd6]/10 hover:shadow-[0_0_30px_-5px_rgba(157,123,214,0.6)]"
            >
              Contact Me
              <Mail className="h-4 w-4 transition group-hover:rotate-12" />
            </a>
            <a
              href="/Yasmeen's CV.pdf"
              download
              className="group inline-flex items-center ms-20 gap-2 rounded-full border border-[#e9dcc4]/30 px-7 py-3.5 text-sm text-[#f5ecd9] transition hover:border-[#9d7bd6] hover:bg-[#9d7bd6]/10 hover:shadow-[0_0_30px_-5px_rgba(157,123,214,0.6)]"
            >
              Download CV
              <Download className="h-4 w-4  transition group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-7 flex items-center gap-8 text-[#e9dcc4]/60"
          >
            <div>
              <div className="font-display text-3xl text-[#f5ecd9]">1 + </div>
              <div className="text-xs uppercase tracking-widest mt-2">Years exp.</div>
            </div>
            <div className="h-10 w-px bg-[#e9dcc4]/20" />
            <div>
              <div className="font-display text-3xl text-[#f5ecd9]">5+</div>
              <div className="text-xs uppercase tracking-widest mt-2">Projects</div>
            </div>
            <div className="h-10 w-px bg-[#e9dcc4]/20" />
            <div>
              <div className="font-display text-3xl text-[#f5ecd9]">∞</div>
              <div className="text-xs uppercase tracking-widest mt-2">Pixels loved</div>
            </div>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.3 }}
          className="relative mx-auto aspect-4/5 w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-linear-to-br from-[#9d7bd6]/30 via-[#8aa0bf]/20 to-[#a78664]/30 blur-2xl" />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full overflow-hidden rounded-[2rem] glass violet-glow"
          >
            <img
              src={profile}
              alt="Portrait of Yasmeen, frontend developer"
              className="h-full w-full object-cover"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1a1612] via-transparent to-transparent" />
          </motion.div>

          {/* floating badges */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-12 rounded-2xl glass px-4 py-3 text-xs text-[#f5ecd9]"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.8)]" />
              Currently coding
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 bottom-16 rounded-2xl glass px-4 py-3 text-xs text-[#f5ecd9]"
          >
            <div className="font-display text-2xl text-[#9d7bd6]">{"</>"}</div>
            <div className="mt-1">React · Next.js</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ABOUT ---------------------------------------------------------------- */
const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 92 },
  { name: "JavaScript", level: 94 },
  { name: "Tailwind CSS", level: 96 },
  { name: "Redux", level: 85 },
  { name: "API Integration", level: 90 },
  { name: "Git & GitHub", level: 88 },
];
const timeline = [
  {
    year: "2026 — Now",
    title: "Junior Frontend Freelancer",
    place: "Freelance · Remote",
    desc: "Working as a freelance frontend developer, creating modern, responsive, and user-friendly web applications while continuously improving my skills and exploring creative UI interactions."
  },

  {
    year: "2025-2026",
    title: "Frontend Diploma at Route",
    place: "Route Academy",
    desc: "Completed an intensive frontend development course, built multiple real-world projects, and strengthened my skills in React.js, Next.js, responsive design, and modern UI development."
  },
  {
    year: "2023",
    title: "Started My Frontend Journey",
    place: "Self-learning · Online",
    desc: "Started learning frontend development from scratch and discovered my passion for building interactive web experiences with HTML, CSS, JavaScript, and React."
  },

];


export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9d7bd6]">/ About me</p>
          <h2 className="font-display text-4xl text-[#f5ecd9] md:text-6xl">
            A quiet obsession <span className="italic text-gradient">with the details</span>.
          </h2>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="space-y-6 text-[#e9dcc4]/75 leading-relaxed"
          >
            <p>
              I started writing code in 2019, mostly to redesign my own blog. One
              animation later, I was hooked. Five years on, I&apos;ve built
              everything from boutique editorial sites to enterprise dashboards,
              always chasing the same feeling: an interface that feels effortless.
            </p>
            <p>
              I work at the intersection of design and engineering — partnering
              with designers when they exist, and stepping into Figma when they
              don&apos;t. My favourite projects pair a strong typographic system
              with motion that earns its place.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                { k: "Design eye", v: "9/10" },
                { k: "Coffee/day", v: "3.5" },
                { k: "Lighthouse", v: "98+" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-2xl px-4 py-3">
                  <div className="font-display text-2xl text-[#f5ecd9]">{s.v}</div>
                  <div className="text-xs text-[#e9dcc4]/60">{s.k}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 gap-3">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl glass p-5 transition"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#f5ecd9]">{s.name}</span>
                  <span className="text-xs text-[#9d7bd6]">{s.level}%</span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#e9dcc4]/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease, delay: 0.2 + i * 0.05 }}
                    className="h-full bg-linear-to-r from-[#e9dcc4] via-[#9d7bd6] to-[#8aa0bf]"
                  />
                </div>
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ background: "radial-gradient(120px circle at var(--mx,50%) var(--my,50%), rgba(157,123,214,0.25), transparent 70%)" }} />
              </motion.div>
            ))}
          </div>

        </div>


        {/* Timeline */}
        <div className="mt-8">
          <TechMarquee />
        </div>
        <div className="mt-28">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 font-display text-3xl text-[#f5ecd9] md:text-4xl"
          >
            My journey
          </motion.h3>
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-linear-to-b from-[#9d7bd6] via-[#e9dcc4]/20 to-transparent md:left-1/2" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease, delay: i * 0.05 }}
                  className={`relative pl-10 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                    }`}
                >
                  <div className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-[#9d7bd6] shadow-[0_0_20px_4px_rgba(157,123,214,0.6)] md:left-1/2" />
                  <div className={`mt-3 md:mt-0 ${i % 2 === 0 ? "md:pl-10" : "md:text-right md:pr-10"
                    }`}>                    <div className="text-xs uppercase tracking-[0.25em] text-[#9d7bd6]">{t.year}</div>
                    <h4 className="mt-2 font-display text-xl md:text-2xl text-[#f5ecd9]">{t.title}</h4>
                    <div className="text-sm text-[#e9dcc4]/60">{t.place}</div>
                  </div>
                  <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pl-10" : "md:text-right md:pr-10"}`}>
                    <p className="text-sm md:text-base leading-relaxed text-[#e9dcc4]/75">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* PROJECTS -------------------------------------------------------------- */


const categories = ["All", "React", "Next.js", "UI/UX", "Full Stack"] as const;

export function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const filtered = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <section id="projects" className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-[#9d7bd6]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9d7bd6]">/ Selected work</p>
            <h2 className="font-display text-4xl text-[#f5ecd9] md:text-6xl">
              Recent <span className="italic text-gradient">projects</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-4 py-2 text-xs transition ${cat === c
                  ? "text-[#1a1612]"
                  : "text-[#e9dcc4]/70 hover:text-[#f5ecd9]"
                  }`}
              >
                {cat === c && (
                  <motion.span
                    layoutId="cat-pill"
                    className="absolute inset-0 rounded-full bg-[#e9dcc4]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease, delay: i * 0.08 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl glass p-3 transition"
                data-cursor="hover"
              >
                <a href={`/projects/${p.slug}`} className="block">
                  <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-[#1a1612]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110 "
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1a1612] via-[#1a1612]/30 to-transparent opacity-80" />
                    <div className="absolute inset-x-3 bottom-3 flex translate-y-4 gap-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#f5ecd9] px-4 py-2 text-xs font-medium text-[#1a1612]">
                        View Project <ExternalLink className="h-3 w-3" />
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#9d7bd6]">{p.category}</span>
                      <span className="text-[10px] text-[#e9dcc4]/40">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-2xl text-[#f5ecd9]">{p.title}</h3>
                    <p className="mt-2 text-sm text-[#e9dcc4]/65">{p.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full border border-[#e9dcc4]/15 px-2.5 py-1 text-[10px] text-[#e9dcc4]/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}


/* SERVICES -------------------------------------------------------------- */
const services = [
  { icon: Code2, title: "Frontend Development", desc: "React & Next.js apps engineered for performance, accessibility and longevity." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that feel native from 320px to ultrawide displays." },
  { icon: Layers, title: "UI Implementation", desc: "Faithful translation of Figma into reusable, themable component systems." },
  { icon: Plug, title: "API Integration", desc: "Type-safe data layers with React Query, tRPC and bespoke REST clients." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9d7bd6]">/ Services</p>
          <h2 className="font-display text-4xl text-[#f5ecd9] md:text-6xl">
            How I can <span className="italic text-gradient">help</span>.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition hover:shadow-[0_0_60px_-10px_rgba(157,123,214,0.4)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#9d7bd6]/30 to-[#8aa0bf]/20 text-[#f5ecd9] transition group-hover:scale-110">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl text-[#f5ecd9]">{s.title}</h3>
              <p className="mt-3 text-[#e9dcc4]/65">{s.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-xs text-[#9d7bd6] opacity-0 transition group-hover:opacity-100">
                Learn more <ArrowRight className="h-3 w-3" />
              </div>
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#9d7bd6]/20 blur-3xl opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CONTACT -------------------------------------------------------------- */
function Field({ label, type = "text", textarea = false }: { label: string; type?: string; textarea?: boolean }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const active = focused || value.length > 0;
  const Comp: any = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <label
        className={`pointer-events-none absolute left-5 transition-all duration-300 ${active ? "top-2 text-[10px] uppercase tracking-[0.25em] text-[#9d7bd6]" : "top-4 text-sm text-[#e9dcc4]/60"
          }`}
      >
        {label}
      </label>
      <Comp
        type={type}
        rows={textarea ? 5 : undefined}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full rounded-2xl border border-[#e9dcc4]/15 bg-[#e9dcc4]/3 px-5 ${textarea ? "pt-7 pb-4" : "pt-6 pb-2"} text-[#f5ecd9] outline-none transition focus:border-[#9d7bd6] focus:bg-[#9d7bd6]/5 focus:shadow-[0_0_30px_-5px_rgba(157,123,214,0.6)]`}
      />
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9d7bd6]/15 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#9d7bd6]">/ Contact</p>
          <h2 className="font-display text-5xl text-[#f5ecd9] md:text-7xl">
            Let&apos;s build something <br />
            <span className="italic text-gradient">beautiful</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-[#e9dcc4]/65">
            Have a project in mind, or just want to say hi? My inbox is open and
            I usually reply within a day.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto max-w-2xl space-y-4 rounded-3xl glass p-8 md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Your name" />
            <Field label="Email" type="email" />
          </div>
          <Field label="Subject" />
          <Field label="Tell me about your project" textarea />
          <button
            type="submit"
            className="group relative w-full overflow-hidden rounded-full bg-[#f5ecd9] px-8 py-4 text-sm font-medium text-[#1a1612] transition hover:shadow-[0_0_60px_-5px_rgba(245,236,217,0.7)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Send message
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-[#9d7bd6] via-[#8aa0bf] to-[#9d7bd6] transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </motion.form>

        <div className="mt-14 flex flex-col items-center gap-6">
          <div className="text-xs uppercase tracking-[0.3em] text-[#e9dcc4]/50">Or find me on</div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Mail, href: "mailto:yasmeenmuhammed69@gmail.com", label: "Email" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/yasmeen-muhammed-9a82a3220/", label: "LinkedIn" },
              { Icon: Github, href: "https://github.com/YasmeenMuhammed", label: "GitHub" },
              { Icon: Twitter, href: "#", label: "Twitter" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                className="group relative flex h-12 w-12 items-center justify-center rounded-full glass text-[#e9dcc4] transition hover:scale-110 hover:text-[#9d7bd6] hover:shadow-[0_0_30px_-5px_rgba(157,123,214,0.7)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href="mailto:yasmeenmuhammed69@gmail.com" className="text-[#e9dcc4]/70 hover:text-[#f5ecd9]">
            yasmeenmuhammed69@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* FOOTER --------------------------------------------------------------- */
export function Footer() {
  return (
    <footer className="relative border-t border-[#e9dcc4]/10 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row"
      >
        <div className="font-display text-xl">
          <span className="text-gradient">Yas</span>
          <span className="text-[#e9dcc4]">meen</span>
          <span className="text-[#9d7bd6]">.</span>
        </div>
        <p className="text-xs text-[#e9dcc4]/50">
          © {new Date().getFullYear()} Yasmeen Muhammed — Crafted with care &amp; React.
        </p>
        <div className="flex gap-4 text-xs text-[#e9dcc4]/60">
          <a href="#home" className="hover:text-[#f5ecd9]">Back to top ↑</a>
        </div>
      </motion.div>
    </footer>
  );
}