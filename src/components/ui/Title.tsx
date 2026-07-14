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
      <p className="text-green text-xs uppercase md:text-sm">{title}</p>
      <p
        className={`mt-2 ${!left && "text-center"} text-green text-4xl font-bold md:text-5xl`}
      >
        {children}
      </p>
      {description && (
        <p
          className={`mt-5 w-11/12 text-sm tracking-wide text-white/50 md:text-base ${!left && "text-center"}`}
        >
          {description}
        </p>
      )}
    </section>
  );
};

export default Title;
