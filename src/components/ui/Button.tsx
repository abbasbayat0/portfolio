import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Button = ({
  className,
  size = "default",
  children,
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  children: React.ReactNode;
}) => {
  const SIZE_MAP = {
    sm: "px-3 py-1",
    default: "px-4 py-2",
    lg: "px-6 py-3",
  };

  const combinedClass = cn(
    SIZE_MAP[size],
    "bg-green/80 rounded-full text-sm text-white/80 cursor-pointer hover:bg-green transition duration-300 hover:text-white",
    className,
  );

  return <button className={combinedClass}>{children}</button>;
};

export default Button;
