import { PageElement, pageStore } from "@/stores/Screens/canvasStore";
import { Bg, BgDarker, Primary } from "@/theme/theming";
import { codeListState } from "../utils/globalAdmin3States";
import {
  MutableRefObject,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { codePage } from "../types/globalAdmin3Types";
export interface prop {
  element: PageElement;
  searcher: string;
  setSearcher: React.Dispatch<React.SetStateAction<string>>;
}
const ModalCode = ({ element, searcher, setSearcher }: prop) => {
  const getPageStore = pageStore((state) => state.page);
  const setPageStore = pageStore((state) => state.setPage);
  const [codesSorted, setCodesSorted] = useState<codePage[]>();

  useEffect(() => {
    const sorted = codeListState.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setCodesSorted(sorted);
  }, []);

  const mouseOver = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = Bg();
  };
  const mouseLeave = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const Target = e.target as HTMLElement;
    Target.style.backgroundColor = "transparent";
  };
  const clickHandleInput = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    codeType: string
  ) => {
    const Target = e.target as HTMLElement;
    const modalContainer = Target.parentElement as HTMLElement;
    const divFixed = modalContainer.parentElement?.lastChild as HTMLElement;
    divFixed.classList.add("hidden");
    modalContainer.classList.add("opacity-0");
    modalContainer.classList.add("-translate-y-full");
    modalContainer.classList.add("pointer-events-none");
    const copyPage = [...getPageStore];
    const current = copyPage.find((e) => e.id === element.id);
    if (current) {
      current.language = codeType;
      setPageStore(copyPage);
    }
    setSearcher("");
  };

  return (
    <ul
      style={{ background: BgDarker(), borderColor: Primary() }}
      data-modalCode={`modal-${element.id}`}
      className={`absolute top-6 right-0 flex-col gap-2  
        border-[1px]  rounded px-2 py-1 flex items-center 
        text-base font-base w-52 z-50  duration-300 scrollbar2 test
        -translate-y-full opacity-0 h-80 overflow-y-auto  pointer-events-none
        `}
    >
      <li className="w-full rounded ">
        <input
          data-input={`searcher-${element.id}`}
          value={searcher}
          onChange={(e) => setSearcher(e.target.value)}
          style={{ background: Bg() }}
          type="text"
          className="w-full h-7 rounded inputFocus text-center"
          spellCheck="false"
        />
      </li>
      {codesSorted &&
        codesSorted
          .filter((item) => {
            return searcher.toLowerCase() === ""
              ? item
              : item.name.trim().toLowerCase().includes(searcher.trim());
          })
          .map((e, i) => (
            <li
              key={i}
              onMouseOver={(event) => mouseOver(event)}
              onMouseLeave={(event) => mouseLeave(event)}
              onClick={(event) => clickHandleInput(event, e.code)}
              className="hover:scale-105 bg-transparent justify-between flex gap-2 items-center w-full rounded duration-150 cursor-pointer"
            >
              <div className=" bg-transparent pointer-events-none overflowCode w-full ">
                {e.name}
              </div>
              <input
                style={{
                  borderColor: Primary(),
                  backgroundColor:
                    element.language === e.code ? Primary() : "transparent",
                }}
                type="checkbox"
                onChange={() => console.log("testtttttttttttt")}
                checked={element.language === e.code ? true : false}
                className="w-5 h-5 rounded border-[1px] pointer-events-none bg-transparent"
              />
            </li>
          ))}
    </ul>
  );
};
export default ModalCode;
