import { storeAdministration6 } from "@/stores/administration/administration6Store";
import {
  SecondaryExist,
  SecondaryTextExist,
  UseBg,
  UseBgDarker,
  UsePrimary,
} from "@/theme/theming";
import { CircleX, Folder, SquarePlus, UserRound } from "lucide-react";
import { useState } from "react";

const Administration7 = () => {
  const URL = storeAdministration6((state) => state.url);
  const [handleModal, setHandleModal] = useState(false);
  const Folders = URL.split("/");
  return (
    <div
      style={{ background: UseBg(), color: SecondaryTextExist() }}
      className="min-h-screen p-[4vw]  font-normal relative"
    >
      <div className="text-[clamp(1rem,3cqw,2rem)]">Structure</div>
      <div className="text-xl">{URL}</div>
      <div className="flex flex-wrap  justify-around  gap-2 md:gap-8  mt-8 items-center">
        {Folders &&
          Folders.map((e, i) => (
            <button
              key={i}
              style={{ borderColor: UsePrimary() }}
              className=" border-2  rounded-lg flex  gap-1 md:gap-4 text-base items-center px-4 py-2"
            >
              <Folder data-icon="folder" className="" />
              <div>{e}</div>
            </button>
          ))}
        <button
          style={{ borderColor: UsePrimary() }}
          className=" border-2  rounded-lg  flex  gap-1 md:gap-4 text-base items-center px-4 py-2"
        >
          <Folder data-icon="folder" className="" />
          <div>teasdfasdfasdfasdsdf</div>
        </button>
        <button
          style={{ borderColor: UsePrimary() }}
          className=" border-2  rounded-lg  flex  gap-1 md:gap-4 text-base items-center px-4 py-2"
        >
          <Folder data-icon="folder" className="" />
          <div>teasdfasdfasdfasdsdf</div>
        </button>
        <button
          style={{ borderColor: UsePrimary() }}
          className=" border-2  rounded-lg  flex  gap-1 md:gap-4 text-base items-center px-4 py-2"
        >
          <Folder data-icon="folder" className="" />
          <div>teasdfasdfasdfasdsdf</div>
        </button>
      </div>
      <div className="mt-4 md:mt-8 w-full text-center text-base md:text-2xl">
        assign / revoke assignment
      </div>
      <section
        style={{ background: SecondaryExist() }}
        className="text-xl  rounded-2xl mt-2 md:mt-8 p-1 overflow-hidden"
      >
        <div style={{ background: UseBgDarker() }} className="rounded-xl">
          <div
            style={{
              background: SecondaryExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="flex gap-4 items-center  px-2"
          >
            <div>Branch</div>
            <SquarePlus
              onClick={() => setHandleModal(!handleModal)}
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
          </div>
          <div className="px-2 py-4 flex gap-8 rounded-xl ">
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg  w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg   w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ background: SecondaryExist() }}
        className="text-xl  rounded-2xl mt-2 md:mt-8 p-1 overflow-hidden"
      >
        <div style={{ background: UseBgDarker() }} className="rounded-xl">
          <div
            style={{
              background: SecondaryExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="flex gap-4 items-center  px-2"
          >
            <div>Department</div>
            <SquarePlus
              onClick={() => setHandleModal(!handleModal)}
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
          </div>
          <div className="px-2 py-4 flex gap-8 rounded-xl ">
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg  w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg   w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ background: SecondaryExist() }}
        className="text-xl  rounded-2xl mt-2 md:mt-8 p-1 overflow-hidden"
      >
        <div style={{ background: UseBgDarker() }} className="rounded-xl">
          <div
            style={{
              background: SecondaryExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="flex gap-4 items-center  px-2"
          >
            <div>Users</div>
            <SquarePlus
              onClick={() => setHandleModal(!handleModal)}
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
          </div>
          <div className="px-2 py-4 flex gap-8 rounded-xl ">
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg  w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg   w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ background: SecondaryExist() }}
        className="text-xl  rounded-2xl mt-2 md:mt-8 p-1 overflow-hidden"
      >
        <div style={{ background: UseBgDarker() }} className="rounded-xl">
          <div
            style={{
              background: SecondaryExist(),
              color: UsePrimary() === "#000000" ? "#ffffff" : "#000000",
            }}
            className="flex gap-4 items-center  px-2"
          >
            <div>Organization</div>
            <SquarePlus
              onClick={() => setHandleModal(!handleModal)}
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
          </div>
          <div className="px-2 py-4 flex gap-8 rounded-xl ">
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg  w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
            <div
              style={{ borderColor: UsePrimary(), color: SecondaryTextExist() }}
              className="flex gap-4 border-2 rounded-lg   w-fit px-4 py-1 "
            >
              <UserRound
                size={24}
                strokeWidth={2}
                className="cursor-pointer hover:scale-105 duration-150 "
              />
              <div>branch 1</div>
            </div>
          </div>
        </div>
      </section>
      {handleModal && (
        <div className="p-4 text-xl w-[300px] h-[200px] bg-tertiary rounded modalAnimation absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div>
            <CircleX
              size={32}
              className="absolute top-2 right-2 cursor-pointer hover:scale-105 duration-150"
              onClick={() => setHandleModal(!handleModal)}
            />
            <div className="text-center">Branch</div>
            <ul className="flex flex-col justify-center items-center mt-4 gap-2">
              <li className="flex gap-2 w-fit">
                <div>branch 1 </div>
                <SquarePlus
                  size={24}
                  strokeWidth={2}
                  className="cursor-pointer hover:scale-105 duration-150 "
                />
              </li>
              <li className="flex gap-2 w-fit">
                <div>branch 2 </div>
                <SquarePlus
                  size={24}
                  strokeWidth={2}
                  className="cursor-pointer hover:scale-105 duration-150 "
                />
              </li>
              <li className="flex gap-2 w-fit">
                <div>branch 3 </div>
                <SquarePlus
                  size={24}
                  strokeWidth={2}
                  className="cursor-pointer hover:scale-105 duration-150 "
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Administration7;
