import LeftSide from "../../components/About/LeftSide";
import RightSide from "../../components/About/RightSide";

const About = () => {
  return (
    <article className="mt-36 max-w-375">
      <section className="mt-8 flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row lg:gap-5">
        <LeftSide />
        <RightSide />
      </section>
    </article>
  );
};

export default About;
