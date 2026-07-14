import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { listOfTech } from "../../../../assets/data";

const Technologies = () => {
  return (
    <motion.section
      initial={{ translateY: 50, opacity: 0, filter: "blur(2px)" }}
      whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative flex w-full flex-col justify-center overflow-x-hidden"
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
      <div className="absolute top-10 right-0 h-8 w-10 bg-linear-to-r from-transparent to-[#0f1418] md:w-20 lg:w-32" />
      <div className="absolute top-10 left-0 h-8 w-10 bg-linear-to-r from-[#0f1418] to-transparent md:w-20 lg:w-32" />
      {/* scroll sign */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(2px)" }}
        whileInView={{ opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-5 flex w-full flex-col items-center justify-center"
      >
        <p className="text-center text-sm tracking-wider text-white/50 md:text-xs">
          SCROLL
        </p>
        <ChevronDown className="mt-1 animate-bounce text-white/50" />
      </motion.div>
    </motion.section>
  );
};

export default Technologies;
