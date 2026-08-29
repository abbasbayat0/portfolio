import { motion } from "motion/react";
import { listOfDesc } from "../../../../assets/data";

const IconicDesc = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:w-1/2 lg:justify-end">
      {listOfDesc.map((item) => {
        const { icon, title, description } = item;
        return (
          <motion.div
            initial={{ translateX: 20, opacity: 0, filter: "blur(2px)" }}
            whileInView={{ translateX: 0, opacity: 1, filter: "none" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "backIn" }}
            className="h-52 w-11/12 rounded-xl border border-gray-800 bg-[#141C21] px-5 py-6 min-[500px]:w-8/12 sm:w-[45%] md:w-[45%]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163A3C]/40 transition duration-300 hover:bg-[#163a3c]/70">
              {icon}
            </div>
            <p className="mt-4 text-lg font-semibold tracking-wide text-white/90">
              {title}
            </p>
            <p className="mt-2 text-sm tracking-wider text-white/50">
              {description}
            </p>
          </motion.div>
        );
      })}{" "}
    </div>
  );
};

export default IconicDesc;
