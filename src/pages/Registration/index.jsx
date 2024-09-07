import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Input from "../../components/input";

function SignUp() {
  const [userSignUp, setUserSignUp] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.id]: e.target.value,
    });
    console.log("====================================");
    console.log(userSignUp);
    console.log("====================================");
  };
  const handleOnSubmit = (e) => {
    console.log("====================================");
    console.log(userSignUp);
    console.log("====================================");
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center gap-9">
        <div>
          <FaLinkedin className="text-5xl text-[#0077B5]" />
        </div>
        <div className="flex flex-col items-center gap-3">
          <h2 className="font-nunito font-bold text-[34px] text-cs-blue">
            Get started with easily register
          </h2>
          <p className="font-nunito font-normal text-xl text-cs-blue/50">
            Free register and you can enjoy it
          </p>
        </div>
      </div>

      <div className="mt-12">
        <form className="flex flex-col gap-5">
          <Input
            legend={"Email Addres"}
            placeholder={"enter your email"}
            type={"email"}
            handleOnChange={handleOnChange}
            id={"email"}
          />
          <Input
            legend={"Full name"}
            placeholder={"enter your fullname"}
            type={"text"}
            id={"fullname"}
            handleOnChange={handleOnChange}
          />
          <Input
            legend={"Password"}
            placeholder={"set your password"}
            type={"password"}
            handleOnChange={handleOnChange}
            id={"password"}
          />
          <button
            onClick={(e) => handleOnSubmit(e)}
            type="submit"
            className="text-center w-full bg-cs-purple font-nunito py-5 text-white font-semibold text-xl rounded-full bg-[#086FA4] active:bg-[#086FA4] active:opacity-90 duration-200 flex items-center justify-center mt-12"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
