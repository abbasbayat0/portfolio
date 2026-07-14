import Title from "../../../ui/Title";
import AllExperience from "./AllExperience";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <article
      id="experience"
      className="relative z-10 mt-36 flex max-w-375 scroll-m-22 flex-col"
    >
      <motion.div
        initial={{ translateX: -20, opacity: 0, filter: "blur(2px)" }}
        whileInView={{ translateX: 0, opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn" }}
      >
        <Title
          title="career journey"
          description="A timeline of my professional growth, from curious beginner to senior
        engineer leading teams and building products at scale.
      "
          left
        >
          <p className="text-green mt-5 font-bold">
            Experience that{" "}
            <span className="georgia text-white italic">speaks volumes.</span>
          </p>
        </Title>
      </motion.div>
      <AllExperience />
    </article>
  );
};

export default Experience;
