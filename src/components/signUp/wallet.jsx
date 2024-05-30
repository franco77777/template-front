import { Button, Label, TextInput } from "flowbite-react";
import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
  UseSecondary,
} from "@/theme/theming";

const Wallet = ({ slide, setSlide }) => {
  return (
    <div
      style={{ right: slide.wallet }}
      className=" w-full h-full flex  transition-all duration-300 absolute top-0"
    >
      <form
        style={{ background: UseBgDarker(), color: SecondaryTextExist() }}
        className="font-normal text-[clamp(1rem,3cqw,1.5rem)] rounded-xl p-4 flex max-w-md flex-col gap-4 absolute  w-[80%]  top-[50%] left-[50%] center-translate"
      >
        <div className="text-center">Wallet</div>
        <div>
          <div>Red</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>
        <div>
          <div>wallet</div>
          <input
            type="text"
            style={{ background: UseBgDarker(), borderColor: UsePrimary() }}
            className="border-2 rounded-xl w-full"
          />
        </div>

        <button type="button" className="opacity-0  p-2 pointer-events-none ">
          Continuar
        </button>

        <button
          style={{
            background: SecondaryTextExist(),
            color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
          }}
          onClick={() =>
            setSlide({ ...slide, wallet: "100%", formContact: "0%" })
          }
          type="button"
          className="absolute right-2 bottom-2 rounded-lg p-2 text-base"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Wallet;
