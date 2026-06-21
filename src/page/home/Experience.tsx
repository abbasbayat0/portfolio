const experiences = [
  {
    timeLine: "",
    title: "",
    company: "",
    description: "",
    technologies: "",
    current: true,
  },
];

const Experience = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col">
      <section>
        <p className="font-inter text-sm text-[#20B2A6]">CAREER JOURNEY</p>
        <p className="font-inter mt-5 text-5xl font-bold text-[#20B2A6]">
          Experience that{" "}
          <span className="georgia text-white italic">speaks volumes.</span>
        </p>
        <p className="font-inter mt-5 w-11/12 text-white/50 md:w-7/12">
          A timeline of my professional growth, from curious beginner to senior
          engineer leading teams and building products at scale.
        </p>
      </section>
      <section className="relative mt-14">
        {experiences.map((exp, index) => {
          return <div></div>;
        })}
      </section>
    </article>
  );
};

export default Experience;
