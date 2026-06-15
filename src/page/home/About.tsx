import LeftSide from "../../components/shared/About/LeftSide";
import RightSide from "../../components/shared/About/RightSide";

const About = () => {
  return (
    <article className="mt-36 max-w-375">
      <section>
        <p className="text-[#20B2A6] sm:ml-8 lg:ml-auto text-sm">ABOUT ME</p>
      </section>
      <section className="mt-8 flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row lg:gap-5">
        <LeftSide />
        <RightSide />
      </section>
    </article>
  );
};

export default About;
