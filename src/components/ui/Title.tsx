import type { ReactNode } from "react";

const Title = ({
  children,
  title,
  description,
  left = false,
}: {
  children: ReactNode;
  title: string;
  description?: string;
  left?: boolean;
}) => {
  return (
    <section
      className={`flex flex-col ${left ? "items-start" : "items-center"}`}
    >
      <p className="font-inter text-xs md:text-sm text-green uppercase">{title}</p>
      <p
        className={`font-inter mt-2 ${!left && "text-center"} md:text-5xl text-4xl font-bold text-green`}
      >
        {children}
      </p>
      {description && (
        <p
          className={`font-inter mt-5 w-11/12 text-sm md:text-base text-white/40 ${!left && "text-center"}`}
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default Title;
