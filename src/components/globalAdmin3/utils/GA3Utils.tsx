import { PageElement, pageStore } from "@/stores/Screens/canvasStore";
import { Bg, BgDarker, Primary } from "@/theme/theming";
import { createRef } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import ModalCode from "../components/modalCode";
import { codeListState } from "./globalAdmin3States";

export const setTextElement = (
  event: React.FocusEvent<HTMLDivElement, Element>,
  id: number
) => {
  const getPageStore = pageStore.getState().page;
  const setPageStore = pageStore.getState().setPage;
  const setFocusStore = pageStore.getState().setFocus;
  const Target = event.target as HTMLElement;
  const value = Target.innerHTML;
  const copyPage = [...getPageStore];
  const current = copyPage.find((e) => e.id === id);

  if (current) {
    current.text = value;
    console.log("valueeeeeeeeee222222", value);

    setPageStore(copyPage);
  }

  setFocusStore(null);
};

export const handleInputList = (
  e: React.FormEvent<HTMLDivElement>,
  element: PageElement
) => {
  const Target = e.target as HTMLElement;
  const divNumber = Target.parentElement?.children[0] as HTMLElement;
  const childrens = Target.children.length;

  //const childrens = (Text.match(/\n/g) || []).length;
  console.log("childrens", childrens);
  console.log("divNumber", divNumber);

  if (element.type === "unorderedList") {
    divNumber.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
    for (let i = 0; i < childrens; i++) {
      divNumber.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
    }
  }
  if (element.type === "orderedList") {
    divNumber.innerHTML = "<div>0</div>";
    for (let i = 0; i < childrens; i++) {
      divNumber.innerHTML += `<div>${i + 1}</div>`;
    }
  }
  if (element.type === "taskList") {
    divNumber.innerHTML = "";

    for (let b = 0; b < childrens + 1; b++) {
      const input = createInputElement();
      if (element.checks?.includes(b)) {
        input.checked = true;
        input.style.backgroundColor = Primary();
      }
      divNumber.appendChild(input);
    }
  }
};
export const changeInputTaskList = (e: Event) => {
  const getPageStore = pageStore.getState().page;
  const setPageStore = pageStore.getState().setPage;
  const Target = e.target as HTMLInputElement;
  const inputContainer = Target.parentElement as HTMLElement;
  const Brother = Target.parentElement?.parentElement
    ?.children[1] as HTMLElement;
  const data = Brother.getAttribute("data-id") as String;
  const id = Number.parseInt(data.split("page-")[1]);

  const valuesChecked = [];
  for (let i = 0; i < inputContainer.children.length; i++) {
    const children = inputContainer.children[i] as HTMLInputElement;
    if (children.checked) {
      valuesChecked.push(i);
    }
  }
  console.log("valueschecjed", valuesChecked);

  const pageCopy = [...getPageStore];
  const current = pageCopy.find((e) => e.id === id);
  if (current) current.checks = valuesChecked;
  setPageStore(pageCopy);

  Target.style.backgroundColor = Target.checked ? Primary() : BgDarker();
};
export const createInputElement = () => {
  const input = document.createElement("input");
  input.addEventListener("change", changeInputTaskList);
  input.type = "checkbox";
  input.classList.add("border-[1px]");
  input.classList.add("rounded");
  input.setAttribute("data-input", "");
  input.classList.add("cursor-pointer");
  input.style.backgroundColor = BgDarker();
  input.style.borderColor = Primary();
  return input;
};
export const editCanvas = (id: number, navigate: NavigateFunction) => {
  const setPageIdStore = pageStore.getState().setId;
  console.log("id", id);

  setPageIdStore(id);
  navigate("/canvas");
};
export const inputCodeFalse = (
  event: React.FormEvent<HTMLDivElement>,
  id: number
) => {
  const getPageStore = pageStore.getState().page;
  const setPageStore = pageStore.getState().setPage;

  const Target = event.target as HTMLElement;

  const value = Target.innerText;
  const copyPage = [...getPageStore];
  const current = copyPage.find((e) => e.id === id);

  if (current) {
    current.text = value;
    console.log("current", current);

    setPageStore(copyPage);
  }
};
export const blurCodeFalse = () => {
  const setFocusStore = pageStore.getState().setFocus;
  setFocusStore(null);
};
export const focusCodeFalse = (id: number) => {
  const setFocusStore = pageStore.getState().setFocus;
  //setFocusStore(id);
};
export const handleModalCode = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  id: number
) => {
  const searcher = document.querySelector(
    `[data-input=searcher-${id}]`
  ) as HTMLInputElement;
  const Target = e.target as HTMLElement;
  const modal = Target.parentElement?.children[0] as HTMLElement;
  const divFixed = Target.parentElement?.lastChild as HTMLElement;

  modal.classList.remove("pointer-events-none");
  modal.classList.remove("opacity-0");
  modal.classList.remove("-translate-y-full");
  divFixed.classList.remove("hidden");
  searcher.focus();
  console.log("searcher", searcher);
};
export const handleModalCodeFromDivFixed = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  setSearcher: React.Dispatch<React.SetStateAction<string>>
) => {
  const Target = e.target as HTMLElement;
  const modal = Target.parentElement?.children[0] as HTMLElement;
  modal.classList.toggle("pointer-events-none");
  modal.classList.toggle("opacity-0");
  modal.classList.toggle("-translate-y-full");
  Target.classList.toggle("hidden");
  setSearcher("");
};
export const pasteEditable = (e: React.ClipboardEvent<HTMLDivElement>) => {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, text);
};
export const loadBrotherEditable = (
  event: React.SyntheticEvent<HTMLDivElement, Event>,
  element: PageElement
) => {
  const Target = event.target as HTMLElement;

  const divNumber = Target.parentElement as HTMLElement;

  console.log("loading");
  if (Target && divNumber) {
    if (element.type === "unorderedList") {
      divNumber.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" preserveAspectRatio="xMidYMid meet" class="text-base" width="12" height="12" style="vertical-align: middle;"><path fill="currentColor" fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"></path></svg>`;
    }
    if (element.type === "orderedList") {
      divNumber.innerHTML = "<div>0</div>";
    }
    if (element.type === "taskList") {
      const input = createInputElement();

      divNumber.appendChild(input);
    }
  }
};
export const GenerateElements = (
  e: PageElement,
  navigate: NavigateFunction,
  searcher: string,
  setSearcher: React.Dispatch<React.SetStateAction<string>>
) => {
  const clickCopyCode = () => {
    if (e.text) navigator.clipboard.writeText(e.text);
    console.log("copinggg");
  };
  const language = codeListState.find((b) => b.code === e.language);
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
          contentEditable="plaintext-only"
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
          contentEditable="plaintext-only"
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
          contentEditable="plaintext-only"
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
          contentEditable="plaintext-only"
        ></h3>
      );
    case "unorderedList":
    case "orderedList":
    case "taskList":
      return (
        <div className="flex gap-2 w-[80%] mx-auto break-all">
          <div className="text-base font-normal h-auto flex flex-col justify-around ">
            <img
              className="hidden pointer-events-none"
              src="https://www.w3schools.com/tags/w3html.gif"
              alt="test"
              onLoad={(event) => loadBrotherEditable(event, e)}
            />
          </div>
          <div
            data-id={`page-${e.id}`}
            style={{
              backgroundColor: Bg(),
            }}
            //onInput={(event) => handleInputList(event, e)}

            onPaste={(event) => pasteEditable(event)}
            onBlur={(event) => setTextElement(event, e.id)}
            onInput={(event) => handleInputList(event, e)}
            className="font-normal  outline-none px-2 text-base  min-h-6 rounded-lg "
            contentEditable="true"
          ></div>
        </div>
      );
    case "divider":
      return (
        <div
          style={{ background: Primary() }}
          className="my-4 mx-auto w-[80%] h-[1px] rounded "
        />
      );
    case "hint":
      return (
        <div
          style={{
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          className="flex gap-2 w-[80%] mx-auto border-l-4 rounded-md items-center break-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
            preserveAspectRatio="xMidYMid meet"
            className="ml-2 w-5 h-5 pointer-events-none"
          >
            <g fill="currentColor" clip-path="url(#InfoCircle_svg__a)">
              <path
                fillRule="evenodd"
                d="M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6ZM.4 8a7.6 7.6 0 1 1 15.2 0A7.6 7.6 0 0 1 .4 8Z"
                clip-rule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M5.4 7a.6.6 0 0 1 .6-.6h2a.6.6 0 0 1 .6.6v3.9H10a.6.6 0 0 1 0 1.2H6a.6.6 0 1 1 0-1.2h1.4V7.6H6a.6.6 0 0 1-.6-.6Z"
                clip-rule="evenodd"
              ></path>
              <path d="M8 3.6a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z"></path>
            </g>
            <defs>
              <clipPath id="InfoCircle_svg__a">
                <path fill="#fff" d="M0 0h16v16H0z"></path>
              </clipPath>
            </defs>
          </svg>
          <div
            data-id={`page-${e.id}`}
            onInput={(event) => handleInputList(event, e)}
            onBlur={(event) => setTextElement(event, e.id)}
            className="font-normal  outline-none px-2 text-base  min-h-6 rounded-lg "
            contentEditable="plaintext-only"
          ></div>
        </div>
      );
    case "code":
      return (
        <div
          style={{
            backgroundColor: Bg(),
            borderColor: Primary(),
          }}
          className="group px-3 pb-2 pt-6 min-h-14 flex flex-col gap-2 w-[80%] mx-auto  rounded-md relative "
        >
          <ModalCode
            element={e}
            searcher={searcher}
            setSearcher={setSearcher}
          />
          <div
            onClick={(event) => handleModalCode(event, e.id)}
            className="px-1 py-[2px] border-[1px] border-gray-500 rounded hidden group-hover:flex absolute top-1 right-12 z-30 hover:scale-105 duration-150 text-sm font-normal ml-auto  gap-2 items-center cursor-pointer"
          >
            <div className="text-xs pointer-events-none">{language?.name}</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 pointer-events-none"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

          <pre
            className="pt-2 scrollbar z-0 overflow-x-auto"
            style={{
              backgroundImage: "none",
              padding: "0px",
              margin: "0px",
              fontSize: "16px",
            }}
          >
            <code className={`language-${e.language} font-thin text-sm `}>
              {e.text}
            </code>
          </pre>

          <pre
            className="pt-6 min-h-14  px-3 pb-2 
          scrollbar w-full text-base top-0 text-transparent  left-0 absolute z-20"
          >
            <div
              style={{ caretColor: Primary() }}
              data-id={`page-${e.id}`}
              onBlur={() => blurCodeFalse()}
              onFocus={() => focusCodeFalse(e.id)}
              onInput={(event) => inputCodeFalse(event, e.id)}
              contentEditable="plaintext-only"
              spellCheck="false"
              className=" outline-none shadow-none w-full overflow-x-auto scrollbar"
            ></div>
          </pre>
          <div
            onClick={clickCopyCode}
            className="px-1 py-1 border-[1px] border-gray-500 hidden 
          group-hover:block absolute rounded top-1 right-5 z-30 hover:scale-105 
          duration-150 text-sm font-normal ml-auto  gap-2 items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16"
              preserveAspectRatio="xMidYMid meet"
              className="w-3 h-3 pointer-events-none"
            >
              <g clipPath="url(#Copy_svg__a)">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.5.4A2.6 2.6 0 0 0 3.9 3v.9H3A2.6 2.6 0 0 0 .4 6.5V13A2.6 2.6 0 0 0 3 15.6h6.5a2.6 2.6 0 0 0 2.6-2.6v-.9h.9a2.6 2.6 0 0 0 2.6-2.6V3A2.6 2.6 0 0 0 13 .4H6.5Zm5.6 10.5h.9a1.4 1.4 0 0 0 1.4-1.4V3A1.4 1.4 0 0 0 13 1.6H6.5A1.4 1.4 0 0 0 5.1 3v.9h4.4a2.6 2.6 0 0 1 2.6 2.6v4.4ZM9.5 5.1a1.4 1.4 0 0 1 1.4 1.4V13a1.4 1.4 0 0 1-1.4 1.4H3A1.4 1.4 0 0 1 1.6 13V6.5A1.4 1.4 0 0 1 3 5.1h6.5Z"
                  clipRule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="Copy_svg__a">
                  <path fill="#fff" d="M0 0h16v16H0z"></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            onClick={(e) => handleModalCodeFromDivFixed(e, setSearcher)}
            className="top-0 left-0 hidden fixed h-screen w-screen z-40"
          ></div>
        </div>
      );

    default:
      break;
  }
};
