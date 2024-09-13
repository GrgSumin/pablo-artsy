import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { MdEmail, MdLock } from "react-icons/md"; // Import your icons

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  iconName: string; // Tailwind icon name (or any logic for icons)
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  iconName,
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Choose the icon based on the iconName prop
  const renderIcon = () => {
    switch (iconName) {
      case "email":
        return <MdEmail size={20} className="text-gray-500" />;
      case "lock":
        return <MdLock size={20} className="text-gray-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center p-2 border-2 h-14 w-full border-gray-200 rounded-lg mb-4">
      <span className="mr-2">{renderIcon()}</span>

      <input
        type={showPassword && secureTextEntry ? "password" : "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        className="flex-1 text-black outline-none bg-transparent"
      />

      {secureTextEntry && (
        <button
          onClick={togglePasswordVisibility}
          className="ml-2 text-gray-500 "
        >
          {showPassword ? (
            <MdVisibilityOff size={20} />
          ) : (
            <MdVisibility size={20} />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
