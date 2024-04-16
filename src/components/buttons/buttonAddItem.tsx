/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

export const ButtonAddItem = ({
  setEdit,
  color,
}: {
  setEdit: string;
  color: string;
}) => {
  const [showSig, setShowSig] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [showModal, setShowModal] = useState("hidden");

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      //if esc key was not pressed in combination with ctrl or alt or shift
      showModal === "flex" ? setShowModal("hidden") : "";
    }
  });

  return (
    <div className="font-light w-full text-[calc(5px+1vw)] flex flex-col gap-4 ">
      <button
        onClick={() => setShowModal("flex")}
        type="button"
        className={`m-2 ${setEdit} grow cursor-pointer flex min-w-max items-center gap-2 rounded-md border-2 border-dotted border-white bg-neutral-800 p-1 text-center text-white shadow-md transition hover:text-[${color}] hover:shadow-[${color}]`}
        data-hs-overlay="#hs-large-modal"
      >
        Add New Item
        <img src="./icons/add.svg" alt="add" width={30} height={30} />
      </button>
      {/* <-------------------------MODAL OF ADD--------------------> */}
      <div
        onClick={() => setShowModal("hidden")}
        className={`${showModal} w-[100vw] h-[100vh] bg-[#141926] opacity-80 fixed top-0 left-0 z-10`}
      ></div>
      <div
        className={`${showModal} flex-col gap-2 rounded-lg p-4 w-[70vw] z-50 fixed top-[50%] left-[50%] center-translate bg-[#202020]`}
      >
        <div className="flex justify-between items-center border-b-[1px] border-white h-[40px]">
          <h3 className=" text-gray-800 dark:text-white">Modal title</h3>
          <button
            onClick={() => setShowModal("hidden")}
            type="button"
            className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700"
            data-hs-overlay="#hs-large-modal"
          >
            <span className="sr-only">Close</span>
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-around items-center">
          <div className=" flex justify-evenly sm:justify-center items-center gap-1 w-full sm:w-auto">
            <div className="text-white sm:w-[calc(96px+4vw)] w-12 ">
              Item Text
            </div>
            <input
              className="  mt-2 w-[calc(10px+20vw)] h-[calc(10px+3vw)] rounded-md border border-white bg-[#202020] px-4 py-3 text-foreground"
              id="name"
              type="text"
            />
          </div>
          <div className=" flex sm:w-1/3 justify-between  w-full ">
            <p className="text-[#9d9d9d]"> description</p>
            <button className="h-7 min-w-[26px]  border max-sm:w-fit">
              <img
                src="./icons/delete.svg"
                alt="delete"
                width={15}
                height={15}
                className="m-1 size-4 "
              />
            </button>
          </div>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-around items-center">
          <div className=" flex justify-evenly sm:justify-center items-center gap-1 w-full sm:w-auto">
            <div className="text-white sm:w-[calc(96px+4vw)] w-12 ">
              Description
            </div>
            <input
              className="  mt-2 w-[calc(10px+20vw)] h-[calc(10px+3vw)] rounded-md border border-white bg-[#202020] px-4 py-3 text-foreground"
              id="name"
              type="text"
            />
          </div>
          <div className=" flex sm:w-1/3 justify-between   w-full ">
            <p className="text-[#9d9d9d]">
              {" "}
              Short description, shown on hover or in a tooltip
            </p>
            <button className="h-7 min-w-[26px]  border max-sm:w-fit">
              <img
                src="./icons/delete.svg"
                alt="delete"
                width={15}
                height={15}
                className="m-1 size-4 "
              />
            </button>
          </div>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-around items-center">
          <div className=" flex justify-evenly sm:justify-center items-center gap-1 w-full sm:w-auto">
            <div className="text-white sm:w-[calc(96px+4vw)] w-12 ">Icon</div>
            <input
              className="  mt-2 w-[calc(10px+20vw)] h-[calc(10px+3vw)] rounded-md border border-white bg-[#202020] px-4 py-3 text-foreground"
              id="name"
              type="text"
            />
          </div>
          <div className=" flex sm:w-1/3 justify-between   w-full ">
            <p className="text-[#9d9d9d]">
              An icon, either as a font-awesome, simple-icon or mdi identifier,
              emoji, favicon, generative or the URL/ path to a local or remote
              icon asset
            </p>
            <button className="h-7 min-w-[26px]  border max-sm:w-fit">
              <img
                src="./icons/delete.svg"
                alt="delete"
                width={15}
                height={15}
                className="m-1 size-4 "
              />
            </button>
          </div>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-around items-center">
          <div className=" flex justify-evenly sm:justify-center items-center gap-1 w-full sm:w-auto">
            <div className="text-white sm:w-[calc(96px+4vw)] w-12 ">
              Service URL
            </div>
            <input
              className="  mt-2 w-[calc(10px+20vw)] h-[calc(10px+3vw)] rounded-md border border-white bg-[#202020] px-4 py-3 text-foreground"
              id="name"
              type="text"
            />
          </div>
          <div className=" flex sm:w-1/3 justify-between   w-full ">
            <p className="text-[#9d9d9d]">
              The destination to navigate to when item is clicked, expressed as
              a valid URL, IP or hostname
            </p>
            <button className="h-7 min-w-[26px]  border max-sm:w-fit">
              <img
                src="./icons/delete.svg"
                alt="delete"
                width={15}
                height={15}
                className="m-1 size-4 "
              />
            </button>
          </div>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-around items-center">
          <div className=" flex justify-evenly sm:justify-center items-center gap-1 w-full sm:w-auto">
            <div className="text-white sm:w-[calc(96px+4vw)] w-12 ">
              Opening Method
            </div>
            <select
              defaultValue=""
              onChange={(e) => setSelectedValue(e.target.value)}
              className=" cursor-pointer  mt-2 w-[calc(10px+20vw)] h-[calc(10px+3vw)] rounded-md border border-white bg-[#202020] px-4  text-white"
              id="email"
            >
              <option value=""></option>
              <option value="newtab">newtab</option>
              <option value="sametab">sametab</option>
              <option value="parent">parent</option>
              <option value="top">top</option>
              <option value="modal">modal</option>
              <option value="workspace">workspace</option>
            </select>
          </div>
          <div className=" flex sm:w-1/3 justify-between   w-full ">
            <p className="text-[#9d9d9d]">
              Where / how the item is opened when it's clicked
            </p>
            <button className="h-7 min-w-[26px]  border max-sm:w-fit">
              <img
                src="./icons/delete.svg"
                alt="delete"
                width={15}
                height={15}
                className="m-1 size-4 "
              />
            </button>
          </div>
        </div>
        {/* ///////////////////////////-----------///////////////////// */}
        <div className="flex justify-center items-center gap-x-24 py-3 px-4 border-t mt-2 border-white">
          <button
            className="rounded-base flex items-center gap-2 border border-white px-4 py-[10px] text-white outline-none ring-offset-background transition-colors hover:bg-accent/90 hover:text-accent-foreground focus:ring focus:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setShowSig(false)}
          >
            <img src="./icons/disk.svg" alt="disk" width={20} height={20} />
            Save
          </button>
          <button
            type="button"
            className="rounded-base flex items-center gap-2 border border-white px-4 py-[10px] text-white outline-none ring-offset-background transition-colors hover:bg-accent/90 hover:text-accent-foreground focus:ring focus:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            data-hs-overlay="#hs-large-modal"
            onClick={() => setShowModal("hidden")}
          >
            <img src="./icons/cancel.svg" alt="cancel" width={20} height={20} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
