const Title = () => {
  return (
    <section className="flex flex-col items-center">
      <p className="font-inter text-sm text-[#20B2A6]">FEATURED WORKS</p>
      <p className="font-inter mt-5 text-5xl font-bold text-[#20B2A6]">
        Projects that{" "}
        <span className="georgia text-white italic">make an impact.</span>
      </p>
      <p className="font-inter mt-5 w-11/12 text-center text-white/50">
        A selection of my recent work, from complex web applications to
        innovative tools that solve real-world problems.
      </p>
    </section>
  );
};

export default Title;
