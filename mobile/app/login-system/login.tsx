import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import Title from "../components/title";
import Input from "../components/input";
import Button from "../components/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <View className="py-8 px-8  ">
        <View className="mb-20">
          <Title />
        </View>
        <View className="flex-col gap-2 mb-12">
          <Text className="text-4xl font-medium ">Login</Text>
          <Text className="text-[#7D7D7D]">
            Please enter your credentials to continue.
          </Text>
        </View>
        <View>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            iconName="email"
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconName="lock"
            secureTextEntry
          />
        </View>
        <TouchableOpacity className="mb-8 ">
          <Text className="text-right text-[#4267B2]">Forgot password?</Text>
        </TouchableOpacity>
        <View>
          <Button label="Login" variant="primary" textColor="text-white" />
        </View>
        <View className="flex-row justify-center mt-7 mb-7">
          <Text className="text-[#7D7D7D] text-center">
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text className="text-right text-[#4267B2]"> SignUp</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-[#7D7D7D] text-center">Or connect with</Text>
        <View className="flex-row gap-2 justify-around mt-5">
          <Image
            source={require("../../assets/Google.png")}
            className="w-14 h-14"
          />
          <Image
            source={require("../../assets/Facebook.png")}
            className="w-14 h-14"
          />
          <Image
            source={require("../../assets/Apple.png")}
            className="w-14 h-14"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
