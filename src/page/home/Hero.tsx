import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";

const Hero = () => {
  return (
    <article className="z-10 mt-14 flex max-w-375 flex-col min-[1200px]:mt-20 md:flex-row">
      {/* left side */}
      <section className="md:max-w-1/2 md:min-w-1/2">
        <div className="relative mt-5 inline-block rounded-full border border-gray-600/30 bg-gray-600/20 px-4 py-2 backdrop-blur-[2px]">
          <div className="absolute top-3.5 left-3 h-2 w-2 animate-pulse rounded-full bg-[#1FABA0]"></div>
          <p className="ml-3 font-sans text-sm text-[#1faba0]">
            Front-End Developer . Next.JS Specialist
          </p>
        </div>
        <div className="mt-8">
          <p className="-ml-5 font-sans text-6xl leading-20 font-bold text-white md:ml-0 md:text-7xl">
            Clean{" "}
            <span className="text-[#20B2A6] text-shadow-lg/50 text-shadow-[#20b2a6]">
              Code
            </span>
            <br /> From Beautiful <br />
            <span className="georgia italic">Design.</span>
          </p>
        </div>
        <div className="mt-8 md:w-9/12">
          <p className="font-sans text-lg text-[#7a8491]">
            Hi, I'm Abbas Bayat - a front-end developer specializing in Next.JS,
            React.JS, and TypeScript. I build scalable, performant web
            applications that users love.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-4 min-[500px]:flex-row md:gap-2">
          <Button className="flex w-50 items-center justify-center py-3 text-lg text-white/80 hover:text-white min-[850px]:w-40 md:text-[14px]">
            <div className="flex gap-2">
              <p className="text-shadow-sm text-shadow-white/20">Contact Me </p>
              <ArrowRight className="mt-0.5 md:mt-0 lg:-mt-0.5" />
            </div>
          </Button>
          <Button className="group flex w-50 items-center justify-center border border-[#20b2a6]/20 bg-transparent py-3 text-lg text-white transition duration-300 hover:border-[#20b2a6]/50 hover:bg-[#20b2a6]/20 min-[850px]:w-40 md:text-[14px] lg:w-auto">
            <a href="#" className="flex gap-2">
              <p>Download CV </p>
              <ArrowDownToLine className="group-hover:animate-bounce md:-mt-0.5" />
            </a>
          </Button>
        </div>
        <div className="mt-8 flex items-center gap-3">
          <div>
            <p className="font-sans text-sm font-extralight text-white/50">
              Follow Me :
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
            >
              <img src="/github.png" alt="" className="h-5 w-5" />
            </a>
            <a
              href=""
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700/30 bg-gray-700/20 backdrop-blur-lg"
            >
              <img src="/telegram.png" alt="" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* right side */}
      <section className="relative mt-20 flex items-center justify-center min-[850px]:ml-5 min-[900px]:-mb-20 min-[1100px]:-mr-44 md:-mt-44 md:max-w-1/2 md:min-w-1/2 lg:-mb-44 xl:-mr-64">
        <div className="relative max-w-113 min-[500px]:w-10/12 min-[870px]:w-11/12 md:w-full">
          <img
            src="/main.png"
            alt=""
            className="rounded-xl border-5 border-[#1a2329]/30"
          />

          {/* EXP */}
          <div className="md:py-auto md:px-auto absolute -top-1/12 -left-1/12 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-2 py-2 backdrop-blur-xs min-[500px]:-top-8 min-[500px]:-left-5 min-[870px]:top-0 md:-top-10 md:h-20 md:w-24">
            <p className="font-sans text-sm font-extralight tracking-wide text-white/60">
              <span className="text-2xl font-bold text-[#20B2A6]">2+</span>{" "}
              <br />
              Years Exp.
            </p>
          </div>

          {/* available */}
          <div className="md:px-auto md:py-auto absolute right-0 bottom-0 flex animate-[ex_3s_ease-in-out_infinite] items-center justify-center gap-2 rounded-xl border border-[#1a2329] bg-[#1a2329]/50 px-2 py-1 backdrop-blur-xs md:h-10 md:w-40">
            <div className="h-3 w-3 animate-pulse rounded-full bg-[#01BE4C]" />
            <p className="font-sans text-xs text-white/90 md:text-sm">
              Available For Work
            </p>
          </div>
        </div>
        <div className="absolute max-w-113 animate-pulse rounded-xl shadow-[0px_0px_10px_10px] shadow-[#20b2a6]/30 min-[500px]:w-10/12 min-[870px]:w-11/12 md:w-full">
          <img src="/main.png" alt="" className="opacity-0" />
        </div>
      </section>
    </article>
  );
};

export default Hero;
