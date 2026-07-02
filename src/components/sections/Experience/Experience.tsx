import AllExperience from "../../components/sections/Experience/AllExperience";
import Title from "../../components/ui/Title";

const Experience = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col">
      <Title
        title="career journey"
        description="A timeline of my professional growth, from curious beginner to senior
        engineer leading teams and building products at scale.
      "
        left
      >
        <p className="font-inter mt-5 font-bold text-[#20B2A6]">
          Experience that{" "}
          <span className="georgia text-white italic">speaks volumes.</span>
        </p>
      </Title>
      <AllExperience />
    </article>
  );
};

export default Experience;
