import { canvasStore } from "@/stores/Screens/canvasStore";
import { Bg, BgDarker, Primary, SecondaryGradientExist } from "@/theme/theming";

import { CircleX } from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
export interface prop {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalCanvases = ({ setModal }: prop) => {
  const [nameCanvas, setNameCanvas] = useState("");
  const canvases = canvasStore((state) => state.canvases);
  const setNameCanvasStore = canvasStore((state) => state.setName);
  const navigate = useNavigate();
  const submitCanvasName = () => {
    if (!nameCanvas) {
      alert("write a name");
      return;
    }
    const exists = canvases.some((e) => e.canvasName === nameCanvas);
    if (exists) {
      alert("name already exists");
      return;
    }
    setNameCanvasStore(nameCanvas);
    navigate("/canvas");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitCanvasName();
    }
  };
  return (
    <div
      style={{ backgroundColor: BgDarker(), borderColor: Primary() }}
      className="z-50 modalAnimation text-lg font-medium 
        flex-col flex gap-2 w-[min(100%,300px)] rounded-lg p-2 absolute top-1/2 
        left-1/2 -translate-x-1/2 -translate-y-1/2 border-[1px]"
    >
      <CircleX
        onClick={() => setModal(false)}
        className="absolute top-2 right-2 hover:scale-125 cursor-pointer duration-150"
      />
      <div className="flex flex-col mt-2">
        <div>Canvas Name</div>
        <input
          autoFocus
          onKeyDown={(e) => handleKeyDown(e)}
          onChange={(e) => setNameCanvas(e.target.value)}
          value={nameCanvas}
          style={{ backgroundColor: Bg() }}
          type="text"
          className="h-7 rounded-lg border-0 outline-0"
        />
      </div>

      <button
        style={{
          background: SecondaryGradientExist(),
          color: Primary() === "#000000" ? "#ffffff" : "#000000",
        }}
        onClick={() => submitCanvasName()}
        className="rounded-lg font-semibold hover:scale-105 duration-150"
      >
        add canvas
      </button>
    </div>
  );
};
export default ModalCanvases;
