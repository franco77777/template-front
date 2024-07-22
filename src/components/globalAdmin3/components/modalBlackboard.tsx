import { pageStore } from "@/stores/Screens/canvasStore";
import { Bg, BgDarker, Primary } from "@/theme/theming";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalDrawningOption from "./drawningOption";
import ModalParagraphOption from "./paragraphOption";
import ModalHeadingOption from "./headingOption";
import ModalHeading2Option from "./heading2Option";
import ModalHeading3Option from "./heading3Option";
import ModalUnorderedList from "./unorderedListOption";
import ModalOrderedList from "./orderedListOption";
import ModalTaskList from "./taskListOption";
import ModalDivider from "./dividerOption";
import ModalHint from "./hintOption";
import ModalCode from "./codeOption";

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
  const setPageStore = pageStore((state) => state.setPage);
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
  const handleModalPageOptions = (e: string) => {
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
      case "heading":
      case "heading2":
      case "heading3":
      case "unorderedList":
      case "orderedList":
      case "taskList":
      case "divider":
      case "hint": {
        const newElement = {
          id: getPageStore.length,
          type: e,
        };
        if (first) {
          pageCopy.push(newElement);
        } else {
          pageCopy.splice(index + 1, 0, newElement);
        }

        if (e !== "divider") setFocus(getPageStore.length);
        setPageStore(pageCopy);
        break;
      }
      case "code": {
        const newElement = {
          id: getPageStore.length,
          type: e,
          language: "jsx",
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
      } scrollbar2 h-80 overflow-y-auto flex-col gap-2 opacity-0 top-0 -translate-x-[125%] 
      border-[1px] pointer-events-none rounded px-2 py-1 flex items-center text-base 
      font-base w-52 z-50  absolute  duration-300 transition-all`}
    >
      <ModalDrawningOption
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalParagraphOption
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeadingOption
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading2Option
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHeading3Option
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalUnorderedList
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalOrderedList
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalTaskList
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalDivider
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalHint
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
      <ModalCode
        handleModalPageOptions={handleModalPageOptions}
        mouseLeave={mouseLeave}
        mouseOver={mouseOver}
      />
    </div>
  );
};
export default ModalBlackboard;
