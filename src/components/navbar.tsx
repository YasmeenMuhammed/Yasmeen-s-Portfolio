import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const items = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
          scrolled ? "glass violet-glow" : "bg-transparent"
        }`}
      >
        <a href="/#home" className="font-display text-2xl tracking-wide">
          <span className="text-gradient">Y</span>
          <span className="text-[#e9dcc4]">asmeen</span>
          <span className="text-[#9d7bd6]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {items.map((it, i) => (
            <motion.a
              key={it.href}
              href={it.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.06 }}
              className="group relative rounded-full px-4 py-2 text-sm text-[#e9dcc4]/80 transition hover:text-[#f5ecd9]"
            >
              {it.label}
              <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[#9d7bd6] to-[#8aa0bf] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-full border border-[#e9dcc4]/30 bg-[#e9dcc4]/5 px-5 py-2 text-sm text-[#f5ecd9] transition hover:border-[#9d7bd6] hover:bg-[#9d7bd6]/10 hover:shadow-[0_0_30px_-5px_rgba(157,123,214,0.6)] md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          className="md:hidden text-[#f5ecd9]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-2 rounded-3xl glass p-6 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2 text-[#e9dcc4] hover:bg-white/5"
              >
                {it.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}