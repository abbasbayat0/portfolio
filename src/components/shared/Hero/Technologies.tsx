import { ChevronDown } from "lucide-react";

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
    <section className="flex w-full flex-col justify-center overflow-x-hidden">
      <div>
        <p className="text-center text-sm text-white/50">
          Technologies I Work With
        </p>
      </div>
      <div className="relative mx-auto mt-5 flex w-full gap-10 animate-[tech_300s_linear_infinite]">
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
      <div className="absolute h-8 mb-4 w-full bg-linear-to-r from-[#0F1418] via-transparent to-[#0F1418]"></div>
      <div className="mt-5 flex flex-col items-center justify-center w-full">
        <p className="text-white/50 text-center text-sm tracking-wider">SCROLL</p>
        <ChevronDown className="text-white/50 animate-bounce mt-1" />
      </div>
    </section>
  );
};

export default Technologies;
