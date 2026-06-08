import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-100 hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      >
        <div className="h-3 w-3 rounded-full bg-[#f5ecd9]" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-99 hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hover ? 1.4 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.6 }}
      >
        <div className="h-10 w-10 rounded-full border border-[#9d7bd6]/50 backdrop-blur-sm" />
      </motion.div>
    </>
  );
}