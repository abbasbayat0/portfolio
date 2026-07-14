import Title from "../../../ui/Title";
import ProjectCart from "./ProjectCart";
import ViewAll from "./ViewAll";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <article
      id="projects"
      className="relative z-10 mt-36 flex max-w-375 scroll-m-22 flex-col items-center justify-center"
    >
      <motion.div
        initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
        whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "backIn" }}
      >
        <Title
          title="featured works"
          description="A selection of my recent work, from complex web applications to
        innovative tools that solve real-world problems."
        >
          <p className="text-green mt-5 text-center font-bold">
            Projects that{" "}
            <span className="georgia text-white italic">make an impact.</span>
          </p>
        </Title>
      </motion.div>
      <ProjectCart />
      <ViewAll />
    </article>
  );
};

export default Projects;
