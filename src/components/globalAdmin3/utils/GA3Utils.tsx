import { PageElement, pageStore } from "@/stores/Screens/canvasStore";
import { Bg, Primary } from "@/theme/theming";
import { createRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
export const setTextElement = (
  event: React.FocusEvent<HTMLDivElement, Element>,
  id: number
) => {
  const getPageStore = pageStore.getState().page;
  const setPageStore = pageStore.getState().setPageElements;
  const setFocusStore = pageStore.getState().setFocus;
  const Target = event.target as HTMLElement;
  const value = Target.innerHTML;
  const copyPage = [...getPageStore];
  const current = copyPage.find((e) => e.id === id);

  if (current) {
    current.text = value;
    setPageStore(copyPage);
  }

  setFocusStore(null);
};

export const handleInputList = (
  e: React.FormEvent<HTMLDivElement>,
  type: string
) => {
  const Target = e.target as HTMLElement;
  const divNumber = Target.parentElement?.children[0];

  const childrens = Target.children.length;

  if (divNumber && type === "unorderedList") {
    divNumber.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
    for (let i = 0; i < childrens; i++) {
      divNumber.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fill-rule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
    }
  }
  if (divNumber && type === "orderedList") {
    divNumber.innerHTML = "<div>0</div>";
    for (let i = 0; i < childrens; i++) {
      divNumber.innerHTML += `<div>${i + 1}</div>`;
    }
  }
};
export const editCanvas = (id: number, navigate: NavigateFunction) => {
  const setPageIdStore = pageStore.getState().setId;
  console.log("id", id);

  setPageIdStore(id);
  navigate("/canvas");
};
export const GenerateElements = (
  e: PageElement,
  navigate: NavigateFunction
) => {
  switch (e.type) {
    case "drawning":
      return (
        <img
          onClick={() => editCanvas(e.id, navigate)}
          src={e.url}
          key={e.id}
          style={{
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          className="w-[80%] h-[40%] mx-auto rounded-lg  hover:scale-[1.01] duration-150 cursor-pointer"
        ></img>
      );
    case "paragraph":
      return (
        <div
          data-id={`page-${e.id}`}
          style={{
            backgroundColor: Bg(),
          }}
          onBlur={(event) => setTextElement(event, e.id)}
          className="font-normal outline-none px-2 text-base w-[80%] mx-auto min-h-6 rounded-lg"
          contentEditable="true"
        ></div>
      );
    case "heading":
      return (
        <h1
          data-id={`page-${e.id}`}
          style={{
            backgroundColor: Bg(),
          }}
          onBlur={(event) => setTextElement(event, e.id)}
          className="text-4xl font-bold  outline-none px-2 w-[80%] mx-auto min-h-6 rounded-lg "
          contentEditable="true"
        ></h1>
      );
    case "heading2":
      return (
        <h2
          data-id={`page-${e.id}`}
          style={{
            backgroundColor: Bg(),
          }}
          onBlur={(event) => setTextElement(event, e.id)}
          className="font-semibold outline-none px-2 text-3xl w-[80%] mx-auto min-h-6 rounded-lg"
          contentEditable="true"
        ></h2>
      );
    case "heading3":
      return (
        <h3
          data-id={`page-${e.id}`}
          style={{
            backgroundColor: Bg(),
          }}
          onBlur={(event) => setTextElement(event, e.id)}
          className="font-medium outline-none px-2 text-2xl w-[80%] mx-auto min-h-6 rounded-lg "
          contentEditable="true"
        ></h3>
      );
    case "unorderedList":
    case "orderedList":
      return (
        <div className="flex gap-2 w-[80%] mx-auto ">
          <div className="text-base font-normal h-auto flex flex-col justify-around " />
          <div
            data-id={`page-${e.id}`}
            style={{
              backgroundColor: Bg(),
            }}
            onInput={(event) => handleInputList(event, e.type)}
            onBlur={(event) => setTextElement(event, e.id)}
            className="font-normal  outline-none px-2 text-base  min-h-6 rounded-lg "
            contentEditable="true"
          ></div>
        </div>
      );
    default:
      break;
  }
};
