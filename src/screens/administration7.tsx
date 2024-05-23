import { storeAdministration6 } from "@/stores/administration/administration6Store";
import { CircleX, Folder, SquarePlus, UserRound } from "lucide-react";
import { useState } from "react";

const Administration7 = () => {
  const URL = storeAdministration6((state) => state.url);
  const [handleModal, setHandleModal] = useState(false);
  return (
    <div className="min-h-screen p-[4vw] bg-primary text-secondary font-normal relative">
      <div className="text-[clamp(1rem,3cqw,2rem)]">Structure</div>
      <div className="text-xl">{URL}</div>
      <div className="flex flex-col sm:flex-row gap-2 md:gap-8 justify-around mt-8 items-center">
        <button className=" border-2 border-secondary rounded flex  gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
        <button className="border-2 border-secondary rounded   flex gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
        <button className="border-2 border-secondary rounded   flex gap-1 md:gap-4 text-base items-center px-4 py-2">
          <Folder data-icon="folder" color="#00CCB4" className="" />
          <div>new folder 1</div>
        </button>
      </div>
      <div className="mt-4 md:mt-8 w-full text-center text-base md:text-2xl">
        assign / revoke assignment
      </div>
      <section className="text-xl border-2 border-secondary rounded mt-2 md:mt-8 bg-tertiary">
        <div className="flex gap-4 items-center bg-secondary text-black px-2">
          <div>Branch</div>
          <SquarePlus
            onClick={() => setHandleModal(!handleModal)}
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105 duration-150 "
          />
        </div>
        <div className="px-2 py-4 flex gap-8 ">
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
        </div>
      </section>
      <section className="text-xl border-2 border-secondary rounded mt-2 md:mt-8 bg-tertiary">
        <div className="flex gap-4 items-center bg-secondary text-black px-2">
          <div>Department</div>
          <SquarePlus
            onClick={() => setHandleModal(!handleModal)}
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105 duration-150 "
          />
        </div>
        <div className="px-2 py-4 flex gap-8 ">
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
        </div>
      </section>
      <section className="text-xl border-2 border-secondary rounded mt-2 md:mt-8 bg-tertiary">
        <div className="flex gap-4 items-center bg-secondary text-black px-2">
          <div>Users</div>
          <SquarePlus
            onClick={() => setHandleModal(!handleModal)}
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105 duration-150 "
          />
        </div>
        <div className="px-2 py-4 flex gap-8 ">
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
        </div>
      </section>
      <section className="text-xl border-2 border-secondary rounded mt-2 md:mt-8 bg-tertiary">
        <div className="flex gap-4 items-center bg-secondary text-black px-2">
          <div>Organization</div>
          <SquarePlus
            onClick={() => setHandleModal(!handleModal)}
            size={24}
            strokeWidth={2}
            className="cursor-pointer hover:scale-105 duration-150 "
          />
        </div>
        <div className="px-2 py-4 flex gap-8 ">
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
          </div>
          <div className="flex gap-4 border-2 rounded border-secondary w-fit px-4 py-1 bg-primary">
            <UserRound
              size={24}
              strokeWidth={2}
              className="cursor-pointer hover:scale-105 duration-150 "
            />
            <div>branch 1</div>
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
