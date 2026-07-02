import Image from "../../components/Hero/Image";
import Technologies from "../../components/Hero/Technologies";
import Texts from "../../components/Hero/Texts";

const Hero = () => {
  return (
    <article className="relative z-10 mt-7 flex max-w-375 flex-col min-[1100px]:mt-16 md:mt-14 xl:mt-16 xl:px-5 min-[500px]:px-10">
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
