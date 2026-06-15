const projects = [
  {
    title: "USEO Website",
    description: "",
    image: "/USEO.jpg",
    tags: [],
    liveLink: "https://useo-live.vercel.app/",
    repoLink: "https://github.com/abbasbayat0/useoLive",
  },
  {
    title: "Store Website",
    description: "",
    image: "/Store.jpg",
    tags: [],
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
      <section className="mt-10">
        {projects.map((project, index) => {
          const { title, image, description, tags } = project;
          return (
            <div key={index} className="bg-green-300">
              <div>
                <img
                  src={image}
                  alt={`an screenshot of ${project.title}`}
                  className="h-32 w-32"
                />
                <div>
                  <p>live</p>
                  <p>source</p>
                </div>
              </div>
              <div>
                <div>
                  <p>{title}</p>
                  <p>flash</p>
                </div>
                <p>{description}</p>
                {tags.map((tag, index) => {
                  return <p key={index}>{tag}</p>;
                })}
              </div>
            </div>
          );
        })}
      </section>
      <section></section>
    </article>
  );
};

export default Projects;
