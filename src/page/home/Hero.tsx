import Button from "../../components/ui/Button";

const Hero = () => {
  return (
    <article className="z-10 flex mt-14">
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
          <Button className="px-8 py-4 text-lg text-white">Contact Me</Button>
          <Button className="px-8 py-4 text-lg text-white">
            <a href="#">Download CV</a>
          </Button>
        </div>
        <div></div>
      </section>

      {/* right side */}
      <section className="max-w-1/2 min-w-1/2"></section>
    </article>
  );
};

export default Hero;
