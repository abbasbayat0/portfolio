import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../../../assets/data";

const ProjectCart = () => {
  return (
    <section className="mt-14 flex w-full flex-col justify-between gap-10 min-[500px]:px-10 md:flex-row md:gap-0 md:px-0 lg:px-5">
      {projects.map((project, index) => {
        const { title, image, description, tags, liveLink, repoLink } = project;
        return (
          <motion.div
            initial={{ translateY: 20, opacity: 0, filter: "blur(2px)" }}
            whileInView={{ translateY: 0, opacity: 1, filter: "none" }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.2 * index + 0.2,
              ease: "backIn",
            }}
            key={index}
            className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#141C21] pb-5 md:w-[48%]"
          >
            {/* poster */}
            <div className="relative h-80 w-full overflow-hidden">
              <img
                src={image}
                alt={`an screenshot of ${project.title}`}
                className="h-80 w-full transition duration-300 group-hover:scale-110 group-hover:blur-xs"
              />

              {/* float icons on the poster */}
              <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
                {/* live */}
                <a
                  href={liveLink}
                  target="_blank"
                  title="live demo of the project"
                  rel="noopener, noreferrer"
                  className="hover:bg-green flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2329]/80 opacity-0 backdrop-blur-lg transition duration-300 group-hover:opacity-100"
                >
                  <ArrowUpRight className="text-white/80" />
                </a>
                {/* github */}
                <a
                  href={repoLink}
                  title="repository of project"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:bg-green flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2329]/80 opacity-0 backdrop-blur-lg transition duration-300 group-hover:opacity-100"
                >
                  <img
                    src={import.meta.env.BASE_URL + "icons/github.png"}
                    alt="view the source code"
                    className="h-6 w-6"
                  />
                </a>
              </div>
            </div>

            {/* texts */}
            <div>
              {/* title and link to live */}
              <div className="mt-5 flex justify-between px-5">
                <p className="group-hover:text-green text-xl font-medium text-white transition duration-300">
                  {title}
                </p>
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener, noreferrer"
                  title="live demo of the project"
                >
                  <ArrowUpRight
                    className="group-hover:text-green text-white/50 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={20}
                  />
                </a>
              </div>

              {/* description */}
              <p className="mt-4 px-5 text-[13px] font-light tracking-wider text-white/50">
                {description}
              </p>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-2 px-5">
                {tags.map((tag, index) => {
                  return (
                    <p
                      key={index}
                      className="hover:border-green hover:text-green cursor-pointer rounded-full border border-gray-800 bg-[#1A2329] px-2.5 py-1.5 text-xs text-nowrap text-white/50 transition duration-300"
                    >
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default ProjectCart;
