import { ArrowUpRight } from "lucide-react";
import Button from "../../components/ui/Button";

const projects = [
  {
    title: "USEO Website",
    description:
      "A sleek, responsive single-page application built with React and Tailwind CSS. It leverages Framer Motion for seamless UI transitions and React Router for intuitive multi-page navigation. Deployed via GitHub Pages.",
    image: "/USEO.jpg",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Router",
      "Gh-Pages",
    ],
    liveLink: "https://useo-live.vercel.app/",
    repoLink: "https://github.com/abbasbayat0/useoLive",
  },
  {
    title: "E-Commerce Store",
    description:
      "A fully-featured, enterprise-level online store built with Next.js 15 and TypeScript. This platform integrates a secure multi-provider authentication system (Clerk & Supabase), a robust PostgreSQL database management layer with Prisma ORM, and global state management using Redux Toolkit.",
    image: "/Store.jpg",
    tags: [
      "Next.JS",
      "TypeScript",
      "Redux Toolkit",
      "Prisma",
      "Clerk Auth",
      "Supabase",
      "Tailwind CSS",
      "Zod",
    ],
    liveLink: "https://store-zeta-five.vercel.app/",
    repoLink: "https://github.com/abbasbayat0/store",
  },
];

const Projects = () => {
  return (
    <article className="mt-36 flex max-w-375 flex-col items-center justify-center">
      <section className="flex flex-col items-center">
        <p className="font-inter text-sm text-[#20B2A6]">FEATURED WORKS</p>
        <p className="font-inter mt-5 text-5xl font-bold text-[#20B2A6]">
          Projects that{" "}
          <span className="georgia text-white italic">make an impact.</span>
        </p>
        <p className="font-inter mt-5 w-11/12 text-center text-white/40">
          A selection of my recent work, from complex web applications to
          innovative tools that solve real-world problems.
        </p>
      </section>
      <section className="mt-14 flex w-full flex-col justify-between gap-10 md:flex-row md:gap-0 min-[500px]:px-10 md:px-0 lg:px-5">
        {projects.map((project, index) => {
          const { title, image, description, tags, liveLink, repoLink } =
            project;
          return (
            <div
              key={index}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#141C21] pb-5 md:w-[48%]"
            >
              <div className="relative h-80 w-full overflow-hidden">
                <img
                  src={image}
                  alt={`an screenshot of ${project.title}`}
                  className="h-80 w-full transition duration-300 group-hover:scale-110 group-hover:blur-xs"
                />
                <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2">
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener, noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2329]/80 opacity-0 backdrop-blur-lg transition duration-300 group-hover:opacity-100 hover:bg-[#20B2A6]"
                  >
                    <ArrowUpRight className="text-white/80" />
                  </a>
                  <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener, noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2329]/80 opacity-0 backdrop-blur-lg transition duration-300 group-hover:opacity-100 hover:bg-[#20B2A6]"
                  >
                    <img
                      src="/github.png"
                      alt="view the source code"
                      className="h-6 w-6"
                    />
                  </a>
                </div>
              </div>
              <div>
                <div className="mt-5 flex justify-between px-5">
                  <p className="font-inter text-xl font-medium text-white/90 transition duration-300 group-hover:text-[#20B2A6]">
                    {title}
                  </p>
                  <a href={liveLink} target="_blank" rel="noopener, noreferrer">
                    <ArrowUpRight
                      className="text-white/40 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#20B2A6]"
                      size={20}
                    />
                  </a>
                </div>
                <p className="font-inter mt-4 px-5 text-sm font-extralight tracking-wide text-white/40">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 px-5">
                  {tags.map((tag, index) => {
                    return (
                      <p
                        key={index}
                        className="cursor-pointer rounded-full border border-gray-800 bg-[#1A2329] px-2.5 py-1.5 text-xs text-nowrap text-white/40 transition duration-300 hover:border-[#20B2A6] hover:text-[#20B2A6]"
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section>
        <a
          href="https://github.com/abbasbayat0/"
          target="_blank"
          rel="noopener, noreferrer"
        >
          <Button
            size="lg"
            className="md:mt-14 mt-10 border border-gray-800 flex gap-2 justify-center items-center bg-transparent hover:border-[#20B2A6] hover:bg-[#20B2A6]/20 text-lg"
          >View All Project <ArrowUpRight /></Button>
        </a>
      </section>
    </article>
  );
};

export default Projects;
