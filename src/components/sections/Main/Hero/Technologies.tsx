import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

const Technologies = () => {
  const listOfTech = [
    "HTML 5",
    "CSS 3",
    "TailwindCSS",
    "Framer Motion",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.JS",
    "Next.JS",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "React Hook Form",
    "Zod",
    "clerk",
    "Shadcn/UI",
    "Axios",
    "REST APIs",
    "Git, GitHub",
    "Vite",
    "Prettier",
    "ESLint",
    "Vercel",
    "NPM",
  ];
  return (
    <motion.section
      initial={{ filter:"blur(10px)" }}
      viewport={{ once: true }}
      whileInView={{ filter:"blur(0px)" }}
      transition={{ duration: 1 }}
      className="flex w-full flex-col justify-center overflow-x-hidden"
    >
      <div>
        <p className="text-center text-sm text-white/50">
          Technologies I Work With
        </p>
      </div>
      <div className="relative mx-auto mt-5 flex w-full animate-[tech_300s_linear_infinite] gap-10">
        {[...listOfTech, ...listOfTech].map((tech, index) => {
          return (
            <div
              className="cursor-pointer text-xl font-semibold text-nowrap text-white/30"
              key={index}
            >
              {tech}
            </div>
          );
        })}
        {/* fade animations */}
      </div>
      <div className="absolute mb-4 h-8 w-full bg-linear-to-r from-[#0F1418] via-transparent to-[#0F1418]"></div>
      <div className="mt-5 flex w-full flex-col items-center justify-center">
        <p className="text-center text-sm tracking-wider text-white/50 md:text-xs">
          SCROLL
        </p>
        <ChevronDown className="mt-1 animate-bounce text-white/50" />
      </div>
    </motion.section>
  );
};

export default Technologies;
