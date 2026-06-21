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

const AllExperience = () => {
  return (
    <section className="relative mt-14 flex flex-col items-center justify-between gap-10">
      {/* the line of the time */}
      <div className="absolute top-1 left-0 h-full w-0.75 rounded-full bg-linear-to-b from-[#20B2A6]/80 md:left-1/2 md:-translate-x-1/2" />

      {/* map on exp list */}
      {experiences.map((exp, index) => {
        const { timeLine, title, company, description, technologies, current } =
          exp;
        const left = index % 2 !== 0;
        const position = left ? "md:translate-x-8/12" : "md:-translate-x-8/12";
        return (
          <div
            key={index}
            className={`static flex w-10/12 flex-col rounded-2xl border border-[#20B2A6]/40 bg-[#141C21] p-5 md:w-[40%] ${position}`}
          >
            {/* the green dots */}
            <div
              className={`absolute h-3 w-3 rounded-full bg-[#20B2A6] shadow-[0px_0px_15px_15px] shadow-[#141c21] md:top-0 ${left ? "-left-1 md:left-[-18.25%]" : "-top-0.5 -left-1 md:left-[115.75%]"}`}
            >
              {/* current pointer */}
              {current && (
                <span className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-[#20b2a6]" />
              )}
            </div>

            <p
              className={`${left ? "md:text-left" : "md:text-right"} font-inter text-sm text-[#20b2a6]`}
            >
              {timeLine}
            </p>
            <p
              className={`${left ? "md:text-left" : "md:text-right"} font-inter mt-3 text-xl font-medium text-white`}
            >
              {title}
            </p>
            <p
              className={`${left ? "md:text-left" : "md:text-right"} font-inter text-sm text-white/30`}
            >
              {company}
            </p>
            <p
              className={`${left ? "md:text-left" : "md:text-right"} font-inter mt-5 text-sm tracking-wide text-white/40`}
            >
              {description}
            </p>

            {/* the list of techs */}
            <div
              className={`mt-5 flex ${left ? "md:justify-start" : "md:justify-end"} flex-wrap gap-2`}
            >
              {technologies.map((tech, index) => {
                return (
                  <p
                    key={index}
                    className={`${left ? "text-left" : "text-right"} font-inter rounded-full bg-gray-700/20 px-2 py-1 text-[11px] tracking-wider text-nowrap text-white/30`}
                  >
                    {tech}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AllExperience;
