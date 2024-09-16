import { View, Text } from "react-native";
import React from "react";

const Title = () => {
  return (
    <View className="text-center   flex-row justify-center gap-3  ">
      <Text className="text-center text-3xl tracking-[4em] ">PABLO</Text>
      <Text className="text-center text-3xl bg-black text-white h-9 w-32 tracking-[4em]">
        ARTSY
      </Text>
    </View>
  );
};

export default Title;
