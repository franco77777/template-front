const StructureOptionsElementor = () => {
  const AddStructure = (value) => {
    const DragZone = document.getElementById("dragZone");

    switch (value) {
      case 1:
        {
          const div = document.createElement("div");
          div.classList.add("bg-blue-500");
          div.classList.add("w-full");
          div.classList.add("h-24");
          div.append("gola");
          div.append("gola2");
          DragZone.appendChild(div);
          closeModalStructureOptions();
        }

        break;

      default:
        break;
    }
  };

  const buttonSection = () => {
    const modalStructureOptions = document.querySelector(
      "#modalStructureOptions"
    );
    modalStructureOptions.classList.remove("w-0");
    modalStructureOptions.classList.remove("opacity-0");
    modalStructureOptions.classList.remove("pointer-events-none");
    modalStructureOptions.classList.add("w-full");
    modalStructureOptions.classList.add("pointer-events-auto");

    modalStructureOptions.classList.add("opacity-1");
  };

  const closeModalStructureOptions = () => {
    const modalStructureOptions = document.querySelector(
      "#modalStructureOptions"
    );
    modalStructureOptions.classList.remove("w-full");
    modalStructureOptions.classList.remove("pointer-events-auto");

    modalStructureOptions.classList.remove("opacity-1");
    modalStructureOptions.classList.add("w-0");
    modalStructureOptions.classList.add("pointer-events-none");

    modalStructureOptions.classList.add("opacity-0");
  };
  return (
    <div className="absolute-centered w-full ">
      <div className="flex justify-center items-center w-full">
        <button
          className="bg-blue-500 hover:bg-blue-600 p-4 rounded-lg text-white text-base font-normal"
          onClick={buttonSection}
        >
          Add Section
        </button>
      </div>
      {/* <----------------------------------------modal----------------------------------------> */}
      <div
        className=" w-0 duration-300 opacity-0 pointer-events-none bg-white border-dotted  border-2  border-gray-400  absolute-centered p-12"
        id="modalStructureOptions"
      >
        <button
          className="w-6 h-6  absolute top-2 right-2 "
          onClick={closeModalStructureOptions}
        >
          <img src="../public/icons/close.svg" alt="" className="w-6 h-6" />
        </button>

        <div className="font-normal text-base text-center mb-4">
          select the structure
        </div>

        <div className="grid grid-cols-6 grid-rows-2 w-full h-42 gap-4">
          <div
            className="bg-white grid grid-cols-1 w-full h-14 hover:scale-105 duration-300 cursor-pointer"
            onClick={() => AddStructure(1)}
          >
            <div className="bg-gray-400 hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-2 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-3 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-4 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500 "></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-3 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-2"></div>
          </div>
          <div className="bg-white grid grid-cols-3 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-2"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 "></div>
          </div>
          <div className="bg-white grid grid-cols-4 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-2"></div>
          </div>
          <div className="bg-white grid grid-cols-4 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-2"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 "></div>
          </div>
          <div className="bg-white grid grid-cols-4 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500 "></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-2"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 "></div>
          </div>
          <div className="bg-white grid grid-cols-5 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-5 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500 col-span-3"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
          <div className="bg-white grid grid-cols-6 gap-1 group hover:scale-105 duration-300 cursor-pointer">
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
            <div className="bg-gray-400 group-hover:bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StructureOptionsElementor;
