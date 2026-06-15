import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

const Texts = () => {
  return (
    <section className="md:max-w-1/2 md:min-w-1/2">
      {/* badge of frontend */}
      <div className="relative mt-5 inline-block rounded-full border border-gray-600/30 bg-gray-600/20 px-4 py-2 backdrop-blur-[2px]">
        <div className="absolute top-3.5 left-3 h-2 w-2 animate-pulse rounded-full bg-[#1FABA0]"></div>
        <p className="ml-3 font-inter text-sm text-[#1faba0]">
          Front-End Developer . Next.JS Specialist
        </p>
      </div>

      {/* main text */}
      <div className="mt-8">
        <p className="-ml-5 font-inter text-6xl leading-20 font-bold text-white md:ml-0 md:text-7xl">
          Clean{" "}
          <span className="text-[#20B2A6] text-shadow-lg/50 text-shadow-[#20b2a6]">
            Code
          </span>
          <br /> From Beautiful <br />
          <span className="georgia italic">Design.</span>
        </p>
      </div>

      {/* description */}
      <div className="mt-8 md:w-9/12">
        <p className="font-sans text-lg font-semibold text-[#7a8491]">
          Hi, I'm Abbas Bayat - a front-end developer specializing in Next.JS,
          React.JS, and TypeScript. I build scalable, performant web
          applications that users love.
        </p>
      </div>

      {/* buttons */}
      <div className="mt-8 flex flex-col gap-4 min-[500px]:flex-row md:gap-2">
        {/* contact */}
        <Button className="flex w-50 items-center justify-center py-3 text-lg text-white/80 hover:text-white min-[850px]:w-40 md:text-[14px] lg:text-base lg:font-semibold">
          <div className="flex gap-2">
            <p className="text-shadow-sm text-shadow-white/20">Contact Me </p>
            <ArrowRight className="mt-0.5 md:mt-0 lg:-mt-0.5" />
          </div>
        </Button>

        {/* CV */}
        <Button className="group flex w-50 items-center justify-center border border-[#20b2a6]/20 bg-transparent py-3 text-lg text-white transition duration-300 hover:border-[#20b2a6]/50 hover:bg-[#20b2a6]/20 min-[850px]:w-40 md:text-[14px] lg:w-auto lg:text-bas lg:px-6 lg:py-4 lg:font-bold">
          <a href="/ABBAS.pdf" className="flex gap-2" download>
            <p>Download CV </p>
            <ArrowDownToLine className="group-hover:animate-bounce md:-mt-0.5" />
          </a>
        </Button>
      </div>

      {/* social links */}
      <div className="mt-8 flex items-center gap-3">
        <div>
          <p className="font-inter text-sm font-extralight tracking-wide text-white/50">
            Follow Me :
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/abbasbayat0"
            rel="noopener, noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
          >
            <img src="/github.png" alt="" className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/abbasbayat"
            rel="noopener, noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
          >
            <img src="/telegram.png" alt="" className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Texts;
