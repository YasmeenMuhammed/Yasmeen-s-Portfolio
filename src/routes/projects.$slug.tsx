import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink, MousePointer2, Github } from "lucide-react";
import { getProject, projects, type Project } from "../data/projects";
import { Navbar } from "../components/navbar";
import { CustomCursor } from "../components/cursor";

const ease = [0.22, 1, 0.36, 1] as const;

function LoadingScreen() {
  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#1a1612]"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="h-12 w-12 rounded-full border-2 border-[#e9dcc4]/20 border-t-[#9d7bd6]"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-xs uppercase tracking-[0.4em] text-[#e9dcc4]/60"
      >
        Loading project
      </motion.p>
    </motion.div>
  );
}

export default function ProjectDetail() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const slug = typeof window !== "undefined" ? window.location.pathname.split("/").pop() ?? "" : "";
    setProject(getProject(slug) ?? null);

    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);



  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#1a1612] text-[#f5ecd9]">
        <div className="text-center">
          <h1 className="font-display text-4xl">Project not found</h1>
          <a href="/" className="mt-4 inline-block text-[#9d7bd6] underline">
            Back home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a1612] text-[#f5ecd9] md:cursor-none">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1612] via-[#1f1a14] to-[#1a1612]" />
      </div>
      <CustomCursor />
      <Navbar />
      <AnimatePresence>{loading && <LoadingScreen />}</AnimatePresence>
      {!loading && (
        <motion.main
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto max-w-6xl px-6 pb-24 pt-32"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <a
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#9d7bd6]/20 px-4 py-2 text-xs uppercase tracking-widest text-[#9d7bd6] backdrop-blur transition hover:bg-[#9d7bd6]/30"
              data-cursor="hover"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back
            </a>
          </motion.div>
          <div className="mt-10 grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="relative"
            >
              <div
                className="relative h-130 overflow-hidden rounded-2xl border border-[#e9dcc4]/10 bg-[#0f0c0a] shadow-2xl"
                data-cursor="hover"
              >
                {/* Top bar */}
                <div className="flex items-center gap-1.5 border-b border-[#e9dcc4]/10 bg-[#1a1612]/90 px-3 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />

                  <div className="ml-3 truncate rounded-md bg-[#0f0c0a]/70 px-3 py-1 text-[10px] text-[#e9dcc4]/50">
                    {project.title.toLowerCase().replace(/\s+/g, "")}.com
                  </div>
                </div>

                {/* Scrollable preview */}
                <div
                  onScroll={(e) => {
                    if (!scrolled && e.currentTarget.scrollTop > 8) {
                      setScrolled(true);
                    }
                  }}
                  className="h-[calc(100%-45px)] overflow-y-auto overflow-x-hidden scroll-smooth
 no-scrollbar"
                >
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="block w-full select-none"
                    draggable={false}
                  />
<AnimatePresence>
  {!scrolled && (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35 }}
      className="pointer-events-none absolute bottom-5 left-1/2 z-20 -translate-x-1/2"
    >
      <div className="flex items-center gap-2 rounded-full border border-[#e9dcc4]/10 bg-[#1a1612]/80 px-4 py-2 backdrop-blur-md">
        
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <MousePointer2 className="h-3.5 w-3.5 text-[#9d7bd6]" />
        </motion.div>

        <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9dcc4]/70">
          Scroll to explore
        </span>
      </div>
    </motion.div>
  )}
</AnimatePresence>
                </div>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
            >
              <h1 className="font-display text-5xl md:text-6xl">{project.title}</h1>
              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-[#9d7bd6]">{project.subtitle}</p>
              <p className="mt-6 text-[#e9dcc4]/75 leading-relaxed">{project.longDesc}</p>
              <div className="mt-8">
                <h3 className="mb-3 text-sm font-semibold text-[#f5ecd9]">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#9d7bd6]/30 bg-[#9d7bd6]/10 px-3 py-1 text-xs text-[#e9dcc4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-semibold text-[#f5ecd9]">Tools &amp; Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#e9dcc4]/15 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#e9dcc4]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.live}
                  target="_blank"

                  className="inline-flex items-center gap-2 rounded-full bg-[#9d7bd6] px-5 py-2.5 text-sm font-medium text-[#1a1612] transition hover:bg-[#b896e2]"
                  data-cursor="hover"
                >
                  View Live <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 rounded-full border border-[#e9dcc4]/30 px-5 py-2.5 text-sm text-[#f5ecd9] transition hover:bg-[#e9dcc4]/10"
                  data-cursor="hover"
                >
                  Code <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-20 rounded-3xl border border-[#e9dcc4]/10 bg-[#1f1a14]/60 p-8 backdrop-blur"
          >
            <h2 className="font-display text-3xl text-[#f5ecd9]">Highlights</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {project.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                >
                  <h3 className="text-base font-semibold text-[#f5ecd9]">{f.title}</h3>
                  <p className="mt-2 text-sm text-[#e9dcc4]/70">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-[#e9dcc4]/10 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#e9dcc4]/50">More work</p>
            <div className="flex flex-wrap gap-2">
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="rounded-full border border-[#e9dcc4]/15 px-4 py-2 text-xs text-[#e9dcc4]/80 transition hover:border-[#9d7bd6]/40 hover:text-[#f5ecd9]"
                    data-cursor="hover"
                  >
                    {p.title} →
                  </a>
                ))}
            </div>

          </div>
        </motion.main>
      )}
    </div>
  );
}
