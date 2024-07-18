import { pageStore } from "@/stores/Screens/canvasStore";
import { Bg, BgDarker, Primary } from "@/theme/theming";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDrawningOption from "./modalDrawningOption";
import ModalParagraphOption from "./modalParagraphOption";
import ModalHeadingOption from "./modalHeadingOption";
import ModalHeading2Option from "./modalHeading2Option";
import ModalHeading3Option from "./modalHeadin3Option";
import ModalUnorderedList from "./modalUnorderedListOption";

export interface prop {
  classes: string;
  id: number | null;
  first: boolean;
}
const ModalBlackboard = ({ classes, id, first }: prop) => {
  const [bg, setBg] = useState("");
  const setInsertStore = pageStore((state) => state.setInsert);
  const setIdStore = pageStore((state) => state.setId);
  const getPageStore = pageStore((state) => state.page);
  const setPageStore = pageStore((state) => state.setPageElements);
  const setFocus = pageStore((state) => state.setFocus);
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setBg(Bg());
  //   }, 0);

  // }, []);
  const mouseOver = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = Bg();
  };
  const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = "transparent";
  };
  const handleCanvas = (e: string) => {
    const modals = document.querySelectorAll("[data-modal=modalBlackboard]");
    for (const i of modals) {
      if (!i.classList.contains("opacity-0")) {
        i.classList.toggle("pointer-events-none");
        i.classList.toggle("opacity-0");
        i.classList.toggle("-translate-x-[125%]");
      }
    }

    const pageCopy = [...getPageStore];
    const index = pageCopy.findIndex((e) => e.id === id);
    switch (e) {
      case "drawning":
        if (!first) {
          setIdStore(id);
          setInsertStore(true);
        }
        navigate("/canvas");
        break;
      case "paragraph":
        const newElement = {
          id: getPageStore.length,
          type: "paragraph",
        };
        if (first) {
          pageCopy.push(newElement);
        } else {
          pageCopy.splice(index + 1, 0, newElement);
        }

        setFocus(getPageStore.length);
        setPageStore(pageCopy);
        break;
      case "paragraph":
      case "heading":
      case "heading2":
      case "heading3":
      case "unorderedList": {
        const newElement = {
          id: getPageStore.length,
          type: e,
        };
        if (first) {
          pageCopy.push(newElement);
        } else {
          pageCopy.splice(index + 1, 0, newElement);
        }

        setFocus(getPageStore.length);
        setPageStore(pageCopy);
        break;
      }

      default:
        console.log("no option");

        break;
    }
  };

  return (
    <div
      style={{ background: BgDarker(), borderColor: Primary() }}
      id="modalBlackboard"
      data-modal="modalBlackboard"
      className={`${
        classes ? classes : "left-14"
      } flex-col gap-2 opacity-0 top-0 -translate-x-[125%] border-[1px] pointer-events-none rounded px-2 py-1 flex items-center text-base font-base w-52 z-50  absolute  duration-300 transition-all`}
    >
      <ModalDrawningOption
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalParagraphOption
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeadingOption
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading2Option
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading3Option
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalUnorderedList
        handleCanvas={handleCanvas}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
    </div>
  );
};
export default ModalBlackboard;
