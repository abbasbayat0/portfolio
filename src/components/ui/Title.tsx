import type { ReactNode } from "react";
import { motion } from "motion/react";

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
    <motion.section
      initial={{ opacity: 0, translateY: 100 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1}}
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
    </motion.section>
  );
};

export default Title;
