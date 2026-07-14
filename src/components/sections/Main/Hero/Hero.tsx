import Image from "./Image";
import Technologies from "./Technologies";
import Texts from "./Texts";

const Hero = () => {
  return (
    <article className="relative z-10 mt-7 flex max-w-375 flex-col min-[500px]:px-10 min-[1100px]:mt-16 md:mt-14 xl:mt-16 xl:px-5">
      <section className="flex flex-col lg:flex-row lg:justify-between">
        <Texts />
        <Image />
      </section>
      <section className="mt-20 md:mt-32 lg:mt-20 2xl:mt-44">
        <Technologies />
      </section>
    </article>
  );
};

export default Hero;
