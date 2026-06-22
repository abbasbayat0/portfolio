import { CodeXml, Lightbulb, Rocket, UserSearch } from "lucide-react";

const RightSide = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 lg:w-1/2 lg:justify-end">
      {/* CLEAN */}
      <div className="h-52 w-11/12 min-[500px]:w-8/12 sm:w-[45%] rounded-xl border border-gray-800 bg-[#141C21] px-5 py-6 md:w-[45%]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163A3C]/40 transition duration-300 hover:bg-[#163a3c]/70">
          <CodeXml className="text-[#20B2A6]" />
        </div>
        <p className="font-inter mt-4 text-lg font-semibold tracking-wide text-white/90">
          Clean Code
        </p>
        <p className="font-inter mt-2 text-sm tracking-wide text-white/40">
          Writing maintainable, scalable code that stands the test of time.
        </p>
      </div>

      {/* PERF */}
      <div className="h-52 w-11/12 min-[500px]:w-8/12 sm:w-[45%] rounded-xl border border-gray-800 bg-[#141C21] px-5 py-6 md:w-[45%]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163A3C]/40 transition duration-300 hover:bg-[#163a3c]/70">
          <Rocket className="text-[#20B2A6]" />
        </div>
        <p className="font-inter mt-4 text-lg font-semibold tracking-wide text-white/90">
          Performance
        </p>
        <p className="font-inter mt-2 text-sm tracking-wide text-white/40">
          Optimizing for speed and delivering lightning-fast user experiences.
        </p>
      </div>

      {/* COLLABORATION */}
      <div className="h-52 w-11/12 min-[500px]:w-8/12 sm:w-[45%] rounded-xl border border-gray-800 bg-[#141C21] px-5 py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163A3C]/40 transition duration-300 hover:bg-[#163a3c]/70">
          <UserSearch className="text-[#20B2A6]" />
        </div>
        <p className="font-inter mt-4 text-lg font-semibold tracking-wide text-white/90">
          Collaboration
        </p>
        <p className="font-inter mt-2 text-sm tracking-wide text-white/40">
          Working closely with teams to bring ideas to life.
        </p>
      </div>

      {/* INNOVATION */}
      <div className="h-52 w-11/12 min-[500px]:w-8/12 sm:w-[45%] rounded-xl border border-gray-800 bg-[#141C21] px-5 py-6 md:w-[45%]">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#163A3C]/40 transition duration-300 hover:bg-[#163a3c]/70">
          <Lightbulb className="text-[#20B2A6]" />
        </div>
        <p className="font-inter mt-4 text-lg font-semibold tracking-wide text-white/90">
          Innovation
        </p>
        <p className="font-inter mt-2 text-sm tracking-wide text-white/40">
          Staying ahead with the latest technologies and best practices.
        </p>
      </div>
    </div>
  );
};

export default RightSide;
