import { CodeXml, Lightbulb, Rocket, UserSearch } from "lucide-react";
import { motion } from "motion/react";

const listOfDesc = [
  {
    icon: <CodeXml className="text-green" />,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: <Rocket className="text-green" />,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: <UserSearch className="text-green" />,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: <Lightbulb className="text-green" />,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const IconicDesc = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:w-1/2 lg:justify-end">
      {listOfDesc.map((item, index) => {
        const { icon, title, description } = item;
        return (
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 * index }}
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
