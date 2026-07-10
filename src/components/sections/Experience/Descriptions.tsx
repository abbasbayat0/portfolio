const Descriptions = ({
  left,
  timeLine,
  title,
  company,
  desc,
}: {
  left: boolean;
  timeLine: string;
  title: string;
  company: string;
  desc: string;
}) => {
  return (
    <>
      <p
        className={`${left ? "md:text-left" : "md:text-right"} font-inter text-sm text-green`}
      >
        {timeLine}
      </p>
      <p
        className={`${left ? "md:text-left" : "md:text-right"} font-inter mt-3 text-xl font-medium text-white`}
      >
        {title}
      </p>
      <p
        className={`${left ? "md:text-left" : "md:text-right"} font-inter text-sm text-white/30`}
      >
        {company}
      </p>
      <p
        className={`${left ? "md:text-left" : "md:text-right"} font-inter mt-5 text-sm tracking-wide text-white/40`}
      >
        {desc}
      </p>
    </>
  );
};

export default Descriptions;
