import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import TypoGraphy from "../components/TypoGraphy";
import Button from "../components/button";

const Hero = () => {
  return (
    <SafeAreaView>
      <View className="flex-col justify-center items-center gap-12 mt-1 px-9">
        <View className="text-center   flex-row justify-center gap-3  ">
          <Text className="text-center text-3xl tracking-[4em] ">PABLO</Text>
          <Text className="text-center text-3xl bg-black text-white h-9 w-32 tracking-[4em]">
            ARTSY
          </Text>
        </View>
        <Image className="" source={require("../../assets/hero.png")} />
        <Text className="text-center text-2xl">Welcome to Pablo Artsy</Text>
        <Text className="text-center text-lg font-light">
          Discover your next masterpiece. Buy, sell, and bid on stunning art
          today.
        </Text>
        <View className="">
          <Button variant="primary" label="Login" textColor="text-white" />
          <Button variant="white" label="Sign Up" classname="mt-5" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Hero;
