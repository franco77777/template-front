import { useState } from "react";
import Login from "@/components/signUp/login";
import Welcome from "@/components/signUp/welcome";
import FormData from "@/components/signUp/formData";
import Wallet from "@/components/signUp/wallet";
import FormContact from "@/components/signUp/formContact";
import Files from "@/components/signUp/files";
import { UseBg, SecondaryTextExist } from "@/theme/theming";

const Excalidraw = () => {
  const [slide, setSlide] = useState({
    login: "0%",
    welcome: "-100%",
    formData: "-100%",
    wallet: "-100%",
    formContact: "-100%",
    files: "-101%",
  });
  return (
    <div
      style={{ background: UseBg() }}
      className=" min-w-[100vw] min-h-[100vh]  overflow-hidden"
    >
      <div className="p-[4vw] w-full h-full absolute top-[50%] left-[50%] center-translate rounded-2xl overflow-hidden">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Login slide={slide} setSlide={setSlide} />
          <Welcome slide={slide} setSlide={setSlide} />
          <FormData slide={slide} setSlide={setSlide} />
          <Wallet slide={slide} setSlide={setSlide} />
          <FormContact slide={slide} setSlide={setSlide} />
          <Files slide={slide} setSlide={setSlide} />
        </div>
      </div>
    </div>
  );
};

export default Excalidraw;
