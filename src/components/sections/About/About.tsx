import IconicDesc from "./IconicDesc";
import Texts from "./Texts";

const About = () => {
  return (
    <article id="about" className="relative z-10 mt-36 max-w-375 scroll-m-22">
      <section className="mt-8 flex flex-col items-center justify-center gap-10 md:gap-14 lg:flex-row lg:gap-5">
        <IconicDesc />
        <Texts />
      </section>
    </article>
  );
};

export default About;
