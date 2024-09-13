import React from "react";
import { cn } from "../utils/cn";

interface ButtonProps {
  label: string;
  variant: "primary" | "transparent" | "white";
  textColor?: string;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  textColor,
  classname,
}) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md cursor-pointer transition-colors h-11 w-full",
        variant === "primary" && "bg-[#212121] text-white",
        variant === "white" && "bg-white border border-[#212121] text-black",
        variant === "transparent" &&
          "bg-transparent border border-white text-white",
        classname
      )}
    >
      <span className={cn("font-light text-lg", textColor)}>{label}</span>
    </button>
  );
};

export default Button;
