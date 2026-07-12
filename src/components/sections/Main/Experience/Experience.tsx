import Title from "../../../ui/Title";
import AllExperience from "./AllExperience";

const Experience = () => {
  return (
    <article
      id="experience"
      className="relative z-10 mt-36 flex max-w-375 scroll-m-22 flex-col"
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
      <AllExperience />
    </article>
  );
};

export default Experience;
