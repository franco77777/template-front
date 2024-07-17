import { Bg, BgDarker, Primary, SecondaryGradientExist } from "@/theme/theming";
import ModalBlackboard from "./modalBlackboard";
import { pageStore } from "@/stores/Screens/canvasStore";
import { useEffect } from "react";

const PageSection = () => {
  const page = pageStore((state) => state.page);
  const handleInputStart = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enteringggggggggg");
    }
  };
  const handleModalOptions = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const Target = e.target as HTMLElement;
    const modals = document.querySelectorAll("[data-modal=modalBlackboard]");

    const modalBlackboard = Target.parentElement?.querySelector(
      "[data-modal=modalBlackboard]"
    ) as HTMLElement;
    if (!modalBlackboard.classList.contains("opacity-0")) {
      modalBlackboard.classList.toggle("opacity-0");
      modalBlackboard.classList.toggle("-translate-x-[125%]");
      return;
    }
    for (const i of modals) {
      if (!i.classList.contains("opacity-0")) {
        i.classList.toggle("opacity-0");
        i.classList.toggle("-translate-x-[125%]");
      }
    }

    modalBlackboard.classList.toggle("-translate-x-[125%]");
    modalBlackboard.classList.toggle("opacity-0");
    modalBlackboard.classList.toggle("pointer-events-none");

    //parent.appendChild(modalBlackboard);
    console.log("modalBlackboard", modalBlackboard);
  };
  useEffect(() => {
    setTimeout(() => {
      const page = document.getElementById("page") as HTMLElement;
      page.style.scrollbarColor = "red";
    }, 100);
  }, []);
  useEffect(() => {
    const pagesElements = document.querySelectorAll("[data-drag=pageElement]") as NodeListOf<HTMLElement>
    const dragStart = ()=>{
    
    }
    for (const i of pagesElements) {
      i.addEventListener("dragstart",dragStart)
    }
  }, []);

  return (
    <div className="relative  w-full rounded-2xl  h-full grid place-items-center overflow-hidden">
      <div
        id="page"
        style={{
          backgroundColor: BgDarker(),
        }}
        className="flex flex-col gap-2  rounded-2xl w-full h-full overflow-y-auto "
      >
        <div className="m-2 z-20 h-full ">
          {!page.length && (
            <div className="flex gap-2 items-center relative w-[80%] mx-auto">
              <ModalBlackboard classes="left-0" id={null} first={true} />
              <div
                onClick={(e) => handleModalOptions(e)}
                className=" cursor-pointer hover:scale-125 duration-150 absolute top-1/2 -translate-y-1/2 -left-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  preserveAspectRatio="xMidYMid meet"
                  className="w-5 h-5  pointer-events-none"
                >
                  <path
                    className="pointer-events-none"
                    fill="currentColor"
                    d="M8.6 3a.6.6 0 0 0-1.2 0v4.4H3a.6.6 0 0 0 0 1.2h4.4V13a.6.6 0 1 0 1.2 0V8.6H13a.6.6 0 1 0 0-1.2H8.6V3Z"
                  ></path>
                </svg>
              </div>
              Page
            </div>
          )}
          <section className="flex flex-col gap-2">
            {page.map((e) => (
              <div data-drag="pageElement" draggable="true" className="relative gap-4   rounded-xl w-full group">
                <ModalBlackboard classes="" id={e.id} first={false} />
                <div
                  onClick={(e) => handleModalOptions(e)}
                  className="hidden group-hover:block cursor-pointer hover:scale-125 duration-150 absolute top-0 left-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    preserveAspectRatio="xMidYMid meet"
                    className="w-5 h-5  pointer-events-none"
                  >
                    <path
                      className="pointer-events-none"
                      fill="currentColor"
                      d="M8.6 3a.6.6 0 0 0-1.2 0v4.4H3a.6.6 0 0 0 0 1.2h4.4V13a.6.6 0 1 0 1.2 0V8.6H13a.6.6 0 1 0 0-1.2H8.6V3Z"
                    ></path>
                  </svg>
                </div>
                <img
                  src={e.url}
                  key={e.id}
                  style={{
                    backgroundColor: Bg(),
                    borderColor: Primary(),
                  }}
                  className="w-[80%] h-[40%] mx-auto rounded-xl  hover:scale-[1.01] duration-150 cursor-pointer"
                ></img>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};
export default PageSection;
