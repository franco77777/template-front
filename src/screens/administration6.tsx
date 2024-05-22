import { UseCreateElement } from "@/hooks/elementsHooks";
import { CircleX, Folder, SquarePlus } from "lucide-react";
import { useState } from "react";

const Administration6 = () => {
  const [handleModal, setHandleModal] = useState(false);
  const [structureName, setStructureName] = useState("");
  const [elementForAppend, setElementForAppend] =
    useState<HTMLElement | null>();

  const CreateStructure = () => {
    const IconFolder = document.querySelector("[data-icon=folder]");
    const IconPlus = document.querySelector("[data-icon=plus]");
    if (!structureName) return;
    const UlElement = document.querySelector(
      "[data-administration=fileContainer]"
    );
    const ul = UseCreateElement("ul", "ml-8");
    const li = UseCreateElement("li", "flex flex-col");
    const div = UseCreateElement("div", "");
    const divIcon = UseCreateElement("div", "cursor-pointer hover:scale-105");
    div.append(structureName);
    const divContainer = UseCreateElement("div", "flex gap-4 flex");

    const IconFolderCloned = IconFolder?.cloneNode(true) as HTMLElement;
    IconFolderCloned?.classList.remove("hidden");

    const IconPlusCloned = IconPlus?.cloneNode(true) as HTMLElement;
    IconPlusCloned?.classList.remove("hidden");

    divIcon.addEventListener("click", AddFolder);
    divIcon.appendChild(IconPlusCloned);
    divContainer.appendChild(IconFolderCloned);
    divContainer.appendChild(div);
    divContainer.appendChild(divIcon);
    li.appendChild(divContainer);
    if (elementForAppend) {
      console.log("element", elementForAppend);

      ul.append(li);
      elementForAppend.append(ul);
    } else {
      UlElement?.append(li);
    }

    setStructureName("");
    setElementForAppend(null);
    setHandleModal(!handleModal);
  };

  const AddFolder = (e: MouseEvent) => {
    setHandleModal((oldVal) => !oldVal);

    const ParentElement = (e.target as HTMLElement).parentElement
      ?.parentElement;

    console.log("teseting", ParentElement);
    if (ParentElement) setElementForAppend(ParentElement);

    // const li = UseCreateElement("li", "");
    // const div = UseCreateElement("div", "");
    // div.append(structureName);
    // const divContainer = UseCreateElement("div", "flex gap-4");
    // const IconFolder = document.querySelector("[data-icon=folder]");
    // const IconPlus = document.querySelector("[data-icon=plus]");

    // const IconFolderCloned = IconFolder?.cloneNode(true) as HTMLElement;
    // IconFolderCloned?.classList.remove("hidden");

    // const IconPlusCloned = IconPlus?.cloneNode(true) as HTMLElement;
    // IconPlusCloned?.classList.remove("hidden");

    // IconPlusCloned.addEventListener("click", AddFolder);

    // divContainer.appendChild(IconFolderCloned);
    // divContainer.appendChild(div);
    // divContainer.appendChild(IconPlusCloned);
    // li.appendChild(divContainer);
    // ParentElement?.append(li);

    // if (handleModal) return;
  };
  return (
    <div className="min-h-screen  p-[4vw] bg-primary font-normal relative text-secondary">
      <SquarePlus
        data-icon="plus"
        size={24}
        strokeWidth={2}
        className=" pointer-events-none"
      />
      <Folder data-icon="folder" color="#00CCB4" className="hidden" />
      {handleModal && (
        <div className="modalAnimation ease-in-out overflow-hidden z-10 bg-tertiary  rounded absolute top-1/2 left-1/2  ">
          <div className="w-full h-full flex flex-col gap-4 relative  p-12 ">
            <div>structure name:</div>
            <input
              value={structureName}
              type="text"
              className="rounded bg-primary border-secondary"
              onChange={(e) => setStructureName(e.target.value)}
            />
            <button
              onClick={CreateStructure}
              className="bg-secondary  rounded text-black hover:scale-105 duration-150"
            >
              create
            </button>
            <CircleX
              size={32}
              className="absolute top-2 right-2 cursor-pointer hover:scale-105 duration-150"
              onClick={() => setHandleModal(!handleModal)}
            />
          </div>
        </div>
      )}

      <header className=" text-secondary w-full h-14 md:h-16 xl:h-20 bg-tertiary flex items-center  rounded px-[2vw] relative">
        <div className="font-semibold absolute top-[50%] left-[2vw] translate-y-[-50%] text-secondary text-[clamp(1.25rem,3cqw,3rem)]">
          Structures
        </div>
        <input
          type="text"
          className="rounded h-[60%] sm:mx-auto ml-auto bg-primary border-secondary"
        />
      </header>
      <section className="mt-8 text-base border-2 border-secondary rounded text-secondary p-2">
        <div
          onClick={() => setHandleModal(!handleModal)}
          className="flex gap-4"
        >
          <div className="text-xl">add structure</div>
          <SquarePlus
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105"
          />
        </div>
        <ul data-administration="fileContainer"></ul>
      </section>
    </div>
  );
};
export default Administration6;
