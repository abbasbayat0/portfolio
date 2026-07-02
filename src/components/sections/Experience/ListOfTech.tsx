const ListOfTech = ({
  left,
  technologies,
}: {
  left: boolean;
  technologies: string[];
}) => {
  return (
    <div
      className={`mt-5 flex ${left ? "md:justify-start" : "md:justify-end"} flex-wrap gap-2`}
    >
      {technologies.map((tech, index) => {
        return (
          <p
            key={index}
            className={`${left ? "text-left" : "text-right"} font-inter rounded-full bg-gray-700/20 px-2 py-1 text-[11px] tracking-wider text-nowrap text-white/30`}
          >
            {tech}
          </p>
        );
      })}
    </div>
  );
};

export default ListOfTech;
