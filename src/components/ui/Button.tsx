const Button = ({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  children: string;
}) => {
  const SIZE_MAP = {
    sm: "px-3 py-1",
    default: "px-4 py-2",
    lg: "px-6 py-3",
  };
  const combinedClass = `${className} ${SIZE_MAP[size]} bg-[#20b2a6]/80 rounded-full text-sm font-inter text-white/80 cursor-pointer hover:bg-[#20b2a6] transition duration-300 hover:text-white`;

  return <button className={combinedClass}>{children}</button>;
};

export default Button;
