import { useState } from "react";
import Title from "../component/title";
import Input from "../component/input";
import Button from "../component/button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="hidden md:flex md:w-[20%] lg:w-[30%] h-[88%] justify-center items-center">
        <img src="/Forgot.png" alt="frame" className="w-full h-full" />
      </div>
      <div className="py-8 px-8 w-full md:w-[50%] lg:w-[40%] xl:w-[28%] h-[88%] bg-[#F5F7F9]">
        <div className="mb-10">
          <Title />
        </div>

        <div className="flex flex-col gap-2 mb-7">
          <h1 className="text-3xl lg:text-4xl font-medium">Recover Account</h1>
          <p className="text-gray-500">
            Enter your email to reset your password
          </p>
          <p className="text-gray-500">
            Already have an account?
            <a href="#" className="text-blue-600">
              Login Now
            </a>
          </p>
        </div>

        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          iconName="email"
        />

        <Button label="Continue" variant="primary" textColor="text-white" />
      </div>
    </div>
  );
};

export default ForgotPassword;
