import Descriptions from "./Descriptions";
import GreenDots from "./GreenDots";
import ListOfTech from "./ListOfTech";

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
            <GreenDots left={left} current={current} />
            <Descriptions
              left={left}
              timeLine={timeLine}
              title={title}
              company={company}
              desc={description}
            />
            <ListOfTech left={left} technologies={technologies} />
          </div>
        );
      })}
    </section>
  );
};

export default AllExperience;
