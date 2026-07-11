import Title from "../../ui/Title";
import ProjectCart from "./ProjectCart";
import ViewAll from "./ViewAll";

const Projects = () => {
  return (
    <article className="relative z-10 mt-36 flex max-w-375 flex-col items-center justify-center">
      <Title
        title="featured works"
        description="A selection of my recent work, from complex web applications to
        innovative tools that solve real-world problems."
      >
        <p className="font-inter text-green mt-5 text-center font-bold">
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
