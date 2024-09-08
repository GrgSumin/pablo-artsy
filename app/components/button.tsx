import { cn } from "../../utils/cn";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  label: string;
  variant: "primary" | "transparent" | "white";
  textColor: string;
  classname?: string;
}

const Button = ({ label, variant, textColor, classname }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={cn(
        "flex items-center justify-center  rounded-md cursor-pointer transition-colors h-11 w-80",
        variant === "primary" && "bg-[#212121] ",
        variant === "white" && "bg-white border-[1px] border-[#212121] ",
        variant === "transparent" &&
          "bg-transparent border-[1px] border-white ",
        classname
      )}
    >
      <Text className={cn("font-light text-lg", textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
