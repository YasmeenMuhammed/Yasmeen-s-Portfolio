import {
    SiHtml5,
    SiCss,
    SiJquery,
    SiAngular,
    SiVuedotjs,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiBootstrap,
} from "react-icons/si";
const techs = [
    { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
    { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
    { Icon: SiCss, color: "#1572B6", name: "CSS3" },
    { Icon: SiJquery, color: "#0769AD", name: "jQuery" },
    { Icon: SiAngular, color: "#DD0031", name: "Angular" },
    { Icon: SiVuedotjs, color: "#41B883", name: "Vue" },
    { Icon: SiReact, color: "#61DAFB", name: "React" },
    { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind" },
];
export function TechMarquee() {
    const loop = [...techs, ...techs];
return(
        <section
            className="relative w-full overflow-hidden py-12 bg-[#1a1612]"
            style={{
                WebkitMaskImage:
                    "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)",
                maskImage:
                    "linear-gradient(to right, transparent 0, #000 12%, #000 88%, transparent 100%)",
            }}
        >
            <div className="flex w-max animate-marquee gap-16 px-8">
                {loop.map(({ Icon, color, name }, i) => (
                    <div
                        key={i}
                        title={name}
                        style={{ ["--c" as any]: color }}
                        className="text-[#3a342d] hover:text-(--c) transition-colors duration-300"
                    >
                        <Icon size={56} />
                    </div>
                ))}
            </div>
        </section>
    );
}