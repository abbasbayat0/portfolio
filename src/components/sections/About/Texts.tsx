import Title from "../../ui/Title";

const Texts = () => {
  return (
    <div className="sm:w-11/12 lg:w-1/2">
      <Title title="about me" left>
        <p className="text-green font-bold">
          Building the future,{" "}
          <span className="georgia leading-16 text-white italic">
            one component at a time.
          </span>
        </p>
      </Title>
      <div className="mt-8">
        <p className="text-sm font-light tracking-wide text-white/50 md:text-base">
          I'm a passionate front-end developer with over 2 years of experience
          crafting digital products that make a difference. My journey started
          with a curiosity for how things work on the web, and it has evolved
          into a deep expertise in modern frontend technologies.
          <br />
          <br />
          I specialize in React, Next.js, and TypeScript, building everything
          from sleek landing pages to complex enterprise applications. My
          approach combines technical excellence with a keen eye for design and
          user experience.
          <br />
          <br />
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community.
        </p>
      </div>
      <div className="shadow-green/10 mt-8 rounded-3xl bg-[#141C21]/60 p-7 shadow-[0px_0px_10px_10px] backdrop-blur-lg">
        <p className="text-md font-semibold text-white/80 italic lg:text-lg">
          "My mission is to create digital experiences that are not just
          functional, but truly delightful — products that users love to use and
          developers love to maintain."
        </p>
      </div>
    </div>
  );
};

export default Texts;
