import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Button from "../../ui/Button";
import SocialIcons from "../../ui/SocialIcons";

const Texts = () => {
  return (
    <section className="lg:max-w-1/2 lg:min-w-1/2">
      {/* badge of frontend */}
      <div className="relative mt-5 -ml-2 inline-block rounded-full border border-gray-600/30 bg-gray-600/20 px-4 py-2 backdrop-blur-[2px] lg:ml-0">
        <div className="absolute top-3.5 left-3 h-2 w-2 animate-pulse rounded-full bg-[#1FABA0]"></div>
        <p className="ml-3 text-sm text-[#1faba0]">
          Front-End Developer . Next.JS Specialist
        </p>
      </div>

      {/* main text */}
      <div className="mt-8 p-2 lg:p-0">
        <p className="-ml-5 text-5xl leading-14 font-bold text-white lg:ml-0 lg:text-7xl lg:leading-20">
          Clean{" "}
          <span className="text-green text-shadow-green text-shadow-lg/50">
            Code
          </span>
          <br /> From Beautiful <br />
          <span className="georgia italic">Design.</span>
        </p>
      </div>

      {/* description */}
      <div className="mt-5 lg:mt-8 lg:w-9/12">
        <p className="font-sans text-lg font-medium text-[#7a8491]">
          Hi, I'm Abbas Bayat - a front-end developer specializing in Next.JS,
          React.JS, and TypeScript. I build scalable, performant web
          applications that users love.
        </p>
      </div>

      {/* buttons */}
      <div className="mt-8 -ml-1 flex flex-col gap-4 min-[500px]:flex-row lg:gap-2">
        {/* contact */}
        <a href="#contact">
          <Button className="flex w-50 items-center justify-center py-3 text-lg text-white transition duration-300 hover:text-white min-[850px]:w-40 lg:w-auto lg:px-6 lg:py-4 lg:text-base lg:text-[14px] lg:font-medium lg:tracking-wide">
            <div className="flex gap-2">
              <p className="text-shadow-sm text-shadow-white/20">Contact Me </p>
              <ArrowRight className="mt-0.5 lg:-mt-0.5" />
            </div>
          </Button>
        </a>

        {/* CV */}
        <a
          href={import.meta.env.BASE_URL + "ABBAS.pdf"}
          className="flex gap-2"
          download
        >
          <Button className="group border-green/20 hover:border-green/50 hover:bg-green/20 flex w-50 items-center justify-center border bg-transparent py-3 text-lg text-white transition duration-300 lg:w-auto lg:px-6 lg:py-4 lg:text-base lg:text-[14px] lg:font-medium lg:tracking-wide">
            <p>Download CV </p>
            <ArrowDownToLine className="group-hover:animate-bounce lg:-mt-0.5" />
          </Button>
        </a>
      </div>

      {/* social links */}
      <div className="mt-8 flex items-center gap-3">
        <div>
          <p className="text-sm font-extralight tracking-wide text-white/50">
            Follow Me :
          </p>
        </div>
        <div className="flex gap-2">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
};

export default Texts;
