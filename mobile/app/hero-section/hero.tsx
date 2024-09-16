import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import Button from "../components/button";
import Title from "../components/title";

const Hero = () => {
  return (
    <SafeAreaView>
      <View className="flex-col justify-center items-center gap-12 mt-1 px-9">
        <View>
          <Title />
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
