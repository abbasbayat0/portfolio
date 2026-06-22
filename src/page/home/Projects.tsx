import Title from "../../components/Projects/Title";
import ProjectCart from "../../components/Projects/ProjectCart";
import ViewAll from "../../components/Projects/ViewAll";

const Projects = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col items-center justify-center">
      <Title />
      <ProjectCart />
      <ViewAll />
    </article>
  );
};

export default Projects;
