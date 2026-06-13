import { ArrowDownToLine, ArrowRight } from "lucide-react";
import Button from "../../components/ui/Button";

const Hero = () => {
  return (
    <article className="z-10 mt-14 flex">
      {/* left side */}
      <section className="max-w-1/2 min-w-1/2">
        <div className="relative mt-5 inline-block rounded-full border border-gray-600/30 bg-gray-600/20 px-4 py-2 backdrop-blur-[2px]">
          <div className="absolute top-3.5 left-3 h-2 w-2 animate-pulse rounded-full bg-[#1FABA0]"></div>
          <p className="ml-3 font-sans text-sm text-[#1faba0]">
            Front-End Developer . Next.JS Specialist
          </p>
        </div>
        <div className="mt-8">
          <p className="font-sans text-7xl leading-20 font-bold text-white">
            Clean{" "}
            <span className="text-[#20B2A6] text-shadow-lg/50 text-shadow-[#20b2a6]">
              Code
            </span>
            <br /> From Beautiful <br />
            <span className="georgia italic">Design.</span>
          </p>
        </div>
        <div className="mt-8 w-9/12">
          <p className="font-sans text-lg text-[#7a8491]">
            Hi, I'm Abbas Bayat - a front-end developer specializing in Next.JS,
            React.JS, and TypeScript. I build scalable, performant web
            applications that users love.
          </p>
        </div>
        <div className="mt-8 flex gap-2">
          <Button className="px-7 text-lg text-white/80 hover:text-white">
            <div className="flex gap-2">
              <p className="text-shadow-sm text-shadow-white/20">Contact Me </p>
              <ArrowRight className="mt-0.5" />
            </div>
          </Button>
          <Button className="group border border-[#20b2a6]/20 bg-transparent px-6 py-3.5 text-lg text-white transition duration-300 hover:border-[#20b2a6]/50 hover:bg-[#20b2a6]/20">
            <a href="#" className="flex gap-2">
              <p>Download CV </p>
              <ArrowDownToLine className="group-hover:animate-bounce" />
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
      <section className="relative flex max-w-1/2 min-w-1/2 items-center justify-center">
        <div className="w-9/12">
          <img
            src="/main.png"
            alt=""
            className="rounded-xl border-5 border-[#1a2329]/30"
          />
        </div>
        <div className="absolute w-9/12 animate-pulse rounded-xl shadow-[0px_0px_10px_10px] shadow-[#20b2a6]/30">
          <img src="/main.png" alt="" className="opacity-0" />
        </div>
      </section>
    </article>
  );
};

export default Hero;
