import Title from "../../components/shared/Projects/Title";
import ProjectCart from "../../components/shared/Projects/ProjectCart";
import ViewAll from "../../components/shared/Projects/ViewAll";

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
