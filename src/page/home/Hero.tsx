import Image from "../../components/shared/Hero/Image";
import Technologies from "../../components/shared/Hero/Technologies";
import Texts from "../../components/shared/Hero/Texts";

const Hero = () => {
  return (
    <article className="relative z-10 mt-7 md:mt-14 xl:mt-16 flex max-w-375 flex-col xl:px-5 min-[1100px]:mt-16">
      <section className="flex flex-col md:flex-row md:justify-between">
        <Texts />
        <Image />
      </section>
      <section className="mt-20">
        <Technologies />
      </section>
    </article>
  );
};

export default Hero;
