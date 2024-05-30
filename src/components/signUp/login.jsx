import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
} from "@/theme/theming";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = ({ slide, setSlide }) => {
  const [showPassword, setShowPassword] = useState("password");

  return (
    <div
      style={{
        right: slide.login,
        background: UseBgDarker(),
        color: SecondaryTextExist(),
      }}
      className={` w-full h-full flex  transition-all duration-300 absolute font-normal`}
    >
      <div className="w-1/2 h-full  hidden md:block">IMAGE</div>
      <div className="w-full md:w-1/2 h-full p-8 relative">
        <form className="flex max-w-md flex-col gap-4 absolute  w-[80%]  top-[50%] left-[50%] center-translate">
          <div className="flex flex-col">
            <div
              style={{ color: SecondaryTextExist() }}
              className="text-[clamp(1rem,3cqw,2rem)]"
            >
              Email
            </div>
            <input
              style={{ borderColor: UsePrimary(), background: UseBg() }}
              type="text"
              className="border-2 rounded-xl w-full"
            />
          </div>
          <div>
            <div
              style={{ color: SecondaryTextExist() }}
              className="text-[clamp(1rem,3cqw,2rem)]"
            >
              Password
            </div>
            <div className=" relative grid place-items-center">
              <input
                style={{ borderColor: UsePrimary(), background: UseBg() }}
                type={showPassword}
                className="border-2 rounded-xl w-full h-full "
              />
              {showPassword === "password" ? (
                <Eye
                  onClick={() => setShowPassword("text")}
                  className="absolute top-1/2 right-2 -translate-y-1/2 "
                />
              ) : (
                <EyeOff
                  onClick={() => setShowPassword("password")}
                  className="absolute top-1/2 right-2 -translate-y-1/2 "
                />
              )}
            </div>
          </div>
          <div className="flex items-center  gap-10 text-[clamp(1rem,3cqw,1.5rem)]">
            <div style={{ color: SecondaryTextExist() }}>Remember me</div>

            <input type="checkbox" className="rounded" />
          </div>
          <button
            onClick={() => setSlide({ ...slide, login: "100%", welcome: "0%" })}
            type="button"
            style={{
              background: SecondaryTextExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="p-2 rounded-lg md:rounded-2xl text-[clamp(1rem,3cqw,1.5rem)]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
