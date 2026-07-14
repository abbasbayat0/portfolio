import { experiences } from "../../../../assets/data";
import Descriptions from "./Descriptions";
import GreenDots from "./GreenDots";
import ListOfTech from "./ListOfTech";
import { motion } from "motion/react";

const AllExperience = () => {
  return (
    <section className="relative mt-14 flex flex-col items-center justify-between gap-10">
      {/* the line of the time */}
      <motion.div
        initial={{ filter: "blur(10px)", height: 0 }}
        whileInView={{ filter: "blur(0px)", height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="from-green/80 absolute top-1 left-0 h-full w-0.75 rounded-full bg-linear-to-b md:left-1/2 md:-translate-x-1/2"
      />

      {/* map on exp list */}
      {experiences.map((exp, index) => {
        const { timeLine, title, company, description, technologies, current } =
          exp;
        const left = index % 2 !== 0;
        const position = left ? "md:translate-x-2/3" : "md:-translate-x-2/3";
        return (
          <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 * index + 1.5 }}
            key={index}
            className={`border-green/40 static flex w-10/12 flex-col rounded-2xl border bg-[#141C21] p-5 md:w-[40%] ${position}`}
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
          </motion.div>
        );
      })}
    </section>
  );
};

export default AllExperience;
