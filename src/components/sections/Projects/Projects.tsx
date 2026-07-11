import Title from "../../ui/Title";
import ProjectCart from "./ProjectCart";
import ViewAll from "./ViewAll";

const Projects = () => {
  return (
    <article
      id="projects"
      className="relative z-10 mt-36 flex max-w-375 scroll-m-22 flex-col items-center justify-center"
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
      <ProjectCart />
      <ViewAll />
    </article>
  );
};

export default Projects;
