const experiences = [
  {
    timeLine: "2024 - Present",
    title: "Front-End Developer",
    company: "Self Employed",
    description:
      "Transitioned from theory to practice by converting documented knowledge into tangible, visual results. I spent this phase building numerous hands-on exercises and advancing multiple personal projects.",
    technologies: ["Tailwind CSS", "ReduxToolkit", "Framer Motion"],
    current: true,
  },
  {
    timeLine: "2023 - 2024",
    title: "Front-End Student",
    company: "Self Employed",
    description:
      "Focused heavily on mastering the fundamentals through official documentation and high-quality reference platforms. My primary resources included W3Schools.com for core web technologies and Nextjs.org for modern React frameworks.",
    technologies: ["HTML", "CSS", "JavaScript", "React.JS", "Next.JS"],
    current: false,
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
      <section className="relative mt-14 flex flex-col items-center justify-between gap-10">
        <div className="absolute top-1 left-1/2 h-full w-0.75 -translate-x-1/2 rounded-full bg-linear-to-b from-[#20B2A6]/80" />
        {experiences.map((exp, index) => {
          const {
            timeLine,
            title,
            company,
            description,
            technologies,
            current,
          } = exp;
          const left = index % 2 !== 0;
          const position = left ? "translate-x-8/12" : "-translate-x-8/12";
          return (
            <div
              key={index}
              className={`static flex w-[40%] flex-col rounded-2xl border border-[#20B2A6]/40 p-5 bg-[#141C21] ${position}`}
            >
              <div
                className={`absolute top-0 h-3 w-3 rounded-full bg-[#20B2A6] shadow-[0px_0px_15px_15px] shadow-[#141c21] ${left ? "left-[-18.25%]" : "left-[115.75%]"}`}
              >
                {current && (
                  <span className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#20b2a6]" />
                )}
              </div>
              <div>
                <p className={`${left?"text-left":"text-right"} text-sm font-inter text-[#20b2a6]`}>{timeLine}</p>
              </div>
              <div className="mt-3">
                <p className={`${left?"text-left":"text-right"} text-white font-inter text-xl font-medium`}>{title}</p>
                <p className={`${left?"text-left":"text-right"} text-white/30 font-inter text-sm`}>{company}</p>
              </div>
              <div className="mt-5">
                <p className={`${left?"text-left":"text-right"} text-white/40 tracking-wide font-inter text-sm`}>{description}</p>
              </div>
              <div className={`flex mt-5 ${left?"justify-start":"justify-end"} gap-2`}>
                {technologies.map((tech, index) => {
                  return <p key={index} className={`${left?"text-left":"text-right"} text-white/30 font-inter text-[11px] tracking-wider bg-gray-700/20 px-2 py-1 rounded-full`}>{tech}</p>;
                })}
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Experience;
