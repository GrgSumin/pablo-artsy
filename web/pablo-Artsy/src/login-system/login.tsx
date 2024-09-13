import { useState } from "react";
import Title from "../component/title";
import Input from "../component/input";
import Button from "../component/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login Form */}
      <div className="py-8 px-8 w-full md:w-[50%] lg:w-[40%] xl:w-[28%] h-[88%] bg-[#F5F7F9]">
        <div className="mb-10">
          <Title />
        </div>

        <div className="flex flex-col gap-2 mb-7">
          <h1 className="text-3xl lg:text-4xl font-medium">Login</h1>
          <p className="text-gray-500">
            Please enter your credentials to continue.
          </p>
        </div>

        <div>
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
        </div>

        <div className="mb-4 text-right">
          <a href="#" className="text-blue-600">
            Forgot password?
          </a>
        </div>

        <div>
          <Button label="Login" variant="primary" textColor="text-white" />
        </div>

        <div className="flex justify-center mt-4 mb-4">
          <p className="text-gray-500">Don't have an account?</p>
          <a href="#" className="text-blue-600 ml-1">
            Sign Up
          </a>
        </div>

        <p className="text-gray-500 text-center">Or connect with</p>

        <div className="flex gap-4 justify-around mt-5">
          <img
            src="/Google.png"
            alt="Google"
            className="w-12 lg:w-14 h-12 lg:h-14"
          />
          <img
            src="/Facebook.png"
            alt="Facebook"
            className="w-12 lg:w-14 h-12 lg:h-14"
          />
          <img
            src="/Apple.png"
            alt="Apple"
            className="w-12 lg:w-14 h-12 lg:h-14"
          />
        </div>
      </div>

      {/* Frame Image */}
      <div className="hidden md:flex md:w-[20%] lg:w-[30%] h-[88%] justify-center items-center">
        <img src="/Frame3.png" alt="frame" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Login;
