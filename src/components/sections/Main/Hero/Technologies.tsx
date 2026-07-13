import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { listOfTech } from "../../../../assets/data";

const Technologies = () => {
  return (
    <motion.section
      initial={{ filter: "blur(10px)" }}
      viewport={{ once: true }}
      whileInView={{ filter: "blur(0px)" }}
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
              className="cursor-pointer text-xl font-semibold text-nowrap text-white/30 transition duration-300 hover:scale-105 hover:text-white/60"
              key={index}
            >
              {tech}
            </div>
          );
        })}
      </div>
      {/* fade animations */}
      <div className="absolute right-0 mb-4 h-8 w-44 bg-linear-to-r from-transparent to-[#0f1418]" />
      <div className="absolute left-0 mb-4 h-8 w-44 bg-linear-to-r from-[#0F1418] to-transparent"></div>
      {/* scroll */}
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
