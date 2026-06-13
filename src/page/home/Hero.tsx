import Image from "../../components/shared/Hero/Image";
import Texts from "../../components/shared/Hero/Texts";

const Hero = () => {
  return (
    <article className="z-10 mt-14 flex max-w-375 flex-col md:justify-between min-[1100px]:mt-28 md:flex-row px-5">
      <Texts />
      <Image />
    </article>
  );
};

export default Hero;
