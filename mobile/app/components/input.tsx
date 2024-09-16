import { View, TextInput, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  secureTextEntry?: boolean;
  iconName: string; // Icon name for the input field
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  keyboardType = "default",
  secureTextEntry = false,
  iconName,
}) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView>
      <View className="flex-row items-center justify-between p-2 border-[2px] h-14 w-full border-gray-200 rounded-lg mb-4">
        {/* Icon at the start of the input field */}
        <Icon
          name={iconName}
          size={20}
          color="gray"
          style={{ marginRight: 10 }}
        />

        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          secureTextEntry={showPassword} // Toggle secureTextEntry based on state
          className="flex-1 text-black"
        />

        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Icon
              name={showPassword ? "eye-off" : "eye"}
              color="gray"
              style={{ marginLeft: 10 }}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Input;
