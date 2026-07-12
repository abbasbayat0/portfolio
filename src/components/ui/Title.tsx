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
      <p className="text-xs md:text-sm text-green uppercase">{title}</p>
      <p
        className={`mt-2 ${!left && "text-center"} md:text-5xl text-4xl font-bold text-green`}
      >
        {children}
      </p>
      {description && (
        <p
          className={`mt-5 w-11/12 text-sm md:text-base text-white/50 tracking-wide ${!left && "text-center"}`}
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default Title;
