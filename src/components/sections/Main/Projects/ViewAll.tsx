import { ArrowUpRight } from "lucide-react";
import Button from "../../../ui/Button";
import { motion } from "motion/react";

const ViewAll = () => {
  return (
    <motion.section
      initial={{ filter:"blur(10px)" }}
      whileInView={{ filter:"blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <a
        href="https://github.com/abbasbayat0/"
        target="_blank"
        rel="noopener, noreferrer"
      >
        <Button
          size="lg"
          className="hover:border-green hover:bg-green/20 mt-10 flex items-center justify-center gap-2 border border-gray-800 bg-transparent text-lg md:mt-14"
        >
          View All Project <ArrowUpRight />
        </Button>
      </a>
    </motion.section>
  );
};

export default ViewAll;
