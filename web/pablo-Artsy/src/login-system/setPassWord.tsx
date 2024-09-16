import { useState } from "react";
import Title from "../component/title";
import Input from "../component/input";
import Button from "../component/button";

const SetPassword = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hidden md:flex md:w-[20%] lg:w-[30%] h-[88%] justify-center items-center">
        <img src="/Forgot2.png" alt="frame" className="w-full h-full" />
      </div>
      <div className="py-8 px-8 w-full md:w-[50%] lg:w-[40%] xl:w-[28%] h-[88%] bg-[#F5F7F9]">
        <div className="mb-10">
          <Title />
        </div>

        <div className="flex flex-col gap-2 mb-7">
          <h1 className="text-3xl lg:text-4xl font-medium">Set Password</h1>
          <p className="text-gray-500">Enter your new password below </p>
        </div>
        <div>
          <Input
            placeholder="Confirm Password"
            value={password}
            onChangeText={setPassword}
            iconName="lock"
            secureTextEntry
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            iconName="lock"
            secureTextEntry
          />
        </div>

        <Button label="Continue" variant="primary" textColor="text-white" />
      </div>
    </div>
  );
};

export default SetPassword;
