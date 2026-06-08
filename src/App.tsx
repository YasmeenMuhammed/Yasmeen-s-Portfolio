import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import { CustomCursor } from "./components/cursor";
import { Hero, About, Projects, Services, Contact, Footer } from "./components/sections";
import ProjectDetail from "./routes/projects.$slug";

export default function App() {
  const [pathname, setPathname] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );


  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);


  if (pathname.startsWith("/projects/") && pathname !== "/projects") {
    return <ProjectDetail />;
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#1a1612] text-[#f5ecd9] md:cursor-none">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-[#1a1612] via-[#1f1a14] to-[#1a1612]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #e9dcc4 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
